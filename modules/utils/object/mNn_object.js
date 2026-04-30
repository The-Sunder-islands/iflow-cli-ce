/**
 * @module mNn
 * @category utils/object
 * @label object
 * @position 1277 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mNn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mNn = T((f5c, lNn) => {
  var LPs = Kr(),
    MPs = nNn(),
    uNn = oNn(),
    cNn = aNn(),
    pXt = ["twoCells", "oneCells", "absolute"],
    hXt = class extends LPs {
      constructor() {
        (super(),
          (this.map = {
            "x:Anchor": new MPs(),
            "x:Locked": new uNn({ tag: "x:Locked" }),
            "x:LockText": new uNn({ tag: "x:LockText" }),
            "x:SizeWithCells": new cNn({ tag: "x:SizeWithCells" }),
            "x:MoveWithCells": new cNn({ tag: "x:MoveWithCells" }),
          }));
      }
      get tag() {
        return "x:ClientData";
      }
      render(e, r) {
        let { protection: n, editAs: o } = r.note;
        (e.openNode(this.tag, { ObjectType: "Note" }),
          this.map["x:MoveWithCells"].render(e, o, pXt),
          this.map["x:SizeWithCells"].render(e, o, pXt),
          this.map["x:Anchor"].render(e, r),
          this.map["x:Locked"].render(e, n.locked),
          e.leafNode("x:AutoFill", null, "False"),
          this.map["x:LockText"].render(e, n.lockText),
          e.leafNode("x:Row", null, r.refAddress.row - 1),
          e.leafNode("x:Column", null, r.refAddress.col - 1),
          e.closeNode());
      }
      parseOpen(e) {
        switch (e.name) {
          case this.tag:
            (this.reset(), (this.model = { anchor: [], protection: {}, editAs: "" }));
            break;
          default:
            ((this.parser = this.map[e.name]), this.parser && this.parser.parseOpen(e));
            break;
        }
        return !0;
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case this.tag:
            return (this.normalizeModel(), !1);
          default:
            return !0;
        }
      }
      normalizeModel() {
        let e = Object.assign({}, this.map["x:MoveWithCells"].model, this.map["x:SizeWithCells"].model),
          r = Object.keys(e).length;
        ((this.model.editAs = pXt[r]),
          (this.model.anchor = this.map["x:Anchor"].text),
          (this.model.protection.locked = this.map["x:Locked"].text),
          (this.model.protection.lockText = this.map["x:LockText"].text));
      }
    };
  lNn.exports = hXt;
});