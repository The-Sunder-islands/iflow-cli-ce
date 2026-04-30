/**
 * @module UAr
 * @category unknown
 * @label unknown
 * @position 1804 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UAr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UAr = T((z$) => {
  "use strict";
  Object.defineProperty(z$, "__esModule", { value: !0 });
  z$.resolveHttpAuthSchemeConfig =
    z$.defaultSSOHttpAuthSchemeProvider =
    z$.defaultSSOHttpAuthSchemeParametersProvider =
      void 0;
  var xMa = (Wp(), bt(iI)),
    FAr = Hg(),
    TMa = async (t, e, r) => ({
      operation: (0, FAr.getSmithyContext)(e).operation,
      region:
        (await (0, FAr.normalizeProvider)(t.region)()) ||
        (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })(),
    });
  z$.defaultSSOHttpAuthSchemeParametersProvider = TMa;
  function DMa(t) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: { name: "awsssoportal", region: t.region },
      propertiesExtractor: (e, r) => ({ signingProperties: { config: e, context: r } }),
    };
  }
  function fdt(t) {
    return { schemeId: "smithy.api#noAuth" };
  }
  var IMa = (t) => {
    let e = [];
    switch (t.operation) {
      case "GetRoleCredentials": {
        e.push(fdt(t));
        break;
      }
      case "ListAccountRoles": {
        e.push(fdt(t));
        break;
      }
      case "ListAccounts": {
        e.push(fdt(t));
        break;
      }
      case "Logout": {
        e.push(fdt(t));
        break;
      }
      default:
        e.push(DMa(t));
    }
    return e;
  };
  z$.defaultSSOHttpAuthSchemeProvider = IMa;
  var RMa = (t) => {
    let e = (0, xMa.resolveAwsSdkSigV4Config)(t);
    return Object.assign(e, { authSchemePreference: (0, FAr.normalizeProvider)(t.authSchemePreference ?? []) });
  };
  z$.resolveHttpAuthSchemeConfig = RMa;
});