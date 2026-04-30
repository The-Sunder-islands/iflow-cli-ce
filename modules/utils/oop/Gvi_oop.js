/**
 * @module Gvi
 * @category utils/oop
 * @label oop
 * @position 1809 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gvi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gvi = T((Adt) => {
  "use strict";
  Object.defineProperty(Adt, "__esModule", { value: !0 });
  Adt.getRuntimeConfig = void 0;
  var HMa = (rI(), bt(tI)),
    VMa = HMa.__importDefault(Avi()),
    Fvi = (Wp(), bt(iI)),
    Uvi = ude(),
    bdt = b9(),
    WMa = cde(),
    $vi = GS(),
    IK = uI(),
    jvi = E$(),
    Qvi = Ga(),
    zMa = lde(),
    YMa = mde(),
    KMa = SK(),
    JMa = Mvi(),
    XMa = (t) => {
      (0, Qvi.emitWarningIfUnsupportedVersion)(process.version);
      let e = (0, YMa.resolveDefaultsModeConfig)(t),
        r = () => e().then(Qvi.loadConfigsForDefaultMode),
        n = (0, JMa.getRuntimeConfig)(t);
      (0, Fvi.emitWarningIfUnsupportedVersion)(process.version);
      let o = { profile: t?.profile, logger: n.logger };
      return {
        ...n,
        ...t,
        runtime: "node",
        defaultsMode: e,
        authSchemePreference: t?.authSchemePreference ?? (0, IK.loadConfig)(Fvi.NODE_AUTH_SCHEME_PREFERENCE_OPTIONS, o),
        bodyLengthChecker: t?.bodyLengthChecker ?? zMa.calculateBodyLength,
        defaultUserAgentProvider:
          t?.defaultUserAgentProvider ??
          (0, Uvi.createDefaultUserAgentProvider)({ serviceId: n.serviceId, clientVersion: VMa.default.version }),
        maxAttempts: t?.maxAttempts ?? (0, IK.loadConfig)($vi.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, t),
        region:
          t?.region ??
          (0, IK.loadConfig)(bdt.NODE_REGION_CONFIG_OPTIONS, { ...bdt.NODE_REGION_CONFIG_FILE_OPTIONS, ...o }),
        requestHandler: jvi.NodeHttpHandler.create(t?.requestHandler ?? r),
        retryMode:
          t?.retryMode ??
          (0, IK.loadConfig)(
            {
              ...$vi.NODE_RETRY_MODE_CONFIG_OPTIONS,
              default: async () => (await r()).retryMode || KMa.DEFAULT_RETRY_MODE,
            },
            t,
          ),
        sha256: t?.sha256 ?? WMa.Hash.bind(null, "sha256"),
        streamCollector: t?.streamCollector ?? jvi.streamCollector,
        useDualstackEndpoint:
          t?.useDualstackEndpoint ?? (0, IK.loadConfig)(bdt.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, o),
        useFipsEndpoint: t?.useFipsEndpoint ?? (0, IK.loadConfig)(bdt.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, o),
        userAgentAppId: t?.userAgentAppId ?? (0, IK.loadConfig)(Uvi.NODE_APP_ID_CONFIG_OPTIONS, o),
      };
    };
  Adt.getRuntimeConfig = XMa;
});