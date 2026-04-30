/**
 * @module pB
 * @category utils/oop
 * @label oop
 * @position 101 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pB) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pB = T((Dh) => {
  "use strict";
  var Hyt =
      (Dh && Dh.__classPrivateFieldGet) ||
      function (t, e, r, n) {
        if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
        if (typeof e == "function" ? t !== e || !n : !e.has(t))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
      },
    $kr =
      (Dh && Dh.__classPrivateFieldSet) ||
      function (t, e, r, n, o) {
        if (n === "m") throw new TypeError("Private method is not writable");
        if (n === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
        if (typeof e == "function" ? t !== e || !o : !e.has(t))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (n === "a" ? o.call(t, r) : o ? (o.value = r) : e.set(t, r), r);
      },
    Vyt,
    Hee,
    Qkr;
  Object.defineProperty(Dh, "__esModule", { value: !0 });
  Dh.BaseExternalAccountClient =
    Dh.DEFAULT_UNIVERSE =
    Dh.CLOUD_RESOURCE_MANAGER =
    Dh.EXTERNAL_ACCOUNT_TYPE =
    Dh.EXPIRATION_TIME_OFFSET =
      void 0;
  var g3o = Ae("stream"),
    b3o = sx(),
    A3o = qyt(),
    jkr = mB(),
    y3o = "urn:ietf:params:oauth:grant-type:token-exchange",
    _3o = "urn:ietf:params:oauth:token-type:access_token",
    Wyt = "https://www.googleapis.com/auth/cloud-platform",
    E3o = 3600;
  Dh.EXPIRATION_TIME_OFFSET = 300 * 1e3;
  Dh.EXTERNAL_ACCOUNT_TYPE = "external_account";
  Dh.CLOUD_RESOURCE_MANAGER = "https://cloudresourcemanager.googleapis.com/v1/projects/";
  var v3o = "//iam\\.googleapis\\.com/locations/[^/]+/workforcePools/[^/]+/providers/.+",
    C3o = "https://sts.{universeDomain}/v1/token",
    S3o = nyt(),
    w3o = sx();
  Object.defineProperty(Dh, "DEFAULT_UNIVERSE", {
    enumerable: !0,
    get: function () {
      return w3o.DEFAULT_UNIVERSE;
    },
  });
  var zyt = class t extends b3o.AuthClient {
    constructor(e, r) {
      var n;
      (super({ ...e, ...r }), Vyt.add(this), Hee.set(this, null));
      let o = (0, jkr.originalOrCamelOptions)(e),
        s = o.get("type");
      if (s && s !== Dh.EXTERNAL_ACCOUNT_TYPE)
        throw new Error(`Expected "${Dh.EXTERNAL_ACCOUNT_TYPE}" type but received "${e.type}"`);
      let a = o.get("client_id"),
        u = o.get("client_secret"),
        c =
          (n = o.get("token_url")) !== null && n !== void 0 ? n : C3o.replace("{universeDomain}", this.universeDomain),
        m = o.get("subject_token_type"),
        d = o.get("workforce_pool_user_project"),
        f = o.get("service_account_impersonation_url"),
        p = o.get("service_account_impersonation"),
        h = (0, jkr.originalOrCamelOptions)(p).get("token_lifetime_seconds");
      ((this.cloudResourceManagerURL = new URL(
        o.get("cloud_resource_manager_url") || `https://cloudresourcemanager.${this.universeDomain}/v1/projects/`,
      )),
        a && (this.clientAuth = { confidentialClientType: "basic", clientId: a, clientSecret: u }),
        (this.stsCredential = new A3o.StsCredentials(c, this.clientAuth)),
        (this.scopes = o.get("scopes") || [Wyt]),
        (this.cachedAccessToken = null),
        (this.audience = o.get("audience")),
        (this.subjectTokenType = m),
        (this.workforcePoolUserProject = d));
      let g = new RegExp(v3o);
      if (this.workforcePoolUserProject && !this.audience.match(g))
        throw new Error("workforcePoolUserProject should not be set for non-workforce pool credentials.");
      ((this.serviceAccountImpersonationUrl = f),
        (this.serviceAccountImpersonationLifetime = h),
        this.serviceAccountImpersonationLifetime
          ? (this.configLifetimeRequested = !0)
          : ((this.configLifetimeRequested = !1), (this.serviceAccountImpersonationLifetime = E3o)),
        (this.projectNumber = this.getProjectNumber(this.audience)),
        (this.supplierContext = {
          audience: this.audience,
          subjectTokenType: this.subjectTokenType,
          transporter: this.transporter,
        }));
    }
    getServiceAccountEmail() {
      var e;
      if (this.serviceAccountImpersonationUrl) {
        if (this.serviceAccountImpersonationUrl.length > 256)
          throw new RangeError(`URL is too long: ${this.serviceAccountImpersonationUrl}`);
        let n = /serviceAccounts\/(?<email>[^:]+):generateAccessToken$/.exec(this.serviceAccountImpersonationUrl);
        return ((e = n?.groups) === null || e === void 0 ? void 0 : e.email) || null;
      }
      return null;
    }
    setCredentials(e) {
      (super.setCredentials(e), (this.cachedAccessToken = e));
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
    async getProjectId() {
      let e = this.projectNumber || this.workforcePoolUserProject;
      if (this.projectId) return this.projectId;
      if (e) {
        let r = await this.getRequestHeaders(),
          n = await this.transporter.request({
            ...t.RETRY_CONFIG,
            headers: r,
            url: `${this.cloudResourceManagerURL.toString()}${e}`,
            responseType: "json",
          });
        return ((this.projectId = n.data.projectId), this.projectId);
      }
      return null;
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
            u = s.config.data instanceof g3o.Readable;
          if (!r && (a === 401 || a === 403) && !u && this.forceRefreshOnFailure)
            return (await this.refreshAccessTokenAsync(), await this.requestAsync(e, !0));
        }
        throw o;
      }
      return n;
    }
    async refreshAccessTokenAsync() {
      $kr(this, Hee, Hyt(this, Hee, "f") || Hyt(this, Vyt, "m", Qkr).call(this), "f");
      try {
        return await Hyt(this, Hee, "f");
      } finally {
        $kr(this, Hee, null, "f");
      }
    }
    getProjectNumber(e) {
      let r = e.match(/\/projects\/([^/]+)/);
      return r ? r[1] : null;
    }
    async getImpersonatedAccessToken(e) {
      let r = {
          ...t.RETRY_CONFIG,
          url: this.serviceAccountImpersonationUrl,
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${e}` },
          data: { scope: this.getScopesArray(), lifetime: this.serviceAccountImpersonationLifetime + "s" },
          responseType: "json",
        },
        n = await this.transporter.request(r),
        o = n.data;
      return { access_token: o.accessToken, expiry_date: new Date(o.expireTime).getTime(), res: n };
    }
    isExpired(e) {
      let r = new Date().getTime();
      return e.expiry_date ? r >= e.expiry_date - this.eagerRefreshThresholdMillis : !1;
    }
    getScopesArray() {
      return typeof this.scopes == "string" ? [this.scopes] : this.scopes || [Wyt];
    }
    getMetricsHeaderValue() {
      let e = process.version.replace(/^v/, ""),
        r = this.serviceAccountImpersonationUrl !== void 0,
        n = this.credentialSourceType ? this.credentialSourceType : "unknown";
      return `gl-node/${e} auth/${S3o.version} google-byoid-sdk source/${n} sa-impersonation/${r} config-lifetime/${this.configLifetimeRequested}`;
    }
  };
  Dh.BaseExternalAccountClient = zyt;
  ((Hee = new WeakMap()),
    (Vyt = new WeakSet()),
    (Qkr = async function () {
      let e = await this.retrieveSubjectToken(),
        r = {
          grantType: y3o,
          audience: this.audience,
          requestedTokenType: _3o,
          subjectToken: e,
          subjectTokenType: this.subjectTokenType,
          scope: this.serviceAccountImpersonationUrl ? [Wyt] : this.getScopesArray(),
        },
        n = !this.clientAuth && this.workforcePoolUserProject ? { userProject: this.workforcePoolUserProject } : void 0,
        o = { "x-goog-api-client": this.getMetricsHeaderValue() },
        s = await this.stsCredential.exchangeToken(r, o, n);
      return (
        this.serviceAccountImpersonationUrl
          ? (this.cachedAccessToken = await this.getImpersonatedAccessToken(s.access_token))
          : s.expires_in
            ? (this.cachedAccessToken = {
                access_token: s.access_token,
                expiry_date: new Date().getTime() + s.expires_in * 1e3,
                res: s.res,
              })
            : (this.cachedAccessToken = { access_token: s.access_token, res: s.res }),
        (this.credentials = {}),
        Object.assign(this.credentials, this.cachedAccessToken),
        delete this.credentials.res,
        this.emit("tokens", {
          refresh_token: null,
          expiry_date: this.cachedAccessToken.expiry_date,
          access_token: this.cachedAccessToken.access_token,
          token_type: "Bearer",
          id_token: null,
        }),
        this.cachedAccessToken
      );
    }));
});