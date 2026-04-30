/**
 * @module FRr
 * @category unknown
 * @label unknown
 * @position 79 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FRr = T((j4u, MRr) => {
  "use strict";
  function oyt(t) {
    var e = ((t / 8) | 0) + (t % 8 === 0 ? 0 : 1);
    return e;
  }
  var zpo = { ES256: oyt(256), ES384: oyt(384), ES512: oyt(521) };
  function Ypo(t) {
    var e = zpo[t];
    if (e) return e;
    throw new Error('Unknown algorithm "' + t + '"');
  }
  MRr.exports = Ypo;
});