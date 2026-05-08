var EG_science = {},
  eG_science = j(() => {
    "use strict";

    function _extractAll(re, str) {
      let m, r = [];
      re.lastIndex = 0;
      while ((m = re.exec(str)) !== null) r.push(m[1]);
      return r;
    }
    function _extractFirst(re, str) {
      re.lastIndex = 0;
      let m = re.exec(str);
      return m ? m[1] : null;
    }
    function _htmlToText(v) {
      return v ? String(v).replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").trim() : "";
    }
    function _getField(doc, name) {
      let pat = new RegExp("<[a-z]+\\s+name=\"" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\"(?:>([\\s\\S]*?)<\\/[a-z]+>|\\s*\\/>)", "");
      let m = pat.exec(doc);
      return m ? m[1] || "" : "";
    }

    EG_science.wikipedia = {
      name: "wikipedia",
      categories: ["general", "science"],
      shortcut: "wp",
          useRenderer: !0,
      paging: false,
          useRenderer: !0,
      async request(query, params) {
        if (query === query.toLowerCase()) query = query.charAt(0).toUpperCase() + query.slice(1);
        let title = encodeURIComponent(query);
        params.url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + title;
        params.raiseForStatus = false;
        params.softMaxRedirects = 2;
        return params;
      },
      async response(resp) {
        let results = [];
        if (resp.status === 404) return results;
        if (resp.status === 400 && resp.json && resp.json.type === "https://mediawiki.org/wiki/HyperSwitch/errors/bad_request" && resp.json.detail === "title-invalid-characters") return results;
        if (resp.status >= 400) throw new Error("HTTP " + resp.status);
        let api = resp.json;
        let title = _htmlToText((api.titles && api.titles.display) || api.title);
        let wpLink = api.content_urls.desktop.page;
        if (api.type !== "standard") results.push({ url: wpLink, title: title, content: api.description || "" });
        if (api.type === "standard") results.push({ infobox: title, id: wpLink, content: api.extract || "", img_src: api.thumbnail && api.thumbnail.source, urls: [{ title: "Wikipedia", url: wpLink }] });
        return results;
      }
    };

    EG_science.arxiv = {
      name: "arxiv",
      categories: ["science", "scientific publications"],
      shortcut: "ar",
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, searchQuery) {
        let pageno = (searchQuery && searchQuery.pageno) || 1;
        let start = (pageno - 1) * 10;
        params.url = "https://export.arxiv.org/api/query?search_query=all:" + encodeURIComponent(query) + "&start=" + start + "&max_results=10";
        return params;
      },
      async response(resp) {
        let results = [];
        let entries = _extractAll(/<entry>([\s\S]*?)<\/entry>/g, resp.text);
        for (let entry of entries) {
          let title = _htmlToText(_extractFirst(/<title[^>]*>([\s\S]*?)<\/title>/, entry) || "");
          let url = _extractFirst(/<id[^>]*>([\s\S]*?)<\/id>/, entry) || "";
          let summary = _htmlToText(_extractFirst(/<summary[^>]*>([\s\S]*?)<\/summary>/, entry) || "");
          let authors = _extractAll(/<author>[\s\S]*?<name>([\s\S]*?)<\/name>[\s\S]*?<\/author>/g, entry).map(_htmlToText);
          let doi = _extractFirst(/<arxiv:doi[^>]*>([\s\S]*?)<\/arxiv:doi>/, entry) || "";
          let pdf_url = _extractFirst(/<link[^>]*title=['"]pdf['"][^>]*href=['"]([^'"]*)/, entry) || "";
          let published = _extractFirst(/<published[^>]*>([\s\S]*?)<\/published>/, entry) || "";
          let journal = _extractFirst(/<arxiv:journal_ref[^>]*>([\s\S]*?)<\/arxiv:journal_ref>/, entry) || "";
          let tags = _extractAll(/<category[^>]*term=['"]([^'"]*)/, entry);
          let comments = _extractFirst(/<arxiv:comment[^>]*>([\s\S]*?)<\/arxiv:comment>/, entry) || "";
          let publishedDate = published ? new Date(published) : null;
          results.push({ url: url, title: title, content: summary, publishedDate: publishedDate, doi: doi, authors: authors, journal: journal, tags: tags, comments: comments, pdf_url: pdf_url });
        }
        return results;
      }
    };

    EG_science.base = {
      name: "base",
      categories: ["science"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, searchQuery) {
        let shortcutDict = { "format:": "dcformat:", "author:": "dccreator:", "collection:": "dccollection:", "hdate:": "dchdate:", "contributor:": "dccontributor:", "coverage:": "dccoverage:", "date:": "dcdate:", "abstract:": "dcdescription:", "urls:": "dcidentifier:", "language:": "dclanguage:", "publisher:": "dcpublisher:", "relation:": "dcrelation:", "rights:": "dcrights:", "source:": "dcsource:", "subject:": "dcsubject:", "title:": "dctitle:", "type:": "dcdctype:" };
        for (let k in shortcutDict) query = query.replace(new RegExp(k.replace(":", "\\:"), "g"), shortcutDict[k]);
        let offset = ((searchQuery && searchQuery.pageno) || 1) - 1;
        params.url = "https://api.base-search.net/cgi-bin/BaseHttpSearchInterface.fcgi?func=PerformSearch&query=" + encodeURIComponent(query) + "&boost=oa&hits=10&offset=" + offset;
        params.headers["User-Agent"] = "Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0";
        return params;
      },
      async response(resp) {
        let results = [];
        let docs = _extractAll(/<doc>([\s\S]*?)<\/doc>/g, resp.text);
        for (let doc of docs) {
          let date = _getField(doc, "dcdate");
          let title = _getField(doc, "dctitle");
          let url = _getField(doc, "dclink");
          let content = _getField(doc, "dcdescription") || "No description available";
          if (content.length > 300) content = content.substring(0, 300) + "...";
          let publishedDate = null;
          if (date) {
            if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(date) || /^\d{4}-\d{2}-\d{2}$/.test(date)) { publishedDate = new Date(date); if (isNaN(publishedDate.getTime())) publishedDate = null; }
            else if (/^\d{4}-\d{2}$/.test(date)) { publishedDate = new Date(date + "-01"); if (isNaN(publishedDate.getTime())) publishedDate = null; }
            else if (/^\d{4}$/.test(date)) { publishedDate = new Date(date + "-01-01"); if (isNaN(publishedDate.getTime())) publishedDate = null; }
          }
          let item = { url: url, title: title, content: content };
          if (publishedDate) item.publishedDate = publishedDate;
          results.push(item);
        }
        return results;
      }
    };

    EG_science.crossref = {
      name: "crossref",
      categories: ["science", "scientific publications"],
      shortcut: null,
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, searchQuery) {
        let offset = 20 * (((searchQuery && searchQuery.pageno) || 1) - 1);
        params.url = "https://api.crossref.org/works?query=" + encodeURIComponent(query) + "&offset=" + offset;
        return params;
      },
      async response(resp) {
        let results = [];
        let data = resp.json;
        if (!data || !data.message || !data.message.items) return results;
        for (let record of data.message.items) {
          if (record.type === "component") continue;
          let title = "", journal = "";
          if (record.type === "book-chapter") {
            title = (record["container-title"] && record["container-title"][0]) || "";
            if (record.title && record.title[0].toLowerCase().trim() !== title.toLowerCase().trim()) title += " (" + record.title[0] + ")";
          } else {
            title = (record.title && record.title[0]) || (record["container-title"] && record["container-title"][0]) || "";
            journal = record.title ? ((record["container-title"] && record["container-title"][0]) || "") : "";
          }
          let item = { title: title, journal: journal, content: record.abstract || "", doi: record.DOI || "", pages: record.page || "", publisher: record.publisher || "", tags: record.subject || [], type: record.type || "", url: record.URL || "", volume: record.volume || "" };
          if (record.resource && record.resource.primary && record.resource.primary.URL) item.url = record.resource.primary.URL;
          if (record.published && record.published["date-parts"]) {
            let dp = record.published["date-parts"][0];
            item.publishedDate = new Date(dp[0], dp.length > 1 ? dp[1] - 1 : 0, dp.length > 2 ? dp[2] : 1);
          }
          item.authors = (record.author || []).map(function (a) { return ((a.given || "") + " " + (a.family || "")).trim(); });
          item.isbn = record.isbn || (record["isbn-type"] ? record["isbn-type"].map(function (i) { return i.value; }) : []);
          results.push(item);
        }
        return results;
      }
    };

    var _s2UIVersion = null;

    EG_science.semantic_scholar = {
      name: "semantic_scholar",
      categories: ["science", "scientific publications"],
      shortcut: "se",
          useRenderer: !0,
      paging: true,
          useRenderer: !0,
      async request(query, params, searchQuery) {
        if (!_s2UIVersion) {
          try {
            let r = await fetch("https://www.semanticscholar.org", { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0" } });
            let t = await r.text();
            let m = t.match(/<meta\s+name=["']s2-ui-version["']\s+content=["']([^"']*)/);
            _s2UIVersion = m ? m[1] : "unknown";
          } catch (e) { _s2UIVersion = "unknown"; }
        }
        params.url = "https://www.semanticscholar.org/api/1/search";
        params.method = "POST";
        params.headers["Content-Type"] = "application/json";
        params.headers["X-S2-UI-Version"] = _s2UIVersion;
        params.headers["X-S2-Client"] = "webapp-browser";
        params.data = { queryString: query, page: (searchQuery && searchQuery.pageno) || 1, pageSize: 10, sort: "relevance", getQuerySuggestions: false, authors: [], coAuthors: [], venues: [], performTitleMatch: true };
        return params;
      },
      async response(resp) {
        let results = [];
        let data = resp.json;
        if (!data || !data.results) return results;
        for (let result of data.results) {
          let url = (result.primaryPaperLink && result.primaryPaperLink.url) || (result.links && result.links[0]) || null;
          if (!url && result.alternatePaperLinks && result.alternatePaperLinks[0]) url = result.alternatePaperLinks[0].url;
          if (!url) url = "https://www.semanticscholar.org/paper/" + result.id;
          let publishedDate = result.pubDate ? new Date(result.pubDate) : null;
          let authors = (result.authors || []).map(function (a) { return a[0] && a[0].name; }).filter(Boolean);
          let pdf_url = "";
          for (let doc of (result.alternatePaperLinks || [])) { if (doc.linkType !== "crawler" && doc.linkType !== "doi") { pdf_url = doc.url; break; } }
          let comments = "";
          if (result.citationStats) comments = result.citationStats.numCitations + " citations from the year " + (result.citationStats.firstCitationVelocityYear || "?") + " to " + (result.citationStats.lastCitationVelocityYear || "?");
          results.push({ title: result.title && result.title.text || "", url: url, content: _htmlToText(result.paperAbstract && result.paperAbstract.text || ""), journal: (result.venue && result.venue.text) || (result.journal && result.journal.name) || "", doi: result.doiInfo && result.doiInfo.doi || "", tags: result.fieldsOfStudy || [], authors: authors, pdf_url: pdf_url, publishedDate: publishedDate, comments: comments });
        }
        return results;
      }
    };
  });
