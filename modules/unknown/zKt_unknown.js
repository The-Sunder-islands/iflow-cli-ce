/**
 * @module zKt
 * @category unknown
 * @label unknown
 * @position 1216 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zKt = T((s2c, tkn) => {
  var Qks = Pd(),
    Gks = Kr(),
    qks = { frozen: "frozen", frozenSplit: "frozen", split: "split" },
    WKt = class extends Gks {
      get tag() {
        return "sheetView";
      }
      prepare(e) {
        switch (e.state) {
          case "frozen":
          case "split":
            break;
          default:
            e.state = "normal";
            break;
        }
      }
      render(e, r) {
        e.openNode("sheetView", { workbookViewId: r.workbookViewId || 0 });
        let n = function (c, m, d) {
          d && e.addAttribute(c, m);
        };
        (n("rightToLeft", "1", r.rightToLeft === !0),
          n("tabSelected", "1", r.tabSelected),
          n("showRuler", "0", r.showRuler === !1),
          n("showRowColHeaders", "0", r.showRowColHeaders === !1),
          n("showGridLines", "0", r.showGridLines === !1),
          n("zoomScale", r.zoomScale, r.zoomScale),
          n("zoomScaleNormal", r.zoomScaleNormal, r.zoomScaleNormal),
          n("view", r.style, r.style));
        let o, s, a, u;
        switch (r.state) {
          case "frozen":
            ((s = r.xSplit || 0),
              (a = r.ySplit || 0),
              (o = r.topLeftCell || Qks.getAddress(a + 1, s + 1).address),
              (u = (r.xSplit && r.ySplit && "bottomRight") || (r.xSplit && "topRight") || "bottomLeft"),
              e.leafNode("pane", {
                xSplit: r.xSplit || void 0,
                ySplit: r.ySplit || void 0,
                topLeftCell: o,
                activePane: u,
                state: "frozen",
              }),
              e.leafNode("selection", { pane: u, activeCell: r.activeCell, sqref: r.activeCell }));
            break;
          case "split":
            (r.activePane === "topLeft" && (r.activePane = void 0),
              e.leafNode("pane", {
                xSplit: r.xSplit || void 0,
                ySplit: r.ySplit || void 0,
                topLeftCell: r.topLeftCell,
                activePane: r.activePane,
              }),
              e.leafNode("selection", { pane: r.activePane, activeCell: r.activeCell, sqref: r.activeCell }));
            break;
          case "normal":
            r.activeCell && e.leafNode("selection", { activeCell: r.activeCell, sqref: r.activeCell });
            break;
          default:
            break;
        }
        e.closeNode();
      }
      parseOpen(e) {
        switch (e.name) {
          case "sheetView":
            return (
              (this.sheetView = {
                workbookViewId: parseInt(e.attributes.workbookViewId, 10),
                rightToLeft: e.attributes.rightToLeft === "1",
                tabSelected: e.attributes.tabSelected === "1",
                showRuler: e.attributes.showRuler !== "0",
                showRowColHeaders: e.attributes.showRowColHeaders !== "0",
                showGridLines: e.attributes.showGridLines !== "0",
                zoomScale: parseInt(e.attributes.zoomScale || "100", 10),
                zoomScaleNormal: parseInt(e.attributes.zoomScaleNormal || "100", 10),
                style: e.attributes.view,
              }),
              (this.pane = void 0),
              (this.selections = {}),
              !0
            );
          case "pane":
            return (
              (this.pane = {
                xSplit: parseInt(e.attributes.xSplit || "0", 10),
                ySplit: parseInt(e.attributes.ySplit || "0", 10),
                topLeftCell: e.attributes.topLeftCell,
                activePane: e.attributes.activePane || "topLeft",
                state: e.attributes.state,
              }),
              !0
            );
          case "selection": {
            let r = e.attributes.pane || "topLeft";
            return ((this.selections[r] = { pane: r, activeCell: e.attributes.activeCell }), !0);
          }
          default:
            return !1;
        }
      }
      parseText() {}
      parseClose(e) {
        let r, n;
        switch (e) {
          case "sheetView":
            return (
              this.sheetView && this.pane
                ? ((r = this.model =
                    {
                      workbookViewId: this.sheetView.workbookViewId,
                      rightToLeft: this.sheetView.rightToLeft,
                      state: qks[this.pane.state] || "split",
                      xSplit: this.pane.xSplit,
                      ySplit: this.pane.ySplit,
                      topLeftCell: this.pane.topLeftCell,
                      showRuler: this.sheetView.showRuler,
                      showRowColHeaders: this.sheetView.showRowColHeaders,
                      showGridLines: this.sheetView.showGridLines,
                      zoomScale: this.sheetView.zoomScale,
                      zoomScaleNormal: this.sheetView.zoomScaleNormal,
                    }),
                  this.model.state === "split" && (r.activePane = this.pane.activePane),
                  (n = this.selections[this.pane.activePane]),
                  n && n.activeCell && (r.activeCell = n.activeCell),
                  this.sheetView.style && (r.style = this.sheetView.style))
                : ((r = this.model =
                    {
                      workbookViewId: this.sheetView.workbookViewId,
                      rightToLeft: this.sheetView.rightToLeft,
                      state: "normal",
                      showRuler: this.sheetView.showRuler,
                      showRowColHeaders: this.sheetView.showRowColHeaders,
                      showGridLines: this.sheetView.showGridLines,
                      zoomScale: this.sheetView.zoomScale,
                      zoomScaleNormal: this.sheetView.zoomScaleNormal,
                    }),
                  (n = this.selections.topLeft),
                  n && n.activeCell && (r.activeCell = n.activeCell),
                  this.sheetView.style && (r.style = this.sheetView.style)),
              !1
            );
          default:
            return !0;
        }
      }
      reconcile() {}
    };
  tkn.exports = WKt;
});