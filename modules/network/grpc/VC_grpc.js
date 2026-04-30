/**
 * @module VC
 * @category network/grpc
 * @label grpc
 * @position 432 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (VC) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var VC = T((DR) => {
  "use strict";
  Object.defineProperty(DR, "__esModule", { value: !0 });
  DR.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = void 0;
  DR.registerResolver = rLo;
  DR.registerDefaultScheme = nLo;
  DR.createResolver = iLo;
  DR.getDefaultAuthority = oLo;
  DR.mapUriDefaultScheme = sLo;
  var ixt = d2();
  DR.CHANNEL_ARGS_CONFIG_SELECTOR_KEY = "grpc.internal.config_selector";
  var Dre = {},
    nxt = null;
  function rLo(t, e) {
    Dre[t] = e;
  }
  function nLo(t) {
    nxt = t;
  }
  function iLo(t, e, r) {
    if (t.scheme !== void 0 && t.scheme in Dre) return new Dre[t.scheme](t, e, r);
    throw new Error(`No resolver could be created for target ${(0, ixt.uriToString)(t)}`);
  }
  function oLo(t) {
    if (t.scheme !== void 0 && t.scheme in Dre) return Dre[t.scheme].getDefaultAuthority(t);
    throw new Error(`Invalid target ${(0, ixt.uriToString)(t)}`);
  }
  function sLo(t) {
    return t.scheme === void 0 || !(t.scheme in Dre)
      ? nxt !== null
        ? { scheme: nxt, authority: void 0, path: (0, ixt.uriToString)(t) }
        : null
      : t;
  }
});