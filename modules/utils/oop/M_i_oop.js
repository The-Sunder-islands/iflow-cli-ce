/**
 * @module M_i
 * @category utils/oop
 * @label oop
 * @position 1795 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (M_i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var M_i = T((Kmt) => {
  "use strict";
  Object.defineProperty(Kmt, "__esModule", { value: !0 });
  Kmt.fromHttp = void 0;
  var jBa = (rI(), bt(tI)),
    QBa = (_v(), bt(_N)),
    GBa = E$(),
    B_i = vA(),
    qBa = jBa.__importDefault(Ae("fs/promises")),
    HBa = O_i(),
    L_i = N_i(),
    VBa = P_i(),
    WBa = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
    zBa = "http://169.254.170.2",
    YBa = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    KBa = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
    JBa = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
    XBa = (t = {}) => {
      t.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
      let e,
        r = t.awsContainerCredentialsRelativeUri ?? process.env[WBa],
        n = t.awsContainerCredentialsFullUri ?? process.env[YBa],
        o = t.awsContainerAuthorizationToken ?? process.env[JBa],
        s = t.awsContainerAuthorizationTokenFile ?? process.env[KBa],
        a =
          t.logger?.constructor?.name === "NoOpLogger" || !t.logger?.warn ? console.warn : t.logger.warn.bind(t.logger);
      if (
        (r &&
          n &&
          (a(
            "@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.",
          ),
          a("awsContainerCredentialsFullUri will take precedence.")),
        o &&
          s &&
          (a(
            "@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.",
          ),
          a("awsContainerAuthorizationToken will take precedence.")),
        n)
      )
        e = n;
      else if (r) e = `${zBa}${r}`;
      else
        throw new B_i.CredentialsProviderError(
          `No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`,
          { logger: t.logger },
        );
      let u = new URL(e);
      (0, HBa.checkUrl)(u, t.logger);
      let c = GBa.NodeHttpHandler.create({ requestTimeout: t.timeout ?? 1e3, connectionTimeout: t.timeout ?? 1e3 });
      return (0, VBa.retryWrapper)(
        async () => {
          let m = (0, L_i.createGetRequest)(u);
          o
            ? (m.headers.Authorization = o)
            : s && (m.headers.Authorization = (await qBa.default.readFile(s)).toString());
          try {
            let d = await c.handle(m);
            return (0, L_i.getCredentials)(d.response).then((f) =>
              (0, QBa.setCredentialFeature)(f, "CREDENTIALS_HTTP", "z"),
            );
          } catch (d) {
            throw new B_i.CredentialsProviderError(String(d), { logger: t.logger });
          }
        },
        t.maxRetries ?? 3,
        t.timeout ?? 1e3,
      );
    };
  Kmt.fromHttp = XBa;
});