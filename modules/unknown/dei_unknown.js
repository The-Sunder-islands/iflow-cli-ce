/**
 * @module dei
 * @category unknown
 * @label unknown
 * @position 1533 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dei) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dei = T((vCc, mei) => {
  "use strict";
  var { Transform: eda } = Ae("node:stream"),
    { Console: tda } = Ae("node:console"),
    rda = process.versions.icu ? "\u2705" : "Y ",
    nda = process.versions.icu ? "\u274C" : "N ";
  mei.exports = class {
    constructor({ disableColors: e } = {}) {
      ((this.transform = new eda({
        transform(r, n, o) {
          o(null, r);
        },
      })),
        (this.logger = new tda({ stdout: this.transform, inspectOptions: { colors: !e && !process.env.CI } })));
    }
    format(e) {
      let r = e.map(
        ({ method: n, path: o, data: { statusCode: s }, persist: a, times: u, timesInvoked: c, origin: m }) => ({
          Method: n,
          Origin: m,
          Path: o,
          "Status code": s,
          Persistent: a ? rda : nda,
          Invocations: c,
          Remaining: a ? 1 / 0 : u - c,
        }),
      );
      return (this.logger.table(r), this.transform.read().toString());
    }
  };
});