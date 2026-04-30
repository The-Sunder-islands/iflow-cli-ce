/**
 * @module TDn
 * @category utils/object
 * @label object
 * @position 1141 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TDn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TDn = T((Pbc, xDn) => {
  var wDn = f1(),
    LZe = Pd(),
    Pzt = class {
      constructor(e) {
        ((this.template = e), (this.sheets = {}));
      }
      addCell(e) {
        this.addCellEx(LZe.decodeEx(e));
      }
      getCell(e) {
        return this.findCellEx(LZe.decodeEx(e), !0);
      }
      findCell(e) {
        return this.findCellEx(LZe.decodeEx(e), !1);
      }
      findCellAt(e, r, n) {
        let o = this.sheets[e],
          s = o && o[r];
        return s && s[n];
      }
      addCellEx(e) {
        if (e.top)
          for (let r = e.top; r <= e.bottom; r++)
            for (let n = e.left; n <= e.right; n++) this.getCellAt(e.sheetName, r, n);
        else this.findCellEx(e, !0);
      }
      getCellEx(e) {
        return this.findCellEx(e, !0);
      }
      findCellEx(e, r) {
        let n = this.findSheet(e, r),
          o = this.findSheetRow(n, e, r);
        return this.findRowCell(o, e, r);
      }
      getCellAt(e, r, n) {
        let o = this.sheets[e] || (this.sheets[e] = []),
          s = o[r] || (o[r] = []);
        return s[n] || (s[n] = { sheetName: e, address: LZe.n2l(n) + r, row: r, col: n });
      }
      removeCellEx(e) {
        let r = this.findSheet(e);
        if (!r) return;
        let n = this.findSheetRow(r, e);
        n && delete n[e.col];
      }
      forEachInSheet(e, r) {
        let n = this.sheets[e];
        n &&
          n.forEach((o, s) => {
            o &&
              o.forEach((a, u) => {
                a && r(a, s, u);
              });
          });
      }
      forEach(e) {
        wDn.each(this.sheets, (r, n) => {
          this.forEachInSheet(n, e);
        });
      }
      map(e) {
        let r = [];
        return (
          this.forEach((n) => {
            r.push(e(n));
          }),
          r
        );
      }
      findSheet(e, r) {
        let n = e.sheetName;
        if (this.sheets[n]) return this.sheets[n];
        if (r) return (this.sheets[n] = []);
      }
      findSheetRow(e, r, n) {
        let { row: o } = r;
        if (e && e[o]) return e[o];
        if (n) return (e[o] = []);
      }
      findRowCell(e, r, n) {
        let { col: o } = r;
        if (e && e[o]) return e[o];
        if (n) return (e[o] = this.template ? Object.assign(r, JSON.parse(JSON.stringify(this.template))) : r);
      }
      spliceRows(e, r, n, o) {
        let s = this.sheets[e];
        if (s) {
          let a = [];
          for (let u = 0; u < o; u++) a.push([]);
          s.splice(r, n, ...a);
        }
      }
      spliceColumns(e, r, n, o) {
        let s = this.sheets[e];
        if (s) {
          let a = [];
          for (let u = 0; u < o; u++) a.push(null);
          wDn.each(s, (u) => {
            u.splice(r, n, ...a);
          });
        }
      }
    };
  xDn.exports = Pzt;
});