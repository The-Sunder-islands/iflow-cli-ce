/**
 * @module Wen
 * @category utils/diff
 * @label diff
 * @position 502 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wen) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wen = T((BUe) => {
  "use strict";
  Object.defineProperty(BUe, "__esModule", { value: !0 });
  BUe.ResolvingCall = void 0;
  var Yjo = bFe(),
    wq = La(),
    xq = Hre(),
    Ven = Ph(),
    Kjo = g0(),
    Jjo = vbe(),
    Xjo = "resolving_call",
    yDt = class {
      constructor(e, r, n, o, s) {
        ((this.channel = e),
          (this.method = r),
          (this.filterStackFactory = o),
          (this.callNumber = s),
          (this.child = null),
          (this.readPending = !1),
          (this.pendingMessage = null),
          (this.pendingHalfClose = !1),
          (this.ended = !1),
          (this.readFilterPending = !1),
          (this.writeFilterPending = !1),
          (this.pendingChildStatus = null),
          (this.metadata = null),
          (this.listener = null),
          (this.statusWatchers = []),
          (this.deadlineTimer = setTimeout(() => {}, 0)),
          (this.filterStack = null),
          (this.deadlineStartTime = null),
          (this.configReceivedTime = null),
          (this.childStartTime = null),
          (this.credentials = Yjo.CallCredentials.createEmpty()),
          (this.deadline = n.deadline),
          (this.host = n.host),
          n.parentCall &&
            (n.flags & wq.Propagate.CANCELLATION &&
              n.parentCall.on("cancelled", () => {
                this.cancelWithStatus(wq.Status.CANCELLED, "Cancelled by parent call");
              }),
            n.flags & wq.Propagate.DEADLINE &&
              (this.trace("Propagating deadline from parent: " + n.parentCall.getDeadline()),
              (this.deadline = (0, xq.minDeadline)(this.deadline, n.parentCall.getDeadline())))),
          this.trace("Created"),
          this.runDeadlineTimer());
      }
      trace(e) {
        Kjo.trace(wq.LogVerbosity.DEBUG, Xjo, "[" + this.callNumber + "] " + e);
      }
      runDeadlineTimer() {
        (clearTimeout(this.deadlineTimer),
          (this.deadlineStartTime = new Date()),
          this.trace("Deadline: " + (0, xq.deadlineToString)(this.deadline)));
        let e = (0, xq.getRelativeTimeout)(this.deadline);
        if (e !== 1 / 0) {
          this.trace("Deadline will be reached in " + e + "ms");
          let r = () => {
            if (!this.deadlineStartTime) {
              this.cancelWithStatus(wq.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
              return;
            }
            let n = [],
              o = new Date();
            (n.push(`Deadline exceeded after ${(0, xq.formatDateDifference)(this.deadlineStartTime, o)}`),
              this.configReceivedTime
                ? (this.configReceivedTime > this.deadlineStartTime &&
                    n.push(
                      `name resolution: ${(0, xq.formatDateDifference)(this.deadlineStartTime, this.configReceivedTime)}`,
                    ),
                  this.childStartTime
                    ? this.childStartTime > this.configReceivedTime &&
                      n.push(
                        `metadata filters: ${(0, xq.formatDateDifference)(this.configReceivedTime, this.childStartTime)}`,
                      )
                    : n.push("waiting for metadata filters"))
                : n.push("waiting for name resolution"),
              this.child && n.push(...this.child.getDeadlineInfo()),
              this.cancelWithStatus(wq.Status.DEADLINE_EXCEEDED, n.join(",")));
          };
          e <= 0 ? process.nextTick(r) : (this.deadlineTimer = setTimeout(r, e));
        }
      }
      outputStatus(e) {
        if (!this.ended) {
          ((this.ended = !0),
            this.filterStack || (this.filterStack = this.filterStackFactory.createFilter()),
            clearTimeout(this.deadlineTimer));
          let r = this.filterStack.receiveTrailers(e);
          (this.trace("ended with status: code=" + r.code + ' details="' + r.details + '"'),
            this.statusWatchers.forEach((n) => n(r)),
            process.nextTick(() => {
              var n;
              (n = this.listener) === null || n === void 0 || n.onReceiveStatus(r);
            }));
        }
      }
      sendMessageOnChild(e, r) {
        if (!this.child) throw new Error("sendMessageonChild called with child not populated");
        let n = this.child;
        ((this.writeFilterPending = !0),
          this.filterStack.sendMessage(Promise.resolve({ message: r, flags: e.flags })).then(
            (o) => {
              ((this.writeFilterPending = !1),
                n.sendMessageWithContext(e, o.message),
                this.pendingHalfClose && n.halfClose());
            },
            (o) => {
              this.cancelWithStatus(o.code, o.details);
            },
          ));
      }
      getConfig() {
        if (this.ended) return;
        if (!this.metadata || !this.listener) throw new Error("getConfig called before start");
        let e = this.channel.getConfig(this.method, this.metadata);
        if (e.type === "NONE") {
          this.channel.queueCallForConfig(this);
          return;
        } else if (e.type === "ERROR") {
          this.metadata.getOptions().waitForReady ? this.channel.queueCallForConfig(this) : this.outputStatus(e.error);
          return;
        }
        this.configReceivedTime = new Date();
        let r = e.config;
        if (r.status !== wq.Status.OK) {
          let { code: n, details: o } = (0, Jjo.restrictControlPlaneStatusCode)(
            r.status,
            "Failed to route call to method " + this.method,
          );
          this.outputStatus({ code: n, details: o, metadata: new Ven.Metadata() });
          return;
        }
        if (r.methodConfig.timeout) {
          let n = new Date();
          (n.setSeconds(n.getSeconds() + r.methodConfig.timeout.seconds),
            n.setMilliseconds(n.getMilliseconds() + r.methodConfig.timeout.nanos / 1e6),
            (this.deadline = (0, xq.minDeadline)(this.deadline, n)),
            this.runDeadlineTimer());
        }
        (this.filterStackFactory.push(r.dynamicFilterFactories),
          (this.filterStack = this.filterStackFactory.createFilter()),
          this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then(
            (n) => {
              ((this.child = this.channel.createRetryingCall(
                r,
                this.method,
                this.host,
                this.credentials,
                this.deadline,
              )),
                this.trace("Created child [" + this.child.getCallNumber() + "]"),
                (this.childStartTime = new Date()),
                this.child.start(n, {
                  onReceiveMetadata: (o) => {
                    (this.trace("Received metadata"),
                      this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(o)));
                  },
                  onReceiveMessage: (o) => {
                    (this.trace("Received message"),
                      (this.readFilterPending = !0),
                      this.filterStack.receiveMessage(o).then(
                        (s) => {
                          (this.trace("Finished filtering received message"),
                            (this.readFilterPending = !1),
                            this.listener.onReceiveMessage(s),
                            this.pendingChildStatus && this.outputStatus(this.pendingChildStatus));
                        },
                        (s) => {
                          this.cancelWithStatus(s.code, s.details);
                        },
                      ));
                  },
                  onReceiveStatus: (o) => {
                    (this.trace("Received status"),
                      this.readFilterPending ? (this.pendingChildStatus = o) : this.outputStatus(o));
                  },
                }),
                this.readPending && this.child.startRead(),
                this.pendingMessage
                  ? this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message)
                  : this.pendingHalfClose && this.child.halfClose());
            },
            (n) => {
              this.outputStatus(n);
            },
          ));
      }
      reportResolverError(e) {
        var r;
        !((r = this.metadata) === null || r === void 0) && r.getOptions().waitForReady
          ? this.channel.queueCallForConfig(this)
          : this.outputStatus(e);
      }
      cancelWithStatus(e, r) {
        var n;
        (this.trace("cancelWithStatus code: " + e + ' details: "' + r + '"'),
          (n = this.child) === null || n === void 0 || n.cancelWithStatus(e, r),
          this.outputStatus({ code: e, details: r, metadata: new Ven.Metadata() }));
      }
      getPeer() {
        var e, r;
        return (r = (e = this.child) === null || e === void 0 ? void 0 : e.getPeer()) !== null && r !== void 0
          ? r
          : this.channel.getTarget();
      }
      start(e, r) {
        (this.trace("start called"), (this.metadata = e.clone()), (this.listener = r), this.getConfig());
      }
      sendMessageWithContext(e, r) {
        (this.trace("write() called with message of length " + r.length),
          this.child ? this.sendMessageOnChild(e, r) : (this.pendingMessage = { context: e, message: r }));
      }
      startRead() {
        (this.trace("startRead called"), this.child ? this.child.startRead() : (this.readPending = !0));
      }
      halfClose() {
        (this.trace("halfClose called"),
          this.child && !this.writeFilterPending ? this.child.halfClose() : (this.pendingHalfClose = !0));
      }
      setCredentials(e) {
        this.credentials = e;
      }
      addStatusWatcher(e) {
        this.statusWatchers.push(e);
      }
      getCallNumber() {
        return this.callNumber;
      }
      getAuthContext() {
        return this.child ? this.child.getAuthContext() : null;
      }
    };
  BUe.ResolvingCall = yDt;
});