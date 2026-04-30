/**
 * @module GIr
 * @category network/http
 * @label undici
 * @position 42 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GIr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GIr = T((SC, QIr) => {
  "use strict";
  Object.defineProperty(SC, "__esModule", { value: !0 });
  function wee(t) {
    return t && typeof t == "object" && "default" in t ? t.default : t;
  }
  var CC = wee(Ae("stream")),
    BIr = wee(Ae("http")),
    ike = wee(Ae("url")),
    LIr = wee(kIr()),
    c1o = wee(Ae("https")),
    fG = wee(Ae("zlib")),
    l1o = CC.Readable,
    uR = Symbol("buffer"),
    g6t = Symbol("type"),
    e3e = class t {
      constructor() {
        this[g6t] = "";
        let e = arguments[0],
          r = arguments[1],
          n = [],
          o = 0;
        if (e) {
          let a = e,
            u = Number(a.length);
          for (let c = 0; c < u; c++) {
            let m = a[c],
              d;
            (m instanceof Buffer
              ? (d = m)
              : ArrayBuffer.isView(m)
                ? (d = Buffer.from(m.buffer, m.byteOffset, m.byteLength))
                : m instanceof ArrayBuffer
                  ? (d = Buffer.from(m))
                  : m instanceof t
                    ? (d = m[uR])
                    : (d = Buffer.from(typeof m == "string" ? m : String(m))),
              (o += d.length),
              n.push(d));
          }
        }
        this[uR] = Buffer.concat(n);
        let s = r && r.type !== void 0 && String(r.type).toLowerCase();
        s && !/[^\u0020-\u007E]/.test(s) && (this[g6t] = s);
      }
      get size() {
        return this[uR].length;
      }
      get type() {
        return this[g6t];
      }
      text() {
        return Promise.resolve(this[uR].toString());
      }
      arrayBuffer() {
        let e = this[uR],
          r = e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        return Promise.resolve(r);
      }
      stream() {
        let e = new l1o();
        return ((e._read = function () {}), e.push(this[uR]), e.push(null), e);
      }
      toString() {
        return "[object Blob]";
      }
      slice() {
        let e = this.size,
          r = arguments[0],
          n = arguments[1],
          o,
          s;
        (r === void 0 ? (o = 0) : r < 0 ? (o = Math.max(e + r, 0)) : (o = Math.min(r, e)),
          n === void 0 ? (s = e) : n < 0 ? (s = Math.max(e + n, 0)) : (s = Math.min(n, e)));
        let a = Math.max(s - o, 0),
          c = this[uR].slice(o, o + a),
          m = new t([], { type: arguments[2] });
        return ((m[uR] = c), m);
      }
    };
  Object.defineProperties(e3e.prototype, {
    size: { enumerable: !0 },
    type: { enumerable: !0 },
    slice: { enumerable: !0 },
  });
  Object.defineProperty(e3e.prototype, Symbol.toStringTag, {
    value: "Blob",
    writable: !1,
    enumerable: !1,
    configurable: !0,
  });
  function W3(t, e, r) {
    (Error.call(this, t),
      (this.message = t),
      (this.type = e),
      r && (this.code = this.errno = r.code),
      Error.captureStackTrace(this, this.constructor));
  }
  W3.prototype = Object.create(Error.prototype);
  W3.prototype.constructor = W3;
  W3.prototype.name = "FetchError";
  var _6t;
  try {
    _6t = Ae("encoding").convert;
  } catch {}
  var lR = Symbol("Body internals"),
    OIr = CC.PassThrough;
  function xh(t) {
    var e = this,
      r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = r.size;
    let o = n === void 0 ? 0 : n;
    var s = r.timeout;
    let a = s === void 0 ? 0 : s;
    (t == null
      ? (t = null)
      : MIr(t)
        ? (t = Buffer.from(t.toString()))
        : r3e(t) ||
          Buffer.isBuffer(t) ||
          (Object.prototype.toString.call(t) === "[object ArrayBuffer]"
            ? (t = Buffer.from(t))
            : ArrayBuffer.isView(t)
              ? (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength))
              : t instanceof CC || (t = Buffer.from(String(t)))),
      (this[lR] = { body: t, disturbed: !1, error: null }),
      (this.size = o),
      (this.timeout = a),
      t instanceof CC &&
        t.on("error", function (u) {
          let c =
            u.name === "AbortError"
              ? u
              : new W3(`Invalid response body while trying to fetch ${e.url}: ${u.message}`, "system", u);
          e[lR].error = c;
        }));
  }
  xh.prototype = {
    get body() {
      return this[lR].body;
    },
    get bodyUsed() {
      return this[lR].disturbed;
    },
    arrayBuffer() {
      return vee.call(this).then(function (t) {
        return t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
      });
    },
    blob() {
      let t = (this.headers && this.headers.get("content-type")) || "";
      return vee.call(this).then(function (e) {
        return Object.assign(new e3e([], { type: t.toLowerCase() }), { [uR]: e });
      });
    },
    json() {
      var t = this;
      return vee.call(this).then(function (e) {
        try {
          return JSON.parse(e.toString());
        } catch (r) {
          return xh.Promise.reject(
            new W3(`invalid json response body at ${t.url} reason: ${r.message}`, "invalid-json"),
          );
        }
      });
    },
    text() {
      return vee.call(this).then(function (t) {
        return t.toString();
      });
    },
    buffer() {
      return vee.call(this);
    },
    textConverted() {
      var t = this;
      return vee.call(this).then(function (e) {
        return m1o(e, t.headers);
      });
    },
  };
  Object.defineProperties(xh.prototype, {
    body: { enumerable: !0 },
    bodyUsed: { enumerable: !0 },
    arrayBuffer: { enumerable: !0 },
    blob: { enumerable: !0 },
    json: { enumerable: !0 },
    text: { enumerable: !0 },
  });
  xh.mixIn = function (t) {
    for (let e of Object.getOwnPropertyNames(xh.prototype))
      if (!(e in t)) {
        let r = Object.getOwnPropertyDescriptor(xh.prototype, e);
        Object.defineProperty(t, e, r);
      }
  };
  function vee() {
    var t = this;
    if (this[lR].disturbed) return xh.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    if (((this[lR].disturbed = !0), this[lR].error)) return xh.Promise.reject(this[lR].error);
    let e = this.body;
    if (e === null) return xh.Promise.resolve(Buffer.alloc(0));
    if ((r3e(e) && (e = e.stream()), Buffer.isBuffer(e))) return xh.Promise.resolve(e);
    if (!(e instanceof CC)) return xh.Promise.resolve(Buffer.alloc(0));
    let r = [],
      n = 0,
      o = !1;
    return new xh.Promise(function (s, a) {
      let u;
      (t.timeout &&
        (u = setTimeout(function () {
          ((o = !0),
            a(new W3(`Response timeout while trying to fetch ${t.url} (over ${t.timeout}ms)`, "body-timeout")));
        }, t.timeout)),
        e.on("error", function (c) {
          c.name === "AbortError"
            ? ((o = !0), a(c))
            : a(new W3(`Invalid response body while trying to fetch ${t.url}: ${c.message}`, "system", c));
        }),
        e.on("data", function (c) {
          if (!(o || c === null)) {
            if (t.size && n + c.length > t.size) {
              ((o = !0), a(new W3(`content size at ${t.url} over limit: ${t.size}`, "max-size")));
              return;
            }
            ((n += c.length), r.push(c));
          }
        }),
        e.on("end", function () {
          if (!o) {
            clearTimeout(u);
            try {
              s(Buffer.concat(r, n));
            } catch (c) {
              a(new W3(`Could not create Buffer from response body for ${t.url}: ${c.message}`, "system", c));
            }
          }
        }));
    });
  }
  function m1o(t, e) {
    if (typeof _6t != "function")
      throw new Error("The package `encoding` must be installed to use the textConverted() function");
    let r = e.get("content-type"),
      n = "utf-8",
      o,
      s;
    return (
      r && (o = /charset=([^;]*)/i.exec(r)),
      (s = t.slice(0, 1024).toString()),
      !o && s && (o = /<meta.+?charset=(['"])(.+?)\1/i.exec(s)),
      !o &&
        s &&
        ((o = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(s)),
        o || ((o = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(s)), o && o.pop()),
        o && (o = /charset=(.*)/i.exec(o.pop()))),
      !o && s && (o = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(s)),
      o && ((n = o.pop()), (n === "gb2312" || n === "gbk") && (n = "gb18030")),
      _6t(t, "UTF-8", n).toString()
    );
  }
  function MIr(t) {
    return typeof t != "object" ||
      typeof t.append != "function" ||
      typeof t.delete != "function" ||
      typeof t.get != "function" ||
      typeof t.getAll != "function" ||
      typeof t.has != "function" ||
      typeof t.set != "function"
      ? !1
      : t.constructor.name === "URLSearchParams" ||
          Object.prototype.toString.call(t) === "[object URLSearchParams]" ||
          typeof t.sort == "function";
  }
  function r3e(t) {
    return (
      typeof t == "object" &&
      typeof t.arrayBuffer == "function" &&
      typeof t.type == "string" &&
      typeof t.stream == "function" &&
      typeof t.constructor == "function" &&
      typeof t.constructor.name == "string" &&
      /^(Blob|File)$/.test(t.constructor.name) &&
      /^(Blob|File)$/.test(t[Symbol.toStringTag])
    );
  }
  function FIr(t) {
    let e,
      r,
      n = t.body;
    if (t.bodyUsed) throw new Error("cannot clone body after it is used");
    return (
      n instanceof CC &&
        typeof n.getBoundary != "function" &&
        ((e = new OIr()), (r = new OIr()), n.pipe(e), n.pipe(r), (t[lR].body = e), (n = r)),
      n
    );
  }
  function UIr(t) {
    return t === null
      ? null
      : typeof t == "string"
        ? "text/plain;charset=UTF-8"
        : MIr(t)
          ? "application/x-www-form-urlencoded;charset=UTF-8"
          : r3e(t)
            ? t.type || null
            : Buffer.isBuffer(t) ||
                Object.prototype.toString.call(t) === "[object ArrayBuffer]" ||
                ArrayBuffer.isView(t)
              ? null
              : typeof t.getBoundary == "function"
                ? `multipart/form-data;boundary=${t.getBoundary()}`
                : t instanceof CC
                  ? null
                  : "text/plain;charset=UTF-8";
  }
  function $Ir(t) {
    let e = t.body;
    return e === null
      ? 0
      : r3e(e)
        ? e.size
        : Buffer.isBuffer(e)
          ? e.length
          : e &&
              typeof e.getLengthSync == "function" &&
              ((e._lengthRetrievers && e._lengthRetrievers.length == 0) || (e.hasKnownLength && e.hasKnownLength()))
            ? e.getLengthSync()
            : null;
  }
  function d1o(t, e) {
    let r = e.body;
    r === null ? t.end() : r3e(r) ? r.stream().pipe(t) : Buffer.isBuffer(r) ? (t.write(r), t.end()) : r.pipe(t);
  }
  xh.Promise = global.Promise;
  var jIr = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,
    E6t = /[^\t\x20-\x7e\x80-\xff]/;
  function Zhe(t) {
    if (((t = `${t}`), jIr.test(t) || t === "")) throw new TypeError(`${t} is not a legal HTTP header name`);
  }
  function NIr(t) {
    if (((t = `${t}`), E6t.test(t))) throw new TypeError(`${t} is not a legal HTTP header value`);
  }
  function Cee(t, e) {
    e = e.toLowerCase();
    for (let r in t) if (r.toLowerCase() === e) return r;
  }
  var F1 = Symbol("map"),
    p_ = class t {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
        if (((this[F1] = Object.create(null)), e instanceof t)) {
          let r = e.raw(),
            n = Object.keys(r);
          for (let o of n) for (let s of r[o]) this.append(o, s);
          return;
        }
        if (e != null)
          if (typeof e == "object") {
            let r = e[Symbol.iterator];
            if (r != null) {
              if (typeof r != "function") throw new TypeError("Header pairs must be iterable");
              let n = [];
              for (let o of e) {
                if (typeof o != "object" || typeof o[Symbol.iterator] != "function")
                  throw new TypeError("Each header pair must be iterable");
                n.push(Array.from(o));
              }
              for (let o of n) {
                if (o.length !== 2) throw new TypeError("Each header pair must be a name/value tuple");
                this.append(o[0], o[1]);
              }
            } else
              for (let n of Object.keys(e)) {
                let o = e[n];
                this.append(n, o);
              }
          } else throw new TypeError("Provided initializer must be an object");
      }
      get(e) {
        ((e = `${e}`), Zhe(e));
        let r = Cee(this[F1], e);
        return r === void 0 ? null : this[F1][r].join(", ");
      }
      forEach(e) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
          n = v6t(this),
          o = 0;
        for (; o < n.length; ) {
          var s = n[o];
          let a = s[0],
            u = s[1];
          (e.call(r, u, a, this), (n = v6t(this)), o++);
        }
      }
      set(e, r) {
        ((e = `${e}`), (r = `${r}`), Zhe(e), NIr(r));
        let n = Cee(this[F1], e);
        this[F1][n !== void 0 ? n : e] = [r];
      }
      append(e, r) {
        ((e = `${e}`), (r = `${r}`), Zhe(e), NIr(r));
        let n = Cee(this[F1], e);
        n !== void 0 ? this[F1][n].push(r) : (this[F1][e] = [r]);
      }
      has(e) {
        return ((e = `${e}`), Zhe(e), Cee(this[F1], e) !== void 0);
      }
      delete(e) {
        ((e = `${e}`), Zhe(e));
        let r = Cee(this[F1], e);
        r !== void 0 && delete this[F1][r];
      }
      raw() {
        return this[F1];
      }
      keys() {
        return b6t(this, "key");
      }
      values() {
        return b6t(this, "value");
      }
      [Symbol.iterator]() {
        return b6t(this, "key+value");
      }
    };
  p_.prototype.entries = p_.prototype[Symbol.iterator];
  Object.defineProperty(p_.prototype, Symbol.toStringTag, {
    value: "Headers",
    writable: !1,
    enumerable: !1,
    configurable: !0,
  });
  Object.defineProperties(p_.prototype, {
    get: { enumerable: !0 },
    forEach: { enumerable: !0 },
    set: { enumerable: !0 },
    append: { enumerable: !0 },
    has: { enumerable: !0 },
    delete: { enumerable: !0 },
    keys: { enumerable: !0 },
    values: { enumerable: !0 },
    entries: { enumerable: !0 },
  });
  function v6t(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key+value";
    return Object.keys(t[F1])
      .sort()
      .map(
        e === "key"
          ? function (n) {
              return n.toLowerCase();
            }
          : e === "value"
            ? function (n) {
                return t[F1][n].join(", ");
              }
            : function (n) {
                return [n.toLowerCase(), t[F1][n].join(", ")];
              },
      );
  }
  var C6t = Symbol("internal");
  function b6t(t, e) {
    let r = Object.create(S6t);
    return ((r[C6t] = { target: t, kind: e, index: 0 }), r);
  }
  var S6t = Object.setPrototypeOf(
    {
      next() {
        if (!this || Object.getPrototypeOf(this) !== S6t)
          throw new TypeError("Value of `this` is not a HeadersIterator");
        var t = this[C6t];
        let e = t.target,
          r = t.kind,
          n = t.index,
          o = v6t(e, r),
          s = o.length;
        return n >= s ? { value: void 0, done: !0 } : ((this[C6t].index = n + 1), { value: o[n], done: !1 });
      },
    },
    Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())),
  );
  Object.defineProperty(S6t, Symbol.toStringTag, {
    value: "HeadersIterator",
    writable: !1,
    enumerable: !1,
    configurable: !0,
  });
  function f1o(t) {
    let e = Object.assign({ __proto__: null }, t[F1]),
      r = Cee(t[F1], "Host");
    return (r !== void 0 && (e[r] = e[r][0]), e);
  }
  function p1o(t) {
    let e = new p_();
    for (let r of Object.keys(t))
      if (!jIr.test(r))
        if (Array.isArray(t[r]))
          for (let n of t[r]) E6t.test(n) || (e[F1][r] === void 0 ? (e[F1][r] = [n]) : e[F1][r].push(n));
        else E6t.test(t[r]) || (e[F1][r] = [t[r]]);
    return e;
  }
  var sB = Symbol("Response internals"),
    h1o = BIr.STATUS_CODES,
    f_ = class t {
      constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
          r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        xh.call(this, e, r);
        let n = r.status || 200,
          o = new p_(r.headers);
        if (e != null && !o.has("Content-Type")) {
          let s = UIr(e);
          s && o.append("Content-Type", s);
        }
        this[sB] = { url: r.url, status: n, statusText: r.statusText || h1o[n], headers: o, counter: r.counter };
      }
      get url() {
        return this[sB].url || "";
      }
      get status() {
        return this[sB].status;
      }
      get ok() {
        return this[sB].status >= 200 && this[sB].status < 300;
      }
      get redirected() {
        return this[sB].counter > 0;
      }
      get statusText() {
        return this[sB].statusText;
      }
      get headers() {
        return this[sB].headers;
      }
      clone() {
        return new t(FIr(this), {
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
        });
      }
    };
  xh.mixIn(f_.prototype);
  Object.defineProperties(f_.prototype, {
    url: { enumerable: !0 },
    status: { enumerable: !0 },
    ok: { enumerable: !0 },
    redirected: { enumerable: !0 },
    statusText: { enumerable: !0 },
    headers: { enumerable: !0 },
    clone: { enumerable: !0 },
  });
  Object.defineProperty(f_.prototype, Symbol.toStringTag, {
    value: "Response",
    writable: !1,
    enumerable: !1,
    configurable: !0,
  });
  var cR = Symbol("Request internals"),
    g1o = ike.URL || LIr.URL,
    b1o = ike.parse,
    A1o = ike.format;
  function A6t(t) {
    return (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(t) && (t = new g1o(t).toString()), b1o(t));
  }
  var y1o = "destroy" in CC.Readable.prototype;
  function nke(t) {
    return typeof t == "object" && typeof t[cR] == "object";
  }
  function _1o(t) {
    let e = t && typeof t == "object" && Object.getPrototypeOf(t);
    return !!(e && e.constructor.name === "AbortSignal");
  }
  var uB = class t {
    constructor(e) {
      let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n;
      nke(e) ? (n = A6t(e.url)) : (e && e.href ? (n = A6t(e.href)) : (n = A6t(`${e}`)), (e = {}));
      let o = r.method || e.method || "GET";
      if (((o = o.toUpperCase()), (r.body != null || (nke(e) && e.body !== null)) && (o === "GET" || o === "HEAD")))
        throw new TypeError("Request with GET/HEAD method cannot have body");
      let s = r.body != null ? r.body : nke(e) && e.body !== null ? FIr(e) : null;
      xh.call(this, s, { timeout: r.timeout || e.timeout || 0, size: r.size || e.size || 0 });
      let a = new p_(r.headers || e.headers || {});
      if (s != null && !a.has("Content-Type")) {
        let c = UIr(s);
        c && a.append("Content-Type", c);
      }
      let u = nke(e) ? e.signal : null;
      if (("signal" in r && (u = r.signal), u != null && !_1o(u)))
        throw new TypeError("Expected signal to be an instanceof AbortSignal");
      ((this[cR] = { method: o, redirect: r.redirect || e.redirect || "follow", headers: a, parsedURL: n, signal: u }),
        (this.follow = r.follow !== void 0 ? r.follow : e.follow !== void 0 ? e.follow : 20),
        (this.compress = r.compress !== void 0 ? r.compress : e.compress !== void 0 ? e.compress : !0),
        (this.counter = r.counter || e.counter || 0),
        (this.agent = r.agent || e.agent));
    }
    get method() {
      return this[cR].method;
    }
    get url() {
      return A1o(this[cR].parsedURL);
    }
    get headers() {
      return this[cR].headers;
    }
    get redirect() {
      return this[cR].redirect;
    }
    get signal() {
      return this[cR].signal;
    }
    clone() {
      return new t(this);
    }
  };
  xh.mixIn(uB.prototype);
  Object.defineProperty(uB.prototype, Symbol.toStringTag, {
    value: "Request",
    writable: !1,
    enumerable: !1,
    configurable: !0,
  });
  Object.defineProperties(uB.prototype, {
    method: { enumerable: !0 },
    url: { enumerable: !0 },
    headers: { enumerable: !0 },
    redirect: { enumerable: !0 },
    clone: { enumerable: !0 },
    signal: { enumerable: !0 },
  });
  function E1o(t) {
    let e = t[cR].parsedURL,
      r = new p_(t[cR].headers);
    if ((r.has("Accept") || r.set("Accept", "*/*"), !e.protocol || !e.hostname))
      throw new TypeError("Only absolute URLs are supported");
    if (!/^https?:$/.test(e.protocol)) throw new TypeError("Only HTTP(S) protocols are supported");
    if (t.signal && t.body instanceof CC.Readable && !y1o)
      throw new Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");
    let n = null;
    if ((t.body == null && /^(POST|PUT)$/i.test(t.method) && (n = "0"), t.body != null)) {
      let s = $Ir(t);
      typeof s == "number" && (n = String(s));
    }
    (n && r.set("Content-Length", n),
      r.has("User-Agent") || r.set("User-Agent", "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),
      t.compress && !r.has("Accept-Encoding") && r.set("Accept-Encoding", "gzip,deflate"));
    let o = t.agent;
    return (
      typeof o == "function" && (o = o(e)),
      Object.assign({}, e, { method: t.method, headers: f1o(r), agent: o })
    );
  }
  function See(t) {
    (Error.call(this, t), (this.type = "aborted"), (this.message = t), Error.captureStackTrace(this, this.constructor));
  }
  See.prototype = Object.create(Error.prototype);
  See.prototype.constructor = See;
  See.prototype.name = "AbortError";
  var t3e = ike.URL || LIr.URL,
    PIr = CC.PassThrough,
    v1o = function (e, r) {
      let n = new t3e(r).hostname,
        o = new t3e(e).hostname;
      return n === o || (n[n.length - o.length - 1] === "." && n.endsWith(o));
    },
    C1o = function (e, r) {
      let n = new t3e(r).protocol,
        o = new t3e(e).protocol;
      return n === o;
    };
  function aB(t, e) {
    if (!aB.Promise) throw new Error("native promise missing, set fetch.Promise to your favorite alternative");
    return (
      (xh.Promise = aB.Promise),
      new aB.Promise(function (r, n) {
        let o = new uB(t, e),
          s = E1o(o),
          a = (s.protocol === "https:" ? c1o : BIr).request,
          u = o.signal,
          c = null,
          m = function () {
            let b = new See("The user aborted a request.");
            (n(b),
              o.body && o.body instanceof CC.Readable && y6t(o.body, b),
              !(!c || !c.body) && c.body.emit("error", b));
          };
        if (u && u.aborted) {
          m();
          return;
        }
        let d = function () {
            (m(), h());
          },
          f = a(s),
          p;
        u && u.addEventListener("abort", d);
        function h() {
          (f.abort(), u && u.removeEventListener("abort", d), clearTimeout(p));
        }
        (o.timeout &&
          f.once("socket", function (g) {
            p = setTimeout(function () {
              (n(new W3(`network timeout at: ${o.url}`, "request-timeout")), h());
            }, o.timeout);
          }),
          f.on("error", function (g) {
            (n(new W3(`request to ${o.url} failed, reason: ${g.message}`, "system", g)),
              c && c.body && y6t(c.body, g),
              h());
          }),
          S1o(f, function (g) {
            (u && u.aborted) || (c && c.body && y6t(c.body, g));
          }),
          parseInt(process.version.substring(1)) < 14 &&
            f.on("socket", function (g) {
              g.addListener("close", function (b) {
                let A = g.listenerCount("data") > 0;
                if (c && A && !b && !(u && u.aborted)) {
                  let y = new Error("Premature close");
                  ((y.code = "ERR_STREAM_PREMATURE_CLOSE"), c.body.emit("error", y));
                }
              });
            }),
          f.on("response", function (g) {
            clearTimeout(p);
            let b = p1o(g.headers);
            if (aB.isRedirect(g.statusCode)) {
              let C = b.get("Location"),
                x = null;
              try {
                x = C === null ? null : new t3e(C, o.url).toString();
              } catch {
                if (o.redirect !== "manual") {
                  (n(new W3(`uri requested responds with an invalid redirect URL: ${C}`, "invalid-redirect")), h());
                  return;
                }
              }
              switch (o.redirect) {
                case "error":
                  (n(
                    new W3(
                      `uri requested responds with a redirect, redirect mode is set to error: ${o.url}`,
                      "no-redirect",
                    ),
                  ),
                    h());
                  return;
                case "manual":
                  if (x !== null)
                    try {
                      b.set("Location", x);
                    } catch (R) {
                      n(R);
                    }
                  break;
                case "follow":
                  if (x === null) break;
                  if (o.counter >= o.follow) {
                    (n(new W3(`maximum redirect reached at: ${o.url}`, "max-redirect")), h());
                    return;
                  }
                  let k = {
                    headers: new p_(o.headers),
                    follow: o.follow,
                    counter: o.counter + 1,
                    agent: o.agent,
                    compress: o.compress,
                    method: o.method,
                    body: o.body,
                    signal: o.signal,
                    timeout: o.timeout,
                    size: o.size,
                  };
                  if (!v1o(o.url, x) || !C1o(o.url, x))
                    for (let R of ["authorization", "www-authenticate", "cookie", "cookie2"]) k.headers.delete(R);
                  if (g.statusCode !== 303 && o.body && $Ir(o) === null) {
                    (n(new W3("Cannot follow redirect with body being a readable stream", "unsupported-redirect")),
                      h());
                    return;
                  }
                  ((g.statusCode === 303 || ((g.statusCode === 301 || g.statusCode === 302) && o.method === "POST")) &&
                    ((k.method = "GET"), (k.body = void 0), k.headers.delete("content-length")),
                    r(aB(new uB(x, k))),
                    h());
                  return;
              }
            }
            g.once("end", function () {
              u && u.removeEventListener("abort", d);
            });
            let A = g.pipe(new PIr()),
              y = {
                url: o.url,
                status: g.statusCode,
                statusText: g.statusMessage,
                headers: b,
                size: o.size,
                timeout: o.timeout,
                counter: o.counter,
              },
              E = b.get("Content-Encoding");
            if (!o.compress || o.method === "HEAD" || E === null || g.statusCode === 204 || g.statusCode === 304) {
              ((c = new f_(A, y)), r(c));
              return;
            }
            let v = { flush: fG.Z_SYNC_FLUSH, finishFlush: fG.Z_SYNC_FLUSH };
            if (E == "gzip" || E == "x-gzip") {
              ((A = A.pipe(fG.createGunzip(v))), (c = new f_(A, y)), r(c));
              return;
            }
            if (E == "deflate" || E == "x-deflate") {
              let C = g.pipe(new PIr());
              (C.once("data", function (x) {
                ((x[0] & 15) === 8 ? (A = A.pipe(fG.createInflate())) : (A = A.pipe(fG.createInflateRaw())),
                  (c = new f_(A, y)),
                  r(c));
              }),
                C.on("end", function () {
                  c || ((c = new f_(A, y)), r(c));
                }));
              return;
            }
            if (E == "br" && typeof fG.createBrotliDecompress == "function") {
              ((A = A.pipe(fG.createBrotliDecompress())), (c = new f_(A, y)), r(c));
              return;
            }
            ((c = new f_(A, y)), r(c));
          }),
          d1o(f, o));
      })
    );
  }
  function S1o(t, e) {
    let r;
    (t.on("socket", function (n) {
      r = n;
    }),
      t.on("response", function (n) {
        let o = n.headers;
        o["transfer-encoding"] === "chunked" &&
          !o["content-length"] &&
          n.once("close", function (s) {
            if (r && r.listenerCount("data") > 0 && !s) {
              let u = new Error("Premature close");
              ((u.code = "ERR_STREAM_PREMATURE_CLOSE"), e(u));
            }
          });
      }));
  }
  function y6t(t, e) {
    t.destroy ? t.destroy(e) : (t.emit("error", e), t.end());
  }
  aB.isRedirect = function (t) {
    return t === 301 || t === 302 || t === 303 || t === 307 || t === 308;
  };
  aB.Promise = global.Promise;
  QIr.exports = SC = aB;
  Object.defineProperty(SC, "__esModule", { value: !0 });
  SC.default = SC;
  SC.Headers = p_;
  SC.Request = uB;
  SC.Response = f_;
  SC.FetchError = W3;
  SC.AbortError = See;
});