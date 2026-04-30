/**
 * @module M5i
 * @category utils/xml
 * @label xml
 * @position 1741 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (M5i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var M5i = T((ggr) => {
  "use strict";
  Object.defineProperty(ggr, "__esModule", { value: !0 });
  ggr.parseXML = F7a;
  var M7a = L5i(),
    hgr = new M7a.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: !0,
      ignoreAttributes: !1,
      ignoreDeclaration: !0,
      parseTagValue: !1,
      trimValues: !1,
      tagValueProcessor: (t, e) =>
        e.trim() === "" &&
        e.includes(`
`)
          ? ""
          : void 0,
    });
  hgr.addEntity("#xD", "\r");
  hgr.addEntity(
    "#10",
    `
`,
  );
  function F7a(t) {
    return hgr.parse(t, !0);
  }
});