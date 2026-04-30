/**
 * @module Ugn
 * @category utils/oop
 * @label oop
 * @position 820 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ugn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ugn = T((rV) => {
  "use strict";
  Object.defineProperty(rV, "__esModule", { value: !0 });
  rV.callRef = rV.getValidate = void 0;
  var khs = B8e(),
    Lgn = pE(),
    D8 = _a(),
    ese = bk(),
    Mgn = yYe(),
    EYe = nc(),
    Ohs = {
      keyword: "$ref",
      schemaType: "string",
      code(t) {
        let { gen: e, schema: r, it: n } = t,
          { baseId: o, schemaEnv: s, validateName: a, opts: u, self: c } = n,
          { root: m } = s;
        if ((r === "#" || r === "#/") && o === m.baseId) return f();
        let d = Mgn.resolveRef.call(c, m, o, r);
        if (d === void 0) throw new khs.default(n.opts.uriResolver, o, r);
        if (d instanceof Mgn.SchemaEnv) return p(d);
        return h(d);
        function f() {
          if (s === m) return vYe(t, a, s, s.$async);
          let g = e.scopeValue("root", { ref: m });
          return vYe(t, (0, D8._)`${g}.validate`, m, m.$async);
        }
        function p(g) {
          let b = Fgn(t, g);
          vYe(t, b, g, g.$async);
        }
        function h(g) {
          let b = e.scopeValue("schema", u.code.source === !0 ? { ref: g, code: (0, D8.stringify)(g) } : { ref: g }),
            A = e.name("valid"),
            y = t.subschema({ schema: g, dataTypes: [], schemaPath: D8.nil, topSchemaRef: b, errSchemaPath: r }, A);
          (t.mergeEvaluated(y), t.ok(A));
        }
      },
    };
  function Fgn(t, e) {
    let { gen: r } = t;
    return e.validate
      ? r.scopeValue("validate", { ref: e.validate })
      : (0, D8._)`${r.scopeValue("wrapper", { ref: e })}.validate`;
  }
  rV.getValidate = Fgn;
  function vYe(t, e, r, n) {
    let { gen: o, it: s } = t,
      { allErrors: a, schemaEnv: u, opts: c } = s,
      m = c.passContext ? ese.default.this : D8.nil;
    n ? d() : f();
    function d() {
      if (!u.$async) throw new Error("async schema referenced by sync schema");
      let g = o.let("valid");
      (o.try(
        () => {
          (o.code((0, D8._)`await ${(0, Lgn.callValidateCode)(t, e, m)}`), h(e), a || o.assign(g, !0));
        },
        (b) => {
          (o.if((0, D8._)`!(${b} instanceof ${s.ValidationError})`, () => o.throw(b)), p(b), a || o.assign(g, !1));
        },
      ),
        t.ok(g));
    }
    function f() {
      t.result(
        (0, Lgn.callValidateCode)(t, e, m),
        () => h(e),
        () => p(e),
      );
    }
    function p(g) {
      let b = (0, D8._)`${g}.errors`;
      (o.assign(
        ese.default.vErrors,
        (0, D8._)`${ese.default.vErrors} === null ? ${b} : ${ese.default.vErrors}.concat(${b})`,
      ),
        o.assign(ese.default.errors, (0, D8._)`${ese.default.vErrors}.length`));
    }
    function h(g) {
      var b;
      if (!s.opts.unevaluated) return;
      let A = (b = r?.validate) === null || b === void 0 ? void 0 : b.evaluated;
      if (s.props !== !0)
        if (A && !A.dynamicProps) A.props !== void 0 && (s.props = EYe.mergeEvaluated.props(o, A.props, s.props));
        else {
          let y = o.var("props", (0, D8._)`${g}.evaluated.props`);
          s.props = EYe.mergeEvaluated.props(o, y, s.props, D8.Name);
        }
      if (s.items !== !0)
        if (A && !A.dynamicItems) A.items !== void 0 && (s.items = EYe.mergeEvaluated.items(o, A.items, s.items));
        else {
          let y = o.var("items", (0, D8._)`${g}.evaluated.items`);
          s.items = EYe.mergeEvaluated.items(o, y, s.items, D8.Name);
        }
    }
  }
  rV.callRef = vYe;
  rV.default = Ohs;
});
var $gn = T((KUt) => {
  "use strict";
  Object.defineProperty(KUt, "__esModule", { value: !0 });
  var Nhs = Bgn(),
    Phs = Ugn(),
    Bhs = ["$schema", "$id", "$defs", "$vocabulary", { keyword: "$comment" }, "definitions", Nhs.default, Phs.default];
  KUt.default = Bhs;
});