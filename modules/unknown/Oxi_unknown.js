/**
 * @module Oxi
 * @category unknown
 * @label unknown
 * @position 1828 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Oxi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Oxi = T((P1t) => {
  "use strict";
  function Rxi(t) {
    return (e) => async (r) => {
      let { CreateBucketConfiguration: n } = r.input,
        o = await t.region();
      return (
        !n?.LocationConstraint &&
          !n?.Location &&
          o !== "us-east-1" &&
          ((r.input.CreateBucketConfiguration = r.input.CreateBucketConfiguration ?? {}),
          (r.input.CreateBucketConfiguration.LocationConstraint = o)),
        e(r)
      );
    };
  }
  var kxi = {
      step: "initialize",
      tags: ["LOCATION_CONSTRAINT", "CREATE_BUCKET_CONFIGURATION"],
      name: "locationConstraintMiddleware",
      override: !0,
    },
    CQa = (t) => ({
      applyToStack: (e) => {
        e.add(Rxi(t), kxi);
      },
    });
  P1t.getLocationConstraintPlugin = CQa;
  P1t.locationConstraintMiddleware = Rxi;
  P1t.locationConstraintMiddlewareOptions = kxi;
});