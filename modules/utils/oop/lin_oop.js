/**
 * @module lin
 * @category utils/oop
 * @label oop
 * @position 594 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lin = T((hne) => {
  "use strict";
  Object.defineProperty(hne, "__esModule", { value: !0 });
  hne.isUrlIgnored = hne.urlMatches = void 0;
  function cin(t, e) {
    return typeof e == "string" ? t === e : !!t.match(e);
  }
  hne.urlMatches = cin;
  function Dzo(t, e) {
    if (!e) return !1;
    for (let r of e) if (cin(t, r)) return !0;
    return !1;
  }
  hne.isUrlIgnored = Dzo;
});