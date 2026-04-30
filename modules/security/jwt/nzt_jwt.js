/**
 * @module nzt
 * @category security/jwt
 * @label jwt
 * @position 1117 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nzt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nzt = T((XT) => {
  XT.Parser = cTn().Parser;
  XT.rules = XWt();
  XT.errors = JWt();
  XT.results = bZe();
  XT.StringSource = ZWt();
  XT.Token = ezt();
  XT.bottomUp = STn();
  XT.RegexTokeniser = xTn().RegexTokeniser;
  XT.rule = function (t) {
    var e;
    return function (r) {
      return (e || (e = t()), e(r));
    };
  };
});