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
      async request(query, params, sq) {
        var start = (sq.pageno - 1) * 10,
          lang = sq.language || "all",
          lc = "en",
          cc = "US";
        if (lang !== "all") {
          var pts = lang.split("-");
          lc = pts[0];
          cc = pts[1] || lc.toUpperCase();
        }
        var qp = { q: query, hl: lc + "-" + cc, ie: "utf8", oe: "utf8", start: String(start), };
        if (lang !== "all") qp.lr = "lang_" + lc;
        if (lang && lang.includes("-")) qp.cr = "country" + cc;
        var url = "https://www.google.com/search?" + new URLSearchParams(qp);
        var tMap = { day: "d", week: "w", month: "m", year: "y" };
        if (sq.timeRange && tMap[sq.timeRange]) url += "&tbs=qdr:" + tMap[sq.timeRange];
        if (sq.safesearch) url += "&safe=" + ({0:"off",1:"medium",2:"high"})[sq.safesearch];
        params.url = url;
        params.headers["Accept-Language"] = lc + "-" + cc;
        params.cookies["CONSENT"] = "YES+";
        return params;
      },
      async response(resp, sq) {
        var $ = cheerio.load(resp.text);
        var results = [];
        // Modern Google: #search > div > div > div > div[data-hveid] > div > div > a
        // Fallback: .g. tF2Cxc or div.g
        $("div.g, .tF2Cxc").each(function () {
          var el = $(this);
          var a = el.find("a[href]").first();
          var href = a.attr("href") || "";
          var title = el.find("h3").first().text().trim() || a.text().trim();
          var snippet = el.find(".VwiC3b, [data-sncf], .lEBKkf, span.aCOpRe").first().text().trim()
            || el.find(".st, .fZi<TuU").first().text().trim();
          if (!href || href.startsWith("/")) return;
          // Filter out unwanted: videos, shopping, etc.
          if (href.includes("/search?")) return;
          if (title) results.push({ title, url: href, content: snippet, snippet });
        });
        // Suggestions
        var sug = [];
        $("div[data-suggestion]").each(function () {
          var t = $(this).attr("data-suggestion");
          if (t) sug.push(t);
        });
        return { results, suggestions: sug };
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
      async request(query, params, sq) {
        var ssMap = { 0: "off", 1: "moderate", 2: "strict" };
        var qp = { q: query, adlt: ssMap[sq.safesearch] || "off" };
        var lang = sq.language || "all";
        if (lang !== "all") {
          qp.mkt = lang;
          var lc = lang.split("-")[0];
          params.headers["Accept-Language"] = lang + "," + lc + ";q=0.9";
        }
        params.url = "https://www.bing.com/search?" + new URLSearchParams(qp);
        return params;
      },
      async response(resp, sq) {
        var $ = cheerio.load(resp.text);
        var r = [];
        $("#b_results > li.b_algo").each(function () {
          var el = $(this);
          var a = el.find("h2 a[href]").first();
          var href = a.attr("href") || "";
          var title = a.text().trim();
          var snippet = el.find(".b_caption p, .b_lineclamp2, .b_algoSlug").first().text().trim();
          if (!href || !title || href.startsWith("/")) return;
          if (href.includes("bing.com/ck/a")) {
            var u = href.match(/[?&]u=([^&]+)/);
            if (u) href = dq(u[1]);
          }
          r.push({ url: href, title, content: snippet, snippet });
        });
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
      paging: !0,
      timeRangeSupport: !0,
      safesearch: !0,
      _vqdCache: {},
      _ua: "Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0",
      async request(query, params, sq) {
        if (query.length >= 500) return params;
        var engRegion = "wt-wt",
          ddgUrl = "https://html.duckduckgo.com/html/";
        var lang = sq.language || "all";
        if (lang !== "all") {
          var pts = lang.split("-"),
            lc = pts[0],
            cc = (pts[1] || "").toUpperCase();
          engRegion = cc ? cc.toLowerCase() + "-" + lc : lc + "-" + lc;
        }
        params.headers["User-Agent"] = this._ua;
        params.headers["Sec-Fetch-Dest"] = "document";
        params.headers["Sec-Fetch-Mode"] = "navigate";
        params.headers["Sec-Fetch-Site"] = "same-origin";
        params.headers["Sec-Fetch-User"] = "?1";
        params.headers["Referer"] = "https://html.duckduckgo.com/";
        if (!params.headers["Accept-Language"])
          params.headers["Accept-Language"] = lang + "," + lang + "-" + lang.toUpperCase() + ";q=0.7";
        var fd = { q: query };
        params.url = ddgUrl;
        params.method = "POST";
        if (sq.pageno === 1) {
          fd.b = "";
        } else {
          var cacheKey = query + "//" + this._ua,
            vqd = this._vqdCache[cacheKey];
          if (vqd) fd.vqd = vqd;
          if (lang.indexOf("zh") === 0) return params;
          fd.nextParams = "";
          fd.api = "d.js";
          fd.o = "json";
          fd.v = "l";
          var offset = 10 + (sq.pageno - 2) * 15;
          fd.dc = String(offset + 1);
          fd.s = String(offset);
        }
        fd.kl = engRegion;
        params.cookies["kl"] = engRegion;
        var tRange = { day: "d", week: "w", month: "m", year: "y" }[sq.timeRange];
        if (tRange) {
          fd.df = tRange;
          params.cookies["df"] = tRange;
        }
        params.headers["Content-Type"] = "application/x-www-form-urlencoded";
        params.headers["Referer"] = ddgUrl;
        params.data = new URLSearchParams(fd).toString();
        return params;
      },
      async response(resp, sq) {
        var h = resp.text;
        if (resp.status === 303 || /<form[^>]*id="challenge-form"/i.test(h)) return { results: [] };
        var vqdMatch = h.match(/<input[^>]*name="vqd"[^>]*value="([^"]*)"/i);
        if (vqdMatch) this._vqdCache[sq.query + "//" + this._ua] = vqdMatch[1];
        var $ = cheerio.load(h);
        var r = [];
        $("div.web-result, div.result").each(function () {
          var el = $(this);
          var a = el.find("h2 a[href], a.result__a[href]").first();
          var href = a.attr("href") || "";
          var title = a.text().trim();
          var snippet = el.find(".result__snippet, .snippet").first().text().trim();
          if (!href || !title) return;
          r.push({ url: href, title, content: snippet, snippet });
        });
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
