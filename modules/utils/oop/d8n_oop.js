/**
 * @module d8n
 * @category utils/oop
 * @label oop
 * @position 907 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (d8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var d8n = T((BQt) => {
  "use strict";
  Object.defineProperty(BQt, "__esModule", { value: !0 });
  var PQt = P9e(),
    _g = za(),
    O8s = sc(),
    N8s = DKe(),
    P8s = {
      message: ({ params: { i: t, j: e } }) =>
        (0, _g.str)`must NOT have duplicate items (items ## ${e} and ${t} are identical)`,
      params: ({ params: { i: t, j: e } }) => (0, _g._)`{i: ${t}, j: ${e}}`,
    },
    B8s = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: P8s,
      code(t) {
        let { gen: e, data: r, $data: n, schema: o, parentSchema: s, schemaCode: a, it: u } = t;
        if (!n && !o) return;
        let c = e.let("valid"),
          m = s.items ? (0, PQt.getSchemaTypes)(s.items) : [];
        (t.block$data(c, d, (0, _g._)`${a} === false`), t.ok(c));
        function d() {
          let g = e.let("i", (0, _g._)`${r}.length`),
            b = e.let("j");
          (t.setParams({ i: g, j: b }), e.assign(c, !0), e.if((0, _g._)`${g} > 1`, () => (f() ? p : h)(g, b)));
        }
        function f() {
          return m.length > 0 && !m.some((g) => g === "object" || g === "array");
        }
        function p(g, b) {
          let A = e.name("item"),
            y = (0, PQt.checkDataTypes)(m, A, u.opts.strictNumbers, PQt.DataType.Wrong),
            E = e.const("indices", (0, _g._)`{}`);
          e.for((0, _g._)`;${g}--;`, () => {
            (e.let(A, (0, _g._)`${r}[${g}]`),
              e.if(y, (0, _g._)`continue`),
              m.length > 1 && e.if((0, _g._)`typeof ${A} == "string"`, (0, _g._)`${A} += "_"`),
              e
                .if((0, _g._)`typeof ${E}[${A}] == "number"`, () => {
                  (e.assign(b, (0, _g._)`${E}[${A}]`), t.error(), e.assign(c, !1).break());
                })
                .code((0, _g._)`${E}[${A}] = ${g}`));
          });
        }
        function h(g, b) {
          let A = (0, O8s.useFunc)(e, N8s.default),
            y = e.name("outer");
          e.label(y).for((0, _g._)`;${g}--;`, () =>
            e.for((0, _g._)`${b} = ${g}; ${b}--;`, () =>
              e.if((0, _g._)`${A}(${r}[${g}], ${r}[${b}])`, () => {
                (t.error(), e.assign(c, !1).break(y));
              }),
            ),
          );
        }
      },
    };
  BQt.default = B8s;
});