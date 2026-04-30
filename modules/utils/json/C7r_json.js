/**
 * @module C7r
 * @category utils/json
 * @label json
 * @position 49 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (C7r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var C7r = T((h4u, v7r) => {
  var xee = 1e3,
    Tee = xee * 60,
    Dee = Tee * 60,
    hG = Dee * 24,
    Y1o = hG * 7,
    K1o = hG * 365.25;
  v7r.exports = function (t, e) {
    e = e || {};
    var r = typeof t;
    if (r === "string" && t.length > 0) return J1o(t);
    if (r === "number" && isFinite(t)) return e.long ? Z1o(t) : X1o(t);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
  };
  function J1o(t) {
    if (((t = String(t)), !(t.length > 100))) {
      var e =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
          t,
        );
      if (e) {
        var r = parseFloat(e[1]),
          n = (e[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * K1o;
          case "weeks":
          case "week":
          case "w":
            return r * Y1o;
          case "days":
          case "day":
          case "d":
            return r * hG;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * Dee;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * Tee;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * xee;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  function X1o(t) {
    var e = Math.abs(t);
    return e >= hG
      ? Math.round(t / hG) + "d"
      : e >= Dee
        ? Math.round(t / Dee) + "h"
        : e >= Tee
          ? Math.round(t / Tee) + "m"
          : e >= xee
            ? Math.round(t / xee) + "s"
            : t + "ms";
  }
  function Z1o(t) {
    var e = Math.abs(t);
    return e >= hG
      ? lke(t, e, hG, "day")
      : e >= Dee
        ? lke(t, e, Dee, "hour")
        : e >= Tee
          ? lke(t, e, Tee, "minute")
          : e >= xee
            ? lke(t, e, xee, "second")
            : t + " ms";
  }
  function lke(t, e, r, n) {
    var o = e >= r * 1.5;
    return Math.round(t / r) + " " + n + (o ? "s" : "");
  }
});