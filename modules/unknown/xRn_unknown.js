/**
 * @module xRn
 * @category unknown
 * @label unknown
 * @position 1201 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xRn = T((GAc, wRn) => {
  var aks = Kr(),
    EKt = class extends aks {
      render(e, r) {
        let n = {
          xWindow: r.x || 0,
          yWindow: r.y || 0,
          windowWidth: r.width || 12e3,
          windowHeight: r.height || 24e3,
          firstSheet: r.firstSheet,
          activeTab: r.activeTab,
        };
        (r.visibility && r.visibility !== "visible" && (n.visibility = r.visibility), e.leafNode("workbookView", n));
      }
      parseOpen(e) {
        if (e.name === "workbookView") {
          let r = (this.model = {}),
            n = function (s, a, u) {
              let c = a !== void 0 ? (r[s] = a) : u;
              c !== void 0 && (r[s] = c);
            },
            o = function (s, a, u) {
              let c = a !== void 0 ? (r[s] = parseInt(a, 10)) : u;
              c !== void 0 && (r[s] = c);
            };
          return (
            o("x", e.attributes.xWindow, 0),
            o("y", e.attributes.yWindow, 0),
            o("width", e.attributes.windowWidth, 25e3),
            o("height", e.attributes.windowHeight, 1e4),
            n("visibility", e.attributes.visibility, "visible"),
            o("activeTab", e.attributes.activeTab, void 0),
            o("firstSheet", e.attributes.firstSheet, void 0),
            !0
          );
        }
        return !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  wRn.exports = EKt;
});