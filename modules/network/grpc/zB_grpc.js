/**
 * @module zB
 * @category network/grpc
 * @label grpc
 * @position 485 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zB) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zB = T((Q0) => {
  "use strict";
  Object.defineProperty(Q0, "__esModule", { value: !0 });
  Q0.registerChannelzSocket =
    Q0.registerChannelzServer =
    Q0.registerChannelzSubchannel =
    Q0.registerChannelzChannel =
    Q0.ChannelzCallTrackerStub =
    Q0.ChannelzCallTracker =
    Q0.ChannelzChildrenTrackerStub =
    Q0.ChannelzChildrenTracker =
    Q0.ChannelzTrace =
    Q0.ChannelzTraceStub =
      void 0;
  Q0.unregisterChannelzRef = m$o;
  Q0.getChannelzHandlers = wen;
  Q0.getChannelzServiceDefinition = xen;
  Q0.setup = v$o;
  var lUe = Ae("net"),
    _q = yXr(),
    _be = f2(),
    Ebe = La(),
    a$o = a8(),
    u$o = NFe(),
    c$o = FFe();
  function PTt(t) {
    return { channel_id: t.id, name: t.name };
  }
  function UTt(t) {
    return { subchannel_id: t.id, name: t.name };
  }
  function l$o(t) {
    return { server_id: t.id };
  }
  function fUe(t) {
    return { socket_id: t.id, name: t.name };
  }
  var Aen = 32,
    $Tt = 100,
    BTt = class {
      constructor() {
        ((this.events = []), (this.creationTimestamp = new Date()), (this.eventsLogged = 0));
      }
      addTrace() {}
      getTraceMessage() {
        return { creation_timestamp: eT(this.creationTimestamp), num_events_logged: this.eventsLogged, events: [] };
      }
    };
  Q0.ChannelzTraceStub = BTt;
  var LTt = class {
    constructor() {
      ((this.events = []), (this.eventsLogged = 0), (this.creationTimestamp = new Date()));
    }
    addTrace(e, r, n) {
      let o = new Date();
      (this.events.push({
        description: r,
        severity: e,
        timestamp: o,
        childChannel: n?.kind === "channel" ? n : void 0,
        childSubchannel: n?.kind === "subchannel" ? n : void 0,
      }),
        this.events.length >= Aen * 2 && (this.events = this.events.slice(Aen)),
        (this.eventsLogged += 1));
    }
    getTraceMessage() {
      return {
        creation_timestamp: eT(this.creationTimestamp),
        num_events_logged: this.eventsLogged,
        events: this.events.map((e) => ({
          description: e.description,
          severity: e.severity,
          timestamp: eT(e.timestamp),
          channel_ref: e.childChannel ? PTt(e.childChannel) : null,
          subchannel_ref: e.childSubchannel ? UTt(e.childSubchannel) : null,
        })),
      };
    }
  };
  Q0.ChannelzTrace = LTt;
  var mUe = class {
    constructor() {
      ((this.channelChildren = new _q.OrderedMap()),
        (this.subchannelChildren = new _q.OrderedMap()),
        (this.socketChildren = new _q.OrderedMap()),
        (this.trackerMap = {
          channel: this.channelChildren,
          subchannel: this.subchannelChildren,
          socket: this.socketChildren,
        }));
    }
    refChild(e) {
      let r = this.trackerMap[e.kind],
        n = r.find(e.id);
      n.equals(r.end()) ? r.setElement(e.id, { ref: e, count: 1 }, n) : (n.pointer[1].count += 1);
    }
    unrefChild(e) {
      let r = this.trackerMap[e.kind],
        n = r.getElementByKey(e.id);
      n !== void 0 && ((n.count -= 1), n.count === 0 && r.eraseElementByKey(e.id));
    }
    getChildLists() {
      return { channels: this.channelChildren, subchannels: this.subchannelChildren, sockets: this.socketChildren };
    }
  };
  Q0.ChannelzChildrenTracker = mUe;
  var MTt = class extends mUe {
    refChild() {}
    unrefChild() {}
  };
  Q0.ChannelzChildrenTrackerStub = MTt;
  var dUe = class {
    constructor() {
      ((this.callsStarted = 0),
        (this.callsSucceeded = 0),
        (this.callsFailed = 0),
        (this.lastCallStartedTimestamp = null));
    }
    addCallStarted() {
      ((this.callsStarted += 1), (this.lastCallStartedTimestamp = new Date()));
    }
    addCallSucceeded() {
      this.callsSucceeded += 1;
    }
    addCallFailed() {
      this.callsFailed += 1;
    }
  };
  Q0.ChannelzCallTracker = dUe;
  var FTt = class extends dUe {
    addCallStarted() {}
    addCallSucceeded() {}
    addCallFailed() {}
  };
  Q0.ChannelzCallTrackerStub = FTt;
  var LR = {
      channel: new _q.OrderedMap(),
      subchannel: new _q.OrderedMap(),
      server: new _q.OrderedMap(),
      socket: new _q.OrderedMap(),
    },
    pUe = (t) => {
      let e = 1;
      function r() {
        return e++;
      }
      let n = LR[t];
      return (o, s, a) => {
        let u = r(),
          c = { id: u, name: o, kind: t };
        return (a && n.setElement(u, { ref: c, getInfo: s }), c);
      };
    };
  Q0.registerChannelzChannel = pUe("channel");
  Q0.registerChannelzSubchannel = pUe("subchannel");
  Q0.registerChannelzServer = pUe("server");
  Q0.registerChannelzSocket = pUe("socket");
  function m$o(t) {
    LR[t.kind].eraseElementByKey(t.id);
  }
  function d$o(t) {
    let e = Number.parseInt(t, 16);
    return [(e / 256) | 0, e % 256];
  }
  function yen(t) {
    if (t === "") return [];
    let e = t.split(":").map((n) => d$o(n));
    return [].concat(...e);
  }
  function f$o(t) {
    return (0, lUe.isIPv6)(t) && t.toLowerCase().startsWith("::ffff:") && (0, lUe.isIPv4)(t.substring(7));
  }
  function _en(t) {
    return Buffer.from(Uint8Array.from(t.split(".").map((e) => Number.parseInt(e))));
  }
  function p$o(t) {
    if ((0, lUe.isIPv4)(t)) return _en(t);
    if (f$o(t)) return _en(t.substring(7));
    if ((0, lUe.isIPv6)(t)) {
      let e,
        r,
        n = t.indexOf("::");
      n === -1 ? ((e = t), (r = "")) : ((e = t.substring(0, n)), (r = t.substring(n + 2)));
      let o = Buffer.from(yen(e)),
        s = Buffer.from(yen(r)),
        a = Buffer.alloc(16 - o.length - s.length, 0);
      return Buffer.concat([o, a, s]);
    } else return null;
  }
  function ven(t) {
    switch (t) {
      case _be.ConnectivityState.CONNECTING:
        return { state: "CONNECTING" };
      case _be.ConnectivityState.IDLE:
        return { state: "IDLE" };
      case _be.ConnectivityState.READY:
        return { state: "READY" };
      case _be.ConnectivityState.SHUTDOWN:
        return { state: "SHUTDOWN" };
      case _be.ConnectivityState.TRANSIENT_FAILURE:
        return { state: "TRANSIENT_FAILURE" };
      default:
        return { state: "UNKNOWN" };
    }
  }
  function eT(t) {
    if (!t) return null;
    let e = t.getTime();
    return { seconds: (e / 1e3) | 0, nanos: (e % 1e3) * 1e6 };
  }
  function Cen(t) {
    let e = t.getInfo(),
      r = [],
      n = [];
    return (
      e.children.channels.forEach((o) => {
        r.push(PTt(o[1].ref));
      }),
      e.children.subchannels.forEach((o) => {
        n.push(UTt(o[1].ref));
      }),
      {
        ref: PTt(t.ref),
        data: {
          target: e.target,
          state: ven(e.state),
          calls_started: e.callTracker.callsStarted,
          calls_succeeded: e.callTracker.callsSucceeded,
          calls_failed: e.callTracker.callsFailed,
          last_call_started_timestamp: eT(e.callTracker.lastCallStartedTimestamp),
          trace: e.trace.getTraceMessage(),
        },
        channel_ref: r,
        subchannel_ref: n,
      }
    );
  }
  function h$o(t, e) {
    let r = parseInt(t.request.channel_id, 10),
      n = LR.channel.getElementByKey(r);
    if (n === void 0) {
      e({ code: Ebe.Status.NOT_FOUND, details: "No channel data found for id " + r });
      return;
    }
    e(null, { channel: Cen(n) });
  }
  function g$o(t, e) {
    let r = parseInt(t.request.max_results, 10) || $Tt,
      n = [],
      o = parseInt(t.request.start_channel_id, 10),
      s = LR.channel,
      a;
    for (a = s.lowerBound(o); !a.equals(s.end()) && n.length < r; a = a.next()) n.push(Cen(a.pointer[1]));
    e(null, { channel: n, end: a.equals(s.end()) });
  }
  function Sen(t) {
    let e = t.getInfo(),
      r = [];
    return (
      e.listenerChildren.sockets.forEach((n) => {
        r.push(fUe(n[1].ref));
      }),
      {
        ref: l$o(t.ref),
        data: {
          calls_started: e.callTracker.callsStarted,
          calls_succeeded: e.callTracker.callsSucceeded,
          calls_failed: e.callTracker.callsFailed,
          last_call_started_timestamp: eT(e.callTracker.lastCallStartedTimestamp),
          trace: e.trace.getTraceMessage(),
        },
        listen_socket: r,
      }
    );
  }
  function b$o(t, e) {
    let r = parseInt(t.request.server_id, 10),
      o = LR.server.getElementByKey(r);
    if (o === void 0) {
      e({ code: Ebe.Status.NOT_FOUND, details: "No server data found for id " + r });
      return;
    }
    e(null, { server: Sen(o) });
  }
  function A$o(t, e) {
    let r = parseInt(t.request.max_results, 10) || $Tt,
      n = parseInt(t.request.start_server_id, 10),
      o = LR.server,
      s = [],
      a;
    for (a = o.lowerBound(n); !a.equals(o.end()) && s.length < r; a = a.next()) s.push(Sen(a.pointer[1]));
    e(null, { server: s, end: a.equals(o.end()) });
  }
  function y$o(t, e) {
    let r = parseInt(t.request.subchannel_id, 10),
      n = LR.subchannel.getElementByKey(r);
    if (n === void 0) {
      e({ code: Ebe.Status.NOT_FOUND, details: "No subchannel data found for id " + r });
      return;
    }
    let o = n.getInfo(),
      s = [];
    o.children.sockets.forEach((u) => {
      s.push(fUe(u[1].ref));
    });
    let a = {
      ref: UTt(n.ref),
      data: {
        target: o.target,
        state: ven(o.state),
        calls_started: o.callTracker.callsStarted,
        calls_succeeded: o.callTracker.callsSucceeded,
        calls_failed: o.callTracker.callsFailed,
        last_call_started_timestamp: eT(o.callTracker.lastCallStartedTimestamp),
        trace: o.trace.getTraceMessage(),
      },
      socket_ref: s,
    };
    e(null, { subchannel: a });
  }
  function Een(t) {
    var e;
    return (0, a$o.isTcpSubchannelAddress)(t)
      ? {
          address: "tcpip_address",
          tcpip_address: { ip_address: (e = p$o(t.host)) !== null && e !== void 0 ? e : void 0, port: t.port },
        }
      : { address: "uds_address", uds_address: { filename: t.path } };
  }
  function _$o(t, e) {
    var r, n, o, s, a;
    let u = parseInt(t.request.socket_id, 10),
      c = LR.socket.getElementByKey(u);
    if (c === void 0) {
      e({ code: Ebe.Status.NOT_FOUND, details: "No socket data found for id " + u });
      return;
    }
    let m = c.getInfo(),
      d = m.security
        ? {
            model: "tls",
            tls: {
              cipher_suite: m.security.cipherSuiteStandardName ? "standard_name" : "other_name",
              standard_name: (r = m.security.cipherSuiteStandardName) !== null && r !== void 0 ? r : void 0,
              other_name: (n = m.security.cipherSuiteOtherName) !== null && n !== void 0 ? n : void 0,
              local_certificate: (o = m.security.localCertificate) !== null && o !== void 0 ? o : void 0,
              remote_certificate: (s = m.security.remoteCertificate) !== null && s !== void 0 ? s : void 0,
            },
          }
        : null,
      f = {
        ref: fUe(c.ref),
        local: m.localAddress ? Een(m.localAddress) : null,
        remote: m.remoteAddress ? Een(m.remoteAddress) : null,
        remote_name: (a = m.remoteName) !== null && a !== void 0 ? a : void 0,
        security: d,
        data: {
          keep_alives_sent: m.keepAlivesSent,
          streams_started: m.streamsStarted,
          streams_succeeded: m.streamsSucceeded,
          streams_failed: m.streamsFailed,
          last_local_stream_created_timestamp: eT(m.lastLocalStreamCreatedTimestamp),
          last_remote_stream_created_timestamp: eT(m.lastRemoteStreamCreatedTimestamp),
          messages_received: m.messagesReceived,
          messages_sent: m.messagesSent,
          last_message_received_timestamp: eT(m.lastMessageReceivedTimestamp),
          last_message_sent_timestamp: eT(m.lastMessageSentTimestamp),
          local_flow_control_window: m.localFlowControlWindow ? { value: m.localFlowControlWindow } : null,
          remote_flow_control_window: m.remoteFlowControlWindow ? { value: m.remoteFlowControlWindow } : null,
        },
      };
    e(null, { socket: f });
  }
  function E$o(t, e) {
    let r = parseInt(t.request.server_id, 10),
      n = LR.server.getElementByKey(r);
    if (n === void 0) {
      e({ code: Ebe.Status.NOT_FOUND, details: "No server data found for id " + r });
      return;
    }
    let o = parseInt(t.request.start_socket_id, 10),
      s = parseInt(t.request.max_results, 10) || $Tt,
      u = n.getInfo().sessionChildren.sockets,
      c = [],
      m;
    for (m = u.lowerBound(o); !m.equals(u.end()) && c.length < s; m = m.next()) c.push(fUe(m.pointer[1].ref));
    e(null, { socket_ref: c, end: m.equals(u.end()) });
  }
  function wen() {
    return {
      GetChannel: h$o,
      GetTopChannels: g$o,
      GetServer: b$o,
      GetServers: A$o,
      GetSubchannel: y$o,
      GetSocket: _$o,
      GetServerSockets: E$o,
    };
  }
  var cUe = null;
  function xen() {
    if (cUe) return cUe;
    let t = NTt().loadSync,
      e = t("channelz.proto", {
        keepCase: !0,
        longs: String,
        enums: String,
        defaults: !0,
        oneofs: !0,
        includeDirs: [`${__dirname}/../../proto`],
      });
    return ((cUe = (0, c$o.loadPackageDefinition)(e).grpc.channelz.v1.Channelz.service), cUe);
  }
  function v$o() {
    (0, u$o.registerAdminService)(xen, wen);
  }
});