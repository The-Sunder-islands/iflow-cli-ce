/**
 * @module mAr
 * @category unknown
 * @label unknown
 * @position 1790 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mAr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mAr = T((H$) => {
  "use strict";
  var ZPa = (_v(), bt(_N)),
    eBa = vA(),
    b_i = "AWS_ACCESS_KEY_ID",
    A_i = "AWS_SECRET_ACCESS_KEY",
    y_i = "AWS_SESSION_TOKEN",
    __i = "AWS_CREDENTIAL_EXPIRATION",
    E_i = "AWS_CREDENTIAL_SCOPE",
    v_i = "AWS_ACCOUNT_ID",
    tBa = (t) => async () => {
      t?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
      let e = process.env[b_i],
        r = process.env[A_i],
        n = process.env[y_i],
        o = process.env[__i],
        s = process.env[E_i],
        a = process.env[v_i];
      if (e && r) {
        let u = {
          accessKeyId: e,
          secretAccessKey: r,
          ...(n && { sessionToken: n }),
          ...(o && { expiration: new Date(o) }),
          ...(s && { credentialScope: s }),
          ...(a && { accountId: a }),
        };
        return (ZPa.setCredentialFeature(u, "CREDENTIALS_ENV_VARS", "g"), u);
      }
      throw new eBa.CredentialsProviderError("Unable to find environment variable credentials.", { logger: t?.logger });
    };
  H$.ENV_ACCOUNT_ID = v_i;
  H$.ENV_CREDENTIAL_SCOPE = E_i;
  H$.ENV_EXPIRATION = __i;
  H$.ENV_KEY = b_i;
  H$.ENV_SECRET = A_i;
  H$.ENV_SESSION = y_i;
  H$.fromEnv = tBa;
});