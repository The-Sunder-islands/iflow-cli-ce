/**
 * @module n0
 * @category unknown
 * @label unknown
 * @position 1476 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (n0) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var n0 = T((pvc, tYn) => {
  "use strict";
  tYn.exports = {
    kClose: Symbol("close"),
    kDestroy: Symbol("destroy"),
    kDispatch: Symbol("dispatch"),
    kUrl: Symbol("url"),
    kWriting: Symbol("writing"),
    kResuming: Symbol("resuming"),
    kQueue: Symbol("queue"),
    kConnect: Symbol("connect"),
    kConnecting: Symbol("connecting"),
    kKeepAliveDefaultTimeout: Symbol("default keep alive timeout"),
    kKeepAliveMaxTimeout: Symbol("max keep alive timeout"),
    kKeepAliveTimeoutThreshold: Symbol("keep alive timeout threshold"),
    kKeepAliveTimeoutValue: Symbol("keep alive timeout"),
    kKeepAlive: Symbol("keep alive"),
    kHeadersTimeout: Symbol("headers timeout"),
    kBodyTimeout: Symbol("body timeout"),
    kServerName: Symbol("server name"),
    kLocalAddress: Symbol("local address"),
    kHost: Symbol("host"),
    kNoRef: Symbol("no ref"),
    kBodyUsed: Symbol("used"),
    kBody: Symbol("abstracted request body"),
    kRunning: Symbol("running"),
    kBlocking: Symbol("blocking"),
    kPending: Symbol("pending"),
    kSize: Symbol("size"),
    kBusy: Symbol("busy"),
    kQueued: Symbol("queued"),
    kFree: Symbol("free"),
    kConnected: Symbol("connected"),
    kClosed: Symbol("closed"),
    kNeedDrain: Symbol("need drain"),
    kReset: Symbol("reset"),
    kDestroyed: Symbol.for("nodejs.stream.destroyed"),
    kResume: Symbol("resume"),
    kOnError: Symbol("on error"),
    kMaxHeadersSize: Symbol("max headers size"),
    kRunningIdx: Symbol("running index"),
    kPendingIdx: Symbol("pending index"),
    kError: Symbol("error"),
    kClients: Symbol("clients"),
    kClient: Symbol("client"),
    kParser: Symbol("parser"),
    kOnDestroyed: Symbol("destroy callbacks"),
    kPipelining: Symbol("pipelining"),
    kSocket: Symbol("socket"),
    kHostHeader: Symbol("host header"),
    kConnector: Symbol("connector"),
    kStrictContentLength: Symbol("strict content length"),
    kMaxRedirections: Symbol("maxRedirections"),
    kMaxRequests: Symbol("maxRequestsPerClient"),
    kProxy: Symbol("proxy agent options"),
    kCounter: Symbol("socket request counter"),
    kMaxResponseSize: Symbol("max response size"),
    kHTTP2Session: Symbol("http2Session"),
    kHTTP2SessionState: Symbol("http2Session state"),
    kRetryHandlerDefaultRetry: Symbol("retry agent default retry"),
    kConstruct: Symbol("constructable"),
    kListeners: Symbol("listeners"),
    kHTTPContext: Symbol("http context"),
    kMaxConcurrentStreams: Symbol("max concurrent streams"),
    kEnableConnectProtocol: Symbol("http2session connect protocol"),
    kRemoteSettings: Symbol("http2session remote settings"),
    kHTTP2Stream: Symbol("http2session client stream"),
    kNoProxyAgent: Symbol("no proxy agent"),
    kHttpProxyAgent: Symbol("http proxy agent"),
    kHttpsProxyAgent: Symbol("https proxy agent"),
  };
});
var $or = T((hvc, oYn) => {
  "use strict";
  var ele = 0,
    Por = 1e3,
    Bor = (Por >> 1) - 1,
    lU,
    Lor = Symbol("kFastTimer"),
    OO = [],
    Mor = -2,
    For = -1,
    nYn = 0,
    rYn = 1;
  function Uor() {
    ele += Bor;
    let t = 0,
      e = OO.length;
    for (; t < e; ) {
      let r = OO[t];
      (r._state === nYn
        ? ((r._idleStart = ele - Bor), (r._state = rYn))
        : r._state === rYn &&
          ele >= r._idleStart + r._idleTimeout &&
          ((r._state = For), (r._idleStart = -1), r._onTimeout(r._timerArg)),
        r._state === For ? ((r._state = Mor), --e !== 0 && (OO[t] = OO[e])) : ++t);
    }
    ((OO.length = e), OO.length !== 0 && iYn());
  }
  function iYn() {
    lU?.refresh ? lU.refresh() : (clearTimeout(lU), (lU = setTimeout(Uor, Bor)), lU?.unref());
  }
  var Cit = class {
    [Lor] = !0;
    _state = Mor;
    _idleTimeout = -1;
    _idleStart = -1;
    _onTimeout;
    _timerArg;
    constructor(e, r, n) {
      ((this._onTimeout = e), (this._idleTimeout = r), (this._timerArg = n), this.refresh());
    }
    refresh() {
      (this._state === Mor && OO.push(this), (!lU || OO.length === 1) && iYn(), (this._state = nYn));
    }
    clear() {
      ((this._state = For), (this._idleStart = -1));
    }
  };
  oYn.exports = {
    setTimeout(t, e, r) {
      return e <= Por ? setTimeout(t, e, r) : new Cit(t, e, r);
    },
    clearTimeout(t) {
      t[Lor] ? t.clear() : clearTimeout(t);
    },
    setFastTimeout(t, e, r) {
      return new Cit(t, e, r);
    },
    clearFastTimeout(t) {
      t.clear();
    },
    now() {
      return ele;
    },
    tick(t = 0) {
      ((ele += t - Por + 1), Uor(), Uor());
    },
    reset() {
      ((ele = 0), (OO.length = 0), clearTimeout(lU), (lU = null));
    },
    kFastTimer: Lor,
  };
});