/**
 * @module Snn
 * @category utils/oop
 * @label oop
 * @position 574 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Snn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Snn = T((uL) => {
  "use strict";
  Object.defineProperty(uL, "__esModule", { value: !0 });
  uL.isAttributeValue = uL.isAttributeKey = uL.sanitizeAttributes = void 0;
  var _nn = (Zt(), bt(cr));
  function AWo(t) {
    let e = {};
    if (typeof t != "object" || t == null) return e;
    for (let r in t) {
      if (!Object.prototype.hasOwnProperty.call(t, r)) continue;
      if (!Enn(r)) {
        _nn.diag.warn(`Invalid attribute key: ${r}`);
        continue;
      }
      let n = t[r];
      if (!vnn(n)) {
        _nn.diag.warn(`Invalid attribute value set for key: ${r}`);
        continue;
      }
      Array.isArray(n) ? (e[r] = n.slice()) : (e[r] = n);
    }
    return e;
  }
  uL.sanitizeAttributes = AWo;
  function Enn(t) {
    return typeof t == "string" && t !== "";
  }
  uL.isAttributeKey = Enn;
  function vnn(t) {
    return t == null ? !0 : Array.isArray(t) ? yWo(t) : Cnn(typeof t);
  }
  uL.isAttributeValue = vnn;
  function yWo(t) {
    let e;
    for (let r of t) {
      if (r == null) continue;
      let n = typeof r;
      if (n !== e) {
        if (!e) {
          if (Cnn(n)) {
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
  function Cnn(t) {
    switch (t) {
      case "number":
      case "boolean":
      case "string":
        return !0;
    }
    return !1;
  }
});