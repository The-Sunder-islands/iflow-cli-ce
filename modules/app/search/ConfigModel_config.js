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
    var KNOWN_DEFAULTS = {
      renderer: "lightpanda",
      bootAnimationShown: !1,
      hasViewedAnnualReport: {},
    };
    function notify(e, r) {
      var n = _listeners[e];
      if (n) for (var o = 0; o < n.length; o++) try { n[o](r); } catch (s) {}
      var t = _listeners["*"];
      if (t) for (var o = 0; o < t.length; o++) try { t[o](e, r); } catch (s) {}
    }
    ConfigModel = {
      LEGACY_FIELDS,
      KNOWN_DEFAULTS,
      subscribe(e, r) {
        if (!_listeners[e]) _listeners[e] = [];
        _listeners[e].push(r);
        return function () {
          var n = _listeners[e];
          if (n) { var o = n.indexOf(r); if (o >= 0) n.splice(o, 1); }
        };
      },
      load() {
        var e = Persistence ? Persistence.read() : {};
        for (var r in e) _cache[r] = e[r];
        for (var n in KNOWN_DEFAULTS) {
          if (_cache[n] === void 0) _cache[n] = KNOWN_DEFAULTS[n];
        }
        return _cache;
      },
      get(e) { return _cache[e]; },
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
        for (var l in KNOWN_DEFAULTS) { if (n[l] === void 0) n[l] = KNOWN_DEFAULTS[l]; }
        if (Persistence) Persistence.write(n);
        return n;
      },
    };
  });
