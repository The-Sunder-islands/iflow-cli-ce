/**
 * @module Aqr
 * @category utils/oop
 * @label oop
 * @position 146 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Aqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Aqr = T((DNe) => {
  "use strict";
  Object.defineProperty(DNe, "__esModule", { value: !0 });
  DNe.merge = void 0;
  var pqr = fqr(),
    $wo = 20;
  function jwo(...t) {
    let e = t.shift(),
      r = new WeakMap();
    for (; t.length > 0; ) e = gqr(e, t.shift(), 0, r);
    return e;
  }
  DNe.merge = jwo;
  function _vt(t) {
    return TNe(t) ? t.slice() : t;
  }
  function gqr(t, e, r = 0, n) {
    let o;
    if (!(r > $wo)) {
      if ((r++, xNe(t) || xNe(e) || bqr(e))) o = _vt(e);
      else if (TNe(t)) {
        if (((o = t.slice()), TNe(e))) for (let s = 0, a = e.length; s < a; s++) o.push(_vt(e[s]));
        else if (ige(e)) {
          let s = Object.keys(e);
          for (let a = 0, u = s.length; a < u; a++) {
            let c = s[a];
            o[c] = _vt(e[c]);
          }
        }
      } else if (ige(t))
        if (ige(e)) {
          if (!Qwo(t, e)) return e;
          o = Object.assign({}, t);
          let s = Object.keys(e);
          for (let a = 0, u = s.length; a < u; a++) {
            let c = s[a],
              m = e[c];
            if (xNe(m)) typeof m > "u" ? delete o[c] : (o[c] = m);
            else {
              let d = o[c],
                f = m;
              if (hqr(t, c, n) || hqr(e, c, n)) delete o[c];
              else {
                if (ige(d) && ige(f)) {
                  let p = n.get(d) || [],
                    h = n.get(f) || [];
                  (p.push({ obj: t, key: c }), h.push({ obj: e, key: c }), n.set(d, p), n.set(f, h));
                }
                o[c] = gqr(o[c], m, r, n);
              }
            }
          }
        } else o = e;
      return o;
    }
  }
  function hqr(t, e, r) {
    let n = r.get(t[e]) || [];
    for (let o = 0, s = n.length; o < s; o++) {
      let a = n[o];
      if (a.key === e && a.obj === t) return !0;
    }
    return !1;
  }
  function TNe(t) {
    return Array.isArray(t);
  }
  function bqr(t) {
    return typeof t == "function";
  }
  function ige(t) {
    return !xNe(t) && !TNe(t) && !bqr(t) && typeof t == "object";
  }
  function xNe(t) {
    return (
      typeof t == "string" ||
      typeof t == "number" ||
      typeof t == "boolean" ||
      typeof t > "u" ||
      t instanceof Date ||
      t instanceof RegExp ||
      t === null
    );
  }
  function Qwo(t, e) {
    return !(!(0, pqr.isPlainObject)(t) || !(0, pqr.isPlainObject)(e));
  }
});