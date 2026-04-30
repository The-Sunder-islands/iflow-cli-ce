/**
 * @module MJn
 * @category network/http
 * @label undici
 * @position 1504 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (MJn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var MJn = T((Hvc, LJn) => {
  "use strict";
  var Mo = Ae("node:assert"),
    Vo = ks(),
    { channels: TJn } = mU(),
    Zsr = $or(),
    {
      RequestContentLengthMismatchError: Qz,
      ResponseContentLengthMismatchError: Wua,
      RequestAbortedError: NJn,
      HeadersTimeoutError: zua,
      HeadersOverflowError: Yua,
      SocketError: Gve,
      InformationalError: cle,
      BodyTimeoutError: Kua,
      HTTPParserError: Jua,
      ResponseExceededMaxSizeError: Xua,
    } = da(),
    {
      kUrl: PJn,
      kReset: e9,
      kClient: sar,
      kParser: b1,
      kBlocking: qve,
      kRunning: mA,
      kPending: Zua,
      kSize: DJn,
      kWriting: hU,
      kQueue: bS,
      kNoRef: jve,
      kKeepAliveDefaultTimeout: eca,
      kHostHeader: tca,
      kPendingIdx: rca,
      kRunningIdx: WE,
      kError: zE,
      kPipelining: Vit,
      kSocket: lle,
      kKeepAliveTimeoutValue: zit,
      kMaxHeadersSize: nca,
      kKeepAliveMaxTimeout: ica,
      kKeepAliveTimeoutThreshold: oca,
      kHeadersTimeout: sca,
      kBodyTimeout: aca,
      kStrictContentLength: rar,
      kMaxRequests: IJn,
      kCounter: uca,
      kMaxResponseSize: cca,
      kOnError: lca,
      kResume: pU,
      kHTTPContext: BJn,
      kClosed: nar,
    } = n0(),
    ED = wKn(),
    mca = Buffer.alloc(0),
    qit = Buffer[Symbol.species],
    dca = Vo.removeAllListeners,
    ear;
  function fca() {
    let t = process.env.JEST_WORKER_ID ? Dsr() : void 0,
      e,
      r = process.arch !== "ppc64";
    if ((process.env.UNDICI_NO_WASM_SIMD === "1" ? (r = !0) : process.env.UNDICI_NO_WASM_SIMD === "0" && (r = !1), r))
      try {
        e = new WebAssembly.Module(DKn());
      } catch {}
    return (
      e || (e = new WebAssembly.Module(t || Dsr())),
      new WebAssembly.Instance(e, {
        env: {
          wasm_on_url: (n, o, s) => 0,
          wasm_on_status: (n, o, s) => {
            Mo(qp.ptr === n);
            let a = o - CD + vD.byteOffset;
            return qp.onStatus(new qit(vD.buffer, a, s));
          },
          wasm_on_message_begin: (n) => (Mo(qp.ptr === n), qp.onMessageBegin()),
          wasm_on_header_field: (n, o, s) => {
            Mo(qp.ptr === n);
            let a = o - CD + vD.byteOffset;
            return qp.onHeaderField(new qit(vD.buffer, a, s));
          },
          wasm_on_header_value: (n, o, s) => {
            Mo(qp.ptr === n);
            let a = o - CD + vD.byteOffset;
            return qp.onHeaderValue(new qit(vD.buffer, a, s));
          },
          wasm_on_headers_complete: (n, o, s, a) => (Mo(qp.ptr === n), qp.onHeadersComplete(o, s === 1, a === 1)),
          wasm_on_body: (n, o, s) => {
            Mo(qp.ptr === n);
            let a = o - CD + vD.byteOffset;
            return qp.onBody(new qit(vD.buffer, a, s));
          },
          wasm_on_message_complete: (n) => (Mo(qp.ptr === n), qp.onMessageComplete()),
        },
      })
    );
  }
  var tar = null,
    qp = null,
    vD = null,
    Hit = 0,
    CD = null,
    pca = 0,
    Qve = 1,
    mle = 2 | Qve,
    Wit = 4 | Qve,
    iar = 8 | pca,
    oar = class {
      constructor(e, r, { exports: n }) {
        ((this.llhttp = n),
          (this.ptr = this.llhttp.llhttp_alloc(ED.TYPE.RESPONSE)),
          (this.client = e),
          (this.socket = r),
          (this.timeout = null),
          (this.timeoutValue = null),
          (this.timeoutType = null),
          (this.statusCode = 0),
          (this.statusText = ""),
          (this.upgrade = !1),
          (this.headers = []),
          (this.headersSize = 0),
          (this.headersMaxSize = e[nca]),
          (this.shouldKeepAlive = !1),
          (this.paused = !1),
          (this.resume = this.resume.bind(this)),
          (this.bytesRead = 0),
          (this.keepAlive = ""),
          (this.contentLength = ""),
          (this.connection = ""),
          (this.maxResponseSize = e[cca]));
      }
      setTimeout(e, r) {
        (e !== this.timeoutValue || (r & Qve) ^ (this.timeoutType & Qve)
          ? (this.timeout && (Zsr.clearTimeout(this.timeout), (this.timeout = null)),
            e &&
              (r & Qve
                ? (this.timeout = Zsr.setFastTimeout(RJn, e, new WeakRef(this)))
                : ((this.timeout = setTimeout(RJn, e, new WeakRef(this))), this.timeout?.unref())),
            (this.timeoutValue = e))
          : this.timeout && this.timeout.refresh && this.timeout.refresh(),
          (this.timeoutType = r));
      }
      resume() {
        this.socket.destroyed ||
          !this.paused ||
          (Mo(this.ptr != null),
          Mo(qp === null),
          this.llhttp.llhttp_resume(this.ptr),
          Mo(this.timeoutType === Wit),
          this.timeout && this.timeout.refresh && this.timeout.refresh(),
          (this.paused = !1),
          this.execute(this.socket.read() || mca),
          this.readMore());
      }
      readMore() {
        for (; !this.paused && this.ptr; ) {
          let e = this.socket.read();
          if (e === null) break;
          this.execute(e);
        }
      }
      execute(e) {
        (Mo(qp === null), Mo(this.ptr != null), Mo(!this.paused));
        let { socket: r, llhttp: n } = this;
        (e.length > Hit && (CD && n.free(CD), (Hit = Math.ceil(e.length / 4096) * 4096), (CD = n.malloc(Hit))),
          new Uint8Array(n.memory.buffer, CD, Hit).set(e));
        try {
          let o;
          try {
            ((vD = e), (qp = this), (o = n.llhttp_execute(this.ptr, CD, e.length)));
          } finally {
            ((qp = null), (vD = null));
          }
          if (o !== ED.ERROR.OK) {
            let s = e.subarray(n.llhttp_get_error_pos(this.ptr) - CD);
            if (o === ED.ERROR.PAUSED_UPGRADE) this.onUpgrade(s);
            else if (o === ED.ERROR.PAUSED) ((this.paused = !0), r.unshift(s));
            else {
              let a = n.llhttp_get_error_reason(this.ptr),
                u = "";
              if (a) {
                let c = new Uint8Array(n.memory.buffer, a).indexOf(0);
                u =
                  "Response does not match the HTTP/1.1 protocol (" +
                  Buffer.from(n.memory.buffer, a, c).toString() +
                  ")";
              }
              throw new Jua(u, ED.ERROR[o], s);
            }
          }
        } catch (o) {
          Vo.destroy(r, o);
        }
      }
      destroy() {
        (Mo(qp === null),
          Mo(this.ptr != null),
          this.llhttp.llhttp_free(this.ptr),
          (this.ptr = null),
          this.timeout && Zsr.clearTimeout(this.timeout),
          (this.timeout = null),
          (this.timeoutValue = null),
          (this.timeoutType = null),
          (this.paused = !1));
      }
      onStatus(e) {
        return ((this.statusText = e.toString()), 0);
      }
      onMessageBegin() {
        let { socket: e, client: r } = this;
        if (e.destroyed) return -1;
        let n = r[bS][r[WE]];
        return n ? (n.onResponseStarted(), 0) : -1;
      }
      onHeaderField(e) {
        let r = this.headers.length;
        return (
          (r & 1) === 0 ? this.headers.push(e) : (this.headers[r - 1] = Buffer.concat([this.headers[r - 1], e])),
          this.trackHeader(e.length),
          0
        );
      }
      onHeaderValue(e) {
        let r = this.headers.length;
        (r & 1) === 1
          ? (this.headers.push(e), (r += 1))
          : (this.headers[r - 1] = Buffer.concat([this.headers[r - 1], e]));
        let n = this.headers[r - 2];
        if (n.length === 10) {
          let o = Vo.bufferToLowerCasedHeaderName(n);
          o === "keep-alive"
            ? (this.keepAlive += e.toString())
            : o === "connection" && (this.connection += e.toString());
        } else
          n.length === 14 &&
            Vo.bufferToLowerCasedHeaderName(n) === "content-length" &&
            (this.contentLength += e.toString());
        return (this.trackHeader(e.length), 0);
      }
      trackHeader(e) {
        ((this.headersSize += e), this.headersSize >= this.headersMaxSize && Vo.destroy(this.socket, new Yua()));
      }
      onUpgrade(e) {
        let { upgrade: r, client: n, socket: o, headers: s, statusCode: a } = this;
        (Mo(r), Mo(n[lle] === o), Mo(!o.destroyed), Mo(!this.paused), Mo((s.length & 1) === 0));
        let u = n[bS][n[WE]];
        (Mo(u),
          Mo(u.upgrade || u.method === "CONNECT"),
          (this.statusCode = 0),
          (this.statusText = ""),
          (this.shouldKeepAlive = !1),
          (this.headers = []),
          (this.headersSize = 0),
          o.unshift(e),
          o[b1].destroy(),
          (o[b1] = null),
          (o[sar] = null),
          (o[zE] = null),
          dca(o),
          (n[lle] = null),
          (n[BJn] = null),
          (n[bS][n[WE]++] = null),
          n.emit("disconnect", n[PJn], [n], new cle("upgrade")));
        try {
          u.onUpgrade(a, s, o);
        } catch (c) {
          Vo.destroy(o, c);
        }
        n[pU]();
      }
      onHeadersComplete(e, r, n) {
        let { client: o, socket: s, headers: a, statusText: u } = this;
        if (s.destroyed) return -1;
        let c = o[bS][o[WE]];
        if (!c) return -1;
        if ((Mo(!this.upgrade), Mo(this.statusCode < 200), e === 100))
          return (Vo.destroy(s, new Gve("bad response", Vo.getSocketInfo(s))), -1);
        if (r && !c.upgrade) return (Vo.destroy(s, new Gve("bad upgrade", Vo.getSocketInfo(s))), -1);
        if (
          (Mo(this.timeoutType === mle),
          (this.statusCode = e),
          (this.shouldKeepAlive =
            n || (c.method === "HEAD" && !s[e9] && this.connection.toLowerCase() === "keep-alive")),
          this.statusCode >= 200)
        ) {
          let d = c.bodyTimeout != null ? c.bodyTimeout : o[aca];
          this.setTimeout(d, Wit);
        } else this.timeout && this.timeout.refresh && this.timeout.refresh();
        if (c.method === "CONNECT") return (Mo(o[mA] === 1), (this.upgrade = !0), 2);
        if (r) return (Mo(o[mA] === 1), (this.upgrade = !0), 2);
        if (
          (Mo((this.headers.length & 1) === 0),
          (this.headers = []),
          (this.headersSize = 0),
          this.shouldKeepAlive && o[Vit])
        ) {
          let d = this.keepAlive ? Vo.parseKeepAliveTimeout(this.keepAlive) : null;
          if (d != null) {
            let f = Math.min(d - o[oca], o[ica]);
            f <= 0 ? (s[e9] = !0) : (o[zit] = f);
          } else o[zit] = o[eca];
        } else s[e9] = !0;
        let m = c.onHeaders(e, a, this.resume, u) === !1;
        return c.aborted
          ? -1
          : c.method === "HEAD" || e < 200
            ? 1
            : (s[qve] && ((s[qve] = !1), o[pU]()), m ? ED.ERROR.PAUSED : 0);
      }
      onBody(e) {
        let { client: r, socket: n, statusCode: o, maxResponseSize: s } = this;
        if (n.destroyed) return -1;
        let a = r[bS][r[WE]];
        return (
          Mo(a),
          Mo(this.timeoutType === Wit),
          this.timeout && this.timeout.refresh && this.timeout.refresh(),
          Mo(o >= 200),
          s > -1 && this.bytesRead + e.length > s
            ? (Vo.destroy(n, new Xua()), -1)
            : ((this.bytesRead += e.length), a.onData(e) === !1 ? ED.ERROR.PAUSED : 0)
        );
      }
      onMessageComplete() {
        let {
          client: e,
          socket: r,
          statusCode: n,
          upgrade: o,
          headers: s,
          contentLength: a,
          bytesRead: u,
          shouldKeepAlive: c,
        } = this;
        if (r.destroyed && (!n || c)) return -1;
        if (o) return 0;
        (Mo(n >= 100), Mo((this.headers.length & 1) === 0));
        let m = e[bS][e[WE]];
        if (
          (Mo(m),
          (this.statusCode = 0),
          (this.statusText = ""),
          (this.bytesRead = 0),
          (this.contentLength = ""),
          (this.keepAlive = ""),
          (this.connection = ""),
          (this.headers = []),
          (this.headersSize = 0),
          n < 200)
        )
          return 0;
        if (m.method !== "HEAD" && a && u !== parseInt(a, 10)) return (Vo.destroy(r, new Wua()), -1);
        if ((m.onComplete(s), (e[bS][e[WE]++] = null), r[hU]))
          return (Mo(e[mA] === 0), Vo.destroy(r, new cle("reset")), ED.ERROR.PAUSED);
        if (c) {
          if (r[e9] && e[mA] === 0) return (Vo.destroy(r, new cle("reset")), ED.ERROR.PAUSED);
          e[Vit] == null || e[Vit] === 1 ? setImmediate(e[pU]) : e[pU]();
        } else return (Vo.destroy(r, new cle("reset")), ED.ERROR.PAUSED);
        return 0;
      }
    };
  function RJn(t) {
    let { socket: e, timeoutType: r, client: n, paused: o } = t.deref();
    r === mle
      ? (!e[hU] || e.writableNeedDrain || n[mA] > 1) &&
        (Mo(!o, "cannot be paused while waiting for headers"), Vo.destroy(e, new zua()))
      : r === Wit
        ? o || Vo.destroy(e, new Kua())
        : r === iar && (Mo(n[mA] === 0 && n[zit]), Vo.destroy(e, new cle("socket idle timeout")));
  }
  function hca(t, e) {
    if (((t[lle] = e), tar || (tar = fca()), e.errored)) throw e.errored;
    if (e.destroyed) throw new Gve("destroyed");
    return (
      (e[jve] = !1),
      (e[hU] = !1),
      (e[e9] = !1),
      (e[qve] = !1),
      (e[b1] = new oar(t, e, tar)),
      Vo.addListener(e, "error", gca),
      Vo.addListener(e, "readable", bca),
      Vo.addListener(e, "end", Aca),
      Vo.addListener(e, "close", yca),
      (e[nar] = !1),
      e.on("close", _ca),
      {
        version: "h1",
        defaultPipelining: 1,
        write(r) {
          return Cca(t, r);
        },
        resume() {
          Eca(t);
        },
        destroy(r, n) {
          e[nar] ? queueMicrotask(n) : (e.on("close", n), e.destroy(r));
        },
        get destroyed() {
          return e.destroyed;
        },
        busy(r) {
          return !!(
            e[hU] ||
            e[e9] ||
            e[qve] ||
            (r &&
              ((t[mA] > 0 && !r.idempotent) ||
                (t[mA] > 0 && (r.upgrade || r.method === "CONNECT")) ||
                (t[mA] > 0 &&
                  Vo.bodyLength(r.body) !== 0 &&
                  (Vo.isStream(r.body) || Vo.isAsyncIterable(r.body) || Vo.isFormDataLike(r.body)))))
          );
        },
      }
    );
  }
  function gca(t) {
    Mo(t.code !== "ERR_TLS_CERT_ALTNAME_INVALID");
    let e = this[b1];
    if (t.code === "ECONNRESET" && e.statusCode && !e.shouldKeepAlive) {
      e.onMessageComplete();
      return;
    }
    ((this[zE] = t), this[sar][lca](t));
  }
  function bca() {
    this[b1]?.readMore();
  }
  function Aca() {
    let t = this[b1];
    if (t.statusCode && !t.shouldKeepAlive) {
      t.onMessageComplete();
      return;
    }
    Vo.destroy(this, new Gve("other side closed", Vo.getSocketInfo(this)));
  }
  function yca() {
    let t = this[b1];
    t &&
      (!this[zE] && t.statusCode && !t.shouldKeepAlive && t.onMessageComplete(), this[b1].destroy(), (this[b1] = null));
    let e = this[zE] || new Gve("closed", Vo.getSocketInfo(this)),
      r = this[sar];
    if (((r[lle] = null), (r[BJn] = null), r.destroyed)) {
      Mo(r[Zua] === 0);
      let n = r[bS].splice(r[WE]);
      for (let o = 0; o < n.length; o++) {
        let s = n[o];
        Vo.errorRequest(r, s, e);
      }
    } else if (r[mA] > 0 && e.code !== "UND_ERR_INFO") {
      let n = r[bS][r[WE]];
      ((r[bS][r[WE]++] = null), Vo.errorRequest(r, n, e));
    }
    ((r[rca] = r[WE]), Mo(r[mA] === 0), r.emit("disconnect", r[PJn], [r], e), r[pU]());
  }
  function _ca() {
    this[nar] = !0;
  }
  function Eca(t) {
    let e = t[lle];
    if (e && !e.destroyed) {
      if (
        (t[DJn] === 0 ? !e[jve] && e.unref && (e.unref(), (e[jve] = !0)) : e[jve] && e.ref && (e.ref(), (e[jve] = !1)),
        t[DJn] === 0)
      )
        e[b1].timeoutType !== iar && e[b1].setTimeout(t[zit], iar);
      else if (t[mA] > 0 && e[b1].statusCode < 200 && e[b1].timeoutType !== mle) {
        let r = t[bS][t[WE]],
          n = r.headersTimeout != null ? r.headersTimeout : t[sca];
        e[b1].setTimeout(n, mle);
      }
    }
  }
  function vca(t) {
    return t !== "GET" && t !== "HEAD" && t !== "OPTIONS" && t !== "TRACE" && t !== "CONNECT";
  }
  function Cca(t, e) {
    let { method: r, path: n, host: o, upgrade: s, blocking: a, reset: u } = e,
      { body: c, headers: m, contentLength: d } = e,
      f = r === "PUT" || r === "POST" || r === "PATCH" || r === "QUERY" || r === "PROPFIND" || r === "PROPPATCH";
    if (Vo.isFormDataLike(c)) {
      ear || (ear = ule().extractBody);
      let [A, y] = ear(c);
      (e.contentType == null && m.push("content-type", y), (c = A.stream), (d = A.length));
    } else Vo.isBlobLike(c) && e.contentType == null && c.type && m.push("content-type", c.type);
    c && typeof c.read == "function" && c.read(0);
    let p = Vo.bodyLength(c);
    if (
      ((d = p ?? d),
      d === null && (d = e.contentLength),
      d === 0 && !f && (d = null),
      vca(r) && d > 0 && e.contentLength !== null && e.contentLength !== d)
    ) {
      if (t[rar]) return (Vo.errorRequest(t, e, new Qz()), !1);
      process.emitWarning(new Qz());
    }
    let h = t[lle],
      g = (A) => {
        e.aborted ||
          e.completed ||
          (Vo.errorRequest(t, e, A || new NJn()), Vo.destroy(c), Vo.destroy(h, new cle("aborted")));
      };
    try {
      e.onConnect(g);
    } catch (A) {
      Vo.errorRequest(t, e, A);
    }
    if (e.aborted) return !1;
    (r === "HEAD" && (h[e9] = !0),
      (s || r === "CONNECT") && (h[e9] = !0),
      u != null && (h[e9] = u),
      t[IJn] && h[uca]++ >= t[IJn] && (h[e9] = !0),
      a && (h[qve] = !0));
    let b = `${r} ${n} HTTP/1.1\r
`;
    if (
      (typeof o == "string"
        ? (b += `host: ${o}\r
`)
        : (b += t[tca]),
      s
        ? (b += `connection: upgrade\r
upgrade: ${s}\r
`)
        : t[Vit] && !h[e9]
          ? (b += `connection: keep-alive\r
`)
          : (b += `connection: close\r
`),
      Array.isArray(m))
    )
      for (let A = 0; A < m.length; A += 2) {
        let y = m[A + 0],
          E = m[A + 1];
        if (Array.isArray(E))
          for (let v = 0; v < E.length; v++)
            b += `${y}: ${E[v]}\r
`;
        else
          b += `${y}: ${E}\r
`;
      }
    return (
      TJn.sendHeaders.hasSubscribers && TJn.sendHeaders.publish({ request: e, headers: b, socket: h }),
      !c || p === 0
        ? kJn(g, null, t, e, h, d, b, f)
        : Vo.isBuffer(c)
          ? kJn(g, c, t, e, h, d, b, f)
          : Vo.isBlobLike(c)
            ? typeof c.stream == "function"
              ? OJn(g, c.stream(), t, e, h, d, b, f)
              : wca(g, c, t, e, h, d, b, f)
            : Vo.isStream(c)
              ? Sca(g, c, t, e, h, d, b, f)
              : Vo.isIterable(c)
                ? OJn(g, c, t, e, h, d, b, f)
                : Mo(!1),
      !0
    );
  }
  function Sca(t, e, r, n, o, s, a, u) {
    Mo(s !== 0 || r[mA] === 0, "stream body cannot be pipelined");
    let c = !1,
      m = new Yit({ abort: t, socket: o, request: n, contentLength: s, client: r, expectsPayload: u, header: a }),
      d = function (g) {
        if (!c)
          try {
            !m.write(g) && this.pause && this.pause();
          } catch (b) {
            Vo.destroy(this, b);
          }
      },
      f = function () {
        c || (e.resume && e.resume());
      },
      p = function () {
        if (
          (queueMicrotask(() => {
            e.removeListener("error", h);
          }),
          !c)
        ) {
          let g = new NJn();
          queueMicrotask(() => h(g));
        }
      },
      h = function (g) {
        if (!c) {
          if (
            ((c = !0),
            Mo(o.destroyed || (o[hU] && r[mA] <= 1)),
            o.off("drain", f).off("error", h),
            e.removeListener("data", d).removeListener("end", h).removeListener("close", p),
            !g)
          )
            try {
              m.end();
            } catch (b) {
              g = b;
            }
          (m.destroy(g), g && (g.code !== "UND_ERR_INFO" || g.message !== "reset") ? Vo.destroy(e, g) : Vo.destroy(e));
        }
      };
    (e.on("data", d).on("end", h).on("error", h).on("close", p),
      e.resume && e.resume(),
      o.on("drain", f).on("error", h),
      (e.errorEmitted ?? e.errored)
        ? setImmediate(h, e.errored)
        : (e.endEmitted ?? e.readableEnded) && setImmediate(h, null),
      (e.closeEmitted ?? e.closed) && setImmediate(p));
  }
  function kJn(t, e, r, n, o, s, a, u) {
    try {
      (e
        ? Vo.isBuffer(e) &&
          (Mo(s === e.byteLength, "buffer body must have content length"),
          o.cork(),
          o.write(
            `${a}content-length: ${s}\r
\r
`,
            "latin1",
          ),
          o.write(e),
          o.uncork(),
          n.onBodySent(e),
          !u && n.reset !== !1 && (o[e9] = !0))
        : s === 0
          ? o.write(
              `${a}content-length: 0\r
\r
`,
              "latin1",
            )
          : (Mo(s === null, "no body must not have content length"),
            o.write(
              `${a}\r
`,
              "latin1",
            )),
        n.onRequestSent(),
        r[pU]());
    } catch (c) {
      t(c);
    }
  }
  async function wca(t, e, r, n, o, s, a, u) {
    Mo(s === e.size, "blob body must have content length");
    try {
      if (s != null && s !== e.size) throw new Qz();
      let c = Buffer.from(await e.arrayBuffer());
      (o.cork(),
        o.write(
          `${a}content-length: ${s}\r
\r
`,
          "latin1",
        ),
        o.write(c),
        o.uncork(),
        n.onBodySent(c),
        n.onRequestSent(),
        !u && n.reset !== !1 && (o[e9] = !0),
        r[pU]());
    } catch (c) {
      t(c);
    }
  }
  async function OJn(t, e, r, n, o, s, a, u) {
    Mo(s !== 0 || r[mA] === 0, "iterator body cannot be pipelined");
    let c = null;
    function m() {
      if (c) {
        let p = c;
        ((c = null), p());
      }
    }
    let d = () =>
      new Promise((p, h) => {
        (Mo(c === null), o[zE] ? h(o[zE]) : (c = p));
      });
    o.on("close", m).on("drain", m);
    let f = new Yit({ abort: t, socket: o, request: n, contentLength: s, client: r, expectsPayload: u, header: a });
    try {
      for await (let p of e) {
        if (o[zE]) throw o[zE];
        f.write(p) || (await d());
      }
      f.end();
    } catch (p) {
      f.destroy(p);
    } finally {
      o.off("close", m).off("drain", m);
    }
  }
  var Yit = class {
    constructor({ abort: e, socket: r, request: n, contentLength: o, client: s, expectsPayload: a, header: u }) {
      ((this.socket = r),
        (this.request = n),
        (this.contentLength = o),
        (this.client = s),
        (this.bytesWritten = 0),
        (this.expectsPayload = a),
        (this.header = u),
        (this.abort = e),
        (r[hU] = !0));
    }
    write(e) {
      let { socket: r, request: n, contentLength: o, client: s, bytesWritten: a, expectsPayload: u, header: c } = this;
      if (r[zE]) throw r[zE];
      if (r.destroyed) return !1;
      let m = Buffer.byteLength(e);
      if (!m) return !0;
      if (o !== null && a + m > o) {
        if (s[rar]) throw new Qz();
        process.emitWarning(new Qz());
      }
      (r.cork(),
        a === 0 &&
          (!u && n.reset !== !1 && (r[e9] = !0),
          o === null
            ? r.write(
                `${c}transfer-encoding: chunked\r
`,
                "latin1",
              )
            : r.write(
                `${c}content-length: ${o}\r
\r
`,
                "latin1",
              )),
        o === null &&
          r.write(
            `\r
${m.toString(16)}\r
`,
            "latin1",
          ),
        (this.bytesWritten += m));
      let d = r.write(e);
      return (
        r.uncork(),
        n.onBodySent(e),
        d || (r[b1].timeout && r[b1].timeoutType === mle && r[b1].timeout.refresh && r[b1].timeout.refresh()),
        d
      );
    }
    end() {
      let { socket: e, contentLength: r, client: n, bytesWritten: o, expectsPayload: s, header: a, request: u } = this;
      if ((u.onRequestSent(), (e[hU] = !1), e[zE])) throw e[zE];
      if (!e.destroyed) {
        if (
          (o === 0
            ? s
              ? e.write(
                  `${a}content-length: 0\r
\r
`,
                  "latin1",
                )
              : e.write(
                  `${a}\r
`,
                  "latin1",
                )
            : r === null &&
              e.write(
                `\r
0\r
\r
`,
                "latin1",
              ),
          r !== null && o !== r)
        ) {
          if (n[rar]) throw new Qz();
          process.emitWarning(new Qz());
        }
        (e[b1].timeout && e[b1].timeoutType === mle && e[b1].timeout.refresh && e[b1].timeout.refresh(), n[pU]());
      }
    }
    destroy(e) {
      let { socket: r, client: n, abort: o } = this;
      ((r[hU] = !1), e && (Mo(n[mA] <= 1, "pipeline should only contain this request"), o(e)));
    }
  };
  LJn.exports = hca;
});