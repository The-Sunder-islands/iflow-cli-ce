var EG_misc = {},
  eG_misc = j(() => {
    "use strict";

    function eb(text, start, end) {
      var i = text.indexOf(start);
      if (i === -1) return null;
      i += start.length;
      var j = text.indexOf(end, i);
      return j === -1 ? null : text.slice(i, j);
    }

    function st(s) {
      return s ? s.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim() : "";
    }

    function dq(s) {
      try { return decodeURIComponent(s.replace(/\+/g, " ")); } catch { return s; }
    }

    function de(s) {
      return s.replace(/\\(x[\da-fA-F]{2}|u[\da-fA-F]{4}|.)/g, function(_, e) {
        if (e[0] === "x" || e[0] === "u") return String.fromCharCode(parseInt(e.slice(1), 16));
        return { n: "\n", t: "\t", r: "\r" }[e] || e;
      });
    }

    function b64u(s) {
      s = s.replace(/-/g, "+").replace(/_/g, "/");
      s += "=".repeat((4 - (s.length % 4)) % 4);
      try { return atob(s); } catch { return s; }
    }

    function blk(html, tag, cls, from) {
      var re = new RegExp("<" + tag + '\\s[^>]*class="[^"]*' + cls + '[^"]*"[^>]*>', "i");
      re.lastIndex = from || 0;
      var m = re.exec(html);
      if (!m) return null;
      var d = 1, p = re.lastIndex, ot = "<" + tag, ct = "</" + tag + ">";
      while (d > 0 && p < html.length) {
        var no = html.indexOf(ot, p), nc = html.indexOf(ct, p);
        if (nc === -1) return { html: html.slice(m.index), start: m.index, end: html.length };
        if (no !== -1 && no < nc) { d++; p = no + ot.length; } else { d--; p = nc + ct.length; }
      }
      return { html: html.slice(m.index, p), start: m.index, end: p };
    }

    function allBlk(html, tag, cls) {
      var blocks = [], pos = 0, b;
      while (pos < html.length) {
        b = blk(html, tag, cls, pos);
        if (!b) break;
        blocks.push(b.html);
        pos = b.end;
      }
      return blocks;
    }

    function humanizeBytes(e) {
      if (!e) return "0 B";
      var t = ["B", "KB", "MB", "GB", "TB"], i = 0, n = e;
      for (; n >= 1024 && i < t.length - 1; ) (n /= 1024), i++;
      return n.toFixed(i > 0 ? 1 : 0) + " " + t[i];
    }

    function parseDateStr(s) {
      if (!s) return null;
      var d = new Date(s);
      return isNaN(d.getTime()) ? null : d;
    }

    function jsObjStrToJson(s) {
      s = s.replace(/'/g, '"');
      s = s.replace(/(\w+):/g, '"$1":');
      s = s.replace(/,\s*}/g, "}");
      s = s.replace(/,\s*]/g, "]");
      try { return JSON.parse(s); } catch { return null; }
    }

    /**
     * about: { website: "https://www.baidu.com", wikidata_id: "Q14772",
     *   use_official_api: false, require_api_key: false, results: "JSON", language: "zh" }
     */
    EG_misc.baidu = {
      name: "baidu",
      categories: [],
      shortcut: null,
      paging: !0,
      resultsPerPage: 10,
      baiduCategory: "general",
      timeRangeSupport: !0,
      timeRangeDict: { day: 86400, week: 604800, month: 2592000, year: 31536000 },
      async request(query, params, sq) {
        var pageNum = sq.pageno, rpp = this.resultsPerPage;
        var catConfig = {
          general: { endpoint: "https://www.baidu.com/s", params: { wd: query, rn: rpp, pn: (pageNum - 1) * rpp, tn: "json" } },
          images: { endpoint: "https://image.baidu.com/search/acjson", params: { word: query, rn: rpp, pn: (pageNum - 1) * rpp, tn: "resultjson_com" } },
          it: { endpoint: "https://kaifa.baidu.com/rest/v1/search", params: { wd: query, pageSize: rpp, pageNum: pageNum, paramList: "page_num=" + pageNum + ",page_size=" + rpp, position: 0 } },
        };
        var cfg = catConfig[this.baiduCategory], qp = cfg.params;
        var tr = sq.timeRange;
        if (tr && this.timeRangeDict[tr]) {
          var now = Math.floor(Date.now() / 1e3), past = now - this.timeRangeDict[tr];
          if (this.baiduCategory === "general") qp.gpc = "stf=" + past + "," + now + "|stftype=1";
          if (this.baiduCategory === "it") qp.paramList += ",timestamp_range=" + past + "-" + now;
        }
        params.url = cfg.endpoint + "?" + new URLSearchParams(qp);
        params.allowRedirects = !1;
        return params;
      },
      async response(resp, sq) {
        var text = resp.text;
        if (resp.headers && resp.headers.Location && resp.headers.Location.indexOf("wappass.baidu.com/static/captcha") !== -1) {
          return [{ error: "captcha" }];
        }
        if (this.baiduCategory === "images") {
          text = text.replace(/\\\//g, "/").replace(/\\'/g, "'");
        }
        var data;
        try { data = JSON.parse(text); } catch { return []; }
        if (this.baiduCategory === "general") return this._parseGeneral(data);
        if (this.baiduCategory === "images") return this._parseImages(data);
        if (this.baiduCategory === "it") return this._parseIt(data);
        return [];
      },
      _parseGeneral(data) {
        var results = [];
        if (!data.feed || !data.feed.entry) return results;
        for (var i = 0; i < data.feed.entry.length; i++) {
          var entry = data.feed.entry[i];
          if (!entry.title || !entry.url) continue;
          var publishedDate = null;
          if (entry.time) {
            var d = new Date(entry.time * 1e3);
            if (!isNaN(d.getTime())) publishedDate = d;
          }
          results.push({ title: st(entry.title), url: entry.url, content: st(entry.abs || ""), publishedDate: publishedDate });
        }
        return results;
      },
      _parseImages(data) {
        var results = [];
        if (data.data) {
          for (var i = 0; i < data.data.length; i++) {
            var item = data.data[i];
            if (!item) continue;
            var replaceUrl = item.replaceUrl || [{}];
            var width = item.width, height = item.height, imgDate = item.bdImgnewsDate;
            var publishedDate = null;
            if (imgDate) { var d = new Date(imgDate.replace(" ", "T")); if (!isNaN(d.getTime())) publishedDate = d; }
            results.push({
              template: "images.html", url: (replaceUrl[0] || {}).FromURL,
              thumbnailSrc: item.thumbURL, imgSrc: (replaceUrl[0] || {}).ObjURL,
              title: st(item.fromPageTitle), source: item.fromURLHost,
              resolution: width + " x " + height, imgFormat: item.type,
              filesize: item.filesize, publishedDate: publishedDate,
            });
          }
        }
        return results;
      },
      _parseIt(data) {
        var results = [];
        if (!data.data || !data.data.documents || !data.data.documents.data) return results;
        for (var i = 0; i < data.data.documents.data.length; i++) {
          var entry = data.data.documents.data[i];
          results.push({ title: entry.techDocDigest.title, url: entry.techDocDigest.url, content: entry.techDocDigest.summary });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://www.sogou.com/", wikidata_id: "Q7554565",
     *   use_official_api: false, require_api_key: false, results: "HTML", language: "zh" }
     */
    EG_misc.sogou = {
      name: "sogou",
      categories: ["general"],
      shortcut: null,
      paging: !0,
      timeRangeSupport: !0,
      baseUrl: "https://www.sogou.com",
      timeRangeDict: { day: "inttime_day", week: "inttime_week", month: "inttime_month", year: "inttime_year" },
      async request(query, params, sq) {
        var qp = { query: query, page: sq.pageno };
        var tr = sq.timeRange;
        if (this.timeRangeDict[tr]) { qp.s_from = this.timeRangeDict[tr]; qp.tsn = 1; }
        params.allowRedirects = !1;
        params.url = this.baseUrl + "/web?" + new URLSearchParams(qp);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text, results = [];
        var blocks = [];
        var rbRe = /<div[^>]*class="[^"]*\brb\b[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
        var vrRe = /<div[^>]*class="[^"]*\bvrwrap\b[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
        var m;
        while ((m = rbRe.exec(h)) !== null) blocks.push(m[1]);
        while ((m = vrRe.exec(h)) !== null) {
          if (/special-wrap/.test(m[1])) continue;
          blocks.push(m[1]);
        }
        for (var bi = 0; bi < blocks.length; bi++) {
          var bl = blocks[bi], result;
          if (/<h3[^>]*class="\s*pt\s*"[^>]*>/i.test(bl)) {
            result = this._parseResult(bl);
          } else if (/<h3[^>]*class="[^"]*vr-title[^"]*"[^>]*>/i.test(bl)) {
            result = this._parseResultWithImage(bl);
          } else continue;
          if (result.title && result.url) results.push(result);
        }
        return results;
      },
      _extractUrl(url, html) {
        if (url && url.indexOf("/link?url=") === 0) {
          var m = html.match(/data-url="([^"]+)"/);
          if (m) return m[1];
          return this.baseUrl + url;
        }
        return url;
      },
      _parseDate(text) {
        if (!text) return null;
        text = text.trim().replace(/^-+/, "").trim();
        var m = text.match(/(\d{4}-\d{1,2}-\d{1,2})/);
        if (m) { var d = new Date(m[1]); return isNaN(d.getTime()) ? null : d; }
        return null;
      },
      _parseResult(bl) {
        var titleM = bl.match(/<h3[^>]*class="\s*pt\s*"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i);
        var title = titleM ? st(titleM[1]) : "";
        var hrefM = bl.match(/<h3[^>]*class="\s*pt\s*"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"/i);
        var url = hrefM ? this._extractUrl(hrefM[1], bl) : "";
        var contentM = bl.match(/<div[^>]*class="\s*ft\s*"[^>]*>([\s\S]*?)<\/div>/i);
        var content = contentM ? st(contentM[1]) : "";
        var citeM = bl.match(/<cite[^>]*>([\s\S]*?)<\/cite>/i);
        var publishedDate = citeM ? this._parseDate(st(citeM[1])) : null;
        return { title: title, url: url, content: content, publishedDate: publishedDate };
      },
      _parseResultWithImage(bl) {
        var titleM = bl.match(/<h3[^>]*class="[^"]*vr-title[^"]*"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i);
        var title = titleM ? st(titleM[1]) : "";
        var hrefM = bl.match(/<h3[^>]*class="[^"]*vr-title[^"]*"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"/i);
        var url = hrefM ? this._extractUrl(hrefM[1], bl) : "";
        var contentM = bl.match(/<div[^>]*class="[^"]*attribute-centent[^"]*"[^>]*>([\s\S]*?)<\/div>/i) ||
          bl.match(/<div[^>]*class="[^"]*fz-mid\s+space-txt[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
        var content = contentM ? st(contentM[1]) : "";
        var dateM = bl.match(/<span[^>]*class="[^"]*cite-date[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
        var publishedDate = dateM ? this._parseDate(st(dateM[1])) : null;
        var thumbM = bl.match(/<div[^>]*class="[^"]*img-layout[^"]*"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"/i);
        var thumbnail = null;
        if (thumbM) thumbnail = thumbM[1].replace(/^http:\/\//i, "https://");
        return { title: title, url: url, content: content, publishedDate: publishedDate, thumbnail: thumbnail };
      },
    };

    /**
     * about: { website: "https://pic.sogou.com/", wikidata_id: "Q7554565",
     *   use_official_api: false, require_api_key: false, results: "HTML" }
     */
    EG_misc.sogou_images = {
      name: "sogou_images",
      categories: ["images"],
      shortcut: null,
      paging: !0,
      baseUrl: "https://pic.sogou.com",
      async request(query, params, sq) {
        var qp = { query: query, start: (sq.pageno - 1) * 48 };
        params.url = this.baseUrl + "/pics?" + new URLSearchParams(qp);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text, results = [];
        var m = h.match(/window\.__INITIAL_STATE__\s*=\s*({.*?});/s);
        if (!m) return results;
        var data;
        try { data = JSON.parse(m[1]); } catch { return results; }
        if (data.searchList && data.searchList.searchList) {
          for (var i = 0; i < data.searchList.searchList.length; i++) {
            var item = data.searchList.searchList[i];
            results.push({
              template: "images.html", url: item.url || "", thumbnailSrc: item.picUrl || "",
              imgSrc: item.picUrl || "", content: item.content_major || "",
              title: item.title || "", source: item.ch_site_name || "",
            });
          }
        }
        return results;
      },
    };

    /**
     * about: { website: "https://v.sogou.com/", use_official_api: false,
     *   require_api_key: false, results: "JSON", language: "zh" }
     */
    EG_misc.sogou_videos = {
      name: "sogou_videos",
      categories: ["videos"],
      shortcut: null,
      paging: !0,
      baseUrl: "https://v.sogou.com",
      async request(query, params, sq) {
        var qp = { page: sq.pageno, pagesize: 10, query: query };
        params.url = this.baseUrl + "/api/video/shortVideoV2?" + new URLSearchParams(qp);
        return params;
      },
      async response(resp, sq) {
        var data = resp.json, results = [];
        if (!data || !data.data || !data.data.list) return results;
        for (var i = 0; i < data.data.list.length; i++) {
          var entry = data.data.list[i];
          if (!entry.titleEsc || !entry.url) continue;
          var videoUrl = entry.url;
          if (videoUrl.indexOf("/vc/np") === 0) videoUrl = this.baseUrl + videoUrl;
          var publishedDate = null;
          if (entry.date) { var d = new Date(entry.date); if (!isNaN(d.getTime())) publishedDate = d; }
          var length = null;
          if (entry.duration) {
            var dm = entry.duration.match(/(\d+):(\d+)/);
            if (dm) length = parseInt(dm[1], 10) * 60 + parseInt(dm[2], 10);
          }
          results.push({ url: videoUrl, title: entry.titleEsc, content: entry.site, length: length, template: "videos.html", publishedDate: publishedDate, thumbnail: entry.picurl });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://weixin.sogou.com/", use_official_api: false,
     *   require_api_key: false, results: "HTML", language: "zh" }
     */
    EG_misc.sogou_wechat = {
      name: "sogou_wechat",
      categories: ["news"],
      shortcut: null,
      paging: !0,
      baseUrl: "https://weixin.sogou.com",
      async request(query, params, sq) {
        var qp = { query: query, page: sq.pageno, type: 2 };
        params.url = this.baseUrl + "/weixin?" + new URLSearchParams(qp);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text, results = [];
        var liRe = /<li[^>]*id="sogou_vr_[^"]*"[^>]*>([\s\S]*?)<\/li>/gi;
        var lm;
        while ((lm = liRe.exec(h)) !== null) {
          var item = lm[1];
          var titleM = item.match(/<h3[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i);
          var title = titleM ? st(titleM[1]) : "";
          var hrefM = item.match(/<h3[\s\S]*?<a[^>]*href="([^"]*)"/i);
          var url = hrefM ? hrefM[1] : "";
          if (url.indexOf("/link?url=") === 0) url = this.baseUrl + url;
          var contentM = item.match(/<p[^>]*class="\s*txt-info\s*"[^>]*>([\s\S]*?)<\/p>/i) ||
            item.match(/<p[^>]*class="[^"]*txt-info[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
          var content = contentM ? st(contentM[1]) : "";
          var thumbM = item.match(/<div[^>]*class="\s*img-box\s*"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"/i);
          var thumbnail = null;
          if (thumbM) { thumbnail = thumbM[1]; if (thumbnail.indexOf("//") === 0) thumbnail = "https:" + thumbnail; }
          var publishedDate = null;
          var tsM = item.match(/timeConvert\('(\d+)'\)/);
          if (tsM) { var d = new Date(parseInt(tsM[1], 10) * 1e3); if (!isNaN(d.getTime())) publishedDate = d; }
          if (title && url) results.push({ title: title, url: url, content: content, thumbnail: thumbnail, publishedDate: publishedDate });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://www.chinaso.com/", wikidata_id: "Q10846064",
     *   use_official_api: false, require_api_key: false, results: "JSON", language: "zh" }
     */
    EG_misc.chinaso = {
      name: "chinaso",
      categories: [],
      shortcut: null,
      paging: !0,
      timeRangeSupport: !0,
      resultsPerPage: 10,
      chinasoCategory: "news",
      chinasoNewsSource: "all",
      baseUrl: "https://www.chinaso.com",
      timeRangeDict: { day: "24h", week: "1w", month: "1m", year: "1y" },
      async request(query, params, sq) {
        var qp = { q: query };
        var tr = sq.timeRange;
        if (this.timeRangeDict[tr]) { qp.stime = this.timeRangeDict[tr]; qp.etime = "now"; }
        var catConfig = {
          news: { endpoint: "/v5/general/v1/web/search", params: { pn: sq.pageno, ps: this.resultsPerPage } },
          images: { endpoint: "/v5/general/v1/search/image", params: { start_index: (sq.pageno - 1) * this.resultsPerPage, rn: this.resultsPerPage } },
          videos: { endpoint: "/v5/general/v1/search/video", params: { start_index: (sq.pageno - 1) * this.resultsPerPage, rn: this.resultsPerPage } },
        };
        var cfg = catConfig[this.chinasoCategory];
        if (this.chinasoCategory === "news" && this.chinasoNewsSource !== "all") {
          if (this.chinasoNewsSource === "EPAPER") cfg.params.type = "EPAPER";
          else cfg.params.cate = this.chinasoNewsSource;
        }
        for (var k in cfg.params) qp[k] = cfg.params[k];
        params.url = this.baseUrl + cfg.endpoint + "?" + new URLSearchParams(qp);
        var buf = new Uint8Array(16);
        crypto.getRandomValues(buf);
        var uid = btoa(String.fromCharCode.apply(null, buf));
        params.cookies = { uid: uid };
        return params;
      },
      async response(resp, sq) {
        var data = resp.json;
        if (!data) return [];
        if (this.chinasoCategory === "news") return this._parseNews(data);
        if (this.chinasoCategory === "images") return this._parseImages(data);
        if (this.chinasoCategory === "videos") return this._parseVideos(data);
        return [];
      },
      _parseNews(data) {
        var results = [];
        if (!data.data || !data.data.data) return results;
        for (var i = 0; i < data.data.data.length; i++) {
          var entry = data.data.data[i];
          var publishedDate = null;
          if (entry.timestamp) { var d = new Date(parseInt(entry.timestamp, 10) * 1e3); if (!isNaN(d.getTime())) publishedDate = d; }
          results.push({ title: st(entry.title), url: entry.url, content: st(entry.snippet), publishedDate: publishedDate });
        }
        return results;
      },
      _parseImages(data) {
        var results = [];
        if (!data.data || !data.data.arrRes) return results;
        for (var i = 0; i < data.data.arrRes.length; i++) {
          var entry = data.data.arrRes[i];
          results.push({
            url: entry.web_url, title: st(entry.title), content: st(entry.ImageInfo || ""),
            template: "images.html", imgSrc: entry.url.replace(/^http:\/\//i, "https://"),
            thumbnailSrc: entry.largeimage.replace(/^http:\/\//i, "https://"),
          });
        }
        return results;
      },
      _parseVideos(data) {
        var results = [];
        if (!data.data || !data.data.arrRes) return results;
        for (var i = 0; i < data.data.arrRes.length; i++) {
          var entry = data.data.arrRes[i];
          var publishedDate = null;
          if (entry.VideoPubDate) { var d = new Date(parseInt(entry.VideoPubDate, 10) * 1e3); if (!isNaN(d.getTime())) publishedDate = d; }
          results.push({
            url: entry.url, title: st(entry.raw_title), template: "videos.html",
            publishedDate: publishedDate, thumbnail: entry.image_src.replace(/^http:\/\//i, "https://"),
          });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://search.naver.com", wikidata_id: "Q485639",
     *   use_official_api: false, require_api_key: false, results: "HTML", language: "ko" }
     */
    EG_misc.naver = {
      name: "naver",
      categories: [],
      shortcut: null,
      paging: !0,
      timeRangeSupport: !0,
      baseUrl: "https://search.naver.com",
      naverCategory: "general",
      timeRangeDict: { day: "1d", week: "1w", month: "1m", year: "1y" },
      categoryDict: { general: { start: 15, where: "web" }, images: { start: 50, where: "image" }, news: { start: 10, where: "news" }, videos: { start: 48, where: "video" } },
      async request(query, params, sq) {
        var qp = { query: query };
        var cat = this.categoryDict[this.naverCategory];
        if (cat) { qp.start = (sq.pageno - 1) * cat.start + 1; qp.where = cat.where; }
        var tr = sq.timeRange;
        if (this.timeRangeDict[tr]) qp.nso = "p:" + this.timeRangeDict[tr];
        params.url = this.baseUrl + "/search.naver?" + new URLSearchParams(qp);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text;
        if (this.naverCategory === "general") return this._parseGeneral(h);
        if (this.naverCategory === "images") return this._parseImages(h);
        if (this.naverCategory === "news") return this._parseNews(h);
        if (this.naverCategory === "videos") return this._parseVideos(h);
        return [];
      },
      _parseGeneral(h) {
        var results = [];
        var blocks = allBlk(h, "li", "bx");
        for (var bi = 0; bi < blocks.length; bi++) {
          var bl = blocks[bi];
          var titleM = bl.match(/<a[^>]*class="[^"]*link_tit[^"]*"[^>]*>([\s\S]*?)<\/a>/i);
          var title = titleM ? st(titleM[1]) : "";
          var urlM = bl.match(/<a[^>]*class="[^"]*link_tit[^"]*"[^>]*href="([^"]*)"/i);
          var url = urlM ? urlM[1] : "";
          var contentM = bl.match(/<div[^>]*class="[^"]*total_dsc_wrap[^"]*"[^>]*>[\s\S]*?<a[^>]*class="[^"]*api_txt_lines[^"]*"[^>]*>([\s\S]*?)<\/a>/i);
          var content = contentM ? st(contentM[1]) : "";
          var thumbM = bl.match(/<div[^>]*class="[^"]*thumb_single[^"]*"[^>]*>[\s\S]*?<img[^>]*data-lazysrc="([^"]*)"/i);
          var thumbnail = thumbM ? thumbM[1] : null;
          if (title && url) results.push({ title: title, url: url, content: content, thumbnail: thumbnail });
        }
        return results;
      },
      _parseImages(h) {
        var results = [];
        var script = eb(h, "<script>var imageSearchTabData=", "</script>");
        if (!script) return results;
        try {
          var json = JSON.parse(script.trim().replace(/'/g, '"').replace(/(\w+):/g, '"$1":').replace(/,\s*}/g, "}"));
          var items = (json.content || {}).items || [];
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            results.push({
              template: "images.html", url: item.link, thumbnailSrc: item.thumb,
              imgSrc: item.originalUrl, title: st(item.title), source: item.source,
              resolution: (item.orgWidth || "?") + " x " + (item.orgHeight || "?"),
            });
          }
        } catch (e) {}
        return results;
      },
      _parseNews(h) {
        var results = [];
        var blocks = allBlk(h, "div", "sds-comps-full-layout");
        if (blocks.length === 0) blocks = allBlk(h, "div", "sds-comps-base-layout");
        for (var bi = 0; bi < blocks.length; bi++) {
          var bl = blocks[bi];
          var titleM = bl.match(/<span[^>]*class="[^"]*sds-comps-text-type-headline1[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
          var title = titleM ? st(titleM[1]) : "";
          var urlM = bl.match(/<a[^>]*href="([^"]*)"[^>]*nocr="1"/i);
          var url = urlM ? urlM[1] : "";
          var contentM = bl.match(/<span[^>]*class="[^"]*sds-comps-text-type-body1[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
          var content = contentM ? st(contentM[1]) : "";
          var thumbM = bl.match(/<div[^>]*class="[^"]*sds-comps-image[^"]*sds-rego-thumb-overlay[^"]*"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"/i);
          var thumbnail = thumbM ? thumbM[1] : null;
          if (title && content && url) results.push({ title: title, url: url, content: content, thumbnail: thumbnail });
        }
        return results;
      },
      _parseVideos(h) {
        var results = [];
        var blocks = allBlk(h, "li", "video_item");
        for (var bi = 0; bi < blocks.length; bi++) {
          var bl = blocks[bi];
          var titleM = bl.match(/<a[^>]*class="[^"]*info_title[^"]*"[^>]*>([\s\S]*?)<\/a>/i);
          var title = titleM ? st(titleM[1]) : "";
          var urlM = bl.match(/<a[^>]*class="[^"]*info_title[^"]*"[^>]*href="([^"]*)"/i);
          var url = urlM ? urlM[1] : "";
          var thumbM = bl.match(/<img[^>]*class="[^"]*thumb[^"]*"[^>]*src="([^"]*)"/i);
          var thumbnail = thumbM ? thumbM[1] : null;
          var lenM = bl.match(/<span[^>]*class="[^"]*time[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
          var length = null;
          if (lenM) {
            var dm = st(lenM[1]).match(/(\d+):(\d+):(\d+)/) || st(lenM[1]).match(/(\d+):(\d+)/);
            if (dm) length = dm[3] ? parseInt(dm[1], 10) * 3600 + parseInt(dm[2], 10) * 60 + parseInt(dm[3], 10) : parseInt(dm[1], 10) * 60 + parseInt(dm[2], 10);
          }
          if (title && url) results.push({ template: "videos.html", title: title, url: url, thumbnail: thumbnail, length: length });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://www.qwant.com/", wikidata_id: "Q14657870",
     *   use_official_api: true, require_api_key: false, results: "JSON" }
     */
    EG_misc.qwant = {
      name: "qwant",
      categories: [],
      shortcut: null,
      paging: !0,
      maxPage: 5,
      qwantCateg: null,
      safesearch: !0,
      apiUrl: "https://api.qwant.com/v3/search/",
      webLiteUrl: "https://lite.qwant.com/",
      async request(query, params, sq) {
        if (!query) return null;
        var qLocale = sq.language || "en_US";
        var url, args = { q: query };
        params.raiseForHttperror = !1;
        if (this.qwantCateg === "web-lite") {
          url = this.webLiteUrl + "?";
          args.locale = qLocale.toLowerCase();
          args.l = qLocale.split("_")[0];
          args.s = sq.safesearch;
          args.p = sq.pageno;
          params.raiseForHttperror = !0;
        } else if (this.qwantCateg === "images") {
          url = this.apiUrl + "images?";
          args.count = 50;
          args.locale = qLocale;
          args.safesearch = sq.safesearch;
          args.tgp = 3;
          args.offset = (sq.pageno - 1) * args.count;
        } else {
          url = this.apiUrl + this.qwantCateg + "?";
          args.count = 10;
          args.locale = qLocale;
          args.safesearch = sq.safesearch;
          args.llm = "false";
          args.tgp = 3;
          args.offset = (sq.pageno - 1) * args.count;
        }
        params.url = url + new URLSearchParams(args);
        return params;
      },
      async response(resp, sq) {
        if (this.qwantCateg === "web-lite") return this._parseWebLite(resp);
        return this._parseWebApi(resp, sq);
      },
      _parseWebLite(resp) {
        var h = resp.text, results = [];
        var sections = allBlk(h, "section", "");
        if (sections.length === 0) {
          var articleRe = /<article[^>]*>([\s\S]*?)<\/article>/gi;
          var am;
          while ((am = articleRe.exec(h)) !== null) sections.push(am[1]);
        }
        for (var si = 0; si < sections.length; si++) {
          var bl = sections[si];
          if (/<span[^>]*class="[^"]*tooltip[^"]*"/i.test(bl)) continue;
          var urlM = bl.match(/<span[^>]*class="[^"]*url\s+partner[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
          var url = urlM ? st(urlM[1]) : "";
          var titleM = bl.match(/<h2[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i);
          var title = titleM ? st(titleM[1]) : "";
          var contentM = bl.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
          var content = contentM ? st(contentM[1]) : "";
          results.push({ url: url, title: title, content: content });
        }
        return results;
      },
      _parseWebApi(resp, sq) {
        var results = [], data;
        try { data = resp.json; } catch { data = {}; }
        if (!data) data = {};
        if (data.status !== "success") {
          if (data.data && data.data.error_code === 24) return [{ error: "too_many_requests" }];
          if (data.data && data.data.error_data && data.data.error_data.captchaUrl) return [{ error: "captcha" }];
          if (resp.status === 403) return [{ error: "access_denied" }];
        }
        var mainline;
        if (this.qwantCateg === "web") {
          mainline = ((data.data || {}).result || {}).items || {};
          mainline = mainline.mainline || [];
        } else {
          mainline = ((data.data || {}).result || {}).items || [];
          mainline = [{ type: this.qwantCateg, items: mainline }];
        }
        if (!mainline || mainline.length === 0) return results;
        for (var ri = 0; ri < mainline.length; ri++) {
          var row = mainline[ri];
          var mainlineType = row.type || "web";
          if (mainlineType !== this.qwantCateg || mainlineType === "ads") continue;
          var items = row.items || [];
          for (var ii = 0; ii < items.length; ii++) {
            var item = items[ii];
            var title = item.title || null;
            var resUrl = item.url || null;
            if (mainlineType === "web") {
              results.push({ title: title, url: resUrl, content: item.desc || "" });
            } else if (mainlineType === "news") {
              var pubDate = item.date != null ? new Date(item.date * 1e3) : null;
              var newsMedia = item.media || [];
              var thumbnail = newsMedia.length > 0 ? ((newsMedia[0].pict || {}).url) : null;
              results.push({ title: title, url: resUrl, publishedDate: pubDate, thumbnail: thumbnail });
            } else if (mainlineType === "images") {
              results.push({ title: title, url: resUrl, template: "images.html", thumbnailSrc: item.thumbnail, imgSrc: item.media, resolution: (item.width || "?") + " x " + (item.height || "?"), imgFormat: item.thumb_type });
            } else if (mainlineType === "videos") {
              var d = item.desc || "", s = item.source || "", c = item.channel || "";
              var contentParts = [];
              if (d) contentParts.push(d);
              if (s) contentParts.push("Source: " + s);
              if (c) contentParts.push("Channel: " + c);
              var content = contentParts.join(" // ");
              var length = item.duration != null ? Math.round(item.duration / 1e3) : null;
              var vPubDate = item.date != null ? new Date(item.date * 1e3) : null;
              var vThumb = item.thumbnail ? item.thumbnail.replace("https://s2.qwant.com", "https://s1.qwant.com") : null;
              results.push({ title: title, url: resUrl, content: content, publishedDate: vPubDate, thumbnail: vThumb, template: "videos.html", length: length });
            }
          }
        }
        return results;
      },
    };

    /**
     * about: { website: "https://search.brave.com/", wikidata_id: "Q22906900",
     *   use_official_api: false, require_api_key: false, results: "HTML" }
     */
    EG_misc.brave = {
      name: "brave",
      categories: [],
      shortcut: null,
      paging: !1,
      maxPage: 10,
      braveCategory: "search",
      safesearch: !0,
      safesearchMap: { 2: "strict", 1: "moderate", 0: "off" },
      timeRangeSupport: !1,
      timeRangeMap: { day: "pd", week: "pw", month: "pm", year: "py" },
      baseUrl: "https://search.brave.com/",
      braveSpellcheck: !1,
      async request(query, params, sq) {
        var args = { q: query, source: "web" };
        if (this.braveSpellcheck) args.spellcheck = "1";
        if (this.braveCategory === "search" || this.braveCategory === "goggles") {
          if ((sq.pageno || 1) > 1) args.offset = (sq.pageno || 1) - 1;
          var tr = sq.timeRange;
          if (this.timeRangeMap[tr]) args.tf = this.timeRangeMap[tr];
        }
        params.headers["Accept-Encoding"] = "gzip, deflate";
        params.url = this.baseUrl + this.braveCategory + "?" + new URLSearchParams(args);
        params.cookies = params.cookies || {};
        params.cookies.safesearch = this.safesearchMap[sq.safesearch] || "off";
        params.cookies.useLocation = "0";
        params.cookies.summarizer = "0";
        var lang = sq.language || "all";
        if (lang !== "all") {
          var parts = lang.split("-");
          params.cookies.country = parts.length > 1 ? parts[1].toLowerCase() : "us";
        } else {
          params.cookies.country = "us";
        }
        params.cookies.ui_lang = lang !== "all" ? lang.toLowerCase() : "en-us";
        return params;
      },
      async response(resp, sq) {
        if (this.braveCategory === "search" || this.braveCategory === "goggles") return this._parseSearch(resp, sq);
        if (this.braveCategory === "news") return this._parseNews(resp);
        var jsonData = this._extractJsonData(resp.text);
        if (!jsonData) return [];
        var jsonResp = jsonData.data && jsonData.data[1] && jsonData.data[1].data && jsonData.data[1].data.body && jsonData.data[1].data.body.response;
        if (!jsonResp) return [];
        if (this.braveCategory === "images") return this._parseImages(jsonResp);
        if (this.braveCategory === "videos") return this._parseVideos(jsonResp);
        return [];
      },
      _extractJsonData(text) {
        var scriptStart = text.indexOf("<script");
        if (scriptStart === -1) return null;
        var scriptEnd = text.indexOf("</script", scriptStart);
        if (scriptEnd === -1) return null;
        var scriptContent = text.slice(scriptStart, scriptEnd);
        var dataStart = scriptContent.indexOf("data: [{");
        if (dataStart === -1) return null;
        var dataEnd = scriptContent.lastIndexOf("}}]");
        if (dataEnd === -1) return null;
        var jsObjStr = scriptContent.slice(dataStart, dataEnd);
        jsObjStr = "{" + jsObjStr + "}}]}";
        try {
          var jsonStr = jsObjStr.replace(/'/g, '"').replace(/([{,]\s*)(\w+)(\s*:)/g, "$1\"$2\"$3");
          return JSON.parse(jsonStr);
        } catch { return null; }
      },
      _parseSearch(resp, sq) {
        var h = resp.text, results = [];
        var snippets = allBlk(h, "div", "snippet");
        for (var si = 0; si < snippets.length; si++) {
          var bl = snippets[si];
          var urlM = bl.match(/<a[^>]*href="([^"]*)"/);
          var url = urlM ? urlM[1] : null;
          var titleM = bl.match(/<div[^>]*class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
          var title = titleM ? st(titleM[1]) : "";
          if (!url || !title) continue;
          var contentM = bl.match(/<div[^>]*class="[^"]*\scontent\s[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
          var content = "",
            pubDate = null;
          if (contentM) {
            content = st(contentM[1]);
            var dateM = contentM[1].match(/<span[^>]*class="[^"]*t-secondary[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
            if (dateM) {
              var dateStr = st(dateM[1]);
              var d = new Date(dateStr);
              if (!isNaN(d.getTime())) { pubDate = d; content = content.replace(dateStr, "").replace(/^-\s*\n?\s*/, "").trim(); }
            }
          }
          var thumbM = bl.match(/<a[^>]*class="[^"]*thumbnail[^"]*"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"/i);
          var thumbnail = thumbM ? thumbM[1] : "";
          results.push({ url: url, title: title, content: content, publishedDate: pubDate, thumbnail: thumbnail });
          if (/youtube\.com/.test(url)) {
            results[results.length - 1].iframeSrc = "https://www.youtube.com/embed/" + (url.match(/(?:v=|youtu\.be\/)([\w-]+)/) || [])[1];
          }
        }
        var sugRe = /<a[^>]*class="[^"]*related-query[^"]*"[^>]*>([\s\S]*?)<\/a>/gi;
        var sm;
        while ((sm = sugRe.exec(h)) !== null) { results.push({ suggestion: st(sm[1]) }); }
        return results;
      },
      _parseNews(resp) {
        var h = resp.text, results = [];
        var newsItems = allBlk(h, "div", "results");
        if (newsItems.length > 0) {
          var newsRe = /<div[^>]*data-type="news"[^>]*>([\s\S]*?)<\/div>/gi;
          var nm;
          while ((nm = newsRe.exec(newsItems[0])) !== null) {
            var bl = nm[1];
            var urlM = bl.match(/<a[^>]*class="[^"]*result-header[^"]*"[^>]*href="([^"]*)"/i);
            var url = urlM ? urlM[1] : null;
            if (!url) continue;
            var titleM = bl.match(/<span[^>]*class="[^"]*snippet-title[^"]*"[^>]*>([\s\S]*?)<\/span>/i);
            var title = titleM ? st(titleM[1]) : "";
            var contentM = bl.match(/<p[^>]*class="[^"]*desc[^"]*"[^>]*>([\s\S]*?)<\/p>/i);
            var content = contentM ? st(contentM[1]) : "";
            var thumbM = bl.match(/<div[^>]*class="[^"]*image-wrapper[^"]*"[^>]*>[\s\S]*?<img[^>]*src="([^"]*)"/i);
            var thumbnail = thumbM ? thumbM[1] : "";
            results.push({ url: url, title: title, content: content, thumbnail: thumbnail });
          }
        }
        return results;
      },
      _parseImages(jsonResp) {
        var results = [];
        var res = jsonResp.results || [];
        for (var i = 0; i < res.length; i++) {
          var r = res[i];
          results.push({
            template: "images.html", url: r.url, title: r.title,
            source: r.source, imgSrc: (r.properties || {}).url,
            thumbnailSrc: (r.thumbnail || {}).src,
          });
        }
        return results;
      },
      _parseVideos(jsonResp) {
        var results = [];
        var res = jsonResp.results || [];
        for (var i = 0; i < res.length; i++) {
          var r = res[i];
          var age = r.age;
          var publishedDate = age ? parseDateStr(age) : null;
          var thumbnail = r.thumbnail ? r.thumbnail.src : null;
          var item = {
            template: "videos.html", url: r.url, title: r.title,
            content: r.description, length: (r.video || {}).duration,
            publishedDate: publishedDate, thumbnail: thumbnail,
          };
          if (/youtube\.com/.test(r.url)) {
            var idM = r.url.match(/(?:v=|youtu\.be\/)([\w-]+)/);
            if (idM) item.iframeSrc = "https://www.youtube.com/embed/" + idM[1];
          }
          results.push(item);
        }
        return results;
      },
    };

    /**
     * about: { website: "https://api.search.brave.com/", wikidata_id: null,
     *   official_api_documentation: "https://api-dashboard.search.brave.com/documentation",
     *   use_official_api: true, require_api_key: true, results: "JSON" }
     */
    EG_misc.braveapi = {
      name: "braveapi",
      categories: ["general", "web"],
      shortcut: null,
      paging: !0,
      safesearch: !0,
      timeRangeSupport: !0,
      resultsPerPage: 20,
      baseUrl: "https://api.search.brave.com/res/v1/web/search",
      apiKey: "",
      timeRangeMap: { day: "past_day", week: "past_week", month: "past_month", year: "past_year" },
      async request(query, params, sq) {
        var args = { q: query, count: this.resultsPerPage, offset: (sq.pageno - 1) * this.resultsPerPage };
        var tr = sq.timeRange;
        if (tr && this.timeRangeMap[tr]) args.time_range = this.timeRangeMap[tr];
        if (sq.safesearch) args.safesearch = "strict";
        params.url = this.baseUrl + "?" + new URLSearchParams(args);
        params.headers["X-Subscription-Token"] = this.apiKey;
        return params;
      },
      async response(resp, sq) {
        var results = [];
        var data = resp.json;
        if (!data || !data.web || !data.web.results) return results;
        for (var i = 0; i < data.web.results.length; i++) {
          var r = data.web.results[i];
          results.push({
            url: r.url, title: r.title, content: r.description || "",
            publishedDate: r.age ? parseDateStr(r.age) : null,
            thumbnail: (r.thumbnail || {}).src,
          });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://mojeek.com", wikidata_id: "Q60747299",
     *   official_api_documentation: "https://www.mojeek.com/support/api/search/request_parameters.html",
     *   use_official_api: false, require_api_key: false, results: "HTML" }
     */
    EG_misc.mojeek = {
      name: "mojeek",
      categories: ["general", "web"],
      shortcut: null,
      paging: !0,
      safesearch: !0,
      timeRangeSupport: !0,
      maxPage: 10,
      baseUrl: "https://www.mojeek.com",
      searchType: "",
      async request(query, params, sq) {
        var args = { q: query, safe: Math.min(sq.safesearch, 1) };
        if (this.searchType) args.fmt = this.searchType;
        if (this.searchType === "" && sq.pageno > 1) args.s = 10 * (sq.pageno - 1);
        if (sq.timeRange && this.searchType !== "images") {
          var deltaMap = { day: 1, week: 7, month: 30, year: 365 };
          var d = new Date(Date.now() - deltaMap[sq.timeRange] * 864e5);
          args.since = d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2);
        }
        params.url = this.baseUrl + "/search?" + new URLSearchParams(args);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text;
        if (this.searchType === "") return this._generalResults(h);
        if (this.searchType === "images") return this._imageResults(h);
        if (this.searchType === "news") return this._newsResults(h);
        return [];
      },
      _generalResults(h) {
        var results = [];
        var liBlocks = allBlk(h, "li", "results-standard");
        if (liBlocks.length > 0) {
          var aRe = /<a[^>]*class="[^"]*\bob\b[^"]*"[^>]*href="([^"]*)">([\s\S]*?)<\/a>/gi;
          var fullList = liBlocks[0];
          var contentRe = /<p[^>]*class="\s*s\s*"[^>]*>([\s\S]*?)<\/p>/gi;
          var contents = [];
          var cm;
          while ((cm = contentRe.exec(fullList)) !== null) contents.push(st(cm[1]));
          var am;
          var ci = 0;
          while ((am = aRe.exec(fullList)) !== null) {
            var url = am[1];
            var title = "";
            var h2M = fullList.slice(am.index).match(/<h2[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i);
            if (h2M) title = st(h2M[1]);
            if (url && !/^https?:\/\//i.test(url)) {
              var dataHref = am[0].match(/data-href="([^"]*)"/);
              if (dataHref) url = dataHref[1];
            }
            var content = ci < contents.length ? contents[ci] : "";
            ci++;
            if (url && title) results.push({ url: url, title: title, content: content });
          }
        }
        var sugRe = /<p[^>]*class="[^"]*top-info\s+spell[^"]*"[^>]*>[\s\S]*?<em[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i;
        var sm = sugRe.exec(h);
        if (sm) results.push({ suggestion: st(sm[1]) });
        return results;
      },
      _imageResults(h) {
        var results = [];
        var blocks = allBlk(h, "div", "image");
        if (blocks.length === 0) blocks = allBlk(h, "div", "results");
        for (var bi = 0; bi < blocks.length; bi++) {
          var imgRe = /<div[^>]*class="[^"]*\bimage\b[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
          var im;
          while ((im = imgRe.exec(blocks[bi])) !== null) {
            var bl = im[1];
            var urlM = bl.match(/<a[^>]*href="([^"]*)"/i);
            var url = urlM ? urlM[1] : "";
            var title = bl.match(/data-title="([^"]*)"/i);
            var titleStr = title ? dq(title[1]) : "";
            var srcM = bl.match(/<img[^>]*src="([^"]*)"/i);
            var imgSrc = srcM ? this.baseUrl + srcM[1] : "";
            if (url) results.push({ template: "images.html", url: url, title: titleStr, imgSrc: imgSrc, content: "" });
          }
        }
        return results;
      },
      _newsResults(h) {
        var results = [];
        var articles = allBlk(h, "article", "news-search-result");
        if (articles.length === 0) {
          var secRe = /<section[^>]*class="[^"]*news-search-result[^"]*"[^>]*>([\s\S]*?)<\/section>/gi;
          var sm;
          while ((sm = secRe.exec(h)) !== null) articles.push(sm[1]);
        }
        for (var ai = 0; ai < articles.length; ai++) {
          var bl = articles[ai];
          var urlM = bl.match(/<h2[\s\S]*?<a[^>]*href="([^"]*)"/i);
          var url = urlM ? urlM[1] : "";
          var titleM = bl.match(/<h2[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i);
          var title = titleM ? st(titleM[1]) : "";
          var contentM = bl.match(/<p[^>]*class="\s*s\s*"[^>]*>([\s\S]*?)<\/p>/i);
          var content = contentM ? st(contentM[1]) : "";
          if (url) results.push({ url: url, title: title, content: content });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://startpage.com", wikidata_id: "Q2333295",
     *   use_official_api: false, require_api_key: false, results: "HTML" }
     */
    EG_misc.startpage = {
      name: "startpage",
      categories: ["general", "web"],
      shortcut: null,
      paging: !0,
      maxPage: 18,
      timeRangeSupport: !0,
      safesearch: !0,
      startpageCateg: "web",
      baseUrl: "https://www.startpage.com",
      searchUrl: "https://www.startpage.com/sp/search",
      timeRangeDict: { day: "d", week: "w", month: "m", year: "y" },
      safesearchDict: { 0: "1", 1: "0", 2: "0" },
      _scCode: null,
      _scCodeTime: 0,
      _scCodeCacheSec: 3600,
      async _getScCode(params) {
        if (this._scCode && Date.now() - this._scCodeTime < this._scCodeCacheSec * 1e3) return this._scCode;
        var resp;
        try { resp = await fetch(this.baseUrl + "/", { headers: params.headers || {} }); } catch { return null; }
        var text = await resp.text();
        if (resp.url && resp.url.indexOf("/sp/captcha") !== -1) return null;
        var m = text.match(/<input[^>]*name="sc"[^>]*value="([^"]*)"/i);
        if (!m) return null;
        this._scCode = m[1];
        this._scCodeTime = Date.now();
        return this._scCode;
      },
      async request(query, params, sq) {
        var engineRegion = sq.language || "en-US";
        var engineLanguage = (sq.language || "en").split("-")[0];
        var scCode = await this._getScCode(params);
        if (!scCode) return params;
        params.headers["Origin"] = this.baseUrl;
        params.headers["Referer"] = this.baseUrl + "/";
        var args = {
          query: query, cat: this.startpageCateg, t: "device", sc: scCode,
          with_date: this.timeRangeDict[sq.timeRange] || "",
          abp: "1", abd: "1", abe: "1",
        };
        if (engineLanguage) { args.language = engineLanguage; args.lui = engineLanguage; }
        if (sq.pageno > 1) { args.page = sq.pageno; args.segment = "startpage.udog"; }
        var cookie = {
          date_time: "world", disable_family_filter: this.safesearchDict[sq.safesearch],
          disable_open_in_new_window: "0", enable_post_method: "1",
          enable_proxy_safety_suggest: "1", enable_stay_control: "1",
          instant_answers: "1", lang_homepage: "s/device/en/",
          num_of_results: "10", suggestions: "1", wt_unit: "celsius",
        };
        if (engineLanguage) { cookie.language = engineLanguage; cookie.language_ui = engineLanguage; }
        if (engineRegion) cookie.search_results_region = engineRegion;
        var cookieStr = Object.keys(cookie).map(function(k) { return k + "EEE" + cookie[k]; }).join("N1N");
        params.cookies = params.cookies || {};
        params.cookies.preferences = cookieStr;
        params.data = args;
        params.method = "POST";
        params.url = this.searchUrl;
        return params;
      },
      async response(resp, sq) {
        var h = resp.text;
        if (resp.headers && resp.headers.Location && resp.headers.Location.indexOf("/sp/captcha") !== -1) return [];
        var categ = this.startpageCateg.charAt(0).toUpperCase() + this.startpageCateg.slice(1);
        var startStr = 'React.createElement(UIStartpage.AppSerp' + categ + ', {';
        var startI = h.indexOf(startStr);
        if (startI === -1) return [];
        startI += startStr.length;
        var depth = 1, pos = startI;
        while (depth > 0 && pos < h.length) {
          if (h[pos] === '{') depth++;
          else if (h[pos] === '}') depth--;
          pos++;
        }
        var jsonStr;
        try {
          jsonStr = h.slice(startI - 1, pos);
          var resultsJson = JSON.parse(jsonStr);
          var regions = ((resultsJson.render || {}).presenter || {}).regions || {};
          var mainline = regions.mainline || [];
          var results = [];
          for (var mi = 0; mi < mainline.length; mi++) {
            var mainlineItems = mainline[mi].results || [];
            var displayType = mainline[mi].display_type || "";
            for (var ri = 0; ri < mainlineItems.length; ri++) {
              var item = mainlineItems[ri];
              if (displayType === "web-google") {
                var content = st(item.description || "");
                var pDate = null;
                var dM = content.match(/^(\d{1,2}\s+[A-Z][a-z]{2}\s+\d{4})\s*\.\.\.\s*/);
                if (dM) { pDate = parseDateStr(dM[1]); content = content.slice(content.indexOf("...") + 4); }
                results.push({ url: item.clickUrl, title: st(item.title), content: content, publishedDate: pDate });
              } else if (displayType === "news-bing") {
                var newsDate = item.date ? new Date(parseInt(item.date, 10) / 1e3) : null;
                var newsThumb = item.thumbnailUrl ? this.baseUrl + item.thumbnailUrl : null;
                results.push({ url: item.clickUrl, title: st(item.title), content: st(item.description || ""), publishedDate: newsDate, thumbnail: newsThumb });
              } else if (displayType.indexOf("images") !== -1) {
                if (!item.altClickUrl) continue;
                var imgThumb = item.thumbnailUrl ? this.baseUrl + item.thumbnailUrl : null;
                var resolution = item.width && item.height ? item.width + "x" + item.height : null;
                results.push({ template: "images.html", url: item.altClickUrl, title: st(item.title), content: "", imgSrc: item.rawImageUrl, thumbnailSrc: imgThumb, resolution: resolution, imgFormat: item.format });
              }
            }
          }
          return results;
        } catch { return []; }
      },
    };

    /**
     * about: { website: "https://yandex.com/", wikidata_id: "Q5281",
     *   use_official_api: false, require_api_key: false, results: "HTML" }
     */
    EG_misc.yandex = {
      name: "yandex",
      categories: [],
      shortcut: null,
      paging: !0,
      searchType: "",
      baseUrlWeb: "https://yandex.com/search/site/",
      baseUrlImages: "https://yandex.com/images/search",
      supportedLangs: ["ru", "en", "be", "fr", "de", "id", "kk", "tt", "tr", "uk"],
      async request(query, params, sq) {
        var queryParamsWeb = { tmpl_version: "releases", text: query, web: "1", frame: "1", searchid: "3131712" };
        var lang = (sq.language || "en").split("-")[0];
        if (this.supportedLangs.indexOf(lang) !== -1) queryParamsWeb.lang = lang;
        var queryParamsImages = { text: query, uinfo: "sw-1920-sh-1080-ww-1125-wh-999" };
        if (sq.pageno > 1) {
          queryParamsWeb.p = sq.pageno - 1;
          queryParamsImages.p = sq.pageno - 1;
        }
        params.cookies = { cookie: "yp=1716337604.sp.family%3A0#1685406411.szm.1:1920x1080:1920x999" };
        if (this.searchType === "web") params.url = this.baseUrlWeb + "?" + new URLSearchParams(queryParamsWeb);
        else if (this.searchType === "images") params.url = this.baseUrlImages + "?" + new URLSearchParams(queryParamsImages);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text;
        if (resp.headers && resp.headers["x-yandex-captcha"] === "captcha") return [{ error: "captcha" }];
        if (this.searchType === "web") return this._parseWeb(h);
        if (this.searchType === "images") return this._parseImages(h);
        return [];
      },
      _parseWeb(h) {
        var results = [];
        var items = allBlk(h, "li", "serp-item");
        for (var i = 0; i < items.length; i++) {
          var bl = items[i];
          var urlM = bl.match(/<a[^>]*class="b-serp-item__title-link"[^>]*href="([^"]*)"/i);
          var url = urlM ? urlM[1] : "";
          var titleM = bl.match(/<h3[^>]*class="b-serp-item__title"[^>]*>[\s\S]*?<a[^>]*class="b-serp-item__title-link"[^>]*>[\s\S]*?<span[^>]*>([\s\S]*?)<\/span>/i);
          var title = titleM ? st(titleM[1]) : "";
          var contentM = bl.match(/<div[^>]*class="b-serp-item__content"[^>]*>[\s\S]*?<div[^>]*class="b-serp-item__text"[^>]*>([\s\S]*?)<\/div>/i);
          var content = contentM ? st(contentM[1]) : "";
          if (url) results.push({ url: url, title: title, content: content });
        }
        return results;
      },
      _parseImages(h) {
        var results = [];
        var jsonStr = eb(h, '{"location":"/images/search/', 'advRsyaSearchColumn":null}}');
        if (!jsonStr) jsonStr = eb(h, '{"location":"/images/search/', 'false}}}');
        if (!jsonStr) return results;
        try {
          jsonStr = '{"location":"/images/search/' + jsonStr + (jsonStr.indexOf('advRsyaSearchColumn') !== -1 ? 'advRsyaSearchColumn":null}}' : 'false}}}');
          var data = JSON.parse(jsonStr);
          var entities = (data.initialState || {}).serpList || {};
          entities = entities.items || {};
          entities = entities.entities || {};
          for (var key in entities) {
            var item = entities[key];
            if (!item.snippet) continue;
            var snippet = item.snippet;
            var viewerData = item.viewerData || {};
            var dups = viewerData.dups || [];
            var dup = dups[0] || {};
            results.push({
              title: snippet.title, url: snippet.url, imgSrc: dup.url,
              filesize: humanizeBytes(dup.fileSizeInBytes),
              thumbnailSrc: item.image, template: "images.html",
              resolution: (dup.w || "?") + " x " + (dup.h || "?"),
            });
          }
        } catch {}
        return results;
      },
    };

    /**
     * about: { website: "https://music.yandex.ru", wikidata_id: "Q4537983",
     *   use_official_api: false, require_api_key: false, results: "JSON" }
     */
    EG_misc.yandex_music = {
      name: "yandex_music",
      categories: ["music"],
      shortcut: null,
      paging: !0,
      url: "https://music.yandex.ru",
      searchUrl: "https://music.yandex.ru/handlers/music-search.jsx",
      async request(query, params, sq) {
        var args = { text: query, page: sq.pageno - 1 };
        params.url = this.searchUrl + "?" + new URLSearchParams(args);
        return params;
      },
      async response(resp, sq) {
        var results = [];
        var data = resp.json;
        if (!data || !data.tracks || !data.tracks.items) return results;
        for (var i = 0; i < data.tracks.items.length; i++) {
          var result = data.tracks.items[i];
          if (result.type === "music") {
            var trackId = result.id;
            var albumId = result.albums[0].id;
            results.push({
              url: this.url + "/album/" + albumId + "/track/" + trackId,
              title: result.title,
              content: "[" + result.albums[0].title + "] " + result.artists[0].name + " - " + result.title,
              iframeSrc: this.url + "/iframe/track/" + trackId + "/" + albumId,
            });
          }
        }
        return results;
      },
    };

    /**
     * about: { website: "https://www.seznam.cz/", wikidata_id: "Q3490485",
     *   use_official_api: false, require_api_key: false, results: "HTML", language: "cz" }
     */
    EG_misc.seznam = {
      name: "seznam",
      categories: ["general", "web"],
      shortcut: null,
      paging: !1,
      baseUrl: "https://search.seznam.cz/",
      async request(query, params, sq) {
        var resp;
        try { resp = await fetch(this.baseUrl, { headers: params.headers || {} }); } catch { return params; }
        var text = await resp.text();
        var args = { q: query, oq: query };
        var hiddenRe = /<input[^>]*type="hidden"[^>]*name="([^"]*)"[^>]*value="([^"]*)"[^>]*>/gi;
        var m;
        while ((m = hiddenRe.exec(text)) !== null) args[m[1]] = m[2];
        params.url = this.baseUrl + "?" + new URLSearchParams(args);
        var setCookie = resp.headers.get("set-cookie");
        if (setCookie) params.headers = params.headers || {};
        return params;
      },
      async response(resp, sq) {
        var h = resp.text, results = [];
        if (resp.url && resp.url.indexOf("/verify") !== -1) return results;
        var rootDiv = eb(h, '<div id="searchpage-root"', '<div class="Layout--left"');
        if (!rootDiv) return results;
        var resultBlocks = allBlk(h, "div", "f2c528");
        if (resultBlocks.length === 0) resultBlocks = allBlk(h, "div", "Layout--left");
        for (var bi = 0; bi < resultBlocks.length; bi++) {
          var bl = resultBlocks[bi];
          var titleM = bl.match(/<h3[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i);
          if (!titleM) continue;
          var url = titleM[1], title = st(titleM[2]);
          var contentM = bl.match(/<div[^>]*class="[^"]*(?:c8774a|e69e8d|a11657)[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
          var content = contentM ? st(contentM[1]) : "";
          results.push({ url: url, title: title, content: content });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://presearch.io", wikidata_id: "Q7240905",
     *   use_official_api: false, require_api_key: false, results: "JSON" }
     */
    EG_misc.presearch = {
      name: "presearch",
      categories: ["general", "web"],
      shortcut: null,
      paging: !0,
      safesearch: !0,
      timeRangeSupport: !0,
      searchType: "search",
      baseUrl: "https://presearch.com",
      safesearchMap: { 0: "false", 1: "true", 2: "true" },
      async request(query, params, sq) {
        var args = { q: query, page: sq.pageno };
        if (sq.timeRange) args.time = sq.timeRange;
        var url = this.baseUrl + "/" + this.searchType + "?" + new URLSearchParams(args);
        var headers = {
          "User-Agent": "Mozilla/5.0",
          Cookie: "b=1; presearch_session=; use_local_search_results=false; use_safe_search=" + this.safesearchMap[sq.safesearch],
        };
        var lang = sq.language || "all";
        if (lang !== "all") {
          var pts = lang.split("-");
          if (pts.length > 1) headers["Accept-Language"] = pts[0] + "-" + pts[1] + "," + pts[0] + ";q=0.9,*;q=0.5";
        }
        var resp;
        try { resp = await fetch(url, { headers: headers }); } catch { return params; }
        var text = await resp.text();
        var lines = text.split("\n");
        var requestId = null;
        for (var li = 0; li < lines.length; li++) {
          if (lines[li].indexOf("window.searchId = ") !== -1) {
            requestId = lines[li].split("= ")[1].replace(/[";]/g, "").trim();
            break;
          }
        }
        if (!requestId) return params;
        params.headers["Accept"] = "application/json";
        params.url = this.baseUrl + "/results?id=" + requestId;
        return params;
      },
      async response(resp, sq) {
        var data = resp.json;
        if (!data) return [];
        if (this.searchType === "search") return this._parseSearch(data);
        if (this.searchType === "images") return this._parseImages(data);
        if (this.searchType === "videos") return this._parseVideos(data);
        if (this.searchType === "news") return this._parseNews(data);
        return [];
      },
      _htmlToText(s) { return s ? s.replace(/<[^>]*>/g, "").trim() : ""; },
      _fixTitle(title, url) {
        title = this._htmlToText(title);
        try {
          var domain = new URL(url).hostname;
          if (title.indexOf(domain) === 0 && title.length > domain.length && title[domain.length] !== "/" && title[domain.length] !== " ") {
            title = title.slice(domain.length);
          }
        } catch {}
        return title;
      },
      _parseSearch(json) {
        var results = [];
        var specialSections = (json.specialSections || {}).topStoriesCompact || {};
        var stories = specialSections.data || [];
        for (var si = 0; si < stories.length; si++) {
          var s = stories[si];
          results.push({ url: s.link, title: this._fixTitle(s.title, s.link), thumbnail: s.image, content: "", metadata: s.source });
        }
        var standard = json.standardResults || [];
        for (var i = 0; i < standard.length; i++) {
          var item = standard[i];
          results.push({ url: item.link, title: this._fixTitle(item.title, item.link), content: this._htmlToText(item.description) });
        }
        var info = (json.infoSection || {}).data;
        if (info) {
          var attributes = [], aboutItems = info.about || [];
          for (var ai = 0; ai < aboutItems.length; ai++) {
            var text = this._htmlToText(aboutItems[ai]);
            var colonIdx = text.indexOf(":");
            if (colonIdx !== -1) {
              var label = text.slice(0, colonIdx).trim();
              var value = text.slice(colonIdx + 1).trim();
              for (var xi = 0; xi < ["wikipedia", "google"].length; xi++) {
                var x = ["wikipedia", "google"][xi];
                if (value.toLowerCase().indexOf(x) === value.length - x.length) value = value.slice(0, -x.length).trim();
              }
              attributes.push({ label: label, value: value });
            }
          }
          var contentParts = [];
          if (info.subtitle) contentParts.push(this._htmlToText(info.subtitle));
          if (info.description) contentParts.push(this._htmlToText(info.description));
          results.push({ infobox: info.title, id: info.title, imgSrc: info.image, content: contentParts.join(" | "), attributes: attributes });
        }
        return results;
      },
      _parseImages(data) {
        var results = [];
        var images = data.images || [];
        for (var i = 0; i < images.length; i++) {
          var item = images[i];
          results.push({ template: "images.html", title: this._htmlToText(item.title), url: item.link, imgSrc: item.image, thumbnailSrc: item.thumbnail });
        }
        return results;
      },
      _parseVideos(data) {
        var results = [];
        var videos = data.videos || [];
        for (var i = 0; i < videos.length; i++) {
          var item = videos[i];
          var duration = item.duration;
          var seconds = null;
          if (duration) {
            var dm = duration.match(/(\d+):(\d+):(\d+)/) || duration.match(/(\d+):(\d+)/);
            if (dm) seconds = dm[3] ? parseInt(dm[1], 10) * 3600 + parseInt(dm[2], 10) * 60 + parseInt(dm[3], 10) : parseInt(dm[1], 10) * 60 + parseInt(dm[2], 10);
          }
          results.push({ title: this._htmlToText(item.title), url: item.link, content: item.description || "", thumbnail: item.image, length: seconds });
        }
        return results;
      },
      _parseNews(data) {
        var results = [];
        var news = data.news || [];
        for (var i = 0; i < news.length; i++) {
          var item = news[i];
          var source = item.source || "";
          var time = this._htmlToText(item.time || "").replace("</a>", "").trim();
          var metadata = [source];
          if (time) metadata.push(time);
          results.push({ title: this._htmlToText(item.title), url: item.link, content: this._htmlToText(item.description || ""), metadata: metadata.join(" / "), thumbnail: item.image });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://karmasearch.org", use_official_api: false,
     *   require_api_key: false, results: "JSON" }
     */
    EG_misc.karmasearch = {
      name: "karmasearch",
      categories: ["web", "general"],
      shortcut: null,
      paging: !0,
      safesearch: !0,
      timeRangeSupport: !0,
      searchType: "web",
      baseUrl: "https://api.karmasearch.org",
      safeSearchMap: { 0: "off", 1: "moderate", 2: "strict" },
      timeRangeMap: { day: "Day", week: "Week", month: "Month", year: "Year" },
      async request(query, params, sq) {
        var lang = sq.language || "en-US";
        var pts = lang.split("-");
        var country = pts.length > 1 ? pts[1] : "US";
        var args = {
          searchTerm: query, adultFilter: this.safeSearchMap[sq.safesearch],
          pageNumber: sq.pageno, country: country,
          userLanguage: "en", market: lang,
        };
        var tr = sq.timeRange;
        if (tr && this.timeRangeMap[tr]) args.freshness = this.timeRangeMap[tr];
        params.headers["Referer"] = "https://karmasearch.org";
        params.url = this.baseUrl + "/search/" + this.searchType + "?" + new URLSearchParams(args);
        return params;
      },
      async response(resp, sq) {
        var results = [];
        var data = resp.json;
        if (!data || !data.results) return results;
        for (var i = 0; i < data.results.length; i++) {
          var r = data.results[i];
          if (r.sponsored) continue;
          if (r.videos) { for (var vi = 0; vi < r.videos.length; vi++) results.push(this._parseVideo(r.videos[vi])); continue; }
          if (r.news) { for (var ni = 0; ni < r.news.length; ni++) results.push(this._parseNews(r.news[ni])); continue; }
          if (this.searchType === "news") results.push(this._parseNews(r));
          else if (this.searchType === "videos") results.push(this._parseVideo(r));
          else if (this.searchType === "images") results.push(this._parseImage(r));
          else results.push(this._parseGeneral(r));
        }
        return results;
      },
      _parseGeneral(r) { return { url: r.url, title: r.title, content: st(r.description), thumbnail: r.thumbnail || "" }; },
      _parseNews(r) { return { url: r.url, title: r.title, content: st(r.description), thumbnail: r.thumbnail, publishedDate: parseDateStr(r.age || "") }; },
      _parseVideo(r) {
        return { template: "videos.html", url: r.url, title: r.title, content: st(r.description), thumbnail: r.thumbnail, publishedDate: parseDateStr(r.age || ""), length: ((r.video || {}).duration) };
      },
      _parseImage(r) {
        return { template: "images.html", url: r.url, title: r.title, content: "", imgSrc: ((r.properties || {}).url), thumbnailSrc: ((r.thumbnail || {}).src) };
      },
    };

    /**
     * about: { website: "https://marginalia.nu", wikidata_id: null,
     *   use_official_api: true, require_api_key: true, results: "JSON" }
     */
    EG_misc.marginalia = {
      name: "marginalia",
      categories: ["general"],
      shortcut: null,
      paging: !1,
      resultsPerPage: 20,
      baseUrl: "https://api2.marginalia-search.com",
      apiKey: "",
      async request(query, params, sq) {
        var qp = { count: this.resultsPerPage, nsfw: Math.min(sq.safesearch, 1), query: query };
        params.url = this.baseUrl + "/search?" + new URLSearchParams(qp);
        params.headers["User-Agent"] = "searxng/" + "1.0";
        params.headers["API-Key"] = this.apiKey;
        return params;
      },
      async response(resp, sq) {
        var results = [];
        var data = resp.json;
        if (!data || !data.results) return results;
        for (var i = 0; i < data.results.length; i++) {
          var item = data.results[i];
          results.push({ title: item.title, url: item.url, content: item.description || "" });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://github.com/mwmbl/mwmbl",
     *   use_official_api: true, require_api_key: false, results: "JSON" }
     */
    EG_misc.mwmbl = {
      name: "mwmbl",
      categories: ["general"],
      shortcut: null,
      paging: !1,
      apiUrl: "https://api.mwmbl.org/api/v1",
      async request(query, params, sq) {
        params.url = this.apiUrl + "/search/?" + new URLSearchParams({ s: query });
        return params;
      },
      async response(resp, sq) {
        var results = [];
        var data = resp.json;
        if (!data) return results;
        for (var i = 0; i < data.length; i++) {
          var r = data[i];
          var titleParts = (r.title || []).map(function(t) { return t.value || ""; });
          var extractParts = (r.extract || []).map(function(e) { return e.value || ""; });
          results.push({ url: r.url, title: titleParts.join(""), content: extractParts.join("") });
        }
        return results;
      },
    };

    /**
     * about: { website: "https://yacy.net/", wikidata_id: "Q1759675",
     *   use_official_api: true, require_api_key: false, results: "JSON" }
     */
    EG_misc.yacy = {
      name: "yacy",
      categories: ["general"],
      shortcut: null,
      paging: !0,
      numberOfResults: 10,
      searchMode: "global",
      searchType: "text",
      baseUrl: ["https://yacy.searchlab.eu"],
      async request(query, params, sq) {
        var offset = (sq.pageno - 1) * this.numberOfResults;
        var args = {
          query: query, startRecord: offset,
          maximumRecords: this.numberOfResults,
          contentdom: this.searchType, resource: this.searchMode,
        };
        var lang = (sq.language || "all").split("-")[0];
        if (lang !== "all") args.lr = "lang_" + lang;
        var baseUrl = Array.isArray(this.baseUrl) ? this.baseUrl[Math.floor(Math.random() * this.baseUrl.length)] : this.baseUrl;
        if (baseUrl.endsWith("/")) baseUrl = baseUrl.slice(0, -1);
        params.url = baseUrl + "/yacysearch.json?" + new URLSearchParams(args);
        return params;
      },
      async response(resp, sq) {
        var results = [];
        var data = resp.json;
        if (!data) return results;
        var channels = data.channels || [];
        if (channels.length === 0) return results;
        var items = channels[0].items || [];
        for (var i = 0; i < items.length; i++) {
          var r = items[i];
          if (this.searchType === "image") {
            var imgUrl = r.url || r.link || "";
            if (!imgUrl) continue;
            results.push({ url: imgUrl, title: r.title, content: "", imgSrc: r.image, template: "images.html" });
          } else {
            var pubDate = r.pubDate ? parseDateStr(r.pubDate) : null;
            results.push({ url: r.link || "", title: r.title, content: st(r.description), publishedDate: pubDate });
          }
        }
        return results;
      },
    };

    /**
     * about: { website: "https://github.com/searxng/searxng", wikidata_id: "Q17639196",
     *   use_official_api: true, require_api_key: false, results: "JSON" }
     */
    EG_misc.searx_engine = {
      name: "searx_engine",
      categories: [],
      shortcut: null,
      paging: !0,
      instanceUrls: [],
      instanceIndex: 0,
      async request(query, params, sq) {
        if (this.instanceUrls.length === 0) return params;
        var url = this.instanceUrls[this.instanceIndex % this.instanceUrls.length];
        this.instanceIndex++;
        params.url = url;
        params.method = "POST";
        params.data = {
          q: query, pageno: sq.pageno, language: sq.language || "all",
          time_range: sq.timeRange || "", category: sq.category || "",
          format: "json",
        };
        return params;
      },
      async response(resp, sq) {
        var data = resp.json;
        if (!data) return [];
        var results = data.results || [];
        var extraTypes = ["answers", "infoboxes"];
        for (var ei = 0; ei < extraTypes.length; ei++) {
          var arr = data[extraTypes[ei]] || [];
          for (var ai = 0; ai < arr.length; ai++) results.push(arr[ai]);
        }
        var suggestions = data.suggestions || [];
        for (var si = 0; si < suggestions.length; si++) results.push({ suggestion: suggestions[si] });
        if (data.number_of_results != null) results.push({ number_of_results: data.number_of_results });
        return results;
      },
    };

    /**
     * about: { website: null, wikidata_id: "Q15735774",
     *   use_official_api: true, require_api_key: false, results: "JSON" }
     */
    EG_misc.recoll = {
      name: "recoll",
      categories: [],
      shortcut: null,
      paging: !0,
      timeRangeSupport: !0,
      baseUrl: "",
      mountPrefix: "",
      dlPrefix: "",
      searchDir: "",
      _s2i: { day: 1, week: 7, month: 30, year: 365 },
      async request(query, params, sq) {
        var offset = this._s2i[sq.timeRange] || 0;
        var after = "";
        if (offset) {
          var d = new Date(Date.now() - offset * 864e5);
          after = d.toISOString().split("T")[0];
        }
        var args = { query: query, page: sq.pageno, after: after, dir: this.searchDir, highlight: 0 };
        params.url = this.baseUrl + "/json?" + new URLSearchParams(args);
        return params;
      },
      async response(resp, sq) {
        var results = [];
        var data = resp.json;
        if (!data || !data.results) return results;
        for (var i = 0; i < data.results.length; i++) {
          var r = data.results[i];
          var url = (r.url || "").replace("file://" + this.mountPrefix, this.dlPrefix);
          var mtype = r.mtype || "", subtype = "";
          if (mtype) { var sp = mtype.split("/"); mtype = sp[0]; subtype = sp[1] || ""; }
          var thumbnail = "", embedded = "";
          if (mtype === "audio" || mtype === "video") embedded = url;
          if (mtype === "image" && ["bmp", "gif", "jpeg", "png"].indexOf(subtype) !== -1) thumbnail = url;
          results.push({
            title: r.label || "", url: url, content: st(r.snippet || ""),
            size: r.size, filename: r.filename, abstract: r.abstract,
            author: r.author, mtype: mtype, subtype: subtype,
            time: r.time, embedded: embedded, thumbnail: thumbnail,
          });
        }
        return results;
      },
    };
  });
