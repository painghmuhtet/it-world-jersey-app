// Builds the web version of the app UI into dist/ (served at https://app.itworldjersey.store).
// Usage: node scripts/build-web.mjs   (Node 18+)
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "web", "page.js"), "utf8");

// web/page.js is an ES module; load it from a data URL so no package.json "type" change is needed.
const mod = await import(
  "data:text/javascript;base64," + Buffer.from(source).toString("base64")
);

const out = join(root, "dist");
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "index.html"), mod.html);
writeFileSync(join(out, "CNAME"), "app.itworldjersey.store\n");
writeFileSync(join(out, ".nojekyll"), "");
console.log("Built dist/index.html (" + mod.html.length + " bytes)");
