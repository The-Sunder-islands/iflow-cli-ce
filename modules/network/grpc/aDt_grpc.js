/**
 * @module aDt
 * @category network/grpc
 * @label grpc
 * @position 496 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aDt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aDt = T((Cq) => {
  "use strict";
  Object.defineProperty(Cq, "__esModule", { value: !0 });
  Cq.DEFAULT_PORT = void 0;
  Cq.setup = njo;
  var Nen = VC(),
    iDt = Ae("dns"),
    K$o = lxt(),
    oDt = La(),
    Wre = pq(),
    J$o = Ph(),
    X$o = g0(),
    Z$o = La(),
    YB = d2(),
    Pen = Ae("net"),
    ejo = Rre(),
    Ben = Oen(),
    tjo = "dns_resolver";
  function nT(t) {
    X$o.trace(Z$o.LogVerbosity.DEBUG, tjo, t);
  }
  Cq.DEFAULT_PORT = 443;
  var rjo = 3e4,
    sDt = class {
      constructor(e, r, n) {
        var o, s, a;
        ((this.target = e),
          (this.listener = r),
          (this.pendingLookupPromise = null),
          (this.pendingTxtPromise = null),
          (this.latestLookupResult = null),
          (this.latestServiceConfigResult = null),
          (this.continueResolving = !1),
          (this.isNextResolutionTimerRunning = !1),
          (this.isServiceConfigEnabled = !0),
          (this.returnedIpResult = !1),
          (this.alternativeResolver = new iDt.promises.Resolver()),
          nT("Resolver constructed for target " + (0, YB.uriToString)(e)),
          e.authority && this.alternativeResolver.setServers([e.authority]));
        let u = (0, YB.splitHostPort)(e.path);
        (u === null
          ? ((this.ipResult = null), (this.dnsHostname = null), (this.port = null))
          : (0, Pen.isIPv4)(u.host) || (0, Pen.isIPv6)(u.host)
            ? ((this.ipResult = [
                { addresses: [{ host: u.host, port: (o = u.port) !== null && o !== void 0 ? o : Cq.DEFAULT_PORT }] },
              ]),
              (this.dnsHostname = null),
              (this.port = null))
            : ((this.ipResult = null),
              (this.dnsHostname = u.host),
              (this.port = (s = u.port) !== null && s !== void 0 ? s : Cq.DEFAULT_PORT)),
          (this.percentage = Math.random() * 100),
          n["grpc.service_config_disable_resolution"] === 1 && (this.isServiceConfigEnabled = !1),
          (this.defaultResolutionError = {
            code: oDt.Status.UNAVAILABLE,
            details: `Name resolution failed for target ${(0, YB.uriToString)(this.target)}`,
            metadata: new J$o.Metadata(),
          }));
        let c = { initialDelay: n["grpc.initial_reconnect_backoff_ms"], maxDelay: n["grpc.max_reconnect_backoff_ms"] };
        ((this.backoff = new ejo.BackoffTimeout(() => {
          this.continueResolving && this.startResolutionWithBackoff();
        }, c)),
          this.backoff.unref(),
          (this.minTimeBetweenResolutionsMs =
            (a = n["grpc.dns_min_time_between_resolutions_ms"]) !== null && a !== void 0 ? a : rjo),
          (this.nextResolutionTimer = setTimeout(() => {}, 0)),
          clearTimeout(this.nextResolutionTimer));
      }
      startResolution() {
        if (this.ipResult !== null) {
          (this.returnedIpResult ||
            (nT("Returning IP address for target " + (0, YB.uriToString)(this.target)),
            setImmediate(() => {
              this.listener((0, Wre.statusOrFromValue)(this.ipResult), {}, null, "");
            }),
            (this.returnedIpResult = !0)),
            this.backoff.stop(),
            this.backoff.reset(),
            this.stopNextResolutionTimer());
          return;
        }
        if (this.dnsHostname === null)
          (nT("Failed to parse DNS address " + (0, YB.uriToString)(this.target)),
            setImmediate(() => {
              this.listener(
                (0, Wre.statusOrFromError)({
                  code: oDt.Status.UNAVAILABLE,
                  details: `Failed to parse DNS address ${(0, YB.uriToString)(this.target)}`,
                }),
                {},
                null,
                "",
              );
            }),
            this.stopNextResolutionTimer());
        else {
          if (this.pendingLookupPromise !== null) return;
          (nT("Looking up DNS hostname " + this.dnsHostname), (this.latestLookupResult = null));
          let e = this.dnsHostname;
          ((this.pendingLookupPromise = this.lookup(e)),
            this.pendingLookupPromise.then(
              (r) => {
                if (this.pendingLookupPromise === null) return;
                ((this.pendingLookupPromise = null),
                  (this.latestLookupResult = (0, Wre.statusOrFromValue)(r.map((s) => ({ addresses: [s] })))));
                let n = "[" + r.map((s) => s.host + ":" + s.port).join(",") + "]";
                nT("Resolved addresses for target " + (0, YB.uriToString)(this.target) + ": " + n);
                let o = this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
                this.handleHealthStatus(o);
              },
              (r) => {
                this.pendingLookupPromise !== null &&
                  (nT("Resolution error for target " + (0, YB.uriToString)(this.target) + ": " + r.message),
                  (this.pendingLookupPromise = null),
                  this.stopNextResolutionTimer(),
                  this.listener(
                    (0, Wre.statusOrFromError)(this.defaultResolutionError),
                    {},
                    this.latestServiceConfigResult,
                    "",
                  ));
              },
            ),
            this.isServiceConfigEnabled &&
              this.pendingTxtPromise === null &&
              ((this.pendingTxtPromise = this.resolveTxt(e)),
              this.pendingTxtPromise.then(
                (r) => {
                  if (this.pendingTxtPromise === null) return;
                  this.pendingTxtPromise = null;
                  let n;
                  try {
                    ((n = (0, K$o.extractAndSelectServiceConfig)(r, this.percentage)),
                      n
                        ? (this.latestServiceConfigResult = (0, Wre.statusOrFromValue)(n))
                        : (this.latestServiceConfigResult = null));
                  } catch (o) {
                    this.latestServiceConfigResult = (0, Wre.statusOrFromError)({
                      code: oDt.Status.UNAVAILABLE,
                      details: `Parsing service config failed with error ${o.message}`,
                    });
                  }
                  this.latestLookupResult !== null &&
                    this.listener(this.latestLookupResult, {}, this.latestServiceConfigResult, "");
                },
                (r) => {},
              )));
        }
      }
      handleHealthStatus(e) {
        e ? (this.backoff.stop(), this.backoff.reset()) : (this.continueResolving = !0);
      }
      async lookup(e) {
        if (Ben.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
          nT("Using alternative DNS resolver.");
          let n = await Promise.allSettled([
            this.alternativeResolver.resolve4(e),
            this.alternativeResolver.resolve6(e),
          ]);
          if (n.every((o) => o.status === "rejected")) throw new Error(n[0].reason);
          return n
            .reduce((o, s) => (s.status === "fulfilled" ? [...o, ...s.value] : o), [])
            .map((o) => ({ host: o, port: +this.port }));
        }
        return (await iDt.promises.lookup(e, { all: !0 })).map((n) => ({ host: n.address, port: +this.port }));
      }
      async resolveTxt(e) {
        return Ben.GRPC_NODE_USE_ALTERNATIVE_RESOLVER
          ? (nT("Using alternative DNS resolver."), this.alternativeResolver.resolveTxt(e))
          : iDt.promises.resolveTxt(e);
      }
      startNextResolutionTimer() {
        var e, r;
        (clearTimeout(this.nextResolutionTimer),
          (this.nextResolutionTimer = setTimeout(() => {
            (this.stopNextResolutionTimer(), this.continueResolving && this.startResolutionWithBackoff());
          }, this.minTimeBetweenResolutionsMs)),
          (r = (e = this.nextResolutionTimer).unref) === null || r === void 0 || r.call(e),
          (this.isNextResolutionTimerRunning = !0));
      }
      stopNextResolutionTimer() {
        (clearTimeout(this.nextResolutionTimer), (this.isNextResolutionTimerRunning = !1));
      }
      startResolutionWithBackoff() {
        this.pendingLookupPromise === null &&
          ((this.continueResolving = !1),
          this.backoff.runOnce(),
          this.startNextResolutionTimer(),
          this.startResolution());
      }
      updateResolution() {
        this.pendingLookupPromise === null &&
          (this.isNextResolutionTimerRunning || this.backoff.isRunning()
            ? (this.isNextResolutionTimerRunning
                ? nT('resolution update delayed by "min time between resolutions" rate limit')
                : nT("resolution update delayed by backoff timer until " + this.backoff.getEndTime().toISOString()),
              (this.continueResolving = !0))
            : this.startResolutionWithBackoff());
      }
      destroy() {
        ((this.continueResolving = !1),
          this.backoff.reset(),
          this.backoff.stop(),
          this.stopNextResolutionTimer(),
          (this.pendingLookupPromise = null),
          (this.pendingTxtPromise = null),
          (this.latestLookupResult = null),
          (this.latestServiceConfigResult = null),
          (this.returnedIpResult = !1));
      }
      static getDefaultAuthority(e) {
        return e.path;
      }
    };
  function njo() {
    ((0, Nen.registerResolver)("dns", sDt), (0, Nen.registerDefaultScheme)("dns"));
  }
});