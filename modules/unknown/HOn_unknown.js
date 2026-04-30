/**
 * @module HOn
 * @category unknown
 * @label unknown
 * @position 1268 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HOn = T((i5c, qOn) => {
  var gPs = Kr(),
    aXt = class extends gPs {
      get tag() {
        return "tableColumn";
      }
      prepare(e, r) {
        e.id = r.index + 1;
      }
      render(e, r) {
        return (
          e.leafNode(this.tag, {
            id: r.id.toString(),
            name: r.name,
            totalsRowLabel: r.totalsRowLabel,
            totalsRowFunction: r.totalsRowFunction,
            dxfId: r.dxfId,
          }),
          !0
        );
      }
      parseOpen(e) {
        if (e.name === this.tag) {
          let { attributes: r } = e;
          return (
            (this.model = {
              name: r.name,
              totalsRowLabel: r.totalsRowLabel,
              totalsRowFunction: r.totalsRowFunction,
              dxfId: r.dxfId,
            }),
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
  qOn.exports = aXt;
});