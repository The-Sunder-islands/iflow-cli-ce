/**
 * @module lDt
 * @category app/analytics
 * @label iflow-analytics
 * @position 498 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lDt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Functions: mDt, _jo
 * Features: esbuild module exports: lDt
 * === End semantic info ===
 */


var lDt = T((TUe) => {
  "use strict";
  Object.defineProperty(TUe, "__esModule", { value: !0 });
  TUe.StreamDecoder = void 0;
  var iT;
  (function (t) {
    ((t[(t.NO_DATA = 0)] = "NO_DATA"),
      (t[(t.READING_SIZE = 1)] = "READING_SIZE"),
      (t[(t.READING_MESSAGE = 2)] = "READING_MESSAGE"));
  })(iT || (iT = {}));
  var cDt = class {
    constructor(e) {
      ((this.maxReadMessageLength = e),
        (this.readState = iT.NO_DATA),
        (this.readCompressFlag = Buffer.alloc(1)),
        (this.readPartialSize = Buffer.alloc(4)),
        (this.readSizeRemaining = 4),
        (this.readMessageSize = 0),
        (this.readPartialMessage = []),
        (this.readMessageRemaining = 0));
    }
    write(e) {
      let r = 0,
        n,
        o = [];
      for (; r < e.length; )
        switch (this.readState) {
          case iT.NO_DATA:
            ((this.readCompressFlag = e.slice(r, r + 1)),
              (r += 1),
              (this.readState = iT.READING_SIZE),
              this.readPartialSize.fill(0),
              (this.readSizeRemaining = 4),
              (this.readMessageSize = 0),
              (this.readMessageRemaining = 0),
              (this.readPartialMessage = []));
            break;
          case iT.READING_SIZE:
            if (
              ((n = Math.min(e.length - r, this.readSizeRemaining)),
              e.copy(this.readPartialSize, 4 - this.readSizeRemaining, r, r + n),
              (this.readSizeRemaining -= n),
              (r += n),
              this.readSizeRemaining === 0)
            ) {
              if (
                ((this.readMessageSize = this.readPartialSize.readUInt32BE(0)),
                this.maxReadMessageLength !== -1 && this.readMessageSize > this.maxReadMessageLength)
              )
                throw new Error(
                  `Received message larger than max (${this.readMessageSize} vs ${this.maxReadMessageLength})`,
                );
              if (((this.readMessageRemaining = this.readMessageSize), this.readMessageRemaining > 0))
                this.readState = iT.READING_MESSAGE;
              else {
                let s = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
                ((this.readState = iT.NO_DATA), o.push(s));
              }
            }
            break;
          case iT.READING_MESSAGE:
            if (
              ((n = Math.min(e.length - r, this.readMessageRemaining)),
              this.readPartialMessage.push(e.slice(r, r + n)),
              (this.readMessageRemaining -= n),
              (r += n),
              this.readMessageRemaining === 0)
            ) {
              let s = [this.readCompressFlag, this.readPartialSize].concat(this.readPartialMessage),
                a = Buffer.concat(s, this.readMessageSize + 5);
              ((this.readState = iT.NO_DATA), o.push(a));
            }
            break;
          default:
            throw new Error("Unexpected read state");
        }
      return o;
    }
  };
  TUe.StreamDecoder = cDt;
});
var $en = T((DUe) => {
  "use strict";
  Object.defineProperty(DUe, "__esModule", { value: !0 });
  DUe.Http2SubchannelCall = void 0;
  var MR = Ae("http2"),
    hjo = Ae("os"),
    Wl = La(),
    FR = Ph(),
    gjo = lDt(),
    bjo = g0(),
    Ajo = La(),
    yjo = "subchannel_call";
  function _jo(t) {
    for (let [e, r] of Object.entries(hjo.constants.errno)) if (r === t) return e;
    return "Unknown system error " + t;
  }
  function mDt(t) {
    let e = `Received HTTP status code ${t}`,
      r;
    switch (t) {
      case 400:
        r = Wl.Status.INTERNAL;
        break;
      case 401:
        r = Wl.Status.UNAUTHENTICATED;
        break;
      case 403:
        r = Wl.Status.PERMISSION_DENIED;
        break;
      case 404:
        r = Wl.Status.UNIMPLEMENTED;
        break;
      case 429:
      case 502:
      case 503:
      case 504:
        r = Wl.Status.UNAVAILABLE;
        break;
      default:
        r = Wl.Status.UNKNOWN;
    }
    return { code: r, details: e, metadata: new FR.Metadata() };
  }
  var dDt = class {
    constructor(e, r, n, o, s) {
      var a;
      ((this.http2Stream = e),
        (this.callEventTracker = r),
        (this.listener = n),
        (this.transport = o),
        (this.callId = s),
        (this.isReadFilterPending = !1),
        (this.isPushPending = !1),
        (this.canPush = !1),
        (this.readsClosed = !1),
        (this.statusOutput = !1),
        (this.unpushedReadMessages = []),
        (this.finalStatus = null),
        (this.internalError = null),
        (this.serverEndedCall = !1),
        (this.connectionDropped = !1));
      let u =
        (a = o.getOptions()["grpc.max_receive_message_length"]) !== null && a !== void 0
          ? a
          : Wl.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
      ((this.decoder = new gjo.StreamDecoder(u)),
        e.on("response", (c, m) => {
          let d = "";
          for (let f of Object.keys(c))
            d +=
              "		" +
              f +
              ": " +
              c[f] +
              `
`;
          if (
            (this.trace(
              `Received server headers:
` + d,
            ),
            (this.httpStatusCode = c[":status"]),
            m & MR.constants.NGHTTP2_FLAG_END_STREAM)
          )
            this.handleTrailers(c);
          else {
            let f;
            try {
              f = FR.Metadata.fromHttp2Headers(c);
            } catch (p) {
              this.endCall({ code: Wl.Status.UNKNOWN, details: p.message, metadata: new FR.Metadata() });
              return;
            }
            this.listener.onReceiveMetadata(f);
          }
        }),
        e.on("trailers", (c) => {
          this.handleTrailers(c);
        }),
        e.on("data", (c) => {
          if (this.statusOutput) return;
          this.trace("receive HTTP/2 data frame of length " + c.length);
          let m;
          try {
            m = this.decoder.write(c);
          } catch (d) {
            if (this.httpStatusCode !== void 0 && this.httpStatusCode !== 200) {
              let f = mDt(this.httpStatusCode);
              this.cancelWithStatus(f.code, f.details);
            } else this.cancelWithStatus(Wl.Status.RESOURCE_EXHAUSTED, d.message);
            return;
          }
          for (let d of m)
            (this.trace("parsed message of length " + d.length),
              this.callEventTracker.addMessageReceived(),
              this.tryPush(d));
        }),
        e.on("end", () => {
          ((this.readsClosed = !0), this.maybeOutputStatus());
        }),
        e.on("close", () => {
          ((this.serverEndedCall = !0),
            process.nextTick(() => {
              var c;
              if (
                (this.trace("HTTP/2 stream closed with code " + e.rstCode),
                ((c = this.finalStatus) === null || c === void 0 ? void 0 : c.code) === Wl.Status.OK)
              )
                return;
              let m,
                d = "";
              switch (e.rstCode) {
                case MR.constants.NGHTTP2_NO_ERROR:
                  if (this.finalStatus !== null) return;
                  if (this.httpStatusCode && this.httpStatusCode !== 200) {
                    let f = mDt(this.httpStatusCode);
                    ((m = f.code), (d = f.details));
                  } else
                    ((m = Wl.Status.INTERNAL),
                      (d = `Received RST_STREAM with code ${e.rstCode} (Call ended without gRPC status)`));
                  break;
                case MR.constants.NGHTTP2_REFUSED_STREAM:
                  ((m = Wl.Status.UNAVAILABLE), (d = "Stream refused by server"));
                  break;
                case MR.constants.NGHTTP2_CANCEL:
                  this.connectionDropped
                    ? ((m = Wl.Status.UNAVAILABLE), (d = "Connection dropped"))
                    : ((m = Wl.Status.CANCELLED), (d = "Call cancelled"));
                  break;
                case MR.constants.NGHTTP2_ENHANCE_YOUR_CALM:
                  ((m = Wl.Status.RESOURCE_EXHAUSTED), (d = "Bandwidth exhausted or memory limit exceeded"));
                  break;
                case MR.constants.NGHTTP2_INADEQUATE_SECURITY:
                  ((m = Wl.Status.PERMISSION_DENIED), (d = "Protocol not secure enough"));
                  break;
                case MR.constants.NGHTTP2_INTERNAL_ERROR:
                  ((m = Wl.Status.INTERNAL),
                    this.internalError === null
                      ? (d = `Received RST_STREAM with code ${e.rstCode} (Internal server error)`)
                      : this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT"
                        ? ((m = Wl.Status.UNAVAILABLE), (d = this.internalError.message))
                        : (d = `Received RST_STREAM with code ${e.rstCode} triggered by internal client error: ${this.internalError.message}`));
                  break;
                default:
                  ((m = Wl.Status.INTERNAL), (d = `Received RST_STREAM with code ${e.rstCode}`));
              }
              this.endCall({ code: m, details: d, metadata: new FR.Metadata(), rstCode: e.rstCode });
            }));
        }),
        e.on("error", (c) => {
          (c.code !== "ERR_HTTP2_STREAM_ERROR" &&
            (this.trace(
              "Node error event: message=" +
                c.message +
                " code=" +
                c.code +
                " errno=" +
                _jo(c.errno) +
                " syscall=" +
                c.syscall,
            ),
            (this.internalError = c)),
            this.callEventTracker.onStreamEnd(!1));
        }));
    }
    getDeadlineInfo() {
      return [`remote_addr=${this.getPeer()}`];
    }
    onDisconnect() {
      ((this.connectionDropped = !0),
        setImmediate(() => {
          this.endCall({ code: Wl.Status.UNAVAILABLE, details: "Connection dropped", metadata: new FR.Metadata() });
        }));
    }
    outputStatus() {
      this.statusOutput ||
        ((this.statusOutput = !0),
        this.trace("ended with status: code=" + this.finalStatus.code + ' details="' + this.finalStatus.details + '"'),
        this.callEventTracker.onCallEnd(this.finalStatus),
        process.nextTick(() => {
          this.listener.onReceiveStatus(this.finalStatus);
        }),
        this.http2Stream.resume());
    }
    trace(e) {
      bjo.trace(Ajo.LogVerbosity.DEBUG, yjo, "[" + this.callId + "] " + e);
    }
    endCall(e) {
      ((this.finalStatus === null || this.finalStatus.code === Wl.Status.OK) &&
        ((this.finalStatus = e), this.maybeOutputStatus()),
        this.destroyHttp2Stream());
    }
    maybeOutputStatus() {
      this.finalStatus !== null &&
        (this.finalStatus.code !== Wl.Status.OK ||
          (this.readsClosed &&
            this.unpushedReadMessages.length === 0 &&
            !this.isReadFilterPending &&
            !this.isPushPending)) &&
        this.outputStatus();
    }
    push(e) {
      (this.trace("pushing to reader message of length " + (e instanceof Buffer ? e.length : null)),
        (this.canPush = !1),
        (this.isPushPending = !0),
        process.nextTick(() => {
          ((this.isPushPending = !1),
            !this.statusOutput && (this.listener.onReceiveMessage(e), this.maybeOutputStatus()));
        }));
    }
    tryPush(e) {
      this.canPush
        ? (this.http2Stream.pause(), this.push(e))
        : (this.trace("unpushedReadMessages.push message of length " + e.length), this.unpushedReadMessages.push(e));
    }
    handleTrailers(e) {
      ((this.serverEndedCall = !0), this.callEventTracker.onStreamEnd(!0));
      let r = "";
      for (let a of Object.keys(e))
        r +=
          "		" +
          a +
          ": " +
          e[a] +
          `
`;
      this.trace(
        `Received server trailers:
` + r,
      );
      let n;
      try {
        n = FR.Metadata.fromHttp2Headers(e);
      } catch {
        n = new FR.Metadata();
      }
      let o = n.getMap(),
        s;
      if (typeof o["grpc-status"] == "string") {
        let a = Number(o["grpc-status"]);
        (this.trace("received status code " + a + " from server"), n.remove("grpc-status"));
        let u = "";
        if (typeof o["grpc-message"] == "string") {
          try {
            u = decodeURI(o["grpc-message"]);
          } catch {
            u = o["grpc-message"];
          }
          (n.remove("grpc-message"), this.trace('received status details string "' + u + '" from server'));
        }
        s = { code: a, details: u, metadata: n };
      } else
        this.httpStatusCode
          ? ((s = mDt(this.httpStatusCode)), (s.metadata = n))
          : (s = { code: Wl.Status.UNKNOWN, details: "No status information received", metadata: n });
      this.endCall(s);
    }
    destroyHttp2Stream() {
      var e;
      if (!this.http2Stream.destroyed)
        if (this.serverEndedCall) this.http2Stream.end();
        else {
          let r;
          (((e = this.finalStatus) === null || e === void 0 ? void 0 : e.code) === Wl.Status.OK
            ? (r = MR.constants.NGHTTP2_NO_ERROR)
            : (r = MR.constants.NGHTTP2_CANCEL),
            this.trace("close http2 stream with code " + r),
            this.http2Stream.close(r));
        }
    }
    cancelWithStatus(e, r) {
      (this.trace("cancelWithStatus code: " + e + ' details: "' + r + '"'),
        this.endCall({ code: e, details: r, metadata: new FR.Metadata() }));
    }
    getStatus() {
      return this.finalStatus;
    }
    getPeer() {
      return this.transport.getPeerName();
    }
    getCallNumber() {
      return this.callId;
    }
    getAuthContext() {
      return this.transport.getAuthContext();
    }
    startRead() {
      if (this.finalStatus !== null && this.finalStatus.code !== Wl.Status.OK) {
        ((this.readsClosed = !0), this.maybeOutputStatus());
        return;
      }
      if (((this.canPush = !0), this.unpushedReadMessages.length > 0)) {
        let e = this.unpushedReadMessages.shift();
        this.push(e);
        return;
      }
      this.http2Stream.resume();
    }
    sendMessageWithContext(e, r) {
      this.trace("write() called with message of length " + r.length);
      let n = (o) => {
        process.nextTick(() => {
          var s;
          let a = Wl.Status.UNAVAILABLE;
          (o?.code === "ERR_STREAM_WRITE_AFTER_END" && (a = Wl.Status.INTERNAL),
            o && this.cancelWithStatus(a, `Write error: ${o.message}`),
            (s = e.callback) === null || s === void 0 || s.call(e));
        });
      };
      (this.trace("sending data chunk of length " + r.length), this.callEventTracker.addMessageSent());
      try {
        this.http2Stream.write(r, n);
      } catch (o) {
        this.endCall({
          code: Wl.Status.UNAVAILABLE,
          details: `Write failed with error ${o.message}`,
          metadata: new FR.Metadata(),
        });
      }
    }
    halfClose() {
      (this.trace("end() called"), this.trace("calling end() on HTTP/2 stream"), this.http2Stream.end());
    }
  };
  DUe.Http2SubchannelCall = dDt;
});