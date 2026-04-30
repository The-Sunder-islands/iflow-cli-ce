/**
 * @module kEi
 * @category utils/oop
 * @label oop
 * @position 1801 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kEi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kEi = T((hde) => {
  "use strict";
  Object.defineProperty(hde, "__esModule", { value: !0 });
  hde.warning = void 0;
  hde.stsRegionDefaultResolver = xLa;
  var REi = b9(),
    wLa = uI();
  function xLa(t = {}) {
    return (0, wLa.loadConfig)(
      {
        ...REi.NODE_REGION_CONFIG_OPTIONS,
        async default() {
          return (
            hde.warning.silence ||
              console.warn(
                "@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.",
              ),
            "us-east-1"
          );
        },
      },
      { ...REi.NODE_REGION_CONFIG_FILE_OPTIONS, ...t },
    );
  }
  hde.warning = { silence: !1 };
});