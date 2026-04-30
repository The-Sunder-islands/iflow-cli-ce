/**
 * @module Rye
 * @category utils/xml
 * @label xml
 * @position 1059 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rye = T((zSn, YSn) => {
  (function () {
    var t,
      e,
      r,
      n = function (s, a) {
        for (var u in a) o.call(a, u) && (s[u] = a[u]);
        function c() {
          this.constructor = s;
        }
        return ((c.prototype = a.prototype), (s.prototype = new c()), (s.__super__ = a.prototype), s);
      },
      o = {}.hasOwnProperty;
    ((r = zk().isObject),
      (e = B2()),
      (YSn.exports = t =
        (function (s) {
          n(a, s);
          function a(u, c, m, d) {
            var f;
            (a.__super__.constructor.call(this, u),
              r(c) && ((f = c), (c = f.version), (m = f.encoding), (d = f.standalone)),
              c || (c = "1.0"),
              (this.version = this.stringify.xmlVersion(c)),
              m != null && (this.encoding = this.stringify.xmlEncoding(m)),
              d != null && (this.standalone = this.stringify.xmlStandalone(d)));
          }
          return (
            (a.prototype.toString = function (u) {
              return this.options.writer.set(u).declaration(this);
            }),
            a
          );
        })(e)));
  }).call(zSn);
});