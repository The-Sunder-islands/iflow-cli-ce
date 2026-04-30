/**
 * @module Aq
 * @category unknown
 * @label unknown
 * @position 465 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Aq) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Aq = T((wZr) => {
  "use strict";
  var dbe = wZr,
    VFo = Bh(),
    WFo = [
      "double",
      "float",
      "int32",
      "uint32",
      "sint32",
      "fixed32",
      "sfixed32",
      "int64",
      "uint64",
      "sint64",
      "fixed64",
      "sfixed64",
      "bool",
      "string",
      "bytes",
    ];
  function fbe(t, e) {
    var r = 0,
      n = {};
    for (e |= 0; r < t.length; ) n[WFo[r + e]] = t[r++];
    return n;
  }
  dbe.basic = fbe([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
  dbe.defaults = fbe([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", VFo.emptyArray, null]);
  dbe.long = fbe([0, 0, 0, 1, 1], 7);
  dbe.mapKey = fbe([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
  dbe.packed = fbe([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
});