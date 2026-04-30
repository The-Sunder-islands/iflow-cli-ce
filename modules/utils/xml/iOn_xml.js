/**
 * @module iOn
 * @category utils/xml
 * @label xml
 * @position 1247 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iOn = T((M2c, nOn) => {
  var rOn = W8(),
    eNs = tOn(),
    UJt = class extends rOn {
      constructor() {
        (super(), (this.map = { "x14:conditionalFormattings": (this.conditionalFormattings = new eNs()) }));
      }
      get tag() {
        return "ext";
      }
      hasContent(e) {
        return this.conditionalFormattings.hasContent(e.conditionalFormattings);
      }
      prepare(e, r) {
        this.conditionalFormattings.prepare(e.conditionalFormattings, r);
      }
      render(e, r) {
        (e.openNode("ext", {
          uri: "{78C0D931-6437-407d-A8EE-F0AAD7539E65}",
          "xmlns:x14": "http://schemas.microsoft.com/office/spreadsheetml/2009/9/main",
        }),
          this.conditionalFormattings.render(e, r.conditionalFormattings),
          e.closeNode());
      }
      createNewModel() {
        return {};
      }
      onParserClose(e, r) {
        this.model[e] = r.model;
      }
    },
    $Jt = class extends rOn {
      constructor() {
        (super(), (this.map = { ext: (this.ext = new UJt()) }));
      }
      get tag() {
        return "extLst";
      }
      prepare(e, r) {
        this.ext.prepare(e, r);
      }
      hasContent(e) {
        return this.ext.hasContent(e);
      }
      render(e, r) {
        this.hasContent(r) && (e.openNode("extLst"), this.ext.render(e, r), e.closeNode());
      }
      createNewModel() {
        return {};
      }
      onParserClose(e, r) {
        Object.assign(this.model, r.model);
      }
    };
  nOn.exports = $Jt;
});