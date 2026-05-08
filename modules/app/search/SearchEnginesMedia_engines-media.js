var EG_media = {},
  eG_media = j(() => {
    "use strict";

    function eb(text, start, end) {
      let i = text.indexOf(start);
      if (i === -1) return null;
      i += start.length;
      let j = text.indexOf(end, i);
      return j === -1 ? null : text.slice(i, j);
    }

    const TR = { day: "d", week: "w", month: "m", year: "y" };
    const BTR = { day: 1440, week: 10080, month: 44640, year: 525600 };
    const YTR = { day: "Ag", week: "Aw", month: "BA", year: "BQ" };
    const GSF = { 0: "images", 1: "active", 2: "active" };
    const YT_KEY = "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8";

    // ========== 1. Google Images ==========
    EG_media.googleImages = {
      name: "googleImages",
      categories: ["images", "web"],
      shortcut: null,
      paging: true,
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let url =
          "https://www.google.com/search?q=" +
          encodeURIComponent(query) +
          "&tbm=isch&hl=en&asearch=isch&async=_fmt:json,p:1,ijn:" +
          (pn - 1);
        if (sq.timeRange && TR[sq.timeRange])
          url += "&tbs=qdr:" + TR[sq.timeRange];
        if (sq.safesearch) url += "&safe=" + GSF[sq.safesearch];
        params.url = url;
        params.headers["User-Agent"] =
          "Mozilla/5.0 (Linux; Android 12) AppleWebKit/537.36";
        return params;
      },
      async response(resp, sq) {
        let r = [];
        let s = resp.text.indexOf('{"ischj":');
        if (s === -1) return r;
        try {
          let d = JSON.parse(resp.text.slice(s));
          for (let item of d.ischj?.metadata || []) {
            let res = item.result || {};
            let oi = item.original_image || {};
            let th = item.thumbnail || {};
            r.push({
              url: res.referrer_url,
              title: res.page_title,
              content: item.text_in_grid?.snippet,
              imgSrc: oi.url,
              thumbnail: th.url,
              resolution:
                (oi.width || "") + " x " + (oi.height || ""),
              source: res.site_title,
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 2. Bing Images ==========
    EG_media.bingImages = {
      name: "bingImages",
      categories: ["images", "web"],
      shortcut: null,
      paging: true,
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let first = (pn - 1) * 35 + 1;
        let url =
          "https://www.bing.com/images/async?q=" +
          encodeURIComponent(query) +
          "&async=1&first=" +
          first +
          "&count=35";
        if (sq.timeRange && BTR[sq.timeRange])
          url += "&qft=filterui:age-lt" + BTR[sq.timeRange];
        params.url = url;
        return params;
      },
      async response(resp, sq) {
        let r = [];
        let ul = resp.text.match(
          /<ul[^>]*class="[^"]*dgControl_list[^"]*"[^>]*>([\s\S]*?)<\/ul>/i
        );
        if (!ul) return r;
        let liRe = /<li\b[^>]*>([\s\S]*?)<\/li>/g;
        let lm;
        while ((lm = liRe.exec(ul[1])) !== null) {
          let li = lm[1];
          let iusc = li.match(
            /<a[^>]+class="iusc"[^>]+m="([^"]*)"/
          );
          if (!iusc) continue;
          try {
            let m = JSON.parse(iusc[1].replace(/&quot;/g, '"'));
            let t = li.match(
              /<div class="infnmpt">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/
            );
            let title = t ? t[1].trim() : "";
            let s = li.match(
              /<div class="lnkw">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/
            );
            let source = s ? s[1].trim() : "";
            let fmt = li.match(
              /<div class="imgpt">[\s\S]*?<span>([\s\S]*?)<\/span>/
            );
            let parts = fmt ? fmt[1].trim().split(" · ") : [];
            r.push({
              url: m.purl,
              thumbnail: m.turl,
              imgSrc: m.murl,
              content: m.desc || "",
              title: title,
              source: source,
              resolution: parts[0] || "",
              imgFormat: parts[1] || null,
            });
          } catch (e) {}
        }
        return r;
      },
    };

    // ========== 3. Bing Videos ==========
    EG_media.bingVideos = {
      name: "bingVideos",
      categories: ["videos", "web"],
      shortcut: null,
      paging: true,
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let first = (pn - 1) * 35 + 1;
        let url =
          "https://www.bing.com/videos/asyncv2?q=" +
          encodeURIComponent(query) +
          "&async=content&first=" +
          first +
          "&count=35";
        if (sq.timeRange && BTR[sq.timeRange]) {
          url +=
            "&form=VRFLTR&qft=%20filterui:videoage-lt" +
            BTR[sq.timeRange];
        }
        params.url = url;
        return params;
      },
      async response(resp, sq) {
        let r = [];
        let dvRe =
          /<div[^>]+id="[^"]*mc_vtvc_video[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
        let dm;
        while ((dm = dvRe.exec(resp.text)) !== null) {
          let dv = dm[0];
          let vrh = dv.match(
            /<div[^>]+class="vrhdata"[^>]+vrhm="([^"]*)"/
          );
          if (!vrh) continue;
          try {
            let m = JSON.parse(vrh[1].replace(/&quot;/g, '"'));
            let th = dv.match(
              /<img[^>]+class="[^"]*rms[^"]*"[^>]+data-src-hq="([^"]*)"/
            );
            let info = dv.match(
              /<div class="mc_vtvc_meta_block">[\s\S]*?<span>([\s\S]*?)<\/span>/
            );
            r.push({
              url: m.murl,
              thumbnail: th ? th[1] : null,
              title: m.vt || "",
              content: info ? info[1].trim() : "",
              length: m.du || "",
            });
          } catch (e) {}
        }
        return r;
      },
    };

    // ========== 4. YouTube (no API) ==========
    EG_media.youtubeNoapi = {
      name: "youtubeNoapi",
      categories: ["videos", "music"],
      shortcut: null,
      paging: true,
      _nextPageToken: null,
      async request(query, params, sq) {
        params.cookies = params.cookies || {};
        params.cookies.CONSENT = "YES+";
        if (sq.pageno > 1 && this._nextPageToken) {
          let token = this._nextPageToken;
          this._nextPageToken = null;
          params.url =
            "https://www.youtube.com/youtubei/v1/search?key=" +
            YT_KEY;
          params.method = "POST";
          params.data = JSON.stringify({
            context: {
              client: {
                clientName: "WEB",
                clientVersion: "2.20210310.12.01",
              },
            },
            continuation: token,
          });
          params.headers["Content-Type"] = "application/json";
        } else {
          this._nextPageToken = null;
          let url =
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(query) +
            "&page=" +
            (sq.pageno || 1);
          if (sq.timeRange && YTR[sq.timeRange])
            url +=
              "&sp=EgII" + YTR[sq.timeRange] + "%253D%253D";
          params.url = url;
        }
        return params;
      },
      async response(resp, sq) {
        if (resp.text.trim().startsWith("{")) {
          return this._parseContinuation(resp.text);
        }
        return this._parseFirstPage(resp.text);
      },
      _gt(el) {
        if (!el) return "";
        if (el.runs) return el.runs.map((x) => x.text).join("");
        return el.simpleText || "";
      },
      _parseFirstPage(html) {
        let r = [];
        let data = eb(html, "ytInitialData = ", ";</script>");
        if (!data) return r;
        try {
          let j = JSON.parse(data);
          let sections =
            j?.contents?.twoColumnSearchResultsRenderer
              ?.primaryContents?.sectionListRenderer
              ?.contents || [];
          for (let sec of sections) {
            if (sec.continuationItemRenderer) {
              let tok =
                sec.continuationItemRenderer
                  ?.continuationEndpoint?.continuationCommand
                  ?.token;
              if (tok) this._nextPageToken = tok;
            }
            let items =
              sec?.itemSectionRenderer?.contents || [];
            for (let vc of items) {
              let v = vc.videoRenderer;
              if (!v || !v.videoId) continue;
              r.push({
                url:
                  "https://www.youtube.com/watch?v=" +
                  v.videoId,
                title: this._gt(v.title),
                content: this._gt(v.descriptionSnippet),
                author: this._gt(v.ownerText),
                length: this._gt(v.lengthText),
                thumbnail:
                  "https://i.ytimg.com/vi/" +
                  v.videoId +
                  "/hqdefault.jpg",
                iframeSrc:
                  "https://www.youtube-nocookie.com/embed/" +
                  v.videoId,
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
            j?.onResponseReceivedCommands?.[0]
              ?.appendContinuationItemsAction
              ?.continuationItems?.[0]
              ?.itemSectionRenderer?.contents || [];
          for (let sec of items) {
            if (!sec.videoRenderer) continue;
            let v = sec.videoRenderer;
            let thumbs = v.thumbnail?.thumbnails || [];
            r.push({
              url:
                "https://www.youtube.com/watch?v=" +
                v.videoId,
              title:
                v.title?.runs
                  ?.map((x) => x.text)
                  .join("") || "",
              content:
                v.descriptionSnippet?.runs
                  ?.map((x) => x.text)
                  .join(" ") || "",
              author:
                v.ownerText?.runs?.[0]?.text || "",
              length: v.lengthText?.simpleText || "",
              thumbnail:
                thumbs.length > 0
                  ? thumbs[thumbs.length - 1].url
                  : "",
              iframeSrc:
                "https://www.youtube-nocookie.com/embed/" +
                v.videoId,
            });
          }
          let tok =
            j?.onResponseReceivedCommands?.[0]
              ?.appendContinuationItemsAction
              ?.continuationItems?.[1]
              ?.continuationItemRenderer
              ?.continuationEndpoint?.continuationCommand
              ?.token;
          if (tok) this._nextPageToken = tok;
        } catch (e) {}
        return r;
      },
    };

    // ========== 5. Vimeo ==========
    EG_media.vimeo = {
      name: "vimeo",
      categories: ["videos"],
      shortcut: null,
      paging: true,
      async request(query, params, sq) {
        params.url =
          "https://vimeo.com/search/page:" +
          (sq.pageno || 1) +
          "?q=" +
          encodeURIComponent(query);
        return params;
      },
      async response(resp, sq) {
        let r = [];
        let data = eb(resp.text, "var data = ", ";\n");
        if (!data) return r;
        try {
          let j = JSON.parse(data);
          let items = j?.filtered?.data || [];
          for (let result of items) {
            let type = result.type;
            let video = result[type];
            if (!video) continue;
            let videoid = video.uri?.split("/").pop();
            if (!videoid) continue;
            let pics = video.pictures?.sizes || [];
            r.push({
              url: "https://vimeo.com/" + videoid,
              title: video.name || "",
              content: "",
              thumbnail:
                pics.length > 0
                  ? pics[pics.length - 1].link
                  : null,
              publishedDate: video.created_time,
              iframeSrc:
                "https://player.vimeo.com/video/" +
                videoid,
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 6. Flickr ==========
    EG_media.flickr = {
      name: "flickr",
      categories: ["images"],
      shortcut: null,
      paging: true,
      apiKey: null,
      async request(query, params, sq) {
        let key = this.apiKey;
        if (!key) return params;
        params.url =
          "https://api.flickr.com/services/rest/?method=flickr.photos.search" +
          "&api_key=" +
          key +
          "&text=" +
          encodeURIComponent(query) +
          "&sort=relevance" +
          "&extras=description%2C+owner_name%2C+url_o%2C+url_n%2C+url_z" +
          "&per_page=15&format=json&nojsoncallback=1&page=" +
          (sq.pageno || 1);
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          let photos = j?.photos?.photo || [];
          for (let photo of photos) {
            let imgSrc =
              photo.url_o || photo.url_z || null;
            if (!imgSrc) continue;
            let thumbSrc =
              photo.url_n ||
              photo.url_z ||
              imgSrc;
            r.push({
              url:
                "https://www.flickr.com/photos/" +
                photo.owner +
                "/" +
                photo.id,
              title: photo.title || "",
              imgSrc: imgSrc,
              thumbnail: thumbSrc,
              content:
                photo.description?._content || "",
              author: photo.ownername || "",
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 7. Unsplash ==========
    EG_media.unsplash = {
      name: "unsplash",
      categories: ["images"],
      shortcut: null,
      paging: true,
      async request(query, params, sq) {
        params.url =
          "https://unsplash.com/napi/search/photos?query=" +
          encodeURIComponent(query) +
          "&page=" +
          (sq.pageno || 1) +
          "&per_page=20";
        params.headers["User-Agent"] =
          "searxng-js/1.0";
        return params;
      },
      _clean(url) {
        try {
          let u = new URL(url);
          u.searchParams.delete("ixid");
          return u.toString();
        } catch (e) {
          return url;
        }
      },
      async response(resp, sq) {
        let r = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          let results = j?.results || [];
          for (let result of results) {
            r.push({
              url: this._clean(
                result.links?.html
              ),
              thumbnail: this._clean(
                result.urls?.thumb
              ),
              imgSrc: this._clean(
                result.urls?.regular
              ),
              title:
                result.alt_description ||
                "unknown",
              content:
                result.description || "",
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 8. DeviantArt ==========
    EG_media.deviantart = {
      name: "deviantart",
      categories: ["images"],
      shortcut: null,
      paging: true,
      _nextPageUrl: null,
      async request(query, params, sq) {
        if (
          sq.pageno > 1 &&
          this._nextPageUrl
        ) {
          params.url = this._nextPageUrl;
          this._nextPageUrl = null;
        } else {
          this._nextPageUrl = null;
          params.url =
            "https://www.deviantart.com/search?q=" +
            encodeURIComponent(query);
        }
        return params;
      },
      async response(resp, sq) {
        let r = [];
        let html = resp.text;
        let itemRe =
          /<div class="V_S0t_">\s*<div>\s*<div>\s*<a\s+href="([^"]*)"[^>]*aria-label="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g;
        let im;
        while (
          (im = itemRe.exec(html)) !== null
        ) {
          let url = im[1];
          let title = im[2];
          let inner = im[3];
          if (
            /Watch the artist to view this deviation/.test(
              inner
            )
          )
            continue;
          let thumbMatch = inner.match(
            /<img\s+src="([^"]*)"/
          );
          let srcsetMatch = inner.match(
            /<img[^>]+srcset="([^"]*)"/
          );
          let thumbnail = thumbMatch
            ? thumbMatch[1]
            : null;
          let imgSrc = null;
          if (srcsetMatch) {
            imgSrc =
              srcsetMatch[1].split(" ")[0];
            try {
              let u = new URL(imgSrc);
              let p = u.pathname.split("/v1")[0];
              u.pathname = p;
              imgSrc = u.toString();
            } catch (e) {}
          }
          r.push({
            url: url,
            title: title,
            imgSrc: imgSrc,
            thumbnail: thumbnail,
          });
        }
        let cursorRe =
          /<a\s+class="vQ2brP"[^>]*href="([^"]*)"/;
        let cm = html.match(cursorRe);
        if (cm) {
          let nextUrl = cm[1].replace(
            /^http:\/\//,
            "https://"
          );
          this._nextPageUrl = nextUrl;
        }
        return r;
      },
    };
  });
