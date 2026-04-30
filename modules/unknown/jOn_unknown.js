/**
 * @module jOn
 * @category unknown
 * @label unknown
 * @position 1266 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jOn = T((r5c, $On) => {
  var mPs = Kr(),
    UOn = vF(),
    dPs = LOn(),
    fPs = FOn(),
    oXt = class extends mPs {
      constructor() {
        (super(),
          (this.map = {
            customFilters: new UOn({ tag: "customFilters", count: !1, empty: !0, childXform: new dPs() }),
            filters: new UOn({ tag: "filters", count: !1, empty: !0, childXform: new fPs() }),
          }));
      }
      get tag() {
        return "filterColumn";
      }
      prepare(e, r) {
        e.colId = r.index.toString();
      }
      render(e, r) {
        return r.customFilters
          ? (e.openNode(this.tag, { colId: r.colId, hiddenButton: r.filterButton ? "0" : "1" }),
            this.map.customFilters.render(e, r.customFilters),
            e.closeNode(),
            !0)
          : (e.leafNode(this.tag, { colId: r.colId, hiddenButton: r.filterButton ? "0" : "1" }), !0);
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        let { attributes: r } = e;
        switch (e.name) {
          case this.tag:
            return ((this.model = { filterButton: r.hiddenButton === "0" }), !0);
          default:
            if (((this.parser = this.map[e.name]), this.parser)) return (this.parseOpen(e), !0);
            throw new Error(`Unexpected xml node in parseOpen: ${JSON.stringify(e)}`);
        }
      }
      parseText() {}
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case this.tag:
            return ((this.model.customFilters = this.map.customFilters.model), !1);
          default:
            return !0;
        }
      }
    };
  $On.exports = oXt;
});