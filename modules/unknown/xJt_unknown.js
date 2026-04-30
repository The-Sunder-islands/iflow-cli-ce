/**
 * @module xJt
 * @category unknown
 * @label unknown
 * @position 1237 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xJt = T((T2c, Lkn) => {
  var POs = Kr(),
    BOs = Bkn(),
    wJt = class extends POs {
      constructor() {
        (super(), (this.cfXform = new BOs()));
      }
      get tag() {
        return "conditionalFormatting";
      }
      reset() {
        this.model = [];
      }
      prepare(e, r) {
        let n = e.reduce((o, s) => Math.max(o, ...s.rules.map((a) => a.priority || 0)), 1);
        e.forEach((o) => {
          o.rules.forEach((s) => {
            (s.priority || (s.priority = n++), s.style && (s.dxfId = r.styles.addDxfStyle(s.style)));
          });
        });
      }
      render(e, r) {
        r.forEach((n) => {
          this.cfXform.render(e, n);
        });
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "conditionalFormatting":
            return ((this.parser = this.cfXform), this.parser.parseOpen(e), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        return this.parser
          ? this.parser.parseClose(e)
            ? !0
            : (this.model.push(this.parser.model), (this.parser = void 0), !1)
          : !1;
      }
      reconcile(e, r) {
        e.forEach((n) => {
          n.rules.forEach((o) => {
            o.dxfId !== void 0 && ((o.style = r.styles.getDxfStyle(o.dxfId)), delete o.dxfId);
          });
        });
      }
    };
  Lkn.exports = wJt;
});