/**
 * @module det
 * @category unknown
 * @label unknown
 * @position 1177 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (det) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var det = T((AAc, P7n) => {
  "use strict";
  var tRs = CF(),
    bW = I7n(),
    GYt = aet(),
    qYt = uet(),
    rRs = N7n(),
    nRs = f1(),
    iRs = Kr(),
    met = class t extends iRs {
      constructor(e) {
        (super(),
          (this.options = e || t.OPTIONS),
          (this.map = {
            b: { prop: "bold", xform: new bW({ tag: "b", attr: "val" }) },
            i: { prop: "italic", xform: new bW({ tag: "i", attr: "val" }) },
            u: { prop: "underline", xform: new rRs() },
            charset: { prop: "charset", xform: new GYt({ tag: "charset", attr: "val" }) },
            color: { prop: "color", xform: new tRs() },
            condense: { prop: "condense", xform: new bW({ tag: "condense", attr: "val" }) },
            extend: { prop: "extend", xform: new bW({ tag: "extend", attr: "val" }) },
            family: { prop: "family", xform: new GYt({ tag: "family", attr: "val" }) },
            outline: { prop: "outline", xform: new bW({ tag: "outline", attr: "val" }) },
            vertAlign: { prop: "vertAlign", xform: new qYt({ tag: "vertAlign", attr: "val" }) },
            scheme: { prop: "scheme", xform: new qYt({ tag: "scheme", attr: "val" }) },
            shadow: { prop: "shadow", xform: new bW({ tag: "shadow", attr: "val" }) },
            strike: { prop: "strike", xform: new bW({ tag: "strike", attr: "val" }) },
            sz: { prop: "size", xform: new GYt({ tag: "sz", attr: "val" }) },
          }),
          (this.map[this.options.fontNameTag] = {
            prop: "name",
            xform: new qYt({ tag: this.options.fontNameTag, attr: "val" }),
          }));
      }
      get tag() {
        return this.options.tagName;
      }
      render(e, r) {
        let { map: n } = this;
        (e.openNode(this.options.tagName),
          nRs.each(this.map, (o, s) => {
            n[s].xform.render(e, r[o.prop]);
          }),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        if (this.map[e.name]) return ((this.parser = this.map[e.name].xform), this.parser.parseOpen(e));
        switch (e.name) {
          case this.options.tagName:
            return ((this.model = {}), !0);
          default:
            return !1;
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser && !this.parser.parseClose(e)) {
          let r = this.map[e];
          return (this.parser.model && (this.model[r.prop] = this.parser.model), (this.parser = void 0), !0);
        }
        switch (e) {
          case this.options.tagName:
            return !1;
          default:
            return !0;
        }
      }
    };
  met.OPTIONS = { tagName: "font", fontNameTag: "name" };
  P7n.exports = met;
});