var SearchProvider,
  searchProviderInit = j(() => {
    "use strict";
    SearchProvider = class {
      registry;
      orchestrator;
      pipeline;
      initialized;
      constructor() {
        this.initialized = false;
      }
      async init(e) {
        if (this.initialized) return;
        this.registry = new SearchCore.EngineRegistry();
        let r = [
          [EG_web, eG_web],
          [EG_science, eG_science],
          [EG_media, eG_media],
          [EG_it, eG_it],
          [EG_shop, eG_shop],
          [EG_social, eG_social],
          [EG_dev, eG_dev],
          [EG_news, eG_news],
          [EG_images, eG_images],
          [EG_misc, eG_misc],
          [EG_b2, eG_b2],
          [EG_b3, eG_b3],
          [EG_b4, eG_b4],
          [EG_b5, eG_b5],
          [EG_b6, eG_b6],
          [EG_b7, eG_b7],
          [EG_b8, eG_b8],
          [EG_final, eG_final],
        ];
        for (let [n, o] of r) {
          try {
            if (typeof o === "function") o();
          } catch (s) {
            console.error(`[Search] Engine init error:`, s);
          }
          if (n) this.registry.registerCategory(n);
        }
        let n = new SearchCore.NetworkClient({
          timeout: e?.timeout || 15000,
          proxy: e?.proxy || null,
        });
        this.orchestrator = new SearchCore.SearchOrchestrator(this.registry, n);
        this.pipeline = new SearchPipeline(e?.config || null);
        this.pipeline.setSearchApi(this);
        this.initialized = true;
        console.log(`[Search] Initialized with ${this.registry.all().length} engines`);
      }
      async webSearch(e, r, n) {
        if (!this.initialized) await this.init();
        let o = typeof r === "number" ? r : 10;
        try {
          let s = await this.orchestrator.search(
            new SearchCore.SearchQuery({
              query: e,
              categories: ["general", "web"],
              pageno: 1,
            }),
          );
          let a = s.filter((c) => c.title && c.title !== "Untitled" && c.url && c.url !== "No link").slice(0, o);
          let l = a.map((c) => ({
            title: c.title || "",
            url: c.url || "",
            content: c.content || c.snippet || "",
            snippet: c.snippet || c.content || "",
            date: c.date || null,
            engine: c.engine || "",
          }));
          return { results: l };
        } catch (s) {
          console.error("[SearchProvider] webSearch error:", s);
          return { results: [] };
        }
      }
      async webFetch(e, r) {
        try {
          if (SearchRenderer) {
            let n = await SearchRenderer.fetch(e, 10000);
            if (n?.content) return { title: n.title || "", content: n.content, url: e };
          }
          let n = await fetch(e, { signal: r, timeout: 10000 });
          let o = await n.text();
          let s = o.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim().slice(0, 50000);
          let a = "";
          let c = o.match(/<title>([^<]*)<\/title>/i);
          if (c) a = c[1];
          return { title: a, content: s, url: e };
        } catch (n) {
          console.error("[SearchProvider] webFetch error:", n);
          return { title: "", content: "", url: e };
        }
      }
      async fullSearch(e, r) {
        if (!this.initialized) await this.init();
        return this.pipeline.run(e, r || {});
      }
    }
    SearchProvider = SearchProvider;
  });
