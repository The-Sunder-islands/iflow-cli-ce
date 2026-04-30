/**
 * @module EU
 * @category utils/events
 * @label events
 * @position 1506 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (EU) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var EU = T((Wvc, eXn) => {
  "use strict";
  var LO = Ae("node:assert"),
    KJn = Ae("node:net"),
    Jve = Ae("node:http"),
    qz = ks(),
    { ClientStats: tla } = fsr(),
    { channels: dle } = mU(),
    rla = fKn(),
    nla = nle(),
    { InvalidArgumentError: y1, InformationalError: ila, ClientDestroyedError: ola } = da(),
    sla = ile(),
    {
      kUrl: xD,
      kServerName: _U,
      kClient: ala,
      kBusy: par,
      kConnect: ula,
      kResuming: Hz,
      kRunning: tCe,
      kPending: rCe,
      kSize: Xve,
      kQueue: _S,
      kConnected: cla,
      kConnecting: fle,
      kNeedDrain: AU,
      kKeepAliveDefaultTimeout: VJn,
      kHostHeader: lla,
      kPendingIdx: ES,
      kRunningIdx: MO,
      kError: mla,
      kPipelining: eot,
      kKeepAliveTimeoutValue: dla,
      kMaxHeadersSize: fla,
      kKeepAliveMaxTimeout: pla,
      kKeepAliveTimeoutThreshold: hla,
      kHeadersTimeout: gla,
      kBodyTimeout: bla,
      kStrictContentLength: Ala,
      kConnector: Zve,
      kMaxRequests: har,
      kCounter: yla,
      kClose: _la,
      kDestroy: Ela,
      kDispatch: vla,
      kLocalAddress: eCe,
      kMaxResponseSize: Cla,
      kOnError: Sla,
      kHTTPContext: of,
      kMaxConcurrentStreams: wla,
      kResume: yU,
    } = n0(),
    xla = MJn(),
    Tla = HJn(),
    bU = Symbol("kClosedResolve"),
    Dla =
      Jve && Jve.maxHeaderSize && Number.isInteger(Jve.maxHeaderSize) && Jve.maxHeaderSize > 0
        ? () => Jve.maxHeaderSize
        : () => {
            throw new y1("http module not available or http.maxHeaderSize invalid");
          },
    WJn = () => {};
  function JJn(t) {
    return t[eot] ?? t[of]?.defaultPipelining ?? 1;
  }
  var gar = class extends nla {
    constructor(
      e,
      {
        maxHeaderSize: r,
        headersTimeout: n,
        socketTimeout: o,
        requestTimeout: s,
        connectTimeout: a,
        bodyTimeout: u,
        idleTimeout: c,
        keepAlive: m,
        keepAliveTimeout: d,
        maxKeepAliveTimeout: f,
        keepAliveMaxTimeout: p,
        keepAliveTimeoutThreshold: h,
        socketPath: g,
        pipelining: b,
        tls: A,
        strictContentLength: y,
        maxCachedSessions: E,
        connect: v,
        maxRequestsPerClient: C,
        localAddress: x,
        maxResponseSize: k,
        autoSelectFamily: R,
        autoSelectFamilyAttemptTimeout: P,
        maxConcurrentStreams: D,
        allowH2: O,
        useH2c: N,
      } = {},
    ) {
      if (m !== void 0) throw new y1("unsupported keepAlive, use pipelining=0 instead");
      if (o !== void 0) throw new y1("unsupported socketTimeout, use headersTimeout & bodyTimeout instead");
      if (s !== void 0) throw new y1("unsupported requestTimeout, use headersTimeout & bodyTimeout instead");
      if (c !== void 0) throw new y1("unsupported idleTimeout, use keepAliveTimeout instead");
      if (f !== void 0) throw new y1("unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead");
      if (r != null) {
        if (!Number.isInteger(r) || r < 1) throw new y1("invalid maxHeaderSize");
      } else r = Dla();
      if (g != null && typeof g != "string") throw new y1("invalid socketPath");
      if (a != null && (!Number.isFinite(a) || a < 0)) throw new y1("invalid connectTimeout");
      if (d != null && (!Number.isFinite(d) || d <= 0)) throw new y1("invalid keepAliveTimeout");
      if (p != null && (!Number.isFinite(p) || p <= 0)) throw new y1("invalid keepAliveMaxTimeout");
      if (h != null && !Number.isFinite(h)) throw new y1("invalid keepAliveTimeoutThreshold");
      if (n != null && (!Number.isInteger(n) || n < 0))
        throw new y1("headersTimeout must be a positive integer or zero");
      if (u != null && (!Number.isInteger(u) || u < 0)) throw new y1("bodyTimeout must be a positive integer or zero");
      if (v != null && typeof v != "function" && typeof v != "object")
        throw new y1("connect must be a function or an object");
      if (C != null && (!Number.isInteger(C) || C < 0)) throw new y1("maxRequestsPerClient must be a positive number");
      if (x != null && (typeof x != "string" || KJn.isIP(x) === 0))
        throw new y1("localAddress must be valid string IP address");
      if (k != null && (!Number.isInteger(k) || k < -1)) throw new y1("maxResponseSize must be a positive number");
      if (P != null && (!Number.isInteger(P) || P < -1))
        throw new y1("autoSelectFamilyAttemptTimeout must be a positive number");
      if (O != null && typeof O != "boolean") throw new y1("allowH2 must be a valid boolean value");
      if (D != null && (typeof D != "number" || D < 1))
        throw new y1("maxConcurrentStreams must be a positive integer, greater than 0");
      if (N != null && typeof N != "boolean") throw new y1("useH2c must be a valid boolean value");
      (super(),
        typeof v != "function" &&
          (v = sla({
            ...A,
            maxCachedSessions: E,
            allowH2: O,
            useH2c: N,
            socketPath: g,
            timeout: a,
            ...(typeof R == "boolean" ? { autoSelectFamily: R, autoSelectFamilyAttemptTimeout: P } : void 0),
            ...v,
          })),
        (this[xD] = qz.parseOrigin(e)),
        (this[Zve] = v),
        (this[eot] = b ?? 1),
        (this[fla] = r),
        (this[VJn] = d ?? 4e3),
        (this[pla] = p ?? 6e5),
        (this[hla] = h ?? 2e3),
        (this[dla] = this[VJn]),
        (this[_U] = null),
        (this[eCe] = x ?? null),
        (this[Hz] = 0),
        (this[AU] = 0),
        (this[lla] = `host: ${this[xD].hostname}${this[xD].port ? `:${this[xD].port}` : ""}\r
`),
        (this[bla] = u ?? 3e5),
        (this[gla] = n ?? 3e5),
        (this[Ala] = y ?? !0),
        (this[har] = C),
        (this[bU] = null),
        (this[Cla] = k > -1 ? k : -1),
        (this[wla] = D ?? 100),
        (this[of] = null),
        (this[_S] = []),
        (this[MO] = 0),
        (this[ES] = 0),
        (this[yU] = (F) => bar(this, F)),
        (this[Sla] = (F) => XJn(this, F)));
    }
    get pipelining() {
      return this[eot];
    }
    set pipelining(e) {
      ((this[eot] = e), this[yU](!0));
    }
    get stats() {
      return new tla(this);
    }
    get [rCe]() {
      return this[_S].length - this[ES];
    }
    get [tCe]() {
      return this[ES] - this[MO];
    }
    get [Xve]() {
      return this[_S].length - this[MO];
    }
    get [cla]() {
      return !!this[of] && !this[fle] && !this[of].destroyed;
    }
    get [par]() {
      return !!(this[of]?.busy(null) || this[Xve] >= (JJn(this) || 1) || this[rCe] > 0);
    }
    [ula](e) {
      (ZJn(this), this.once("connect", e));
    }
    [vla](e, r) {
      let n = new rla(this[xD].origin, e, r);
      return (
        this[_S].push(n),
        this[Hz] ||
          (qz.bodyLength(n.body) == null && qz.isIterable(n.body)
            ? ((this[Hz] = 1), queueMicrotask(() => bar(this)))
            : this[yU](!0)),
        this[Hz] && this[AU] !== 2 && this[par] && (this[AU] = 2),
        this[AU] < 2
      );
    }
    [_la]() {
      return new Promise((e) => {
        this[Xve] ? (this[bU] = e) : e(null);
      });
    }
    [Ela](e) {
      return new Promise((r) => {
        let n = this[_S].splice(this[ES]);
        for (let s = 0; s < n.length; s++) {
          let a = n[s];
          qz.errorRequest(this, a, e);
        }
        let o = () => {
          (this[bU] && (this[bU](), (this[bU] = null)), r(null));
        };
        (this[of] ? (this[of].destroy(e, o), (this[of] = null)) : queueMicrotask(o), this[yU]());
      });
    }
  };
  function XJn(t, e) {
    if (t[tCe] === 0 && e.code !== "UND_ERR_INFO" && e.code !== "UND_ERR_SOCKET") {
      LO(t[ES] === t[MO]);
      let r = t[_S].splice(t[MO]);
      for (let n = 0; n < r.length; n++) {
        let o = r[n];
        qz.errorRequest(t, o, e);
      }
      LO(t[Xve] === 0);
    }
  }
  function ZJn(t) {
    (LO(!t[fle]), LO(!t[of]));
    let { host: e, hostname: r, protocol: n, port: o } = t[xD];
    if (r[0] === "[") {
      let s = r.indexOf("]");
      LO(s !== -1);
      let a = r.substring(1, s);
      (LO(KJn.isIPv6(a)), (r = a));
    }
    ((t[fle] = !0),
      dle.beforeConnect.hasSubscribers &&
        dle.beforeConnect.publish({
          connectParams: {
            host: e,
            hostname: r,
            protocol: n,
            port: o,
            version: t[of]?.version,
            servername: t[_U],
            localAddress: t[eCe],
          },
          connector: t[Zve],
        }),
      t[Zve]({ host: e, hostname: r, protocol: n, port: o, servername: t[_U], localAddress: t[eCe] }, (s, a) => {
        if (s) {
          (zJn(t, s, { host: e, hostname: r, protocol: n, port: o }), t[yU]());
          return;
        }
        if (t.destroyed) {
          (qz.destroy(a.on("error", WJn), new ola()), t[yU]());
          return;
        }
        LO(a);
        try {
          t[of] = a.alpnProtocol === "h2" ? Tla(t, a) : xla(t, a);
        } catch (u) {
          (a.destroy().on("error", WJn), zJn(t, u, { host: e, hostname: r, protocol: n, port: o }), t[yU]());
          return;
        }
        ((t[fle] = !1),
          (a[yla] = 0),
          (a[har] = t[har]),
          (a[ala] = t),
          (a[mla] = null),
          dle.connected.hasSubscribers &&
            dle.connected.publish({
              connectParams: {
                host: e,
                hostname: r,
                protocol: n,
                port: o,
                version: t[of]?.version,
                servername: t[_U],
                localAddress: t[eCe],
              },
              connector: t[Zve],
              socket: a,
            }),
          t.emit("connect", t[xD], [t]),
          t[yU]());
      }));
  }
  function zJn(t, e, { host: r, hostname: n, protocol: o, port: s }) {
    if (!t.destroyed) {
      if (
        ((t[fle] = !1),
        dle.connectError.hasSubscribers &&
          dle.connectError.publish({
            connectParams: {
              host: r,
              hostname: n,
              protocol: o,
              port: s,
              version: t[of]?.version,
              servername: t[_U],
              localAddress: t[eCe],
            },
            connector: t[Zve],
            error: e,
          }),
        e.code === "ERR_TLS_CERT_ALTNAME_INVALID")
      )
        for (LO(t[tCe] === 0); t[rCe] > 0 && t[_S][t[ES]].servername === t[_U]; ) {
          let a = t[_S][t[ES]++];
          qz.errorRequest(t, a, e);
        }
      else XJn(t, e);
      t.emit("connectionError", t[xD], [t], e);
    }
  }
  function YJn(t) {
    ((t[AU] = 0), t.emit("drain", t[xD], [t]));
  }
  function bar(t, e) {
    t[Hz] !== 2 &&
      ((t[Hz] = 2), Ila(t, e), (t[Hz] = 0), t[MO] > 256 && (t[_S].splice(0, t[MO]), (t[ES] -= t[MO]), (t[MO] = 0)));
  }
  function Ila(t, e) {
    for (;;) {
      if (t.destroyed) {
        LO(t[rCe] === 0);
        return;
      }
      if (t[bU] && !t[Xve]) {
        (t[bU](), (t[bU] = null));
        return;
      }
      if ((t[of] && t[of].resume(), t[par])) t[AU] = 2;
      else if (t[AU] === 2) {
        e ? ((t[AU] = 1), queueMicrotask(() => YJn(t))) : YJn(t);
        continue;
      }
      if (t[rCe] === 0 || t[tCe] >= (JJn(t) || 1)) return;
      let r = t[_S][t[ES]];
      if (t[xD].protocol === "https:" && t[_U] !== r.servername) {
        if (t[tCe] > 0) return;
        ((t[_U] = r.servername),
          t[of]?.destroy(new ila("servername changed"), () => {
            ((t[of] = null), bar(t));
          }));
      }
      if (t[fle]) return;
      if (!t[of]) {
        ZJn(t);
        return;
      }
      if (t[of].destroyed || t[of].busy(r)) return;
      !r.aborted && t[of].write(r) ? t[ES]++ : t[_S].splice(t[ES], 1);
    }
  }
  eXn.exports = gar;
});