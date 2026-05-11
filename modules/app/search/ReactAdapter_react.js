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
            if (typeof o === "string" && !o.startsWith("_") && o !== "toJSON" && o !== "inspect" && o !== "then") {
              try { var e = new Error("deprecated: t.merged." + o + " — use ConfigModel.get(\"" + o + "\") instead"); console.warn("[deprecated] t.merged." + o + " called at:"); console.warn(e.stack); } catch (t) {}
            }
            var s = ConfigModel.get(o);
            return s !== void 0 ? s : r[o];
          },
          set: function (r, o, s) {
            ConfigModel.set(o, s);
            return !0;
          },
          ownKeys: function (r) {
            var n = Object.keys(r);
            var o = Object.keys(ConfigModel.getAll());
            for (var s = 0; s < o.length; s++) { if (n.indexOf(o[s]) < 0) n.push(o[s]); }
            return n;
          },
          getOwnPropertyDescriptor: function (r, n) {
            if (n in r) return Object.getOwnPropertyDescriptor(r, n);
            return { configurable: !0, enumerable: !0, value: ConfigModel.get(n) };
          },
        });
        e.__configShimmed = !0;
        return e;
      },
    };
  });
