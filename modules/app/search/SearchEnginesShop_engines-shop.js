var EG_shop = {},
  eG_shop = j(() => {
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
        ? s.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ").replace(/\s+/g, " ").trim()
        : "";
    }

    function de(s) {
      try {
        return decodeURIComponent(s.replace(/\+/g, " "));
      } catch {
        return s;
      }
    }

    function blk(html, tag, cls, from) {
      var re = new RegExp(
        "<" + tag + '\\s[^>]*class="[^"]*' + cls + '[^"]*"[^>]*>',
        "i"
      );
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
        if (nc === -1)
          return {
            html: html.slice(m.index),
            start: m.index,
            end: html.length,
          };
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

    EG_shop._1337x = {
      name: "1337x",
      categories: ["files"],
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url =
          "https://1337x.to/search/" +
          encodeURIComponent(query) +
          "/" +
          (sq.pageno || 1) +
          "/";
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [],
          rows = h.match(/<tr>[\s\S]*?<\/tr>/gi) || [];
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          if (row.indexOf('class="name"') === -1) continue;
          var anchors = row.match(
            /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi
          );
          if (!anchors || anchors.length < 2) continue;
          var lastA = anchors[anchors.length - 1],
            hrefM = lastA.match(/href="([^"]*)"/),
            titleM = lastA.match(/>([\s\S]*)<\/a>/);
          if (!hrefM || !titleM) continue;
          var url = hrefM[1];
          if (url.indexOf("http") !== 0) url = "https://1337x.to" + url;
          var title = st(titleM[1]),
            seedM = row.match(
              /<td[^>]*class="[^"]*seeds[^"]*"[^>]*>([\s\S]*?)<\/td>/i
            ),
            leechM = row.match(
              /<td[^>]*class="[^"]*leeches[^"]*"[^>]*>([\s\S]*?)<\/td>/i
            ),
            sizeM = row.match(
              /<td[^>]*class="[^"]*size[^"]*"[^>]*>([\s\S]*?)<\/td>/i
            );
          if (title)
            r.push({
              url: url,
              title: title,
              content: "",
              seed: seedM ? st(seedM[1]) : "0",
              leech: leechM ? st(leechM[1]) : "0",
              filesize: sizeM ? st(sizeM[1]) : "",
              template: "torrent.html",
            });
        }
        return r;
      },
    };

    EG_shop.adobe_stock = {
      name: "adobe_stock",
      categories: ["images"],
      shortcut: "asi",
          useRenderer: !0,
      paging: !0,
          useRenderer: !0,
      async request(query, params, sq) {
        var args = {
          k: query,
          limit: 10,
          order: "relevance",
          search_page: sq.pageno || 1,
          search_type: "pagination",
        };
        var types = [
          "photo",
          "illustration",
          "zip_vector",
          "template",
          "3d",
          "image",
          "video",
          "audio",
        ];
        for (var t = 0; t < types.length; t++)
          args["filters[content_type:" + types[t] + "]"] = 1;
        params.url =
          "https://stock.adobe.com/de/Ajax/Search?" +
          new URLSearchParams(args);
        return params;
      },
      async response(resp, sq) {
        var json, r = [];
        try {
          json = JSON.parse(resp.text);
        } catch (e) {
          return r;
        }
        if (!json.items || typeof json.items !== "object" || Array.isArray(json.items))
          return r;
        var keys = Object.keys(json.items);
        for (var i = 0; i < keys.length; i++) {
          var item = json.items[keys[i]];
          r.push({
            url: item.content_url || "",
            title: item.title || "",
            content: item.asset_type || "",
            img_src: item.content_thumb_extra_large_url || item.thumbnail_url || "",
            thumbnail_src: item.thumbnail_url || "",
            resolution:
              item.content_original_width && item.content_original_height
                ? item.content_original_width + "x" + item.content_original_height
                : "",
            img_format: item.format || "",
            author: item.author || "",
            template: "images.html",
          });
        }
        return r;
      },
    };

    EG_shop.annas_archive = {
      name: "annas_archive",
      categories: ["files", "books"],
      paging: !0,
          useRenderer: !0,
      base_url: "https://annas-archive.gl",
      async request(query, params, sq) {
        var args = {
          q: query,
          lang: "",
          content: "",
          ext: "",
          sort: "",
          page: sq.pageno || 1,
        };
        var filtered = {};
        for (var k in args) if (args[k]) filtered[k] = args[k];
        params.url =
          this.base_url + "/search?" + new URLSearchParams(filtered);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [];
        var outerDivs = allBlk(h, "div", "js-aarecord-list-outer");
        for (var di = 0; di < outerDivs.length; di++) {
          var outer = outerDivs[di];
          var flexDivs =
            outer.match(
              /<div[^>]*class="[^"]*\bflex\b[^"]*"[^>]*>([\s\S]*?)<\/div>/gi
            ) || [];
          for (var fi = 0; fi < flexDivs.length; fi++) {
            var fd = flexDivs[fi];
            var hrefM = fd.match(/<a[^>]*href="([^"]*)"/);
            if (!hrefM) continue;
            var focusA = fd.match(
              /<a[^>]*class="[^"]*js-vim-focus[^"]*"[^>]*>([\s\S]*?)<\/a>/i
            );
            if (!focusA) continue;
            var title = st(focusA[1]);
            if (!title) continue;
            var url = hrefM[1];
            if (url.indexOf("http") !== 0) url = this.base_url + url;
            var contentDiv = fd.match(
              /<div[^>]*class="relative"[^>]*>[\s\S]*?<div[^>]*class="[^"]*line-clamp[^"]*"[^>]*>([\s\S]*?)<\/div>/i
            );
            var content = contentDiv ? st(contentDiv[1]) : "";
            var imgM = fd.match(/<img[^>]*src="([^"]*)"/);
            var thumbnail = imgM ? imgM[1] : null;
            r.push({
              url: url,
              title: title,
              content: content,
              thumbnail: thumbnail,
            });
          }
        }
        return r;
      },
    };

    EG_shop.apkmirror = {
      name: "apkmirror",
      categories: ["files", "apps"],
      paging: !0,
          useRenderer: !0,
      base_url: "https://www.apkmirror.com",
      async request(query, params, sq) {
        params.url =
          this.base_url +
          "/?post_type=app_release&searchtype=apk&page=" +
          (sq.pageno || 1) +
          "&s=" +
          encodeURIComponent(query);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [];
        var appRows =
          h.match(
            /<div[^>]*class="[^"]*appRow[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi
          ) || [];
        for (var i = 0; i < appRows.length; i++) {
          var row = appRows[i];
          var linkM = row.match(
            /<h5[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/i
          );
          if (!linkM) continue;
          var url = this.base_url + linkM[1] + "#downloads";
          var title = st(linkM[2]);
          var imgM = row.match(/<img[^>]*src="([^"]*)"/);
          var thumbnail = imgM ? this.base_url + imgM[1] : "";
          if (title)
            r.push({
              url: url,
              title: title,
              content: "",
              thumbnail: thumbnail,
            });
        }
        return r;
      },
    };

    EG_shop.apple_app_store = {
      name: "apple_app_store",
      categories: ["files", "apps"],
      paging: !1,
          useRenderer: !0,
      async request(query, params, sq) {
        var explicit = sq.safesearch > 0 ? "No" : "Yes";
        params.url =
          "https://itunes.apple.com/search?" +
          new URLSearchParams({
            term: query,
            media: "software",
            explicit: explicit,
          });
        return params;
      },
      async response(resp, sq) {
        var json, r = [];
        try {
          json = JSON.parse(resp.text);
        } catch (e) {
          return r;
        }
        var results = json.results || [];
        for (var i = 0; i < results.length; i++) {
          var item = results[i];
          r.push({
            url: item.trackViewUrl || "",
            title: item.trackName || "",
            content: item.description || "",
            thumbnail: item.artworkUrl100 || "",
            publishedDate: item.currentVersionReleaseDate
              ? new Date(item.currentVersionReleaseDate)
              : null,
            author: item.sellerName || "",
          });
        }
        return r;
      },
    };

    EG_shop.ebay = {
      name: "ebay",
      categories: ["shopping"],
      paging: !0,
          useRenderer: !0,
      base_url: "https://www.ebay.com",
      async request(query, params, sq) {
        params.url =
          this.base_url +
          "/sch/i.html?_nkw=" +
          encodeURIComponent(query) +
          "&_sacat=" +
          (sq.pageno || 1);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [];
        var items = allBlk(h, "li", "s-item");
        for (var i = 0; i < items.length; i++) {
          var bl = items[i];
          var urlM = bl.match(
            /<a[^>]*class="[^"]*s-item__link[^"]*"[^>]*href="([^"]*)"/i
          );
          if (!urlM) continue;
          var url = urlM[1];
          if (url.indexOf("http") !== 0) url = this.base_url + url;
          var titleM = bl.match(
            /<h3[^>]*class="[^"]*s-item__title[^"]*"[^>]*>([\s\S]*?)<\/h3>/i
          );
          if (!titleM) continue;
          var title = st(titleM[1]);
          if (!title || title === "Shop on eBay") continue;
          var contentM = bl.match(
            /<div[^>]*span="SECONDARY_INFO"[^>]*>([\s\S]*?)<\/div>/i
          );
          var content = contentM ? st(contentM[1]) : "";
          var priceM = bl.match(
            /<span[^>]*class="[^"]*s-item__price[^"]*"[^>]*>([\s\S]*?)<\/span>/i
          );
          var price = priceM ? st(priceM[1]) : "";
          var shippingM = bl.match(
            /<span[^>]*class="[^"]*s-item__shipping[^"]*"[^>]*>([\s\S]*?)<\/span>/i
          );
          var shipping = shippingM ? st(shippingM[1]) : "";
          var locM = bl.match(
            /<span[^>]*class="[^"]*s-item__location[^"]*"[^>]*>([\s\S]*?)<\/span>/i
          );
          var location = locM ? st(locM[1]) : "";
          var thumbM = bl.match(
            /<img[^>]*class="[^"]*s-item__image-img[^"]*"[^>]*src="([^"]*)"/i
          );
          var thumbnail = thumbM ? thumbM[1] : "";
          r.push({
            url: url,
            title: title,
            content: content,
            price: price,
            shipping: shipping,
            source_country: location,
            thumbnail: thumbnail,
            template: "products.html",
          });
        }
        return r;
      },
    };

    EG_shop.kickass = {
      name: "kickass",
      categories: ["files"],
      paging: !0,
          useRenderer: !0,
      base_url: "https://kickasstorrents.to",
      async request(query, params, sq) {
        params.url =
          this.base_url +
          "/usearch/" +
          encodeURIComponent(query) +
          "/" +
          (sq.pageno || 1) +
          "/";
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [];
        var table = eb(h, "<table", "</table>");
        if (!table || table.indexOf('class="data"') === -1) return r;
        var rows = table.match(/<tr>[\s\S]*?<\/tr>/gi) || [];
        for (var i = 1; i < rows.length; i++) {
          var row = rows[i];
          if (row.indexOf("cellMainLink") === -1) continue;
          var urlM = row.match(
            /<a[^>]*class="[^"]*cellMainLink[^"]*"[^>]*href="([^"]*)"/i
          );
          if (!urlM) continue;
          var url = this.base_url + urlM[1];
          var titleM = row.match(
            /<a[^>]*class="[^"]*cellMainLink[^"]*"[^>]*>([\s\S]*?)<\/a>/i
          );
          var title = titleM ? st(titleM[1]) : "";
          if (!title) continue;
          var contentM = row.match(
            /<span[^>]*class="[^"]*font11px[^"]*lightgrey[^"]*block[^"]*"[^>]*>([\s\S]*?)<\/span>/i
          );
          var seedM = row.match(
            /<td[^>]*class="[^"]*green[^"]*"[^>]*>([\s\S]*?)<\/td>/i
          );
          var leechM = row.match(
            /<td[^>]*class="[^"]*red[^"]*"[^>]*>([\s\S]*?)<\/td>/i
          );
          var sizeM = row.match(
            /<td[^>]*class="[^"]*nobr[^"]*"[^>]*>([\s\S]*?)<\/td>/i
          );
          r.push({
            url: url,
            title: title,
            content: contentM ? st(contentM[1]) : "",
            seed: seedM ? parseInt(st(seedM[1]), 10) || 0 : 0,
            leech: leechM ? parseInt(st(leechM[1]), 10) || 0 : 0,
            filesize: sizeM ? st(sizeM[1]) : "",
            template: "torrent.html",
          });
        }
        r.sort(function (a, b) {
          return (b.seed || 0) - (a.seed || 0);
        });
        return r;
      },
    };

    EG_shop.piratebay = {
      name: "piratebay",
      categories: ["files"],
      paging: !1,
          useRenderer: !0,
      trackers: [
        "udp://tracker.coppersurfer.tk:6969/announce",
        "udp://9.rarbg.to:2920/announce",
        "udp://tracker.opentrackr.org:1337",
        "udp://tracker.internetwarriors.net:1337/announce",
        "udp://tracker.leechers-paradise.org:6969/announce",
        "udp://tracker.pirateparty.gr:6969/announce",
        "udp://tracker.cyberia.is:6969/announce",
      ],
      async request(query, params, sq) {
        params.url =
          "https://apibay.org/q.php?q=" +
          encodeURIComponent(query) +
          "&cat=0";
        return params;
      },
      async response(resp, sq) {
        var json, r = [];
        try {
          json = JSON.parse(resp.text);
        } catch (e) {
          return r;
        }
        if (!json.length || json[0].name === "No results returned") return r;
        for (var i = 0; i < json.length; i++) {
          var res = json[i];
          var magnet =
            "magnet:?xt=urn:btih:" +
            res.info_hash +
            "&dn=" +
            encodeURIComponent(res.name);
          for (var t = 0; t < this.trackers.length; t++)
            magnet += "&tr=" + encodeURIComponent(this.trackers[t]);
          var link = "https://thepiratebay.org/description.php?id=" + res.id;
          var result = {
            url: link,
            title: res.name || "",
            seed: res.seeders || 0,
            leech: res.leechers || 0,
            magnetlink: magnet,
            template: "torrent.html",
          };
          if (res.added) {
            try {
              result.publishedDate = new Date(
                parseInt(res.added, 10) * 1000
              );
            } catch (e) {}
          }
          if (res.size) {
            var sz = parseInt(res.size, 10);
            if (sz)
              result.filesize =
                (sz / (1024 * 1024 * 1024)).toFixed(2) + " GiB";
          }
          r.push(result);
        }
        r.sort(function (a, b) {
          return (b.seed || 0) - (a.seed || 0);
        });
        return r;
      },
    };

    EG_shop.solidtorrents = {
      name: "solidtorrents",
      categories: ["files"],
      paging: !0,
          useRenderer: !0,
      base_url: "https://solidtorrents.to",
      async request(query, params, sq) {
        params.url =
          this.base_url +
          "/search?" +
          new URLSearchParams({ q: query, page: sq.pageno || 1 });
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [];
        var results =
          h.match(
            /<li[^>]*class="[^"]*search-result[^"]*"[^>]*>[\s\S]*?<\/li>/gi
          ) || [];
        for (var i = 0; i < results.length; i++) {
          var li = results[i];
          var torrentM = li.match(
            /<a[^>]*class="[^"]*dl-torrent[^"]*"[^>]*href="([^"]*)"/i
          );
          var magnetM = li.match(
            /<a[^>]*class="[^"]*dl-magnet[^"]*"[^>]*href="([^"]*)"/i
          );
          if (!torrentM || !magnetM) continue;
          var titleM = li.match(
            /<h5[^>]*class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/h5>/i
          );
          if (!titleM) continue;
          var urlM = li.match(
            /<h5[^>]*class="[^"]*title[^"]*"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"/i
          );
          var categM = li.match(
            /<a[^>]*class="[^"]*category[^"]*"[^>]*>([\s\S]*?)<\/a>/i
          );
          var stats = li.match(
            /<div[^>]*class="[^"]*stats[^"]*"[^>]*>[\s\S]*?<\/div>/i
          );
          var divs = stats
            ? stats[0].match(/<div[^>]*>([\s\S]*?)<\/div>/gi)
            : [];
          var seed = divs && divs.length > 3 ? st(divs[3]) : "0";
          var leech = divs && divs.length > 2 ? st(divs[2]) : "0";
          var size = divs && divs.length > 1 ? st(divs[1]) : "";
          var dateStr = divs && divs.length > 4 ? st(divs[4]) : "";
          var result = {
            url: this.base_url + (urlM ? urlM[1] : ""),
            title: st(titleM[1]),
            seed: seed,
            leech: leech,
            filesize: size,
            magnetlink: magnetM[1],
            torrentfile: torrentM[1],
            metadata: categM ? st(categM[1]) : "",
            template: "torrent.html",
          };
          if (dateStr) {
            try {
              result.publishedDate = new Date(dateStr);
            } catch (e) {}
          }
          r.push(result);
        }
        return r;
      },
    };

    EG_shop.steam = {
      name: "steam",
      categories: ["general"],
      paging: !1,
          useRenderer: !0,
      base_url: "https://store.steampowered.com",
      async request(query, params, sq) {
        params.url =
          this.base_url +
          "/api/storesearch/?" +
          new URLSearchParams({ term: query, cc: "us", l: "en" });
        return params;
      },
      async response(resp, sq) {
        var json, r = [];
        try {
          json = JSON.parse(resp.text);
        } catch (e) {
          return r;
        }
        var items = json.items || [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          var price = item.price || {};
          var currency = price.currency || "USD";
          var finalPrice = (price.final || 0) / 100;
          var platforms = [];
          var ps = item.platforms || {};
          for (var p in ps) if (ps[p]) platforms.push(p);
          var content = "Price: " + finalPrice.toFixed(2) + " " + currency;
          if (platforms.length)
            content += " | Platforms: " + platforms.join(", ");
          r.push({
            url: this.base_url + "/app/" + item.id,
            title: item.name || "",
            content: content,
            thumbnail: item.tiny_image || "",
          });
        }
        return r;
      },
    };

    EG_shop.docker_hub = {
      name: "docker_hub",
      categories: ["it", "packages"],
      paging: !0,
          useRenderer: !0,
      base_url: "https://hub.docker.com",
      async request(query, params, sq) {
        var page = sq.pageno || 1;
        params.url =
          this.base_url +
          "/api/search/v3/catalog/search?" +
          new URLSearchParams({
            query: query,
            from: String(10 * (page - 1)),
            size: "10",
          });
        return params;
      },
      async response(resp, sq) {
        var json, r = [];
        try {
          json = JSON.parse(resp.text);
        } catch (e) {
          return r;
        }
        var results = json.results || [];
        for (var i = 0; i < results.length; i++) {
          var item = results[i];
          var source = item.source || "";
          var isOfficial = source === "store" || source === "official";
          var popInfo = [];
          var pulls = "";
          var arches = [];
          var plans = item.rate_plans || [];
          for (var pi = 0; pi < plans.length; pi++) {
            var plan = plans[pi];
            var repos = plan.repositories || [];
            if (repos.length && repos[0].pull_count)
              pulls = repos[0].pull_count + " pulls";
            var archs = plan.architectures || [];
            for (var ai = 0; ai < archs.length; ai++) {
              if (archs[ai].name) arches.push(archs[ai].name);
            }
          }
          if (pulls) popInfo.push(pulls);
          popInfo.push((item.star_count || 0) + " stars");
          var logo = item.logo_url || {};
          var thumb = logo.large || logo.small || "";
          var pDate = null;
          try {
            pDate = new Date(item.updated_at || item.created_at);
          } catch (e) {}
          r.push({
            template: "packages.html",
            url:
              this.base_url +
              (isOfficial ? "/_/" : "/r/") +
              (item.slug || ""),
            title: item.name || "",
            content: item.short_description || "",
            thumbnail: thumb,
            package_name: item.name || "",
            maintainer: (item.publisher || {}).name || "",
            publishedDate: pDate,
            popularity: popInfo.join(", "),
            tags: arches,
          });
        }
        return r;
      },
    };

    EG_shop.goodreads = {
      name: "goodreads",
      categories: ["general"],
      paging: !0,
          useRenderer: !0,
      base_url: "https://www.goodreads.com",
      async request(query, params, sq) {
        params.url =
          this.base_url +
          "/search?" +
          new URLSearchParams({ q: query, page: sq.pageno || 1 });
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [];
        var table = eb(h, "<table", "</table>");
        if (!table) return r;
        var rows = table.match(/<tr>[\s\S]*?<\/tr>/gi) || [];
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          var urlM = row.match(
            /<a[^>]*class="[^"]*bookTitle[^"]*"[^>]*href="([^"]*)"/i
          );
          if (!urlM) continue;
          var url = this.base_url + urlM[1];
          var titleM = row.match(
            /<a[^>]*class="[^"]*bookTitle[^"]*"[^>]*>([\s\S]*?)<\/a>/i
          );
          if (!titleM) continue;
          var title = st(titleM[1]);
          if (!title) continue;
          var thumbM = row.match(
            /<img[^>]*class="[^"]*bookCover[^"]*"[^>]*src="([^"]*)"/i
          );
          var thumbnail = thumbM ? thumbM[1] : "";
          var authorM = row.match(
            /<a[^>]*class="[^"]*authorName[^"]*"[^>]*>([\s\S]*?)<\/a>/i
          );
          var author = authorM ? st(authorM[1]) : "";
          var infoM = row.match(
            /<span[^>]*class="[^"]*uitext[^"]*"[^>]*>([\s\S]*?)<\/span>/i
          );
          var info = infoM ? st(infoM[1]) : "";
          r.push({
            url: url,
            title: title,
            content: info,
            thumbnail: thumbnail,
            metadata: author,
          });
        }
        return r;
      },
    };

    EG_shop.imdb = {
      name: "imdb",
      categories: ["movies"],
      paging: !1,
          useRenderer: !0,
      base_url: "https://imdb.com",
      searchCategories: {
        nm: "name",
        tt: "title",
        kw: "keyword",
        co: "company",
        ep: "episode",
      },
      async request(query, params, sq) {
        var q = query.replace(/ /g, "_").toLowerCase();
        params.url =
          "https://v2.sg.media-imdb.com/suggestion/" + q[0] + "/" + q + ".json";
        return params;
      },
      async response(resp, sq) {
        var json, r = [];
        try {
          json = JSON.parse(resp.text);
        } catch (e) {
          return r;
        }
        var entries = json.d || [];
        for (var i = 0; i < entries.length; i++) {
          var entry = entries[i];
          var eid = entry.id || "";
          var cat = this.searchCategories[eid.slice(0, 2)];
          if (!cat) continue;
          var title = entry.l || "";
          if (entry.q) title += " (" + entry.q + ")";
          var content = "";
          if (entry.rank) content += "(" + entry.rank + ") ";
          if (entry.y) content += entry.y + " - ";
          if (entry.s) content += entry.s;
          var imageUrl = null;
          if (entry.i && entry.i.imageUrl) {
            var parts = entry.i.imageUrl.split(".");
            var ext = parts.pop();
            var base = parts.join(".");
            if (base.indexOf("_V1_") === -1) base += "_V1_";
            imageUrl =
              base + "QL75_UX280_CR0,0,280,414_." + ext;
          }
          r.push({
            title: title,
            url: this.base_url + "/" + cat + "/" + eid,
            content: content,
            thumbnail: imageUrl,
          });
        }
        return r;
      },
    };

    EG_shop.rottentomatoes = {
      name: "rottentomatoes",
      categories: ["movies"],
      paging: !1,
          useRenderer: !0,
      base_url: "https://www.rottentomatoes.com",
      async request(query, params, sq) {
        params.url =
          this.base_url + "/search?search=" + encodeURIComponent(query);
        return params;
      },
      async response(resp, sq) {
        var h = resp.text,
          r = [];
        var rows =
          h.match(
            /<search-page-media-row[\s\S]*?<\/search-page-media-row>/gi
          ) || [];
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          var urlM = row.match(/<a[^>]*href="([^"]*)"/);
          if (!urlM) continue;
          var url = urlM[1];
          if (url.indexOf("http") !== 0) url = this.base_url + url;
          var titleM = row.match(
            /<a[^>]*>[\s\S]*?<img[^>]*alt="([^"]*)"/i
          );
          var title = titleM ? st(titleM[1]) : "";
          if (!title) continue;
          var thumbM = row.match(/<img[^>]*src="([^"]*)"/i);
          var thumbnail = thumbM ? thumbM[1] : "";
          var year = row.match(/releaseyear="([^"]*)"/i);
          var score = row.match(/tomatometerscore="([^"]*)"/i);
          var cast = row.match(/cast="([^"]*)"/i);
          var contentParts = [];
          if (year && year[1]) contentParts.push("From " + year[1]);
          if (score && score[1]) contentParts.push("Score: " + score[1]);
          if (cast && cast[1]) contentParts.push("Starring " + cast[1]);
          r.push({
            url: url,
            title: title,
            content: contentParts.join(", "),
            thumbnail: thumbnail,
          });
        }
        return r;
      },
    };

    EG_shop.openlibrary = {
      name: "openlibrary",
      categories: ["general", "books"],
      paging: !0,
          useRenderer: !0,
      base_url: "https://openlibrary.org",
      search_api: "https://openlibrary.org/search.json",
      async request(query, params, sq) {
        params.url =
          this.search_api +
          "?" +
          new URLSearchParams({
            q: query,
            page: sq.pageno || 1,
            limit: "10",
            fields: "*",
          });
        return params;
      },
      async response(resp, sq) {
        var json, r = [];
        try {
          json = JSON.parse(resp.text);
        } catch (e) {
          return r;
        }
        var docs = json.docs || [];
        for (var i = 0; i < docs.length; i++) {
          var item = docs[i];
          var cover = "";
          if (item.lending_identifier_s)
            cover =
              "https://archive.org/services/img/" + item.lending_identifier_s;
          var published = null;
          if (item.publish_date && item.publish_date.length) {
            try {
              published = new Date(item.publish_date[0]);
            } catch (e) {}
          }
          if (!published && item.first_publish_year) {
            try {
              published = new Date(String(item.first_publish_year));
            } catch (e) {}
          }
          var firstSentence = item.first_sentence || [];
          var content = firstSentence.join(" / ");
          r.push({
            url: this.base_url + "/" + item.key,
            title: item.title || "",
            content: content,
            isbn: (item.isbn || []).slice(0, 5),
            authors: item.author_name || [],
            thumbnail: cover,
            publishedDate: published,
            tags: (item.subject || [])
              .slice(0, 10)
              .concat((item.place || []).slice(0, 10)),
          });
        }
        return r;
      },
    };
  });
