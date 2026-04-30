/**
 * @module Jk
 * @category app/core
 * @label iflow-core
 * @position 1127 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jk) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jk = T((_bc, YTn) => {
  var ZT = Pd(),
    uzt = class t {
      constructor() {
        this.decode(arguments);
      }
      setTLBR(e, r, n, o, s) {
        if (arguments.length < 4) {
          let a = ZT.decodeAddress(e),
            u = ZT.decodeAddress(r);
          ((this.model = {
            top: Math.min(a.row, u.row),
            left: Math.min(a.col, u.col),
            bottom: Math.max(a.row, u.row),
            right: Math.max(a.col, u.col),
            sheetName: n,
          }),
            this.setTLBR(a.row, a.col, u.row, u.col, s));
        } else
          this.model = {
            top: Math.min(e, n),
            left: Math.min(r, o),
            bottom: Math.max(e, n),
            right: Math.max(r, o),
            sheetName: s,
          };
      }
      decode(e) {
        switch (e.length) {
          case 5:
            this.setTLBR(e[0], e[1], e[2], e[3], e[4]);
            break;
          case 4:
            this.setTLBR(e[0], e[1], e[2], e[3]);
            break;
          case 3:
            this.setTLBR(e[0], e[1], e[2]);
            break;
          case 2:
            this.setTLBR(e[0], e[1]);
            break;
          case 1: {
            let r = e[0];
            if (r instanceof t)
              this.model = {
                top: r.model.top,
                left: r.model.left,
                bottom: r.model.bottom,
                right: r.model.right,
                sheetName: r.sheetName,
              };
            else if (r instanceof Array) this.decode(r);
            else if (r.top && r.left && r.bottom && r.right)
              this.model = { top: r.top, left: r.left, bottom: r.bottom, right: r.right, sheetName: r.sheetName };
            else {
              let n = ZT.decodeEx(r);
              n.top
                ? (this.model = { top: n.top, left: n.left, bottom: n.bottom, right: n.right, sheetName: n.sheetName })
                : (this.model = { top: n.row, left: n.col, bottom: n.row, right: n.col, sheetName: n.sheetName });
            }
            break;
          }
          case 0:
            this.model = { top: 0, left: 0, bottom: 0, right: 0 };
            break;
          default:
            throw new Error(`Invalid number of arguments to _getDimensions() - ${e.length}`);
        }
      }
      get top() {
        return this.model.top || 1;
      }
      set top(e) {
        this.model.top = e;
      }
      get left() {
        return this.model.left || 1;
      }
      set left(e) {
        this.model.left = e;
      }
      get bottom() {
        return this.model.bottom || 1;
      }
      set bottom(e) {
        this.model.bottom = e;
      }
      get right() {
        return this.model.right || 1;
      }
      set right(e) {
        this.model.right = e;
      }
      get sheetName() {
        return this.model.sheetName;
      }
      set sheetName(e) {
        this.model.sheetName = e;
      }
      get _serialisedSheetName() {
        let { sheetName: e } = this.model;
        return e ? (/^[a-zA-Z0-9]*$/.test(e) ? `${e}!` : `'${e}'!`) : "";
      }
      expand(e, r, n, o) {
        ((!this.model.top || e < this.top) && (this.top = e),
          (!this.model.left || r < this.left) && (this.left = r),
          (!this.model.bottom || n > this.bottom) && (this.bottom = n),
          (!this.model.right || o > this.right) && (this.right = o));
      }
      expandRow(e) {
        if (e) {
          let { dimensions: r, number: n } = e;
          r && this.expand(n, r.min, n, r.max);
        }
      }
      expandToAddress(e) {
        let r = ZT.decodeEx(e);
        this.expand(r.row, r.col, r.row, r.col);
      }
      get tl() {
        return ZT.n2l(this.left) + this.top;
      }
      get $t$l() {
        return `$${ZT.n2l(this.left)}$${this.top}`;
      }
      get br() {
        return ZT.n2l(this.right) + this.bottom;
      }
      get $b$r() {
        return `$${ZT.n2l(this.right)}$${this.bottom}`;
      }
      get range() {
        return `${this._serialisedSheetName + this.tl}:${this.br}`;
      }
      get $range() {
        return `${this._serialisedSheetName + this.$t$l}:${this.$b$r}`;
      }
      get shortRange() {
        return this.count > 1 ? this.range : this._serialisedSheetName + this.tl;
      }
      get $shortRange() {
        return this.count > 1 ? this.$range : this._serialisedSheetName + this.$t$l;
      }
      get count() {
        return (1 + this.bottom - this.top) * (1 + this.right - this.left);
      }
      toString() {
        return this.range;
      }
      intersects(e) {
        return !(
          (e.sheetName && this.sheetName && e.sheetName !== this.sheetName) ||
          e.bottom < this.top ||
          e.top > this.bottom ||
          e.right < this.left ||
          e.left > this.right
        );
      }
      contains(e) {
        let r = ZT.decodeEx(e);
        return this.containsEx(r);
      }
      containsEx(e) {
        return e.sheetName && this.sheetName && e.sheetName !== this.sheetName
          ? !1
          : e.row >= this.top && e.row <= this.bottom && e.col >= this.left && e.col <= this.right;
      }
      forEachAddress(e) {
        for (let r = this.left; r <= this.right; r++)
          for (let n = this.top; n <= this.bottom; n++) e(ZT.encodeAddress(n, r), n, r);
      }
    };
  YTn.exports = uzt;
});