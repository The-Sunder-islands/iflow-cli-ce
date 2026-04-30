/**
 * @module tRr
 * @category model/google
 * @label google-auth
 * @position 60 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tRr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tRr = T((hb) => {
  "use strict";
  var Mfo =
      (hb && hb.__createBinding) ||
      (Object.create
        ? function (t, e, r, n) {
            n === void 0 && (n = r);
            var o = Object.getOwnPropertyDescriptor(e, r);
            ((!o || ("get" in o ? !e.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }),
              Object.defineProperty(t, n, o));
          }
        : function (t, e, r, n) {
            (n === void 0 && (n = r), (t[n] = e[r]));
          }),
    Ffo =
      (hb && hb.__setModuleDefault) ||
      (Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          }),
    Ufo =
      (hb && hb.__importStar) ||
      function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && Mfo(e, t, r);
        return (Ffo(e, t), e);
      },
    bG =
      (hb && hb.__classPrivateFieldGet) ||
      function (t, e, r, n) {
        if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
        if (typeof e == "function" ? t !== e || !n : !e.has(t))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
      },
    $fo =
      (hb && hb.__classPrivateFieldSet) ||
      function (t, e, r, n, o) {
        if (n === "m") throw new TypeError("Private method is not writable");
        if (n === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
        if (typeof e == "function" ? t !== e || !o : !e.has(t))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (n === "a" ? o.call(t, r) : o ? (o.value = r) : e.set(t, r), r);
      },
    _ke =
      (hb && hb.__importDefault) ||
      function (t) {
        return t && t.__esModule ? t : { default: t };
      },
    kee,
    gG,
    H7r,
    J7r,
    X7r,
    Z7r,
    bke,
    V7r;
  Object.defineProperty(hb, "__esModule", { value: !0 });
  hb.Gaxios = void 0;
  var jfo = _ke(m6t()),
    Qfo = Ae("https"),
    Gfo = _ke(GIr()),
    qfo = _ke(Ae("querystring")),
    Hfo = _ke(HIr()),
    W7r = Ae("url"),
    Ake = T6t(),
    Vfo = XIr(),
    z7r = Ae("stream"),
    Wfo = (E7r(), bt(_7r)),
    Y7r = M6t(),
    zfo = Kfo() ? window.fetch : Gfo.default;
  function Yfo() {
    return typeof window < "u" && !!window;
  }
  function Kfo() {
    return Yfo() && !!window.fetch;
  }
  function Jfo() {
    return typeof Buffer < "u";
  }
  function K7r(t, e) {
    return !!eRr(t, e);
  }
  function eRr(t, e) {
    e = e.toLowerCase();
    for (let r of Object.keys(t?.headers || {})) if (e === r.toLowerCase()) return t.headers[r];
  }
  var yke = class {
    constructor(e) {
      (kee.add(this),
        (this.agentCache = new Map()),
        (this.defaults = e || {}),
        (this.interceptors = {
          request: new Y7r.GaxiosInterceptorManager(),
          response: new Y7r.GaxiosInterceptorManager(),
        }));
    }
    async request(e = {}) {
      return (
        (e = await bG(this, kee, "m", Z7r).call(this, e)),
        (e = await bG(this, kee, "m", J7r).call(this, e)),
        bG(this, kee, "m", X7r).call(this, this._request(e))
      );
    }
    async _defaultAdapter(e) {
      let n = await (e.fetchImplementation || zfo)(e.url, e),
        o = await this.getResponseData(e, n);
      return this.translateResponse(e, n, o);
    }
    async _request(e = {}) {
      var r;
      try {
        let n;
        if (
          (e.adapter ? (n = await e.adapter(e, this._defaultAdapter.bind(this))) : (n = await this._defaultAdapter(e)),
          !e.validateStatus(n.status))
        ) {
          if (e.responseType === "stream") {
            let o = "";
            (await new Promise((s) => {
              ((n?.data).on("data", (a) => {
                o += a;
              }),
                (n?.data).on("end", s));
            }),
              (n.data = o));
          }
          throw new Ake.GaxiosError(`Request failed with status code ${n.status}`, e, n);
        }
        return n;
      } catch (n) {
        let o = n instanceof Ake.GaxiosError ? n : new Ake.GaxiosError(n.message, e, void 0, n),
          { shouldRetry: s, config: a } = await (0, Vfo.getRetryConfig)(o);
        if (s && a)
          return (
            (o.config.retryConfig.currentRetryAttempt = a.retryConfig.currentRetryAttempt),
            (e.retryConfig = (r = o.config) === null || r === void 0 ? void 0 : r.retryConfig),
            this._request(e)
          );
        throw o;
      }
    }
    async getResponseData(e, r) {
      switch (e.responseType) {
        case "stream":
          return r.body;
        case "json": {
          let n = await r.text();
          try {
            n = JSON.parse(n);
          } catch {}
          return n;
        }
        case "arraybuffer":
          return r.arrayBuffer();
        case "blob":
          return r.blob();
        case "text":
          return r.text();
        default:
          return this.getResponseDataFromContentType(r);
      }
    }
    validateStatus(e) {
      return e >= 200 && e < 300;
    }
    paramsSerializer(e) {
      return qfo.default.stringify(e);
    }
    translateResponse(e, r, n) {
      let o = {};
      return (
        r.headers.forEach((s, a) => {
          o[a] = s;
        }),
        { config: e, data: n, headers: o, status: r.status, statusText: r.statusText, request: { responseURL: r.url } }
      );
    }
    async getResponseDataFromContentType(e) {
      let r = e.headers.get("Content-Type");
      if (r === null) return e.text();
      if (((r = r.toLowerCase()), r.includes("application/json"))) {
        let n = await e.text();
        try {
          n = JSON.parse(n);
        } catch {}
        return n;
      } else return r.match(/^text\//) ? e.text() : e.blob();
    }
    async *getMultipartRequest(e, r) {
      let n = `--${r}--`;
      for (let o of e) {
        let s = o.headers["Content-Type"] || "application/octet-stream";
        (yield `--${r}\r
Content-Type: ${s}\r
\r
`,
          typeof o.content == "string" ? yield o.content : yield* o.content,
          yield `\r
`);
      }
      yield n;
    }
  };
  hb.Gaxios = yke;
  ((gG = yke),
    (kee = new WeakSet()),
    (H7r = function (e, r = []) {
      var n, o;
      let s = new W7r.URL(e),
        a = [...r],
        u =
          ((o = (n = process.env.NO_PROXY) !== null && n !== void 0 ? n : process.env.no_proxy) === null || o === void 0
            ? void 0
            : o.split(",")) || [];
      for (let c of u) a.push(c.trim());
      for (let c of a)
        if (c instanceof RegExp) {
          if (c.test(s.toString())) return !1;
        } else if (c instanceof W7r.URL) {
          if (c.origin === s.origin) return !1;
        } else if (c.startsWith("*.") || c.startsWith(".")) {
          let m = c.replace(/^\*\./, ".");
          if (s.hostname.endsWith(m)) return !1;
        } else if (c === s.origin || c === s.hostname || c === s.href) return !1;
      return !0;
    }),
    (J7r = async function (e) {
      let r = Promise.resolve(e);
      for (let n of this.interceptors.request.values()) n && (r = r.then(n.resolved, n.rejected));
      return r;
    }),
    (X7r = async function (e) {
      let r = Promise.resolve(e);
      for (let n of this.interceptors.response.values()) n && (r = r.then(n.resolved, n.rejected));
      return r;
    }),
    (Z7r = async function (e) {
      var r, n, o, s;
      let a = (0, jfo.default)(!0, {}, this.defaults, e);
      if (!a.url) throw new Error("URL is required.");
      let u = a.baseUrl || a.baseURL;
      if (
        (u && (a.url = u.toString() + a.url),
        (a.paramsSerializer = a.paramsSerializer || this.paramsSerializer),
        a.params && Object.keys(a.params).length > 0)
      ) {
        let d = a.paramsSerializer(a.params);
        d.startsWith("?") && (d = d.slice(1));
        let f = a.url.toString().includes("?") ? "&" : "?";
        a.url = a.url + f + d;
      }
      if (
        (typeof e.maxContentLength == "number" && (a.size = e.maxContentLength),
        typeof e.maxRedirects == "number" && (a.follow = e.maxRedirects),
        (a.headers = a.headers || {}),
        a.multipart === void 0 && a.data)
      ) {
        let d = typeof FormData > "u" ? !1 : a?.data instanceof FormData;
        Hfo.default.readable(a.data)
          ? (a.body = a.data)
          : Jfo() && Buffer.isBuffer(a.data)
            ? ((a.body = a.data), K7r(a, "Content-Type") || (a.headers["Content-Type"] = "application/json"))
            : typeof a.data == "object"
              ? d ||
                (eRr(a, "content-type") === "application/x-www-form-urlencoded"
                  ? (a.body = a.paramsSerializer(a.data))
                  : (K7r(a, "Content-Type") || (a.headers["Content-Type"] = "application/json"),
                    (a.body = JSON.stringify(a.data))))
              : (a.body = a.data);
      } else if (a.multipart && a.multipart.length > 0) {
        let d = (0, Wfo.v4)();
        a.headers["Content-Type"] = `multipart/related; boundary=${d}`;
        let f = new z7r.PassThrough();
        ((a.body = f), (0, z7r.pipeline)(this.getMultipartRequest(a.multipart, d), f, () => {}));
      }
      ((a.validateStatus = a.validateStatus || this.validateStatus),
        (a.responseType = a.responseType || "unknown"),
        !a.headers.Accept && a.responseType === "json" && (a.headers.Accept = "application/json"),
        (a.method = a.method || "GET"));
      let c =
          a.proxy ||
          ((r = process == null ? void 0 : process.env) === null || r === void 0 ? void 0 : r.HTTPS_PROXY) ||
          ((n = process == null ? void 0 : process.env) === null || n === void 0 ? void 0 : n.https_proxy) ||
          ((o = process == null ? void 0 : process.env) === null || o === void 0 ? void 0 : o.HTTP_PROXY) ||
          ((s = process == null ? void 0 : process.env) === null || s === void 0 ? void 0 : s.http_proxy),
        m = bG(this, kee, "m", H7r).call(this, a.url, a.noProxy);
      if (!a.agent)
        if (c && m) {
          let d = await bG(gG, gG, "m", V7r).call(gG);
          this.agentCache.has(c)
            ? (a.agent = this.agentCache.get(c))
            : ((a.agent = new d(c, { cert: a.cert, key: a.key })), this.agentCache.set(c, a.agent));
        } else
          a.cert &&
            a.key &&
            (this.agentCache.has(a.key)
              ? (a.agent = this.agentCache.get(a.key))
              : ((a.agent = new Qfo.Agent({ cert: a.cert, key: a.key })), this.agentCache.set(a.key, a.agent)));
      return (
        typeof a.errorRedactor != "function" && a.errorRedactor !== !1 && (a.errorRedactor = Ake.defaultErrorRedactor),
        a
      );
    }),
    (V7r = async function () {
      return (
        $fo(
          this,
          gG,
          bG(this, gG, "f", bke) || (await Promise.resolve().then(() => Ufo(Q6t()))).HttpsProxyAgent,
          "f",
          bke,
        ),
        bG(this, gG, "f", bke)
      );
    }));
  bke = { value: void 0 };
});