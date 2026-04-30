/**
 * @module ken
 * @category network/grpc
 * @label grpc
 * @position 494 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ken) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ken = T((wUe) => {
  "use strict";
  Object.defineProperty(wUe, "__esModule", { value: !0 });
  wUe.Subchannel = void 0;
  var Vl = f2(),
    q$o = Rre(),
    tDt = g0(),
    SUe = La(),
    H$o = d2(),
    V$o = a8(),
    rT = zB(),
    W$o = Ren(),
    z$o = "subchannel",
    Y$o = ~(1 << 31),
    rDt = class {
      constructor(e, r, n, o, s) {
        var a;
        ((this.channelTarget = e),
          (this.subchannelAddress = r),
          (this.options = n),
          (this.connector = s),
          (this.connectivityState = Vl.ConnectivityState.IDLE),
          (this.transport = null),
          (this.continueConnecting = !1),
          (this.stateListeners = new Set()),
          (this.refcount = 0),
          (this.channelzEnabled = !0),
          (this.dataProducers = new Map()),
          (this.subchannelChannel = null));
        let u = { initialDelay: n["grpc.initial_reconnect_backoff_ms"], maxDelay: n["grpc.max_reconnect_backoff_ms"] };
        ((this.backoffTimeout = new q$o.BackoffTimeout(() => {
          this.handleBackoffTimer();
        }, u)),
          this.backoffTimeout.unref(),
          (this.subchannelAddressString = (0, V$o.subchannelAddressToString)(r)),
          (this.keepaliveTime = (a = n["grpc.keepalive_time_ms"]) !== null && a !== void 0 ? a : -1),
          n["grpc.enable_channelz"] === 0
            ? ((this.channelzEnabled = !1),
              (this.channelzTrace = new rT.ChannelzTraceStub()),
              (this.callTracker = new rT.ChannelzCallTrackerStub()),
              (this.childrenTracker = new rT.ChannelzChildrenTrackerStub()),
              (this.streamTracker = new rT.ChannelzCallTrackerStub()))
            : ((this.channelzTrace = new rT.ChannelzTrace()),
              (this.callTracker = new rT.ChannelzCallTracker()),
              (this.childrenTracker = new rT.ChannelzChildrenTracker()),
              (this.streamTracker = new rT.ChannelzCallTracker())),
          (this.channelzRef = (0, rT.registerChannelzSubchannel)(
            this.subchannelAddressString,
            () => this.getChannelzInfo(),
            this.channelzEnabled,
          )),
          this.channelzTrace.addTrace("CT_INFO", "Subchannel created"),
          this.trace("Subchannel constructed with options " + JSON.stringify(n, void 0, 2)),
          (this.secureConnector = o._createSecureConnector(e, n)));
      }
      getChannelzInfo() {
        return {
          state: this.connectivityState,
          trace: this.channelzTrace,
          callTracker: this.callTracker,
          children: this.childrenTracker.getChildLists(),
          target: this.subchannelAddressString,
        };
      }
      trace(e) {
        tDt.trace(
          SUe.LogVerbosity.DEBUG,
          z$o,
          "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e,
        );
      }
      refTrace(e) {
        tDt.trace(
          SUe.LogVerbosity.DEBUG,
          "subchannel_refcount",
          "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e,
        );
      }
      handleBackoffTimer() {
        this.continueConnecting
          ? this.transitionToState([Vl.ConnectivityState.TRANSIENT_FAILURE], Vl.ConnectivityState.CONNECTING)
          : this.transitionToState([Vl.ConnectivityState.TRANSIENT_FAILURE], Vl.ConnectivityState.IDLE);
      }
      startBackoff() {
        this.backoffTimeout.runOnce();
      }
      stopBackoff() {
        (this.backoffTimeout.stop(), this.backoffTimeout.reset());
      }
      startConnectingInternal() {
        let e = this.options;
        if (e["grpc.keepalive_time_ms"]) {
          let r = Math.min(this.keepaliveTime, Y$o);
          e = Object.assign(Object.assign({}, e), { "grpc.keepalive_time_ms": r });
        }
        this.connector.connect(this.subchannelAddress, this.secureConnector, e).then(
          (r) => {
            this.transitionToState([Vl.ConnectivityState.CONNECTING], Vl.ConnectivityState.READY)
              ? ((this.transport = r),
                this.channelzEnabled && this.childrenTracker.refChild(r.getChannelzRef()),
                r.addDisconnectListener((n) => {
                  (this.transitionToState([Vl.ConnectivityState.READY], Vl.ConnectivityState.IDLE),
                    n &&
                      this.keepaliveTime > 0 &&
                      ((this.keepaliveTime *= 2),
                      tDt.log(
                        SUe.LogVerbosity.ERROR,
                        `Connection to ${(0, H$o.uriToString)(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`,
                      )));
                }))
              : r.shutdown();
          },
          (r) => {
            this.transitionToState([Vl.ConnectivityState.CONNECTING], Vl.ConnectivityState.TRANSIENT_FAILURE, `${r}`);
          },
        );
      }
      transitionToState(e, r, n) {
        var o, s;
        if (e.indexOf(this.connectivityState) === -1) return !1;
        (n
          ? this.trace(
              Vl.ConnectivityState[this.connectivityState] +
                " -> " +
                Vl.ConnectivityState[r] +
                ' with error "' +
                n +
                '"',
            )
          : this.trace(Vl.ConnectivityState[this.connectivityState] + " -> " + Vl.ConnectivityState[r]),
          this.channelzEnabled &&
            this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + Vl.ConnectivityState[r]));
        let a = this.connectivityState;
        switch (((this.connectivityState = r), r)) {
          case Vl.ConnectivityState.READY:
            this.stopBackoff();
            break;
          case Vl.ConnectivityState.CONNECTING:
            (this.startBackoff(), this.startConnectingInternal(), (this.continueConnecting = !1));
            break;
          case Vl.ConnectivityState.TRANSIENT_FAILURE:
            (this.channelzEnabled && this.transport && this.childrenTracker.unrefChild(this.transport.getChannelzRef()),
              (o = this.transport) === null || o === void 0 || o.shutdown(),
              (this.transport = null),
              this.backoffTimeout.isRunning() ||
                process.nextTick(() => {
                  this.handleBackoffTimer();
                }));
            break;
          case Vl.ConnectivityState.IDLE:
            (this.channelzEnabled && this.transport && this.childrenTracker.unrefChild(this.transport.getChannelzRef()),
              (s = this.transport) === null || s === void 0 || s.shutdown(),
              (this.transport = null));
            break;
          default:
            throw new Error(`Invalid state: unknown ConnectivityState ${r}`);
        }
        for (let u of this.stateListeners) u(this, a, r, this.keepaliveTime, n);
        return !0;
      }
      ref() {
        (this.refTrace("refcount " + this.refcount + " -> " + (this.refcount + 1)), (this.refcount += 1));
      }
      unref() {
        (this.refTrace("refcount " + this.refcount + " -> " + (this.refcount - 1)),
          (this.refcount -= 1),
          this.refcount === 0 &&
            (this.channelzTrace.addTrace("CT_INFO", "Shutting down"),
            (0, rT.unregisterChannelzRef)(this.channelzRef),
            this.secureConnector.destroy(),
            process.nextTick(() => {
              this.transitionToState(
                [Vl.ConnectivityState.CONNECTING, Vl.ConnectivityState.READY],
                Vl.ConnectivityState.IDLE,
              );
            })));
      }
      unrefIfOneRef() {
        return this.refcount === 1 ? (this.unref(), !0) : !1;
      }
      createCall(e, r, n, o) {
        if (!this.transport) throw new Error("Cannot create call, subchannel not READY");
        let s;
        return (
          this.channelzEnabled
            ? (this.callTracker.addCallStarted(),
              this.streamTracker.addCallStarted(),
              (s = {
                onCallEnd: (a) => {
                  a.code === SUe.Status.OK ? this.callTracker.addCallSucceeded() : this.callTracker.addCallFailed();
                },
              }))
            : (s = {}),
          this.transport.createCall(e, r, n, o, s)
        );
      }
      startConnecting() {
        process.nextTick(() => {
          this.transitionToState([Vl.ConnectivityState.IDLE], Vl.ConnectivityState.CONNECTING) ||
            (this.connectivityState === Vl.ConnectivityState.TRANSIENT_FAILURE && (this.continueConnecting = !0));
        });
      }
      getConnectivityState() {
        return this.connectivityState;
      }
      addConnectivityStateListener(e) {
        this.stateListeners.add(e);
      }
      removeConnectivityStateListener(e) {
        this.stateListeners.delete(e);
      }
      resetBackoff() {
        process.nextTick(() => {
          (this.backoffTimeout.reset(),
            this.transitionToState([Vl.ConnectivityState.TRANSIENT_FAILURE], Vl.ConnectivityState.CONNECTING));
        });
      }
      getAddress() {
        return this.subchannelAddressString;
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      isHealthy() {
        return !0;
      }
      addHealthStateWatcher(e) {}
      removeHealthStateWatcher(e) {}
      getRealSubchannel() {
        return this;
      }
      realSubchannelEquals(e) {
        return e.getRealSubchannel() === this;
      }
      throttleKeepalive(e) {
        e > this.keepaliveTime && (this.keepaliveTime = e);
      }
      getCallCredentials() {
        return this.secureConnector.getCallCredentials();
      }
      getChannel() {
        return (
          this.subchannelChannel ||
            (this.subchannelChannel = new W$o.SingleSubchannelChannel(this, this.channelTarget, this.options)),
          this.subchannelChannel
        );
      }
      addDataWatcher(e) {
        throw new Error("Not implemented");
      }
      getOrCreateDataProducer(e, r) {
        let n = this.dataProducers.get(e);
        if (n) return n;
        let o = r(this);
        return (this.dataProducers.set(e, o), o);
      }
      removeDataProducer(e) {
        this.dataProducers.delete(e);
      }
    };
  wUe.Subchannel = rDt;
});