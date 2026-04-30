/**
 * @module CFi
 * @category ui/terminal
 * @label terminal
 * @position 1848 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CFi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CFi = T((Jil, vFi) => {
  "use strict";
  var Lnu = { right: jnu, center: Qnu },
    Mnu = 0,
    Yht = 1,
    Fnu = 2,
    Kht = 3,
    z8r = class {
      constructor(e) {
        var r;
        ((this.width = e.width), (this.wrap = (r = e.wrap) !== null && r !== void 0 ? r : !0), (this.rows = []));
      }
      span(...e) {
        let r = this.div(...e);
        r.span = !0;
      }
      resetOutput() {
        this.rows = [];
      }
      div(...e) {
        if ((e.length === 0 && this.div(""), this.wrap && this.shouldApplyLayoutDSL(...e) && typeof e[0] == "string"))
          return this.applyLayoutDSL(e[0]);
        let r = e.map((n) => (typeof n == "string" ? this.colFromString(n) : n));
        return (this.rows.push(r), r);
      }
      shouldApplyLayoutDSL(...e) {
        return e.length === 1 && typeof e[0] == "string" && /[\t\n]/.test(e[0]);
      }
      applyLayoutDSL(e) {
        let r = e
            .split(
              `
`,
            )
            .map((o) => o.split("	")),
          n = 0;
        return (
          r.forEach((o) => {
            o.length > 1 &&
              yy.stringWidth(o[0]) > n &&
              (n = Math.min(Math.floor(this.width * 0.5), yy.stringWidth(o[0])));
          }),
          r.forEach((o) => {
            this.div(
              ...o.map((s, a) => ({
                text: s.trim(),
                padding: this.measurePadding(s),
                width: a === 0 && o.length > 1 ? n : void 0,
              })),
            );
          }),
          this.rows[this.rows.length - 1]
        );
      }
      colFromString(e) {
        return { text: e, padding: this.measurePadding(e) };
      }
      measurePadding(e) {
        let r = yy.stripAnsi(e);
        return [0, r.match(/\s*$/)[0].length, 0, r.match(/^\s*/)[0].length];
      }
      toString() {
        let e = [];
        return (
          this.rows.forEach((r) => {
            this.rowToString(r, e);
          }),
          e.filter((r) => !r.hidden).map((r) => r.text).join(`
`)
        );
      }
      rowToString(e, r) {
        return (
          this.rasterize(e).forEach((n, o) => {
            let s = "";
            (n.forEach((a, u) => {
              let { width: c } = e[u],
                m = this.negatePadding(e[u]),
                d = a;
              if (
                (m > yy.stringWidth(a) && (d += " ".repeat(m - yy.stringWidth(a))),
                e[u].align && e[u].align !== "left" && this.wrap)
              ) {
                let p = Lnu[e[u].align];
                ((d = p(d, m)), yy.stringWidth(d) < m && (d += " ".repeat((c || 0) - yy.stringWidth(d) - 1)));
              }
              let f = e[u].padding || [0, 0, 0, 0];
              (f[Kht] && (s += " ".repeat(f[Kht])),
                (s += EFi(e[u], d, "| ")),
                (s += d),
                (s += EFi(e[u], d, " |")),
                f[Yht] && (s += " ".repeat(f[Yht])),
                o === 0 && r.length > 0 && (s = this.renderInline(s, r[r.length - 1])));
            }),
              r.push({ text: s.replace(/ +$/, ""), span: e.span }));
          }),
          r
        );
      }
      renderInline(e, r) {
        let n = e.match(/^ */),
          o = n ? n[0].length : 0,
          s = r.text,
          a = yy.stringWidth(s.trimRight());
        return r.span
          ? this.wrap
            ? o < a
              ? e
              : ((r.hidden = !0), s.trimRight() + " ".repeat(o - a) + e.trimLeft())
            : ((r.hidden = !0), s + e)
          : e;
      }
      rasterize(e) {
        let r = [],
          n = this.columnWidths(e),
          o;
        return (
          e.forEach((s, a) => {
            ((s.width = n[a]),
              this.wrap
                ? (o = yy.wrap(s.text, this.negatePadding(s), { hard: !0 }).split(`
`))
                : (o = s.text.split(`
`)),
              s.border &&
                (o.unshift("." + "-".repeat(this.negatePadding(s) + 2) + "."),
                o.push("'" + "-".repeat(this.negatePadding(s) + 2) + "'")),
              s.padding &&
                (o.unshift(...new Array(s.padding[Mnu] || 0).fill("")),
                o.push(...new Array(s.padding[Fnu] || 0).fill(""))),
              o.forEach((u, c) => {
                r[c] || r.push([]);
                let m = r[c];
                for (let d = 0; d < a; d++) m[d] === void 0 && m.push("");
                m.push(u);
              }));
          }),
          r
        );
      }
      negatePadding(e) {
        let r = e.width || 0;
        return (e.padding && (r -= (e.padding[Kht] || 0) + (e.padding[Yht] || 0)), e.border && (r -= 4), r);
      }
      columnWidths(e) {
        if (!this.wrap) return e.map((a) => a.width || yy.stringWidth(a.text));
        let r = e.length,
          n = this.width,
          o = e.map((a) => {
            if (a.width) return (r--, (n -= a.width), a.width);
          }),
          s = r ? Math.floor(n / r) : 0;
        return o.map((a, u) => (a === void 0 ? Math.max(s, Unu(e[u])) : a));
      }
    };
  function EFi(t, e, r) {
    return t.border ? (/[.']-+[.']/.test(e) ? "" : e.trim().length !== 0 ? r : "  ") : "";
  }
  function Unu(t) {
    let e = t.padding || [],
      r = 1 + (e[Kht] || 0) + (e[Yht] || 0);
    return t.border ? r + 4 : r;
  }
  function $nu() {
    return typeof process == "object" && process.stdout && process.stdout.columns ? process.stdout.columns : 80;
  }
  function jnu(t, e) {
    t = t.trim();
    let r = yy.stringWidth(t);
    return r < e ? " ".repeat(e - r) + t : t;
  }
  function Qnu(t, e) {
    t = t.trim();
    let r = yy.stringWidth(t);
    return r >= e ? t : " ".repeat((e - r) >> 1) + t;
  }
  var yy;
  function Gnu(t, e) {
    return ((yy = e), new z8r({ width: t?.width || $nu(), wrap: t?.wrap }));
  }
  var qnu = j8r(),
    Hnu = Hht(),
    Vnu = _Fi();
  function Wnu(t) {
    return Gnu(t, { stringWidth: qnu, stripAnsi: Hnu, wrap: Vnu });
  }
  vFi.exports = Wnu;
});