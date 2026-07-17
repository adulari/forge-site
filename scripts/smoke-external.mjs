const targets = [
  "https://app.forge.adulari.dev/",
  "https://app.forge.adulari.dev/auth/github?intent=trial&plan=annual",
  "https://app.forge.adulari.dev/auth/github?intent=trial&plan=monthly",
  "https://app.forge.adulari.dev/billing"
];

const timeoutMs = 10_000;
const failures = [];

for (const target of targets) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(target, {
      method: "GET",
      redirect: "manual",
      signal: controller.signal,
      headers: { "user-agent": "forge-site-launch-smoke/1" }
    });
    if (response.status >= 400) failures.push(`${target} returned HTTP ${response.status}`);
    else console.log(`ok ${response.status} ${target}`);
  } catch (error) {
    failures.push(`${target} failed: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    clearTimeout(timeout);
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Verified ${targets.length} external CTA routes.`);
}
