/**
 * @module e8n
 * @category utils/oop
 * @label oop
 * @position 896 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (e8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var e8n = T((EV) => {
  "use strict";
  Object.defineProperty(EV, "__esModule", { value: !0 });
  EV.callRef = EV.getValidate = void 0;
  var c8s = U9e(),
    J5n = yE(),
    N8 = za(),
    kse = wk(),
    X5n = EKe(),
    CKe = sc(),
    l8s = {
      keyword: "$ref",
      schemaType: "string",
      code(t) {
        let { gen: e, schema: r, it: n } = t,
          { baseId: o, schemaEnv: s, validateName: a, opts: u, self: c } = n,
          { root: m } = s;
        if ((r === "#" || r === "#/") && o === m.baseId) return f();
        let d = X5n.resolveRef.call(c, m, o, r);
        if (d === void 0) throw new c8s.default(n.opts.uriResolver, o, r);
        if (d instanceof X5n.SchemaEnv) return p(d);
        return h(d);
        function f() {
          if (s === m) return SKe(t, a, s, s.$async);
          let g = e.scopeValue("root", { ref: m });
          return SKe(t, (0, N8._)`${g}.validate`, m, m.$async);
        }
        function p(g) {
          let b = Z5n(t, g);
          SKe(t, b, g, g.$async);
        }
        function h(g) {
          let b = e.scopeValue("schema", u.code.source === !0 ? { ref: g, code: (0, N8.stringify)(g) } : { ref: g }),
            A = e.name("valid"),
            y = t.subschema({ schema: g, dataTypes: [], schemaPath: N8.nil, topSchemaRef: b, errSchemaPath: r }, A);
          (t.mergeEvaluated(y), t.ok(A));
        }
      },
    };
  function Z5n(t, e) {
    let { gen: r } = t;
    return e.validate
      ? r.scopeValue("validate", { ref: e.validate })
      : (0, N8._)`${r.scopeValue("wrapper", { ref: e })}.validate`;
  }
  EV.getValidate = Z5n;
  function SKe(t, e, r, n) {
    let { gen: o, it: s } = t,
      { allErrors: a, schemaEnv: u, opts: c } = s,
      m = c.passContext ? kse.default.this : N8.nil;
    n ? d() : f();
    function d() {
      if (!u.$async) throw new Error("async schema referenced by sync schema");
      let g = o.let("valid");
      (o.try(
        () => {
          (o.code((0, N8._)`await ${(0, J5n.callValidateCode)(t, e, m)}`), h(e), a || o.assign(g, !0));
        },
        (b) => {
          (o.if((0, N8._)`!(${b} instanceof ${s.ValidationError})`, () => o.throw(b)), p(b), a || o.assign(g, !1));
        },
      ),
        t.ok(g));
    }
    function f() {
      t.result(
        (0, J5n.callValidateCode)(t, e, m),
        () => h(e),
        () => p(e),
      );
    }
    function p(g) {
      let b = (0, N8._)`${g}.errors`;
      (o.assign(
        kse.default.vErrors,
        (0, N8._)`${kse.default.vErrors} === null ? ${b} : ${kse.default.vErrors}.concat(${b})`,
      ),
        o.assign(kse.default.errors, (0, N8._)`${kse.default.vErrors}.length`));
    }
    function h(g) {
      var b;
      if (!s.opts.unevaluated) return;
      let A = (b = r?.validate) === null || b === void 0 ? void 0 : b.evaluated;
      if (s.props !== !0)
        if (A && !A.dynamicProps) A.props !== void 0 && (s.props = CKe.mergeEvaluated.props(o, A.props, s.props));
        else {
          let y = o.var("props", (0, N8._)`${g}.evaluated.props`);
          s.props = CKe.mergeEvaluated.props(o, y, s.props, N8.Name);
        }
      if (s.items !== !0)
        if (A && !A.dynamicItems) A.items !== void 0 && (s.items = CKe.mergeEvaluated.items(o, A.items, s.items));
        else {
          let y = o.var("items", (0, N8._)`${g}.evaluated.items`);
          s.items = CKe.mergeEvaluated.items(o, y, s.items, N8.Name);
        }
    }
  }
  EV.callRef = SKe;
  EV.default = l8s;
});