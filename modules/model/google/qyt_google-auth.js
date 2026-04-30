/**
 * @module qyt
 * @category model/google
 * @label google-auth
 * @position 100 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qyt = T((Wke) => {
  "use strict";
  Object.defineProperty(Wke, "__esModule", { value: !0 });
  Wke.StsCredentials = void 0;
  var f3o = xC(),
    p3o = Ae("querystring"),
    h3o = f3e(),
    Ukr = Qyt(),
    Gyt = class t extends Ukr.OAuthClientAuthHandler {
      constructor(e, r) {
        (super(r), (this.tokenExchangeEndpoint = e), (this.transporter = new h3o.DefaultTransporter()));
      }
      async exchangeToken(e, r, n) {
        var o, s, a;
        let u = {
          grant_type: e.grantType,
          resource: e.resource,
          audience: e.audience,
          scope: (o = e.scope) === null || o === void 0 ? void 0 : o.join(" "),
          requested_token_type: e.requestedTokenType,
          subject_token: e.subjectToken,
          subject_token_type: e.subjectTokenType,
          actor_token: (s = e.actingParty) === null || s === void 0 ? void 0 : s.actorToken,
          actor_token_type: (a = e.actingParty) === null || a === void 0 ? void 0 : a.actorTokenType,
          options: n && JSON.stringify(n),
        };
        Object.keys(u).forEach((d) => {
          typeof u[d] > "u" && delete u[d];
        });
        let c = { "Content-Type": "application/x-www-form-urlencoded" };
        Object.assign(c, r || {});
        let m = {
          ...t.RETRY_CONFIG,
          url: this.tokenExchangeEndpoint.toString(),
          method: "POST",
          headers: c,
          data: p3o.stringify(u),
          responseType: "json",
        };
        this.applyClientAuthenticationOptions(m);
        try {
          let d = await this.transporter.request(m),
            f = d.data;
          return ((f.res = d), f);
        } catch (d) {
          throw d instanceof f3o.GaxiosError && d.response
            ? (0, Ukr.getErrorFromOAuthErrorResponse)(d.response.data, d)
            : d;
        }
      }
    };
  Wke.StsCredentials = Gyt;
});