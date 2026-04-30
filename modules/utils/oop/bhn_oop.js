/**
 * @module bhn
 * @category utils/oop
 * @label oop
 * @position 755 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bhn = T((VH) => {
  "use strict";
  Object.defineProperty(VH, "__esModule", { value: !0 });
  VH.callRef = VH.getValidate = void 0;
  var Sms = a8e(),
    phn = lE(),
    S8 = Ha(),
    $oe = dk(),
    hhn = Mze(),
    qze = tc(),
    wms = {
      keyword: "$ref",
      schemaType: "string",
      code(t) {
        let { gen: e, schema: r, it: n } = t,
          { baseId: o, schemaEnv: s, validateName: a, opts: u, self: c } = n,
          { root: m } = s;
        if ((r === "#" || r === "#/") && o === m.baseId) return f();
        let d = hhn.resolveRef.call(c, m, o, r);
        if (d === void 0) throw new Sms.default(n.opts.uriResolver, o, r);
        if (d instanceof hhn.SchemaEnv) return p(d);
        return h(d);
        function f() {
          if (s === m) return Hze(t, a, s, s.$async);
          let g = e.scopeValue("root", { ref: m });
          return Hze(t, (0, S8._)`${g}.validate`, m, m.$async);
        }
        function p(g) {
          let b = ghn(t, g);
          Hze(t, b, g, g.$async);
        }
        function h(g) {
          let b = e.scopeValue("schema", u.code.source === !0 ? { ref: g, code: (0, S8.stringify)(g) } : { ref: g }),
            A = e.name("valid"),
            y = t.subschema({ schema: g, dataTypes: [], schemaPath: S8.nil, topSchemaRef: b, errSchemaPath: r }, A);
          (t.mergeEvaluated(y), t.ok(A));
        }
      },
    };
  function ghn(t, e) {
    let { gen: r } = t;
    return e.validate
      ? r.scopeValue("validate", { ref: e.validate })
      : (0, S8._)`${r.scopeValue("wrapper", { ref: e })}.validate`;
  }
  VH.getValidate = ghn;
  function Hze(t, e, r, n) {
    let { gen: o, it: s } = t,
      { allErrors: a, schemaEnv: u, opts: c } = s,
      m = c.passContext ? $oe.default.this : S8.nil;
    n ? d() : f();
    function d() {
      if (!u.$async) throw new Error("async schema referenced by sync schema");
      let g = o.let("valid");
      (o.try(
        () => {
          (o.code((0, S8._)`await ${(0, phn.callValidateCode)(t, e, m)}`), h(e), a || o.assign(g, !0));
        },
        (b) => {
          (o.if((0, S8._)`!(${b} instanceof ${s.ValidationError})`, () => o.throw(b)), p(b), a || o.assign(g, !1));
        },
      ),
        t.ok(g));
    }
    function f() {
      t.result(
        (0, phn.callValidateCode)(t, e, m),
        () => h(e),
        () => p(e),
      );
    }
    function p(g) {
      let b = (0, S8._)`${g}.errors`;
      (o.assign(
        $oe.default.vErrors,
        (0, S8._)`${$oe.default.vErrors} === null ? ${b} : ${$oe.default.vErrors}.concat(${b})`,
      ),
        o.assign($oe.default.errors, (0, S8._)`${$oe.default.vErrors}.length`));
    }
    function h(g) {
      var b;
      if (!s.opts.unevaluated) return;
      let A = (b = r?.validate) === null || b === void 0 ? void 0 : b.evaluated;
      if (s.props !== !0)
        if (A && !A.dynamicProps) A.props !== void 0 && (s.props = qze.mergeEvaluated.props(o, A.props, s.props));
        else {
          let y = o.var("props", (0, S8._)`${g}.evaluated.props`);
          s.props = qze.mergeEvaluated.props(o, y, s.props, S8.Name);
        }
      if (s.items !== !0)
        if (A && !A.dynamicItems) A.items !== void 0 && (s.items = qze.mergeEvaluated.items(o, A.items, s.items));
        else {
          let y = o.var("items", (0, S8._)`${g}.evaluated.items`);
          s.items = qze.mergeEvaluated.items(o, y, s.items, S8.Name);
        }
    }
  }
  VH.callRef = Hze;
  VH.default = wms;
});