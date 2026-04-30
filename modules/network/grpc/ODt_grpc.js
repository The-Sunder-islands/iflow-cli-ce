/**
 * @module ODt
 * @category network/grpc
 * @label grpc
 * @position 505 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ODt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ODt = T((Tq) => {
  "use strict";
  Object.defineProperty(Tq, "__esModule", { value: !0 });
  Tq.InternalChannel = Tq.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = void 0;
  var iQo = Ire(),
    oQo = pXr(),
    sQo = Qen(),
    TDt = IR(),
    aQo = Ph(),
    JB = La(),
    uQo = EUe(),
    cQo = YTt(),
    Yen = VC(),
    FUe = g0(),
    lQo = uDt(),
    UUe = d2(),
    P_ = f2(),
    Nbe = zB(),
    mQo = Hen(),
    dQo = Hre(),
    fQo = Wen(),
    wDt = hUe(),
    pQo = vbe(),
    xDt = zen(),
    hQo = Obe(),
    gQo = 2147483647,
    bQo = 1e3,
    AQo = 1800 * 1e3,
    $Ue = new Map(),
    yQo = 1 << 24,
    _Qo = 1 << 20,
    DDt = class extends hQo.BaseSubchannelWrapper {
      constructor(e, r) {
        (super(e),
          (this.channel = r),
          (this.refCount = 0),
          (this.subchannelStateListener = (n, o, s, a) => {
            r.throttleKeepalive(a);
          }));
      }
      ref() {
        (this.refCount === 0 &&
          (this.child.addConnectivityStateListener(this.subchannelStateListener),
          this.channel.addWrappedSubchannel(this)),
          this.child.ref(),
          (this.refCount += 1));
      }
      unref() {
        (this.child.unref(),
          (this.refCount -= 1),
          this.refCount <= 0 &&
            (this.child.removeConnectivityStateListener(this.subchannelStateListener),
            this.channel.removeWrappedSubchannel(this)));
      }
    },
    IDt = class {
      pick(e) {
        return {
          pickResultType: TDt.PickResultType.DROP,
          status: {
            code: JB.Status.UNAVAILABLE,
            details: "Channel closed before call started",
            metadata: new aQo.Metadata(),
          },
          subchannel: null,
          onCallStarted: null,
          onCallEnded: null,
        };
      }
    };
  Tq.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX = "grpc.internal.no_subchannel";
  var RDt = class {
      constructor(e) {
        ((this.target = e),
          (this.trace = new Nbe.ChannelzTrace()),
          (this.callTracker = new Nbe.ChannelzCallTracker()),
          (this.childrenTracker = new Nbe.ChannelzChildrenTracker()),
          (this.state = P_.ConnectivityState.IDLE));
      }
      getChannelzInfoCallback() {
        return () => ({
          target: this.target,
          state: this.state,
          trace: this.trace,
          callTracker: this.callTracker,
          children: this.childrenTracker.getChildLists(),
        });
      }
    },
    kDt = class {
      constructor(e, r, n) {
        var o, s, a, u, c, m;
        if (
          ((this.credentials = r),
          (this.options = n),
          (this.connectivityState = P_.ConnectivityState.IDLE),
          (this.currentPicker = new TDt.UnavailablePicker()),
          (this.configSelectionQueue = []),
          (this.pickQueue = []),
          (this.connectivityStateWatchers = []),
          (this.callRefTimer = null),
          (this.configSelector = null),
          (this.currentResolutionError = null),
          (this.wrappedSubchannels = new Set()),
          (this.callCount = 0),
          (this.idleTimer = null),
          (this.channelzEnabled = !0),
          (this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
          typeof e != "string")
        )
          throw new TypeError("Channel target must be a string");
        if (!(r instanceof iQo.ChannelCredentials))
          throw new TypeError("Channel credentials must be a ChannelCredentials object");
        if (n && typeof n != "object") throw new TypeError("Channel options must be an object");
        this.channelzInfoTracker = new RDt(e);
        let d = (0, UUe.parseUri)(e);
        if (d === null) throw new Error(`Could not parse target name "${e}"`);
        let f = (0, Yen.mapUriDefaultScheme)(d);
        if (f === null) throw new Error(`Could not find a default scheme for target name "${e}"`);
        (this.options["grpc.enable_channelz"] === 0 && (this.channelzEnabled = !1),
          (this.channelzRef = (0, Nbe.registerChannelzChannel)(
            e,
            this.channelzInfoTracker.getChannelzInfoCallback(),
            this.channelzEnabled,
          )),
          this.channelzEnabled && this.channelzInfoTracker.trace.addTrace("CT_INFO", "Channel created"),
          this.options["grpc.default_authority"]
            ? (this.defaultAuthority = this.options["grpc.default_authority"])
            : (this.defaultAuthority = (0, Yen.getDefaultAuthority)(f)));
        let p = (0, lQo.mapProxyName)(f, n);
        ((this.target = p.target),
          (this.options = Object.assign({}, this.options, p.extraOptions)),
          (this.subchannelPool = (0, sQo.getSubchannelPool)(
            ((o = this.options["grpc.use_local_subchannel_pool"]) !== null && o !== void 0 ? o : 0) === 0,
          )),
          (this.retryBufferTracker = new xDt.MessageBufferTracker(
            (s = this.options["grpc.retry_buffer_size"]) !== null && s !== void 0 ? s : yQo,
            (a = this.options["grpc.per_rpc_retry_buffer_size"]) !== null && a !== void 0 ? a : _Qo,
          )),
          (this.keepaliveTime = (u = this.options["grpc.keepalive_time_ms"]) !== null && u !== void 0 ? u : -1),
          (this.idleTimeoutMs = Math.max(
            (c = this.options["grpc.client_idle_timeout_ms"]) !== null && c !== void 0 ? c : AQo,
            bQo,
          )));
        let h = {
          createSubchannel: (b, A) => {
            let y = {};
            for (let [C, x] of Object.entries(A)) C.startsWith(Tq.SUBCHANNEL_ARGS_EXCLUDE_KEY_PREFIX) || (y[C] = x);
            let E = this.subchannelPool.getOrCreateSubchannel(this.target, b, y, this.credentials);
            return (
              E.throttleKeepalive(this.keepaliveTime),
              this.channelzEnabled &&
                this.channelzInfoTracker.trace.addTrace(
                  "CT_INFO",
                  "Created subchannel or used existing subchannel",
                  E.getChannelzRef(),
                ),
              new DDt(E, this)
            );
          },
          updateState: (b, A) => {
            this.currentPicker = A;
            let y = this.pickQueue.slice();
            ((this.pickQueue = []), y.length > 0 && this.callRefTimerUnref());
            for (let E of y) E.doPick();
            this.updateState(b);
          },
          requestReresolution: () => {
            throw new Error("Resolving load balancer should never call requestReresolution");
          },
          addChannelzChild: (b) => {
            this.channelzEnabled && this.channelzInfoTracker.childrenTracker.refChild(b);
          },
          removeChannelzChild: (b) => {
            this.channelzEnabled && this.channelzInfoTracker.childrenTracker.unrefChild(b);
          },
        };
        ((this.resolvingLoadBalancer = new oQo.ResolvingLoadBalancer(
          this.target,
          h,
          this.options,
          (b, A) => {
            var y;
            (b.retryThrottling
              ? $Ue.set(
                  this.getTarget(),
                  new xDt.RetryThrottler(
                    b.retryThrottling.maxTokens,
                    b.retryThrottling.tokenRatio,
                    $Ue.get(this.getTarget()),
                  ),
                )
              : $Ue.delete(this.getTarget()),
              this.channelzEnabled &&
                this.channelzInfoTracker.trace.addTrace("CT_INFO", "Address resolution succeeded"),
              (y = this.configSelector) === null || y === void 0 || y.unref(),
              (this.configSelector = A),
              (this.currentResolutionError = null),
              process.nextTick(() => {
                let E = this.configSelectionQueue;
                ((this.configSelectionQueue = []), E.length > 0 && this.callRefTimerUnref());
                for (let v of E) v.getConfig();
              }));
          },
          (b) => {
            (this.channelzEnabled &&
              this.channelzInfoTracker.trace.addTrace(
                "CT_WARNING",
                "Address resolution failed with code " + b.code + ' and details "' + b.details + '"',
              ),
              this.configSelectionQueue.length > 0 &&
                this.trace("Name resolution failed with calls queued for config selection"),
              this.configSelector === null &&
                (this.currentResolutionError = Object.assign(
                  Object.assign({}, (0, pQo.restrictControlPlaneStatusCode)(b.code, b.details)),
                  { metadata: b.metadata },
                )));
            let A = this.configSelectionQueue;
            ((this.configSelectionQueue = []), A.length > 0 && this.callRefTimerUnref());
            for (let y of A) y.reportResolverError(b);
          },
        )),
          (this.filterStackFactory = new uQo.FilterStackFactory([
            new cQo.CompressionFilterFactory(this, this.options),
          ])),
          this.trace("Channel constructed with options " + JSON.stringify(n, void 0, 2)));
        let g = new Error();
        ((0, FUe.isTracerEnabled)("channel_stacktrace") &&
          (0, FUe.trace)(
            JB.LogVerbosity.DEBUG,
            "channel_stacktrace",
            "(" +
              this.channelzRef.id +
              `) Channel constructed 
` +
              ((m = g.stack) === null || m === void 0
                ? void 0
                : m.substring(
                    g.stack.indexOf(`
`) + 1,
                  )),
          ),
          (this.lastActivityTimestamp = new Date()));
      }
      trace(e, r) {
        (0, FUe.trace)(
          r ?? JB.LogVerbosity.DEBUG,
          "channel",
          "(" + this.channelzRef.id + ") " + (0, UUe.uriToString)(this.target) + " " + e,
        );
      }
      callRefTimerRef() {
        var e, r, n, o;
        (this.callRefTimer || (this.callRefTimer = setInterval(() => {}, gQo)),
          (!((r = (e = this.callRefTimer).hasRef) === null || r === void 0) && r.call(e)) ||
            (this.trace(
              "callRefTimer.ref | configSelectionQueue.length=" +
                this.configSelectionQueue.length +
                " pickQueue.length=" +
                this.pickQueue.length,
            ),
            (o = (n = this.callRefTimer).ref) === null || o === void 0 || o.call(n)));
      }
      callRefTimerUnref() {
        var e, r, n;
        (!(!((e = this.callRefTimer) === null || e === void 0) && e.hasRef) || this.callRefTimer.hasRef()) &&
          (this.trace(
            "callRefTimer.unref | configSelectionQueue.length=" +
              this.configSelectionQueue.length +
              " pickQueue.length=" +
              this.pickQueue.length,
          ),
          (n = (r = this.callRefTimer) === null || r === void 0 ? void 0 : r.unref) === null ||
            n === void 0 ||
            n.call(r));
      }
      removeConnectivityStateWatcher(e) {
        let r = this.connectivityStateWatchers.findIndex((n) => n === e);
        r >= 0 && this.connectivityStateWatchers.splice(r, 1);
      }
      updateState(e) {
        ((0, FUe.trace)(
          JB.LogVerbosity.DEBUG,
          "connectivity_state",
          "(" +
            this.channelzRef.id +
            ") " +
            (0, UUe.uriToString)(this.target) +
            " " +
            P_.ConnectivityState[this.connectivityState] +
            " -> " +
            P_.ConnectivityState[e],
        ),
          this.channelzEnabled &&
            this.channelzInfoTracker.trace.addTrace(
              "CT_INFO",
              "Connectivity state change to " + P_.ConnectivityState[e],
            ),
          (this.connectivityState = e),
          (this.channelzInfoTracker.state = e));
        let r = this.connectivityStateWatchers.slice();
        for (let n of r)
          e !== n.currentState &&
            (n.timer && clearTimeout(n.timer), this.removeConnectivityStateWatcher(n), n.callback());
        e !== P_.ConnectivityState.TRANSIENT_FAILURE && (this.currentResolutionError = null);
      }
      throttleKeepalive(e) {
        if (e > this.keepaliveTime) {
          this.keepaliveTime = e;
          for (let r of this.wrappedSubchannels) r.throttleKeepalive(e);
        }
      }
      addWrappedSubchannel(e) {
        this.wrappedSubchannels.add(e);
      }
      removeWrappedSubchannel(e) {
        this.wrappedSubchannels.delete(e);
      }
      doPick(e, r) {
        return this.currentPicker.pick({ metadata: e, extraPickInfo: r });
      }
      queueCallForPick(e) {
        (this.pickQueue.push(e), this.callRefTimerRef());
      }
      getConfig(e, r) {
        return (
          this.connectivityState !== P_.ConnectivityState.SHUTDOWN && this.resolvingLoadBalancer.exitIdle(),
          this.configSelector
            ? { type: "SUCCESS", config: this.configSelector.invoke(e, r, this.randomChannelId) }
            : this.currentResolutionError
              ? { type: "ERROR", error: this.currentResolutionError }
              : { type: "NONE" }
        );
      }
      queueCallForConfig(e) {
        (this.configSelectionQueue.push(e), this.callRefTimerRef());
      }
      enterIdle() {
        (this.resolvingLoadBalancer.destroy(),
          this.updateState(P_.ConnectivityState.IDLE),
          (this.currentPicker = new TDt.QueuePicker(this.resolvingLoadBalancer)),
          this.idleTimer && (clearTimeout(this.idleTimer), (this.idleTimer = null)),
          this.callRefTimer && (clearInterval(this.callRefTimer), (this.callRefTimer = null)));
      }
      startIdleTimeout(e) {
        var r, n;
        ((this.idleTimer = setTimeout(() => {
          if (this.callCount > 0) {
            this.startIdleTimeout(this.idleTimeoutMs);
            return;
          }
          let s = new Date().valueOf() - this.lastActivityTimestamp.valueOf();
          s >= this.idleTimeoutMs
            ? (this.trace("Idle timer triggered after " + this.idleTimeoutMs + "ms of inactivity"), this.enterIdle())
            : this.startIdleTimeout(this.idleTimeoutMs - s);
        }, e)),
          (n = (r = this.idleTimer).unref) === null || n === void 0 || n.call(r));
      }
      maybeStartIdleTimer() {
        this.connectivityState !== P_.ConnectivityState.SHUTDOWN &&
          !this.idleTimer &&
          this.startIdleTimeout(this.idleTimeoutMs);
      }
      onCallStart() {
        (this.channelzEnabled && this.channelzInfoTracker.callTracker.addCallStarted(), (this.callCount += 1));
      }
      onCallEnd(e) {
        (this.channelzEnabled &&
          (e.code === JB.Status.OK
            ? this.channelzInfoTracker.callTracker.addCallSucceeded()
            : this.channelzInfoTracker.callTracker.addCallFailed()),
          (this.callCount -= 1),
          (this.lastActivityTimestamp = new Date()),
          this.maybeStartIdleTimer());
      }
      createLoadBalancingCall(e, r, n, o, s) {
        let a = (0, wDt.getNextCallNumber)();
        return (
          this.trace("createLoadBalancingCall [" + a + '] method="' + r + '"'),
          new mQo.LoadBalancingCall(this, e, r, n, o, s, a)
        );
      }
      createRetryingCall(e, r, n, o, s) {
        let a = (0, wDt.getNextCallNumber)();
        return (
          this.trace("createRetryingCall [" + a + '] method="' + r + '"'),
          new xDt.RetryingCall(this, e, r, n, o, s, a, this.retryBufferTracker, $Ue.get(this.getTarget()))
        );
      }
      createResolvingCall(e, r, n, o, s) {
        let a = (0, wDt.getNextCallNumber)();
        this.trace("createResolvingCall [" + a + '] method="' + e + '", deadline=' + (0, dQo.deadlineToString)(r));
        let u = { deadline: r, flags: s ?? JB.Propagate.DEFAULTS, host: n ?? this.defaultAuthority, parentCall: o },
          c = new fQo.ResolvingCall(this, e, u, this.filterStackFactory.clone(), a);
        return (
          this.onCallStart(),
          c.addStatusWatcher((m) => {
            this.onCallEnd(m);
          }),
          c
        );
      }
      close() {
        var e;
        (this.resolvingLoadBalancer.destroy(),
          this.updateState(P_.ConnectivityState.SHUTDOWN),
          (this.currentPicker = new IDt()));
        for (let r of this.configSelectionQueue)
          r.cancelWithStatus(JB.Status.UNAVAILABLE, "Channel closed before call started");
        this.configSelectionQueue = [];
        for (let r of this.pickQueue) r.cancelWithStatus(JB.Status.UNAVAILABLE, "Channel closed before call started");
        ((this.pickQueue = []),
          this.callRefTimer && clearInterval(this.callRefTimer),
          this.idleTimer && clearTimeout(this.idleTimer),
          this.channelzEnabled && (0, Nbe.unregisterChannelzRef)(this.channelzRef),
          this.subchannelPool.unrefUnusedSubchannels(),
          (e = this.configSelector) === null || e === void 0 || e.unref(),
          (this.configSelector = null));
      }
      getTarget() {
        return (0, UUe.uriToString)(this.target);
      }
      getConnectivityState(e) {
        let r = this.connectivityState;
        return (
          e &&
            (this.resolvingLoadBalancer.exitIdle(),
            (this.lastActivityTimestamp = new Date()),
            this.maybeStartIdleTimer()),
          r
        );
      }
      watchConnectivityState(e, r, n) {
        if (this.connectivityState === P_.ConnectivityState.SHUTDOWN) throw new Error("Channel has been shut down");
        let o = null;
        if (r !== 1 / 0) {
          let a = r instanceof Date ? r : new Date(r),
            u = new Date();
          if (r === -1 / 0 || a <= u) {
            process.nextTick(n, new Error("Deadline passed without connectivity state change"));
            return;
          }
          o = setTimeout(() => {
            (this.removeConnectivityStateWatcher(s), n(new Error("Deadline passed without connectivity state change")));
          }, a.getTime() - u.getTime());
        }
        let s = { currentState: e, callback: n, timer: o };
        this.connectivityStateWatchers.push(s);
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      createCall(e, r, n, o, s) {
        if (typeof e != "string") throw new TypeError("Channel#createCall: method must be a string");
        if (!(typeof r == "number" || r instanceof Date))
          throw new TypeError("Channel#createCall: deadline must be a number or Date");
        if (this.connectivityState === P_.ConnectivityState.SHUTDOWN) throw new Error("Channel has been shut down");
        return this.createResolvingCall(e, r, n, o, s);
      }
      getOptions() {
        return this.options;
      }
    };
  Tq.InternalChannel = kDt;
});