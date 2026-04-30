/**
 * @module Lzt
 * @category unknown
 * @label unknown
 * @position 1142 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lzt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Lzt = T((Bbc, IDn) => {
  "use strict";
  var eue = f1(),
    Xye = Pd(),
    DDn = TDn(),
    wTs = Jk(),
    xTs = /[$](\w+)[$](\d+)(:[$](\w+)[$](\d+))?/,
    Bzt = class {
      constructor() {
        this.matrixMap = {};
      }
      getMatrix(e) {
        return this.matrixMap[e] || (this.matrixMap[e] = new DDn());
      }
      add(e, r) {
        let n = Xye.decodeEx(e);
        this.addEx(n, r);
      }
      addEx(e, r) {
        let n = this.getMatrix(r);
        if (e.top)
          for (let o = e.left; o <= e.right; o++)
            for (let s = e.top; s <= e.bottom; s++) {
              let a = { sheetName: e.sheetName, address: Xye.n2l(o) + s, row: s, col: o };
              n.addCellEx(a);
            }
        else n.addCellEx(e);
      }
      remove(e, r) {
        let n = Xye.decodeEx(e);
        this.removeEx(n, r);
      }
      removeEx(e, r) {
        this.getMatrix(r).removeCellEx(e);
      }
      removeAllNames(e) {
        eue.each(this.matrixMap, (r) => {
          r.removeCellEx(e);
        });
      }
      forEach(e) {
        eue.each(this.matrixMap, (r, n) => {
          r.forEach((o) => {
            e(n, o);
          });
        });
      }
      getNames(e) {
        return this.getNamesEx(Xye.decodeEx(e));
      }
      getNamesEx(e) {
        return eue.map(this.matrixMap, (r, n) => r.findCellEx(e) && n).filter(Boolean);
      }
      _explore(e, r) {
        r.mark = !1;
        let { sheetName: n } = r,
          o = new wTs(r.row, r.col, r.row, r.col, n),
          s,
          a;
        function u(m, d) {
          let f = e.findCellAt(n, m, r.col);
          return !f || !f.mark ? !1 : ((o[d] = m), (f.mark = !1), !0);
        }
        for (a = r.row - 1; u(a, "top"); a--);
        for (a = r.row + 1; u(a, "bottom"); a++);
        function c(m, d) {
          let f = [];
          for (a = o.top; a <= o.bottom; a++) {
            let p = e.findCellAt(n, a, m);
            if (p && p.mark) f.push(p);
            else return !1;
          }
          o[d] = m;
          for (let p = 0; p < f.length; p++) f[p].mark = !1;
          return !0;
        }
        for (s = r.col - 1; c(s, "left"); s--);
        for (s = r.col + 1; c(s, "right"); s++);
        return o;
      }
      getRanges(e, r) {
        if (((r = r || this.matrixMap[e]), !r)) return { name: e, ranges: [] };
        r.forEach((o) => {
          o.mark = !0;
        });
        let n = r
          .map((o) => o.mark && this._explore(r, o))
          .filter(Boolean)
          .map((o) => o.$shortRange);
        return { name: e, ranges: n };
      }
      normaliseMatrix(e, r) {
        e.forEachInSheet(r, (n, o, s) => {
          n && (n.row !== o || n.col !== s) && ((n.row = o), (n.col = s), (n.address = Xye.n2l(s) + o));
        });
      }
      spliceRows(e, r, n, o) {
        eue.each(this.matrixMap, (s) => {
          (s.spliceRows(e, r, n, o), this.normaliseMatrix(s, e));
        });
      }
      spliceColumns(e, r, n, o) {
        eue.each(this.matrixMap, (s) => {
          (s.spliceColumns(e, r, n, o), this.normaliseMatrix(s, e));
        });
      }
      get model() {
        return eue.map(this.matrixMap, (e, r) => this.getRanges(r, e)).filter((e) => e.ranges.length);
      }
      set model(e) {
        let r = (this.matrixMap = {});
        e.forEach((n) => {
          let o = (r[n.name] = new DDn());
          n.ranges.forEach((s) => {
            xTs.test(s.split("!").pop() || "") && o.addCell(s);
          });
        });
      }
    };
  IDn.exports = Bzt;
});