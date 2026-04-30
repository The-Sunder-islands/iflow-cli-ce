/**
 * @module SK
 * @category app/usage
 * @label iflow-usage
 * @position 1782 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (SK) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var SK = T((C1) => {
  "use strict";
  var cPa = Abr();
  C1.RETRY_MODES = void 0;
  (function (t) {
    ((t.STANDARD = "standard"), (t.ADAPTIVE = "adaptive"));
  })(C1.RETRY_MODES || (C1.RETRY_MODES = {}));
  var ybr = 3,
    lPa = C1.RETRY_MODES.STANDARD,
    Rmt = class t {
      static setTimeoutFn = setTimeout;
      beta;
      minCapacity;
      minFillRate;
      scaleConstant;
      smooth;
      currentCapacity = 0;
      enabled = !1;
      lastMaxRate = 0;
      measuredTxRate = 0;
      requestCount = 0;
      fillRate;
      lastThrottleTime;
      lastTimestamp = 0;
      lastTxRateBucket;
      maxCapacity;
      timeWindow = 0;
      constructor(e) {
        ((this.beta = e?.beta ?? 0.7),
          (this.minCapacity = e?.minCapacity ?? 1),
          (this.minFillRate = e?.minFillRate ?? 0.5),
          (this.scaleConstant = e?.scaleConstant ?? 0.4),
          (this.smooth = e?.smooth ?? 0.8));
        let r = this.getCurrentTimeInSeconds();
        ((this.lastThrottleTime = r),
          (this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds())),
          (this.fillRate = this.minFillRate),
          (this.maxCapacity = this.minCapacity));
      }
      getCurrentTimeInSeconds() {
        return Date.now() / 1e3;
      }
      async getSendToken() {
        return this.acquireTokenBucket(1);
      }
      async acquireTokenBucket(e) {
        if (this.enabled) {
          if ((this.refillTokenBucket(), e > this.currentCapacity)) {
            let r = ((e - this.currentCapacity) / this.fillRate) * 1e3;
            await new Promise((n) => t.setTimeoutFn(n, r));
          }
          this.currentCapacity = this.currentCapacity - e;
        }
      }
      refillTokenBucket() {
        let e = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
          this.lastTimestamp = e;
          return;
        }
        let r = (e - this.lastTimestamp) * this.fillRate;
        ((this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + r)), (this.lastTimestamp = e));
      }
      updateClientSendingRate(e) {
        let r;
        if ((this.updateMeasuredRate(), cPa.isThrottlingError(e))) {
          let o = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
          ((this.lastMaxRate = o),
            this.calculateTimeWindow(),
            (this.lastThrottleTime = this.getCurrentTimeInSeconds()),
            (r = this.cubicThrottle(o)),
            this.enableTokenBucket());
        } else (this.calculateTimeWindow(), (r = this.cubicSuccess(this.getCurrentTimeInSeconds())));
        let n = Math.min(r, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(n);
      }
      calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
      }
      cubicThrottle(e) {
        return this.getPrecise(e * this.beta);
      }
      cubicSuccess(e) {
        return this.getPrecise(
          this.scaleConstant * Math.pow(e - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate,
        );
      }
      enableTokenBucket() {
        this.enabled = !0;
      }
      updateTokenBucketRate(e) {
        (this.refillTokenBucket(),
          (this.fillRate = Math.max(e, this.minFillRate)),
          (this.maxCapacity = Math.max(e, this.minCapacity)),
          (this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity)));
      }
      updateMeasuredRate() {
        let e = this.getCurrentTimeInSeconds(),
          r = Math.floor(e * 2) / 2;
        if ((this.requestCount++, r > this.lastTxRateBucket)) {
          let n = this.requestCount / (r - this.lastTxRateBucket);
          ((this.measuredTxRate = this.getPrecise(n * this.smooth + this.measuredTxRate * (1 - this.smooth))),
            (this.requestCount = 0),
            (this.lastTxRateBucket = r));
        }
      }
      getPrecise(e) {
        return parseFloat(e.toFixed(8));
      }
    },
    fwe = 100,
    Cbr = 20 * 1e3,
    C6i = 500,
    _br = 500,
    S6i = 5,
    w6i = 10,
    x6i = 1,
    mPa = "amz-sdk-invocation-id",
    dPa = "amz-sdk-request",
    fPa = () => {
      let t = fwe;
      return {
        computeNextBackoffDelay: (n) => Math.floor(Math.min(Cbr, Math.random() * 2 ** n * t)),
        setDelayBase: (n) => {
          t = n;
        },
      };
    },
    v6i = ({ retryDelay: t, retryCount: e, retryCost: r }) => ({
      getRetryCount: () => e,
      getRetryDelay: () => Math.min(Cbr, t),
      getRetryCost: () => r,
    }),
    pwe = class {
      maxAttempts;
      mode = C1.RETRY_MODES.STANDARD;
      capacity = _br;
      retryBackoffStrategy = fPa();
      maxAttemptsProvider;
      constructor(e) {
        ((this.maxAttempts = e), (this.maxAttemptsProvider = typeof e == "function" ? e : async () => e));
      }
      async acquireInitialRetryToken(e) {
        return v6i({ retryDelay: fwe, retryCount: 0 });
      }
      async refreshRetryTokenForRetry(e, r) {
        let n = await this.getMaxAttempts();
        if (this.shouldRetry(e, r, n)) {
          let o = r.errorType;
          this.retryBackoffStrategy.setDelayBase(o === "THROTTLING" ? C6i : fwe);
          let s = this.retryBackoffStrategy.computeNextBackoffDelay(e.getRetryCount()),
            a = r.retryAfterHint ? Math.max(r.retryAfterHint.getTime() - Date.now() || 0, s) : s,
            u = this.getCapacityCost(o);
          return ((this.capacity -= u), v6i({ retryDelay: a, retryCount: e.getRetryCount() + 1, retryCost: u }));
        }
        throw new Error("No retry token available");
      }
      recordSuccess(e) {
        this.capacity = Math.max(_br, this.capacity + (e.getRetryCost() ?? x6i));
      }
      getCapacity() {
        return this.capacity;
      }
      async getMaxAttempts() {
        try {
          return await this.maxAttemptsProvider();
        } catch {
          return (console.warn(`Max attempts provider could not resolve. Using default of ${ybr}`), ybr);
        }
      }
      shouldRetry(e, r, n) {
        return (
          e.getRetryCount() + 1 < n &&
          this.capacity >= this.getCapacityCost(r.errorType) &&
          this.isRetryableError(r.errorType)
        );
      }
      getCapacityCost(e) {
        return e === "TRANSIENT" ? w6i : S6i;
      }
      isRetryableError(e) {
        return e === "THROTTLING" || e === "TRANSIENT";
      }
    },
    Ebr = class {
      maxAttemptsProvider;
      rateLimiter;
      standardRetryStrategy;
      mode = C1.RETRY_MODES.ADAPTIVE;
      constructor(e, r) {
        this.maxAttemptsProvider = e;
        let { rateLimiter: n } = r ?? {};
        ((this.rateLimiter = n ?? new Rmt()), (this.standardRetryStrategy = new pwe(e)));
      }
      async acquireInitialRetryToken(e) {
        return (await this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(e));
      }
      async refreshRetryTokenForRetry(e, r) {
        return (
          this.rateLimiter.updateClientSendingRate(r),
          this.standardRetryStrategy.refreshRetryTokenForRetry(e, r)
        );
      }
      recordSuccess(e) {
        (this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(e));
      }
    },
    vbr = class extends pwe {
      computeNextBackoffDelay;
      constructor(e, r = fwe) {
        (super(typeof e == "function" ? e : async () => e),
          typeof r == "number" ? (this.computeNextBackoffDelay = () => r) : (this.computeNextBackoffDelay = r));
      }
      async refreshRetryTokenForRetry(e, r) {
        let n = await super.refreshRetryTokenForRetry(e, r);
        return ((n.getRetryDelay = () => this.computeNextBackoffDelay(n.getRetryCount())), n);
      }
    };
  C1.AdaptiveRetryStrategy = Ebr;
  C1.ConfiguredRetryStrategy = vbr;
  C1.DEFAULT_MAX_ATTEMPTS = ybr;
  C1.DEFAULT_RETRY_DELAY_BASE = fwe;
  C1.DEFAULT_RETRY_MODE = lPa;
  C1.DefaultRateLimiter = Rmt;
  C1.INITIAL_RETRY_TOKENS = _br;
  C1.INVOCATION_ID_HEADER = mPa;
  C1.MAXIMUM_RETRY_DELAY = Cbr;
  C1.NO_RETRY_INCREMENT = x6i;
  C1.REQUEST_HEADER = dPa;
  C1.RETRY_COST = S6i;
  C1.StandardRetryStrategy = pwe;
  C1.THROTTLING_RETRY_DELAY_BASE = C6i;
  C1.TIMEOUT_RETRY_COST = w6i;
});