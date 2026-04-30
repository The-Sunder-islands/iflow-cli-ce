/**
 * @module jbn
 * @category utils/oop
 * @label oop
 * @position 855 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jbn = T((ose) => {
  "use strict";
  Object.defineProperty(ose, "__esModule", { value: !0 });
  ose.formatLimitDefinition = void 0;
  var Hgs = $bn(),
    L4 = _a(),
    xM = L4.operators,
    LYe = {
      formatMaximum: { okStr: "<=", ok: xM.LTE, fail: xM.GT },
      formatMinimum: { okStr: ">=", ok: xM.GTE, fail: xM.LT },
      formatExclusiveMaximum: { okStr: "<", ok: xM.LT, fail: xM.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: xM.GT, fail: xM.LTE },
    },
    Vgs = {
      message: ({ keyword: t, schemaCode: e }) => (0, L4.str)`should be ${LYe[t].okStr} ${e}`,
      params: ({ keyword: t, schemaCode: e }) => (0, L4._)`{comparison: ${LYe[t].okStr}, limit: ${e}}`,
    };
  ose.formatLimitDefinition = {
    keyword: Object.keys(LYe),
    type: "string",
    schemaType: "string",
    $data: !0,
    error: Vgs,
    code(t) {
      let { gen: e, data: r, schemaCode: n, keyword: o, it: s } = t,
        { opts: a, self: u } = s;
      if (!a.validateFormats) return;
      let c = new Hgs.KeywordCxt(s, u.RULES.all.format.definition, "format");
      c.$data ? m() : d();
      function m() {
        let p = e.scopeValue("formats", { ref: u.formats, code: a.code.formats }),
          h = e.const("fmt", (0, L4._)`${p}[${c.schemaCode}]`);
        t.fail$data(
          (0, L4.or)(
            (0, L4._)`typeof ${h} != "object"`,
            (0, L4._)`${h} instanceof RegExp`,
            (0, L4._)`typeof ${h}.compare != "function"`,
            f(h),
          ),
        );
      }
      function d() {
        let p = c.schema,
          h = u.formats[p];
        if (!h || h === !0) return;
        if (typeof h != "object" || h instanceof RegExp || typeof h.compare != "function")
          throw new Error(`"${o}": format "${p}" does not define "compare" function`);
        let g = e.scopeValue("formats", {
          key: p,
          ref: h,
          code: a.code.formats ? (0, L4._)`${a.code.formats}${(0, L4.getProperty)(p)}` : void 0,
        });
        t.fail$data(f(g));
      }
      function f(p) {
        return (0, L4._)`${p}.compare(${r}, ${n}) ${LYe[o].fail} 0`;
      }
    },
    dependencies: ["format"],
  };
  var Wgs = (t) => (t.addKeyword(ose.formatLimitDefinition), t);
  ose.default = Wgs;
});