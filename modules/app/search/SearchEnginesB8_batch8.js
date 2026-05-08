var EG_b8 = {},
  eG_b8 = j(() => {
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

    function humanizeBytes(b) {
      if (!b) return null;
      let u = ["B", "KB", "MB", "GB", "TB"],
        i = 0,
        n = parseInt(b);
      while (n >= 1024 && i < u.length - 1) {
        n /= 1024;
        i++;
      }
      return n.toFixed(i > 0 ? 1 : 0) + " " + u[i];
    }

    function getTorznabAttr(item, name) {
      let el = item.querySelector('[name="' + name + '"]');
      return el ? el.getAttribute("value") : null;
    }

    function xmlText(item, tag) {
      let el = item.querySelector(tag);
      return el ? el.textContent : null;
    }

    // ===== 1. Tokyo Toshokan (files / torrents) =====
    EG_b8.tokyotoshokan = {
      name: "tokyotoshokan",
      categories: ["files"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url =
          "https://www.tokyotosho.info/search.php?page=" + (sq.pageno || 1) + "&terms=" + encodeURIComponent(query);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let rows = allBlk(resp.text, "tr", "category_0");
        if (rows.length === 0 || rows.length % 2 !== 0) return results;
        let sizeRe = /[\d.]+(?:T|G|M)?B/gi;
        for (let i = 0; i < rows.length; i += 2) {
          let nameHtml = rows[i];
          let infoHtml = rows[i + 1];
          let item = { template: "torrent.html" };
          let descTop = eb(nameHtml, '<td class="desc-top">', "</td>");
          if (descTop) {
            let links = [];
            let aRe = /<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
            let am;
            while ((am = aRe.exec(descTop)) !== null)
              links.push({ href: am[1], text: st(am[2]) });
            if (links.length > 0) {
              item.url = links[links.length - 1].href;
              item.title = links[links.length - 1].text;
            }
            if (links.length === 2 && links[0].href.startsWith("magnet")) item.magnetlink = links[0].href;
          }
          let descBot = eb(infoHtml, '<td class="desc-bot">', "</td>");
          if (descBot) {
            let descText = st(descBot);
            let parts = descText.split("|");
            for (let p of parts) {
              p = p.trim();
              if (p.startsWith("Size:")) {
                let sm = p.match(sizeRe);
                if (sm) item.filesize = sm[0];
              } else if (p.startsWith("Date:")) {
                item.publishedDate = p.replace("Date:", "").trim();
              } else if (p.startsWith("Comment:")) {
                item.content = p.replace("Comment:", "").trim();
              }
            }
          }
          let statsArea = eb(infoHtml, '<td class="stats">', "</td>");
          if (statsArea) {
            let spans = [];
            let spRe = /<span[^>]*>([\s\S]*?)<\/span>/gi;
            let spm;
            while ((spm = spRe.exec(statsArea)) !== null) spans.push(st(spm[1]));
            if (spans.length >= 3) {
              item.seed = parseInt(spans[0]) || 0;
              item.leech = parseInt(spans[1]) || 0;
            }
          }
          results.push(item);
        }
        return results;
      },
    };

    // ===== 2. Torznab (files / torrent API) =====
    EG_b8.torznab = {
      name: "torznab",
      categories: ["files"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      baseUrl: "",
      apiKey: "",
      torznabCategories: [],
      showTorrentFiles: false,
      showMagnetLinks: true,
      async request(query, params, sq) {
        let url = this.baseUrl + "?t=search&q=" + encodeURIComponent(query);
        if (this.apiKey) url += "&apikey=" + this.apiKey;
        if (this.torznabCategories.length > 0) url += "&cat=" + this.torznabCategories.join(",");
        params.url = url;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(resp.text, "text/xml");
        let errorEl = xmlDoc.documentElement;
        if (errorEl && errorEl.tagName === "error") {
          console.warn("Torznab error:", errorEl.getAttribute("description"));
          return results;
        }
        let channel = xmlDoc.querySelector("channel");
        if (!channel) return results;
        let items = channel.querySelectorAll("item");
        for (let item of items) {
          let enclosure = item.querySelector("enclosure");
          let enclosureUrl = enclosure ? enclosure.getAttribute("url") : null;
          let filesizeStr = xmlText(item, "size") || (enclosure ? enclosure.getAttribute("length") : null);
          let guid = xmlText(item, "guid");
          let comments = xmlText(item, "comments");
          let pubDate = xmlText(item, "pubDate");
          let seeders = getTorznabAttr(item, "seeders");
          let leechers = getTorznabAttr(item, "leechers");
          let peers = getTorznabAttr(item, "peers");

          let resultUrl = null;
          if (guid && guid.startsWith("http")) resultUrl = guid;
          else if (comments && comments.startsWith("http")) resultUrl = comments;

          let leech = leechers;
          if (!leech && seeders && peers) leech = String(parseInt(peers) - parseInt(seeders));

          let publishedDate = null;
          if (pubDate) {
            let d = new Date(pubDate);
            if (!isNaN(d.getTime())) publishedDate = d.toISOString();
          }

          let result = {
            template: "torrent.html",
            title: xmlText(item, "title"),
            filesize: filesizeStr ? humanizeBytes(filesizeStr) : null,
            files: xmlText(item, "files"),
            seed: seeders ? parseInt(seeders) : null,
            leech: leech ? parseInt(leech) : null,
            url: resultUrl,
            publishedDate: publishedDate,
            torrentfile: null,
            magnetlink: null,
          };

          let link = xmlText(item, "link");
          if (this.showTorrentFiles) {
            if (link && link.startsWith("http")) result.torrentfile = link;
            else if (enclosureUrl && enclosureUrl.startsWith("http")) result.torrentfile = enclosureUrl;
          }
          if (this.showMagnetLinks) {
            let magneturl = getTorznabAttr(item, "magneturl");
            if (magneturl && magneturl.startsWith("magnet")) result.magnetlink = magneturl;
            else if (guid && guid.startsWith("magnet")) result.magnetlink = guid;
            else if (enclosureUrl && enclosureUrl.startsWith("magnet")) result.magnetlink = enclosureUrl;
            else if (link && link.startsWith("magnet")) result.magnetlink = link;
          }
          results.push(result);
        }
        return results;
      },
    };

    // ===== 3. Translated (MyMemory) =====
    EG_b8.translated = {
      name: "translated",
      categories: ["general", "translate"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      apiKey: "",
      async request(query, params, sq) {
        let args = { q: params.query, langpair: params.fromLang + "|" + params.toLang };
        if (this.apiKey) args.key = this.apiKey;
        params.url = "https://api.mymemory.translated.net/get?" + new URLSearchParams(args);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!data || !data.responseData) return results;
        let text = data.responseData.translatedText;
        let link =
          "https://mymemory.translated.net/search.php?" +
          new URLSearchParams({ q: resp.request.query, lang: resp.request.language || "en" });
        let examples = [];
        for (let m of data.matches || []) {
          if (m.translation !== text) examples.push(m.segment + " : " + m.translation);
        }
        results.push({
          title: "Translation",
          url: link,
          content: text,
          translations: [{ text: text, examples: examples }],
        });
        return results;
      },
    };

    // ===== 4. Tube Archivist (self-hosted YouTube) =====
    EG_b8.tubearchivist = {
      name: "tubearchivist",
      categories: ["videos"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      baseUrl: "",
      taToken: "",
      taLinkToMp4: false,
      async request(query, params, sq) {
        if (!query) return false;
        params.url = this.baseUrl.replace(/\/+$/, "") + "/api/search/?" + new URLSearchParams({ query: query });
        params.headers = params.headers || {};
        params.headers["Authorization"] = "Token " + this.taToken;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!data || !data.results) return results;
        let absUrl = (rel) => this.baseUrl.replace(/\/+$/, "") + rel;

        for (let ch of data.results.channel_results || []) {
          results.push({
            url: absUrl("/channel/" + ch.channel_id),
            title: ch.channel_name,
            content: st(ch.channel_description),
            author: ch.channel_name,
            views: ch.channel_subs,
            thumbnail: absUrl(ch.channel_thumb_url) + "?auth=" + this.taToken,
          });
        }

        for (let v of data.results.video_results || []) {
          let meta = [v.channel?.channel_name, ...(v.tags || [])].filter(Boolean).slice(0, 5);
          let url = this.taLinkToMp4
            ? absUrl(v.media_url)
            : absUrl("/?videoId=" + v.youtube_id);
          results.push({
            template: "videos.html",
            url: url,
            title: v.title,
            content: st(v.description),
            author: v.channel?.channel_name,
            length: v.player?.duration_str,
            views: v.stats?.view_count,
            publishedDate: v.published ? new Date(v.published).toISOString() : null,
            thumbnail: absUrl(v.vid_thumb_url) + "?auth=" + this.taToken,
            metadata: meta.join(" | "),
          });
        }
        return results;
      },
    };

    // ===== 5. UXwing (images / icons) =====
    EG_b8.uxwing = {
      name: "uxwing",
      categories: ["images", "icons"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url = "https://uxwing.com/?s=" + encodeURIComponent(query);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let artRe = /<article\s[^>]*id="post[^"]*"[^>]*>([\s\S]*?)<\/article>/gi;
        let m;
        while ((m = artRe.exec(resp.text)) !== null) {
          let art = m[0];
          let clsMatch = art.match(/class="([^"]*)"/);
          let classes = clsMatch ? clsMatch[1].split(" ") : [];
          let tags = [];
          for (let cls of classes) {
            for (let prefix of ["category", "tag"]) {
              if (cls.startsWith(prefix)) {
                let tag = cls.slice(prefix.length).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                tags.push(tag);
              }
            }
          }
          let urlM = art.match(/<a\s+[^>]*href="([^"]*)"[^>]*>/i);
          let imgM = art.match(/<img\s+[^>]*src="([^"]*)"[^>]*>/i);
          let altM = art.match(/<img\s+[^>]*alt="([^"]*)"[^>]*>/i);
          results.push({
            template: "images.html",
            url: urlM ? urlM[1] : "",
            imgSrc: imgM ? imgM[1] : "",
            title: altM ? altM[1] : "",
            content: tags.join(", "),
          });
        }
        return results;
      },
    };

    // ===== 6. Wolfram|Alpha API (science) =====
    EG_b8.wolframalphaApi = {
      name: "wolframalphaApi",
      categories: ["science"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      apiKey: "",
      imagePods: ["VisualRepresentation", "Illustration"],
      async request(query, params, sq) {
        params.url =
          "https://api.wolframalpha.com/v2/query?appid=" +
          this.apiKey +
          "&" +
          new URLSearchParams({ input: query });
        params.headers = params.headers || {};
        params.headers["Referer"] =
          "https://www.wolframalpha.com/input/?" + new URLSearchParams({ i: query });
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(resp.text, "text/xml");
        let root = xmlDoc.documentElement;
        if (root.getAttribute("success") === "false") return results;

        let inputPod = root.querySelector('pod[id^="Input"]');
        let infoboxTitle = inputPod ? xmlText(inputPod, "plaintext") : "";
        let pods = root.querySelectorAll("pod");
        let resultChunks = [];
        let resultContent = "";

        for (let pod of pods) {
          let podId = pod.getAttribute("id");
          let podTitle = pod.getAttribute("title");
          let isPrimary = pod.getAttribute("primary") !== null;
          let subpods = pod.querySelectorAll("subpod");
          if (subpods.length === 0) continue;

          for (let subpod of subpods) {
            let content = xmlText(subpod, "plaintext");
            let img = subpod.querySelector("img");
            if (content && !this.imagePods.includes(podId)) {
              if ((isPrimary || !resultContent) && podId !== "Input") {
                resultContent = podTitle + ": " + content;
              }
              if (!infoboxTitle) infoboxTitle = content;
              resultChunks.push({ label: podTitle, value: content });
            } else if (img) {
              resultChunks.push({
                label: podTitle,
                image: { src: img.getAttribute("src"), alt: img.getAttribute("alt") },
              });
            }
          }
        }

        if (resultChunks.length === 0) return results;
        results.push({
          infobox: infoboxTitle,
          attributes: resultChunks,
          urls: [{ title: "Wolfram|Alpha", url: resp.request?.headers?.Referer || "" }],
        });
        results.push({
          url: resp.request?.headers?.Referer || "",
          title: "Wolfram Alpha (" + (infoboxTitle || "") + ")",
          content: resultContent,
        });
        return results;
      },
    };

    // ===== 7. Wolfram|Alpha No-API (science) =====
    EG_b8.wolframalphaNoapi = {
      name: "wolframalphaNoapi",
      categories: ["science"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      _token: null,
      _tokenTime: 0,
      imagePods: ["VisualRepresentation", "Illustration", "Symbol"],
      async _fetchToken() {
        if (this._token && Date.now() - this._tokenTime < 3600000) return this._token;
        try {
          let resp = await fetch(
            "https://www.wolframalpha.com/input/api/v1/code?ts=" + Date.now()
          );
          let data = await resp.json();
          this._token = data.code;
          this._tokenTime = Date.now();
          return this._token;
        } catch {
          return null;
        }
      },
      async request(query, params, sq) {
        let token = await this._fetchToken();
        if (!token) return params;
        let qs =
          "async=false" +
          "&banners=raw" +
          "&debuggingdata=false" +
          "&format=image,plaintext,imagemap,minput,moutput" +
          "&formattimeout=2" +
          "&" +
          new URLSearchParams({ input: query }) +
          "&output=JSON" +
          "&parsetimeout=2" +
          "&proxycode=" +
          token +
          "&scantimeout=0.5" +
          "&sponsorcategories=true" +
          "&statemethod=deploybutton";
        params.url = "https://www.wolframalpha.com/input/json.jsp?" + qs;
        params.headers = params.headers || {};
        params.headers["Referer"] =
          "https://www.wolframalpha.com/input/?" + new URLSearchParams({ i: query });
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!data || !data.queryresult || !data.queryresult.success) return results;
        let resultChunks = [];
        let infoboxTitle = "";
        let resultContent = "";
        for (let pod of data.queryresult.pods || []) {
          let podId = pod.id || "";
          let podTitle = pod.title || "";
          let isPrimary = pod.primary || false;
          if (!pod.subpods) continue;
          if (podId === "Input" || !infoboxTitle) {
            infoboxTitle = pod.subpods[0]?.plaintext || "";
          }
          for (let subpod of pod.subpods) {
            if (subpod.plaintext && !this.imagePods.includes(podId)) {
              if (subpod.plaintext !== "(requires interactivity)") {
                resultChunks.push({ label: podTitle, value: subpod.plaintext });
              }
              if ((isPrimary || !resultContent) && podId !== "Input") {
                resultContent = podTitle + ": " + subpod.plaintext;
              }
            } else if (subpod.img) {
              resultChunks.push({ label: podTitle, image: subpod.img });
            }
          }
        }
        if (resultChunks.length === 0) return results;
        results.push({
          infobox: infoboxTitle,
          attributes: resultChunks,
          urls: [{ title: "Wolfram|Alpha", url: resp.request?.headers?.Referer || "" }],
        });
        results.push({
          url: resp.request?.headers?.Referer || "",
          title: "Wolfram Alpha (" + infoboxTitle + ")",
          content: resultContent,
        });
        return results;
      },
    };

    // ===== 8. Wordnik (dictionary) =====
    EG_b8.wordnik = {
      name: "wordnik",
      categories: ["dictionaries", "define"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url = "https://www.wordnik.com/words/" + encodeURIComponent(query);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let defineDiv = blk(resp.text, "div", "define");
        if (!defineDiv) return results;
        let parts = defineDiv.html.split(/<h3\s+class="source"[^>]*>/);
        for (let i = 1; i < parts.length; i++) {
          let part = parts[i];
          let sourceTitle = st(part.replace(/<ul[\s\S]*$/, ""));
          let ulMatch = part.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i);
          if (!ulMatch) continue;
          let lis = ulMatch[1].match(/<li[\s\S]*?<\/li>/gi) || [];
          let itemText = "";
          let definitions = [];
          for (let li of lis) {
            let abbrM = li.match(/<abbr[^>]*>([\s\S]*?)<\/abbr>/i);
            let defText = st(li);
            if (abbrM) {
              let abbr = st(abbrM[1]);
              defText = defText.slice(abbr.length).trim();
            }
            if (defText) {
              if (!itemText) itemText = defText;
              definitions.push(defText);
            }
          }
          if (itemText) {
            results.push({
              title: sourceTitle,
              url: resp.searchParams?.url || "",
              content: itemText,
              definitions: definitions,
            });
          }
        }
        return results;
      },
    };

    // ===== 9. wttr.in (weather) =====
    EG_b8.wttr = {
      name: "wttr",
      categories: ["weather"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      wwoToCondition: {
        "113": "clear sky",
        "116": "partly cloudy",
        "119": "cloudy",
        "122": "fair",
        "143": "fair",
        "176": "light rain showers",
        "179": "light snow showers",
        "182": "light sleet showers",
        "185": "light sleet",
        "200": "rain and thunder",
        "227": "light snow",
        "230": "heavy snow",
        "248": "fog",
        "260": "fog",
        "263": "light rain showers",
        "266": "light rain showers",
        "281": "light sleet showers",
        "284": "light snow showers",
        "293": "light rain showers",
        "296": "light rain",
        "299": "rain showers",
        "302": "rain",
        "305": "heavy rain showers",
        "308": "heavy rain",
        "311": "light sleet",
        "314": "sleet",
        "317": "light sleet",
        "320": "heavy sleet",
        "323": "light snow showers",
        "326": "light snow showers",
        "329": "heavy snow showers",
        "332": "heavy snow",
        "335": "heavy snow showers",
        "338": "heavy snow",
        "350": "light sleet",
        "353": "light rain showers",
        "356": "heavy rain showers",
        "359": "heavy rain",
        "362": "light sleet showers",
        "365": "sleet showers",
        "368": "light snow showers",
        "371": "heavy snow showers",
        "374": "light sleet showers",
        "377": "heavy sleet",
        "386": "rain showers and thunder",
        "389": "heavy rain showers and thunder",
        "392": "snow showers and thunder",
        "395": "heavy snow showers",
      },
      async request(query, params, sq) {
        params.url =
          "https://wttr.in/" + encodeURIComponent(query) + "?format=j1&lang=" + (params.language || "en");
        params.raiseForHttpError = false;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (resp.status === 404) return results;
        let data = resp.json;
        if (!data) return results;
        let current = data.current_condition?.[0];
        if (!current) return results;
        let condition = this.wwoToCondition[current.weatherCode] || current.weatherDesc?.[0]?.value || "";
        results.push({
          title: "Weather for " + (resp.searchParams?.query || ""),
          url: "https://wttr.in/" + encodeURIComponent(resp.searchParams?.query || ""),
          content: condition,
          weather: {
            location: resp.searchParams?.query,
            temperature: { val: current.temp_C || current.tempC, unit: "°C" },
            condition: condition,
            feelsLike: { val: current.FeelsLikeC, unit: "°C" },
            wind: { dirDegree: current.winddirDegree, speedKmph: current.windspeedKmph },
            pressure: current.pressure,
            humidity: current.humidity,
            cloudCover: current.cloudcover,
          },
          forecasts: (data.weather || []).map((day) => ({
            date: day.date,
            hourly: (day.hourly || []).map((h) => ({
              temp: h.temp_C || h.tempC,
              condition: this.wwoToCondition[h.weatherCode] || "",
              feelsLike: h.FeelsLikeC,
              windSpeed: h.windspeedKmph,
              humidity: h.humidity,
            })),
          })),
        });
        return results;
      },
    };

    // ===== 10. 1x (images) =====
    EG_b8.www1x = {
      name: "www1x",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url = "https://1x.com/backend/search.php?" + new URLSearchParams({ q: query });
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(resp.text, "text/xml");
        let dataEl = xmlDoc.querySelector("data");
        if (!dataEl) return results;
        let htmlFragment = dataEl.textContent;
        let aRe = /<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
        let m;
        while ((m = aRe.exec(htmlFragment)) !== null) {
          let url = m[1];
          if (url && !url.startsWith("http")) url = "https://1x.com" + url;
          let inner = m[2];
          let imgM = inner.match(/<img\s+[^>]*src="([^"]*)"[^>]*>/i);
          let title = st(inner.replace(/<[^>]*>/g, ""));
          let thumbSrc = imgM ? imgM[1] : "";
          if (thumbSrc && !thumbSrc.startsWith("http"))
            thumbSrc = "https://gallery.1x.com" + thumbSrc.replace("https://1x.com", "");
          results.push({
            url: url || "",
            title: title,
            imgSrc: thumbSrc,
            content: "",
            thumbnailSrc: thumbSrc,
            template: "images.html",
          });
        }
        return results;
      },
    };

    // ===== 11. Yep (general / news / images) =====
    EG_b8.yep = {
      name: "yep",
      categories: ["general"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      safesearch: true,
      safesearchMap: { 0: "off", 1: "moderate", 2: "strict" },
      resultsPerPage: 20,
      async request(query, params, sq) {
        params.url =
          "https://api.yep.com/fs/2/search?" +
          new URLSearchParams({
            query: query,
            safeSearch: this.safesearchMap[params.safesearch || 1] || "moderate",
            limit: this.resultsPerPage,
          });
        params.headers = params.headers || {};
        params.headers["Referer"] = "https://yep.com/";
        params.headers["Origin"] = "https://yep.com";
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!data) return results;
        let items = data[1]?.results || [];
        for (let r of items) {
          results.push({
            url: r.url,
            title: r.title,
            content: st(r.snippet),
          });
        }
        return results;
      },
    };

    // ===== 12. YouTube API (videos / music) =====
    EG_b8.youtubeApi = {
      name: "youtubeApi",
      categories: ["videos", "music"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      apiKey: null,
      async request(query, params, sq) {
        let url =
          "https://www.googleapis.com/youtube/v3/search?part=snippet&" +
          new URLSearchParams({ q: query }) +
          "&maxResults=20&key=" +
          this.apiKey;
        if (params.language && params.language !== "all") url += "&relevanceLanguage=" + params.language.split("-")[0];
        params.url = url;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!data) return results;
        if (data.error && data.error.message) {
          console.warn("YouTube API error:", data.error.message);
          return results;
        }
        if (!data.items) return results;
        for (let item of data.items) {
          if (!item.id || !item.id.videoId) continue;
          let vid = item.id.videoId;
          results.push({
            url: "https://www.youtube.com/watch?v=" + vid,
            title: item.snippet?.title || "",
            content: item.snippet?.description || "",
            template: "videos.html",
            publishedDate: item.snippet?.publishedAt ? new Date(item.snippet.publishedAt).toISOString() : null,
            iframeSrc: "https://www.youtube-nocookie.com/embed/" + vid,
            thumbnail: item.snippet?.thumbnails?.high?.url || "",
          });
        }
        return results;
      },
    };

    // ===== 13. YouTube No-API (videos / music) =====
    EG_b8.youtubeNoapi = {
      name: "youtubeNoapi",
      categories: ["videos", "music"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      timeRangeSupport: true,
      _nextPageToken: null,
      timeRangeMap: { day: "Ag", week: "Aw", month: "BA", year: "BQ" },
      async request(query, params, sq) {
        params.cookies = params.cookies || {};
        params.cookies.CONSENT = "YES+";
        if (sq.pageno > 1 && this._nextPageToken) {
          let token = this._nextPageToken;
          this._nextPageToken = null;
          params.url =
            "https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";
          params.method = "POST";
          params.data = JSON.stringify({
            context: { client: { clientName: "WEB", clientVersion: "2.20210310.12.01" } },
            continuation: token,
          });
          params.headers = params.headers || {};
          params.headers["Content-Type"] = "application/json";
        } else {
          this._nextPageToken = null;
          let url =
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(query) +
            "&page=" +
            (sq.pageno || 1);
          if (sq.timeRange && this.timeRangeMap[sq.timeRange])
            url += "&sp=EgII" + this.timeRangeMap[sq.timeRange] + "%253D%253D";
          params.url = url;
        }
        return params;
      },
      _gt(el) {
        if (!el) return "";
        if (el.runs) return el.runs.map((x) => x.text).join("");
        return el.simpleText || "";
      },
      async response(resp, sq) {
        if (resp.text.trim().startsWith("{")) return this._parseContinuation(resp.text);
        return this._parseFirstPage(resp.text);
      },
      _parseFirstPage(html) {
        let r = [];
        let data = eb(html, "ytInitialData = ", ";</script>");
        if (!data) return r;
        try {
          let j = JSON.parse(data);
          let sections =
            j?.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents || [];
          for (let sec of sections) {
            if (sec.continuationItemRenderer) {
              let tok =
                sec.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token;
              if (tok) this._nextPageToken = tok;
            }
            let items = sec?.itemSectionRenderer?.contents || [];
            for (let vc of items) {
              let v = vc.videoRenderer;
              if (!v || !v.videoId) continue;
              r.push({
                url: "https://www.youtube.com/watch?v=" + v.videoId,
                title: this._gt(v.title),
                content: this._gt(v.descriptionSnippet),
                author: this._gt(v.ownerText),
                length: this._gt(v.lengthText),
                thumbnail: "https://i.ytimg.com/vi/" + v.videoId + "/hqdefault.jpg",
                iframeSrc: "https://www.youtube-nocookie.com/embed/" + v.videoId,
              });
            }
          }
        } catch (e) {}
        return r;
      },
      _parseContinuation(text) {
        let r = [];
        try {
          let j = JSON.parse(text);
          let items =
            j?.onResponseReceivedCommands?.[0]?.appendContinuationItemsAction?.continuationItems?.[0]
              ?.itemSectionRenderer?.contents || [];
          for (let sec of items) {
            if (!sec.videoRenderer) continue;
            let v = sec.videoRenderer;
            let thumbs = v.thumbnail?.thumbnails || [];
            r.push({
              url: "https://www.youtube.com/watch?v=" + v.videoId,
              title: v.title?.runs?.map((x) => x.text).join("") || "",
              content: v.descriptionSnippet?.runs?.map((x) => x.text).join(" ") || "",
              author: v.ownerText?.runs?.[0]?.text || "",
              length: v.lengthText?.simpleText || "",
              thumbnail: thumbs.length > 0 ? thumbs[thumbs.length - 1].url : "",
              iframeSrc: "https://www.youtube-nocookie.com/embed/" + v.videoId,
            });
          }
          let tok =
            j?.onResponseReceivedCommands?.[0]?.appendContinuationItemsAction?.continuationItems?.[1]
              ?.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token;
          if (tok) this._nextPageToken = tok;
        } catch (e) {}
        return r;
      },
    };

    // ===== 14. Z-Library (files / books) =====
    EG_b8.zlibrary = {
      name: "zlibrary",
      categories: ["files", "books"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      baseUrl: "https://zlibrary-global.se",
      zlibYearFrom: "",
      zlibYearTo: "",
      zlibExt: "",
      i18n: { language: "Language", bookRating: "Book rating", fileQuality: "File quality" },
      async request(query, params, sq) {
        let url =
          this.baseUrl +
          "/s/" +
          encodeURIComponent(query) +
          "/?page=" +
          (sq.pageno || 1) +
          "&yearFrom=" +
          this.zlibYearFrom +
          "&yearTo=" +
          this.zlibYearTo +
          "&extensions[]=" +
          this.zlibExt;
        params.url = url;
        params.verify = false;
        return params;
      },
      _text(html) {
        return st(html);
      },
      async response(resp, sq) {
        let results = [];
        let html = resp.text;
        if (/<title>[^<]*seized[^<]*<\/title>/i.test(html)) return results;
        let searchBox = blk(html, "div", "searchResultBox");
        if (!searchBox) return results;
        let items = allBlk(searchBox.html, "div", "resItemBox");
        for (let item of items) {
          let urlM = item.match(/<a\s+[^>]*href="(\/book\/[^"]*)"[^>]*>/i);
          let titleM = item.match(/itemprop="name"[^>]*>([\s\S]*?)<\/[^>]+>/i);
          let authorDiv = blk(item, "div", "authors");
          let authors = [];
          if (authorDiv) {
            let aRe = /<a\s+[^>]*itemprop="author"[^>]*>([\s\S]*?)<\/a>/gi;
            let am;
            while ((am = aRe.exec(authorDiv.html)) !== null) authors.push(st(am[1]));
          }
          let pubM = item.match(/<a\s+[^>]*title="Publisher"[^>]*>([\s\S]*?)<\/a>/i);
          let typeM = item.match(/property__file[\s\S]*?property_value[^>]*>([\s\S]*?)<\/div>/i);
          let thumbM = item.match(/<img\s+[^>]*class="[^"]*cover[^"]*"[^>]*data-src="([^"]*)"[^>]*>/i);
          let yearM = item.match(/property_year[\s\S]*?property_value[^>]*>([\s\S]*?)<\/div>/i);
          let langM = item.match(/property_language[\s\S]*?property_value[^>]*>([\s\S]*?)<\/div>/i);
          let ratingM = item.match(/book-rating-interest-score[^>]*>([\s\S]*?)<\/span>/i);
          let qualityM = item.match(/book-rating-quality-score[^>]*>([\s\S]*?)<\/span>/i);

          let result = {
            url: this.baseUrl + (urlM ? urlM[1] : ""),
            title: titleM ? st(titleM[1]) : "",
            authors: authors,
            publisher: pubM ? st(pubM[1]) : null,
            type: typeM ? st(typeM[1]) : null,
          };

          if (thumbM && !thumbM[1].startsWith("/")) result.thumbnail = thumbM[1];
          if (yearM) {
            let y = st(yearM[1]);
            if (y) result.publishedDate = y + "-01-01";
          }

          let contentParts = [];
          if (langM) contentParts.push(this.i18n.language + ": " + st(langM[1]).toUpperCase());
          if (ratingM) {
            let r = parseFloat(st(ratingM[1]));
            if (r) contentParts.push(this.i18n.bookRating + ": " + r);
          }
          if (qualityM) {
            let q = parseFloat(st(qualityM[1]));
            if (q) contentParts.push(this.i18n.fileQuality + ": " + q);
          }
          result.content = contentParts.join(" | ");
          results.push(result);
        }
        return results;
      },
    };
  });
