var SearchRenderer,
  sR = j(() => {
    "use strict";
    const RENDERER_LIGHT = "lightpanda";
    const RENDERER_CHROME = "chromium";
    let _activeRenderer = RENDERER_LIGHT;
    let _chromiumPath = null;
    async function fetchLightpanda(e, r) {
      try {
        let { lightpanda: n } = await import("@lightpanda/browser");
        let o = await n.fetch(e, { dump: true, dumpOptions: { type: "html" } });
        return o || "";
      } catch (n) {
        console.error("[Renderer] Lightpanda error:", n.message);
        return null;
      }
    }
    async function fetchChromium(e, r) {
      try {
        let { chromium: n } = await import("playwright");
        let o = await n.launch({ headless: true, executablePath: _chromiumPath || undefined });
        let s = await o.newPage();
        await s.goto(e, { waitUntil: "networkidle", timeout: (r || 15000) });
        let a = await s.content();
        await o.close();
        return a;
      } catch (n) {
        console.error("[Renderer] Chromium error:", n.message);
        return null;
      }
    }
    async function fetchWithRenderer(e, r) {
      let n = _activeRenderer === RENDERER_CHROME ? await fetchChromium(e, r) : await fetchLightpanda(e, r);
      if (n === null && _activeRenderer !== RENDERER_CHROME) {
        console.warn("[Renderer] Lightpanda failed, trying Chromium fallback...");
        n = await fetchChromium(e, r);
      }
      if (n === null) return { title: "", content: "", url: e };
      let o = "";
      let s = n.match(/<title>([^<]*)<\/title>/i);
      if (s) o = s[1];
      let a = n.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "").replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
      a = a.replace(/<[^>]*>/g, " ").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim().slice(0, 50000);
      return { title: o, content: a, url: e, rawHtml: n };
    }
    SearchRenderer = {
      RENDERER_LIGHT,
      RENDERER_CHROME,
      get activeRenderer() { return _activeRenderer; },
      setRenderer(e) {
        _activeRenderer = e;
      },
      setChromiumPath(e) {
        _chromiumPath = e;
      },
      async fetch(e, r) {
        return fetchWithRenderer(e, r);
      },
    };
  });
