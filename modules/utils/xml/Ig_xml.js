/**
 * @module Ig
 * @category utils/xml
 * @label xml
 * @position 1162 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ig) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ig = T((nAc, GIn) => {
  var jIs = f1(),
    jIn = eA(),
    QIs = "<",
    JZe = ">",
    GIs = "</",
    qIs = "/>";
  function QIn(t, e, r) {
    t.push(` ${e}="${jIn.xmlEncode(r.toString())}"`);
  }
  function gYt(t, e) {
    if (e) {
      let r = [];
      (jIs.each(e, (n, o) => {
        n !== void 0 && QIn(r, o, n);
      }),
        t.push(r.join("")));
    }
  }
  var XZe = class {
    constructor() {
      ((this._xml = []), (this._stack = []), (this._rollbacks = []));
    }
    get tos() {
      return this._stack.length ? this._stack[this._stack.length - 1] : void 0;
    }
    get cursor() {
      return this._xml.length;
    }
    openXml(e) {
      let r = this._xml;
      (r.push("<?xml"),
        gYt(r, e),
        r.push(`?>
`));
    }
    openNode(e, r) {
      let n = this.tos,
        o = this._xml;
      (n && this.open && o.push(JZe),
        this._stack.push(e),
        o.push(QIs),
        o.push(e),
        gYt(o, r),
        (this.leaf = !0),
        (this.open = !0));
    }
    addAttribute(e, r) {
      if (!this.open) throw new Error("Cannot write attributes to node if it is not open");
      r !== void 0 && QIn(this._xml, e, r);
    }
    addAttributes(e) {
      if (!this.open) throw new Error("Cannot write attributes to node if it is not open");
      gYt(this._xml, e);
    }
    writeText(e) {
      let r = this._xml;
      (this.open && (r.push(JZe), (this.open = !1)), (this.leaf = !1), r.push(jIn.xmlEncode(e.toString())));
    }
    writeXml(e) {
      (this.open && (this._xml.push(JZe), (this.open = !1)), (this.leaf = !1), this._xml.push(e));
    }
    closeNode() {
      let e = this._stack.pop(),
        r = this._xml;
      (this.leaf ? r.push(qIs) : (r.push(GIs), r.push(e), r.push(JZe)), (this.open = !1), (this.leaf = !1));
    }
    leafNode(e, r, n) {
      (this.openNode(e, r), n !== void 0 && this.writeText(n), this.closeNode());
    }
    closeAll() {
      for (; this._stack.length; ) this.closeNode();
    }
    addRollback() {
      return (
        this._rollbacks.push({ xml: this._xml.length, stack: this._stack.length, leaf: this.leaf, open: this.open }),
        this.cursor
      );
    }
    commit() {
      this._rollbacks.pop();
    }
    rollback() {
      let e = this._rollbacks.pop();
      (this._xml.length > e.xml && this._xml.splice(e.xml, this._xml.length - e.xml),
        this._stack.length > e.stack && this._stack.splice(e.stack, this._stack.length - e.stack),
        (this.leaf = e.leaf),
        (this.open = e.open));
    }
    get xml() {
      return (this.closeAll(), this._xml.join(""));
    }
  };
  XZe.StdDocAttributes = { version: "1.0", encoding: "UTF-8", standalone: "yes" };
  GIn.exports = XZe;
});