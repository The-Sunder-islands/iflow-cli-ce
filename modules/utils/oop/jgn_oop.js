/**
 * @module jgn
 * @category utils/oop
 * @label oop
 * @position 821 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jgn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jgn = T((JUt) => {
  "use strict";
  Object.defineProperty(JUt, "__esModule", { value: !0 });
  var CYe = _a(),
    wM = CYe.operators,
    SYe = {
      maximum: { okStr: "<=", ok: wM.LTE, fail: wM.GT },
      minimum: { okStr: ">=", ok: wM.GTE, fail: wM.LT },
      exclusiveMaximum: { okStr: "<", ok: wM.LT, fail: wM.GTE },
      exclusiveMinimum: { okStr: ">", ok: wM.GT, fail: wM.LTE },
    },
    Lhs = {
      message: ({ keyword: t, schemaCode: e }) => (0, CYe.str)`must be ${SYe[t].okStr} ${e}`,
      params: ({ keyword: t, schemaCode: e }) => (0, CYe._)`{comparison: ${SYe[t].okStr}, limit: ${e}}`,
    },
    Mhs = {
      keyword: Object.keys(SYe),
      type: "number",
      schemaType: "number",
      $data: !0,
      error: Lhs,
      code(t) {
        let { keyword: e, data: r, schemaCode: n } = t;
        t.fail$data((0, CYe._)`${r} ${SYe[e].fail} ${n} || isNaN(${r})`);
      },
    };
  JUt.default = Mhs;
});