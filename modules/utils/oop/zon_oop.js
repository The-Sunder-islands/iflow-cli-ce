/**
 * @module zon
 * @category utils/oop
 * @label oop
 * @position 658 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zon = T((_Qe) => {
  "use strict";
  Object.defineProperty(_Qe, "__esModule", { value: !0 });
  _Qe.merge = void 0;
  var qon = Gon(),
    pJo = 20;
  function hJo(...t) {
    let e = t.shift(),
      r = new WeakMap();
    for (; t.length > 0; ) e = Von(e, t.shift(), 0, r);
    return e;
  }
  _Qe.merge = hJo;
  function ERt(t) {
    return yQe(t) ? t.slice() : t;
  }
  function Von(t, e, r = 0, n) {
    let o;
    if (!(r > pJo)) {
      if ((r++, AQe(t) || AQe(e) || Won(e))) o = ERt(e);
      else if (yQe(t)) {
        if (((o = t.slice()), yQe(e))) for (let s = 0, a = e.length; s < a; s++) o.push(ERt(e[s]));
        else if (pAe(e)) {
          let s = Object.keys(e);
          for (let a = 0, u = s.length; a < u; a++) {
            let c = s[a];
            o[c] = ERt(e[c]);
          }
        }
      } else if (pAe(t))
        if (pAe(e)) {
          if (!gJo(t, e)) return e;
          o = Object.assign({}, t);
          let s = Object.keys(e);
          for (let a = 0, u = s.length; a < u; a++) {
            let c = s[a],
              m = e[c];
            if (AQe(m)) typeof m > "u" ? delete o[c] : (o[c] = m);
            else {
              let d = o[c],
                f = m;
              if (Hon(t, c, n) || Hon(e, c, n)) delete o[c];
              else {
                if (pAe(d) && pAe(f)) {
                  let p = n.get(d) || [],
                    h = n.get(f) || [];
                  (p.push({ obj: t, key: c }), h.push({ obj: e, key: c }), n.set(d, p), n.set(f, h));
                }
                o[c] = Von(o[c], m, r, n);
              }
            }
          }
        } else o = e;
      return o;
    }
  }
  function Hon(t, e, r) {
    let n = r.get(t[e]) || [];
    for (let o = 0, s = n.length; o < s; o++) {
      let a = n[o];
      if (a.key === e && a.obj === t) return !0;
    }
    return !1;
  }
  function yQe(t) {
    return Array.isArray(t);
  }
  function Won(t) {
    return typeof t == "function";
  }
  function pAe(t) {
    return !AQe(t) && !yQe(t) && !Won(t) && typeof t == "object";
  }
  function AQe(t) {
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
  function gJo(t, e) {
    return !(!(0, qon.isPlainObject)(t) || !(0, qon.isPlainObject)(e));
  }
});