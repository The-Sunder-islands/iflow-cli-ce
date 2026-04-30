/**
 * @module NRr
 * @category utils/oop
 * @label oop
 * @position 75 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (NRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var NRr = T((ryt) => {
  "use strict";
  Object.defineProperty(ryt, "__esModule", { value: !0 });
  ryt.validate = Gpo;
  function Gpo(t) {
    let e = [
      { invalid: "uri", expected: "url" },
      { invalid: "json", expected: "data" },
      { invalid: "qs", expected: "params" },
    ];
    for (let r of e)
      if (t[r.invalid]) {
        let n = `'${r.invalid}' is not a valid configuration option. Please use '${r.expected}' instead. This library is using Axios for requests. Please see https://github.com/axios/axios to learn more about the valid request options.`;
        throw new Error(n);
      }
  }
});