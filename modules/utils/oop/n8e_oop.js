/**
 * @module n8e
 * @category utils/oop
 * @label oop
 * @position 743 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (n8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var n8e = T((C8) => {
  "use strict";
  Object.defineProperty(C8, "__esModule", { value: !0 });
  C8.getSchemaRefs = C8.resolveUrl = C8.normalizeId = C8._getFullPath = C8.getFullPath = C8.inlineRef = void 0;
  var Fls = tc(),
    Uls = qH(),
    $ls = wpn(),
    jls = new Set([
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
  function Qls(t, e = !0) {
    return typeof t == "boolean" ? !0 : e === !0 ? !WMt(t) : e ? xpn(t) <= e : !1;
  }
  C8.inlineRef = Qls;
  var Gls = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
  function WMt(t) {
    for (let e in t) {
      if (Gls.has(e)) return !0;
      let r = t[e];
      if ((Array.isArray(r) && r.some(WMt)) || (typeof r == "object" && WMt(r))) return !0;
    }
    return !1;
  }
  function xpn(t) {
    let e = 0;
    for (let r in t) {
      if (r === "$ref") return 1 / 0;
      if ((e++, !jls.has(r) && (typeof t[r] == "object" && (0, Fls.eachItem)(t[r], (n) => (e += xpn(n))), e === 1 / 0)))
        return 1 / 0;
    }
    return e;
  }
  function Tpn(t, e = "", r) {
    r !== !1 && (e = Moe(e));
    let n = t.parse(e);
    return Dpn(t, n);
  }
  C8.getFullPath = Tpn;
  function Dpn(t, e) {
    return t.serialize(e).split("#")[0] + "#";
  }
  C8._getFullPath = Dpn;
  var qls = /#\/?$/;
  function Moe(t) {
    return t ? t.replace(qls, "") : "";
  }
  C8.normalizeId = Moe;
  function Hls(t, e, r) {
    return ((r = Moe(r)), t.resolve(e, r));
  }
  C8.resolveUrl = Hls;
  var Vls = /^[a-z_][-a-z0-9._]*$/i;
  function Wls(t, e) {
    if (typeof t == "boolean") return {};
    let { schemaId: r, uriResolver: n } = this.opts,
      o = Moe(t[r] || e),
      s = { "": o },
      a = Tpn(n, o, !1),
      u = {},
      c = new Set();
    return (
      $ls(t, { allKeys: !0 }, (f, p, h, g) => {
        if (g === void 0) return;
        let b = a + p,
          A = s[g];
        (typeof f[r] == "string" && (A = y.call(this, f[r])),
          E.call(this, f.$anchor),
          E.call(this, f.$dynamicAnchor),
          (s[p] = A));
        function y(v) {
          let C = this.opts.uriResolver.resolve;
          if (((v = Moe(A ? C(A, v) : v)), c.has(v))) throw d(v);
          c.add(v);
          let x = this.refs[v];
          return (
            typeof x == "string" && (x = this.refs[x]),
            typeof x == "object"
              ? m(f, x.schema, v)
              : v !== Moe(b) && (v[0] === "#" ? (m(f, u[v], v), (u[v] = f)) : (this.refs[v] = b)),
            v
          );
        }
        function E(v) {
          if (typeof v == "string") {
            if (!Vls.test(v)) throw new Error(`invalid anchor "${v}"`);
            y.call(this, `#${v}`);
          }
        }
      }),
      u
    );
    function m(f, p, h) {
      if (p !== void 0 && !Uls(f, p)) throw d(h);
    }
    function d(f) {
      return new Error(`reference "${f}" resolves to more than one schema`);
    }
  }
  C8.getSchemaRefs = Wls;
});