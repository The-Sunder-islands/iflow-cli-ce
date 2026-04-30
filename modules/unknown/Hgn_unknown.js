/**
 * @module Hgn
 * @category unknown
 * @label unknown
 * @position 824 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hgn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hgn = T((e$t) => {
  "use strict";
  Object.defineProperty(e$t, "__esModule", { value: !0 });
  var nV = _a(),
    $hs = nc(),
    jhs = qgn(),
    Qhs = {
      message({ keyword: t, schemaCode: e }) {
        let r = t === "maxLength" ? "more" : "fewer";
        return (0, nV.str)`must NOT have ${r} than ${e} characters`;
      },
      params: ({ schemaCode: t }) => (0, nV._)`{limit: ${t}}`,
    },
    Ghs = {
      keyword: ["maxLength", "minLength"],
      type: "string",
      schemaType: "number",
      $data: !0,
      error: Qhs,
      code(t) {
        let { keyword: e, data: r, schemaCode: n, it: o } = t,
          s = e === "maxLength" ? nV.operators.GT : nV.operators.LT,
          a = o.opts.unicode === !1 ? (0, nV._)`${r}.length` : (0, nV._)`${(0, $hs.useFunc)(t.gen, jhs.default)}(${r})`;
        t.fail$data((0, nV._)`${a} ${s} ${n}`);
      },
    };
  e$t.default = Ghs;
});