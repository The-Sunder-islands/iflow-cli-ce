/**
 * @module Ktn
 * @category network/tls
 * @label tls
 * @position 522 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ktn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ktn = T((Hbe) => {
  "use strict";
  Object.defineProperty(Hbe, "__esModule", { value: !0 });
  Hbe.WeightedRoundRobinLoadBalancingConfig = void 0;
  Hbe.setup = fqo;
  var Fh = f2(),
    nqo = La(),
    p6 = Pbe(),
    ztn = UB(),
    iqo = Fbe(),
    oqo = g0(),
    Ytn = qUe(),
    one = IR(),
    sqo = Htn(),
    Vtn = a8(),
    aqo = "weighted_round_robin";
  function PIt(t) {
    oqo.trace(nqo.LogVerbosity.DEBUG, aqo, t);
  }
  var MIt = "weighted_round_robin",
    uqo = 1e4,
    cqo = 1e4,
    lqo = 3 * 6e4,
    mqo = 1e3,
    dqo = 1;
  function Wtn(t, e, r) {
    if (e in t && t[e] !== void 0 && typeof t[e] !== r)
      throw new Error(`weighted round robin config ${e} parse error: expected ${r}, got ${typeof t[e]}`);
  }
  function u$e(t, e) {
    if (e in t && t[e] !== void 0 && t[e] !== null) {
      let r;
      if ((0, p6.isDuration)(t[e])) r = t[e];
      else if ((0, p6.isDurationMessage)(t[e])) r = (0, p6.durationMessageToDuration)(t[e]);
      else if (typeof t[e] == "string") {
        let n = (0, p6.parseDuration)(t[e]);
        if (!n) throw new Error(`weighted round robin config ${e}: failed to parse duration string ${t[e]}`);
        r = n;
      } else throw new Error(`weighted round robin config ${e}: expected duration, got ${typeof t[e]}`);
      return (0, p6.durationToMs)(r);
    }
    return null;
  }
  var qbe = class t {
    constructor(e, r, n, o, s, a) {
      ((this.enableOobLoadReport = e ?? !1),
        (this.oobLoadReportingPeriodMs = r ?? uqo),
        (this.blackoutPeriodMs = n ?? cqo),
        (this.weightExpirationPeriodMs = o ?? lqo),
        (this.weightUpdatePeriodMs = Math.max(s ?? mqo, 100)),
        (this.errorUtilizationPenalty = a ?? dqo));
    }
    getLoadBalancerName() {
      return MIt;
    }
    toJsonObject() {
      return {
        enable_oob_load_report: this.enableOobLoadReport,
        oob_load_reporting_period: (0, p6.durationToString)((0, p6.msToDuration)(this.oobLoadReportingPeriodMs)),
        blackout_period: (0, p6.durationToString)((0, p6.msToDuration)(this.blackoutPeriodMs)),
        weight_expiration_period: (0, p6.durationToString)((0, p6.msToDuration)(this.weightExpirationPeriodMs)),
        weight_update_period: (0, p6.durationToString)((0, p6.msToDuration)(this.weightUpdatePeriodMs)),
        error_utilization_penalty: this.errorUtilizationPenalty,
      };
    }
    static createFromJson(e) {
      if (
        (Wtn(e, "enable_oob_load_report", "boolean"),
        Wtn(e, "error_utilization_penalty", "number"),
        e.error_utilization_penalty < 0)
      )
        throw new Error("weighted round robin config error_utilization_penalty < 0");
      return new t(
        e.enable_oob_load_report,
        u$e(e, "oob_load_reporting_period"),
        u$e(e, "blackout_period"),
        u$e(e, "weight_expiration_period"),
        u$e(e, "weight_update_period"),
        e.error_utilization_penalty,
      );
    }
    getEnableOobLoadReport() {
      return this.enableOobLoadReport;
    }
    getOobLoadReportingPeriodMs() {
      return this.oobLoadReportingPeriodMs;
    }
    getBlackoutPeriodMs() {
      return this.blackoutPeriodMs;
    }
    getWeightExpirationPeriodMs() {
      return this.weightExpirationPeriodMs;
    }
    getWeightUpdatePeriodMs() {
      return this.weightUpdatePeriodMs;
    }
    getErrorUtilizationPenalty() {
      return this.errorUtilizationPenalty;
    }
  };
  Hbe.WeightedRoundRobinLoadBalancingConfig = qbe;
  var BIt = class {
      constructor(e, r) {
        ((this.metricsHandler = r), (this.queue = new sqo.PriorityQueue((s, a) => s.deadline < a.deadline)));
        let n = e.filter((s) => s.weight > 0),
          o;
        if (n.length < 2) o = 1;
        else {
          let s = 0;
          for (let { weight: a } of n) s += a;
          o = s / n.length;
        }
        for (let s of e) {
          let a = s.weight > 0 ? 1 / s.weight : o;
          this.queue.push({ endpointName: s.endpointName, picker: s.picker, period: a, deadline: Math.random() * a });
        }
      }
      pick(e) {
        let r = this.queue.pop();
        this.queue.push(Object.assign(Object.assign({}, r), { deadline: r.deadline + r.period }));
        let n = r.picker.pick(e);
        if (n.pickResultType === one.PickResultType.COMPLETE) {
          if (this.metricsHandler)
            return Object.assign(Object.assign({}, n), {
              onCallEnded: (0, Ytn.createMetricsReader)((o) => this.metricsHandler(o, r.endpointName), n.onCallEnded),
            });
          {
            let o = n.subchannel;
            return Object.assign(Object.assign({}, n), { subchannel: o.getWrappedSubchannel() });
          }
        } else return n;
      }
    },
    LIt = class {
      constructor(e) {
        ((this.channelControlHelper = e),
          (this.latestConfig = null),
          (this.children = new Map()),
          (this.currentState = Fh.ConnectivityState.IDLE),
          (this.updatesPaused = !1),
          (this.lastError = null),
          (this.weightUpdateTimer = null));
      }
      countChildrenWithState(e) {
        let r = 0;
        for (let n of this.children.values()) n.child.getConnectivityState() === e && (r += 1);
        return r;
      }
      updateWeight(e, r) {
        var n, o;
        let s = r.rps_fractional,
          a = r.application_utilization;
        a > 0 &&
          s > 0 &&
          (a +=
            (r.eps / s) *
            ((o = (n = this.latestConfig) === null || n === void 0 ? void 0 : n.getErrorUtilizationPenalty()) !==
              null && o !== void 0
              ? o
              : 0));
        let u = a === 0 ? 0 : s / a;
        if (u === 0) return;
        let c = new Date();
        (e.nonEmptySince === null && (e.nonEmptySince = c), (e.lastUpdated = c), (e.weight = u));
      }
      getWeight(e) {
        if (!this.latestConfig) return 0;
        let r = new Date().getTime();
        if (r - e.lastUpdated.getTime() >= this.latestConfig.getWeightExpirationPeriodMs())
          return ((e.nonEmptySince = null), 0);
        let n = this.latestConfig.getBlackoutPeriodMs();
        return n > 0 && (e.nonEmptySince === null || r - e.nonEmptySince.getTime() < n) ? 0 : e.weight;
      }
      calculateAndUpdateState() {
        if (!(this.updatesPaused || !this.latestConfig)) {
          if (this.countChildrenWithState(Fh.ConnectivityState.READY) > 0) {
            let e = [];
            for (let [n, o] of this.children)
              o.child.getConnectivityState() === Fh.ConnectivityState.READY &&
                e.push({ endpointName: n, picker: o.child.getPicker(), weight: this.getWeight(o) });
            PIt("Created picker with weights: " + e.map((n) => n.endpointName + ":" + n.weight).join(","));
            let r;
            (this.latestConfig.getEnableOobLoadReport()
              ? (r = null)
              : (r = (n, o) => {
                  let s = this.children.get(o);
                  s && this.updateWeight(s, n);
                }),
              this.updateState(Fh.ConnectivityState.READY, new BIt(e, r), null));
          } else if (this.countChildrenWithState(Fh.ConnectivityState.CONNECTING) > 0)
            this.updateState(Fh.ConnectivityState.CONNECTING, new one.QueuePicker(this), null);
          else if (this.countChildrenWithState(Fh.ConnectivityState.TRANSIENT_FAILURE) > 0) {
            let e = `weighted_round_robin: No connection established. Last error: ${this.lastError}`;
            this.updateState(Fh.ConnectivityState.TRANSIENT_FAILURE, new one.UnavailablePicker({ details: e }), e);
          } else this.updateState(Fh.ConnectivityState.IDLE, new one.QueuePicker(this), null);
          for (let { child: e } of this.children.values())
            e.getConnectivityState() === Fh.ConnectivityState.IDLE && e.exitIdle();
        }
      }
      updateState(e, r, n) {
        (PIt(Fh.ConnectivityState[this.currentState] + " -> " + Fh.ConnectivityState[e]),
          (this.currentState = e),
          this.channelControlHelper.updateState(e, r, n));
      }
      updateAddressList(e, r, n, o) {
        var s, a;
        if (!(r instanceof qbe)) return !1;
        if (!e.ok)
          return (
            this.children.size === 0 &&
              this.updateState(
                Fh.ConnectivityState.TRANSIENT_FAILURE,
                new one.UnavailablePicker(e.error),
                e.error.details,
              ),
            !0
          );
        if (e.value.length === 0) {
          let m = `No addresses resolved. Resolution note: ${o}`;
          return (
            this.updateState(Fh.ConnectivityState.TRANSIENT_FAILURE, new one.UnavailablePicker({ details: m }), m),
            !1
          );
        }
        PIt("Connect to endpoint list " + e.value.map(Vtn.endpointToString));
        let u = new Date(),
          c = new Set();
        ((this.updatesPaused = !0), (this.latestConfig = r));
        for (let m of e.value) {
          let d = (0, Vtn.endpointToString)(m);
          c.add(d);
          let f = this.children.get(d);
          (f ||
            ((f = {
              child: new iqo.LeafLoadBalancer(
                m,
                (0, ztn.createChildChannelControlHelper)(this.channelControlHelper, {
                  updateState: (p, h, g) => {
                    (this.currentState === Fh.ConnectivityState.READY &&
                      p !== Fh.ConnectivityState.READY &&
                      this.channelControlHelper.requestReresolution(),
                      p === Fh.ConnectivityState.READY && (f.nonEmptySince = null),
                      g && (this.lastError = g),
                      this.calculateAndUpdateState());
                  },
                  createSubchannel: (p, h) => {
                    let g = this.channelControlHelper.createSubchannel(p, h);
                    return f?.oobMetricsListener
                      ? new Ytn.OrcaOobMetricsSubchannelWrapper(
                          g,
                          f.oobMetricsListener,
                          this.latestConfig.getOobLoadReportingPeriodMs(),
                        )
                      : g;
                  },
                }),
                n,
                o,
              ),
              lastUpdated: u,
              nonEmptySince: null,
              weight: 0,
              oobMetricsListener: null,
            }),
            this.children.set(d, f)),
            r.getEnableOobLoadReport()
              ? (f.oobMetricsListener = (p) => {
                  this.updateWeight(f, p);
                })
              : (f.oobMetricsListener = null));
        }
        for (let [m, d] of this.children)
          c.has(m) ? d.child.startConnecting() : (d.child.destroy(), this.children.delete(m));
        return (
          (this.updatesPaused = !1),
          this.calculateAndUpdateState(),
          this.weightUpdateTimer && clearInterval(this.weightUpdateTimer),
          (this.weightUpdateTimer =
            (a = (s = setInterval(() => {
              this.currentState === Fh.ConnectivityState.READY && this.calculateAndUpdateState();
            }, r.getWeightUpdatePeriodMs())).unref) === null || a === void 0
              ? void 0
              : a.call(s)),
          !0
        );
      }
      exitIdle() {}
      resetBackoff() {}
      destroy() {
        for (let e of this.children.values()) e.child.destroy();
        (this.children.clear(), this.weightUpdateTimer && clearInterval(this.weightUpdateTimer));
      }
      getTypeName() {
        return MIt;
      }
    };
  function fqo() {
    (0, ztn.registerLoadBalancerType)(MIt, LIt, qbe);
  }
});