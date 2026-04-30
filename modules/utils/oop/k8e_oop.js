/**
 * @module k8e
 * @category utils/oop
 * @label oop
 * @position 811 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (k8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var k8e = T((T8) => {
  "use strict";
  Object.defineProperty(T8, "__esModule", { value: !0 });
  T8.getSchemaRefs = T8.resolveUrl = T8.normalizeId = T8._getFullPath = T8.getFullPath = T8.inlineRef = void 0;
  var vps = nc(),
    Cps = qH(),
    Sps = ign(),
    wps = new Set([
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
  function xps(t, e = !0) {
    return typeof t == "boolean" ? !0 : e === !0 ? !BUt(t) : e ? ogn(t) <= e : !1;
  }
  T8.inlineRef = xps;
  var Tps = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function BUt(t) {
    for (let e in t) {
      if (Tps.has(e)) return !0;
      let r = t[e];
      if ((Array.isArray(r) && r.some(BUt)) || (typeof r == "object" && BUt(r))) return !0;
    }
    return !1;
  }
  function ogn(t) {
    let e = 0;
    for (let r in t) {
      if (r === "$ref") return 1 / 0;
      if ((e++, !wps.has(r) && (typeof t[r] == "object" && (0, vps.eachItem)(t[r], (n) => (e += ogn(n))), e === 1 / 0)))
        return 1 / 0;
    }
    return e;
  }
  function sgn(t, e = "", r) {
    r !== !1 && (e = Joe(e));
    let n = t.parse(e);
    return agn(t, n);
  }
  T8.getFullPath = sgn;
  function agn(t, e) {
    return t.serialize(e).split("#")[0] + "#";
  }
  T8._getFullPath = agn;
  var Dps = /#\/?$/;
  function Joe(t) {
    return t ? t.replace(Dps, "") : "";
  }
  T8.normalizeId = Joe;
  function Ips(t, e, r) {
    return ((r = Joe(r)), t.resolve(e, r));
  }
  T8.resolveUrl = Ips;
  var Rps = /^[a-z_][-a-z0-9._]*$/i;
  function kps(t, e) {
    if (typeof t == "boolean") return {};
    let { schemaId: r, uriResolver: n } = this.opts,
      o = Joe(t[r] || e),
      s = { "": o },
      a = sgn(n, o, !1),
      u = {},
      c = new Set();
    return (
      Sps(t, { allKeys: !0 }, (f, p, h, g) => {
        if (g === void 0) return;
        let b = a + p,
          A = s[g];
        (typeof f[r] == "string" && (A = y.call(this, f[r])),
          E.call(this, f.$anchor),
          E.call(this, f.$dynamicAnchor),
          (s[p] = A));
        function y(v) {
          let C = this.opts.uriResolver.resolve;
          if (((v = Joe(A ? C(A, v) : v)), c.has(v))) throw d(v);
          c.add(v);
          let x = this.refs[v];
          return (
            typeof x == "string" && (x = this.refs[x]),
            typeof x == "object"
              ? m(f, x.schema, v)
              : v !== Joe(b) && (v[0] === "#" ? (m(f, u[v], v), (u[v] = f)) : (this.refs[v] = b)),
            v
          );
        }
        function E(v) {
          if (typeof v == "string") {
            if (!Rps.test(v)) throw new Error(`invalid anchor "${v}"`);
            y.call(this, `#${v}`);
          }
        }
      }),
      u
    );
    function m(f, p, h) {
      if (p !== void 0 && !Cps(f, p)) throw d(h);
    }
    function d(f) {
      return new Error(`reference "${f}" resolves to more than one schema`);
    }
  }
  T8.getSchemaRefs = kps;
});