/**
 * @module GZe
 * @category unknown
 * @label unknown
 * @position 1150 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GZe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GZe = T((qbc, tIn) => {
  "use strict";
  var ZDn = gF().codes.ERR_STREAM_PREMATURE_CLOSE;
  function NDs(t) {
    var e = !1;
    return function () {
      if (!e) {
        e = !0;
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        t.apply(this, n);
      }
    };
  }
  function PDs() {}
  function BDs(t) {
    return t.setHeader && typeof t.abort == "function";
  }
  function eIn(t, e, r) {
    if (typeof e == "function") return eIn(t, null, e);
    (e || (e = {}), (r = NDs(r || PDs)));
    var n = e.readable || (e.readable !== !1 && t.readable),
      o = e.writable || (e.writable !== !1 && t.writable),
      s = function () {
        t.writable || u();
      },
      a = t._writableState && t._writableState.finished,
      u = function () {
        ((o = !1), (a = !0), n || r.call(t));
      },
      c = t._readableState && t._readableState.endEmitted,
      m = function () {
        ((n = !1), (c = !0), o || r.call(t));
      },
      d = function (g) {
        r.call(t, g);
      },
      f = function () {
        var g;
        if (n && !c) return ((!t._readableState || !t._readableState.ended) && (g = new ZDn()), r.call(t, g));
        if (o && !a) return ((!t._writableState || !t._writableState.ended) && (g = new ZDn()), r.call(t, g));
      },
      p = function () {
        t.req.on("finish", u);
      };
    return (
      BDs(t)
        ? (t.on("complete", u), t.on("abort", f), t.req ? p() : t.on("request", p))
        : o && !t._writableState && (t.on("end", s), t.on("close", s)),
      t.on("end", m),
      t.on("finish", u),
      e.error !== !1 && t.on("error", d),
      t.on("close", f),
      function () {
        (t.removeListener("complete", u),
          t.removeListener("abort", f),
          t.removeListener("request", p),
          t.req && t.req.removeListener("finish", u),
          t.removeListener("end", s),
          t.removeListener("close", s),
          t.removeListener("finish", u),
          t.removeListener("end", m),
          t.removeListener("error", d),
          t.removeListener("close", f));
      }
    );
  }
  tIn.exports = eIn;
});