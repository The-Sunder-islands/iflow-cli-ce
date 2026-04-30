/**
 * @module Tfi
 * @category unknown
 * @label unknown
 * @position 1642 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tfi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tfi = T((mQc, xfi) => {
  "use strict";
  async function $Sa(t, e) {
    let r = [];
    for await (let n of t)
      r.push(
        e(n).then(
          () => null,
          (o) => o ?? new Error("unknown error"),
        ),
      );
    await Promise.all(
      r.map((n) =>
        n.then((o) => {
          if (o !== null) throw o;
        }),
      ),
    );
  }
  xfi.exports = { asyncIteratorConcurrentProcess: $Sa };
});