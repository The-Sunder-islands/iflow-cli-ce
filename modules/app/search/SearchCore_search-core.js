var SearchCore,
  sC = j(() => {
    "use strict";
    const CRLF = "\r\n";
    class EngineResult {
      title;
      url;
      content;
      snippet;
      date;
      engine;
      category;
      thumbnail;
      imgSrc;
      author;
      source;
      constructor(e) {
        Object.assign(this, e);
      }
    }
    class SearchQuery {
      query;
      categories;
      engines;
      pageno;
      timeRange;
      safesearch;
      language;
      constructor(e) {
        this.query = e.query;
        this.categories = e.categories || ["general"];
        this.engines = e.engines || [];
        this.pageno = e.pageno || 1;
        this.timeRange = e.timeRange || null;
        this.safesearch = e.safesearch || 0;
        this.language = e.language || "all";
      }
    }
    class SearchParams {
      url;
      method;
      headers;
      data;
      cookies;
      softMaxRedirects;
      raiseForStatus;
      constructor() {
        this.method = "GET";
        this.headers = {};
        this.cookies = {};
        this.softMaxRedirects = 5;
        this.raiseForStatus = true;
      }
    }
    class SearchResponse {
      status;
      headers;
      text;
      json;
      finalUrl;
      constructor(e) {
        Object.assign(this, e);
      }
    }
    class EngineRegistry {
      engines = new Map();
      categories = new Map();
      shortcuts = new Map();
      register(e) {
        this.engines.set(e.name, e);
        for (let r of e.categories || ["other"]) {
          if (!this.categories.has(r)) this.categories.set(r, []);
          this.categories.get(r).push(e);
        }
        if (e.shortcut) this.shortcuts.set(e.shortcut, e.name);
      }
      get(e) {
        return this.engines.get(e);
      }
      listByCategory(e) {
        return this.categories.get(e) || [];
      }
      all() {
        return Array.from(this.engines.values());
      }
      resolveShortcut(e) {
        let r = this.shortcuts.get(e);
        return r ? this.engines.get(r) : null;
      }
      registerAll(e) {
        for (let r of Object.values(e)) if (r?.name) this.register(r);
      }
      registerCategory(e) {
        if (e && typeof e === "object") for (let r of Object.values(e)) if (r?.name) this.register(r);
      }
    }
    class NetworkClient {
      defaults;
      constructor(e) {
        this.defaults = {
          timeout: e?.timeout || 15000,
          userAgent: e?.userAgent || "Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0",
          proxy: e?.proxy || null,
          headers: e?.headers || {},
        };
      }
      async request(e) {
        let r = e.url,
          n = e.method || "GET",
          o = { ...this.defaults.headers, ...e.headers },
          s = { method: n, headers: o, signal: e.signal || null };
        if (e.data) s.body = typeof e.data === "string" ? e.data : JSON.stringify(e.data);
        if (this.defaults.proxy) {
          let a = new URL(this.defaults.proxy);
          s.duplex = "half";
        }
        s.headers["User-Agent"] ||= this.defaults.userAgent;
        let c = await fetch(r, s),
          l = await c.text(),
          u = null;
        try {
          u = JSON.parse(l);
        } catch {}
        return new SearchResponse({
          status: c.status,
          headers: Object.fromEntries(c.headers.entries()),
          text: l,
          json: u,
          finalUrl: c.url,
        });
      }
      async get(e, r) {
        return this.request({ ...r, url: e, method: "GET" });
      }
      async post(e, r, n) {
        return this.request({ ...n, url: e, method: "POST", data: r });
      }
    }
    class SearchOrchestrator {
      registry;
      network;
      constructor(e, r) {
        this.registry = e;
        this.network = r;
      }
      async search(e) {
        let r = [];
        if (e.engines.length > 0) {
          for (let n of e.engines) {
            let o = this.registry.get(n);
            if (o) r.push(o);
          }
        } else {
          for (let n of e.categories) {
            let o = this.registry.listByCategory(n);
            r.push(...o);
          }
        }
        let n = r.map((o) => this.executeEngine(o, e));
        let s = await Promise.allSettled(n);
        let a = [];
        for (let c of s) if (c.status === "fulfilled") a.push(...c.value);
        return a;
      }
      async executeEngine(e, r) {
        try {
          let n = await e.request(r.query, new SearchParams(), r);
          if (!n || !n.url) return [];
          let o = await this.network.request(n);
          let s = await e.response(o, r);
          return s || [];
        } catch (t) {
          console.error(`[Engine ${e.name}] Error:`, t.message);
          return [];
        }
      }
    }
    SearchCore = {
      EngineResult,
      SearchQuery,
      SearchParams,
      SearchResponse,
      EngineRegistry,
      NetworkClient,
      SearchOrchestrator,
      SearchInit: {
        _provider: null,
        getInstance() {
          return this._provider;
        },
        init(e) {
          if (this._provider) return;
          let r = new SearchProvider();
          this._provider = r;
          if (e?.setSearchProvider) e.setSearchProvider(r);
        },
      },
    };
  });
