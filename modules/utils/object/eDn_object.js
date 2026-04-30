/**
 * @module eDn
 * @category utils/object
 * @label object
 * @position 1130 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eDn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eDn = T((Cbc, ZTn) => {
  var mTs = f1(),
    IZe = class t {
      constructor(e) {
        this.note = e;
      }
      get model() {
        let e = null;
        switch (typeof this.note) {
          case "string":
            e = { type: "note", note: { texts: [{ text: this.note }] } };
            break;
          default:
            e = { type: "note", note: this.note };
            break;
        }
        return mTs.deepMerge({}, t.DEFAULT_CONFIGS, e);
      }
      set model(e) {
        let { note: r } = e,
          { texts: n } = r;
        n.length === 1 && Object.keys(n[0]).length === 1 ? (this.note = n[0].text) : (this.note = r);
      }
      static fromModel(e) {
        let r = new t();
        return ((r.model = e), r);
      }
    };
  IZe.DEFAULT_CONFIGS = {
    note: {
      margins: { insetmode: "auto", inset: [0.13, 0.13, 0.25, 0.25] },
      protection: { locked: "True", lockText: "True" },
      editAs: "absolute",
    },
  };
  ZTn.exports = IZe;
});