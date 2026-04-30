/**
 * @module pXr
 * @category network/grpc
 * @label grpc
 * @position 440 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pXr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pXr = T((IFe) => {
  "use strict";
  Object.defineProperty(IFe, "__esModule", { value: !0 });
  IFe.ResolvingLoadBalancer = void 0;
  var GLo = UB(),
    qLo = lxt(),
    s8 = f2(),
    dXr = VC(),
    Zge = IR(),
    HLo = Rre(),
    pxt = La(),
    VLo = Ph(),
    WLo = g0(),
    zLo = La(),
    YLo = d2(),
    KLo = DFe(),
    JLo = "resolving_load_balancer";
  function fXr(t) {
    WLo.trace(zLo.LogVerbosity.DEBUG, JLo, t);
  }
  var XLo = ["SERVICE_AND_METHOD", "SERVICE", "EMPTY"];
  function ZLo(t, e, r, n) {
    for (let o of r.name)
      switch (n) {
        case "EMPTY":
          if (!o.service && !o.method) return !0;
          break;
        case "SERVICE":
          if (o.service === t && !o.method) return !0;
          break;
        case "SERVICE_AND_METHOD":
          if (o.service === t && o.method === e) return !0;
      }
    return !1;
  }
  function eMo(t, e, r, n) {
    for (let o of r) if (ZLo(t, e, o, n)) return o;
    return null;
  }
  function tMo(t) {
    return {
      invoke(e, r) {
        var n, o;
        let s = e.split("/").filter((c) => c.length > 0),
          a = (n = s[0]) !== null && n !== void 0 ? n : "",
          u = (o = s[1]) !== null && o !== void 0 ? o : "";
        if (t && t.methodConfig)
          for (let c of XLo) {
            let m = eMo(a, u, t.methodConfig, c);
            if (m) return { methodConfig: m, pickInformation: {}, status: pxt.Status.OK, dynamicFilterFactories: [] };
          }
        return { methodConfig: { name: [] }, pickInformation: {}, status: pxt.Status.OK, dynamicFilterFactories: [] };
      },
      unref() {},
    };
  }
  var hxt = class {
    constructor(e, r, n, o, s) {
      ((this.target = e),
        (this.channelControlHelper = r),
        (this.channelOptions = n),
        (this.onSuccessfulResolution = o),
        (this.onFailedResolution = s),
        (this.latestChildState = s8.ConnectivityState.IDLE),
        (this.latestChildPicker = new Zge.QueuePicker(this)),
        (this.latestChildErrorMessage = null),
        (this.currentState = s8.ConnectivityState.IDLE),
        (this.previousServiceConfig = null),
        (this.continueResolving = !1),
        n["grpc.service_config"]
          ? (this.defaultServiceConfig = (0, qLo.validateServiceConfig)(JSON.parse(n["grpc.service_config"])))
          : (this.defaultServiceConfig = { loadBalancingConfig: [], methodConfig: [] }),
        this.updateState(s8.ConnectivityState.IDLE, new Zge.QueuePicker(this), null),
        (this.childLoadBalancer = new KLo.ChildLoadBalancerHandler({
          createSubchannel: r.createSubchannel.bind(r),
          requestReresolution: () => {
            this.backoffTimeout.isRunning()
              ? (fXr(
                  "requestReresolution delayed by backoff timer until " +
                    this.backoffTimeout.getEndTime().toISOString(),
                ),
                (this.continueResolving = !0))
              : this.updateResolution();
          },
          updateState: (u, c, m) => {
            ((this.latestChildState = u),
              (this.latestChildPicker = c),
              (this.latestChildErrorMessage = m),
              this.updateState(u, c, m));
          },
          addChannelzChild: r.addChannelzChild.bind(r),
          removeChannelzChild: r.removeChannelzChild.bind(r),
        })),
        (this.innerResolver = (0, dXr.createResolver)(e, this.handleResolverResult.bind(this), n)));
      let a = { initialDelay: n["grpc.initial_reconnect_backoff_ms"], maxDelay: n["grpc.max_reconnect_backoff_ms"] };
      ((this.backoffTimeout = new HLo.BackoffTimeout(() => {
        this.continueResolving
          ? (this.updateResolution(), (this.continueResolving = !1))
          : this.updateState(this.latestChildState, this.latestChildPicker, this.latestChildErrorMessage);
      }, a)),
        this.backoffTimeout.unref());
    }
    handleResolverResult(e, r, n, o) {
      var s, a;
      (this.backoffTimeout.stop(), this.backoffTimeout.reset());
      let u = !0,
        c = null;
      if (
        (n === null
          ? (c = this.defaultServiceConfig)
          : n.ok
            ? (c = n.value)
            : this.previousServiceConfig !== null
              ? (c = this.previousServiceConfig)
              : ((u = !1), this.handleResolutionFailure(n.error)),
        c !== null)
      ) {
        let m = (s = c?.loadBalancingConfig) !== null && s !== void 0 ? s : [],
          d = (0, GLo.selectLbConfigFromList)(m, !0);
        d === null
          ? ((u = !1),
            this.handleResolutionFailure({
              code: pxt.Status.UNAVAILABLE,
              details: "All load balancer options in service config are not compatible",
              metadata: new VLo.Metadata(),
            }))
          : (u = this.childLoadBalancer.updateAddressList(
              e,
              d,
              Object.assign(Object.assign({}, this.channelOptions), r),
              o,
            ));
      }
      return (
        u &&
          this.onSuccessfulResolution(
            c,
            (a = r[dXr.CHANNEL_ARGS_CONFIG_SELECTOR_KEY]) !== null && a !== void 0 ? a : tMo(c),
          ),
        u
      );
    }
    updateResolution() {
      (this.innerResolver.updateResolution(),
        this.currentState === s8.ConnectivityState.IDLE &&
          this.updateState(s8.ConnectivityState.CONNECTING, this.latestChildPicker, this.latestChildErrorMessage),
        this.backoffTimeout.runOnce());
    }
    updateState(e, r, n) {
      (fXr(
        (0, YLo.uriToString)(this.target) +
          " " +
          s8.ConnectivityState[this.currentState] +
          " -> " +
          s8.ConnectivityState[e],
      ),
        e === s8.ConnectivityState.IDLE && (r = new Zge.QueuePicker(this, r)),
        (this.currentState = e),
        this.channelControlHelper.updateState(e, r, n));
    }
    handleResolutionFailure(e) {
      this.latestChildState === s8.ConnectivityState.IDLE &&
        (this.updateState(s8.ConnectivityState.TRANSIENT_FAILURE, new Zge.UnavailablePicker(e), e.details),
        this.onFailedResolution(e));
    }
    exitIdle() {
      ((this.currentState === s8.ConnectivityState.IDLE ||
        this.currentState === s8.ConnectivityState.TRANSIENT_FAILURE) &&
        (this.backoffTimeout.isRunning() ? (this.continueResolving = !0) : this.updateResolution()),
        this.childLoadBalancer.exitIdle());
    }
    updateAddressList(e, r) {
      throw new Error("updateAddressList not supported on ResolvingLoadBalancer");
    }
    resetBackoff() {
      (this.backoffTimeout.reset(), this.childLoadBalancer.resetBackoff());
    }
    destroy() {
      (this.childLoadBalancer.destroy(),
        this.innerResolver.destroy(),
        this.backoffTimeout.reset(),
        this.backoffTimeout.stop(),
        (this.latestChildState = s8.ConnectivityState.IDLE),
        (this.latestChildPicker = new Zge.QueuePicker(this)),
        (this.currentState = s8.ConnectivityState.IDLE),
        (this.previousServiceConfig = null),
        (this.continueResolving = !1));
    }
    getTypeName() {
      return "resolving_load_balancer";
    }
  };
  IFe.ResolvingLoadBalancer = hxt;
});