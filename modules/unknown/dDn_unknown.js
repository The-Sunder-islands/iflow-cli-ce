/**
 * @module dDn
 * @category unknown
 * @label unknown
 * @position 1136 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dDn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dDn = T((Ibc, mDn) => {
  var PZe = Pd(),
    xzt = class {
      constructor(e, r, n) {
        ((this.table = e), (this.column = r), (this.index = n));
      }
      _set(e, r) {
        (this.table.cacheState(), (this.column[e] = r));
      }
      get name() {
        return this.column.name;
      }
      set name(e) {
        this._set("name", e);
      }
      get filterButton() {
        return this.column.filterButton;
      }
      set filterButton(e) {
        this.column.filterButton = e;
      }
      get style() {
        return this.column.style;
      }
      set style(e) {
        this.column.style = e;
      }
      get totalsRowLabel() {
        return this.column.totalsRowLabel;
      }
      set totalsRowLabel(e) {
        this._set("totalsRowLabel", e);
      }
      get totalsRowFunction() {
        return this.column.totalsRowFunction;
      }
      set totalsRowFunction(e) {
        this._set("totalsRowFunction", e);
      }
      get totalsRowResult() {
        return this.column.totalsRowResult;
      }
      set totalsRowResult(e) {
        this._set("totalsRowResult", e);
      }
      get totalsRowFormula() {
        return this.column.totalsRowFormula;
      }
      set totalsRowFormula(e) {
        this._set("totalsRowFormula", e);
      }
    },
    Tzt = class {
      constructor(e, r) {
        ((this.worksheet = e), r && ((this.table = r), this.validate(), this.store()));
      }
      getFormula(e) {
        switch (e.totalsRowFunction) {
          case "none":
            return null;
          case "average":
            return `SUBTOTAL(101,${this.table.name}[${e.name}])`;
          case "countNums":
            return `SUBTOTAL(102,${this.table.name}[${e.name}])`;
          case "count":
            return `SUBTOTAL(103,${this.table.name}[${e.name}])`;
          case "max":
            return `SUBTOTAL(104,${this.table.name}[${e.name}])`;
          case "min":
            return `SUBTOTAL(105,${this.table.name}[${e.name}])`;
          case "stdDev":
            return `SUBTOTAL(106,${this.table.name}[${e.name}])`;
          case "var":
            return `SUBTOTAL(107,${this.table.name}[${e.name}])`;
          case "sum":
            return `SUBTOTAL(109,${this.table.name}[${e.name}])`;
          case "custom":
            return e.totalsRowFormula;
          default:
            throw new Error(`Invalid Totals Row Function: ${e.totalsRowFunction}`);
        }
      }
      get width() {
        return this.table.columns.length;
      }
      get height() {
        return this.table.rows.length;
      }
      get filterHeight() {
        return this.height + (this.table.headerRow ? 1 : 0);
      }
      get tableHeight() {
        return this.filterHeight + (this.table.totalsRow ? 1 : 0);
      }
      validate() {
        let { table: e } = this,
          r = (m, d, f) => {
            m[d] === void 0 && (m[d] = f);
          };
        (r(e, "headerRow", !0),
          r(e, "totalsRow", !1),
          r(e, "style", {}),
          r(e.style, "theme", "TableStyleMedium2"),
          r(e.style, "showFirstColumn", !1),
          r(e.style, "showLastColumn", !1),
          r(e.style, "showRowStripes", !1),
          r(e.style, "showColumnStripes", !1));
        let n = (m, d) => {
          if (!m) throw new Error(d);
        };
        (n(e.ref, "Table must have ref"),
          n(e.columns, "Table must have column definitions"),
          n(e.rows, "Table must have row definitions"),
          (e.tl = PZe.decodeAddress(e.ref)));
        let { row: o, col: s } = e.tl;
        (n(o > 0, "Table must be on valid row"), n(s > 0, "Table must be on valid col"));
        let { width: a, filterHeight: u, tableHeight: c } = this;
        ((e.autoFilterRef = PZe.encode(o, s, o + u - 1, s + a - 1)),
          (e.tableRef = PZe.encode(o, s, o + c - 1, s + a - 1)),
          e.columns.forEach((m, d) => {
            (n(m.name, `Column ${d} must have a name`),
              d === 0
                ? r(m, "totalsRowLabel", "Total")
                : (r(m, "totalsRowFunction", "none"), (m.totalsRowFormula = this.getFormula(m))));
          }));
      }
      store() {
        let e = (u, c) => {
            c &&
              Object.keys(c).forEach((m) => {
                u[m] = c[m];
              });
          },
          { worksheet: r, table: n } = this,
          { row: o, col: s } = n.tl,
          a = 0;
        if (n.headerRow) {
          let u = r.getRow(o + a++);
          n.columns.forEach((c, m) => {
            let { style: d, name: f } = c,
              p = u.getCell(s + m);
            ((p.value = f), e(p, d));
          });
        }
        if (
          (n.rows.forEach((u) => {
            let c = r.getRow(o + a++);
            u.forEach((m, d) => {
              let f = c.getCell(s + d);
              ((f.value = m), e(f, n.columns[d].style));
            });
          }),
          n.totalsRow)
        ) {
          let u = r.getRow(o + a++);
          n.columns.forEach((c, m) => {
            let d = u.getCell(s + m);
            (m === 0
              ? (d.value = c.totalsRowLabel)
              : this.getFormula(c)
                ? (d.value = { formula: c.totalsRowFormula, result: c.totalsRowResult })
                : (d.value = null),
              e(d, c.style));
          });
        }
      }
      load(e) {
        let { table: r } = this,
          { row: n, col: o } = r.tl,
          s = 0;
        if (r.headerRow) {
          let a = e.getRow(n + s++);
          r.columns.forEach((u, c) => {
            let m = a.getCell(o + c);
            m.value = u.name;
          });
        }
        if (
          (r.rows.forEach((a) => {
            let u = e.getRow(n + s++);
            a.forEach((c, m) => {
              let d = u.getCell(o + m);
              d.value = c;
            });
          }),
          r.totalsRow)
        ) {
          let a = e.getRow(n + s++);
          r.columns.forEach((u, c) => {
            let m = a.getCell(o + c);
            c === 0
              ? (m.value = u.totalsRowLabel)
              : this.getFormula(u) && (m.value = { formula: u.totalsRowFormula, result: u.totalsRowResult });
          });
        }
      }
      get model() {
        return this.table;
      }
      set model(e) {
        this.table = e;
      }
      cacheState() {
        this._cache || (this._cache = { ref: this.ref, width: this.width, tableHeight: this.tableHeight });
      }
      commit() {
        if (!this._cache) return;
        this.validate();
        let e = PZe.decodeAddress(this._cache.ref);
        if (this.ref !== this._cache.ref)
          for (let r = 0; r < this._cache.tableHeight; r++) {
            let n = this.worksheet.getRow(e.row + r);
            for (let o = 0; o < this._cache.width; o++) {
              let s = n.getCell(e.col + o);
              s.value = null;
            }
          }
        else {
          for (let r = this.tableHeight; r < this._cache.tableHeight; r++) {
            let n = this.worksheet.getRow(e.row + r);
            for (let o = 0; o < this._cache.width; o++) {
              let s = n.getCell(e.col + o);
              s.value = null;
            }
          }
          for (let r = 0; r < this.tableHeight; r++) {
            let n = this.worksheet.getRow(e.row + r);
            for (let o = this.width; o < this._cache.width; o++) {
              let s = n.getCell(e.col + o);
              s.value = null;
            }
          }
        }
        this.store();
      }
      addRow(e, r) {
        (this.cacheState(), r === void 0 ? this.table.rows.push(e) : this.table.rows.splice(r, 0, e));
      }
      removeRows(e, r = 1) {
        (this.cacheState(), this.table.rows.splice(e, r));
      }
      getColumn(e) {
        let r = this.table.columns[e];
        return new xzt(this, r, e);
      }
      addColumn(e, r, n) {
        (this.cacheState(),
          n === void 0
            ? (this.table.columns.push(e),
              this.table.rows.forEach((o, s) => {
                o.push(r[s]);
              }))
            : (this.table.columns.splice(n, 0, e),
              this.table.rows.forEach((o, s) => {
                o.splice(n, 0, r[s]);
              })));
      }
      removeColumns(e, r = 1) {
        (this.cacheState(),
          this.table.columns.splice(e, r),
          this.table.rows.forEach((n) => {
            n.splice(e, r);
          }));
      }
      _assign(e, r, n) {
        (this.cacheState(), (e[r] = n));
      }
      get ref() {
        return this.table.ref;
      }
      set ref(e) {
        this._assign(this.table, "ref", e);
      }
      get name() {
        return this.table.name;
      }
      set name(e) {
        this.table.name = e;
      }
      get displayName() {
        return this.table.displyName || this.table.name;
      }
      set displayNamename(e) {
        this.table.displayName = e;
      }
      get headerRow() {
        return this.table.headerRow;
      }
      set headerRow(e) {
        this._assign(this.table, "headerRow", e);
      }
      get totalsRow() {
        return this.table.totalsRow;
      }
      set totalsRow(e) {
        this._assign(this.table, "totalsRow", e);
      }
      get theme() {
        return this.table.style.name;
      }
      set theme(e) {
        this.table.style.name = e;
      }
      get showFirstColumn() {
        return this.table.style.showFirstColumn;
      }
      set showFirstColumn(e) {
        this.table.style.showFirstColumn = e;
      }
      get showLastColumn() {
        return this.table.style.showLastColumn;
      }
      set showLastColumn(e) {
        this.table.style.showLastColumn = e;
      }
      get showRowStripes() {
        return this.table.style.showRowStripes;
      }
      set showRowStripes(e) {
        this.table.style.showRowStripes = e;
      }
      get showColumnStripes() {
        return this.table.style.showColumnStripes;
      }
      set showColumnStripes(e) {
        this.table.style.showColumnStripes = e;
      }
    };
  mDn.exports = Tzt;
});