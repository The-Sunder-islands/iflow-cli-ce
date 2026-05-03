/**
 * @module Fyt
 * @category app/usage
 * @label iflow-usage
 * @position 98 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t extends s3o, class t extends Mkr
 * Features: esbuild module exports: Fyt
 * === End semantic info ===
 */


var Fyt = T((Gee) => {
  "use strict";
  Object.defineProperty(Gee, "__esModule", { value: !0 });
  Gee.UserRefreshClient = Gee.USER_REFRESH_ACCOUNT_TYPE = void 0;
  var s3o = vG(),
    a3o = Ae("querystring");
  Gee.USER_REFRESH_ACCOUNT_TYPE = "authorized_user";
  var Myt = class t extends s3o.OAuth2Client {
    constructor(e, r, n, o, s) {
      let a =
        e && typeof e == "object"
          ? e
          : { clientId: e, clientSecret: r, refreshToken: n, eagerRefreshThresholdMillis: o, forceRefreshOnFailure: s };
      (super(a), (this._refreshToken = a.refreshToken), (this.credentials.refresh_token = a.refreshToken));
    }
    async refreshTokenNoCache(e) {
      return super.refreshTokenNoCache(this._refreshToken);
    }
    async fetchIdToken(e) {
      return (
        await this.transporter.request({
          ...t.RETRY_CONFIG,
          url: this.endpoints.oauth2TokenUrl,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          method: "POST",
          data: (0, a3o.stringify)({
            client_id: this._clientId,
            client_secret: this._clientSecret,
            grant_type: "refresh_token",
            refresh_token: this._refreshToken,
            target_audience: e,
          }),
        })
      ).data.id_token;
    }
    fromJSON(e) {
      if (!e) throw new Error("Must pass in a JSON object containing the user refresh token");
      if (e.type !== "authorized_user")
        throw new Error('The incoming JSON object does not have the "authorized_user" type');
      if (!e.client_id) throw new Error("The incoming JSON object does not contain a client_id field");
      if (!e.client_secret) throw new Error("The incoming JSON object does not contain a client_secret field");
      if (!e.refresh_token) throw new Error("The incoming JSON object does not contain a refresh_token field");
      ((this._clientId = e.client_id),
        (this._clientSecret = e.client_secret),
        (this._refreshToken = e.refresh_token),
        (this.credentials.refresh_token = e.refresh_token),
        (this.quotaProjectId = e.quota_project_id),
        (this.universeDomain = e.universe_domain || this.universeDomain));
    }
    fromStream(e, r) {
      if (r) this.fromStreamAsync(e).then(() => r(), r);
      else return this.fromStreamAsync(e);
    }
    async fromStreamAsync(e) {
      return new Promise((r, n) => {
        if (!e) return n(new Error("Must pass in a stream containing the user refresh token."));
        let o = "";
        e.setEncoding("utf8")
          .on("error", n)
          .on("data", (s) => (o += s))
          .on("end", () => {
            try {
              let s = JSON.parse(o);
              return (this.fromJSON(s), r());
            } catch (s) {
              return n(s);
            }
          });
      });
    }
    static fromJSON(e) {
      let r = new t();
      return (r.fromJSON(e), r);
    }
  };
  Gee.UserRefreshClient = Myt;
});
var $yt = T((qee) => {
  "use strict";
  Object.defineProperty(qee, "__esModule", { value: !0 });
  qee.Impersonated = qee.IMPERSONATED_ACCOUNT_TYPE = void 0;
  var Mkr = vG(),
    u3o = xC(),
    c3o = mB();
  qee.IMPERSONATED_ACCOUNT_TYPE = "impersonated_service_account";
  var Uyt = class t extends Mkr.OAuth2Client {
    constructor(e = {}) {
      var r, n, o, s, a, u;
      if (
        (super(e),
        (this.credentials = { expiry_date: 1, refresh_token: "impersonated-placeholder" }),
        (this.sourceClient = (r = e.sourceClient) !== null && r !== void 0 ? r : new Mkr.OAuth2Client()),
        (this.targetPrincipal = (n = e.targetPrincipal) !== null && n !== void 0 ? n : ""),
        (this.delegates = (o = e.delegates) !== null && o !== void 0 ? o : []),
        (this.targetScopes = (s = e.targetScopes) !== null && s !== void 0 ? s : []),
        (this.lifetime = (a = e.lifetime) !== null && a !== void 0 ? a : 3600),
        !!!(0, c3o.originalOrCamelOptions)(e).get("universe_domain"))
      )
        this.universeDomain = this.sourceClient.universeDomain;
      else if (this.sourceClient.universeDomain !== this.universeDomain)
        throw new RangeError(
          `Universe domain ${this.sourceClient.universeDomain} in source credentials does not match ${this.universeDomain} universe domain set for impersonated credentials.`,
        );
      this.endpoint = (u = e.endpoint) !== null && u !== void 0 ? u : `https://iamcredentials.${this.universeDomain}`;
    }
    async sign(e) {
      await this.sourceClient.getAccessToken();
      let r = `projects/-/serviceAccounts/${this.targetPrincipal}`,
        n = `${this.endpoint}/v1/${r}:signBlob`,
        o = { delegates: this.delegates, payload: Buffer.from(e).toString("base64") };
      return (await this.sourceClient.request({ ...t.RETRY_CONFIG, url: n, data: o, method: "POST" })).data;
    }
    getTargetPrincipal() {
      return this.targetPrincipal;
    }
    async refreshToken() {
      var e, r, n, o, s, a;
      try {
        await this.sourceClient.getAccessToken();
        let u = "projects/-/serviceAccounts/" + this.targetPrincipal,
          c = `${this.endpoint}/v1/${u}:generateAccessToken`,
          m = { delegates: this.delegates, scope: this.targetScopes, lifetime: this.lifetime + "s" },
          d = await this.sourceClient.request({ ...t.RETRY_CONFIG, url: c, data: m, method: "POST" }),
          f = d.data;
        return (
          (this.credentials.access_token = f.accessToken),
          (this.credentials.expiry_date = Date.parse(f.expireTime)),
          { tokens: this.credentials, res: d }
        );
      } catch (u) {
        if (!(u instanceof Error)) throw u;
        let c = 0,
          m = "";
        throw (
          u instanceof u3o.GaxiosError &&
            ((c =
              (n =
                (r = (e = u?.response) === null || e === void 0 ? void 0 : e.data) === null || r === void 0
                  ? void 0
                  : r.error) === null || n === void 0
                ? void 0
                : n.status),
            (m =
              (a =
                (s = (o = u?.response) === null || o === void 0 ? void 0 : o.data) === null || s === void 0
                  ? void 0
                  : s.error) === null || a === void 0
                ? void 0
                : a.message)),
          c && m
            ? ((u.message = `${c}: unable to impersonate: ${m}`), u)
            : ((u.message = `unable to impersonate: ${u}`), u)
        );
      }
    }
    async fetchIdToken(e, r) {
      var n, o;
      await this.sourceClient.getAccessToken();
      let s = `projects/-/serviceAccounts/${this.targetPrincipal}`,
        a = `${this.endpoint}/v1/${s}:generateIdToken`,
        u = {
          delegates: this.delegates,
          audience: e,
          includeEmail: (n = r?.includeEmail) !== null && n !== void 0 ? n : !0,
          useEmailAzp: (o = r?.includeEmail) !== null && o !== void 0 ? o : !0,
        };
      return (await this.sourceClient.request({ ...t.RETRY_CONFIG, url: a, data: u, method: "POST" })).data.token;
    }
  };
  qee.Impersonated = Uyt;
});