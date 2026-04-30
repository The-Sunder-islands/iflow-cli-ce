/**
 * @module Nri
 * @category unknown
 * @label unknown
 * @position 1561 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nri) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nri = T((XCc, Ori) => {
  "use strict";
  var cha = Ae("node:assert"),
    { URLSerializer: kri } = HE(),
    { isValidHeaderName: lha } = z6();
  function mha(t, e, r = !1) {
    let n = kri(t, r),
      o = kri(e, r);
    return n === o;
  }
  function dha(t) {
    cha(t !== null);
    let e = [];
    for (let r of t.split(",")) ((r = r.trim()), lha(r) && e.push(r));
    return e;
  }
  Ori.exports = { urlEquals: mha, getFieldValues: dha };
});