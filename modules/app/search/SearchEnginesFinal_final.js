var EG_final = {},
  eG_final = j(() => {
    "use strict";

    function eb(s, start, end) { let i = s.indexOf(start); if (i === -1) return null; i += start.length; let j = s.indexOf(end, i); return j === -1 ? null : s.slice(i, j); }

    function st(s) { return s ? s.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim() : ""; }

    function de(s) { try { return decodeURIComponent((s || "").replace(/\+/g, " ")); } catch (e) { return s || ""; } }

    function dq(s) { try { return decodeURIComponent(s || ""); } catch (e) { return s || ""; } }

    EG_final.githubCode = {
      name: "github_code",
      categories: ["code"],
      shortcut: null,
      paging: !0,
      useRenderer: !0,
      search_url: "https://api.github.com/search/code",
      accept_header: "application/vnd.github.text-match+json",
      api_version: "2022-11-28",
      auth_type: "none",
      auth_token: "",
      async request(query, params, sq) {
        let qp = new URLSearchParams({ q: query, sort: "indexed" });
        qp.set("page", sq.pageno || 1);
        params.url = this.search_url + "?" + qp.toString();
        params.headers["Accept"] = this.accept_header;
        params.headers["X-GitHub-Api-Version"] = this.api_version;
        if (this.auth_type === "none") params.headers["Authorization"] = "placeholder";
        else if (this.auth_type === "personal_access_token") params.headers["Authorization"] = "token " + this.auth_token;
        else if (this.auth_type === "bearer") params.headers["Authorization"] = "Bearer " + this.auth_token;
        params.raise_for_httperror = false;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (resp.status === 422) return results;
        if (!resp.json || !resp.json.items) return results;
        for (let item of resp.json.items) {
          let repo = item.repository || {};
          let textMatches = item.text_matches || [];
          let codeMatches = textMatches.filter(function(m) { return m.object_type === "FileContent" && m.property === "content"; });
          let codeLines = [];
          for (let cm of codeMatches) {
            let frag = cm.fragment || "";
            let lines = frag.split("\n");
            for (let line of lines) codeLines.push(line);
          }
          results.push({
            url: item.html_url,
            title: (repo.full_name || "") + " \u00b7 " + (item.name || ""),
            content: repo.description || "",
            filename: item.path || "",
            repository: repo.html_url || "",
            codelines: codeLines.join("\n"),
          });
        }
        return results;
      },
    };

    EG_final.googleImages = {
      name: "google_images",
      categories: ["images", "web"],
      shortcut: null,
      paging: !0,
      useRenderer: !0,
      max_page: 50,
      time_range_support: !0,
      safesearch: !0,
      filter_mapping: { 0: "images", 1: "active", 2: "active" },
      time_range_dict: { day: "d", week: "w", month: "m", year: "y" },
      async request(query, params, sq) {
        let qp = new URLSearchParams({ q: query, tbm: "isch", hl: params.language || "en", asearch: "isch" });
        let query_url = "https://www.google.com/search?" + qp.toString() + "&async=_fmt:json,p:1,ijn:" + ((sq.pageno || 1) - 1);
        if (params.time_range && this.time_range_dict[params.time_range]) query_url += "&tbs=qdr:" + this.time_range_dict[params.time_range];
        if (params.safesearch) query_url += "&safe=" + this.filter_mapping[params.safesearch];
        params.url = query_url;
        params.headers["User-Agent"] = "NSTN/3.60.474802233.release Dalvik/2.1.0 (Linux; U; Android 12; US) gzip";
        return params;
      },
      async response(resp, sq) {
        let results = [], text = resp.text || "";
        let jsonStart = text.indexOf('{"ischj":');
        if (jsonStart === -1) return results;
        try {
          let jsonData = JSON.parse(text.slice(jsonStart));
          let metadata = jsonData.ischj && jsonData.ischj.metadata || [];
          for (let item of metadata) {
            let res = item.result || {};
            let origImg = item.original_image || {};
            let thumb = item.thumbnail || {};
            let grid = item.text_in_grid || {};
            results.push({
              url: res.referrer_url || "",
              title: res.page_title || "",
              content: grid.snippet || "",
              source: res.site_title || "",
              resolution: (origImg.width || "") + " x " + (origImg.height || ""),
              img_src: origImg.url || "",
              thumbnail_src: thumb.url || "",
              template: "images.html",
            });
          }
        } catch (e) {}
        return results;
      },
    };

    EG_final.googlePlay = {
      name: "google_play",
      categories: ["general"],
      shortcut: null,
      paging: !1,
      useRenderer: !0,
      play_categ: null,
      base_url: "https://play.google.com",
      async request(query, params, sq) {
        if (!this.play_categ) throw new Error("play_categ not set (apps or movies)");
        params.url = this.base_url + "/store/search?" + new URLSearchParams({ q: query }).toString() + "&c=" + this.play_categ;
        params.cookies = params.cookies || {};
        params.cookies["CONSENT"] = "YES+";
        return params;
      },
      async response(resp, sq) {
        if (this.play_categ === "movies") return this.responseMovies(resp, sq);
        if (this.play_categ === "apps") return this.responseApps(resp, sq);
        return [];
      },
      responseMovies(resp, sq) {
        let results = [], h = resp.text || "";
        let sectionRe = /<section>([\s\S]*?)<\/section>/g, secM;
        while ((secM = sectionRe.exec(h)) !== null) {
          let secHtml = secM[1];
          let secName = st(eb(secHtml, "<header>", "</header>")) || "";
          let aRe = /<a[^>]*href="(\/store[^"]*|\/details[^"]*)"[^>]*>([\s\S]*?)<\/a>/g, aM;
          while ((aM = aRe.exec(secHtml)) !== null) {
            let url = this.base_url + aM[1];
            let inner = aM[2];
            let title = st(eb(inner, 'title="', '"')) || "";
            let imgM = inner.match(/<img[^>]*src="([^"]*)"/);
            let thumbnail = imgM ? imgM[1] : "";
            let metadata = "";
            let divs = inner.match(/<div[^>]*>([\s\S]*?)<\/div>/g) || [];
            for (let d of divs) {
              let txt = st(d);
              if (txt && !metadata && txt !== title) metadata = txt;
            }
            if (title && url) results.push({ url, title, content: secName, thumbnail, metadata, template: "videos.html" });
          }
        }
        return results;
      },
      responseApps(resp, sq) {
        let results = [], h = resp.text || "";
        if (h.indexOf('class="v6DsQb"') > -1) return results;
        let spotRe = /<div[^>]*class="[^"]*ipRz4[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/;
        let spotM = spotRe.exec(h);
        if (spotM) {
          let s = spotM[1];
          let urlM = s.match(/<a[^>]*class="[^"]*Qfxief[^"]*"[^>]*href="([^"]*)"/);
          let url = urlM ? this.base_url + urlM[1] : "";
          let title = st(eb(s, 'class="vWM94c">', "</div>")) || "";
          let content = st(eb(s, 'class="LbQbAe">', "</div>")) || "";
          let img = (s.match(/<img[^>]*class="[^"]*T75of bzqKMd[^"]*"[^>]*src="([^"]*)"/) || [])[1] || "";
          if (title) results.push({ url, title, content, img_src: img });
        }
        let moreRe = /<div[^>]*role="listitem"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g, moreM;
        while ((moreM = moreRe.exec(h)) !== null) {
          let item = moreM[1];
          let urlM = item.match(/<a[^>]*href="([^"]*)"/);
          let url = urlM ? this.base_url + urlM[1] : "";
          let title = st(eb(item, 'class="DdYX5">', "</span>")) || "";
          let content = st(eb(item, 'class="wMUdtb">', "</span>")) || "";
          let img = (item.match(/<img[^>]*class="[^"]*T75of[^"]*"[^>]*src="([^"]*)"/) || [])[1] || "";
          if (title) results.push({ url, title, content, img_src: img });
        }
        return results;
      },
    };

    EG_final.googleScholar = {
      name: "google_scholar",
      categories: ["science", "scientific publications"],
      shortcut: null,
      paging: !0,
      useRenderer: !0,
      max_page: 50,
      language_support: !0,
      time_range_support: !0,
      safesearch: !1,
      async request(query, params, sq) {
        let args = {
          q: query,
          hl: params.language || "en",
          start: ((sq.pageno || 1) - 1) * 10,
          as_sdt: "2007",
          as_vis: "0",
        };
        if (params.time_range) args.as_ylo = new Date().getFullYear() - 1;
        params.url = "https://scholar.google.com/scholar?" + new URLSearchParams(args).toString();
        return params;
      },
      async response(resp, sq) {
        let results = [], h = resp.text || "";
        if (resp.status >= 300 && resp.status < 400 && resp.headers && resp.headers.location) {
          if (resp.headers.location.indexOf("/sorry/index?continue") > -1) return results;
        }
        if (h.indexOf('id="gs_captcha_f"') > -1) return results;
        let dataRpRe = /<div[^>]*data-rp[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g, dpM;
        while ((dpM = dataRpRe.exec(h)) !== null) {
          let block = dpM[1];
          let titleEl = eb(block, "<h3", "</h3>");
          if (!titleEl) continue;
          let titleA = eb(titleEl, "<a", "</a>");
          let title = titleA ? st(titleA) : "";
          if (!title) continue;
          let urlM = titleEl.match(/href="([^"]*)"/);
          let url = urlM ? urlM[1] : "";
          let content = st(eb(block, 'class="gs_rs">', "</div>")) || "";
          let gsA = st(eb(block, 'class="gs_a">', "</div>")) || "";
          let authors = [], journal = "", publisher = "", publishedDate = null;
          if (gsA) {
            let parts = gsA.split(" - ");
            authors = (parts[0] || "").split(", ");
            publisher = parts[parts.length - 1] || "";
            if (parts.length === 3) {
              let jy = parts[1].split(", ");
              journal = jy.length > 1 ? jy.slice(0, -1).join(", ") : "";
              if (journal === "\u2026") journal = "";
              let yearStr = jy[jy.length - 1] || "";
              if (yearStr && /^\d{4}$/.test(yearStr.trim())) { try { publishedDate = new Date(yearStr.trim()); } catch (e) {} }
            }
          }
          let comments = st(eb(block, 'href="/scholar?cites=', '"')) || "";
          let docType = st(eb(block, 'class="gs_ctg2">', "</span>")) || "";
          let docUrlM = block.match(/<div[^>]*class="gs_or_ggsm"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"/);
          let docUrl = docUrlM ? docUrlM[1] : "";
          let htmlUrl = "", pdfUrl = "";
          if (docType.indexOf("PDF") > -1) pdfUrl = docUrl;
          else htmlUrl = docUrl;
          results.push({
            url: url,
            title: title,
            authors: authors,
            publisher: publisher,
            journal: journal,
            publishedDate: publishedDate,
            content: content,
            comments: comments,
            html_url: htmlUrl,
            pdf_url: pdfUrl,
          });
        }
        let sugRe = /<div[^>]*class="[^"]*gs_qsuggest_wrap[^"]*"[^>]*>([\s\S]*?)<\/div>/;
        let sugM = sugRe.exec(h);
        if (sugM) {
          let lis = sugM[1].match(/<li[^>]*>([\s\S]*?)<\/li>/g) || [];
          for (let li of lis) {
            let aTxt = st(eb(li, "<a", "</a>")) || "";
            if (aTxt) results.push({ suggestion: aTxt });
          }
        }
        let corRe = /<div[^>]*class="gs_r gs_pda"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g, corM;
        while ((corM = corRe.exec(h)) !== null) {
          let corTxt = st(corM[1]);
          if (corTxt) results.push({ correction: corTxt });
        }
        return results;
      },
    };

    EG_final.googleVideos = {
      name: "google_videos",
      categories: ["videos", "web"],
      shortcut: null,
      paging: !0,
      useRenderer: !0,
      max_page: 50,
      language_support: !0,
      time_range_support: !0,
      safesearch: !0,
      filter_mapping: { 0: "images", 1: "active", 2: "active" },
      time_range_dict: { day: "d", week: "w", month: "m", year: "y" },
      async request(query, params, sq) {
        let start = ((sq.pageno || 1) - 1) * 10;
        let qp = new URLSearchParams({ q: query, tbm: "vid", start: start.toString(), hl: params.language || "en", asearch: "arc" });
        let query_url = "https://www.google.com/search?" + qp.toString();
        if (params.time_range && this.time_range_dict[params.time_range]) query_url += "&tbs=qdr:" + this.time_range_dict[params.time_range];
        if (params.safesearch) query_url += "&safe=" + this.filter_mapping[params.safesearch];
        params.url = query_url;
        return params;
      },
      async response(resp, sq) {
        let results = [], h = resp.text || "";
        let dataImageMap = {};
        let dimgRe = /"(dimg_[^"]*)"[^;]*;(data:image[^;]*;[^;]*);?/g, dimgM;
        while ((dimgM = dimgRe.exec(h)) !== null) {
          let dataImage = dimgM[2];
          let endPos = dataImage.lastIndexOf("=");
          if (endPos > 0) dataImage = dataImage.slice(0, endPos + 1);
          dataImageMap[dimgM[1]] = dataImage;
        }
        let mjjRe = /<div[^>]*class="[^"]*MjjYud[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g, mjjM;
        while ((mjjM = mjjRe.exec(h)) !== null) {
          let block = mjjM[1];
          let titleEl = eb(block, "<h3", "</h3>");
          let title = titleEl ? st(titleEl) : "";
          if (!title) {
            let headingM = block.match(/<div[^>]*role="heading"[^>]*>([\s\S]*?)<\/div>/);
            if (headingM) title = st(headingM[1]);
          }
          let url = "";
          let a1 = block.match(/<a[^>]*jsname="UWckNb"[^>]*href="([^"]*)"/);
          let a2 = block.match(/<a[^>]*href="(\/url\?q=[^"]*)"/);
          if (a1) url = dq(a1[1]);
          else if (a2) url = dq(a2[1].slice(7).split("&sa=U")[0]);
          let content = "";
          let contentEl = eb(block, 'class="ITZIwc">', "</div>");
          if (contentEl) content = st(contentEl);
          let pubInfo = "";
          let pubEl = eb(block, 'class="gqF9jc">', "</div>") || eb(block, 'class="WRu9Cd">', "</div>");
          if (pubEl) pubInfo = st(pubEl);
          let thumbnail = null;
          let imgM = block.match(/<img[^>]*src="([^"]*)"/);
          if (imgM) {
            let src = imgM[1];
            if (src.indexOf("data:image") === 0) {
              let idM = block.match(/<img[^>]*id="([^"]*)"/);
              if (idM && dataImageMap[idM[1]]) thumbnail = dataImageMap[idM[1]];
            } else {
              thumbnail = src;
            }
          }
          let duration = "";
          let durEl = eb(block, 'class="k1U36b">', "</span>");
          if (durEl) duration = st(durEl);
          let videoId = "";
          let vidM = block.match(/<div[^>]*jscontroller="rTuANe"[^>]*data-vid="([^"]*)"/);
          if (vidM) videoId = vidM[1];
          if (!videoId && url && url.indexOf("youtube.com") > -1) {
            try { let u = new URL(url); videoId = u.searchParams.get("v") || ""; } catch (e) {}
          }
          if (!thumbnail && videoId) thumbnail = "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg";
          if (title && url) results.push({
            url: url,
            title: title,
            content: content || "",
            author: pubInfo,
            thumbnail: thumbnail,
            length: duration,
            template: "videos.html",
            iframe_src: videoId ? "https://www.youtube-nocookie.com/embed/" + videoId : null,
          });
        }
        return results;
      },
    };

    EG_final.wolframalphaApi = {
      name: "wolframalpha_api",
      categories: ["science"],
      shortcut: null,
      paging: !1,
      useRenderer: !0,
      api_key: "",
      site_url: "https://www.wolframalpha.com/input/",
      search_url: "https://api.wolframalpha.com/v2/query",
      image_pods: { VisualRepresentation: 1, Illustration: 1 },
      async request(query, params, sq) {
        params.url = this.search_url + "?" + new URLSearchParams({ input: query, appid: this.api_key }).toString();
        params.headers["Referer"] = this.site_url + new URLSearchParams({ i: query }).toString();
        return params;
      },
      async response(resp, sq) {
        let results = [], text = resp.text || "";
        if (text.indexOf('success="false"') > -1) return results;
        let infoboxTitle = "";
        let inputPodM = text.match(/<pod[^>]*id="Input[^"]*"[^>]*>[\s\S]*?<plaintext>([\s\S]*?)<\/plaintext>/);
        if (inputPodM) infoboxTitle = st(inputPodM[1]);
        let resultChunks = [], resultContent = "";
        let podRe = /<pod\s([^>]*)>([\s\S]*?)<\/pod>/g, podM;
        while ((podM = podRe.exec(text)) !== null) {
          let podAttrs = podM[1], podBody = podM[2];
          let podId = (podAttrs.match(/id="([^"]*)"/) || [])[1] || "";
          let podTitle = (podAttrs.match(/title="([^"]*)"/) || [])[1] || "";
          let podIsResult = podAttrs.indexOf('primary="true"') > -1;
          let subpodRe = /<subpod>([\s\S]*?)<\/subpod>/g, subM;
          while ((subM = subpodRe.exec(podBody)) !== null) {
            let subpod = subM[1];
            let plaintextM = subpod.match(/<plaintext>([\s\S]*?)<\/plaintext>/);
            let content = plaintextM ? plaintextM[1] : "";
            if (content && !this.image_pods[podId]) {
              if (podIsResult || !resultContent) {
                if (podId !== "Input") resultContent = podTitle + ": " + content;
              }
              if (!infoboxTitle) infoboxTitle = content;
              resultChunks.push({ label: podTitle, value: content });
            }
            let imgM = subpod.match(/<img\s([^>]*)>/);
            if (imgM) {
              let imgAttrs = imgM[1];
              let src = (imgAttrs.match(/src="([^"]*)"/) || [])[1] || "";
              let alt = (imgAttrs.match(/alt="([^"]*)"/) || [])[1] || "";
              if (src) resultChunks.push({ label: podTitle, image: { src: "https://www.wolframalpha.com" + src, alt } });
            }
          }
        }
        if (!resultChunks.length) return results;
        let title = "Wolfram Alpha (" + infoboxTitle + ")";
        let refUrl = this.site_url + new URLSearchParams({ i: infoboxTitle }).toString();
        results.push({ infobox: infoboxTitle, attributes: resultChunks, urls: [{ title: "Wolfram|Alpha", url: refUrl }] });
        results.push({ url: refUrl, title: title, content: resultContent });
        return results;
      },
    };

    EG_final.wolframalphaNoapi = {
      name: "wolframalpha_noapi",
      categories: ["science"],
      shortcut: null,
      paging: !1,
      useRenderer: !0,
      token: null,
      base_url: "https://www.wolframalpha.com/",
      image_pods: { VisualRepresentation: 1, Illustration: 1, Symbol: 1 },
      async request(query, params, sq) {
        let token = this.token;
        if (!token) {
          try {
            let tokResp = await fetch("https://www.wolframalpha.com/input/api/v1/code?ts=9999999999999999999");
            let tokJson = await tokResp.json();
            token = tokJson.code;
            this.token = token;
          } catch (e) {
            throw new Error("wolframalpha_noapi: failed to obtain token - configure manually or ensure network access");
          }
        }
        let qp = new URLSearchParams({ input: query }).toString();
        params.url = this.base_url + "input/json.jsp?async=false&banners=raw&debuggingdata=false&format=image,plaintext,imagemap,minput,moutput&formattimeout=2&" + qp + "&output=JSON&parsetimeout=2&proxycode=" + token + "&scantimeout=0.5&sponsorcategories=true&statemethod=deploybutton";
        params.headers["Referer"] = this.base_url + "input/?" + new URLSearchParams({ i: query }).toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json || !resp.json.queryresult) return results;
        let qr = resp.json.queryresult;
        if (!qr.success) return results;
        let resultChunks = [], infoboxTitle = "", resultContent = "";
        for (let pod of qr.pods || []) {
          let podId = pod.id || "", podTitle = pod.title || "", podIsResult = pod.primary || false;
          if (!pod.subpods) continue;
          if (podId === "Input" || !infoboxTitle) infoboxTitle = pod.subpods[0] && pod.subpods[0].plaintext || "";
          for (let subpod of pod.subpods) {
            if (subpod.plaintext && subpod.plaintext !== "" && !this.image_pods[podId]) {
              if (subpod.plaintext !== "(requires interactivity)") resultChunks.push({ label: podTitle, value: subpod.plaintext });
              if (podIsResult || !resultContent) {
                if (podId !== "Input") resultContent = podTitle + ": " + subpod.plaintext;
              }
            } else if (subpod.img) {
              resultChunks.push({ label: podTitle, image: subpod.img });
            }
          }
        }
        if (!resultChunks.length) return results;
        let refUrl = this.base_url + "input/?" + new URLSearchParams({ i: infoboxTitle }).toString();
        results.push({ infobox: infoboxTitle, attributes: resultChunks, urls: [{ title: "Wolfram|Alpha", url: refUrl }] });
        results.push({ url: refUrl, title: "Wolfram|Alpha (" + infoboxTitle + ")", content: resultContent });
        return results;
      },
    };

    EG_final.youtubeApi = {
      name: "youtube_api",
      categories: ["videos", "music"],
      shortcut: null,
      paging: !1,
      useRenderer: !0,
      api_key: null,
      base_url: "https://www.googleapis.com/youtube/v3/search",
      base_youtube_url: "https://www.youtube.com/watch?v=",
      async request(query, params, sq) {
        let qp = new URLSearchParams({ q: query, part: "snippet", maxResults: "20" });
        if (this.api_key) qp.set("key", this.api_key);
        if (params.language && params.language !== "all") qp.set("relevanceLanguage", params.language.split("-")[0]);
        params.url = this.base_url + "?" + qp.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (!resp.json) return results;
        if (resp.json.error && resp.json.error.message) throw new Error(resp.json.error.message);
        if (!resp.json.items) return results;
        for (let result of resp.json.items) {
          if (!result.id || !result.id.videoId) continue;
          let videoid = result.id.videoId;
          let snippet = result.snippet || {};
          let pd = null;
          if (snippet.publishedAt) { try { pd = new Date(snippet.publishedAt); } catch (e) {} }
          results.push({
            url: this.base_youtube_url + videoid,
            title: snippet.title || "",
            content: snippet.description || "",
            template: "videos.html",
            publishedDate: pd,
            iframe_src: "https://www.youtube-nocookie.com/embed/" + videoid,
            thumbnail: snippet.thumbnails && snippet.thumbnails.high && snippet.thumbnails.high.url || "",
          });
        }
        return results;
      },
    };

    EG_final.youtubeNoapi = {
      name: "youtube_noapi",
      categories: ["videos", "music"],
      shortcut: null,
      paging: !0,
      useRenderer: !0,
      language_support: !1,
      time_range_support: !0,
      base_url: "https://www.youtube.com/results",
      next_page_url: "https://www.youtube.com/youtubei/v1/search?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
      time_range_dict: { day: "Ag", week: "Aw", month: "BA", year: "BQ" },
      base_youtube_url: "https://www.youtube.com/watch?v=",
      async request(query, params, sq) {
        params.cookies = params.cookies || {};
        params.cookies["CONSENT"] = "YES+";
        if (!sq.engine_data || !sq.engine_data.next_page_token) {
          params.url = this.base_url + "?search_query=" + encodeURIComponent(query) + "&page=" + (sq.pageno || 1);
          if (params.time_range && this.time_range_dict[params.time_range]) params.url += "&sp=EgII" + this.time_range_dict[params.time_range] + "%253D%253D";
        } else {
          params.url = this.next_page_url;
          params.method = "POST";
          params.headers["Content-Type"] = "application/json";
          params.data = JSON.stringify({
            context: { client: { clientName: "WEB", clientVersion: "2.20210310.12.01" } },
            continuation: sq.engine_data.next_page_token,
          });
        }
        return params;
      },
      async response(resp, sq) {
        if (sq.engine_data && sq.engine_data.next_page_token) return this.parseNextPageResponse(resp);
        return this.parseFirstPageResponse(resp);
      },
      parseNextPageResponse(resp) {
        let results = [];
        if (!resp.json) return results;
        try {
          let cmds = resp.json.onResponseReceivedCommands;
          if (!cmds || !cmds[0]) return results;
          let items = cmds[0].appendContinuationItemsAction && cmds[0].appendContinuationItemsAction.continuationItems;
          if (!items || !items[0]) return results;
          let section = items[0].itemSectionRenderer;
          if (!section || !section.contents) return results;
          for (let sc of section.contents) {
            if (!sc.videoRenderer) continue;
            let vr = sc.videoRenderer;
            let content = "-";
            if (vr.descriptionSnippet && vr.descriptionSnippet.runs) content = vr.descriptionSnippet.runs.map(function(x) { return x.text; }).join(" ");
            results.push({
              url: this.base_youtube_url + vr.videoId,
              title: vr.title && vr.title.runs ? vr.title.runs.map(function(x) { return x.text; }).join(" ") : "",
              content: content,
              author: vr.ownerText && vr.ownerText.runs ? vr.ownerText.runs[0].text : "",
              length: vr.lengthText ? vr.lengthText.simpleText : "",
              template: "videos.html",
              iframe_src: "https://www.youtube-nocookie.com/embed/" + vr.videoId,
              thumbnail: vr.thumbnail && vr.thumbnail.thumbnails ? vr.thumbnail.thumbnails[vr.thumbnail.thumbnails.length - 1].url : "",
            });
          }
          if (items[1] && items[1].continuationItemRenderer && items[1].continuationItemRenderer.continuationEndpoint && items[1].continuationItemRenderer.continuationEndpoint.continuationCommand) {
            let token = items[1].continuationItemRenderer.continuationEndpoint.continuationCommand.token;
            if (token) results.push({ engine_data: token, key: "next_page_token" });
          }
        } catch (e) {}
        return results;
      },
      parseFirstPageResponse(resp) {
        let results = [], h = resp.text || "";
        let ytData = eb(h, "ytInitialData = ", ";</script>");
        if (!ytData) return results;
        try {
          let jsonData = JSON.parse(ytData);
          let sections = jsonData.contents && jsonData.contents.twoColumnSearchResultsRenderer && jsonData.contents.twoColumnSearchResultsRenderer.primaryContents && jsonData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer && jsonData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents || [];
          for (let section of sections) {
            if (section.continuationItemRenderer) {
              let token = section.continuationItemRenderer.continuationEndpoint && section.continuationItemRenderer.continuationEndpoint.continuationCommand && section.continuationItemRenderer.continuationEndpoint.continuationCommand.token;
              if (token) results.push({ engine_data: token, key: "next_page_token" });
            }
            let contents = section.itemSectionRenderer && section.itemSectionRenderer.contents || [];
            for (let vc of contents) {
              let video = vc.videoRenderer || {};
              let videoid = video.videoId;
              if (!videoid) continue;
              let getText = function(el) {
                if (el && el.runs) return el.runs.map(function(x) { return x.text; }).join("");
                if (el && el.simpleText) return el.simpleText;
                return "";
              };
              results.push({
                url: this.base_youtube_url + videoid,
                title: getText(video.title),
                content: getText(video.descriptionSnippet),
                author: getText(video.ownerText),
                length: getText(video.lengthText),
                template: "videos.html",
                iframe_src: "https://www.youtube-nocookie.com/embed/" + videoid,
                thumbnail: "https://i.ytimg.com/vi/" + videoid + "/hqdefault.jpg",
              });
            }
          }
        } catch (e) {}
        return results;
      },
    };
  });
