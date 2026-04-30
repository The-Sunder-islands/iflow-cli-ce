/**
 * @module jtn
 * @category network/tls
 * @label tls
 * @position 519 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jtn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jtn = T((jbe) => {
  "use strict";
  Object.defineProperty(jbe, "__esModule", { value: !0 });
  jbe.RoundRobinLoadBalancer = void 0;
  jbe.setup = HGo;
  var $tn = UB(),
    rg = f2(),
    $be = IR(),
    $Go = g0(),
    jGo = La(),
    Ftn = a8(),
    QGo = Fbe(),
    GGo = "round_robin";
  function Utn(t) {
    $Go.trace(jGo.LogVerbosity.DEBUG, GGo, t);
  }
  var t$e = "round_robin",
    r$e = class t {
      getLoadBalancerName() {
        return t$e;
      }
      constructor() {}
      toJsonObject() {
        return { [t$e]: {} };
      }
      static createFromJson(e) {
        return new t();
      }
    },
    CIt = class {
      constructor(e, r = 0) {
        ((this.children = e), (this.nextIndex = r));
      }
      pick(e) {
        let r = this.children[this.nextIndex].picker;
        return ((this.nextIndex = (this.nextIndex + 1) % this.children.length), r.pick(e));
      }
      peekNextEndpoint() {
        return this.children[this.nextIndex].endpoint;
      }
    };
  function qGo(t, e) {
    return [...t.slice(e), ...t.slice(0, e)];
  }
  var n$e = class {
    constructor(e) {
      ((this.channelControlHelper = e),
        (this.children = []),
        (this.currentState = rg.ConnectivityState.IDLE),
        (this.currentReadyPicker = null),
        (this.updatesPaused = !1),
        (this.lastError = null),
        (this.childChannelControlHelper = (0, $tn.createChildChannelControlHelper)(e, {
          updateState: (r, n, o) => {
            (this.currentState === rg.ConnectivityState.READY &&
              r !== rg.ConnectivityState.READY &&
              this.channelControlHelper.requestReresolution(),
              o && (this.lastError = o),
              this.calculateAndUpdateState());
          },
        })));
    }
    countChildrenWithState(e) {
      return this.children.filter((r) => r.getConnectivityState() === e).length;
    }
    calculateAndUpdateState() {
      if (!this.updatesPaused) {
        if (this.countChildrenWithState(rg.ConnectivityState.READY) > 0) {
          let e = this.children.filter((n) => n.getConnectivityState() === rg.ConnectivityState.READY),
            r = 0;
          if (this.currentReadyPicker !== null) {
            let n = this.currentReadyPicker.peekNextEndpoint();
            ((r = e.findIndex((o) => (0, Ftn.endpointEqual)(o.getEndpoint(), n))), r < 0 && (r = 0));
          }
          this.updateState(
            rg.ConnectivityState.READY,
            new CIt(
              e.map((n) => ({ endpoint: n.getEndpoint(), picker: n.getPicker() })),
              r,
            ),
            null,
          );
        } else if (this.countChildrenWithState(rg.ConnectivityState.CONNECTING) > 0)
          this.updateState(rg.ConnectivityState.CONNECTING, new $be.QueuePicker(this), null);
        else if (this.countChildrenWithState(rg.ConnectivityState.TRANSIENT_FAILURE) > 0) {
          let e = `round_robin: No connection established. Last error: ${this.lastError}`;
          this.updateState(rg.ConnectivityState.TRANSIENT_FAILURE, new $be.UnavailablePicker({ details: e }), e);
        } else this.updateState(rg.ConnectivityState.IDLE, new $be.QueuePicker(this), null);
        for (let e of this.children) e.getConnectivityState() === rg.ConnectivityState.IDLE && e.exitIdle();
      }
    }
    updateState(e, r, n) {
      (Utn(rg.ConnectivityState[this.currentState] + " -> " + rg.ConnectivityState[e]),
        e === rg.ConnectivityState.READY ? (this.currentReadyPicker = r) : (this.currentReadyPicker = null),
        (this.currentState = e),
        this.channelControlHelper.updateState(e, r, n));
    }
    resetSubchannelList() {
      for (let e of this.children) e.destroy();
      this.children = [];
    }
    updateAddressList(e, r, n, o) {
      if (!(r instanceof r$e)) return !1;
      if (!e.ok)
        return (
          this.children.length === 0 &&
            this.updateState(
              rg.ConnectivityState.TRANSIENT_FAILURE,
              new $be.UnavailablePicker(e.error),
              e.error.details,
            ),
          !0
        );
      let s = (Math.random() * e.value.length) | 0,
        a = qGo(e.value, s);
      if ((this.resetSubchannelList(), a.length === 0)) {
        let u = `No addresses resolved. Resolution note: ${o}`;
        this.updateState(rg.ConnectivityState.TRANSIENT_FAILURE, new $be.UnavailablePicker({ details: u }), u);
      }
      (Utn("Connect to endpoint list " + a.map(Ftn.endpointToString)),
        (this.updatesPaused = !0),
        (this.children = a.map((u) => new QGo.LeafLoadBalancer(u, this.childChannelControlHelper, n, o))));
      for (let u of this.children) u.startConnecting();
      return ((this.updatesPaused = !1), this.calculateAndUpdateState(), !0);
    }
    exitIdle() {}
    resetBackoff() {}
    destroy() {
      this.resetSubchannelList();
    }
    getTypeName() {
      return t$e;
    }
  };
  jbe.RoundRobinLoadBalancer = n$e;
  function HGo() {
    (0, $tn.registerLoadBalancerType)(t$e, n$e, r$e);
  }
});