var SearchRenderer,
  searchRendererInit = j(() => {
    "use strict";
    var RENDERER = { CHROME: "chromium", LIGHT: "lightpanda", HAPPY: "happy-dom" };
    var _active = RENDERER.LIGHT;
    var _chromiumPath = null;
    // Auto-detect: Windows → happy-dom (no native binary needed)
    if (process.platform === "win32") _active = RENDERER.HAPPY;
    try {
      var fs = require("fs"), path = require("path");
      var home = process.env.HOME || process.env.USERPROFILE || "";
      var cfg = path.join(home, ".iflow-ce", "settings.json");
      if (fs.existsSync(cfg)) {
        var s = JSON.parse(fs.readFileSync(cfg, "utf8"));
        if (s.renderer === RENDERER.CHROME) _active = RENDERER.CHROME;
        else if (s.renderer === RENDERER.HAPPY) _active = RENDERER.HAPPY;
      }
    } catch (e) {}
    async function fetchLightpanda(e, r) {
      try {
        var n = await import("@lightpanda/browser");
        var o = await n.lightpanda.fetch(e, { dump: true, dumpOptions: { type: "html" } });
        return o || "";
      } catch (n) { return null; }
    }
    async function fetchChromium(e, r) {
      try {
        var n = await import("playwright");
        var o = await n.chromium.launch({ headless: true, executablePath: _chromiumPath || void 0 });
        var s = await o.newPage();
        await s.goto(e, { waitUntil: "networkidle", timeout: (r || 15000) });
        var a = await s.content();
        await o.close();
        return a;
      } catch (n) { return null; }
    }
    async function fetchHappyDom(e, r) {
      try {
        var n = await import("happy-dom");
        var o = require("undici").fetch || globalThis.fetch;
        var s = await o(e, { signal: AbortSignal.timeout(r || 10000) });
        var a = await s.text();
        var u = new n.Window({ url: e });
        u.document.documentElement.innerHTML = a;
        // Execute inline scripts (simple ones)
        try { u.document.querySelectorAll("script:not([src])").forEach(function (c) { eval.call(u, c.textContent || ""); }); } catch (c) {}
        return u.document.documentElement.outerHTML || a;
      } catch (n) { return null; }
    }
    async function fetchHttp(e, r) {
      try {
        var n = require("undici").fetch || globalThis.fetch;
        var o = await n(e, { signal: AbortSignal.timeout(r || 10000) });
        return await o.text();
      } catch (n) { return null; }
    }
    function extractContent(e) {
      if (!e) return { title: "", content: "", url: "" };
      var r = "";
      var n = e.match(/<title>([^<]*)<\/title>/i);
      if (n) r = n[1];
      var o = e.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
               .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
               .replace(/<[^>]*>/g, " ")
               .replace(/&[^;]+;/g, " ")
               .replace(/\s+/g, " ").trim().slice(0, 50000);
      return { title: r, content: o, rawHtml: e };
    }
    async function fetchWithFallback(e, r) {
      var s = process.platform === "win32" ? RENDERER.HAPPY : _active;
      var t = r || 10000;
      // Try preferred renderer first
      var o = null;
      if (s === RENDERER.CHROME) o = await fetchChromium(e, t);
      else if (s === RENDERER.LIGHT) o = await fetchLightpanda(e, t);
      else o = await fetchHappyDom(e, t);
      if (o) return extractContent(o);
      // Fallback chain
      if (s !== RENDERER.LIGHT) { o = await fetchLightpanda(e, t); if (o) return extractContent(o); }
      if (s !== RENDERER.CHROME && s !== RENDERER.LIGHT) { o = await fetchChromium(e, t); if (o) return extractContent(o); }
      if (s !== RENDERER.HAPPY) { o = await fetchHappyDom(e, t); if (o) return extractContent(o); }
      // Last resort: plain HTTP
      o = await fetchHttp(e, t);
      return o ? extractContent(o) : { title: "", content: "", url: e };
    }
    SearchRenderer = {
      RENDERER_CHROME: RENDERER.CHROME,
      RENDERER_LIGHT: RENDERER.LIGHT,
      RENDERER_HAPPY: RENDERER.HAPPY,
      get activeRenderer() {
        if (_active === RENDERER.CHROME) return RENDERER.CHROME;
        if (_active === RENDERER.HAPPY) return RENDERER.HAPPY;
        return RENDERER.LIGHT;
      },
      setRenderer(e) {
        if (e === RENDERER.CHROME || e === RENDERER.HAPPY) _active = e;
        else _active = RENDERER.LIGHT;
        if (typeof ConfigModel?.set == "function") ConfigModel.set("renderer", _active);
      },
      setChromiumPath(e) { _chromiumPath = e; },
      async fetch(e, r) { return fetchWithFallback(e, r); },
    };
  });
