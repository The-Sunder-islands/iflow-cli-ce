/**
 * @module lon
 * @category utils/oop
 * @label oop
 * @position 638 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lon = T((lL) => {
  "use strict";
  Object.defineProperty(lL, "__esModule", { value: !0 });
  lL.isAttributeValue = lL.isAttributeKey = lL.sanitizeAttributes = void 0;
  var son = (Zt(), bt(cr));
  function aKo(t) {
    let e = {};
    if (typeof t != "object" || t == null) return e;
    for (let r in t) {
      if (!Object.prototype.hasOwnProperty.call(t, r)) continue;
      if (!aon(r)) {
        son.diag.warn(`Invalid attribute key: ${r}`);
        continue;
      }
      let n = t[r];
      if (!uon(n)) {
        son.diag.warn(`Invalid attribute value set for key: ${r}`);
        continue;
      }
      Array.isArray(n) ? (e[r] = n.slice()) : (e[r] = n);
    }
    return e;
  }
  lL.sanitizeAttributes = aKo;
  function aon(t) {
    return typeof t == "string" && t !== "";
  }
  lL.isAttributeKey = aon;
  function uon(t) {
    return t == null ? !0 : Array.isArray(t) ? uKo(t) : con(typeof t);
  }
  lL.isAttributeValue = uon;
  function uKo(t) {
    let e;
    for (let r of t) {
      if (r == null) continue;
      let n = typeof r;
      if (n !== e) {
        if (!e) {
          if (con(n)) {
            e = n;
            continue;
          }
          return !1;
        }
        return !1;
      }
    }
    return !0;
  }
  function con(t) {
    switch (t) {
      case "number":
      case "boolean":
      case "string":
        return !0;
    }
    return !1;
  }
});