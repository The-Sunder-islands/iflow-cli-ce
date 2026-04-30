/**
 * @module SRn
 * @category utils/xml
 * @label xml
 * @position 1200 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (SRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var SRn = T((QAc, CRn) => {
  var oks = eA(),
    sks = Kr(),
    _Kt = class extends sks {
      render(e, r) {
        e.leafNode("sheet", { sheetId: r.id, name: r.name, state: r.state, "r:id": r.rId });
      }
      parseOpen(e) {
        return e.name === "sheet"
          ? ((this.model = {
              name: oks.xmlDecode(e.attributes.name),
              id: parseInt(e.attributes.sheetId, 10),
              state: e.attributes.state,
              rId: e.attributes["r:id"],
            }),
            !0)
          : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  CRn.exports = _Kt;
});