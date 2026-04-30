/**
 * @module B9e
 * @category utils/oop
 * @label oop
 * @position 887 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (B9e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var B9e = T((O8) => {
  "use strict";
  Object.defineProperty(O8, "__esModule", { value: !0 });
  O8.getSchemaRefs = O8.resolveUrl = O8.normalizeId = O8._getFullPath = O8.getFullPath = O8.inlineRef = void 0;
  var e5s = sc(),
    t5s = qH(),
    r5s = y5n(),
    n5s = new Set([
      "type",
      "format",
      "pattern",
      "maxLength",
      "minLength",
      "maxProperties",
      "minProperties",
      "maxItems",
      "minItems",
      "maximum",
      "minimum",
      "uniqueItems",
      "multipleOf",
      "required",
      "enum",
      "const",
    ]);
  function i5s(t, e = !0) {
    return typeof t == "boolean" ? !0 : e === !0 ? !cQt(t) : e ? _5n(t) <= e : !1;
  }
  O8.inlineRef = i5s;
  var o5s = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function cQt(t) {
    for (let e in t) {
      if (o5s.has(e)) return !0;
      let r = t[e];
      if ((Array.isArray(r) && r.some(cQt)) || (typeof r == "object" && cQt(r))) return !0;
    }
    return !1;
  }
  function _5n(t) {
    let e = 0;
    for (let r in t) {
      if (r === "$ref") return 1 / 0;
      if ((e++, !n5s.has(r) && (typeof t[r] == "object" && (0, e5s.eachItem)(t[r], (n) => (e += _5n(n))), e === 1 / 0)))
        return 1 / 0;
    }
    return e;
  }
  function E5n(t, e = "", r) {
    r !== !1 && (e = Dse(e));
    let n = t.parse(e);
    return v5n(t, n);
  }
  O8.getFullPath = E5n;
  function v5n(t, e) {
    return t.serialize(e).split("#")[0] + "#";
  }
  O8._getFullPath = v5n;
  var s5s = /#\/?$/;
  function Dse(t) {
    return t ? t.replace(s5s, "") : "";
  }
  O8.normalizeId = Dse;
  function a5s(t, e, r) {
    return ((r = Dse(r)), t.resolve(e, r));
  }
  O8.resolveUrl = a5s;
  var u5s = /^[a-z_][-a-z0-9._]*$/i;
  function c5s(t, e) {
    if (typeof t == "boolean") return {};
    let { schemaId: r, uriResolver: n } = this.opts,
      o = Dse(t[r] || e),
      s = { "": o },
      a = E5n(n, o, !1),
      u = {},
      c = new Set();
    return (
      r5s(t, { allKeys: !0 }, (f, p, h, g) => {
        if (g === void 0) return;
        let b = a + p,
          A = s[g];
        (typeof f[r] == "string" && (A = y.call(this, f[r])),
          E.call(this, f.$anchor),
          E.call(this, f.$dynamicAnchor),
          (s[p] = A));
        function y(v) {
          let C = this.opts.uriResolver.resolve;
          if (((v = Dse(A ? C(A, v) : v)), c.has(v))) throw d(v);
          c.add(v);
          let x = this.refs[v];
          return (
            typeof x == "string" && (x = this.refs[x]),
            typeof x == "object"
              ? m(f, x.schema, v)
              : v !== Dse(b) && (v[0] === "#" ? (m(f, u[v], v), (u[v] = f)) : (this.refs[v] = b)),
            v
          );
        }
        function E(v) {
          if (typeof v == "string") {
            if (!u5s.test(v)) throw new Error(`invalid anchor "${v}"`);
            y.call(this, `#${v}`);
          }
        }
      }),
      u
    );
    function m(f, p, h) {
      if (p !== void 0 && !t5s(f, p)) throw d(h);
    }
    function d(f) {
      return new Error(`reference "${f}" resolves to more than one schema`);
    }
  }
  O8.getSchemaRefs = c5s;
});