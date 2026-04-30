/**
 * @module YOn
 * @category utils/xml
 * @label xml
 * @position 1270 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var YOn = T((s5c, zOn) => {
  var APs = Ig(),
    yPs = Kr(),
    _Ps = vF(),
    EPs = GOn(),
    vPs = HOn(),
    CPs = WOn(),
    Bet = class t extends yPs {
      constructor() {
        (super(),
          (this.map = {
            autoFilter: new EPs(),
            tableColumns: new _Ps({ tag: "tableColumns", count: !0, empty: !0, childXform: new vPs() }),
            tableStyleInfo: new CPs(),
          }));
      }
      prepare(e, r) {
        (this.map.autoFilter.prepare(e), this.map.tableColumns.prepare(e.columns, r));
      }
      get tag() {
        return "table";
      }
      render(e, r) {
        (e.openXml(APs.StdDocAttributes),
          e.openNode(this.tag, {
            ...t.TABLE_ATTRIBUTES,
            id: r.id,
            name: r.name,
            displayName: r.displayName || r.name,
            ref: r.tableRef,
            totalsRowCount: r.totalsRow ? "1" : void 0,
            totalsRowShown: r.totalsRow ? void 0 : "1",
            headerRowCount: r.headerRow ? "1" : "0",
          }),
          this.map.autoFilter.render(e, r),
          this.map.tableColumns.render(e, r.columns),
          this.map.tableStyleInfo.render(e, r.style),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        let { name: r, attributes: n } = e;
        switch (r) {
          case this.tag:
            (this.reset(),
              (this.model = {
                name: n.name,
                displayName: n.displayName || n.name,
                tableRef: n.ref,
                totalsRow: n.totalsRowCount === "1",
                headerRow: n.headerRowCount === "1",
              }));
            break;
          default:
            ((this.parser = this.map[e.name]), this.parser && this.parser.parseOpen(e));
            break;
        }
        return !0;
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case this.tag:
            return (
              (this.model.columns = this.map.tableColumns.model),
              this.map.autoFilter.model &&
                ((this.model.autoFilterRef = this.map.autoFilter.model.autoFilterRef),
                this.map.autoFilter.model.columns.forEach((r, n) => {
                  this.model.columns[n].filterButton = r.filterButton;
                })),
              (this.model.style = this.map.tableStyleInfo.model),
              !1
            );
          default:
            return !0;
        }
      }
      reconcile(e, r) {
        e.columns.forEach((n) => {
          n.dxfId !== void 0 && (n.style = r.styles.getDxfStyle(n.dxfId));
        });
      }
    };
  Bet.TABLE_ATTRIBUTES = {
    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "xmlns:mc": "http://schemas.openxmlformats.org/markup-compatibility/2006",
    "mc:Ignorable": "xr xr3",
    "xmlns:xr": "http://schemas.microsoft.com/office/spreadsheetml/2014/revision",
    "xmlns:xr3": "http://schemas.microsoft.com/office/spreadsheetml/2016/revision3",
  };
  zOn.exports = Bet;
});