var ConfigModel,
  configModelInit = j(() => {
    "use strict";
    var _listeners = {};
    var _cache = {};
    var LEGACY_FIELDS = {
      cna:                  { target: "cna" },
      bootAnimationShown:   { target: "bootAnimationShown" },
      selectedAuthType:     { target: "selectedAuthType" },
      modelName:            { target: "modelName" },
      baseUrl:              { target: "baseUrl" },
      apiKey:               { target: "apiKey", isSecret: !0 },
      language:             { target: "language" },
      hasViewedAnnualReport:{ target: "hasViewedAnnualReport" },
      searchApiKey:         { target: "searchApiKey", isSecret: !0 },
    };
    var SCHEMA = {
      accessibility:            { default: !1 },
      allowMCPServers:          { default: void 0 },
      apiKey:                   { default: void 0 },
      approvalMode:             { default: void 0 },
      autoConfigureMaxOldSpaceSize: { default: void 0 },
      baseUrl:                  { default: void 0 },
      bootAnimationShown:       { default: !1 },
      bugCommand:               { default: void 0 },
      checkpointing:            { default: !1 },
      cna:                      { default: void 0 },
      compressionTokenThreshold:{ default: void 0 },
      contextFileName:          { default: void 0 },
      coreTools:                { default: void 0 },
      customThemes:             { default: {} },
      debugKeystrokeLogging:    { default: !1 },
      disableTelemetry:         { default: !1 },
      dnsResolutionOrder:       { default: void 0 },
      enableBuildInTask:        { default: !1 },
      enableInteractiveShell:   { default: !0 },
      errorLog:                 { default: void 0 },
      excludeMCPServers:        { default: void 0 },
      excludeTools:             { default: void 0 },
      fileFiltering:            { default: {} },
      hasIdeOnboardingBeenShown:{ default: !1 },
      hasViewedAnnualReport:    { default: {} },
      hideBanner:               { default: !1 },
      hideTips:                 { default: !1 },
      hideWindowTitle:          { default: !1 },
      hookManager:              { default: void 0 },
      includeDirectories:       { default: void 0 },
      language:                 { default: "en" },
      lightWeightPlan:          { default: !1 },
      maxSessionTurns:          { default: void 0 },
      mcpServerCommand:         { default: void 0 },
      mcpServers:               { default: {} },
      memoryDiscoveryMaxDirs:   { default: 10 },
      memoryImportFormat:       { default: "tree" },
      modelName:                { default: void 0 },
      outputLimit:              { default: !0 },
      outputTokensLimit:        { default: void 0 },
      preferredEditor:          { default: void 0 },
      renderer:                 { default: "lightpanda" },
      sandbox:                  { default: !1 },
      searchApiKey:             { default: void 0 },
      security:                 { default: void 0 },
      selectedAuthType:         { default: void 0 },
      shellTimeout:             { default: 120 },
      showMemoryUsage:          { default: !1 },
      skipNextSpeakerCheck:     { default: !1 },
      telemetry:                { default: {} },
      temperature:              { default: void 0 },
      theme:                    { default: void 0 },
      thinkingModeEnabled:      { default: !1 },
      tokensLimit:              { default: void 0 },
      toolCallCommand:          { default: void 0 },
      toolDiscoveryCommand:     { default: void 0 },
      toolSummarizationSettings:{ default: void 0 },
      topP:                     { default: void 0 },
      usageStatisticsEnabled:   { default: !0 },
      useExternalAuth:          { default: !1 },
      useRipgrep:               { default: !0 },
      useSmartEdit:             { default: !0 },
      vimMode:                  { default: !1 },
    };
    function notify(e, r) {
      var n = _listeners[e];
      if (n) for (var o = 0; o < n.length; o++) try { n[o](r); } catch (s) {}
      var t = _listeners["*"];
      if (t) for (var o = 0; o < t.length; o++) try { t[o](e, r); } catch (s) {}
    }
    ConfigModel = {
      LEGACY_FIELDS,
      SCHEMA,
      subscribe(e, r) {
        if (!_listeners[e]) _listeners[e] = [];
        _listeners[e].push(r);
        return function () {
          var n = _listeners[e];
          if (n) { var o = n.indexOf(r); if (o >= 0) n.splice(o, 1); }
        };
      },
      has(e) { return e in _cache; },
      load() {
        var e = Persistence ? Persistence.read() : {};
        for (var r in e) _cache[r] = e[r];
        for (var n in SCHEMA) {
          if (_cache[n] === void 0) _cache[n] = SCHEMA[n].default;
        }
        return _cache;
      },
      get(e) { return _cache[e]; },
      getOrDefault(e) {
        var r = _cache[e];
        return r !== void 0 ? r : (SCHEMA[e] ? SCHEMA[e].default : void 0);
      },
      getAll() { return Object.assign({}, _cache); },
      set(e, r) {
        _cache[e] = r;
        if (Persistence) Persistence.write({ [e]: r });
        notify(e, r);
      },
      setMulti(e) {
        for (var r in e) { _cache[r] = e[r]; }
        if (Persistence) Persistence.write(e);
        for (var r in e) notify(r, e[r]);
      },
      delete(e) {
        delete _cache[e];
        if (Persistence) Persistence.deleteKey(e);
        notify(e, void 0);
      },
      detectLegacy() {
        return Persistence ? Persistence.hasLegacy() : !1;
      },
      translateLegacy(e, r) {
        return Persistence ? Persistence.readLegacy() : null;
      },
      migrate(e) {
        var r = e || (Persistence ? Persistence.readLegacy() : null);
        if (!r) return null;
        var n = {};
        for (var o in r) {
          var s = LEGACY_FIELDS[o];
          if (!s) continue;
          var a = r[o];
          if (a === void 0 || a === null) continue;
          if (s.isSecret) {
            if (a && Persistence) Persistence.keytarSave(r.selectedAuthType || "default", String(a));
            continue;
          }
          n[s.target] = a;
        }
        for (var l in SCHEMA) { if (n[l] === void 0) n[l] = SCHEMA[l].default; }
        if (Persistence) Persistence.write(n);
        return n;
      },
    };
  });
