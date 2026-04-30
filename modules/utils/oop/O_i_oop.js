/**
 * @module O_i
 * @category utils/oop
 * @label oop
 * @position 1792 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (O_i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var O_i = T((Wmt) => {
  "use strict";
  Object.defineProperty(Wmt, "__esModule", { value: !0 });
  Wmt.checkUrl = void 0;
  var RBa = vA(),
    kBa = "169.254.170.2",
    OBa = "169.254.170.23",
    NBa = "[fd00:ec2::23]",
    PBa = (t, e) => {
      if (t.protocol !== "https:" && !(t.hostname === kBa || t.hostname === OBa || t.hostname === NBa)) {
        if (t.hostname.includes("[")) {
          if (t.hostname === "[::1]" || t.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") return;
        } else {
          if (t.hostname === "localhost") return;
          let r = t.hostname.split("."),
            n = (o) => {
              let s = parseInt(o, 10);
              return 0 <= s && s <= 255;
            };
          if (r[0] === "127" && n(r[1]) && n(r[2]) && n(r[3]) && r.length === 4) return;
        }
        throw new RBa.CredentialsProviderError(
          `URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`,
          { logger: e },
        );
      }
    };
  Wmt.checkUrl = PBa;
});