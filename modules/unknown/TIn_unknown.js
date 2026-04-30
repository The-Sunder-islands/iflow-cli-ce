/**
 * @module TIn
 * @category unknown
 * @label unknown
 * @position 1156 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TIn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TIn = T((Jbc, xIn) => {
  "use strict";
  var uYt;
  function SIs(t) {
    var e = !1;
    return function () {
      e || ((e = !0), t.apply(void 0, arguments));
    };
  }
  var wIn = gF().codes,
    wIs = wIn.ERR_MISSING_ARGS,
    xIs = wIn.ERR_STREAM_DESTROYED;
  function CIn(t) {
    if (t) throw t;
  }
  function TIs(t) {
    return t.setHeader && typeof t.abort == "function";
  }
  function DIs(t, e, r, n) {
    n = SIs(n);
    var o = !1;
    (t.on("close", function () {
      o = !0;
    }),
      uYt === void 0 && (uYt = GZe()),
      uYt(t, { readable: e, writable: r }, function (a) {
        if (a) return n(a);
        ((o = !0), n());
      }));
    var s = !1;
    return function (a) {
      if (!o && !s) {
        if (((s = !0), TIs(t))) return t.abort();
        if (typeof t.destroy == "function") return t.destroy();
        n(a || new xIs("pipe"));
      }
    };
  }
  function SIn(t) {
    t();
  }
  function IIs(t, e) {
    return t.pipe(e);
  }
  function RIs(t) {
    return !t.length || typeof t[t.length - 1] != "function" ? CIn : t.pop();
  }
  function kIs() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    var n = RIs(e);
    if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2)) throw new wIs("streams");
    var o,
      s = e.map(function (a, u) {
        var c = u < e.length - 1,
          m = u > 0;
        return DIs(a, c, m, function (d) {
          (o || (o = d), d && s.forEach(SIn), !c && (s.forEach(SIn), n(o)));
        });
      });
    return e.reduce(IIs);
  }
  xIn.exports = kIs;
});