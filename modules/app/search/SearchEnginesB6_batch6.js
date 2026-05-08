var EG_b6 = {},
  eG_b6 = j(() => {
    "use strict";

    function eb(s, start, end) { let i=s.indexOf(start);if(i===-1)return null;i+=start.length;let j=s.indexOf(end,i);return j===-1?null:s.slice(i,j); }
    function st(s) { return s?s.replace(/<[^>]*>/g,'').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ').trim():''; }
    function eb_st(s, t, e) { let v = eb(s, t, e); return v !== null ? st(v) : ''; }
    function eb_all(s, t, e) {
      let r = [], i = 0;
      while (i < s.length) {
        let a = s.indexOf(t, i);
        if (a === -1) break;
        a += t.length;
        let b = s.indexOf(e, a);
        if (b === -1) break;
        r.push(s.slice(a, b));
        i = b + e.length;
      }
      return r;
    }

    EG_b6.lemmy = {
      name: "lemmy",
      categories: ["social media"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        let lt = sq.lemmy_type || "Communities";
        let a = new URLSearchParams({ q: query, page: sq.pageno || 1, type_: lt });
        params.url = "https://lemmy.ml/api/v3/search?" + a;
        return params;
      },
      async response(resp, sq) {
        let results = [], d = resp.json;
        if (!d) return results;
        let lt = sq.lemmy_type || "Communities";
        if (lt === "Communities") {
          for (let r of (d.communities || [])) {
            let c = r.counts || {};
            results.push({
              url: r.community?.actor_id || '',
              title: r.community?.title || '',
              content: st(r.community?.description || ''),
              thumbnail: r.community?.icon || r.community?.banner || null,
              publishedDate: c.published ? new Date(c.published) : null,
              metadata: "subscribers: " + (c.subscribers||0) + " | posts: " + (c.posts||0) + " | active users: " + (c.users_active_half_year||0),
            });
          }
        } else if (lt === "Users") {
          for (let r of (d.users || [])) {
            results.push({
              url: r.person?.actor_id || '',
              title: r.person?.name || '',
              content: st(r.person?.bio || ''),
            });
          }
        } else if (lt === "Posts") {
          for (let r of (d.posts || [])) {
            let u = r.creator?.display_name || r.creator?.name || '';
            let t = r.post?.thumbnail_url ? r.post.thumbnail_url + '?format=webp&thumbnail=208' : null;
            let c = r.post?.body ? st(r.post.body).trim() : '';
            results.push({
              url: r.post?.ap_id || '',
              title: r.post?.name || '',
              content: c,
              thumbnail: t,
              publishedDate: r.post?.published ? new Date(r.post.published) : null,
              metadata: "\u25B2 " + (r.counts?.upvotes||0) + " \u25BC " + (r.counts?.downvotes||0) + " | user: " + u + " | comments: " + (r.counts?.comments||0) + " | community: " + (r.community?.title||''),
            });
          }
        } else if (lt === "Comments") {
          for (let r of (d.comments || [])) {
            let u = r.creator?.display_name || r.creator?.name || '';
            results.push({
              url: r.comment?.ap_id || '',
              title: r.post?.name || '',
              content: st(r.comment?.content || ''),
              publishedDate: r.comment?.published ? new Date(r.comment.published) : null,
              metadata: "\u25B2 " + (r.counts?.upvotes||0) + " \u25BC " + (r.counts?.downvotes||0) + " | user: " + u + " | community: " + (r.community?.title||''),
            });
          }
        }
        return results;
      },
    };

    EG_b6.lib_rs = {
      name: "lib_rs",
      categories: ["it", "packages"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      async request(query, params) {
        params.url = "https://lib.rs/search?q=" + encodeURIComponent(query);
        return params;
      },
      async response(resp) {
        let results = [], html = resp.body;
        if (!html) return results;
        let items = eb_all(html, '<li>', '</li>');
        for (let item of items) {
          let a = eb(item, '<a', '</a>');
          if (!a) continue;
          let href = (a.match(/href="([^"]*)"/) || [])[1] || '';
          if (!href) continue;
          let title = eb_st(a, '<h4>', '</h4>');
          let content = eb_st(a, '<p>', '</p>');
          if (!title) continue;
          let vs = item.match(/<span[^>]*class="[^"]*version[^"]*"[^>]*>([^<]*)<\/span>/);
          let version = vs ? st(vs[1]) : '';
          let ds = item.match(/<span[^>]*class="downloads"[^>]*>([^<]*)<\/span>/);
          let downloads = ds ? st(ds[1]) : '';
          let tags = [];
          let tm = item.match(/<span[^>]*class="[^"]*\bk\b[^"]*"[^>]*>([^<]*)<\/span>/g);
          if (tm) for (let t of tm) tags.push(st(t.replace(/<[^>]*>/g, '')));
          results.push({
            title: title,
            url: "https://lib.rs" + href,
            content: content,
            packageName: title,
            version: version,
            popularity: downloads,
            tags: tags,
          });
        }
        return results;
      },
    };

    EG_b6.libretranslate = {
      name: "libretranslate",
      categories: ["general", "translate"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      async request(query, params, sq) {
        let base_url = sq.base_url || "https://libretranslate.com";
        if (base_url.indexOf("libretranslate.com") !== -1 && !sq.api_key) return null;
        params.url = base_url.indexOf("/translate") !== -1 ? base_url : base_url + "/translate";
        params.method = "POST";
        params.headers = params.headers || {};
        params.headers["Content-Type"] = "application/json";
        let args = { q: sq.query || query, source: sq.from_lang ? sq.from_lang[1] : 'auto', target: sq.to_lang ? sq.to_lang[1] : 'en', alternatives: 3 };
        if (sq.api_key) args.api_key = sq.api_key;
        params.data = JSON.stringify(args);
        return params;
      },
      async response(resp) {
        let results = [], d = resp.json;
        if (!d || !d.translatedText) return results;
        results.push({
          title: "Translation",
          content: d.translatedText,
          url: "",
          metadata: d.alternatives ? "Alternatives: " + d.alternatives.join(", ") : "",
        });
        return results;
      },
    };

    EG_b6.lingva = {
      name: "lingva",
      categories: ["general", "translate"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      async request(query, params, sq) {
        let base_url = sq.base_url || "https://lingva.ml";
        let fl = sq.from_lang ? sq.from_lang[1] : 'auto';
        let tl = sq.to_lang ? sq.to_lang[1] : 'en';
        let q = sq.query || query;
        params.url = base_url + "/api/v1/" + fl + "/" + tl + "/" + encodeURIComponent(q);
        return params;
      },
      async response(resp, sq) {
        let results = [], d = resp.json;
        if (!d) return results;
        let translation = d.translation;
        if (!translation) return results;
        let info = d.info;
        let fl = sq.from_lang ? sq.from_lang[1] : 'auto';
        let tl = sq.to_lang ? sq.to_lang[1] : 'en';
        let q = sq.query || '';
        if (info) {
          if (info.typo) results.push({ title: "Did you mean", content: fl + "-" + tl + " " + info.typo, url: "" });
          if (info.definitions) {
            for (let def of info.definitions) {
              for (let item of (def.list || [])) {
                let c = translation;
                if (item.definition) c += " - " + item.definition;
                if (item.example) c += " (e.g., " + item.example + ")";
                results.push({ title: "Translation", content: c, url: "", synonyms: item.synonyms || [] });
              }
            }
          }
          if (info.extraTranslations) {
            for (let et of info.extraTranslations) {
              for (let w of (et.list || [])) {
                results.push({ title: w.word, content: (w.meanings || []).join(", "), url: "" });
              }
            }
          }
        }
        if (results.length === 0) results.push({ title: "Translation", content: translation, url: "" });
        return results;
      },
    };

    EG_b6.loc = {
      name: "loc",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        let sp = "/" + (sq.endpoint || "photos") + "/?sp=" + (sq.pageno || 1) + "&" + new URLSearchParams({ q: query }) + "&fo=json";
        params.url = "https://www.loc.gov" + sp;
        params.raise_for_httperror = !1;
        return params;
      },
      async response(resp) {
        let results = [], d = resp.json;
        if (!d) return results;
        let jr = d.results;
        if (!jr) {
          if (d.status === 404) return results;
          return results;
        }
        for (let r of jr) {
          let url = r.item?.link;
          if (!url) continue;
          let imgs = r.image_url;
          if (!imgs || !imgs.length) continue;
          let title = r.title || '';
          if (title.startsWith('[')) title = title.replace(/^\[|\]$/g, '');
          let items = [r.item?.created_published_date, r.item?.summary ? r.item.summary[0] : null, r.item?.notes ? r.item.notes[0] : null, r.item?.part_of ? r.item.part_of[0] : null];
          let author = r.item?.creators ? r.item.creators[0]?.title : null;
          results.push({
            url: url,
            title: title,
            content: items.filter(Boolean).join(" / "),
            imgSrc: imgs[imgs.length - 1],
            thumbnailSrc: imgs[0],
            author: author,
          });
        }
        return results;
      },
    };

    EG_b6.lucide = {
      name: "lucide",
      categories: ["images", "icons"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      async request(query, params) {
        params.url = "https://cdn.jsdelivr.net/npm/lucide-static/tags.json";
        params.query = query;
        return params;
      },
      async response(resp, sq) {
        let results = [], d = resp.json;
        if (!d) return results;
        let qp = (sq.query || '').toLowerCase().split(" ");
        for (let k in d) {
          let tags = d[k];
          let match = !1;
          for (let p of qp) {
            if (k.indexOf(p) !== -1) { match = !0; break; }
            for (let t of tags) { if (t.indexOf(p) !== -1) { match = !0; break; } }
            if (match) break;
          }
          if (!match) continue;
          let src = "https://cdn.jsdelivr.net/npm/lucide-static/icons/" + k + ".svg";
          results.push({ url: src, title: k, content: tags.join(", "), imgSrc: src, imgFormat: "SVG" });
        }
        return results;
      },
    };

    EG_b6.material_icons = {
      name: "material_icons",
      categories: ["images", "icons"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      async request(query, params) {
        params.url = "https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true";
        params.query = query;
        return params;
      },
      async response(resp, sq) {
        let results = [], body = resp.body;
        if (!body) return results;
        let json = JSON.parse(body.slice(5));
        if (!json || !json.icons) return results;
        let query = (sq.query || '').toLowerCase();
        let outlined = query.match(/(fill)(ed)?/g) === null;
        let qClean = query.replace(/(fill)(ed)?/g, '').trim();
        let svgType = outlined ? "default" : "fill1";
        let qParts = qClean.split(" ");
        for (let r of json.icons) {
          let match = !1;
          for (let p of qParts) {
            if (r.name.indexOf(p) !== -1 || r.tags.indexOf(p) !== -1 || r.categories.indexOf(p) !== -1) { match = !0; break; }
          }
          if (!match) continue;
          let tags = r.tags.map(t => t.charAt(0).toUpperCase() + t.slice(1));
          let cats = r.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1));
          results.push({
            url: "https://fonts.google.com/icons?icon.query=" + encodeURIComponent(r.name) + "&selected=Material+Symbols+Outlined:" + encodeURIComponent(r.name) + ":FILL@" + (outlined ? 0 : 1) + ";wght@400;GRAD@0;opsz@24",
            imgSrc: "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/" + r.name + "/" + svgType + "/24px.svg",
            title: r.name.replace(/_/g, "").replace(/\b\w/g, l => l.toUpperCase()),
            content: tags.join(", ") + " / " + cats.join(", "),
          });
        }
        return results;
      },
    };

    EG_b6.mediathekviewweb = {
      name: "mediathekviewweb",
      categories: ["videos"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url = "https://mediathekviewweb.de/api/query";
        params.method = "POST";
        params.headers = params.headers || {};
        params.headers["Content-type"] = "text/plain";
        params.data = JSON.stringify({
          queries: [{ fields: ["title", "topic"], query: query }],
          sortBy: "timestamp",
          sortOrder: "desc",
          future: !0,
          offset: ((sq.pageno || 1) - 1) * 10,
          size: 10,
        });
        return params;
      },
      async response(resp) {
        let results = [], d = resp.json;
        if (!d || !d.result || !d.result.results) return results;
        for (let item of d.result.results) {
          let sec = item.duration || 0;
          let h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
          let hms = (h ? h + ":" : "") + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
          let url = (item.url_video_hd || '').replace("http://", "https://");
          results.push({
            url: url,
            title: (item.channel || '') + ": " + (item.title || '') + " (" + hms + ")",
            content: item.description || '',
            length: hms,
            iframeSrc: url,
          });
        }
        return results;
      },
    };

    EG_b6.mediawiki = {
      name: "mediawiki",
      categories: ["general"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        let lang = sq.language === 'all' ? 'en' : (sq.language || '').split('-')[0] || 'en';
        let base_url = "https://" + lang + ".wikipedia.org/";
        let num = sq.number_of_results || 5;
        let offset = ((sq.pageno || 1) - 1) * num;
        let args = {
          action: "query",
          list: "search",
          format: "json",
          srsearch: query,
          sroffset: offset,
          srlimit: num,
          srwhat: sq.search_type || "nearmatch",
          srprop: sq.srprop || "sectiontitle|snippet|timestamp|categorysnippet",
          srsort: sq.srsort || "relevance",
        };
        if (sq.srenablerewrites !== !1) args.srenablerewrites = "1";
        params.url = base_url + "w/api.php?" + new URLSearchParams(args);
        params._lang = lang;
        params._base_url = base_url;
        return params;
      },
      async response(resp, sq) {
        let results = [], d = resp.json;
        if (!d || !d.query || !d.query.search) return results;
        let base_url = "https://" + sq.language + ".wikipedia.org/";
        if (sq.language === 'all') base_url = "https://en.wikipedia.org/";
        else base_url = "https://" + sq.language.split('-')[0] + ".wikipedia.org/";
        for (let r of d.query.search) {
          if ((r.snippet || '').startsWith('#REDIRECT')) continue;
          let title = r.title || '';
          let content = st(r.snippet || '');
          let metadata = st(r.categorysnippet || '');
          let url = base_url + "wiki/" + encodeURIComponent(title.replace(/ /g, '_'));
          if (r.sectiontitle) {
            url += "#" + encodeURIComponent(r.sectiontitle.replace(/ /g, '_'));
            title += " / " + r.sectiontitle;
          }
          let item = { url: url, title: title, content: content, metadata: metadata };
          if (r.timestamp) item.publishedDate = new Date(r.timestamp);
          results.push(item);
        }
        return results;
      },
    };

    EG_b6.microsoft_learn = {
      name: "microsoft_learn",
      categories: ["it"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        let lang = sq.language === 'all' ? 'en-us' : (sq.language || 'en-us');
        let skip = ((sq.pageno || 1) - 1) * 10;
        let qp = [
          ["search", query],
          ["locale", lang],
          ["scoringprofile", "semantic-answers"],
          ["facet", "category"],
          ["facet", "products"],
          ["facet", "tags"],
          ["$top", "10"],
          ["$skip", "" + skip],
          ["expandScope", "true"],
          ["includeQuestion", "false"],
          ["applyOperator", "false"],
          ["partnerId", "LearnSite"],
        ];
        params.url = "https://learn.microsoft.com/api/search?" + qp.map(p => encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1])).join("&");
        return params;
      },
      async response(resp) {
        let results = [], d = resp.json;
        if (!d || !d.results) return results;
        for (let r of d.results) {
          results.push({ url: r.url || '', title: r.title || '', content: r.description || '' });
        }
        return results;
      },
    };

    EG_b6.moviepilot = {
      name: "moviepilot",
      categories: ["movies"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        let filter_types = ["fsk","genre","jahr","jahrzehnt","land","online","stimmung","person"];
        let parts = query.split(" ");
        let filters = parts.filter(p => { let c = p.split("-", 1)[0]; return filter_types.indexOf(c) !== -1 && p.indexOf("-") !== -1; });
        sq.discovery = filters.length > 0;
        if (sq.discovery) {
          let a = new URLSearchParams({ page: sq.pageno || 1, order: "beste" });
          params.url = "https://www.moviepilot.de/api/discovery?" + a;
          for (let f of filters) params.url += "&filters[]=" + encodeURIComponent(f);
        } else {
          let a = new URLSearchParams({ q: query, page: sq.pageno || 1, type: "suggest" });
          params.url = "https://www.moviepilot.de/api/search?" + a;
        }
        return params;
      },
      async response(resp, sq) {
        let results = [], d = resp.json;
        if (!d) return results;
        let items = sq.discovery ? (d.results || []) : d;
        for (let r of items) {
          let item = { title: r.title || '' };
          if (sq.discovery) {
            let cl = [r.abstract, r.summary].filter(Boolean);
            item.url = "https://www.moviepilot.de" + (r.path || '');
            item.content = st(cl.join(" | "));
            item.metadata = st(r.meta_short || '');
            if (r.image) item.thumbnail = "https://assets.cdn.moviepilot.de/files/" + r.image + "/fill/155/223/" + (r.image_filename || '');
          } else {
            item.url = r.url || '';
            item.content = [r.class, r.info, r.more].filter(Boolean).join(", ");
            item.thumbnail = r.image || '';
          }
          results.push(item);
        }
        return results;
      },
    };

    EG_b6.mozhi = {
      name: "mozhi",
      categories: ["general", "translate"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      async request(query, params, sq) {
        let base_url = sq.base_url || "https://mozhi.aryak.me";
        let engine = sq.mozhi_engine || "google";
        let args = new URLSearchParams({ from: sq.from_lang ? sq.from_lang[1] : 'auto', to: sq.to_lang ? sq.to_lang[1] : 'en', text: sq.query || query, engine: engine });
        params.url = base_url + "/api/translate?" + args;
        return params;
      },
      async response(resp, sq) {
        let results = [], d = resp.json;
        if (!d || !d['translated-text']) return results;
        let item = { title: "Translation", content: d['translated-text'], url: "" };
        if (d.target_transliteration && !d.target_transliteration.match(/Direction '.*' is not supported/)) {
          item.metadata = "Transliteration: " + d.target_transliteration;
        }
        if (d.word_choices) {
          let defs = [], exs = [];
          for (let w of d.word_choices) {
            if (w.definition) defs.push(w.definition);
            for (let ex of (w.examples_target || [])) exs.push(ex.replace(/<|>/g, '').replace(/^- /, ''));
          }
          if (defs.length) item.content += " | Definitions: " + defs.join(", ");
          if (exs.length) item.metadata = (item.metadata || '') + " | Examples: " + exs.join(", ");
        }
        if (d.source_synonyms) item.metadata = (item.metadata || '') + " | Synonyms: " + d.source_synonyms.join(", ");
        results.push(item);
        return results;
      },
    };

    EG_b6.mrs = {
      name: "mrs",
      categories: ["social media"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        let base_url = sq.base_url || "";
        let ps = sq.page_size || 20;
        let offset = ((sq.pageno || 1) - 1) * ps;
        params.url = base_url + "/search/" + encodeURIComponent(query) + "/" + ps + "/" + offset;
        return params;
      },
      async response(resp) {
        let results = [], d = resp.json;
        if (!d || !Array.isArray(d)) return results;
        for (let r of d) {
          results.push({
            url: "https://matrix.to/#/" + (r.alias || ''),
            title: r.name || '',
            content: (r.topic || '') + " // " + (r.members || 0) + " members" + " // " + (r.alias || '') + " // " + (r.server || ''),
            thumbnail: r.avatar_url || null,
          });
        }
        return results;
      },
    };

    EG_b6.nvd = {
      name: "nvd",
      categories: ["it"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        let pp = 10;
        let offset = ((sq.pageno || 1) - 1) * pp;
        let qp = new URLSearchParams({ resultType: "records", keyword: query, rowCount: pp, offset: offset });
        params.url = "https://nvd.nist.gov/extensions/nudp/services/json/nvd/cve/search/results?" + qp;
        params.headers = params.headers || {};
        params.headers.Referer = "https://nvd.nist.gov/vuln/search";
        return params;
      },
      async response(resp) {
        let results = [], d = resp.json;
        if (!d || !d.response || !d.response[0] || !d.response[0].grid || !d.response[0].grid.vulnerabilities) return results;
        for (let item of d.response[0].grid.vulnerabilities) {
          let cve = item.cve || {};
          let cve_id = cve.id || '';
          let desc = (cve.descriptions || [{}])[0].value || '';
          let date = cve.published ? new Date(cve.published) : null;
          let info = ((cve.metrics || {}).cvssMetricV31 || [{}])[0]?.cvssData || {};
          let sev = info.baseSeverity || '';
          let score = info.baseScore;
          let meta = (sev && score != null) ? "Severity: " + sev + " | CVSS Score: " + score : "";
          results.push({
            url: "https://nvd.nist.gov/vuln/detail/" + cve_id,
            title: cve_id,
            content: desc,
            publishedDate: date,
            metadata: meta,
          });
        }
        return results;
      },
    };

    EG_b6.nyaa = {
      name: "nyaa",
      categories: ["files"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        let a = new URLSearchParams({ q: query, p: sq.pageno || 1 });
        params.url = "https://nyaa.si/?" + a;
        return params;
      },
      async response(resp) {
        let results = [], html = resp.body;
        if (!html) return results;
        let table = eb(html, '<table', '</table>');
        if (!table) return results;
        let rows = eb_all(table, '<tr', '</tr>');
        for (let row of rows) {
          if (row.indexOf('<th') !== -1) continue;
          let tds = eb_all(row, '<td', '</td>');
          if (tds.length < 8) continue;
          let cat = (tds[0].match(/title="([^"]*)"/) || [])[1] || '';
          let title = '';
          let href = '';
          let tda = eb_all(tds[1], '<a', '</a>');
          if (tda.length) {
            let lastA = tda[tda.length - 1];
            title = st(lastA);
            href = (lastA.match(/href="([^"]*)"/) || [])[1] || '';
          }
          if (!title) continue;
          let magnet = '', torrent = '';
          let links = eb_all(tds[2], '<a', '</a>');
          for (let l of links) {
            let u = (l.match(/href="([^"]*)"/) || [])[1] || '';
            if (u.indexOf('magnet:') === 0) magnet = u;
            else if (u) torrent = u;
          }
          let filesize = st(tds[3]);
          let seed = parseInt(st(tds[5]), 10) || 0;
          let leech = parseInt(st(tds[6]), 10) || 0;
          let downloads = parseInt(st(tds[7]), 10) || 0;
          results.push({
            url: href.indexOf('//') === -1 ? "https://nyaa.si" + href : href,
            title: title,
            content: 'Category: "' + cat + '". Downloaded ' + downloads + ' times.',
            seed: seed,
            leech: leech,
            filesize: filesize,
            torrentfile: torrent,
            magnetlink: magnet,
          });
        }
        return results;
      },
    };

    EG_b6.ollama = {
      name: "ollama",
      categories: ["it", "repos"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      async request(query, params) {
        params.url = "https://ollama.com/search?" + new URLSearchParams({ q: query });
        return params;
      },
      async response(resp) {
        let results = [], html = resp.body;
        if (!html) return results;
        let items = eb_all(html, '<li', '</li>');
        for (let item of items) {
          if (item.indexOf('x-test-model') === -1) continue;
          let title = eb_st(item, '<span x-test-search-response-title>', '</span>');
          if (!title) {
            let m = item.match(/x-test-model="([^"]*)"/);
            if (m) title = m[1];
          }
          let contentP = eb(item, '<p', '</p>');
          let content = contentP ? st(contentP.replace(/^[^>]*>/, '')) : '';
          let href = (item.match(/href="([^"]*)"/) || [])[1] || '';
          let dateStr = (item.match(/title="([^"]*(?:AM|PM)[^"]*)"/) || [])[1] || '';
          let publishedDate = dateStr ? new Date(dateStr) : null;
          if (publishedDate && isNaN(publishedDate.getTime())) publishedDate = null;
          if (!title) continue;
          results.push({
            url: "https://ollama.com" + href,
            title: title,
            content: content,
            publishedDate: publishedDate,
          });
        }
        return results;
      },
    };

    EG_b6.open_meteo = {
      name: "open_meteo",
      categories: ["weather"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      async request(query, params) {
        params.url = "https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(query) + "&count=5&format=json";
        return params;
      },
      async response(resp) {
        let results = [], d = resp.json;
        if (!d || !d.results) return results;
        for (let loc of d.results) {
          let name = loc.name || '';
          let country = loc.country || '';
          let admin = loc.admin1 || '';
          results.push({
            title: name + (country ? ", " + country : ""),
            content: "Lat: " + (loc.latitude || '') + ", Lon: " + (loc.longitude || '') + (admin ? ", " + admin : "") + (country ? ", " + country : ""),
            url: "https://open-meteo.com/en/weather/" + (loc.latitude || 0) + "/" + (loc.longitude || 0),
          });
        }
        return results;
      },
    };
  });
