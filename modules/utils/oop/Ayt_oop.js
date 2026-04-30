/**
 * @module Ayt
 * @category utils/oop
 * @label oop
 * @position 86 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ayt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ayt = T((Fke) => {
  "use strict";
  Object.defineProperty(Fke, "__esModule", { value: !0 });
  Fke.IdTokenClient = void 0;
  var dho = vG(),
    byt = class extends dho.OAuth2Client {
      constructor(e) {
        (super(e), (this.targetAudience = e.targetAudience), (this.idTokenProvider = e.idTokenProvider));
      }
      async getRequestMetadataAsync(e) {
        if (!this.credentials.id_token || !this.credentials.expiry_date || this.isTokenExpiring()) {
          let n = await this.idTokenProvider.fetchIdToken(this.targetAudience);
          this.credentials = { id_token: n, expiry_date: this.getIdTokenExpiryDate(n) };
        }
        return { headers: { Authorization: "Bearer " + this.credentials.id_token } };
      }
      getIdTokenExpiryDate(e) {
        let r = e.split(".")[1];
        if (r) return JSON.parse(Buffer.from(r, "base64").toString("ascii")).exp * 1e3;
      }
    };
  Fke.IdTokenClient = byt;
});