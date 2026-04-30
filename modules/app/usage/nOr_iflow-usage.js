/**
 * @module nOr
 * @category app/usage
 * @label iflow-usage
 * @position 112 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nOr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nOr = T((Kee) => {
  "use strict";
  Object.defineProperty(Kee, "__esModule", { value: !0 });
  Kee.ExternalAccountAuthorizedUserClient = Kee.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = void 0;
  var K3o = sx(),
    rOr = Qyt(),
    J3o = xC(),
    X3o = Ae("stream"),
    Z3o = pB();
  Kee.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE = "external_account_authorized_user";
  var ego = "https://sts.{universeDomain}/v1/oauthtoken",
    E_t = class t extends rOr.OAuthClientAuthHandler {
      constructor(e, r, n) {
        (super(n), (this.url = e), (this.transporter = r));
      }
      async refreshToken(e, r) {
        let n = new URLSearchParams({ grant_type: "refresh_token", refresh_token: e }),
          o = { "Content-Type": "application/x-www-form-urlencoded", ...r },
          s = {
            ...t.RETRY_CONFIG,
            url: this.url,
            method: "POST",
            headers: o,
            data: n.toString(),
            responseType: "json",
          };
        this.applyClientAuthenticationOptions(s);
        try {
          let a = await this.transporter.request(s),
            u = a.data;
          return ((u.res = a), u);
        } catch (a) {
          throw a instanceof J3o.GaxiosError && a.response
            ? (0, rOr.getErrorFromOAuthErrorResponse)(a.response.data, a)
            : a;
        }
      }
    },
    v_t = class extends K3o.AuthClient {
      constructor(e, r) {
        var n;
        (super({ ...e, ...r }),
          e.universe_domain && (this.universeDomain = e.universe_domain),
          (this.refreshToken = e.refresh_token));
        let o = { confidentialClientType: "basic", clientId: e.client_id, clientSecret: e.client_secret };
        ((this.externalAccountAuthorizedUserHandler = new E_t(
          (n = e.token_url) !== null && n !== void 0 ? n : ego.replace("{universeDomain}", this.universeDomain),
          this.transporter,
          o,
        )),
          (this.cachedAccessToken = null),
          (this.quotaProjectId = e.quota_project_id),
          typeof r?.eagerRefreshThresholdMillis != "number"
            ? (this.eagerRefreshThresholdMillis = Z3o.EXPIRATION_TIME_OFFSET)
            : (this.eagerRefreshThresholdMillis = r.eagerRefreshThresholdMillis),
          (this.forceRefreshOnFailure = !!r?.forceRefreshOnFailure));
      }
      async getAccessToken() {
        return (
          (!this.cachedAccessToken || this.isExpired(this.cachedAccessToken)) && (await this.refreshAccessTokenAsync()),
          { token: this.cachedAccessToken.access_token, res: this.cachedAccessToken.res }
        );
      }
      async getRequestHeaders() {
        let r = { Authorization: `Bearer ${(await this.getAccessToken()).token}` };
        return this.addSharedMetadataHeaders(r);
      }
      request(e, r) {
        if (r)
          this.requestAsync(e).then(
            (n) => r(null, n),
            (n) => r(n, n.response),
          );
        else return this.requestAsync(e);
      }
      async requestAsync(e, r = !1) {
        let n;
        try {
          let o = await this.getRequestHeaders();
          ((e.headers = e.headers || {}),
            o && o["x-goog-user-project"] && (e.headers["x-goog-user-project"] = o["x-goog-user-project"]),
            o && o.Authorization && (e.headers.Authorization = o.Authorization),
            (n = await this.transporter.request(e)));
        } catch (o) {
          let s = o.response;
          if (s) {
            let a = s.status,
              u = s.config.data instanceof X3o.Readable;
            if (!r && (a === 401 || a === 403) && !u && this.forceRefreshOnFailure)
              return (await this.refreshAccessTokenAsync(), await this.requestAsync(e, !0));
          }
          throw o;
        }
        return n;
      }
      async refreshAccessTokenAsync() {
        let e = await this.externalAccountAuthorizedUserHandler.refreshToken(this.refreshToken);
        return (
          (this.cachedAccessToken = {
            access_token: e.access_token,
            expiry_date: new Date().getTime() + e.expires_in * 1e3,
            res: e.res,
          }),
          e.refresh_token !== void 0 && (this.refreshToken = e.refresh_token),
          this.cachedAccessToken
        );
      }
      isExpired(e) {
        let r = new Date().getTime();
        return e.expiry_date ? r >= e.expiry_date - this.eagerRefreshThresholdMillis : !1;
      }
    };
  Kee.ExternalAccountAuthorizedUserClient = v_t;
});