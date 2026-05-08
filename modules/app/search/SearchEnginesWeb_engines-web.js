var EG_web = {},
  eG_web = j(() => {
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

    function dq(s) {
      try {
        return decodeURIComponent(s.replace(/\+/g, " "));
      } catch {
        return s;
      }
    }

    function de(s) {
      return s.replace(/\\(x[\da-fA-F]{2}|u[\da-fA-F]{4}|.)/g, (_, e) => {
        if (e[0] === "x" || e[0] === "u") return String.fromCharCode(parseInt(e.slice(1), 16));
        return { n: "\n", t: "\t", r: "\r" }[e] || e;
      });
    }

    function b64u(s) {
      s = s.replace(/-/g, "+").replace(/_/g, "/");
      s += "=".repeat((4 - (s.length % 4)) % 4);
      try {
        return atob(s);
      } catch {
        return s;
      }
    }

    function blk(html, tag, cls, from) {
      var re = new RegExp("<" + tag + '\\s[^>]*class="[^"]*' + cls + '[^"]*"[^>]*>', "i");
      re.lastIndex = from || 0;
      var m = re.exec(html);
      if (!m) return null;
      var d = 1,
        p = re.lastIndex,
        ot = "<" + tag,
        ct = "</" + tag + ">";
      while (d > 0 && p < html.length) {
        var no = html.indexOf(ot, p),
          nc = html.indexOf(ct, p);
        if (nc === -1) return { html: html.slice(m.index), start: m.index, end: html.length };
        if (no !== -1 && no < nc) {
          d++;
          p = no + ot.length;
        } else {
          d--;
          p = nc + ct.length;
        }
      }
      return { html: html.slice(m.index, p), start: m.index, end: p };
    }

    function allBlk(html, tag, cls) {
      var blocks = [],
        pos = 0,
        b;
      while (pos < html.length) {
        b = blk(html, tag, cls, pos);
        if (!b) break;
        blocks.push(b.html);
        pos = b.end;
      }
      return blocks;
    }

    /**
     * about: { website: "https://www.google.com", wikidata_id: "Q9366",
     *   official_api_documentation: "https://developers.google.com/custom-search/",
     *   use_official_api: false, require_api_key: false, results: "HTML" }
     */
    EG_web.google = {
      name: "google",
      categories: ["general", "web"],
      shortcut: "g",
      paging: !0,
      maxPage: 50,
      timeRangeSupport: !0,
      safesearch: !0,
      useRenderer: !0,
      async request(query, params, sq) {
        var start = (sq.pageno - 1) * 10,
          lang = sq.language || "all",
          lc = "en", cc = "US";
        if (lang !== "all") { var pts = lang.split("-"); lc = pts[0]; cc = pts[1] || lc.toUpperCase(); }
        var qp = { q: query, hl: lc + "-" + cc, ie: "utf8", oe: "utf8", start: String(start) };
        if (lang !== "all") qp.lr = "lang_" + lc;
        var url = "https://www.google.com/search?" + new URLSearchParams(qp);
        if (sq.timeRange) url += "&tbs=qdr:" + ({day:"d",week:"w",month:"m",year:"y"})[sq.timeRange];
        if (sq.safesearch) url += "&safe=" + ({0:"off",1:"medium",2:"high"})[sq.safesearch];
        params.url = url;
        params.headers["Accept-Language"] = lc + "-" + cc + "," + lc + ";q=0.9";
        params.cookies["CONSENT"] = "YES+";
        return params;
      },
      async response(resp, sq) {
        if (!resp.text) return { results: [] };
        const Html = SearchCore?.Html;
        if (!Html) return { results: [] };
        const doc = Html.parse(resp.text);
        var results = [], seen = new Set();
        // xpath patterns from SearXNG's google.py
        var patterns = [
          '//div[contains(@class,"g")]//a/@href',
          '//div[@id="search"]//a[starts-with(@href,"http")]/@href',
          '//a[starts-with(@href,"http")]',
        ];
        var urls = [];
        for (var p of patterns) { urls = Html.selectAllHref(doc, p); if (urls.length > 0) break; }
        var titlePatterns = [
          '//div[contains(@class,"g")]//h3/text()',
          '//h3/a/text()',
          '//h3/text()',
          '//a[starts-with(@href,"http")]/text()',
        ];
        var titles = [];
        for (var p of titlePatterns) { titles = Html.selectAllText(doc, p); if (titles.length > 0) break; }
        var snippetPatterns = [
          '//div[contains(@class,"g")]//div[contains(@class,"VwiC3b")]/text()',
          '//div[contains(@class,"g")]//span/text()',
        ];
        var snippets = [];
        for (var p of snippetPatterns) { snippets = Html.selectAllText(doc, p); if (snippets.length > 0) break; }
        for (var i = 0; i < urls.length && results.length < 15; i++) {
          var u = urls[i];
          if (u.startsWith("/url?q=")) u = decodeURIComponent(u.slice(7).split("&")[0]);
          if (!u.startsWith("http") || seen.has(u)) continue;
          seen.add(u);
          results.push({ url: u, title: titles[i] || "", content: snippets[i] || "", snippet: snippets[i] || "" });
        }
        return { results };
      },
    };

    /**
     * about: { website: "https://www.bing.com", wikidata_id: "Q182496",
     *   official_api_documentation: "https://github.com/MicrosoftDocs/bing-docs",
     *   use_official_api: false, require_api_key: false, results: "HTML" }
     */
    EG_web.bing = {
      name: "bing",
      categories: ["general", "web"],
      shortcut: "b",
      paging: !1,
      safesearch: !0,
      useRenderer: !0,
      async request(query, params, sq) {
        var qp = { q: query, adlt: ({0:"off",1:"moderate",2:"strict"})[sq.safesearch] || "off" };
        var lang = sq.language || "all";
        if (lang !== "all") { qp.mkt = lang; params.headers["Accept-Language"] = lang + "," + lang.split("-")[0] + ";q=0.9"; }
        params.url = "https://www.bing.com/search?" + new URLSearchParams(qp);
        return params;
      },
      async response(resp, sq) {
        if (!resp.text) return { results: [] };
        const Html = SearchCore?.Html;
        if (!Html) return { results: [] };
        const doc = Html.parse(resp.text);
        var r = [], seen = new Set();
        var urls = Html.selectAllHref(doc, '//li[contains(@class,"b_algo")]//h2/a/@href');
        var titles = Html.selectAllText(doc, '//li[contains(@class,"b_algo")]//h2/a');
        var snippets = Html.selectAllText(doc, '//li[contains(@class,"b_algo")]//div[contains(@class,"b_caption")]/p');
        for (var i = 0; i < urls.length && r.length < 15; i++) {
          var u = urls[i];
          if (u.includes("bing.com/ck/a")) { var m = u.match(/[?&]u=([^&]+)/); if (m) u = decodeURIComponent(m[1]); }
          if (!u.startsWith("http") || seen.has(u)) continue;
          seen.add(u);
          r.push({ url: u, title: titles[i] || "", content: snippets[i] || "", snippet: snippets[i] || "" });
        }
        return { results: r };
      },
    };

    /**
     * about: { website: "https://lite.duckduckgo.com/lite/", wikidata_id: "Q12805",
     *   use_official_api: false, require_api_key: false, results: "HTML" }
     */
    EG_web.duckduckgo = {
      name: "duckduckgo",
      categories: ["general", "web"],
      shortcut: "d",
      paging: !1,
      useRenderer: !0,
      async request(query, params, sq) {
        params.url = "https://lite.duckduckgo.com/lite/?q=" + encodeURIComponent(query);
        params.headers["User-Agent"] = "Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0";
        return params;
      },
      async response(resp, sq) {
        if (!resp.text) return { results: [] };
        const Html = SearchCore?.Html;
        if (!Html) return { results: [] };
        const doc = Html.parse(resp.text);
        var r = [], seen = new Set();
        // DDG Lite: tr.result > td > a
        var urls = Html.selectAllHref(doc, '//tr[contains(@class,"result")]//a/@href');
        var titles = Html.selectAllText(doc, '//tr[contains(@class,"result")]//a');
        var snippets = Html.selectAllText(doc, '//tr[contains(@class,"result")]/td[2]');
        // Fallback: any external links
        if (urls.length === 0) urls = Html.selectAllHref(doc, '//a[starts-with(@href,"http")]/@href');
        if (titles.length === 0) titles = Html.selectAllText(doc, '//a[starts-with(@href,"http")]');
        for (var i = 0; i < urls.length && r.length < 15; i++) {
          var u = urls[i];
          if (!u.startsWith("http") || seen.has(u)) continue;
          seen.add(u);
          r.push({ url: u, title: titles[i] || "", content: snippets[i] || "", snippet: snippets[i] || "" });
        }
        return { results: r };
      },
    };

    /**
     * about: { website: "https://search.yahoo.com/", wikidata_id: null,
     *   official_api_documentation: "https://developer.yahoo.com/api/",
     *   use_official_api: false, require_api_key: false, results: "HTML" }
     */
    EG_web.yahoo = {
      name: "yahoo",
      categories: ["general", "web"],
      shortcut: "y",
      paging: !0,
      timeRangeSupport: !0,
      yahooLanguages: {
        all: "any", ar: "ar", bg: "bg", cs: "cs", da: "da", de: "de", el: "el", en: "en", es: "es", et: "et",
        fi: "fi", fr: "fr", he: "he", hr: "hr", hu: "hu", it: "it", ja: "ja", ko: "ko", lt: "lt", lv: "lv",
        nl: "nl", no: "no", pl: "pl", pt: "pt", ro: "ro", ru: "ru", sk: "sk", sl: "sl", sv: "sv", th: "th",
        tr: "tr", zh: "zh_chs", zh_Hans: "zh_chs", "zh-CN": "zh_chs", zh_Hant: "zh_cht", "zh-HK": "zh_cht",
        "zh-TW": "zh_cht",
      },
      region2domain: {
        CO: "co.search.yahoo.com", TH: "th.search.yahoo.com", VE: "ve.search.yahoo.com",
        CL: "cl.search.yahoo.com", HK: "hk.search.yahoo.com", PE: "pe.search.yahoo.com",
        CA: "ca.search.yahoo.com", DE: "de.search.yahoo.com", FR: "fr.search.yahoo.com",
        TW: "tw.search.yahoo.com", GB: "uk.search.yahoo.com", UK: "uk.search.yahoo.com",
        BR: "br.search.yahoo.com", IN: "in.search.yahoo.com", ES: "espanol.search.yahoo.com",
        PH: "ph.search.yahoo.com", AR: "ar.search.yahoo.com", MX: "mx.search.yahoo.com",
        SG: "sg.search.yahoo.com",
      },
      lang2domain: {
        zh_chs: "hk.search.yahoo.com", zh_cht: "tw.search.yahoo.com", any: "search.yahoo.com",
        en: "search.yahoo.com", bg: "search.yahoo.com", cs: "search.yahoo.com", da: "search.yahoo.com",
        el: "search.yahoo.com", et: "search.yahoo.com", he: "search.yahoo.com", hr: "search.yahoo.com",
        ja: "search.yahoo.com", ko: "search.yahoo.com", sk: "search.yahoo.com", sl: "search.yahoo.com",
      },
      _getDomain(langStr) {
        var pts = (langStr || "all").split("-"),
          l = this.yahooLanguages[pts[0]] || "any",
          r = pts[1];
        return this.region2domain[r] || this.lang2domain[l] || l + ".search.yahoo.com";
      },
      async request(query, params, sq) {
        var pts = (sq.language || "all").split("-"),
          lang = this.yahooLanguages[pts[0]] || "any",
          region = pts[1];
        var urlParams = { p: query };
        var btf = { day: "d", week: "w", month: "m" }[sq.timeRange];
        if (btf) urlParams.btf = btf;
        if (sq.pageno === 1) {
          urlParams.iscqry = "";
        } else if (sq.pageno >= 2) {
          urlParams.b = sq.pageno * 7 + 1;
          urlParams.pz = 7;
          urlParams.bct = 0;
          urlParams.xargs = 0;
        }
        var ssMap = { 0: "p", 1: "i", 2: "r" };
        params.cookies["sB"] =
          "v=1&vm=" +
          (ssMap[sq.safesearch] || "p") +
          "&fl=1&vl=lang_" +
          lang +
          "&pn=10&rw=new&userset=1";
        var domain = this._getDomain(sq.language);
        params.url = "https://" + domain + "/search?" + new URLSearchParams(urlParams);
        params._domain = domain;
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [],
          domain = this._getDomain(sq.language),
          urlXpath = './/div[contains(@class,"compTitle")]/h3/a/@href',
          titleXpath = './/h3//a/@aria-label';
        if (domain === "search.yahoo.com") {
          urlXpath = './/div[contains(@class,"compTitle")]/a/@href';
          titleXpath = './/div[contains(@class,"compTitle")]/a/h3/span';
        }
        var blocks = allBlk(h, "div", "algo-sr");
        for (var bi = 0; bi < blocks.length; bi++) {
          var bl = blocks[bi];
          var urlM;
          if (domain === "search.yahoo.com") {
            urlM = bl.match(/<div[^>]*class="[^"]*compTitle[^"]*"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>[\s\S]*?<h3[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/i);
          } else {
            urlM = bl.match(/<div[^>]*class="[^"]*compTitle[^"]*"[^>]*>[\s\S]*?<h3[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i);
          }
          if (!urlM) {
            urlM = bl.match(/<div[^>]*class="[^"]*compTitle[^"]*"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i);
          }
          if (!urlM) continue;
          var url = urlM[1],
            title = st(urlM[2]);
          if (!url) continue;
          url = this._parseUrl(url);
          var cm = bl.match(/<div[^>]*class="[^"]*compText[^"]*"[^>]*>([\s\S]*?)<\/div>/i),
            content = cm ? st(cm[1]) : "";
          r.push({ url: url, title: title, content: content });
        }
        var sugBlocks = allBlk(h, "div", "AlsoTry");
        for (var si = 0; si < sugBlocks.length; si++) {
          var sla = sugBlocks[si].match(/<a[^>]*>([\s\S]*?)<\/a>/gi);
          if (sla)
            for (var li = 0; li < sla.length; li++) {
              var t = st(sla[li]);
              if (t) r.push({ suggestion: t });
            }
        }
        return r;
      },
      _parseUrl(urlString) {
        var endings = ["/RS", "/RK"],
          endpositions = [],
          start = urlString.indexOf("http", urlString.indexOf("/RU=") + 1);
        for (var ei = 0; ei < endings.length; ei++) {
          var ep = urlString.lastIndexOf(endings[ei]);
          if (ep > -1) endpositions.push(ep);
        }
        if (start === -1 || endpositions.length === 0) return urlString;
        var end = Math.min.apply(null, endpositions);
        return dq(urlString.slice(start, end));
      },
    };

    /**
     * about: { website: "https://www.aol.com", wikidata_id: "Q2407",
     *   official_api_documentation: null, use_official_api: false,
     *   require_api_key: false, results: "HTML" }
     */
    EG_web.aol = {
      name: "aol",
      categories: ["general"],
      shortcut: "a",
      paging: !0,
      safesearch: !0,
      timeRangeSupport: !0,
      async request(query, params, sq) {
        var pts = (sq.language || "all").split("-"),
          language = pts[0],
          region = pts[1];
        if (language && language !== "all") query = query + " language:" + language;
        if (region) query = query + " loc:" + region;
        var args = {
          q: query,
          b: sq.pageno * 10 + 1,
          pz: 10,
        };
        if (sq.timeRange) {
          args.fr2 = "time";
          args.age = sq.timeRange;
        } else {
          args.fr2 = "sb-top-search";
        }
        var ssMap = { 0: "p", 1: "r", 2: "i" };
        params.cookies["sB"] = "vm=" + (ssMap[sq.safesearch] || "p");
        params.url = "https://search.aol.com/aol/search?" + new URLSearchParams(args);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [],
          webOl = eb(h, '<div id="web"', "</ol>");
        if (webOl) {
          var liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi,
            lm;
          while ((lm = liRe.exec(webOl)) !== null) {
            var li = lm[1];
            if (/class="[^"]*first[^"]*"/i.test(li)) continue;
            var urlM = li.match(/<h3[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i);
            if (!urlM) {
              urlM = li.match(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i);
            }
            if (!urlM) continue;
            var url = this._deobfuscate(urlM[1]);
            if (!url) continue;
            var title = st(urlM[2]);
            var cm = li.match(/<div[^>]*class="[^"]*compText[^"]*"[^>]*>([\s\S]*?)<\/div>/i),
              content = cm ? st(cm[1]) : "";
            var tm = li.match(/<a[^>]*class="[^"]*thm[^"]*"[^>]*>[\s\S]*?<img[^>]*data-src="([^"]*)"/i) ||
              li.match(/<img[^>]*class="[^"]*thm[^"]*"[^>]*src="([^"]*)"/i);
            var thumbnail = tm ? tm[1] : null;
            r.push({ url: url, title: title, content: content, thumbnail: thumbnail });
          }
        }
        var sugOl = eb(h, '<ol class="searchRightBottom"', "</ol>") ||
          eb(h, "<ol[^>]*searchRightBottom[^>]*>", "</ol>");
        if (sugOl) {
          var sla = sugOl.match(/<a[^>]*>([\s\S]*?)<\/a>/gi);
          if (sla)
            for (var si = 0; si < sla.length; si++) {
              var t = st(sla[si]);
              if (t) r.push({ suggestion: t });
            }
        }
        return r;
      },
      _deobfuscate(urlStr) {
        if (!urlStr) return null;
        var parts = urlStr.split("/");
        for (var pi = 0; pi < parts.length; pi++) {
          if (parts[pi].indexOf("RU=") === 0) {
            try {
              return decodeURIComponent(parts[pi].slice(3).replace(/\+/g, " "));
            } catch {
              return parts[pi].slice(3);
            }
          }
        }
        return urlStr;
      },
    };

    /**
     * about: { website: "https://www.ask.com/", wikidata_id: "Q847564",
     *   official_api_documentation: null, use_official_api: false,
     *   require_api_key: false, results: "HTML" }
     */
    EG_web.ask = {
      name: "ask",
      categories: ["general"],
      shortcut: "k",
      paging: !0,
      maxPage: 5,
      async request(query, params, sq) {
        params.url = "https://www.ask.com/web?" + new URLSearchParams({ q: query, page: sq.pageno || 1 });
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [],
          script = h.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
        if (!script) return r;
        for (var si = 0; si < script.length; si++) {
          var sc = script[si];
          if (sc.indexOf("window.MESON.initialState") === -1) continue;
          var startTag = "window.MESON.initialState = {",
            endTag = "}};",
            pos = sc.indexOf(startTag);
          if (pos === -1) continue;
          pos += startTag.length - 1;
          var ep = sc.indexOf(endTag, pos);
          if (ep === -1) continue;
          ep += endTag.length - 1;
          var jsonStr = sc.slice(pos, ep);
          try {
            var data = JSON.parse(jsonStr);
            var results = data?.search?.webResults?.results || [];
            for (var ri = 0; ri < results.length; ri++) {
              var item = results[ri],
                pubdate = item.pubdate_original ? new Date(item.pubdate_original) : null,
                meta = [item.category_l1, item.catsy].filter(Boolean).join(" | ");
              r.push({
                url: (item.url || "").split("&ueid")[0],
                title: item.title || "",
                content: item.abstract || "",
                publishedDate: pubdate,
                metadata: meta,
              });
            }
          } catch (e) {}
          break;
        }
        return r;
      },
    };
  });
