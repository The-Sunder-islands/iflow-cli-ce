/**
 * @module z6
 * @category unknown
 * @label unknown
 * @position 1500 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (z6) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var z6 = T(($vc, pJn) => {
  "use strict";
  var { Transform: Aaa } = Ae("node:stream"),
    tJn = Ae("node:zlib"),
    { redirectStatusSet: yaa, referrerPolicyTokens: _aa, badPortsSet: Eaa } = Pve(),
    { getGlobalOrigin: rJn } = ksr(),
    { collectAnHTTPQuotedString: vaa, parseMIMEType: Caa } = HE(),
    { performance: Saa } = Ae("node:perf_hooks"),
    { ReadableStreamFrom: waa, isValidHTTPToken: nJn, normalizedMethodRecordsBase: xaa } = ks(),
    Uve = Ae("node:assert"),
    { isUint8Array: Taa } = Ae("node:util/types"),
    { webidl: fU } = jg(),
    { isomorphicEncode: $sr, collectASequenceOfCodePoints: Uz, removeChars: Daa } = NO();
  function iJn(t) {
    let e = t.urlList,
      r = e.length;
    return r === 0 ? null : e[r - 1].toString();
  }
  function Iaa(t, e) {
    if (!yaa.has(t.status)) return null;
    let r = t.headersList.get("location", !0);
    return (
      r !== null && sJn(r) && (oJn(r) || (r = Raa(r)), (r = new URL(r, iJn(t)))),
      r && !r.hash && (r.hash = e),
      r
    );
  }
  function oJn(t) {
    for (let e = 0; e < t.length; ++e) {
      let r = t.charCodeAt(e);
      if (r > 126 || r < 32) return !1;
    }
    return !0;
  }
  function Raa(t) {
    return Buffer.from(t, "binary").toString("utf8");
  }
  function jz(t) {
    return t.urlList[t.urlList.length - 1];
  }
  function kaa(t) {
    let e = jz(t);
    return dJn(e) && Eaa.has(e.port) ? "blocked" : "allowed";
  }
  function Oaa(t) {
    return t instanceof Error || t?.constructor?.name === "Error" || t?.constructor?.name === "DOMException";
  }
  function Naa(t) {
    for (let e = 0; e < t.length; ++e) {
      let r = t.charCodeAt(e);
      if (!(r === 9 || (r >= 32 && r <= 126) || (r >= 128 && r <= 255))) return !1;
    }
    return !0;
  }
  var Paa = nJn;
  function sJn(t) {
    return (
      (t[0] === "	" ||
        t[0] === " " ||
        t[t.length - 1] === "	" ||
        t[t.length - 1] === " " ||
        t.includes(`
`) ||
        t.includes("\r") ||
        t.includes("\0")) === !1
    );
  }
  function Baa(t) {
    let e = (t.headersList.get("referrer-policy", !0) ?? "").split(","),
      r = "";
    if (e.length)
      for (let n = e.length; n !== 0; n--) {
        let o = e[n - 1].trim();
        if (_aa.has(o)) {
          r = o;
          break;
        }
      }
    return r;
  }
  function Laa(t, e) {
    let r = Baa(e);
    r !== "" && (t.referrerPolicy = r);
  }
  function Maa() {
    return "allowed";
  }
  function Faa() {
    return "success";
  }
  function Uaa() {
    return "success";
  }
  function $aa(t) {
    let e = null;
    ((e = t.mode), t.headersList.set("sec-fetch-mode", e, !0));
  }
  function jaa(t) {
    let e = t.origin;
    if (!(e === "client" || e === void 0)) {
      if (t.responseTainting === "cors" || t.mode === "websocket") t.headersList.append("origin", e, !0);
      else if (t.method !== "GET" && t.method !== "HEAD") {
        switch (t.referrerPolicy) {
          case "no-referrer":
            e = null;
            break;
          case "no-referrer-when-downgrade":
          case "strict-origin":
          case "strict-origin-when-cross-origin":
            t.origin && Qsr(t.origin) && !Qsr(jz(t)) && (e = null);
            break;
          case "same-origin":
            Fve(t, jz(t)) || (e = null);
            break;
          default:
        }
        t.headersList.append("origin", e, !0);
      }
    }
  }
  function ole(t, e) {
    return t;
  }
  function Qaa(t, e, r) {
    return !t?.startTime || t.startTime < e
      ? {
          domainLookupStartTime: e,
          domainLookupEndTime: e,
          connectionStartTime: e,
          connectionEndTime: e,
          secureConnectionStartTime: e,
          ALPNNegotiatedProtocol: t?.ALPNNegotiatedProtocol,
        }
      : {
          domainLookupStartTime: ole(t.domainLookupStartTime, r),
          domainLookupEndTime: ole(t.domainLookupEndTime, r),
          connectionStartTime: ole(t.connectionStartTime, r),
          connectionEndTime: ole(t.connectionEndTime, r),
          secureConnectionStartTime: ole(t.secureConnectionStartTime, r),
          ALPNNegotiatedProtocol: t.ALPNNegotiatedProtocol,
        };
  }
  function Gaa(t) {
    return ole(Saa.now(), t);
  }
  function qaa(t) {
    return {
      startTime: t.startTime ?? 0,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: t.startTime ?? 0,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 0,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null,
    };
  }
  function aJn() {
    return { referrerPolicy: "strict-origin-when-cross-origin" };
  }
  function Haa(t) {
    return { referrerPolicy: t.referrerPolicy };
  }
  function Vaa(t) {
    let e = t.referrerPolicy;
    Uve(e);
    let r = null;
    if (t.referrer === "client") {
      let s = rJn();
      if (!s || s.origin === "null") return "no-referrer";
      r = new URL(s);
    } else fU.is.URL(t.referrer) && (r = t.referrer);
    let n = jsr(r),
      o = jsr(r, !0);
    switch ((n.toString().length > 4096 && (n = o), e)) {
      case "no-referrer":
        return "no-referrer";
      case "origin":
        return o ?? jsr(r, !0);
      case "unsafe-url":
        return n;
      case "strict-origin": {
        let s = jz(t);
        return $z(n) && !$z(s) ? "no-referrer" : o;
      }
      case "strict-origin-when-cross-origin": {
        let s = jz(t);
        return Fve(n, s) ? n : $z(n) && !$z(s) ? "no-referrer" : o;
      }
      case "same-origin":
        return Fve(t, n) ? n : "no-referrer";
      case "origin-when-cross-origin":
        return Fve(t, n) ? n : o;
      case "no-referrer-when-downgrade": {
        let s = jz(t);
        return $z(n) && !$z(s) ? "no-referrer" : n;
      }
    }
  }
  function jsr(t, e = !1) {
    return (
      Uve(fU.is.URL(t)),
      (t = new URL(t)),
      mJn(t)
        ? "no-referrer"
        : ((t.username = ""), (t.password = ""), (t.hash = ""), e === !0 && ((t.pathname = ""), (t.search = "")), t)
    );
  }
  var Waa = RegExp.prototype.test.bind(
      /^127\.(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){2}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/,
    ),
    zaa = RegExp.prototype.test.bind(/^(?:(?:0{1,4}:){7}|(?:0{1,4}:){1,6}:|::)0{0,3}1$/);
  function uJn(t) {
    return t.includes(":") ? (t[0] === "[" && t[t.length - 1] === "]" && (t = t.slice(1, -1)), zaa(t)) : Waa(t);
  }
  function Yaa(t) {
    return t == null || t === "null"
      ? !1
      : ((t = new URL(t)),
        !!(
          t.protocol === "https:" ||
          t.protocol === "wss:" ||
          uJn(t.hostname) ||
          t.hostname === "localhost" ||
          t.hostname === "localhost." ||
          t.hostname.endsWith(".localhost") ||
          t.hostname.endsWith(".localhost.") ||
          t.protocol === "file:"
        ));
  }
  function $z(t) {
    return fU.is.URL(t)
      ? t.href === "about:blank" || t.href === "about:srcdoc" || t.protocol === "data:" || t.protocol === "blob:"
        ? !0
        : Yaa(t.origin)
      : !1;
  }
  function Kaa(t) {}
  function Fve(t, e) {
    return (
      (t.origin === e.origin && t.origin === "null") ||
      (t.protocol === e.protocol && t.hostname === e.hostname && t.port === e.port)
    );
  }
  function Jaa(t) {
    return t.controller.state === "aborted";
  }
  function Xaa(t) {
    return t.controller.state === "aborted" || t.controller.state === "terminated";
  }
  function Zaa(t) {
    return xaa[t.toLowerCase()] ?? t;
  }
  var eua = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  function cJn(t, e, r = 0, n = 1) {
    class o {
      #e;
      #t;
      #r;
      constructor(a, u) {
        ((this.#e = a), (this.#t = u), (this.#r = 0));
      }
      next() {
        if (typeof this != "object" || this === null || !(#e in this))
          throw new TypeError(`'next' called on an object that does not implement interface ${t} Iterator.`);
        let a = this.#r,
          u = e(this.#e),
          c = u.length;
        if (a >= c) return { value: void 0, done: !0 };
        let { [r]: m, [n]: d } = u[a];
        this.#r = a + 1;
        let f;
        switch (this.#t) {
          case "key":
            f = m;
            break;
          case "value":
            f = d;
            break;
          case "key+value":
            f = [m, d];
            break;
        }
        return { value: f, done: !1 };
      }
    }
    return (
      delete o.prototype.constructor,
      Object.setPrototypeOf(o.prototype, eua),
      Object.defineProperties(o.prototype, {
        [Symbol.toStringTag]: { writable: !1, enumerable: !1, configurable: !0, value: `${t} Iterator` },
        next: { writable: !0, enumerable: !0, configurable: !0 },
      }),
      function (s, a) {
        return new o(s, a);
      }
    );
  }
  function tua(t, e, r, n = 0, o = 1) {
    let s = cJn(t, r, n, o),
      a = {
        keys: {
          writable: !0,
          enumerable: !0,
          configurable: !0,
          value: function () {
            return (fU.brandCheck(this, e), s(this, "key"));
          },
        },
        values: {
          writable: !0,
          enumerable: !0,
          configurable: !0,
          value: function () {
            return (fU.brandCheck(this, e), s(this, "value"));
          },
        },
        entries: {
          writable: !0,
          enumerable: !0,
          configurable: !0,
          value: function () {
            return (fU.brandCheck(this, e), s(this, "key+value"));
          },
        },
        forEach: {
          writable: !0,
          enumerable: !0,
          configurable: !0,
          value: function (c, m = globalThis) {
            if ((fU.brandCheck(this, e), fU.argumentLengthCheck(arguments, 1, `${t}.forEach`), typeof c != "function"))
              throw new TypeError(`Failed to execute 'forEach' on '${t}': parameter 1 is not of type 'Function'.`);
            for (let { 0: d, 1: f } of s(this, "key+value")) c.call(m, f, d, this);
          },
        },
      };
    return Object.defineProperties(e.prototype, {
      ...a,
      [Symbol.iterator]: { writable: !0, enumerable: !1, configurable: !0, value: a.entries.value },
    });
  }
  function rua(t, e, r) {
    let n = e,
      o = r;
    try {
      let s = t.stream.getReader();
      lJn(s, n, o);
    } catch (s) {
      o(s);
    }
  }
  function nua(t) {
    try {
      (t.close(), t.byobRequest?.respond(0));
    } catch (e) {
      if (
        !e.message.includes("Controller is already closed") &&
        !e.message.includes("ReadableStream is already closed")
      )
        throw e;
    }
  }
  async function lJn(t, e, r) {
    try {
      let n = [],
        o = 0;
      do {
        let { done: s, value: a } = await t.read();
        if (s) {
          e(Buffer.concat(n, o));
          return;
        }
        if (!Taa(a)) {
          r(new TypeError("Received non-Uint8Array chunk"));
          return;
        }
        (n.push(a), (o += a.length));
      } while (!0);
    } catch (n) {
      r(n);
    }
  }
  function mJn(t) {
    Uve("protocol" in t);
    let e = t.protocol;
    return e === "about:" || e === "blob:" || e === "data:";
  }
  function Qsr(t) {
    return (
      (typeof t == "string" &&
        t[5] === ":" &&
        t[0] === "h" &&
        t[1] === "t" &&
        t[2] === "t" &&
        t[3] === "p" &&
        t[4] === "s") ||
      t.protocol === "https:"
    );
  }
  function dJn(t) {
    Uve("protocol" in t);
    let e = t.protocol;
    return e === "http:" || e === "https:";
  }
  function iua(t, e) {
    let r = t;
    if (!r.startsWith("bytes")) return "failure";
    let n = { position: 5 };
    if ((e && Uz((c) => c === "	" || c === " ", r, n), r.charCodeAt(n.position) !== 61)) return "failure";
    (n.position++, e && Uz((c) => c === "	" || c === " ", r, n));
    let o = Uz(
        (c) => {
          let m = c.charCodeAt(0);
          return m >= 48 && m <= 57;
        },
        r,
        n,
      ),
      s = o.length ? Number(o) : null;
    if ((e && Uz((c) => c === "	" || c === " ", r, n), r.charCodeAt(n.position) !== 45)) return "failure";
    (n.position++, e && Uz((c) => c === "	" || c === " ", r, n));
    let a = Uz(
        (c) => {
          let m = c.charCodeAt(0);
          return m >= 48 && m <= 57;
        },
        r,
        n,
      ),
      u = a.length ? Number(a) : null;
    return n.position < r.length || (u === null && s === null) || s > u
      ? "failure"
      : { rangeStartValue: s, rangeEndValue: u };
  }
  function oua(t, e, r) {
    let n = "bytes ";
    return ((n += $sr(`${t}`)), (n += "-"), (n += $sr(`${e}`)), (n += "/"), (n += $sr(`${r}`)), n);
  }
  var Gsr = class extends Aaa {
    #e;
    constructor(e) {
      (super(), (this.#e = e));
    }
    _transform(e, r, n) {
      if (!this._inflateStream) {
        if (e.length === 0) {
          n();
          return;
        }
        ((this._inflateStream = (e[0] & 15) === 8 ? tJn.createInflate(this.#e) : tJn.createInflateRaw(this.#e)),
          this._inflateStream.on("data", this.push.bind(this)),
          this._inflateStream.on("end", () => this.push(null)),
          this._inflateStream.on("error", (o) => this.destroy(o)));
      }
      this._inflateStream.write(e, r, n);
    }
    _final(e) {
      (this._inflateStream && (this._inflateStream.end(), (this._inflateStream = null)), e());
    }
  };
  function sua(t) {
    return new Gsr(t);
  }
  function aua(t) {
    let e = null,
      r = null,
      n = null,
      o = fJn("content-type", t);
    if (o === null) return "failure";
    for (let s of o) {
      let a = Caa(s);
      a === "failure" ||
        a.essence === "*/*" ||
        ((n = a),
        n.essence !== r
          ? ((e = null), n.parameters.has("charset") && (e = n.parameters.get("charset")), (r = n.essence))
          : !n.parameters.has("charset") && e !== null && n.parameters.set("charset", e));
    }
    return n ?? "failure";
  }
  function uua(t) {
    let e = t,
      r = { position: 0 },
      n = [],
      o = "";
    for (; r.position < e.length; ) {
      if (((o += Uz((s) => s !== '"' && s !== ",", e, r)), r.position < e.length))
        if (e.charCodeAt(r.position) === 34) {
          if (((o += vaa(e, r)), r.position < e.length)) continue;
        } else (Uve(e.charCodeAt(r.position) === 44), r.position++);
      ((o = Daa(o, !0, !0, (s) => s === 9 || s === 32)), n.push(o), (o = ""));
    }
    return n;
  }
  function fJn(t, e) {
    let r = e.get(t, !0);
    return r === null ? null : uua(r);
  }
  var qsr = class {
      get baseUrl() {
        return rJn();
      }
      get origin() {
        return this.baseUrl?.origin;
      }
      policyContainer = aJn();
    },
    Hsr = class {
      settingsObject = new qsr();
    },
    cua = new Hsr();
  pJn.exports = {
    isAborted: Jaa,
    isCancelled: Xaa,
    isValidEncodedURL: oJn,
    ReadableStreamFrom: waa,
    tryUpgradeRequestToAPotentiallyTrustworthyURL: Kaa,
    clampAndCoarsenConnectionTimingInfo: Qaa,
    coarsenedSharedCurrentTime: Gaa,
    determineRequestsReferrer: Vaa,
    makePolicyContainer: aJn,
    clonePolicyContainer: Haa,
    appendFetchMetadata: $aa,
    appendRequestOriginHeader: jaa,
    TAOCheck: Uaa,
    corsCheck: Faa,
    crossOriginResourcePolicyCheck: Maa,
    createOpaqueTimingInfo: qaa,
    setRequestReferrerPolicyOnRedirect: Laa,
    isValidHTTPToken: nJn,
    requestBadPort: kaa,
    requestCurrentURL: jz,
    responseURL: iJn,
    responseLocationURL: Iaa,
    isURLPotentiallyTrustworthy: $z,
    isValidReasonPhrase: Naa,
    sameOrigin: Fve,
    normalizeMethod: Zaa,
    iteratorMixin: tua,
    createIterator: cJn,
    isValidHeaderName: Paa,
    isValidHeaderValue: sJn,
    isErrorLike: Oaa,
    fullyReadBody: rua,
    readableStreamClose: nua,
    urlIsLocal: mJn,
    urlHasHttpsScheme: Qsr,
    urlIsHttpHttpsScheme: dJn,
    readAllBytes: lJn,
    simpleRangeHeaderValue: iua,
    buildContentRange: oua,
    createInflate: sua,
    extractMimeType: aua,
    getDecodeSplit: fJn,
    environmentSettingsObject: cua,
    isOriginIPPotentiallyTrustworthy: uJn,
  };
});