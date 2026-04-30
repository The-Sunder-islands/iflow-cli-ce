/**
 * @module mdi
 * @category unknown
 * @label unknown
 * @position 1623 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mdi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mdi = T((aFc, ldi) => {
  "use strict";
  var Dct = eSe(),
    KD = tSe(),
    {
      MAX_LENGTH: Ict,
      POSIX_REGEX_SOURCE: mCa,
      REGEX_NON_SPECIAL_CHARS: dCa,
      REGEX_SPECIAL_CHARS_BACKREF: fCa,
      REPLACEMENTS: cdi,
    } = Dct,
    pCa = (t, e) => {
      if (typeof e.expandRange == "function") return e.expandRange(...t, e);
      t.sort();
      let r = `[${t.join("-")}]`;
      try {
        new RegExp(r);
      } catch {
        return t.map((o) => KD.escapeRegex(o)).join("..");
      }
      return r;
    },
    tme = (t, e) => `Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`,
    gfr = (t, e) => {
      if (typeof t != "string") throw new TypeError("Expected a string");
      t = cdi[t] || t;
      let r = { ...e },
        n = typeof r.maxLength == "number" ? Math.min(Ict, r.maxLength) : Ict,
        o = t.length;
      if (o > n) throw new SyntaxError(`Input length: ${o}, exceeds maximum allowed length: ${n}`);
      let s = { type: "bos", value: "", output: r.prepend || "" },
        a = [s],
        u = r.capture ? "" : "?:",
        c = Dct.globChars(r.windows),
        m = Dct.extglobChars(c),
        {
          DOT_LITERAL: d,
          PLUS_LITERAL: f,
          SLASH_LITERAL: p,
          ONE_CHAR: h,
          DOTS_SLASH: g,
          NO_DOT: b,
          NO_DOT_SLASH: A,
          NO_DOTS_SLASH: y,
          QMARK: E,
          QMARK_NO_DOT: v,
          STAR: C,
          START_ANCHOR: x,
        } = c,
        k = (Z) => `(${u}(?:(?!${x}${Z.dot ? g : d}).)*?)`,
        R = r.dot ? "" : b,
        P = r.dot ? E : v,
        D = r.bash === !0 ? k(r) : C;
      (r.capture && (D = `(${D})`), typeof r.noext == "boolean" && (r.noextglob = r.noext));
      let O = {
        input: t,
        index: -1,
        start: 0,
        dot: r.dot === !0,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: !1,
        negated: !1,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: !1,
        tokens: a,
      };
      ((t = KD.removePrefix(t, O)), (o = t.length));
      let N = [],
        F = [],
        B = [],
        L = s,
        G,
        Q = () => O.index === o - 1,
        K = (O.peek = (Z = 1) => t[O.index + Z]),
        H = (O.advance = () => t[++O.index] || ""),
        U = () => t.slice(O.index + 1),
        Y = (Z = "", oe = 0) => {
          ((O.consumed += Z), (O.index += oe));
        },
        X = (Z) => {
          ((O.output += Z.output != null ? Z.output : Z.value), Y(Z.value));
        },
        J = () => {
          let Z = 1;
          for (; K() === "!" && (K(2) !== "(" || K(3) === "?"); ) (H(), O.start++, Z++);
          return Z % 2 === 0 ? !1 : ((O.negated = !0), O.start++, !0);
        },
        q = (Z) => {
          (O[Z]++, B.push(Z));
        },
        ne = (Z) => {
          (O[Z]--, B.pop());
        },
        de = (Z) => {
          if (L.type === "globstar") {
            let oe = O.braces > 0 && (Z.type === "comma" || Z.type === "brace"),
              ue = Z.extglob === !0 || (N.length && (Z.type === "pipe" || Z.type === "paren"));
            Z.type !== "slash" &&
              Z.type !== "paren" &&
              !oe &&
              !ue &&
              ((O.output = O.output.slice(0, -L.output.length)),
              (L.type = "star"),
              (L.value = "*"),
              (L.output = D),
              (O.output += L.output));
          }
          if (
            (N.length && Z.type !== "paren" && (N[N.length - 1].inner += Z.value),
            (Z.value || Z.output) && X(Z),
            L && L.type === "text" && Z.type === "text")
          ) {
            ((L.output = (L.output || L.value) + Z.value), (L.value += Z.value));
            return;
          }
          ((Z.prev = L), a.push(Z), (L = Z));
        },
        ce = (Z, oe) => {
          let ue = { ...m[oe], conditions: 1, inner: "" };
          ((ue.prev = L), (ue.parens = O.parens), (ue.output = O.output));
          let he = (r.capture ? "(" : "") + ue.open;
          (q("parens"),
            de({ type: Z, value: oe, output: O.output ? "" : h }),
            de({ type: "paren", extglob: !0, value: H(), output: he }),
            N.push(ue));
        },
        ye = (Z) => {
          let oe = Z.close + (r.capture ? ")" : ""),
            ue;
          if (Z.type === "negate") {
            let he = D;
            if (
              (Z.inner && Z.inner.length > 1 && Z.inner.includes("/") && (he = k(r)),
              (he !== D || Q() || /^\)+$/.test(U())) && (oe = Z.close = `)$))${he}`),
              Z.inner.includes("*") && (ue = U()) && /^\.[^\\/.]+$/.test(ue))
            ) {
              let se = gfr(ue, { ...e, fastpaths: !1 }).output;
              oe = Z.close = `)${se})${he})`;
            }
            Z.prev.type === "bos" && (O.negatedExtglob = !0);
          }
          (de({ type: "paren", extglob: !0, value: G, output: oe }), ne("parens"));
        };
      if (r.fastpaths !== !1 && !/(^[*!]|[/()[\]{}"])/.test(t)) {
        let Z = !1,
          oe = t.replace(fCa, (ue, he, se, fe, ge, V) =>
            fe === "\\"
              ? ((Z = !0), ue)
              : fe === "?"
                ? he
                  ? he + fe + (ge ? E.repeat(ge.length) : "")
                  : V === 0
                    ? P + (ge ? E.repeat(ge.length) : "")
                    : E.repeat(se.length)
                : fe === "."
                  ? d.repeat(se.length)
                  : fe === "*"
                    ? he
                      ? he + fe + (ge ? D : "")
                      : D
                    : he
                      ? ue
                      : `\\${ue}`,
          );
        return (
          Z === !0 &&
            (r.unescape === !0
              ? (oe = oe.replace(/\\/g, ""))
              : (oe = oe.replace(/\\+/g, (ue) => (ue.length % 2 === 0 ? "\\\\" : ue ? "\\" : "")))),
          oe === t && r.contains === !0 ? ((O.output = t), O) : ((O.output = KD.wrapOutput(oe, O, e)), O)
        );
      }
      for (; !Q(); ) {
        if (((G = H()), G === "\0")) continue;
        if (G === "\\") {
          let ue = K();
          if ((ue === "/" && r.bash !== !0) || ue === "." || ue === ";") continue;
          if (!ue) {
            ((G += "\\"), de({ type: "text", value: G }));
            continue;
          }
          let he = /^\\+/.exec(U()),
            se = 0;
          if (
            (he && he[0].length > 2 && ((se = he[0].length), (O.index += se), se % 2 !== 0 && (G += "\\")),
            r.unescape === !0 ? (G = H()) : (G += H()),
            O.brackets === 0)
          ) {
            de({ type: "text", value: G });
            continue;
          }
        }
        if (O.brackets > 0 && (G !== "]" || L.value === "[" || L.value === "[^")) {
          if (r.posix !== !1 && G === ":") {
            let ue = L.value.slice(1);
            if (ue.includes("[") && ((L.posix = !0), ue.includes(":"))) {
              let he = L.value.lastIndexOf("["),
                se = L.value.slice(0, he),
                fe = L.value.slice(he + 2),
                ge = mCa[fe];
              if (ge) {
                ((L.value = se + ge), (O.backtrack = !0), H(), !s.output && a.indexOf(L) === 1 && (s.output = h));
                continue;
              }
            }
          }
          (((G === "[" && K() !== ":") || (G === "-" && K() === "]")) && (G = `\\${G}`),
            G === "]" && (L.value === "[" || L.value === "[^") && (G = `\\${G}`),
            r.posix === !0 && G === "!" && L.value === "[" && (G = "^"),
            (L.value += G),
            X({ value: G }));
          continue;
        }
        if (O.quotes === 1 && G !== '"') {
          ((G = KD.escapeRegex(G)), (L.value += G), X({ value: G }));
          continue;
        }
        if (G === '"') {
          ((O.quotes = O.quotes === 1 ? 0 : 1), r.keepQuotes === !0 && de({ type: "text", value: G }));
          continue;
        }
        if (G === "(") {
          (q("parens"), de({ type: "paren", value: G }));
          continue;
        }
        if (G === ")") {
          if (O.parens === 0 && r.strictBrackets === !0) throw new SyntaxError(tme("opening", "("));
          let ue = N[N.length - 1];
          if (ue && O.parens === ue.parens + 1) {
            ye(N.pop());
            continue;
          }
          (de({ type: "paren", value: G, output: O.parens ? ")" : "\\)" }), ne("parens"));
          continue;
        }
        if (G === "[") {
          if (r.nobracket === !0 || !U().includes("]")) {
            if (r.nobracket !== !0 && r.strictBrackets === !0) throw new SyntaxError(tme("closing", "]"));
            G = `\\${G}`;
          } else q("brackets");
          de({ type: "bracket", value: G });
          continue;
        }
        if (G === "]") {
          if (r.nobracket === !0 || (L && L.type === "bracket" && L.value.length === 1)) {
            de({ type: "text", value: G, output: `\\${G}` });
            continue;
          }
          if (O.brackets === 0) {
            if (r.strictBrackets === !0) throw new SyntaxError(tme("opening", "["));
            de({ type: "text", value: G, output: `\\${G}` });
            continue;
          }
          ne("brackets");
          let ue = L.value.slice(1);
          if (
            (L.posix !== !0 && ue[0] === "^" && !ue.includes("/") && (G = `/${G}`),
            (L.value += G),
            X({ value: G }),
            r.literalBrackets === !1 || KD.hasRegexChars(ue))
          )
            continue;
          let he = KD.escapeRegex(L.value);
          if (((O.output = O.output.slice(0, -L.value.length)), r.literalBrackets === !0)) {
            ((O.output += he), (L.value = he));
            continue;
          }
          ((L.value = `(${u}${he}|${L.value})`), (O.output += L.value));
          continue;
        }
        if (G === "{" && r.nobrace !== !0) {
          q("braces");
          let ue = { type: "brace", value: G, output: "(", outputIndex: O.output.length, tokensIndex: O.tokens.length };
          (F.push(ue), de(ue));
          continue;
        }
        if (G === "}") {
          let ue = F[F.length - 1];
          if (r.nobrace === !0 || !ue) {
            de({ type: "text", value: G, output: G });
            continue;
          }
          let he = ")";
          if (ue.dots === !0) {
            let se = a.slice(),
              fe = [];
            for (let ge = se.length - 1; ge >= 0 && (a.pop(), se[ge].type !== "brace"); ge--)
              se[ge].type !== "dots" && fe.unshift(se[ge].value);
            ((he = pCa(fe, r)), (O.backtrack = !0));
          }
          if (ue.comma !== !0 && ue.dots !== !0) {
            let se = O.output.slice(0, ue.outputIndex),
              fe = O.tokens.slice(ue.tokensIndex);
            ((ue.value = ue.output = "\\{"), (G = he = "\\}"), (O.output = se));
            for (let ge of fe) O.output += ge.output || ge.value;
          }
          (de({ type: "brace", value: G, output: he }), ne("braces"), F.pop());
          continue;
        }
        if (G === "|") {
          (N.length > 0 && N[N.length - 1].conditions++, de({ type: "text", value: G }));
          continue;
        }
        if (G === ",") {
          let ue = G,
            he = F[F.length - 1];
          (he && B[B.length - 1] === "braces" && ((he.comma = !0), (ue = "|")),
            de({ type: "comma", value: G, output: ue }));
          continue;
        }
        if (G === "/") {
          if (L.type === "dot" && O.index === O.start + 1) {
            ((O.start = O.index + 1), (O.consumed = ""), (O.output = ""), a.pop(), (L = s));
            continue;
          }
          de({ type: "slash", value: G, output: p });
          continue;
        }
        if (G === ".") {
          if (O.braces > 0 && L.type === "dot") {
            L.value === "." && (L.output = d);
            let ue = F[F.length - 1];
            ((L.type = "dots"), (L.output += G), (L.value += G), (ue.dots = !0));
            continue;
          }
          if (O.braces + O.parens === 0 && L.type !== "bos" && L.type !== "slash") {
            de({ type: "text", value: G, output: d });
            continue;
          }
          de({ type: "dot", value: G, output: d });
          continue;
        }
        if (G === "?") {
          if (!(L && L.value === "(") && r.noextglob !== !0 && K() === "(" && K(2) !== "?") {
            ce("qmark", G);
            continue;
          }
          if (L && L.type === "paren") {
            let he = K(),
              se = G;
            (((L.value === "(" && !/[!=<:]/.test(he)) || (he === "<" && !/<([!=]|\w+>)/.test(U()))) && (se = `\\${G}`),
              de({ type: "text", value: G, output: se }));
            continue;
          }
          if (r.dot !== !0 && (L.type === "slash" || L.type === "bos")) {
            de({ type: "qmark", value: G, output: v });
            continue;
          }
          de({ type: "qmark", value: G, output: E });
          continue;
        }
        if (G === "!") {
          if (r.noextglob !== !0 && K() === "(" && (K(2) !== "?" || !/[!=<:]/.test(K(3)))) {
            ce("negate", G);
            continue;
          }
          if (r.nonegate !== !0 && O.index === 0) {
            J();
            continue;
          }
        }
        if (G === "+") {
          if (r.noextglob !== !0 && K() === "(" && K(2) !== "?") {
            ce("plus", G);
            continue;
          }
          if ((L && L.value === "(") || r.regex === !1) {
            de({ type: "plus", value: G, output: f });
            continue;
          }
          if ((L && (L.type === "bracket" || L.type === "paren" || L.type === "brace")) || O.parens > 0) {
            de({ type: "plus", value: G });
            continue;
          }
          de({ type: "plus", value: f });
          continue;
        }
        if (G === "@") {
          if (r.noextglob !== !0 && K() === "(" && K(2) !== "?") {
            de({ type: "at", extglob: !0, value: G, output: "" });
            continue;
          }
          de({ type: "text", value: G });
          continue;
        }
        if (G !== "*") {
          (G === "$" || G === "^") && (G = `\\${G}`);
          let ue = dCa.exec(U());
          (ue && ((G += ue[0]), (O.index += ue[0].length)), de({ type: "text", value: G }));
          continue;
        }
        if (L && (L.type === "globstar" || L.star === !0)) {
          ((L.type = "star"),
            (L.star = !0),
            (L.value += G),
            (L.output = D),
            (O.backtrack = !0),
            (O.globstar = !0),
            Y(G));
          continue;
        }
        let Z = U();
        if (r.noextglob !== !0 && /^\([^?]/.test(Z)) {
          ce("star", G);
          continue;
        }
        if (L.type === "star") {
          if (r.noglobstar === !0) {
            Y(G);
            continue;
          }
          let ue = L.prev,
            he = ue.prev,
            se = ue.type === "slash" || ue.type === "bos",
            fe = he && (he.type === "star" || he.type === "globstar");
          if (r.bash === !0 && (!se || (Z[0] && Z[0] !== "/"))) {
            de({ type: "star", value: G, output: "" });
            continue;
          }
          let ge = O.braces > 0 && (ue.type === "comma" || ue.type === "brace"),
            V = N.length && (ue.type === "pipe" || ue.type === "paren");
          if (!se && ue.type !== "paren" && !ge && !V) {
            de({ type: "star", value: G, output: "" });
            continue;
          }
          for (; Z.slice(0, 3) === "/**"; ) {
            let ee = t[O.index + 4];
            if (ee && ee !== "/") break;
            ((Z = Z.slice(3)), Y("/**", 3));
          }
          if (ue.type === "bos" && Q()) {
            ((L.type = "globstar"), (L.value += G), (L.output = k(r)), (O.output = L.output), (O.globstar = !0), Y(G));
            continue;
          }
          if (ue.type === "slash" && ue.prev.type !== "bos" && !fe && Q()) {
            ((O.output = O.output.slice(0, -(ue.output + L.output).length)),
              (ue.output = `(?:${ue.output}`),
              (L.type = "globstar"),
              (L.output = k(r) + (r.strictSlashes ? ")" : "|$)")),
              (L.value += G),
              (O.globstar = !0),
              (O.output += ue.output + L.output),
              Y(G));
            continue;
          }
          if (ue.type === "slash" && ue.prev.type !== "bos" && Z[0] === "/") {
            let ee = Z[1] !== void 0 ? "|$" : "";
            ((O.output = O.output.slice(0, -(ue.output + L.output).length)),
              (ue.output = `(?:${ue.output}`),
              (L.type = "globstar"),
              (L.output = `${k(r)}${p}|${p}${ee})`),
              (L.value += G),
              (O.output += ue.output + L.output),
              (O.globstar = !0),
              Y(G + H()),
              de({ type: "slash", value: "/", output: "" }));
            continue;
          }
          if (ue.type === "bos" && Z[0] === "/") {
            ((L.type = "globstar"),
              (L.value += G),
              (L.output = `(?:^|${p}|${k(r)}${p})`),
              (O.output = L.output),
              (O.globstar = !0),
              Y(G + H()),
              de({ type: "slash", value: "/", output: "" }));
            continue;
          }
          ((O.output = O.output.slice(0, -L.output.length)),
            (L.type = "globstar"),
            (L.output = k(r)),
            (L.value += G),
            (O.output += L.output),
            (O.globstar = !0),
            Y(G));
          continue;
        }
        let oe = { type: "star", value: G, output: D };
        if (r.bash === !0) {
          ((oe.output = ".*?"), (L.type === "bos" || L.type === "slash") && (oe.output = R + oe.output), de(oe));
          continue;
        }
        if (L && (L.type === "bracket" || L.type === "paren") && r.regex === !0) {
          ((oe.output = G), de(oe));
          continue;
        }
        ((O.index === O.start || L.type === "slash" || L.type === "dot") &&
          (L.type === "dot"
            ? ((O.output += A), (L.output += A))
            : r.dot === !0
              ? ((O.output += y), (L.output += y))
              : ((O.output += R), (L.output += R)),
          K() !== "*" && ((O.output += h), (L.output += h))),
          de(oe));
      }
      for (; O.brackets > 0; ) {
        if (r.strictBrackets === !0) throw new SyntaxError(tme("closing", "]"));
        ((O.output = KD.escapeLast(O.output, "[")), ne("brackets"));
      }
      for (; O.parens > 0; ) {
        if (r.strictBrackets === !0) throw new SyntaxError(tme("closing", ")"));
        ((O.output = KD.escapeLast(O.output, "(")), ne("parens"));
      }
      for (; O.braces > 0; ) {
        if (r.strictBrackets === !0) throw new SyntaxError(tme("closing", "}"));
        ((O.output = KD.escapeLast(O.output, "{")), ne("braces"));
      }
      if (
        (r.strictSlashes !== !0 &&
          (L.type === "star" || L.type === "bracket") &&
          de({ type: "maybe_slash", value: "", output: `${p}?` }),
        O.backtrack === !0)
      ) {
        O.output = "";
        for (let Z of O.tokens)
          ((O.output += Z.output != null ? Z.output : Z.value), Z.suffix && (O.output += Z.suffix));
      }
      return O;
    };
  gfr.fastpaths = (t, e) => {
    let r = { ...e },
      n = typeof r.maxLength == "number" ? Math.min(Ict, r.maxLength) : Ict,
      o = t.length;
    if (o > n) throw new SyntaxError(`Input length: ${o}, exceeds maximum allowed length: ${n}`);
    t = cdi[t] || t;
    let {
        DOT_LITERAL: s,
        SLASH_LITERAL: a,
        ONE_CHAR: u,
        DOTS_SLASH: c,
        NO_DOT: m,
        NO_DOTS: d,
        NO_DOTS_SLASH: f,
        STAR: p,
        START_ANCHOR: h,
      } = Dct.globChars(r.windows),
      g = r.dot ? d : m,
      b = r.dot ? f : m,
      A = r.capture ? "" : "?:",
      y = { negated: !1, prefix: "" },
      E = r.bash === !0 ? ".*?" : p;
    r.capture && (E = `(${E})`);
    let v = (R) => (R.noglobstar === !0 ? E : `(${A}(?:(?!${h}${R.dot ? c : s}).)*?)`),
      C = (R) => {
        switch (R) {
          case "*":
            return `${g}${u}${E}`;
          case ".*":
            return `${s}${u}${E}`;
          case "*.*":
            return `${g}${E}${s}${u}${E}`;
          case "*/*":
            return `${g}${E}${a}${u}${b}${E}`;
          case "**":
            return g + v(r);
          case "**/*":
            return `(?:${g}${v(r)}${a})?${b}${u}${E}`;
          case "**/*.*":
            return `(?:${g}${v(r)}${a})?${b}${E}${s}${u}${E}`;
          case "**/.*":
            return `(?:${g}${v(r)}${a})?${s}${u}${E}`;
          default: {
            let P = /^(.*?)\.(\w+)$/.exec(R);
            if (!P) return;
            let D = C(P[1]);
            return D ? D + s + P[2] : void 0;
          }
        }
      },
      x = KD.removePrefix(t, y),
      k = C(x);
    return (k && r.strictSlashes !== !0 && (k += `${a}?`), k);
  };
  ldi.exports = gfr;
});