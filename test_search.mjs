import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { readFileSync } from "fs";
import { createContext, runInContext } from "vm";
import { fetch } from "undici";
import crypto from "crypto";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log("=== Loading bundle ===");
  const bundle = readFileSync(path.join(__dirname, "bundle/iflow.js"), "utf8");

  const ctx = createContext({
    global: {},
    console,
    process,
    Buffer,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    URL,
    URLSearchParams,
    fetch,
    TextEncoder,
    TextDecoder,
    crypto,
    self: global,
    EventTarget: class {},
    Event: class {},
    Headers,
    Request,
    Response,
    AbortController,
    performance,
  });

  try {
    runInContext(bundle, ctx);
  } catch (e) {
    console.log("Bundle eval:", e.message.slice(0, 120));
  }

  console.log("\n=== Module globals ===");
  const names = [
    "SearchCore", "SearchProvider", "SearchPipeline", "SearchRenderer",
    "eG_web", "eG_science", "eG_media", "eG_it",
    "eG_shop", "eG_social", "eG_dev", "eG_news", "eG_images", "eG_misc",
    "eG_b2", "eG_b3", "eG_b4", "eG_b5", "eG_b6", "eG_b7", "eG_b8",
    "EG_web", "EG_science", "EG_media", "EG_it", "EG_misc"
  ];
  for (const n of names) {
    const v = ctx[n];
    if (typeof v === "undefined") console.log(`  ${n}: UNDEFINED`);
    else if (typeof v === "function") console.log(`  ${n}: fn ✓`);
    else if (typeof v === "object") console.log(`  ${n}: object ${Object.keys(v||{}).length} keys ✓`);
    else console.log(`  ${n}: ${typeof v}`);
  }

  console.log("\n=== Init SearchProvider ===");
  if (ctx.SearchCore?.SearchInit) {
    ctx.SearchCore.SearchInit.init({ setSearchProvider: () => {} });
    const p = ctx.SearchCore.SearchInit.getInstance();
    if (p) {
      const count = p.registry?.all()?.length || 0;
      console.log(`  Engines registered: ${count}`);
      if (count > 0) {
        const r = await p.webSearch("hello world", 3);
        console.log(`  Search results: ${r.results?.length || 0}`);
        if (r.results?.length > 0) console.log("  First:", JSON.stringify(r.results[0]).slice(0, 250));
      }
    } else {
      console.log("  Provider is NULL");
    }
  } else {
    console.log("  SearchCore missing");
  }

  console.log("\n=== Done ===");
}

main().catch(console.error);
