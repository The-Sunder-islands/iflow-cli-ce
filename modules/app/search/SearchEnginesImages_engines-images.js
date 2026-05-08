var EG_images = {},
  eG_images = j(() => {
    "use strict";

    function eb(s, start, end) {
      let i = s.indexOf(start);
      if (i === -1) return null;
      i += start.length;
      let j = s.indexOf(end, i);
      return j === -1 ? null : s.slice(i, j);
    }

    function st(s) {
      return s ? s.replace(/<[^>]*>/g, "").trim() : "";
    }

    // ========== 1. Flickr (no API) ==========
    EG_images.flickrNoapi = {
      name: "flickrNoapi",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        let url =
          "https://www.flickr.com/search?text=" +
          encodeURIComponent(query) +
          "&page=" +
          (sq.pageno || 1);
        if (sq.timeRange) {
          let now = Math.floor(Date.now() / 1000);
          let tr = { day: 86400, week: 604800, month: 2419200, year: 31536000 };
          let offset = tr[sq.timeRange] || 0;
          url += "&min_upload_date=" + now + "&max_upload_date=" + (now - offset);
        }
        params.url = url;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let match = resp.text.match(/^\s*modelExport:\s*(\{.*\}),$/m);
        if (!match) return results;
        let modelExport;
        try { modelExport = JSON.parse(match[1]); } catch (e) { return results; }
        if (!modelExport.legend || !modelExport.legend[0]) return results;
        let imageSizes = ["o", "k", "h", "b", "c", "z", "m", "n", "t", "q", "s"];
        for (let index of modelExport.legend) {
          if (index.length !== 8) continue;
          let photo = modelExport.main[index[0]][parseInt(index[1])][index[2]][index[3]][index[4]][index[5]][parseInt(index[6])][index[7]];
          let author = photo.realname || "";
          let source = photo.username ? photo.username + " @ Flickr" : "";
          let title = photo.title || "";
          let content = photo.description ? st(photo.description) : "";
          let sizeData = null;
          for (let size of imageSizes) {
            if (photo.sizes && photo.sizes.data && photo.sizes.data[size]) {
              sizeData = photo.sizes.data[size].data;
              break;
            }
          }
          if (!sizeData) continue;
          let imgSrc = sizeData.url;
          let resolution = (sizeData.width || "") + " x " + (sizeData.height || "");
          let thumbnailSrc;
          if (photo.sizes && photo.sizes.data && photo.sizes.data.n)
            thumbnailSrc = photo.sizes.data.n.data.url;
          else if (photo.sizes && photo.sizes.data && photo.sizes.data.z)
            thumbnailSrc = photo.sizes.data.z.data.url;
          else
            thumbnailSrc = imgSrc;
          let url = photo.ownerNsid
            ? "https://www.flickr.com/photos/" + photo.ownerNsid + "/" + photo.id
            : imgSrc;
          results.push({
            url: url,
            imgSrc: imgSrc,
            thumbnail: thumbnailSrc,
            source: source,
            resolution: resolution,
            title: title,
            content: content,
            author: author,
          });
        }
        return results;
      },
    };

    // ========== 2. Openverse ==========
    EG_images.openverse = {
      name: "openverse",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url =
          "https://api.openverse.org/v1/images/?page=" +
          (sq.pageno || 1) +
          "&page_size=20&format=json&q=" +
          encodeURIComponent(query);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          for (let result of j.results || []) {
            results.push({
              url: result.foreign_landing_url,
              title: result.title,
              imgSrc: result.url,
            });
          }
        } catch (e) {}
        return results;
      },
    };

    // ========== 3. Pexels ==========
    EG_images.pexels = {
      name: "pexels",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      _secretKey: null,
      async request(query, params, sq) {
        let args = { query: query, page: sq.pageno || 1, per_page: 20 };
        if (sq.timeRange) {
          let tr = { day: "last_24_hours", week: "last_week", month: "last_month", year: "last_year" };
          args.date_from = tr[sq.timeRange];
        }
        let qs = Object.entries(args)
          .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
          .join("&");
        params.url = "https://www.pexels.com/en-us/api/v3/search/photos?" + qs;
        if (!this._secretKey) {
          this._secretKey = "H2jk9uKnhRmL6WPwh89zBezWvr";
        }
        params.headers["secret-key"] = this._secretKey;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          for (let result of j.data || []) {
            let attrs = result.attributes;
            results.push({
              url: "https://www.pexels.com/photo/" + attrs.slug + "-" + attrs.id + "/",
              title: attrs.title,
              content: attrs.description,
              thumbnail: attrs.image.small,
              imgSrc: attrs.image.download_link,
              resolution: (attrs.width || "") + "x" + (attrs.height || ""),
              author: attrs.user.username,
            });
          }
        } catch (e) {}
        return results;
      },
    };

    // ========== 4. Pixabay ==========
    EG_images.pixabay = {
      name: "pixabay",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        let args = { pagi: sq.pageno || 1 };
        if (sq.timeRange) {
          let tr = { day: "1d", week: "1w", month: "1m", year: "1y" };
          args.date = tr[sq.timeRange];
        }
        let qs = Object.entries(args)
          .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
          .join("&");
        params.url =
          "https://pixabay.com/images/search/" +
          encodeURIComponent(query) +
          "/?" +
          qs;
        params.headers["User-Agent"] = "Mozilla/5.0 (X11; Linux x86_64) Pixabay";
        params.headers["Accept"] = "application/json";
        params.headers["x-bootstrap-cache-miss"] = "1";
        params.headers["x-fetch-bootstrap"] = "1";
        params.cookies = params.cookies || {};
        params.cookies.g_rated = sq.safesearch ? "1" : "off";
        return params;
      },
      async response(resp, sq) {
        let results = [];
        if (resp.status === 302) return results;
        try {
          let j = resp.json || JSON.parse(resp.text);
          let items = j.page?.results || [];
          for (let result of items) {
            if (
              result.mediaType === "photo" ||
              result.mediaType === "illustration" ||
              result.mediaType === "vector"
            ) {
              let sources = Object.values(result.sources || {});
              results.push({
                url: "https://pixabay.com" + result.href,
                thumbnail: sources[0] || null,
                imgSrc: sources[sources.length - 1] || null,
                title: result.name || "",
                content: result.description || "",
              });
            }
          }
        } catch (e) {}
        return results;
      },
    };

    // ========== 5. Pixiv ==========
    EG_images.pixiv = {
      name: "pixiv",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        let qp = {
          word: query,
          order: "date_d",
          mode: "all",
          p: sq.pageno || 1,
          s_mode: "s_tag_full",
          type: "illust_and_ugoira",
          lang: "en",
        };
        let qs = Object.entries(qp)
          .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
          .join("&");
        params.url =
          "https://www.pixiv.net/ajax/search/illustrations/" +
          encodeURIComponent(query) +
          "?" +
          qs;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          let items = j.body?.illust?.data || [];
          for (let item of items) {
            let imageUrl = item.url;
            let proxyFullImageUrl = imageUrl
              .replace("/c/250x250_80_a2/", "/")
              .replace("_square1200.jpg", "_master1200.jpg")
              .replace("custom-thumb", "img-master")
              .replace("_custom1200.jpg", "_master1200.jpg");
            results.push({
              title: item.title,
              url: proxyFullImageUrl,
              content: item.alt,
              author: (item.userName || "") + " (ID: " + (item.userId || "") + ")",
              imgSrc: proxyFullImageUrl,
              thumbnail: imageUrl,
              source: "pixiv.net",
            });
          }
        } catch (e) {}
        return results;
      },
    };

    // ========== 6. Wallhaven ==========
    EG_images.wallhaven = {
      name: "wallhaven",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        let purityMap = { 0: "111", 1: "110", 2: "100" };
        let args = { q: query, page: sq.pageno || 1, purity: purityMap[sq.safesearch] || "111" };
        let qs = Object.entries(args)
          .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
          .join("&");
        params.url = "https://wallhaven.cc/api/v1/search?" + qs;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          for (let result of j.data || []) {
            results.push({
              title: "",
              content: (result.category || "") + " / " + (result.purity || ""),
              url: result.url,
              imgSrc: result.path,
              thumbnail: result.thumbs?.small,
              resolution: (result.resolution || "").replace("x", " x "),
              imgFormat: result.file_type,
              filesize: result.file_size,
              publishedDate: result.created_at,
            });
          }
        } catch (e) {}
        return results;
      },
    };

    // ========== 7. OpenClipart ==========
    EG_images.openclipart = {
      name: "openclipart",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url =
          "https://openclipart.org/search/?query=" +
          encodeURIComponent(query) +
          "&p=" +
          (sq.pageno || 1);
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let artworkRe =
          /<div[^>]*class="[^"]*artwork[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;
        let am;
        while ((am = artworkRe.exec(resp.text)) !== null) {
          let div = am[1];
          let aMatch = div.match(/<a\s+href="([^"]*)"/);
          let imgMatch = div.match(/<img[^>]+src="([^"]*)"[^>]*alt="([^"]*)"/);
          if (!aMatch || !imgMatch) continue;
          results.push({
            url: "https://openclipart.org" + aMatch[1],
            title: imgMatch[2],
            imgSrc: "https://openclipart.org" + imgMatch[1],
          });
        }
        return results;
      },
    };

    // ========== 8. SvgRepo ==========
    EG_images.svgrepo = {
      name: "svgrepo",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url =
          "https://www.svgrepo.com/vectors/" +
          encodeURIComponent(query) +
          "/" +
          (sq.pageno || 1) +
          "/";
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let itemRe =
          /<div[^>]*class="[^"]*style_nodeListing__7Nmro[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i;
        let outerMatch = resp.text.match(itemRe);
        if (!outerMatch) return results;
        let inner = outerMatch[1];
        let divRe = /<div[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;
        let dm;
        while ((dm = divRe.exec(inner)) !== null) {
          let itemHtml = dm[1];
          let urlMatch = itemHtml.match(/<a\s+href="([^"]*)"/);
          let titleMatch = itemHtml.match(/<a[^>]*title="([^"]*)"/);
          let imgMatch = itemHtml.match(/<img[^>]*src="([^"]*)"/);
          if (!urlMatch || !imgMatch) continue;
          let title = titleMatch
            ? titleMatch[1].replace(" SVG File", "").replace("Show ", "")
            : "";
          results.push({
            url: "https://www.svgrepo.com" + urlMatch[1],
            title: title,
            imgSrc: imgMatch[1],
          });
        }
        return results;
      },
    };

    // ========== 9. Imgur ==========
    EG_images.imgur = {
      name: "imgur",
      categories: ["images"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        let timeRange = sq.timeRange || "all";
        let args = { q: query, qs: "thumbs", p: (sq.pageno || 1) - 1 };
        let qs = Object.entries(args)
          .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
          .join("&");
        params.url = "https://imgur.com/search/score/" + timeRange + "?" + qs;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        let cardRe =
          /<div[^>]*class="[^"]*post[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g;
        let cm;
        while ((cm = cardRe.exec(resp.text)) !== null) {
          let div = cm[1];
          let hrefMatch = div.match(/<a\s+href="([^"]*)"/);
          let imgMatch = div.match(/<img[^>]+src="([^"]*)"[^>]*alt="([^"]*)"/);
          if (!hrefMatch || !imgMatch) continue;
          let thumbnailSrc = imgMatch[1];
          if (thumbnailSrc.length < 25) continue;
          let imgSrc = thumbnailSrc.replace("b.", ".");
          results.push({
            url: "https://imgur.com" + hrefMatch[1],
            title: imgMatch[2],
            imgSrc: imgSrc,
            thumbnail: thumbnailSrc,
          });
        }
        return results;
      },
    };

    // ========== 10. OpenStreetMap (Nominatim) ==========
    EG_images.openstreetmap = {
      name: "openstreetmap",
      categories: ["map"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      async request(query, params, sq) {
        params.url =
          "https://nominatim.openstreetmap.org/search?q=" +
          encodeURIComponent(query) +
          "&polygon_geojson=1&format=jsonv2&addressdetails=1&extratags=1&dedupe=1";
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          for (let result of j) {
            let osmType = result.osm_type || result.type;
            let url = result.osm_id
              ? "https://openstreetmap.org/" + osmType + "/" + result.osm_id
              : "https://www.openstreetmap.org/?mlat=" +
                result.lat +
                "&mlon=" +
                result.lon +
                "&zoom=12&layers=M";
            let geojson = result.geojson || null;
            if (!geojson && osmType === "node") {
              geojson = {
                type: "Point",
                coordinates: [parseFloat(result.lon), parseFloat(result.lat)],
              };
            }
            let addressRaw = result.address || {};
            let addressName = null;
            let address = {};
            if (
              result.category === "amenity" ||
              result.category === "shop" ||
              result.category === "tourism" ||
              result.category === "leisure"
            ) {
              addressName = addressRaw.address29 || addressRaw[result.category];
            } else if (result.type && addressRaw[result.type]) {
              addressName = addressRaw[result.type];
            }
            if (addressName) {
              address = {
                name: addressName,
                house_number: addressRaw.house_number,
                road: addressRaw.road,
                locality: addressRaw.city || addressRaw.town || addressRaw.village,
                postcode: addressRaw.postcode,
                country: addressRaw.country,
                country_code: addressRaw.country_code,
              };
            }
            let title = addressName || result.display_name;
            if (!title) continue;
            results.push({
              title: title,
              url: url,
              content: "",
              longitude: result.lon,
              latitude: result.lat,
              boundingbox: result.boundingbox,
              geojson: geojson,
              address: address,
              osm: result.osm_id
                ? { type: osmType, id: result.osm_id }
                : {},
              type: result.category,
              type_icon: result.icon,
            });
          }
        } catch (e) {}
        return results;
      },
    };

    // ========== 11. Photon ==========
    EG_images.photon = {
      name: "photon",
      categories: ["map"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      async request(query, params, sq) {
        let url =
          "https://photon.komoot.io/api/?q=" +
          encodeURIComponent(query) +
          "&limit=10";
        if (sq.language && sq.language !== "all") {
          let lang = sq.language.split("_")[0];
          if (["de", "en", "fr", "it"].includes(lang))
            url += "&lang=" + lang;
        }
        params.url = url;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          for (let feature of j.features || []) {
            let props = feature.properties || {};
            if (!props) continue;
            let osmType =
              props.osm_type === "N"
                ? "node"
                : props.osm_type === "W"
                  ? "way"
                  : props.osm_type === "R"
                    ? "relation"
                    : null;
            if (!osmType) continue;
            let url =
              "https://openstreetmap.org/" + osmType + "/" + props.osm_id;
            let geojson = feature.geometry;
            let boundingbox;
            if (props.extent) {
              boundingbox = [
                props.extent[3],
                props.extent[1],
                props.extent[0],
                props.extent[2],
              ];
            } else if (geojson && geojson.coordinates) {
              boundingbox = [
                geojson.coordinates[1],
                geojson.coordinates[1],
                geojson.coordinates[0],
                geojson.coordinates[0],
              ];
            }
            let address = null;
            if (
              props.osm_key === "amenity" ||
              props.osm_key === "shop" ||
              props.osm_key === "tourism" ||
              props.osm_key === "leisure"
            ) {
              address = { name: props.name };
            }
            if (address && address.name) {
              address = {
                name: props.name,
                house_number: props.housenumber,
                road: props.street,
                locality: props.city || props.town || props.village,
                postcode: props.postcode,
                country: props.country,
              };
            } else {
              address = null;
            }
            results.push({
              title: props.name,
              content: "",
              longitude: geojson?.coordinates?.[0],
              latitude: geojson?.coordinates?.[1],
              boundingbox: boundingbox,
              geojson: geojson,
              address: address,
              osm: { type: osmType, id: props.osm_id },
              url: url,
            });
          }
        } catch (e) {}
        return results;
      },
    };

    // ========== 12. Apple Maps ==========
    EG_images.appleMaps = {
      name: "appleMaps",
      categories: ["map"],
      shortcut: null,
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      _token: null,
      _tokenExpiry: 0,
      async _obtainToken() {
        let now = Math.floor(Date.now() / 1000);
        if (now < this._tokenExpiry && this._token) return;
        try {
          let tr = await fetch(
            "https://duckduckgo.com/local.js?get_mk_token=1"
          );
          let tokenResponse = await tr.text();
          let ar = await fetch(
            "https://cdn.apple-mapkit.com/ma/bootstrap?apiVersion=2&mkjsVersion=5.72.53&poi=1",
            { headers: { Authorization: "Bearer " + tokenResponse } }
          );
          let at = await ar.json();
          this._token = at.authInfo.access_token;
          this._tokenExpiry = now + 1800;
        } catch (e) {}
      },
      async request(query, params, sq) {
        await this._obtainToken();
        params.url =
          "https://api.apple-mapkit.com/v1/search?q=" +
          encodeURIComponent(query) +
          "&lang=" +
          (sq.language || "en") +
          "&mkjsVersion=5.72.53";
        if (this._token)
          params.headers["Authorization"] = "Bearer " + this._token;
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          for (let result of j.results || []) {
            let boundingbox = null;
            if (result.displayMapRegion) {
              let box = result.displayMapRegion;
              boundingbox = [
                box.southLat,
                box.northLat,
                box.westLng,
                box.eastLng,
              ];
            }
            let links = [];
            if (result.telephone) {
              links.push({
                label: "Phone",
                url: "tel:" + result.telephone,
                url_label: result.telephone,
              });
            }
            if (result.urls && result.urls.length > 0) {
              links.push({
                label: "Website",
                url: result.urls[0],
                url_label: result.urls[0],
              });
            }
            results.push({
              type: result.poiCategory,
              title: result.name,
              links: links,
              latitude: result.center?.lat,
              longitude: result.center?.lng,
              url: result.placecardUrl,
              boundingbox: boundingbox,
              geojson: {
                type: "Point",
                coordinates: [result.center?.lng, result.center?.lat],
              },
              address: {
                name: result.name,
                house_number: result.subThoroughfare,
                road: result.thoroughfare,
                locality: result.locality,
                postcode: result.postCode,
                country: result.country,
              },
            });
          }
        } catch (e) {}
        return results;
      },
    };

    // ========== 13. TinEye ==========
    EG_images.tineye = {
      name: "tineye",
      categories: ["general"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, sq) {
        let urlQuery = query;
        if (sq.search_urls) {
          if (sq.search_urls["data:image"])
            urlQuery = sq.search_urls["data:image"];
          else if (sq.search_urls["http"])
            urlQuery = sq.search_urls["http"];
        }
        params.url =
          "https://tineye.com/api/v1/result_json/?page=" +
          (sq.pageno || 1) +
          "&url=" +
          encodeURIComponent(urlQuery);
        params.headers["Connection"] = "keep-alive";
        params.headers["Host"] = "tineye.com";
        params.headers["DNT"] = "1";
        params.headers["TE"] = "trailers";
        return params;
      },
      async response(resp, sq) {
        let results = [];
        try {
          let j = resp.json || JSON.parse(resp.text);
          if (resp.status === 400 || resp.status === 422) {
            return results;
          }
          for (let match of j.matches || []) {
            let backlinks = match.backlinks || [];
            if (backlinks.length === 0) continue;
            let bl = backlinks[0];
            let crawlDate = bl.crawl_date ? new Date(bl.crawl_date) : null;
            results.push({
              url: bl.backlink,
              thumbnail: match.image_url,
              source: bl.url,
              title: bl.image_name || "",
              imgSrc: bl.url,
              imgFormat: match.format,
              width: match.width,
              height: match.height,
              publishedDate: crawlDate,
            });
          }
          let number_of_results = j.num_matches;
          if (number_of_results) {
            results.number_of_results = number_of_results;
          }
        } catch (e) {}
        return results;
      },
    };
  });
