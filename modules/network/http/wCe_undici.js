/**
 * @module wCe
 * @category network/http
 * @label undici
 * @position 1560 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wCe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wCe = T((JCc, Rri) => {
  "use strict";
  var {
      makeNetworkError: Nl,
      makeAppropriateNetworkError: Hot,
      filterResponse: bcr,
      makeResponse: Vot,
      fromInnerResponse: lpa,
      getResponseState: mpa,
    } = CCe(),
    { HeadersList: bri } = tY(),
    { Request: dpa, cloneRequest: fpa, getRequestDispatcher: ppa, getRequestState: hpa } = Rle(),
    CS = Ae("node:zlib"),
    {
      makePolicyContainer: gpa,
      clonePolicyContainer: bpa,
      requestBadPort: Apa,
      TAOCheck: ypa,
      appendRequestOriginHeader: _pa,
      responseLocationURL: Epa,
      requestCurrentURL: OD,
      setRequestReferrerPolicyOnRedirect: vpa,
      tryUpgradeRequestToAPotentiallyTrustworthyURL: Cpa,
      createOpaqueTimingInfo: vcr,
      appendFetchMetadata: Spa,
      corsCheck: wpa,
      crossOriginResourcePolicyCheck: xpa,
      determineRequestsReferrer: Tpa,
      coarsenedSharedCurrentTime: SCe,
      sameOrigin: Ecr,
      isCancelled: iY,
      isAborted: Ari,
      isErrorLike: Dpa,
      fullyReadBody: Ipa,
      readableStreamClose: Rpa,
      urlIsLocal: kpa,
      urlIsHttpHttpsScheme: Kot,
      urlHasHttpsScheme: Opa,
      clampAndCoarsenConnectionTimingInfo: Npa,
      simpleRangeHeaderValue: Ppa,
      buildContentRange: Bpa,
      createInflate: Lpa,
      extractMimeType: Mpa,
    } = z6(),
    oY = Ae("node:assert"),
    { safelyExtractBody: Ccr, extractBody: yri } = ule(),
    {
      redirectStatusSet: vri,
      nullBodyStatus: Cri,
      safeMethodsSet: Fpa,
      requestBodyHeader: Upa,
      subresourceSet: $pa,
    } = Pve(),
    jpa = Ae("node:events"),
    { Readable: Qpa, pipeline: Gpa, finished: qpa, isErrored: Hpa, isReadable: Wot } = Ae("node:stream"),
    { addAbortListener: Vpa, bufferToLowerCasedHeaderName: _ri } = ks(),
    { dataURLProcessor: Wpa, serializeAMimeType: zpa, minimizeSupportedMimeType: Ypa } = HE(),
    { getGlobalDispatcher: Kpa } = Rot(),
    { webidl: Scr } = jg(),
    { STATUS_CODES: Jpa } = Ae("node:http"),
    { bytesMatch: Xpa } = gri(),
    { createDeferredPromise: Zpa } = $ve(),
    { isomorphicEncode: zot } = NO(),
    { runtimeFeatures: eha } = PO(),
    tha = eha.has("zstd"),
    rha = ["GET", "HEAD"],
    nha = typeof __UNDICI_IS_NODE__ < "u" || typeof esbuildDetection < "u" ? "node" : "undici",
    Acr,
    Yot = class extends jpa {
      constructor(e) {
        (super(), (this.dispatcher = e), (this.connection = null), (this.dump = !1), (this.state = "ongoing"));
      }
      terminate(e) {
        this.state === "ongoing" &&
          ((this.state = "terminated"), this.connection?.destroy(e), this.emit("terminated", e));
      }
      abort(e) {
        this.state === "ongoing" &&
          ((this.state = "aborted"),
          e || (e = new DOMException("The operation was aborted.", "AbortError")),
          (this.serializedAbortReason = e),
          this.connection?.destroy(e),
          this.emit("terminated", e));
      }
    };
  function iha(t) {
    Sri(t, "fetch");
  }
  function oha(t, e = void 0) {
    Scr.argumentLengthCheck(arguments, 1, "globalThis.fetch");
    let r = Zpa(),
      n;
    try {
      n = new dpa(t, e);
    } catch (d) {
      return (r.reject(d), r.promise);
    }
    let o = hpa(n);
    if (n.signal.aborted) return (ycr(r, o, null, n.signal.reason), r.promise);
    o.client.globalObject?.constructor?.name === "ServiceWorkerGlobalScope" && (o.serviceWorkers = "none");
    let a = null,
      u = !1,
      c = null;
    return (
      Vpa(n.signal, () => {
        ((u = !0), oY(c != null), c.abort(n.signal.reason));
        let d = a?.deref();
        ycr(r, o, d, n.signal.reason);
      }),
      (c = xri({
        request: o,
        processResponseEndOfBody: iha,
        processResponse: (d) => {
          if (!u) {
            if (d.aborted) {
              ycr(r, o, a, c.serializedAbortReason);
              return;
            }
            if (d.type === "error") {
              r.reject(new TypeError("fetch failed", { cause: d.error }));
              return;
            }
            ((a = new WeakRef(lpa(d, "immutable"))), r.resolve(a.deref()), (r = null));
          }
        },
        dispatcher: ppa(n),
      })),
      r.promise
    );
  }
  function Sri(t, e = "other") {
    if ((t.type === "error" && t.aborted) || !t.urlList?.length) return;
    let r = t.urlList[0],
      n = t.timingInfo,
      o = t.cacheState;
    Kot(r) &&
      n !== null &&
      (t.timingAllowPassed || ((n = vcr({ startTime: n.startTime })), (o = "")),
      (n.endTime = SCe()),
      (t.timingInfo = n),
      wri(n, r.href, e, globalThis, o, "", t.status));
  }
  var wri = performance.markResourceTiming;
  function ycr(t, e, r, n) {
    if (
      (t && t.reject(n),
      e.body?.stream != null &&
        Wot(e.body.stream) &&
        e.body.stream.cancel(n).catch((s) => {
          if (s.code !== "ERR_INVALID_STATE") throw s;
        }),
      r == null)
    )
      return;
    let o = mpa(r);
    o.body?.stream != null &&
      Wot(o.body.stream) &&
      o.body.stream.cancel(n).catch((s) => {
        if (s.code !== "ERR_INVALID_STATE") throw s;
      });
  }
  function xri({
    request: t,
    processRequestBodyChunkLength: e,
    processRequestEndOfBody: r,
    processResponse: n,
    processResponseEndOfBody: o,
    processResponseConsumeBody: s,
    useParallelQueue: a = !1,
    dispatcher: u = Kpa(),
  }) {
    oY(u);
    let c = null,
      m = !1;
    t.client != null && ((c = t.client.globalObject), (m = t.client.crossOriginIsolatedCapability));
    let d = SCe(m),
      f = vcr({ startTime: d }),
      p = {
        controller: new Yot(u),
        request: t,
        timingInfo: f,
        processRequestBodyChunkLength: e,
        processRequestEndOfBody: r,
        processResponse: n,
        processResponseConsumeBody: s,
        processResponseEndOfBody: o,
        taskDestination: c,
        crossOriginIsolatedCapability: m,
      };
    return (
      oY(!t.body || t.body.stream),
      t.window === "client" &&
        (t.window = t.client?.globalObject?.constructor?.name === "Window" ? t.client : "no-window"),
      t.origin === "client" && (t.origin = t.client.origin),
      t.policyContainer === "client" &&
        (t.client != null ? (t.policyContainer = bpa(t.client.policyContainer)) : (t.policyContainer = gpa())),
      t.headersList.contains("accept", !0) || t.headersList.append("accept", "*/*", !0),
      t.headersList.contains("accept-language", !0) || t.headersList.append("accept-language", "*", !0),
      t.priority,
      $pa.has(t.destination),
      Tri(p, !1),
      p.controller
    );
  }
  async function Tri(t, e) {
    try {
      let r = t.request,
        n = null;
      if (
        (r.localURLsOnly && !kpa(OD(r)) && (n = Nl("local URLs only")),
        Cpa(r),
        Apa(r) === "blocked" && (n = Nl("bad port")),
        r.referrerPolicy === "" && (r.referrerPolicy = r.policyContainer.referrerPolicy),
        r.referrer !== "no-referrer" && (r.referrer = Tpa(r)),
        n === null)
      ) {
        let s = OD(r);
        (Ecr(s, r.url) && r.responseTainting === "basic") ||
        s.protocol === "data:" ||
        r.mode === "navigate" ||
        r.mode === "websocket"
          ? ((r.responseTainting = "basic"), (n = await Eri(t)))
          : r.mode === "same-origin"
            ? (n = Nl('request mode cannot be "same-origin"'))
            : r.mode === "no-cors"
              ? r.redirect !== "follow"
                ? (n = Nl('redirect mode cannot be "follow" for "no-cors" request'))
                : ((r.responseTainting = "opaque"), (n = await Eri(t)))
              : Kot(OD(r))
                ? ((r.responseTainting = "cors"), (n = await Dri(t)))
                : (n = Nl("URL scheme must be a HTTP(S) scheme"));
      }
      if (e) return n;
      n.status !== 0 &&
        !n.internalResponse &&
        (r.responseTainting,
        r.responseTainting === "basic"
          ? (n = bcr(n, "basic"))
          : r.responseTainting === "cors"
            ? (n = bcr(n, "cors"))
            : r.responseTainting === "opaque"
              ? (n = bcr(n, "opaque"))
              : oY(!1));
      let o = n.status === 0 ? n : n.internalResponse;
      if (
        (o.urlList.length === 0 && o.urlList.push(...r.urlList),
        r.timingAllowFailed || (n.timingAllowPassed = !0),
        n.type === "opaque" &&
          o.status === 206 &&
          o.rangeRequested &&
          !r.headers.contains("range", !0) &&
          (n = o = Nl()),
        n.status !== 0 &&
          (r.method === "HEAD" || r.method === "CONNECT" || Cri.includes(o.status)) &&
          ((o.body = null), (t.controller.dump = !0)),
        r.integrity)
      ) {
        let s = (u) => _cr(t, Nl(u));
        if (r.responseTainting === "opaque" || n.body == null) {
          s(n.error);
          return;
        }
        let a = (u) => {
          if (!Xpa(u, r.integrity)) {
            s("integrity mismatch");
            return;
          }
          ((n.body = Ccr(u)[0]), _cr(t, n));
        };
        Ipa(n.body, a, s);
      } else _cr(t, n);
    } catch (r) {
      t.controller.terminate(r);
    }
  }
  function Eri(t) {
    if (iY(t) && t.request.redirectCount === 0) return Promise.resolve(Hot(t));
    let { request: e } = t,
      { protocol: r } = OD(e);
    switch (r) {
      case "about:":
        return Promise.resolve(Nl("about scheme is not supported"));
      case "blob:": {
        Acr || (Acr = Ae("node:buffer").resolveObjectURL);
        let n = OD(e);
        if (n.search.length !== 0) return Promise.resolve(Nl("NetworkError when attempting to fetch resource."));
        let o = Acr(n.toString());
        if (e.method !== "GET" || !Scr.is.Blob(o)) return Promise.resolve(Nl("invalid method"));
        let s = Vot(),
          a = o.size,
          u = zot(`${a}`),
          c = o.type;
        if (e.headersList.contains("range", !0)) {
          s.rangeRequested = !0;
          let m = e.headersList.get("range", !0),
            d = Ppa(m, !0);
          if (d === "failure") return Promise.resolve(Nl("failed to fetch the data URL"));
          let { rangeStartValue: f, rangeEndValue: p } = d;
          if (f === null) ((f = a - p), (p = f + p - 1));
          else {
            if (f >= a) return Promise.resolve(Nl("Range start is greater than the blob's size."));
            (p === null || p >= a) && (p = a - 1);
          }
          let h = o.slice(f, p + 1, c),
            g = yri(h);
          s.body = g[0];
          let b = zot(`${h.size}`),
            A = Bpa(f, p, a);
          ((s.status = 206),
            (s.statusText = "Partial Content"),
            s.headersList.set("content-length", b, !0),
            s.headersList.set("content-type", c, !0),
            s.headersList.set("content-range", A, !0));
        } else {
          let m = yri(o);
          ((s.statusText = "OK"),
            (s.body = m[0]),
            s.headersList.set("content-length", u, !0),
            s.headersList.set("content-type", c, !0));
        }
        return Promise.resolve(s);
      }
      case "data:": {
        let n = OD(e),
          o = Wpa(n);
        if (o === "failure") return Promise.resolve(Nl("failed to fetch the data URL"));
        let s = zpa(o.mimeType);
        return Promise.resolve(
          Vot({
            statusText: "OK",
            headersList: [["content-type", { name: "Content-Type", value: s }]],
            body: Ccr(o.body)[0],
          }),
        );
      }
      case "file:":
        return Promise.resolve(Nl("not implemented... yet..."));
      case "http:":
      case "https:":
        return Dri(t).catch((n) => Nl(n));
      default:
        return Promise.resolve(Nl("unknown scheme"));
    }
  }
  function sha(t, e) {
    ((t.request.done = !0), t.processResponseDone != null && queueMicrotask(() => t.processResponseDone(e)));
  }
  function _cr(t, e) {
    let r = t.timingInfo,
      n = () => {
        let s = Date.now();
        (t.request.destination === "document" && (t.controller.fullTimingInfo = r),
          (t.controller.reportTimingSteps = () => {
            if (!Kot(t.request.url)) return;
            r.endTime = s;
            let u = e.cacheState,
              c = e.bodyInfo;
            e.timingAllowPassed || ((r = vcr(r)), (u = ""));
            let m = 0;
            if (t.request.mode !== "navigator" || !e.hasCrossOriginRedirects) {
              m = e.status;
              let d = Mpa(e.headersList);
              d !== "failure" && (c.contentType = Ypa(d));
            }
            t.request.initiatorType != null && wri(r, t.request.url.href, t.request.initiatorType, globalThis, u, c, m);
          }));
        let a = () => {
          ((t.request.done = !0),
            t.processResponseEndOfBody != null && queueMicrotask(() => t.processResponseEndOfBody(e)),
            t.request.initiatorType != null && t.controller.reportTimingSteps());
        };
        queueMicrotask(() => a());
      };
    t.processResponse != null &&
      queueMicrotask(() => {
        (t.processResponse(e), (t.processResponse = null));
      });
    let o = e.type === "error" ? e : (e.internalResponse ?? e);
    o.body == null
      ? n()
      : qpa(o.body.stream, () => {
          n();
        });
  }
  async function Dri(t) {
    let e = t.request,
      r = null,
      n = null,
      o = t.timingInfo;
    if ((e.serviceWorkers, r === null)) {
      if (
        (e.redirect === "follow" && (e.serviceWorkers = "none"),
        (n = r = await Iri(t)),
        e.responseTainting === "cors" && wpa(e, r) === "failure")
      )
        return Nl("cors failure");
      ypa(e, r) === "failure" && (e.timingAllowFailed = !0);
    }
    return (e.responseTainting === "opaque" || r.type === "opaque") &&
      xpa(e.origin, e.client, e.destination, n) === "blocked"
      ? Nl("blocked")
      : (vri.has(n.status) &&
          (e.redirect !== "manual" && t.controller.connection.destroy(void 0, !1),
          e.redirect === "error"
            ? (r = Nl("unexpected redirect"))
            : e.redirect === "manual"
              ? (r = n)
              : e.redirect === "follow"
                ? (r = await aha(t, r))
                : oY(!1)),
        (r.timingInfo = o),
        r);
  }
  function aha(t, e) {
    let r = t.request,
      n = e.internalResponse ? e.internalResponse : e,
      o;
    try {
      if (((o = Epa(n, OD(r).hash)), o == null)) return e;
    } catch (a) {
      return Promise.resolve(Nl(a));
    }
    if (!Kot(o)) return Promise.resolve(Nl("URL scheme must be a HTTP(S) scheme"));
    if (r.redirectCount === 20) return Promise.resolve(Nl("redirect count exceeded"));
    if (((r.redirectCount += 1), r.mode === "cors" && (o.username || o.password) && !Ecr(r, o)))
      return Promise.resolve(Nl('cross origin not allowed for request mode "cors"'));
    if (r.responseTainting === "cors" && (o.username || o.password))
      return Promise.resolve(Nl('URL cannot contain credentials for request mode "cors"'));
    if (n.status !== 303 && r.body != null && r.body.source == null) return Promise.resolve(Nl());
    if (([301, 302].includes(n.status) && r.method === "POST") || (n.status === 303 && !rha.includes(r.method))) {
      ((r.method = "GET"), (r.body = null));
      for (let a of Upa) r.headersList.delete(a);
    }
    (Ecr(OD(r), o) ||
      (r.headersList.delete("authorization", !0),
      r.headersList.delete("proxy-authorization", !0),
      r.headersList.delete("cookie", !0),
      r.headersList.delete("host", !0)),
      r.body != null && (oY(r.body.source != null), (r.body = Ccr(r.body.source)[0])));
    let s = t.timingInfo;
    return (
      (s.redirectEndTime = s.postRedirectStartTime = SCe(t.crossOriginIsolatedCapability)),
      s.redirectStartTime === 0 && (s.redirectStartTime = s.startTime),
      r.urlList.push(o),
      vpa(r, n),
      Tri(t, !0)
    );
  }
  async function Iri(t, e = !1, r = !1) {
    let n = t.request,
      o = null,
      s = null,
      a = null,
      u = null,
      c = !1;
    n.window === "no-window" && n.redirect === "error"
      ? ((o = t), (s = n))
      : ((s = fpa(n)), (o = { ...t }), (o.request = s));
    let m = n.credentials === "include" || (n.credentials === "same-origin" && n.responseTainting === "basic"),
      d = s.body ? s.body.length : null,
      f = null;
    if (
      (s.body == null && ["POST", "PUT"].includes(s.method) && (f = "0"),
      d != null && (f = zot(`${d}`)),
      f != null && s.headersList.append("content-length", f, !0),
      d != null && s.keepalive,
      Scr.is.URL(s.referrer) && s.headersList.append("referer", zot(s.referrer.href), !0),
      _pa(s),
      Spa(s),
      s.headersList.contains("user-agent", !0) || s.headersList.append("user-agent", nha, !0),
      s.cache === "default" &&
        (s.headersList.contains("if-modified-since", !0) ||
          s.headersList.contains("if-none-match", !0) ||
          s.headersList.contains("if-unmodified-since", !0) ||
          s.headersList.contains("if-match", !0) ||
          s.headersList.contains("if-range", !0)) &&
        (s.cache = "no-store"),
      s.cache === "no-cache" &&
        !s.preventNoCacheCacheControlHeaderModification &&
        !s.headersList.contains("cache-control", !0) &&
        s.headersList.append("cache-control", "max-age=0", !0),
      (s.cache === "no-store" || s.cache === "reload") &&
        (s.headersList.contains("pragma", !0) || s.headersList.append("pragma", "no-cache", !0),
        s.headersList.contains("cache-control", !0) || s.headersList.append("cache-control", "no-cache", !0)),
      s.headersList.contains("range", !0) && s.headersList.append("accept-encoding", "identity", !0),
      s.headersList.contains("accept-encoding", !0) ||
        (Opa(OD(s))
          ? s.headersList.append("accept-encoding", "br, gzip, deflate", !0)
          : s.headersList.append("accept-encoding", "gzip, deflate", !0)),
      s.headersList.delete("host", !0),
      u == null && (s.cache = "no-store"),
      s.cache !== "no-store" && s.cache,
      a == null)
    ) {
      if (s.cache === "only-if-cached") return Nl("only if cached");
      let p = await uha(o, m, r);
      (!Fpa.has(s.method) && p.status >= 200 && p.status <= 399, c && p.status, a == null && (a = p));
    }
    if (
      ((a.urlList = [...s.urlList]),
      s.headersList.contains("range", !0) && (a.rangeRequested = !0),
      (a.requestIncludesCredentials = m),
      a.status === 407)
    )
      return n.window === "no-window" ? Nl() : iY(t) ? Hot(t) : Nl("proxy authentication required");
    if (a.status === 421 && !r && (n.body == null || n.body.source != null)) {
      if (iY(t)) return Hot(t);
      (t.controller.connection.destroy(), (a = await Iri(t, e, !0)));
    }
    return a;
  }
  async function uha(t, e = !1, r = !1) {
    (oY(!t.controller.connection || t.controller.connection.destroyed),
      (t.controller.connection = {
        abort: null,
        destroyed: !1,
        destroy(g, b = !0) {
          this.destroyed ||
            ((this.destroyed = !0),
            b && this.abort?.(g ?? new DOMException("The operation was aborted.", "AbortError")));
        },
      }));
    let n = t.request,
      o = null,
      s = t.timingInfo;
    null == null && (n.cache = "no-store");
    let u = r ? "yes" : "no";
    n.mode;
    let c = null;
    if (n.body == null && t.processRequestEndOfBody) queueMicrotask(() => t.processRequestEndOfBody());
    else if (n.body != null) {
      let g = async function* (y) {
          iY(t) || (yield y, t.processRequestBodyChunkLength?.(y.byteLength));
        },
        b = () => {
          iY(t) || (t.processRequestEndOfBody && t.processRequestEndOfBody());
        },
        A = (y) => {
          iY(t) || (y.name === "AbortError" ? t.controller.abort() : t.controller.terminate(y));
        };
      c = (async function* () {
        try {
          for await (let y of n.body.stream) yield* g(y);
          b();
        } catch (y) {
          A(y);
        }
      })();
    }
    try {
      let { body: g, status: b, statusText: A, headersList: y, socket: E } = await h({ body: c });
      if (E) o = Vot({ status: b, statusText: A, headersList: y, socket: E });
      else {
        let v = g[Symbol.asyncIterator]();
        ((t.controller.next = () => v.next()), (o = Vot({ status: b, statusText: A, headersList: y })));
      }
    } catch (g) {
      return g.name === "AbortError" ? (t.controller.connection.destroy(), Hot(t, g)) : Nl(g);
    }
    let m = () => t.controller.resume(),
      d = (g) => {
        iY(t) || t.controller.abort(g);
      },
      f = new ReadableStream({
        start(g) {
          t.controller.controller = g;
        },
        pull: m,
        cancel: d,
        type: "bytes",
      });
    ((o.body = { stream: f, source: null, length: null }),
      t.controller.resume || t.controller.on("terminated", p),
      (t.controller.resume = async () => {
        for (;;) {
          let g, b;
          try {
            let { done: y, value: E } = await t.controller.next();
            if (Ari(t)) break;
            g = y ? void 0 : E;
          } catch (y) {
            t.controller.ended && !s.encodedBodySize ? (g = void 0) : ((g = y), (b = !0));
          }
          if (g === void 0) {
            (Rpa(t.controller.controller), sha(t, o));
            return;
          }
          if (((s.decodedBodySize += g?.byteLength ?? 0), b)) {
            t.controller.terminate(g);
            return;
          }
          let A = new Uint8Array(g);
          if ((A.byteLength && t.controller.controller.enqueue(A), Hpa(f))) {
            t.controller.terminate();
            return;
          }
          if (t.controller.controller.desiredSize <= 0) return;
        }
      }));
    function p(g) {
      (Ari(t)
        ? ((o.aborted = !0), Wot(f) && t.controller.controller.error(t.controller.serializedAbortReason))
        : Wot(f) && t.controller.controller.error(new TypeError("terminated", { cause: Dpa(g) ? g : void 0 })),
        t.controller.connection.destroy());
    }
    return o;
    function h({ body: g }) {
      let b = OD(n),
        A = t.controller.dispatcher;
      return new Promise((y, E) =>
        A.dispatch(
          {
            path: b.pathname + b.search,
            origin: b.origin,
            method: n.method,
            body: A.isMockActive ? n.body && (n.body.source || n.body.stream) : g,
            headers: n.headersList.entries,
            maxRedirections: 0,
            upgrade: n.mode === "websocket" ? "websocket" : void 0,
          },
          {
            body: null,
            abort: null,
            onConnect(v) {
              let { connection: C } = t.controller;
              ((s.finalConnectionTimingInfo = Npa(void 0, s.postRedirectStartTime, t.crossOriginIsolatedCapability)),
                C.destroyed
                  ? v(new DOMException("The operation was aborted.", "AbortError"))
                  : (t.controller.on("terminated", v), (this.abort = C.abort = v)),
                (s.finalNetworkRequestStartTime = SCe(t.crossOriginIsolatedCapability)));
            },
            onResponseStarted() {
              s.finalNetworkResponseStartTime = SCe(t.crossOriginIsolatedCapability);
            },
            onHeaders(v, C, x, k) {
              if (v < 200) return !1;
              let R = new bri();
              for (let F = 0; F < C.length; F += 2) R.append(_ri(C[F]), C[F + 1].toString("latin1"), !0);
              let P = R.get("location", !0);
              this.body = new Qpa({ read: x });
              let D = P && n.redirect === "follow" && vri.has(v),
                O = [];
              if (n.method !== "HEAD" && n.method !== "CONNECT" && !Cri.includes(v) && !D) {
                let F = R.get("content-encoding", !0),
                  B = F ? F.toLowerCase().split(",") : [],
                  L = 5;
                if (B.length > L)
                  return (
                    E(new Error(`too many content-encodings in response: ${B.length}, maximum allowed is ${L}`)),
                    !0
                  );
                for (let G = B.length - 1; G >= 0; --G) {
                  let Q = B[G].trim();
                  if (Q === "x-gzip" || Q === "gzip")
                    O.push(
                      CS.createGunzip({ flush: CS.constants.Z_SYNC_FLUSH, finishFlush: CS.constants.Z_SYNC_FLUSH }),
                    );
                  else if (Q === "deflate")
                    O.push(Lpa({ flush: CS.constants.Z_SYNC_FLUSH, finishFlush: CS.constants.Z_SYNC_FLUSH }));
                  else if (Q === "br")
                    O.push(
                      CS.createBrotliDecompress({
                        flush: CS.constants.BROTLI_OPERATION_FLUSH,
                        finishFlush: CS.constants.BROTLI_OPERATION_FLUSH,
                      }),
                    );
                  else if (Q === "zstd" && tha)
                    O.push(
                      CS.createZstdDecompress({
                        flush: CS.constants.ZSTD_e_continue,
                        finishFlush: CS.constants.ZSTD_e_end,
                      }),
                    );
                  else {
                    O.length = 0;
                    break;
                  }
                }
              }
              let N = this.onError.bind(this);
              return (
                y({
                  status: v,
                  statusText: k,
                  headersList: R,
                  body: O.length
                    ? Gpa(this.body, ...O, (F) => {
                        F && this.onError(F);
                      }).on("error", N)
                    : this.body.on("error", N),
                }),
                !0
              );
            },
            onData(v) {
              if (t.controller.dump) return;
              let C = v;
              return ((s.encodedBodySize += C.byteLength), this.body.push(C));
            },
            onComplete() {
              (this.abort && t.controller.off("terminated", this.abort),
                (t.controller.ended = !0),
                this.body.push(null));
            },
            onError(v) {
              (this.abort && t.controller.off("terminated", this.abort),
                this.body?.destroy(v),
                t.controller.terminate(v),
                E(v));
            },
            onUpgrade(v, C, x) {
              if ((x.session != null && v !== 200) || (x.session == null && v !== 101)) return !1;
              let k = new bri();
              for (let R = 0; R < C.length; R += 2) k.append(_ri(C[R]), C[R + 1].toString("latin1"), !0);
              return (y({ status: v, statusText: Jpa[v], headersList: k, socket: x }), !0);
            },
          },
        ),
      );
    }
  }
  Rri.exports = { fetch: oha, Fetch: Yot, fetching: xri, finalizeAndReportTiming: Sri };
});