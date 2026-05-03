/**
 * @module Lyt
 * @category app/usage
 * @label iflow-usage
 * @position 97 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t extends o3o
 * Features: esbuild module exports: Lyt
 * === End semantic info ===
 */


var Lyt = T((Vke) => {
  "use strict";
  Object.defineProperty(Vke, "__esModule", { value: !0 });
  Vke.JWT = void 0;
  var Lkr = Pkr(),
    i3o = Pyt(),
    o3o = vG(),
    Hke = sx(),
    Byt = class t extends o3o.OAuth2Client {
      constructor(e, r, n, o, s, a) {
        let u = e && typeof e == "object" ? e : { email: e, keyFile: r, key: n, keyId: a, scopes: o, subject: s };
        (super(u),
          (this.email = u.email),
          (this.keyFile = u.keyFile),
          (this.key = u.key),
          (this.keyId = u.keyId),
          (this.scopes = u.scopes),
          (this.subject = u.subject),
          (this.additionalClaims = u.additionalClaims),
          (this.credentials = { refresh_token: "jwt-placeholder", expiry_date: 1 }));
      }
      createScoped(e) {
        let r = new t(this);
        return ((r.scopes = e), r);
      }
      async getRequestMetadataAsync(e) {
        e = this.defaultServicePath ? `https://${this.defaultServicePath}/` : e;
        let r =
          (!this.hasUserScopes() && e) ||
          (this.useJWTAccessWithScope && this.hasAnyScopes()) ||
          this.universeDomain !== Hke.DEFAULT_UNIVERSE;
        if (this.subject && this.universeDomain !== Hke.DEFAULT_UNIVERSE)
          throw new RangeError(
            `Service Account user is configured for the credential. Domain-wide delegation is not supported in universes other than ${Hke.DEFAULT_UNIVERSE}`,
          );
        if (!this.apiKey && r)
          if (this.additionalClaims && this.additionalClaims.target_audience) {
            let { tokens: n } = await this.refreshToken();
            return { headers: this.addSharedMetadataHeaders({ Authorization: `Bearer ${n.id_token}` }) };
          } else {
            this.access ||
              (this.access = new i3o.JWTAccess(this.email, this.key, this.keyId, this.eagerRefreshThresholdMillis));
            let n;
            this.hasUserScopes() ? (n = this.scopes) : e || (n = this.defaultScopes);
            let o = this.useJWTAccessWithScope || this.universeDomain !== Hke.DEFAULT_UNIVERSE,
              s = await this.access.getRequestHeaders(e ?? void 0, this.additionalClaims, o ? n : void 0);
            return { headers: this.addSharedMetadataHeaders(s) };
          }
        else return this.hasAnyScopes() || this.apiKey ? super.getRequestMetadataAsync(e) : { headers: {} };
      }
      async fetchIdToken(e) {
        let r = new Lkr.GoogleToken({
          iss: this.email,
          sub: this.subject,
          scope: this.scopes || this.defaultScopes,
          keyFile: this.keyFile,
          key: this.key,
          additionalClaims: { target_audience: e },
          transporter: this.transporter,
        });
        if ((await r.getToken({ forceRefresh: !0 }), !r.idToken))
          throw new Error("Unknown error: Failed to fetch ID token");
        return r.idToken;
      }
      hasUserScopes() {
        return this.scopes ? this.scopes.length > 0 : !1;
      }
      hasAnyScopes() {
        return !!((this.scopes && this.scopes.length > 0) || (this.defaultScopes && this.defaultScopes.length > 0));
      }
      authorize(e) {
        if (e) this.authorizeAsync().then((r) => e(null, r), e);
        else return this.authorizeAsync();
      }
      async authorizeAsync() {
        let e = await this.refreshToken();
        if (!e) throw new Error("No result returned");
        return (
          (this.credentials = e.tokens),
          (this.credentials.refresh_token = "jwt-placeholder"),
          (this.key = this.gtoken.key),
          (this.email = this.gtoken.iss),
          e.tokens
        );
      }
      async refreshTokenNoCache(e) {
        let r = this.createGToken(),
          o = {
            access_token: (await r.getToken({ forceRefresh: this.isTokenExpiring() })).access_token,
            token_type: "Bearer",
            expiry_date: r.expiresAt,
            id_token: r.idToken,
          };
        return (this.emit("tokens", o), { res: null, tokens: o });
      }
      createGToken() {
        return (
          this.gtoken ||
            (this.gtoken = new Lkr.GoogleToken({
              iss: this.email,
              sub: this.subject,
              scope: this.scopes || this.defaultScopes,
              keyFile: this.keyFile,
              key: this.key,
              additionalClaims: this.additionalClaims,
              transporter: this.transporter,
            })),
          this.gtoken
        );
      }
      fromJSON(e) {
        if (!e) throw new Error("Must pass in a JSON object containing the service account auth settings.");
        if (!e.client_email) throw new Error("The incoming JSON object does not contain a client_email field");
        if (!e.private_key) throw new Error("The incoming JSON object does not contain a private_key field");
        ((this.email = e.client_email),
          (this.key = e.private_key),
          (this.keyId = e.private_key_id),
          (this.projectId = e.project_id),
          (this.quotaProjectId = e.quota_project_id),
          (this.universeDomain = e.universe_domain || this.universeDomain));
      }
      fromStream(e, r) {
        if (r) this.fromStreamAsync(e).then(() => r(), r);
        else return this.fromStreamAsync(e);
      }
      fromStreamAsync(e) {
        return new Promise((r, n) => {
          if (!e) throw new Error("Must pass in a stream containing the service account auth settings.");
          let o = "";
          e.setEncoding("utf8")
            .on("error", n)
            .on("data", (s) => (o += s))
            .on("end", () => {
              try {
                let s = JSON.parse(o);
                (this.fromJSON(s), r());
              } catch (s) {
                n(s);
              }
            });
        });
      }
      fromAPIKey(e) {
        if (typeof e != "string") throw new Error("Must provide an API Key string.");
        this.apiKey = e;
      }
      async getCredentials() {
        if (this.key) return { private_key: this.key, client_email: this.email };
        if (this.keyFile) {
          let r = await this.createGToken().getCredentials(this.keyFile);
          return { private_key: r.privateKey, client_email: r.clientEmail };
        }
        throw new Error("A key or a keyFile must be provided to getCredentials.");
      }
    };
  Vke.JWT = Byt;
});