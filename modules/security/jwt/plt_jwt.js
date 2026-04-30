/**
 * @module plt
 * @category security/jwt
 * @label jwt
 * @position 1654 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (plt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var plt = T((CQc, Epi) => {
  function $wa(
    t,
    {
      EOL: e = `
`,
      finalEOL: r = !0,
      replacer: n = null,
      spaces: o,
    } = {},
  ) {
    let s = r ? e : "";
    return JSON.stringify(t, n, o).replace(/\n/g, e) + s;
  }
  function jwa(t) {
    return (Buffer.isBuffer(t) && (t = t.toString("utf8")), t.replace(/^\uFEFF/, ""));
  }
  Epi.exports = { stringify: $wa, stripBom: jwa };
});