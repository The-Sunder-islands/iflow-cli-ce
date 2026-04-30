/**
 * @module Skn
 * @category utils/xml
 * @label xml
 * @position 1231 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Skn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Skn = T((E2c, Ckn) => {
  var gOs = Kr(),
    vkn = W8(),
    gJt = class extends gOs {
      get tag() {
        return "x14:id";
      }
      render(e, r) {
        e.leafNode(this.tag, null, r);
      }
      parseOpen() {
        this.model = "";
      }
      parseText(e) {
        this.model += e;
      }
      parseClose(e) {
        return e !== this.tag;
      }
    },
    bJt = class extends vkn {
      constructor() {
        (super(), (this.map = { "x14:id": (this.idXform = new gJt()) }));
      }
      get tag() {
        return "ext";
      }
      render(e, r) {
        (e.openNode(this.tag, {
          uri: "{B025F937-C7B1-47D3-B67F-A62EFF666E3E}",
          "xmlns:x14": "http://schemas.microsoft.com/office/spreadsheetml/2009/9/main",
        }),
          this.idXform.render(e, r.x14Id),
          e.closeNode());
      }
      createNewModel() {
        return {};
      }
      onParserClose(e, r) {
        this.model.x14Id = r.model;
      }
    },
    AJt = class extends vkn {
      constructor() {
        (super(), (this.map = { ext: new bJt() }));
      }
      get tag() {
        return "extLst";
      }
      render(e, r) {
        (e.openNode(this.tag), this.map.ext.render(e, r), e.closeNode());
      }
      createNewModel() {
        return {};
      }
      onParserClose(e, r) {
        Object.assign(this.model, r.model);
      }
    };
  Ckn.exports = AJt;
});