/**
 * @module N_i
 * @category utils/oop
 * @label oop
 * @position 1793 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (N_i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var N_i = T((zmt) => {
  "use strict";
  Object.defineProperty(zmt, "__esModule", { value: !0 });
  zmt.createGetRequest = FBa;
  zmt.getCredentials = UBa;
  var AAr = vA(),
    BBa = Tc(),
    LBa = Ga(),
    MBa = aK();
  function FBa(t) {
    return new BBa.HttpRequest({
      protocol: t.protocol,
      hostname: t.hostname,
      port: Number(t.port),
      path: t.pathname,
      query: Array.from(t.searchParams.entries()).reduce((e, [r, n]) => ((e[r] = n), e), {}),
      fragment: t.hash,
    });
  }
  async function UBa(t, e) {
    let n = await (0, MBa.sdkStreamMixin)(t.body).transformToString();
    if (t.statusCode === 200) {
      let o = JSON.parse(n);
      if (
        typeof o.AccessKeyId != "string" ||
        typeof o.SecretAccessKey != "string" ||
        typeof o.Token != "string" ||
        typeof o.Expiration != "string"
      )
        throw new AAr.CredentialsProviderError(
          "HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }",
          { logger: e },
        );
      return {
        accessKeyId: o.AccessKeyId,
        secretAccessKey: o.SecretAccessKey,
        sessionToken: o.Token,
        expiration: (0, LBa.parseRfc3339DateTime)(o.Expiration),
      };
    }
    if (t.statusCode >= 400 && t.statusCode < 500) {
      let o = {};
      try {
        o = JSON.parse(n);
      } catch {}
      throw Object.assign(
        new AAr.CredentialsProviderError(`Server responded with status: ${t.statusCode}`, { logger: e }),
        { Code: o.Code, Message: o.Message },
      );
    }
    throw new AAr.CredentialsProviderError(`Server responded with status: ${t.statusCode}`, { logger: e });
  }
});