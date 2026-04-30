/**
 * @module yyt
 * @category utils/oop
 * @label oop
 * @position 87 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yyt = T((Fee) => {
  "use strict";
  Object.defineProperty(Fee, "__esModule", { value: !0 });
  Fee.GCPEnv = void 0;
  Fee.clear = fho;
  Fee.getEnv = pho;
  var KRr = m3e(),
    fR;
  (function (t) {
    ((t.APP_ENGINE = "APP_ENGINE"),
      (t.KUBERNETES_ENGINE = "KUBERNETES_ENGINE"),
      (t.CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS"),
      (t.COMPUTE_ENGINE = "COMPUTE_ENGINE"),
      (t.CLOUD_RUN = "CLOUD_RUN"),
      (t.NONE = "NONE"));
  })(fR || (Fee.GCPEnv = fR = {}));
  var h3e;
  function fho() {
    h3e = void 0;
  }
  async function pho() {
    return h3e || ((h3e = hho()), h3e);
  }
  async function hho() {
    let t = fR.NONE;
    return (
      gho()
        ? (t = fR.APP_ENGINE)
        : bho()
          ? (t = fR.CLOUD_FUNCTIONS)
          : (await _ho())
            ? (await yho())
              ? (t = fR.KUBERNETES_ENGINE)
              : Aho()
                ? (t = fR.CLOUD_RUN)
                : (t = fR.COMPUTE_ENGINE)
            : (t = fR.NONE),
      t
    );
  }
  function gho() {
    return !!(process.env.GAE_SERVICE || process.env.GAE_MODULE_NAME);
  }
  function bho() {
    return !!(process.env.FUNCTION_NAME || process.env.FUNCTION_TARGET);
  }
  function Aho() {
    return !!process.env.K_CONFIGURATION;
  }
  async function yho() {
    try {
      return (await KRr.instance("attributes/cluster-name"), !0);
    } catch {
      return !1;
    }
  }
  async function _ho() {
    return KRr.isAvailable();
  }
});