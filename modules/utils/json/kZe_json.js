/**
 * @module kZe
 * @category utils/json
 * @label json
 * @position 1132 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kZe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kZe = T((wbc, oDn) => {
  "use strict";
  var hTs = f1(),
    RZe = tS(),
    lW = Pd(),
    iDn = nDn(),
    Ezt = class {
      constructor(e, r) {
        ((this._worksheet = e), (this._number = r), (this._cells = []), (this.style = {}), (this.outlineLevel = 0));
      }
      get number() {
        return this._number;
      }
      get worksheet() {
        return this._worksheet;
      }
      commit() {
        this._worksheet._commitRow(this);
      }
      destroy() {
        (delete this._worksheet, delete this._cells, delete this.style);
      }
      findCell(e) {
        return this._cells[e - 1];
      }
      getCellEx(e) {
        let r = this._cells[e.col - 1];
        if (!r) {
          let n = this._worksheet.getColumn(e.col);
          ((r = new iDn(this, n, e.address)), (this._cells[e.col - 1] = r));
        }
        return r;
      }
      getCell(e) {
        if (typeof e == "string") {
          let r = this._worksheet.getColumnKey(e);
          r ? (e = r.number) : (e = lW.l2n(e));
        }
        return (
          this._cells[e - 1] ||
          this.getCellEx({ address: lW.encodeAddress(this._number, e), row: this._number, col: e })
        );
      }
      splice(e, r, ...n) {
        let o = e + r,
          s = n.length - r,
          a = this._cells.length,
          u,
          c,
          m;
        if (s < 0)
          for (u = e + n.length; u <= a; u++)
            ((m = this._cells[u - 1]),
              (c = this._cells[u - s - 1]),
              c
                ? ((m = this.getCell(u)), (m.value = c.value), (m.style = c.style), (m._comment = c._comment))
                : m && ((m.value = null), (m.style = {}), (m._comment = void 0)));
        else if (s > 0)
          for (u = a; u >= o; u--)
            ((c = this._cells[u - 1]),
              c
                ? ((m = this.getCell(u + s)), (m.value = c.value), (m.style = c.style), (m._comment = c._comment))
                : (this._cells[u + s - 1] = void 0));
        for (u = 0; u < n.length; u++)
          ((m = this.getCell(e + u)), (m.value = n[u]), (m.style = {}), (m._comment = void 0));
      }
      eachCell(e, r) {
        if ((r || ((r = e), (e = null)), e && e.includeEmpty)) {
          let n = this._cells.length;
          for (let o = 1; o <= n; o++) r(this.getCell(o), o);
        } else
          this._cells.forEach((n, o) => {
            n && n.type !== RZe.ValueType.Null && r(n, o + 1);
          });
      }
      addPageBreak(e, r) {
        let n = this._worksheet,
          o = Math.max(0, e - 1) || 0,
          s = Math.max(0, r - 1) || 16838,
          a = { id: this._number, max: s, man: 1 };
        (o && (a.min = o), n.rowBreaks.push(a));
      }
      get values() {
        let e = [];
        return (
          this._cells.forEach((r) => {
            r && r.type !== RZe.ValueType.Null && (e[r.col] = r.value);
          }),
          e
        );
      }
      set values(e) {
        if (((this._cells = []), e))
          if (e instanceof Array) {
            let r = 0;
            (e.hasOwnProperty("0") && (r = 1),
              e.forEach((n, o) => {
                n !== void 0 &&
                  (this.getCellEx({
                    address: lW.encodeAddress(this._number, o + r),
                    row: this._number,
                    col: o + r,
                  }).value = n);
              }));
          } else
            this._worksheet.eachColumnKey((r, n) => {
              e[n] !== void 0 &&
                (this.getCellEx({
                  address: lW.encodeAddress(this._number, r.number),
                  row: this._number,
                  col: r.number,
                }).value = e[n]);
            });
      }
      get hasValues() {
        return hTs.some(this._cells, (e) => e && e.type !== RZe.ValueType.Null);
      }
      get cellCount() {
        return this._cells.length;
      }
      get actualCellCount() {
        let e = 0;
        return (
          this.eachCell(() => {
            e++;
          }),
          e
        );
      }
      get dimensions() {
        let e = 0,
          r = 0;
        return (
          this._cells.forEach((n) => {
            n && n.type !== RZe.ValueType.Null && ((!e || e > n.col) && (e = n.col), r < n.col && (r = n.col));
          }),
          e > 0 ? { min: e, max: r } : null
        );
      }
      _applyStyle(e, r) {
        return (
          (this.style[e] = r),
          this._cells.forEach((n) => {
            n && (n[e] = r);
          }),
          r
        );
      }
      get numFmt() {
        return this.style.numFmt;
      }
      set numFmt(e) {
        this._applyStyle("numFmt", e);
      }
      get font() {
        return this.style.font;
      }
      set font(e) {
        this._applyStyle("font", e);
      }
      get alignment() {
        return this.style.alignment;
      }
      set alignment(e) {
        this._applyStyle("alignment", e);
      }
      get protection() {
        return this.style.protection;
      }
      set protection(e) {
        this._applyStyle("protection", e);
      }
      get border() {
        return this.style.border;
      }
      set border(e) {
        this._applyStyle("border", e);
      }
      get fill() {
        return this.style.fill;
      }
      set fill(e) {
        this._applyStyle("fill", e);
      }
      get hidden() {
        return !!this._hidden;
      }
      set hidden(e) {
        this._hidden = e;
      }
      get outlineLevel() {
        return this._outlineLevel || 0;
      }
      set outlineLevel(e) {
        this._outlineLevel = e;
      }
      get collapsed() {
        return !!(this._outlineLevel && this._outlineLevel >= this._worksheet.properties.outlineLevelRow);
      }
      get model() {
        let e = [],
          r = 0,
          n = 0;
        return (
          this._cells.forEach((o) => {
            if (o) {
              let s = o.model;
              s && ((!r || r > o.col) && (r = o.col), n < o.col && (n = o.col), e.push(s));
            }
          }),
          this.height || e.length
            ? {
                cells: e,
                number: this.number,
                min: r,
                max: n,
                height: this.height,
                style: this.style,
                hidden: this.hidden,
                outlineLevel: this.outlineLevel,
                collapsed: this.collapsed,
              }
            : null
        );
      }
      set model(e) {
        if (e.number !== this._number) throw new Error("Invalid row number in model");
        this._cells = [];
        let r;
        (e.cells.forEach((n) => {
          switch (n.type) {
            case iDn.Types.Merge:
              break;
            default: {
              let o;
              if (n.address) o = lW.decodeAddress(n.address);
              else if (r) {
                let { row: a } = r,
                  u = r.col + 1;
                o = { row: a, col: u, address: lW.encodeAddress(a, u), $col$row: `$${lW.n2l(u)}$${a}` };
              }
              r = o;
              let s = this.getCellEx(o);
              s.model = n;
              break;
            }
          }
        }),
          e.height ? (this.height = e.height) : delete this.height,
          (this.hidden = e.hidden),
          (this.outlineLevel = e.outlineLevel || 0),
          (this.style = (e.style && JSON.parse(JSON.stringify(e.style))) || {}));
      }
    };
  oDn.exports = Ezt;
});