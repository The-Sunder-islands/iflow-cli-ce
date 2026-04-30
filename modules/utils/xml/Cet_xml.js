/**
 * @module Cet
 * @category utils/xml
 * @label xml
 * @position 1194 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Cet) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Cet = T((LAc, fRn) => {
  var HRs = Ig(),
    VRs = Kr(),
    WRs = dRn(),
    vet = class t extends VRs {
      constructor() {
        (super(), (this.map = { Relationship: new WRs() }));
      }
      render(e, r) {
        ((r = r || this._values),
          e.openXml(HRs.StdDocAttributes),
          e.openNode("Relationships", t.RELATIONSHIPS_ATTRIBUTES),
          r.forEach((n) => {
            this.map.Relationship.render(e, n);
          }),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "Relationships":
            return ((this.model = []), !0);
          default:
            if (((this.parser = this.map[e.name]), this.parser)) return (this.parser.parseOpen(e), !0);
            throw new Error(`Unexpected xml node in parseOpen: ${JSON.stringify(e)}`);
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser)
          return (this.parser.parseClose(e) || (this.model.push(this.parser.model), (this.parser = void 0)), !0);
        switch (e) {
          case "Relationships":
            return !1;
          default:
            throw new Error(`Unexpected xml node in parseClose: ${e}`);
        }
      }
    };
  vet.RELATIONSHIPS_ATTRIBUTES = { xmlns: "http://schemas.openxmlformats.org/package/2006/relationships" };
  fRn.exports = vet;
});