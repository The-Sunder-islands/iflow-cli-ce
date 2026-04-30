/**
 * @module m6i
 * @category utils/oop
 * @label oop
 * @position 1778 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (m6i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var m6i = T((Tmt) => {
  "use strict";
  Object.defineProperty(Tmt, "__esModule", { value: !0 });
  Tmt.getEndpointUrlConfig = void 0;
  var u6i = aI(),
    c6i = "AWS_ENDPOINT_URL",
    l6i = "endpoint_url",
    FNa = (t) => ({
      environmentVariableSelector: (e) => {
        let r = t.split(" ").map((s) => s.toUpperCase()),
          n = e[[c6i, ...r].join("_")];
        if (n) return n;
        let o = e[c6i];
        if (o) return o;
      },
      configFileSelector: (e, r) => {
        if (r && e.services) {
          let o = r[["services", e.services].join(u6i.CONFIG_PREFIX_SEPARATOR)];
          if (o) {
            let s = t.split(" ").map((u) => u.toLowerCase()),
              a = o[[s.join("_"), l6i].join(u6i.CONFIG_PREFIX_SEPARATOR)];
            if (a) return a;
          }
        }
        let n = e[l6i];
        if (n) return n;
      },
      default: void 0,
    });
  Tmt.getEndpointUrlConfig = FNa;
});