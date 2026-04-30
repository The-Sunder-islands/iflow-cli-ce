/**
 * @module Mxt
 * @category utils/oop
 * @label oop
 * @position 447 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mxt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mxt = T((KC) => {
  "use strict";
  Object.defineProperty(KC, "__esModule", { value: !0 });
  KC.InterceptingCall = KC.RequesterBuilder = KC.ListenerBuilder = KC.InterceptorConfigurationError = void 0;
  KC.getInterceptingCall = AMo;
  var hMo = Ph(),
    vXr = pq(),
    CXr = La(),
    SXr = fFe(),
    obe = class t extends Error {
      constructor(e) {
        (super(e), (this.name = "InterceptorConfigurationError"), Error.captureStackTrace(this, t));
      }
    };
  KC.InterceptorConfigurationError = obe;
  var Oxt = class {
    constructor() {
      ((this.metadata = void 0), (this.message = void 0), (this.status = void 0));
    }
    withOnReceiveMetadata(e) {
      return ((this.metadata = e), this);
    }
    withOnReceiveMessage(e) {
      return ((this.message = e), this);
    }
    withOnReceiveStatus(e) {
      return ((this.status = e), this);
    }
    build() {
      return { onReceiveMetadata: this.metadata, onReceiveMessage: this.message, onReceiveStatus: this.status };
    }
  };
  KC.ListenerBuilder = Oxt;
  var Nxt = class {
    constructor() {
      ((this.start = void 0), (this.message = void 0), (this.halfClose = void 0), (this.cancel = void 0));
    }
    withStart(e) {
      return ((this.start = e), this);
    }
    withSendMessage(e) {
      return ((this.message = e), this);
    }
    withHalfClose(e) {
      return ((this.halfClose = e), this);
    }
    withCancel(e) {
      return ((this.cancel = e), this);
    }
    build() {
      return { start: this.start, sendMessage: this.message, halfClose: this.halfClose, cancel: this.cancel };
    }
  };
  KC.RequesterBuilder = Nxt;
  var kxt = {
      onReceiveMetadata: (t, e) => {
        e(t);
      },
      onReceiveMessage: (t, e) => {
        e(t);
      },
      onReceiveStatus: (t, e) => {
        e(t);
      },
    },
    ibe = {
      start: (t, e, r) => {
        r(t, e);
      },
      sendMessage: (t, e) => {
        e(t);
      },
      halfClose: (t) => {
        t();
      },
      cancel: (t) => {
        t();
      },
    },
    Pxt = class {
      constructor(e, r) {
        var n, o, s, a;
        ((this.nextCall = e),
          (this.processingMetadata = !1),
          (this.pendingMessageContext = null),
          (this.processingMessage = !1),
          (this.pendingHalfClose = !1),
          r
            ? (this.requester = {
                start: (n = r.start) !== null && n !== void 0 ? n : ibe.start,
                sendMessage: (o = r.sendMessage) !== null && o !== void 0 ? o : ibe.sendMessage,
                halfClose: (s = r.halfClose) !== null && s !== void 0 ? s : ibe.halfClose,
                cancel: (a = r.cancel) !== null && a !== void 0 ? a : ibe.cancel,
              })
            : (this.requester = ibe));
      }
      cancelWithStatus(e, r) {
        this.requester.cancel(() => {
          this.nextCall.cancelWithStatus(e, r);
        });
      }
      getPeer() {
        return this.nextCall.getPeer();
      }
      processPendingMessage() {
        this.pendingMessageContext &&
          (this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage),
          (this.pendingMessageContext = null),
          (this.pendingMessage = null));
      }
      processPendingHalfClose() {
        this.pendingHalfClose && this.nextCall.halfClose();
      }
      start(e, r) {
        var n, o, s, a, u, c;
        let m = {
          onReceiveMetadata:
            (o = (n = r?.onReceiveMetadata) === null || n === void 0 ? void 0 : n.bind(r)) !== null && o !== void 0
              ? o
              : (d) => {},
          onReceiveMessage:
            (a = (s = r?.onReceiveMessage) === null || s === void 0 ? void 0 : s.bind(r)) !== null && a !== void 0
              ? a
              : (d) => {},
          onReceiveStatus:
            (c = (u = r?.onReceiveStatus) === null || u === void 0 ? void 0 : u.bind(r)) !== null && c !== void 0
              ? c
              : (d) => {},
        };
        ((this.processingMetadata = !0),
          this.requester.start(e, m, (d, f) => {
            var p, h, g;
            this.processingMetadata = !1;
            let b;
            if ((0, vXr.isInterceptingListener)(f)) b = f;
            else {
              let A = {
                onReceiveMetadata: (p = f.onReceiveMetadata) !== null && p !== void 0 ? p : kxt.onReceiveMetadata,
                onReceiveMessage: (h = f.onReceiveMessage) !== null && h !== void 0 ? h : kxt.onReceiveMessage,
                onReceiveStatus: (g = f.onReceiveStatus) !== null && g !== void 0 ? g : kxt.onReceiveStatus,
              };
              b = new vXr.InterceptingListenerImpl(A, m);
            }
            (this.nextCall.start(d, b), this.processPendingMessage(), this.processPendingHalfClose());
          }));
      }
      sendMessageWithContext(e, r) {
        ((this.processingMessage = !0),
          this.requester.sendMessage(r, (n) => {
            ((this.processingMessage = !1),
              this.processingMetadata
                ? ((this.pendingMessageContext = e), (this.pendingMessage = r))
                : (this.nextCall.sendMessageWithContext(e, n), this.processPendingHalfClose()));
          }));
      }
      sendMessage(e) {
        this.sendMessageWithContext({}, e);
      }
      startRead() {
        this.nextCall.startRead();
      }
      halfClose() {
        this.requester.halfClose(() => {
          this.processingMetadata || this.processingMessage ? (this.pendingHalfClose = !0) : this.nextCall.halfClose();
        });
      }
      getAuthContext() {
        return this.nextCall.getAuthContext();
      }
    };
  KC.InterceptingCall = Pxt;
  function gMo(t, e, r) {
    var n, o;
    let s = (n = r.deadline) !== null && n !== void 0 ? n : 1 / 0,
      a = r.host,
      u = (o = r.parent) !== null && o !== void 0 ? o : null,
      c = r.propagate_flags,
      m = r.credentials,
      d = t.createCall(e, s, a, u, c);
    return (m && d.setCredentials(m), d);
  }
  var PFe = class {
      constructor(e, r) {
        ((this.call = e), (this.methodDefinition = r));
      }
      cancelWithStatus(e, r) {
        this.call.cancelWithStatus(e, r);
      }
      getPeer() {
        return this.call.getPeer();
      }
      sendMessageWithContext(e, r) {
        let n;
        try {
          n = this.methodDefinition.requestSerialize(r);
        } catch (o) {
          this.call.cancelWithStatus(
            CXr.Status.INTERNAL,
            `Request message serialization failure: ${(0, SXr.getErrorMessage)(o)}`,
          );
          return;
        }
        this.call.sendMessageWithContext(e, n);
      }
      sendMessage(e) {
        this.sendMessageWithContext({}, e);
      }
      start(e, r) {
        let n = null;
        this.call.start(e, {
          onReceiveMetadata: (o) => {
            var s;
            (s = r?.onReceiveMetadata) === null || s === void 0 || s.call(r, o);
          },
          onReceiveMessage: (o) => {
            var s;
            let a;
            try {
              a = this.methodDefinition.responseDeserialize(o);
            } catch (u) {
              ((n = {
                code: CXr.Status.INTERNAL,
                details: `Response message parsing error: ${(0, SXr.getErrorMessage)(u)}`,
                metadata: new hMo.Metadata(),
              }),
                this.call.cancelWithStatus(n.code, n.details));
              return;
            }
            (s = r?.onReceiveMessage) === null || s === void 0 || s.call(r, a);
          },
          onReceiveStatus: (o) => {
            var s, a;
            n
              ? (s = r?.onReceiveStatus) === null || s === void 0 || s.call(r, n)
              : (a = r?.onReceiveStatus) === null || a === void 0 || a.call(r, o);
          },
        });
      }
      startRead() {
        this.call.startRead();
      }
      halfClose() {
        this.call.halfClose();
      }
      getAuthContext() {
        return this.call.getAuthContext();
      }
    },
    Bxt = class extends PFe {
      constructor(e, r) {
        super(e, r);
      }
      start(e, r) {
        var n, o;
        let s = !1,
          a = {
            onReceiveMetadata:
              (o = (n = r?.onReceiveMetadata) === null || n === void 0 ? void 0 : n.bind(r)) !== null && o !== void 0
                ? o
                : (u) => {},
            onReceiveMessage: (u) => {
              var c;
              ((s = !0), (c = r?.onReceiveMessage) === null || c === void 0 || c.call(r, u));
            },
            onReceiveStatus: (u) => {
              var c, m;
              (s || (c = r?.onReceiveMessage) === null || c === void 0 || c.call(r, null),
                (m = r?.onReceiveStatus) === null || m === void 0 || m.call(r, u));
            },
          };
        (super.start(e, a), this.call.startRead());
      }
    },
    Lxt = class extends PFe {};
  function bMo(t, e, r) {
    let n = gMo(t, r.path, e);
    return r.responseStream ? new Lxt(n, r) : new Bxt(n, r);
  }
  function AMo(t, e, r, n) {
    if (t.clientInterceptors.length > 0 && t.clientInterceptorProviders.length > 0)
      throw new obe(
        "Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.",
      );
    if (t.callInterceptors.length > 0 && t.callInterceptorProviders.length > 0)
      throw new obe(
        "Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.",
      );
    let o = [];
    t.callInterceptors.length > 0 || t.callInterceptorProviders.length > 0
      ? (o = []
          .concat(
            t.callInterceptors,
            t.callInterceptorProviders.map((u) => u(e)),
          )
          .filter((u) => u))
      : (o = []
          .concat(
            t.clientInterceptors,
            t.clientInterceptorProviders.map((u) => u(e)),
          )
          .filter((u) => u));
    let s = Object.assign({}, r, { method_definition: e });
    return o.reduceRight(
      (u, c) => (m) => c(m, u),
      (u) => bMo(n, u, e),
    )(s);
  }
});
var $xt = T((LFe) => {
  "use strict";
  Object.defineProperty(LFe, "__esModule", { value: !0 });
  LFe.Client = void 0;
  var Wx = EXr(),
    yMo = jxt(),
    _Mo = f2(),
    jB = La(),
    kre = Ph(),
    BFe = Mxt(),
    JC = Symbol(),
    Ore = Symbol(),
    Nre = Symbol(),
    RR = Symbol();
  function Fxt(t) {
    return typeof t == "function";
  }
  function Pre(t) {
    var e;
    return (
      ((e = t.stack) === null || e === void 0
        ? void 0
        : e
            .split(
              `
`,
            )
            .slice(1).join(`
`)) || "no stack trace available"
    );
  }
  var Uxt = class {
    constructor(e, r, n = {}) {
      var o, s;
      if (
        ((n = Object.assign({}, n)),
        (this[Ore] = (o = n.interceptors) !== null && o !== void 0 ? o : []),
        delete n.interceptors,
        (this[Nre] = (s = n.interceptor_providers) !== null && s !== void 0 ? s : []),
        delete n.interceptor_providers,
        this[Ore].length > 0 && this[Nre].length > 0)
      )
        throw new Error(
          "Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.",
        );
      if (((this[RR] = n.callInvocationTransformer), delete n.callInvocationTransformer, n.channelOverride))
        this[JC] = n.channelOverride;
      else if (n.channelFactoryOverride) {
        let a = n.channelFactoryOverride;
        (delete n.channelFactoryOverride, (this[JC] = a(e, r, n)));
      } else this[JC] = new yMo.ChannelImplementation(e, r, n);
    }
    close() {
      this[JC].close();
    }
    getChannel() {
      return this[JC];
    }
    waitForReady(e, r) {
      let n = (o) => {
        if (o) {
          r(new Error("Failed to connect before the deadline"));
          return;
        }
        let s;
        try {
          s = this[JC].getConnectivityState(!0);
        } catch {
          r(new Error("The channel has been closed"));
          return;
        }
        if (s === _Mo.ConnectivityState.READY) r();
        else
          try {
            this[JC].watchConnectivityState(s, e, n);
          } catch {
            r(new Error("The channel has been closed"));
          }
      };
      setImmediate(n);
    }
    checkOptionalUnaryResponseArguments(e, r, n) {
      if (Fxt(e)) return { metadata: new kre.Metadata(), options: {}, callback: e };
      if (Fxt(r))
        return e instanceof kre.Metadata
          ? { metadata: e, options: {}, callback: r }
          : { metadata: new kre.Metadata(), options: e, callback: r };
      if (!(e instanceof kre.Metadata && r instanceof Object && Fxt(n))) throw new Error("Incorrect arguments passed");
      return { metadata: e, options: r, callback: n };
    }
    makeUnaryRequest(e, r, n, o, s, a, u) {
      var c, m;
      let d = this.checkOptionalUnaryResponseArguments(s, a, u),
        f = { path: e, requestStream: !1, responseStream: !1, requestSerialize: r, responseDeserialize: n },
        p = {
          argument: o,
          metadata: d.metadata,
          call: new Wx.ClientUnaryCallImpl(),
          channel: this[JC],
          methodDefinition: f,
          callOptions: d.options,
          callback: d.callback,
        };
      this[RR] && (p = this[RR](p));
      let h = p.call,
        g = {
          clientInterceptors: this[Ore],
          clientInterceptorProviders: this[Nre],
          callInterceptors: (c = p.callOptions.interceptors) !== null && c !== void 0 ? c : [],
          callInterceptorProviders: (m = p.callOptions.interceptor_providers) !== null && m !== void 0 ? m : [],
        },
        b = (0, BFe.getInterceptingCall)(g, p.methodDefinition, p.callOptions, p.channel);
      h.call = b;
      let A = null,
        y = !1,
        E = new Error();
      return (
        b.start(p.metadata, {
          onReceiveMetadata: (v) => {
            h.emit("metadata", v);
          },
          onReceiveMessage(v) {
            (A !== null && b.cancelWithStatus(jB.Status.UNIMPLEMENTED, "Too many responses received"), (A = v));
          },
          onReceiveStatus(v) {
            if (!y) {
              if (((y = !0), v.code === jB.Status.OK))
                if (A === null) {
                  let C = Pre(E);
                  p.callback(
                    (0, Wx.callErrorFromStatus)(
                      { code: jB.Status.UNIMPLEMENTED, details: "No message received", metadata: v.metadata },
                      C,
                    ),
                  );
                } else p.callback(null, A);
              else {
                let C = Pre(E);
                p.callback((0, Wx.callErrorFromStatus)(v, C));
              }
              ((E = null), h.emit("status", v));
            }
          },
        }),
        b.sendMessage(o),
        b.halfClose(),
        h
      );
    }
    makeClientStreamRequest(e, r, n, o, s, a) {
      var u, c;
      let m = this.checkOptionalUnaryResponseArguments(o, s, a),
        d = { path: e, requestStream: !0, responseStream: !1, requestSerialize: r, responseDeserialize: n },
        f = {
          metadata: m.metadata,
          call: new Wx.ClientWritableStreamImpl(r),
          channel: this[JC],
          methodDefinition: d,
          callOptions: m.options,
          callback: m.callback,
        };
      this[RR] && (f = this[RR](f));
      let p = f.call,
        h = {
          clientInterceptors: this[Ore],
          clientInterceptorProviders: this[Nre],
          callInterceptors: (u = f.callOptions.interceptors) !== null && u !== void 0 ? u : [],
          callInterceptorProviders: (c = f.callOptions.interceptor_providers) !== null && c !== void 0 ? c : [],
        },
        g = (0, BFe.getInterceptingCall)(h, f.methodDefinition, f.callOptions, f.channel);
      p.call = g;
      let b = null,
        A = !1,
        y = new Error();
      return (
        g.start(f.metadata, {
          onReceiveMetadata: (E) => {
            p.emit("metadata", E);
          },
          onReceiveMessage(E) {
            (b !== null && g.cancelWithStatus(jB.Status.UNIMPLEMENTED, "Too many responses received"),
              (b = E),
              g.startRead());
          },
          onReceiveStatus(E) {
            if (!A) {
              if (((A = !0), E.code === jB.Status.OK))
                if (b === null) {
                  let v = Pre(y);
                  f.callback(
                    (0, Wx.callErrorFromStatus)(
                      { code: jB.Status.UNIMPLEMENTED, details: "No message received", metadata: E.metadata },
                      v,
                    ),
                  );
                } else f.callback(null, b);
              else {
                let v = Pre(y);
                f.callback((0, Wx.callErrorFromStatus)(E, v));
              }
              ((y = null), p.emit("status", E));
            }
          },
        }),
        p
      );
    }
    checkMetadataAndOptions(e, r) {
      let n, o;
      return (
        e instanceof kre.Metadata
          ? ((n = e), r ? (o = r) : (o = {}))
          : (e ? (o = e) : (o = {}), (n = new kre.Metadata())),
        { metadata: n, options: o }
      );
    }
    makeServerStreamRequest(e, r, n, o, s, a) {
      var u, c;
      let m = this.checkMetadataAndOptions(s, a),
        d = { path: e, requestStream: !1, responseStream: !0, requestSerialize: r, responseDeserialize: n },
        f = {
          argument: o,
          metadata: m.metadata,
          call: new Wx.ClientReadableStreamImpl(n),
          channel: this[JC],
          methodDefinition: d,
          callOptions: m.options,
        };
      this[RR] && (f = this[RR](f));
      let p = f.call,
        h = {
          clientInterceptors: this[Ore],
          clientInterceptorProviders: this[Nre],
          callInterceptors: (u = f.callOptions.interceptors) !== null && u !== void 0 ? u : [],
          callInterceptorProviders: (c = f.callOptions.interceptor_providers) !== null && c !== void 0 ? c : [],
        },
        g = (0, BFe.getInterceptingCall)(h, f.methodDefinition, f.callOptions, f.channel);
      p.call = g;
      let b = !1,
        A = new Error();
      return (
        g.start(f.metadata, {
          onReceiveMetadata(y) {
            p.emit("metadata", y);
          },
          onReceiveMessage(y) {
            p.push(y);
          },
          onReceiveStatus(y) {
            if (!b) {
              if (((b = !0), p.push(null), y.code !== jB.Status.OK)) {
                let E = Pre(A);
                p.emit("error", (0, Wx.callErrorFromStatus)(y, E));
              }
              ((A = null), p.emit("status", y));
            }
          },
        }),
        g.sendMessage(o),
        g.halfClose(),
        p
      );
    }
    makeBidiStreamRequest(e, r, n, o, s) {
      var a, u;
      let c = this.checkMetadataAndOptions(o, s),
        m = { path: e, requestStream: !0, responseStream: !0, requestSerialize: r, responseDeserialize: n },
        d = {
          metadata: c.metadata,
          call: new Wx.ClientDuplexStreamImpl(r, n),
          channel: this[JC],
          methodDefinition: m,
          callOptions: c.options,
        };
      this[RR] && (d = this[RR](d));
      let f = d.call,
        p = {
          clientInterceptors: this[Ore],
          clientInterceptorProviders: this[Nre],
          callInterceptors: (a = d.callOptions.interceptors) !== null && a !== void 0 ? a : [],
          callInterceptorProviders: (u = d.callOptions.interceptor_providers) !== null && u !== void 0 ? u : [],
        },
        h = (0, BFe.getInterceptingCall)(p, d.methodDefinition, d.callOptions, d.channel);
      f.call = h;
      let g = !1,
        b = new Error();
      return (
        h.start(d.metadata, {
          onReceiveMetadata(A) {
            f.emit("metadata", A);
          },
          onReceiveMessage(A) {
            f.push(A);
          },
          onReceiveStatus(A) {
            if (!g) {
              if (((g = !0), f.push(null), A.code !== jB.Status.OK)) {
                let y = Pre(b);
                f.emit("error", (0, Wx.callErrorFromStatus)(A, y));
              }
              ((b = null), f.emit("status", A));
            }
          },
        }),
        f
      );
    }
  };
  LFe.Client = Uxt;
});