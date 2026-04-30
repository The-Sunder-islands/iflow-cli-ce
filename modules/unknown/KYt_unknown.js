/**
 * @module KYt
 * @category unknown
 * @label unknown
 * @position 1180 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (KYt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var KYt = T((vAc, j7n) => {
  var sRs = f1(),
    YYt = $7n(),
    aRs = Kr();
  function uRs() {
    let t = {};
    return (
      sRs.each(YYt, (e, r) => {
        e.f && (t[e.f] = parseInt(r, 10));
      }),
      t
    );
  }
  var cRs = uRs(),
    f_e = class extends aRs {
      constructor(e, r) {
        (super(), (this.id = e), (this.formatCode = r));
      }
      get tag() {
        return "numFmt";
      }
      render(e, r) {
        e.leafNode("numFmt", { numFmtId: r.id, formatCode: r.formatCode });
      }
      parseOpen(e) {
        switch (e.name) {
          case "numFmt":
            return (
              (this.model = {
                id: parseInt(e.attributes.numFmtId, 10),
                formatCode: e.attributes.formatCode.replace(/[\\](.)/g, "$1"),
              }),
              !0
            );
          default:
            return !1;
        }
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  f_e.getDefaultFmtId = function (e) {
    return cRs[e];
  };
  f_e.getDefaultFmtCode = function (e) {
    return YYt[e] && YYt[e].f;
  };
  j7n.exports = f_e;
});