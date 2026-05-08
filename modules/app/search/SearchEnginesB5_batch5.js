var EG_b5 = {},
  eG_b5 = j(() => {
    "use strict";

    function eb(s, start, end) {
      let i = s.indexOf(start);
      if (i === -1) return null;
      i += start.length;
      let j = s.indexOf(end, i);
      return j === -1 ? null : s.slice(i, j);
    }

    function st(s) {
      return s ? s.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim() : "";
    }

    const gImageFilter = { 0: "images", 1: "active", 2: "active" };

    EG_b5.geizhals = {
      name: "geizhals",
      categories: ["shopping"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      base_url: "https://geizhals.de",
      async request(query, params, sq) {
        let sort = null;
        let sortMatch = query.match(/sort:(\w+)/);
        if (sortMatch) {
          let sortMap = { relevance: null, price: "p", asc: "p", desc: "-p" };
          sort = sortMap[sortMatch[1]] || null;
          query = query.replace(/sort:\w+/, "").trim();
        }
        let args = new URLSearchParams({ fs: query, pg: sq.pageno || 1, toggle_all: 1 });
        if (sort) args.set("sort", sort);
        params.url = this.base_url + "/?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let arts = resp.text.match(/<article[^>]*class="[^"]*listview__item[^"]*"[^>]*>[\s\S]*?<\/article>/g);
        if (!arts) return results;
        for (let art of arts) {
          let content = [];
          let specs = art.match(/<div[^>]*class="[^"]*specs-grid__item[^"]*"[^>]*>[\s\S]*?<\/div>/g);
          if (specs) {
            for (let spec of specs) {
              let dt = st(eb(spec, "<dt>", "</dt>"));
              let dd = st(eb(spec, "<dd>", "</dd>"));
              if (dt) content.push(dt + ": " + dd);
            }
          }
          let rating = st(eb(art, 'class="stars-rating-label"', "</div>"));
          rating = rating ? eb(rating, ">", "") || rating : "";
          let offerCount = st(eb(art, 'class="listview__offercount"', "</div>"));
          offerCount = offerCount ? eb(offerCount, ">", "") || offerCount : "";
          let metadata = [rating, offerCount].filter(Boolean);
          let href = eb(art, 'class="listview__name-link"', "</a>");
          let url = href ? this.base_url + "/" + st(eb(href, 'href="', '"')) : "";
          let title = st(eb(art, 'class="listview__name"', "</h3>"));
          title = title ? st(eb(title, ">", "<") || title) : "";
          let thumb = eb(art, 'class="listview__image"', "/>");
          let thumbnail = thumb ? eb(thumb, 'src="', '"') : "";
          let priceLink = eb(art, 'class="listview__price-link"', "</a>");
          let bestPrice = priceLink ? st(priceLink).split(" ") : [];
          let item = {
            url: url,
            title: title,
            content: content.join(" | "),
            thumbnail: thumbnail,
            metadata: metadata.join(", "),
          };
          if (bestPrice.length > 1) item.price = "Bestes Angebot: " + bestPrice[1] + "\u20AC";
          results.push(item);
        }
        return results;
      },
    };

    EG_b5.genius = {
      name: "genius",
      categories: ["music", "lyrics"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      page_size: 5,
      music_player: "https://genius.com{api_path}/apple_music_player",
      async request(query, params, sq) {
        let args = new URLSearchParams({ q: query });
        params.url =
          "https://genius.com/api/search/multi?" +
          args.toString() +
          "&page=" +
          (sq.pageno || 1) +
          "&per_page=" +
          this.page_size;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!data || !data.response || !data.response.sections) return results;
        for (let section of data.response.sections) {
          for (let hit of section.hits || []) {
            let func = this.parseMap[hit.type];
            if (func) results.push(func.call(this, hit));
          }
        }
        return results;
      },
      parseMap: {
        lyric: function (hit) {
          let content = hit.highlights && hit.highlights.length ? hit.highlights[0].value : hit.result.title_with_featured || "";
          let ts = hit.result.lyrics_updated_at;
          let r = {
            url: hit.result.url,
            title: hit.result.full_title,
            content: content,
            thumbnail: hit.result.song_art_image_thumbnail_url,
          };
          if (ts) r.publishedDate = new Date(ts * 1000);
          if (hit.result.api_path) r.iframe_src = this.music_player.replace("{api_path}", hit.result.api_path);
          return r;
        },
        song: function (hit) {
          return this.parseMap.lyric.call(this, hit);
        },
        artist: function (hit) {
          return { url: hit.result.url, title: hit.result.name, content: "", thumbnail: hit.result.image_url };
        },
        album: function (hit) {
          let res = hit.result;
          let content = res.name_with_artist || res.name || "";
          if (res.release_date_components && res.release_date_components.year)
            content = res.release_date_components.year + " / " + content;
          return { url: res.url, title: res.full_title, thumbnail: res.cover_art_url, content: content.trim() };
        },
      },
    };

    EG_b5.githubCode = {
      name: "githubCode",
      categories: ["code"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      search_url: "https://api.github.com/search/code?sort=indexed&{query}&{page}",
      ghc_auth_type: "none",
      ghc_auth_token: "",
      ghc_highlight_matching_lines: !0,
      ghc_strip_new_lines: !0,
      ghc_strip_whitespace: !1,
      ghc_api_version: "2022-11-28",
      ghc_insert_block_separator: !1,
      async request(query, params, sq) {
        let qs = new URLSearchParams({ q: query });
        let ps = new URLSearchParams({ page: sq.pageno || 1 });
        params.url = "https://api.github.com/search/code?sort=indexed&" + qs.toString() + "&" + ps.toString();
        params.headers["Accept"] = "application/vnd.github.text-match+json";
        params.headers["X-GitHub-Api-Version"] = this.ghc_api_version;
        if (this.ghc_auth_type === "none")
          params.headers["Authorization"] = "placeholder";
        else if (this.ghc_auth_type === "personal_access_token")
          params.headers["Authorization"] = "token " + this.ghc_auth_token;
        else if (this.ghc_auth_type === "bearer")
          params.headers["Authorization"] = "Bearer " + this.ghc_auth_token;
        params.raise_for_httperror = !1;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (resp.status === 422) return results;
        let data = resp.json;
        if (!data || !data.items) return results;
        for (let item of data.items) {
          let repo = item.repository || {};
          let textMatches = item.text_matches || [];
          let codeMatches = textMatches.filter(
            (m) => m.object_type === "FileContent" && m.property === "content"
          );
          let lines = [];
          let hlLines = new Set();
          for (let i = 0; i < codeMatches.length; i++) {
            let match = codeMatches[i];
            if (i > 0 && this.ghc_insert_block_separator) lines.push("...");
            let code = match.fragment || "";
            let origLen = code.length;
            if (this.ghc_strip_whitespace) code = code.trimStart();
            if (this.ghc_strip_new_lines) code = code.replace(/^\n+/, "");
            let offset = origLen - code.length;
            if (this.ghc_strip_whitespace) code = code.trimEnd();
            if (this.ghc_strip_new_lines) code = code.replace(/\n+$/, "");
            let hGroups = (match.matches || []).map((m) => m.indices).filter(Boolean);
            let buf = [];
            for (let ci = 0; ci < code.length; ci++) {
              let ch = code[ci];
              if (hGroups.length > 0) {
                let after = hGroups[0][0],
                  before = hGroups[0][1];
                if (after <= ci + offset && ci + offset < before) {
                  hlLines.add(lines.length + 1);
                  hGroups.shift();
                }
              }
              if (ch === "\n") {
                lines.push(buf.join(""));
                buf = [];
              } else {
                buf.push(ch);
              }
            }
            lines.push(buf.join(""));
          }
          if (!this.ghc_highlight_matching_lines) hlLines = new Set();
          results.push({
            url: item.html_url,
            title: repo.full_name + " \u00B7 " + item.name,
            content: repo.description,
            repository: repo.html_url,
            codelines: lines.map((line, idx) => [idx + 1, line]),
            hl_lines: Array.from(hlLines),
            strip_whitespace: this.ghc_strip_whitespace,
            strip_new_lines: this.ghc_strip_new_lines,
          });
        }
        return results;
      },
    };

    EG_b5.gmx = {
      name: "gmx",
      categories: ["general"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      base_url: "https://search.gmx.com",
      time_range_map: { day: "d", week: "w", month: "m", year: "y" },
      async request(query, params, sq) {
        let now = Math.floor(Date.now() / 10000);
        let url = this.base_url + "/web/result?q=" + encodeURIComponent(query) + "&page=" + (sq.pageno || 1);
        let resp = await fetch(url, {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
            Connection: "keep-alive",
            Referer: this.base_url,
          },
        });
        let text = await resp.text();
        let hash = eb(text, "&h=", "&t=");
        let args = new URLSearchParams({
          lang: "en",
          q: query,
          page: sq.pageno || 1,
          h: hash || now,
          t: now,
        });
        if (sq.safesearch) args.set("family", "true");
        if (sq.timeRange && this.time_range_map[sq.timeRange])
          args.set("time", this.time_range_map[sq.timeRange]);
        params.url = this.base_url + "/desk?" + args.toString();
        params.headers["User-Agent"] =
          "Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0";
        params.headers["Accept-Language"] = "en-US,en;q=0.9";
        params.headers["Connection"] = "keep-alive";
        params.headers["Referer"] = this.base_url;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!data || !data.results) return results;
        for (let s of data.results.rs || []) {
          results.push({ suggestion: s.t });
        }
        for (let r of data.results.hits || []) {
          results.push({ url: r.u, title: st(r.t), content: st(r.s) });
        }
        return results;
      },
    };

    EG_b5.googleImages = {
      name: "googleImages",
      categories: ["images", "web"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      max_page: 50,
      time_range_support: !0,
      safesearch: !0,
      async request(query, params, sq) {
        let pn = sq.pageno || 1;
        let url =
          "https://www.google.com/search?q=" +
          encodeURIComponent(query) +
          "&tbm=isch&hl=en&asearch=isch&async=_fmt:json,p:1,ijn:" +
          (pn - 1);
        if (sq.timeRange) {
          let trMap = { day: "d", week: "w", month: "m", year: "y" };
          if (trMap[sq.timeRange]) url += "&tbs=qdr:" + trMap[sq.timeRange];
        }
        if (sq.safesearch) url += "&safe=" + gImageFilter[sq.safesearch];
        params.url = url;
        params.headers["User-Agent"] =
          "NSTN/3.60.474802233.release Dalvik/2.1.0 (Linux; U; Android 12; US) gzip";
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let s = resp.text.indexOf('{"ischj":');
        if (s === -1) return results;
        let data;
        try {
          data = JSON.parse(resp.text.slice(s));
        } catch (e) {
          return results;
        }
        for (let item of data.ischj?.metadata || []) {
          let res = item.result || {};
          let oi = item.original_image || {};
          let th = item.thumbnail || {};
          let resultItem = {
            url: res.referrer_url,
            title: res.page_title,
            content: item.text_in_grid?.snippet,
            source: res.site_title,
            resolution: (oi.width || "") + " x " + (oi.height || ""),
            imgSrc: oi.url,
            thumbnail: th.url,
          };
          let author = res.iptc?.creator;
          if (author) resultItem.author = Array.isArray(author) ? author.join(", ") : author;
          let cr = res.iptc?.copyright_notice;
          if (cr) resultItem.source += " | " + cr;
          let fd = res.freshness_date;
          if (fd) resultItem.source += " | " + fd;
          let fs = item.gsa?.file_size;
          if (fs) resultItem.source += " (" + fs + ")";
          results.push(resultItem);
        }
        return results;
      },
    };

    EG_b5.googlePlay = {
      name: "googlePlay",
      categories: ["shopping"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      base_url: "https://play.google.com",
      play_categ: null,
      async request(query, params, sq) {
        if (this.play_categ !== "movies" && this.play_categ !== "apps")
          throw new Error("unknown google play category: " + this.play_categ);
        let args = new URLSearchParams({ q: query });
        params.url = this.base_url + "/store/search?" + args.toString() + "&c=" + this.play_categ;
        params.cookies = params.cookies || {};
        params.cookies["CONSENT"] = "YES+";
        return params;
      },
      async response(resp, sq) {
        if (this.play_categ === "movies") return this.responseMovies(resp);
        if (this.play_categ === "apps") return this.responseApps(resp);
        return [];
      },
      responseMovies(resp) {
        let results = [];
        let sections = resp.text.match(/<c-wiz[\s\S]*?<\/c-wiz>/g) || [];
        for (let section of sections) {
          let secName = st(eb(section, "<header>", "</header>"));
          if (!secName) continue;
          let items = section.match(/<a[^>]*href="[^"]*"[^>]*>[\s\S]*?<\/a>/g) || [];
          for (let item of items) {
            let url = this.base_url + (eb(item, 'href="', '"') || "");
            let divs = item.match(/<div[\s\S]*?<\/div>/g) || [];
            if (divs.length < 2) continue;
            let title = st(eb(divs[1], 'title="', '"'));
            let meta = st(eb(divs[1], 'class="', '"'));
            meta = meta ? st(divs[1].slice(divs[1].indexOf('class="') + 7)) : "";
            meta = st(eb(divs[1], ">", "<") || "");
            let img = eb(divs[0], '<img', '/>') || eb(divs[0], '<img', '>');
            let thumbnail = img ? eb(img, 'src="', '"') : "";
            results.push({
              url: url,
              title: title,
              content: secName,
              thumbnail: thumbnail,
              metadata: meta,
            });
          }
        }
        return results;
      },
      responseApps(resp) {
        let results = [];
        let text = resp.text;
        if (text.includes('class="v6DsQb"')) return results;
        let spot = eb(text, 'class="ipRz4"', '</div>');
        if (spot) {
          spot = '<div class="ipRz4"' + spot + '</div>';
          let href = eb(spot, 'class="Qfxief"', "</a>");
          let url = href ? eb(href, 'href="', '"') : "";
          let title = st(eb(spot, 'class="vWM94c"', "</div>"));
          let cnt = st(eb(spot, 'class="LbQbAe"', "</div>"));
          let imgTag = eb(spot, 'class="T75of bzqKMd"', "/>") || eb(spot, 'class="T75of bzqKMd"', ">");
          let img = imgTag ? eb(imgTag, 'src="', '"') : "";
          results.push({ url: url, title: title, content: cnt, imgSrc: img });
        }
        let moreItems = text.match(/jsrenderer="RBsfwb"[\s\S]*?listitem"[\s\S]*?<\/c-wiz>/g) || [];
        for (let block of moreItems) {
          let entries = block.match(/<div[^>]*role="listitem"[\s\S]*?<\/div>/g) || [];
          for (let entry of entries) {
            let href = eb(entry, 'href="', '"');
            let url = href || "";
            let title = st(eb(entry, 'class="DdYX5"', "</span>"));
            let cnt = st(eb(entry, 'class="wMUdtb"', "</span>"));
            let imgTag =
              eb(entry, 'class="T75of stzEZd"', "/>") ||
              eb(entry, 'class="T75of etjhNc Q8CSx "', "/>") ||
              eb(entry, 'class="T75of"', "/>");
            let img = imgTag ? eb(imgTag, 'src="', '"') : "";
            results.push({ url: url, title: title, content: cnt, imgSrc: img });
          }
        }
        let suggestions = text.match(/jsrenderer="qyd4Kb"[\s\S]*?<\/c-wiz>/g) || [];
        for (let sBlock of suggestions) {
          let sugDivs = sBlock.match(/class="ULeU3b neq64b"[\s\S]*?<\/div>/g) || [];
          for (let sd of sugDivs) {
            let sug = st(eb(sd, 'class="Epkrse "', "</div>"));
            if (sug) results.push({ suggestion: sug });
          }
        }
        return results;
      },
    };

    EG_b5.googleScholar = {
      name: "googleScholar",
      categories: ["science", "scientific publications"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      max_page: 50,
      time_range_support: !0,
      async request(query, params, sq) {
        let args = new URLSearchParams({
          q: query,
          hl: "en",
          start: ((sq.pageno || 1) - 1) * 10,
          as_sdt: "2007",
          as_vis: "0",
        });
        if (sq.timeRange) args.set("as_ylo", String(new Date().getFullYear() - 1));
        params.url = "https://scholar.google.com/scholar?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (resp.status >= 301 && resp.status < 400) {
          let loc = resp.headers["Location"] || resp.headers["location"] || "";
          if (loc.includes("/sorry/index?continue"))
            throw new Error("google_scholar: unusual traffic detected");
          throw new Error("Redirect: " + (loc.split("?")[0] || loc));
        }
        if (resp.text.includes('id="gs_captcha_f"'))
          throw new Error("CAPTCHA (gs_captcha_f)");
        let blocks = resp.text.match(/<div[^>]*data-rp[^>]*>[\s\S]*?<\/div>\s*(?=<div[^>]*(?:data-rp|class="gs_r gs_pda")|$)/g) || [];
        for (let block of blocks) {
          let title = st(eb(block, "<h3", "</h3>"));
          if (!title) continue;
          title = st(eb(title, ">", "<") || "");
          if (!title) continue;
          let pubType = st(eb(block, 'class="gs_ctg2"', "</span>"));
          if (pubType) pubType = pubType.replace(/[[\]]/g, "").toLowerCase();
          let url = eb(block, "<h3", "</h3>");
          url = url ? eb(url, 'href="', '"') : "";
          let content = st(eb(block, 'class="gs_rs"', "</div>"));
          let gsA = st(eb(block, 'class="gs_a"', "</div>")) || "";
          let parsed = this.parseGsA(gsA);
          let comments = st(eb(block, "cites=", '"'));
          comments = comments ? "Cited by " + st(eb(block, ">", "<")) : "";
          let docUrlBlock = eb(block, 'class="gs_or_ggsm"', "</div>");
          let pdfUrl = "",
            htmlUrl = "";
          if (docUrlBlock) {
            let docType = st(eb(docUrlBlock, 'class="gs_ctg2"', "</span>"));
            let docHref = eb(docUrlBlock, 'href="', '"');
            if (docType === "[PDF]") pdfUrl = docHref || "";
            else htmlUrl = docHref || "";
          }
          results.push({
            type: pubType || "",
            url: url,
            title: title,
            authors: parsed.authors,
            publisher: parsed.publisher,
            journal: parsed.journal,
            publishedDate: parsed.publishedDate,
            content: content || "",
            comments: comments,
            html_url: htmlUrl,
            pdf_url: pdfUrl,
          });
        }
        let sugBlocks = resp.text.match(/class="gs_qsuggest_wrap"[\s\S]*?<\/div>/g) || [];
        for (let sb of sugBlocks) {
          let links = sb.match(/<a[\s\S]*?<\/a>/g) || [];
          for (let lnk of links) {
            let sug = st(lnk);
            if (sug) results.push({ suggestion: sug });
          }
        }
        let corrections = resp.text.match(/class='gs_r gs_pda'[\s\S]*?<\/div>/g) || [];
        for (let c of corrections) {
          let corr = st(eb(c, ">", "<"));
          let href = eb(c, 'href="', '"');
          if (corr) results.push({ correction: corr, url: href || "" });
        }
        return results;
      },
      parseGsA(text) {
        let authors = [],
          journal = "",
          publisher = "",
          publishedDate = null;
        if (!text) return { authors, journal, publisher, publishedDate };
        let parts = text.split(" - ");
        authors = parts[0].split(", ").map((s) => s.trim());
        publisher = parts.length > 1 ? parts[parts.length - 1].trim() : "";
        if (parts.length === 3) {
          let jy = parts[1].split(", ");
          if (jy.length > 1) {
            journal = jy.slice(0, -1).join(", ");
            if (journal === "\u2026") journal = "";
          }
          let year = parseInt(jy[jy.length - 1].trim(), 10);
          if (!isNaN(year)) publishedDate = new Date(year, 0, 1);
        }
        return { authors, journal, publisher, publishedDate };
      },
    };

    EG_b5.googleVideos = {
      name: "googleVideos",
      categories: ["videos", "web"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      max_page: 50,
      time_range_support: !0,
      safesearch: !0,
      async request(query, params, sq) {
        let start = ((sq.pageno || 1) - 1) * 10;
        let args = new URLSearchParams({
          q: query,
          tbm: "vid",
          start: start,
          hl: "en",
          asearch: "arc",
          async: "use_ac:true,_fmt:html,p:1,i:1_" + start + ",_s:1",
        });
        let url = "https://www.google.com/search?" + args.toString();
        if (sq.timeRange) {
          let trMap = { day: "d", week: "w", month: "m", year: "y" };
          if (trMap[sq.timeRange]) url += "&tbs=qdr:" + trMap[sq.timeRange];
        }
        if (sq.safesearch) {
          let sfMap = { 0: "images", 1: "active", 2: "active" };
          url += "&safe=" + (sfMap[sq.safesearch] || "active");
        }
        params.url = url;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let text = resp.text;
        let dataImageMap = {};
        let dimgRe = /"(dimg_[^"]*)"[^;]*;(data:image[^;]*;[^;]*);?/g;
        let dimgMatch;
        while ((dimgMatch = dimgRe.exec(text)) !== null) {
          let imgId = dimgMatch[1];
          let dataImg = dimgMatch[2];
          let ep = dataImg.lastIndexOf("=");
          if (ep > 0) dataImg = dataImg.slice(0, ep + 1);
          dataImageMap[imgId] = dataImg;
        }
        let divs = text.match(/<div[^>]*class="[^"]*MjjYud[^"]*"[^>]*>[\s\S]*?<\/div>\s*(?=<div[^>]*class="[^"]*MjjYud|$)/g) || [];
        for (let div of divs) {
          let title = "";
          let h3 = eb(div, 'class="LC20lb"', "</h3>") || eb(div, 'role="heading"', "</div>");
          if (h3) title = st(eb(h3, ">", "<") || h3);
          let url = eb(div, 'jsname="UWckNb"', "</a>") || eb(div, '/url?q=', '"');
          if (url) {
            url = eb(url, 'href="', '"');
            if (url && url.startsWith("/url?q=")) {
              url = decodeURIComponent(url.slice(7).split("&sa=U")[0]);
            }
          }
          let content = "";
          let cntDiv = eb(div, 'class="ITZIwc"', "</div>");
          if (cntDiv) content = st(eb(cntDiv, ">", "<") || cntDiv);
          let pubInfo = "";
          let pubDiv = eb(div, 'class="gqF9jc"', "</div>") || eb(div, 'class="WRu9Cd"', "</div>");
          if (pubDiv) pubInfo = st(eb(pubDiv, ">", "<") || pubDiv);
          let thumb = eb(div, "<img", "/>") || eb(div, "<img", ">");
          let thumbnail = thumb ? eb(thumb, 'src="', '"') : "";
          let duration = "";
          let durSpan = eb(div, 'class="k1U36b"', "</span>");
          if (durSpan) duration = st(eb(durSpan, ">", "<") || durSpan);
          let videoId = eb(div, 'data-vid="', '"');
          if (!videoId && url && url.includes("youtube.com")) {
            try {
              let u = new URL(url);
              videoId = u.searchParams.get("v");
            } catch (e) {}
          }
          if (thumbnail && thumbnail.startsWith("data:image")) {
            let imgId = eb(div, '<img', 'id="');
            imgId = imgId ? eb(imgId, 'id="', '"') || eb(div, 'id="', '"') : eb(div, 'id="', '"');
            if (imgId && dataImageMap[imgId]) thumbnail = dataImageMap[imgId];
            else thumbnail = null;
          }
          if (!thumbnail && videoId)
            thumbnail = "https://img.youtube.com/vi/" + videoId + "/hqdefault.jpg";
          let embedUrl = null;
          if (videoId)
            embedUrl = "https://www.youtube-nocookie.com/embed/" + videoId;
          else if (url)
            embedUrl = url;
          if (title && url) {
            results.push({
              url: url,
              title: title,
              content: content || "",
              author: pubInfo,
              thumbnail: thumbnail,
              length: duration,
              iframe_src: embedUrl,
            });
          }
        }
        let sugDivs = text.match(/class="[^"]*suggest[^"]*"[^>]*>[\s\S]*?<\/div>/g) || [];
        for (let sd of sugDivs) {
          let sug = st(sd);
          if (sug) results.push({ suggestion: sug });
        }
        return results;
      },
    };

    EG_b5.hex = {
      name: "hex",
      categories: ["it", "packages"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      search_url: "https://hex.pm/api/packages/",
      sort_criteria: "recent_downloads",
      page_size: 10,
      linked_terms: {
        author: "Author",
        bitbucket: "Bitbucket",
        "bug tracker": "Issue tracker",
        changelog: "Changelog",
        doc: "Documentation",
        docs: "Documentation",
        documentation: "Documentation",
        "github repository": "GitHub",
        github: "GitHub",
        gitlab: "GitLab",
        issues: "Issue tracker",
        "project source code": "Source code",
        repository: "Source code",
        scm: "Source code",
        sourcehut: "SourceHut",
        sources: "Source code",
        sponsor: "Sponsors",
        sponsors: "Sponsors",
        website: "Homepage",
      },
      async request(query, params, sq) {
        let args = new URLSearchParams({
          page: sq.pageno || 1,
          per_page: this.page_size,
          sort: this.sort_criteria,
          search: query,
        });
        params.url = this.search_url + "?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!Array.isArray(data)) return results;
        for (let pkg of data) {
          let meta = pkg.meta || {};
          let publishedDate = pkg.updated_at ? new Date(pkg.updated_at) : null;
          let links = {};
          if (meta.links) {
            for (let [k, v] of Object.entries(meta.links)) {
              links[this.linked_terms[k.toLowerCase()] || k] = v;
            }
          }
          results.push({
            url: pkg.html_url || "",
            title: pkg.name || "",
            packageName: pkg.name || "",
            content: meta.description || "",
            version: meta.latest_version || "",
            maintainer: Array.isArray(meta.maintainers) ? meta.maintainers.join(", ") : "",
            publishedDate: publishedDate,
            licenseName: Array.isArray(meta.licenses) ? meta.licenses.join(", ") : "",
            homepage: pkg.docs_html_url || "",
            links: links,
          });
        }
        return results;
      },
    };

    EG_b5.huggingface = {
      name: "huggingface",
      categories: ["it", "repos"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      base_url: "https://huggingface.co",
      huggingface_endpoint: "models",
      async request(query, params, sq) {
        let args = new URLSearchParams({ direction: -1, search: query });
        params.url = this.base_url + "/api/" + this.huggingface_endpoint + "?" + args.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!Array.isArray(data)) return results;
        for (let entry of data) {
          let url =
            this.huggingface_endpoint !== "models"
              ? this.base_url + "/" + this.huggingface_endpoint + "/" + entry.id
              : this.base_url + "/" + entry.id;
          let publishedDate = null;
          if (entry.createdAt) {
            try {
              publishedDate = new Date(entry.createdAt);
            } catch (e) {}
          }
          let contents = [];
          if (entry.likes) contents.push("Likes: " + entry.likes);
          if (entry.downloads) contents.push("Downloads: " + Number(entry.downloads).toLocaleString());
          if (entry.tags && entry.tags.length) contents.push("Tags: " + entry.tags.join(", "));
          if (entry.description) contents.push("Description: " + entry.description);
          results.push({
            title: entry.id,
            content: st(contents.join(" | ")),
            url: url,
            publishedDate: publishedDate,
          });
        }
        return results;
      },
    };

    EG_b5.ina = {
      name: "ina",
      categories: ["videos"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      page_size: 12,
      base_url: "https://www.ina.fr",
      async request(query, params, sq) {
        let args = new URLSearchParams({ q: query });
        let start = (sq.pageno || 1) * this.page_size;
        params.url =
          this.base_url +
          "/ajax/recherche?" +
          args.toString() +
          "&espace=1&sort=pertinence&order=desc&offset=" +
          start +
          "&modified=size";
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let divs = resp.text.match(/<div id="searchHits"[\s\S]*?<\/div>/g) || [];
        for (let hitsDiv of divs) {
          let items = hitsDiv.match(/<div[\s\S]*?<\/div>/g) || [];
          for (let result of items) {
            if (!result.includes("title-bloc-small") && !result.includes("sous-titre-fonction")) continue;
            let href = eb(result, 'href="', '"');
            let url = href ? this.base_url + href : "";
            let title = st(eb(result, 'class="title-bloc-small"', "</div>"));
            title = title ? st(eb(title, ">", "<") || title) : "";
            let thumbnailTag = eb(result, '<img', '/>') || eb(result, '<img', '>');
            let thumbnail = thumbnailTag ? eb(thumbnailTag, 'data-src="', '"') : "";
            let date = st(eb(result, 'class="dateAgenda"', "</div>"));
            let sous = st(eb(result, 'class="sous-titre-fonction"', "</div>"));
            let content = (date || "") + (sous || "");
            if (url) {
              results.push({
                url: url,
                title: title,
                content: content,
                thumbnail: thumbnail,
              });
            }
          }
        }
        return results;
      },
    };

    EG_b5.ipernity = {
      name: "ipernity",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      base_url: "https://www.ipernity.com",
      page_size: 10,
      async request(query, params, sq) {
        params.url =
          this.base_url +
          "/search/photo/@/page:" +
          (sq.pageno || 1) +
          ":" +
          this.page_size +
          "?q=" +
          encodeURIComponent(query);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let text = resp.text;
        let images = text.match(/<a[^>]*href="\/doc[^"]*"[^>]*>[\s\S]*?<\/a>/g) || [];
        let imgTags = [];
        for (let a of images) {
          let img = eb(a, "<img", "/>") || eb(a, "<img", ">");
          if (img) imgTags.push(img);
        }
        let scripts = text.match(/<script[^>]*type="text\/javascript"[^>]*>[\s\S]*?<\/script>/g) || [];
        let idx = 0;
        for (let script of scripts) {
          let inner = st(script);
          let infoJs = eb(inner, "] = ", "};");
          if (!infoJs) continue;
          infoJs = infoJs + "}";
          let infoItem;
          try {
            infoItem = JSON.parse(infoJs);
          } catch (e) {
            continue;
          }
          if (!infoItem.mediakey) continue;
          let thumbnailSrc = "";
          if (imgTags[idx]) {
            thumbnailSrc = eb(imgTags[idx], 'src="', '"') || "";
          }
          let imgSrc = thumbnailSrc.replace("240.jpg", "640.jpg");
          let resolution = null;
          if (infoItem.width && infoItem.height)
            resolution = infoItem.width + "x" + infoItem.height;
          results.push({
            url:
              this.base_url +
              "/doc/" +
              infoItem.user_id +
              "/" +
              infoItem.doc_id,
            title: infoItem.title || "",
            content: infoItem.content || "",
            resolution: resolution,
            publishedDate: infoItem.posted_at ? new Date(parseInt(infoItem.posted_at) * 1000) : null,
            thumbnail: thumbnailSrc,
            imgSrc: imgSrc,
          });
          idx++;
        }
        return results;
      },
    };

    EG_b5.iqiyi = {
      name: "iqiyi",
      categories: ["videos"],
      shortcut: null,
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      time_range_support: !0,
      base_url: "https://mesh.if.iqiyi.com",
      time_range_dict: { day: "1", week: "2", month: "3" },
      async request(query, params, sq) {
        let qp = new URLSearchParams({ key: query, pageNum: sq.pageno || 1, pageSize: 25 });
        if (sq.timeRange && this.time_range_dict[sq.timeRange])
          qp.set("sitePublishDate", this.time_range_dict[sq.timeRange]);
        params.url = this.base_url + "/portal/lw/search/homePageV3?" + qp.toString();
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data;
        try {
          data = resp.json;
        } catch (e) {
          throw new Error("Invalid response");
        }
        if (!data || !data.data || !data.data.templates) throw new Error("Invalid response");
        for (let entry of data.data.templates) {
          let albumInfo = entry.albumInfo || {};
          if (albumInfo.videos) {
            for (let video of albumInfo.videos) {
              results.push(this.parseVideo(video, albumInfo));
            }
          } else {
            results.push(this.parseVideo(albumInfo, albumInfo));
          }
        }
        return results;
      },
      parseVideo(video, albumInfo) {
        let length = video.duration ? video.duration : 0;
        let publishedDate = null;
        let rt = albumInfo.releaseTime?.value;
        if (rt) {
          try {
            publishedDate = new Date(rt);
          } catch (e) {}
        }
        return {
          url: (video.pageUrl || "").replace("http://", "https://"),
          title: video.title || "",
          content: albumInfo.brief?.value || "",
          length: length,
          publishedDate: publishedDate,
          thumbnail: albumInfo.img || "",
        };
      },
    };

    EG_b5.jisho = {
      name: "jisho",
      categories: ["dictionaries"],
      shortcut: null,
          useRenderer: !0,
      paging: !1,
          useRenderer: !0,
      URL: "https://jisho.org",
      BASE_URL: "https://jisho.org/word/",
      SEARCH_URL: "https://jisho.org/api/v1/search/words?{query}",
      async request(query, params, sq) {
        let args = new URLSearchParams({ keyword: query });
        params.url = this.SEARCH_URL.replace("{query}", args.toString());
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let data = resp.json;
        if (!data || !data.data) return results;
        let firstResult = true;
        for (let page of data.data) {
          let partsOfSpeech = page.senses && page.senses[0] && page.senses[0].parts_of_speech;
          if (partsOfSpeech && partsOfSpeech[0] === "Wikipedia definition") continue;
          let altForms = [];
          let title = "";
          for (let titleRaw of page.japanese || []) {
            if (!titleRaw.word) {
              altForms.push(titleRaw.reading);
            } else {
              title = titleRaw.word;
              if (titleRaw.reading) title += " (" + titleRaw.reading + ")";
              altForms.push(title);
            }
          }
          let resultUrl = this.BASE_URL + page.slug;
          let definitions = this.getDefinitions(page);
          let content =
            definitions
              .map((d) => d[1] + ".")
              .join(" ") || "";
          content = content.length > 300 ? content.slice(0, 300) + "..." : content;
          results.push({
            url: resultUrl,
            title: altForms.join(", "),
            content: content,
          });
          if (firstResult) {
            firstResult = false;
            results.push(this.getInfobox(altForms, resultUrl, definitions));
          }
        }
        return results;
      },
      getDefinitions(page) {
        let definitions = [];
        for (let defnRaw of page.senses || []) {
          let extra = [];
          if (defnRaw.tags) {
            if (defnRaw.info)
              extra.push(defnRaw.tags[0] + ", " + defnRaw.info[0] + ". ");
            else extra.push(defnRaw.tags.join(", ") + ". ");
          } else if (defnRaw.info) {
            let infoStr = defnRaw.info.join(", ");
            extra.push(infoStr.charAt(0).toUpperCase() + infoStr.slice(1) + ". ");
          }
          if (defnRaw.restrictions)
            extra.push("Only applies to: " + defnRaw.restrictions.join(", ") + ". ");
          definitions.push([
            (defnRaw.parts_of_speech || []).join(", "),
            (defnRaw.english_definitions || []).join("; "),
            extra.join("").replace(/\.\s*$/, ""),
          ]);
        }
        return definitions;
      },
      getInfobox(altForms, resultUrl, definitions) {
        let html = "";
        if (altForms.length > 1)
          html +=
            "<p><i>Other forms:</i> " + altForms.slice(1).join(", ") + "</p>";
        html +=
          '<small><a href="https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project">JMdict</a> and <a href="https://www.edrdg.org/enamdict/enamdict_doc.html">JMnedict</a> by <a href="https://www.edrdg.org/edrdg/licence.html">EDRDG</a>, CC BY-SA 3.0.</small><ul>';
        for (let [pos, engdef, extra] of definitions) {
          if (pos === "Wikipedia definition")
            html += "</ul><small>Wikipedia, CC BY-SA 3.0.</small><ul>";
          let posStr = pos ? "<i>" + pos + "</i>: " : "";
          let extraStr = extra ? " (" + extra + ")" : "";
          html += "<li>" + posStr + engdef + extraStr + "</li>";
        }
        html += "</ul>";
        return {
          infobox: altForms[0] || "",
          content: html,
          urls: [{ title: "Jisho.org", url: resultUrl }],
        };
      },
    };
  });