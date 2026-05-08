var SearchServer,
  searchServerInit = j(() => {
    "use strict";
    const http = require("http");
    let _app = null;
    let _server = null;
    let _port = 0;
    let _registry = null;
    let _orchestrator = null;
    function searxngJson(e, r) {
      let n = r.results || r;
      return {
        query: e.query || e,
        results: (n || []).map((o) => ({
          title: o.title || "",
          url: o.url || "",
          content: o.content || o.snippet || "",
          engine: o.engine || "internal",
          category: o.category || "general",
          publishedDate: o.date || null,
          thumbnail: o.thumbnail || null,
        })),
        number_of_results: (n || []).length,
        answers: [],
        corrections: [],
        infoboxes: [],
        suggestions: [],
        unresponsive_engines: [],
      };
    }
    function parseQuery(e) {
      let r = new URL(e, "http://localhost");
      return {
        q: r.searchParams.get("q") || "",
        format: r.searchParams.get("format") || "json",
        categories: (r.searchParams.get("categories") || "general").split(","),
        pageno: parseInt(r.searchParams.get("pageno") || "1", 10),
        language: r.searchParams.get("language") || "all",
        time_range: r.searchParams.get("time_range") || null,
        safesearch: parseInt(r.searchParams.get("safesearch") || "0", 10),
      };
    }
    async function handleSearch(e, r) {
      let n = parseQuery(e);
      if (!n.q) return r.status(400).json({ error: "Missing query parameter 'q'" });
      if (!_registry) return r.status(503).json({ error: "Search engine not ready" });
      try {
        let o = new SearchCore.SearchQuery({
          query: n.q,
          categories: n.categories,
          pageno: n.pageno,
          timeRange: n.time_range,
          safesearch: n.safesearch,
          language: n.language,
        });
        let s = _orchestrator ? await _orchestrator.search(o) : _registry.searchAll(o);
        let a = searxngJson(n.q, s);
        if (n.format === "json") r.json(a);
        else if (n.format === "csv") {
          let c = "title,url,content,engine\n";
          c += (a.results || []).map((l) => `"${(l.title||"").replace(/"/g,'""')}","${l.url}","${(l.content||"").replace(/"/g,'""').slice(0,200)}","${l.engine}"`).join("\n");
          r.type("text/csv").send(c);
        } else r.json(a);
      } catch (o) {
        console.error("[SearchServer] Search error:", o);
        r.status(500).json({ error: o.message });
      }
    }
    SearchServer = {
      get port() { return _port; },
      get url() { return _port ? `http://localhost:${_port}` : null; },
      async start(e) {
        if (_server) return;
        _registry = e?.registry || null;
        _orchestrator = e?.orchestrator || null;
        let r = e?.port || 0;
        return new Promise((n, o) => {
          let s = require("express")();
          s.get("/search", (a, c) => handleSearch(a, c));
          s.get("/health", (a, c) => c.json({ status: "ok", engines: _registry?.all()?.length || 0, port: _port }));
          s.get("/engines", (a, c) => {
            let l = _registry?.all() || [];
            c.json({ engines: l.map((u) => ({ name: u.name, categories: u.categories, shortcut: u.shortcut })) });
          });
          _server = s.listen(r, "127.0.0.1", () => {
            _port = _server.address().port;
            console.log(`[SearchServer] Listening on http://localhost:${_port}`);
            n();
          });
          _server.on("error", (a) => { console.error("[SearchServer] Failed:", a); o(a); });
        });
      },
      async stop() {
        if (!_server) return;
        await new Promise((e) => _server.close(e));
        _server = null; _port = 0;
        console.log("[SearchServer] Stopped");
      },
    };
  });
