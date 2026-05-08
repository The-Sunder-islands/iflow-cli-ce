var EG_it = {},
  eG_it = j(() => {
    "use strict";

    function humanizeBytes(e) {
      if (!e) return "0 B";
      let t = ["B", "KB", "MB", "GB", "TB"],
        i = 0,
        n = e;
      for (; n >= 1024 && i < t.length - 1; ) (n /= 1024), i++;
      return `${n.toFixed(i > 0 ? 1 : 0)} ${t[i]}`;
    }

    EG_it.github = {
      name: "github",
      categories: ["general", "it", "repos"],
      shortcut: "gh",
      paging: !1,
      async request(e, t, r) {
        t.url = `https://api.github.com/search/repositories?sort=stars&order=desc&q=${encodeURIComponent(e)}`;
        return (t.headers["Accept"] = "application/vnd.github.preview.text-match+json"), t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.items) return r;
        for (let t of e.json.items) {
          let n = [],
            o = t.license || {},
            s = null;
          o.spdx_id && (s = `https://spdx.org/licenses/${o.spdx_id}.html`),
            t.language && n.push(t.language),
            t.description && n.push(t.description),
            r.push({
              url: t.html_url,
              title: t.full_name,
              content: n.join(" / "),
              thumbnail: t.owner?.avatar_url,
              packageName: t.name,
              maintainer: t.owner?.login,
              date: new Date(t.updated_at || t.created_at),
              tags: t.topics || [],
              popularity: t.stargazers_count,
              licenseName: o.name,
              licenseUrl: s,
              homepage: t.homepage,
              sourceCodeUrl: t.clone_url,
            });
        }
        return r;
      },
    };

    EG_it.reddit = {
      name: "reddit",
      categories: ["general", "social media"],
      shortcut: "rd",
      paging: !1,
      async request(e, t, r) {
        let n = new URLSearchParams({ q: e, limit: 25 });
        return (t.url = `https://www.reddit.com/search.json?${n}`), t;
      },
      async response(e, t) {
        let r = [],
          n = [];
        if (!e.json || !e.json.data) return [];
        let o = e.json.data.children || [];
        for (let e of o) {
          let t = e.data,
            o = { url: `https://www.reddit.com${t.permalink}`, title: t.title },
            s = t.thumbnail || "";
          if (s.startsWith("http://") || s.startsWith("https://"))
            (o.imgSrc = t.url), (o.thumbnailSrc = s), (o.template = "images.html"), r.push(o);
          else {
            let e = t.selftext || "";
            e.length > 500 && (e = e.slice(0, 500) + "..."),
              (o.content = e),
              (o.date = new Date(1e3 * t.created_utc)),
              n.push(o);
          }
        }
        return [...r, ...n];
      },
    };

    EG_it.hackernews = {
      name: "hackernews",
      categories: ["general", "it"],
      shortcut: "hn",
      paging: !0,
      timeRangeSupport: !0,
      async request(e, t, r) {
        let n = "search",
          o = null;
        if (!e)
          (n = "search_by_date"),
            (o = { tags: "front_page", page: (r.pageno || 1) - 1 });
        else {
          o = {
            query: e,
            page: (r.pageno || 1) - 1,
            hitsPerPage: 30,
            minWordSizefor1Typo: 4,
            minWordSizefor2Typos: 8,
            advancedSyntax: "true",
            ignorePlurals: "false",
            minProximity: 7,
            numericFilters: "[]",
            tagFilters: JSON.stringify(["story", []]),
            typoTolerance: "true",
            queryType: "prefixLast",
            restrictSearchableAttributes: JSON.stringify(["title", "comment_text", "url", "story_text", "author"]),
            getRankingInfo: "true",
          };
          if (r.timeRange) {
            n = "search_by_date";
            let e = { day: 864e5, week: 6048e5, month: 2592e6, year: 31536e6 },
              t = Math.floor((Date.now() - (e[r.timeRange] || 0)) / 1e3);
            o.numericFilters = `created_at_i>${t}`;
          }
        }
        return (t.url = `https://hn.algolia.com/api/v1/${n}?${new URLSearchParams(o)}`), t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.hits) return r;
        for (let t of e.json.hits) {
          let n = t.objectID,
            o = t.points || 0,
            s = t.num_comments || 0,
            a =
              t.url ||
              (t.comment_text || "").replace(/<[^>]*>/g, "") ||
              (t.story_text || "").replace(/<[^>]*>/g, ""),
            i = "";
          (0 !== o || 0 !== s) && (i = `points: ${o} | comments: ${s}`),
            r.push({
              title: t.title || `author: ${t.author}`,
              url: `https://news.ycombinator.com/item?id=${n}`,
              content: a,
              metadata: i,
              author: t.author,
              date: new Date(1e3 * t.created_at_i),
            });
        }
        return r;
      },
    };

    EG_it.pypi = {
      name: "pypi",
      categories: ["general", "it", "packages"],
      shortcut: "py",
      paging: !0,
      async request(e, t, r) {
        let n = new URLSearchParams({ q: e, page: r.pageno || 1 });
        return (t.url = `https://pypi.org/search/?${n}`), t;
      },
      async response(e, t) {
        let r = [],
          n = e.text || "",
          o = /<a[^>]*class="package-snippet"[^>]*>([\s\S]*?)<\/a>/gi,
          s = null;
        for (; null !== (s = o.exec(n)); ) {
          let e = s[1],
            t = s[0].match(/href="([^"]*)"/),
            n = e.match(/<span[^>]*class="package-snippet__name"[^>]*>([^<]*)<\/span>/),
            o = e.match(/<span[^>]*class="package-snippet__version"[^>]*>([^<]*)<\/span>/),
            a = e.match(/<time[^>]*datetime="([^"]*)"[^>]*>/),
            i = e.match(/<p[^>]*>([\s\S]*?)<\/p>/),
            l = t ? "https://pypi.org" + t[1] : "",
            u = n ? n[1].trim() : "",
            c = o ? o[1].trim() : "",
            d = a ? a[1] : "",
            p = i ? i[1].replace(/<[^>]*>/g, "").trim() : "";
          r.push({ url: l, title: u, packageName: u, content: p, version: c, date: d ? new Date(d) : null });
        }
        return r;
      },
    };

    EG_it.archlinux = {
      name: "archlinux",
      categories: ["general", "it", "software wikis"],
      shortcut: "arch",
      paging: !0,
      async request(e, t, r) {
        let n = ((r.pageno || 1) - 1) * 20,
          o = new URLSearchParams({ search: e, title: "Special:Search", limit: 20, offset: n, profile: "default" });
        return (t.url = `https://wiki.archlinux.org/index.php?${o}`), t;
      },
      async response(e, t) {
        let r = [],
          n = e.text || "",
          o = n.match(/<ul[^>]*class="mw-search-results"[^>]*>([\s\S]*?)<\/ul>/i);
        if (!o) return r;
        let s = /<li[^>]*>([\s\S]*?)<\/li>/gi,
          a = null;
        for (; null !== (a = s.exec(o[1])); ) {
          let e = a[1],
            t = e.match(
              /<div[^>]*class="mw-search-result-heading"[^>]*>.*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i
            ),
            n = e.match(/<div[^>]*class="searchresult"[^>]*>([\s\S]*?)<\/div>/i);
          if (!t) continue;
          let o = t[1],
            s = t[2].replace(/<[^>]*>/g, "").trim(),
            a = n ? n[1].replace(/<[^>]*>/g, "").trim() : "",
            i = o.startsWith("http") ? o : `https://wiki.archlinux.org${o.startsWith("/") ? "" : "/"}${o}`;
          r.push({ url: i, title: s, content: a });
        }
        return r;
      },
    };

    EG_it.voidlinux = {
      name: "voidlinux",
      categories: ["general", "it", "packages"],
      shortcut: "vl",
      paging: !1,
      async request(e, t, r) {
        let n = e.match(/(aarch64-musl|armv6l-musl|armv7l-musl|x86_64-musl|aarch64|armv6l|armv7l|i686|x86_64)/),
          o = n ? n[1] : "x86_64";
        return (
          n && (e = e.replace(n[1], "").trim()),
          (t.url = `https://xq-api.voidlinux.org/v1/query/${o}?q=${encodeURIComponent(e)}`),
          t
        );
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.data) return r;
        let n = "https://github.com/void-linux/void-packages",
          o = {};
        for (let t of e.json.data) {
          let e = t.name.replace(/-(32bit|dbg)$/, ""),
            r = `${n}/tree/master/srcpkgs/${e}`;
          o[r] || (o[r] = []),
            o[r].push({
              title: t.name,
              content: `${t.short_desc} - ${humanizeBytes(t.filename_size)}`,
              packageName: t.name,
              version: `v${t.version}_${t.revision}`,
              tags: t.repository,
            });
        }
        for (let [e, t] of Object.entries(o))
          r.push({
            url: e,
            title: t.map((e) => e.title).join(" | "),
            content: t[0].content,
            packageName: t.map((e) => e.packageName).join(" | "),
            version: t[0].version,
            tags: t.map((e) => e.tags),
          });
        return r;
      },
    };

    EG_it.alpinelinux = {
      name: "alpinelinux",
      categories: ["general", "it", "packages"],
      shortcut: "al",
      paging: !0,
      async request(e, t, r) {
        let n = e.match(/(x86_64|x86|aarch64|armhf|ppc64le|s390x|armv7|riscv64)/),
          o = n ? n[1] : null;
        o && (e = e.replace(o, "").trim());
        let s = new URLSearchParams({ name: `*${e}*`, page: r.pageno || 1, arch: o || "x86_64" });
        return (t.url = `https://pkgs.alpinelinux.org/packages?${s}`), t;
      },
      async response(e, t) {
        let r = [],
          n = e.text || "",
          o = n.match(/<table[\s\S]*?<tbody[\s\S]*?>([\s\S]*?)<\/tbody>/i);
        if (!o) return r;
        let s = /<tr[^>]*>([\s\S]*?)<\/tr>/gi,
          a = null;
        for (; null !== (a = s.exec(o[1])); ) {
          let e = a[1],
            t = (e.match(/<td/g) || []).length;
          if (t < 9) continue;
          let n = (cls) => {
              let t = e.match(
                new RegExp(`<td[^>]*class="[^"]*${cls}[^"]*"[^>]*>([\\s\\S]*?)<\\/td>`, "i")
              );
              return t ? t[1].replace(/<[^>]*>/g, "").trim() : "";
            },
            o = (cls) => {
              let t = e.match(
                new RegExp(
                  `<td[^>]*class="[^"]*${cls}[^"]*"[^>]*>.*?<a[^>]*href="([^"]*)"`,
                  "i"
                )
              );
              return t ? t[1] : "";
            },
            s = n("package"),
            a = o("package"),
            i = n("bdate"),
            l = n("version"),
            u = o("url"),
            c = n("maintainer"),
            d = n("license"),
            p = n("repo");
          s &&
            r.push({
              url: a ? `https://pkgs.alpinelinux.org${a}` : "",
              title: s,
              packageName: s,
              date: i ? new Date(i) : null,
              version: l,
              homepage: u,
              maintainer: c,
              licenseName: d,
              tags: [p],
            });
        }
        return r;
      },
    };
  });
