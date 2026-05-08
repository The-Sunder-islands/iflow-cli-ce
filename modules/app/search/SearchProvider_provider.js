var SearchProvider,
  sR = j(() => {
    "use strict";
    class SearchProvider {
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
        for (let r of [
          EG_web,
          EG_science,
          EG_media,
          EG_it,
          EG_shop,
          EG_social,
          EG_dev,
          EG_news,
          EG_images,
          EG_misc,
        ])
          if (r) this.registry.registerCategory(r);
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
          return { results: s.slice(0, o) };
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
