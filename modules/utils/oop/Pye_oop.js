/**
 * @module Pye
 * @category utils/oop
 * @label oop
 * @position 1063 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pye = T((rwn, nwn) => {
  (function () {
    var t,
      e,
      r = function (o, s) {
        for (var a in s) n.call(s, a) && (o[a] = s[a]);
        function u() {
          this.constructor = o;
        }
        return ((u.prototype = s.prototype), (o.prototype = new u()), (o.__super__ = s.prototype), o);
      },
      n = {}.hasOwnProperty;
    ((e = B2()),
      (nwn.exports = t =
        (function (o) {
          r(s, o);
          function s(a, u, c) {
            if ((s.__super__.constructor.call(this, a), u == null))
              throw new Error("Missing DTD notation name. " + this.debugInfo(u));
            if (!c.pubID && !c.sysID)
              throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(u));
            ((this.name = this.stringify.eleName(u)),
              c.pubID != null && (this.pubID = this.stringify.dtdPubID(c.pubID)),
              c.sysID != null && (this.sysID = this.stringify.dtdSysID(c.sysID)));
          }
          return (
            (s.prototype.toString = function (a) {
              return this.options.writer.set(a).dtdNotation(this);
            }),
            s
          );
        })(e)));
  }).call(rwn);
});