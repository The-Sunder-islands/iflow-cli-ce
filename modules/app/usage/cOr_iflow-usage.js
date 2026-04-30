/**
 * @module cOr
 * @category app/usage
 * @label iflow-usage
 * @position 113 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cOr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cOr = T((Y3) => {
  "use strict";
  var hB =
      (Y3 && Y3.__classPrivateFieldGet) ||
      function (t, e, r, n) {
        if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
        if (typeof e == "function" ? t !== e || !n : !e.has(t))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
      },
    iOr =
      (Y3 && Y3.__classPrivateFieldSet) ||
      function (t, e, r, n, o) {
        if (n === "m") throw new TypeError("Private method is not writable");
        if (n === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
        if (typeof e == "function" ? t !== e || !o : !e.has(t))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (n === "a" ? o.call(t, r) : o ? (o.value = r) : e.set(t, r), r);
      },
    gB,
    Zee,
    ete,
    uOr;
  Object.defineProperty(Y3, "__esModule", { value: !0 });
  Y3.GoogleAuth = Y3.GoogleAuthExceptionMessages = Y3.CLOUD_SDK_CLIENT_ID = void 0;
  var tgo = Ae("child_process"),
    S3e = Ae("fs"),
    v3e = m3e(),
    rgo = Ae("os"),
    S_t = Ae("path"),
    ngo = Pee(),
    igo = f3e(),
    ogo = gyt(),
    sgo = Ayt(),
    ago = yyt(),
    Jee = Lyt(),
    oOr = Fyt(),
    Xee = $yt(),
    ugo = __t(),
    C3e = pB(),
    C_t = sx(),
    sOr = nOr(),
    aOr = mB();
  Y3.CLOUD_SDK_CLIENT_ID = "764086051850-6qr4p6gpi6hn506pt8ejuq83di341hur.apps.googleusercontent.com";
  Y3.GoogleAuthExceptionMessages = {
    API_KEY_WITH_CREDENTIALS:
      "API Keys and Credentials are mutually exclusive authentication methods and cannot be used together.",
    NO_PROJECT_ID_FOUND: `Unable to detect a Project Id in the current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
    NO_CREDENTIALS_FOUND: `Unable to find credentials in current environment. 
To learn more about authentication and Google APIs, visit: 
https://cloud.google.com/docs/authentication/getting-started`,
    NO_ADC_FOUND:
      "Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.",
    NO_UNIVERSE_DOMAIN_FOUND: `Unable to detect a Universe Domain in the current environment.
To learn more about Universe Domain retrieval, visit: 
https://cloud.google.com/compute/docs/metadata/predefined-metadata-keys`,
  };
  var lOe = class {
    get isGCE() {
      return this.checkIsGCE;
    }
    constructor(e = {}) {
      if (
        (gB.add(this),
        (this.checkIsGCE = void 0),
        (this.jsonContent = null),
        (this.cachedCredential = null),
        Zee.set(this, null),
        (this.clientOptions = {}),
        (this._cachedProjectId = e.projectId || null),
        (this.cachedCredential = e.authClient || null),
        (this.keyFilename = e.keyFilename || e.keyFile),
        (this.scopes = e.scopes),
        (this.clientOptions = e.clientOptions || {}),
        (this.jsonContent = e.credentials || null),
        (this.apiKey = e.apiKey || this.clientOptions.apiKey || null),
        this.apiKey && (this.jsonContent || this.clientOptions.credentials))
      )
        throw new RangeError(Y3.GoogleAuthExceptionMessages.API_KEY_WITH_CREDENTIALS);
      e.universeDomain && (this.clientOptions.universeDomain = e.universeDomain);
    }
    setGapicJWTValues(e) {
      ((e.defaultServicePath = this.defaultServicePath),
        (e.useJWTAccessWithScope = this.useJWTAccessWithScope),
        (e.defaultScopes = this.defaultScopes));
    }
    getProjectId(e) {
      if (e) this.getProjectIdAsync().then((r) => e(null, r), e);
      else return this.getProjectIdAsync();
    }
    async getProjectIdOptional() {
      try {
        return await this.getProjectId();
      } catch (e) {
        if (e instanceof Error && e.message === Y3.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND) return null;
        throw e;
      }
    }
    async findAndCacheProjectId() {
      let e = null;
      if (
        (e || (e = await this.getProductionProjectId()),
        e || (e = await this.getFileProjectId()),
        e || (e = await this.getDefaultServiceProjectId()),
        e || (e = await this.getGCEProjectId()),
        e || (e = await this.getExternalAccountClientProjectId()),
        e)
      )
        return ((this._cachedProjectId = e), e);
      throw new Error(Y3.GoogleAuthExceptionMessages.NO_PROJECT_ID_FOUND);
    }
    async getProjectIdAsync() {
      return this._cachedProjectId
        ? this._cachedProjectId
        : (this._findProjectIdPromise || (this._findProjectIdPromise = this.findAndCacheProjectId()),
          this._findProjectIdPromise);
    }
    async getUniverseDomainFromMetadataServer() {
      var e;
      let r;
      try {
        ((r = await v3e.universe("universe-domain")), r || (r = C_t.DEFAULT_UNIVERSE));
      } catch (n) {
        if (n && ((e = n?.response) === null || e === void 0 ? void 0 : e.status) === 404) r = C_t.DEFAULT_UNIVERSE;
        else throw n;
      }
      return r;
    }
    async getUniverseDomain() {
      let e = (0, aOr.originalOrCamelOptions)(this.clientOptions).get("universe_domain");
      try {
        e ?? (e = (await this.getClient()).universeDomain);
      } catch {
        e ?? (e = C_t.DEFAULT_UNIVERSE);
      }
      return e;
    }
    getAnyScopes() {
      return this.scopes || this.defaultScopes;
    }
    getApplicationDefault(e = {}, r) {
      let n;
      if ((typeof e == "function" ? (r = e) : (n = e), r))
        this.getApplicationDefaultAsync(n).then((o) => r(null, o.credential, o.projectId), r);
      else return this.getApplicationDefaultAsync(n);
    }
    async getApplicationDefaultAsync(e = {}) {
      if (this.cachedCredential) return await hB(this, gB, "m", ete).call(this, this.cachedCredential, null);
      let r;
      if (((r = await this._tryGetApplicationCredentialsFromEnvironmentVariable(e)), r))
        return (
          r instanceof Jee.JWT
            ? (r.scopes = this.scopes)
            : r instanceof C3e.BaseExternalAccountClient && (r.scopes = this.getAnyScopes()),
          await hB(this, gB, "m", ete).call(this, r)
        );
      if (((r = await this._tryGetApplicationCredentialsFromWellKnownFile(e)), r))
        return (
          r instanceof Jee.JWT
            ? (r.scopes = this.scopes)
            : r instanceof C3e.BaseExternalAccountClient && (r.scopes = this.getAnyScopes()),
          await hB(this, gB, "m", ete).call(this, r)
        );
      if (await this._checkIsGCE())
        return ((e.scopes = this.getAnyScopes()), await hB(this, gB, "m", ete).call(this, new ogo.Compute(e)));
      throw new Error(Y3.GoogleAuthExceptionMessages.NO_ADC_FOUND);
    }
    async _checkIsGCE() {
      return (
        this.checkIsGCE === void 0 && (this.checkIsGCE = v3e.getGCPResidency() || (await v3e.isAvailable())),
        this.checkIsGCE
      );
    }
    async _tryGetApplicationCredentialsFromEnvironmentVariable(e) {
      let r = process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.google_application_credentials;
      if (!r || r.length === 0) return null;
      try {
        return this._getApplicationCredentialsFromFilePath(r, e);
      } catch (n) {
        throw (
          n instanceof Error &&
            (n.message = `Unable to read the credential file specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable: ${n.message}`),
          n
        );
      }
    }
    async _tryGetApplicationCredentialsFromWellKnownFile(e) {
      let r = null;
      if (this._isWindows()) r = process.env.APPDATA;
      else {
        let o = process.env.HOME;
        o && (r = S_t.join(o, ".config"));
      }
      return (
        r && ((r = S_t.join(r, "gcloud", "application_default_credentials.json")), S3e.existsSync(r) || (r = null)),
        r ? await this._getApplicationCredentialsFromFilePath(r, e) : null
      );
    }
    async _getApplicationCredentialsFromFilePath(e, r = {}) {
      if (!e || e.length === 0) throw new Error("The file path is invalid.");
      try {
        if (((e = S3e.realpathSync(e)), !S3e.lstatSync(e).isFile())) throw new Error();
      } catch (o) {
        throw (
          o instanceof Error && (o.message = `The file at ${e} does not exist, or it is not a file. ${o.message}`),
          o
        );
      }
      let n = S3e.createReadStream(e);
      return this.fromStream(n, r);
    }
    fromImpersonatedJSON(e) {
      var r, n, o, s;
      if (!e) throw new Error("Must pass in a JSON object containing an  impersonated refresh token");
      if (e.type !== Xee.IMPERSONATED_ACCOUNT_TYPE)
        throw new Error(`The incoming JSON object does not have the "${Xee.IMPERSONATED_ACCOUNT_TYPE}" type`);
      if (!e.source_credentials)
        throw new Error("The incoming JSON object does not contain a source_credentials field");
      if (!e.service_account_impersonation_url)
        throw new Error("The incoming JSON object does not contain a service_account_impersonation_url field");
      let a = this.fromJSON(e.source_credentials);
      if (((r = e.service_account_impersonation_url) === null || r === void 0 ? void 0 : r.length) > 256)
        throw new RangeError(`Target principal is too long: ${e.service_account_impersonation_url}`);
      let u =
        (o =
          (n = /(?<target>[^/]+):(generateAccessToken|generateIdToken)$/.exec(e.service_account_impersonation_url)) ===
            null || n === void 0
            ? void 0
            : n.groups) === null || o === void 0
          ? void 0
          : o.target;
      if (!u) throw new RangeError(`Cannot extract target principal from ${e.service_account_impersonation_url}`);
      let c = (s = this.getAnyScopes()) !== null && s !== void 0 ? s : [];
      return new Xee.Impersonated({
        ...e,
        sourceClient: a,
        targetPrincipal: u,
        targetScopes: Array.isArray(c) ? c : [c],
      });
    }
    fromJSON(e, r = {}) {
      let n,
        o = (0, aOr.originalOrCamelOptions)(r).get("universe_domain");
      return (
        e.type === oOr.USER_REFRESH_ACCOUNT_TYPE
          ? ((n = new oOr.UserRefreshClient(r)), n.fromJSON(e))
          : e.type === Xee.IMPERSONATED_ACCOUNT_TYPE
            ? (n = this.fromImpersonatedJSON(e))
            : e.type === C3e.EXTERNAL_ACCOUNT_TYPE
              ? ((n = ugo.ExternalAccountClient.fromJSON(e, r)), (n.scopes = this.getAnyScopes()))
              : e.type === sOr.EXTERNAL_ACCOUNT_AUTHORIZED_USER_TYPE
                ? (n = new sOr.ExternalAccountAuthorizedUserClient(e, r))
                : ((r.scopes = this.scopes), (n = new Jee.JWT(r)), this.setGapicJWTValues(n), n.fromJSON(e)),
        o && (n.universeDomain = o),
        n
      );
    }
    _cacheClientFromJSON(e, r) {
      let n = this.fromJSON(e, r);
      return ((this.jsonContent = e), (this.cachedCredential = n), n);
    }
    fromStream(e, r = {}, n) {
      let o = {};
      if ((typeof r == "function" ? (n = r) : (o = r), n)) this.fromStreamAsync(e, o).then((s) => n(null, s), n);
      else return this.fromStreamAsync(e, o);
    }
    fromStreamAsync(e, r) {
      return new Promise((n, o) => {
        if (!e) throw new Error("Must pass in a stream containing the Google auth settings.");
        let s = [];
        e.setEncoding("utf8")
          .on("error", o)
          .on("data", (a) => s.push(a))
          .on("end", () => {
            try {
              try {
                let a = JSON.parse(s.join("")),
                  u = this._cacheClientFromJSON(a, r);
                return n(u);
              } catch (a) {
                if (!this.keyFilename) throw a;
                let u = new Jee.JWT({ ...this.clientOptions, keyFile: this.keyFilename });
                return ((this.cachedCredential = u), this.setGapicJWTValues(u), n(u));
              }
            } catch (a) {
              return o(a);
            }
          });
      });
    }
    fromAPIKey(e, r = {}) {
      return new Jee.JWT({ ...r, apiKey: e });
    }
    _isWindows() {
      let e = rgo.platform();
      return !!(e && e.length >= 3 && e.substring(0, 3).toLowerCase() === "win");
    }
    async getDefaultServiceProjectId() {
      return new Promise((e) => {
        (0, tgo.exec)("gcloud config config-helper --format json", (r, n) => {
          if (!r && n)
            try {
              let o = JSON.parse(n).configuration.properties.core.project;
              e(o);
              return;
            } catch {}
          e(null);
        });
      });
    }
    getProductionProjectId() {
      return (
        process.env.GCLOUD_PROJECT ||
        process.env.GOOGLE_CLOUD_PROJECT ||
        process.env.gcloud_project ||
        process.env.google_cloud_project
      );
    }
    async getFileProjectId() {
      if (this.cachedCredential) return this.cachedCredential.projectId;
      if (this.keyFilename) {
        let r = await this.getClient();
        if (r && r.projectId) return r.projectId;
      }
      let e = await this._tryGetApplicationCredentialsFromEnvironmentVariable();
      return e ? e.projectId : null;
    }
    async getExternalAccountClientProjectId() {
      return !this.jsonContent || this.jsonContent.type !== C3e.EXTERNAL_ACCOUNT_TYPE
        ? null
        : await (await this.getClient()).getProjectId();
    }
    async getGCEProjectId() {
      try {
        return await v3e.project("project-id");
      } catch {
        return null;
      }
    }
    getCredentials(e) {
      if (e) this.getCredentialsAsync().then((r) => e(null, r), e);
      else return this.getCredentialsAsync();
    }
    async getCredentialsAsync() {
      let e = await this.getClient();
      if (e instanceof Xee.Impersonated) return { client_email: e.getTargetPrincipal() };
      if (e instanceof C3e.BaseExternalAccountClient) {
        let r = e.getServiceAccountEmail();
        if (r) return { client_email: r, universe_domain: e.universeDomain };
      }
      if (this.jsonContent)
        return {
          client_email: this.jsonContent.client_email,
          private_key: this.jsonContent.private_key,
          universe_domain: this.jsonContent.universe_domain,
        };
      if (await this._checkIsGCE()) {
        let [r, n] = await Promise.all([v3e.instance("service-accounts/default/email"), this.getUniverseDomain()]);
        return { client_email: r, universe_domain: n };
      }
      throw new Error(Y3.GoogleAuthExceptionMessages.NO_CREDENTIALS_FOUND);
    }
    async getClient() {
      if (this.cachedCredential) return this.cachedCredential;
      iOr(this, Zee, hB(this, Zee, "f") || hB(this, gB, "m", uOr).call(this), "f");
      try {
        return await hB(this, Zee, "f");
      } finally {
        iOr(this, Zee, null, "f");
      }
    }
    async getIdTokenClient(e) {
      let r = await this.getClient();
      if (!("fetchIdToken" in r))
        throw new Error(
          "Cannot fetch ID token in this environment, use GCE or set the GOOGLE_APPLICATION_CREDENTIALS environment variable to a service account credentials JSON file.",
        );
      return new sgo.IdTokenClient({ targetAudience: e, idTokenProvider: r });
    }
    async getAccessToken() {
      return (await (await this.getClient()).getAccessToken()).token;
    }
    async getRequestHeaders(e) {
      return (await this.getClient()).getRequestHeaders(e);
    }
    async authorizeRequest(e) {
      e = e || {};
      let r = e.url || e.uri,
        o = await (await this.getClient()).getRequestHeaders(r);
      return ((e.headers = Object.assign(e.headers || {}, o)), e);
    }
    async request(e) {
      return (await this.getClient()).request(e);
    }
    getEnv() {
      return (0, ago.getEnv)();
    }
    async sign(e, r) {
      let n = await this.getClient(),
        o = await this.getUniverseDomain();
      if (((r = r || `https://iamcredentials.${o}/v1/projects/-/serviceAccounts/`), n instanceof Xee.Impersonated))
        return (await n.sign(e)).signedBlob;
      let s = (0, ngo.createCrypto)();
      if (n instanceof Jee.JWT && n.key) return await s.sign(n.key, e);
      let a = await this.getCredentials();
      if (!a.client_email) throw new Error("Cannot sign data without `client_email`.");
      return this.signBlob(s, a.client_email, e, r);
    }
    async signBlob(e, r, n, o) {
      let s = new URL(o + `${r}:signBlob`);
      return (
        await this.request({
          method: "POST",
          url: s.href,
          data: { payload: e.encodeBase64StringUtf8(n) },
          retry: !0,
          retryConfig: { httpMethodsToRetry: ["POST"] },
        })
      ).data.signedBlob;
    }
  };
  Y3.GoogleAuth = lOe;
  ((Zee = new WeakMap()),
    (gB = new WeakSet()),
    (ete = async function (e, r = process.env.GOOGLE_CLOUD_QUOTA_PROJECT || null) {
      let n = await this.getProjectIdOptional();
      return (r && (e.quotaProjectId = r), (this.cachedCredential = e), { credential: e, projectId: n });
    }),
    (uOr = async function () {
      if (this.jsonContent) return this._cacheClientFromJSON(this.jsonContent, this.clientOptions);
      if (this.keyFilename) {
        let e = S_t.resolve(this.keyFilename),
          r = S3e.createReadStream(e);
        return await this.fromStreamAsync(r, this.clientOptions);
      } else if (this.apiKey) {
        let e = await this.fromAPIKey(this.apiKey, this.clientOptions);
        e.scopes = this.scopes;
        let { credential: r } = await hB(this, gB, "m", ete).call(this, e);
        return r;
      } else {
        let { credential: e } = await this.getApplicationDefaultAsync(this.clientOptions);
        return e;
      }
    }));
  lOe.DefaultTransporter = igo.DefaultTransporter;
});