/**
 * @module Kr
 * @category utils/xml
 * @label xml
 * @position 1169 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Kr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Kr = T((lAc, C7n) => {
  var H7s = d_e(),
    V7s = Ig(),
    LYt = class t {
      prepare() {}
      render() {}
      parseOpen(e) {}
      parseText(e) {}
      parseClose(e) {}
      reconcile(e, r) {}
      reset() {
        ((this.model = null),
          this.map &&
            Object.values(this.map).forEach((e) => {
              e instanceof t ? e.reset() : e.xform && e.xform.reset();
            }));
      }
      mergeModel(e) {
        this.model = Object.assign(this.model || {}, e);
      }
      async parse(e) {
        for await (let r of e)
          for (let { eventType: n, value: o } of r)
            if (n === "opentag") this.parseOpen(o);
            else if (n === "text") this.parseText(o);
            else if (n === "closetag" && !this.parseClose(o.name)) return this.model;
        return this.model;
      }
      async parseStream(e) {
        return this.parse(H7s(e));
      }
      get xml() {
        return this.toXml(this.model);
      }
      toXml(e) {
        let r = new V7s();
        return (this.render(r, e), r.xml);
      }
      static toAttribute(e, r, n = !1) {
        if (e === void 0) {
          if (n) return r;
        } else if (n || e !== r) return e.toString();
      }
      static toStringAttribute(e, r, n = !1) {
        return t.toAttribute(e, r, n);
      }
      static toStringValue(e, r) {
        return e === void 0 ? r : e;
      }
      static toBoolAttribute(e, r, n = !1) {
        if (e === void 0) {
          if (n) return r;
        } else if (n || e !== r) return e ? "1" : "0";
      }
      static toBoolValue(e, r) {
        return e === void 0 ? r : e === "1";
      }
      static toIntAttribute(e, r, n = !1) {
        return t.toAttribute(e, r, n);
      }
      static toIntValue(e, r) {
        return e === void 0 ? r : parseInt(e, 10);
      }
      static toFloatAttribute(e, r, n = !1) {
        return t.toAttribute(e, r, n);
      }
      static toFloatValue(e, r) {
        return e === void 0 ? r : parseFloat(e);
      }
    };
  C7n.exports = LYt;
});