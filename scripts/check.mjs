import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, extname, join, normalize, resolve } from "node:path";

const root = resolve(import.meta.dirname, "../src");
const errors = [];

async function collect(directory) {
  const paths = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...(await collect(path)));
    else paths.push(path);
  }
  return paths;
}

function count(source, expression) {
  return [...source.matchAll(expression)].length;
}

function report(file, message) {
  errors.push(`${file}: ${message}`);
}

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function localTarget(href, file) {
  const withoutHash = href.split("#", 1)[0];
  if (!withoutHash) return file;
  const relative = withoutHash.startsWith("/")
    ? join(root, withoutHash)
    : resolve(dirname(file), withoutHash);
  if (extname(relative)) return normalize(relative);
  return join(relative, "index.html");
}

function luminance(hex) {
  const channels = hex.match(/[a-f\d]{2}/gi).map((value) => Number.parseInt(value, 16) / 255);
  const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrast(foreground, background) {
  const first = luminance(foreground);
  const second = luminance(background);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

const files = await collect(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const relative = file.slice(root.length + 1);
  const source = await readFile(file, "utf8");
  const isErrorPage = relative === "404.html";

  if (!/^<!doctype html>/i.test(source)) report(relative, "missing HTML doctype");
  if (!/<html[^>]+lang="en"/i.test(source)) report(relative, "missing document language");
  if (!/<meta name="viewport"/i.test(source)) report(relative, "missing viewport metadata");
  if (!/<meta name="description" content="[^"]+"/i.test(source)) report(relative, "missing description metadata");
  if (!isErrorPage && !/<link rel="canonical" href="https:\/\/forge\.adulari\.dev\//i.test(source)) report(relative, "missing canonical URL");
  if (!isErrorPage && !/<meta property="og:title"/i.test(source)) report(relative, "missing Open Graph metadata");
  if (count(source, /<h1(?:\s|>)/gi) !== 1) report(relative, "must contain exactly one h1");
  if (count(source, /<main(?:\s|>)/gi) !== 1) report(relative, "must contain exactly one main landmark");
  if (!/<a class="skip-link" href="#main">/i.test(source)) report(relative, "missing skip link");

  for (const image of source.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]*"/i.test(image[0])) report(relative, `image missing alt: ${image[0]}`);
    if (!/\bwidth="\d+"/i.test(image[0]) || !/\bheight="\d+"/i.test(image[0])) report(relative, "image missing intrinsic dimensions");
  }

  for (const button of source.matchAll(/<button\b[^>]*>/gi)) {
    if (!/\btype="button"/i.test(button[0])) report(relative, `button missing type=button: ${button[0]}`);
  }

  for (const details of source.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/gi)) {
    if (!/<summary\b/i.test(details[1])) report(relative, "details element missing summary");
  }

  const ids = new Set([...source.matchAll(/\bid="([^"]+)"/gi)].map((match) => match[1]));
  if (ids.size !== count(source, /\bid="[^"]+"/gi)) report(relative, "contains duplicate ids");

  for (const link of source.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/gi)) {
    const href = link[1];
    if (/^(https?:|mailto:|tel:)/i.test(href)) continue;
    if (href.startsWith("#")) {
      if (href.length > 1 && !ids.has(href.slice(1))) report(relative, `broken page fragment ${href}`);
      continue;
    }
    const target = localTarget(href, file);
    if (!(await exists(target))) report(relative, `broken internal link ${href}`);
  }

  for (const event of source.matchAll(/data-funnel-event="([^"]+)"/g)) {
    if (!["landing_view", "trial_start", "first_host", "first_remote_session", "first_handoff", "checkout", "paid"].includes(event[1])) {
      report(relative, `unapproved funnel event ${event[1]}`);
    }
  }
}

const script = await readFile(join(root, "site.js"), "utf8");
const expectedEvents = ["landing_view", "trial_start", "first_host", "first_remote_session", "first_handoff", "checkout", "paid"];
for (const event of expectedEvents) if (!script.includes(`"${event}"`)) report("site.js", `missing funnel event ${event}`);
for (const forbidden of ["gtag(", "fbq(", "mixpanel", "segment.com", "hotjar", "fullstory", "document.title", "document.referrer", "location.search"]) {
  if (script.toLowerCase().includes(forbidden.toLowerCase())) report("site.js", `forbidden tracking input or vendor: ${forbidden}`);
}

const payloadMatch = script.match(/const payload = JSON\.stringify\(\{([\s\S]*?)\}\);/);
if (!payloadMatch) report("site.js", "analytics payload is not statically inspectable");
else {
  const payload = payloadMatch[1];
  for (const allowed of ["event", "path", "occurred_at"]) if (!payload.includes(allowed)) report("site.js", `analytics payload missing ${allowed}`);
  if (/properties|query|referrer|title|content|filename|prompt|command|diff|transcript/i.test(payload)) report("site.js", "analytics payload contains a prohibited field");
}

for (const [name, foreground, background, minimum] of [
  ["dark body", "#f2e9dc", "#0a0812", 4.5],
  ["dark muted", "#a8adc0", "#0a0812", 4.5],
  ["dark primary button", "#12080a", "#ff8a30", 4.5],
  ["light body", "#211f1b", "#f1eee8", 4.5],
  ["light muted", "#57544c", "#f1eee8", 4.5],
  ["light primary button", "#fffaf2", "#b65108", 4.5]
]) {
  const ratio = contrast(foreground, background);
  if (ratio < minimum) report("styles.css", `${name} contrast ${ratio.toFixed(2)} is below ${minimum}`);
}

if (errors.length > 0) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles.length} pages, internal links, metadata, accessibility basics, analytics, and core contrast pairs.`);
}

