/**
 * @module Ren
 * @category network/grpc
 * @label grpc
 * @position 493 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ren) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ren = T((CUe) => {
  "use strict";
  Object.defineProperty(CUe, "__esModule", { value: !0 });
  CUe.SingleSubchannelChannel = void 0;
  var M$o = hUe(),
    Cbe = zB(),
    F$o = YTt(),
    U$o = f2(),
    Sbe = La(),
    $$o = vbe(),
    j$o = Hre(),
    Q$o = EUe(),
    XTt = Ph(),
    G$o = VC(),
    vUe = d2(),
    ZTt = class {
      constructor(e, r, n, o, s) {
        var a, u;
        ((this.subchannel = e),
          (this.method = r),
          (this.options = o),
          (this.callNumber = s),
          (this.childCall = null),
          (this.pendingMessage = null),
          (this.readPending = !1),
          (this.halfClosePending = !1),
          (this.pendingStatus = null),
          (this.readFilterPending = !1),
          (this.writeFilterPending = !1));
        let c = this.method.split("/"),
          m = "";
        c.length >= 2 && (m = c[1]);
        let d =
          (u = (a = (0, vUe.splitHostPort)(this.options.host)) === null || a === void 0 ? void 0 : a.host) !== null &&
          u !== void 0
            ? u
            : "localhost";
        this.serviceUrl = `https://${d}/${m}`;
        let f = (0, j$o.getRelativeTimeout)(o.deadline);
        (f !== 1 / 0 &&
          (f <= 0
            ? this.cancelWithStatus(Sbe.Status.DEADLINE_EXCEEDED, "Deadline exceeded")
            : setTimeout(() => {
                this.cancelWithStatus(Sbe.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
              }, f)),
          (this.filterStack = n.createFilter()));
      }
      cancelWithStatus(e, r) {
        this.childCall
          ? this.childCall.cancelWithStatus(e, r)
          : (this.pendingStatus = { code: e, details: r, metadata: new XTt.Metadata() });
      }
      getPeer() {
        var e, r;
        return (r = (e = this.childCall) === null || e === void 0 ? void 0 : e.getPeer()) !== null && r !== void 0
          ? r
          : this.subchannel.getAddress();
      }
      async start(e, r) {
        if (this.pendingStatus) {
          r.onReceiveStatus(this.pendingStatus);
          return;
        }
        if (this.subchannel.getConnectivityState() !== U$o.ConnectivityState.READY) {
          r.onReceiveStatus({
            code: Sbe.Status.UNAVAILABLE,
            details: "Subchannel not ready",
            metadata: new XTt.Metadata(),
          });
          return;
        }
        let n = await this.filterStack.sendMetadata(Promise.resolve(e)),
          o;
        try {
          o = await this.subchannel
            .getCallCredentials()
            .generateMetadata({ method_name: this.method, service_url: this.serviceUrl });
        } catch (a) {
          let u = a,
            { code: c, details: m } = (0, $$o.restrictControlPlaneStatusCode)(
              typeof u.code == "number" ? u.code : Sbe.Status.UNKNOWN,
              `Getting metadata from plugin failed with error: ${u.message}`,
            );
          r.onReceiveStatus({ code: c, details: m, metadata: new XTt.Metadata() });
          return;
        }
        o.merge(n);
        let s = {
          onReceiveMetadata: async (a) => {
            r.onReceiveMetadata(await this.filterStack.receiveMetadata(a));
          },
          onReceiveMessage: async (a) => {
            this.readFilterPending = !0;
            let u = await this.filterStack.receiveMessage(a);
            ((this.readFilterPending = !1),
              r.onReceiveMessage(u),
              this.pendingStatus && r.onReceiveStatus(this.pendingStatus));
          },
          onReceiveStatus: async (a) => {
            let u = await this.filterStack.receiveTrailers(a);
            this.readFilterPending ? (this.pendingStatus = u) : r.onReceiveStatus(u);
          },
        };
        ((this.childCall = this.subchannel.createCall(o, this.options.host, this.method, s)),
          this.readPending && this.childCall.startRead(),
          this.pendingMessage &&
            this.childCall.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message),
          this.halfClosePending && !this.writeFilterPending && this.childCall.halfClose());
      }
      async sendMessageWithContext(e, r) {
        this.writeFilterPending = !0;
        let n = await this.filterStack.sendMessage(Promise.resolve({ message: r, flags: e.flags }));
        ((this.writeFilterPending = !1),
          this.childCall
            ? (this.childCall.sendMessageWithContext(e, n.message), this.halfClosePending && this.childCall.halfClose())
            : (this.pendingMessage = { context: e, message: n.message }));
      }
      startRead() {
        this.childCall ? this.childCall.startRead() : (this.readPending = !0);
      }
      halfClose() {
        this.childCall && !this.writeFilterPending ? this.childCall.halfClose() : (this.halfClosePending = !0);
      }
      getCallNumber() {
        return this.callNumber;
      }
      setCredentials(e) {
        throw new Error("Method not implemented.");
      }
      getAuthContext() {
        return this.childCall ? this.childCall.getAuthContext() : null;
      }
    },
    eDt = class {
      constructor(e, r, n) {
        ((this.subchannel = e),
          (this.target = r),
          (this.channelzEnabled = !1),
          (this.channelzTrace = new Cbe.ChannelzTrace()),
          (this.callTracker = new Cbe.ChannelzCallTracker()),
          (this.childrenTracker = new Cbe.ChannelzChildrenTracker()),
          (this.channelzEnabled = n["grpc.enable_channelz"] !== 0),
          (this.channelzRef = (0, Cbe.registerChannelzChannel)(
            (0, vUe.uriToString)(r),
            () => ({
              target: `${(0, vUe.uriToString)(r)} (${e.getAddress()})`,
              state: this.subchannel.getConnectivityState(),
              trace: this.channelzTrace,
              callTracker: this.callTracker,
              children: this.childrenTracker.getChildLists(),
            }),
            this.channelzEnabled,
          )),
          this.channelzEnabled && this.childrenTracker.refChild(e.getChannelzRef()),
          (this.filterStackFactory = new Q$o.FilterStackFactory([new F$o.CompressionFilterFactory(this, n)])));
      }
      close() {
        (this.channelzEnabled && this.childrenTracker.unrefChild(this.subchannel.getChannelzRef()),
          (0, Cbe.unregisterChannelzRef)(this.channelzRef));
      }
      getTarget() {
        return (0, vUe.uriToString)(this.target);
      }
      getConnectivityState(e) {
        throw new Error("Method not implemented.");
      }
      watchConnectivityState(e, r, n) {
        throw new Error("Method not implemented.");
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      createCall(e, r) {
        let n = {
          deadline: r,
          host: (0, G$o.getDefaultAuthority)(this.target),
          flags: Sbe.Propagate.DEFAULTS,
          parentCall: null,
        };
        return new ZTt(this.subchannel, e, this.filterStackFactory, n, (0, M$o.getNextCallNumber)());
      }
    };
  CUe.SingleSubchannelChannel = eDt;
});