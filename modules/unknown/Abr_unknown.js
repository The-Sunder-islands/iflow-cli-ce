/**
 * @module Abr
 * @category unknown
 * @label unknown
 * @position 1781 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Abr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Abr = T((j$) => {
  "use strict";
  var ePa = [
      "AuthFailure",
      "InvalidSignatureException",
      "RequestExpired",
      "RequestInTheFuture",
      "RequestTimeTooSkewed",
      "SignatureDoesNotMatch",
    ],
    tPa = [
      "BandwidthLimitExceeded",
      "EC2ThrottledException",
      "LimitExceededException",
      "PriorRequestNotComplete",
      "ProvisionedThroughputExceededException",
      "RequestLimitExceeded",
      "RequestThrottled",
      "RequestThrottledException",
      "SlowDown",
      "ThrottledException",
      "Throttling",
      "ThrottlingException",
      "TooManyRequestsException",
      "TransactionInProgressException",
    ],
    rPa = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"],
    nPa = [500, 502, 503, 504],
    iPa = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"],
    oPa = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"],
    y6i = (t) => t?.$retryable !== void 0,
    sPa = (t) => ePa.includes(t.name),
    _6i = (t) => t.$metadata?.clockSkewCorrected,
    E6i = (t) => {
      let e = new Set([
        "Failed to fetch",
        "NetworkError when attempting to fetch resource",
        "The Internet connection appears to be offline",
        "Load failed",
        "Network request failed",
      ]);
      return t && t instanceof TypeError ? e.has(t.message) : !1;
    },
    aPa = (t) => t.$metadata?.httpStatusCode === 429 || tPa.includes(t.name) || t.$retryable?.throttling == !0,
    bbr = (t, e = 0) =>
      y6i(t) ||
      _6i(t) ||
      rPa.includes(t.name) ||
      iPa.includes(t?.code || "") ||
      oPa.includes(t?.code || "") ||
      nPa.includes(t.$metadata?.httpStatusCode || 0) ||
      E6i(t) ||
      (t.cause !== void 0 && e <= 10 && bbr(t.cause, e + 1)),
    uPa = (t) => {
      if (t.$metadata?.httpStatusCode !== void 0) {
        let e = t.$metadata.httpStatusCode;
        return 500 <= e && e <= 599 && !bbr(t);
      }
      return !1;
    };
  j$.isBrowserNetworkError = E6i;
  j$.isClockSkewCorrectedError = _6i;
  j$.isClockSkewError = sPa;
  j$.isRetryableByTrait = y6i;
  j$.isServerError = uPa;
  j$.isThrottlingError = aPa;
  j$.isTransientError = bbr;
});