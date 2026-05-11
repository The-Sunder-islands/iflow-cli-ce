var ReactAdapter,
  reactAdapterInit = j(() => {
    "use strict";
    var React = require("react");
    function useConfig(e) {
      var n = React.useSyncExternalStore(
        function (r) { return ConfigModel.subscribe(e, r); },
        function () { return ConfigModel.get(e); }
      );
      return n;
    }
    ReactAdapter = {
      useConfig,
      shimMerged(e) {
        if (!e || e.__configShimmed) return e;
        var n = e.merged || {};
        e.merged = new Proxy(n, {
          get: function (r, o) {
            if (o === "__configShimmed") return !0;
            if (o === Symbol.toPrimitive || o === "constructor") return r[o];
            if (o in r) return r[o];
            var s = ConfigModel.get(o);
            return s !== void 0 ? s : r[o];
          },
          set: function (r, o, s) {
            ConfigModel.set(o, s);
            return !0;
          },
        });
        e.__configShimmed = !0;
        return e;
      },
    };
  });
