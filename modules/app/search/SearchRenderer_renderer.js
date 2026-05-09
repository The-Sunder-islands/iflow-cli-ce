var SearchRenderer,
  searchRendererInit = j(() => {
    "use strict";
    var _backends = [];
    var _activeId = null;
    var _chromiumPath = null;
    function register(e) { _backends.push(e); if (!_activeId) _activeId = e.id; }
    function find(e) { for (var r = 0; r < _backends.length; r++) if (_backends[r].id === e) return _backends[r]; return null; }
    // Load persisted renderer
    try {
      var fs = require("fs"), path = require("path");
      var home = process.env.HOME || process.env.USERPROFILE || "";
      var cfg = path.join(home, ".iflow-ce", "settings.json");
      if (fs.existsSync(cfg)) {
        var s = JSON.parse(fs.readFileSync(cfg, "utf8"));
        if (s.renderer) _activeId = s.renderer;
      }
    } catch (e) {}
    // ── Backend: Lightpanda ──
    register({
      id: "lightpanda",
      label: "Lightpanda",
      available: process.platform !== "win32",
      async fetch(e, r) {
        try {
          var n = await import("@lightpanda/browser");
          var o = await n.lightpanda.fetch(e, { dump: true, dumpOptions: { type: "html" } });
          return o || null;
        } catch (n) { return null; }
      },
    });
    // ── Backend: Chromium ──
    register({
      id: "chromium",
      label: "Chromium",
      available: !0,
      async fetch(e, r) {
        try {
          var n = await import("playwright");
          var o = await n.chromium.launch({ headless: true, executablePath: _chromiumPath || void 0 });
          var s = await o.newPage();
          await s.goto(e, { waitUntil: "networkidle", timeout: (r || 15000) });
          var a = await s.content();
          await o.close();
          return a;
        } catch (n) { return null; }
      },
    });
    // ── Backend: happy-dom ──
    register({
      id: "happy-dom",
      label: "HappyDOM",
      available: !0,
      async fetch(e, r) {
        try {
          var n = await import("happy-dom");
          var o = (require("undici").fetch || globalThis.fetch);
          var s = await o(e, { signal: AbortSignal.timeout(r || 10000) });
          var a = await s.text();
          var u = new n.Window({ url: e });
          u.document.documentElement.innerHTML = a;
          // Attempt simple inline script execution
          try { u.document.querySelectorAll("script:not([src])").forEach(function (c) { eval.call(u, c.textContent || ""); }); } catch (c) {}
          return u.document.documentElement.outerHTML || a;
        } catch (n) { return null; }
      },
    });
    // ── Backend: Plain HTTP (always last fallback) ──
    register({
      id: "http",
      label: "HTTP",
      available: !0,
      async fetch(e, r) {
        try {
          var n = (require("undici").fetch || globalThis.fetch);
          var o = await n(e, { signal: AbortSignal.timeout(r || 10000) });
          return await o.text();
        } catch (n) { return null; }
      },
    });
    // ── Backend: browser39 (Rust headless browser) ──
    register({
      id: "browser39",
      label: "browser39",
      available: !0,
      async fetch(e, r) {
        try {
          var cp = require("child_process");
          var o = await new Promise(function (resolve, reject) {
            cp.exec("npx --yes browser39 fetch " + JSON.stringify(e) + " 2>&1", { maxBuffer: 5 * 1024 * 1024, timeout: r || 15000 }, function (err, stdout) {
              if (err) { resolve(null); return; }
              resolve(stdout || null);
            });
          });
          return o;
        } catch (n) { return null; }
      },
    });
    // Auto-detect best default for platform
    if (!_activeId || !find(_activeId)) {
      if (process.platform === "win32") _activeId = "happy-dom";
      else _activeId = "lightpanda";
    }
    function extractContent(e) {
      if (!e) return { title: "", content: "", url: "" };
      var r = "", n = e.match(/<title>([^<]*)<\/title>/i);
      if (n) r = n[1];
      var o = e.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
               .replace(/<[^>]*>/g, " ").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim().slice(0, 50000);
      return { title: r, content: o, rawHtml: e };
    }
    async function fetchWithFallback(e, r) {
      var t = r || 10000;
      var s = find(_activeId);
      // Try active backend first
      if (s) { var o = await s.fetch(e, t); if (o) return extractContent(o); }
      // Try all other backends in order (except http which is last resort)
      for (var a = 0; a < _backends.length; a++) {
        var u = _backends[a];
        if (u.id === _activeId || u.id === "http") continue;
        var c = await u.fetch(e, t);
        if (c) return extractContent(c);
      }
      // Last resort: HTTP
      var l = find("http");
      if (l) { var f = await l.fetch(e, t); if (f) return extractContent(f); }
      return { title: "", content: "", url: e };
    }
    SearchRenderer = {
      get backends() { return _backends.map(function (e) { return { id: e.id, label: e.label, available: e.available }; }); },
      get activeRenderer() { return _activeId; },
      setRenderer(e) { if (find(e)) { _activeId = e; if (typeof ConfigModel?.set == "function") ConfigModel.set("renderer", e); } },
      setChromiumPath(e) { _chromiumPath = e; },
      async fetch(e, r) { return fetchWithFallback(e, r); },
    };
  });
