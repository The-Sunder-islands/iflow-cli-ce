/**
 * @module c3i
 * @category utils/oop
 * @label oop
 * @position 1689 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (c3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var c3i = T((oGc, u3i) => {
  "use strict";
  u3i.exports = function (t) {
    var e = Z0(),
      r = t._async,
      n = e.tryCatch,
      o = e.errorObj;
    function s(c, m) {
      var d = this;
      if (!e.isArray(c)) return a.call(d, c, m);
      var f = n(m).apply(d._boundValue(), [null].concat(c));
      f === o && r.throwLater(f.e);
    }
    function a(c, m) {
      var d = this,
        f = d._boundValue(),
        p = c === void 0 ? n(m).call(f, null) : n(m).call(f, null, c);
      p === o && r.throwLater(p.e);
    }
    function u(c, m) {
      var d = this;
      if (!c) {
        var f = new Error(c + "");
        ((f.cause = c), (c = f));
      }
      var p = n(m).call(d._boundValue(), c);
      p === o && r.throwLater(p.e);
    }
    t.prototype.asCallback = t.prototype.nodeify = function (c, m) {
      if (typeof c == "function") {
        var d = a;
        (m !== void 0 && Object(m).spread && (d = s), this._then(d, u, void 0, this, c));
      }
      return this;
    };
  };
});