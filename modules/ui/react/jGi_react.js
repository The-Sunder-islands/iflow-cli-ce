/**
 * @module jGi
 * @category ui/react
 * @label react
 * @position 1885 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jGi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jGi = T((Y3t) => {
  "use strict";
  var Ccu = Symbol.for("react.transitional.element"),
    Scu = Symbol.for("react.fragment");
  function $Gi(t, e, r) {
    var n = null;
    if ((r !== void 0 && (n = "" + r), e.key !== void 0 && (n = "" + e.key), "key" in e)) {
      r = {};
      for (var o in e) o !== "key" && (r[o] = e[o]);
    } else r = e;
    return ((e = r.ref), { $$typeof: Ccu, type: t, key: n, ref: e !== void 0 ? e : null, props: r });
  }
  Y3t.Fragment = Scu;
  Y3t.jsx = $Gi;
  Y3t.jsxs = $Gi;
});