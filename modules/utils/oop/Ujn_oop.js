/**
 * @module Ujn
 * @category utils/oop
 * @label oop
 * @position 1402 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ujn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ujn = T(() => {
  "use strict";
  var cEe = Mjn();
  Buffer.prototype.indexOf ||
    (Buffer.prototype.indexOf = function (t, e) {
      ((e = e || 0),
        typeof t == "string" || t instanceof String
          ? (t = cEe(t))
          : (typeof t == "number" || t instanceof Number) && (t = cEe([t])));
      for (var r = t.length, n = e; n <= this.length - r; n++) {
        for (var o = !1, s = 0; s < r; s++)
          if (this[n + s] != t[s]) {
            o = !0;
            break;
          }
        if (!o) return n;
      }
      return -1;
    });
  function Fjn(t, e) {
    typeof t == "string" || t instanceof String
      ? (t = cEe(t))
      : (typeof t == "number" || t instanceof Number) && (t = cEe([t]));
    var r = t.length;
    e = e || this.length - r;
    for (var n = e; n >= 0; n--) {
      for (var o = !1, s = 0; s < r; s++)
        if (this[n + s] != t[s]) {
          o = !0;
          break;
        }
      if (!o) return n;
    }
    return -1;
  }
  Buffer.prototype.lastIndexOf
    ? cEe("ABC").lastIndexOf("ABC") === -1 && (Buffer.prototype.lastIndexOf = Fjn)
    : (Buffer.prototype.lastIndexOf = Fjn);
});