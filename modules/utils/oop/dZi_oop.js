/**
 * @module dZi
 * @category utils/oop
 * @label oop
 * @position 1914 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dZi = T((Kwl, mZi) => {
  "use strict";
  function Hfu(t, e) {
    var r = t;
    e.slice(0, -1).forEach(function (o) {
      r = r[o] || {};
    });
    var n = e[e.length - 1];
    return n in r;
  }
  function cZi(t) {
    return typeof t == "number" || /^0x[0-9a-f]+$/i.test(t) ? !0 : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(t);
  }
  function lZi(t, e) {
    return (e === "constructor" && typeof t[e] == "function") || e === "__proto__";
  }
  mZi.exports = function (t, e) {
    e || (e = {});
    var r = { bools: {}, strings: {}, unknownFn: null };
    (typeof e.unknown == "function" && (r.unknownFn = e.unknown),
      typeof e.boolean == "boolean" && e.boolean
        ? (r.allBools = !0)
        : []
            .concat(e.boolean)
            .filter(Boolean)
            .forEach(function (C) {
              r.bools[C] = !0;
            }));
    var n = {};
    function o(C) {
      return n[C].some(function (x) {
        return r.bools[x];
      });
    }
    (Object.keys(e.alias || {}).forEach(function (C) {
      ((n[C] = [].concat(e.alias[C])),
        n[C].forEach(function (x) {
          n[x] = [C].concat(
            n[C].filter(function (k) {
              return x !== k;
            }),
          );
        }));
    }),
      []
        .concat(e.string)
        .filter(Boolean)
        .forEach(function (C) {
          ((r.strings[C] = !0),
            n[C] &&
              [].concat(n[C]).forEach(function (x) {
                r.strings[x] = !0;
              }));
        }));
    var s = e.default || {},
      a = { _: [] };
    function u(C, x) {
      return (r.allBools && /^--[^=]+$/.test(x)) || r.strings[C] || r.bools[C] || n[C];
    }
    function c(C, x, k) {
      for (var R = C, P = 0; P < x.length - 1; P++) {
        var D = x[P];
        if (lZi(R, D)) return;
        (R[D] === void 0 && (R[D] = {}),
          (R[D] === Object.prototype || R[D] === Number.prototype || R[D] === String.prototype) && (R[D] = {}),
          R[D] === Array.prototype && (R[D] = []),
          (R = R[D]));
      }
      var O = x[x.length - 1];
      lZi(R, O) ||
        ((R === Object.prototype || R === Number.prototype || R === String.prototype) && (R = {}),
        R === Array.prototype && (R = []),
        R[O] === void 0 || r.bools[O] || typeof R[O] == "boolean"
          ? (R[O] = k)
          : Array.isArray(R[O])
            ? R[O].push(k)
            : (R[O] = [R[O], k]));
    }
    function m(C, x, k) {
      if (!(k && r.unknownFn && !u(C, k) && r.unknownFn(k) === !1)) {
        var R = !r.strings[C] && cZi(x) ? Number(x) : x;
        (c(a, C.split("."), R),
          (n[C] || []).forEach(function (P) {
            c(a, P.split("."), R);
          }));
      }
    }
    Object.keys(r.bools).forEach(function (C) {
      m(C, s[C] === void 0 ? !1 : s[C]);
    });
    var d = [];
    t.indexOf("--") !== -1 && ((d = t.slice(t.indexOf("--") + 1)), (t = t.slice(0, t.indexOf("--"))));
    for (var f = 0; f < t.length; f++) {
      var p = t[f],
        h,
        g;
      if (/^--.+=/.test(p)) {
        var b = p.match(/^--([^=]+)=([\s\S]*)$/);
        h = b[1];
        var A = b[2];
        (r.bools[h] && (A = A !== "false"), m(h, A, p));
      } else if (/^--no-.+/.test(p)) ((h = p.match(/^--no-(.+)/)[1]), m(h, !1, p));
      else if (/^--.+/.test(p))
        ((h = p.match(/^--(.+)/)[1]),
          (g = t[f + 1]),
          g !== void 0 && !/^(-|--)[^-]/.test(g) && !r.bools[h] && !r.allBools && (!n[h] || !o(h))
            ? (m(h, g, p), (f += 1))
            : /^(true|false)$/.test(g)
              ? (m(h, g === "true", p), (f += 1))
              : m(h, r.strings[h] ? "" : !0, p));
      else if (/^-[^-]+/.test(p)) {
        for (var y = p.slice(1, -1).split(""), E = !1, v = 0; v < y.length; v++) {
          if (((g = p.slice(v + 2)), g === "-")) {
            m(y[v], g, p);
            continue;
          }
          if (/[A-Za-z]/.test(y[v]) && g[0] === "=") {
            (m(y[v], g.slice(1), p), (E = !0));
            break;
          }
          if (/[A-Za-z]/.test(y[v]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(g)) {
            (m(y[v], g, p), (E = !0));
            break;
          }
          if (y[v + 1] && y[v + 1].match(/\W/)) {
            (m(y[v], p.slice(v + 2), p), (E = !0));
            break;
          } else m(y[v], r.strings[y[v]] ? "" : !0, p);
        }
        ((h = p.slice(-1)[0]),
          !E &&
            h !== "-" &&
            (t[f + 1] && !/^(-|--)[^-]/.test(t[f + 1]) && !r.bools[h] && (!n[h] || !o(h))
              ? (m(h, t[f + 1], p), (f += 1))
              : t[f + 1] && /^(true|false)$/.test(t[f + 1])
                ? (m(h, t[f + 1] === "true", p), (f += 1))
                : m(h, r.strings[h] ? "" : !0, p)));
      } else if (
        ((!r.unknownFn || r.unknownFn(p) !== !1) && a._.push(r.strings._ || !cZi(p) ? p : Number(p)), e.stopEarly)
      ) {
        a._.push.apply(a._, t.slice(f + 1));
        break;
      }
    }
    return (
      Object.keys(s).forEach(function (C) {
        Hfu(a, C.split(".")) ||
          (c(a, C.split("."), s[C]),
          (n[C] || []).forEach(function (x) {
            c(a, x.split("."), s[C]);
          }));
      }),
      e["--"]
        ? (a["--"] = d.slice())
        : d.forEach(function (C) {
            a._.push(C);
          }),
      a
    );
  };
});