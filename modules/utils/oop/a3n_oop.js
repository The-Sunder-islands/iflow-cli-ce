/**
 * @module a3n
 * @category utils/oop
 * @label oop
 * @position 787 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (a3n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var a3n = T((YFt) => {
  "use strict";
  Object.defineProperty(YFt, "__esModule", { value: !0 });
  var z1 = Ha(),
    b1s = {
      message: ({ schemaCode: t }) => (0, z1.str)`must match format "${t}"`,
      params: ({ schemaCode: t }) => (0, z1._)`{format: ${t}}`,
    },
    A1s = {
      keyword: "format",
      type: ["number", "string"],
      schemaType: "string",
      $data: !0,
      error: b1s,
      code(t, e) {
        let { gen: r, data: n, $data: o, schema: s, schemaCode: a, it: u } = t,
          { opts: c, errSchemaPath: m, schemaEnv: d, self: f } = u;
        if (!c.validateFormats) return;
        o ? p() : h();
        function p() {
          let g = r.scopeValue("formats", { ref: f.formats, code: c.code.formats }),
            b = r.const("fDef", (0, z1._)`${g}[${a}]`),
            A = r.let("fType"),
            y = r.let("format");
          (r.if(
            (0, z1._)`typeof ${b} == "object" && !(${b} instanceof RegExp)`,
            () => r.assign(A, (0, z1._)`${b}.type || "string"`).assign(y, (0, z1._)`${b}.validate`),
            () => r.assign(A, (0, z1._)`"string"`).assign(y, b),
          ),
            t.fail$data((0, z1.or)(E(), v())));
          function E() {
            return c.strictSchema === !1 ? z1.nil : (0, z1._)`${a} && !${y}`;
          }
          function v() {
            let C = d.$async ? (0, z1._)`(${b}.async ? await ${y}(${n}) : ${y}(${n}))` : (0, z1._)`${y}(${n})`,
              x = (0, z1._)`(typeof ${y} == "function" ? ${C} : ${y}.test(${n}))`;
            return (0, z1._)`${y} && ${y} !== true && ${A} === ${e} && !${x}`;
          }
        }
        function h() {
          let g = f.formats[s];
          if (!g) {
            E();
            return;
          }
          if (g === !0) return;
          let [b, A, y] = v(g);
          b === e && t.pass(C());
          function E() {
            if (c.strictSchema === !1) {
              f.logger.warn(x());
              return;
            }
            throw new Error(x());
            function x() {
              return `unknown format "${s}" ignored in schema at path "${m}"`;
            }
          }
          function v(x) {
            let k =
                x instanceof RegExp
                  ? (0, z1.regexpCode)(x)
                  : c.code.formats
                    ? (0, z1._)`${c.code.formats}${(0, z1.getProperty)(s)}`
                    : void 0,
              R = r.scopeValue("formats", { key: s, ref: x, code: k });
            return typeof x == "object" && !(x instanceof RegExp)
              ? [x.type || "string", x.validate, (0, z1._)`${R}.validate`]
              : ["string", x, R];
          }
          function C() {
            if (typeof g == "object" && !(g instanceof RegExp) && g.async) {
              if (!d.$async) throw new Error("async format in sync schema");
              return (0, z1._)`await ${y}(${n})`;
            }
            return typeof A == "function" ? (0, z1._)`${y}(${n})` : (0, z1._)`${y}.test(${n})`;
          }
        }
      },
    };
  YFt.default = A1s;
});