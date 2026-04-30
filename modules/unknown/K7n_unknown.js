/**
 * @module K7n
 * @category unknown
 * @label unknown
 * @position 1184 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (K7n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var K7n = T((xAc, Y7n) => {
  var hRs = Kr(),
    gRs = XYt(),
    bRs = zYt(),
    ARs = VYt(),
    yRs = det(),
    _Rs = KYt(),
    ERs = eKt(),
    rKt = class extends hRs {
      constructor() {
        (super(),
          (this.map = {
            alignment: new gRs(),
            border: new bRs(),
            fill: new ARs(),
            font: new yRs(),
            numFmt: new _Rs(),
            protection: new ERs(),
          }));
      }
      get tag() {
        return "dxf";
      }
      render(e, r) {
        if ((e.openNode(this.tag), r.font && this.map.font.render(e, r.font), r.numFmt && r.numFmtId)) {
          let n = { id: r.numFmtId, formatCode: r.numFmt };
          this.map.numFmt.render(e, n);
        }
        (r.fill && this.map.fill.render(e, r.fill),
          r.alignment && this.map.alignment.render(e, r.alignment),
          r.border && this.map.border.render(e, r.border),
          r.protection && this.map.protection.render(e, r.protection),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case this.tag:
            return (this.reset(), !0);
          default:
            return ((this.parser = this.map[e.name]), this.parser && this.parser.parseOpen(e), !0);
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        return this.parser
          ? (this.parser.parseClose(e) || (this.parser = void 0), !0)
          : e === this.tag
            ? ((this.model = {
                alignment: this.map.alignment.model,
                border: this.map.border.model,
                fill: this.map.fill.model,
                font: this.map.font.model,
                numFmt: this.map.numFmt.model,
                protection: this.map.protection.model,
              }),
              !1)
            : !0;
      }
    };
  Y7n.exports = rKt;
});