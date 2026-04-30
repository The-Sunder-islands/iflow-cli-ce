/**
 * @module Hen
 * @category network/grpc
 * @label grpc
 * @position 501 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hen) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hen = T((PUe) => {
  "use strict";
  Object.defineProperty(PUe, "__esModule", { value: !0 });
  PUe.LoadBalancingCall = void 0;
  var Gen = f2(),
    OUe = La(),
    qen = Hre(),
    NUe = Ph(),
    kbe = IR(),
    Hjo = d2(),
    Vjo = g0(),
    bDt = vbe(),
    Wjo = Ae("http2"),
    zjo = "load_balancing_call",
    ADt = class {
      constructor(e, r, n, o, s, a, u) {
        var c, m;
        ((this.channel = e),
          (this.callConfig = r),
          (this.methodName = n),
          (this.host = o),
          (this.credentials = s),
          (this.deadline = a),
          (this.callNumber = u),
          (this.child = null),
          (this.readPending = !1),
          (this.pendingMessage = null),
          (this.pendingHalfClose = !1),
          (this.ended = !1),
          (this.metadata = null),
          (this.listener = null),
          (this.onCallEnded = null),
          (this.childStartTime = null));
        let d = this.methodName.split("/"),
          f = "";
        d.length >= 2 && (f = d[1]);
        let p =
          (m = (c = (0, Hjo.splitHostPort)(this.host)) === null || c === void 0 ? void 0 : c.host) !== null &&
          m !== void 0
            ? m
            : "localhost";
        ((this.serviceUrl = `https://${p}/${f}`), (this.startTime = new Date()));
      }
      getDeadlineInfo() {
        var e, r;
        let n = [];
        return this.childStartTime
          ? (this.childStartTime > this.startTime &&
              (!((e = this.metadata) === null || e === void 0) &&
                e.getOptions().waitForReady &&
                n.push("wait_for_ready"),
              n.push(`LB pick: ${(0, qen.formatDateDifference)(this.startTime, this.childStartTime)}`)),
            n.push(...this.child.getDeadlineInfo()),
            n)
          : (!((r = this.metadata) === null || r === void 0) && r.getOptions().waitForReady && n.push("wait_for_ready"),
            n.push("Waiting for LB pick"),
            n);
      }
      trace(e) {
        Vjo.trace(OUe.LogVerbosity.DEBUG, zjo, "[" + this.callNumber + "] " + e);
      }
      outputStatus(e, r) {
        var n, o;
        if (!this.ended) {
          ((this.ended = !0),
            this.trace(
              "ended with status: code=" +
                e.code +
                ' details="' +
                e.details +
                '" start time=' +
                this.startTime.toISOString(),
            ));
          let s = Object.assign(Object.assign({}, e), { progress: r });
          ((n = this.listener) === null || n === void 0 || n.onReceiveStatus(s),
            (o = this.onCallEnded) === null || o === void 0 || o.call(this, s.code, s.details, s.metadata));
        }
      }
      doPick() {
        var e, r;
        if (this.ended) return;
        if (!this.metadata) throw new Error("doPick called before start");
        this.trace("Pick called");
        let n = this.metadata.clone(),
          o = this.channel.doPick(n, this.callConfig.pickInformation),
          s = o.subchannel
            ? "(" + o.subchannel.getChannelzRef().id + ") " + o.subchannel.getAddress()
            : "" + o.subchannel;
        switch (
          (this.trace(
            "Pick result: " +
              kbe.PickResultType[o.pickResultType] +
              " subchannel: " +
              s +
              " status: " +
              ((e = o.status) === null || e === void 0 ? void 0 : e.code) +
              " " +
              ((r = o.status) === null || r === void 0 ? void 0 : r.details),
          ),
          o.pickResultType)
        ) {
          case kbe.PickResultType.COMPLETE:
            this.credentials
              .compose(o.subchannel.getCallCredentials())
              .generateMetadata({ method_name: this.methodName, service_url: this.serviceUrl })
              .then(
                (m) => {
                  var d;
                  if (this.ended) {
                    this.trace("Credentials metadata generation finished after call ended");
                    return;
                  }
                  if (
                    (n.merge(m),
                    n.get("authorization").length > 1 &&
                      this.outputStatus(
                        {
                          code: OUe.Status.INTERNAL,
                          details: '"authorization" metadata cannot have multiple values',
                          metadata: new NUe.Metadata(),
                        },
                        "PROCESSED",
                      ),
                    o.subchannel.getConnectivityState() !== Gen.ConnectivityState.READY)
                  ) {
                    (this.trace(
                      "Picked subchannel " +
                        s +
                        " has state " +
                        Gen.ConnectivityState[o.subchannel.getConnectivityState()] +
                        " after getting credentials metadata. Retrying pick",
                    ),
                      this.doPick());
                    return;
                  }
                  this.deadline !== 1 / 0 && n.set("grpc-timeout", (0, qen.getDeadlineTimeoutString)(this.deadline));
                  try {
                    ((this.child = o.subchannel.getRealSubchannel().createCall(n, this.host, this.methodName, {
                      onReceiveMetadata: (f) => {
                        (this.trace("Received metadata"), this.listener.onReceiveMetadata(f));
                      },
                      onReceiveMessage: (f) => {
                        (this.trace("Received message"), this.listener.onReceiveMessage(f));
                      },
                      onReceiveStatus: (f) => {
                        (this.trace("Received status"),
                          f.rstCode === Wjo.constants.NGHTTP2_REFUSED_STREAM
                            ? this.outputStatus(f, "REFUSED")
                            : this.outputStatus(f, "PROCESSED"));
                      },
                    })),
                      (this.childStartTime = new Date()));
                  } catch (f) {
                    (this.trace("Failed to start call on picked subchannel " + s + " with error " + f.message),
                      this.outputStatus(
                        {
                          code: OUe.Status.INTERNAL,
                          details: "Failed to start HTTP/2 stream with error " + f.message,
                          metadata: new NUe.Metadata(),
                        },
                        "NOT_STARTED",
                      ));
                    return;
                  }
                  ((d = o.onCallStarted) === null || d === void 0 || d.call(o),
                    (this.onCallEnded = o.onCallEnded),
                    this.trace("Created child call [" + this.child.getCallNumber() + "]"),
                    this.readPending && this.child.startRead(),
                    this.pendingMessage &&
                      this.child.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message),
                    this.pendingHalfClose && this.child.halfClose());
                },
                (m) => {
                  let { code: d, details: f } = (0, bDt.restrictControlPlaneStatusCode)(
                    typeof m.code == "number" ? m.code : OUe.Status.UNKNOWN,
                    `Getting metadata from plugin failed with error: ${m.message}`,
                  );
                  this.outputStatus({ code: d, details: f, metadata: new NUe.Metadata() }, "PROCESSED");
                },
              );
            break;
          case kbe.PickResultType.DROP:
            let { code: u, details: c } = (0, bDt.restrictControlPlaneStatusCode)(o.status.code, o.status.details);
            setImmediate(() => {
              this.outputStatus({ code: u, details: c, metadata: o.status.metadata }, "DROP");
            });
            break;
          case kbe.PickResultType.TRANSIENT_FAILURE:
            if (this.metadata.getOptions().waitForReady) this.channel.queueCallForPick(this);
            else {
              let { code: m, details: d } = (0, bDt.restrictControlPlaneStatusCode)(o.status.code, o.status.details);
              setImmediate(() => {
                this.outputStatus({ code: m, details: d, metadata: o.status.metadata }, "PROCESSED");
              });
            }
            break;
          case kbe.PickResultType.QUEUE:
            this.channel.queueCallForPick(this);
        }
      }
      cancelWithStatus(e, r) {
        var n;
        (this.trace("cancelWithStatus code: " + e + ' details: "' + r + '"'),
          (n = this.child) === null || n === void 0 || n.cancelWithStatus(e, r),
          this.outputStatus({ code: e, details: r, metadata: new NUe.Metadata() }, "PROCESSED"));
      }
      getPeer() {
        var e, r;
        return (r = (e = this.child) === null || e === void 0 ? void 0 : e.getPeer()) !== null && r !== void 0
          ? r
          : this.channel.getTarget();
      }
      start(e, r) {
        (this.trace("start called"), (this.listener = r), (this.metadata = e), this.doPick());
      }
      sendMessageWithContext(e, r) {
        (this.trace("write() called with message of length " + r.length),
          this.child ? this.child.sendMessageWithContext(e, r) : (this.pendingMessage = { context: e, message: r }));
      }
      startRead() {
        (this.trace("startRead called"), this.child ? this.child.startRead() : (this.readPending = !0));
      }
      halfClose() {
        (this.trace("halfClose called"), this.child ? this.child.halfClose() : (this.pendingHalfClose = !0));
      }
      setCredentials(e) {
        throw new Error("Method not implemented.");
      }
      getCallNumber() {
        return this.callNumber;
      }
      getAuthContext() {
        return this.child ? this.child.getAuthContext() : null;
      }
    };
  PUe.LoadBalancingCall = ADt;
});