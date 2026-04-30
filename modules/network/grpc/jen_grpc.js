/**
 * @module jen
 * @category network/grpc
 * @label grpc
 * @position 499 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jen) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jen = T((kUe) => {
  "use strict";
  Object.defineProperty(kUe, "__esModule", { value: !0 });
  kUe.Http2SubchannelConnector = void 0;
  var Sq = Ae("http2"),
    Ejo = Ae("tls"),
    IUe = zB(),
    Dbe = La(),
    vjo = uDt(),
    Kre = g0(),
    Cjo = VC(),
    RUe = a8(),
    fDt = d2(),
    Sjo = Ae("net"),
    wjo = $en(),
    xjo = hUe(),
    pDt = "transport",
    Tjo = "transport_flowctrl",
    Djo = qwt().version,
    {
      HTTP2_HEADER_AUTHORITY: Ijo,
      HTTP2_HEADER_CONTENT_TYPE: Rjo,
      HTTP2_HEADER_METHOD: kjo,
      HTTP2_HEADER_PATH: Ojo,
      HTTP2_HEADER_TE: Njo,
      HTTP2_HEADER_USER_AGENT: Pjo,
    } = Sq.constants,
    Bjo = 2e4,
    Ljo = Buffer.from("too_many_pings", "ascii"),
    hDt = class {
      constructor(e, r, n, o) {
        ((this.session = e),
          (this.options = n),
          (this.remoteName = o),
          (this.keepaliveTimer = null),
          (this.pendingSendKeepalivePing = !1),
          (this.activeCalls = new Set()),
          (this.disconnectListeners = []),
          (this.disconnectHandled = !1),
          (this.channelzEnabled = !0),
          (this.keepalivesSent = 0),
          (this.messagesSent = 0),
          (this.messagesReceived = 0),
          (this.lastMessageSentTimestamp = null),
          (this.lastMessageReceivedTimestamp = null),
          (this.subchannelAddressString = (0, RUe.subchannelAddressToString)(r)),
          n["grpc.enable_channelz"] === 0
            ? ((this.channelzEnabled = !1), (this.streamTracker = new IUe.ChannelzCallTrackerStub()))
            : (this.streamTracker = new IUe.ChannelzCallTracker()),
          (this.channelzRef = (0, IUe.registerChannelzSocket)(
            this.subchannelAddressString,
            () => this.getChannelzInfo(),
            this.channelzEnabled,
          )),
          (this.userAgent = [n["grpc.primary_user_agent"], `grpc-node-js/${Djo}`, n["grpc.secondary_user_agent"]]
            .filter((s) => s)
            .join(" ")),
          "grpc.keepalive_time_ms" in n
            ? (this.keepaliveTimeMs = n["grpc.keepalive_time_ms"])
            : (this.keepaliveTimeMs = -1),
          "grpc.keepalive_timeout_ms" in n
            ? (this.keepaliveTimeoutMs = n["grpc.keepalive_timeout_ms"])
            : (this.keepaliveTimeoutMs = Bjo),
          "grpc.keepalive_permit_without_calls" in n
            ? (this.keepaliveWithoutCalls = n["grpc.keepalive_permit_without_calls"] === 1)
            : (this.keepaliveWithoutCalls = !1),
          e.once("close", () => {
            (this.trace("session closed"), this.handleDisconnect());
          }),
          e.once("goaway", (s, a, u) => {
            let c = !1;
            (s === Sq.constants.NGHTTP2_ENHANCE_YOUR_CALM && u && u.equals(Ljo) && (c = !0),
              this.trace("connection closed by GOAWAY with code " + s + " and data " + u?.toString()),
              this.reportDisconnectToOwner(c));
          }),
          e.once("error", (s) => {
            (this.trace("connection closed with error " + s.message), this.handleDisconnect());
          }),
          e.socket.once("close", (s) => {
            (this.trace("connection closed. hadError=" + s), this.handleDisconnect());
          }),
          Kre.isTracerEnabled(pDt) &&
            (e.on("remoteSettings", (s) => {
              this.trace(
                "new settings received" +
                  (this.session !== e ? " on the old connection" : "") +
                  ": " +
                  JSON.stringify(s),
              );
            }),
            e.on("localSettings", (s) => {
              this.trace(
                "local settings acknowledged by remote" +
                  (this.session !== e ? " on the old connection" : "") +
                  ": " +
                  JSON.stringify(s),
              );
            })),
          this.keepaliveWithoutCalls && this.maybeStartKeepalivePingTimer(),
          e.socket instanceof Ejo.TLSSocket
            ? (this.authContext = { transportSecurityType: "ssl", sslPeerCertificate: e.socket.getPeerCertificate() })
            : (this.authContext = {}));
      }
      getChannelzInfo() {
        var e, r, n;
        let o = this.session.socket,
          s = o.remoteAddress ? (0, RUe.stringToSubchannelAddress)(o.remoteAddress, o.remotePort) : null,
          a = o.localAddress ? (0, RUe.stringToSubchannelAddress)(o.localAddress, o.localPort) : null,
          u;
        if (this.session.encrypted) {
          let m = o,
            d = m.getCipher(),
            f = m.getCertificate(),
            p = m.getPeerCertificate();
          u = {
            cipherSuiteStandardName: (e = d.standardName) !== null && e !== void 0 ? e : null,
            cipherSuiteOtherName: d.standardName ? null : d.name,
            localCertificate: f && "raw" in f ? f.raw : null,
            remoteCertificate: p && "raw" in p ? p.raw : null,
          };
        } else u = null;
        return {
          remoteAddress: s,
          localAddress: a,
          security: u,
          remoteName: this.remoteName,
          streamsStarted: this.streamTracker.callsStarted,
          streamsSucceeded: this.streamTracker.callsSucceeded,
          streamsFailed: this.streamTracker.callsFailed,
          messagesSent: this.messagesSent,
          messagesReceived: this.messagesReceived,
          keepAlivesSent: this.keepalivesSent,
          lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
          lastRemoteStreamCreatedTimestamp: null,
          lastMessageSentTimestamp: this.lastMessageSentTimestamp,
          lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
          localFlowControlWindow: (r = this.session.state.localWindowSize) !== null && r !== void 0 ? r : null,
          remoteFlowControlWindow: (n = this.session.state.remoteWindowSize) !== null && n !== void 0 ? n : null,
        };
      }
      trace(e) {
        Kre.trace(
          Dbe.LogVerbosity.DEBUG,
          pDt,
          "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e,
        );
      }
      keepaliveTrace(e) {
        Kre.trace(
          Dbe.LogVerbosity.DEBUG,
          "keepalive",
          "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e,
        );
      }
      flowControlTrace(e) {
        Kre.trace(
          Dbe.LogVerbosity.DEBUG,
          Tjo,
          "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e,
        );
      }
      internalsTrace(e) {
        Kre.trace(
          Dbe.LogVerbosity.DEBUG,
          "transport_internals",
          "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + e,
        );
      }
      reportDisconnectToOwner(e) {
        this.disconnectHandled || ((this.disconnectHandled = !0), this.disconnectListeners.forEach((r) => r(e)));
      }
      handleDisconnect() {
        (this.clearKeepaliveTimeout(), this.reportDisconnectToOwner(!1));
        for (let e of this.activeCalls) e.onDisconnect();
        setImmediate(() => {
          this.session.destroy();
        });
      }
      addDisconnectListener(e) {
        this.disconnectListeners.push(e);
      }
      canSendPing() {
        return (
          !this.session.destroyed &&
          this.keepaliveTimeMs > 0 &&
          (this.keepaliveWithoutCalls || this.activeCalls.size > 0)
        );
      }
      maybeSendPing() {
        var e, r;
        if (!this.canSendPing()) {
          this.pendingSendKeepalivePing = !0;
          return;
        }
        if (this.keepaliveTimer) {
          console.error("keepaliveTimeout is not null");
          return;
        }
        (this.channelzEnabled && (this.keepalivesSent += 1),
          this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms"),
          (this.keepaliveTimer = setTimeout(() => {
            ((this.keepaliveTimer = null),
              this.keepaliveTrace("Ping timeout passed without response"),
              this.handleDisconnect());
          }, this.keepaliveTimeoutMs)),
          (r = (e = this.keepaliveTimer).unref) === null || r === void 0 || r.call(e));
        let n = "";
        try {
          this.session.ping((s, a, u) => {
            (this.clearKeepaliveTimeout(),
              s
                ? (this.keepaliveTrace("Ping failed with error " + s.message), this.handleDisconnect())
                : (this.keepaliveTrace("Received ping response"), this.maybeStartKeepalivePingTimer()));
          }) || (n = "Ping returned false");
        } catch (o) {
          n = (o instanceof Error ? o.message : "") || "Unknown error";
        }
        n && (this.keepaliveTrace("Ping send failed: " + n), this.handleDisconnect());
      }
      maybeStartKeepalivePingTimer() {
        var e, r;
        this.canSendPing() &&
          (this.pendingSendKeepalivePing
            ? ((this.pendingSendKeepalivePing = !1), this.maybeSendPing())
            : this.keepaliveTimer ||
              (this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms"),
              (this.keepaliveTimer = setTimeout(() => {
                ((this.keepaliveTimer = null), this.maybeSendPing());
              }, this.keepaliveTimeMs)),
              (r = (e = this.keepaliveTimer).unref) === null || r === void 0 || r.call(e)));
      }
      clearKeepaliveTimeout() {
        this.keepaliveTimer && (clearTimeout(this.keepaliveTimer), (this.keepaliveTimer = null));
      }
      removeActiveCall(e) {
        (this.activeCalls.delete(e), this.activeCalls.size === 0 && this.session.unref());
      }
      addActiveCall(e) {
        (this.activeCalls.add(e),
          this.activeCalls.size === 1 &&
            (this.session.ref(), this.keepaliveWithoutCalls || this.maybeStartKeepalivePingTimer()));
      }
      createCall(e, r, n, o, s) {
        let a = e.toHttp2Headers();
        ((a[Ijo] = r),
          (a[Pjo] = this.userAgent),
          (a[Rjo] = "application/grpc"),
          (a[kjo] = "POST"),
          (a[Ojo] = n),
          (a[Njo] = "trailers"));
        let u;
        try {
          u = this.session.request(a);
        } catch (d) {
          throw (this.handleDisconnect(), d);
        }
        (this.flowControlTrace(
          "local window size: " +
            this.session.state.localWindowSize +
            " remote window size: " +
            this.session.state.remoteWindowSize,
        ),
          this.internalsTrace(
            "session.closed=" +
              this.session.closed +
              " session.destroyed=" +
              this.session.destroyed +
              " session.socket.destroyed=" +
              this.session.socket.destroyed,
          ));
        let c, m;
        return (
          this.channelzEnabled
            ? (this.streamTracker.addCallStarted(),
              (c = {
                addMessageSent: () => {
                  var d;
                  ((this.messagesSent += 1),
                    (this.lastMessageSentTimestamp = new Date()),
                    (d = s.addMessageSent) === null || d === void 0 || d.call(s));
                },
                addMessageReceived: () => {
                  var d;
                  ((this.messagesReceived += 1),
                    (this.lastMessageReceivedTimestamp = new Date()),
                    (d = s.addMessageReceived) === null || d === void 0 || d.call(s));
                },
                onCallEnd: (d) => {
                  var f;
                  ((f = s.onCallEnd) === null || f === void 0 || f.call(s, d), this.removeActiveCall(m));
                },
                onStreamEnd: (d) => {
                  var f;
                  (d ? this.streamTracker.addCallSucceeded() : this.streamTracker.addCallFailed(),
                    (f = s.onStreamEnd) === null || f === void 0 || f.call(s, d));
                },
              }))
            : (c = {
                addMessageSent: () => {
                  var d;
                  (d = s.addMessageSent) === null || d === void 0 || d.call(s);
                },
                addMessageReceived: () => {
                  var d;
                  (d = s.addMessageReceived) === null || d === void 0 || d.call(s);
                },
                onCallEnd: (d) => {
                  var f;
                  ((f = s.onCallEnd) === null || f === void 0 || f.call(s, d), this.removeActiveCall(m));
                },
                onStreamEnd: (d) => {
                  var f;
                  (f = s.onStreamEnd) === null || f === void 0 || f.call(s, d);
                },
              }),
          (m = new wjo.Http2SubchannelCall(u, c, o, this, (0, xjo.getNextCallNumber)())),
          this.addActiveCall(m),
          m
        );
      }
      getChannelzRef() {
        return this.channelzRef;
      }
      getPeerName() {
        return this.subchannelAddressString;
      }
      getOptions() {
        return this.options;
      }
      getAuthContext() {
        return this.authContext;
      }
      shutdown() {
        (this.session.close(), (0, IUe.unregisterChannelzRef)(this.channelzRef));
      }
    },
    gDt = class {
      constructor(e) {
        ((this.channelTarget = e), (this.session = null), (this.isShutdown = !1));
      }
      trace(e) {
        Kre.trace(Dbe.LogVerbosity.DEBUG, pDt, (0, fDt.uriToString)(this.channelTarget) + " " + e);
      }
      createSession(e, r, n) {
        return this.isShutdown
          ? Promise.reject()
          : e.socket.closed
            ? Promise.reject("Connection closed before starting HTTP/2 handshake")
            : new Promise((o, s) => {
                var a, u, c, m, d, f, p, h;
                let g = null,
                  b = this.channelTarget;
                if ("grpc.http_connect_target" in n) {
                  let O = (0, fDt.parseUri)(n["grpc.http_connect_target"]);
                  O && ((b = O), (g = (0, fDt.uriToString)(O)));
                }
                let A = e.secure ? "https" : "http",
                  y = (0, Cjo.getDefaultAuthority)(b),
                  E = () => {
                    var O;
                    ((O = this.session) === null || O === void 0 || O.destroy(),
                      (this.session = null),
                      setImmediate(() => {
                        D || ((D = !0), s(`${P.trim()} (${new Date().toISOString()})`));
                      }));
                  },
                  v = (O) => {
                    var N;
                    ((N = this.session) === null || N === void 0 || N.destroy(),
                      (P = O.message),
                      this.trace("connection failed with error " + P),
                      D || ((D = !0), s(`${P} (${new Date().toISOString()})`)));
                  },
                  C = {
                    createConnection: (O, N) => e.socket,
                    settings: {
                      initialWindowSize:
                        (m =
                          (a = n["grpc-node.flow_control_window"]) !== null && a !== void 0
                            ? a
                            : (c = (u = Sq.getDefaultSettings) === null || u === void 0 ? void 0 : u.call(Sq)) ===
                                  null || c === void 0
                              ? void 0
                              : c.initialWindowSize) !== null && m !== void 0
                          ? m
                          : 65535,
                    },
                    maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER,
                    maxSessionMemory:
                      (d = n["grpc-node.max_session_memory"]) !== null && d !== void 0 ? d : Number.MAX_SAFE_INTEGER,
                  },
                  x = Sq.connect(`${A}://${y}`, C),
                  k =
                    (h =
                      (p = (f = Sq.getDefaultSettings) === null || f === void 0 ? void 0 : f.call(Sq)) === null ||
                      p === void 0
                        ? void 0
                        : p.initialWindowSize) !== null && h !== void 0
                      ? h
                      : 65535,
                  R = n["grpc-node.flow_control_window"];
                this.session = x;
                let P = "Failed to connect",
                  D = !1;
                (x.unref(),
                  x.once("remoteSettings", () => {
                    var O;
                    if (R && R > k)
                      try {
                        x.setLocalWindowSize(R);
                      } catch {
                        let F = R - ((O = x.state.localWindowSize) !== null && O !== void 0 ? O : k);
                        F > 0 && x.incrementWindowSize(F);
                      }
                    (x.removeAllListeners(),
                      e.socket.removeListener("close", E),
                      e.socket.removeListener("error", v),
                      o(new hDt(x, r, n, g)),
                      (this.session = null));
                  }),
                  x.once("close", E),
                  x.once("error", v),
                  e.socket.once("close", E),
                  e.socket.once("error", v));
              });
      }
      tcpConnect(e, r) {
        return (0, vjo.getProxiedConnection)(e, r).then(
          (n) =>
            n ||
            new Promise((o, s) => {
              let a = () => {
                  s(new Error("Socket closed"));
                },
                u = (m) => {
                  s(m);
                },
                c = Sjo.connect(e, () => {
                  (c.removeListener("close", a), c.removeListener("error", u), o(c));
                });
              (c.once("close", a), c.once("error", u));
            }),
        );
      }
      async connect(e, r, n) {
        if (this.isShutdown) return Promise.reject();
        let o = null,
          s = null,
          a = (0, RUe.subchannelAddressToString)(e);
        try {
          return (
            this.trace(a + " Waiting for secureConnector to be ready"),
            await r.waitForReady(),
            this.trace(a + " secureConnector is ready"),
            (o = await this.tcpConnect(e, n)),
            o.setNoDelay(),
            this.trace(a + " Established TCP connection"),
            (s = await r.connect(o)),
            this.trace(a + " Established secure connection"),
            this.createSession(s, e, n)
          );
        } catch (u) {
          throw (o?.destroy(), s?.socket.destroy(), u);
        }
      }
      shutdown() {
        var e;
        ((this.isShutdown = !0), (e = this.session) === null || e === void 0 || e.close(), (this.session = null));
      }
    };
  kUe.Http2SubchannelConnector = gDt;
});