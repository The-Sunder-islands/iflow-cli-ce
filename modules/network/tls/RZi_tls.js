/**
 * @module RZi
 * @category network/tls
 * @label tls
 * @position 1920 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RZi = T((Pfe) => {
  "use strict";
  var npu =
    (Pfe && Pfe.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(Pfe, "__esModule", { value: !0 });
  Pfe.readCAFileSync = void 0;
  var ipu = npu(IZi());
  function opu(t) {
    try {
      let e = ipu.default.readFileSync(t, "utf8"),
        r = "-----END CERTIFICATE-----";
      return e
        .split(r)
        .filter((o) => !!o.trim())
        .map((o) => `${o.trimLeft()}${r}`);
    } catch (e) {
      if (e.code === "ENOENT") return;
      throw e;
    }
  }
  Pfe.readCAFileSync = opu;
});