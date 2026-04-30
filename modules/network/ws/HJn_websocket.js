/**
 * @module HJn
 * @category network/ws
 * @label websocket
 * @position 1505 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HJn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HJn = T((Vvc, qJn) => {
  "use strict";
  var KE = Ae("node:assert"),
    { pipeline: xca } = Ae("node:stream"),
    Qa = ks(),
    {
      RequestContentLengthMismatchError: lar,
      RequestAbortedError: Tca,
      SocketError: zve,
      InformationalError: Gz,
      InvalidArgumentError: Dca,
    } = da(),
    {
      kUrl: Wve,
      kReset: Zit,
      kClient: yS,
      kRunning: Yve,
      kPending: Ica,
      kQueue: gU,
      kPendingIdx: dar,
      kRunningIdx: AS,
      kError: YE,
      kSocket: A1,
      kStrictContentLength: Rca,
      kOnError: Kve,
      kMaxConcurrentStreams: Jit,
      kHTTP2Session: SD,
      kResume: wD,
      kSize: kca,
      kHTTPContext: far,
      kClosed: mar,
      kBodyTimeout: Oca,
      kEnableConnectProtocol: Hve,
      kRemoteSettings: Vve,
      kHTTP2Stream: Kit,
    } = n0(),
    { channels: FJn } = mU(),
    t9 = Symbol("open streams"),
    UJn,
    Xit;
  try {
    Xit = Ae("node:http2");
  } catch {
    Xit = { constants: {} };
  }
  var {
    constants: {
      HTTP2_HEADER_AUTHORITY: Nca,
      HTTP2_HEADER_METHOD: $Jn,
      HTTP2_HEADER_PATH: jJn,
      HTTP2_HEADER_SCHEME: aar,
      HTTP2_HEADER_CONTENT_LENGTH: Pca,
      HTTP2_HEADER_EXPECT: Bca,
      HTTP2_HEADER_STATUS: uar,
      HTTP2_HEADER_PROTOCOL: Lca,
      NGHTTP2_REFUSED_STREAM: Mca,
      NGHTTP2_CANCEL: Fca,
    },
  } = Xit;
  function car(t) {
    let e = [];
    for (let [r, n] of Object.entries(t))
      if (Array.isArray(n)) for (let o of n) e.push(Buffer.from(r), Buffer.from(o));
      else e.push(Buffer.from(r), Buffer.from(n));
    return e;
  }
  function Uca(t, e) {
    t[A1] = e;
    let r = Xit.connect(t[Wve], {
      createConnection: () => e,
      peerMaxConcurrentStreams: t[Jit],
      settings: { enablePush: !1 },
    });
    return (
      (r[t9] = 0),
      (r[yS] = t),
      (r[A1] = e),
      (r[SD] = null),
      (r[Hve] = !1),
      (r[Vve] = !1),
      Qa.addListener(r, "error", Qca),
      Qa.addListener(r, "frameError", Gca),
      Qa.addListener(r, "end", qca),
      Qa.addListener(r, "goaway", Hca),
      Qa.addListener(r, "close", Vca),
      Qa.addListener(r, "remoteSettings", jca),
      r.unref(),
      (t[SD] = r),
      (e[SD] = r),
      Qa.addListener(e, "error", zca),
      Qa.addListener(e, "end", Yca),
      Qa.addListener(e, "close", Wca),
      (e[mar] = !1),
      e.on("close", Kca),
      {
        version: "h2",
        defaultPipelining: 1 / 0,
        write(n) {
          return Xca(t, n);
        },
        resume() {
          $ca(t);
        },
        destroy(n, o) {
          e[mar] ? queueMicrotask(o) : e.destroy(n).on("close", o);
        },
        get destroyed() {
          return e.destroyed;
        },
        busy(n) {
          if (n != null)
            if (t[Yve] > 0) {
              if (
                n.idempotent === !1 ||
                ((n.upgrade === "websocket" || n.method === "CONNECT") && r[Vve] === !1) ||
                (Qa.bodyLength(n.body) !== 0 &&
                  (Qa.isStream(n.body) || Qa.isAsyncIterable(n.body) || Qa.isFormDataLike(n.body)))
              )
                return !0;
            } else return (n.upgrade === "websocket" || n.method === "CONNECT") && r[Vve] === !1;
          return !1;
        },
      }
    );
  }
  function $ca(t) {
    let e = t[A1];
    e?.destroyed === !1 && (t[kca] === 0 || t[Jit] === 0 ? (e.unref(), t[SD].unref()) : (e.ref(), t[SD].ref()));
  }
  function jca(t) {
    if (
      ((this[yS][Jit] = t.maxConcurrentStreams ?? this[yS][Jit]),
      this[Vve] === !0 && this[Hve] === !0 && t.enableConnectProtocol === !1)
    ) {
      let e = new Gz("HTTP/2: Server disabled extended CONNECT protocol against RFC-8441");
      ((this[A1][YE] = e), this[yS][Kve](e));
      return;
    }
    ((this[Hve] = t.enableConnectProtocol ?? this[Hve]), (this[Vve] = !0), this[yS][wD]());
  }
  function Qca(t) {
    (KE(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), (this[A1][YE] = t), this[yS][Kve](t));
  }
  function Gca(t, e, r) {
    if (r === 0) {
      let n = new Gz(`HTTP/2: "frameError" received - type ${t}, code ${e}`);
      ((this[A1][YE] = n), this[yS][Kve](n));
    }
  }
  function qca() {
    let t = new zve("other side closed", Qa.getSocketInfo(this[A1]));
    (this.destroy(t), Qa.destroy(this[A1], t));
  }
  function Hca(t) {
    let e = this[YE] || new zve(`HTTP/2: "GOAWAY" frame received with code ${t}`, Qa.getSocketInfo(this[A1])),
      r = this[yS];
    if (
      ((r[A1] = null), (r[far] = null), this.close(), (this[SD] = null), Qa.destroy(this[A1], e), r[AS] < r[gU].length)
    ) {
      let n = r[gU][r[AS]];
      ((r[gU][r[AS]++] = null), Qa.errorRequest(r, n, e), (r[dar] = r[AS]));
    }
    (KE(r[Yve] === 0), r.emit("disconnect", r[Wve], [r], e), r.emit("connectionError", r[Wve], [r], e), r[wD]());
  }
  function Vca() {
    let { [yS]: t } = this,
      { [A1]: e } = t,
      r = this[A1][YE] || this[YE] || new zve("closed", Qa.getSocketInfo(e));
    if (((t[A1] = null), (t[far] = null), t.destroyed)) {
      KE(t[Ica] === 0);
      let n = t[gU].splice(t[AS]);
      for (let o = 0; o < n.length; o++) {
        let s = n[o];
        Qa.errorRequest(t, s, r);
      }
    }
  }
  function Wca() {
    let t = this[YE] || new zve("closed", Qa.getSocketInfo(this)),
      e = this[SD][yS];
    ((e[A1] = null),
      (e[far] = null),
      this[SD] !== null && this[SD].destroy(t),
      (e[dar] = e[AS]),
      KE(e[Yve] === 0),
      e.emit("disconnect", e[Wve], [e], t),
      e[wD]());
  }
  function zca(t) {
    (KE(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID"), (this[YE] = t), this[yS][Kve](t));
  }
  function Yca() {
    Qa.destroy(this, new zve("other side closed", Qa.getSocketInfo(this)));
  }
  function Kca() {
    this[mar] = !0;
  }
  function Jca(t) {
    return t !== "GET" && t !== "HEAD" && t !== "OPTIONS" && t !== "TRACE" && t !== "CONNECT";
  }
  function Xca(t, e) {
    let r = e.bodyTimeout ?? t[Oca],
      n = t[SD],
      { method: o, path: s, host: a, upgrade: u, expectContinue: c, signal: m, protocol: d, headers: f } = e,
      { body: p } = e;
    if (u != null && u !== "websocket")
      return (Qa.errorRequest(t, e, new Dca(`Custom upgrade "${u}" not supported over HTTP/2`)), !1);
    let h = {};
    for (let k = 0; k < f.length; k += 2) {
      let R = f[k + 0],
        P = f[k + 1];
      if (R === "cookie") {
        h[R] != null ? (h[R] = Array.isArray(h[R]) ? (h[R].push(P), h[R]) : [h[R], P]) : (h[R] = P);
        continue;
      }
      if (Array.isArray(P)) for (let D = 0; D < P.length; D++) h[R] ? (h[R] += `, ${P[D]}`) : (h[R] = P[D]);
      else h[R] ? (h[R] += `, ${P}`) : (h[R] = P);
    }
    let g = null,
      { hostname: b, port: A } = t[Wve];
    ((h[Nca] = a || `${b}${A ? `:${A}` : ""}`), (h[$Jn] = o));
    let y = (k) => {
      e.aborted ||
        e.completed ||
        ((k = k || new Tca()),
        Qa.errorRequest(t, e, k),
        g != null && (g.removeAllListeners("data"), g.close(), t[Kve](k), t[wD]()),
        Qa.destroy(p, k));
    };
    try {
      e.onConnect(y);
    } catch (k) {
      Qa.errorRequest(t, e, k);
    }
    if (e.aborted) return !1;
    if (u || o === "CONNECT")
      return (
        n.ref(),
        u === "websocket"
          ? n[Hve] === !1
            ? (Qa.errorRequest(t, e, new Gz("HTTP/2: Extended CONNECT protocol not supported by server")),
              n.unref(),
              !1)
            : ((h[$Jn] = "CONNECT"),
              (h[Lca] = "websocket"),
              (h[jJn] = s),
              d === "ws:" || d === "wss:"
                ? (h[aar] = d === "ws:" ? "http" : "https")
                : (h[aar] = d === "http:" ? "http" : "https"),
              (g = n.request(h, { endStream: !1, signal: m })),
              (g[Kit] = !0),
              g.once("response", (k, R) => {
                let { [uar]: P, ...D } = k;
                (e.onUpgrade(P, car(D), g), ++n[t9], (t[gU][t[AS]++] = null));
              }),
              g.on("error", () => {
                (g.rstCode === Mca || g.rstCode === Fca) &&
                  y(new Gz(`HTTP/2: "stream error" received - code ${g.rstCode}`));
              }),
              g.once("close", () => {
                ((n[t9] -= 1), n[t9] === 0 && n.unref());
              }),
              g.setTimeout(r),
              !0)
          : ((g = n.request(h, { endStream: !1, signal: m })),
            (g[Kit] = !0),
            g.on("response", (k) => {
              let { [uar]: R, ...P } = k;
              (e.onUpgrade(R, car(P), g), ++n[t9], (t[gU][t[AS]++] = null));
            }),
            g.once("close", () => {
              ((n[t9] -= 1), n[t9] === 0 && n.unref());
            }),
            g.setTimeout(r),
            !0)
      );
    ((h[jJn] = s), (h[aar] = d === "http:" ? "http" : "https"));
    let E = o === "PUT" || o === "POST" || o === "PATCH";
    p && typeof p.read == "function" && p.read(0);
    let v = Qa.bodyLength(p);
    if (Qa.isFormDataLike(p)) {
      UJn ??= ule().extractBody;
      let [k, R] = UJn(p);
      ((h["content-type"] = R), (p = k.stream), (v = k.length));
    }
    if (
      (v == null && (v = e.contentLength),
      E || (v = null),
      Jca(o) && v > 0 && e.contentLength != null && e.contentLength !== v)
    ) {
      if (t[Rca]) return (Qa.errorRequest(t, e, new lar()), !1);
      process.emitWarning(new lar());
    }
    if (
      (v != null && (KE(p || v === 0, "no body must not have content length"), (h[Pca] = `${v}`)),
      n.ref(),
      FJn.sendHeaders.hasSubscribers)
    ) {
      let k = "";
      for (let R in h)
        k += `${R}: ${h[R]}\r
`;
      FJn.sendHeaders.publish({ request: e, headers: k, socket: n[A1] });
    }
    let C = o === "GET" || o === "HEAD" || p === null;
    return (
      c
        ? ((h[Bca] = "100-continue"),
          (g = n.request(h, { endStream: C, signal: m })),
          (g[Kit] = !0),
          g.once("continue", x))
        : ((g = n.request(h, { endStream: C, signal: m })), (g[Kit] = !0), x()),
      ++n[t9],
      g.setTimeout(r),
      g.once("response", (k) => {
        let { [uar]: R, ...P } = k;
        if ((e.onResponseStarted(), e.aborted)) {
          g.removeAllListeners("data");
          return;
        }
        e.onHeaders(Number(R), car(P), g.resume.bind(g), "") === !1 && g.pause();
      }),
      g.on("data", (k) => {
        e.onData(k) === !1 && g.pause();
      }),
      g.once("end", (k) => {
        (g.removeAllListeners("data"),
          g.state?.state == null || g.state.state < 6
            ? (!e.aborted && !e.completed && e.onComplete({}), (t[gU][t[AS]++] = null), t[wD]())
            : (--n[t9],
              n[t9] === 0 && n.unref(),
              y(k ?? new Gz("HTTP/2: stream half-closed (remote)")),
              (t[gU][t[AS]++] = null),
              (t[dar] = t[AS]),
              t[wD]()));
      }),
      g.once("close", () => {
        (g.removeAllListeners("data"), (n[t9] -= 1), n[t9] === 0 && n.unref());
      }),
      g.once("error", function (k) {
        (g.removeAllListeners("data"), y(k));
      }),
      g.once("frameError", (k, R) => {
        (g.removeAllListeners("data"), y(new Gz(`HTTP/2: "frameError" received - type ${k}, code ${R}`)));
      }),
      g.on("aborted", () => {
        g.removeAllListeners("data");
      }),
      g.on("timeout", () => {
        let k = new Gz(`HTTP/2: "stream timeout after ${r}"`);
        (g.removeAllListeners("data"), (n[t9] -= 1), n[t9] === 0 && n.unref(), y(k));
      }),
      g.once("trailers", (k) => {
        e.aborted || e.completed || e.onComplete(k);
      }),
      !0
    );
    function x() {
      !p || v === 0
        ? QJn(y, g, null, t, e, t[A1], v, E)
        : Qa.isBuffer(p)
          ? QJn(y, g, p, t, e, t[A1], v, E)
          : Qa.isBlobLike(p)
            ? typeof p.stream == "function"
              ? GJn(y, g, p.stream(), t, e, t[A1], v, E)
              : ela(y, g, p, t, e, t[A1], v, E)
            : Qa.isStream(p)
              ? Zca(y, t[A1], E, g, p, t, e, v)
              : Qa.isIterable(p)
                ? GJn(y, g, p, t, e, t[A1], v, E)
                : KE(!1);
    }
  }
  function QJn(t, e, r, n, o, s, a, u) {
    try {
      (r != null &&
        Qa.isBuffer(r) &&
        (KE(a === r.byteLength, "buffer body must have content length"),
        e.cork(),
        e.write(r),
        e.uncork(),
        e.end(),
        o.onBodySent(r)),
        u || (s[Zit] = !0),
        o.onRequestSent(),
        n[wD]());
    } catch (c) {
      t(c);
    }
  }
  function Zca(t, e, r, n, o, s, a, u) {
    KE(u !== 0 || s[Yve] === 0, "stream body cannot be pipelined");
    let c = xca(o, n, (d) => {
      d ? (Qa.destroy(c, d), t(d)) : (Qa.removeAllListeners(c), a.onRequestSent(), r || (e[Zit] = !0), s[wD]());
    });
    Qa.addListener(c, "data", m);
    function m(d) {
      a.onBodySent(d);
    }
  }
  async function ela(t, e, r, n, o, s, a, u) {
    KE(a === r.size, "blob body must have content length");
    try {
      if (a != null && a !== r.size) throw new lar();
      let c = Buffer.from(await r.arrayBuffer());
      (e.cork(), e.write(c), e.uncork(), e.end(), o.onBodySent(c), o.onRequestSent(), u || (s[Zit] = !0), n[wD]());
    } catch (c) {
      t(c);
    }
  }
  async function GJn(t, e, r, n, o, s, a, u) {
    KE(a !== 0 || n[Yve] === 0, "iterator body cannot be pipelined");
    let c = null;
    function m() {
      if (c) {
        let f = c;
        ((c = null), f());
      }
    }
    let d = () =>
      new Promise((f, p) => {
        (KE(c === null), s[YE] ? p(s[YE]) : (c = f));
      });
    e.on("close", m).on("drain", m);
    try {
      for await (let f of r) {
        if (s[YE]) throw s[YE];
        let p = e.write(f);
        (o.onBodySent(f), p || (await d()));
      }
      (e.end(), o.onRequestSent(), u || (s[Zit] = !0), n[wD]());
    } catch (f) {
      t(f);
    } finally {
      e.off("close", m).off("drain", m);
    }
  }
  qJn.exports = Uca;
});