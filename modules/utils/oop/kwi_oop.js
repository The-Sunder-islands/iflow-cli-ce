/**
 * @module kwi
 * @category utils/oop
 * @label oop
 * @position 1816 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kwi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kwi = T((w1t) => {
  "use strict";
  Object.defineProperty(w1t, "__esModule", { value: !0 });
  w1t.fromTokenFile = void 0;
  var N$a = (_v(), bt(_N)),
    P$a = vA(),
    B$a = aI(),
    L$a = Ae("fs"),
    M$a = T2r(),
    Rwi = "AWS_WEB_IDENTITY_TOKEN_FILE",
    F$a = "AWS_ROLE_ARN",
    U$a = "AWS_ROLE_SESSION_NAME",
    $$a =
      (t = {}) =>
      async (e) => {
        t.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
        let r = t?.webIdentityTokenFile ?? process.env[Rwi],
          n = t?.roleArn ?? process.env[F$a],
          o = t?.roleSessionName ?? process.env[U$a];
        if (!r || !n)
          throw new P$a.CredentialsProviderError("Web identity configuration not specified", { logger: t.logger });
        let s = await (0, M$a.fromWebToken)({
          ...t,
          webIdentityToken:
            B$a.externalDataInterceptor?.getTokenRecord?.()[r] ?? (0, L$a.readFileSync)(r, { encoding: "ascii" }),
          roleArn: n,
          roleSessionName: o,
        })(e);
        return (
          r === process.env[Rwi] && (0, N$a.setCredentialFeature)(s, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h"),
          s
        );
      };
  w1t.fromTokenFile = $$a;
});