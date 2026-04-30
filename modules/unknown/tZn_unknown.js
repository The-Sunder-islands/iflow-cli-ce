/**
 * @module tZn
 * @category unknown
 * @label unknown
 * @position 1517 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tZn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tZn = T((oCc, eZn) => {
  "use strict";
  var { InvalidArgumentError: ZXn } = da(),
    U0a = EU(),
    Har = class extends U0a {
      constructor(e, r) {
        if ((typeof e == "string" && (e = new URL(e)), e.protocol !== "http:"))
          throw new ZXn("h2c-client: Only h2c protocol is supported");
        let { connect: n, maxConcurrentStreams: o, pipelining: s, ...a } = r ?? {},
          u = 100,
          c = 100;
        if (
          (o != null && Number.isInteger(o) && o > 0 && (u = o),
          s != null && Number.isInteger(s) && s > 0 && (c = s),
          c > u)
        )
          throw new ZXn("h2c-client: pipelining cannot be greater than maxConcurrentStreams");
        super(e, { ...a, maxConcurrentStreams: u, pipelining: c, allowH2: !0, useH2c: !0 });
      }
    };
  eZn.exports = Har;
});