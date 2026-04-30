/**
 * @module udi
 * @category unknown
 * @label unknown
 * @position 1622 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (udi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var udi = T((sFc, adi) => {
  "use strict";
  var tdi = tSe(),
    {
      CHAR_ASTERISK: mfr,
      CHAR_AT: iCa,
      CHAR_BACKWARD_SLASH: rSe,
      CHAR_COMMA: oCa,
      CHAR_DOT: dfr,
      CHAR_EXCLAMATION_MARK: ffr,
      CHAR_FORWARD_SLASH: sdi,
      CHAR_LEFT_CURLY_BRACE: pfr,
      CHAR_LEFT_PARENTHESES: hfr,
      CHAR_LEFT_SQUARE_BRACKET: sCa,
      CHAR_PLUS: aCa,
      CHAR_QUESTION_MARK: rdi,
      CHAR_RIGHT_CURLY_BRACE: uCa,
      CHAR_RIGHT_PARENTHESES: ndi,
      CHAR_RIGHT_SQUARE_BRACKET: cCa,
    } = eSe(),
    idi = (t) => t === sdi || t === rSe,
    odi = (t) => {
      t.isPrefix !== !0 && (t.depth = t.isGlobstar ? 1 / 0 : 1);
    },
    lCa = (t, e) => {
      let r = e || {},
        n = t.length - 1,
        o = r.parts === !0 || r.scanToEnd === !0,
        s = [],
        a = [],
        u = [],
        c = t,
        m = -1,
        d = 0,
        f = 0,
        p = !1,
        h = !1,
        g = !1,
        b = !1,
        A = !1,
        y = !1,
        E = !1,
        v = !1,
        C = !1,
        x = !1,
        k = 0,
        R,
        P,
        D = { value: "", depth: 0, isGlob: !1 },
        O = () => m >= n,
        N = () => c.charCodeAt(m + 1),
        F = () => ((R = P), c.charCodeAt(++m));
      for (; m < n; ) {
        P = F();
        let K;
        if (P === rSe) {
          ((E = D.backslashes = !0), (P = F()), P === pfr && (y = !0));
          continue;
        }
        if (y === !0 || P === pfr) {
          for (k++; O() !== !0 && (P = F()); ) {
            if (P === rSe) {
              ((E = D.backslashes = !0), F());
              continue;
            }
            if (P === pfr) {
              k++;
              continue;
            }
            if (y !== !0 && P === dfr && (P = F()) === dfr) {
              if (((p = D.isBrace = !0), (g = D.isGlob = !0), (x = !0), o === !0)) continue;
              break;
            }
            if (y !== !0 && P === oCa) {
              if (((p = D.isBrace = !0), (g = D.isGlob = !0), (x = !0), o === !0)) continue;
              break;
            }
            if (P === uCa && (k--, k === 0)) {
              ((y = !1), (p = D.isBrace = !0), (x = !0));
              break;
            }
          }
          if (o === !0) continue;
          break;
        }
        if (P === sdi) {
          if ((s.push(m), a.push(D), (D = { value: "", depth: 0, isGlob: !1 }), x === !0)) continue;
          if (R === dfr && m === d + 1) {
            d += 2;
            continue;
          }
          f = m + 1;
          continue;
        }
        if (r.noext !== !0 && (P === aCa || P === iCa || P === mfr || P === rdi || P === ffr) === !0 && N() === hfr) {
          if (((g = D.isGlob = !0), (b = D.isExtglob = !0), (x = !0), P === ffr && m === d && (C = !0), o === !0)) {
            for (; O() !== !0 && (P = F()); ) {
              if (P === rSe) {
                ((E = D.backslashes = !0), (P = F()));
                continue;
              }
              if (P === ndi) {
                ((g = D.isGlob = !0), (x = !0));
                break;
              }
            }
            continue;
          }
          break;
        }
        if (P === mfr) {
          if ((R === mfr && (A = D.isGlobstar = !0), (g = D.isGlob = !0), (x = !0), o === !0)) continue;
          break;
        }
        if (P === rdi) {
          if (((g = D.isGlob = !0), (x = !0), o === !0)) continue;
          break;
        }
        if (P === sCa) {
          for (; O() !== !0 && (K = F()); ) {
            if (K === rSe) {
              ((E = D.backslashes = !0), F());
              continue;
            }
            if (K === cCa) {
              ((h = D.isBracket = !0), (g = D.isGlob = !0), (x = !0));
              break;
            }
          }
          if (o === !0) continue;
          break;
        }
        if (r.nonegate !== !0 && P === ffr && m === d) {
          ((v = D.negated = !0), d++);
          continue;
        }
        if (r.noparen !== !0 && P === hfr) {
          if (((g = D.isGlob = !0), o === !0)) {
            for (; O() !== !0 && (P = F()); ) {
              if (P === hfr) {
                ((E = D.backslashes = !0), (P = F()));
                continue;
              }
              if (P === ndi) {
                x = !0;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (g === !0) {
          if (((x = !0), o === !0)) continue;
          break;
        }
      }
      r.noext === !0 && ((b = !1), (g = !1));
      let B = c,
        L = "",
        G = "";
      (d > 0 && ((L = c.slice(0, d)), (c = c.slice(d)), (f -= d)),
        B && g === !0 && f > 0 ? ((B = c.slice(0, f)), (G = c.slice(f))) : g === !0 ? ((B = ""), (G = c)) : (B = c),
        B && B !== "" && B !== "/" && B !== c && idi(B.charCodeAt(B.length - 1)) && (B = B.slice(0, -1)),
        r.unescape === !0 && (G && (G = tdi.removeBackslashes(G)), B && E === !0 && (B = tdi.removeBackslashes(B))));
      let Q = {
        prefix: L,
        input: t,
        start: d,
        base: B,
        glob: G,
        isBrace: p,
        isBracket: h,
        isGlob: g,
        isExtglob: b,
        isGlobstar: A,
        negated: v,
        negatedExtglob: C,
      };
      if (
        (r.tokens === !0 && ((Q.maxDepth = 0), idi(P) || a.push(D), (Q.tokens = a)), r.parts === !0 || r.tokens === !0)
      ) {
        let K;
        for (let H = 0; H < s.length; H++) {
          let U = K ? K + 1 : d,
            Y = s[H],
            X = t.slice(U, Y);
          (r.tokens &&
            (H === 0 && d !== 0 ? ((a[H].isPrefix = !0), (a[H].value = L)) : (a[H].value = X),
            odi(a[H]),
            (Q.maxDepth += a[H].depth)),
            (H !== 0 || X !== "") && u.push(X),
            (K = Y));
        }
        if (K && K + 1 < t.length) {
          let H = t.slice(K + 1);
          (u.push(H),
            r.tokens && ((a[a.length - 1].value = H), odi(a[a.length - 1]), (Q.maxDepth += a[a.length - 1].depth)));
        }
        ((Q.slashes = s), (Q.parts = u));
      }
      return Q;
    };
  adi.exports = lCa;
});