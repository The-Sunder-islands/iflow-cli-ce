/**
 * @module vG
 * @category model/google
 * @label google-auth
 * @position 84 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vG) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vG = T((ax) => {
  "use strict";
  Object.defineProperty(ax, "__esModule", { value: !0 });
  ax.OAuth2Client = ax.ClientAuthentication = ax.CertificateFormat = ax.CodeChallengeMethod = void 0;
  var oho = xC(),
    fyt = Ae("querystring"),
    sho = Ae("stream"),
    aho = syt(),
    pyt = Pee(),
    uho = sx(),
    cho = dyt(),
    zRr;
  (function (t) {
    ((t.Plain = "plain"), (t.S256 = "S256"));
  })(zRr || (ax.CodeChallengeMethod = zRr = {}));
  var dR;
  (function (t) {
    ((t.PEM = "PEM"), (t.JWK = "JWK"));
  })(dR || (ax.CertificateFormat = dR = {}));
  var p3e;
  (function (t) {
    ((t.ClientSecretPost = "ClientSecretPost"), (t.ClientSecretBasic = "ClientSecretBasic"), (t.None = "None"));
  })(p3e || (ax.ClientAuthentication = p3e = {}));
  var Mee = class t extends uho.AuthClient {
    constructor(e, r, n) {
      let o = e && typeof e == "object" ? e : { clientId: e, clientSecret: r, redirectUri: n };
      (super(o),
        (this.certificateCache = {}),
        (this.certificateExpiry = null),
        (this.certificateCacheFormat = dR.PEM),
        (this.refreshTokenPromises = new Map()),
        (this._clientId = o.clientId),
        (this._clientSecret = o.clientSecret),
        (this.redirectUri = o.redirectUri),
        (this.endpoints = {
          tokenInfoUrl: "https://oauth2.googleapis.com/tokeninfo",
          oauth2AuthBaseUrl: "https://accounts.google.com/o/oauth2/v2/auth",
          oauth2TokenUrl: "https://oauth2.googleapis.com/token",
          oauth2RevokeUrl: "https://oauth2.googleapis.com/revoke",
          oauth2FederatedSignonPemCertsUrl: "https://www.googleapis.com/oauth2/v1/certs",
          oauth2FederatedSignonJwkCertsUrl: "https://www.googleapis.com/oauth2/v3/certs",
          oauth2IapPublicKeyUrl: "https://www.gstatic.com/iap/verify/public_key",
          ...o.endpoints,
        }),
        (this.clientAuthentication = o.clientAuthentication || p3e.ClientSecretPost),
        (this.issuers = o.issuers || ["accounts.google.com", "https://accounts.google.com", this.universeDomain]));
    }
    generateAuthUrl(e = {}) {
      if (e.code_challenge_method && !e.code_challenge)
        throw new Error("If a code_challenge_method is provided, code_challenge must be included.");
      return (
        (e.response_type = e.response_type || "code"),
        (e.client_id = e.client_id || this._clientId),
        (e.redirect_uri = e.redirect_uri || this.redirectUri),
        Array.isArray(e.scope) && (e.scope = e.scope.join(" ")),
        this.endpoints.oauth2AuthBaseUrl.toString() + "?" + fyt.stringify(e)
      );
    }
    generateCodeVerifier() {
      throw new Error("generateCodeVerifier is removed, please use generateCodeVerifierAsync instead.");
    }
    async generateCodeVerifierAsync() {
      let e = (0, pyt.createCrypto)(),
        n = e.randomBytesBase64(96).replace(/\+/g, "~").replace(/=/g, "_").replace(/\//g, "-"),
        s = (await e.sha256DigestBase64(n)).split("=")[0].replace(/\+/g, "-").replace(/\//g, "_");
      return { codeVerifier: n, codeChallenge: s };
    }
    getToken(e, r) {
      let n = typeof e == "string" ? { code: e } : e;
      if (r)
        this.getTokenAsync(n).then(
          (o) => r(null, o.tokens, o.res),
          (o) => r(o, null, o.response),
        );
      else return this.getTokenAsync(n);
    }
    async getTokenAsync(e) {
      let r = this.endpoints.oauth2TokenUrl.toString(),
        n = { "Content-Type": "application/x-www-form-urlencoded" },
        o = {
          client_id: e.client_id || this._clientId,
          code_verifier: e.codeVerifier,
          code: e.code,
          grant_type: "authorization_code",
          redirect_uri: e.redirect_uri || this.redirectUri,
        };
      if (this.clientAuthentication === p3e.ClientSecretBasic) {
        let u = Buffer.from(`${this._clientId}:${this._clientSecret}`);
        n.Authorization = `Basic ${u.toString("base64")}`;
      }
      this.clientAuthentication === p3e.ClientSecretPost && (o.client_secret = this._clientSecret);
      let s = await this.transporter.request({
          ...t.RETRY_CONFIG,
          method: "POST",
          url: r,
          data: fyt.stringify(o),
          headers: n,
        }),
        a = s.data;
      return (
        s.data &&
          s.data.expires_in &&
          ((a.expiry_date = new Date().getTime() + s.data.expires_in * 1e3), delete a.expires_in),
        this.emit("tokens", a),
        { tokens: a, res: s }
      );
    }
    async refreshToken(e) {
      if (!e) return this.refreshTokenNoCache(e);
      if (this.refreshTokenPromises.has(e)) return this.refreshTokenPromises.get(e);
      let r = this.refreshTokenNoCache(e).then(
        (n) => (this.refreshTokenPromises.delete(e), n),
        (n) => {
          throw (this.refreshTokenPromises.delete(e), n);
        },
      );
      return (this.refreshTokenPromises.set(e, r), r);
    }
    async refreshTokenNoCache(e) {
      var r;
      if (!e) throw new Error("No refresh token is set.");
      let n = this.endpoints.oauth2TokenUrl.toString(),
        o = {
          refresh_token: e,
          client_id: this._clientId,
          client_secret: this._clientSecret,
          grant_type: "refresh_token",
        },
        s;
      try {
        s = await this.transporter.request({
          ...t.RETRY_CONFIG,
          method: "POST",
          url: n,
          data: fyt.stringify(o),
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
      } catch (u) {
        throw (
          u instanceof oho.GaxiosError &&
            u.message === "invalid_grant" &&
            !((r = u.response) === null || r === void 0) &&
            r.data &&
            /ReAuth/i.test(u.response.data.error_description) &&
            (u.message = JSON.stringify(u.response.data)),
          u
        );
      }
      let a = s.data;
      return (
        s.data &&
          s.data.expires_in &&
          ((a.expiry_date = new Date().getTime() + s.data.expires_in * 1e3), delete a.expires_in),
        this.emit("tokens", a),
        { tokens: a, res: s }
      );
    }
    refreshAccessToken(e) {
      if (e) this.refreshAccessTokenAsync().then((r) => e(null, r.credentials, r.res), e);
      else return this.refreshAccessTokenAsync();
    }
    async refreshAccessTokenAsync() {
      let e = await this.refreshToken(this.credentials.refresh_token),
        r = e.tokens;
      return (
        (r.refresh_token = this.credentials.refresh_token),
        (this.credentials = r),
        { credentials: this.credentials, res: e.res }
      );
    }
    getAccessToken(e) {
      if (e) this.getAccessTokenAsync().then((r) => e(null, r.token, r.res), e);
      else return this.getAccessTokenAsync();
    }
    async getAccessTokenAsync() {
      if (!this.credentials.access_token || this.isTokenExpiring()) {
        if (!this.credentials.refresh_token)
          if (this.refreshHandler) {
            let n = await this.processAndValidateRefreshHandler();
            if (n?.access_token) return (this.setCredentials(n), { token: this.credentials.access_token });
          } else throw new Error("No refresh token or refresh handler callback is set.");
        let r = await this.refreshAccessTokenAsync();
        if (!r.credentials || (r.credentials && !r.credentials.access_token))
          throw new Error("Could not refresh access token.");
        return { token: r.credentials.access_token, res: r.res };
      } else return { token: this.credentials.access_token };
    }
    async getRequestHeaders(e) {
      return (await this.getRequestMetadataAsync(e)).headers;
    }
    async getRequestMetadataAsync(e) {
      let r = this.credentials;
      if (!r.access_token && !r.refresh_token && !this.apiKey && !this.refreshHandler)
        throw new Error("No access, refresh token, API key or refresh handler callback is set.");
      if (r.access_token && !this.isTokenExpiring()) {
        r.token_type = r.token_type || "Bearer";
        let u = { Authorization: r.token_type + " " + r.access_token };
        return { headers: this.addSharedMetadataHeaders(u) };
      }
      if (this.refreshHandler) {
        let u = await this.processAndValidateRefreshHandler();
        if (u?.access_token) {
          this.setCredentials(u);
          let c = { Authorization: "Bearer " + this.credentials.access_token };
          return { headers: this.addSharedMetadataHeaders(c) };
        }
      }
      if (this.apiKey) return { headers: { "X-Goog-Api-Key": this.apiKey } };
      let n = null,
        o = null;
      try {
        ((n = await this.refreshToken(r.refresh_token)), (o = n.tokens));
      } catch (u) {
        let c = u;
        throw (
          c.response &&
            (c.response.status === 403 || c.response.status === 404) &&
            (c.message = `Could not refresh access token: ${c.message}`),
          c
        );
      }
      let s = this.credentials;
      ((s.token_type = s.token_type || "Bearer"), (o.refresh_token = s.refresh_token), (this.credentials = o));
      let a = { Authorization: s.token_type + " " + o.access_token };
      return { headers: this.addSharedMetadataHeaders(a), res: n.res };
    }
    static getRevokeTokenUrl(e) {
      return new t().getRevokeTokenURL(e).toString();
    }
    getRevokeTokenURL(e) {
      let r = new URL(this.endpoints.oauth2RevokeUrl);
      return (r.searchParams.append("token", e), r);
    }
    revokeToken(e, r) {
      let n = { ...t.RETRY_CONFIG, url: this.getRevokeTokenURL(e).toString(), method: "POST" };
      if (r) this.transporter.request(n).then((o) => r(null, o), r);
      else return this.transporter.request(n);
    }
    revokeCredentials(e) {
      if (e) this.revokeCredentialsAsync().then((r) => e(null, r), e);
      else return this.revokeCredentialsAsync();
    }
    async revokeCredentialsAsync() {
      let e = this.credentials.access_token;
      if (((this.credentials = {}), e)) return this.revokeToken(e);
      throw new Error("No access token to revoke.");
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
        let o = await this.getRequestMetadataAsync(e.url);
        ((e.headers = e.headers || {}),
          o.headers &&
            o.headers["x-goog-user-project"] &&
            (e.headers["x-goog-user-project"] = o.headers["x-goog-user-project"]),
          o.headers && o.headers.Authorization && (e.headers.Authorization = o.headers.Authorization),
          this.apiKey && (e.headers["X-Goog-Api-Key"] = this.apiKey),
          (n = await this.transporter.request(e)));
      } catch (o) {
        let s = o.response;
        if (s) {
          let a = s.status,
            u =
              this.credentials &&
              this.credentials.access_token &&
              this.credentials.refresh_token &&
              (!this.credentials.expiry_date || this.forceRefreshOnFailure),
            c =
              this.credentials &&
              this.credentials.access_token &&
              !this.credentials.refresh_token &&
              (!this.credentials.expiry_date || this.forceRefreshOnFailure) &&
              this.refreshHandler,
            m = s.config.data instanceof sho.Readable,
            d = a === 401 || a === 403;
          if (!r && d && !m && u) return (await this.refreshAccessTokenAsync(), this.requestAsync(e, !0));
          if (!r && d && !m && c) {
            let f = await this.processAndValidateRefreshHandler();
            return (f?.access_token && this.setCredentials(f), this.requestAsync(e, !0));
          }
        }
        throw o;
      }
      return n;
    }
    verifyIdToken(e, r) {
      if (r && typeof r != "function")
        throw new Error(
          "This method accepts an options object as the first parameter, which includes the idToken, audience, and maxExpiry.",
        );
      if (r) this.verifyIdTokenAsync(e).then((n) => r(null, n), r);
      else return this.verifyIdTokenAsync(e);
    }
    async verifyIdTokenAsync(e) {
      if (!e.idToken) throw new Error("The verifyIdToken method requires an ID Token");
      let r = await this.getFederatedSignonCertsAsync();
      return await this.verifySignedJwtWithCertsAsync(e.idToken, r.certs, e.audience, this.issuers, e.maxExpiry);
    }
    async getTokenInfo(e) {
      let { data: r } = await this.transporter.request({
          ...t.RETRY_CONFIG,
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization: `Bearer ${e}` },
          url: this.endpoints.tokenInfoUrl.toString(),
        }),
        n = Object.assign({ expiry_date: new Date().getTime() + r.expires_in * 1e3, scopes: r.scope.split(" ") }, r);
      return (delete n.expires_in, delete n.scope, n);
    }
    getFederatedSignonCerts(e) {
      if (e) this.getFederatedSignonCertsAsync().then((r) => e(null, r.certs, r.res), e);
      else return this.getFederatedSignonCertsAsync();
    }
    async getFederatedSignonCertsAsync() {
      let e = new Date().getTime(),
        r = (0, pyt.hasBrowserCrypto)() ? dR.JWK : dR.PEM;
      if (this.certificateExpiry && e < this.certificateExpiry.getTime() && this.certificateCacheFormat === r)
        return { certs: this.certificateCache, format: r };
      let n, o;
      switch (r) {
        case dR.PEM:
          o = this.endpoints.oauth2FederatedSignonPemCertsUrl.toString();
          break;
        case dR.JWK:
          o = this.endpoints.oauth2FederatedSignonJwkCertsUrl.toString();
          break;
        default:
          throw new Error(`Unsupported certificate format ${r}`);
      }
      try {
        n = await this.transporter.request({ ...t.RETRY_CONFIG, url: o });
      } catch (m) {
        throw (m instanceof Error && (m.message = `Failed to retrieve verification certificates: ${m.message}`), m);
      }
      let s = n ? n.headers["cache-control"] : void 0,
        a = -1;
      if (s) {
        let d = new RegExp("max-age=([0-9]*)").exec(s);
        d && d.length === 2 && (a = Number(d[1]) * 1e3);
      }
      let u = {};
      switch (r) {
        case dR.PEM:
          u = n.data;
          break;
        case dR.JWK:
          for (let m of n.data.keys) u[m.kid] = m;
          break;
        default:
          throw new Error(`Unsupported certificate format ${r}`);
      }
      let c = new Date();
      return (
        (this.certificateExpiry = a === -1 ? null : new Date(c.getTime() + a)),
        (this.certificateCache = u),
        (this.certificateCacheFormat = r),
        { certs: u, format: r, res: n }
      );
    }
    getIapPublicKeys(e) {
      if (e) this.getIapPublicKeysAsync().then((r) => e(null, r.pubkeys, r.res), e);
      else return this.getIapPublicKeysAsync();
    }
    async getIapPublicKeysAsync() {
      let e,
        r = this.endpoints.oauth2IapPublicKeyUrl.toString();
      try {
        e = await this.transporter.request({ ...t.RETRY_CONFIG, url: r });
      } catch (n) {
        throw (n instanceof Error && (n.message = `Failed to retrieve verification certificates: ${n.message}`), n);
      }
      return { pubkeys: e.data, res: e };
    }
    verifySignedJwtWithCerts() {
      throw new Error("verifySignedJwtWithCerts is removed, please use verifySignedJwtWithCertsAsync instead.");
    }
    async verifySignedJwtWithCertsAsync(e, r, n, o, s) {
      let a = (0, pyt.createCrypto)();
      s || (s = t.DEFAULT_MAX_TOKEN_LIFETIME_SECS_);
      let u = e.split(".");
      if (u.length !== 3) throw new Error("Wrong number of segments in token: " + e);
      let c = u[0] + "." + u[1],
        m = u[2],
        d,
        f;
      try {
        d = JSON.parse(a.decodeBase64StringUtf8(u[0]));
      } catch (v) {
        throw (v instanceof Error && (v.message = `Can't parse token envelope: ${u[0]}': ${v.message}`), v);
      }
      if (!d) throw new Error("Can't parse token envelope: " + u[0]);
      try {
        f = JSON.parse(a.decodeBase64StringUtf8(u[1]));
      } catch (v) {
        throw (v instanceof Error && (v.message = `Can't parse token payload '${u[0]}`), v);
      }
      if (!f) throw new Error("Can't parse token payload: " + u[1]);
      if (!Object.prototype.hasOwnProperty.call(r, d.kid))
        throw new Error("No pem found for envelope: " + JSON.stringify(d));
      let p = r[d.kid];
      if ((d.alg === "ES256" && (m = aho.joseToDer(m, "ES256").toString("base64")), !(await a.verify(p, c, m))))
        throw new Error("Invalid token signature: " + e);
      if (!f.iat) throw new Error("No issue time in token: " + JSON.stringify(f));
      if (!f.exp) throw new Error("No expiration time in token: " + JSON.stringify(f));
      let g = Number(f.iat);
      if (isNaN(g)) throw new Error("iat field using invalid format");
      let b = Number(f.exp);
      if (isNaN(b)) throw new Error("exp field using invalid format");
      let A = new Date().getTime() / 1e3;
      if (b >= A + s) throw new Error("Expiration time too far in future: " + JSON.stringify(f));
      let y = g - t.CLOCK_SKEW_SECS_,
        E = b + t.CLOCK_SKEW_SECS_;
      if (A < y) throw new Error("Token used too early, " + A + " < " + y + ": " + JSON.stringify(f));
      if (A > E) throw new Error("Token used too late, " + A + " > " + E + ": " + JSON.stringify(f));
      if (o && o.indexOf(f.iss) < 0) throw new Error("Invalid issuer, expected one of [" + o + "], but got " + f.iss);
      if (typeof n < "u" && n !== null) {
        let v = f.aud,
          C = !1;
        if ((n.constructor === Array ? (C = n.indexOf(v) > -1) : (C = v === n), !C))
          throw new Error("Wrong recipient, payload audience != requiredAudience");
      }
      return new cho.LoginTicket(d, f);
    }
    async processAndValidateRefreshHandler() {
      if (this.refreshHandler) {
        let e = await this.refreshHandler();
        if (!e.access_token) throw new Error("No access token is returned by the refreshHandler callback.");
        return e;
      }
    }
    isTokenExpiring() {
      let e = this.credentials.expiry_date;
      return e ? e <= new Date().getTime() + this.eagerRefreshThresholdMillis : !1;
    }
  };
  ax.OAuth2Client = Mee;
  Mee.GOOGLE_TOKEN_INFO_URL = "https://oauth2.googleapis.com/tokeninfo";
  Mee.CLOCK_SKEW_SECS_ = 300;
  Mee.DEFAULT_MAX_TOKEN_LIFETIME_SECS_ = 86400;
});