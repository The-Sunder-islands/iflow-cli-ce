/**
 * @module blt
 * @category security/jwt
 * @label jwt
 * @position 1657 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (blt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var blt = T((xQc, Rpi) => {
  "use strict";
  var zwa = d3().fromPromise,
    Apr = e5(),
    Dpi = Ae("path"),
    Ipi = FS(),
    Ywa = l$().pathExists;
  async function Kwa(t, e, r = "utf-8") {
    let n = Dpi.dirname(t);
    return ((await Ywa(n)) || (await Ipi.mkdirs(n)), Apr.writeFile(t, e, r));
  }
  function Jwa(t, ...e) {
    let r = Dpi.dirname(t);
    (Apr.existsSync(r) || Ipi.mkdirsSync(r), Apr.writeFileSync(t, ...e));
  }
  Rpi.exports = { outputFile: zwa(Kwa), outputFileSync: Jwa };
});