/**
 * @module aRr
 * @category utils/data
 * @label data
 * @position 63 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aRr = T((x4u, sRr) => {
  var iRr = G6t(),
    oRr = sRr.exports;
  (function () {
    "use strict";
    function t(m) {
      return m < 10 ? "0" + m : m;
    }
    var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      r =
        /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      n,
      o,
      s = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
      a;
    function u(m) {
      return (
        (r.lastIndex = 0),
        r.test(m)
          ? '"' +
            m.replace(r, function (d) {
              var f = s[d];
              return typeof f == "string" ? f : "\\u" + ("0000" + d.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + m + '"'
      );
    }
    function c(m, d) {
      var f,
        p,
        h,
        g,
        b = n,
        A,
        y = d[m],
        E = y != null && (y instanceof iRr || iRr.isBigNumber(y));
      switch (
        (y && typeof y == "object" && typeof y.toJSON == "function" && (y = y.toJSON(m)),
        typeof a == "function" && (y = a.call(d, m, y)),
        typeof y)
      ) {
        case "string":
          return E ? y : u(y);
        case "number":
          return isFinite(y) ? String(y) : "null";
        case "boolean":
        case "null":
        case "bigint":
          return String(y);
        case "object":
          if (!y) return "null";
          if (((n += o), (A = []), Object.prototype.toString.apply(y) === "[object Array]")) {
            for (g = y.length, f = 0; f < g; f += 1) A[f] = c(f, y) || "null";
            return (
              (h =
                A.length === 0
                  ? "[]"
                  : n
                    ? `[
` +
                      n +
                      A.join(
                        `,
` + n,
                      ) +
                      `
` +
                      b +
                      "]"
                    : "[" + A.join(",") + "]"),
              (n = b),
              h
            );
          }
          if (a && typeof a == "object")
            for (g = a.length, f = 0; f < g; f += 1)
              typeof a[f] == "string" && ((p = a[f]), (h = c(p, y)), h && A.push(u(p) + (n ? ": " : ":") + h));
          else
            Object.keys(y).forEach(function (v) {
              var C = c(v, y);
              C && A.push(u(v) + (n ? ": " : ":") + C);
            });
          return (
            (h =
              A.length === 0
                ? "{}"
                : n
                  ? `{
` +
                    n +
                    A.join(
                      `,
` + n,
                    ) +
                    `
` +
                    b +
                    "}"
                  : "{" + A.join(",") + "}"),
            (n = b),
            h
          );
      }
    }
    typeof oRr.stringify != "function" &&
      (oRr.stringify = function (m, d, f) {
        var p;
        if (((n = ""), (o = ""), typeof f == "number")) for (p = 0; p < f; p += 1) o += " ";
        else typeof f == "string" && (o = f);
        if (((a = d), d && typeof d != "function" && (typeof d != "object" || typeof d.length != "number")))
          throw new Error("JSON.stringify");
        return c("", { "": m });
      });
  })();
});