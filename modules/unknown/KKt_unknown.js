/**
 * @module KKt
 * @category unknown
 * @label unknown
 * @position 1217 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (KKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var KKt = T((a2c, rkn) => {
  var Hks = f1(),
    Vks = Kr();
  function V8(t, e) {
    return t ? e : void 0;
  }
  function PE(t, e) {
    return t === e ? !0 : void 0;
  }
  var YKt = class extends Vks {
    get tag() {
      return "sheetProtection";
    }
    render(e, r) {
      if (r) {
        let n = {
          sheet: V8(r.sheet, "1"),
          selectLockedCells: r.selectLockedCells === !1 ? "1" : void 0,
          selectUnlockedCells: r.selectUnlockedCells === !1 ? "1" : void 0,
          formatCells: V8(r.formatCells, "0"),
          formatColumns: V8(r.formatColumns, "0"),
          formatRows: V8(r.formatRows, "0"),
          insertColumns: V8(r.insertColumns, "0"),
          insertRows: V8(r.insertRows, "0"),
          insertHyperlinks: V8(r.insertHyperlinks, "0"),
          deleteColumns: V8(r.deleteColumns, "0"),
          deleteRows: V8(r.deleteRows, "0"),
          sort: V8(r.sort, "0"),
          autoFilter: V8(r.autoFilter, "0"),
          pivotTables: V8(r.pivotTables, "0"),
        };
        (r.sheet &&
          ((n.algorithmName = r.algorithmName),
          (n.hashValue = r.hashValue),
          (n.saltValue = r.saltValue),
          (n.spinCount = r.spinCount),
          (n.objects = V8(r.objects === !1, "1")),
          (n.scenarios = V8(r.scenarios === !1, "1"))),
          Hks.some(n, (o) => o !== void 0) && e.leafNode(this.tag, n));
      }
    }
    parseOpen(e) {
      switch (e.name) {
        case this.tag:
          return (
            (this.model = {
              sheet: PE(e.attributes.sheet, "1"),
              objects: e.attributes.objects === "1" ? !1 : void 0,
              scenarios: e.attributes.scenarios === "1" ? !1 : void 0,
              selectLockedCells: e.attributes.selectLockedCells === "1" ? !1 : void 0,
              selectUnlockedCells: e.attributes.selectUnlockedCells === "1" ? !1 : void 0,
              formatCells: PE(e.attributes.formatCells, "0"),
              formatColumns: PE(e.attributes.formatColumns, "0"),
              formatRows: PE(e.attributes.formatRows, "0"),
              insertColumns: PE(e.attributes.insertColumns, "0"),
              insertRows: PE(e.attributes.insertRows, "0"),
              insertHyperlinks: PE(e.attributes.insertHyperlinks, "0"),
              deleteColumns: PE(e.attributes.deleteColumns, "0"),
              deleteRows: PE(e.attributes.deleteRows, "0"),
              sort: PE(e.attributes.sort, "0"),
              autoFilter: PE(e.attributes.autoFilter, "0"),
              pivotTables: PE(e.attributes.pivotTables, "0"),
            }),
            e.attributes.algorithmName &&
              ((this.model.algorithmName = e.attributes.algorithmName),
              (this.model.hashValue = e.attributes.hashValue),
              (this.model.saltValue = e.attributes.saltValue),
              (this.model.spinCount = parseInt(e.attributes.spinCount, 10))),
            !0
          );
        default:
          return !1;
      }
    }
    parseText() {}
    parseClose() {
      return !1;
    }
  };
  rkn.exports = YKt;
});