var EG_social = {},
  eG_social = j(() => {
    "use strict";

    function eb(s, start, end) {
      let i = s.indexOf(start);
      if (i === -1) return null;
      i += start.length;
      let j = s.indexOf(end, i);
      return j === -1 ? null : s.slice(i, j);
    }

    function st(s) {
      return s
        ? s
            .replace(/<[^>]*>/g, "")
            .replace(/&[^;]+;/g, " ")
            .replace(/\s+/g, " ")
            .trim()
        : "";
    }

    function hn(n) {
      n = Number(n);
      if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
      if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
      return String(n);
    }

    function fmtDur(sec) {
      sec = Math.floor(Number(sec));
      let h = Math.floor(sec / 3600);
      let m = Math.floor((sec % 3600) / 60);
      let s = sec % 60;
      if (h > 0)
        return (
          String(h).padStart(2, "0") +
          ":" +
          String(m).padStart(2, "0") +
          ":" +
          String(s).padStart(2, "0")
        );
      return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    }

    // ========== 1. 9Gag ==========
    EG_social.nineGag = {
      name: "nineGag",
      categories: ["social media"],
      shortcut: null,
      paging: true,
      pageSize: 10,
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let qs = new URLSearchParams({
          query: query,
          c: (pn - 1) * this.pageSize,
        }).toString();
        params.url = "https://9gag.com/v1/search-posts?" + qs;
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let d = resp.json;
          let posts = d?.data?.posts || [];
          for (let result of posts) {
            let type = result.type;
            let thumb;
            if ((result.images?.image700?.height || 0) > 400)
              thumb = result.images?.imageFbThumbnail?.url;
            else thumb = result.images?.image700?.url;
            if (type === "Photo") {
              r.push({
                url: result.url,
                title: result.title,
                content: result.description,
                publishedDate: new Date(result.creationTs * 1000).toISOString(),
                imgSrc: result.images?.image700?.url,
                thumbnailSrc: thumb,
              });
            } else if (type === "Animated") {
              r.push({
                url: result.url,
                title: result.title,
                content: result.description,
                publishedDate: new Date(result.creationTs * 1000).toISOString(),
                thumbnail: thumb,
                iframeSrc: result.images?.image460sv?.url,
              });
            }
          }
          if (d?.data?.tags) {
            for (let tag of d.data.tags) {
              r.push({ suggestion: tag.key });
            }
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 2. Bandcamp ==========
    EG_social.bandcamp = {
      name: "bandcamp",
      categories: ["music"],
      shortcut: null,
      paging: true,
      async request(query, params, sq) {
        params.url =
          "https://bandcamp.com/search?q=" +
          encodeURIComponent(query) +
          "&page=" +
          (sq.pageno || 1);
        return params;
      },
      async response(resp, sq) {
        let r = [];
        let html = resp.text;
        let liRe =
          /<li[^>]*class="[^"]*searchresult[^"]*"[^>]*>([\s\S]*?)<\/li>/g;
        let lm;
        while ((lm = liRe.exec(html)) !== null) {
          let li = lm[0];
          let linkM = li.match(
            /<div class="itemurl">\s*<a[^>]*>([\s\S]*?)<\/a>/
          );
          if (!linkM) continue;
          let titleM = li.match(
            /<div class="heading">\s*<a[^>]*>([\s\S]*?)<\/a>/
          );
          let contentM = li.match(
            /<div class="subhead">([\s\S]*?)<\/div>/
          );
          let url = st(linkM[1]);
          let result = {
            url: url,
            title: st(titleM ? titleM[1] : ""),
            content: st(contentM ? contentM[1] : ""),
          };
          let dateM = li.match(
            /<div class="released">([\s\S]*?)<\/div>/
          );
          if (dateM) {
            let d = st(dateM[1]).replace(/^released\s+/i, "");
            result.publishedDate = new Date(d).toISOString();
          }
          let thumbM = li.match(
            /<div class="art">\s*<img[^>]*src="([^"]*)"/
          );
          if (thumbM) result.thumbnail = thumbM[1];
          let itemtypeM = li.match(
            /<div class="itemtype">([\s\S]*?)<\/div>/
          );
          if (itemtypeM && url) {
            let it = st(itemtypeM[1]).toLowerCase();
            let u = new URL(url);
            let resultId = u.searchParams.get("search_item_id");
            if (resultId) {
              if (it === "album")
                result.iframeSrc =
                  "https://bandcamp.com/EmbeddedPlayer/album=" +
                  resultId +
                  "/size=large/bgcol=000/linkcol=fff/artwork=small";
              else if (it === "track")
                result.iframeSrc =
                  "https://bandcamp.com/EmbeddedPlayer/track=" +
                  resultId +
                  "/size=large/bgcol=000/linkcol=fff/artwork=small";
            }
          }
          r.push(result);
        }
        return r;
      },
    };

    // ========== 3. BitChute ==========
    EG_social.bitchute = {
      name: "bitchute",
      categories: ["videos"],
      shortcut: null,
      paging: true,
      resultsPerPage: 20,
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let offset = (pn - 1) * this.resultsPerPage;
        params.url = "https://api.bitchute.com/api/beta/search/videos";
        params.method = "POST";
        params.headers["content-type"] = "application/json";
        params.data = JSON.stringify({
          offset: offset,
          limit: this.resultsPerPage,
          query: query,
          sensitivity_id: "normal",
          sort: "new",
        });
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let data = resp.json;
          for (let item of data?.videos || []) {
            r.push({
              title: item.video_name,
              url: "https://www.bitchute.com/video/" + item.video_id,
              content: st(item.description),
              author: item.channel?.channel_name,
              publishedDate: new Date(
                item.date_published
              ).toISOString(),
              length: item.duration,
              views: item.view_count,
              thumbnail: item.thumbnail_url,
              iframeSrc:
                "https://www.bitchute.com/embed/" + item.video_id,
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 4. Mastodon ==========
    EG_social.mastodon = {
      name: "mastodon",
      categories: ["social media"],
      shortcut: null,
      paging: false,
      baseUrl: "https://mastodon.social",
      mastodonType: "accounts",
      pageSize: 40,
      async request(query, params, sq) {
        let qs = new URLSearchParams({
          q: query,
          resolve: "false",
          type: this.mastodonType,
          limit: this.pageSize,
        }).toString();
        params.url = this.baseUrl + "/api/v2/search?" + qs;
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let data = resp.json;
          for (let result of data?.[this.mastodonType] || []) {
            if (this.mastodonType === "accounts") {
              r.push({
                url: result.uri,
                title:
                  result.username +
                  " (" +
                  (result.followers_count || 0) +
                  " followers)",
                content: st(result.note),
                thumbnail: result.avatar,
                publishedDate: result.created_at
                  ? new Date(
                      result.created_at.slice(0, 10)
                    ).toISOString()
                  : null,
              });
            } else if (this.mastodonType === "hashtags") {
              let uses = 0,
                users = 0;
              for (let entry of result.history || []) {
                uses += parseInt(entry.uses, 10) || 0;
                users += parseInt(entry.accounts, 10) || 0;
              }
              r.push({
                url: result.url,
                title: result.name,
                content:
                  "Hashtag has been used " +
                  uses +
                  " times by " +
                  users +
                  " different users",
              });
            }
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 5. Mixcloud ==========
    EG_social.mixcloud = {
      name: "mixcloud",
      categories: ["music"],
      shortcut: null,
      paging: true,
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let offset = (pn - 1) * 10;
        let qs = new URLSearchParams({ q: query }).toString();
        params.url =
          "https://api.mixcloud.com/search/?" +
          qs +
          "&type=cloudcast&limit=10&offset=" +
          offset;
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let data = resp.json;
          for (let result of data?.data || []) {
            let url = result.url;
            r.push({
              url: url,
              title: result.name,
              iframeSrc:
                "https://www.mixcloud.com/widget/iframe/?feed=" + url,
              thumbnail: result.pictures?.medium,
              publishedDate: new Date(
                result.created_time
              ).toISOString(),
              content: result.user?.name,
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 6. Niconico ==========
    EG_social.niconico = {
      name: "niconico",
      categories: ["videos"],
      shortcut: null,
      paging: true,
      timeRangeSupport: true,
      timeRangeDict: { day: 1, week: 7, month: 30, year: 365 },
      async request(query, params, sq) {
        let qp = new URLSearchParams();
        qp.set("page", sq.pageno || 1);
        if (
          sq.timeRange &&
          this.timeRangeDict[sq.timeRange]
        ) {
          let d = new Date();
          d.setDate(
            d.getDate() - this.timeRangeDict[sq.timeRange]
          );
          qp.set(
            "start",
            d.toISOString().slice(0, 10)
          );
        }
        params.url =
          "https://www.nicovideo.jp/search/" +
          encodeURIComponent(query) +
          "?" +
          qp.toString();
        return params;
      },
      async response(resp, sq) {
        let r = [];
        let html = resp.text;
        let itemRe =
          /<li[^>]*data-video-item[^>]*>([\s\S]*?)<\/li>/g;
        let im;
        while ((im = itemRe.exec(html)) !== null) {
          let li = im[0];
          let hrefM = li.match(
            /<a[^>]*class="itemThumbWrap"[^>]*href="([^"]*)"/
          );
          if (!hrefM) continue;
          let videoId = hrefM[1]
            .split("?")[0]
            .split("/")
            .filter(Boolean)
            .pop();
          if (!videoId) continue;
          let url =
            "https://www.nicovideo.jp/watch/" + videoId;
          let iframeSrc =
            "https://embed.nicovideo.jp/watch/" + videoId;
          let lengthM = li.match(
            /<span[^>]*class="videoLength"[^>]*>([\s\S]*?)<\/span>/
          );
          let length = null;
          if (lengthM) {
            let parts = lengthM[1].trim().split(":");
            if (parts.length >= 2) {
              let mins = parseInt(parts[0], 10) || 0;
              let secs = parseInt(parts[1], 10) || 0;
              length =
                String(mins).padStart(2, "0") +
                ":" +
                String(secs).padStart(2, "0");
            }
          }
          let timeM = li.match(
            /<p[^>]*class="itemTime"[^>]*>[\s\S]*?<span[^>]*class="time"[^>]*>([\s\S]*?)<\/span>/
          );
          let publishedDate = null;
          if (timeM) {
            let t = timeM[1].trim();
            let parsed = new Date(t.replace(
              /(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2})/,
              "$1-$2-$3T$4:$5:00"
            ));
            if (!isNaN(parsed))
              publishedDate = parsed.toISOString();
          }
          let titleM = li.match(
            /<p[^>]*class="itemTitle"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/
          );
          let contentM = li.match(
            /<p[^>]*class="itemDescription"[^>]*title="([^"]*)"/
          );
          let thumbM = li.match(
            /<img[^>]*class="thumb"[^>]*src="([^"]*)"/
          );
          r.push({
            title: st(titleM ? titleM[1] : ""),
            content: contentM ? contentM[1] : "",
            url: url,
            iframeSrc: iframeSrc,
            thumbnail: thumbM ? thumbM[1] : null,
            length: length,
            publishedDate: publishedDate,
          });
        }
        return r;
      },
    };

    // ========== 7. Odysee ==========
    EG_social.odysee = {
      name: "odysee",
      categories: ["videos"],
      shortcut: null,
      paging: true,
      timeRangeSupport: true,
      resultsPerPage: 20,
      timeRangeDict: {
        day: "today",
        week: "thisweek",
        month: "thismonth",
        year: "thisyear",
      },
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let startIndex = (pn - 1) * this.resultsPerPage;
        let qp = new URLSearchParams({
          s: query,
          size: this.resultsPerPage,
          from: startIndex,
          include:
            "channel,thumbnail_url,title,description,duration,release_time",
          mediaType: "video",
        });
        if (
          sq.timeRange &&
          this.timeRangeDict[sq.timeRange]
        )
          qp.set(
            "time_filter",
            this.timeRangeDict[sq.timeRange]
          );
        params.url =
          "https://lighthouse.odysee.tv/search?" +
          qp.toString();
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let data = resp.json;
          for (let item of data || []) {
            let name = item.name;
            let claimId = item.claimId;
            let url =
              "https://odysee.com/" +
              name +
              ":" +
              claimId;
            let releaseDate = item.release_time
              ? new Date(
                  item.release_time.split("T")[0]
                ).toISOString()
              : null;
            r.push({
              title: item.title,
              url: url,
              content: item.description || "",
              author: item.channel,
              publishedDate: releaseDate,
              length: fmtDur(item.duration),
              thumbnail:
                "https://thumbnails.odycdn.com/optimize/s:390:0/quality:85/plain/" +
                (item.thumbnail_url || ""),
              iframeSrc:
                "https://odysee.com/$/embed/" +
                name +
                ":" +
                claimId,
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 8. PeerTube ==========
    EG_social.peertube = {
      name: "peertube",
      categories: ["videos"],
      shortcut: null,
      paging: true,
      baseUrl: "https://peer.tube",
      timeRangeSupport: true,
      safesearchTable: { 0: "both", 1: "false", 2: "false" },
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let qp = new URLSearchParams({
          search: query,
          searchTarget: "search-index",
          resultType: "videos",
          start: (pn - 1) * 10,
          count: 10,
          sort: "-match",
          nsfw: this.safesearchTable[sq.safesearch] || "both",
        });
        if (sq.timeRange) {
          let d = new Date();
          switch (sq.timeRange) {
            case "week":
              d.setDate(d.getDate() - 7);
              break;
            case "month":
              d.setMonth(d.getMonth() - 1);
              break;
            case "year":
              d.setFullYear(d.getFullYear() - 1);
              break;
          }
          qp.set("startDate", d.toISOString().slice(0, 10));
        }
        params.url =
          this.baseUrl.replace(/\/+$/, "") +
          "/api/v1/search/videos?" +
          qp.toString();
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let data = resp.json;
          for (let result of data?.data || []) {
            let meta = [
              result.channel?.displayName,
              result.channel?.name +
                "@" +
                result.channel?.host,
              (result.tags || []).join(", "),
            ]
              .filter(Boolean)
              .join(" | ");
            r.push({
              url: result.url,
              title: result.name,
              content: st(result.description || ""),
              author:
                result.account?.displayName ||
                result.channel?.displayName,
              length: result.duration
                ? fmtDur(result.duration)
                : null,
              views: hn(result.views),
              publishedDate: result.publishedAt
                ? new Date(
                    result.publishedAt
                  ).toISOString()
                : null,
              iframeSrc: result.embedUrl,
              thumbnail:
                result.thumbnailUrl ||
                result.previewUrl ||
                null,
              metadata: meta,
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 9. Reddit ==========
    EG_social.reddit = {
      name: "reddit",
      categories: ["social media"],
      shortcut: null,
      paging: false,
      pageSize: 25,
      async request(query, params, sq) {
        params.url =
          "https://www.reddit.com/search.json?q=" +
          encodeURIComponent(query) +
          "&limit=" +
          this.pageSize;
        return params;
      },
      async response(resp, sq) {
        let imgResults = [],
          textResults = [];
        try {
          let data = resp.json;
          if (!data?.data) return [];
          for (let post of data.data.children || []) {
            let d = post.data || {};
            let params = {
              url:
                "https://www.reddit.com" + d.permalink,
              title: d.title,
            };
            let thumb = d.thumbnail;
            if (
              thumb &&
              /^https?:\/\//.test(thumb)
            ) {
              params.imgSrc = d.url;
              params.thumbnailSrc = thumb;
              imgResults.push(params);
            } else {
              let content = d.selftext || "";
              if (content.length > 500)
                content = content.slice(0, 500) + "...";
              params.content = content;
              params.publishedDate = d.created_utc
                ? new Date(
                    d.created_utc * 1000
                  ).toISOString()
                : null;
              textResults.push(params);
            }
          }
        } catch (e) {}
        return imgResults.concat(textResults);
      },
    };

    // ========== 10. SoundCloud ==========
    EG_social.soundcloud = {
      name: "soundcloud",
      categories: ["music"],
      shortcut: null,
      paging: true,
      _clientId: null,
      resultsPerPage: 10,
      soundcloudFacet: "model",
      appLocaleMap: {
        de: "de",
        en: "en",
        es: "es",
        fr: "fr",
        oc: "fr",
        it: "it",
        nl: "nl",
        pl: "pl",
        szl: "pl",
        pt: "pt_BR",
        pap: "pt_BR",
        sv: "sv",
      },
      async _getClientId() {
        try {
          let resp = await fetch(
            "https://soundcloud.com",
            { signal: AbortSignal.timeout(8000) }
          );
          let text = await resp.text();
          let assetRe =
            /<script[^>]*src="([^"]*\/assets\/[^"]*)"[^>]*>/g;
          let m,
            urls = [];
          while ((m = assetRe.exec(text)) !== null)
            urls.push(m[1].startsWith("http")
              ? m[1]
              : "https://soundcloud.com" + m[1]);
          for (let i = urls.length - 1; i >= 0; i--) {
            let jsResp = await fetch(urls[i], {
              signal: AbortSignal.timeout(8000),
            });
            let jsText = await jsResp.text();
            let cid = jsText.match(
              /client_id:"([^"]*)"/
            );
            if (cid) return cid[1];
          }
        } catch (e) {}
        return null;
      },
      async request(query, params, sq) {
        if (!this._clientId)
          this._clientId = await this._getClientId();
        if (!this._clientId) return params;
        let pn = sq.pageno || 1;
        let lang = (sq.language || "en").split("-")[0];
        let qp = new URLSearchParams({
          q: query,
          offset: (pn - 1) * this.resultsPerPage,
          limit: this.resultsPerPage,
          facet: this.soundcloudFacet,
          client_id: this._clientId,
          app_locale:
            this.appLocaleMap[lang] || "en",
        });
        params.url =
          "https://api-v2.soundcloud.com/search?" +
          qp.toString();
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let data = resp.json;
          for (let result of data?.collection || []) {
            if (
              result.kind !== "track" &&
              result.kind !== "playlist"
            )
              continue;
            let url = result.permalink_url;
            if (!url) continue;
            let content = [
              result.description,
              result.label_name,
            ]
              .filter(Boolean)
              .join(" / ");
            let res = {
              url: url,
              title: result.title,
              content: content,
              publishedDate: result.last_modified
                ? new Date(
                    result.last_modified
                  ).toISOString()
                : null,
              iframeSrc:
                "https://w.soundcloud.com/player/?url=" +
                encodeURIComponent(result.uri || ""),
            };
            let thumb =
              result.artwork_url ||
              result.user?.avatar_url;
            if (thumb) res.thumbnail = thumb;
            let dur = parseInt(
              result.duration || 0,
              10
            );
            if (dur > 0) res.length = fmtDur(dur / 1000);
            res.views =
              result.playback_count || null;
            res.author =
              result.user?.full_name || null;
            r.push(res);
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 11. Spotify ==========
    EG_social.spotify = {
      name: "spotify",
      categories: ["music"],
      shortcut: null,
      paging: true,
      apiClientId: null,
      apiClientSecret: null,
      _token: null,
      async _getToken() {
        if (
          !this.apiClientId ||
          !this.apiClientSecret
        )
          return null;
        try {
          let auth = btoa(
            this.apiClientId +
              ":" +
              this.apiClientSecret
          );
          let resp = await fetch(
            "https://accounts.spotify.com/api/token",
            {
              method: "POST",
              headers: {
                Authorization: "Basic " + auth,
                "Content-Type":
                  "application/x-www-form-urlencoded",
              },
              body: "grant_type=client_credentials",
              signal: AbortSignal.timeout(8000),
            }
          );
          let data = await resp.json();
          return data.access_token || null;
        } catch (e) {
          return null;
        }
      },
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let offset = (pn - 1) * 20;
        params.url =
          "https://api.spotify.com/v1/search?q=" +
          encodeURIComponent(query) +
          "&type=track&offset=" +
          offset;
        if (!this._token)
          this._token = await this._getToken();
        if (this._token)
          params.headers["Authorization"] =
            "Bearer " + this._token;
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let data = resp.json;
          for (let result of data?.tracks?.items ||
            []) {
            if (result.type !== "track") continue;
            r.push({
              url: result.external_urls?.spotify,
              title: result.name,
              iframeSrc:
                "https://embed.spotify.com/?uri=spotify:track:" +
                result.id,
              content:
                (result.artists?.[0]?.name || "") +
                " - " +
                (result.album?.name || "") +
                " - " +
                result.name,
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 12. Tootfinder ==========
    EG_social.tootfinder = {
      name: "tootfinder",
      categories: ["social media"],
      shortcut: null,
      paging: false,
      async request(query, params, sq) {
        params.url =
          "https://www.tootfinder.ch/rest/api/search/" +
          encodeURIComponent(query);
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let jsonStr = "";
          for (let line of resp.text.split("\n")) {
            if (line.trim().startsWith("[{")) {
              jsonStr = line;
              break;
            }
          }
          if (!jsonStr) return r;
          let data = JSON.parse(jsonStr);
          for (let result of data) {
            let thumbnail = null;
            let attachments =
              result.media_attachments || [];
            for (let att of attachments) {
              if (att.type === "image") {
                thumbnail = att.preview_url;
                break;
              }
            }
            let title =
              result.card?.title ||
              st(result.content).slice(0, 75);
            r.push({
              url: result.url,
              title: title,
              content: st(result.content),
              thumbnail: thumbnail,
              publishedDate: result.created_at
                ? new Date(
                    result.created_at
                  ).toISOString()
                : null,
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 13. Rumble ==========
    EG_social.rumble = {
      name: "rumble",
      categories: ["videos"],
      shortcut: null,
      paging: true,
      async request(query, params, sq) {
        let qp = new URLSearchParams({ q: query });
        if ((sq.pageno || 1) > 1)
          qp.set("page", sq.pageno);
        params.url =
          "https://rumble.com/search/video?" +
          qp.toString();
        return params;
      },
      async response(resp, sq) {
        let r = [];
        let html = resp.text;
        let liRe =
          /<li[^>]*class="[^"]*video-listing-entry[^"]*"[^>]*>([\s\S]*?)<\/li>/g;
        let lm;
        while ((lm = liRe.exec(html)) !== null) {
          let li = lm[0];
          let hrefM = li.match(
            /<a[^>]*class="video-item--a"[^>]*href="([^"]*)"/
          );
          if (!hrefM) continue;
          let url =
            "https://rumble.com" + hrefM[1];
          let thumbM = li.match(
            /<img[^>]*class="video-item--img"[^>]*src="([^"]*)"/
          );
          let titleM = li.match(
            /<h3[^>]*class="video-item--title"[^>]*>([\s\S]*?)<\/h3>/
          );
          let timeM = li.match(
            /<time[^>]*class="video-item--meta video-item--time"[^>]*datetime="([^"]*)"/
          );
          let earnedM = li.match(
            /<span[^>]*class="video-item--meta video-item--earned"[^>]*data-value="([^"]*)"/
          );
          let viewsM = li.match(
            /<span[^>]*class="video-item--meta video-item--views"[^>]*data-value="([^"]*)"/
          );
          let rumblesM = li.match(
            /<span[^>]*class="video-item--meta video-item--rumbles"[^>]*data-value="([^"]*)"/
          );
          let authorM = li.match(
            /<div[^>]*class="ellipsis-1"[^>]*>([\s\S]*?)<\/div>/
          );
          let lengthM = li.match(
            /<span[^>]*class="video-item--duration"[^>]*data-value="([^"]*)"/
          );
          let views = viewsM ? viewsM[1] : "0";
          let rumbles = rumblesM
            ? rumblesM[1]
            : "0";
          let content =
            views +
            " views - " +
            rumbles +
            " rumbles";
          if (earnedM)
            content +=
              " - $" + earnedM[1];
          let publishedDate = null;
          if (timeM) {
            let d = new Date(
              timeM[1].replace(
                /(\+\d{2})(\d{2})$/,
                "$1:$2"
              )
            );
            if (!isNaN(d))
              publishedDate = d.toISOString();
          }
          r.push({
            url: url,
            title: st(
              titleM ? titleM[1] : ""
            ),
            content: content,
            author: st(
              authorM ? authorM[1] : ""
            ),
            length: lengthM
              ? lengthM[1]
              : null,
            publishedDate: publishedDate,
            thumbnail: thumbM
              ? thumbM[1]
              : null,
          });
        }
        return r;
      },
    };

    // ========== 14. Invidious ==========
    EG_social.invidious = {
      name: "invidious",
      categories: ["videos", "music"],
      shortcut: null,
      paging: true,
      timeRangeSupport: true,
      baseUrl: [],
      timeRangeDict: {
        day: "today",
        week: "week",
        month: "month",
        year: "year",
      },
      async request(query, params, sq) {
        let baseUrl;
        if (Array.isArray(this.baseUrl) && this.baseUrl.length > 0)
          baseUrl =
            this.baseUrl[
              Math.floor(
                Math.random() * this.baseUrl.length
              )
            ];
        else baseUrl = this.baseUrl;
        if (!baseUrl)
          return params;
        params._invidiousBaseUrl = baseUrl;
        params.url =
          baseUrl +
          "/api/v1/search?q=" +
          encodeURIComponent(query) +
          "&page=" +
          (sq.pageno || 1);
        if (
          sq.timeRange &&
          this.timeRangeDict[sq.timeRange]
        )
          params.url +=
            "&date=" +
            this.timeRangeDict[sq.timeRange];
        if (sq.language && sq.language !== "all") {
          let parts = sq.language.split("-");
          if (parts.length === 2)
            params.url +=
              "&range=" + parts[1];
        }
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let data = resp.json;
          let baseUrl =
            resp._invidiousBaseUrl ||
            "https://invidious.snopyta.org";
          for (let result of data || []) {
            if (result.type !== "video") continue;
            let videoId = result.videoId;
            if (!videoId) continue;
            let thumbs =
              result.videoThumbnails || [];
            let thumb =
              thumbs.find(
                (t) =>
                  t.quality === "sddefault"
              )?.url || "";
            if (
              thumb &&
              !/^https?:\/\//.test(thumb)
            )
              thumb = baseUrl + thumb;
            let length = null;
            if (result.lengthSeconds) {
              length = fmtDur(
                result.lengthSeconds
              );
            }
            r.push({
              url:
                baseUrl + "/watch?v=" + videoId,
              title: result.title || "",
              content:
                result.description || "",
              length: length,
              views: hn(result.viewCount),
              author: result.author,
              publishedDate: result.published
                ? new Date(
                    result.published * 1000
                  ).toISOString()
                : null,
              iframeSrc:
                baseUrl +
                "/embed/" +
                videoId,
              thumbnail: thumb,
            });
          }
        } catch (e) {}
        return r;
      },
    };

    // ========== 15. Piped ==========
    EG_social.piped = {
      name: "piped",
      categories: ["general"],
      shortcut: null,
      paging: true,
      backendUrl: "https://pipedapi.kavin.rocks",
      frontendUrl: "https://piped.video",
      pipedFilter: "all",
      _nextPage: null,
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let qp = new URLSearchParams({
          q: query,
          filter: this.pipedFilter,
        });
        let path = "/search";
        if (pn > 1 && this._nextPage) {
          let np = this._nextPage;
          this._nextPage = null;
          path = "/nextpage/search";
          qp.set("nextpage", np);
        } else {
          this._nextPage = null;
        }
        params.url =
          this.backendUrl + path + "?" + qp.toString();
        return params;
      },
      async response(resp, sq) {
        let r = [];
        try {
          let data = resp.json;
          for (let result of data?.items || []) {
            let uploaded = result.uploaded;
            let item = {
              url:
                this.frontendUrl +
                (result.url || ""),
              title: result.title || "",
              publishedDate:
                uploaded !== undefined &&
                uploaded !== null &&
                uploaded !== -1
                  ? new Date(uploaded).toISOString()
                  : null,
              iframeSrc:
                this.frontendUrl +
                "/embed" +
                (result.url || ""),
              views: hn(result.views),
            };
            if (result.duration)
              item.length = fmtDur(
                result.duration
              );
            if (
              this.pipedFilter === "videos"
            ) {
              item.content =
                result.shortDescription ||
                "";
              item.thumbnail =
                result.thumbnail || "";
            } else if (
              this.pipedFilter ===
              "music_songs"
            ) {
              item.thumbnail =
                result.thumbnail || "";
              item.content =
                result.uploaderName || "";
            }
            r.push(item);
          }
          if (data?.nextpage) {
            EG_social.piped._nextPage =
              data.nextpage;
          }
        } catch (e) {}
        return r;
      },
    };
  });
