/**
 * @module uDn
 * @category unknown
 * @label unknown
 * @position 1134 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uDn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uDn = T((Tbc, aDn) => {
  "use strict";
  var yTs = Pd(),
    Szt = class t {
      constructor(e, r, n = 0) {
        if (((this.worksheet = e), !r))
          ((this.nativeCol = 0), (this.nativeColOff = 0), (this.nativeRow = 0), (this.nativeRowOff = 0));
        else if (typeof r == "string") {
          let o = yTs.decodeAddress(r);
          ((this.nativeCol = o.col + n),
            (this.nativeColOff = 0),
            (this.nativeRow = o.row + n),
            (this.nativeRowOff = 0));
        } else
          r.nativeCol !== void 0
            ? ((this.nativeCol = r.nativeCol || 0),
              (this.nativeColOff = r.nativeColOff || 0),
              (this.nativeRow = r.nativeRow || 0),
              (this.nativeRowOff = r.nativeRowOff || 0))
            : r.col !== void 0
              ? ((this.col = r.col + n), (this.row = r.row + n))
              : ((this.nativeCol = 0), (this.nativeColOff = 0), (this.nativeRow = 0), (this.nativeRowOff = 0));
      }
      static asInstance(e) {
        return e instanceof t || e == null ? e : new t(e);
      }
      get col() {
        return this.nativeCol + Math.min(this.colWidth - 1, this.nativeColOff) / this.colWidth;
      }
      set col(e) {
        ((this.nativeCol = Math.floor(e)), (this.nativeColOff = Math.floor((e - this.nativeCol) * this.colWidth)));
      }
      get row() {
        return this.nativeRow + Math.min(this.rowHeight - 1, this.nativeRowOff) / this.rowHeight;
      }
      set row(e) {
        ((this.nativeRow = Math.floor(e)), (this.nativeRowOff = Math.floor((e - this.nativeRow) * this.rowHeight)));
      }
      get colWidth() {
        return this.worksheet &&
          this.worksheet.getColumn(this.nativeCol + 1) &&
          this.worksheet.getColumn(this.nativeCol + 1).isCustomWidth
          ? Math.floor(this.worksheet.getColumn(this.nativeCol + 1).width * 1e4)
          : 64e4;
      }
      get rowHeight() {
        return this.worksheet &&
          this.worksheet.getRow(this.nativeRow + 1) &&
          this.worksheet.getRow(this.nativeRow + 1).height
          ? Math.floor(this.worksheet.getRow(this.nativeRow + 1).height * 1e4)
          : 18e4;
      }
      get model() {
        return {
          nativeCol: this.nativeCol,
          nativeColOff: this.nativeColOff,
          nativeRow: this.nativeRow,
          nativeRowOff: this.nativeRowOff,
        };
      }
      set model(e) {
        ((this.nativeCol = e.nativeCol),
          (this.nativeColOff = e.nativeColOff),
          (this.nativeRow = e.nativeRow),
          (this.nativeRowOff = e.nativeRowOff));
      }
    };
  aDn.exports = Szt;
});