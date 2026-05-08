var EG_b7 = {},
  eG_b7 = j(() => {
    "use strict";
    function eb(s, start, end) { let i=s.indexOf(start);if(i===-1)return null;i+=start.length;let j=s.indexOf(end,i);return j===-1?null:s.slice(i,j); }
    function st(s) { return s?s.replace(/<[^>]*>/g,'').replace(/&[^;]+;/g,' ').replace(/\s+/g,' ').trim():''; }
    function _extractAll(re, str) { let m, r = []; re.lastIndex = 0; while ((m = re.exec(str)) !== null) r.push(m[1]); return r; }
    function _extractFirst(re, str) { re.lastIndex = 0; let m = re.exec(str); return m ? m[1] : null; }
    function _htmlToText(v) { return v ? String(v).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").trim() : ""; }

    EG_b7.openalex = { name:"openalex", categories:["science","scientific publications"], shortcut:"oa", paging:true,
      async request(query,params,sq){
        let args = { search: query, page: (sq&&sq.pageno)||1, "per-page": 10, sort: "relevance_score:desc" };
        let lang = sq&&sq.language;
        let filters = [];
        if (typeof lang === "string" && lang !== "all") {
          let iso2 = lang.split("-")[0].split("_")[0];
          if (iso2.length === 2) filters.push("language:" + iso2);
        }
        if (filters.length) args.filter = filters.join(",");
        params.url = "https://api.openalex.org/works?" + new URLSearchParams(args).toString();
        return params;
      },
      async response(resp){
        let results = [];
        let data = resp.json;
        if (!data || !data.results) return results;
        for (let item of data.results) {
          let primaryLocation = item.primary_location || {};
          let openAccess = item.open_access || {};
          let landingPageUrl = primaryLocation.landing_page_url || "";
          let workUrl = item.id || "";
          let url = landingPageUrl || workUrl;
          let htmlUrl = landingPageUrl;
          let pdfUrl = primaryLocation.pdf_url || openAccess.oa_url || "";
          let title = item.title || "";
          let content = _reconstructAbstract(item.abstract_inverted_index) || "";
          let authors = [];
          for (let auth of (item.authorships || [])) {
            let displayName = (auth.author || {}).display_name;
            if (typeof displayName === "string" && displayName) authors.push(displayName);
          }
          let hostVenue = item.host_venue || {};
          let biblio = item.biblio || {};
          let journal = hostVenue.display_name || "";
          let publisher = hostVenue.publisher || "";
          let pages = _stringifyPages(biblio);
          let volume = biblio.volume || "";
          let number = biblio.issue || "";
          let publishedDate = item.publication_date ? new Date(item.publication_date) : null;
          if (publishedDate && isNaN(publishedDate.getTime())) publishedDate = null;
          let doi = "";
          if (item.doi) doi = item.doi.replace("https://doi.org/", "");
          let tags = [];
          for (let c of (item.concepts || [])) {
            let name = (c || {}).display_name;
            if (typeof name === "string" && name) tags.push(name);
          }
          let comments = "";
          if (typeof item.cited_by_count === "number") comments = item.cited_by_count + " citations";
          results.push({ url, title, content, journal, publisher, doi, tags, authors, pdf_url: pdfUrl, html_url: htmlUrl, publishedDate, pages, volume, number, type: item.type, comments });
        }
        return results;
        function _reconstructAbstract(invertedIndex) {
          if (!invertedIndex) return null;
          let posToToken = {}, maxIdx = -1;
          for (let [token, positions] of Object.entries(invertedIndex)) {
            for (let pos of positions) { posToToken[pos] = token; maxIdx = Math.max(maxIdx, pos); }
          }
          if (maxIdx < 0) return null;
          let ordered = [];
          for (let i = 0; i <= maxIdx; i++) { if (posToToken[i]) ordered.push(posToToken[i]); }
          return ordered.join(" ") || null;
        }
        function _stringifyPages(b) {
          let fp = b.first_page, lp = b.last_page;
          if (fp && lp) return fp + "-" + lp;
          if (fp) return String(fp);
          if (lp) return String(lp);
          return "";
        }
      },
    };

    EG_b7.opensemantic = { name:"opensemantic", categories:["general"], shortcut:null, paging:false,
      async request(query,params){
        params.url = "http://localhost:8983/solr/opensemanticsearch/query?q=" + encodeURIComponent(query);
        return params;
      },
      async response(resp){
        let results = [];
        let data = resp.json;
        if (!data || !data.response || !data.response.docs) return results;
        for (let doc of data.response.docs) {
          let item = { url: doc.id, title: doc.title_txt_txt_en || "" };
          if (doc.content_txt && doc.content_txt.length) item.content = doc.content_txt[0];
          if (doc.file_modified_dt) item.publishedDate = new Date(doc.file_modified_dt);
          results.push(item);
        }
        return results;
      },
    };

    EG_b7.pdbe = { name:"pdbe", categories:["science"], shortcut:null, paging:false,
      async request(query,params){
        params.url = "https://www.ebi.ac.uk/pdbe/search/pdb/select?";
        params.method = "POST";
        params.data = "q=" + encodeURIComponent(query) + "&wt=json";
        params.headers["Content-Type"] = "application/x-www-form-urlencoded";
        return params;
      },
      async response(resp){
        let results = [];
        let data = resp.json;
        if (!data || !data.response || !data.response.docs) return results;
        let unpublished = ["HPUB","HOLD","PROC","WAIT","AUTH","AUCO","REPL","POLC","REFI","TRSF","WDRN"];
        for (let result of data.response.docs) {
          if (unpublished.includes(result.status)) continue;
          let title, content, thumbnail;
          if (result.status === "OBS") {
            let supersededBy = result.superseded_by;
            if (!supersededBy) continue;
            let supersededUrl = "https://www.ebi.ac.uk/pdbe/entry/pdb/" + supersededBy;
            title = result.title + " (OBSOLETE)";
            content = "This entry has been superseded by: " + supersededUrl + " (" + supersededBy + ")";
            thumbnail = null;
          } else {
            let tmpl = "{title} - {authors} {journal} ({volume}) {page} ({year})";
            try {
              if (result.journal) {
                content = tmpl.replace("{title}", result.citation_title||"").replace("{authors}", (result.entry_author_list||[])[0]||"").replace("{journal}", result.journal).replace("{volume}", result.journal_volume||"").replace("{page}", result.journal_page||"").replace("{year}", result.citation_year||"");
              } else {
                content = tmpl.replace("{title}", result.citation_title||"").replace("{authors}", (result.entry_author_list||[])[0]||"").replace("{journal}", "").replace("{volume}", "").replace("{page}", "").replace("{year}", result.release_year||"");
              }
              thumbnail = "https://www.ebi.ac.uk/pdbe/static/entry/" + result.pdb_id + "_deposited_chain_front_image-200x200.png";
            } catch(e) { content = ""; thumbnail = null; }
            title = result.title;
          }
          results.push({ url: "https://www.ebi.ac.uk/pdbe/entry/pdb/" + result.pdb_id, title, content, thumbnail });
        }
        return results;
      },
    };

    EG_b7.pinterest = { name:"pinterest", categories:["images"], shortcut:null, paging:true,
      async request(query,params,sq){
        let options = { query: query, bookmarks: [""] };
        let data = { options, context: {} };
        params.url = "https://www.pinterest.com/resource/BaseSearchResource/get/?data=" + encodeURIComponent(JSON.stringify(data));
        params.headers["X-Pinterest-AppState"] = "active";
        params.headers["X-Pinterest-Source-Url"] = "/ideas/";
        params.headers["X-Pinterest-PWS-Handler"] = "www/ideas.js";
        return params;
      },
      async response(resp){
        let results = [];
        let j = resp.json;
        if (!j || !j.resource_response || !j.resource_response.data || !j.resource_response.data.results) return results;
        for (let result of j.resource_response.data.results) {
          if (result.type === "story") continue;
          let mainImage = result.images && result.images.orig;
          if (!mainImage) continue;
          results.push({
            template:"images.html",
            url: result.link || ("https://www.pinterest.com/pin/" + result.id + "/"),
            title: result.title || result.grid_title || "",
            content: (result.rich_summary||{}).display_description || "",
            img_src: mainImage.url,
            thumbnail_src: result.images["236x"] ? result.images["236x"].url : mainImage.url,
            source: (result.rich_summary||{}).site_name || "",
            resolution: mainImage.width + "x" + mainImage.height,
            author: (result.pinner ? (result.pinner.full_name||"") + " (" + result.pinner.username + ")" : ""),
          });
        }
        return results;
      },
    };

    EG_b7.podcastindex = { name:"podcastindex", categories:["general"], shortcut:null, paging:false,
      async request(query,params){
        params.url = "https://podcastindex.org/api/search/byterm?q=" + encodeURIComponent(query);
        return params;
      },
      async response(resp){
        let results = [];
        let j = resp.json;
        if (!j || !j.feeds) return results;
        for (let result of j.feeds) {
          results.push({
            url: result.link,
            title: result.title,
            content: result.description,
            thumbnail: result.image,
            publishedDate: result.newestItemPubdate ? new Date(result.newestItemPubdate * 1000) : null,
            metadata: (result.author||"") + ", " + (result.episodeCount||0) + " episodes",
          });
        }
        return results;
      },
    };

    EG_b7.public_domain_image_archive = { name:"public_domain_image_archive", categories:["images"], shortcut:null, paging:true,
      _cachedApiUrl: null,
      async request(query,params,sq){
        let url = await _getApiUrl.call(this);
        if (!url) { params.url = null; return params; }
        params.url = url;
        params.method = "POST";
        params.headers["Content-Type"] = "application/json";
        params.data = JSON.stringify({ page: ((sq&&sq.pageno)||1) - 1, query: query, hitsPerPage: 20, indexName: "prod_all-images" });
        params.raiseForStatus = false;
        return params;
      },
      async response(resp){
        let results = [];
        if (resp.status === 403 || resp.status !== 200) return results;
        let j = resp.json;
        if (!j || !j.results || !j.results[0] || !j.results[0].hits) return results;
        for (let result of j.results[0].hits) {
          let content = [];
          if (result.themes) content.push("Themes: " + result.themes);
          if (result.encompassingWork) content.push("Encompassing work: " + result.encompassingWork);
          let baseImageUrl = (result.thumbnail || "").split("?")[0];
          results.push({
            template:"images.html",
            url: _cleanUrl("https://pdimagearchive.org/images/" + result.objectID),
            img_src: _cleanUrl(baseImageUrl),
            thumbnail_src: _cleanUrl(baseImageUrl + "?fit=max&h=360&w=360"),
            title: ((result.title||"").trim()) + " by " + (result.artist||"") + " " + (result.displayYear||""),
            content: content.join("\n"),
          });
        }
        return results;
        function _cleanUrl(url) {
          try {
            let u = new URL(url);
            let p = new URLSearchParams(u.search);
            p.delete("ixid"); p.delete("s");
            u.search = p.toString();
            return u.toString();
          } catch(e) { return url; }
        }
      },
    };
    async function _getApiUrl() {
      if (EG_b7.public_domain_image_archive._cachedApiUrl) return EG_b7.public_domain_image_archive._cachedApiUrl;
      try {
        let r1 = await fetch("https://pdimagearchive.org/search/?q=", { signal: AbortSignal.timeout(5000) });
        if (r1.status !== 200) return null;
        let html = await r1.text();
        let configPart = _extractFirst(/_astro\/InfiniteSearch\.([\s\S]*?)\.js/, html);
        if (!configPart) return null;
        let r2 = await fetch("https://pdimagearchive.org/_astro/InfiniteSearch." + configPart + ".js", { signal: AbortSignal.timeout(5000) });
        if (r2.status !== 200) return null;
        let js = await r2.text();
        let apiUrl = _extractFirst(/const r="([^"]+)"/, js);
        if (apiUrl) EG_b7.public_domain_image_archive._cachedApiUrl = apiUrl;
        return apiUrl;
      } catch(e) { return null; }
    }

    EG_b7.pubmed = { name:"pubmed", categories:["science","scientific publications"], shortcut:"pub", paging:true,
      async request(query,params,sq){
        let pageno = (sq&&sq.pageno)||1;
        let searchArgs = new URLSearchParams({ db: "pubmed", term: query, retstart: (pageno-1)*10, hits: 10 });
        let esearchResp = await fetch("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?" + searchArgs.toString(), { signal: AbortSignal.timeout(5000) });
        let esearchText = await esearchResp.text();
        let pmids = _extractAll(/<Id>([^<]+)<\/Id>/g, esearchText);
        if (pmids.length === 0) { params.url = null; return params; }
        let efetchArgs = new URLSearchParams({ db: "pubmed", retmode: "xml", id: pmids.join(",") });
        params.url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?" + efetchArgs.toString();
        params.raiseForStatus = false;
        return params;
      },
      async response(resp){
        let results = [];
        let articles = _extractAll(/<PubmedArticle>([\s\S]*?)<\/PubmedArticle>/g, resp.text);
        for (let articleXml of articles) {
          let title = _htmlToText(_extractFirst(/<ArticleTitle>([\s\S]*?)<\/ArticleTitle>/, articleXml) || "");
          let pmid = _extractFirst(/<PMID[^>]*>([^<]+)<\/PMID>/, articleXml) || "";
          if (!pmid) continue;
          let url = "https://www.ncbi.nlm.nih.gov/pubmed/" + pmid;
          let abstractParts = _extractAll(/<AbstractText[^>]*>([\s\S]*?)<\/AbstractText>/g, articleXml);
          let content = abstractParts.map(p => _htmlToText(p)).join(" ").trim();
          let doi = _extractFirst(/<ELocationID[^>]*EIdType=['"]doi['"][^>]*>([^<]+)<\/ELocationID>/, articleXml) || "";
          let journalXml = _extractFirst(/<Journal>([\s\S]*?)<\/Journal>/, articleXml);
          let journal = journalXml ? _htmlToText(_extractFirst(/<Title>([\s\S]*?)<\/Title>/, journalXml) || "") : "";
          let issn = journalXml ? (_extractFirst(/<ISSN[^>]*>([^<]+)<\/ISSN>/, journalXml) || "") : "";
          let authors = [];
          let authorMatches = _extractAll(/<Author>([\s\S]*?)<\/Author>/g, articleXml);
          for (let aXml of authorMatches) {
            let fn = _extractFirst(/<ForeName>([^<]*)<\/ForeName>/, aXml) || "";
            let ln = _extractFirst(/<LastName>([^<]*)<\/LastName>/, aXml) || "";
            let full = (fn + " " + ln).trim();
            if (full) authors.push(full);
          }
          let acceptedXml = _extractFirst(/<PubMedPubDate[^>]*PubStatus=['"]accepted['"][^>]*>([\s\S]*?)<\/PubMedPubDate>/, articleXml);
          let pubDate = null;
          if (acceptedXml) {
            let y = parseInt(_extractFirst(/<Year>([^<]+)<\/Year>/, acceptedXml));
            let m = parseInt(_extractFirst(/<Month>([^<]+)<\/Month>/, acceptedXml));
            let d = parseInt(_extractFirst(/<Day>([^<]+)<\/Day>/, acceptedXml));
            if (!isNaN(y) && !isNaN(m) && !isNaN(d)) pubDate = new Date(y, m-1, d);
          }
          results.push({ url, title, content, journal, issn: issn ? [issn] : [], authors, doi, publishedDate: pubDate });
        }
        return results;
      },
    };

    EG_b7.quark = { name:"quark", categories:["general"], shortcut:null, paging:true,
      timeRangeDict: { day:"4", week:"3", month:"2", year:"1" },
      async request(query,params,sq){
        let pageno = (sq&&sq.pageno)||1;
        let endpoint = "https://quark.sm.cn/s";
        let qp = { q: query, layout: "html", page: pageno };
        if (sq && sq.timeRange && EG_b7.quark.timeRangeDict[sq.timeRange]) qp["tl_request"] = EG_b7.quark.timeRangeDict[sq.timeRange];
        params.url = endpoint + "?" + new URLSearchParams(qp).toString();
        return params;
      },
      async response(resp){
        let results = [];
        let text = resp.text;
        if (/\{[^{]*?"action"\s*:\s*"captcha"/.test(text)) return results;
        let scriptPattern = /<script\s+type="application\/json"\s+id="s-data-[^"]+"\s+data-used-by="hydrate">([\s\S]*?)<\/script>/g;
        let matches = _extractAll(scriptPattern, text);
        for (let match of matches) {
          try {
            let data = JSON.parse(match);
            let initialData = data.data && data.data.initialData;
            let extraData = data.extraData;
            if (!extraData || !extraData.sc) continue;
            let sc = extraData.sc;
            let parsed = _parseByCategory(sc, initialData);
            if (parsed) {
              if (Array.isArray(parsed)) results.push(...parsed);
              else results.push(parsed);
            }
          } catch(e) {}
        }
        return results;
        function _parseByCategory(sc, data) {
          if (!data) return null;
          switch(sc) {
            case "addition": return { title: st((data.title||{}).content), url: (data.source||{}).url, content: st((data.summary||{}).content) };
            case "ai_page": return _parseAiPage(data);
            case "baike_sc": return { title: st((data.data||{}).title), url: (data.data||{}).url, content: st((data.data||{}).abstract), thumbnail: ((data.data||{}).img||"").replace("http://","https://") };
            case "finance_shuidi": return _parseFinanceShuidi(data);
            case "kk_yidian_all": return _parseKkYidianAll(data);
            case "life_show_general_image": return _parseLifeShowGeneralImage(data);
            case "med_struct": return { title: st(data.title), url: (data.message||{}).statistics&&(data.message||{}).statistics.nu, content: st((data.message||{}).content_text), thumbnail: ((data.message||{}).video_img||"").replace("http://","https://") };
            case "music_new_song": return _parseMusicNewSong(data);
            case "nature_result": return { title: st(data.title), url: data.url, content: st(data.desc) };
            case "news_uchq": return _parseNewsUchq(data);
            case "ss_note": return _parseSsNote(data);
            case "ss_doc": case "ss_kv": case "ss_pic": case "ss_text": case "ss_video": case "baike": case "structure_web_novel": return _parseSsDoc(data);
            case "travel_dest_overview": return { title: st((data.strong||{}).title), url: (data.strong||{}).baike_url, content: st((data.strong||{}).baike_text) };
            case "travel_ranking_list": return { title: st((data.title||{}).text), url: (data.title||{}).url, content: st((data.title||{}).title_tag) };
            default: return null;
          }
        }
        function _parseAiPage(data) {
          let r = [];
          for (let item of (data.list||[])) {
            let content = Array.isArray(item.content) ? item.content.join(" | ") : String(item.content||"");
            let pubDate = null;
            if (item.source && item.source.time) { let ts = parseInt(item.source.time); if (!isNaN(ts)) pubDate = new Date(ts * 1000); }
            r.push({ title: st(item.title), url: item.url, content: st(content), publishedDate: pubDate });
          }
          return r;
        }
        function _parseFinanceShuidi(data) {
          let parts = [data.establish_time, data.company_status, data.controled_type, data.company_type, data.capital, data.address, data.business_scope].filter(Boolean);
          return { title: st(data.company_name), url: data.title_url, content: st(parts.join(" | ")) };
        }
        function _parseKkYidianAll(data) {
          let parts = [];
          for (let section of (data.list_container||[])) {
            for (let item of (section.list_container||[])) { if (item.dot_text) parts.push(item.dot_text); }
          }
          return { title: st(data.title), url: data.title_url, content: st(parts.join(" ")) };
        }
        function _parseLifeShowGeneralImage(data) {
          let r = [];
          for (let item of (data.image||[])) {
            let pubDate = null;
            if (item.publish_time) { let ts = parseInt(item.publish_time); if (!isNaN(ts)) pubDate = new Date(ts * 1000); }
            r.push({ template:"images.html", url: item.imgUrl, thumbnail_src: item.img, img_src: item.bigPicUrl, title: item.title, source: item.site, resolution: item.width + " x " + item.height, publishedDate: pubDate });
          }
          return r;
        }
        function _parseMusicNewSong(data) {
          let r = [];
          for (let item of (data.hit3||[])) {
            r.push({ title: item.song_name + " | " + item.song_singer, url: item.play_url, content: st(item.lyrics), thumbnail: (item.image_url||"").replace("http://","https://") });
          }
          return r;
        }
        function _parseNewsUchq(data) {
          let r = [];
          for (let item of (data.feed||[])) {
            let pubDate = null;
            if (item.time) { let d = new Date(item.time); if (!isNaN(d.getTime())) pubDate = d; }
            r.push({ title: st(item.title), url: item.url, content: st(item.summary), thumbnail: (item.image||"").replace("http://","https://"), publishedDate: pubDate });
          }
          return r;
        }
        function _parseSsNote(data) {
          let pubDate = null;
          if (data.source && data.source.time) { let ts = parseInt(data.source.time); if (!isNaN(ts)) pubDate = new Date(ts * 1000); }
          return { title: st((data.title||{}).content), url: (data.source||{}).dest_url, content: st((data.summary||{}).content), publishedDate: pubDate };
        }
        function _parseSsDoc(data) {
          let pubDate = null;
          if (data.sourceProps && data.sourceProps.time) { let ts = parseInt(data.sourceProps.time); if (!isNaN(ts) && ts !== 0) pubDate = new Date(ts * 1000); }
          let thumbnail = null;
          try { if (data.picListProps && data.picListProps[0] && data.picListProps[0].src) thumbnail = data.picListProps[0].src.replace("http://","https://"); } catch(e) {}
          let title = st(data.titleProps&&data.titleProps.content || data.title);
          let url = (data.sourceProps&&data.sourceProps.dest_url) || data.normal_url || data.url;
          let content = st(data.summaryProps&&data.summaryProps.content || (data.message&&data.message.replyContent) || data.show_body || data.desc);
          return { title, url, content, publishedDate: pubDate, thumbnail };
        }
      },
    };

    EG_b7.radio_browser = { name:"radio_browser", categories:["music","radio"], shortcut:null, paging:true,
      _servers: ["https://de1.api.radio-browser.info","https://de2.api.radio-browser.info","https://at1.api.radio-browser.info"],
      async request(query,params,sq){
        let servers = EG_b7.radio_browser._servers;
        if (!servers.length) { params.url = null; return params; }
        let server = servers[Math.floor(Math.random() * servers.length)];
        let pageno = (sq&&sq.pageno)||1;
        let args = { name: query, order: "votes", offset: (pageno-1)*10, limit: 10, hidebroken: "true", reverse: "true" };
        params.url = server + "/json/stations/search?" + new URLSearchParams(args).toString();
        return params;
      },
      async response(resp){
        let results = [];
        let j = resp.json;
        if (!Array.isArray(j)) return results;
        for (let result of j) {
          let url = result.homepage || result.url_resolved || "";
          let content = [];
          if (result.tags) { let t = result.tags.split(",").map(s=>s.trim()).filter(Boolean).join(", "); if (t) content.push(t); }
          for (let x of ["state","country"]) { if (result[x]) content.push(String(result[x]).trim()); }
          let metadata = [];
          if (result.codec && result.codec.toLowerCase() !== "unknown") metadata.push(result.codec + " radio");
          if (result.bitrate) metadata.push("bitrate " + String(result.bitrate).trim());
          if (result.votes) metadata.push("votes " + String(result.votes).trim());
          if (result.clickcount) metadata.push("clicks " + String(result.clickcount).trim());
          results.push({ url, title: result.name, thumbnail: (result.favicon||"").replace("http://","https://"), content: content.join(" | "), metadata: metadata.join(" | "), iframe_src: (result.url_resolved||"").replace("http://","https://") });
        }
        return results;
      },
    };

    EG_b7.repology = { name:"repology", categories:["packages","it"], shortcut:null, paging:false,
      async request(query,params){
        params.url = "https://repology.org/api/v1/projects/?" + new URLSearchParams({ search: query }).toString();
        return params;
      },
      async response(resp){
        let results = [];
        let j = resp.json;
        if (!j || typeof j !== "object") return results;
        for (let [pkgname, repositories] of Object.entries(j)) {
          if (!Array.isArray(repositories)) continue;
          let latestVersion = null;
          for (let repo of repositories) {
            if (repo.status === "newest") { latestVersion = repo.version; break; }
          }
          if (!latestVersion) latestVersion = _getMostCommon(repositories.map(r => r.version));
          results.push({
            template:"packages.html",
            url: "https://repology.org/project/" + encodeURIComponent(pkgname) + "/versions",
            title: pkgname,
            content: _getMostCommon(repositories.map(r => r.summary)),
            package_name: _getMostCommon(repositories.map(r => r.visiblename)),
            version: latestVersion,
            license_name: _getMostCommon(_flatten(repositories.map(r => r.licenses || []))),
            tags: [...new Set(repositories.map(r => r.repo).filter(Boolean))],
          });
        }
        return results;
        function _getMostCommon(items) {
          let counts = {};
          for (let item of items) { if (item) counts[item] = (counts[item]||0) + 1; }
          let max = 0, best = null;
          for (let [k,v] of Object.entries(counts)) { if (v > max) { max = v; best = k; } }
          return best;
        }
        function _flatten(xss) {
          let r = [];
          for (let xs of xss) { for (let x of xs) r.push(x); }
          return r;
        }
      },
    };

    EG_b7.scanr_structures = { name:"scanr_structures", categories:["science"], shortcut:null, paging:true,
      async request(query,params,sq){
        params.url = "https://scanr.enseignementsup-recherche.gouv.fr/api/structures/search";
        params.method = "POST";
        params.headers["Content-Type"] = "application/json";
        params.data = JSON.stringify({ query: query, searchField: "ALL", sortDirection: "ASC", sortOrder: "RELEVANCY", page: (sq&&sq.pageno)||1, pageSize: 20 });
        return params;
      },
      async response(resp){
        let results = [];
        let j = resp.json;
        if (!j || !j.results || j.total < 1) return results;
        let baseUrl = "https://scanr.enseignementsup-recherche.gouv.fr/";
        for (let result of j.results) {
          if (!result.id) continue;
          let thumbnail = null;
          if (result.logo) { thumbnail = result.logo; if (thumbnail[0] === "/") thumbnail = baseUrl + thumbnail; }
          let content = null;
          if (result.highlights && result.highlights.length) content = st(result.highlights[0].value);
          results.push({ url: baseUrl + "structure/" + result.id, title: result.label, thumbnail, content });
        }
        return results;
      },
    };

    EG_b7.selfhst = { name:"selfhst", categories:["images","icons"], shortcut:null, paging:false,
      async request(query,params,sq){
        params.url = "https://cdn.jsdelivr.net/gh/selfhst/icons/index.json";
        return params;
      },
      async response(resp,sq){
        let results = [];
        let j = resp.json;
        if (!Array.isArray(j)) return results;
        let queryParts = ((sq&&sq.query) || "").toLowerCase().split(" ").filter(Boolean);
        let cdnBase = "https://cdn.jsdelivr.net/gh/selfhst/icons";
        for (let item of j) {
          let keyword = (item.Reference||"").toLowerCase();
          if (!queryParts.every(p => keyword.includes(p))) continue;
          let imgFormat = null;
          for (let fmt of ["SVG","PNG","WebP"]) { if (item[fmt] === "Yes") { imgFormat = fmt.toLowerCase(); break; } }
          if (!imgFormat) continue;
          let imgSrc = cdnBase + "/" + imgFormat + "/" + item.Reference + "." + imgFormat;
          results.push({
            template:"images.html",
            url: imgSrc,
            title: item.Name,
            content: "",
            img_src: imgSrc,
            img_format: imgFormat,
            publishedDate: item.CreatedAt ? new Date(item.CreatedAt) : null,
          });
        }
        return results;
      },
    };

    EG_b7.senscritique = { name:"senscritique", categories:["movies"], shortcut:null, paging:true,
      _graphqlQuery: "query SearchProductExplorer($query: String, $offset: Int, $limit: Int, $sortBy: SearchProductExplorerSort) { searchProductExplorer(query: $query, filters: [], sortBy: $sortBy, offset: $offset, limit: $limit) { items { category dateRelease duration id originalTitle rating title url yearOfProduction medias { picture } countries { name } genresInfos { label } directors { name } stats { ratingCount } } } }",
      async request(query,params,sq){
        let pageno = (sq&&sq.pageno)||1;
        let offset = (pageno-1) * 16;
        let data = { operationName: "SearchProductExplorer", variables: { offset, limit: 16, query, sortBy: "RELEVANCE" }, query: EG_b7.senscritique._graphqlQuery };
        params.url = "https://apollo.senscritique.com/";
        params.method = "POST";
        params.headers["Content-Type"] = "application/json";
        params.data = JSON.stringify(data);
        return params;
      },
      async response(resp){
        let results = [];
        let j = resp.json;
        if (!j || !j.data || !j.data.searchProductExplorer || !j.data.searchProductExplorer.items) return results;
        for (let item of j.data.searchProductExplorer.items) {
          let title = item.title || "";
          if (!title) continue;
          let year = item.yearOfProduction;
          let originalTitle = item.originalTitle;
          let thumbnail = "";
          if (item.medias && item.medias.picture) thumbnail = item.medias.picture;
          let contentParts = [];
          if (item.category) contentParts.push(item.category);
          if (originalTitle && originalTitle !== title) contentParts.push("Original title: " + originalTitle);
          if (item.directors && item.directors.length) contentParts.push("Director(s): " + item.directors.map(d => d.name).join(", "));
          if (item.countries && item.countries.length) contentParts.push("Country: " + item.countries.map(c => c.name).join(", "));
          if (item.genresInfos && item.genresInfos.length) contentParts.push("Genre(s): " + item.genresInfos.map(g => g.label).join(", "));
          if (item.duration) { let mins = Math.floor(item.duration / 60); if (mins > 0) contentParts.push("Duration: " + mins + " min"); }
          if (item.rating && item.stats && item.stats.ratingCount) contentParts.push("Rating: " + item.rating + "/10 (" + item.stats.ratingCount + " votes)");
          results.push({
            url: "https://www.senscritique.com" + item.url,
            title: title + (year ? " (" + year + ")" : ""),
            content: contentParts.join(" | "),
            thumbnail,
          });
        }
        return results;
      },
    };

    EG_b7.sepiasearch = { name:"sepiasearch", categories:["videos"], shortcut:null, paging:true,
      async request(query,params,sq){
        if (!query) { params.url = null; return params; }
        let pageno = (sq&&sq.pageno)||1;
        let args = { search: query, start: (pageno-1)*10, count: 10, sort: "-match", nsfw: "both" };
        if (sq) {
          let safesearchTable = { 0: "both", 1: "false", 2: "false" };
          args.nsfw = safesearchTable[sq.safesearch] || "both";
        }
        params.url = "https://sepiasearch.org/api/v1/search/videos?" + new URLSearchParams(args).toString();
        if (sq && sq.language && sq.language !== "all") {
          params.url += "&languageOneOf[]=" + encodeURIComponent(sq.language);
          params.url += "&boostLanguages[]=" + encodeURIComponent(sq.language);
        }
        let timeRangeTable = { day: 0, week: -7, month: -30, year: -365 };
        if (sq && sq.timeRange && timeRangeTable[sq.timeRange] !== undefined) {
          let d = new Date();
          d.setDate(d.getDate() + timeRangeTable[sq.timeRange]);
          params.url += "&startDate=" + d.toISOString().split("T")[0];
        }
        return params;
      },
      async response(resp){
        let results = [];
        let j = resp.json;
        if (!j || !j.data) return results;
        for (let result of j.data) {
          let metadata = [result.channel && result.channel.displayName, (result.channel ? (result.channel.name||"") + "@" + (result.channel.host||"") : ""), (result.tags||[]).join(", ")].filter(Boolean);
          results.push({
            url: result.url,
            title: result.name,
            content: _htmlToText(result.description || ""),
            author: result.account ? result.account.displayName : null,
            views: result.views,
            template:"videos.html",
            publishedDate: result.publishedAt ? new Date(result.publishedAt) : null,
            iframe_src: result.embedUrl,
            thumbnail: result.thumbnailUrl || result.previewUrl,
            metadata: metadata.join(" | "),
          });
        }
        return results;
      },
    };

    EG_b7.springer = { name:"springer", categories:["science","scientific publications"], shortcut:null, paging:true,
      async request(query,params,sq){
        let pageno = (sq&&sq.pageno)||1;
        let args = { q: query, s: 10*(pageno-1), p: 10 };
        params.url = "https://api.springernature.com/meta/v2/json?" + new URLSearchParams(args).toString();
        params.raiseForStatus = false;
        return params;
      },
      async response(resp){
        let results = [];
        let j = resp.json;
        if (!j || !j.records) return results;
        if (resp.status === 403 && j.status && j.status.toLowerCase() === "fail" && j.message && j.message.toLowerCase().includes("premium feature")) return results;
        if (resp.status >= 400) return results;
        for (let record of j.records) {
          let pubDate = record.publicationDate ? new Date(record.publicationDate) : null;
          let authors = (record.creators||[]).map(a => { let parts = (a.creator||"").split(", "); return parts.reverse().join(" ").trim(); }).filter(Boolean);
          let htmlUrl = "", pdfUrl = "";
          for (let item of (record.url||[])) {
            if (item.platform !== "web") continue;
            let val = item.value.replace("http://", "https://");
            if (item.format === "html") htmlUrl = val;
            else if (item.format === "pdf") pdfUrl = val;
          }
          let pages = [record.startingPage, record.endingPage].filter(Boolean).join("-");
          results.push({
            url: htmlUrl,
            pdf_url: pdfUrl,
            title: record.title || "",
            content: record.abstract || "",
            comments: record.publicationName || "",
            tags: record.keyword || [],
            publishedDate: pubDate,
            type: record.contentType || "",
            authors,
            publisher: record.publisher || "",
            journal: record.publicationName || "",
            volume: record.volume || "",
            pages,
            number: record.number || "",
            doi: record.doi || "",
            issn: record.issn ? [record.issn] : [],
            isbn: record.isbn ? [record.isbn] : [],
          });
        }
        return results;
      },
    };

    EG_b7.stackexchange = { name:"stackexchange", categories:["general"], shortcut:null, paging:true,
      async request(query,params,sq){
        let args = { q: query, page: (sq&&sq.pageno)||1, pagesize: 10, site: "stackoverflow", sort: "activity", order: "desc" };
        params.url = "https://api.stackexchange.com/2.3/search/advanced?" + new URLSearchParams(args).toString();
        return params;
      },
      async response(resp){
        let results = [];
        let j = resp.json;
        if (!j || !j.items) return results;
        for (let result of j.items) {
          let content = "[" + (result.tags||[]).join(", ") + "]";
          content += " " + (result.owner ? result.owner.display_name : "");
          if (result.is_answered) content += " // is answered";
          content += " // score: " + result.score;
          results.push({
            url: "https://stackoverflow.com/q/" + result.question_id,
            title: _htmlToText(result.title || ""),
            content: _htmlToText(content),
          });
        }
        return results;
      },
    };
  });
