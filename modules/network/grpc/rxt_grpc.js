/**
 * @module rxt
 * @category network/grpc
 * @label grpc
 * @position 430 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rxt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rxt = T((zge) => {
  "use strict";
  Object.defineProperty(zge, "__esModule", { value: !0 });
  zge.CIPHER_SUITES = void 0;
  zge.getDefaultRootsData = KBo;
  var YBo = Ae("fs");
  zge.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
  var iXr = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH,
    txt = null;
  function KBo() {
    return iXr ? (txt === null && (txt = YBo.readFileSync(iXr)), txt) : null;
  }
});