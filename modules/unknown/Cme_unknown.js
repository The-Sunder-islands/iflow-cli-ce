/**
 * @module Cme
 * @category unknown
 * @label unknown
 * @position 1710 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Cme) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Cme = T((ohr) => {
  "use strict";
  var TTa = Rlt(),
    ihr = Ae("buffer"),
    DTa = (t, e = 0, r = t.byteLength - e) => {
      if (!TTa.isArrayBuffer(t))
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof t} (${t})`);
      return ihr.Buffer.from(t, e, r);
    },
    ITa = (t, e) => {
      if (typeof t != "string")
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof t} (${t})`);
      return e ? ihr.Buffer.from(t, e) : ihr.Buffer.from(t);
    };
  ohr.fromArrayBuffer = DTa;
  ohr.fromString = ITa;
});