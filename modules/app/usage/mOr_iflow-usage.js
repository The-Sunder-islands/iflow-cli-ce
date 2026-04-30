/**
 * @module mOr
 * @category app/usage
 * @label iflow-usage
 * @position 115 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mOr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mOr = T((cx) => {
  "use strict";
  Object.defineProperty(cx, "__esModule", { value: !0 });
  cx.DownscopedClient = cx.EXPIRATION_TIME_OFFSET = cx.MAX_ACCESS_BOUNDARY_RULES_COUNT = void 0;
  var cgo = Ae("stream"),
    lgo = sx(),
    mgo = qyt(),
    dgo = "urn:ietf:params:oauth:grant-type:token-exchange",
    fgo = "urn:ietf:params:oauth:token-type:access_token",
    pgo = "urn:ietf:params:oauth:token-type:access_token";
  cx.MAX_ACCESS_BOUNDARY_RULES_COUNT = 10;
  cx.EXPIRATION_TIME_OFFSET = 300 * 1e3;
  var x_t = class extends lgo.AuthClient {
    constructor(e, r, n, o) {
      if (
        (super({ ...n, quotaProjectId: o }),
        (this.authClient = e),
        (this.credentialAccessBoundary = r),
        r.accessBoundary.accessBoundaryRules.length === 0)
      )
        throw new Error("At least one access boundary rule needs to be defined.");
      if (r.accessBoundary.accessBoundaryRules.length > cx.MAX_ACCESS_BOUNDARY_RULES_COUNT)
        throw new Error(
          `The provided access boundary has more than ${cx.MAX_ACCESS_BOUNDARY_RULES_COUNT} access boundary rules.`,
        );
      for (let s of r.accessBoundary.accessBoundaryRules)
        if (s.availablePermissions.length === 0)
          throw new Error("At least one permission should be defined in access boundary rules.");
      ((this.stsCredential = new mgo.StsCredentials(`https://sts.${this.universeDomain}/v1/token`)),
        (this.cachedDownscopedAccessToken = null));
    }
    setCredentials(e) {
      if (!e.expiry_date) throw new Error("The access token expiry_date field is missing in the provided credentials.");
      (super.setCredentials(e), (this.cachedDownscopedAccessToken = e));
    }
    async getAccessToken() {
      return (
        (!this.cachedDownscopedAccessToken || this.isExpired(this.cachedDownscopedAccessToken)) &&
          (await this.refreshAccessTokenAsync()),
        {
          token: this.cachedDownscopedAccessToken.access_token,
          expirationTime: this.cachedDownscopedAccessToken.expiry_date,
          res: this.cachedDownscopedAccessToken.res,
        }
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
            u = s.config.data instanceof cgo.Readable;
          if (!r && (a === 401 || a === 403) && !u && this.forceRefreshOnFailure)
            return (await this.refreshAccessTokenAsync(), await this.requestAsync(e, !0));
        }
        throw o;
      }
      return n;
    }
    async refreshAccessTokenAsync() {
      var e;
      let r = (await this.authClient.getAccessToken()).token,
        n = { grantType: dgo, requestedTokenType: fgo, subjectToken: r, subjectTokenType: pgo },
        o = await this.stsCredential.exchangeToken(n, void 0, this.credentialAccessBoundary),
        s = ((e = this.authClient.credentials) === null || e === void 0 ? void 0 : e.expiry_date) || null,
        a = o.expires_in ? new Date().getTime() + o.expires_in * 1e3 : s;
      return (
        (this.cachedDownscopedAccessToken = { access_token: o.access_token, expiry_date: a, res: o.res }),
        (this.credentials = {}),
        Object.assign(this.credentials, this.cachedDownscopedAccessToken),
        delete this.credentials.res,
        this.emit("tokens", {
          refresh_token: null,
          expiry_date: this.cachedDownscopedAccessToken.expiry_date,
          access_token: this.cachedDownscopedAccessToken.access_token,
          token_type: "Bearer",
          id_token: null,
        }),
        this.cachedDownscopedAccessToken
      );
    }
    isExpired(e) {
      let r = new Date().getTime();
      return e.expiry_date ? r >= e.expiry_date - this.eagerRefreshThresholdMillis : !1;
    }
  };
  cx.DownscopedClient = x_t;
});