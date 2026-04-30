/**
 * @module ain
 * @category utils/oop
 * @label oop
 * @position 592 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ain) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ain = T((Aje) => {
  "use strict";
  Object.defineProperty(Aje, "__esModule", { value: !0 });
  Aje.merge = void 0;
  var nin = rin(),
    Szo = 20;
  function wzo(...t) {
    let e = t.shift(),
      r = new WeakMap();
    for (; t.length > 0; ) e = oin(e, t.shift(), 0, r);
    return e;
  }
  Aje.merge = wzo;
  function P7t(t) {
    return bje(t) ? t.slice() : t;
  }
  function oin(t, e, r = 0, n) {
    let o;
    if (!(r > Szo)) {
      if ((r++, gje(t) || gje(e) || sin(e))) o = P7t(e);
      else if (bje(t)) {
        if (((o = t.slice()), bje(e))) for (let s = 0, a = e.length; s < a; s++) o.push(P7t(e[s]));
        else if (oAe(e)) {
          let s = Object.keys(e);
          for (let a = 0, u = s.length; a < u; a++) {
            let c = s[a];
            o[c] = P7t(e[c]);
          }
        }
      } else if (oAe(t))
        if (oAe(e)) {
          if (!xzo(t, e)) return e;
          o = Object.assign({}, t);
          let s = Object.keys(e);
          for (let a = 0, u = s.length; a < u; a++) {
            let c = s[a],
              m = e[c];
            if (gje(m)) typeof m > "u" ? delete o[c] : (o[c] = m);
            else {
              let d = o[c],
                f = m;
              if (iin(t, c, n) || iin(e, c, n)) delete o[c];
              else {
                if (oAe(d) && oAe(f)) {
                  let p = n.get(d) || [],
                    h = n.get(f) || [];
                  (p.push({ obj: t, key: c }), h.push({ obj: e, key: c }), n.set(d, p), n.set(f, h));
                }
                o[c] = oin(o[c], m, r, n);
              }
            }
          }
        } else o = e;
      return o;
    }
  }
  function iin(t, e, r) {
    let n = r.get(t[e]) || [];
    for (let o = 0, s = n.length; o < s; o++) {
      let a = n[o];
      if (a.key === e && a.obj === t) return !0;
    }
    return !1;
  }
  function bje(t) {
    return Array.isArray(t);
  }
  function sin(t) {
    return typeof t == "function";
  }
  function oAe(t) {
    return !gje(t) && !bje(t) && !sin(t) && typeof t == "object";
  }
  function gje(t) {
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
  function xzo(t, e) {
    return !(!(0, nin.isPlainObject)(t) || !(0, nin.isPlainObject)(e));
  }
});