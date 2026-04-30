/**
 * @module iIt
 * @category app/analytics
 * @label iflow-analytics
 * @position 511 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iIt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iIt = T((B_) => {
  "use strict";
  Object.defineProperty(B_, "__esModule", { value: !0 });
  B_.BaseServerInterceptingCall = B_.ServerInterceptingCall = B_.ResponderBuilder = B_.ServerListenerBuilder = void 0;
  B_.isInterceptingServerListener = qQo;
  B_.getServerInterceptingCall = YQo;
  var WUe = Ph(),
    u8 = La(),
    Xre = Ae("http2"),
    ntn = fFe(),
    itn = Ae("zlib"),
    QQo = lDt(),
    ctn = g0(),
    GQo = Ae("tls"),
    otn = qUe(),
    ltn = "server_call";
  function Iq(t) {
    ctn.trace(u8.LogVerbosity.DEBUG, ltn, t);
  }
  var ZDt = class {
    constructor() {
      ((this.metadata = void 0), (this.message = void 0), (this.halfClose = void 0), (this.cancel = void 0));
    }
    withOnReceiveMetadata(e) {
      return ((this.metadata = e), this);
    }
    withOnReceiveMessage(e) {
      return ((this.message = e), this);
    }
    withOnReceiveHalfClose(e) {
      return ((this.halfClose = e), this);
    }
    withOnCancel(e) {
      return ((this.cancel = e), this);
    }
    build() {
      return {
        onReceiveMetadata: this.metadata,
        onReceiveMessage: this.message,
        onReceiveHalfClose: this.halfClose,
        onCancel: this.cancel,
      };
    }
  };
  B_.ServerListenerBuilder = ZDt;
  function qQo(t) {
    return t.onReceiveMetadata !== void 0 && t.onReceiveMetadata.length === 1;
  }
  var eIt = class {
      constructor(e, r) {
        ((this.listener = e),
          (this.nextListener = r),
          (this.cancelled = !1),
          (this.processingMetadata = !1),
          (this.hasPendingMessage = !1),
          (this.pendingMessage = null),
          (this.processingMessage = !1),
          (this.hasPendingHalfClose = !1));
      }
      processPendingMessage() {
        this.hasPendingMessage &&
          (this.nextListener.onReceiveMessage(this.pendingMessage),
          (this.pendingMessage = null),
          (this.hasPendingMessage = !1));
      }
      processPendingHalfClose() {
        this.hasPendingHalfClose && (this.nextListener.onReceiveHalfClose(), (this.hasPendingHalfClose = !1));
      }
      onReceiveMetadata(e) {
        this.cancelled ||
          ((this.processingMetadata = !0),
          this.listener.onReceiveMetadata(e, (r) => {
            ((this.processingMetadata = !1),
              !this.cancelled &&
                (this.nextListener.onReceiveMetadata(r), this.processPendingMessage(), this.processPendingHalfClose()));
          }));
      }
      onReceiveMessage(e) {
        this.cancelled ||
          ((this.processingMessage = !0),
          this.listener.onReceiveMessage(e, (r) => {
            ((this.processingMessage = !1),
              !this.cancelled &&
                (this.processingMetadata
                  ? ((this.pendingMessage = r), (this.hasPendingMessage = !0))
                  : (this.nextListener.onReceiveMessage(r), this.processPendingHalfClose())));
          }));
      }
      onReceiveHalfClose() {
        this.cancelled ||
          this.listener.onReceiveHalfClose(() => {
            this.cancelled ||
              (this.processingMetadata || this.processingMessage
                ? (this.hasPendingHalfClose = !0)
                : this.nextListener.onReceiveHalfClose());
          });
      }
      onCancel() {
        ((this.cancelled = !0), this.listener.onCancel(), this.nextListener.onCancel());
      }
    },
    tIt = class {
      constructor() {
        ((this.start = void 0), (this.metadata = void 0), (this.message = void 0), (this.status = void 0));
      }
      withStart(e) {
        return ((this.start = e), this);
      }
      withSendMetadata(e) {
        return ((this.metadata = e), this);
      }
      withSendMessage(e) {
        return ((this.message = e), this);
      }
      withSendStatus(e) {
        return ((this.status = e), this);
      }
      build() {
        return { start: this.start, sendMetadata: this.metadata, sendMessage: this.message, sendStatus: this.status };
      }
    };
  B_.ResponderBuilder = tIt;
  var HUe = {
      onReceiveMetadata: (t, e) => {
        e(t);
      },
      onReceiveMessage: (t, e) => {
        e(t);
      },
      onReceiveHalfClose: (t) => {
        t();
      },
      onCancel: () => {},
    },
    VUe = {
      start: (t) => {
        t();
      },
      sendMetadata: (t, e) => {
        e(t);
      },
      sendMessage: (t, e) => {
        e(t);
      },
      sendStatus: (t, e) => {
        e(t);
      },
    },
    rIt = class {
      constructor(e, r) {
        var n, o, s, a;
        ((this.nextCall = e),
          (this.processingMetadata = !1),
          (this.sentMetadata = !1),
          (this.processingMessage = !1),
          (this.pendingMessage = null),
          (this.pendingMessageCallback = null),
          (this.pendingStatus = null),
          (this.responder = {
            start: (n = r?.start) !== null && n !== void 0 ? n : VUe.start,
            sendMetadata: (o = r?.sendMetadata) !== null && o !== void 0 ? o : VUe.sendMetadata,
            sendMessage: (s = r?.sendMessage) !== null && s !== void 0 ? s : VUe.sendMessage,
            sendStatus: (a = r?.sendStatus) !== null && a !== void 0 ? a : VUe.sendStatus,
          }));
      }
      processPendingMessage() {
        this.pendingMessageCallback &&
          (this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback),
          (this.pendingMessage = null),
          (this.pendingMessageCallback = null));
      }
      processPendingStatus() {
        this.pendingStatus && (this.nextCall.sendStatus(this.pendingStatus), (this.pendingStatus = null));
      }
      start(e) {
        this.responder.start((r) => {
          var n, o, s, a;
          let u = {
              onReceiveMetadata: (n = r?.onReceiveMetadata) !== null && n !== void 0 ? n : HUe.onReceiveMetadata,
              onReceiveMessage: (o = r?.onReceiveMessage) !== null && o !== void 0 ? o : HUe.onReceiveMessage,
              onReceiveHalfClose: (s = r?.onReceiveHalfClose) !== null && s !== void 0 ? s : HUe.onReceiveHalfClose,
              onCancel: (a = r?.onCancel) !== null && a !== void 0 ? a : HUe.onCancel,
            },
            c = new eIt(u, e);
          this.nextCall.start(c);
        });
      }
      sendMetadata(e) {
        ((this.processingMetadata = !0),
          (this.sentMetadata = !0),
          this.responder.sendMetadata(e, (r) => {
            ((this.processingMetadata = !1),
              this.nextCall.sendMetadata(r),
              this.processPendingMessage(),
              this.processPendingStatus());
          }));
      }
      sendMessage(e, r) {
        ((this.processingMessage = !0),
          this.sentMetadata || this.sendMetadata(new WUe.Metadata()),
          this.responder.sendMessage(e, (n) => {
            ((this.processingMessage = !1),
              this.processingMetadata
                ? ((this.pendingMessage = n), (this.pendingMessageCallback = r))
                : this.nextCall.sendMessage(n, r));
          }));
      }
      sendStatus(e) {
        this.responder.sendStatus(e, (r) => {
          this.processingMetadata || this.processingMessage ? (this.pendingStatus = r) : this.nextCall.sendStatus(r);
        });
      }
      startRead() {
        this.nextCall.startRead();
      }
      getPeer() {
        return this.nextCall.getPeer();
      }
      getDeadline() {
        return this.nextCall.getDeadline();
      }
      getHost() {
        return this.nextCall.getHost();
      }
      getAuthContext() {
        return this.nextCall.getAuthContext();
      }
      getConnectionInfo() {
        return this.nextCall.getConnectionInfo();
      }
      getMetricsRecorder() {
        return this.nextCall.getMetricsRecorder();
      }
    };
  B_.ServerInterceptingCall = rIt;
  var mtn = "grpc-accept-encoding",
    nIt = "grpc-encoding",
    stn = "grpc-message",
    atn = "grpc-status",
    XDt = "grpc-timeout",
    HQo = /(\d{1,8})\s*([HMSmun])/,
    VQo = { H: 36e5, M: 6e4, S: 1e3, m: 1, u: 0.001, n: 1e-6 },
    WQo = { [mtn]: "identity,deflate,gzip", [nIt]: "identity" },
    utn = {
      [Xre.constants.HTTP2_HEADER_STATUS]: Xre.constants.HTTP_STATUS_OK,
      [Xre.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto",
    },
    zQo = { waitForTrailers: !0 },
    zUe = class {
      constructor(e, r, n, o, s) {
        var a, u;
        ((this.stream = e),
          (this.callEventTracker = n),
          (this.handler = o),
          (this.listener = null),
          (this.deadlineTimer = null),
          (this.deadline = 1 / 0),
          (this.maxSendMessageSize = u8.DEFAULT_MAX_SEND_MESSAGE_LENGTH),
          (this.maxReceiveMessageSize = u8.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH),
          (this.cancelled = !1),
          (this.metadataSent = !1),
          (this.wantTrailers = !1),
          (this.cancelNotified = !1),
          (this.incomingEncoding = "identity"),
          (this.readQueue = []),
          (this.isReadPending = !1),
          (this.receivedHalfClose = !1),
          (this.streamEnded = !1),
          (this.metricsRecorder = new otn.PerRequestMetricRecorder()),
          this.stream.once("error", (p) => {}),
          this.stream.once("close", () => {
            var p;
            (Iq(
              "Request to method " +
                ((p = this.handler) === null || p === void 0 ? void 0 : p.path) +
                " stream closed with rstCode " +
                this.stream.rstCode,
            ),
              this.callEventTracker &&
                !this.streamEnded &&
                ((this.streamEnded = !0),
                this.callEventTracker.onStreamEnd(!1),
                this.callEventTracker.onCallEnd({
                  code: u8.Status.CANCELLED,
                  details: "Stream closed before sending status",
                  metadata: null,
                })),
              this.notifyOnCancel());
          }),
          this.stream.on("data", (p) => {
            this.handleDataFrame(p);
          }),
          this.stream.pause(),
          this.stream.on("end", () => {
            this.handleEndEvent();
          }),
          "grpc.max_send_message_length" in s && (this.maxSendMessageSize = s["grpc.max_send_message_length"]),
          "grpc.max_receive_message_length" in s && (this.maxReceiveMessageSize = s["grpc.max_receive_message_length"]),
          (this.host = (a = r[":authority"]) !== null && a !== void 0 ? a : r.host),
          (this.decoder = new QQo.StreamDecoder(this.maxReceiveMessageSize)));
        let c = WUe.Metadata.fromHttp2Headers(r);
        ctn.isTracerEnabled(ltn) &&
          Iq("Request to " + this.handler.path + " received headers " + JSON.stringify(c.toJSON()));
        let m = c.get(XDt);
        m.length > 0 && this.handleTimeoutHeader(m[0]);
        let d = c.get(nIt);
        (d.length > 0 && (this.incomingEncoding = d[0]),
          c.remove(XDt),
          c.remove(nIt),
          c.remove(mtn),
          c.remove(Xre.constants.HTTP2_HEADER_ACCEPT_ENCODING),
          c.remove(Xre.constants.HTTP2_HEADER_TE),
          c.remove(Xre.constants.HTTP2_HEADER_CONTENT_TYPE),
          (this.metadata = c));
        let f = (u = e.session) === null || u === void 0 ? void 0 : u.socket;
        ((this.connectionInfo = {
          localAddress: f?.localAddress,
          localPort: f?.localPort,
          remoteAddress: f?.remoteAddress,
          remotePort: f?.remotePort,
        }),
          (this.shouldSendMetrics = !!s["grpc.server_call_metric_recording"]));
      }
      handleTimeoutHeader(e) {
        let r = e.toString().match(HQo);
        if (r === null) {
          let s = { code: u8.Status.INTERNAL, details: `Invalid ${XDt} value "${e}"`, metadata: null };
          process.nextTick(() => {
            this.sendStatus(s);
          });
          return;
        }
        let n = (+r[1] * VQo[r[2]]) | 0,
          o = new Date();
        ((this.deadline = o.setMilliseconds(o.getMilliseconds() + n)),
          (this.deadlineTimer = setTimeout(() => {
            let s = { code: u8.Status.DEADLINE_EXCEEDED, details: "Deadline exceeded", metadata: null };
            this.sendStatus(s);
          }, n)));
      }
      checkCancelled() {
        return (
          !this.cancelled &&
            (this.stream.destroyed || this.stream.closed) &&
            (this.notifyOnCancel(), (this.cancelled = !0)),
          this.cancelled
        );
      }
      notifyOnCancel() {
        this.cancelNotified ||
          ((this.cancelNotified = !0),
          (this.cancelled = !0),
          process.nextTick(() => {
            var e;
            (e = this.listener) === null || e === void 0 || e.onCancel();
          }),
          this.deadlineTimer && clearTimeout(this.deadlineTimer),
          this.stream.resume());
      }
      maybeSendMetadata() {
        this.metadataSent || this.sendMetadata(new WUe.Metadata());
      }
      serializeMessage(e) {
        let r = this.handler.serialize(e),
          n = r.byteLength,
          o = Buffer.allocUnsafe(n + 5);
        return (o.writeUInt8(0, 0), o.writeUInt32BE(n, 1), r.copy(o, 5), o);
      }
      decompressMessage(e, r) {
        let n = e.subarray(5);
        if (r === "identity") return n;
        if (r === "deflate" || r === "gzip") {
          let o;
          return (
            r === "deflate" ? (o = itn.createInflate()) : (o = itn.createGunzip()),
            new Promise((s, a) => {
              let u = 0,
                c = [];
              (o.on("data", (m) => {
                (c.push(m),
                  (u += m.byteLength),
                  this.maxReceiveMessageSize !== -1 &&
                    u > this.maxReceiveMessageSize &&
                    (o.destroy(),
                    a({
                      code: u8.Status.RESOURCE_EXHAUSTED,
                      details: `Received message that decompresses to a size larger than ${this.maxReceiveMessageSize}`,
                    })));
              }),
                o.on("end", () => {
                  s(Buffer.concat(c));
                }),
                o.write(n),
                o.end());
            })
          );
        } else
          return Promise.reject({
            code: u8.Status.UNIMPLEMENTED,
            details: `Received message compressed with unsupported encoding "${r}"`,
          });
      }
      async decompressAndMaybePush(e) {
        if (e.type !== "COMPRESSED") throw new Error(`Invalid queue entry type: ${e.type}`);
        let n = e.compressedMessage.readUInt8(0) === 1 ? this.incomingEncoding : "identity",
          o;
        try {
          o = await this.decompressMessage(e.compressedMessage, n);
        } catch (s) {
          this.sendStatus(s);
          return;
        }
        try {
          e.parsedMessage = this.handler.deserialize(o);
        } catch (s) {
          this.sendStatus({ code: u8.Status.INTERNAL, details: `Error deserializing request: ${s.message}` });
          return;
        }
        ((e.type = "READABLE"), this.maybePushNextMessage());
      }
      maybePushNextMessage() {
        if (
          this.listener &&
          this.isReadPending &&
          this.readQueue.length > 0 &&
          this.readQueue[0].type !== "COMPRESSED"
        ) {
          this.isReadPending = !1;
          let e = this.readQueue.shift();
          e.type === "READABLE" ? this.listener.onReceiveMessage(e.parsedMessage) : this.listener.onReceiveHalfClose();
        }
      }
      handleDataFrame(e) {
        var r;
        if (this.checkCancelled()) return;
        Iq("Request to " + this.handler.path + " received data frame of size " + e.length);
        let n;
        try {
          n = this.decoder.write(e);
        } catch (o) {
          this.sendStatus({ code: u8.Status.RESOURCE_EXHAUSTED, details: o.message });
          return;
        }
        for (let o of n) {
          this.stream.pause();
          let s = { type: "COMPRESSED", compressedMessage: o, parsedMessage: null };
          (this.readQueue.push(s),
            this.decompressAndMaybePush(s),
            (r = this.callEventTracker) === null || r === void 0 || r.addMessageReceived());
        }
      }
      handleEndEvent() {
        (this.readQueue.push({ type: "HALF_CLOSE", compressedMessage: null, parsedMessage: null }),
          (this.receivedHalfClose = !0),
          this.maybePushNextMessage());
      }
      start(e) {
        (Iq("Request to " + this.handler.path + " start called"),
          !this.checkCancelled() && ((this.listener = e), e.onReceiveMetadata(this.metadata)));
      }
      sendMetadata(e) {
        if (this.checkCancelled() || this.metadataSent) return;
        this.metadataSent = !0;
        let r = e ? e.toHttp2Headers() : null,
          n = Object.assign(Object.assign(Object.assign({}, utn), WQo), r);
        this.stream.respond(n, zQo);
      }
      sendMessage(e, r) {
        if (this.checkCancelled()) return;
        let n;
        try {
          n = this.serializeMessage(e);
        } catch (o) {
          this.sendStatus({
            code: u8.Status.INTERNAL,
            details: `Error serializing response: ${(0, ntn.getErrorMessage)(o)}`,
            metadata: null,
          });
          return;
        }
        if (this.maxSendMessageSize !== -1 && n.length - 5 > this.maxSendMessageSize) {
          this.sendStatus({
            code: u8.Status.RESOURCE_EXHAUSTED,
            details: `Sent message larger than max (${n.length} vs. ${this.maxSendMessageSize})`,
            metadata: null,
          });
          return;
        }
        (this.maybeSendMetadata(),
          Iq("Request to " + this.handler.path + " sent data frame of size " + n.length),
          this.stream.write(n, (o) => {
            var s;
            if (o) {
              this.sendStatus({
                code: u8.Status.INTERNAL,
                details: `Error writing message: ${(0, ntn.getErrorMessage)(o)}`,
                metadata: null,
              });
              return;
            }
            ((s = this.callEventTracker) === null || s === void 0 || s.addMessageSent(), r());
          }));
      }
      sendStatus(e) {
        var r, n, o;
        if (this.checkCancelled()) return;
        Iq(
          "Request to method " +
            ((r = this.handler) === null || r === void 0 ? void 0 : r.path) +
            " ended with status code: " +
            u8.Status[e.code] +
            " details: " +
            e.details,
        );
        let s =
          (o = (n = e.metadata) === null || n === void 0 ? void 0 : n.clone()) !== null && o !== void 0
            ? o
            : new WUe.Metadata();
        if (
          (this.shouldSendMetrics && s.set(otn.GRPC_METRICS_HEADER, this.metricsRecorder.serialize()),
          this.metadataSent)
        )
          this.wantTrailers
            ? this.notifyOnCancel()
            : ((this.wantTrailers = !0),
              this.stream.once("wantTrailers", () => {
                this.callEventTracker &&
                  !this.streamEnded &&
                  ((this.streamEnded = !0), this.callEventTracker.onStreamEnd(!0), this.callEventTracker.onCallEnd(e));
                let a = Object.assign({ [atn]: e.code, [stn]: encodeURI(e.details) }, s.toHttp2Headers());
                (this.stream.sendTrailers(a), this.notifyOnCancel());
              }),
              this.stream.end());
        else {
          this.callEventTracker &&
            !this.streamEnded &&
            ((this.streamEnded = !0), this.callEventTracker.onStreamEnd(!0), this.callEventTracker.onCallEnd(e));
          let a = Object.assign(Object.assign({ [atn]: e.code, [stn]: encodeURI(e.details) }, utn), s.toHttp2Headers());
          (this.stream.respond(a, { endStream: !0 }), this.notifyOnCancel());
        }
      }
      startRead() {
        (Iq("Request to " + this.handler.path + " startRead called"),
          !this.checkCancelled() &&
            ((this.isReadPending = !0),
            this.readQueue.length === 0
              ? this.receivedHalfClose || this.stream.resume()
              : this.maybePushNextMessage()));
      }
      getPeer() {
        var e;
        let r = (e = this.stream.session) === null || e === void 0 ? void 0 : e.socket;
        return r?.remoteAddress ? (r.remotePort ? `${r.remoteAddress}:${r.remotePort}` : r.remoteAddress) : "unknown";
      }
      getDeadline() {
        return this.deadline;
      }
      getHost() {
        return this.host;
      }
      getAuthContext() {
        var e;
        if (((e = this.stream.session) === null || e === void 0 ? void 0 : e.socket) instanceof GQo.TLSSocket) {
          let r = this.stream.session.socket.getPeerCertificate();
          return { transportSecurityType: "ssl", sslPeerCertificate: r.raw ? r : void 0 };
        } else return {};
      }
      getConnectionInfo() {
        return this.connectionInfo;
      }
      getMetricsRecorder() {
        return this.metricsRecorder;
      }
    };
  B_.BaseServerInterceptingCall = zUe;
  function YQo(t, e, r, n, o, s) {
    let a = {
        path: o.path,
        requestStream: o.type === "clientStream" || o.type === "bidi",
        responseStream: o.type === "serverStream" || o.type === "bidi",
        requestDeserialize: o.deserialize,
        responseSerialize: o.serialize,
      },
      u = new zUe(e, r, n, o, s);
    return t.reduce((c, m) => m(a, c), u);
  }
});