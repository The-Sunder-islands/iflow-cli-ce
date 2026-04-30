/**
 * @module qtn
 * @category network/grpc
 * @label grpc
 * @position 520 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qtn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qtn = T((kq) => {
  "use strict";
  var SIt;
  Object.defineProperty(kq, "__esModule", { value: !0 });
  kq.OutlierDetectionLoadBalancer = kq.OutlierDetectionLoadBalancingConfig = void 0;
  kq.setup = rqo;
  var VGo = f2(),
    Qtn = La(),
    Rq = Pbe(),
    Gtn = gIt(),
    WGo = UB(),
    zGo = DFe(),
    YGo = IR(),
    wIt = a8(),
    KGo = Obe(),
    JGo = g0(),
    XGo = "outlier_detection";
  function Mh(t) {
    JGo.trace(Qtn.LogVerbosity.DEBUG, XGo, t);
  }
  var kIt = "outlier_detection",
    ZGo =
      ((SIt = process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION) !== null && SIt !== void 0 ? SIt : "true") ===
      "true",
    eqo = { stdev_factor: 1900, enforcement_percentage: 100, minimum_hosts: 5, request_volume: 100 },
    tqo = { threshold: 85, enforcement_percentage: 100, minimum_hosts: 5, request_volume: 50 };
  function nne(t, e, r, n) {
    if (e in t && t[e] !== void 0 && typeof t[e] !== r) {
      let o = n ? `${n}.${e}` : e;
      throw new Error(`outlier detection config ${o} parse error: expected ${r}, got ${typeof t[e]}`);
    }
  }
  function xIt(t, e, r) {
    let n = r ? `${r}.${e}` : e;
    if (e in t && t[e] !== void 0) {
      if (!(0, Rq.isDuration)(t[e]))
        throw new Error(`outlier detection config ${n} parse error: expected Duration, got ${typeof t[e]}`);
      if (!(t[e].seconds >= 0 && t[e].seconds <= 315576e6 && t[e].nanos >= 0 && t[e].nanos <= 999999999))
        throw new Error(`outlier detection config ${n} parse error: values out of range for non-negative Duaration`);
    }
  }
  function i$e(t, e, r) {
    let n = r ? `${r}.${e}` : e;
    if ((nne(t, e, "number", r), e in t && t[e] !== void 0 && !(t[e] >= 0 && t[e] <= 100)))
      throw new Error(`outlier detection config ${n} parse error: value out of range for percentage (0-100)`);
  }
  var Qbe = class t {
    constructor(e, r, n, o, s, a, u) {
      if (((this.childPolicy = u), u.getLoadBalancerName() === "pick_first"))
        throw new Error("outlier_detection LB policy cannot have a pick_first child policy");
      ((this.intervalMs = e ?? 1e4),
        (this.baseEjectionTimeMs = r ?? 3e4),
        (this.maxEjectionTimeMs = n ?? 3e5),
        (this.maxEjectionPercent = o ?? 10),
        (this.successRateEjection = s ? Object.assign(Object.assign({}, eqo), s) : null),
        (this.failurePercentageEjection = a ? Object.assign(Object.assign({}, tqo), a) : null));
    }
    getLoadBalancerName() {
      return kIt;
    }
    toJsonObject() {
      var e, r;
      return {
        outlier_detection: {
          interval: (0, Rq.msToDuration)(this.intervalMs),
          base_ejection_time: (0, Rq.msToDuration)(this.baseEjectionTimeMs),
          max_ejection_time: (0, Rq.msToDuration)(this.maxEjectionTimeMs),
          max_ejection_percent: this.maxEjectionPercent,
          success_rate_ejection: (e = this.successRateEjection) !== null && e !== void 0 ? e : void 0,
          failure_percentage_ejection: (r = this.failurePercentageEjection) !== null && r !== void 0 ? r : void 0,
          child_policy: [this.childPolicy.toJsonObject()],
        },
      };
    }
    getIntervalMs() {
      return this.intervalMs;
    }
    getBaseEjectionTimeMs() {
      return this.baseEjectionTimeMs;
    }
    getMaxEjectionTimeMs() {
      return this.maxEjectionTimeMs;
    }
    getMaxEjectionPercent() {
      return this.maxEjectionPercent;
    }
    getSuccessRateEjectionConfig() {
      return this.successRateEjection;
    }
    getFailurePercentageEjectionConfig() {
      return this.failurePercentageEjection;
    }
    getChildPolicy() {
      return this.childPolicy;
    }
    static createFromJson(e) {
      var r;
      if (
        (xIt(e, "interval"),
        xIt(e, "base_ejection_time"),
        xIt(e, "max_ejection_time"),
        i$e(e, "max_ejection_percent"),
        "success_rate_ejection" in e && e.success_rate_ejection !== void 0)
      ) {
        if (typeof e.success_rate_ejection != "object")
          throw new Error("outlier detection config success_rate_ejection must be an object");
        (nne(e.success_rate_ejection, "stdev_factor", "number", "success_rate_ejection"),
          i$e(e.success_rate_ejection, "enforcement_percentage", "success_rate_ejection"),
          nne(e.success_rate_ejection, "minimum_hosts", "number", "success_rate_ejection"),
          nne(e.success_rate_ejection, "request_volume", "number", "success_rate_ejection"));
      }
      if ("failure_percentage_ejection" in e && e.failure_percentage_ejection !== void 0) {
        if (typeof e.failure_percentage_ejection != "object")
          throw new Error("outlier detection config failure_percentage_ejection must be an object");
        (i$e(e.failure_percentage_ejection, "threshold", "failure_percentage_ejection"),
          i$e(e.failure_percentage_ejection, "enforcement_percentage", "failure_percentage_ejection"),
          nne(e.failure_percentage_ejection, "minimum_hosts", "number", "failure_percentage_ejection"),
          nne(e.failure_percentage_ejection, "request_volume", "number", "failure_percentage_ejection"));
      }
      if (!("child_policy" in e) || !Array.isArray(e.child_policy))
        throw new Error("outlier detection config child_policy must be an array");
      let n = (0, WGo.selectLbConfigFromList)(e.child_policy);
      if (!n) throw new Error("outlier detection config child_policy: no valid recognized policy found");
      return new t(
        e.interval ? (0, Rq.durationToMs)(e.interval) : null,
        e.base_ejection_time ? (0, Rq.durationToMs)(e.base_ejection_time) : null,
        e.max_ejection_time ? (0, Rq.durationToMs)(e.max_ejection_time) : null,
        (r = e.max_ejection_percent) !== null && r !== void 0 ? r : null,
        e.success_rate_ejection,
        e.failure_percentage_ejection,
        n,
      );
    }
  };
  kq.OutlierDetectionLoadBalancingConfig = Qbe;
  var DIt = class extends KGo.BaseSubchannelWrapper {
    constructor(e, r) {
      (super(e), (this.mapEntry = r), (this.refCount = 0));
    }
    ref() {
      (this.child.ref(), (this.refCount += 1));
    }
    unref() {
      if ((this.child.unref(), (this.refCount -= 1), this.refCount <= 0 && this.mapEntry)) {
        let e = this.mapEntry.subchannelWrappers.indexOf(this);
        e >= 0 && this.mapEntry.subchannelWrappers.splice(e, 1);
      }
    }
    eject() {
      this.setHealthy(!1);
    }
    uneject() {
      this.setHealthy(!0);
    }
    getMapEntry() {
      return this.mapEntry;
    }
    getWrappedSubchannel() {
      return this.child;
    }
  };
  function TIt() {
    return { success: 0, failure: 0 };
  }
  var IIt = class {
      constructor() {
        ((this.activeBucket = TIt()), (this.inactiveBucket = TIt()));
      }
      addSuccess() {
        this.activeBucket.success += 1;
      }
      addFailure() {
        this.activeBucket.failure += 1;
      }
      switchBuckets() {
        ((this.inactiveBucket = this.activeBucket), (this.activeBucket = TIt()));
      }
      getLastSuccesses() {
        return this.inactiveBucket.success;
      }
      getLastFailures() {
        return this.inactiveBucket.failure;
      }
    },
    RIt = class {
      constructor(e, r) {
        ((this.wrappedPicker = e), (this.countCalls = r));
      }
      pick(e) {
        let r = this.wrappedPicker.pick(e);
        if (r.pickResultType === YGo.PickResultType.COMPLETE) {
          let n = r.subchannel,
            o = n.getMapEntry();
          if (o) {
            let s = r.onCallEnded;
            return (
              this.countCalls &&
                (s = (a, u, c) => {
                  var m;
                  (a === Qtn.Status.OK ? o.counter.addSuccess() : o.counter.addFailure(),
                    (m = r.onCallEnded) === null || m === void 0 || m.call(r, a, u, c));
                }),
              Object.assign(Object.assign({}, r), { subchannel: n.getWrappedSubchannel(), onCallEnded: s })
            );
          } else return Object.assign(Object.assign({}, r), { subchannel: n.getWrappedSubchannel() });
        } else return r;
      }
    },
    o$e = class {
      constructor(e) {
        ((this.entryMap = new wIt.EndpointMap()),
          (this.latestConfig = null),
          (this.timerStartTime = null),
          (this.childBalancer = new zGo.ChildLoadBalancerHandler(
            (0, Gtn.createChildChannelControlHelper)(e, {
              createSubchannel: (r, n) => {
                let o = e.createSubchannel(r, n),
                  s = this.entryMap.getForSubchannelAddress(r),
                  a = new DIt(o, s);
                return (s?.currentEjectionTimestamp !== null && a.eject(), s?.subchannelWrappers.push(a), a);
              },
              updateState: (r, n, o) => {
                r === VGo.ConnectivityState.READY
                  ? e.updateState(r, new RIt(n, this.isCountingEnabled()), o)
                  : e.updateState(r, n, o);
              },
            }),
          )),
          (this.ejectionTimer = setInterval(() => {}, 0)),
          clearInterval(this.ejectionTimer));
      }
      isCountingEnabled() {
        return (
          this.latestConfig !== null &&
          (this.latestConfig.getSuccessRateEjectionConfig() !== null ||
            this.latestConfig.getFailurePercentageEjectionConfig() !== null)
        );
      }
      getCurrentEjectionPercent() {
        let e = 0;
        for (let r of this.entryMap.values()) r.currentEjectionTimestamp !== null && (e += 1);
        return (e * 100) / this.entryMap.size;
      }
      runSuccessRateCheck(e) {
        if (!this.latestConfig) return;
        let r = this.latestConfig.getSuccessRateEjectionConfig();
        if (!r) return;
        Mh("Running success rate check");
        let n = r.request_volume,
          o = 0,
          s = [];
        for (let [f, p] of this.entryMap.entries()) {
          let h = p.counter.getLastSuccesses(),
            g = p.counter.getLastFailures();
          (Mh(
            "Stats for " +
              (0, wIt.endpointToString)(f) +
              ": successes=" +
              h +
              " failures=" +
              g +
              " targetRequestVolume=" +
              n,
          ),
            h + g >= n && ((o += 1), s.push(h / (h + g))));
        }
        if (
          (Mh(
            "Found " +
              o +
              " success rate candidates; currentEjectionPercent=" +
              this.getCurrentEjectionPercent() +
              " successRates=[" +
              s +
              "]",
          ),
          o < r.minimum_hosts)
        )
          return;
        let a = s.reduce((f, p) => f + p) / s.length,
          u = 0;
        for (let f of s) {
          let p = f - a;
          u += p * p;
        }
        let c = u / s.length,
          m = Math.sqrt(c),
          d = a - m * (r.stdev_factor / 1e3);
        Mh("stdev=" + m + " ejectionThreshold=" + d);
        for (let [f, p] of this.entryMap.entries()) {
          if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
          let h = p.counter.getLastSuccesses(),
            g = p.counter.getLastFailures();
          if (h + g < n) continue;
          let b = h / (h + g);
          if ((Mh("Checking candidate " + f + " successRate=" + b), b < d)) {
            let A = Math.random() * 100;
            (Mh("Candidate " + f + " randomNumber=" + A + " enforcement_percentage=" + r.enforcement_percentage),
              A < r.enforcement_percentage && (Mh("Ejecting candidate " + f), this.eject(p, e)));
          }
        }
      }
      runFailurePercentageCheck(e) {
        if (!this.latestConfig) return;
        let r = this.latestConfig.getFailurePercentageEjectionConfig();
        if (!r) return;
        Mh(
          "Running failure percentage check. threshold=" +
            r.threshold +
            " request volume threshold=" +
            r.request_volume,
        );
        let n = 0;
        for (let o of this.entryMap.values()) {
          let s = o.counter.getLastSuccesses(),
            a = o.counter.getLastFailures();
          s + a >= r.request_volume && (n += 1);
        }
        if (!(n < r.minimum_hosts))
          for (let [o, s] of this.entryMap.entries()) {
            if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) break;
            let a = s.counter.getLastSuccesses(),
              u = s.counter.getLastFailures();
            if ((Mh("Candidate successes=" + a + " failures=" + u), a + u < r.request_volume)) continue;
            if ((u * 100) / (u + a) > r.threshold) {
              let m = Math.random() * 100;
              (Mh("Candidate " + o + " randomNumber=" + m + " enforcement_percentage=" + r.enforcement_percentage),
                m < r.enforcement_percentage && (Mh("Ejecting candidate " + o), this.eject(s, e)));
            }
          }
      }
      eject(e, r) {
        ((e.currentEjectionTimestamp = new Date()), (e.ejectionTimeMultiplier += 1));
        for (let n of e.subchannelWrappers) n.eject();
      }
      uneject(e) {
        e.currentEjectionTimestamp = null;
        for (let r of e.subchannelWrappers) r.uneject();
      }
      switchAllBuckets() {
        for (let e of this.entryMap.values()) e.counter.switchBuckets();
      }
      startTimer(e) {
        var r, n;
        ((this.ejectionTimer = setTimeout(() => this.runChecks(), e)),
          (n = (r = this.ejectionTimer).unref) === null || n === void 0 || n.call(r));
      }
      runChecks() {
        let e = new Date();
        if ((Mh("Ejection timer running"), this.switchAllBuckets(), !!this.latestConfig)) {
          ((this.timerStartTime = e),
            this.startTimer(this.latestConfig.getIntervalMs()),
            this.runSuccessRateCheck(e),
            this.runFailurePercentageCheck(e));
          for (let [r, n] of this.entryMap.entries())
            if (n.currentEjectionTimestamp === null) n.ejectionTimeMultiplier > 0 && (n.ejectionTimeMultiplier -= 1);
            else {
              let o = this.latestConfig.getBaseEjectionTimeMs(),
                s = this.latestConfig.getMaxEjectionTimeMs(),
                a = new Date(n.currentEjectionTimestamp.getTime());
              (a.setMilliseconds(a.getMilliseconds() + Math.min(o * n.ejectionTimeMultiplier, Math.max(o, s))),
                a < new Date() && (Mh("Unejecting " + r), this.uneject(n)));
            }
        }
      }
      updateAddressList(e, r, n, o) {
        if (!(r instanceof Qbe)) return !1;
        if ((Mh("Received update with config: " + JSON.stringify(r.toJsonObject(), void 0, 2)), e.ok)) {
          for (let a of e.value)
            this.entryMap.has(a) ||
              (Mh("Adding map entry for " + (0, wIt.endpointToString)(a)),
              this.entryMap.set(a, {
                counter: new IIt(),
                currentEjectionTimestamp: null,
                ejectionTimeMultiplier: 0,
                subchannelWrappers: [],
              }));
          this.entryMap.deleteMissing(e.value);
        }
        let s = r.getChildPolicy();
        if (
          (this.childBalancer.updateAddressList(e, s, n, o),
          r.getSuccessRateEjectionConfig() || r.getFailurePercentageEjectionConfig())
        )
          if (this.timerStartTime) {
            (Mh("Previous timer existed. Replacing timer"), clearTimeout(this.ejectionTimer));
            let a = r.getIntervalMs() - (new Date().getTime() - this.timerStartTime.getTime());
            this.startTimer(a);
          } else
            (Mh("Starting new timer"),
              (this.timerStartTime = new Date()),
              this.startTimer(r.getIntervalMs()),
              this.switchAllBuckets());
        else {
          (Mh("Counting disabled. Cancelling timer."), (this.timerStartTime = null), clearTimeout(this.ejectionTimer));
          for (let a of this.entryMap.values()) (this.uneject(a), (a.ejectionTimeMultiplier = 0));
        }
        return ((this.latestConfig = r), !0);
      }
      exitIdle() {
        this.childBalancer.exitIdle();
      }
      resetBackoff() {
        this.childBalancer.resetBackoff();
      }
      destroy() {
        (clearTimeout(this.ejectionTimer), this.childBalancer.destroy());
      }
      getTypeName() {
        return kIt;
      }
    };
  kq.OutlierDetectionLoadBalancer = o$e;
  function rqo() {
    ZGo && (0, Gtn.registerLoadBalancerType)(kIt, o$e, Qbe);
  }
});