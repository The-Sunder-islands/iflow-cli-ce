var EG_dev = {},
  eG_dev = j(() => {
    "use strict";

    function eb(text, start, end) {
      let i = text.indexOf(start);
      if (i === -1) return null;
      i += start.length;
      let j = text.indexOf(end, i);
      return j === -1 ? null : text.slice(i, j);
    }

    function st(s) {
      return s ? s.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim() : "";
    }

    EG_dev.npm = {
      name: "npm",
      categories: ["it", "packages"],
      shortcut: null,
      paging: !0,
      async request(query, params, sq) {
        let args = new URLSearchParams({
          from: ((sq.pageno || 1) - 1) * 25,
          q: query,
          size: 25,
        });
        params.url = "https://api.npms.io/v2/search?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.results) return results;
        for (let entry of resp.json.results) {
          let pkg = entry.package;
          let tags = [...Object.keys(entry.flags || {}), ...(pkg.keywords || [])];
          results.push({
            url: pkg.links?.npm,
            title: pkg.name,
            packageName: pkg.name,
            content: pkg.description || "",
            version: pkg.version,
            maintainer: pkg.author?.name,
            publishedDate: pkg.date ? new Date(pkg.date) : null,
            tags: tags,
            homepage: pkg.links?.homepage,
            sourceCodeUrl: pkg.links?.repository,
          });
        }
        return results;
      },
    };

    EG_dev.crates = {
      name: "crates",
      categories: ["it", "packages", "cargo"],
      shortcut: null,
      paging: !0,
      async request(query, params, sq) {
        let args = new URLSearchParams({ page: sq.pageno || 1, q: query, per_page: 10 });
        params.url = "https://crates.io/api/v1/crates?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.crates) return results;
        for (let pkg of resp.json.crates) {
          let links = {};
          let linkedTerms = { homepage: "Project homepage", documentation: "Documentation", repository: "Source code" };
          for (let [k, v] of Object.entries(linkedTerms)) {
            if (pkg[k]) links[v] = pkg[k];
          }
          results.push({
            url: "https://crates.io/crates/" + pkg.name,
            title: pkg.name,
            packageName: pkg.name,
            tags: pkg.keywords,
            content: pkg.description,
            version: pkg.newest_version || pkg.max_version || pkg.max_stable_version,
            publishedDate: pkg.updated_at ? new Date(pkg.updated_at) : null,
            links: links,
          });
        }
        return results;
      },
    };

    EG_dev.pkg_go_dev = {
      name: "pkg_go_dev",
      categories: ["packages", "it"],
      shortcut: null,
      paging: !1,
      base_url: "https://pkg.go.dev",
      async request(query, params, sq) {
        let args = new URLSearchParams({ q: query, m: "package", limit: 50 });
        params.url = "https://pkg.go.dev/search?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [],
          h = resp.text || "",
          snippetRe = /<div[^>]*class="[^"]*SearchSnippet[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi,
          m;
        while ((m = snippetRe.exec(h)) !== null) {
          let blk = m[1],
            urlM = blk.match(/<a[^>]*href="([^"]*)"[^>]*>/),
            titleM = blk.match(/<h2[^>]*>.*?<a[^>]*>([\s\S]*?)<\/a>/),
            spanM = blk.match(/<span[^>]*>\(([^)]*)\)/),
            versionM = blk.match(/class="[^"]*SearchSnippet-infoLabel[^"]*"[\s\S]*?<strong[^>]*>([^<]*)<\/strong>/),
            updatedM = blk.match(/snippet-published[\s\S]*?<strong[^>]*>([^<]*)<\/strong>/),
            contentM = blk.match(/class="SearchSnippet-synopsis"[^>]*>([\s\S]*?)<\/p>/),
            popularityM = blk.match(/SearchSnippet-infoLabel[\s\S]*?<a[^>]*>.*?<strong[^>]*>([^<]*)<\/strong>/),
            licenseM = blk.match(/snippet-license[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/);
          let url = urlM ? "https://pkg.go.dev" + urlM[1] : "",
            title = titleM ? st(titleM[1]) : "",
            pkgName = spanM ? spanM[1] : title,
            version = versionM ? versionM[1].trim() : "",
            updated = updatedM ? updatedM[1].trim() : "",
            content = contentM ? st(contentM[1]) : "",
            popularity = popularityM ? parseInt(popularityM[1].replace(/,/g, ""), 10) : null,
            licenseName = licenseM ? licenseM[2] : "",
            licenseUrl = licenseM ? "https://pkg.go.dev" + licenseM[1] : "";
          if (!title) continue;
          results.push({
            url: url,
            title: title,
            packageName: pkgName,
            content: content,
            version: version,
            popularity: popularity,
            licenseName: licenseName,
            licenseUrl: licenseUrl,
            publishedDate: updated ? new Date(updated) : null,
          });
        }
        return results;
      },
    };

    EG_dev.metacpan = {
      name: "metacpan",
      categories: ["it", "packages"],
      shortcut: "cpan",
      paging: !0,
      number_of_results: 20,
      async request(query, params, sq) {
        let queryData = {
          query: {
            multi_match: {
              type: "most_fields",
              fields: ["documentation", "documentation.*"],
              analyzer: "camelcase",
              query: query,
            },
          },
          filter: {
            bool: {
              must: [
                { exists: { field: "documentation" } },
                { term: { status: "latest" } },
                { term: { indexed: 1 } },
                { term: { authorized: 1 } },
              ],
            },
          },
          sort: [{ _score: { order: "desc" } }, { date: { order: "desc" } }],
          _source: ["documentation", "abstract"],
          size: 20,
          from: ((sq.pageno || 1) - 1) * 20,
        };
        params.url = "https://fastapi.metacpan.org/v1/file/_search";
        params.method = "POST";
        params.headers["Content-Type"] = "application/json";
        params.data = JSON.stringify(queryData);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.hits || !resp.json.hits.hits) return results;
        for (let hit of resp.json.hits.hits) {
          let fields = hit._source;
          let module = fields.documentation;
          results.push({
            url: "https://metacpan.org/pod/" + module,
            title: module,
            content: fields.abstract || "",
          });
        }
        return results;
      },
    };

    EG_dev.rubygems = {
      name: "rubygems",
      categories: ["it", "packages"],
      shortcut: "gem",
      paging: !1,
      async request(query, params, sq) {
        let args = new URLSearchParams({ query: query });
        params.url = "https://rubygems.org/api/v1/search.json?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!Array.isArray(resp.json)) return results;
        for (let gem of resp.json) {
          results.push({
            url: gem.project_uri,
            title: gem.name,
            packageName: gem.name,
            content: gem.info || "",
            version: gem.version,
            authors: gem.authors,
            publishedDate: gem.version_created_at ? new Date(gem.version_created_at) : null,
            homepage: gem.homepage_uri,
            sourceCodeUrl: gem.source_code_uri,
            licenseName: Array.isArray(gem.licenses) ? gem.licenses.join(", ") : gem.licenses || "",
          });
        }
        return results;
      },
    };

    EG_dev.elasticsearch = {
      name: "elasticsearch",
      categories: ["general"],
      shortcut: null,
      paging: !0,
      base_url: "http://localhost:9200",
      username: "",
      password: "",
      index: "",
      query_type: "match",
      custom_query_json: {},
      show_metadata: !1,
      page_size: 10,
      async request(query, params, sq) {
        if (!this.index) return params;
        if (this.username && this.password) {
          params.headers["Authorization"] = "Basic " + btoa(this.username + ":" + this.password);
        }
        let args = { from: ((sq.pageno || 1) - 1) * this.page_size, size: this.page_size };
        let queryBody = this._buildQuery(query);
        Object.assign(queryBody, args);
        params.url = this.base_url + "/" + this.index + "/_search";
        params.method = "GET";
        params.headers["Content-Type"] = "application/json";
        params.data = JSON.stringify(queryBody);
        return params;
      },
      _buildQuery(query) {
        let qt = this.query_type;
        if (qt === "match") {
          let sep = query.indexOf(":");
          if (sep === -1) return { query: { match: { _all: { query: query } } } };
          let key = query.slice(0, sep),
            value = query.slice(sep + 1);
          return { query: { match: { [key]: { query: value } } } };
        }
        if (qt === "simple_query_string") {
          return { query: { simple_query_string: { query: query } } };
        }
        if (qt === "term") {
          let sep = query.indexOf(":");
          if (sep === -1) return { query: { term: { _all: query } } };
          let key = query.slice(0, sep),
            value = query.slice(sep + 1);
          return { query: { term: { [key]: value } } };
        }
        if (qt === "terms") {
          let sep = query.indexOf(":");
          if (sep === -1) return { query: { terms: { _all: [query] } } };
          let key = query.slice(0, sep),
            values = query.slice(sep + 1).split(",");
          return { query: { terms: { [key]: values } } };
        }
        if (qt === "custom") {
          let cq = JSON.parse(JSON.stringify(this.custom_query_json));
          let sep = query.indexOf(":");
          let key = sep === -1 ? query : query.slice(0, sep),
            value = sep === -1 ? "" : query.slice(sep + 1);
          let result = {};
          for (let [k, v] of Object.entries(cq)) {
            let nk = k === "{{KEY}}" ? key : k;
            let nv = v === "{{VALUE}}" ? value : v;
            result[nk] = nv;
          }
          return result;
        }
        return {};
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json) return results;
        if (resp.json.error) return results;
        if (!resp.json.hits || !resp.json.hits.hits) return results;
        for (let hit of resp.json.hits.hits) {
          let kvmap = {};
          for (let [key, value] of Object.entries(hit._source)) {
            kvmap[key] = String(value);
          }
          if (this.show_metadata) {
            kvmap._metadata = JSON.stringify({ index: hit._index, id: hit._id, score: hit._score });
          }
          results.push({
            title: kvmap.title || kvmap.name || kvmap._id || "",
            url: kvmap.url || kvmap.link || "",
            content: Object.entries(kvmap)
              .filter(([k]) => !k.startsWith("_"))
              .map(([k, v]) => k + ": " + v)
              .join(" | "),
          });
        }
        return results;
      },
    };

    EG_dev.solr = {
      name: "solr",
      categories: ["general"],
      shortcut: null,
      paging: !0,
      base_url: "http://localhost:8983",
      collection: "",
      rows: 10,
      sort: "",
      field_list: "name",
      default_fields: "",
      query_fields: "",
      async request(query, params, sq) {
        if (!this.collection) return params;
        let qp = { q: query, rows: this.rows };
        if (this.field_list) qp.fl = this.field_list;
        if (this.query_fields) qp.qf = this.query_fields;
        if (this.default_fields) qp.df = this.default_fields;
        if (this.sort) qp.sort = this.sort;
        if (sq.pageno) qp.start = this.rows * ((sq.pageno || 1) - 1);
        params.url = this.base_url + "/solr/" + this.collection + "/select?" + new URLSearchParams(qp).toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || resp.json.error) return results;
        if (!resp.json.response || !resp.json.response.docs) return results;
        for (let doc of resp.json.response.docs) {
          let kvmap = {};
          for (let [key, value] of Object.entries(doc)) {
            kvmap[key] = String(value);
          }
          if (Object.keys(kvmap).length === 0) continue;
          results.push({
            title: kvmap.title || kvmap.name || kvmap.id || "",
            url: kvmap.url || kvmap.link || "",
            content: Object.entries(kvmap)
              .map(([k, v]) => k + ": " + v)
              .join(" | "),
          });
        }
        return results;
      },
    };

    EG_dev.meilisearch = {
      name: "meilisearch",
      categories: ["general"],
      shortcut: null,
      paging: !0,
      base_url: "http://localhost:7700",
      index: "",
      auth_key: "",
      facet_filters: [],
      async request(query, params, sq) {
        if (!this.index) return params;
        if (this.auth_key) params.headers["Authorization"] = this.auth_key;
        params.headers["Content-Type"] = "application/json";
        params.url = this.base_url + "/indexes/" + this.index + "/search";
        params.method = "POST";
        let data = { q: query, offset: 10 * ((sq.pageno || 1) - 1), limit: 10 };
        if (this.facet_filters.length > 0) data.facetFilters = this.facet_filters;
        params.data = JSON.stringify(data);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.hits) return results;
        for (let row of resp.json.hits) {
          let kvmap = {};
          for (let [key, value] of Object.entries(row)) {
            kvmap[key] = String(value);
          }
          results.push({
            title: kvmap.title || kvmap.name || kvmap.id || "",
            url: kvmap.url || kvmap.link || "",
            content: Object.entries(kvmap)
              .map(([k, v]) => k + ": " + v)
              .join(" | "),
          });
        }
        return results;
      },
    };

    EG_dev.mongodb = {
      name: "mongodb",
      categories: ["it", "db"],
      shortcut: null,
      paging: !0,
      engine_type: "offline",
      host: "127.0.0.1",
      port: 27017,
      username: "",
      password: "",
      database: "",
      collection: "",
      key: "",
      exact_match_only: !1,
      results_per_page: 20,
      async request(query, params, sq) {
        params.url = "data:text/plain,";
        params._mongoQuery = query;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          const { MongoClient } = await import("mongodb");
          let uri = "mongodb://" + this.host + ":" + this.port;
          if (this.username && this.password) uri = "mongodb://" + encodeURIComponent(this.username) + ":" + encodeURIComponent(this.password) + "@" + this.host + ":" + this.port;
          let client = new MongoClient(uri);
          await client.connect();
          let db = client.db(this.database);
          let coll = db.collection(this.collection);
          let filter;
          if (this.exact_match_only) {
            filter = { [this.key]: { $eq: params._mongoQuery } };
          } else {
            filter = { [this.key]: { $regex: params._mongoQuery, $options: "im" } };
          }
          let cursor = coll.find(filter).skip(((sq.pageno || 1) - 1) * this.results_per_page).limit(this.results_per_page);
          let docs = await cursor.toArray();
          for (let row of docs) {
            delete row._id;
            let kvmap = {};
            for (let [k, v] of Object.entries(row)) kvmap[k] = String(v);
            results.push({
              title: kvmap.title || kvmap.name || "",
              url: kvmap.url || kvmap.link || "",
              content: Object.entries(kvmap).map(([k, v]) => k + ": " + v).join(" | "),
            });
          }
          await client.close();
        } catch (e) {
          console.error("[mongodb] Error:", e.message);
        }
        return results;
      },
    };

    EG_dev.mysql_server = {
      name: "mysql_server",
      categories: ["it", "db"],
      shortcut: null,
      paging: !0,
      engine_type: "offline",
      host: "127.0.0.1",
      port: 3306,
      database: "",
      username: "",
      password: "",
      query_str: "",
      limit: 10,
      async request(query, params, sq) {
        params.url = "data:text/plain,";
        params._sqlQuery = query;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!this.query_str) return results;
        try {
          const mysql = await import("mysql2/promise");
          let conn = await mysql.createConnection({
            host: this.host,
            port: this.port,
            database: this.database,
            user: this.username,
            password: this.password,
          });
          let queryToRun = this.query_str + " LIMIT " + this.limit + " OFFSET " + ((sq.pageno || 1) - 1) * this.limit;
          let [rows, fields] = await conn.execute(queryToRun, [params._sqlQuery]);
          for (let row of rows) {
            let kvmap = {};
            for (let [k, v] of Object.entries(row)) kvmap[k] = String(v);
            results.push({
              title: kvmap.title || kvmap.name || "",
              url: kvmap.url || kvmap.link || "",
              content: Object.entries(kvmap).map(([k, v]) => k + ": " + v).join(" | "),
            });
          }
          await conn.end();
        } catch (e) {
          console.error("[mysql_server] Error:", e.message);
        }
        return results;
      },
    };

    EG_dev.postgresql = {
      name: "postgresql",
      categories: ["it", "db"],
      shortcut: null,
      paging: !0,
      engine_type: "offline",
      host: "127.0.0.1",
      port: "5432",
      database: "",
      username: "",
      password: "",
      query_str: "",
      limit: 10,
      async request(query, params, sq) {
        params.url = "data:text/plain,";
        params._sqlQuery = query;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!this.query_str) return results;
        try {
          const { Pool } = await import("pg");
          let pool = new Pool({
            host: this.host,
            port: parseInt(this.port),
            database: this.database,
            user: this.username,
            password: this.password,
          });
          let queryToRun = this.query_str + " LIMIT " + this.limit + " OFFSET " + ((sq.pageno || 1) - 1) * this.limit;
          let res = await pool.query(queryToRun, [params._sqlQuery]);
          for (let row of res.rows) {
            let kvmap = {};
            for (let [k, v] of Object.entries(row)) kvmap[k] = String(v);
            results.push({
              title: kvmap.title || kvmap.name || "",
              url: kvmap.url || kvmap.link || "",
              content: Object.entries(kvmap).map(([k, v]) => k + ": " + v).join(" | "),
            });
          }
          await pool.end();
        } catch (e) {
          console.error("[postgresql] Error:", e.message);
        }
        return results;
      },
    };

    EG_dev.sqlite = {
      name: "sqlite",
      categories: ["it", "db"],
      shortcut: null,
      paging: !0,
      engine_type: "offline",
      database: "",
      query_str: "",
      result_type: "KeyValue",
      limit: 10,
      async request(query, params, sq) {
        params.url = "data:text/plain,";
        params._sqlQuery = query;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!this.database || !this.query_str) return results;
        try {
          const Database = (await import("better-sqlite3")).default;
          let db = new Database(this.database, { readonly: !0 });
          let wildcard = "%" + params._sqlQuery.replace(/ /g, "%") + "%";
          let queryToRun = this.query_str + " LIMIT " + this.limit + " OFFSET " + ((sq.pageno || 1) - 1) * this.limit;
          let stmt = db.prepare(queryToRun);
          let rows = stmt.all({ query: params._sqlQuery, wildcard: wildcard });
          for (let row of rows) {
            let kvmap = {};
            for (let [k, v] of Object.entries(row)) kvmap[k] = String(v);
            if (this.result_type === "MainResult") {
              results.push({
                title: kvmap.title || kvmap.name || "",
                url: kvmap.url || "",
                content: kvmap.content || kvmap.description || "",
              });
            } else {
              results.push({
                title: kvmap.title || kvmap.name || "",
                url: kvmap.url || kvmap.link || "",
                content: Object.entries(kvmap).map(([k, v]) => k + ": " + v).join(" | "),
              });
            }
          }
          db.close();
        } catch (e) {
          console.error("[sqlite] Error:", e.message);
        }
        return results;
      },
    };

    EG_dev.valkey_server = {
      name: "valkey_server",
      categories: ["it", "db"],
      shortcut: null,
      paging: !1,
      engine_type: "offline",
      host: "127.0.0.1",
      port: 6379,
      password: "",
      db: 0,
      exact_match_only: !0,
      async request(query, params, sq) {
        params.url = "data:text/plain,";
        params._valkeyQuery = query;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          const Valkey = (await import("valkey")).default;
          let client = new Valkey({ host: this.host, port: this.port, db: this.db, password: this.password || null });
          await client.connect();
          let q = params._valkeyQuery;
          if (!this.exact_match_only) {
            let keys = await client.scan(0, { MATCH: "*" + q + "*" });
            for (let key of keys[1]) {
              let type = await client.type(key);
              let res = null;
              if (type === "hash") res = await client.hgetall(key);
              else if (type === "list") {
                let items = await client.lrange(key, 0, -1);
                res = Object.fromEntries(items.map((v, i) => [i, v]));
              }
              if (res) {
                res.valkey_key = key;
                results.push({
                  title: key,
                  url: "",
                  content: Object.entries(res).map(([k, v]) => k + ": " + v).join(" | "),
                });
              }
            }
          } else {
            let kvmap = await client.hgetall(q);
            if (kvmap && Object.keys(kvmap).length > 0) {
              results.push({
                title: q,
                url: "",
                content: Object.entries(kvmap).map(([k, v]) => k + ": " + v).join(" | "),
              });
            } else if (q.includes(" ")) {
              let parts = q.split(" ");
              let qset = parts[0],
                rest = parts.slice(1).join(" ");
              let cursor = "0";
              do {
                let scanRes = await client.hscan(cursor, qset, { MATCH: "*" + rest + "*" });
                cursor = scanRes[0];
                for (let row of scanRes[1]) {
                  results.push({
                    title: qset + ":" + row[0],
                    url: "",
                    content: row[0] + ": " + row[1],
                  });
                }
              } while (cursor !== "0");
            }
          }
          await client.disconnect();
        } catch (e) {
          console.error("[valkey_server] Error:", e.message);
        }
        return results;
      },
    };

    EG_dev.mariadb_server = {
      name: "mariadb_server",
      categories: ["it", "db"],
      shortcut: null,
      paging: !0,
      engine_type: "offline",
      host: "127.0.0.1",
      port: 3306,
      database: "",
      username: "",
      password: "",
      query_str: "",
      limit: 10,
      async request(query, params, sq) {
        params.url = "data:text/plain,";
        params._sqlQuery = query;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!this.query_str) return results;
        try {
          const mariadb = await import("mariadb");
          let conn = await mariadb.createConnection({
            host: this.host,
            port: this.port,
            database: this.database,
            user: this.username,
            password: this.password,
          });
          let queryToRun = this.query_str + " LIMIT " + this.limit + " OFFSET " + ((sq.pageno || 1) - 1) * this.limit;
          let rows = await conn.query(queryToRun, [params._sqlQuery]);
          for (let row of rows) {
            let kvmap = {};
            for (let [k, v] of Object.entries(row)) kvmap[k] = String(v);
            results.push({
              title: kvmap.title || kvmap.name || "",
              url: kvmap.url || kvmap.link || "",
              content: Object.entries(kvmap).map(([k, v]) => k + ": " + v).join(" | "),
            });
          }
          await conn.end();
        } catch (e) {
          console.error("[mariadb_server] Error:", e.message);
        }
        return results;
      },
    };

    EG_dev.gitea = {
      name: "gitea",
      categories: ["it", "repos"],
      shortcut: null,
      paging: !0,
      base_url: "",
      sort: "updated",
      order: "desc",
      page_size: 10,
      async request(query, params, sq) {
        if (!this.base_url) return params;
        let args = new URLSearchParams({
          q: query,
          limit: this.page_size,
          sort: this.sort,
          order: this.order,
          page: sq.pageno || 1,
        });
        params.url = this.base_url + "/api/v1/repos/search?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.data) return results;
        for (let item of resp.json.data) {
          let content = [item.language, item.description].filter(Boolean).join(" / ");
          results.push({
            url: item.html_url,
            title: item.full_name,
            content: content,
            thumbnail: item.avatar_url || item.owner?.avatar_url,
            packageName: item.name,
            maintainer: item.owner?.username,
            publishedDate: new Date(item.updated_at || item.created_at),
            tags: item.topics || [],
            popularity: item.stars_count,
            homepage: item.website,
            sourceCodeUrl: item.clone_url,
          });
        }
        return results;
      },
    };

    EG_dev.gitlab = {
      name: "gitlab",
      categories: ["it", "repos"],
      shortcut: null,
      paging: !0,
      base_url: "",
      api_path: "api/v4/projects",
      async request(query, params, sq) {
        if (!this.base_url) return params;
        let args = new URLSearchParams({ search: query, page: sq.pageno || 1 });
        params.url = this.base_url + "/" + this.api_path + "?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!Array.isArray(resp.json)) return results;
        for (let item of resp.json) {
          results.push({
            url: item.web_url,
            title: item.name,
            content: item.description,
            thumbnail: item.avatar_url,
            packageName: item.name,
            maintainer: item.namespace?.name,
            publishedDate: new Date(item.last_activity_at || item.created_at),
            tags: item.tag_list || [],
            popularity: item.star_count,
            homepage: item.readme_url,
            sourceCodeUrl: item.http_url_to_repo,
          });
        }
        return results;
      },
    };

    EG_dev.sourcehut = {
      name: "sourcehut",
      categories: ["it", "repos"],
      shortcut: null,
      paging: !0,
      base_url: "https://sr.ht/projects",
      sourcehut_sort_order: "recently-updated",
      async request(query, params, sq) {
        let args = new URLSearchParams({
          search: query,
          page: sq.pageno || 1,
          sort: this.sourcehut_sort_order,
        });
        params.url = this.base_url + "?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [],
          h = resp.text || "",
          eventListM = h.match(/<div[^>]*class="[^"]*event-list[^"]*"[^>]*>([\s\S]*?)<\/div>\s*$/);
        if (!eventListM) {
          let altM = h.match(/<div[^>]*class="[^"]*event-list[^"]*"[^>]*>([\s\S]*?)<\/div>\s*(?:<div|$)/);
          if (!altM) return results;
          eventListM = altM;
        }
        let eventRe = /<div[^>]*class="[^"]*\bevent\b[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi,
          m;
        while ((m = eventRe.exec(eventListM[1])) !== null) {
          let blk = m[1],
            hrefs = blk.match(/<a[^>]*href="([^"]*)"[^>]*>/g),
            urlM = blk.match(/<a[^>]*href="(\/[^"]*)"[^>]*>([\s\S]*?)<\/a>\s*$/m),
            h4M = blk.match(/<h4[^>]*>([\s\S]*?)<\/h4>/),
            pM = blk.match(/<p[^>]*>([\s\S]*?)<\/p>/),
            tagsM = blk.match(/class="[^"]*tags[^"]*"[\s\S]*?<\/div>/);
          if (!h4M) continue;
          let h4 = h4M[1],
            links = h4.match(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g);
          if (!links) continue;
          let maintainer = "",
            projectName = "",
            projectUrl = "";
          if (links.length >= 2) {
            let firstLink = links[0].match(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/),
              secondLink = links[1].match(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/);
            if (secondLink) {
              projectUrl = this.base_url.replace("/projects", "") + secondLink[1];
              projectName = st(secondLink[2]);
            }
            if (firstLink) maintainer = st(firstLink[2]).replace(/^~/, "");
          } else if (links.length === 1) {
            let singleLink = links[0].match(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/);
            if (singleLink) {
              projectUrl = this.base_url.replace("/projects", "") + singleLink[1];
              projectName = st(singleLink[2]);
            }
          }
          let content = pM ? st(pM[1]) : "",
            tags = [];
          if (tagsM) {
            let tagRe = /<a[^>]*>#([^<]*)<\/a>/gi,
              tagM;
            while ((tagM = tagRe.exec(tagsM[0])) !== null) tags.push(tagM[1]);
          }
          if (!projectName) continue;
          results.push({
            url: projectUrl,
            title: projectName,
            packageName: projectName,
            content: content,
            maintainer: maintainer,
            tags: tags,
          });
        }
        return results;
      },
    };

    EG_dev.docker_hub = {
      name: "docker_hub",
      categories: ["it", "packages"],
      shortcut: null,
      paging: !0,
      base_url: "https://hub.docker.com",
      page_size: 10,
      async request(query, params, sq) {
        let args = new URLSearchParams({
          query: query,
          from: this.page_size * ((sq.pageno || 1) - 1),
          size: this.page_size,
        });
        params.url = this.base_url + "/api/search/v3/catalog/search?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.results) return results;
        for (let item of resp.json.results) {
          let isOfficial = item.source === "store" || item.source === "official";
          let popInfo = [item.star_count + " stars"];
          let archs = [];
          for (let rp of item.rate_plans || []) {
            let pullCount = rp.repositories?.[0]?.pull_count;
            if (pullCount) popInfo.unshift(pullCount + " pulls");
            for (let arch of rp.architectures || []) {
              if (arch.name) archs.push(arch.name);
            }
          }
          results.push({
            url: this.base_url + (isOfficial ? "/_/" : "/r/") + item.slug,
            title: item.name,
            content: item.short_description,
            thumbnail: item.logo_url?.large || item.logo_url?.small,
            packageName: item.name,
            maintainer: item.publisher?.name,
            publishedDate: new Date(item.updated_at || item.created_at),
            popularity: popInfo.join(", "),
            tags: archs,
          });
        }
        return results;
      },
    };
  });
