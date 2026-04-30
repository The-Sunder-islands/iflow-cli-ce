/**
 * @module mde
 * @category cli/args
 * @label yargs
 * @position 1800 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mde) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mde = T((tEi) => {
  "use strict";
  var mLa = b9(),
    X_i = uI(),
    dLa = vA(),
    fLa = "AWS_EXECUTION_ENV",
    Z_i = "AWS_REGION",
    eEi = "AWS_DEFAULT_REGION",
    pLa = "AWS_EC2_METADATA_DISABLED",
    hLa = ["in-region", "cross-region", "mobile", "standard", "legacy"],
    gLa = "/latest/meta-data/placement/region",
    bLa = "AWS_DEFAULTS_MODE",
    ALa = "defaults_mode",
    yLa = { environmentVariableSelector: (t) => t[bLa], configFileSelector: (t) => t[ALa], default: "legacy" },
    _La = ({
      region: t = X_i.loadConfig(mLa.NODE_REGION_CONFIG_OPTIONS),
      defaultsMode: e = X_i.loadConfig(yLa),
    } = {}) =>
      dLa.memoize(async () => {
        let r = typeof e == "function" ? await e() : e;
        switch (r?.toLowerCase()) {
          case "auto":
            return ELa(t);
          case "in-region":
          case "cross-region":
          case "mobile":
          case "standard":
          case "legacy":
            return Promise.resolve(r?.toLocaleLowerCase());
          case void 0:
            return Promise.resolve("legacy");
          default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${hLa.join(", ")}, got ${r}`);
        }
      }),
    ELa = async (t) => {
      if (t) {
        let e = typeof t == "function" ? await t() : t,
          r = await vLa();
        return r ? (e === r ? "in-region" : "cross-region") : "standard";
      }
      return "standard";
    },
    vLa = async () => {
      if (process.env[fLa] && (process.env[Z_i] || process.env[eEi])) return process.env[Z_i] ?? process.env[eEi];
      if (!process.env[pLa])
        try {
          let { getInstanceMetadataEndpoint: t, httpRequest: e } = await Promise.resolve().then(() => Se(Swe())),
            r = await t();
          return (await e({ ...r, path: gLa })).toString();
        } catch {}
    };
  tEi.resolveDefaultsModeConfig = _La;
});
var mEi,
  Tv,
  rEi,
  xwe,
  dde,
  fde,
  MN,
  xAr,
  TAr,
  nEi,
  iEi,
  oEi,
  dEi,
  fEi,
  xv,
  sEi,
  pEi,
  aEi,
  uEi,
  cEi,
  lEi,
  CLa,
  hEi,
  gEi = j(() => {
    ((mEi = "required"),
      (Tv = "argv"),
      (rEi = "isSet"),
      (xwe = "booleanEquals"),
      (dde = "error"),
      (fde = "endpoint"),
      (MN = "tree"),
      (xAr = "PartitionResult"),
      (TAr = "getAttr"),
      (nEi = { [mEi]: !1, type: "string" }),
      (iEi = { [mEi]: !0, default: !1, type: "boolean" }),
      (oEi = { ref: "Endpoint" }),
      (dEi = { fn: xwe, [Tv]: [{ ref: "UseFIPS" }, !0] }),
      (fEi = { fn: xwe, [Tv]: [{ ref: "UseDualStack" }, !0] }),
      (xv = {}),
      (sEi = { fn: TAr, [Tv]: [{ ref: xAr }, "supportsFIPS"] }),
      (pEi = { ref: xAr }),
      (aEi = { fn: xwe, [Tv]: [!0, { fn: TAr, [Tv]: [pEi, "supportsDualStack"] }] }),
      (uEi = [dEi]),
      (cEi = [fEi]),
      (lEi = [{ ref: "Region" }]),
      (CLa = {
        version: "1.0",
        parameters: { Region: nEi, UseDualStack: iEi, UseFIPS: iEi, Endpoint: nEi },
        rules: [
          {
            conditions: [{ fn: rEi, [Tv]: [oEi] }],
            rules: [
              {
                conditions: uEi,
                error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                type: dde,
              },
              {
                conditions: cEi,
                error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                type: dde,
              },
              { endpoint: { url: oEi, properties: xv, headers: xv }, type: fde },
            ],
            type: MN,
          },
          {
            conditions: [{ fn: rEi, [Tv]: lEi }],
            rules: [
              {
                conditions: [{ fn: "aws.partition", [Tv]: lEi, assign: xAr }],
                rules: [
                  {
                    conditions: [dEi, fEi],
                    rules: [
                      {
                        conditions: [{ fn: xwe, [Tv]: [!0, sEi] }, aEi],
                        rules: [
                          {
                            endpoint: {
                              url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: xv,
                              headers: xv,
                            },
                            type: fde,
                          },
                        ],
                        type: MN,
                      },
                      {
                        error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                        type: dde,
                      },
                    ],
                    type: MN,
                  },
                  {
                    conditions: uEi,
                    rules: [
                      {
                        conditions: [{ fn: xwe, [Tv]: [sEi, !0] }],
                        rules: [
                          {
                            conditions: [
                              { fn: "stringEquals", [Tv]: [{ fn: TAr, [Tv]: [pEi, "name"] }, "aws-us-gov"] },
                            ],
                            endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: xv, headers: xv },
                            type: fde,
                          },
                          {
                            endpoint: {
                              url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}",
                              properties: xv,
                              headers: xv,
                            },
                            type: fde,
                          },
                        ],
                        type: MN,
                      },
                      { error: "FIPS is enabled but this partition does not support FIPS", type: dde },
                    ],
                    type: MN,
                  },
                  {
                    conditions: cEi,
                    rules: [
                      {
                        conditions: [aEi],
                        rules: [
                          {
                            endpoint: {
                              url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}",
                              properties: xv,
                              headers: xv,
                            },
                            type: fde,
                          },
                        ],
                        type: MN,
                      },
                      { error: "DualStack is enabled but this partition does not support DualStack", type: dde },
                    ],
                    type: MN,
                  },
                  {
                    endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: xv, headers: xv },
                    type: fde,
                  },
                ],
                type: MN,
              },
            ],
            type: MN,
          },
          { error: "Invalid Configuration: Missing Region", type: dde },
        ],
      }),
      (hEi = CLa));
  });
var bEi,
  pde,
  SLa,
  AEi,
  yEi = j(() => {
    ((bEi = Se(EK())), (pde = Se(F$())));
    gEi();
    ((SLa = new pde.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] })),
      (AEi = (t, e = {}) => SLa.get(t, () => (0, pde.resolveEndpoint)(hEi, { endpointParams: t, logger: e.logger }))));
    pde.customEndpointFunctions.aws = bEi.awsEndpointFunctions;
  });
var _Ei,
  EEi,
  Zmt,
  edt,
  vEi,
  CEi = j(() => {
    Wp();
    yK();
    EA();
    ((_Ei = Se(Ga())), (EEi = Se(PN())), (Zmt = Se(p3())), (edt = Se(ep())));
    _Ar();
    yEi();
    vEi = (t) => ({
      apiVersion: "2019-06-10",
      base64Decoder: t?.base64Decoder ?? Zmt.fromBase64,
      base64Encoder: t?.base64Encoder ?? Zmt.toBase64,
      disableHostPrefix: t?.disableHostPrefix ?? !1,
      endpointProvider: t?.endpointProvider ?? AEi,
      extensions: t?.extensions ?? [],
      httpAuthSchemeProvider: t?.httpAuthSchemeProvider ?? U_i,
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
      logger: t?.logger ?? new _Ei.NoOpLogger(),
      protocol: t?.protocol ?? O$,
      protocolSettings: t?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.ssooidc",
        version: "2019-06-10",
        serviceTarget: "AWSSSOOIDCService",
      },
      serviceId: t?.serviceId ?? "SSO OIDC",
      urlParser: t?.urlParser ?? EEi.parseUrl,
      utf8Decoder: t?.utf8Decoder ?? edt.fromUtf8,
      utf8Encoder: t?.utf8Encoder ?? edt.toUtf8,
    });
  });
var tdt,
  W$,
  SEi,
  rdt,
  V$,
  ndt,
  idt,
  wEi,
  xEi,
  TEi,
  DEi,
  IEi = j(() => {
    Xmt();
    Wp();
    ((tdt = Se(ude())),
      (W$ = Se(b9())),
      (SEi = Se(cde())),
      (rdt = Se(GS())),
      (V$ = Se(uI())),
      (ndt = Se(E$())),
      (idt = Se(Ga())),
      (wEi = Se(lde())),
      (xEi = Se(mde())),
      (TEi = Se(SK())));
    CEi();
    DEi = (t) => {
      (0, idt.emitWarningIfUnsupportedVersion)(process.version);
      let e = (0, xEi.resolveDefaultsModeConfig)(t),
        r = () => e().then(idt.loadConfigsForDefaultMode),
        n = vEi(t);
      g$(process.version);
      let o = { profile: t?.profile, logger: n.logger };
      return {
        ...n,
        ...t,
        runtime: "node",
        defaultsMode: e,
        authSchemePreference: t?.authSchemePreference ?? (0, V$.loadConfig)(A$, o),
        bodyLengthChecker: t?.bodyLengthChecker ?? wEi.calculateBodyLength,
        defaultUserAgentProvider:
          t?.defaultUserAgentProvider ??
          (0, tdt.createDefaultUserAgentProvider)({ serviceId: n.serviceId, clientVersion: ade.version }),
        maxAttempts: t?.maxAttempts ?? (0, V$.loadConfig)(rdt.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, t),
        region:
          t?.region ??
          (0, V$.loadConfig)(W$.NODE_REGION_CONFIG_OPTIONS, { ...W$.NODE_REGION_CONFIG_FILE_OPTIONS, ...o }),
        requestHandler: ndt.NodeHttpHandler.create(t?.requestHandler ?? r),
        retryMode:
          t?.retryMode ??
          (0, V$.loadConfig)(
            {
              ...rdt.NODE_RETRY_MODE_CONFIG_OPTIONS,
              default: async () => (await r()).retryMode || TEi.DEFAULT_RETRY_MODE,
            },
            t,
          ),
        sha256: t?.sha256 ?? SEi.Hash.bind(null, "sha256"),
        streamCollector: t?.streamCollector ?? ndt.streamCollector,
        useDualstackEndpoint:
          t?.useDualstackEndpoint ?? (0, V$.loadConfig)(W$.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
        useFipsEndpoint: t?.useFipsEndpoint ?? (0, V$.loadConfig)(W$.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
        userAgentAppId: t?.userAgentAppId ?? (0, V$.loadConfig)(tdt.NODE_APP_ID_CONFIG_OPTIONS, o),
      };
    };
  });