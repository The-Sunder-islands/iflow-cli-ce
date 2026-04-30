/**
 * @module Lxi
 * @category utils/json
 * @label json
 * @position 1829 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lxi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Lxi = T((m5) => {
  "use strict";
  var B1t = () => {
      let t = new WeakSet();
      return (e, r) => {
        if (typeof r == "object" && r !== null) {
          if (t.has(r)) return "[Circular]";
          t.add(r);
        }
        return r;
      };
    },
    SQa = (t) => new Promise((e) => setTimeout(e, t * 1e3)),
    Bxi = { minDelay: 2, maxDelay: 120 };
  m5.WaiterState = void 0;
  (function (t) {
    ((t.ABORTED = "ABORTED"),
      (t.FAILURE = "FAILURE"),
      (t.SUCCESS = "SUCCESS"),
      (t.RETRY = "RETRY"),
      (t.TIMEOUT = "TIMEOUT"));
  })(m5.WaiterState || (m5.WaiterState = {}));
  var wQa = (t) => {
      if (t.state === m5.WaiterState.ABORTED) {
        let e = new Error(`${JSON.stringify({ ...t, reason: "Request was aborted" }, B1t())}`);
        throw ((e.name = "AbortError"), e);
      } else if (t.state === m5.WaiterState.TIMEOUT) {
        let e = new Error(`${JSON.stringify({ ...t, reason: "Waiter has timed out" }, B1t())}`);
        throw ((e.name = "TimeoutError"), e);
      } else if (t.state !== m5.WaiterState.SUCCESS) throw new Error(`${JSON.stringify(t, B1t())}`);
      return t;
    },
    xQa = (t, e, r, n) => {
      if (n > r) return e;
      let o = t * 2 ** (n - 1);
      return TQa(t, o);
    },
    TQa = (t, e) => t + Math.random() * (e - t),
    DQa = async ({ minDelay: t, maxDelay: e, maxWaitTime: r, abortController: n, client: o, abortSignal: s }, a, u) => {
      let c = {},
        { state: m, reason: d } = await u(o, a);
      if (d) {
        let g = Nxi(d);
        ((c[g] |= 0), (c[g] += 1));
      }
      if (m !== m5.WaiterState.RETRY) return { state: m, reason: d, observedResponses: c };
      let f = 1,
        p = Date.now() + r * 1e3,
        h = Math.log(e / t) / Math.log(2) + 1;
      for (;;) {
        if (n?.signal?.aborted || s?.aborted) {
          let y = "AbortController signal aborted.";
          return ((c[y] |= 0), (c[y] += 1), { state: m5.WaiterState.ABORTED, observedResponses: c });
        }
        let g = xQa(t, e, h, f);
        if (Date.now() + g * 1e3 > p) return { state: m5.WaiterState.TIMEOUT, observedResponses: c };
        await SQa(g);
        let { state: b, reason: A } = await u(o, a);
        if (A) {
          let y = Nxi(A);
          ((c[y] |= 0), (c[y] += 1));
        }
        if (b !== m5.WaiterState.RETRY) return { state: b, reason: A, observedResponses: c };
        f += 1;
      }
    },
    Nxi = (t) =>
      t?.$responseBodyText
        ? `Deserialization error for body: ${t.$responseBodyText}`
        : t?.$metadata?.httpStatusCode
          ? t.$response || t.message
            ? `${t.$response.statusCode ?? t.$metadata.httpStatusCode ?? "Unknown"}: ${t.message}`
            : `${t.$metadata.httpStatusCode}: OK`
          : String(t?.message ?? JSON.stringify(t, B1t()) ?? "Unknown"),
    IQa = (t) => {
      if (t.maxWaitTime <= 0) throw new Error("WaiterConfiguration.maxWaitTime must be greater than 0");
      if (t.minDelay <= 0) throw new Error("WaiterConfiguration.minDelay must be greater than 0");
      if (t.maxDelay <= 0) throw new Error("WaiterConfiguration.maxDelay must be greater than 0");
      if (t.maxWaitTime <= t.minDelay)
        throw new Error(
          `WaiterConfiguration.maxWaitTime [${t.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${t.minDelay}] for this waiter`,
        );
      if (t.maxDelay < t.minDelay)
        throw new Error(
          `WaiterConfiguration.maxDelay [${t.maxDelay}] must be greater than WaiterConfiguration.minDelay [${t.minDelay}] for this waiter`,
        );
    },
    Pxi = (t) => {
      let e,
        r = new Promise((n) => {
          ((e = () => n({ state: m5.WaiterState.ABORTED })),
            typeof t.addEventListener == "function" ? t.addEventListener("abort", e) : (t.onabort = e));
        });
      return {
        clearListener() {
          typeof t.removeEventListener == "function" && t.removeEventListener("abort", e);
        },
        aborted: r,
      };
    },
    RQa = async (t, e, r) => {
      let n = { ...Bxi, ...t };
      IQa(n);
      let o = [DQa(n, e, r)],
        s = [];
      if (t.abortSignal) {
        let { aborted: a, clearListener: u } = Pxi(t.abortSignal);
        (s.push(u), o.push(a));
      }
      if (t.abortController?.signal) {
        let { aborted: a, clearListener: u } = Pxi(t.abortController.signal);
        (s.push(u), o.push(a));
      }
      return Promise.race(o).then((a) => {
        for (let u of s) u();
        return a;
      });
    };
  m5.checkExceptions = wQa;
  m5.createWaiter = RQa;
  m5.waiterServiceDefaults = Bxi;
});