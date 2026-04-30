/**
 * @module khn
 * @category utils/validation
 * @label ajv
 * @position 768 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (khn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var khn = T((TFt) => {
  "use strict";
  Object.defineProperty(TFt, "__esModule", { value: !0 });
  var b8e = Ha(),
    tds = tc(),
    rds = Yze(),
    nds = {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: t }) => (0, b8e._)`{allowedValues: ${t}}`,
    },
    ids = {
      keyword: "enum",
      schemaType: "array",
      $data: !0,
      error: nds,
      code(t) {
        let { gen: e, data: r, $data: n, schema: o, schemaCode: s, it: a } = t;
        if (!n && o.length === 0) throw new Error("enum must have non-empty array");
        let u = o.length >= a.opts.loopEnum,
          c,
          m = () => c ?? (c = (0, tds.useFunc)(e, rds.default)),
          d;
        if (u || n) ((d = e.let("valid")), t.block$data(d, f));
        else {
          if (!Array.isArray(o)) throw new Error("ajv implementation error");
          let h = e.const("vSchema", s);
          d = (0, b8e.or)(...o.map((g, b) => p(h, b)));
        }
        t.pass(d);
        function f() {
          (e.assign(d, !1),
            e.forOf("v", s, (h) => e.if((0, b8e._)`${m()}(${r}, ${h})`, () => e.assign(d, !0).break())));
        }
        function p(h, g) {
          let b = o[g];
          return typeof b == "object" && b !== null ? (0, b8e._)`${m()}(${r}, ${h}[${g}])` : (0, b8e._)`${r} === ${b}`;
        }
      },
    };
  TFt.default = ids;
});