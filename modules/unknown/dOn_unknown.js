/**
 * @module dOn
 * @category unknown
 * @label unknown
 * @position 1252 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dOn = T((Q2c, mOn) => {
  var ONs = Kr(),
    NNs = lOn(),
    VJt = class extends ONs {
      constructor() {
        (super(), (this.map = { "a:blip": new NNs() }));
      }
      get tag() {
        return "xdr:blipFill";
      }
      render(e, r) {
        (e.openNode(this.tag),
          this.map["a:blip"].render(e, r),
          e.openNode("a:stretch"),
          e.leafNode("a:fillRect"),
          e.closeNode(),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case this.tag:
            this.reset();
            break;
          default:
            ((this.parser = this.map[e.name]), this.parser && this.parser.parseOpen(e));
            break;
        }
        return !0;
      }
      parseText() {}
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case this.tag:
            return ((this.model = this.map["a:blip"].model), !1);
          default:
            return !0;
        }
      }
    };
  mOn.exports = VJt;
});