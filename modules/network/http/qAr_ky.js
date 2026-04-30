/**
 * @module qAr
 * @category network/http
 * @label ky
 * @position 1812 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qAr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qAr = T((Udt) => {
  "use strict";
  var WS = vA(),
    Fdt = aI(),
    SCi = (_v(), bt(_N)),
    YFa = bvi(),
    xCi = (t) =>
      t &&
      (typeof t.sso_start_url == "string" ||
        typeof t.sso_account_id == "string" ||
        typeof t.sso_session == "string" ||
        typeof t.sso_region == "string" ||
        typeof t.sso_role_name == "string"),
    zwe = !1,
    wCi = async ({
      ssoStartUrl: t,
      ssoSession: e,
      ssoAccountId: r,
      ssoRegion: n,
      ssoRoleName: o,
      ssoClient: s,
      clientConfig: a,
      parentClientConfig: u,
      callerClientConfig: c,
      profile: m,
      filepath: d,
      configFilepath: f,
      ignoreCache: p,
      logger: h,
    }) => {
      let g,
        b = "To refresh this SSO session run aws sso login with the corresponding profile.";
      if (e)
        try {
          let F = await YFa.fromSso({ profile: m, filepath: d, configFilepath: f, ignoreCache: p })();
          g = { accessToken: F.token, expiresAt: new Date(F.expiration).toISOString() };
        } catch (F) {
          throw new WS.CredentialsProviderError(F.message, { tryNextLink: zwe, logger: h });
        }
      else
        try {
          g = await Fdt.getSSOTokenFromFile(t);
        } catch {
          throw new WS.CredentialsProviderError(`The SSO session associated with this profile is invalid. ${b}`, {
            tryNextLink: zwe,
            logger: h,
          });
        }
      if (new Date(g.expiresAt).getTime() - Date.now() <= 0)
        throw new WS.CredentialsProviderError(`The SSO session associated with this profile has expired. ${b}`, {
          tryNextLink: zwe,
          logger: h,
        });
      let { accessToken: A } = g,
        { SSOClient: y, GetRoleCredentialsCommand: E } = await Promise.resolve().then(function () {
          return CCi();
        }),
        v =
          s ||
          new y(
            Object.assign({}, a ?? {}, {
              logger: a?.logger ?? c?.logger ?? u?.logger,
              region: a?.region ?? n,
              userAgentAppId: a?.userAgentAppId ?? c?.userAgentAppId ?? u?.userAgentAppId,
            }),
          ),
        C;
      try {
        C = await v.send(new E({ accountId: r, roleName: o, accessToken: A }));
      } catch (F) {
        throw new WS.CredentialsProviderError(F, { tryNextLink: zwe, logger: h });
      }
      let {
        roleCredentials: {
          accessKeyId: x,
          secretAccessKey: k,
          sessionToken: R,
          expiration: P,
          credentialScope: D,
          accountId: O,
        } = {},
      } = C;
      if (!x || !k || !R || !P)
        throw new WS.CredentialsProviderError("SSO returns an invalid temporary credential.", {
          tryNextLink: zwe,
          logger: h,
        });
      let N = {
        accessKeyId: x,
        secretAccessKey: k,
        sessionToken: R,
        expiration: new Date(P),
        ...(D && { credentialScope: D }),
        ...(O && { accountId: O }),
      };
      return (
        e
          ? SCi.setCredentialFeature(N, "CREDENTIALS_SSO", "s")
          : SCi.setCredentialFeature(N, "CREDENTIALS_SSO_LEGACY", "u"),
        N
      );
    },
    TCi = (t, e) => {
      let { sso_start_url: r, sso_account_id: n, sso_region: o, sso_role_name: s } = t;
      if (!r || !n || !o || !s)
        throw new WS.CredentialsProviderError(
          `Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(t).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`,
          { tryNextLink: !1, logger: e },
        );
      return t;
    },
    KFa =
      (t = {}) =>
      async ({ callerClientConfig: e } = {}) => {
        t.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
        let { ssoStartUrl: r, ssoAccountId: n, ssoRegion: o, ssoRoleName: s, ssoSession: a } = t,
          { ssoClient: u } = t,
          c = Fdt.getProfileName({ profile: t.profile ?? e?.profile });
        if (!r && !n && !o && !s && !a) {
          let d = (await Fdt.parseKnownFiles(t))[c];
          if (!d) throw new WS.CredentialsProviderError(`Profile ${c} was not found.`, { logger: t.logger });
          if (!xCi(d))
            throw new WS.CredentialsProviderError(`Profile ${c} is not configured with SSO credentials.`, {
              logger: t.logger,
            });
          if (d?.sso_session) {
            let y = (await Fdt.loadSsoSessionData(t))[d.sso_session],
              E = ` configurations in profile ${c} and sso-session ${d.sso_session}`;
            if (o && o !== y.sso_region)
              throw new WS.CredentialsProviderError("Conflicting SSO region" + E, {
                tryNextLink: !1,
                logger: t.logger,
              });
            if (r && r !== y.sso_start_url)
              throw new WS.CredentialsProviderError("Conflicting SSO start_url" + E, {
                tryNextLink: !1,
                logger: t.logger,
              });
            ((d.sso_region = y.sso_region), (d.sso_start_url = y.sso_start_url));
          }
          let {
            sso_start_url: f,
            sso_account_id: p,
            sso_region: h,
            sso_role_name: g,
            sso_session: b,
          } = TCi(d, t.logger);
          return wCi({
            ssoStartUrl: f,
            ssoSession: b,
            ssoAccountId: p,
            ssoRegion: h,
            ssoRoleName: g,
            ssoClient: u,
            clientConfig: t.clientConfig,
            parentClientConfig: t.parentClientConfig,
            callerClientConfig: t.callerClientConfig,
            profile: c,
            filepath: t.filepath,
            configFilepath: t.configFilepath,
            ignoreCache: t.ignoreCache,
            logger: t.logger,
          });
        } else {
          if (!r || !n || !o || !s)
            throw new WS.CredentialsProviderError(
              'Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"',
              { tryNextLink: !1, logger: t.logger },
            );
          return wCi({
            ssoStartUrl: r,
            ssoSession: a,
            ssoAccountId: n,
            ssoRegion: o,
            ssoRoleName: s,
            ssoClient: u,
            clientConfig: t.clientConfig,
            parentClientConfig: t.parentClientConfig,
            callerClientConfig: t.callerClientConfig,
            profile: c,
            filepath: t.filepath,
            configFilepath: t.configFilepath,
            ignoreCache: t.ignoreCache,
            logger: t.logger,
          });
        }
      };
  Udt.fromSSO = KFa;
  Udt.isSsoProfile = xCi;
  Udt.validateSsoProfile = TCi;
});
function JFa(t) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: { name: "signin", region: t.region },
    propertiesExtractor: (e, r) => ({ signingProperties: { config: e, context: r } }),
  };
}
function XFa(t) {
  return { schemeId: "smithy.api#noAuth" };
}
var Ywe,
  DCi,
  ICi,
  RCi,
  HAr = j(() => {
    Wp();
    ((Ywe = Se(Hg())),
      (DCi = async (t, e, r) => ({
        operation: (0, Ywe.getSmithyContext)(e).operation,
        region:
          (await (0, Ywe.normalizeProvider)(t.region)()) ||
          (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
          })(),
      })));
    ((ICi = (t) => {
      let e = [];
      switch (t.operation) {
        case "CreateOAuth2Token": {
          e.push(XFa(t));
          break;
        }
        default:
          e.push(JFa(t));
      }
      return e;
    }),
      (RCi = (t) => {
        let e = xN(t);
        return Object.assign(e, { authSchemePreference: (0, Ywe.normalizeProvider)(t.authSchemePreference ?? []) });
      }));
  });
var kCi,
  OCi,
  VAr = j(() => {
    ((kCi = (t) =>
      Object.assign(t, {
        useDualstackEndpoint: t.useDualstackEndpoint ?? !1,
        useFipsEndpoint: t.useFipsEndpoint ?? !1,
        defaultSigningName: "signin",
      })),
      (OCi = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      }));
  });
var $Ci,
  TA,
  NCi,
  kK,
  Ede,
  K$,
  zS,
  Qdt,
  WAr,
  PCi,
  BCi,
  LCi,
  zAr,
  YAr,
  xA,
  KAr,
  $dt,
  jdt,
  MCi,
  FCi,
  UCi,
  ZFa,
  jCi,
  QCi = j(() => {
    (($Ci = "required"),
      (TA = "argv"),
      (NCi = "isSet"),
      (kK = "booleanEquals"),
      (Ede = "error"),
      (K$ = "endpoint"),
      (zS = "tree"),
      (Qdt = "PartitionResult"),
      (WAr = "stringEquals"),
      (PCi = { [$Ci]: !0, default: !1, type: "boolean" }),
      (BCi = { [$Ci]: !1, type: "string" }),
      (LCi = { ref: "Endpoint" }),
      (zAr = { fn: kK, [TA]: [{ ref: "UseFIPS" }, !0] }),
      (YAr = { fn: kK, [TA]: [{ ref: "UseDualStack" }, !0] }),
      (xA = {}),
      (KAr = { fn: "getAttr", [TA]: [{ ref: Qdt }, "name"] }),
      ($dt = { fn: kK, [TA]: [{ ref: "UseFIPS" }, !1] }),
      (jdt = { fn: kK, [TA]: [{ ref: "UseDualStack" }, !1] }),
      (MCi = { fn: "getAttr", [TA]: [{ ref: Qdt }, "supportsFIPS"] }),
      (FCi = { fn: kK, [TA]: [!0, { fn: "getAttr", [TA]: [{ ref: Qdt }, "supportsDualStack"] }] }),
      (UCi = [{ ref: "Region" }]),
      (ZFa = {
        version: "1.0",
        parameters: { UseDualStack: PCi, UseFIPS: PCi, Endpoint: BCi, Region: BCi },
        rules: [
          {
            conditions: [{ fn: NCi, [TA]: [LCi] }],
            rules: [
              {
                conditions: [zAr],
                error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                type: Ede,
              },
              {
                rules: [
                  {
                    conditions: [YAr],
                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                    type: Ede,
                  },
                  { endpoint: { url: LCi, properties: xA, headers: xA }, type: K$ },
                ],
                type: zS,
              },
            ],
            type: zS,
          },
          {
            rules: [
              {
                conditions: [{ fn: NCi, [TA]: UCi }],
                rules: [
                  {
                    conditions: [{ fn: "aws.partition", [TA]: UCi, assign: Qdt }],
                    rules: [
                      {
                        conditions: [{ fn: WAr, [TA]: [KAr, "aws"] }, $dt, jdt],
                        endpoint: { url: "https://{Region}.signin.aws.amazon.com", properties: xA, headers: xA },
                        type: K$,
                      },
                      {
                        conditions: [{ fn: WAr, [TA]: [KAr, "aws-cn"] }, $dt, jdt],
                        endpoint: { url: "https://{Region}.signin.amazonaws.cn", properties: xA, headers: xA },
                        type: K$,
                      },
                      {
                        conditions: [{ fn: WAr, [TA]: [KAr, "aws-us-gov"] }, $dt, jdt],
                        endpoint: { url: "https://{Region}.signin.amazonaws-us-gov.com", properties: xA, headers: xA },
                        type: K$,
                      },
                      {
                        conditions: [zAr, YAr],
                        rules: [
                          {
                            conditions: [{ fn: kK, [TA]: [!0, MCi] }, FCi],
                            rules: [
                              {
                                endpoint: {
                                  url: "https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                  properties: xA,
                                  headers: xA,
                                },
                                type: K$,
                              },
                            ],
                            type: zS,
                          },
                          {
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: Ede,
                          },
                        ],
                        type: zS,
                      },
                      {
                        conditions: [zAr, jdt],
                        rules: [
                          {
                            conditions: [{ fn: kK, [TA]: [MCi, !0] }],
                            rules: [
                              {
                                endpoint: {
                                  url: "https://signin-fips.{Region}.{PartitionResult#dnsSuffix}",
                                  properties: xA,
                                  headers: xA,
                                },
                                type: K$,
                              },
                            ],
                            type: zS,
                          },
                          { error: "FIPS is enabled but this partition does not support FIPS", type: Ede },
                        ],
                        type: zS,
                      },
                      {
                        conditions: [$dt, YAr],
                        rules: [
                          {
                            conditions: [FCi],
                            rules: [
                              {
                                endpoint: {
                                  url: "https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                  properties: xA,
                                  headers: xA,
                                },
                                type: K$,
                              },
                            ],
                            type: zS,
                          },
                          { error: "DualStack is enabled but this partition does not support DualStack", type: Ede },
                        ],
                        type: zS,
                      },
                      {
                        endpoint: {
                          url: "https://signin.{Region}.{PartitionResult#dnsSuffix}",
                          properties: xA,
                          headers: xA,
                        },
                        type: K$,
                      },
                    ],
                    type: zS,
                  },
                ],
                type: zS,
              },
              { error: "Invalid Configuration: Missing Region", type: Ede },
            ],
            type: zS,
          },
        ],
      }),
      (jCi = ZFa));
  });
var GCi,
  vde,
  eUa,
  qCi,
  HCi = j(() => {
    ((GCi = Se(EK())), (vde = Se(F$())));
    QCi();
    ((eUa = new vde.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] })),
      (qCi = (t, e = {}) => eUa.get(t, () => (0, vde.resolveEndpoint)(jCi, { endpointParams: t, logger: e.logger }))));
    vde.customEndpointFunctions.aws = GCi.awsEndpointFunctions;
  });
var VCi,
  WCi,
  Gdt,
  qdt,
  zCi,
  YCi = j(() => {
    Wp();
    yK();
    EA();
    ((VCi = Se(Ga())), (WCi = Se(PN())), (Gdt = Se(p3())), (qdt = Se(ep())));
    HAr();
    HCi();
    zCi = (t) => ({
      apiVersion: "2023-01-01",
      base64Decoder: t?.base64Decoder ?? Gdt.fromBase64,
      base64Encoder: t?.base64Encoder ?? Gdt.toBase64,
      disableHostPrefix: t?.disableHostPrefix ?? !1,
      endpointProvider: t?.endpointProvider ?? qCi,
      extensions: t?.extensions ?? [],
      httpAuthSchemeProvider: t?.httpAuthSchemeProvider ?? ICi,
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
      logger: t?.logger ?? new VCi.NoOpLogger(),
      protocol: t?.protocol ?? O$,
      protocolSettings: t?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.signin",
        version: "2023-01-01",
        serviceTarget: "Signin",
      },
      serviceId: t?.serviceId ?? "Signin",
      urlParser: t?.urlParser ?? WCi.parseUrl,
      utf8Decoder: t?.utf8Decoder ?? qdt.fromUtf8,
      utf8Encoder: t?.utf8Encoder ?? qdt.toUtf8,
    });
  });
var Hdt,
  X$,
  KCi,
  Vdt,
  J$,
  Wdt,
  zdt,
  JCi,
  XCi,
  ZCi,
  e4i,
  t4i = j(() => {
    Xmt();
    Wp();
    ((Hdt = Se(ude())),
      (X$ = Se(b9())),
      (KCi = Se(cde())),
      (Vdt = Se(GS())),
      (J$ = Se(uI())),
      (Wdt = Se(E$())),
      (zdt = Se(Ga())),
      (JCi = Se(lde())),
      (XCi = Se(mde())),
      (ZCi = Se(SK())));
    YCi();
    e4i = (t) => {
      (0, zdt.emitWarningIfUnsupportedVersion)(process.version);
      let e = (0, XCi.resolveDefaultsModeConfig)(t),
        r = () => e().then(zdt.loadConfigsForDefaultMode),
        n = zCi(t);
      g$(process.version);
      let o = { profile: t?.profile, logger: n.logger };
      return {
        ...n,
        ...t,
        runtime: "node",
        defaultsMode: e,
        authSchemePreference: t?.authSchemePreference ?? (0, J$.loadConfig)(A$, o),
        bodyLengthChecker: t?.bodyLengthChecker ?? JCi.calculateBodyLength,
        defaultUserAgentProvider:
          t?.defaultUserAgentProvider ??
          (0, Hdt.createDefaultUserAgentProvider)({ serviceId: n.serviceId, clientVersion: ade.version }),
        maxAttempts: t?.maxAttempts ?? (0, J$.loadConfig)(Vdt.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, t),
        region:
          t?.region ??
          (0, J$.loadConfig)(X$.NODE_REGION_CONFIG_OPTIONS, { ...X$.NODE_REGION_CONFIG_FILE_OPTIONS, ...o }),
        requestHandler: Wdt.NodeHttpHandler.create(t?.requestHandler ?? r),
        retryMode:
          t?.retryMode ??
          (0, J$.loadConfig)(
            {
              ...Vdt.NODE_RETRY_MODE_CONFIG_OPTIONS,
              default: async () => (await r()).retryMode || ZCi.DEFAULT_RETRY_MODE,
            },
            t,
          ),
        sha256: t?.sha256 ?? KCi.Hash.bind(null, "sha256"),
        streamCollector: t?.streamCollector ?? Wdt.streamCollector,
        useDualstackEndpoint:
          t?.useDualstackEndpoint ?? (0, J$.loadConfig)(X$.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
        useFipsEndpoint: t?.useFipsEndpoint ?? (0, J$.loadConfig)(X$.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
        userAgentAppId: t?.userAgentAppId ?? (0, J$.loadConfig)(Hdt.NODE_APP_ID_CONFIG_OPTIONS, o),
      };
    };
  });
var r4i,
  n4i,
  i4i = j(() => {
    ((r4i = (t) => {
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
      (n4i = (t) => ({
        httpAuthSchemes: t.httpAuthSchemes(),
        httpAuthSchemeProvider: t.httpAuthSchemeProvider(),
        credentials: t.credentials(),
      })));
  });
var Ydt,
  Kdt,
  Jdt,
  o4i,
  s4i = j(() => {
    ((Ydt = Se(TK())), (Kdt = Se(Tc())), (Jdt = Se(Ga())));
    i4i();
    o4i = (t, e) => {
      let r = Object.assign(
        (0, Ydt.getAwsRegionExtensionConfiguration)(t),
        (0, Jdt.getDefaultExtensionConfiguration)(t),
        (0, Kdt.getHttpHandlerExtensionConfiguration)(t),
        r4i(t),
      );
      return (
        e.forEach((n) => n.configure(r)),
        Object.assign(
          t,
          (0, Ydt.resolveAwsRegionExtensionConfiguration)(r),
          (0, Jdt.resolveDefaultRuntimeConfig)(r),
          (0, Kdt.resolveHttpHandlerRuntimeConfig)(r),
          n4i(r),
        )
      );
    };
  });
var Xdt,
  a4i,
  u4i,
  Zdt,
  c4i,
  l4i,
  m4i,
  e1t,
  JAr,
  Kwe,
  XAr = j(() => {
    ((Xdt = Se(Vme())), (a4i = Se(Wme())), (u4i = Se(zme())), (Zdt = Se(vK())), (c4i = Se(b9())));
    EA();
    Wc();
    ((l4i = Se(Zme())), (m4i = Se(QS())), (e1t = Se(GS())), (JAr = Se(Ga())));
    HAr();
    VAr();
    t4i();
    s4i();
    Kwe = class extends JAr.Client {
      config;
      constructor(...[e]) {
        let r = e4i(e || {});
        (super(r), (this.initConfig = r));
        let n = kCi(r),
          o = (0, Zdt.resolveUserAgentConfig)(n),
          s = (0, e1t.resolveRetryConfig)(o),
          a = (0, c4i.resolveRegionConfig)(s),
          u = (0, Xdt.resolveHostHeaderConfig)(a),
          c = (0, m4i.resolveEndpointConfig)(u),
          m = RCi(c),
          d = o4i(m, e?.extensions || []);
        ((this.config = d),
          this.middlewareStack.use(uK(this.config)),
          this.middlewareStack.use((0, Zdt.getUserAgentPlugin)(this.config)),
          this.middlewareStack.use((0, e1t.getRetryPlugin)(this.config)),
          this.middlewareStack.use((0, l4i.getContentLengthPlugin)(this.config)),
          this.middlewareStack.use((0, Xdt.getHostHeaderPlugin)(this.config)),
          this.middlewareStack.use((0, a4i.getLoggerPlugin)(this.config)),
          this.middlewareStack.use((0, u4i.getRecursionDetectionPlugin)(this.config)),
          this.middlewareStack.use(
            oK(this.config, {
              httpAuthSchemeParametersProvider: DCi,
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
var d4i,
  YS,
  t1t = j(() => {
    ((d4i = Se(Ga())),
      (YS = class t extends d4i.ServiceException {
        constructor(e) {
          (super(e), Object.setPrototypeOf(this, t.prototype));
        }
      }));
  });
var Jwe,
  Xwe,
  Zwe,
  exe,
  ZAr = j(() => {
    t1t();
    ((Jwe = class t extends YS {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      constructor(e) {
        (super({ name: "AccessDeniedException", $fault: "client", ...e }),
          Object.setPrototypeOf(this, t.prototype),
          (this.error = e.error));
      }
    }),
      (Xwe = class t extends YS {
        name = "InternalServerException";
        $fault = "server";
        error;
        constructor(e) {
          (super({ name: "InternalServerException", $fault: "server", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error));
        }
      }),
      (Zwe = class t extends YS {
        name = "TooManyRequestsError";
        $fault = "client";
        error;
        constructor(e) {
          (super({ name: "TooManyRequestsError", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error));
        }
      }),
      (exe = class t extends YS {
        name = "ValidationException";
        $fault = "client";
        error;
        constructor(e) {
          (super({ name: "ValidationException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error));
        }
      }));
  });
var tUa,
  rUa,
  nUa,
  iUa,
  oUa,
  sUa,
  aUa,
  uUa,
  cUa,
  lUa,
  mUa,
  f4i,
  p4i,
  e2r,
  h4i,
  g4i,
  dUa,
  Z$,
  b4i,
  A4i,
  fUa,
  t2r,
  y4i,
  dy,
  n1t,
  r1t,
  _4i,
  pUa,
  E4i,
  v4i,
  S4i,
  hUa,
  gUa,
  C4i,
  l5,
  w4i,
  x4i,
  T4i,
  D4i,
  I4i,
  R4i,
  k4i,
  O4i,
  N4i,
  P4i,
  B4i,
  r2r,
  n2r = j(() => {
    Wc();
    ZAr();
    t1t();
    ((tUa = "AccessDeniedException"),
      (rUa = "AccessToken"),
      (nUa = "CreateOAuth2Token"),
      (iUa = "CreateOAuth2TokenRequest"),
      (oUa = "CreateOAuth2TokenRequestBody"),
      (sUa = "CreateOAuth2TokenResponseBody"),
      (aUa = "CreateOAuth2TokenResponse"),
      (uUa = "InternalServerException"),
      (cUa = "RefreshToken"),
      (lUa = "TooManyRequestsError"),
      (mUa = "ValidationException"),
      (f4i = "accessKeyId"),
      (p4i = "accessToken"),
      (e2r = "client"),
      (h4i = "clientId"),
      (g4i = "codeVerifier"),
      (dUa = "code"),
      (Z$ = "error"),
      (b4i = "expiresIn"),
      (A4i = "grantType"),
      (fUa = "http"),
      (t2r = "httpError"),
      (y4i = "idToken"),
      (dy = "jsonName"),
      (n1t = "message"),
      (r1t = "refreshToken"),
      (_4i = "redirectUri"),
      (pUa = "server"),
      (E4i = "secretAccessKey"),
      (v4i = "sessionToken"),
      (S4i = "smithy.ts.sdk.synthetic.com.amazonaws.signin"),
      (hUa = "tokenInput"),
      (gUa = "tokenOutput"),
      (C4i = "tokenType"),
      (l5 = "com.amazonaws.signin"),
      (w4i = [0, l5, cUa, 8, 0]),
      (x4i = [-3, l5, tUa, { [Z$]: e2r }, [Z$, n1t], [0, 0]]));
    es.for(l5).registerError(x4i, Jwe);
    ((T4i = [
      3,
      l5,
      rUa,
      8,
      [f4i, E4i, v4i],
      [
        [0, { [dy]: f4i }],
        [0, { [dy]: E4i }],
        [0, { [dy]: v4i }],
      ],
    ]),
      (D4i = [3, l5, iUa, 0, [hUa], [[() => I4i, 16]]]),
      (I4i = [
        3,
        l5,
        oUa,
        0,
        [h4i, A4i, dUa, _4i, g4i, r1t],
        [[0, { [dy]: h4i }], [0, { [dy]: A4i }], 0, [0, { [dy]: _4i }], [0, { [dy]: g4i }], [() => w4i, { [dy]: r1t }]],
      ]),
      (R4i = [3, l5, aUa, 0, [gUa], [[() => k4i, 16]]]),
      (k4i = [
        3,
        l5,
        sUa,
        0,
        [p4i, C4i, b4i, r1t, y4i],
        [
          [() => T4i, { [dy]: p4i }],
          [0, { [dy]: C4i }],
          [1, { [dy]: b4i }],
          [() => w4i, { [dy]: r1t }],
          [0, { [dy]: y4i }],
        ],
      ]),
      (O4i = [-3, l5, uUa, { [Z$]: pUa, [t2r]: 500 }, [Z$, n1t], [0, 0]]));
    es.for(l5).registerError(O4i, Xwe);
    N4i = [-3, l5, lUa, { [Z$]: e2r, [t2r]: 429 }, [Z$, n1t], [0, 0]];
    es.for(l5).registerError(N4i, Zwe);
    P4i = [-3, l5, mUa, { [Z$]: e2r, [t2r]: 400 }, [Z$, n1t], [0, 0]];
    es.for(l5).registerError(P4i, exe);
    B4i = [-3, S4i, "SigninServiceException", 0, [], []];
    es.for(S4i).registerError(B4i, YS);
    r2r = [9, l5, nUa, { [fUa]: ["POST", "/v1/token", 200] }, () => D4i, () => R4i];
  });
var L4i,
  i2r,
  txe,
  o2r = j(() => {
    ((L4i = Se(QS())), (i2r = Se(Ga())));
    VAr();
    n2r();
    txe = class extends (
      i2r.Command.classBuilder()
        .ep(OCi)
        .m(function (e, r, n, o) {
          return [(0, L4i.getEndpointPlugin)(n, e.getEndpointParameterInstructions())];
        })
        .s("Signin", "CreateOAuth2Token", {})
        .n("SigninClient", "CreateOAuth2TokenCommand")
        .sc(r2r)
        .build()
    ) {};
  });
var M4i,
  bUa,
  i1t,
  F4i = j(() => {
    M4i = Se(Ga());
    o2r();
    XAr();
    ((bUa = { CreateOAuth2TokenCommand: txe }), (i1t = class extends Kwe {}));
    (0, M4i.createAggregatedClient)(bUa, i1t);
  });
var U4i = j(() => {
  o2r();
});
var AUa,
  $4i = j(() => {
    AUa = {
      AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
      INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
      INVALID_REQUEST: "INVALID_REQUEST",
      SERVER_ERROR: "server_error",
      TOKEN_EXPIRED: "TOKEN_EXPIRED",
      USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED",
    };
  });
var j4i = j(() => {});
var Q4i = {};
Wi(Q4i, {
  $Command: () => i2r.Command,
  AccessDeniedException: () => Jwe,
  AccessDeniedException$: () => x4i,
  AccessToken$: () => T4i,
  CreateOAuth2Token$: () => r2r,
  CreateOAuth2TokenCommand: () => txe,
  CreateOAuth2TokenRequest$: () => D4i,
  CreateOAuth2TokenRequestBody$: () => I4i,
  CreateOAuth2TokenResponse$: () => R4i,
  CreateOAuth2TokenResponseBody$: () => k4i,
  InternalServerException: () => Xwe,
  InternalServerException$: () => O4i,
  OAuth2ErrorCode: () => AUa,
  Signin: () => i1t,
  SigninClient: () => Kwe,
  SigninServiceException: () => YS,
  SigninServiceException$: () => B4i,
  TooManyRequestsError: () => Zwe,
  TooManyRequestsError$: () => N4i,
  ValidationException: () => exe,
  ValidationException$: () => P4i,
  __Client: () => JAr.Client,
});
var G4i = j(() => {
  XAr();
  F4i();
  U4i();
  n2r();
  $4i();
  ZAr();
  j4i();
  t1t();
});