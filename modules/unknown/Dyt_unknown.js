/**
 * @module Dyt
 * @category unknown
 * @label unknown
 * @position 94 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Dyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Dyt = T((dB) => {
  var xkr = hkr(),
    Gke = wkr(),
    Kho = ["HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512"];
  dB.ALGORITHMS = Kho;
  dB.sign = xkr.sign;
  dB.verify = Gke.verify;
  dB.decode = Gke.decode;
  dB.isValid = Gke.isValid;
  dB.createSign = function (e) {
    return new xkr(e);
  };
  dB.createVerify = function (e) {
    return new Gke(e);
  };
});