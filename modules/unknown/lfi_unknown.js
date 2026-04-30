/**
 * @module lfi
 * @category unknown
 * @label unknown
 * @position 1634 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lfi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lfi = T((rQc, cfi) => {
  var lpr = Ae("stream"),
    CSa = mlt(),
    SSa = kEe(),
    wSa = ult();
  function xSa(t, e) {
    let r = lpr.PassThrough({ objectMode: !0 }),
      n = lpr.PassThrough(),
      o = lpr.Transform({ objectMode: !0 }),
      s = t instanceof RegExp ? t : t && new RegExp(t),
      a;
    ((o._transform = function (c, m, d) {
      if (a || (s && !s.exec(c.path))) return (c.autodrain(), d());
      ((a = !0),
        u.emit("entry", c),
        c.on("error", function (f) {
          n.emit("error", f);
        }),
        c
          .pipe(n)
          .on("error", function (f) {
            d(f);
          })
          .on("finish", function (f) {
            d(null, f);
          }));
    }),
      r
        .pipe(CSa(e))
        .on("error", function (c) {
          n.emit("error", c);
        })
        .pipe(o)
        .on("error", Object)
        .on("finish", function () {
          a ? n.end() : n.emit("error", new Error("PATTERN_NOT_FOUND"));
        }));
    let u = SSa(r, n);
    return (
      (u.buffer = function () {
        return wSa(n);
      }),
      u
    );
  }
  cfi.exports = xSa;
});