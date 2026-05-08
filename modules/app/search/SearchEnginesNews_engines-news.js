var EG_news = {},
  eG_news = j(() => {
    "use strict";

    function stripHtml(e) {
      return e.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    }

    function yahooParseUrl(e) {
      let t = e.indexOf("/RU=");
      if (t === -1) return e;
      let i = e.indexOf("http", t + 1);
      if (i === -1) return e;
      let n = ["/RS", "/RK"],
        r = [];
      for (let s of n) {
        let o = e.lastIndexOf(s);
        o > -1 && r.push(o);
      }
      return r.length === 0 ? e : decodeURIComponent(e.slice(i, Math.min(...r)));
    }

    function googleNewsDecodeUrl(e) {
      let t = e.split("?")[0].split("/").pop();
      if (!t) return e;
      try {
        let i = atob(t.replace(/-/g, "+").replace(/_/g, "/") + "====");
        let n = i.indexOf("http");
        if (n === -1) return e;
        i = i.slice(n);
        let r = i.indexOf("\xd2");
        return r > -1 ? i.slice(0, r) : i;
      } catch {
        return e;
      }
    }

    function matchAllHtml(e, t) {
      let i = [],
        n = new RegExp(t, "gi"),
        r;
      while ((r = n.exec(e)) !== null) i.push(r);
      return i;
    }

    function humanizeBytes(e) {
      if (!e) return "0 B";
      let t = ["B", "KB", "MB", "GB", "TB"],
        i = 0,
        n = e;
      for (; n >= 1024 && i < t.length - 1; ) (n /= 1024), i++;
      return `${n.toFixed(i > 0 ? 1 : 0)} ${t[i]}`;
    }

    EG_news.reuters = {
      name: "reuters",
      categories: ["news"],
      shortcut: "reu",
      paging: !0,
      timeRangeSupport: !0,
      async request(e, t, r) {
        let i = { keyword: e, offset: (t.pageno - 1) * 20, orderby: "relevance", size: 20, website: "reuters" };
        if (t.timeRange) {
          let n = { day: 1, week: 7, month: 30, year: 365 }[t.timeRange] || 7;
          i.start_date = new Date(Date.now() - n * 864e5).toISOString();
        }
        t.url = `https://www.reuters.com/pf/api/v3/content/fetch/articles-by-search-v2?query=${encodeURIComponent(JSON.stringify(i))}`;
        return t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.result) return r;
        for (let t of e.json.result.articles || []) {
          let i = t.thumbnail || {};
          r.push({
            url: "https://www.reuters.com" + t.canonical_url,
            title: t.web,
            content: t.description || "",
            date: t.display_time ? new Date(t.display_time) : null,
            thumbnail: i.resizer_url ? i.resizer_url + "&height=80" : null,
            metadata: t.kicker?.name || null,
          });
        }
        return r;
      },
    };

    EG_news.yahoo_news = {
      name: "yahoo_news",
      categories: ["news"],
      shortcut: null,
      paging: !0,
      async request(e, t, r) {
        let i = (t.pageno - 1) * 10 + 1;
        t.url = `https://news.search.yahoo.com/search?p=${encodeURIComponent(e)}&b=${i}`;
        return t;
      },
      async response(e, t) {
        let r = [],
          i = e.body || "";
        let n = matchAllHtml(i, '<ol[^>]*class="[^"]*searchCenterMiddle[^"]*"[^>]*>.*?</ol>');
        if (n.length === 0) return r;
        let s = matchAllHtml(n[0][0], "<li[^>]*>.*?</li>");
        for (let e of s) {
          let t = e[0];
          let n = t.match(/<h4[^>]*><a[^>]*href="([^"]*)"[^>]*>/),
            s = t.match(/<h4[^>]*><a[^>]*>(.*?)<\/a>/),
            o = t.match(/<p[^>]*>(.*?)<\/p>/),
            a = t.match(/<img[^>]*data-src="([^"]*)"/),
            l = t.match(/<span[^>]*class="[^"]*s-time[^"]*"[^>]*>(.*?)<\/span>/);
          let c = n ? yahooParseUrl(n[1]) : null;
          if (!c) continue;
          let u = {
            url: c,
            title: s ? stripHtml(s[1]) : "",
            content: o ? stripHtml(o[1]) : "",
            thumbnail: a ? a[1] : null,
          };
          if (l) {
            let e = l[1].match(/(\d+)\s*(year|month|week|day|hour|minute)/);
            if (e) {
              let t = { minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 2592e6, year: 31536e6 };
              u.date = new Date(Date.now() - parseInt(e[1]) * (t[e[2]] || 864e5));
            } else {
              let t = new Date(l[1]);
              if (!isNaN(t)) u.date = t;
            }
          }
          r.push(u);
        }
        let o = matchAllHtml(i, '<div[^>]*class="[^"]*AlsoTry[^"]*"[^>]*>.*?</div>');
        if (o.length > 0) {
          let e = matchAllHtml(o[0][0], "<td[^>]*>(.*?)</td>");
          for (let t of e) r.push({ suggestion: stripHtml(t[1]) });
        }
        return r;
      },
    };

    EG_news.bing_news = {
      name: "bing_news",
      categories: ["news"],
      shortcut: null,
      paging: !0,
      timeRangeSupport: !0,
      async request(e, t, r) {
        let i = (t.pageno - 1) * 10;
        let n = { q: e, InfiniteScroll: 1, first: i + 1, SFX: t.pageno - 1, form: "PTFTNR" };
        if (t.timeRange) {
          let s = { day: 'interval="4"', week: 'interval="7"', month: 'interval="9"' };
          n.qft = s[t.timeRange] || 'interval="9"';
        }
        t.url = "https://www.bing.com/news/infinitescrollajax?" + new URLSearchParams(n).toString();
        return t;
      },
      async response(e, t) {
        let r = [],
          i = e.body || "";
        let n = matchAllHtml(i, '<div[^>]*class="[^"]*newsitem[^"]*"[^>]*>.*?</div>\\s*</div>');
        for (let e of n) {
          let t = e[0];
          let n = t.match(/<a[^>]*class="title"[^>]*href="([^"]*)"[^>]*data-author="([^"]*)"[^>]*>(.*?)<\/a>/);
          if (!n) continue;
          let s = n[1],
            o = stripHtml(n[3]);
          let a = t.match(/<div[^>]*class="snippet"[^>]*>(.*?)<\/div>/);
          let l = a ? stripHtml(a[1]) : "";
          let c = [];
          let u = t.match(/<span[^>]*aria-label="([^"]*)"[^>]*>/);
          if (u) c.push(u[1]);
          if (n[2]) c.push(n[2]);
          let d = null;
          let h = t.match(/<a[^>]*class="imagelink"[^>]*>.*?<img[^>]*src="([^"]*)"[^>]*>/);
          if (h) {
            d = h[1];
            if (!d.startsWith("https://www.bing.com")) d = "https://www.bing.com/" + d;
          }
          r.push({
            url: s,
            title: o,
            content: l,
            thumbnail: d,
            metadata: c.filter(Boolean).join(" | "),
          });
        }
        return r;
      },
    };

    EG_news.google_news = {
      name: "google_news",
      categories: ["news"],
      shortcut: null,
      paging: !1,
      async request(e, t, r) {
        let i = "US:en";
        t.url = `https://news.google.com/search?q=${encodeURIComponent(e)}&hl=en&gl=US&ceid=${i}`;
        return t;
      },
      async response(e, t) {
        let r = [],
          i = e.body || "";
        let n = matchAllHtml(i, '<div[^>]*class="xrnccd"[^>]*>.*?</div>\\s*</div>');
        for (let e of n) {
          let t = e[0];
          let n = t.match(/<article[^>]*>.*?<a[^>]*href="([^"]*)"[^>]*>/);
          if (!n) continue;
          let s = n[1];
          try {
            s = googleNewsDecodeUrl(s);
          } catch {}
          let o = t.match(/<h3[^>]*>(.*?)<\/h3>/);
          let a = o ? stripHtml(o[1]) : "";
          let l = t.match(/<time[^>]*>(.*?)<\/time>/);
          let c = t.match(/<a[^>]*data-n-tid[^>]*>(.*?)<\/a>/);
          let u = [c ? stripHtml(c[1]) : "", l ? stripHtml(l[1]) : ""].filter(Boolean).join(" / ");
          let d = t.match(/<figure[^>]*>.*?<img[^>]*src="([^"]*)"[^>]*>/);
          r.push({
            url: s,
            title: a,
            content: u,
            thumbnail: d ? d[1] : null,
          });
        }
        return r;
      },
    };

    EG_news.tagesschau = {
      name: "tagesschau",
      categories: ["general", "news"],
      shortcut: null,
      paging: !0,
      async request(e, t, r) {
        let i = new URLSearchParams({ searchText: e, pageSize: 10, resultPage: t.pageno - 1 });
        t.url = `https://www.tagesschau.de/api2u/search?${i}`;
        return t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.searchResults) return r;
        for (let t of e.json.searchResults) {
          if (t.type === "story" || t.type === "webview") {
            let e = t.teaserImage?.imageVariants?.["16x9-256"] || null;
            r.push({
              url: t.shareURL || t.detailsweb,
              title: t.title,
              content: t.firstSentence || "",
              date: t.date ? new Date(t.date.slice(0, 19)) : null,
              thumbnail: e,
            });
          } else if (t.type === "video") {
            let i = t.streams?.h264s || t.streams?.h264m || t.streams?.h264l || t.streams?.h264xl;
            let n = i || `https://www.tagesschau.de/multimedia/video/${t.sophoraId}.html`;
            let s = t.title;
            if (s.includes("_vapp.mxf")) {
              s = s.replace("_vapp.mxf", "").replace(/APP\d+ (FC-)?/, "");
            }
            r.push({
              url: n,
              title: s,
              content: t.firstSentence || "",
              date: t.date ? new Date(t.date.slice(0, 19)) : null,
              thumbnail: t.teaserImage?.imageVariants?.["16x9-256"] || null,
            });
          }
        }
        return r;
      },
    };

    EG_news.ansa = {
      name: "ansa",
      categories: ["news"],
      shortcut: null,
      paging: !0,
      timeRangeSupport: !0,
      async request(e, t, r) {
        let i = { any: e, start: (t.pageno - 1) * 12, sort: "data:desc" };
        if (t.timeRange) {
          let n = { day: 1, week: 7, month: 31, year: 365 };
          i.periodo = n[t.timeRange];
        }
        t.url = "https://www.ansa.it/ricerca/ansait/search.shtml?" + new URLSearchParams(i).toString();
        return t;
      },
      async response(e, t) {
        let r = [],
          i = e.body || "";
        let n = matchAllHtml(i, '<div[^>]*class="article"[^>]*>.*?</div>\\s*</div>');
        for (let e of n) {
          let t = e[0];
          let n = t.match(/<h2[^>]*class="title"[^>]*>.*?<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/);
          if (!n) continue;
          let s = t.match(/<div[^>]*class="text"[^>]*>(.*?)<\/div>/);
          let o = t.match(/<div[^>]*class="image"[^>]*>.*?<img[^>]*src="([^"]*)"[^>]*>/);
          let a = {
            url: "https://www.ansa.it" + n[1],
            title: stripHtml(n[2]),
            content: s ? stripHtml(s[1]) : "",
          };
          if (o && o[1]) a.thumbnail = "https://www.ansa.it" + o[1];
          r.push(a);
        }
        return r;
      },
    };

    EG_news.il_post = {
      name: "il_post",
      categories: ["news"],
      shortcut: null,
      paging: !0,
      timeRangeSupport: !0,
      async request(e, t, r) {
        let i = { qs: e, pg: t.pageno, sort: "date_d", filters: "ctype:articoli" };
        if (t.timeRange) {
          let n = { month: "pub_date:ultimi_30_giorni", year: "pub_date:ultimo_anno" };
          if (n[t.timeRange]) i.filters += ";" + n[t.timeRange];
          else return null;
        }
        t.url = "https://api.ilpost.org/search/api/site_search/?" + new URLSearchParams(i).toString();
        return t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.docs) return r;
        for (let t of e.json.docs) {
          r.push({
            url: t.link,
            title: t.title,
            content: t.summary || "",
            thumbnail: t.image || null,
          });
        }
        return r;
      },
    };

    EG_news.grokipedia = {
      name: "grokipedia",
      categories: ["general"],
      shortcut: null,
      paging: !0,
      async request(e, t, r) {
        let i = (t.pageno - 1) * 10;
        t.url = `https://grokipedia.com/api/full-text-search?query=${encodeURIComponent(e)}&limit=10&offset=${i}`;
        return t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.results) return r;
        for (let t of e.json.results) {
          r.push({
            url: "https://grokipedia.com/page/" + t.slug,
            title: t.title,
            content: stripHtml(t.snippet || ""),
          });
        }
        return r;
      },
    };

    EG_news.wikipedia = {
      name: "wikipedia",
      categories: ["general"],
      shortcut: null,
      paging: !1,
      async request(e, t, r) {
        let i = t.searxngLocale || "en";
        let n = i.split("-")[0];
        let s = e.charAt(0).toUpperCase() + e.slice(1);
        let o = "en.wikipedia.org";
        t.url = `https://${o}/api/rest_v1/page/summary/${encodeURIComponent(s)}`;
        return t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json) return r;
        let i = e.json;
        if (i.type && (i.type === "https://mediawiki.org/wiki/HyperSwitch/errors/not_found" || i.status === 404))
          return r;
        let n = i.titles?.display || i.title || "";
        let s = i.content_urls?.desktop?.page || "";
        if (i.type !== "standard" || !0) {
          r.push({ url: s, title: n, content: i.description || "" });
        }
        r.push({
          title: n,
          id: s,
          content: i.extract || "",
          imgSrc: i.thumbnail?.source || null,
          urls: [{ title: "Wikipedia", url: s }],
        });
        return r;
      },
    };

    EG_news.wikidata = {
      name: "wikidata",
      categories: ["general"],
      shortcut: null,
      paging: !1,
      async request(e, t, r) {
        let i = t.searxngLocale || "en";
        let n = i.split("-")[0];
        let s = e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
        let o = `
SELECT ?item ?itemLabel ?itemDescription ?lat ?long ?P569 ?P570 ?P571 ?P576 ?P577 ?P580 ?P582 ?P1082 ?P856 ?P18 ?P625 WHERE {
  SERVICE wikibase:mwapi {
    bd:serviceParam wikibase:endpoint "www.wikidata.org";
    wikibase:api "EntitySearch";
    wikibase:limit 1;
    mwapi:search "${s}";
    mwapi:language "${n}".
    ?item wikibase:apiOutputItem mwapi:item.
  }
  OPTIONAL { ?item wdt:P569 ?P569 . }
  OPTIONAL { ?item wdt:P570 ?P570 . }
  OPTIONAL { ?item wdt:P571 ?P571 . }
  OPTIONAL { ?item wdt:P576 ?P576 . }
  OPTIONAL { ?item wdt:P577 ?P577 . }
  OPTIONAL { ?item wdt:P580 ?P580 . }
  OPTIONAL { ?item wdt:P582 ?P582 . }
  OPTIONAL { ?item wdt:P1082 ?P1082 . }
  OPTIONAL { ?item wdt:P856 ?P856 . }
  OPTIONAL { ?item wdt:P18 ?P18 . }
  OPTIONAL { ?item wdt:P625 ?P625 . }
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "${n},en".
    ?item rdfs:label ?itemLabel .
    ?item schema:description ?itemDescription .
  }
}
GROUP BY ?item ?itemLabel ?itemDescription ?lat ?long ?P569 ?P570 ?P571 ?P576 ?P577 ?P580 ?P582 ?P1082 ?P856 ?P18 ?P625
`;
        t.method = "POST";
        t.url = "https://query.wikidata.org/sparql";
        t.headers = {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/sparql-results+json",
        };
        t.body = "query=" + encodeURIComponent(o);
        return t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.results) return r;
        let i = e.json.results.bindings || [];
        for (let e of i) {
          let t = {};
          for (let r in e) t[r] = e[r].value;
          let n = t.itemLabel || t.item,
            s = t.item;
          let o = [],
            a = [];
          if (t.itemDescription) a.push(t.itemDescription);
          if (t.P569) o.push({ label: "date of birth", value: t.P569 });
          if (t.P570) o.push({ label: "date of death", value: t.P570 });
          if (t.P571) o.push({ label: "inception", value: t.P571 });
          if (t.P576) o.push({ label: "dissolution", value: t.P576 });
          if (t.P577) o.push({ label: "publication date", value: t.P577 });
          if (t.P1082) o.push({ label: "population", value: t.P1082 });
          r.push({
            title: n,
            id: s,
            content: a.join(" "),
            urls: [
              ...(t.P856 ? [{ title: "official website", url: t.P856.replace(/^http:/, "https:") }] : []),
              { title: "Wikidata", url: s },
            ],
            attributes: o,
            imgSrc: t.P18 ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(t.P18.split("/").pop())}?width=300` : null,
          });
        }
        return r;
      },
    };

    EG_news.wikicommons = {
      name: "wikicommons",
      categories: [],
      shortcut: null,
      paging: !0,
      searchType: "image",
      async request(e, t, r) {
        let i = t.searxngLocale || "en";
        let n = i !== "all" ? i.split("-")[0] : "en";
        let s = { image: "bitmap|drawing", video: "video", audio: "audio", file: "multimedia|office|archive|3d" };
        let o = s[this.searchType] || "bitmap|drawing";
        let a = new URLSearchParams({
          format: "json",
          uselang: n,
          action: "query",
          prop: "info|imageinfo",
          generator: "search",
          gsrnamespace: "6",
          gsrprop: "snippet",
          gsrlimit: 10,
          gsroffset: 10 * (t.pageno - 1),
          gsrsearch: `filetype:${o} ${e}`,
          iiprop: "url|size|mime",
          iiurlheight: "180",
        });
        t.url = "https://commons.wikimedia.org/w/api.php?" + a.toString();
        return t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.query) return r;
        let i = e.json.query.pages || {};
        for (let e of Object.values(i)) {
          if (!e.imageinfo || e.imageinfo.length === 0) continue;
          let t = e.imageinfo[0];
          let n = e.title.replace("File:", "").split(".").slice(0, -1).join(".");
          let s = stripHtml(e.snippet || "");
          let o = {
            url: t.descriptionurl,
            title: n,
            content: s,
            thumbnail: t.thumburl || null,
          };
          if (this.searchType === "image") {
            o.imgSrc = t.url;
            o.thumbnailSrc = t.thumburl;
            o.resolution = t.width && t.height ? `${t.width} x ${t.height}` : null;
            o.imgFormat = t.mime;
            o.filesize = t.size ? humanizeBytes(t.size) : null;
          } else if (this.searchType === "video") {
            o.iframeSrc = t.url;
          } else if (this.searchType === "audio") {
            o.audioSrc = t.url;
          }
          r.push(o);
        }
        return r;
      },
    };

    EG_news.bpb = {
      name: "bpb",
      categories: ["general"],
      shortcut: null,
      paging: !0,
      async request(e, t, r) {
        let i = new URLSearchParams({
          "query[term]": e,
          page: t.pageno - 1,
          "sort[direction]": "descending",
          "payload[nid]": 65350,
        });
        t.url = "https://www.bpb.de/bpbapi/filter/search?" + i.toString();
        return t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.teaser) return r;
        for (let t of e.json.teaser) {
          let i = t.teaser;
          let n = null;
          if (i.image && i.image.sources && i.image.sources.length > 0) {
            n = "https://www.bpb.de" + i.image.sources[i.image.sources.length - 1].url;
          }
          let s = t.extension?.overline || "";
          let o = (t.extension?.authors || []).map((e) => e.name).join(", ");
          if (o) s += " | " + o;
          let a = null;
          if (t.extension?.publishingDate) a = new Date(t.extension.publishingDate * 1000);
          r.push({
            url: "https://www.bpb.de" + i.link.url,
            title: i.title,
            content: i.text || "",
            thumbnail: n,
            date: a,
            metadata: s,
          });
        }
        return r;
      },
    };

    EG_news.chefkoch = {
      name: "chefkoch",
      categories: [],
      shortcut: null,
      paging: !0,
      async request(e, t, r) {
        let i = { query: e, limit: 20, offset: (t.pageno - 1) * 20 };
        t.url = "https://api.chefkoch.de/v2/search-gateway/recipes?" + new URLSearchParams(i).toString();
        return t;
      },
      async response(e, t) {
        let r = [];
        if (!e.json || !e.json.results) return r;
        for (let t of e.json.results) {
          let i = t.recipe;
          if (i.isPremium || i.isPlus) continue;
          let n = null;
          if (i.submissionDate) n = new Date(i.submissionDate.slice(0, 19));
          let s = [];
          s.push(`Schwierigkeitsstufe (1-3): ${i.difficulty}`);
          s.push(`Zubereitungszeit: ${i.preparationTime}min`);
          s.push(`Anzahl der Zutaten: ${i.ingredientCount}`);
          if (i.subtitle) s.unshift(i.subtitle);
          let o = null;
          if (i.previewImageUrlTemplate) o = i.previewImageUrlTemplate.replace("<format>", "crop-240x300");
          r.push({
            url: i.siteUrl,
            title: i.title,
            content: s.join(" | "),
            thumbnail: o,
            date: n,
          });
        }
        return r;
      },
    };

    EG_news.duden = {
      name: "duden",
      categories: ["dictionaries"],
      shortcut: null,
      paging: !0,
      async request(e, t, r) {
        let i = t.pageno - 1;
        if (i === 0) {
          t.url = `https://www.duden.de/suchen/dudenonline/${encodeURIComponent(e)}`;
        } else {
          t.url = `https://www.duden.de/suchen/dudenonline/${encodeURIComponent(e)}?search_api_fulltext=&page=${i}`;
        }
        return t;
      },
      async response(e, t) {
        let r = [],
          i = e.body || "";
        let n = i.match(/<a[^>]*class="active"[^>]*href="[^"]*suchen\/dudenonline[^"]*"[^>]*>.*?<span[^>]*>.*?(\d+).*?<\/span>/);
        if (n) r.push({ number_of_results: parseInt(n[1]) });
        let s = matchAllHtml(i, '<section(?:[^>]*(?!class="[^"]*essay[^"]*")[^>]*)*>.*?</section>');
        for (let e of s) {
          if (/class="[^"]*essay[^"]*"/.test(e[0])) continue;
          let t = e[0];
          let n = t.match(/<h2[^>]*>.*?<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/);
          if (!n) continue;
          let s = t.match(/<p[^>]*>(.*?)<\/p>/);
          let o = n[1];
          if (!o.startsWith("http")) o = "https://www.duden.de" + o;
          r.push({
            url: o,
            title: stripHtml(n[2]),
            content: s ? stripHtml(s[1]) : "",
          });
        }
        return r;
      },
    };

    EG_news.emojipedia = {
      name: "emojipedia",
      categories: [],
      shortcut: null,
      paging: !1,
      async request(e, t, r) {
        t.url = `https://emojipedia.org/search?q=${encodeURIComponent(e)}`;
        return t;
      },
      async response(e, t) {
        let r = [],
          i = e.body || "";
        let n = matchAllHtml(i, '<div[^>]*class="EmojisList[^"]*"[^>]*>.*?</div>');
        for (let e of n) {
          let t = matchAllHtml(e[0], '<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>');
          for (let e of t) {
            r.push({
              url: "https://emojipedia.org" + e[1],
              title: stripHtml(e[2]),
              content: "",
            });
          }
        }
        return r;
      },
    };
  })();
