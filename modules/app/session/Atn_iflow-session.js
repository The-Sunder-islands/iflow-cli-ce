/**
 * @module Atn
 * @category app/session
 * @label iflow-session
 * @position 512 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Atn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Functions: sGo, n, oGo, nGo, aIt, btn, c, rGo, a, aGo, tGo, uGo
 * Features: esbuild module exports: Atn
 * === End semantic info ===
 */


var Atn = T((ZB) => {
  "use strict";
  var KQo =
      (ZB && ZB.__runInitializers) ||
      function (t, e, r) {
        for (var n = arguments.length > 2, o = 0; o < e.length; o++) r = n ? e[o].call(t, r) : e[o].call(t);
        return n ? r : void 0;
      },
    JQo =
      (ZB && ZB.__esDecorate) ||
      function (t, e, r, n, o, s) {
        function a(y) {
          if (y !== void 0 && typeof y != "function") throw new TypeError("Function expected");
          return y;
        }
        for (
          var u = n.kind,
            c = u === "getter" ? "get" : u === "setter" ? "set" : "value",
            m = !e && t ? (n.static ? t : t.prototype) : null,
            d = e || (m ? Object.getOwnPropertyDescriptor(m, n.name) : {}),
            f,
            p = !1,
            h = r.length - 1;
          h >= 0;
          h--
        ) {
          var g = {};
          for (var b in n) g[b] = b === "access" ? {} : n[b];
          for (var b in n.access) g.access[b] = n.access[b];
          g.addInitializer = function (y) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            s.push(a(y || null));
          };
          var A = (0, r[h])(u === "accessor" ? { get: d.get, set: d.set } : d[c], g);
          if (u === "accessor") {
            if (A === void 0) continue;
            if (A === null || typeof A != "object") throw new TypeError("Object expected");
            ((f = a(A.get)) && (d.get = f), (f = a(A.set)) && (d.set = f), (f = a(A.init)) && o.unshift(f));
          } else (f = a(A)) && (u === "field" ? o.unshift(f) : (d[c] = f));
        }
        (m && Object.defineProperty(m, n.name, d), (p = !0));
      };
  Object.defineProperty(ZB, "__esModule", { value: !0 });
  ZB.Server = void 0;
  var c8 = Ae("http2"),
    XQo = Ae("util"),
    q1 = La(),
    tne = Jen(),
    oIt = QUe(),
    dtn = VC(),
    ene = g0(),
    XB = a8(),
    r4 = d2(),
    Tp = zB(),
    ftn = iIt(),
    Zre = ~(1 << 31),
    sIt = ~(1 << 31),
    ZQo = 2e4,
    ptn = ~(1 << 31),
    { HTTP2_HEADER_PATH: htn } = c8.constants,
    eGo = "server",
    gtn = Buffer.from("max_age");
  function btn(t) {
    ene.trace(q1.LogVerbosity.DEBUG, "server_call", t);
  }
  function tGo() {}
  function rGo(t) {
    return function (e, r) {
      return XQo.deprecate(e, t);
    };
  }
  function aIt(t) {
    return { code: q1.Status.UNIMPLEMENTED, details: `The server does not implement the method ${t}` };
  }
  function nGo(t, e) {
    let r = aIt(e);
    switch (t) {
      case "unary":
        return (n, o) => {
          o(r, null);
        };
      case "clientStream":
        return (n, o) => {
          o(r, null);
        };
      case "serverStream":
        return (n) => {
          n.emit("error", r);
        };
      case "bidi":
        return (n) => {
          n.emit("error", r);
        };
      default:
        throw new Error(`Invalid handlerType ${t}`);
    }
  }
  var iGo = (() => {
    var t;
    let e = [],
      r;
    return (
      (t = class {
        constructor(o) {
          var s, a, u, c, m, d;
          ((this.boundPorts = (KQo(this, e), new Map())),
            (this.http2Servers = new Map()),
            (this.sessionIdleTimeouts = new Map()),
            (this.handlers = new Map()),
            (this.sessions = new Map()),
            (this.started = !1),
            (this.shutdown = !1),
            (this.serverAddressString = "null"),
            (this.channelzEnabled = !0),
            (this.options = o ?? {}),
            this.options["grpc.enable_channelz"] === 0
              ? ((this.channelzEnabled = !1),
                (this.channelzTrace = new Tp.ChannelzTraceStub()),
                (this.callTracker = new Tp.ChannelzCallTrackerStub()),
                (this.listenerChildrenTracker = new Tp.ChannelzChildrenTrackerStub()),
                (this.sessionChildrenTracker = new Tp.ChannelzChildrenTrackerStub()))
              : ((this.channelzTrace = new Tp.ChannelzTrace()),
                (this.callTracker = new Tp.ChannelzCallTracker()),
                (this.listenerChildrenTracker = new Tp.ChannelzChildrenTracker()),
                (this.sessionChildrenTracker = new Tp.ChannelzChildrenTracker())),
            (this.channelzRef = (0, Tp.registerChannelzServer)(
              "server",
              () => this.getChannelzInfo(),
              this.channelzEnabled,
            )),
            this.channelzTrace.addTrace("CT_INFO", "Server created"),
            (this.maxConnectionAgeMs =
              (s = this.options["grpc.max_connection_age_ms"]) !== null && s !== void 0 ? s : Zre),
            (this.maxConnectionAgeGraceMs =
              (a = this.options["grpc.max_connection_age_grace_ms"]) !== null && a !== void 0 ? a : Zre),
            (this.keepaliveTimeMs = (u = this.options["grpc.keepalive_time_ms"]) !== null && u !== void 0 ? u : sIt),
            (this.keepaliveTimeoutMs =
              (c = this.options["grpc.keepalive_timeout_ms"]) !== null && c !== void 0 ? c : ZQo),
            (this.sessionIdleTimeout =
              (m = this.options["grpc.max_connection_idle_ms"]) !== null && m !== void 0 ? m : ptn),
            (this.commonServerOptions = { maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER }),
            "grpc-node.max_session_memory" in this.options
              ? (this.commonServerOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"])
              : (this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER),
            "grpc.max_concurrent_streams" in this.options &&
              (this.commonServerOptions.settings = {
                maxConcurrentStreams: this.options["grpc.max_concurrent_streams"],
              }),
            (this.interceptors = (d = this.options.interceptors) !== null && d !== void 0 ? d : []),
            this.trace("Server constructed"));
        }
        getChannelzInfo() {
          return {
            trace: this.channelzTrace,
            callTracker: this.callTracker,
            listenerChildren: this.listenerChildrenTracker.getChildLists(),
            sessionChildren: this.sessionChildrenTracker.getChildLists(),
          };
        }
        getChannelzSessionInfo(o) {
          var s, a, u;
          let c = this.sessions.get(o),
            m = o.socket,
            d = m.remoteAddress ? (0, XB.stringToSubchannelAddress)(m.remoteAddress, m.remotePort) : null,
            f = m.localAddress ? (0, XB.stringToSubchannelAddress)(m.localAddress, m.localPort) : null,
            p;
          if (o.encrypted) {
            let g = m,
              b = g.getCipher(),
              A = g.getCertificate(),
              y = g.getPeerCertificate();
            p = {
              cipherSuiteStandardName: (s = b.standardName) !== null && s !== void 0 ? s : null,
              cipherSuiteOtherName: b.standardName ? null : b.name,
              localCertificate: A && "raw" in A ? A.raw : null,
              remoteCertificate: y && "raw" in y ? y.raw : null,
            };
          } else p = null;
          return {
            remoteAddress: d,
            localAddress: f,
            security: p,
            remoteName: null,
            streamsStarted: c.streamTracker.callsStarted,
            streamsSucceeded: c.streamTracker.callsSucceeded,
            streamsFailed: c.streamTracker.callsFailed,
            messagesSent: c.messagesSent,
            messagesReceived: c.messagesReceived,
            keepAlivesSent: c.keepAlivesSent,
            lastLocalStreamCreatedTimestamp: null,
            lastRemoteStreamCreatedTimestamp: c.streamTracker.lastCallStartedTimestamp,
            lastMessageSentTimestamp: c.lastMessageSentTimestamp,
            lastMessageReceivedTimestamp: c.lastMessageReceivedTimestamp,
            localFlowControlWindow: (a = o.state.localWindowSize) !== null && a !== void 0 ? a : null,
            remoteFlowControlWindow: (u = o.state.remoteWindowSize) !== null && u !== void 0 ? u : null,
          };
        }
        trace(o) {
          ene.trace(q1.LogVerbosity.DEBUG, eGo, "(" + this.channelzRef.id + ") " + o);
        }
        keepaliveTrace(o) {
          ene.trace(q1.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + o);
        }
        addProtoService() {
          throw new Error("Not implemented. Use addService() instead");
        }
        addService(o, s) {
          if (o === null || typeof o != "object" || s === null || typeof s != "object")
            throw new Error("addService() requires two objects as arguments");
          let a = Object.keys(o);
          if (a.length === 0) throw new Error("Cannot add an empty service to a server");
          a.forEach((u) => {
            let c = o[u],
              m;
            c.requestStream
              ? c.responseStream
                ? (m = "bidi")
                : (m = "clientStream")
              : c.responseStream
                ? (m = "serverStream")
                : (m = "unary");
            let d = s[u],
              f;
            if (
              (d === void 0 && typeof c.originalName == "string" && (d = s[c.originalName]),
              d !== void 0 ? (f = d.bind(s)) : (f = nGo(m, u)),
              this.register(c.path, f, c.responseSerialize, c.requestDeserialize, m) === !1)
            )
              throw new Error(`Method handler for ${c.path} already provided.`);
          });
        }
        removeService(o) {
          if (o === null || typeof o != "object") throw new Error("removeService() requires object as argument");
          Object.keys(o).forEach((a) => {
            let u = o[a];
            this.unregister(u.path);
          });
        }
        bind(o, s) {
          throw new Error("Not implemented. Use bindAsync() instead");
        }
        experimentalRegisterListenerToChannelz(o) {
          return (0, Tp.registerChannelzSocket)(
            (0, XB.subchannelAddressToString)(o),
            () => ({
              localAddress: o,
              remoteAddress: null,
              security: null,
              remoteName: null,
              streamsStarted: 0,
              streamsSucceeded: 0,
              streamsFailed: 0,
              messagesSent: 0,
              messagesReceived: 0,
              keepAlivesSent: 0,
              lastLocalStreamCreatedTimestamp: null,
              lastRemoteStreamCreatedTimestamp: null,
              lastMessageSentTimestamp: null,
              lastMessageReceivedTimestamp: null,
              localFlowControlWindow: null,
              remoteFlowControlWindow: null,
            }),
            this.channelzEnabled,
          );
        }
        experimentalUnregisterListenerFromChannelz(o) {
          (0, Tp.unregisterChannelzRef)(o);
        }
        createHttp2Server(o) {
          let s;
          if (o._isSecure()) {
            let a = o._getConstructorOptions(),
              u = o._getSecureContextOptions(),
              c = Object.assign(Object.assign(Object.assign(Object.assign({}, this.commonServerOptions), a), u), {
                enableTrace: this.options["grpc-node.tls_enable_trace"] === 1,
              }),
              m = u !== null;
            (this.trace("Initial credentials valid: " + m),
              (s = c8.createSecureServer(c)),
              s.prependListener("connection", (f) => {
                m ||
                  (this.trace(
                    "Dropped connection from " + JSON.stringify(f.address()) + " due to unloaded credentials",
                  ),
                  f.destroy());
              }),
              s.on("secureConnection", (f) => {
                f.on("error", (p) => {
                  this.trace("An incoming TLS connection closed with error: " + p.message);
                });
              }));
            let d = (f) => {
              if (f) {
                let p = s;
                try {
                  p.setSecureContext(f);
                } catch (h) {
                  (ene.log(q1.LogVerbosity.ERROR, "Failed to set secure context with error " + h.message), (f = null));
                }
              }
              ((m = f !== null), this.trace("Post-update credentials valid: " + m));
            };
            (o._addWatcher(d),
              s.on("close", () => {
                o._removeWatcher(d);
              }));
          } else s = c8.createServer(this.commonServerOptions);
          return (s.setTimeout(0, tGo), this._setupHandlers(s, o._getInterceptors()), s);
        }
        bindOneAddress(o, s) {
          this.trace("Attempting to bind " + (0, XB.subchannelAddressToString)(o));
          let a = this.createHttp2Server(s.credentials);
          return new Promise((u, c) => {
            let m = (d) => {
              (this.trace("Failed to bind " + (0, XB.subchannelAddressToString)(o) + " with error " + d.message),
                u({ port: "port" in o ? o.port : 1, error: d.message }));
            };
            (a.once("error", m),
              a.listen(o, () => {
                let d = a.address(),
                  f;
                typeof d == "string" ? (f = { path: d }) : (f = { host: d.address, port: d.port });
                let p = this.experimentalRegisterListenerToChannelz(f);
                (this.listenerChildrenTracker.refChild(p),
                  this.http2Servers.set(a, { channelzRef: p, sessions: new Set(), ownsChannelzRef: !0 }),
                  s.listeningServers.add(a),
                  this.trace("Successfully bound " + (0, XB.subchannelAddressToString)(f)),
                  u({ port: "port" in f ? f.port : 1 }),
                  a.removeListener("error", m));
              }));
          });
        }
        async bindManyPorts(o, s) {
          if (o.length === 0) return { count: 0, port: 0, errors: [] };
          if ((0, XB.isTcpSubchannelAddress)(o[0]) && o[0].port === 0) {
            let a = await this.bindOneAddress(o[0], s);
            if (a.error) {
              let u = await this.bindManyPorts(o.slice(1), s);
              return Object.assign(Object.assign({}, u), { errors: [a.error, ...u.errors] });
            } else {
              let u = o.slice(1).map((d) => ((0, XB.isTcpSubchannelAddress)(d) ? { host: d.host, port: a.port } : d)),
                c = await Promise.all(u.map((d) => this.bindOneAddress(d, s))),
                m = [a, ...c];
              return {
                count: m.filter((d) => d.error === void 0).length,
                port: a.port,
                errors: m.filter((d) => d.error).map((d) => d.error),
              };
            }
          } else {
            let a = await Promise.all(o.map((u) => this.bindOneAddress(u, s)));
            return {
              count: a.filter((u) => u.error === void 0).length,
              port: a[0].port,
              errors: a.filter((u) => u.error).map((u) => u.error),
            };
          }
        }
        async bindAddressList(o, s) {
          let a = await this.bindManyPorts(o, s);
          if (a.count > 0)
            return (
              a.count < o.length &&
                ene.log(
                  q1.LogVerbosity.INFO,
                  `WARNING Only ${a.count} addresses added out of total ${o.length} resolved`,
                ),
              a.port
            );
          {
            let u = `No address added out of total ${o.length} resolved`;
            throw (ene.log(q1.LogVerbosity.ERROR, u), new Error(`${u} errors: [${a.errors.join(",")}]`));
          }
        }
        resolvePort(o) {
          return new Promise((s, a) => {
            let u = !1,
              c = (d, f, p, h) => {
                if (u) return !0;
                if (((u = !0), !d.ok)) return (a(new Error(d.error.details)), !0);
                let g = [].concat(...d.value.map((b) => b.addresses));
                return g.length === 0 ? (a(new Error(`No addresses resolved for port ${o}`)), !0) : (s(g), !0);
              };
            (0, dtn.createResolver)(o, c, this.options).updateResolution();
          });
        }
        async bindPort(o, s) {
          let a = await this.resolvePort(o);
          if (s.cancelled) throw (this.completeUnbind(s), new Error("bindAsync operation cancelled by unbind call"));
          let u = await this.bindAddressList(a, s);
          if (s.cancelled) throw (this.completeUnbind(s), new Error("bindAsync operation cancelled by unbind call"));
          return u;
        }
        normalizePort(o) {
          let s = (0, r4.parseUri)(o);
          if (s === null) throw new Error(`Could not parse port "${o}"`);
          let a = (0, dtn.mapUriDefaultScheme)(s);
          if (a === null) throw new Error(`Could not get a default scheme for port "${o}"`);
          return a;
        }
        bindAsync(o, s, a) {
          if (this.shutdown) throw new Error("bindAsync called after shutdown");
          if (typeof o != "string") throw new TypeError("port must be a string");
          if (s === null || !(s instanceof oIt.ServerCredentials))
            throw new TypeError("creds must be a ServerCredentials object");
          if (typeof a != "function") throw new TypeError("callback must be a function");
          this.trace("bindAsync port=" + o);
          let u = this.normalizePort(o),
            c = (p, h) => {
              process.nextTick(() => a(p, h));
            },
            m = this.boundPorts.get((0, r4.uriToString)(u));
          if (m) {
            if (!s._equals(m.credentials)) {
              c(new Error(`${o} already bound with incompatible credentials`), 0);
              return;
            }
            ((m.cancelled = !1),
              m.completionPromise
                ? m.completionPromise.then(
                    (p) => a(null, p),
                    (p) => a(p, 0),
                  )
                : c(null, m.portNumber));
            return;
          }
          m = {
            mapKey: (0, r4.uriToString)(u),
            originalUri: u,
            completionPromise: null,
            cancelled: !1,
            portNumber: 0,
            credentials: s,
            listeningServers: new Set(),
          };
          let d = (0, r4.splitHostPort)(u.path),
            f = this.bindPort(u, m);
          ((m.completionPromise = f),
            d?.port === 0
              ? f.then(
                  (p) => {
                    let h = {
                      scheme: u.scheme,
                      authority: u.authority,
                      path: (0, r4.combineHostPort)({ host: d.host, port: p }),
                    };
                    ((m.mapKey = (0, r4.uriToString)(h)),
                      (m.completionPromise = null),
                      (m.portNumber = p),
                      this.boundPorts.set(m.mapKey, m),
                      a(null, p));
                  },
                  (p) => {
                    a(p, 0);
                  },
                )
              : (this.boundPorts.set(m.mapKey, m),
                f.then(
                  (p) => {
                    ((m.completionPromise = null), (m.portNumber = p), a(null, p));
                  },
                  (p) => {
                    a(p, 0);
                  },
                )));
        }
        registerInjectorToChannelz() {
          return (0, Tp.registerChannelzSocket)(
            "injector",
            () => ({
              localAddress: null,
              remoteAddress: null,
              security: null,
              remoteName: null,
              streamsStarted: 0,
              streamsSucceeded: 0,
              streamsFailed: 0,
              messagesSent: 0,
              messagesReceived: 0,
              keepAlivesSent: 0,
              lastLocalStreamCreatedTimestamp: null,
              lastRemoteStreamCreatedTimestamp: null,
              lastMessageSentTimestamp: null,
              lastMessageReceivedTimestamp: null,
              localFlowControlWindow: null,
              remoteFlowControlWindow: null,
            }),
            this.channelzEnabled,
          );
        }
        experimentalCreateConnectionInjectorWithChannelzRef(o, s, a = !1) {
          if (o === null || !(o instanceof oIt.ServerCredentials))
            throw new TypeError("creds must be a ServerCredentials object");
          this.channelzEnabled && this.listenerChildrenTracker.refChild(s);
          let u = this.createHttp2Server(o),
            c = new Set();
          return (
            this.http2Servers.set(u, { channelzRef: s, sessions: c, ownsChannelzRef: a }),
            {
              injectConnection: (m) => {
                u.emit("connection", m);
              },
              drain: (m) => {
                var d, f;
                for (let p of c) this.closeSession(p);
                (f = (d = setTimeout(() => {
                  for (let p of c) p.destroy(c8.constants.NGHTTP2_CANCEL);
                }, m)).unref) === null ||
                  f === void 0 ||
                  f.call(d);
              },
              destroy: () => {
                this.closeServer(u);
                for (let m of c) this.closeSession(m);
              },
            }
          );
        }
        createConnectionInjector(o) {
          if (o === null || !(o instanceof oIt.ServerCredentials))
            throw new TypeError("creds must be a ServerCredentials object");
          let s = this.registerInjectorToChannelz();
          return this.experimentalCreateConnectionInjectorWithChannelzRef(o, s, !0);
        }
        closeServer(o, s) {
          this.trace("Closing server with address " + JSON.stringify(o.address()));
          let a = this.http2Servers.get(o);
          o.close(() => {
            (a &&
              a.ownsChannelzRef &&
              (this.listenerChildrenTracker.unrefChild(a.channelzRef), (0, Tp.unregisterChannelzRef)(a.channelzRef)),
              this.http2Servers.delete(o),
              s?.());
          });
        }
        closeSession(o, s) {
          var a;
          this.trace(
            "Closing session initiated by " + ((a = o.socket) === null || a === void 0 ? void 0 : a.remoteAddress),
          );
          let u = this.sessions.get(o),
            c = () => {
              (u && (this.sessionChildrenTracker.unrefChild(u.ref), (0, Tp.unregisterChannelzRef)(u.ref)), s?.());
            };
          o.closed ? queueMicrotask(c) : o.close(c);
        }
        completeUnbind(o) {
          for (let s of o.listeningServers) {
            let a = this.http2Servers.get(s);
            if (
              (this.closeServer(s, () => {
                o.listeningServers.delete(s);
              }),
              a)
            )
              for (let u of a.sessions) this.closeSession(u);
          }
          this.boundPorts.delete(o.mapKey);
        }
        unbind(o) {
          this.trace("unbind port=" + o);
          let s = this.normalizePort(o),
            a = (0, r4.splitHostPort)(s.path);
          if (a?.port === 0) throw new Error("Cannot unbind port 0");
          let u = this.boundPorts.get((0, r4.uriToString)(s));
          u &&
            (this.trace("unbinding " + u.mapKey + " originally bound as " + (0, r4.uriToString)(u.originalUri)),
            u.completionPromise ? (u.cancelled = !0) : this.completeUnbind(u));
        }
        drain(o, s) {
          var a, u;
          this.trace("drain port=" + o + " graceTimeMs=" + s);
          let c = this.normalizePort(o),
            m = (0, r4.splitHostPort)(c.path);
          if (m?.port === 0) throw new Error("Cannot drain port 0");
          let d = this.boundPorts.get((0, r4.uriToString)(c));
          if (!d) return;
          let f = new Set();
          for (let p of d.listeningServers) {
            let h = this.http2Servers.get(p);
            if (h)
              for (let g of h.sessions)
                (f.add(g),
                  this.closeSession(g, () => {
                    f.delete(g);
                  }));
          }
          (u = (a = setTimeout(() => {
            for (let p of f) p.destroy(c8.constants.NGHTTP2_CANCEL);
          }, s)).unref) === null ||
            u === void 0 ||
            u.call(a);
        }
        forceShutdown() {
          for (let o of this.boundPorts.values()) o.cancelled = !0;
          this.boundPorts.clear();
          for (let o of this.http2Servers.keys()) this.closeServer(o);
          (this.sessions.forEach((o, s) => {
            (this.closeSession(s), s.destroy(c8.constants.NGHTTP2_CANCEL));
          }),
            this.sessions.clear(),
            (0, Tp.unregisterChannelzRef)(this.channelzRef),
            (this.shutdown = !0));
        }
        register(o, s, a, u, c) {
          return this.handlers.has(o)
            ? !1
            : (this.handlers.set(o, { func: s, serialize: a, deserialize: u, type: c, path: o }), !0);
        }
        unregister(o) {
          return this.handlers.delete(o);
        }
        start() {
          if (this.http2Servers.size === 0 || [...this.http2Servers.keys()].every((o) => !o.listening))
            throw new Error("server must be bound in order to start");
          if (this.started === !0) throw new Error("server is already started");
          this.started = !0;
        }
        tryShutdown(o) {
          var s;
          let a = (m) => {
              ((0, Tp.unregisterChannelzRef)(this.channelzRef), o(m));
            },
            u = 0;
          function c() {
            (u--, u === 0 && a());
          }
          this.shutdown = !0;
          for (let [m, d] of this.http2Servers.entries()) {
            u++;
            let f = d.channelzRef.name;
            (this.trace("Waiting for server " + f + " to close"),
              this.closeServer(m, () => {
                (this.trace("Server " + f + " finished closing"), c());
              }));
            for (let p of d.sessions.keys()) {
              u++;
              let h = (s = p.socket) === null || s === void 0 ? void 0 : s.remoteAddress;
              (this.trace("Waiting for session " + h + " to close"),
                this.closeSession(p, () => {
                  (this.trace("Session " + h + " finished closing"), c());
                }));
            }
          }
          u === 0 && a();
        }
        addHttp2Port() {
          throw new Error("Not yet implemented");
        }
        getChannelzRef() {
          return this.channelzRef;
        }
        _verifyContentType(o, s) {
          let a = s[c8.constants.HTTP2_HEADER_CONTENT_TYPE];
          return typeof a != "string" || !a.startsWith("application/grpc")
            ? (o.respond(
                { [c8.constants.HTTP2_HEADER_STATUS]: c8.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE },
                { endStream: !0 },
              ),
              !1)
            : !0;
        }
        _retrieveHandler(o) {
          btn("Received call to method " + o + " at address " + this.serverAddressString);
          let s = this.handlers.get(o);
          return s === void 0
            ? (btn("No handler registered for method " + o + ". Sending UNIMPLEMENTED status."), null)
            : s;
        }
        _respondWithError(o, s, a = null) {
          var u, c;
          let m = Object.assign(
            {
              "grpc-status": (u = o.code) !== null && u !== void 0 ? u : q1.Status.INTERNAL,
              "grpc-message": o.details,
              [c8.constants.HTTP2_HEADER_STATUS]: c8.constants.HTTP_STATUS_OK,
              [c8.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto",
            },
            (c = o.metadata) === null || c === void 0 ? void 0 : c.toHttp2Headers(),
          );
          (s.respond(m, { endStream: !0 }), this.callTracker.addCallFailed(), a?.streamTracker.addCallFailed());
        }
        _channelzHandler(o, s, a) {
          this.onStreamOpened(s);
          let u = this.sessions.get(s.session);
          if ((this.callTracker.addCallStarted(), u?.streamTracker.addCallStarted(), !this._verifyContentType(s, a))) {
            (this.callTracker.addCallFailed(), u?.streamTracker.addCallFailed());
            return;
          }
          let c = a[htn],
            m = this._retrieveHandler(c);
          if (!m) {
            this._respondWithError(aIt(c), s, u);
            return;
          }
          let d = {
              addMessageSent: () => {
                u && ((u.messagesSent += 1), (u.lastMessageSentTimestamp = new Date()));
              },
              addMessageReceived: () => {
                u && ((u.messagesReceived += 1), (u.lastMessageReceivedTimestamp = new Date()));
              },
              onCallEnd: (p) => {
                p.code === q1.Status.OK ? this.callTracker.addCallSucceeded() : this.callTracker.addCallFailed();
              },
              onStreamEnd: (p) => {
                u && (p ? u.streamTracker.addCallSucceeded() : u.streamTracker.addCallFailed());
              },
            },
            f = (0, ftn.getServerInterceptingCall)([...o, ...this.interceptors], s, a, d, m, this.options);
          this._runHandlerForCall(f, m) ||
            (this.callTracker.addCallFailed(),
            u?.streamTracker.addCallFailed(),
            f.sendStatus({ code: q1.Status.INTERNAL, details: `Unknown handler type: ${m.type}` }));
        }
        _streamHandler(o, s, a) {
          if ((this.onStreamOpened(s), this._verifyContentType(s, a) !== !0)) return;
          let u = a[htn],
            c = this._retrieveHandler(u);
          if (!c) {
            this._respondWithError(aIt(u), s, null);
            return;
          }
          let m = (0, ftn.getServerInterceptingCall)([...o, ...this.interceptors], s, a, null, c, this.options);
          this._runHandlerForCall(m, c) ||
            m.sendStatus({ code: q1.Status.INTERNAL, details: `Unknown handler type: ${c.type}` });
        }
        _runHandlerForCall(o, s) {
          let { type: a } = s;
          if (a === "unary") oGo(o, s);
          else if (a === "clientStream") sGo(o, s);
          else if (a === "serverStream") aGo(o, s);
          else if (a === "bidi") uGo(o, s);
          else return !1;
          return !0;
        }
        _setupHandlers(o, s) {
          if (o === null) return;
          let a = o.address(),
            u = "null";
          (a && (typeof a == "string" ? (u = a) : (u = a.address + ":" + a.port)), (this.serverAddressString = u));
          let c = this.channelzEnabled ? this._channelzHandler : this._streamHandler,
            m = this.channelzEnabled ? this._channelzSessionHandler(o) : this._sessionHandler(o);
          (o.on("stream", c.bind(this, s)), o.on("session", m));
        }
        _sessionHandler(o) {
          return (s) => {
            var a, u;
            (a = this.http2Servers.get(o)) === null || a === void 0 || a.sessions.add(s);
            let c = null,
              m = null,
              d = null,
              f = !1,
              p = this.enableIdleTimeout(s);
            if (this.maxConnectionAgeMs !== Zre) {
              let y = this.maxConnectionAgeMs / 10,
                E = Math.random() * y * 2 - y;
              ((c = setTimeout(() => {
                var v, C;
                ((f = !0),
                  this.trace(
                    "Connection dropped by max connection age: " +
                      ((v = s.socket) === null || v === void 0 ? void 0 : v.remoteAddress),
                  ));
                try {
                  s.goaway(c8.constants.NGHTTP2_NO_ERROR, ~(1 << 31), gtn);
                } catch {
                  s.destroy();
                  return;
                }
                (s.close(),
                  this.maxConnectionAgeGraceMs !== Zre &&
                    ((m = setTimeout(() => {
                      s.destroy();
                    }, this.maxConnectionAgeGraceMs)),
                    (C = m.unref) === null || C === void 0 || C.call(m)));
              }, this.maxConnectionAgeMs + E)),
                (u = c.unref) === null || u === void 0 || u.call(c));
            }
            let h = () => {
                d && (clearTimeout(d), (d = null));
              },
              g = () => !s.destroyed && this.keepaliveTimeMs < sIt && this.keepaliveTimeMs > 0,
              b,
              A = () => {
                var y;
                g() &&
                  (this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"),
                  (d = setTimeout(() => {
                    (h(), b());
                  }, this.keepaliveTimeMs)),
                  (y = d.unref) === null || y === void 0 || y.call(d));
              };
            ((b = () => {
              var y;
              if (!g()) return;
              this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
              let E = "";
              try {
                s.ping((C, x, k) => {
                  (h(),
                    C
                      ? (this.keepaliveTrace("Ping failed with error: " + C.message), (f = !0), s.destroy())
                      : (this.keepaliveTrace("Received ping response"), A()));
                }) || (E = "Ping returned false");
              } catch (v) {
                E = (v instanceof Error ? v.message : "") || "Unknown error";
              }
              if (E) {
                (this.keepaliveTrace("Ping send failed: " + E),
                  this.trace("Connection dropped due to ping send error: " + E),
                  (f = !0),
                  s.destroy());
                return;
              }
              ((d = setTimeout(() => {
                (h(),
                  this.keepaliveTrace("Ping timeout passed without response"),
                  this.trace("Connection dropped by keepalive timeout"),
                  (f = !0),
                  s.destroy());
              }, this.keepaliveTimeoutMs)),
                (y = d.unref) === null || y === void 0 || y.call(d));
            }),
              A(),
              s.on("close", () => {
                var y, E;
                (f ||
                  this.trace(
                    `Connection dropped by client ${(y = s.socket) === null || y === void 0 ? void 0 : y.remoteAddress}`,
                  ),
                  c && clearTimeout(c),
                  m && clearTimeout(m),
                  h(),
                  p !== null && (clearTimeout(p.timeout), this.sessionIdleTimeouts.delete(s)),
                  (E = this.http2Servers.get(o)) === null || E === void 0 || E.sessions.delete(s));
              }));
          };
        }
        _channelzSessionHandler(o) {
          return (s) => {
            var a, u, c, m;
            let d = (0, Tp.registerChannelzSocket)(
                (u = (a = s.socket) === null || a === void 0 ? void 0 : a.remoteAddress) !== null && u !== void 0
                  ? u
                  : "unknown",
                this.getChannelzSessionInfo.bind(this, s),
                this.channelzEnabled,
              ),
              f = {
                ref: d,
                streamTracker: new Tp.ChannelzCallTracker(),
                messagesSent: 0,
                messagesReceived: 0,
                keepAlivesSent: 0,
                lastMessageSentTimestamp: null,
                lastMessageReceivedTimestamp: null,
              };
            ((c = this.http2Servers.get(o)) === null || c === void 0 || c.sessions.add(s), this.sessions.set(s, f));
            let p = `${s.socket.remoteAddress}:${s.socket.remotePort}`;
            (this.channelzTrace.addTrace("CT_INFO", "Connection established by client " + p),
              this.trace("Connection established by client " + p),
              this.sessionChildrenTracker.refChild(d));
            let h = null,
              g = null,
              b = null,
              A = !1,
              y = this.enableIdleTimeout(s);
            if (this.maxConnectionAgeMs !== Zre) {
              let k = this.maxConnectionAgeMs / 10,
                R = Math.random() * k * 2 - k;
              ((h = setTimeout(() => {
                var P;
                ((A = !0),
                  this.channelzTrace.addTrace("CT_INFO", "Connection dropped by max connection age from " + p));
                try {
                  s.goaway(c8.constants.NGHTTP2_NO_ERROR, ~(1 << 31), gtn);
                } catch {
                  s.destroy();
                  return;
                }
                (s.close(),
                  this.maxConnectionAgeGraceMs !== Zre &&
                    ((g = setTimeout(() => {
                      s.destroy();
                    }, this.maxConnectionAgeGraceMs)),
                    (P = g.unref) === null || P === void 0 || P.call(g)));
              }, this.maxConnectionAgeMs + R)),
                (m = h.unref) === null || m === void 0 || m.call(h));
            }
            let E = () => {
                b && (clearTimeout(b), (b = null));
              },
              v = () => !s.destroyed && this.keepaliveTimeMs < sIt && this.keepaliveTimeMs > 0,
              C,
              x = () => {
                var k;
                v() &&
                  (this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"),
                  (b = setTimeout(() => {
                    (E(), C());
                  }, this.keepaliveTimeMs)),
                  (k = b.unref) === null || k === void 0 || k.call(b));
              };
            ((C = () => {
              var k;
              if (!v()) return;
              this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
              let R = "";
              try {
                s.ping((D, O, N) => {
                  (E(),
                    D
                      ? (this.keepaliveTrace("Ping failed with error: " + D.message),
                        this.channelzTrace.addTrace(
                          "CT_INFO",
                          "Connection dropped due to error of a ping frame " + D.message + " return in " + O,
                        ),
                        (A = !0),
                        s.destroy())
                      : (this.keepaliveTrace("Received ping response"), x()));
                }) || (R = "Ping returned false");
              } catch (P) {
                R = (P instanceof Error ? P.message : "") || "Unknown error";
              }
              if (R) {
                (this.keepaliveTrace("Ping send failed: " + R),
                  this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to ping send error: " + R),
                  (A = !0),
                  s.destroy());
                return;
              }
              ((f.keepAlivesSent += 1),
                (b = setTimeout(() => {
                  (E(),
                    this.keepaliveTrace("Ping timeout passed without response"),
                    this.channelzTrace.addTrace("CT_INFO", "Connection dropped by keepalive timeout from " + p),
                    (A = !0),
                    s.destroy());
                }, this.keepaliveTimeoutMs)),
                (k = b.unref) === null || k === void 0 || k.call(b));
            }),
              x(),
              s.on("close", () => {
                var k;
                (A || this.channelzTrace.addTrace("CT_INFO", "Connection dropped by client " + p),
                  this.sessionChildrenTracker.unrefChild(d),
                  (0, Tp.unregisterChannelzRef)(d),
                  h && clearTimeout(h),
                  g && clearTimeout(g),
                  E(),
                  y !== null && (clearTimeout(y.timeout), this.sessionIdleTimeouts.delete(s)),
                  (k = this.http2Servers.get(o)) === null || k === void 0 || k.sessions.delete(s),
                  this.sessions.delete(s));
              }));
          };
        }
        enableIdleTimeout(o) {
          var s, a;
          if (this.sessionIdleTimeout >= ptn) return null;
          let u = {
            activeStreams: 0,
            lastIdle: Date.now(),
            onClose: this.onStreamClose.bind(this, o),
            timeout: setTimeout(this.onIdleTimeout, this.sessionIdleTimeout, this, o),
          };
          ((a = (s = u.timeout).unref) === null || a === void 0 || a.call(s), this.sessionIdleTimeouts.set(o, u));
          let { socket: c } = o;
          return (this.trace("Enable idle timeout for " + c.remoteAddress + ":" + c.remotePort), u);
        }
        onIdleTimeout(o, s) {
          let { socket: a } = s,
            u = o.sessionIdleTimeouts.get(s);
          u !== void 0 &&
            u.activeStreams === 0 &&
            (Date.now() - u.lastIdle >= o.sessionIdleTimeout
              ? (o.trace(
                  "Session idle timeout triggered for " +
                    a?.remoteAddress +
                    ":" +
                    a?.remotePort +
                    " last idle at " +
                    u.lastIdle,
                ),
                o.closeSession(s))
              : u.timeout.refresh());
        }
        onStreamOpened(o) {
          let s = o.session,
            a = this.sessionIdleTimeouts.get(s);
          a && ((a.activeStreams += 1), o.once("close", a.onClose));
        }
        onStreamClose(o) {
          var s, a;
          let u = this.sessionIdleTimeouts.get(o);
          u &&
            ((u.activeStreams -= 1),
            u.activeStreams === 0 &&
              ((u.lastIdle = Date.now()),
              u.timeout.refresh(),
              this.trace(
                "Session onStreamClose" +
                  ((s = o.socket) === null || s === void 0 ? void 0 : s.remoteAddress) +
                  ":" +
                  ((a = o.socket) === null || a === void 0 ? void 0 : a.remotePort) +
                  " at " +
                  u.lastIdle,
              )));
        }
      }),
      (() => {
        let n = typeof Symbol == "function" && Symbol.metadata ? Object.create(null) : void 0;
        ((r = [rGo("Calling start() is no longer necessary. It can be safely omitted.")]),
          JQo(
            t,
            null,
            r,
            {
              kind: "method",
              name: "start",
              static: !1,
              private: !1,
              access: { has: (o) => "start" in o, get: (o) => o.start },
              metadata: n,
            },
            null,
            e,
          ),
          n && Object.defineProperty(t, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: n }));
      })(),
      t
    );
  })();
  ZB.Server = iGo;
  async function oGo(t, e) {
    let r;
    function n(a, u, c, m) {
      if (a) {
        t.sendStatus((0, tne.serverErrorToStatus)(a, c));
        return;
      }
      t.sendMessage(u, () => {
        t.sendStatus({ code: q1.Status.OK, details: "OK", metadata: c ?? null });
      });
    }
    let o,
      s = null;
    t.start({
      onReceiveMetadata(a) {
        ((o = a), t.startRead());
      },
      onReceiveMessage(a) {
        if (s) {
          t.sendStatus({
            code: q1.Status.UNIMPLEMENTED,
            details: `Received a second request message for server streaming method ${e.path}`,
            metadata: null,
          });
          return;
        }
        ((s = a), t.startRead());
      },
      onReceiveHalfClose() {
        if (!s) {
          t.sendStatus({
            code: q1.Status.UNIMPLEMENTED,
            details: `Received no request message for server streaming method ${e.path}`,
            metadata: null,
          });
          return;
        }
        r = new tne.ServerWritableStreamImpl(e.path, t, o, s);
        try {
          e.func(r, n);
        } catch (a) {
          t.sendStatus({
            code: q1.Status.UNKNOWN,
            details: `Server method handler threw error ${a.message}`,
            metadata: null,
          });
        }
      },
      onCancel() {
        r && ((r.cancelled = !0), r.emit("cancelled", "cancelled"));
      },
    });
  }
  function sGo(t, e) {
    let r;
    function n(o, s, a, u) {
      if (o) {
        t.sendStatus((0, tne.serverErrorToStatus)(o, a));
        return;
      }
      t.sendMessage(s, () => {
        t.sendStatus({ code: q1.Status.OK, details: "OK", metadata: a ?? null });
      });
    }
    t.start({
      onReceiveMetadata(o) {
        r = new tne.ServerDuplexStreamImpl(e.path, t, o);
        try {
          e.func(r, n);
        } catch (s) {
          t.sendStatus({
            code: q1.Status.UNKNOWN,
            details: `Server method handler threw error ${s.message}`,
            metadata: null,
          });
        }
      },
      onReceiveMessage(o) {
        r.push(o);
      },
      onReceiveHalfClose() {
        r.push(null);
      },
      onCancel() {
        r && ((r.cancelled = !0), r.emit("cancelled", "cancelled"), r.destroy());
      },
    });
  }
  function aGo(t, e) {
    let r,
      n,
      o = null;
    t.start({
      onReceiveMetadata(s) {
        ((n = s), t.startRead());
      },
      onReceiveMessage(s) {
        if (o) {
          t.sendStatus({
            code: q1.Status.UNIMPLEMENTED,
            details: `Received a second request message for server streaming method ${e.path}`,
            metadata: null,
          });
          return;
        }
        ((o = s), t.startRead());
      },
      onReceiveHalfClose() {
        if (!o) {
          t.sendStatus({
            code: q1.Status.UNIMPLEMENTED,
            details: `Received no request message for server streaming method ${e.path}`,
            metadata: null,
          });
          return;
        }
        r = new tne.ServerWritableStreamImpl(e.path, t, n, o);
        try {
          e.func(r);
        } catch (s) {
          t.sendStatus({
            code: q1.Status.UNKNOWN,
            details: `Server method handler threw error ${s.message}`,
            metadata: null,
          });
        }
      },
      onCancel() {
        r && ((r.cancelled = !0), r.emit("cancelled", "cancelled"), r.destroy());
      },
    });
  }
  function uGo(t, e) {
    let r;
    t.start({
      onReceiveMetadata(n) {
        r = new tne.ServerDuplexStreamImpl(e.path, t, n);
        try {
          e.func(r);
        } catch (o) {
          t.sendStatus({
            code: q1.Status.UNKNOWN,
            details: `Server method handler threw error ${o.message}`,
            metadata: null,
          });
        }
      },
      onReceiveMessage(n) {
        r.push(n);
      },
      onReceiveHalfClose() {
        r.push(null);
      },
      onCancel() {
        r && ((r.cancelled = !0), r.emit("cancelled", "cancelled"), r.destroy());
      },
    });
  }
});