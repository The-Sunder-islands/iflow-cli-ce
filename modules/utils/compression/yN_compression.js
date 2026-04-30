/**
 * @module yN
 * @category utils/compression
 * @label compression
 * @position 1704 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yN) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yN = T((I0) => {
  "use strict";
  I0.HttpAuthLocation = void 0;
  (function (t) {
    ((t.HEADER = "header"), (t.QUERY = "query"));
  })(I0.HttpAuthLocation || (I0.HttpAuthLocation = {}));
  I0.HttpApiKeyAuthLocation = void 0;
  (function (t) {
    ((t.HEADER = "header"), (t.QUERY = "query"));
  })(I0.HttpApiKeyAuthLocation || (I0.HttpApiKeyAuthLocation = {}));
  I0.EndpointURLScheme = void 0;
  (function (t) {
    ((t.HTTP = "http"), (t.HTTPS = "https"));
  })(I0.EndpointURLScheme || (I0.EndpointURLScheme = {}));
  I0.AlgorithmId = void 0;
  (function (t) {
    ((t.MD5 = "md5"), (t.CRC32 = "crc32"), (t.CRC32C = "crc32c"), (t.SHA1 = "sha1"), (t.SHA256 = "sha256"));
  })(I0.AlgorithmId || (I0.AlgorithmId = {}));
  var nTa = (t) => {
      let e = [];
      return (
        t.sha256 !== void 0 &&
          e.push({ algorithmId: () => I0.AlgorithmId.SHA256, checksumConstructor: () => t.sha256 }),
        t.md5 != null && e.push({ algorithmId: () => I0.AlgorithmId.MD5, checksumConstructor: () => t.md5 }),
        {
          addChecksumAlgorithm(r) {
            e.push(r);
          },
          checksumAlgorithms() {
            return e;
          },
        }
      );
    },
    iTa = (t) => {
      let e = {};
      return (
        t.checksumAlgorithms().forEach((r) => {
          e[r.algorithmId()] = r.checksumConstructor();
        }),
        e
      );
    },
    oTa = (t) => nTa(t),
    sTa = (t) => iTa(t);
  I0.FieldPosition = void 0;
  (function (t) {
    ((t[(t.HEADER = 0)] = "HEADER"), (t[(t.TRAILER = 1)] = "TRAILER"));
  })(I0.FieldPosition || (I0.FieldPosition = {}));
  var aTa = "__smithy_context";
  I0.IniSectionType = void 0;
  (function (t) {
    ((t.PROFILE = "profile"), (t.SSO_SESSION = "sso-session"), (t.SERVICES = "services"));
  })(I0.IniSectionType || (I0.IniSectionType = {}));
  I0.RequestHandlerProtocol = void 0;
  (function (t) {
    ((t.HTTP_0_9 = "http/0.9"), (t.HTTP_1_0 = "http/1.0"), (t.TDS_8_0 = "tds/8.0"));
  })(I0.RequestHandlerProtocol || (I0.RequestHandlerProtocol = {}));
  I0.SMITHY_CONTEXT_KEY = aTa;
  I0.getDefaultClientConfiguration = oTa;
  I0.resolveDefaultRuntimeConfig = sTa;
});