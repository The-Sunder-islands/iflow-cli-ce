/**
 * @module pLr
 * @category utils/oop
 * @label oop
 * @position 126 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pLr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pLr = T((wB) => {
  "use strict";
  Object.defineProperty(wB, "__esModule", { value: !0 });
  wB.isAttributeValue = wB.isAttributeKey = wB.sanitizeAttributes = void 0;
  var lLr = (Zt(), bt(cr));
  function j2o(t) {
    let e = {};
    if (typeof t != "object" || t == null) return e;
    for (let [r, n] of Object.entries(t)) {
      if (!mLr(r)) {
        lLr.diag.warn(`Invalid attribute key: ${r}`);
        continue;
      }
      if (!dLr(n)) {
        lLr.diag.warn(`Invalid attribute value set for key: ${r}`);
        continue;
      }
      Array.isArray(n) ? (e[r] = n.slice()) : (e[r] = n);
    }
    return e;
  }
  wB.sanitizeAttributes = j2o;
  function mLr(t) {
    return typeof t == "string" && t.length > 0;
  }
  wB.isAttributeKey = mLr;
  function dLr(t) {
    return t == null ? !0 : Array.isArray(t) ? Q2o(t) : fLr(t);
  }
  wB.isAttributeValue = dLr;
  function Q2o(t) {
    let e;
    for (let r of t)
      if (r != null) {
        if (!e) {
          if (fLr(r)) {
            e = typeof r;
            continue;
          }
          return !1;
        }
        if (typeof r !== e) return !1;
      }
    return !0;
  }
  function fLr(t) {
    switch (typeof t) {
      case "number":
      case "boolean":
      case "string":
        return !0;
    }
    return !1;
  }
});