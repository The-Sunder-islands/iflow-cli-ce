/**
 * @module r8n
 * @category utils/oop
 * @label oop
 * @position 898 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (r8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var r8n = T((wQt) => {
  "use strict";
  Object.defineProperty(wQt, "__esModule", { value: !0 });
  var wKe = za(),
    UM = wKe.operators,
    xKe = {
      maximum: { okStr: "<=", ok: UM.LTE, fail: UM.GT },
      minimum: { okStr: ">=", ok: UM.GTE, fail: UM.LT },
      exclusiveMaximum: { okStr: "<", ok: UM.LT, fail: UM.GTE },
      exclusiveMinimum: { okStr: ">", ok: UM.GT, fail: UM.LTE },
    },
    p8s = {
      message: ({ keyword: t, schemaCode: e }) => (0, wKe.str)`must be ${xKe[t].okStr} ${e}`,
      params: ({ keyword: t, schemaCode: e }) => (0, wKe._)`{comparison: ${xKe[t].okStr}, limit: ${e}}`,
    },
    h8s = {
      keyword: Object.keys(xKe),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: p8s,
      code(t) {
        let { keyword: e, data: r, schemaCode: n } = t;
        t.fail$data((0, wKe._)`${r} ${xKe[e].fail} ${n} || isNaN(${r})`);
      },
    };
  wQt.default = h8s;
});