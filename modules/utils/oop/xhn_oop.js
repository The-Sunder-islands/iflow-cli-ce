/**
 * @module xhn
 * @category utils/oop
 * @label oop
 * @position 763 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xhn = T((_Ft) => {
  "use strict";
  Object.defineProperty(_Ft, "__esModule", { value: !0 });
  var p8e = lE(),
    h8e = Ha(),
    Qms = tc(),
    Gms = {
      message: ({ params: { missingProperty: t } }) => (0, h8e.str)`must have required property '${t}'`,
      params: ({ params: { missingProperty: t } }) => (0, h8e._)`{missingProperty: ${t}}`,
    },
    qms = {
      keyword: "required",
      type: "object",
      schemaType: "array",
      $data: !0,
      error: Gms,
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
              (0, Qms.checkStrictMode)(a, y, a.opts.strictRequired);
            }
        }
        function m() {
          if (c || s) t.block$data(h8e.nil, f);
          else for (let h of r) (0, p8e.checkReportMissingProp)(t, h);
        }
        function d() {
          let h = e.let("missing");
          if (c || s) {
            let g = e.let("valid", !0);
            (t.block$data(g, () => p(h, g)), t.ok(g));
          } else (e.if((0, p8e.checkMissingProp)(t, r, h)), (0, p8e.reportMissingProp)(t, h), e.else());
        }
        function f() {
          e.forOf("prop", n, (h) => {
            (t.setParams({ missingProperty: h }),
              e.if((0, p8e.noPropertyInData)(e, o, h, u.ownProperties), () => t.error()));
          });
        }
        function p(h, g) {
          (t.setParams({ missingProperty: h }),
            e.forOf(
              h,
              n,
              () => {
                (e.assign(g, (0, p8e.propertyInData)(e, o, h, u.ownProperties)),
                  e.if((0, h8e.not)(g), () => {
                    (t.error(), e.break());
                  }));
              },
              h8e.nil,
            ));
        }
      },
    };
  _Ft.default = qms;
});