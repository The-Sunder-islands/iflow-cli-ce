/**
 * @module GS
 * @category app/usage
 * @label iflow-usage
 * @position 1784 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GS) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Features: esbuild module exports: GS
 * === End semantic info ===
 */


var GS = T((zp) => {
  "use strict";
  var $d = SK(),
    tde = Tc(),
    Q$ = Abr(),
    I6i = Zhr(),
    D6i = Hg(),
    gPa = Ga(),
    bPa = T6i(),
    APa = (t, e) => {
      let r = t,
        n = $d.NO_RETRY_INCREMENT,
        o = $d.RETRY_COST,
        s = $d.TIMEOUT_RETRY_COST,
        a = t,
        u = (f) => (f.name === "TimeoutError" ? s : o),
        c = (f) => u(f) <= a;
      return Object.freeze({
        hasRetryTokens: c,
        retrieveRetryTokens: (f) => {
          if (!c(f)) throw new Error("No retry token available");
          let p = u(f);
          return ((a -= p), p);
        },
        releaseRetryTokens: (f) => {
          ((a += f ?? n), (a = Math.min(a, r)));
        },
      });
    },
    R6i = (t, e) => Math.floor(Math.min($d.MAXIMUM_RETRY_DELAY, Math.random() * 2 ** e * t)),
    k6i = (t) =>
      t ? Q$.isRetryableByTrait(t) || Q$.isClockSkewError(t) || Q$.isThrottlingError(t) || Q$.isTransientError(t) : !1,
    O6i = (t) =>
      t instanceof Error
        ? t
        : t instanceof Object
          ? Object.assign(new Error(), t)
          : typeof t == "string"
            ? new Error(t)
            : new Error(`AWS SDK error wrapper for ${t}`),
    Omt = class {
      maxAttemptsProvider;
      retryDecider;
      delayDecider;
      retryQuota;
      mode = $d.RETRY_MODES.STANDARD;
      constructor(e, r) {
        ((this.maxAttemptsProvider = e),
          (this.retryDecider = r?.retryDecider ?? k6i),
          (this.delayDecider = r?.delayDecider ?? R6i),
          (this.retryQuota = r?.retryQuota ?? APa($d.INITIAL_RETRY_TOKENS)));
      }
      shouldRetry(e, r, n) {
        return r < n && this.retryDecider(e) && this.retryQuota.hasRetryTokens(e);
      }
      async getMaxAttempts() {
        let e;
        try {
          e = await this.maxAttemptsProvider();
        } catch {
          e = $d.DEFAULT_MAX_ATTEMPTS;
        }
        return e;
      }
      async retry(e, r, n) {
        let o,
          s = 0,
          a = 0,
          u = await this.getMaxAttempts(),
          { request: c } = r;
        for (tde.HttpRequest.isInstance(c) && (c.headers[$d.INVOCATION_ID_HEADER] = I6i.v4()); ; )
          try {
            (tde.HttpRequest.isInstance(c) && (c.headers[$d.REQUEST_HEADER] = `attempt=${s + 1}; max=${u}`),
              n?.beforeRequest && (await n.beforeRequest()));
            let { response: m, output: d } = await e(r);
            return (
              n?.afterRequest && n.afterRequest(m),
              this.retryQuota.releaseRetryTokens(o),
              (d.$metadata.attempts = s + 1),
              (d.$metadata.totalRetryDelay = a),
              { response: m, output: d }
            );
          } catch (m) {
            let d = O6i(m);
            if ((s++, this.shouldRetry(d, s, u))) {
              o = this.retryQuota.retrieveRetryTokens(d);
              let f = this.delayDecider(
                  Q$.isThrottlingError(d) ? $d.THROTTLING_RETRY_DELAY_BASE : $d.DEFAULT_RETRY_DELAY_BASE,
                  s,
                ),
                p = yPa(d.$response),
                h = Math.max(p || 0, f);
              ((a += h), await new Promise((g) => setTimeout(g, h)));
              continue;
            }
            throw (d.$metadata || (d.$metadata = {}), (d.$metadata.attempts = s), (d.$metadata.totalRetryDelay = a), d);
          }
      }
    },
    yPa = (t) => {
      if (!tde.HttpResponse.isInstance(t)) return;
      let e = Object.keys(t.headers).find((s) => s.toLowerCase() === "retry-after");
      if (!e) return;
      let r = t.headers[e],
        n = Number(r);
      return Number.isNaN(n) ? new Date(r).getTime() - Date.now() : n * 1e3;
    },
    Sbr = class extends Omt {
      rateLimiter;
      constructor(e, r) {
        let { rateLimiter: n, ...o } = r ?? {};
        (super(e, o), (this.rateLimiter = n ?? new $d.DefaultRateLimiter()), (this.mode = $d.RETRY_MODES.ADAPTIVE));
      }
      async retry(e, r) {
        return super.retry(e, r, {
          beforeRequest: async () => this.rateLimiter.getSendToken(),
          afterRequest: (n) => {
            this.rateLimiter.updateClientSendingRate(n);
          },
        });
      }
    },
    wbr = "AWS_MAX_ATTEMPTS",
    xbr = "max_attempts",
    _Pa = {
      environmentVariableSelector: (t) => {
        let e = t[wbr];
        if (!e) return;
        let r = parseInt(e);
        if (Number.isNaN(r)) throw new Error(`Environment variable ${wbr} mast be a number, got "${e}"`);
        return r;
      },
      configFileSelector: (t) => {
        let e = t[xbr];
        if (!e) return;
        let r = parseInt(e);
        if (Number.isNaN(r)) throw new Error(`Shared config file entry ${xbr} mast be a number, got "${e}"`);
        return r;
      },
      default: $d.DEFAULT_MAX_ATTEMPTS,
    },
    EPa = (t) => {
      let { retryStrategy: e, retryMode: r, maxAttempts: n } = t,
        o = D6i.normalizeProvider(n ?? $d.DEFAULT_MAX_ATTEMPTS);
      return Object.assign(t, {
        maxAttempts: o,
        retryStrategy: async () =>
          e ||
          ((await D6i.normalizeProvider(r)()) === $d.RETRY_MODES.ADAPTIVE
            ? new $d.AdaptiveRetryStrategy(o)
            : new $d.StandardRetryStrategy(o)),
      });
    },
    N6i = "AWS_RETRY_MODE",
    P6i = "retry_mode",
    vPa = {
      environmentVariableSelector: (t) => t[N6i],
      configFileSelector: (t) => t[P6i],
      default: $d.DEFAULT_RETRY_MODE,
    },
    B6i = () => (t) => async (e) => {
      let { request: r } = e;
      return (
        tde.HttpRequest.isInstance(r) &&
          (delete r.headers[$d.INVOCATION_ID_HEADER], delete r.headers[$d.REQUEST_HEADER]),
        t(e)
      );
    },
    L6i = {
      name: "omitRetryHeadersMiddleware",
      tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
      relation: "before",
      toMiddleware: "awsAuthMiddleware",
      override: !0,
    },
    CPa = (t) => ({
      applyToStack: (e) => {
        e.addRelativeTo(B6i(), L6i);
      },
    }),
    M6i = (t) => (e, r) => async (n) => {
      let o = await t.retryStrategy(),
        s = await t.maxAttempts();
      if (SPa(o)) {
        o = o;
        let a = await o.acquireInitialRetryToken(r.partition_id),
          u = new Error(),
          c = 0,
          m = 0,
          { request: d } = n,
          f = tde.HttpRequest.isInstance(d);
        for (f && (d.headers[$d.INVOCATION_ID_HEADER] = I6i.v4()); ; )
          try {
            f && (d.headers[$d.REQUEST_HEADER] = `attempt=${c + 1}; max=${s}`);
            let { response: p, output: h } = await e(n);
            return (
              o.recordSuccess(a),
              (h.$metadata.attempts = c + 1),
              (h.$metadata.totalRetryDelay = m),
              { response: p, output: h }
            );
          } catch (p) {
            let h = wPa(p);
            if (((u = O6i(p)), f && bPa.isStreamingPayload(d)))
              throw (
                (r.logger instanceof gPa.NoOpLogger ? console : r.logger)?.warn(
                  "An error was encountered in a non-retryable streaming request.",
                ),
                u
              );
            try {
              a = await o.refreshRetryTokenForRetry(a, h);
            } catch {
              throw (
                u.$metadata || (u.$metadata = {}),
                (u.$metadata.attempts = c + 1),
                (u.$metadata.totalRetryDelay = m),
                u
              );
            }
            c = a.getRetryCount();
            let g = a.getRetryDelay();
            ((m += g), await new Promise((b) => setTimeout(b, g)));
          }
      } else
        return (
          (o = o),
          o?.mode && (r.userAgent = [...(r.userAgent || []), ["cfg/retry-mode", o.mode]]),
          o.retry(e, n)
        );
    },
    SPa = (t) =>
      typeof t.acquireInitialRetryToken < "u" &&
      typeof t.refreshRetryTokenForRetry < "u" &&
      typeof t.recordSuccess < "u",
    wPa = (t) => {
      let e = { error: t, errorType: xPa(t) },
        r = U6i(t.$response);
      return (r && (e.retryAfterHint = r), e);
    },
    xPa = (t) =>
      Q$.isThrottlingError(t)
        ? "THROTTLING"
        : Q$.isTransientError(t)
          ? "TRANSIENT"
          : Q$.isServerError(t)
            ? "SERVER_ERROR"
            : "CLIENT_ERROR",
    F6i = { name: "retryMiddleware", tags: ["RETRY"], step: "finalizeRequest", priority: "high", override: !0 },
    TPa = (t) => ({
      applyToStack: (e) => {
        e.add(M6i(t), F6i);
      },
    }),
    U6i = (t) => {
      if (!tde.HttpResponse.isInstance(t)) return;
      let e = Object.keys(t.headers).find((s) => s.toLowerCase() === "retry-after");
      if (!e) return;
      let r = t.headers[e],
        n = Number(r);
      return Number.isNaN(n) ? new Date(r) : new Date(n * 1e3);
    };
  zp.AdaptiveRetryStrategy = Sbr;
  zp.CONFIG_MAX_ATTEMPTS = xbr;
  zp.CONFIG_RETRY_MODE = P6i;
  zp.ENV_MAX_ATTEMPTS = wbr;
  zp.ENV_RETRY_MODE = N6i;
  zp.NODE_MAX_ATTEMPT_CONFIG_OPTIONS = _Pa;
  zp.NODE_RETRY_MODE_CONFIG_OPTIONS = vPa;
  zp.StandardRetryStrategy = Omt;
  zp.defaultDelayDecider = R6i;
  zp.defaultRetryDecider = k6i;
  zp.getOmitRetryHeadersPlugin = CPa;
  zp.getRetryAfterHint = U6i;
  zp.getRetryPlugin = TPa;
  zp.omitRetryHeadersMiddleware = B6i;
  zp.omitRetryHeadersMiddlewareOptions = L6i;
  zp.resolveRetryConfig = EPa;
  zp.retryMiddleware = M6i;
  zp.retryMiddlewareOptions = F6i;
});