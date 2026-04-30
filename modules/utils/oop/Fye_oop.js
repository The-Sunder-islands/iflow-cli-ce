/**
 * @module Fye
 * @category utils/oop
 * @label oop
 * @position 1067 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fye = T((lwn, mwn) => {
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
    ((t = B2()),
      (mwn.exports = e =
        (function (o) {
          r(s, o);
          function s(a, u, c) {
            if ((s.__super__.constructor.call(this, a), u == null))
              throw new Error("Missing instruction target. " + this.debugInfo());
            ((this.target = this.stringify.insTarget(u)), c && (this.value = this.stringify.insValue(c)));
          }
          return (
            (s.prototype.clone = function () {
              return Object.create(this);
            }),
            (s.prototype.toString = function (a) {
              return this.options.writer.set(a).processingInstruction(this);
            }),
            s
          );
        })(t)));
  }).call(lwn);
});