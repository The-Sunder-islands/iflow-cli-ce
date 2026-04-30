/**
 * @module nJt
 * @category unknown
 * @label unknown
 * @position 1221 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nJt = T((m2c, akn) => {
  var nOs = Pd(),
    iOs = Kr(),
    rJt = class extends iOs {
      get tag() {
        return "autoFilter";
      }
      render(e, r) {
        if (r)
          if (typeof r == "string") e.leafNode("autoFilter", { ref: r });
          else {
            let n = function (a) {
                return typeof a == "string" ? a : nOs.getAddress(a.row, a.column).address;
              },
              o = n(r.from),
              s = n(r.to);
            o && s && e.leafNode("autoFilter", { ref: `${o}:${s}` });
          }
      }
      parseOpen(e) {
        e.name === "autoFilter" && (this.model = e.attributes.ref);
      }
    };
  akn.exports = rJt;
});