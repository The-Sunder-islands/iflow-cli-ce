/**
 * @module ks
 * @category utils/events
 * @label events
 * @position 1480 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ks) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ks = T((yvc, tKn) => {
  "use strict";
  var Ive = Ae("node:assert"),
    { kDestroyed: UYn, kBodyUsed: tle, kListeners: Iit, kBody: LYn } = n0(),
    { IncomingMessage: eoa } = Ae("node:http"),
    $Yn = Ae("node:stream"),
    toa = Ae("node:net"),
    { stringify: roa } = Ae("node:querystring"),
    { EventEmitter: noa } = Ae("node:events"),
    Dit = $or(),
    { InvalidArgumentError: i3, ConnectTimeoutError: ioa } = da(),
    { headerNameLowerCasedRecord: ooa } = xit(),
    { tree: jYn } = BYn(),
    [soa, aoa] = process.versions.node.split(".", 2).map((t) => Number(t)),
    kit = class {
      constructor(e) {
        ((this[LYn] = e), (this[tle] = !1));
      }
      async *[Symbol.asyncIterator]() {
        (Ive(!this[tle], "disturbed"), (this[tle] = !0), yield* this[LYn]);
      }
    };
  function MYn() {}
  function uoa(t) {
    return Oit(t)
      ? (WYn(t) === 0 &&
          t.on("data", function () {
            Ive(!1);
          }),
        typeof t.readableDidRead != "boolean" &&
          ((t[tle] = !1),
          noa.prototype.on.call(t, "data", function () {
            this[tle] = !0;
          })),
        t)
      : t && typeof t.pipeTo == "function"
        ? new kit(t)
        : t && typeof t != "string" && !ArrayBuffer.isView(t) && VYn(t)
          ? new kit(t)
          : t;
  }
  function Oit(t) {
    return t && typeof t == "object" && typeof t.pipe == "function" && typeof t.on == "function";
  }
  function QYn(t) {
    if (t === null) return !1;
    if (t instanceof Blob) return !0;
    if (typeof t != "object") return !1;
    {
      let e = t[Symbol.toStringTag];
      return (
        (e === "Blob" || e === "File") &&
        (("stream" in t && typeof t.stream == "function") || ("arrayBuffer" in t && typeof t.arrayBuffer == "function"))
      );
    }
  }
  function GYn(t) {
    return t.includes("?") || t.includes("#");
  }
  function coa(t, e) {
    if (GYn(t)) throw new Error('Query params cannot be passed when url already contains "?" or "#".');
    let r = roa(e);
    return (r && (t += "?" + r), t);
  }
  function qYn(t) {
    let e = parseInt(t, 10);
    return e === Number(t) && e >= 0 && e <= 65535;
  }
  function Rit(t) {
    return (
      t != null &&
      t[0] === "h" &&
      t[1] === "t" &&
      t[2] === "t" &&
      t[3] === "p" &&
      (t[4] === ":" || (t[4] === "s" && t[5] === ":"))
    );
  }
  function HYn(t) {
    if (typeof t == "string") {
      if (((t = new URL(t)), !Rit(t.origin || t.protocol)))
        throw new i3("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      return t;
    }
    if (!t || typeof t != "object") throw new i3("Invalid URL: The URL argument must be a non-null object.");
    if (!(t instanceof URL)) {
      if (t.port != null && t.port !== "" && qYn(t.port) === !1)
        throw new i3("Invalid URL: port must be a valid integer or a string representation of an integer.");
      if (t.path != null && typeof t.path != "string")
        throw new i3("Invalid URL path: the path must be a string or null/undefined.");
      if (t.pathname != null && typeof t.pathname != "string")
        throw new i3("Invalid URL pathname: the pathname must be a string or null/undefined.");
      if (t.hostname != null && typeof t.hostname != "string")
        throw new i3("Invalid URL hostname: the hostname must be a string or null/undefined.");
      if (t.origin != null && typeof t.origin != "string")
        throw new i3("Invalid URL origin: the origin must be a string or null/undefined.");
      if (!Rit(t.origin || t.protocol))
        throw new i3("Invalid URL protocol: the URL must start with `http:` or `https:`.");
      let e = t.port != null ? t.port : t.protocol === "https:" ? 443 : 80,
        r = t.origin != null ? t.origin : `${t.protocol || ""}//${t.hostname || ""}:${e}`,
        n = t.path != null ? t.path : `${t.pathname || ""}${t.search || ""}`;
      return (
        r[r.length - 1] === "/" && (r = r.slice(0, r.length - 1)),
        n && n[0] !== "/" && (n = `/${n}`),
        new URL(`${r}${n}`)
      );
    }
    if (!Rit(t.origin || t.protocol))
      throw new i3("Invalid URL protocol: the URL must start with `http:` or `https:`.");
    return t;
  }
  function loa(t) {
    if (((t = HYn(t)), t.pathname !== "/" || t.search || t.hash)) throw new i3("invalid url");
    return t;
  }
  function moa(t) {
    if (t[0] === "[") {
      let r = t.indexOf("]");
      return (Ive(r !== -1), t.substring(1, r));
    }
    let e = t.indexOf(":");
    return e === -1 ? t : t.substring(0, e);
  }
  function doa(t) {
    if (!t) return null;
    Ive(typeof t == "string");
    let e = moa(t);
    return toa.isIP(e) ? "" : e;
  }
  function foa(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function poa(t) {
    return t != null && typeof t[Symbol.asyncIterator] == "function";
  }
  function VYn(t) {
    return t != null && (typeof t[Symbol.iterator] == "function" || typeof t[Symbol.asyncIterator] == "function");
  }
  function WYn(t) {
    if (t == null) return 0;
    if (Oit(t)) {
      let e = t._readableState;
      return e && e.objectMode === !1 && e.ended === !0 && Number.isFinite(e.length) ? e.length : null;
    } else {
      if (QYn(t)) return t.size != null ? t.size : null;
      if (JYn(t)) return t.byteLength;
    }
    return null;
  }
  function zYn(t) {
    return t && !!(t.destroyed || t[UYn] || $Yn.isDestroyed?.(t));
  }
  function YYn(t, e) {
    t == null ||
      !Oit(t) ||
      zYn(t) ||
      (typeof t.destroy == "function"
        ? (Object.getPrototypeOf(t).constructor === eoa && (t.socket = null), t.destroy(e))
        : e &&
          queueMicrotask(() => {
            t.emit("error", e);
          }),
      t.destroyed !== !0 && (t[UYn] = !0));
  }
  var hoa = /timeout=(\d+)/;
  function goa(t) {
    let e = t.match(hoa);
    return e ? parseInt(e[1], 10) * 1e3 : null;
  }
  function KYn(t) {
    return typeof t == "string" ? (ooa[t] ?? t.toLowerCase()) : (jYn.lookup(t) ?? t.toString("latin1").toLowerCase());
  }
  function boa(t) {
    return jYn.lookup(t) ?? t.toString("latin1").toLowerCase();
  }
  function Aoa(t, e) {
    e === void 0 && (e = {});
    for (let r = 0; r < t.length; r += 2) {
      let n = KYn(t[r]),
        o = e[n];
      if (o) (typeof o == "string" && ((o = [o]), (e[n] = o)), o.push(t[r + 1].toString("utf8")));
      else {
        let s = t[r + 1];
        typeof s == "string"
          ? (e[n] = s)
          : (e[n] = Array.isArray(s) ? s.map((a) => a.toString("utf8")) : s.toString("utf8"));
      }
    }
    return (
      "content-length" in e &&
        "content-disposition" in e &&
        (e["content-disposition"] = Buffer.from(e["content-disposition"]).toString("latin1")),
      e
    );
  }
  function yoa(t) {
    let e = t.length,
      r = new Array(e),
      n = !1,
      o = -1,
      s,
      a,
      u = 0;
    for (let c = 0; c < e; c += 2)
      ((s = t[c]),
        (a = t[c + 1]),
        typeof s != "string" && (s = s.toString()),
        typeof a != "string" && (a = a.toString("utf8")),
        (u = s.length),
        u === 14 && s[7] === "-" && (s === "content-length" || s.toLowerCase() === "content-length")
          ? (n = !0)
          : u === 19 &&
            s[7] === "-" &&
            (s === "content-disposition" || s.toLowerCase() === "content-disposition") &&
            (o = c + 1),
        (r[c] = s),
        (r[c + 1] = a));
    return (n && o !== -1 && (r[o] = Buffer.from(r[o]).toString("latin1")), r);
  }
  function _oa(t) {
    if (!Array.isArray(t)) throw new TypeError("expected headers to be an array");
    return t.map((e) => Buffer.from(e));
  }
  function JYn(t) {
    return t instanceof Uint8Array || Buffer.isBuffer(t);
  }
  function Eoa(t, e, r) {
    if (!t || typeof t != "object") throw new i3("handler must be an object");
    if (typeof t.onRequestStart != "function") {
      if (typeof t.onConnect != "function") throw new i3("invalid onConnect method");
      if (typeof t.onError != "function") throw new i3("invalid onError method");
      if (typeof t.onBodySent != "function" && t.onBodySent !== void 0) throw new i3("invalid onBodySent method");
      if (r || e === "CONNECT") {
        if (typeof t.onUpgrade != "function") throw new i3("invalid onUpgrade method");
      } else {
        if (typeof t.onHeaders != "function") throw new i3("invalid onHeaders method");
        if (typeof t.onData != "function") throw new i3("invalid onData method");
        if (typeof t.onComplete != "function") throw new i3("invalid onComplete method");
      }
    }
  }
  function voa(t) {
    return !!(t && ($Yn.isDisturbed(t) || t[tle]));
  }
  function Coa(t) {
    return {
      localAddress: t.localAddress,
      localPort: t.localPort,
      remoteAddress: t.remoteAddress,
      remotePort: t.remotePort,
      remoteFamily: t.remoteFamily,
      timeout: t.timeout,
      bytesWritten: t.bytesWritten,
      bytesRead: t.bytesRead,
    };
  }
  function Soa(t) {
    let e;
    return new ReadableStream({
      start() {
        e = t[Symbol.asyncIterator]();
      },
      pull(r) {
        return e.next().then(({ done: n, value: o }) => {
          if (n)
            return queueMicrotask(() => {
              (r.close(), r.byobRequest?.respond(0));
            });
          {
            let s = Buffer.isBuffer(o) ? o : Buffer.from(o);
            return s.byteLength ? r.enqueue(new Uint8Array(s)) : this.pull(r);
          }
        });
      },
      cancel() {
        return e.return();
      },
      type: "bytes",
    });
  }
  function woa(t) {
    return (
      t &&
      typeof t == "object" &&
      typeof t.append == "function" &&
      typeof t.delete == "function" &&
      typeof t.get == "function" &&
      typeof t.getAll == "function" &&
      typeof t.has == "function" &&
      typeof t.set == "function" &&
      t[Symbol.toStringTag] === "FormData"
    );
  }
  function xoa(t, e) {
    return "addEventListener" in t
      ? (t.addEventListener("abort", e, { once: !0 }), () => t.removeEventListener("abort", e))
      : (t.once("abort", e), () => t.removeListener("abort", e));
  }
  var XYn = new Uint8Array([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1,
    1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  function Toa(t) {
    return XYn[t] === 1;
  }
  var Doa = /^[\^_`a-zA-Z\-0-9!#$%&'*+.|~]+$/;
  function Ioa(t) {
    if (t.length >= 12) return Doa.test(t);
    if (t.length === 0) return !1;
    for (let e = 0; e < t.length; e++) if (XYn[t.charCodeAt(e)] !== 1) return !1;
    return !0;
  }
  var Roa = /[^\t\x20-\x7e\x80-\xff]/;
  function koa(t) {
    return !Roa.test(t);
  }
  var Ooa = /^bytes (\d+)-(\d+)\/(\d+)?$/;
  function Noa(t) {
    if (t == null || t === "") return { start: 0, end: null, size: null };
    let e = t ? t.match(Ooa) : null;
    return e ? { start: parseInt(e[1]), end: e[2] ? parseInt(e[2]) : null, size: e[3] ? parseInt(e[3]) : null } : null;
  }
  function Poa(t, e, r) {
    return ((t[Iit] ??= []).push([e, r]), t.on(e, r), t);
  }
  function Boa(t) {
    if (t[Iit] != null) {
      for (let [e, r] of t[Iit]) t.removeListener(e, r);
      t[Iit] = null;
    }
    return t;
  }
  function Loa(t, e, r) {
    try {
      (e.onError(r), Ive(e.aborted));
    } catch (n) {
      t.emit("error", n);
    }
  }
  var Moa =
    process.platform === "win32"
      ? (t, e) => {
          if (!e.timeout) return MYn;
          let r = null,
            n = null,
            o = Dit.setFastTimeout(() => {
              r = setImmediate(() => {
                n = setImmediate(() => FYn(t.deref(), e));
              });
            }, e.timeout);
          return () => {
            (Dit.clearFastTimeout(o), clearImmediate(r), clearImmediate(n));
          };
        }
      : (t, e) => {
          if (!e.timeout) return MYn;
          let r = null,
            n = Dit.setFastTimeout(() => {
              r = setImmediate(() => {
                FYn(t.deref(), e);
              });
            }, e.timeout);
          return () => {
            (Dit.clearFastTimeout(n), clearImmediate(r));
          };
        };
  function FYn(t, e) {
    if (t == null) return;
    let r = "Connect Timeout Error";
    (Array.isArray(t.autoSelectFamilyAttemptedAddresses)
      ? (r += ` (attempted addresses: ${t.autoSelectFamilyAttemptedAddresses.join(", ")},`)
      : (r += ` (attempted address: ${e.hostname}:${e.port},`),
      (r += ` timeout: ${e.timeout}ms)`),
      YYn(t, new ioa(r)));
  }
  function Foa(t) {
    if (t[0] === "h" && t[1] === "t" && t[2] === "t" && t[3] === "p")
      switch (t[4]) {
        case ":":
          return "http:";
        case "s":
          if (t[5] === ":") return "https:";
      }
    return t.slice(0, t.indexOf(":") + 1);
  }
  var ZYn = Object.create(null);
  ZYn.enumerable = !0;
  var lsr = {
      delete: "DELETE",
      DELETE: "DELETE",
      get: "GET",
      GET: "GET",
      head: "HEAD",
      HEAD: "HEAD",
      options: "OPTIONS",
      OPTIONS: "OPTIONS",
      post: "POST",
      POST: "POST",
      put: "PUT",
      PUT: "PUT",
    },
    eKn = { ...lsr, patch: "patch", PATCH: "PATCH" };
  Object.setPrototypeOf(lsr, null);
  Object.setPrototypeOf(eKn, null);
  tKn.exports = {
    kEnumerableProperty: ZYn,
    isDisturbed: voa,
    isBlobLike: QYn,
    parseOrigin: loa,
    parseURL: HYn,
    getServerName: doa,
    isStream: Oit,
    isIterable: VYn,
    isAsyncIterable: poa,
    isDestroyed: zYn,
    headerNameToString: KYn,
    bufferToLowerCasedHeaderName: boa,
    addListener: Poa,
    removeAllListeners: Boa,
    errorRequest: Loa,
    parseRawHeaders: yoa,
    encodeRawHeaders: _oa,
    parseHeaders: Aoa,
    parseKeepAliveTimeout: goa,
    destroy: YYn,
    bodyLength: WYn,
    deepClone: foa,
    ReadableStreamFrom: Soa,
    isBuffer: JYn,
    assertRequestHandler: Eoa,
    getSocketInfo: Coa,
    isFormDataLike: woa,
    pathHasQueryOrFragment: GYn,
    serializePathWithQuery: coa,
    addAbortListener: xoa,
    isValidHTTPToken: Ioa,
    isValidHeaderValue: koa,
    isTokenCharCode: Toa,
    parseRangeHeader: Noa,
    normalizedMethodRecordsBase: lsr,
    normalizedMethodRecords: eKn,
    isValidPort: qYn,
    isHttpOrHttpsPrefixed: Rit,
    nodeMajor: soa,
    nodeMinor: aoa,
    safeHTTPMethods: Object.freeze(["GET", "HEAD", "OPTIONS", "TRACE"]),
    wrapRequestBody: uoa,
    setupConnectTimeout: Moa,
    getProtocolFromUrlString: Foa,
  };
});