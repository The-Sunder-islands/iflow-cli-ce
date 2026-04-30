/**
 * @module vRn
 * @category unknown
 * @label unknown
 * @position 1199 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vRn = T((jAc, ERn) => {
  var rks = Kr(),
    nks = Pd(),
    yKt = class extends rks {
      render(e, r) {
        (e.openNode("definedName", { name: r.name, localSheetId: r.localSheetId }),
          e.writeText(r.ranges.join(",")),
          e.closeNode());
      }
      parseOpen(e) {
        switch (e.name) {
          case "definedName":
            return (
              (this._parsedName = e.attributes.name),
              (this._parsedLocalSheetId = e.attributes.localSheetId),
              (this._parsedText = []),
              !0
            );
          default:
            return !1;
        }
      }
      parseText(e) {
        this._parsedText.push(e);
      }
      parseClose() {
        return (
          (this.model = { name: this._parsedName, ranges: iks(this._parsedText.join("")) }),
          this._parsedLocalSheetId !== void 0 && (this.model.localSheetId = parseInt(this._parsedLocalSheetId, 10)),
          !1
        );
      }
    };
  function AKt(t) {
    try {
      return (nks.decodeEx(t), !0);
    } catch {
      return !1;
    }
  }
  function iks(t) {
    let e = [],
      r = !1,
      n = "";
    return (
      t.split(",").forEach((o) => {
        if (!o) return;
        let s = (o.match(/'/g) || []).length;
        if (!s) {
          r ? (n += `${o},`) : AKt(o) && e.push(o);
          return;
        }
        let a = s % 2 === 0;
        !r && a && AKt(o)
          ? e.push(o)
          : r && !a
            ? ((r = !1), AKt(n + o) && e.push(n + o), (n = ""))
            : ((r = !0), (n += `${o},`));
      }),
      e
    );
  }
  ERn.exports = yKt;
});