/**
 * @module CTt
 * @category unknown
 * @label unknown
 * @position 472 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CTt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CTt = T((uMu, $Zr) => {
  "use strict";
  $Zr.exports = UZr;
  var vTt = /[\s{}=;:[\],'"()<>]/g,
    nUo = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
    iUo = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
    oUo = /^ *[*/]+ */,
    sUo = /^\s*\*?\/*/,
    aUo = /\n/g,
    uUo = /\s/,
    cUo = /\\(.?)/g,
    lUo = {
      0: "\0",
      r: "\r",
      n: `
`,
      t: "	",
    };
  function FZr(t) {
    return t.replace(cUo, function (e, r) {
      switch (r) {
        case "\\":
        case "":
          return r;
        default:
          return lUo[r] || "";
      }
    });
  }
  UZr.unescape = FZr;
  function UZr(t, e) {
    t = t.toString();
    var r = 0,
      n = t.length,
      o = 1,
      s = 0,
      a = {},
      u = [],
      c = null;
    function m(C) {
      return Error("illegal " + C + " (line " + o + ")");
    }
    function d() {
      var C = c === "'" ? iUo : nUo;
      C.lastIndex = r - 1;
      var x = C.exec(t);
      if (!x) throw m("string");
      return ((r = C.lastIndex), A(c), (c = null), FZr(x[1]));
    }
    function f(C) {
      return t.charAt(C);
    }
    function p(C, x, k) {
      var R = { type: t.charAt(C++), lineEmpty: !1, leading: k },
        P;
      e ? (P = 2) : (P = 3);
      var D = C - P,
        O;
      do
        if (
          --D < 0 ||
          (O = t.charAt(D)) ===
            `
`
        ) {
          R.lineEmpty = !0;
          break;
        }
      while (O === " " || O === "	");
      for (var N = t.substring(C, x).split(aUo), F = 0; F < N.length; ++F)
        N[F] = N[F].replace(e ? sUo : oUo, "").trim();
      ((R.text = N.join(
        `
`,
      ).trim()),
        (a[o] = R),
        (s = o));
    }
    function h(C) {
      var x = g(C),
        k = t.substring(C, x),
        R = /^\s*\/\//.test(k);
      return R;
    }
    function g(C) {
      for (
        var x = C;
        x < n &&
        f(x) !==
          `
`;
      )
        x++;
      return x;
    }
    function b() {
      if (u.length > 0) return u.shift();
      if (c) return d();
      var C,
        x,
        k,
        R,
        P,
        D = r === 0;
      do {
        if (r === n) return null;
        for (C = !1; uUo.test((k = f(r))); )
          if (
            (k ===
              `
` && ((D = !0), ++o),
            ++r === n)
          )
            return null;
        if (f(r) === "/") {
          if (++r === n) throw m("comment");
          if (f(r) === "/")
            if (e) {
              if (((R = r), (P = !1), h(r - 1))) {
                P = !0;
                do if (((r = g(r)), r === n || (r++, !D))) break;
                while (h(r));
              } else r = Math.min(n, g(r) + 1);
              (P && (p(R, r, D), (D = !0)), o++, (C = !0));
            } else {
              for (
                P = f((R = r + 1)) === "/";
                f(++r) !==
                `
`;
              )
                if (r === n) return null;
              (++r, P && (p(R, r - 1, D), (D = !0)), ++o, (C = !0));
            }
          else if ((k = f(r)) === "*") {
            ((R = r + 1), (P = e || f(R) === "*"));
            do {
              if (
                (k ===
                  `
` && ++o,
                ++r === n)
              )
                throw m("comment");
              ((x = k), (k = f(r)));
            } while (x !== "*" || k !== "/");
            (++r, P && (p(R, r - 2, D), (D = !0)), (C = !0));
          } else return "/";
        }
      } while (C);
      var O = r;
      vTt.lastIndex = 0;
      var N = vTt.test(f(O++));
      if (!N) for (; O < n && !vTt.test(f(O)); ) ++O;
      var F = t.substring(r, (r = O));
      return ((F === '"' || F === "'") && (c = F), F);
    }
    function A(C) {
      u.push(C);
    }
    function y() {
      if (!u.length) {
        var C = b();
        if (C === null) return null;
        A(C);
      }
      return u[0];
    }
    function E(C, x) {
      var k = y(),
        R = k === C;
      if (R) return (b(), !0);
      if (!x) throw m("token '" + k + "', '" + C + "' expected");
      return !1;
    }
    function v(C) {
      var x = null,
        k;
      return (
        C === void 0
          ? ((k = a[o - 1]),
            delete a[o - 1],
            k && (e || k.type === "*" || k.lineEmpty) && (x = k.leading ? k.text : null))
          : (s < C && y(),
            (k = a[C]),
            delete a[C],
            k && !k.lineEmpty && (e || k.type === "/") && (x = k.leading ? null : k.text)),
        x
      );
    }
    return Object.defineProperty({ next: b, peek: y, push: A, skip: E, cmnt: v }, "line", {
      get: function () {
        return o;
      },
    });
  }
});