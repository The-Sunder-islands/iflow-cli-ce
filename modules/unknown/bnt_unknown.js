/**
 * @module bnt
 * @category unknown
 * @label unknown
 * @position 1455 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bnt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bnt = T((tyc, Rqn) => {
  Rqn.exports = Gnr;
  function Gnr(t) {
    if (t._collected) return;
    if (t._paused) return t.on("resume", Gnr.bind(null, t));
    ((t._collected = !0), t.pause(), t.on("data", r), t.on("end", r));
    var e = [];
    function r(a) {
      (typeof a == "string" && (a = new Buffer(a)), !(Buffer.isBuffer(a) && !a.length) && e.push(a));
    }
    t.on("entry", o);
    var n = [];
    function o(a) {
      (Gnr(a), n.push(a));
    }
    t.on("proxy", s);
    function s(a) {
      a.pause();
    }
    t.pipe = (function (a) {
      return function (u) {
        var c = 0;
        (function d() {
          var f = n[c++];
          if (!f) return m();
          (f.on("end", d), u ? u.add(f) : t.emit("entry", f));
        })();
        function m() {
          (t.removeListener("entry", o),
            t.removeListener("data", r),
            t.removeListener("end", r),
            (t.pipe = a),
            u && t.pipe(u),
            e.forEach(function (d) {
              d ? t.emit("data", d) : t.emit("end");
            }),
            t.resume());
        }
        return u;
      };
    })(t.pipe);
  }
});