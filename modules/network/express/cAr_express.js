/**
 * @module cAr
 * @category network/express
 * @label express
 * @position 1787 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cAr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cAr = T((Gmt) => {
  "use strict";
  Object.defineProperty(Gmt, "__esModule", { value: !0 });
  Gmt.defaultEndpointResolver = void 0;
  var $Pa = EK(),
    uAr = F$(),
    jPa = d_i(),
    QPa = new uAr.EndpointCache({
      size: 50,
      params: [
        "Accelerate",
        "Bucket",
        "DisableAccessPoints",
        "DisableMultiRegionAccessPoints",
        "DisableS3ExpressSessionAuth",
        "Endpoint",
        "ForcePathStyle",
        "Region",
        "UseArnRegion",
        "UseDualStack",
        "UseFIPS",
        "UseGlobalEndpoint",
        "UseObjectLambdaEndpoint",
        "UseS3ExpressControlEndpoint",
      ],
    }),
    GPa = (t, e = {}) =>
      QPa.get(t, () => (0, uAr.resolveEndpoint)(jPa.ruleSet, { endpointParams: t, logger: e.logger }));
  Gmt.defaultEndpointResolver = GPa;
  uAr.customEndpointFunctions.aws = $Pa.awsEndpointFunctions;
});