/**
 * @module yxi
 * @category utils/xml
 * @label xml
 * @position 1825 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yxi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yxi = T((k1t) => {
  "use strict";
  Object.defineProperty(k1t, "__esModule", { value: !0 });
  k1t.getRuntimeConfig = void 0;
  var hxi = (Wp(), bt(iI)),
    nQa = (yK(), bt(Sgr)),
    iQa = Ibr(),
    oQa = Ga(),
    sQa = PN(),
    gxi = p3(),
    bxi = aK(),
    Axi = ep(),
    aQa = lAr(),
    uQa = cAr(),
    cQa = (t) => ({
      apiVersion: "2006-03-01",
      base64Decoder: t?.base64Decoder ?? gxi.fromBase64,
      base64Encoder: t?.base64Encoder ?? gxi.toBase64,
      disableHostPrefix: t?.disableHostPrefix ?? !1,
      endpointProvider: t?.endpointProvider ?? uQa.defaultEndpointResolver,
      extensions: t?.extensions ?? [],
      getAwsChunkedEncodingStream: t?.getAwsChunkedEncodingStream ?? bxi.getAwsChunkedEncodingStream,
      httpAuthSchemeProvider: t?.httpAuthSchemeProvider ?? aQa.defaultS3HttpAuthSchemeProvider,
      httpAuthSchemes: t?.httpAuthSchemes ?? [
        {
          schemeId: "aws.auth#sigv4",
          identityProvider: (e) => e.getIdentityProvider("aws.auth#sigv4"),
          signer: new hxi.AwsSdkSigV4Signer(),
        },
        {
          schemeId: "aws.auth#sigv4a",
          identityProvider: (e) => e.getIdentityProvider("aws.auth#sigv4a"),
          signer: new hxi.AwsSdkSigV4ASigner(),
        },
      ],
      logger: t?.logger ?? new oQa.NoOpLogger(),
      protocol: t?.protocol ?? nQa.AwsRestXmlProtocol,
      protocolSettings: t?.protocolSettings ?? {
        defaultNamespace: "com.amazonaws.s3",
        xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/",
        version: "2006-03-01",
        serviceTarget: "AmazonS3",
      },
      sdkStreamMixin: t?.sdkStreamMixin ?? bxi.sdkStreamMixin,
      serviceId: t?.serviceId ?? "S3",
      signerConstructor: t?.signerConstructor ?? iQa.SignatureV4MultiRegion,
      signingEscapePath: t?.signingEscapePath ?? !1,
      urlParser: t?.urlParser ?? sQa.parseUrl,
      useArnRegion: t?.useArnRegion ?? void 0,
      utf8Decoder: t?.utf8Decoder ?? Axi.fromUtf8,
      utf8Encoder: t?.utf8Encoder ?? Axi.toUtf8,
    });
  k1t.getRuntimeConfig = cQa;
});