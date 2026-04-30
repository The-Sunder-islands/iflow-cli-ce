/**
 * @module dJt
 * @category unknown
 * @label unknown
 * @position 1227 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dJt = T((b2c, gkn) => {
  var mOs = Kr(),
    mJt = class extends mOs {
      get tag() {
        return "headerFooter";
      }
      render(e, r) {
        if (r) {
          e.addRollback();
          let n = !1;
          (e.openNode("headerFooter"),
            r.differentFirst && (e.addAttribute("differentFirst", "1"), (n = !0)),
            r.differentOddEven && (e.addAttribute("differentOddEven", "1"), (n = !0)),
            r.oddHeader && typeof r.oddHeader == "string" && (e.leafNode("oddHeader", null, r.oddHeader), (n = !0)),
            r.oddFooter && typeof r.oddFooter == "string" && (e.leafNode("oddFooter", null, r.oddFooter), (n = !0)),
            r.evenHeader && typeof r.evenHeader == "string" && (e.leafNode("evenHeader", null, r.evenHeader), (n = !0)),
            r.evenFooter && typeof r.evenFooter == "string" && (e.leafNode("evenFooter", null, r.evenFooter), (n = !0)),
            r.firstHeader &&
              typeof r.firstHeader == "string" &&
              (e.leafNode("firstHeader", null, r.firstHeader), (n = !0)),
            r.firstFooter &&
              typeof r.firstFooter == "string" &&
              (e.leafNode("firstFooter", null, r.firstFooter), (n = !0)),
            n ? (e.closeNode(), e.commit()) : e.rollback());
        }
      }
      parseOpen(e) {
        switch (e.name) {
          case "headerFooter":
            return (
              (this.model = {}),
              e.attributes.differentFirst &&
                (this.model.differentFirst = parseInt(e.attributes.differentFirst, 0) === 1),
              e.attributes.differentOddEven &&
                (this.model.differentOddEven = parseInt(e.attributes.differentOddEven, 0) === 1),
              !0
            );
          case "oddHeader":
            return ((this.currentNode = "oddHeader"), !0);
          case "oddFooter":
            return ((this.currentNode = "oddFooter"), !0);
          case "evenHeader":
            return ((this.currentNode = "evenHeader"), !0);
          case "evenFooter":
            return ((this.currentNode = "evenFooter"), !0);
          case "firstHeader":
            return ((this.currentNode = "firstHeader"), !0);
          case "firstFooter":
            return ((this.currentNode = "firstFooter"), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        switch (this.currentNode) {
          case "oddHeader":
            this.model.oddHeader = e;
            break;
          case "oddFooter":
            this.model.oddFooter = e;
            break;
          case "evenHeader":
            this.model.evenHeader = e;
            break;
          case "evenFooter":
            this.model.evenFooter = e;
            break;
          case "firstHeader":
            this.model.firstHeader = e;
            break;
          case "firstFooter":
            this.model.firstFooter = e;
            break;
          default:
            break;
        }
      }
      parseClose() {
        switch (this.currentNode) {
          case "oddHeader":
          case "oddFooter":
          case "evenHeader":
          case "evenFooter":
          case "firstHeader":
          case "firstFooter":
            return ((this.currentNode = void 0), !0);
          default:
            return !1;
        }
      }
    };
  gkn.exports = mJt;
});