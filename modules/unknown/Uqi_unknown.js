/**
 * @module Uqi
 * @category unknown
 * @label unknown
 * @position 1890 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Uqi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Uqi = T((Lfl, Fqi) => {
  "use strict";
  var Wcu = Bqi();
  function Lqi() {}
  function Mqi() {}
  Mqi.resetWarningCache = Lqi;
  Fqi.exports = function () {
    function t(n, o, s, a, u, c) {
      if (c !== Wcu) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
        );
        throw ((m.name = "Invariant Violation"), m);
      }
    }
    t.isRequired = t;
    function e() {
      return t;
    }
    var r = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: e,
      element: t,
      elementType: t,
      instanceOf: e,
      node: t,
      objectOf: e,
      oneOf: e,
      oneOfType: e,
      shape: e,
      exact: e,
      checkPropTypes: Mqi,
      resetWarningCache: Lqi,
    };
    return ((r.PropTypes = r), r);
  };
});