/**
 * @module Eqr
 * @category utils/oop
 * @label oop
 * @position 148 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Eqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Eqr = T((xte) => {
  "use strict";
  Object.defineProperty(xte, "__esModule", { value: !0 });
  xte.isUrlIgnored = xte.urlMatches = void 0;
  function _qr(t, e) {
    return typeof e == "string" ? t === e : !!t.match(e);
  }
  xte.urlMatches = _qr;
  function qwo(t, e) {
    if (!e) return !1;
    for (let r of e) if (_qr(t, r)) return !0;
    return !1;
  }
  xte.isUrlIgnored = qwo;
});