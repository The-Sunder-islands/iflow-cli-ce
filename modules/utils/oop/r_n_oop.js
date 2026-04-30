/**
 * @module r_n
 * @category utils/oop
 * @label oop
 * @position 960 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (r_n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var r_n = T((Chc, t_n) => {
  "use strict";
  t_n.exports = function (t, e, r) {
    var n = C0(),
      o = t.TimeoutError;
    function s(f) {
      this.handle = f;
    }
    s.prototype._resultCancelled = function () {
      clearTimeout(this.handle);
    };
    var a = function (f) {
        return u(+this).thenReturn(f);
      },
      u = (t.delay = function (f, p) {
        var h, g;
        return (
          p !== void 0
            ? ((h = t.resolve(p)._then(a, null, null, f, void 0)),
              r.cancellation() && p instanceof t && h._setOnCancel(p))
            : ((h = new t(e)),
              (g = setTimeout(function () {
                h._fulfill();
              }, +f)),
              r.cancellation() && h._setOnCancel(new s(g)),
              h._captureStackTrace()),
          h._setAsyncGuaranteed(),
          h
        );
      });
    t.prototype.delay = function (f) {
      return u(f, this);
    };
    var c = function (f, p, h) {
      var g;
      (typeof p != "string" ? (p instanceof Error ? (g = p) : (g = new o("operation timed out"))) : (g = new o(p)),
        n.markAsOriginatingFromRejection(g),
        f._attachExtraTrace(g),
        f._reject(g),
        h?.cancel());
    };
    function m(f) {
      return (clearTimeout(this.handle), f);
    }
    function d(f) {
      throw (clearTimeout(this.handle), f);
    }
    t.prototype.timeout = function (f, p) {
      f = +f;
      var h,
        g,
        b = new s(
          setTimeout(function () {
            h.isPending() && c(h, p, g);
          }, f),
        );
      return (
        r.cancellation()
          ? ((g = this.then()), (h = g._then(m, d, void 0, b, void 0)), h._setOnCancel(b))
          : (h = this._then(m, d, void 0, b, void 0)),
        h
      );
    };
  };
});