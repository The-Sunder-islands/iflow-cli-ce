/**
 * @module Oye
 * @category utils/oop
 * @label oop
 * @position 1061 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Oye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Oye = T((XSn, ZSn) => {
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
      (ZSn.exports = t =
        (function (s) {
          n(a, s);
          function a(u, c, m, d) {
            if ((a.__super__.constructor.call(this, u), m == null))
              throw new Error("Missing DTD entity name. " + this.debugInfo(m));
            if (d == null) throw new Error("Missing DTD entity value. " + this.debugInfo(m));
            if (((this.pe = !!c), (this.name = this.stringify.eleName(m)), !r(d)))
              this.value = this.stringify.dtdEntityValue(d);
            else {
              if (!d.pubID && !d.sysID)
                throw new Error(
                  "Public and/or system identifiers are required for an external entity. " + this.debugInfo(m),
                );
              if (d.pubID && !d.sysID)
                throw new Error("System identifier is required for a public external entity. " + this.debugInfo(m));
              if (
                (d.pubID != null && (this.pubID = this.stringify.dtdPubID(d.pubID)),
                d.sysID != null && (this.sysID = this.stringify.dtdSysID(d.sysID)),
                d.nData != null && (this.nData = this.stringify.dtdNData(d.nData)),
                this.pe && this.nData)
              )
                throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(m));
            }
          }
          return (
            (a.prototype.toString = function (u) {
              return this.options.writer.set(u).dtdEntity(this);
            }),
            a
          );
        })(e)));
  }).call(XSn);
});