/**
 * @module H4i
 * @category network/http
 * @label ky
 * @position 1813 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (H4i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var H4i = T((q4i) => {
  "use strict";
  var yUa = (_v(), bt(_N)),
    ej = vA(),
    u2r = aI(),
    _Ua = Tc(),
    o1t = Ae("node:crypto"),
    s2r = Ae("node:fs"),
    EUa = Ae("node:os"),
    a2r = Ae("node:path"),
    c2r = class t {
      profileData;
      init;
      callerClientConfig;
      static REFRESH_THRESHOLD = 300 * 1e3;
      constructor(e, r, n) {
        ((this.profileData = e), (this.init = r), (this.callerClientConfig = n));
      }
      async loadCredentials() {
        let e = await this.loadToken();
        if (!e)
          throw new ej.CredentialsProviderError(
            `Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`,
            { tryNextLink: !1, logger: this.logger },
          );
        let r = e.accessToken,
          n = Date.now();
        return new Date(r.expiresAt).getTime() - n <= t.REFRESH_THRESHOLD
          ? this.refresh(e)
          : {
              accessKeyId: r.accessKeyId,
              secretAccessKey: r.secretAccessKey,
              sessionToken: r.sessionToken,
              accountId: r.accountId,
              expiration: new Date(r.expiresAt),
            };
      }
      get logger() {
        return this.init?.logger;
      }
      get loginSession() {
        return this.profileData.login_session;
      }
      async refresh(e) {
        let { SigninClient: r, CreateOAuth2TokenCommand: n } = await Promise.resolve().then(() => (G4i(), Q4i)),
          { logger: o, userAgentAppId: s } = this.callerClientConfig ?? {},
          u = ((f) => f?.metadata?.handlerProtocol === "h2")(this.callerClientConfig?.requestHandler)
            ? void 0
            : this.callerClientConfig?.requestHandler,
          c = this.profileData.region ?? (await this.callerClientConfig?.region?.()) ?? process.env.AWS_REGION,
          m = new r({
            credentials: { accessKeyId: "", secretAccessKey: "" },
            region: c,
            requestHandler: u,
            logger: o,
            userAgentAppId: s,
            ...this.init?.clientConfig,
          });
        this.createDPoPInterceptor(m.middlewareStack);
        let d = { tokenInput: { clientId: e.clientId, refreshToken: e.refreshToken, grantType: "refresh_token" } };
        try {
          let f = await m.send(new n(d)),
            { accessKeyId: p, secretAccessKey: h, sessionToken: g } = f.tokenOutput?.accessToken ?? {},
            { refreshToken: b, expiresIn: A } = f.tokenOutput ?? {};
          if (!p || !h || !g || !b)
            throw new ej.CredentialsProviderError("Token refresh response missing required fields", {
              logger: this.logger,
              tryNextLink: !1,
            });
          let y = (A ?? 900) * 1e3,
            E = new Date(Date.now() + y),
            v = {
              ...e,
              accessToken: {
                ...e.accessToken,
                accessKeyId: p,
                secretAccessKey: h,
                sessionToken: g,
                expiresAt: E.toISOString(),
              },
              refreshToken: b,
            };
          await this.saveToken(v);
          let C = v.accessToken;
          return {
            accessKeyId: C.accessKeyId,
            secretAccessKey: C.secretAccessKey,
            sessionToken: C.sessionToken,
            accountId: C.accountId,
            expiration: E,
          };
        } catch (f) {
          if (f.name === "AccessDeniedException") {
            let p = f.error,
              h;
            switch (p) {
              case "TOKEN_EXPIRED":
                h = "Your session has expired. Please reauthenticate.";
                break;
              case "USER_CREDENTIALS_CHANGED":
                h =
                  "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
                break;
              case "INSUFFICIENT_PERMISSIONS":
                h =
                  "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
                break;
              default:
                h = `Failed to refresh token: ${String(f)}. Please re-authenticate using \`aws login\``;
            }
            throw new ej.CredentialsProviderError(h, { logger: this.logger, tryNextLink: !1 });
          }
          throw new ej.CredentialsProviderError(
            `Failed to refresh token: ${String(f)}. Please re-authenticate using aws login`,
            { logger: this.logger },
          );
        }
      }
      async loadToken() {
        let e = this.getTokenFilePath();
        try {
          let r;
          try {
            r = await u2r.readFile(e, { ignoreCache: this.init?.ignoreCache });
          } catch {
            r = await s2r.promises.readFile(e, "utf8");
          }
          let n = JSON.parse(r),
            o = ["accessToken", "clientId", "refreshToken", "dpopKey"].filter((s) => !n[s]);
          if ((n.accessToken?.accountId || o.push("accountId"), o.length > 0))
            throw new ej.CredentialsProviderError(`Token validation failed, missing fields: ${o.join(", ")}`, {
              logger: this.logger,
              tryNextLink: !1,
            });
          return n;
        } catch (r) {
          throw new ej.CredentialsProviderError(`Failed to load token from ${e}: ${String(r)}`, {
            logger: this.logger,
            tryNextLink: !1,
          });
        }
      }
      async saveToken(e) {
        let r = this.getTokenFilePath(),
          n = a2r.dirname(r);
        try {
          await s2r.promises.mkdir(n, { recursive: !0 });
        } catch {}
        await s2r.promises.writeFile(r, JSON.stringify(e, null, 2), "utf8");
      }
      getTokenFilePath() {
        let e = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? a2r.join(EUa.homedir(), ".aws", "login", "cache"),
          r = Buffer.from(this.loginSession, "utf8"),
          n = o1t.createHash("sha256").update(r).digest("hex");
        return a2r.join(e, `${n}.json`);
      }
      derToRawSignature(e) {
        let r = 2;
        if (e[r] !== 2) throw new Error("Invalid DER signature");
        r++;
        let n = e[r++],
          o = e.subarray(r, r + n);
        if (((r += n), e[r] !== 2)) throw new Error("Invalid DER signature");
        r++;
        let s = e[r++],
          a = e.subarray(r, r + s);
        ((o = o[0] === 0 ? o.subarray(1) : o), (a = a[0] === 0 ? a.subarray(1) : a));
        let u = Buffer.concat([Buffer.alloc(32 - o.length), o]),
          c = Buffer.concat([Buffer.alloc(32 - a.length), a]);
        return Buffer.concat([u, c]);
      }
      createDPoPInterceptor(e) {
        e.add(
          (r) => async (n) => {
            if (_Ua.HttpRequest.isInstance(n.request)) {
              let o = n.request,
                s = `${o.protocol}//${o.hostname}${o.port ? `:${o.port}` : ""}${o.path}`,
                a = await this.generateDpop(o.method, s);
              o.headers = { ...o.headers, DPoP: a };
            }
            return r(n);
          },
          { step: "finalizeRequest", name: "dpopInterceptor", override: !0 },
        );
      }
      async generateDpop(e = "POST", r) {
        let n = await this.loadToken();
        try {
          let o = o1t.createPrivateKey({ key: n.dpopKey, format: "pem", type: "sec1" }),
            a = o1t.createPublicKey(o).export({ format: "der", type: "spki" }),
            u = -1;
          for (let E = 0; E < a.length; E++)
            if (a[E] === 4) {
              u = E;
              break;
            }
          let c = a.slice(u + 1, u + 33),
            m = a.slice(u + 33, u + 65),
            d = {
              alg: "ES256",
              typ: "dpop+jwt",
              jwk: { kty: "EC", crv: "P-256", x: c.toString("base64url"), y: m.toString("base64url") },
            },
            f = { jti: crypto.randomUUID(), htm: e, htu: r, iat: Math.floor(Date.now() / 1e3) },
            p = Buffer.from(JSON.stringify(d)).toString("base64url"),
            h = Buffer.from(JSON.stringify(f)).toString("base64url"),
            g = `${p}.${h}`,
            b = o1t.sign("sha256", Buffer.from(g), o),
            y = this.derToRawSignature(b).toString("base64url");
          return `${g}.${y}`;
        } catch (o) {
          throw new ej.CredentialsProviderError(
            `Failed to generate Dpop proof: ${o instanceof Error ? o.message : String(o)}`,
            { logger: this.logger, tryNextLink: !1 },
          );
        }
      }
    },
    vUa =
      (t) =>
      async ({ callerClientConfig: e } = {}) => {
        t?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
        let r = await u2r.parseKnownFiles(t || {}),
          n = u2r.getProfileName({ profile: t?.profile ?? e?.profile }),
          o = r[n];
        if (!o?.login_session)
          throw new ej.CredentialsProviderError(`Profile ${n} does not contain login_session.`, {
            tryNextLink: !0,
            logger: t?.logger,
          });
        let a = await new c2r(o, t, e).loadCredentials();
        return yUa.setCredentialFeature(a, "CREDENTIALS_LOGIN", "AD");
      };
  q4i.fromLoginCredentials = vUa;
});
function CUa(t) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: { name: "sts", region: t.region },
    propertiesExtractor: (e, r) => ({ signingProperties: { config: e, context: r } }),
  };
}
function SUa(t) {
  return { schemeId: "smithy.api#noAuth" };
}
var rxe,
  V4i,
  W4i,
  wUa,
  z4i,
  l2r = j(() => {
    Wp();
    rxe = Se(Hg());
    nxe();
    V4i = async (t, e, r) => ({
      operation: (0, rxe.getSmithyContext)(e).operation,
      region:
        (await (0, rxe.normalizeProvider)(t.region)()) ||
        (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })(),
    });
    ((W4i = (t) => {
      let e = [];
      switch (t.operation) {
        case "AssumeRoleWithWebIdentity": {
          e.push(SUa(t));
          break;
        }
        default:
          e.push(CUa(t));
      }
      return e;
    }),
      (wUa = (t) => Object.assign(t, { stsClientCtor: gI })),
      (z4i = (t) => {
        let e = wUa(t),
          r = xN(e);
        return Object.assign(r, { authSchemePreference: (0, rxe.normalizeProvider)(t.authSchemePreference ?? []) });
      }));
  });
var Y4i,
  s1t,
  a1t = j(() => {
    ((Y4i = (t) =>
      Object.assign(t, {
        useDualstackEndpoint: t.useDualstackEndpoint ?? !1,
        useFipsEndpoint: t.useFipsEndpoint ?? !1,
        useGlobalEndpoint: t.useGlobalEndpoint ?? !1,
        defaultSigningName: "sts",
      })),
      (s1t = {
        UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      }));
  });
var sSi,
  pa,
  Dc,
  tj,
  zg,
  aSi,
  uSi,
  dd,
  K4i,
  bI,
  Cde,
  d2r,
  J4i,
  m2r,
  cSi,
  X4i,
  Yg,
  Z4i,
  lSi,
  mSi,
  DA,
  fy,
  eSi,
  dSi,
  fSi,
  tSi,
  pSi,
  rSi,
  nSi,
  iSi,
  oSi,
  xUa,
  hSi,
  gSi = j(() => {
    ((sSi = "required"),
      (pa = "type"),
      (Dc = "argv"),
      (tj = "booleanEquals"),
      (zg = "stringEquals"),
      (aSi = "sigv4"),
      (uSi = "us-east-1"),
      (dd = "endpoint"),
      (K4i = "https://sts.{Region}.{PartitionResult#dnsSuffix}"),
      (bI = "tree"),
      (Cde = "error"),
      (d2r = "getAttr"),
      (J4i = { [sSi]: !1, [pa]: "string" }),
      (m2r = { [sSi]: !0, default: !1, [pa]: "boolean" }),
      (cSi = { ref: "Endpoint" }),
      (X4i = { fn: "isSet", [Dc]: [{ ref: "Region" }] }),
      (Yg = { ref: "Region" }),
      (Z4i = { fn: "aws.partition", [Dc]: [Yg], assign: "PartitionResult" }),
      (lSi = { ref: "UseFIPS" }),
      (mSi = { ref: "UseDualStack" }),
      (DA = {
        url: "https://sts.amazonaws.com",
        properties: { authSchemes: [{ name: aSi, signingName: "sts", signingRegion: uSi }] },
        headers: {},
      }),
      (fy = {}),
      (eSi = { conditions: [{ fn: zg, [Dc]: [Yg, "aws-global"] }], [dd]: DA, [pa]: dd }),
      (dSi = { fn: tj, [Dc]: [lSi, !0] }),
      (fSi = { fn: tj, [Dc]: [mSi, !0] }),
      (tSi = { fn: d2r, [Dc]: [{ ref: "PartitionResult" }, "supportsFIPS"] }),
      (pSi = { ref: "PartitionResult" }),
      (rSi = { fn: tj, [Dc]: [!0, { fn: d2r, [Dc]: [pSi, "supportsDualStack"] }] }),
      (nSi = [{ fn: "isSet", [Dc]: [cSi] }]),
      (iSi = [dSi]),
      (oSi = [fSi]),
      (xUa = {
        version: "1.0",
        parameters: { Region: J4i, UseDualStack: m2r, UseFIPS: m2r, Endpoint: J4i, UseGlobalEndpoint: m2r },
        rules: [
          {
            conditions: [
              { fn: tj, [Dc]: [{ ref: "UseGlobalEndpoint" }, !0] },
              { fn: "not", [Dc]: nSi },
              X4i,
              Z4i,
              { fn: tj, [Dc]: [lSi, !1] },
              { fn: tj, [Dc]: [mSi, !1] },
            ],
            rules: [
              { conditions: [{ fn: zg, [Dc]: [Yg, "ap-northeast-1"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "ap-south-1"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "ap-southeast-1"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "ap-southeast-2"] }], endpoint: DA, [pa]: dd },
              eSi,
              { conditions: [{ fn: zg, [Dc]: [Yg, "ca-central-1"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "eu-central-1"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "eu-north-1"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "eu-west-1"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "eu-west-2"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "eu-west-3"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "sa-east-1"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, uSi] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "us-east-2"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "us-west-1"] }], endpoint: DA, [pa]: dd },
              { conditions: [{ fn: zg, [Dc]: [Yg, "us-west-2"] }], endpoint: DA, [pa]: dd },
              {
                endpoint: {
                  url: K4i,
                  properties: { authSchemes: [{ name: aSi, signingName: "sts", signingRegion: "{Region}" }] },
                  headers: fy,
                },
                [pa]: dd,
              },
            ],
            [pa]: bI,
          },
          {
            conditions: nSi,
            rules: [
              {
                conditions: iSi,
                error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                [pa]: Cde,
              },
              {
                conditions: oSi,
                error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                [pa]: Cde,
              },
              { endpoint: { url: cSi, properties: fy, headers: fy }, [pa]: dd },
            ],
            [pa]: bI,
          },
          {
            conditions: [X4i],
            rules: [
              {
                conditions: [Z4i],
                rules: [
                  {
                    conditions: [dSi, fSi],
                    rules: [
                      {
                        conditions: [{ fn: tj, [Dc]: [!0, tSi] }, rSi],
                        rules: [
                          {
                            endpoint: {
                              url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: fy,
                              headers: fy,
                            },
                            [pa]: dd,
                          },
                        ],
                        [pa]: bI,
                      },
                      {
                        error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                        [pa]: Cde,
                      },
                    ],
                    [pa]: bI,
                  },
                  {
                    conditions: iSi,
                    rules: [
                      {
                        conditions: [{ fn: tj, [Dc]: [tSi, !0] }],
                        rules: [
                          {
                            conditions: [{ fn: zg, [Dc]: [{ fn: d2r, [Dc]: [pSi, "name"] }, "aws-us-gov"] }],
                            endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: fy, headers: fy },
                            [pa]: dd,
                          },
                          {
                            endpoint: {
                              url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                              properties: fy,
                              headers: fy,
                            },
                            [pa]: dd,
                          },
                        ],
                        [pa]: bI,
                      },
                      { error: "FIPS is enabled but this partition does not support FIPS", [pa]: Cde },
                    ],
                    [pa]: bI,
                  },
                  {
                    conditions: oSi,
                    rules: [
                      {
                        conditions: [rSi],
                        rules: [
                          {
                            endpoint: {
                              url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: fy,
                              headers: fy,
                            },
                            [pa]: dd,
                          },
                        ],
                        [pa]: bI,
                      },
                      { error: "DualStack is enabled but this partition does not support DualStack", [pa]: Cde },
                    ],
                    [pa]: bI,
                  },
                  eSi,
                  { endpoint: { url: K4i, properties: fy, headers: fy }, [pa]: dd },
                ],
                [pa]: bI,
              },
            ],
            [pa]: bI,
          },
          { error: "Invalid Configuration: Missing Region", [pa]: Cde },
        ],
      }),
      (hSi = xUa));
  });
var bSi,
  Sde,
  TUa,
  ASi,
  ySi = j(() => {
    ((bSi = Se(EK())), (Sde = Se(F$())));
    gSi();
    ((TUa = new Sde.EndpointCache({
      size: 50,
      params: ["Endpoint", "Region", "UseDualStack", "UseFIPS", "UseGlobalEndpoint"],
    })),
      (ASi = (t, e = {}) => TUa.get(t, () => (0, Sde.resolveEndpoint)(hSi, { endpointParams: t, logger: e.logger }))));
    Sde.customEndpointFunctions.aws = bSi.awsEndpointFunctions;
  });
var _Si,
  ESi,
  u1t,
  c1t,
  vSi,
  CSi = j(() => {
    Wp();
    yK();
    EA();
    ((_Si = Se(Ga())), (ESi = Se(PN())), (u1t = Se(p3())), (c1t = Se(ep())));
    l2r();
    ySi();
    vSi = (t) => ({
      apiVersion: "2011-06-15",
      base64Decoder: t?.base64Decoder ?? u1t.fromBase64,
      base64Encoder: t?.base64Encoder ?? u1t.toBase64,
      disableHostPrefix: t?.disableHostPrefix ?? !1,
      endpointProvider: t?.endpointProvider ?? ASi,
      extensions: t?.extensions ?? [],
      httpAuthSchemeProvider: t?.httpAuthSchemeProvider ?? W4i,
      httpAuthSchemes: t?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (e) => e.getIdentityProvider("aws.auth#sigv4"),
          signer: new yA(),
        },
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: (e) => e.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new $S(),
        },
      ],
      logger: t?.logger ?? new _Si.NoOpLogger(),
      protocol: t?.protocol ?? P$,
      protocolSettings: t?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.sts",
        xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
        version: "2011-06-15",
        serviceTarget: "AWSSecurityTokenServiceV20110615",
      },
      serviceId: t?.serviceId ?? "STS",
      urlParser: t?.urlParser ?? ESi.parseUrl,
      utf8Decoder: t?.utf8Decoder ?? c1t.fromUtf8,
      utf8Encoder: t?.utf8Encoder ?? c1t.toUtf8,
    });
  });
var l1t,
  nj,
  SSi,
  m1t,
  rj,
  d1t,
  f1t,
  wSi,
  xSi,
  TSi,
  DSi,
  ISi = j(() => {
    Xmt();
    Wp();
    ((l1t = Se(ude())), (nj = Se(b9())));
    EA();
    ((SSi = Se(cde())),
      (m1t = Se(GS())),
      (rj = Se(uI())),
      (d1t = Se(E$())),
      (f1t = Se(Ga())),
      (wSi = Se(lde())),
      (xSi = Se(mde())),
      (TSi = Se(SK())));
    CSi();
    DSi = (t) => {
      (0, f1t.emitWarningIfUnsupportedVersion)(process.version);
      let e = (0, xSi.resolveDefaultsModeConfig)(t),
        r = () => e().then(f1t.loadConfigsForDefaultMode),
        n = vSi(t);
      g$(process.version);
      let o = { profile: t?.profile, logger: n.logger };
      return {
        ...n,
        ...t,
        runtime: "node",
        defaultsMode: e,
        authSchemePreference: t?.authSchemePreference ?? (0, rj.loadConfig)(A$, o),
        bodyLengthChecker: t?.bodyLengthChecker ?? wSi.calculateBodyLength,
        defaultUserAgentProvider:
          t?.defaultUserAgentProvider ??
          (0, l1t.createDefaultUserAgentProvider)({ serviceId: n.serviceId, clientVersion: ade.version }),
        httpAuthSchemes: t?.httpAuthSchemes ?? [
          {
            schemeId: "aws.auth#sigv4",
            identityProvider: (s) =>
              s.getIdentityProvider("aws.auth#sigv4") ||
              (async (a) => await t.credentialDefaultProvider(a?.__config || {})()),
            signer: new yA(),
          },
          {
            schemeId: "smithy.api#noAuth",
            identityProvider: (s) => s.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
            signer: new $S(),
          },
        ],
        maxAttempts: t?.maxAttempts ?? (0, rj.loadConfig)(m1t.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, t),
        region:
          t?.region ??
          (0, rj.loadConfig)(nj.NODE_REGION_CONFIG_OPTIONS, { ...nj.NODE_REGION_CONFIG_FILE_OPTIONS, ...o }),
        requestHandler: d1t.NodeHttpHandler.create(t?.requestHandler ?? r),
        retryMode:
          t?.retryMode ??
          (0, rj.loadConfig)(
            {
              ...m1t.NODE_RETRY_MODE_CONFIG_OPTIONS,
              default: async () => (await r()).retryMode || TSi.DEFAULT_RETRY_MODE,
            },
            t,
          ),
        sha256: t?.sha256 ?? SSi.Hash.bind(null, "sha256"),
        streamCollector: t?.streamCollector ?? d1t.streamCollector,
        useDualstackEndpoint:
          t?.useDualstackEndpoint ?? (0, rj.loadConfig)(nj.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
        useFipsEndpoint: t?.useFipsEndpoint ?? (0, rj.loadConfig)(nj.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
        userAgentAppId: t?.userAgentAppId ?? (0, rj.loadConfig)(l1t.NODE_APP_ID_CONFIG_OPTIONS, o),
      };
    };
  });
var RSi,
  kSi,
  OSi = j(() => {
    ((RSi = (t) => {
      let e = t.httpAuthSchemes,
        r = t.httpAuthSchemeProvider,
        n = t.credentials;
      return {
        setHttpAuthScheme(o) {
          let s = e.findIndex((a) => a.schemeId === o.schemeId);
          s === -1 ? e.push(o) : e.splice(s, 1, o);
        },
        httpAuthSchemes() {
          return e;
        },
        setHttpAuthSchemeProvider(o) {
          r = o;
        },
        httpAuthSchemeProvider() {
          return r;
        },
        setCredentials(o) {
          n = o;
        },
        credentials() {
          return n;
        },
      };
    }),
      (kSi = (t) => ({
        httpAuthSchemes: t.httpAuthSchemes(),
        httpAuthSchemeProvider: t.httpAuthSchemeProvider(),
        credentials: t.credentials(),
      })));
  });
var p1t,
  h1t,
  g1t,
  NSi,
  PSi = j(() => {
    ((p1t = Se(TK())), (h1t = Se(Tc())), (g1t = Se(Ga())));
    OSi();
    NSi = (t, e) => {
      let r = Object.assign(
        (0, p1t.getAwsRegionExtensionConfiguration)(t),
        (0, g1t.getDefaultExtensionConfiguration)(t),
        (0, h1t.getHttpHandlerExtensionConfiguration)(t),
        RSi(t),
      );
      return (
        e.forEach((n) => n.configure(r)),
        Object.assign(
          t,
          (0, p1t.resolveAwsRegionExtensionConfiguration)(r),
          (0, g1t.resolveDefaultRuntimeConfig)(r),
          (0, h1t.resolveHttpHandlerRuntimeConfig)(r),
          kSi(r),
        )
      );
    };
  });
var b1t,
  BSi,
  LSi,
  A1t,
  MSi,
  FSi,
  USi,
  y1t,
  f2r,
  gI,
  nxe = j(() => {
    ((b1t = Se(Vme())), (BSi = Se(Wme())), (LSi = Se(zme())), (A1t = Se(vK())), (MSi = Se(b9())));
    EA();
    Wc();
    ((FSi = Se(Zme())), (USi = Se(QS())), (y1t = Se(GS())), (f2r = Se(Ga())));
    l2r();
    a1t();
    ISi();
    PSi();
    gI = class extends f2r.Client {
      config;
      constructor(...[e]) {
        let r = DSi(e || {});
        (super(r), (this.initConfig = r));
        let n = Y4i(r),
          o = (0, A1t.resolveUserAgentConfig)(n),
          s = (0, y1t.resolveRetryConfig)(o),
          a = (0, MSi.resolveRegionConfig)(s),
          u = (0, b1t.resolveHostHeaderConfig)(a),
          c = (0, USi.resolveEndpointConfig)(u),
          m = z4i(c),
          d = NSi(m, e?.extensions || []);
        ((this.config = d),
          this.middlewareStack.use(uK(this.config)),
          this.middlewareStack.use((0, A1t.getUserAgentPlugin)(this.config)),
          this.middlewareStack.use((0, y1t.getRetryPlugin)(this.config)),
          this.middlewareStack.use((0, FSi.getContentLengthPlugin)(this.config)),
          this.middlewareStack.use((0, b1t.getHostHeaderPlugin)(this.config)),
          this.middlewareStack.use((0, BSi.getLoggerPlugin)(this.config)),
          this.middlewareStack.use((0, LSi.getRecursionDetectionPlugin)(this.config)),
          this.middlewareStack.use(
            oK(this.config, {
              httpAuthSchemeParametersProvider: V4i,
              identityProviderConfigProvider: async (f) => new wN({ "aws.auth#sigv4": f.credentials }),
            }),
          ),
          this.middlewareStack.use(sK(this.config)));
      }
      destroy() {
        super.destroy();
      }
    };
  });
var $Si,
  y9,
  _1t = j(() => {
    (($Si = Se(Ga())),
      (y9 = class t extends $Si.ServiceException {
        constructor(e) {
          (super(e), Object.setPrototypeOf(this, t.prototype));
        }
      }));
  });
var ixe,
  oxe,
  sxe,
  axe,
  uxe,
  cxe,
  lxe,
  p2r = j(() => {
    _1t();
    ((ixe = class t extends y9 {
      name = "ExpiredTokenException";
      $fault = "client";
      constructor(e) {
        (super({ name: "ExpiredTokenException", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    }),
      (oxe = class t extends y9 {
        name = "MalformedPolicyDocumentException";
        $fault = "client";
        constructor(e) {
          (super({ name: "MalformedPolicyDocumentException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype));
        }
      }),
      (sxe = class t extends y9 {
        name = "PackedPolicyTooLargeException";
        $fault = "client";
        constructor(e) {
          (super({ name: "PackedPolicyTooLargeException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype));
        }
      }),
      (axe = class t extends y9 {
        name = "RegionDisabledException";
        $fault = "client";
        constructor(e) {
          (super({ name: "RegionDisabledException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype));
        }
      }),
      (uxe = class t extends y9 {
        name = "IDPRejectedClaimException";
        $fault = "client";
        constructor(e) {
          (super({ name: "IDPRejectedClaimException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype));
        }
      }),
      (cxe = class t extends y9 {
        name = "InvalidIdentityTokenException";
        $fault = "client";
        constructor(e) {
          (super({ name: "InvalidIdentityTokenException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype));
        }
      }),
      (lxe = class t extends y9 {
        name = "IDPCommunicationErrorException";
        $fault = "client";
        constructor(e) {
          (super({ name: "IDPCommunicationErrorException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype));
        }
      }));
  });
var DUa,
  IUa,
  RUa,
  kUa,
  OUa,
  NUa,
  h2r,
  PUa,
  BUa,
  LUa,
  MUa,
  g2r,
  FUa,
  jSi,
  UUa,
  $Ua,
  jUa,
  QUa,
  GUa,
  qUa,
  HUa,
  VUa,
  QSi,
  GSi,
  WUa,
  zUa,
  YUa,
  KUa,
  JUa,
  XUa,
  qSi,
  ZUa,
  e$a,
  HSi,
  t$a,
  VSi,
  r$a,
  n$a,
  b2r,
  i$a,
  o$a,
  s$a,
  a$a,
  u$a,
  c$a,
  l$a,
  m$a,
  d$a,
  f$a,
  OK,
  NK,
  p$a,
  PK,
  BK,
  LK,
  h$a,
  WSi,
  g$a,
  hl,
  b$a,
  A$a,
  A2r,
  zSi,
  YSi,
  KSi,
  JSi,
  y2r,
  XSi,
  ZSi,
  ewi,
  twi,
  rwi,
  nwi,
  iwi,
  owi,
  swi,
  awi,
  uwi,
  cwi,
  y$a,
  _$a,
  _2r,
  E2r,
  E1t = j(() => {
    Wc();
    p2r();
    _1t();
    ((DUa = "Arn"),
      (IUa = "AccessKeyId"),
      (RUa = "AssumeRole"),
      (kUa = "AssumedRoleId"),
      (OUa = "AssumeRoleRequest"),
      (NUa = "AssumeRoleResponse"),
      (h2r = "AssumedRoleUser"),
      (PUa = "AssumeRoleWithWebIdentity"),
      (BUa = "AssumeRoleWithWebIdentityRequest"),
      (LUa = "AssumeRoleWithWebIdentityResponse"),
      (MUa = "Audience"),
      (g2r = "Credentials"),
      (FUa = "ContextAssertion"),
      (jSi = "DurationSeconds"),
      (UUa = "Expiration"),
      ($Ua = "ExternalId"),
      (jUa = "ExpiredTokenException"),
      (QUa = "IDPCommunicationErrorException"),
      (GUa = "IDPRejectedClaimException"),
      (qUa = "InvalidIdentityTokenException"),
      (HUa = "Key"),
      (VUa = "MalformedPolicyDocumentException"),
      (QSi = "Policy"),
      (GSi = "PolicyArns"),
      (WUa = "ProviderArn"),
      (zUa = "ProvidedContexts"),
      (YUa = "ProvidedContextsListType"),
      (KUa = "ProvidedContext"),
      (JUa = "PolicyDescriptorType"),
      (XUa = "ProviderId"),
      (qSi = "PackedPolicySize"),
      (ZUa = "PackedPolicyTooLargeException"),
      (e$a = "Provider"),
      (HSi = "RoleArn"),
      (t$a = "RegionDisabledException"),
      (VSi = "RoleSessionName"),
      (r$a = "SecretAccessKey"),
      (n$a = "SubjectFromWebIdentityToken"),
      (b2r = "SourceIdentity"),
      (i$a = "SerialNumber"),
      (o$a = "SessionToken"),
      (s$a = "Tags"),
      (a$a = "TokenCode"),
      (u$a = "TransitiveTagKeys"),
      (c$a = "Tag"),
      (l$a = "Value"),
      (m$a = "WebIdentityToken"),
      (d$a = "arn"),
      (f$a = "accessKeySecretType"),
      (OK = "awsQueryError"),
      (NK = "client"),
      (p$a = "clientTokenType"),
      (PK = "error"),
      (BK = "httpError"),
      (LK = "message"),
      (h$a = "policyDescriptorListType"),
      (WSi = "smithy.ts.sdk.synthetic.com.amazonaws.sts"),
      (g$a = "tagListType"),
      (hl = "com.amazonaws.sts"),
      (b$a = [0, hl, f$a, 8, 0]),
      (A$a = [0, hl, p$a, 8, 0]),
      (A2r = [3, hl, h2r, 0, [kUa, DUa], [0, 0]]),
      (zSi = [
        3,
        hl,
        OUa,
        0,
        [HSi, VSi, GSi, QSi, jSi, s$a, u$a, $Ua, i$a, a$a, b2r, zUa],
        [0, 0, () => cwi, 0, 1, () => _$a, 64, 0, 0, 0, 0, () => y$a],
      ]),
      (YSi = [3, hl, NUa, 0, [g2r, h2r, qSi, b2r], [[() => y2r, 0], () => A2r, 1, 0]]),
      (KSi = [3, hl, BUa, 0, [HSi, VSi, m$a, XUa, GSi, QSi, jSi], [0, 0, [() => A$a, 0], 0, () => cwi, 0, 1]]),
      (JSi = [3, hl, LUa, 0, [g2r, n$a, h2r, qSi, e$a, MUa, b2r], [[() => y2r, 0], 0, () => A2r, 1, 0, 0, 0]]),
      (y2r = [3, hl, g2r, 0, [IUa, r$a, o$a, UUa], [0, [() => b$a, 0], 0, 4]]),
      (XSi = [-3, hl, jUa, { [OK]: ["ExpiredTokenException", 400], [PK]: NK, [BK]: 400 }, [LK], [0]]));
    es.for(hl).registerError(XSi, ixe);
    ZSi = [-3, hl, QUa, { [OK]: ["IDPCommunicationError", 400], [PK]: NK, [BK]: 400 }, [LK], [0]];
    es.for(hl).registerError(ZSi, lxe);
    ewi = [-3, hl, GUa, { [OK]: ["IDPRejectedClaim", 403], [PK]: NK, [BK]: 403 }, [LK], [0]];
    es.for(hl).registerError(ewi, uxe);
    twi = [-3, hl, qUa, { [OK]: ["InvalidIdentityToken", 400], [PK]: NK, [BK]: 400 }, [LK], [0]];
    es.for(hl).registerError(twi, cxe);
    rwi = [-3, hl, VUa, { [OK]: ["MalformedPolicyDocument", 400], [PK]: NK, [BK]: 400 }, [LK], [0]];
    es.for(hl).registerError(rwi, oxe);
    nwi = [-3, hl, ZUa, { [OK]: ["PackedPolicyTooLarge", 400], [PK]: NK, [BK]: 400 }, [LK], [0]];
    es.for(hl).registerError(nwi, sxe);
    ((iwi = [3, hl, JUa, 0, [d$a], [0]]),
      (owi = [3, hl, KUa, 0, [WUa, FUa], [0, 0]]),
      (swi = [-3, hl, t$a, { [OK]: ["RegionDisabledException", 403], [PK]: NK, [BK]: 403 }, [LK], [0]]));
    es.for(hl).registerError(swi, axe);
    ((awi = [3, hl, c$a, 0, [HUa, l$a], [0, 0]]), (uwi = [-3, WSi, "STSServiceException", 0, [], []]));
    es.for(WSi).registerError(uwi, y9);
    ((cwi = [1, hl, h$a, 0, () => iwi]),
      (y$a = [1, hl, YUa, 0, () => owi]),
      (_$a = [1, hl, g$a, 0, () => awi]),
      (_2r = [9, hl, RUa, 0, () => zSi, () => YSi]),
      (E2r = [9, hl, PUa, 0, () => KSi, () => JSi]));
  });
var lwi,
  mwi,
  MK,
  v1t = j(() => {
    ((lwi = Se(QS())), (mwi = Se(Ga())));
    a1t();
    E1t();
    MK = class extends (
      mwi.Command.classBuilder()
        .ep(s1t)
        .m(function (e, r, n, o) {
          return [(0, lwi.getEndpointPlugin)(n, e.getEndpointParameterInstructions())];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
        .n("STSClient", "AssumeRoleCommand")
        .sc(_2r)
        .build()
    ) {};
  });
var dwi,
  fwi,
  FK,
  C1t = j(() => {
    ((dwi = Se(QS())), (fwi = Se(Ga())));
    a1t();
    E1t();
    FK = class extends (
      fwi.Command.classBuilder()
        .ep(s1t)
        .m(function (e, r, n, o) {
          return [(0, dwi.getEndpointPlugin)(n, e.getEndpointParameterInstructions())];
        })
        .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
        .n("STSClient", "AssumeRoleWithWebIdentityCommand")
        .sc(E2r)
        .build()
    ) {};
  });
var pwi,
  E$a,
  S1t,
  hwi = j(() => {
    pwi = Se(Ga());
    v1t();
    C1t();
    nxe();
    ((E$a = { AssumeRoleCommand: MK, AssumeRoleWithWebIdentityCommand: FK }), (S1t = class extends gI {}));
    (0, pwi.createAggregatedClient)(E$a, S1t);
  });
var gwi = j(() => {
  v1t();
  C1t();
});
var bwi = j(() => {});
var Awi,
  ywi,
  _wi,
  Ewi,
  vwi,
  Cwi,
  Swi = j(() => {
    _v();
    Awi = Se(TK());
    v1t();
    C1t();
    ((ywi = (t) => {
      if (typeof t?.Arn == "string") {
        let e = t.Arn.split(":");
        if (e.length > 4 && e[4] !== "") return e[4];
      }
    }),
      (_wi = async (t, e, r, n = {}) => {
        let o = typeof t == "function" ? await t() : t,
          s = typeof e == "function" ? await e() : e,
          a = "",
          u = o ?? s ?? (a = await (0, Awi.stsRegionDefaultResolver)(n)());
        return (
          r?.debug?.(
            "@aws-sdk/client-sts::resolveRegion",
            "accepting first of:",
            `${o} (credential provider clientConfig)`,
            `${s} (contextual client)`,
            `${a} (STS default: AWS_REGION, profile region, or us-east-1)`,
          ),
          u
        );
      }),
      (Ewi = (t, e) => {
        let r, n;
        return async (o, s) => {
          if (((n = o), !r)) {
            let {
                logger: d = t?.parentClientConfig?.logger,
                profile: f = t?.parentClientConfig?.profile,
                region: p,
                requestHandler: h = t?.parentClientConfig?.requestHandler,
                credentialProviderLogger: g,
                userAgentAppId: b = t?.parentClientConfig?.userAgentAppId,
              } = t,
              A = await _wi(p, t?.parentClientConfig?.region, g, { logger: d, profile: f }),
              y = !Cwi(h);
            r = new e({
              ...t,
              userAgentAppId: b,
              profile: f,
              credentialDefaultProvider: () => async () => n,
              region: A,
              requestHandler: y ? h : void 0,
              logger: d,
            });
          }
          let { Credentials: a, AssumedRoleUser: u } = await r.send(new MK(s));
          if (!a || !a.AccessKeyId || !a.SecretAccessKey)
            throw new Error(`Invalid response from STS.assumeRole call with role ${s.RoleArn}`);
          let c = ywi(u),
            m = {
              accessKeyId: a.AccessKeyId,
              secretAccessKey: a.SecretAccessKey,
              sessionToken: a.SessionToken,
              expiration: a.Expiration,
              ...(a.CredentialScope && { credentialScope: a.CredentialScope }),
              ...(c && { accountId: c }),
            };
          return (b$(m, "CREDENTIALS_STS_ASSUME_ROLE", "i"), m);
        };
      }),
      (vwi = (t, e) => {
        let r;
        return async (n) => {
          if (!r) {
            let {
                logger: c = t?.parentClientConfig?.logger,
                profile: m = t?.parentClientConfig?.profile,
                region: d,
                requestHandler: f = t?.parentClientConfig?.requestHandler,
                credentialProviderLogger: p,
                userAgentAppId: h = t?.parentClientConfig?.userAgentAppId,
              } = t,
              g = await _wi(d, t?.parentClientConfig?.region, p, { logger: c, profile: m }),
              b = !Cwi(f);
            r = new e({ ...t, userAgentAppId: h, profile: m, region: g, requestHandler: b ? f : void 0, logger: c });
          }
          let { Credentials: o, AssumedRoleUser: s } = await r.send(new FK(n));
          if (!o || !o.AccessKeyId || !o.SecretAccessKey)
            throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${n.RoleArn}`);
          let a = ywi(s),
            u = {
              accessKeyId: o.AccessKeyId,
              secretAccessKey: o.SecretAccessKey,
              sessionToken: o.SessionToken,
              expiration: o.Expiration,
              ...(o.CredentialScope && { credentialScope: o.CredentialScope }),
              ...(a && { accountId: a }),
            };
          return (a && b$(u, "RESOLVED_ACCOUNT_ID", "T"), b$(u, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k"), u);
        };
      }),
      (Cwi = (t) => t?.metadata?.handlerProtocol === "h2"));
  });
var wwi,
  xwi,
  Twi,
  v$a,
  Dwi = j(() => {
    Swi();
    nxe();
    ((wwi = (t, e) =>
      e
        ? class extends t {
            constructor(n) {
              super(n);
              for (let o of e) this.middlewareStack.use(o);
            }
          }
        : t),
      (xwi = (t = {}, e) => Ewi(t, wwi(gI, e))),
      (Twi = (t = {}, e) => vwi(t, wwi(gI, e))),
      (v$a = (t) => (e) => t({ roleAssumer: xwi(e), roleAssumerWithWebIdentity: Twi(e), ...e })));
  });
var v2r = {};
Wi(v2r, {
  AssumeRole$: () => _2r,
  AssumeRoleCommand: () => MK,
  AssumeRoleRequest$: () => zSi,
  AssumeRoleResponse$: () => YSi,
  AssumeRoleWithWebIdentity$: () => E2r,
  AssumeRoleWithWebIdentityCommand: () => FK,
  AssumeRoleWithWebIdentityRequest$: () => KSi,
  AssumeRoleWithWebIdentityResponse$: () => JSi,
  AssumedRoleUser$: () => A2r,
  Credentials$: () => y2r,
  ExpiredTokenException: () => ixe,
  ExpiredTokenException$: () => XSi,
  IDPCommunicationErrorException: () => lxe,
  IDPCommunicationErrorException$: () => ZSi,
  IDPRejectedClaimException: () => uxe,
  IDPRejectedClaimException$: () => ewi,
  InvalidIdentityTokenException: () => cxe,
  InvalidIdentityTokenException$: () => twi,
  MalformedPolicyDocumentException: () => oxe,
  MalformedPolicyDocumentException$: () => rwi,
  PackedPolicyTooLargeException: () => sxe,
  PackedPolicyTooLargeException$: () => nwi,
  PolicyDescriptorType$: () => iwi,
  ProvidedContext$: () => owi,
  RegionDisabledException: () => axe,
  RegionDisabledException$: () => swi,
  STS: () => S1t,
  STSClient: () => gI,
  STSServiceException: () => y9,
  STSServiceException$: () => uwi,
  Tag$: () => awi,
  __Client: () => f2r.Client,
  decorateDefaultCredentialProvider: () => v$a,
  getDefaultRoleAssumer: () => xwi,
  getDefaultRoleAssumerWithWebIdentity: () => Twi,
});
var C2r = j(() => {
  nxe();
  hwi();
  gwi();
  E1t();
  p2r();
  bwi();
  Dwi();
  _1t();
});