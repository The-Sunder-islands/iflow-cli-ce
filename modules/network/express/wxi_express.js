/**
 * @module wxi
 * @category network/express
 * @label express
 * @position 1826 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wxi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wxi = T((N1t) => {
  "use strict";
  Object.defineProperty(N1t, "__esModule", { value: !0 });
  N1t.getRuntimeConfig = void 0;
  var lQa = (rI(), bt(tI)),
    mQa = lQa.__importDefault(g_i()),
    G2r = (Wp(), bt(iI)),
    dQa = Gwi(),
    fQa = sxi(),
    _xi = Vgr(),
    pQa = Amt(),
    Exi = ude(),
    O1t = b9(),
    hQa = fxi(),
    q2r = cde(),
    gQa = pxi(),
    vxi = GS(),
    kv = uI(),
    Cxi = E$(),
    Sxi = Ga(),
    bQa = lde(),
    AQa = mde(),
    yQa = SK(),
    _Qa = yxi(),
    EQa = (t) => {
      (0, Sxi.emitWarningIfUnsupportedVersion)(process.version);
      let e = (0, AQa.resolveDefaultsModeConfig)(t),
        r = () => e().then(Sxi.loadConfigsForDefaultMode),
        n = (0, _Qa.getRuntimeConfig)(t);
      (0, G2r.emitWarningIfUnsupportedVersion)(process.version);
      let o = { profile: t?.profile, logger: n.logger };
      return {
        ...n,
        ...t,
        runtime: "node",
        defaultsMode: e,
        authSchemePreference: t?.authSchemePreference ?? (0, kv.loadConfig)(G2r.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
        bodyLengthChecker: t?.bodyLengthChecker ?? bQa.calculateBodyLength,
        credentialDefaultProvider: t?.credentialDefaultProvider ?? dQa.defaultProvider,
        defaultUserAgentProvider:
          t?.defaultUserAgentProvider ??
          (0, Exi.createDefaultUserAgentProvider)({ serviceId: n.serviceId, clientVersion: mQa.default.version }),
        disableS3ExpressSessionAuth:
          t?.disableS3ExpressSessionAuth ?? (0, kv.loadConfig)(pQa.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS, o),
        eventStreamSerdeProvider: t?.eventStreamSerdeProvider ?? hQa.eventStreamSerdeProvider,
        maxAttempts: t?.maxAttempts ?? (0, kv.loadConfig)(vxi.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, t),
        md5: t?.md5 ?? q2r.Hash.bind(null, "md5"),
        region:
          t?.region ??
          (0, kv.loadConfig)(O1t.NODE_REGION_CONFIG_OPTIONS, { ...O1t.NODE_REGION_CONFIG_FILE_OPTIONS, ...o }),
        requestChecksumCalculation:
          t?.requestChecksumCalculation ?? (0, kv.loadConfig)(_xi.NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS, o),
        requestHandler: Cxi.NodeHttpHandler.create(t?.requestHandler ?? r),
        responseChecksumValidation:
          t?.responseChecksumValidation ?? (0, kv.loadConfig)(_xi.NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS, o),
        retryMode:
          t?.retryMode ??
          (0, kv.loadConfig)(
            {
              ...vxi.NODE_RETRY_MODE_CONFIG_OPTIONS,
              default: async () => (await r()).retryMode || yQa.DEFAULT_RETRY_MODE,
            },
            t,
          ),
        sha1: t?.sha1 ?? q2r.Hash.bind(null, "sha1"),
        sha256: t?.sha256 ?? q2r.Hash.bind(null, "sha256"),
        sigv4aSigningRegionSet: t?.sigv4aSigningRegionSet ?? (0, kv.loadConfig)(G2r.NODE_SIGV4A_CONFIG_OPTIONS, o),
        streamCollector: t?.streamCollector ?? Cxi.streamCollector,
        streamHasher: t?.streamHasher ?? gQa.readableStreamHasher,
        useArnRegion: t?.useArnRegion ?? (0, kv.loadConfig)(fQa.NODE_USE_ARN_REGION_CONFIG_OPTIONS, o),
        useDualstackEndpoint:
          t?.useDualstackEndpoint ?? (0, kv.loadConfig)(O1t.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
        useFipsEndpoint: t?.useFipsEndpoint ?? (0, kv.loadConfig)(O1t.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
        userAgentAppId: t?.userAgentAppId ?? (0, kv.loadConfig)(Exi.NODE_APP_ID_CONFIG_OPTIONS, o),
      };
    };
  N1t.getRuntimeConfig = EQa;
});