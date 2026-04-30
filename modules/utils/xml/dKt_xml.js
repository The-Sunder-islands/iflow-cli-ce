/**
 * @module dKt
 * @category utils/xml
 * @label xml
 * @position 1192 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dKt = T((PAc, lRn) => {
  var jRs = Ig(),
    QRs = Kr(),
    GRs = cRn(),
    mKt = class extends QRs {
      constructor(e) {
        (super(),
          (this.model = e || { values: [], count: 0 }),
          (this.hash = Object.create(null)),
          (this.rich = Object.create(null)));
      }
      get sharedStringXform() {
        return this._sharedStringXform || (this._sharedStringXform = new GRs());
      }
      get values() {
        return this.model.values;
      }
      get uniqueCount() {
        return this.model.values.length;
      }
      get count() {
        return this.model.count;
      }
      getString(e) {
        return this.model.values[e];
      }
      add(e) {
        return e.richText ? this.addRichText(e) : this.addText(e);
      }
      addText(e) {
        let r = this.hash[e];
        return (
          r === void 0 && ((r = this.hash[e] = this.model.values.length), this.model.values.push(e)),
          this.model.count++,
          r
        );
      }
      addRichText(e) {
        let r = this.sharedStringXform.toXml(e),
          n = this.rich[r];
        return (
          n === void 0 && ((n = this.rich[r] = this.model.values.length), this.model.values.push(e)),
          this.model.count++,
          n
        );
      }
      render(e, r) {
        ((r = r || this._values),
          e.openXml(jRs.StdDocAttributes),
          e.openNode("sst", {
            xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
            count: r.count,
            uniqueCount: r.values.length,
          }));
        let n = this.sharedStringXform;
        (r.values.forEach((o) => {
          n.render(e, o);
        }),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "sst":
            return !0;
          case "si":
            return ((this.parser = this.sharedStringXform), this.parser.parseOpen(e), !0);
          default:
            throw new Error(`Unexpected xml node in parseOpen: ${JSON.stringify(e)}`);
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser)
          return (
            this.parser.parseClose(e) ||
              (this.model.values.push(this.parser.model), this.model.count++, (this.parser = void 0)),
            !0
          );
        switch (e) {
          case "sst":
            return !1;
          default:
            throw new Error(`Unexpected xml node in parseClose: ${e}`);
        }
      }
    };
  lRn.exports = mKt;
});