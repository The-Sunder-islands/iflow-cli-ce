/**
 * @module Rle
 * @category network/http
 * @label undici
 * @position 1558 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rle) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rle = T((YCc, uri) => {
  "use strict";
  var { extractBody: Lfa, mixinBody: Mfa, cloneBody: Ffa, bodyUnusable: Yti } = ule(),
    {
      Headers: tri,
      fill: Ufa,
      HeadersList: jot,
      setHeadersGuard: fcr,
      getHeadersGuard: $fa,
      setHeadersList: rri,
      getHeadersList: Kti,
    } = tY(),
    $ot = ks(),
    Jti = Ae("node:util"),
    { isValidHTTPToken: jfa, sameOrigin: Xti, environmentSettingsObject: Uot } = z6(),
    {
      forbiddenMethodsSet: Qfa,
      corsSafeListedMethodsSet: Gfa,
      referrerPolicy: qfa,
      requestRedirect: Hfa,
      requestMode: Vfa,
      requestCredentials: Wfa,
      requestCache: zfa,
      requestDuplex: Yfa,
    } = Pve(),
    { kEnumerableProperty: Kf, normalizedMethodRecordsBase: Kfa, normalizedMethodRecords: Jfa } = $ot,
    { webidl: xo } = jg(),
    { URLSerializer: Xfa } = HE(),
    { kConstruct: Qot } = n0(),
    Zfa = Ae("node:assert"),
    { getMaxListeners: nri, setMaxListeners: epa, defaultMaxListeners: tpa } = Ae("node:events"),
    rpa = Symbol("abortController"),
    iri = new FinalizationRegistry(({ signal: t, abort: e }) => {
      t.removeEventListener("abort", e);
    }),
    Got = new WeakMap(),
    pcr;
  try {
    pcr = nri(new AbortController().signal) > 0;
  } catch {
    pcr = !1;
  }
  function Zti(t) {
    return e;
    function e() {
      let r = t.deref();
      if (r !== void 0) {
        (iri.unregister(e), this.removeEventListener("abort", e), r.abort(this.reason));
        let n = Got.get(r.signal);
        if (n !== void 0) {
          if (n.size !== 0) {
            for (let o of n) {
              let s = o.deref();
              s !== void 0 && s.abort(this.reason);
            }
            n.clear();
          }
          Got.delete(r.signal);
        }
      }
    }
  }
  var eri = !1,
    n9 = class t {
      #e;
      #t;
      #r;
      #n;
      constructor(e, r = void 0) {
        if ((xo.util.markAsUncloneable(this), e === Qot)) return;
        (xo.argumentLengthCheck(arguments, 1, "Request constructor"),
          (e = xo.converters.RequestInfo(e)),
          (r = xo.converters.RequestInit(r)));
        let o = null,
          s = null,
          a = Uot.settingsObject.baseUrl,
          u = null;
        if (typeof e == "string") {
          this.#t = r.dispatcher;
          let y;
          try {
            y = new URL(e, a);
          } catch (E) {
            throw new TypeError("Failed to parse URL from " + e, { cause: E });
          }
          if (y.username || y.password)
            throw new TypeError("Request cannot be constructed from a URL that includes credentials: " + e);
          ((o = qot({ urlList: [y] })), (s = "cors"));
        } else (Zfa(xo.is.Request(e)), (o = e.#n), (u = e.#e), (this.#t = r.dispatcher || e.#t));
        let c = Uot.settingsObject.origin,
          m = "client";
        if (
          (o.window?.constructor?.name === "EnvironmentSettingsObject" && Xti(o.window, c) && (m = o.window),
          r.window != null)
        )
          throw new TypeError(`'window' option '${m}' must be null`);
        ("window" in r && (m = "no-window"),
          (o = qot({
            method: o.method,
            headersList: o.headersList,
            unsafeRequest: o.unsafeRequest,
            client: Uot.settingsObject,
            window: m,
            priority: o.priority,
            origin: o.origin,
            referrer: o.referrer,
            referrerPolicy: o.referrerPolicy,
            mode: o.mode,
            credentials: o.credentials,
            cache: o.cache,
            redirect: o.redirect,
            integrity: o.integrity,
            keepalive: o.keepalive,
            reloadNavigation: o.reloadNavigation,
            historyNavigation: o.historyNavigation,
            urlList: [...o.urlList],
          })));
        let d = Object.keys(r).length !== 0;
        if (
          (d &&
            (o.mode === "navigate" && (o.mode = "same-origin"),
            (o.reloadNavigation = !1),
            (o.historyNavigation = !1),
            (o.origin = "client"),
            (o.referrer = "client"),
            (o.referrerPolicy = ""),
            (o.url = o.urlList[o.urlList.length - 1]),
            (o.urlList = [o.url])),
          r.referrer !== void 0)
        ) {
          let y = r.referrer;
          if (y === "") o.referrer = "no-referrer";
          else {
            let E;
            try {
              E = new URL(y, a);
            } catch (v) {
              throw new TypeError(`Referrer "${y}" is not a valid URL.`, { cause: v });
            }
            (E.protocol === "about:" && E.hostname === "client") || (c && !Xti(E, Uot.settingsObject.baseUrl))
              ? (o.referrer = "client")
              : (o.referrer = E);
          }
        }
        r.referrerPolicy !== void 0 && (o.referrerPolicy = r.referrerPolicy);
        let f;
        if ((r.mode !== void 0 ? (f = r.mode) : (f = s), f === "navigate"))
          throw xo.errors.exception({ header: "Request constructor", message: "invalid request mode navigate." });
        if (
          (f != null && (o.mode = f),
          r.credentials !== void 0 && (o.credentials = r.credentials),
          r.cache !== void 0 && (o.cache = r.cache),
          o.cache === "only-if-cached" && o.mode !== "same-origin")
        )
          throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        if (
          (r.redirect !== void 0 && (o.redirect = r.redirect),
          r.integrity != null && (o.integrity = String(r.integrity)),
          r.keepalive !== void 0 && (o.keepalive = !!r.keepalive),
          r.method !== void 0)
        ) {
          let y = r.method,
            E = Jfa[y];
          if (E !== void 0) o.method = E;
          else {
            if (!jfa(y)) throw new TypeError(`'${y}' is not a valid HTTP method.`);
            let v = y.toUpperCase();
            if (Qfa.has(v)) throw new TypeError(`'${y}' HTTP method is unsupported.`);
            ((y = Kfa[v] ?? y), (o.method = y));
          }
          !eri &&
            o.method === "patch" &&
            (process.emitWarning(
              "Using `patch` is highly likely to result in a `405 Method Not Allowed`. `PATCH` is much more likely to succeed.",
              { code: "UNDICI-FETCH-patch" },
            ),
            (eri = !0));
        }
        (r.signal !== void 0 && (u = r.signal), (this.#n = o));
        let p = new AbortController();
        if (((this.#e = p.signal), u != null))
          if (u.aborted) p.abort(u.reason);
          else {
            this[rpa] = p;
            let y = new WeakRef(p),
              E = Zti(y);
            (pcr && nri(u) === tpa && epa(1500, u),
              $ot.addAbortListener(u, E),
              iri.register(p, { signal: u, abort: E }, E));
          }
        if (((this.#r = new tri(Qot)), rri(this.#r, o.headersList), fcr(this.#r, "request"), f === "no-cors")) {
          if (!Gfa.has(o.method)) throw new TypeError(`'${o.method} is unsupported in no-cors mode.`);
          fcr(this.#r, "request-no-cors");
        }
        if (d) {
          let y = Kti(this.#r),
            E = r.headers !== void 0 ? r.headers : new jot(y);
          if ((y.clear(), E instanceof jot)) {
            for (let { name: v, value: C } of E.rawValues()) y.append(v, C, !1);
            y.cookies = E.cookies;
          } else Ufa(this.#r, E);
        }
        let h = xo.is.Request(e) ? e.#n.body : null;
        if ((r.body != null || h != null) && (o.method === "GET" || o.method === "HEAD"))
          throw new TypeError("Request with GET/HEAD method cannot have body.");
        let g = null;
        if (r.body != null) {
          let [y, E] = Lfa(r.body, o.keepalive);
          ((g = y), E && !Kti(this.#r).contains("content-type", !0) && this.#r.append("content-type", E, !0));
        }
        let b = g ?? h;
        if (b != null && b.source == null) {
          if (g != null && r.duplex == null)
            throw new TypeError("RequestInit: duplex option is required when sending a body.");
          if (o.mode !== "same-origin" && o.mode !== "cors")
            throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
          o.useCORSPreflightFlag = !0;
        }
        let A = b;
        if (g == null && h != null) {
          if (Yti(e.#n))
            throw new TypeError("Cannot construct a Request with a Request object that has already been used.");
          let y = new TransformStream();
          (h.stream.pipeThrough(y), (A = { source: h.source, length: h.length, stream: y.readable }));
        }
        this.#n.body = A;
      }
      get method() {
        return (xo.brandCheck(this, t), this.#n.method);
      }
      get url() {
        return (xo.brandCheck(this, t), Xfa(this.#n.url));
      }
      get headers() {
        return (xo.brandCheck(this, t), this.#r);
      }
      get destination() {
        return (xo.brandCheck(this, t), this.#n.destination);
      }
      get referrer() {
        return (
          xo.brandCheck(this, t),
          this.#n.referrer === "no-referrer"
            ? ""
            : this.#n.referrer === "client"
              ? "about:client"
              : this.#n.referrer.toString()
        );
      }
      get referrerPolicy() {
        return (xo.brandCheck(this, t), this.#n.referrerPolicy);
      }
      get mode() {
        return (xo.brandCheck(this, t), this.#n.mode);
      }
      get credentials() {
        return (xo.brandCheck(this, t), this.#n.credentials);
      }
      get cache() {
        return (xo.brandCheck(this, t), this.#n.cache);
      }
      get redirect() {
        return (xo.brandCheck(this, t), this.#n.redirect);
      }
      get integrity() {
        return (xo.brandCheck(this, t), this.#n.integrity);
      }
      get keepalive() {
        return (xo.brandCheck(this, t), this.#n.keepalive);
      }
      get isReloadNavigation() {
        return (xo.brandCheck(this, t), this.#n.reloadNavigation);
      }
      get isHistoryNavigation() {
        return (xo.brandCheck(this, t), this.#n.historyNavigation);
      }
      get signal() {
        return (xo.brandCheck(this, t), this.#e);
      }
      get body() {
        return (xo.brandCheck(this, t), this.#n.body ? this.#n.body.stream : null);
      }
      get bodyUsed() {
        return (xo.brandCheck(this, t), !!this.#n.body && $ot.isDisturbed(this.#n.body.stream));
      }
      get duplex() {
        return (xo.brandCheck(this, t), "half");
      }
      clone() {
        if ((xo.brandCheck(this, t), Yti(this.#n))) throw new TypeError("unusable");
        let e = sri(this.#n),
          r = new AbortController();
        if (this.signal.aborted) r.abort(this.signal.reason);
        else {
          let n = Got.get(this.signal);
          n === void 0 && ((n = new Set()), Got.set(this.signal, n));
          let o = new WeakRef(r);
          (n.add(o), $ot.addAbortListener(r.signal, Zti(o)));
        }
        return ari(e, this.#t, r.signal, $fa(this.#r));
      }
      [Jti.inspect.custom](e, r) {
        (r.depth === null && (r.depth = 2), (r.colors ??= !0));
        let n = {
          method: this.method,
          url: this.url,
          headers: this.headers,
          destination: this.destination,
          referrer: this.referrer,
          referrerPolicy: this.referrerPolicy,
          mode: this.mode,
          credentials: this.credentials,
          cache: this.cache,
          redirect: this.redirect,
          integrity: this.integrity,
          keepalive: this.keepalive,
          isReloadNavigation: this.isReloadNavigation,
          isHistoryNavigation: this.isHistoryNavigation,
          signal: this.signal,
        };
        return `Request ${Jti.formatWithOptions(r, n)}`;
      }
      static setRequestSignal(e, r) {
        return ((e.#e = r), e);
      }
      static getRequestDispatcher(e) {
        return e.#t;
      }
      static setRequestDispatcher(e, r) {
        e.#t = r;
      }
      static setRequestHeaders(e, r) {
        e.#r = r;
      }
      static getRequestState(e) {
        return e.#n;
      }
      static setRequestState(e, r) {
        e.#n = r;
      }
    },
    {
      setRequestSignal: npa,
      getRequestDispatcher: ipa,
      setRequestDispatcher: opa,
      setRequestHeaders: spa,
      getRequestState: ori,
      setRequestState: apa,
    } = n9;
  Reflect.deleteProperty(n9, "setRequestSignal");
  Reflect.deleteProperty(n9, "getRequestDispatcher");
  Reflect.deleteProperty(n9, "setRequestDispatcher");
  Reflect.deleteProperty(n9, "setRequestHeaders");
  Reflect.deleteProperty(n9, "getRequestState");
  Reflect.deleteProperty(n9, "setRequestState");
  Mfa(n9, ori);
  function qot(t) {
    return {
      method: t.method ?? "GET",
      localURLsOnly: t.localURLsOnly ?? !1,
      unsafeRequest: t.unsafeRequest ?? !1,
      body: t.body ?? null,
      client: t.client ?? null,
      reservedClient: t.reservedClient ?? null,
      replacesClientId: t.replacesClientId ?? "",
      window: t.window ?? "client",
      keepalive: t.keepalive ?? !1,
      serviceWorkers: t.serviceWorkers ?? "all",
      initiator: t.initiator ?? "",
      destination: t.destination ?? "",
      priority: t.priority ?? null,
      origin: t.origin ?? "client",
      policyContainer: t.policyContainer ?? "client",
      referrer: t.referrer ?? "client",
      referrerPolicy: t.referrerPolicy ?? "",
      mode: t.mode ?? "no-cors",
      useCORSPreflightFlag: t.useCORSPreflightFlag ?? !1,
      credentials: t.credentials ?? "same-origin",
      useCredentials: t.useCredentials ?? !1,
      cache: t.cache ?? "default",
      redirect: t.redirect ?? "follow",
      integrity: t.integrity ?? "",
      cryptoGraphicsNonceMetadata: t.cryptoGraphicsNonceMetadata ?? "",
      parserMetadata: t.parserMetadata ?? "",
      reloadNavigation: t.reloadNavigation ?? !1,
      historyNavigation: t.historyNavigation ?? !1,
      userActivation: t.userActivation ?? !1,
      taintedOrigin: t.taintedOrigin ?? !1,
      redirectCount: t.redirectCount ?? 0,
      responseTainting: t.responseTainting ?? "basic",
      preventNoCacheCacheControlHeaderModification: t.preventNoCacheCacheControlHeaderModification ?? !1,
      done: t.done ?? !1,
      timingAllowFailed: t.timingAllowFailed ?? !1,
      urlList: t.urlList,
      url: t.urlList[0],
      headersList: t.headersList ? new jot(t.headersList) : new jot(),
    };
  }
  function sri(t) {
    let e = qot({ ...t, body: null });
    return (t.body != null && (e.body = Ffa(t.body)), e);
  }
  function ari(t, e, r, n) {
    let o = new n9(Qot);
    (apa(o, t), opa(o, e), npa(o, r));
    let s = new tri(Qot);
    return (spa(o, s), rri(s, t.headersList), fcr(s, n), o);
  }
  Object.defineProperties(n9.prototype, {
    method: Kf,
    url: Kf,
    headers: Kf,
    redirect: Kf,
    clone: Kf,
    signal: Kf,
    duplex: Kf,
    destination: Kf,
    body: Kf,
    bodyUsed: Kf,
    isHistoryNavigation: Kf,
    isReloadNavigation: Kf,
    keepalive: Kf,
    integrity: Kf,
    cache: Kf,
    credentials: Kf,
    attribute: Kf,
    referrerPolicy: Kf,
    referrer: Kf,
    mode: Kf,
    [Symbol.toStringTag]: { value: "Request", configurable: !0 },
  });
  xo.is.Request = xo.util.MakeTypeAssertion(n9);
  xo.converters.RequestInfo = function (t) {
    return typeof t == "string" ? xo.converters.USVString(t) : xo.is.Request(t) ? t : xo.converters.USVString(t);
  };
  xo.converters.RequestInit = xo.dictionaryConverter([
    { key: "method", converter: xo.converters.ByteString },
    { key: "headers", converter: xo.converters.HeadersInit },
    { key: "body", converter: xo.nullableConverter(xo.converters.BodyInit) },
    { key: "referrer", converter: xo.converters.USVString },
    { key: "referrerPolicy", converter: xo.converters.DOMString, allowedValues: qfa },
    { key: "mode", converter: xo.converters.DOMString, allowedValues: Vfa },
    { key: "credentials", converter: xo.converters.DOMString, allowedValues: Wfa },
    { key: "cache", converter: xo.converters.DOMString, allowedValues: zfa },
    { key: "redirect", converter: xo.converters.DOMString, allowedValues: Hfa },
    { key: "integrity", converter: xo.converters.DOMString },
    { key: "keepalive", converter: xo.converters.boolean },
    { key: "signal", converter: xo.nullableConverter((t) => xo.converters.AbortSignal(t, "RequestInit", "signal")) },
    { key: "window", converter: xo.converters.any },
    { key: "duplex", converter: xo.converters.DOMString, allowedValues: Yfa },
    { key: "dispatcher", converter: xo.converters.any },
    {
      key: "priority",
      converter: xo.converters.DOMString,
      allowedValues: ["high", "low", "auto"],
      defaultValue: () => "auto",
    },
  ]);
  uri.exports = {
    Request: n9,
    makeRequest: qot,
    fromInnerRequest: ari,
    cloneRequest: sri,
    getRequestDispatcher: ipa,
    getRequestState: ori,
  };
});