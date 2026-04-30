/**
 * @module Pvi
 * @category utils/oop
 * @label oop
 * @position 1807 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pvi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pvi = T((hdt) => {
  "use strict";
  Object.defineProperty(hdt, "__esModule", { value: !0 });
  hdt.defaultEndpointResolver = void 0;
  var NMa = EK(),
    QAr = F$(),
    PMa = Nvi(),
    BMa = new QAr.EndpointCache({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] }),
    LMa = (t, e = {}) =>
      BMa.get(t, () => (0, QAr.resolveEndpoint)(PMa.ruleSet, { endpointParams: t, logger: e.logger }));
  hdt.defaultEndpointResolver = LMa;
  QAr.customEndpointFunctions.aws = NMa.awsEndpointFunctions;
});