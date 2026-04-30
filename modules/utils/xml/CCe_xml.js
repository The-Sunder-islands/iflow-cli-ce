/**
 * @module CCe
 * @category utils/xml
 * @label xml
 * @position 1557 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CCe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CCe = T((zCc, zti) => {
  "use strict";
  var {
      Headers: Qti,
      HeadersList: Mti,
      fill: gfa,
      getHeadersGuard: bfa,
      setHeadersGuard: Gti,
      setHeadersList: qti,
    } = tY(),
    { extractBody: Fti, cloneBody: Afa, mixinBody: yfa, streamRegistry: Hti, bodyUnusable: _fa } = ule(),
    Vti = ks(),
    Uti = Ae("node:util"),
    { kEnumerableProperty: X6 } = Vti,
    {
      isValidReasonPhrase: Efa,
      isCancelled: vfa,
      isAborted: Cfa,
      isErrorLike: Sfa,
      environmentSettingsObject: wfa,
    } = z6(),
    { redirectStatusSet: xfa, nullBodyStatus: Tfa } = Pve(),
    { webidl: au } = jg(),
    { URLSerializer: $ti } = HE(),
    { kConstruct: Mot } = n0(),
    mcr = Ae("node:assert"),
    { isomorphicEncode: Dfa, serializeJavascriptValueToJSONString: Ifa } = NO(),
    Rfa = new TextEncoder("utf-8"),
    Z6 = class t {
      #e;
      #t;
      static error() {
        return vCe(Fot(), "immutable");
      }
      static json(e, r = void 0) {
        (au.argumentLengthCheck(arguments, 1, "Response.json"), r !== null && (r = au.converters.ResponseInit(r)));
        let n = Rfa.encode(Ifa(e)),
          o = Fti(n),
          s = vCe(Ile({}), "response");
        return (jti(s, r, { body: o[0], type: "application/json" }), s);
      }
      static redirect(e, r = 302) {
        (au.argumentLengthCheck(arguments, 1, "Response.redirect"),
          (e = au.converters.USVString(e)),
          (r = au.converters["unsigned short"](r)));
        let n;
        try {
          n = new URL(e, wfa.settingsObject.baseUrl);
        } catch (a) {
          throw new TypeError(`Failed to parse URL from ${e}`, { cause: a });
        }
        if (!xfa.has(r)) throw new RangeError(`Invalid status code ${r}`);
        let o = vCe(Ile({}), "immutable");
        o.#t.status = r;
        let s = Dfa($ti(n));
        return (o.#t.headersList.append("location", s, !0), o);
      }
      constructor(e = null, r = void 0) {
        if ((au.util.markAsUncloneable(this), e === Mot)) return;
        (e !== null && (e = au.converters.BodyInit(e, "Response", "body")),
          (r = au.converters.ResponseInit(r)),
          (this.#t = Ile({})),
          (this.#e = new Qti(Mot)),
          Gti(this.#e, "response"),
          qti(this.#e, this.#t.headersList));
        let n = null;
        if (e != null) {
          let [o, s] = Fti(e);
          n = { body: o, type: s };
        }
        jti(this, r, n);
      }
      get type() {
        return (au.brandCheck(this, t), this.#t.type);
      }
      get url() {
        au.brandCheck(this, t);
        let e = this.#t.urlList,
          r = e[e.length - 1] ?? null;
        return r === null ? "" : $ti(r, !0);
      }
      get redirected() {
        return (au.brandCheck(this, t), this.#t.urlList.length > 1);
      }
      get status() {
        return (au.brandCheck(this, t), this.#t.status);
      }
      get ok() {
        return (au.brandCheck(this, t), this.#t.status >= 200 && this.#t.status <= 299);
      }
      get statusText() {
        return (au.brandCheck(this, t), this.#t.statusText);
      }
      get headers() {
        return (au.brandCheck(this, t), this.#e);
      }
      get body() {
        return (au.brandCheck(this, t), this.#t.body ? this.#t.body.stream : null);
      }
      get bodyUsed() {
        return (au.brandCheck(this, t), !!this.#t.body && Vti.isDisturbed(this.#t.body.stream));
      }
      clone() {
        if ((au.brandCheck(this, t), _fa(this.#t)))
          throw au.errors.exception({ header: "Response.clone", message: "Body has already been consumed." });
        let e = dcr(this.#t);
        return (this.#t.body?.stream && Hti.register(this, new WeakRef(this.#t.body.stream)), vCe(e, bfa(this.#e)));
      }
      [Uti.inspect.custom](e, r) {
        (r.depth === null && (r.depth = 2), (r.colors ??= !0));
        let n = {
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          body: this.body,
          bodyUsed: this.bodyUsed,
          ok: this.ok,
          redirected: this.redirected,
          type: this.type,
          url: this.url,
        };
        return `Response ${Uti.formatWithOptions(r, n)}`;
      }
      static getResponseHeaders(e) {
        return e.#e;
      }
      static setResponseHeaders(e, r) {
        e.#e = r;
      }
      static getResponseState(e) {
        return e.#t;
      }
      static setResponseState(e, r) {
        e.#t = r;
      }
    },
    { getResponseHeaders: kfa, setResponseHeaders: Ofa, getResponseState: rY, setResponseState: Nfa } = Z6;
  Reflect.deleteProperty(Z6, "getResponseHeaders");
  Reflect.deleteProperty(Z6, "setResponseHeaders");
  Reflect.deleteProperty(Z6, "getResponseState");
  Reflect.deleteProperty(Z6, "setResponseState");
  yfa(Z6, rY);
  Object.defineProperties(Z6.prototype, {
    type: X6,
    url: X6,
    status: X6,
    ok: X6,
    redirected: X6,
    statusText: X6,
    headers: X6,
    clone: X6,
    body: X6,
    bodyUsed: X6,
    [Symbol.toStringTag]: { value: "Response", configurable: !0 },
  });
  Object.defineProperties(Z6, { json: X6, redirect: X6, error: X6 });
  function dcr(t) {
    if (t.internalResponse) return Wti(dcr(t.internalResponse), t.type);
    let e = Ile({ ...t, body: null });
    return (t.body != null && (e.body = Afa(t.body)), e);
  }
  function Ile(t) {
    return {
      aborted: !1,
      rangeRequested: !1,
      timingAllowPassed: !1,
      requestIncludesCredentials: !1,
      type: "default",
      status: 200,
      timingInfo: null,
      cacheState: "",
      statusText: "",
      ...t,
      headersList: t?.headersList ? new Mti(t?.headersList) : new Mti(),
      urlList: t?.urlList ? [...t.urlList] : [],
    };
  }
  function Fot(t) {
    let e = Sfa(t);
    return Ile({
      type: "error",
      status: 0,
      error: e ? t : new Error(t && String(t)),
      aborted: t && t.name === "AbortError",
    });
  }
  function Pfa(t) {
    return t.type === "error" && t.status === 0;
  }
  function Lot(t, e) {
    return (
      (e = { internalResponse: t, ...e }),
      new Proxy(t, {
        get(r, n) {
          return n in e ? e[n] : r[n];
        },
        set(r, n, o) {
          return (mcr(!(n in e)), (r[n] = o), !0);
        },
      })
    );
  }
  function Wti(t, e) {
    if (e === "basic") return Lot(t, { type: "basic", headersList: t.headersList });
    if (e === "cors") return Lot(t, { type: "cors", headersList: t.headersList });
    if (e === "opaque") return Lot(t, { type: "opaque", urlList: [], status: 0, statusText: "", body: null });
    if (e === "opaqueredirect")
      return Lot(t, { type: "opaqueredirect", status: 0, statusText: "", headersList: [], body: null });
    mcr(!1);
  }
  function Bfa(t, e = null) {
    return (
      mcr(vfa(t)),
      Cfa(t)
        ? Fot(Object.assign(new DOMException("The operation was aborted.", "AbortError"), { cause: e }))
        : Fot(Object.assign(new DOMException("Request was cancelled."), { cause: e }))
    );
  }
  function jti(t, e, r) {
    if (e.status !== null && (e.status < 200 || e.status > 599))
      throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    if ("statusText" in e && e.statusText != null && !Efa(String(e.statusText)))
      throw new TypeError("Invalid statusText");
    if (
      ("status" in e && e.status != null && (rY(t).status = e.status),
      "statusText" in e && e.statusText != null && (rY(t).statusText = e.statusText),
      "headers" in e && e.headers != null && gfa(kfa(t), e.headers),
      r)
    ) {
      if (Tfa.includes(t.status))
        throw au.errors.exception({
          header: "Response constructor",
          message: `Invalid response status code ${t.status}`,
        });
      ((rY(t).body = r.body),
        r.type != null &&
          !rY(t).headersList.contains("content-type", !0) &&
          rY(t).headersList.append("content-type", r.type, !0));
    }
  }
  function vCe(t, e) {
    let r = new Z6(Mot);
    Nfa(r, t);
    let n = new Qti(Mot);
    return (
      Ofa(r, n),
      qti(n, t.headersList),
      Gti(n, e),
      t.body?.stream && Hti.register(r, new WeakRef(t.body.stream)),
      r
    );
  }
  au.converters.XMLHttpRequestBodyInit = function (t, e, r) {
    return typeof t == "string"
      ? au.converters.USVString(t, e, r)
      : au.is.Blob(t) || au.is.BufferSource(t) || au.is.FormData(t) || au.is.URLSearchParams(t)
        ? t
        : au.converters.DOMString(t, e, r);
  };
  au.converters.BodyInit = function (t, e, r) {
    return au.is.ReadableStream(t) || t?.[Symbol.asyncIterator] ? t : au.converters.XMLHttpRequestBodyInit(t, e, r);
  };
  au.converters.ResponseInit = au.dictionaryConverter([
    { key: "status", converter: au.converters["unsigned short"], defaultValue: () => 200 },
    { key: "statusText", converter: au.converters.ByteString, defaultValue: () => "" },
    { key: "headers", converter: au.converters.HeadersInit },
  ]);
  au.is.Response = au.util.MakeTypeAssertion(Z6);
  zti.exports = {
    isNetworkError: Pfa,
    makeNetworkError: Fot,
    makeResponse: Ile,
    makeAppropriateNetworkError: Bfa,
    filterResponse: Wti,
    Response: Z6,
    cloneResponse: dcr,
    fromInnerResponse: vCe,
    getResponseState: rY,
  };
});