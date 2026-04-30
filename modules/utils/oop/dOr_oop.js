/**
 * @module dOr
 * @category utils/oop
 * @label oop
 * @position 116 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dOr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dOr = T((fOe) => {
  "use strict";
  Object.defineProperty(fOe, "__esModule", { value: !0 });
  fOe.PassThroughClient = void 0;
  var hgo = sx(),
    dOe = class extends hgo.AuthClient {
      async request(e) {
        return this.transporter.request(e);
      }
      async getAccessToken() {
        return {};
      }
      async getRequestHeaders() {
        return {};
      }
    };
  fOe.PassThroughClient = dOe;
  var ggo = new dOe();
  ggo.getAccessToken();
});