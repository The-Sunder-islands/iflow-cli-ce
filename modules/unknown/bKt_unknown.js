/**
 * @module bKt
 * @category unknown
 * @label unknown
 * @position 1198 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bKt = T(($Ac, _Rn) => {
  var XRs = Ig(),
    ZRs = Kr(),
    yRn = uet(),
    eks = gRn(),
    tks = ARn(),
    due = class t extends ZRs {
      constructor() {
        (super(),
          (this.map = {
            Company: new yRn({ tag: "Company" }),
            Manager: new yRn({ tag: "Manager" }),
            HeadingPairs: new eks(),
            TitleOfParts: new tks(),
          }));
      }
      render(e, r) {
        (e.openXml(XRs.StdDocAttributes),
          e.openNode("Properties", t.PROPERTY_ATTRIBUTES),
          e.leafNode("Application", void 0, "Microsoft Excel"),
          e.leafNode("DocSecurity", void 0, "0"),
          e.leafNode("ScaleCrop", void 0, "false"),
          this.map.HeadingPairs.render(e, r.worksheets),
          this.map.TitleOfParts.render(e, r.worksheets),
          this.map.Company.render(e, r.company || ""),
          this.map.Manager.render(e, r.manager),
          e.leafNode("LinksUpToDate", void 0, "false"),
          e.leafNode("SharedDoc", void 0, "false"),
          e.leafNode("HyperlinksChanged", void 0, "false"),
          e.leafNode("AppVersion", void 0, "16.0300"),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "Properties":
            return !0;
          default:
            return ((this.parser = this.map[e.name]), this.parser ? (this.parser.parseOpen(e), !0) : !1);
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case "Properties":
            return (
              (this.model = {
                worksheets: this.map.TitleOfParts.model,
                company: this.map.Company.model,
                manager: this.map.Manager.model,
              }),
              !1
            );
          default:
            return !0;
        }
      }
    };
  due.DateFormat = function (t) {
    return t.toISOString().replace(/[.]\d{3,6}/, "");
  };
  due.DateAttrs = { "xsi:type": "dcterms:W3CDTF" };
  due.PROPERTY_ATTRIBUTES = {
    xmlns: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
    "xmlns:vt": "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  };
  _Rn.exports = due;
});