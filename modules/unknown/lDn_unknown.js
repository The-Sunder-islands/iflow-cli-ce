/**
 * @module lDn
 * @category unknown
 * @label unknown
 * @position 1135 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lDn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lDn = T((Dbc, cDn) => {
  var _Ts = Pd(),
    NZe = uDn(),
    wzt = class {
      constructor(e, r) {
        ((this.worksheet = e), (this.model = r));
      }
      get model() {
        switch (this.type) {
          case "background":
            return { type: this.type, imageId: this.imageId };
          case "image":
            return {
              type: this.type,
              imageId: this.imageId,
              hyperlinks: this.range.hyperlinks,
              range: {
                tl: this.range.tl.model,
                br: this.range.br && this.range.br.model,
                ext: this.range.ext,
                editAs: this.range.editAs,
              },
            };
          default:
            throw new Error("Invalid Image Type");
        }
      }
      set model({ type: e, imageId: r, range: n, hyperlinks: o }) {
        if (((this.type = e), (this.imageId = r), e === "image"))
          if (typeof n == "string") {
            let s = _Ts.decode(n);
            this.range = {
              tl: new NZe(this.worksheet, { col: s.left, row: s.top }, -1),
              br: new NZe(this.worksheet, { col: s.right, row: s.bottom }, 0),
              editAs: "oneCell",
            };
          } else
            this.range = {
              tl: new NZe(this.worksheet, n.tl, 0),
              br: n.br && new NZe(this.worksheet, n.br, 0),
              ext: n.ext,
              editAs: n.editAs,
              hyperlinks: o || n.hyperlinks,
            };
      }
    };
  cDn.exports = wzt;
});