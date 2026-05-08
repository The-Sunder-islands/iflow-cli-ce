var SearchPipeline,
  sP = j(() => {
    "use strict";
    const pipelineDefaultConfig = {
      mode: "balanced",
      sources: ["web"],
      systemInstructions: "",
    };
    function formatChatHistory(e) {
      if (!e || e.length === 0) return "(no prior conversation)";
      return e
        .map((r) => {
          if (typeof r === "string") return r;
          if (r.role === "user") return `User: ${r.content}`;
          if (r.role === "assistant") return `Assistant: ${r.content}`;
          return `${r.role}: ${r.content}`;
        })
        .join("\n");
    }
    function extractUrls(e) {
      let r = [];
      let n = /https?:\/\/[^\s<>"']+/g;
      let o;
      while ((o = n.exec(e)) !== null) r.push(o[0]);
      return r;
    }
    const classifierPrompt = `You are a search query classifier. Analyze the user's query and conversation history to determine the search strategy.

    CLASSIFICATION RULES:
    1. skipSearch: TRUE only if the query is a simple greeting, thank you, or conversational response that needs no external information
    2. personalSearch: TRUE if the query asks about the user's own data, files, or projects
    3. academicSearch: TRUE if the query is about scientific papers, citations, or scholarly topics
    4. discussionSearch: TRUE if asking for opinions, discussions, forums, or community content

    CLASSIFY the query and reformulate it as a standalone question that doesn't depend on context.`;

    const writerPromptTemplate = (e, r, n) => `You are a helpful assistant. Answer the user's question based on the search results provided.

    CONTEXT FROM SEARCH:
    ${e}

    ${r ? `SYSTEM INSTRUCTIONS: ${r}` : ""}

    MODE: ${n}
    - speed: brief, direct answer
    - balanced: moderate detail with citations
    - quality: comprehensive with thorough citations

    Use the search results to inform your answer. Cite sources by referencing their titles or URLs where appropriate. If the search results don't contain enough information, say so.`;

    class SearchPipeline {
      constructor(e) {
        this.config = e;
        this.searchApi = null;
      }
      setSearchApi(e) {
        this.searchApi = e;
      }
      async run(e, r = {}) {
        let n = { ...pipelineDefaultConfig, ...r };
        let o = n.chatHistory || [];
        let s = e;
        let a = { skipSearch: false, personalSearch: false, academicSearch: false, discussionSearch: false, showWeatherWidget: false, showStockWidget: false, showCalculationWidget: false };
        let c = null;
        if (this.config?.getChatModel) {
          let l = this.config.getChatModel();
          let u = await l.sendMessage([
            { role: "system", content: classifierPrompt },
            { role: "user", content: `<conversation_history>\n${formatChatHistory(o)}\n</conversation_history>\n<user_query>\n${e}\n</user_query>` },
          ]);
          try {
            let d = typeof u === "string" ? u : u.text || "";
            let f = d.match(/\{[\s\S]*\}/);
            if (f) c = JSON.parse(f[0]);
            if (c?.standaloneFollowUp) s = c.standaloneFollowUp;
            if (c?.classification) Object.assign(a, c.classification);
          } catch {}
        }
        let p = [];
        let h = null;
        if (!a.skipSearch && this.searchApi) {
          let l = [];
          if (a.academicSearch) l.push("science");
          if (a.discussionSearch) l.push("social");
          if (!a.personalSearch) l.push("web", "general");
          let u = await this.searchApi.search({
            query: s,
            categories: l.length > 0 ? l : ["general", "web"],
            pageno: 1,
          });
          p = u;
          h = u;
        }
        let g = "";
        for (let l of p.slice(0, 15)) {
          g += `<result index="${l.index || p.indexOf(l) + 1}" title="${(l.title || "").replace(/</g, "&lt;")}">\n`;
          g += `URL: ${l.url || ""}\n`;
          g += `Content: ${(l.content || l.snippet || "").slice(0, 3000)}\n`;
          g += `</result>\n`;
        }
        let b = null;
        if (this.config?.getChatModel && g) {
          let l = this.config.getChatModel();
          let u = writerPromptTemplate(g, n.systemInstructions, n.mode);
          let d = await l.sendMessage([
            { role: "system", content: u },
            ...o,
            { role: "user", content: e },
          ]);
          b = typeof d === "string" ? d : d.text || "";
        }
        return { message: b, sources: p, classification: a };
      }
    }
    SearchPipeline = SearchPipeline;
  });
