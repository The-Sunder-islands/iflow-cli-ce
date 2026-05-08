var EG_b2 = {},
  eG_b2 = j(() => {
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

    function de(s) {
      try { return decodeURIComponent((s || "").replace(/\+/g, " ")); } catch (e) { return s || ""; }
    }

    function dq(s) {
      try { return decodeURIComponent(s || ""); } catch (e) { return s || ""; }
    }

    function humanizeBytes(e) {
      if (!e) return "0 B";
      let t = ["B", "KB", "MB", "GB", "TB"], i = 0, n = e;
      for (; n >= 1024 && i < t.length - 1; ) n /= 1024, i++;
      return n.toFixed(1) + " " + t[i];
    }

    EG_b2.search360 = {
      name: "360search",
      categories: ["general"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      time_range_support: !0,
      time_range_dict: { day: "d", week: "w", month: "m", year: "y" },
      async request(query, params, sq) {
        let qp = { pn: sq.pageno || 1, q: query };
        if (params.time_range && this.time_range_dict[params.time_range]) qp.adv_t = this.time_range_dict[params.time_range];
        params.url = "https://www.so.com/s?" + new URLSearchParams(qp).toString();
        return params;
      },
      async response(resp, sq) {
        let results = [], h = resp.text || "", items = h.split('<li class="res-list"').slice(1);
        for (let item of items) {
          let titleRe = item.match(/<h3[^>]*class="[^"]*res-title[^"]*"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/);
          let title = titleRe ? st(titleRe[1]) : "";
          let urlRe = item.match(/@data-mdurl="([^"]*)"/);
          let url = urlRe ? urlRe[1] : (item.match(/<a[^>]*href="([^"]*)"/) || [])[1] || "";
          let contentRe = item.match(/<p[^>]*class="[^"]*res-desc[^"]*"[^>]*>([\s\S]*?)<\/p>/);
          let content = contentRe ? st(contentRe[1]) : "";
          if (!content) {
            let sRe = item.match(/<span[^>]*class="[^"]*res-list-summary[^"]*"[^>]*>([\s\S]*?)<\/span>/);
            content = sRe ? st(sRe[1]) : "";
          }
          if (title && url) results.push({ title, url, content });
        }
        return results;
      },
    };

    EG_b2.search360videos = {
      name: "360search_videos",
      categories: ["videos"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        let qp = new URLSearchParams({ count: "10", q: query, start: ((sq.pageno || 1) * 10).toString() });
        params.url = "https://tv.360kan.com/v1/video/list?" + qp.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.data || !resp.json.data.result) return results;
        for (let entry of resp.json.data.result) {
          if (!entry.title || !entry.play_url) continue;
          let pd = null;
          if (entry.publish_time) { try { pd = new Date(parseInt(entry.publish_time) * 1000); } catch (e) {} }
          results.push({
            url: entry.play_url,
            title: st(entry.title),
            content: st(entry.description || ""),
            template: "videos.html",
            publishedDate: pd,
            thumbnail: entry.cover_img,
            iframe_src: entry.play_url,
          });
        }
        return results;
      },
    };

    EG_b2.nineGag = {
      name: "9gag",
      categories: ["social media"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      page_size: 10,
      async request(query, params, sq) {
        let qp = new URLSearchParams({ query, c: ((sq.pageno || 1) - 1) * this.page_size });
        params.url = "https://9gag.com/v1/search-posts?" + qp.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.data) return results;
        let jr = resp.json.data;
        for (let r of jr.posts || []) {
          let thumb = r.images?.image700?.height > 400 ? r.images?.imageFbThumbnail?.url : r.images?.image700?.url;
          let pd = r.creationTs ? new Date(r.creationTs * 1000) : null;
          if (r.type === "Photo") results.push({ template: "images.html", url: r.url, title: r.title, content: r.description, publishedDate: pd, img_src: r.images?.image700?.url, thumbnail_src: thumb });
          else if (r.type === "Animated") results.push({ template: "videos.html", url: r.url, title: r.title, content: r.description, publishedDate: pd, thumbnail: thumb, iframe_src: r.images?.image460sv?.url });
        }
        if (jr.tags) { for (let s of jr.tags) results.push({ suggestion: s.key }); }
        return results;
      },
    };

    EG_b2.acfun = {
      name: "acfun",
      categories: ["videos"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      base_url: "https://www.acfun.cn",
      async request(query, params, sq) {
        let qp = new URLSearchParams({ keyword: query, pCursor: sq.pageno || 1 });
        params.url = this.base_url + "/search?" + qp.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [], h = resp.text || "", re = /bigPipe\.onPageletArrive\((\{[\s\S]*?\})\);/g, m;
        while ((m = re.exec(h)) !== null) {
          try {
            let jd = JSON.parse(m[1]), rh = jd.html || "";
            if (!rh) continue;
            let vbs = rh.split(/<div[^>]*class="[^"]*search-video[^"]*"[^>]*>/).slice(1);
            for (let vb of vbs) {
              let end = vb.indexOf("</div>");
              if (end === -1) continue;
              vb = vb.slice(0, end);
              let elRe = /data-exposure-log=(['"])([\s\S]*?)\1/;
              let el = vb.match(elRe);
              if (!el) continue;
              let vd = JSON.parse(el[2].replace(/&#34;/g, '"').replace(/&quot;/g, '"'));
              let ci = vd.content_id || "", ti = vd.title || "";
              if (!ti || !ci) continue;
              let url = this.base_url + "/v/ac" + ci, fs = this.base_url + "/player/ac" + ci;
              let ct = (vb.match(/<span[^>]*class="[^"]*info__create-time[^"]*"[^>]*>([^<]*)<\/span>/) || [])[1] || "";
              let cd = vb.match(/<div[^>]*class="[^"]*video__cover[^"]*"[^>]*>([\s\S]*?)<\/div>/);
              let cv = cd ? (cd[1].match(/<img[^>]*src="([^"]*)"/) || [])[1] || "" : "";
              let dur = (vb.match(/<span[^>]*class="[^"]*video__duration[^"]*"[^>]*>([^<]*)<\/span>/) || [])[1] || "";
              let id = vb.match(/<div[^>]*class="[^"]*video__main__intro[^"]*"[^>]*>([\s\S]*?)<\/div>/);
              let intro = id ? st(id[1]) : "";
              let pd = null;
              if (ct) { try { pd = new Date(ct.trim()); } catch (e) {} }
              results.push({ title: ti, url, content: intro, thumbnail: cv, length: dur, publishedDate: pd, iframe_src: fs });
            }
          } catch (e) {}
        }
        return results;
      },
    };

    EG_b2.ahmia = {
      name: "ahmia",
      categories: ["onions"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      page_size: 10,
      time_range_support: !0,
      time_range_dict: { day: 1, week: 7, month: 30 },
      base_url: "http://juhanurmihxlp77nkq76byazcldy2hlmovfu2epvl5ankdibsot4csyd.onion",
      async request(query, params, sq) {
        let qp = new URLSearchParams({ q: query });
        params.url = this.base_url + "/search/?" + qp.toString();
        if (params.time_range && this.time_range_dict[params.time_range]) params.url += "&d=" + this.time_range_dict[params.time_range];
        return params;
      },
      async response(resp, sq) {
        let results = [], h = resp.text || "", items = h.split('<li class="result">').slice(1);
        let firstIdx = this.page_size * ((sq.pageno || 1) - 1), pi = items.slice(firstIdx, firstIdx + this.page_size);
        for (let item of pi) {
          let ru = (item.match(/<h4><a[^>]*href="([^"]*)"/) || [])[1] || "";
          let red = ru.match(/[?&]redirect_url=([^&]+)/);
          let url = red ? decodeURIComponent(red[1]) : ru;
          let title = st(eb(item, "<h4>", "</h4>")) || st(item.replace(/<[^>]*>/g, "").trim()) || "";
          let content = st(eb(item, "<p>", "</p>")) || "";
          if (title) results.push({ url, title, content, is_onion: !0 });
        }
        let cs = eb(h, 'id="didYouMean"', "<");
        if (cs) { let cr = /<a[^>]*>([^<]*)<\/a>/g, cm; while ((cm = cr.exec(cs)) !== null) results.push({ correction: st(cm[1]) }); }
        let te = eb(h, 'id="totalResults"', "<");
        if (te) { let nm = te.match(/>([\d,]+)</); if (nm) { let n = parseInt(nm[1].replace(/,/g, ""), 10); if (!isNaN(n)) results.push({ number_of_results: n }); } }
        return results;
      },
    };

    EG_b2.appleMaps = {
      name: "apple_maps",
      categories: ["map"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      async request(query, params, sq) {
        let qp = new URLSearchParams({ q: query, lang: params.language || "en" });
        params.url = "https://api.apple-mapkit.com/v1/search?" + qp.toString() + "&mkjsVersion=5.72.53";
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.results) return results;
        for (let r of resp.json.results) {
          let bb = null;
          if (r.displayMapRegion) { let b = r.displayMapRegion; bb = [b.southLat, b.northLat, b.westLng, b.eastLng]; }
          let links = [];
          if (r.telephone) links.push({ label: "phone", url: "tel:" + r.telephone, url_label: r.telephone });
          if (r.urls && r.urls[0]) links.push({ label: "website", url: r.urls[0], url_label: r.urls[0] });
          results.push({
            template: "map.html",
            type: r.poiCategory,
            title: r.name,
            links,
            latitude: r.center?.lat,
            longitude: r.center?.lng,
            url: r.placecardUrl,
            boundingbox: bb,
            geojson: { type: "Point", coordinates: [r.center?.lng, r.center?.lat] },
            address: { name: r.name, house_number: r.subThoroughfare, road: r.thoroughfare, locality: r.locality, postcode: r.postCode, country: r.country }
          });
        }
        return results;
      },
    };

    EG_b2.artic = {
      name: "artic",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      nb_per_page: 20,
      image_api: "https://www.artic.edu/iiif/2/",
      async request(query, params, sq) {
        let qp = new URLSearchParams({ q: query, page: sq.pageno || 1, fields: "id,title,artist_display,medium_display,image_id,date_display,dimensions,artist_titles", limit: this.nb_per_page });
        params.url = "https://api.artic.edu/api/v1/artworks/search?" + qp.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.data) return results;
        for (let r of resp.json.data) {
          if (!r.image_id) continue;
          results.push({
            url: "https://artic.edu/artworks/" + r.id,
            title: r.title + " (" + (r.date_display || "") + ") // " + (r.artist_display || ""),
            content: (r.medium_display || "") + " // " + (r.dimensions || ""),
            author: (r.artist_titles || []).join(", "),
            img_src: this.image_api + r.image_id + "/full/843,/0/default.jpg",
            template: "images.html"
          });
        }
        return results;
      },
    };

    EG_b2.artstation = {
      name: "artstation",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      results_per_page: 20,
      base_url: "https://www.artstation.com/api/v2/search/projects.json",
      async request(query, params, sq) {
        let fd = { query, page: sq.pageno || 1, per_page: this.results_per_page, sorting: "relevance", pro_first: 1 };
        params.url = this.base_url;
        params.method = "POST";
        params.headers["content-type"] = "application/json";
        params.data = JSON.stringify(fd);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.data) return results;
        for (let item of resp.json.data) {
          let thumb = item.smaller_square_cover_url || "";
          let fullsize = thumb.replace(/\/smaller_square/, "/large").replace(/\/\d{6,}\//, "/");
          results.push({
            template: "images.html",
            title: item.title,
            url: item.url,
            author: (item.user?.username || "") + " (" + (item.user?.full_name || "") + ")",
            img_src: fullsize,
            thumbnail_src: thumb,
          });
        }
        return results;
      },
    };

    EG_b2.astrophysicsDataSystem = {
      name: "astrophysics_data_system",
      categories: ["science", "scientific publications"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      base_url: "https://api.adsabs.harvard.edu/v1/search/query",
      ads_field_list: "abstract,author,bibcode,comment,date,doi,isbn,issn,keyword,page,page_count,page_range,pub,pubdate,pubnote,read_count,title,volume,year",
      ads_rows: 10,
      ads_sort: "read_count desc",
      api_key: "",
      async request(query, params, sq) {
        let args = new URLSearchParams({ q: query, fl: this.ads_field_list, rows: this.ads_rows, start: this.ads_rows * ((sq.pageno || 1) - 1) });
        if (this.ads_sort) args.set("sort", this.ads_sort);
        if (this.api_key) params.headers["Authorization"] = "Bearer " + this.api_key;
        params.url = this.base_url + "?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.response) return results;
        let jd = resp.json;
        if (jd.error) return results;
        for (let doc of jd.response.docs || []) {
          let authors = doc.author || [];
          if (authors.length > 15) authors = authors.slice(0, 15).concat(["et al."]);
          let pd = null;
          if (doc.date) { try { pd = new Date(doc.date); } catch (e) {} }
          results.push({
            url: "https://ui.adsabs.harvard.edu/abs/" + (doc.bibcode || "") + "/",
            title: st((doc.title || [])[0] || ""),
            authors,
            content: st(doc.abstract || ""),
            doi: (doc.doi || [])[0] || "",
            issn: doc.issn || [],
            isbn: doc.isbn || [],
            tags: doc.keyword || [],
            pages: (doc.page || []).join(","),
            publisher: (doc.pub || "") + " " + (doc.year || ""),
            publishedDate: pd,
            volume: doc.volume || "",
            views: doc.read_count || "",
            comments: (doc.pubnote || []).join(" / "),
          });
        }
        return results;
      },
    };

    EG_b2.azure = {
      name: "azure",
      categories: ["it", "cloud"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      azure_batch_endpoint: "https://management.azure.com/batch?api-version=2020-06-01",
      async request(query, params, sq) {
        params.url = this.azure_batch_endpoint;
        params.method = "POST";
        params.headers["Content-Type"] = "application/json";
        params.data = JSON.stringify({
          requests: [
            {
              url: "/providers/Microsoft.ResourceGraph/resources?api-version=2024-04-01",
              httpMethod: "POST",
              name: "resourceGroups",
              requestHeaderDetails: { commandName: "Microsoft.ResourceGraph" },
              content: { query: "ResourceContainers | where (name contains ('" + query + "')) | where (type =~ ('Microsoft.Resources/subscriptions/resourcegroups')) | project id,name,type,kind,subscriptionId,resourceGroup | extend matchscore = name startswith '" + query + "' | extend normalizedName = tolower(tostring(name)) | sort by matchscore desc, normalizedName asc | take 30" }
            },
            {
              url: "/providers/Microsoft.ResourceGraph/resources?api-version=2024-04-01",
              httpMethod: "POST",
              name: "resources",
              requestHeaderDetails: { commandName: "Microsoft.ResourceGraph" },
              content: { query: "Resources | where name contains '" + query + "' | take 30" }
            }
          ]
        });
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.responses) return results;
        for (let result of resp.json.responses) {
          if (result.name === "resourceGroups") {
            for (let data of result.content?.data || []) {
              results.push({ url: "https://portal.azure.com/#@/resource/subscriptions/" + data.subscriptionId + "/resourceGroups/" + data.name + "/overview", title: data.name, content: "Resource Group in Subscription: " + data.subscriptionId });
            }
          } else if (result.name === "resources") {
            for (let data of result.content?.data || []) {
              results.push({ url: "https://portal.azure.com/#@/resource/subscriptions/" + data.subscriptionId + "/resourceGroups/" + data.resourceGroup + "/providers/" + data.type + "/" + data.name + "/overview", title: data.name, content: "Resource of type " + data.type + " in Subscription: " + data.subscriptionId + ", Resource Group: " + data.resourceGroup });
            }
          }
        }
        return results;
      },
    };

    EG_b2.bilibili = {
      name: "bilibili",
      categories: ["videos"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      results_per_page: 20,
      base_url: "https://api.bilibili.com/x/web-interface/search/type",
      async request(query, params, sq) {
        let qp = new URLSearchParams({ __refresh__: "true", page: sq.pageno || 1, page_size: this.results_per_page, single_column: "0", keyword: query, search_type: "video" });
        params.url = this.base_url + "?" + qp.toString();
        params.headers["Referer"] = "https://www.bilibili.com";
        params.cookies = { innersign: "0", buvid3: "TgYkV0IfKg4yinfoc", "i-wanna-go-back": "-1", b_ut: "7", FEED_LIVE_VERSION: "V8", header_theme_version: "undefined", home_feed_column: "4" };
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.data || !resp.json.data.result) return results;
        for (let item of resp.json.data.result) {
          let pd = item.pubdate ? new Date(item.pubdate * 1000) : null;
          results.push({
            title: st(item.title),
            url: item.arcurl,
            content: item.description || "",
            author: item.author,
            publishedDate: pd,
            length: item.duration || "",
            thumbnail: item.pic,
            iframe_src: "https://player.bilibili.com/player.html?aid=" + item.aid + "&high_quality=1&autoplay=false&danmaku=0",
            template: "videos.html",
          });
        }
        return results;
      },
    };

    EG_b2.bingImages = {
      name: "bing_images",
      categories: ["images", "web"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      safesearch: !0,
      time_range_support: !0,
      time_map: { day: 1440, week: 10080, month: 44640, year: 525600 },
      async request(query, params, sq) {
        let qp = { q: query, async: "1", first: ((sq.pageno || 1) - 1) * 35 + 1, count: 35 };
        if (params.time_range && this.time_map[params.time_range]) qp.qft = "filterui:age-lt" + this.time_map[params.time_range];
        params.url = "https://www.bing.com/images/async?" + new URLSearchParams(qp).toString();
        return params;
      },
      async response(resp, sq) {
        let results = [], h = resp.text || "", listMatch = h.match(/<ul[^>]*class="[^"]*dgControl_list[^"]*"[^>]*>([\s\S]*?)<\/ul>/);
        if (!listMatch) return results;
        let list = listMatch[1], liRe = /<li[^>]*>([\s\S]*?)<\/li>/g, liM;
        while ((liM = liRe.exec(list)) !== null) {
          let item = liM[1], m = item.match(/<a[^>]*class="iusc"[^>]*\bm="([^"]*)"/);
          if (!m) continue;
          try {
            let md = JSON.parse(m[1].replace(/&quot;/g, '"'));
            let title = st(eb(item, '<div class="infnmpt">', "</div>")) || "";
            let imgpt = eb(item, '<div class="imgpt">', "</div>") || "";
            let fmtSpans = (imgpt.match(/<span[^>]*>([^<]*)<\/span>/g) || []).map(function(s) { return s.replace(/<[^>]*>/g, "").trim(); }).join(" ").split(" · ");
            let src = st(eb(imgpt, '<div class="lnkw">', "</div>")) || "";
            results.push({
              template: "images.html",
              url: md.purl,
              thumbnail_src: md.turl,
              img_src: md.murl,
              content: md.desc || "",
              title: title,
              source: src,
              resolution: fmtSpans[0] || "",
              img_format: fmtSpans[1] || null,
            });
          } catch (e) {}
        }
        return results;
      },
    };
  });
