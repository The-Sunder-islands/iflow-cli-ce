/**
 * @module Jgn
 * @category unknown
 * @label unknown
 * @position 830 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jgn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jgn = T((a$t) => {
  "use strict";
  Object.defineProperty(a$t, "__esModule", { value: !0 });
  var s$t = R8e(),
    hg = _a(),
    e3s = nc(),
    t3s = xYe(),
    r3s = {
      message: ({ params: { i: t, j: e } }) =>
        (0, hg.str)`must NOT have duplicate items (items ## ${e} and ${t} are identical)`,
      params: ({ params: { i: t, j: e } }) => (0, hg._)`{i: ${t}, j: ${e}}`,
    },
    n3s = {
      keyword: "uniqueItems",
      type: "array",
      schemaType: "boolean",
      $data: !0,
      error: r3s,
      code(t) {
        let { gen: e, data: r, $data: n, schema: o, parentSchema: s, schemaCode: a, it: u } = t;
        if (!n && !o) return;
        let c = e.let("valid"),
          m = s.items ? (0, s$t.getSchemaTypes)(s.items) : [];
        (t.block$data(c, d, (0, hg._)`${a} === false`), t.ok(c));
        function d() {
          let g = e.let("i", (0, hg._)`${r}.length`),
            b = e.let("j");
          (t.setParams({ i: g, j: b }), e.assign(c, !0), e.if((0, hg._)`${g} > 1`, () => (f() ? p : h)(g, b)));
        }
        function f() {
          return m.length > 0 && !m.some((g) => g === "object" || g === "array");
        }
        function p(g, b) {
          let A = e.name("item"),
            y = (0, s$t.checkDataTypes)(m, A, u.opts.strictNumbers, s$t.DataType.Wrong),
            E = e.const("indices", (0, hg._)`{}`);
          e.for((0, hg._)`;${g}--;`, () => {
            (e.let(A, (0, hg._)`${r}[${g}]`),
              e.if(y, (0, hg._)`continue`),
              m.length > 1 && e.if((0, hg._)`typeof ${A} == "string"`, (0, hg._)`${A} += "_"`),
              e
                .if((0, hg._)`typeof ${E}[${A}] == "number"`, () => {
                  (e.assign(b, (0, hg._)`${E}[${A}]`), t.error(), e.assign(c, !1).break());
                })
                .code((0, hg._)`${E}[${A}] = ${g}`));
          });
        }
        function h(g, b) {
          let A = (0, e3s.useFunc)(e, t3s.default),
            y = e.name("outer");
          e.label(y).for((0, hg._)`;${g}--;`, () =>
            e.for((0, hg._)`${b} = ${g}; ${b}--;`, () =>
              e.if((0, hg._)`${A}(${r}[${g}], ${r}[${b}])`, () => {
                (t.error(), e.assign(c, !1).break(y));
              }),
            ),
          );
        }
      },
    };
  a$t.default = n3s;
});