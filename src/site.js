const FUNNEL_EVENTS = Object.freeze([
  "landing_view",
  "trial_start",
  "first_host",
  "first_remote_session",
  "first_handoff",
  "checkout",
  "paid"
]);
const funnelEventSet = new Set(FUNNEL_EVENTS);

function track(event) {
  if (!funnelEventSet.has(event)) return false;

  const payload = JSON.stringify({
    version: 1,
    event,
    path: window.location.pathname,
    client_timestamp_ms: Date.now()
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/v1/events", new Blob([payload], { type: "application/json" }));
  } else {
    fetch("/v1/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: payload,
      credentials: "same-origin",
      keepalive: true
    }).catch(() => {});
  }

  return true;
}

window.forgeFunnel = Object.freeze({ events: FUNNEL_EVENTS, track });

function initializeTheme() {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  let theme = "dark";

  try {
    const stored = localStorage.getItem("forge-theme");
    if (stored === "light" || stored === "dark") theme = stored;
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) theme = "light";
  } catch {}

  function apply(nextTheme) {
    root.dataset.theme = nextTheme;
    if (toggle) {
      toggle.setAttribute("aria-label", `Use ${nextTheme === "dark" ? "light" : "dark"} theme`);
      toggle.textContent = nextTheme === "dark" ? "☀" : "☾";
    }
  }

  apply(theme);
  toggle?.addEventListener("click", () => {
    theme = root.dataset.theme === "dark" ? "light" : "dark";
    apply(theme);
    try {
      localStorage.setItem("forge-theme", theme);
    } catch {}
  });
}

function initializeTabs() {
  for (const tabList of document.querySelectorAll("[data-tabs]")) {
    const tabs = [...tabList.querySelectorAll('[role="tab"]')];
    const panels = tabs
      .map((tab) => document.getElementById(tab.getAttribute("aria-controls")))
      .filter(Boolean);

    function activate(tab) {
      for (const item of tabs) {
        const active = item === tab;
        item.setAttribute("aria-selected", String(active));
        item.tabIndex = active ? 0 : -1;
      }
      for (const panel of panels) panel.hidden = panel.id !== tab.getAttribute("aria-controls");
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const offset = event.key === "ArrowRight" ? 1 : -1;
        const next = tabs[(index + offset + tabs.length) % tabs.length];
        activate(next);
        next.focus();
      });
    });
  }
}

function initializePlans() {
  const checkout = document.querySelector("[data-checkout]");
  const plans = [...document.querySelectorAll('input[name="plan"]')];
  if (!checkout || plans.length === 0) return;

  function update() {
    const plan = plans.find((item) => item.checked)?.value ?? "annual";
    checkout.href = `https://app.forge.adulari.dev/auth/github?intent=trial&plan=${encodeURIComponent(plan)}`;
    checkout.dataset.plan = plan;
  }

  plans.forEach((plan) => plan.addEventListener("change", update));
  update();
}

function initializeTracking() {
  if (document.body.dataset.funnelLanding === "true") track("landing_view");

  for (const element of document.querySelectorAll("[data-funnel-event]")) {
    element.addEventListener("click", () => track(element.dataset.funnelEvent));
  }
}

initializeTheme();
initializeTabs();
initializePlans();
initializeTracking();
