/**
 * @module Zgr
 * @category unknown
 * @label unknown
 * @position 1762 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zgr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zgr = T((fmt) => {
  "use strict";
  var _ka = (t) => typeof t == "string" && t.indexOf("arn:") === 0 && t.split(":").length >= 6,
    Eka = (t) => {
      let e = t.split(":");
      if (e.length < 6 || e[0] !== "arn") throw new Error("Malformed ARN");
      let [, r, n, o, s, ...a] = e;
      return { partition: r, service: n, region: o, accountId: s, resource: a.join(":") };
    },
    vka = (t) => {
      let { partition: e = "aws", service: r, region: n, accountId: o, resource: s } = t;
      if ([r, n, o, s].some((a) => typeof a != "string")) throw new Error("Input ARN object is invalid");
      return `arn:${e}:${r}:${n}:${o}:${s}`;
    };
  fmt.build = vka;
  fmt.parse = Eka;
  fmt.validate = _ka;
});