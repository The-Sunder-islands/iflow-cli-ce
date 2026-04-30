/**
 * @module Jon
 * @category utils/oop
 * @label oop
 * @position 660 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jon = T((Cne) => {
  "use strict";
  Object.defineProperty(Cne, "__esModule", { value: !0 });
  Cne.isUrlIgnored = Cne.urlMatches = void 0;
  function Kon(t, e) {
    return typeof e == "string" ? t === e : !!t.match(e);
  }
  Cne.urlMatches = Kon;
  function AJo(t, e) {
    if (!e) return !1;
    for (let r of e) if (Kon(t, r)) return !0;
    return !1;
  }
  Cne.isUrlIgnored = AJo;
});