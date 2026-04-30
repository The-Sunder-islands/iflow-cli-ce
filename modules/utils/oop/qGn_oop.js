/**
 * @module qGn
 * @category utils/oop
 * @label oop
 * @position 1441 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qGn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qGn = T((L6c, GGn) => {
  var Cce = Ae("stream"),
    cZs = ent(),
    lZs = kEe(),
    mZs = Jrt();
  (!Cce.Writable || !Cce.Writable.prototype.destroy) && (Cce = bO());
  function dZs(t, e) {
    var r = Cce.PassThrough({ objectMode: !0 }),
      n = Cce.PassThrough(),
      o = Cce.Transform({ objectMode: !0 }),
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
        .pipe(cZs(e))
        .on("error", function (c) {
          n.emit("error", c);
        })
        .pipe(o)
        .on("error", Object)
        .on("finish", function () {
          a ? n.end() : n.emit("error", new Error("PATTERN_NOT_FOUND"));
        }));
    var u = lZs(r, n);
    return (
      (u.buffer = function () {
        return mZs(n);
      }),
      u
    );
  }
  GGn.exports = dZs;
});