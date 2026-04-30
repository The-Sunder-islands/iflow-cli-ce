/**
 * @module Pkr
 * @category security/jwt
 * @label jwt
 * @position 95 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pkr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pkr = T((fB) => {
  "use strict";
  var OC =
      (fB && fB.__classPrivateFieldGet) ||
      function (t, e, r, n) {
        if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
        if (typeof e == "function" ? t !== e || !n : !e.has(t))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
      },
    Tkr =
      (fB && fB.__classPrivateFieldSet) ||
      function (t, e, r, n, o) {
        if (n === "m") throw new TypeError("Private method is not writable");
        if (n === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
        if (typeof e == "function" ? t !== e || !o : !e.has(t))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (n === "a" ? o.call(t, r) : o ? (o.value = r) : e.set(t, r), r);
      },
    NC,
    Qee,
    Iyt,
    Dkr,
    Ikr,
    Ryt,
    kyt,
    Rkr;
  Object.defineProperty(fB, "__esModule", { value: !0 });
  fB.GoogleToken = void 0;
  var kkr = Ae("fs"),
    Jho = xC(),
    Xho = Dyt(),
    Zho = Ae("path"),
    e3o = Ae("util"),
    Okr = kkr.readFile
      ? (0, e3o.promisify)(kkr.readFile)
      : async () => {
          throw new CG("use key rather than keyFile.", "MISSING_CREDENTIALS");
        },
    Nkr = "https://www.googleapis.com/oauth2/v4/token",
    t3o = "https://accounts.google.com/o/oauth2/revoke?token=",
    CG = class extends Error {
      constructor(e, r) {
        (super(e), (this.code = r));
      }
    },
    Oyt = class {
      get accessToken() {
        return this.rawToken ? this.rawToken.access_token : void 0;
      }
      get idToken() {
        return this.rawToken ? this.rawToken.id_token : void 0;
      }
      get tokenType() {
        return this.rawToken ? this.rawToken.token_type : void 0;
      }
      get refreshToken() {
        return this.rawToken ? this.rawToken.refresh_token : void 0;
      }
      constructor(e) {
        (NC.add(this),
          (this.transporter = { request: (r) => (0, Jho.request)(r) }),
          Qee.set(this, void 0),
          OC(this, NC, "m", kyt).call(this, e));
      }
      hasExpired() {
        let e = new Date().getTime();
        return this.rawToken && this.expiresAt ? e >= this.expiresAt : !0;
      }
      isTokenExpiring() {
        var e;
        let r = new Date().getTime(),
          n = (e = this.eagerRefreshThresholdMillis) !== null && e !== void 0 ? e : 0;
        return this.rawToken && this.expiresAt ? this.expiresAt <= r + n : !0;
      }
      getToken(e, r = {}) {
        if ((typeof e == "object" && ((r = e), (e = void 0)), (r = Object.assign({ forceRefresh: !1 }, r)), e)) {
          let n = e;
          OC(this, NC, "m", Iyt)
            .call(this, r)
            .then((o) => n(null, o), e);
          return;
        }
        return OC(this, NC, "m", Iyt).call(this, r);
      }
      async getCredentials(e) {
        switch (Zho.extname(e)) {
          case ".json": {
            let n = await Okr(e, "utf8"),
              o = JSON.parse(n),
              s = o.private_key,
              a = o.client_email;
            if (!s || !a) throw new CG("private_key and client_email are required.", "MISSING_CREDENTIALS");
            return { privateKey: s, clientEmail: a };
          }
          case ".der":
          case ".crt":
          case ".pem":
            return { privateKey: await Okr(e, "utf8") };
          case ".p12":
          case ".pfx":
            throw new CG(
              "*.p12 certificates are not supported after v6.1.2. Consider utilizing *.json format or converting *.p12 to *.pem using the OpenSSL CLI.",
              "UNKNOWN_CERTIFICATE_TYPE",
            );
          default:
            throw new CG(
              "Unknown certificate type. Type is determined based on file extension. Current supported extensions are *.json, and *.pem.",
              "UNKNOWN_CERTIFICATE_TYPE",
            );
        }
      }
      revokeToken(e) {
        if (e) {
          OC(this, NC, "m", Ryt)
            .call(this)
            .then(() => e(), e);
          return;
        }
        return OC(this, NC, "m", Ryt).call(this);
      }
    };
  fB.GoogleToken = Oyt;
  ((Qee = new WeakMap()),
    (NC = new WeakSet()),
    (Iyt = async function (e) {
      if (OC(this, Qee, "f") && !e.forceRefresh) return OC(this, Qee, "f");
      try {
        return await Tkr(this, Qee, OC(this, NC, "m", Dkr).call(this, e), "f");
      } finally {
        Tkr(this, Qee, void 0, "f");
      }
    }),
    (Dkr = async function (e) {
      if (this.isTokenExpiring() === !1 && e.forceRefresh === !1) return Promise.resolve(this.rawToken);
      if (!this.key && !this.keyFile) throw new Error("No key or keyFile set.");
      if (!this.key && this.keyFile) {
        let r = await this.getCredentials(this.keyFile);
        ((this.key = r.privateKey),
          (this.iss = r.clientEmail || this.iss),
          r.clientEmail || OC(this, NC, "m", Ikr).call(this));
      }
      return OC(this, NC, "m", Rkr).call(this);
    }),
    (Ikr = function () {
      if (!this.iss) throw new CG("email is required.", "MISSING_CREDENTIALS");
    }),
    (Ryt = async function () {
      if (!this.accessToken) throw new Error("No token to revoke.");
      let e = t3o + this.accessToken;
      (await this.transporter.request({ url: e, retry: !0 }),
        OC(this, NC, "m", kyt).call(this, {
          email: this.iss,
          sub: this.sub,
          key: this.key,
          keyFile: this.keyFile,
          scope: this.scope,
          additionalClaims: this.additionalClaims,
        }));
    }),
    (kyt = function (e = {}) {
      ((this.keyFile = e.keyFile),
        (this.key = e.key),
        (this.rawToken = void 0),
        (this.iss = e.email || e.iss),
        (this.sub = e.sub),
        (this.additionalClaims = e.additionalClaims),
        typeof e.scope == "object" ? (this.scope = e.scope.join(" ")) : (this.scope = e.scope),
        (this.eagerRefreshThresholdMillis = e.eagerRefreshThresholdMillis),
        e.transporter && (this.transporter = e.transporter));
    }),
    (Rkr = async function () {
      var e, r;
      let n = Math.floor(new Date().getTime() / 1e3),
        o = this.additionalClaims || {},
        s = Object.assign({ iss: this.iss, scope: this.scope, aud: Nkr, exp: n + 3600, iat: n, sub: this.sub }, o),
        a = Xho.sign({ header: { alg: "RS256" }, payload: s, secret: this.key });
      try {
        let u = await this.transporter.request({
          method: "POST",
          url: Nkr,
          data: { grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: a },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          responseType: "json",
          retryConfig: { httpMethodsToRetry: ["POST"] },
        });
        return (
          (this.rawToken = u.data),
          (this.expiresAt =
            u.data.expires_in === null || u.data.expires_in === void 0 ? void 0 : (n + u.data.expires_in) * 1e3),
          this.rawToken
        );
      } catch (u) {
        ((this.rawToken = void 0), (this.tokenExpires = void 0));
        let c =
          u.response && !((e = u.response) === null || e === void 0) && e.data
            ? (r = u.response) === null || r === void 0
              ? void 0
              : r.data
            : {};
        if (c.error) {
          let m = c.error_description ? `: ${c.error_description}` : "";
          u.message = `${c.error}${m}`;
        }
        throw u;
      }
    }));
});