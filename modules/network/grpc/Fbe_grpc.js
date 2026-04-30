/**
 * @module Fbe
 * @category network/grpc
 * @label grpc
 * @position 514 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fbe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fbe = T((oT) => {
  "use strict";
  Object.defineProperty(oT, "__esModule", { value: !0 });
  oT.LeafLoadBalancer = oT.PickFirstLoadBalancer = oT.PickFirstLoadBalancingConfig = void 0;
  oT.shuffled = Ctn;
  oT.setup = gGo;
  var cIt = UB(),
    H1 = f2(),
    eL = IR(),
    _tn = a8(),
    cGo = g0(),
    lGo = La(),
    Etn = a8(),
    vtn = Ae("net"),
    mGo = pq(),
    dGo = "pick_first";
  function Bbe(t) {
    cGo.trace(lGo.LogVerbosity.DEBUG, dGo, t);
  }
  var Lbe = "pick_first",
    fGo = 250,
    rne = class t {
      constructor(e) {
        this.shuffleAddressList = e;
      }
      getLoadBalancerName() {
        return Lbe;
      }
      toJsonObject() {
        return { [Lbe]: { shuffleAddressList: this.shuffleAddressList } };
      }
      getShuffleAddressList() {
        return this.shuffleAddressList;
      }
      static createFromJson(e) {
        if ("shuffleAddressList" in e && typeof e.shuffleAddressList != "boolean")
          throw new Error("pick_first config field shuffleAddressList must be a boolean if provided");
        return new t(e.shuffleAddressList === !0);
      }
    };
  oT.PickFirstLoadBalancingConfig = rne;
  var lIt = class {
    constructor(e) {
      this.subchannel = e;
    }
    pick(e) {
      return {
        pickResultType: eL.PickResultType.COMPLETE,
        subchannel: this.subchannel,
        status: null,
        onCallStarted: null,
        onCallEnded: null,
      };
    }
  };
  function Ctn(t) {
    let e = t.slice();
    for (let r = e.length - 1; r > 1; r--) {
      let n = Math.floor(Math.random() * (r + 1)),
        o = e[r];
      ((e[r] = e[n]), (e[n] = o));
    }
    return e;
  }
  function pGo(t) {
    if (t.length === 0) return [];
    let e = [],
      r = [],
      n = [],
      o = (0, Etn.isTcpSubchannelAddress)(t[0]) && (0, vtn.isIPv6)(t[0].host);
    for (let u of t) (0, Etn.isTcpSubchannelAddress)(u) && (0, vtn.isIPv6)(u.host) ? r.push(u) : n.push(u);
    let s = o ? r : n,
      a = o ? n : r;
    for (let u = 0; u < Math.max(s.length, a.length); u++) (u < s.length && e.push(s[u]), u < a.length && e.push(a[u]));
    return e;
  }
  var Stn = "grpc-node.internal.pick-first.report_health_status",
    Mbe = class {
      constructor(e) {
        ((this.channelControlHelper = e),
          (this.children = []),
          (this.currentState = H1.ConnectivityState.IDLE),
          (this.currentSubchannelIndex = 0),
          (this.currentPick = null),
          (this.subchannelStateListener = (r, n, o, s, a) => {
            this.onSubchannelStateUpdate(r, n, o, a);
          }),
          (this.pickedSubchannelHealthListener = () => this.calculateAndReportNewState()),
          (this.stickyTransientFailureMode = !1),
          (this.reportHealthStatus = !1),
          (this.lastError = null),
          (this.latestAddressList = null),
          (this.latestOptions = {}),
          (this.latestResolutionNote = ""),
          (this.connectionDelayTimeout = setTimeout(() => {}, 0)),
          clearTimeout(this.connectionDelayTimeout));
      }
      allChildrenHaveReportedTF() {
        return this.children.every((e) => e.hasReportedTransientFailure);
      }
      resetChildrenReportedTF() {
        this.children.every((e) => (e.hasReportedTransientFailure = !1));
      }
      calculateAndReportNewState() {
        var e;
        if (this.currentPick)
          if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
            let r = `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`;
            this.updateState(H1.ConnectivityState.TRANSIENT_FAILURE, new eL.UnavailablePicker({ details: r }), r);
          } else this.updateState(H1.ConnectivityState.READY, new lIt(this.currentPick), null);
        else if (((e = this.latestAddressList) === null || e === void 0 ? void 0 : e.length) === 0) {
          let r = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
          this.updateState(H1.ConnectivityState.TRANSIENT_FAILURE, new eL.UnavailablePicker({ details: r }), r);
        } else if (this.children.length === 0)
          this.updateState(H1.ConnectivityState.IDLE, new eL.QueuePicker(this), null);
        else if (this.stickyTransientFailureMode) {
          let r = `No connection established. Last error: ${this.lastError}. Resolution note: ${this.latestResolutionNote}`;
          this.updateState(H1.ConnectivityState.TRANSIENT_FAILURE, new eL.UnavailablePicker({ details: r }), r);
        } else this.updateState(H1.ConnectivityState.CONNECTING, new eL.QueuePicker(this), null);
      }
      requestReresolution() {
        this.channelControlHelper.requestReresolution();
      }
      maybeEnterStickyTransientFailureMode() {
        if (this.allChildrenHaveReportedTF()) {
          if ((this.requestReresolution(), this.resetChildrenReportedTF(), this.stickyTransientFailureMode)) {
            this.calculateAndReportNewState();
            return;
          }
          this.stickyTransientFailureMode = !0;
          for (let { subchannel: e } of this.children) e.startConnecting();
          this.calculateAndReportNewState();
        }
      }
      removeCurrentPick() {
        this.currentPick !== null &&
          (this.currentPick.removeConnectivityStateListener(this.subchannelStateListener),
          this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef()),
          this.currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener),
          this.currentPick.unref(),
          (this.currentPick = null));
      }
      onSubchannelStateUpdate(e, r, n, o) {
        var s;
        if (!((s = this.currentPick) === null || s === void 0) && s.realSubchannelEquals(e)) {
          n !== H1.ConnectivityState.READY && (this.removeCurrentPick(), this.calculateAndReportNewState());
          return;
        }
        for (let [a, u] of this.children.entries())
          if (e.realSubchannelEquals(u.subchannel)) {
            (n === H1.ConnectivityState.READY && this.pickSubchannel(u.subchannel),
              n === H1.ConnectivityState.TRANSIENT_FAILURE &&
                ((u.hasReportedTransientFailure = !0),
                o && (this.lastError = o),
                this.maybeEnterStickyTransientFailureMode(),
                a === this.currentSubchannelIndex && this.startNextSubchannelConnecting(a + 1)),
              u.subchannel.startConnecting());
            return;
          }
      }
      startNextSubchannelConnecting(e) {
        clearTimeout(this.connectionDelayTimeout);
        for (let [r, n] of this.children.entries())
          if (r >= e) {
            let o = n.subchannel.getConnectivityState();
            if (o === H1.ConnectivityState.IDLE || o === H1.ConnectivityState.CONNECTING) {
              this.startConnecting(r);
              return;
            }
          }
        this.maybeEnterStickyTransientFailureMode();
      }
      startConnecting(e) {
        var r, n;
        (clearTimeout(this.connectionDelayTimeout),
          (this.currentSubchannelIndex = e),
          this.children[e].subchannel.getConnectivityState() === H1.ConnectivityState.IDLE &&
            (Bbe("Start connecting to subchannel with address " + this.children[e].subchannel.getAddress()),
            process.nextTick(() => {
              var o;
              (o = this.children[e]) === null || o === void 0 || o.subchannel.startConnecting();
            })),
          (this.connectionDelayTimeout = setTimeout(() => {
            this.startNextSubchannelConnecting(e + 1);
          }, fGo)),
          (n = (r = this.connectionDelayTimeout).unref) === null || n === void 0 || n.call(r));
      }
      pickSubchannel(e) {
        (Bbe("Pick subchannel with address " + e.getAddress()),
          (this.stickyTransientFailureMode = !1),
          e.ref(),
          this.channelControlHelper.addChannelzChild(e.getChannelzRef()),
          this.removeCurrentPick(),
          this.resetSubchannelList(),
          e.addConnectivityStateListener(this.subchannelStateListener),
          e.addHealthStateWatcher(this.pickedSubchannelHealthListener),
          (this.currentPick = e),
          clearTimeout(this.connectionDelayTimeout),
          this.calculateAndReportNewState());
      }
      updateState(e, r, n) {
        (Bbe(H1.ConnectivityState[this.currentState] + " -> " + H1.ConnectivityState[e]),
          (this.currentState = e),
          this.channelControlHelper.updateState(e, r, n));
      }
      resetSubchannelList() {
        for (let e of this.children)
          (e.subchannel.removeConnectivityStateListener(this.subchannelStateListener),
            e.subchannel.unref(),
            this.channelControlHelper.removeChannelzChild(e.subchannel.getChannelzRef()));
        ((this.currentSubchannelIndex = 0), (this.children = []));
      }
      connectToAddressList(e, r) {
        Bbe("connectToAddressList([" + e.map((o) => (0, _tn.subchannelAddressToString)(o)) + "])");
        let n = e.map((o) => ({
          subchannel: this.channelControlHelper.createSubchannel(o, r),
          hasReportedTransientFailure: !1,
        }));
        for (let { subchannel: o } of n)
          if (o.getConnectivityState() === H1.ConnectivityState.READY) {
            this.pickSubchannel(o);
            return;
          }
        for (let { subchannel: o } of n) (o.ref(), this.channelControlHelper.addChannelzChild(o.getChannelzRef()));
        (this.resetSubchannelList(), (this.children = n));
        for (let { subchannel: o } of this.children) o.addConnectivityStateListener(this.subchannelStateListener);
        for (let o of this.children)
          o.subchannel.getConnectivityState() === H1.ConnectivityState.TRANSIENT_FAILURE &&
            (o.hasReportedTransientFailure = !0);
        (this.startNextSubchannelConnecting(0), this.calculateAndReportNewState());
      }
      updateAddressList(e, r, n, o) {
        if (!(r instanceof rne)) return !1;
        if (!e.ok)
          return (
            this.children.length === 0 &&
              this.currentPick === null &&
              this.channelControlHelper.updateState(
                H1.ConnectivityState.TRANSIENT_FAILURE,
                new eL.UnavailablePicker(e.error),
                e.error.details,
              ),
            !0
          );
        let s = e.value;
        ((this.reportHealthStatus = n[Stn]), r.getShuffleAddressList() && (s = Ctn(s)));
        let a = [].concat(...s.map((c) => c.addresses));
        Bbe("updateAddressList([" + a.map((c) => (0, _tn.subchannelAddressToString)(c)) + "])");
        let u = pGo(a);
        return (
          (this.latestAddressList = u),
          (this.latestOptions = n),
          this.connectToAddressList(u, n),
          (this.latestResolutionNote = o),
          a.length > 0 ? !0 : ((this.lastError = "No addresses resolved"), !1)
        );
      }
      exitIdle() {
        this.currentState === H1.ConnectivityState.IDLE &&
          this.latestAddressList &&
          this.connectToAddressList(this.latestAddressList, this.latestOptions);
      }
      resetBackoff() {}
      destroy() {
        (this.resetSubchannelList(), this.removeCurrentPick());
      }
      getTypeName() {
        return Lbe;
      }
    };
  oT.PickFirstLoadBalancer = Mbe;
  var hGo = new rne(!1),
    mIt = class {
      constructor(e, r, n, o) {
        ((this.endpoint = e),
          (this.options = n),
          (this.resolutionNote = o),
          (this.latestState = H1.ConnectivityState.IDLE));
        let s = (0, cIt.createChildChannelControlHelper)(r, {
          updateState: (a, u, c) => {
            ((this.latestState = a), (this.latestPicker = u), r.updateState(a, u, c));
          },
        });
        ((this.pickFirstBalancer = new Mbe(s)), (this.latestPicker = new eL.QueuePicker(this.pickFirstBalancer)));
      }
      startConnecting() {
        this.pickFirstBalancer.updateAddressList(
          (0, mGo.statusOrFromValue)([this.endpoint]),
          hGo,
          Object.assign(Object.assign({}, this.options), { [Stn]: !0 }),
          this.resolutionNote,
        );
      }
      updateEndpoint(e, r) {
        ((this.options = r),
          (this.endpoint = e),
          this.latestState !== H1.ConnectivityState.IDLE && this.startConnecting());
      }
      getConnectivityState() {
        return this.latestState;
      }
      getPicker() {
        return this.latestPicker;
      }
      getEndpoint() {
        return this.endpoint;
      }
      exitIdle() {
        this.pickFirstBalancer.exitIdle();
      }
      destroy() {
        this.pickFirstBalancer.destroy();
      }
    };
  oT.LeafLoadBalancer = mIt;
  function gGo() {
    ((0, cIt.registerLoadBalancerType)(Lbe, Mbe, rne), (0, cIt.registerDefaultLoadBalancerType)(Lbe));
  }
});