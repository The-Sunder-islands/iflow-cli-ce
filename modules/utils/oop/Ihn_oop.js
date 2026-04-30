/**
 * @module Ihn
 * @category utils/oop
 * @label oop
 * @position 766 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ihn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ihn = T((SFt) => {
  "use strict";
  Object.defineProperty(SFt, "__esModule", { value: !0 });
  var CFt = r8e(),
    fg = Ha(),
    Wms = tc(),
    zms = Yze(),
    Yms = {
      message: ({ params: { i: t, j: e } }) =>
        (0, fg.str)`must NOT have duplicate items (items ## ${e} and ${t} are identical)`,
      params: ({ params: { i: t, j: e } }) => (0, fg._)`{i: ${t}, j: ${e}}`,
    },
    Kms = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: Yms,
      code(t) {
        let { gen: e, data: r, $data: n, schema: o, parentSchema: s, schemaCode: a, it: u } = t;
        if (!n && !o) return;
        let c = e.let("valid"),
          m = s.items ? (0, CFt.getSchemaTypes)(s.items) : [];
        (t.block$data(c, d, (0, fg._)`${a} === false`), t.ok(c));
        function d() {
          let g = e.let("i", (0, fg._)`${r}.length`),
            b = e.let("j");
          (t.setParams({ i: g, j: b }), e.assign(c, !0), e.if((0, fg._)`${g} > 1`, () => (f() ? p : h)(g, b)));
        }
        function f() {
          return m.length > 0 && !m.some((g) => g === "object" || g === "array");
        }
        function p(g, b) {
          let A = e.name("item"),
            y = (0, CFt.checkDataTypes)(m, A, u.opts.strictNumbers, CFt.DataType.Wrong),
            E = e.const("indices", (0, fg._)`{}`);
          e.for((0, fg._)`;${g}--;`, () => {
            (e.let(A, (0, fg._)`${r}[${g}]`),
              e.if(y, (0, fg._)`continue`),
              m.length > 1 && e.if((0, fg._)`typeof ${A} == "string"`, (0, fg._)`${A} += "_"`),
              e
                .if((0, fg._)`typeof ${E}[${A}] == "number"`, () => {
                  (e.assign(b, (0, fg._)`${E}[${A}]`), t.error(), e.assign(c, !1).break());
                })
                .code((0, fg._)`${E}[${A}] = ${g}`));
          });
        }
        function h(g, b) {
          let A = (0, Wms.useFunc)(e, zms.default),
            y = e.name("outer");
          e.label(y).for((0, fg._)`;${g}--;`, () =>
            e.for((0, fg._)`${b} = ${g}; ${b}--;`, () =>
              e.if((0, fg._)`${A}(${r}[${g}], ${r}[${b}])`, () => {
                (t.error(), e.assign(c, !1).break(y));
              }),
            ),
          );
        }
      },
    };
  SFt.default = Kms;
});