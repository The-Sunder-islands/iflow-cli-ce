/**
 * @module Swn
 * @category utils/xml
 * @label xml
 * @position 1073 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Swn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Swn = T((vwn, Cwn) => {
  (function () {
    var t,
      e,
      r,
      n,
      o,
      s = function (u, c) {
        for (var m in c) a.call(c, m) && (u[m] = c[m]);
        function d() {
          this.constructor = u;
        }
        return ((d.prototype = c.prototype), (u.prototype = new d()), (u.__super__ = c.prototype), u);
      },
      a = {}.hasOwnProperty;
    ((o = zk().isPlainObject),
      (e = B2()),
      (n = CWt()),
      (r = JXe()),
      (Cwn.exports = t =
        (function (u) {
          s(c, u);
          function c(m) {
            (c.__super__.constructor.call(this, null),
              (this.name = "?xml"),
              m || (m = {}),
              m.writer || (m.writer = new r()),
              (this.options = m),
              (this.stringify = new n(m)),
              (this.isDocument = !0));
          }
          return (
            (c.prototype.end = function (m) {
              var d;
              return (
                m ? o(m) && ((d = m), (m = this.options.writer.set(d))) : (m = this.options.writer),
                m.document(this)
              );
            }),
            (c.prototype.toString = function (m) {
              return this.options.writer.set(m).document(this);
            }),
            c
          );
        })(e)));
  }).call(vwn);
});