/**
 * @module c8n
 * @category utils/oop
 * @label oop
 * @position 904 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (c8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var c8n = T((kQt) => {
  "use strict";
  Object.defineProperty(kQt, "__esModule", { value: !0 });
  var H9e = yE(),
    V9e = za(),
    T8s = sc(),
    D8s = {
      message: ({ params: { missingProperty: t } }) => (0, V9e.str)`must have required property '${t}'`,
      params: ({ params: { missingProperty: t } }) => (0, V9e._)`{missingProperty: ${t}}`,
    },
    I8s = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: D8s,
      code(t) {
        let { gen: e, schema: r, schemaCode: n, data: o, $data: s, it: a } = t,
          { opts: u } = a;
        if (!s && r.length === 0) return;
        let c = r.length >= u.loopRequired;
        if ((a.allErrors ? m() : d(), u.strictRequired)) {
          let h = t.parentSchema.properties,
            { definedProperties: g } = t.it;
          for (let b of r)
            if (h?.[b] === void 0 && !g.has(b)) {
              let A = a.schemaEnv.baseId + a.errSchemaPath,
                y = `required property "${b}" is not defined at "${A}" (strictRequired)`;
              (0, T8s.checkStrictMode)(a, y, a.opts.strictRequired);
            }
        }
        function m() {
          if (c || s) t.block$data(V9e.nil, f);
          else for (let h of r) (0, H9e.checkReportMissingProp)(t, h);
        }
        function d() {
          let h = e.let("missing");
          if (c || s) {
            let g = e.let("valid", !0);
            (t.block$data(g, () => p(h, g)), t.ok(g));
          } else (e.if((0, H9e.checkMissingProp)(t, r, h)), (0, H9e.reportMissingProp)(t, h), e.else());
        }
        function f() {
          e.forOf("prop", n, (h) => {
            (t.setParams({ missingProperty: h }),
              e.if((0, H9e.noPropertyInData)(e, o, h, u.ownProperties), () => t.error()));
          });
        }
        function p(h, g) {
          (t.setParams({ missingProperty: h }),
            e.forOf(
              h,
              n,
              () => {
                (e.assign(g, (0, H9e.propertyInData)(e, o, h, u.ownProperties)),
                  e.if((0, V9e.not)(g), () => {
                    (t.error(), e.break());
                  }));
              },
              V9e.nil,
            ));
        }
      },
    };
  kQt.default = I8s;
});