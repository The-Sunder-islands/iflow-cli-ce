/**
 * @module x2r
 * @category utils/json
 * @label json
 * @position 1814 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (x2r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var x2r = T((Iwi) => {
  "use strict";
  var w2r = aI(),
    S2r = vA(),
    C$a = Ae("child_process"),
    S$a = Ae("util"),
    w$a = (_v(), bt(_N)),
    x$a = (t, e, r) => {
      if (e.Version !== 1) throw Error(`Profile ${t} credential_process did not return Version 1.`);
      if (e.AccessKeyId === void 0 || e.SecretAccessKey === void 0)
        throw Error(`Profile ${t} credential_process returned invalid credentials.`);
      if (e.Expiration) {
        let s = new Date();
        if (new Date(e.Expiration) < s) throw Error(`Profile ${t} credential_process returned expired credentials.`);
      }
      let n = e.AccountId;
      !n && r?.[t]?.aws_account_id && (n = r[t].aws_account_id);
      let o = {
        accessKeyId: e.AccessKeyId,
        secretAccessKey: e.SecretAccessKey,
        ...(e.SessionToken && { sessionToken: e.SessionToken }),
        ...(e.Expiration && { expiration: new Date(e.Expiration) }),
        ...(e.CredentialScope && { credentialScope: e.CredentialScope }),
        ...(n && { accountId: n }),
      };
      return (w$a.setCredentialFeature(o, "CREDENTIALS_PROCESS", "w"), o);
    },
    T$a = async (t, e, r) => {
      let n = e[t];
      if (e[t]) {
        let o = n.credential_process;
        if (o !== void 0) {
          let s = S$a.promisify(w2r.externalDataInterceptor?.getTokenRecord?.().exec ?? C$a.exec);
          try {
            let { stdout: a } = await s(o),
              u;
            try {
              u = JSON.parse(a.trim());
            } catch {
              throw Error(`Profile ${t} credential_process returned invalid JSON.`);
            }
            return x$a(t, u, e);
          } catch (a) {
            throw new S2r.CredentialsProviderError(a.message, { logger: r });
          }
        } else
          throw new S2r.CredentialsProviderError(`Profile ${t} did not contain credential_process.`, { logger: r });
      } else
        throw new S2r.CredentialsProviderError(`Profile ${t} could not be found in shared credentials file.`, {
          logger: r,
        });
    },
    D$a =
      (t = {}) =>
      async ({ callerClientConfig: e } = {}) => {
        t.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
        let r = await w2r.parseKnownFiles(t);
        return T$a(w2r.getProfileName({ profile: t.profile ?? e?.profile }), r, t.logger);
      };
  Iwi.fromProcess = D$a;
});