/**
 * @module yhn
 * @category utils/oop
 * @label oop
 * @position 757 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yhn = T((pFt) => {
  "use strict";
  Object.defineProperty(pFt, "__esModule", { value: !0 });
  var Vze = Ha(),
    AM = Vze.operators,
    Wze = {
      maximum: { okStr: "<=", ok: AM.LTE, fail: AM.GT },
      minimum: { okStr: ">=", ok: AM.GTE, fail: AM.LT },
      exclusiveMaximum: { okStr: "<", ok: AM.LT, fail: AM.GTE },
      exclusiveMinimum: { okStr: ">", ok: AM.GT, fail: AM.LTE },
    },
    Ims = {
      message: ({ keyword: t, schemaCode: e }) => (0, Vze.str)`must be ${Wze[t].okStr} ${e}`,
      params: ({ keyword: t, schemaCode: e }) => (0, Vze._)`{comparison: ${Wze[t].okStr}, limit: ${e}}`,
    },
    Rms = {
      keyword: Object.keys(Wze),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: Ims,
      code(t) {
        let { keyword: e, data: r, schemaCode: n } = t;
        t.fail$data((0, Vze._)`${r} ${Wze[e].fail} ${n} || isNaN(${r})`);
      },
    };
  pFt.default = Rms;
});