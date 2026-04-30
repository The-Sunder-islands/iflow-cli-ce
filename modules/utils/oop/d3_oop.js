/**
 * @module d3
 * @category utils/oop
 * @label oop
 * @position 1635 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (d3) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var d3 = T((mpr) => {
  "use strict";
  mpr.fromCallback = function (t) {
    return Object.defineProperty(
      function (...e) {
        if (typeof e[e.length - 1] == "function") t.apply(this, e);
        else
          return new Promise((r, n) => {
            (e.push((o, s) => (o != null ? n(o) : r(s))), t.apply(this, e));
          });
      },
      "name",
      { value: t.name },
    );
  };
  mpr.fromPromise = function (t) {
    return Object.defineProperty(
      function (...e) {
        let r = e[e.length - 1];
        if (typeof r != "function") return t.apply(this, e);
        (e.pop(), t.apply(this, e).then((n) => r(null, n), r));
      },
      "name",
      { value: t.name },
    );
  };
});