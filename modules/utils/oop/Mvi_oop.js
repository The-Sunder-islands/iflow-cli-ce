/**
 * @module Mvi
 * @category utils/oop
 * @label oop
 * @position 1808 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mvi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mvi = T((gdt) => {
  "use strict";
  Object.defineProperty(gdt, "__esModule", { value: !0 });
  gdt.getRuntimeConfig = void 0;
  var MMa = (Wp(), bt(iI)),
    FMa = (yK(), bt(Sgr)),
    UMa = (EA(), bt(hK)),
    $Ma = Ga(),
    jMa = PN(),
    Bvi = p3(),
    Lvi = ep(),
    QMa = UAr(),
    GMa = Pvi(),
    qMa = (t) => ({
      apiVersion: "2019-06-10",
      base64Decoder: t?.base64Decoder ?? Bvi.fromBase64,
      base64Encoder: t?.base64Encoder ?? Bvi.toBase64,
      disableHostPrefix: t?.disableHostPrefix ?? !1,
      endpointProvider: t?.endpointProvider ?? GMa.defaultEndpointResolver,
      extensions: t?.extensions ?? [],
      httpAuthSchemeProvider: t?.httpAuthSchemeProvider ?? QMa.defaultSSOHttpAuthSchemeProvider,
      httpAuthSchemes: t?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (e) => e.getIdentityProvider("aws.auth#sigv4"),
          signer: new MMa.AwsSdkSigV4Signer(),
        },
        {
          schemeId: "smithy.api#noAuth",
          identityProvider: (e) => e.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
          signer: new UMa.NoAuthSigner(),
        },
      ],
      logger: t?.logger ?? new $Ma.NoOpLogger(),
      protocol: t?.protocol ?? FMa.AwsRestJsonProtocol,
      protocolSettings: t?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.sso",
        version: "2019-06-10",
        serviceTarget: "SWBPortalService",
      },
      serviceId: t?.serviceId ?? "SSO",
      urlParser: t?.urlParser ?? jMa.parseUrl,
      utf8Decoder: t?.utf8Decoder ?? Lvi.fromUtf8,
      utf8Encoder: t?.utf8Encoder ?? Lvi.toUtf8,
    });
  gdt.getRuntimeConfig = qMa;
});