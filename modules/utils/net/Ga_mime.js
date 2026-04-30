/**
 * @module Ga
 * @category utils/net
 * @label mime
 * @position 1739 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ga) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ga = T((Bl) => {
  "use strict";
  var u5i = o5i(),
    ugr = (g9(), bt(ZAi)),
    tgr = yN(),
    h7a = (Wc(), bt(r0t)),
    s5i = (o5(), bt(UAi)),
    rgr = class {
      config;
      middlewareStack = u5i.constructStack();
      initConfig;
      handlers;
      constructor(e) {
        this.config = e;
        let { protocol: r, protocolSettings: n } = e;
        n && typeof r == "function" && (e.protocol = new r(n));
      }
      send(e, r, n) {
        let o = typeof r != "function" ? r : void 0,
          s = typeof r == "function" ? r : n,
          a = o === void 0 && this.config.cacheMiddleware === !0,
          u;
        if (a) {
          this.handlers || (this.handlers = new WeakMap());
          let c = this.handlers;
          c.has(e.constructor)
            ? (u = c.get(e.constructor))
            : ((u = e.resolveMiddleware(this.middlewareStack, this.config, o)), c.set(e.constructor, u));
        } else (delete this.handlers, (u = e.resolveMiddleware(this.middlewareStack, this.config, o)));
        if (s)
          u(e)
            .then(
              (c) => s(null, c.output),
              (c) => s(c),
            )
            .catch(() => {});
        else return u(e).then((c) => c.output);
      }
      destroy() {
        (this.config?.requestHandler?.destroy?.(), delete this.handlers);
      }
    },
    egr = "***SensitiveInformation***";
  function ngr(t, e) {
    if (e == null) return e;
    let r = h7a.NormalizedSchema.of(t);
    if (r.getMergedTraits().sensitive) return egr;
    if (r.isListSchema()) {
      if (!!r.getValueSchema().getMergedTraits().sensitive) return egr;
    } else if (r.isMapSchema()) {
      if (!!r.getKeySchema().getMergedTraits().sensitive || !!r.getValueSchema().getMergedTraits().sensitive)
        return egr;
    } else if (r.isStructSchema() && typeof e == "object") {
      let n = e,
        o = {};
      for (let [s, a] of r.structIterator()) n[s] != null && (o[s] = ngr(a, n[s]));
      return o;
    }
    return e;
  }
  var P0t = class {
      middlewareStack = u5i.constructStack();
      schema;
      static classBuilder() {
        return new igr();
      }
      resolveMiddlewareWithContext(
        e,
        r,
        n,
        {
          middlewareFn: o,
          clientName: s,
          commandName: a,
          inputFilterSensitiveLog: u,
          outputFilterSensitiveLog: c,
          smithyContext: m,
          additionalContext: d,
          CommandCtor: f,
        },
      ) {
        for (let A of o.bind(this)(f, e, r, n)) this.middlewareStack.use(A);
        let p = e.concat(this.middlewareStack),
          { logger: h } = r,
          g = {
            logger: h,
            clientName: s,
            commandName: a,
            inputFilterSensitiveLog: u,
            outputFilterSensitiveLog: c,
            [tgr.SMITHY_CONTEXT_KEY]: { commandInstance: this, ...m },
            ...d,
          },
          { requestHandler: b } = r;
        return p.resolve((A) => b.handle(A.request, n || {}), g);
      }
    },
    igr = class {
      _init = () => {};
      _ep = {};
      _middlewareFn = () => [];
      _commandName = "";
      _clientName = "";
      _additionalContext = {};
      _smithyContext = {};
      _inputFilterSensitiveLog = void 0;
      _outputFilterSensitiveLog = void 0;
      _serializer = null;
      _deserializer = null;
      _operationSchema;
      init(e) {
        this._init = e;
      }
      ep(e) {
        return ((this._ep = e), this);
      }
      m(e) {
        return ((this._middlewareFn = e), this);
      }
      s(e, r, n = {}) {
        return ((this._smithyContext = { service: e, operation: r, ...n }), this);
      }
      c(e = {}) {
        return ((this._additionalContext = e), this);
      }
      n(e, r) {
        return ((this._clientName = e), (this._commandName = r), this);
      }
      f(e = (n) => n, r = (n) => n) {
        return ((this._inputFilterSensitiveLog = e), (this._outputFilterSensitiveLog = r), this);
      }
      ser(e) {
        return ((this._serializer = e), this);
      }
      de(e) {
        return ((this._deserializer = e), this);
      }
      sc(e) {
        return ((this._operationSchema = e), (this._smithyContext.operationSchema = e), this);
      }
      build() {
        let e = this,
          r;
        return (r = class extends P0t {
          input;
          static getEndpointParameterInstructions() {
            return e._ep;
          }
          constructor(...[n]) {
            (super(), (this.input = n ?? {}), e._init(this), (this.schema = e._operationSchema));
          }
          resolveMiddleware(n, o, s) {
            let a = e._operationSchema,
              u = a?.[4] ?? a?.input,
              c = a?.[5] ?? a?.output;
            return this.resolveMiddlewareWithContext(n, o, s, {
              CommandCtor: r,
              middlewareFn: e._middlewareFn,
              clientName: e._clientName,
              commandName: e._commandName,
              inputFilterSensitiveLog: e._inputFilterSensitiveLog ?? (a ? ngr.bind(null, u) : (m) => m),
              outputFilterSensitiveLog: e._outputFilterSensitiveLog ?? (a ? ngr.bind(null, c) : (m) => m),
              smithyContext: e._smithyContext,
              additionalContext: e._additionalContext,
            });
          }
          serialize = e._serializer;
          deserialize = e._deserializer;
        });
      }
    },
    g7a = "***SensitiveInformation***",
    b7a = (t, e) => {
      for (let r of Object.keys(t)) {
        let n = t[r],
          o = async function (a, u, c) {
            let m = new n(a);
            if (typeof u == "function") this.send(m, u);
            else if (typeof c == "function") {
              if (typeof u != "object") throw new Error(`Expected http options but got ${typeof u}`);
              this.send(m, u || {}, c);
            } else return this.send(m, u);
          },
          s = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
        e.prototype[s] = o;
      }
    },
    ogr = class t extends Error {
      $fault;
      $response;
      $retryable;
      $metadata;
      constructor(e) {
        (super(e.message),
          Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype),
          (this.name = e.name),
          (this.$fault = e.$fault),
          (this.$metadata = e.$metadata));
      }
      static isInstance(e) {
        if (!e) return !1;
        let r = e;
        return (
          t.prototype.isPrototypeOf(r) ||
          (!!r.$fault && !!r.$metadata && (r.$fault === "client" || r.$fault === "server"))
        );
      }
      static [Symbol.hasInstance](e) {
        if (!e) return !1;
        let r = e;
        return this === t
          ? t.isInstance(e)
          : t.isInstance(e)
            ? r.name && this.name
              ? this.prototype.isPrototypeOf(e) || r.name === this.name
              : this.prototype.isPrototypeOf(e)
            : !1;
      }
    },
    c5i = (t, e = {}) => {
      Object.entries(e)
        .filter(([, n]) => n !== void 0)
        .forEach(([n, o]) => {
          (t[n] == null || t[n] === "") && (t[n] = o);
        });
      let r = t.message || t.Message || "UnknownError";
      return ((t.message = r), delete t.Message, t);
    },
    l5i = ({ output: t, parsedBody: e, exceptionCtor: r, errorCode: n }) => {
      let o = y7a(t),
        s = o.httpStatusCode ? o.httpStatusCode + "" : void 0,
        a = new r({ name: e?.code || e?.Code || n || s || "UnknownError", $fault: "client", $metadata: o });
      throw c5i(a, e);
    },
    A7a =
      (t) =>
      ({ output: e, parsedBody: r, errorCode: n }) => {
        l5i({ output: e, parsedBody: r, exceptionCtor: t, errorCode: n });
      },
    y7a = (t) => ({
      httpStatusCode: t.statusCode,
      requestId: t.headers["x-amzn-requestid"] ?? t.headers["x-amzn-request-id"] ?? t.headers["x-amz-request-id"],
      extendedRequestId: t.headers["x-amz-id-2"],
      cfId: t.headers["x-amz-cf-id"],
    }),
    _7a = (t) => {
      switch (t) {
        case "standard":
          return { retryMode: "standard", connectionTimeout: 3100 };
        case "in-region":
          return { retryMode: "standard", connectionTimeout: 1100 };
        case "cross-region":
          return { retryMode: "standard", connectionTimeout: 3100 };
        case "mobile":
          return { retryMode: "standard", connectionTimeout: 3e4 };
        default:
          return {};
      }
    },
    a5i = !1,
    E7a = (t) => {
      t && !a5i && parseInt(t.substring(1, t.indexOf("."))) < 16 && (a5i = !0);
    },
    v7a = (t) => {
      let e = [];
      for (let r in tgr.AlgorithmId) {
        let n = tgr.AlgorithmId[r];
        t[n] !== void 0 && e.push({ algorithmId: () => n, checksumConstructor: () => t[n] });
      }
      return {
        addChecksumAlgorithm(r) {
          e.push(r);
        },
        checksumAlgorithms() {
          return e;
        },
      };
    },
    C7a = (t) => {
      let e = {};
      return (
        t.checksumAlgorithms().forEach((r) => {
          e[r.algorithmId()] = r.checksumConstructor();
        }),
        e
      );
    },
    S7a = (t) => ({
      setRetryStrategy(e) {
        t.retryStrategy = e;
      },
      retryStrategy() {
        return t.retryStrategy;
      },
    }),
    w7a = (t) => {
      let e = {};
      return ((e.retryStrategy = t.retryStrategy()), e);
    },
    m5i = (t) => Object.assign(v7a(t), S7a(t)),
    x7a = m5i,
    T7a = (t) => Object.assign(C7a(t), w7a(t)),
    D7a = (t) => (Array.isArray(t) ? t : [t]),
    d5i = (t) => {
      let e = "#text";
      for (let r in t)
        t.hasOwnProperty(r) && t[r][e] !== void 0
          ? (t[r] = t[r][e])
          : typeof t[r] == "object" && t[r] !== null && (t[r] = d5i(t[r]));
      return t;
    },
    I7a = (t) => t != null,
    sgr = class {
      trace() {}
      debug() {}
      info() {}
      warn() {}
      error() {}
    };
  function f5i(t, e, r) {
    let n, o, s;
    if (typeof e > "u" && typeof r > "u") ((n = {}), (s = t));
    else {
      if (((n = t), typeof e == "function")) return ((o = e), (s = r), O7a(n, o, s));
      s = e;
    }
    for (let a of Object.keys(s)) {
      if (!Array.isArray(s[a])) {
        n[a] = s[a];
        continue;
      }
      p5i(n, null, s, a);
    }
    return n;
  }
  var R7a = (t) => {
      let e = {};
      for (let [r, n] of Object.entries(t || {})) e[r] = [, n];
      return e;
    },
    k7a = (t, e) => {
      let r = {};
      for (let n in e) p5i(r, t, e, n);
      return r;
    },
    O7a = (t, e, r) =>
      f5i(
        t,
        Object.entries(r).reduce(
          (n, [o, s]) => (
            Array.isArray(s) ? (n[o] = s) : typeof s == "function" ? (n[o] = [e, s()]) : (n[o] = [e, s]),
            n
          ),
          {},
        ),
      ),
    p5i = (t, e, r, n) => {
      if (e !== null) {
        let a = r[n];
        typeof a == "function" && (a = [, a]);
        let [u = N7a, c = P7a, m = n] = a;
        ((typeof u == "function" && u(e[m])) || (typeof u != "function" && u)) && (t[n] = c(e[m]));
        return;
      }
      let [o, s] = r[n];
      if (typeof s == "function") {
        let a,
          u = o === void 0 && (a = s()) != null,
          c = (typeof o == "function" && !!o(void 0)) || (typeof o != "function" && !!o);
        u ? (t[n] = a) : c && (t[n] = s());
      } else {
        let a = o === void 0 && s != null,
          u = (typeof o == "function" && !!o(s)) || (typeof o != "function" && !!o);
        (a || u) && (t[n] = s);
      }
    },
    N7a = (t) => t != null,
    P7a = (t) => t,
    B7a = (t) => {
      if (t !== t) return "NaN";
      switch (t) {
        case 1 / 0:
          return "Infinity";
        case -1 / 0:
          return "-Infinity";
        default:
          return t;
      }
    },
    L7a = (t) => t.toISOString().replace(".000Z", "Z"),
    agr = (t) => {
      if (t == null) return {};
      if (Array.isArray(t)) return t.filter((e) => e != null).map(agr);
      if (typeof t == "object") {
        let e = {};
        for (let r of Object.keys(t)) t[r] != null && (e[r] = agr(t[r]));
        return e;
      }
      return t;
    };
  Object.defineProperty(Bl, "collectBody", {
    enumerable: !0,
    get: function () {
      return ugr.collectBody;
    },
  });
  Object.defineProperty(Bl, "extendedEncodeURIComponent", {
    enumerable: !0,
    get: function () {
      return ugr.extendedEncodeURIComponent;
    },
  });
  Object.defineProperty(Bl, "resolvedPath", {
    enumerable: !0,
    get: function () {
      return ugr.resolvedPath;
    },
  });
  Bl.Client = rgr;
  Bl.Command = P0t;
  Bl.NoOpLogger = sgr;
  Bl.SENSITIVE_STRING = g7a;
  Bl.ServiceException = ogr;
  Bl._json = agr;
  Bl.convertMap = R7a;
  Bl.createAggregatedClient = b7a;
  Bl.decorateServiceException = c5i;
  Bl.emitWarningIfUnsupportedVersion = E7a;
  Bl.getArrayIfSingleItem = D7a;
  Bl.getDefaultClientConfiguration = x7a;
  Bl.getDefaultExtensionConfiguration = m5i;
  Bl.getValueFromTextNode = d5i;
  Bl.isSerializableHeaderValue = I7a;
  Bl.loadConfigsForDefaultMode = _7a;
  Bl.map = f5i;
  Bl.resolveDefaultRuntimeConfig = T7a;
  Bl.serializeDateTime = L7a;
  Bl.serializeFloat = B7a;
  Bl.take = k7a;
  Bl.throwDefaultError = l5i;
  Bl.withBaseException = A7a;
  Object.keys(s5i).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(Bl, t) &&
      Object.defineProperty(Bl, t, {
        enumerable: !0,
        get: function () {
          return s5i[t];
        },
      });
  });
});
var cgr,
  Cv,
  Bme = j(() => {
    Wc();
    ((cgr = Se(Ga())),
      (Cv = class {
        queryCompat;
        constructor(e = !1) {
          this.queryCompat = e;
        }
        resolveRestContentType(e, r) {
          let n = r.getMemberSchemas(),
            o = Object.values(n).find((s) => !!s.getMergedTraits().httpPayload);
          if (o) {
            let s = o.getMergedTraits().mediaType;
            return s || (o.isStringSchema() ? "text/plain" : o.isBlobSchema() ? "application/octet-stream" : e);
          } else if (
            !r.isUnitSchema() &&
            Object.values(n).find((a) => {
              let {
                httpQuery: u,
                httpQueryParams: c,
                httpHeader: m,
                httpLabel: d,
                httpPrefixHeaders: f,
              } = a.getMergedTraits();
              return !u && !c && !m && !d && f === void 0;
            })
          )
            return e;
        }
        async getErrorSchemaOrThrowBaseException(e, r, n, o, s, a) {
          let u = r,
            c = e;
          e.includes("#") && ([u, c] = e.split("#"));
          let m = { $metadata: s, $fault: n.statusCode < 500 ? "client" : "server" },
            d = es.for(u);
          try {
            return { errorSchema: a?.(d, c) ?? d.getSchema(e), errorMetadata: m };
          } catch {
            o.message = o.message ?? o.Message ?? "UnknownError";
            let p = es.for("smithy.ts.sdk.synthetic." + u),
              h = p.getBaseException();
            if (h) {
              let g = p.getErrorCtor(h) ?? Error;
              throw this.decorateServiceException(Object.assign(new g({ name: c }), m), o);
            }
            throw this.decorateServiceException(Object.assign(new Error(c), m), o);
          }
        }
        decorateServiceException(e, r = {}) {
          if (this.queryCompat) {
            let n = e.Message ?? r.Message,
              o = (0, cgr.decorateServiceException)(e, r);
            (n && (o.message = n),
              (o.Error = {
                ...o.Error,
                Type: o.Error.Type,
                Code: o.Error.Code,
                Message: o.Error.message ?? o.Error.Message ?? n,
              }));
            let s = o.$metadata.requestId;
            return (s && (o.RequestId = s), o);
          }
          return (0, cgr.decorateServiceException)(e, r);
        }
        setQueryCompatError(e, r) {
          let n = r.headers?.["x-amzn-query-error"];
          if (e !== void 0 && n != null) {
            let [o, s] = n.split(";"),
              a = Object.entries(e),
              u = { Code: o, Type: s };
            Object.assign(e, u);
            for (let [c, m] of a) u[c === "message" ? "Message" : c] = m;
            (delete u.__type, (e.Error = u));
          }
        }
        queryCompatOutput(e, r) {
          (e.Error && (r.Error = e.Error), e.Type && (r.Type = e.Type), e.Code && (r.Code = e.Code));
        }
        findQueryCompatibleError(e, r) {
          try {
            return e.getSchema(r);
          } catch {
            return e.find((o) => ji.of(o).getMergedTraits().awsQueryError?.[0] === r);
          }
        }
      }));
  });
var B0t,
  h5i = j(() => {
    t5i();
    Wc();
    Bme();
    B0t = class extends N0t {
      awsQueryCompatible;
      mixin;
      constructor({ defaultNamespace: e, awsQueryCompatible: r }) {
        (super({ defaultNamespace: e }),
          (this.awsQueryCompatible = !!r),
          (this.mixin = new Cv(this.awsQueryCompatible)));
      }
      async serializeRequest(e, r, n) {
        let o = await super.serializeRequest(e, r, n);
        return (this.awsQueryCompatible && (o.headers["x-amzn-query-mode"] = "true"), o);
      }
      async handleError(e, r, n, o, s) {
        this.awsQueryCompatible && this.mixin.setQueryCompatError(o, n);
        let a = (() => {
            let g = n.headers["x-amzn-query-error"];
            return g && this.awsQueryCompatible ? g.split(";")[0] : (R0t(n, o) ?? "Unknown");
          })(),
          { errorSchema: u, errorMetadata: c } = await this.mixin.getErrorSchemaOrThrowBaseException(
            a,
            this.options.defaultNamespace,
            n,
            o,
            s,
            this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0,
          ),
          m = ji.of(u),
          d = o.message ?? o.Message ?? "Unknown",
          f = es.for(u[1]).getErrorCtor(u) ?? Error,
          p = new f(d),
          h = {};
        for (let [g, b] of m.structIterator()) o[g] != null && (h[g] = this.deserializer.readValue(b, o[g]));
        throw (
          this.awsQueryCompatible && this.mixin.queryCompatOutput(o, h),
          this.mixin.decorateServiceException(
            Object.assign(p, c, { $fault: m.getMergedTraits().error, message: d }, h),
            o,
          )
        );
      }
    };
  });
var g5i,
  b5i,
  A5i,
  y5i = j(() => {
    ((g5i = (t) => {
      if (t == null) return t;
      if (typeof t == "number" || typeof t == "bigint") {
        let e = new Error(`Received number ${t} where a string was expected.`);
        return ((e.name = "Warning"), console.warn(e), String(t));
      }
      if (typeof t == "boolean") {
        let e = new Error(`Received boolean ${t} where a string was expected.`);
        return ((e.name = "Warning"), console.warn(e), String(t));
      }
      return t;
    }),
      (b5i = (t) => {
        if (t == null) return t;
        if (typeof t == "string") {
          let e = t.toLowerCase();
          if (t !== "" && e !== "false" && e !== "true") {
            let r = new Error(`Received string "${t}" where a boolean was expected.`);
            ((r.name = "Warning"), console.warn(r));
          }
          return t !== "" && e !== "false";
        }
        return t;
      }),
      (A5i = (t) => {
        if (t == null) return t;
        if (typeof t == "string") {
          let e = Number(t);
          if (e.toString() !== t) {
            let r = new Error(`Received string "${t}" where a number was expected.`);
            return ((r.name = "Warning"), console.warn(r), t);
          }
          return e;
        }
        return t;
      }));
  });
var CA,
  I$ = j(() => {
    CA = class {
      serdeContext;
      setSerdeContext(e) {
        this.serdeContext = e;
      }
    };
  });
function* Lme(t, e) {
  if (t.isUnitSchema()) return;
  let r = t.getSchema();
  for (let n = 0; n < r[4].length; ++n) {
    let o = r[4][n],
      s = r[5][n],
      a = new ji([s, 0], o);
    (!(o in e) && !a.isIdempotencyToken()) || (yield [o, a]);
  }
}
function* _5i(t, e, r) {
  if (t.isUnitSchema()) return;
  let n = t.getSchema(),
    o = Object.keys(e).filter((s) => s !== "__type").length;
  for (let s = 0; s < n[4].length && o !== 0; ++s) {
    let a = n[4][s],
      u = n[5][s],
      c = new ji([u, 0], a),
      m = a;
    (r && (m = c.getMergedTraits()[r] ?? a), m in e && (yield [a, c], (o -= 1)));
  }
}
var rwe = j(() => {
  Wc();
});
var Mme,
  lgr = j(() => {
    Mme = class {
      from;
      to;
      keys;
      constructor(e, r) {
        ((this.from = e), (this.to = r), (this.keys = new Set(Object.keys(this.from).filter((n) => n !== "__type"))));
      }
      mark(e) {
        this.keys.delete(e);
      }
      hasUnknown() {
        return this.keys.size === 1 && Object.keys(this.to).length === 0;
      }
      writeUnknown() {
        if (this.hasUnknown()) {
          let e = this.keys.values().next().value,
            r = this.from[e];
          this.to.$unknown = [e, r];
        }
      }
    };
  });
function E5i(t, e, r) {
  if (r?.source) {
    let n = r.source;
    if (typeof e == "number" && (e > Number.MAX_SAFE_INTEGER || e < Number.MIN_SAFE_INTEGER || n !== String(e)))
      return n.includes(".") ? new em(n, "bigDecimal") : BigInt(n);
  }
  return e;
}
var v5i = j(() => {
  o5();
});
var C5i,
  S5i,
  L0t,
  mgr = j(() => {
    ((C5i = Se(Ga())),
      (S5i = Se(ep())),
      (L0t = (t, e) => (0, C5i.collectBody)(t, e).then((r) => (e?.utf8Encoder ?? S5i.toUtf8)(r))));
  });
var nwe,
  w5i,
  Fme,
  iwe = j(() => {
    mgr();
    ((nwe = (t, e) =>
      L0t(t, e).then((r) => {
        if (r.length)
          try {
            return JSON.parse(r);
          } catch (n) {
            throw (n?.name === "SyntaxError" && Object.defineProperty(n, "$responseBodyText", { value: r }), n);
          }
        return {};
      })),
      (w5i = async (t, e) => {
        let r = await nwe(t, e);
        return ((r.message = r.message ?? r.Message), r);
      }),
      (Fme = (t, e) => {
        let r = (s, a) => Object.keys(s).find((u) => u.toLowerCase() === a.toLowerCase()),
          n = (s) => {
            let a = s;
            return (
              typeof a == "number" && (a = a.toString()),
              a.indexOf(",") >= 0 && (a = a.split(",")[0]),
              a.indexOf(":") >= 0 && (a = a.split(":")[0]),
              a.indexOf("#") >= 0 && (a = a.split("#")[1]),
              a
            );
          },
          o = r(t.headers, "x-amzn-errortype");
        if (o !== void 0) return n(t.headers[o]);
        if (e && typeof e == "object") {
          let s = r(e, "code");
          if (s && e[s] !== void 0) return n(e[s]);
          if (e.__type !== void 0) return n(e.__type);
        }
      }));
  });
var x5i,
  Ume,
  dgr = j(() => {
    g9();
    Wc();
    o5();
    x5i = Se(p3());
    I$();
    rwe();
    lgr();
    v5i();
    iwe();
    Ume = class extends CA {
      settings;
      constructor(e) {
        (super(), (this.settings = e));
      }
      async read(e, r) {
        return this._read(e, typeof r == "string" ? JSON.parse(r, E5i) : await nwe(r, this.serdeContext));
      }
      readObject(e, r) {
        return this._read(e, r);
      }
      _read(e, r) {
        let n = r !== null && typeof r == "object",
          o = ji.of(e);
        if (n) {
          if (o.isStructSchema()) {
            let a = o.isUnionSchema(),
              u = {},
              c;
            a && (c = new Mme(r, u));
            for (let [m, d] of _5i(o, r, this.settings.jsonName ? "jsonName" : !1)) {
              let f = this.settings.jsonName ? (d.getMergedTraits().jsonName ?? m) : m;
              (a && c.mark(f), r[f] != null && (u[m] = this._read(d, r[f])));
            }
            return (a && c.writeUnknown(), u);
          }
          if (Array.isArray(r) && o.isListSchema()) {
            let a = o.getValueSchema(),
              u = [],
              c = !!o.getMergedTraits().sparse;
            for (let m of r) (c || m != null) && u.push(this._read(a, m));
            return u;
          }
          if (o.isMapSchema()) {
            let a = o.getValueSchema(),
              u = {},
              c = !!o.getMergedTraits().sparse;
            for (let [m, d] of Object.entries(r)) (c || d != null) && (u[m] = this._read(a, d));
            return u;
          }
        }
        if (o.isBlobSchema() && typeof r == "string") return (0, x5i.fromBase64)(r);
        let s = o.getMergedTraits().mediaType;
        if (o.isStringSchema() && typeof r == "string" && s)
          return s === "application/json" || s.endsWith("+json") ? i5.from(r) : r;
        if (o.isTimestampSchema() && r != null)
          switch (ay(o, this.settings)) {
            case 5:
              return Whr(r);
            case 6:
              return zhr(r);
            case 7:
              return Yhr(r);
            default:
              return (console.warn("Missing timestamp format, parsing value with Date constructor:", r), new Date(r));
          }
        if (o.isBigIntegerSchema() && (typeof r == "number" || typeof r == "string")) return BigInt(r);
        if (o.isBigDecimalSchema() && r != null) {
          if (r instanceof em) return r;
          let a = r;
          return a.type === "bigDecimal" && "string" in a ? new em(a.string, a.type) : new em(String(r), "bigDecimal");
        }
        if (o.isNumericSchema() && typeof r == "string") {
          switch (r) {
            case "Infinity":
              return 1 / 0;
            case "-Infinity":
              return -1 / 0;
            case "NaN":
              return NaN;
          }
          return r;
        }
        if (o.isDocumentSchema())
          if (n) {
            let a = Array.isArray(r) ? [] : {};
            for (let [u, c] of Object.entries(r)) c instanceof em ? (a[u] = c) : (a[u] = this._read(o, c));
            return a;
          } else return structuredClone(r);
        return r;
      }
    };
  });
var T5i,
  M0t,
  D5i = j(() => {
    o5();
    ((T5i = "\u039D"),
      (M0t = class {
        values = new Map();
        counter = 0;
        stage = 0;
        createReplacer() {
          if (this.stage === 1) throw new Error("@aws-sdk/core/protocols - JsonReplacer already created.");
          if (this.stage === 2) throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
          return (
            (this.stage = 1),
            (e, r) => {
              if (r instanceof em) {
                let n = `${T5i + "nv" + this.counter++}_` + r.string;
                return (this.values.set(`"${n}"`, r.string), n);
              }
              if (typeof r == "bigint") {
                let n = r.toString(),
                  o = `${T5i + "b" + this.counter++}_` + n;
                return (this.values.set(`"${o}"`, n), o);
              }
              return r;
            }
          );
        }
        replaceInJson(e) {
          if (this.stage === 0) throw new Error("@aws-sdk/core/protocols - JsonReplacer not created yet.");
          if (this.stage === 2) throw new Error("@aws-sdk/core/protocols - JsonReplacer exhausted.");
          if (((this.stage = 2), this.counter === 0)) return e;
          for (let [r, n] of this.values) e = e.replace(r, n);
          return e;
        }
      }));
  });
var fgr,
  $me,
  pgr = j(() => {
    g9();
    Wc();
    o5();
    fgr = Se(p3());
    I$();
    rwe();
    D5i();
    $me = class extends CA {
      settings;
      buffer;
      useReplacer = !1;
      rootSchema;
      constructor(e) {
        (super(), (this.settings = e));
      }
      write(e, r) {
        ((this.rootSchema = ji.of(e)), (this.buffer = this._write(this.rootSchema, r)));
      }
      writeDiscriminatedDocument(e, r) {
        (this.write(e, r), typeof this.buffer == "object" && (this.buffer.__type = ji.of(e).getName(!0)));
      }
      flush() {
        let { rootSchema: e, useReplacer: r } = this;
        if (((this.rootSchema = void 0), (this.useReplacer = !1), e?.isStructSchema() || e?.isDocumentSchema())) {
          if (!r) return JSON.stringify(this.buffer);
          let n = new M0t();
          return n.replaceInJson(JSON.stringify(this.buffer, n.createReplacer(), 0));
        }
        return this.buffer;
      }
      _write(e, r, n) {
        let o = r !== null && typeof r == "object",
          s = ji.of(e);
        if (o) {
          if (s.isStructSchema()) {
            let a = {};
            for (let [u, c] of Lme(s, r)) {
              let m = this._write(c, r[u], s);
              if (m !== void 0) {
                let d = c.getMergedTraits().jsonName,
                  f = this.settings.jsonName ? (d ?? u) : u;
                a[f] = m;
              }
            }
            if (s.isUnionSchema() && Object.keys(a).length === 0) {
              let { $unknown: u } = r;
              if (Array.isArray(u)) {
                let [c, m] = u;
                a[c] = this._write(15, m);
              }
            }
            return a;
          }
          if (Array.isArray(r) && s.isListSchema()) {
            let a = s.getValueSchema(),
              u = [],
              c = !!s.getMergedTraits().sparse;
            for (let m of r) (c || m != null) && u.push(this._write(a, m));
            return u;
          }
          if (s.isMapSchema()) {
            let a = s.getValueSchema(),
              u = {},
              c = !!s.getMergedTraits().sparse;
            for (let [m, d] of Object.entries(r)) (c || d != null) && (u[m] = this._write(a, d));
            return u;
          }
          if (r instanceof Uint8Array && (s.isBlobSchema() || s.isDocumentSchema()))
            return s === this.rootSchema ? r : (this.serdeContext?.base64Encoder ?? fgr.toBase64)(r);
          if (r instanceof Date && (s.isTimestampSchema() || s.isDocumentSchema()))
            switch (ay(s, this.settings)) {
              case 5:
                return r.toISOString().replace(".000Z", "Z");
              case 6:
                return YSe(r);
              case 7:
                return r.getTime() / 1e3;
              default:
                return (console.warn("Missing timestamp format, using epoch seconds", r), r.getTime() / 1e3);
            }
          r instanceof em && (this.useReplacer = !0);
        }
        if (!(r === null && n?.isStructSchema())) {
          if (s.isStringSchema()) {
            if (typeof r > "u" && s.isIdempotencyToken()) return (0, vv.v4)();
            let a = s.getMergedTraits().mediaType;
            return r != null && a && (a === "application/json" || a.endsWith("+json")) ? i5.from(r) : r;
          }
          if (typeof r == "number" && s.isNumericSchema()) return Math.abs(r) === 1 / 0 || isNaN(r) ? String(r) : r;
          if (typeof r == "string" && s.isBlobSchema())
            return s === this.rootSchema ? r : (this.serdeContext?.base64Encoder ?? fgr.toBase64)(r);
          if ((typeof r == "bigint" && (this.useReplacer = !0), s.isDocumentSchema()))
            if (o) {
              let a = Array.isArray(r) ? [] : {};
              for (let [u, c] of Object.entries(r))
                c instanceof em ? ((this.useReplacer = !0), (a[u] = c)) : (a[u] = this._write(s, c));
              return a;
            } else return structuredClone(r);
          return r;
        }
      }
    };
  });
var R$,
  F0t = j(() => {
    I$();
    dgr();
    pgr();
    R$ = class extends CA {
      settings;
      constructor(e) {
        (super(), (this.settings = e));
      }
      createSerializer() {
        let e = new $me(this.settings);
        return (e.setSerdeContext(this.serdeContext), e);
      }
      createDeserializer() {
        let e = new Ume(this.settings);
        return (e.setSerdeContext(this.serdeContext), e);
      }
    };
  });
var k$,
  U0t = j(() => {
    g9();
    Wc();
    Bme();
    F0t();
    iwe();
    k$ = class extends SN {
      serializer;
      deserializer;
      serviceTarget;
      codec;
      mixin;
      awsQueryCompatible;
      constructor({ defaultNamespace: e, serviceTarget: r, awsQueryCompatible: n, jsonCodec: o }) {
        (super({ defaultNamespace: e }),
          (this.serviceTarget = r),
          (this.codec = o ?? new R$({ timestampFormat: { useTrait: !0, default: 7 }, jsonName: !1 })),
          (this.serializer = this.codec.createSerializer()),
          (this.deserializer = this.codec.createDeserializer()),
          (this.awsQueryCompatible = !!n),
          (this.mixin = new Cv(this.awsQueryCompatible)));
      }
      async serializeRequest(e, r, n) {
        let o = await super.serializeRequest(e, r, n);
        return (
          o.path.endsWith("/") || (o.path += "/"),
          Object.assign(o.headers, {
            "content-type": `application/x-amz-json-${this.getJsonRpcVersion()}`,
            "x-amz-target": `${this.serviceTarget}.${e.name}`,
          }),
          this.awsQueryCompatible && (o.headers["x-amzn-query-mode"] = "true"),
          (US(e.input) === "unit" || !o.body) && (o.body = "{}"),
          o
        );
      }
      getPayloadCodec() {
        return this.codec;
      }
      async handleError(e, r, n, o, s) {
        this.awsQueryCompatible && this.mixin.setQueryCompatError(o, n);
        let a = Fme(n, o) ?? "Unknown",
          { errorSchema: u, errorMetadata: c } = await this.mixin.getErrorSchemaOrThrowBaseException(
            a,
            this.options.defaultNamespace,
            n,
            o,
            s,
            this.awsQueryCompatible ? this.mixin.findQueryCompatibleError : void 0,
          ),
          m = ji.of(u),
          d = o.message ?? o.Message ?? "Unknown",
          f = es.for(u[1]).getErrorCtor(u) ?? Error,
          p = new f(d),
          h = {};
        for (let [g, b] of m.structIterator())
          o[g] != null && (h[g] = this.codec.createDeserializer().readObject(b, o[g]));
        throw (
          this.awsQueryCompatible && this.mixin.queryCompatOutput(o, h),
          this.mixin.decorateServiceException(
            Object.assign(p, c, { $fault: m.getMergedTraits().error, message: d }, h),
            o,
          )
        );
      }
    };
  });
var $0t,
  I5i = j(() => {
    U0t();
    $0t = class extends k$ {
      constructor({ defaultNamespace: e, serviceTarget: r, awsQueryCompatible: n, jsonCodec: o }) {
        super({ defaultNamespace: e, serviceTarget: r, awsQueryCompatible: n, jsonCodec: o });
      }
      getShapeId() {
        return "aws.protocols#awsJson1_0";
      }
      getJsonRpcVersion() {
        return "1.0";
      }
      getDefaultContentType() {
        return "application/x-amz-json-1.0";
      }
    };
  });
var j0t,
  R5i = j(() => {
    U0t();
    j0t = class extends k$ {
      constructor({ defaultNamespace: e, serviceTarget: r, awsQueryCompatible: n, jsonCodec: o }) {
        super({ defaultNamespace: e, serviceTarget: r, awsQueryCompatible: n, jsonCodec: o });
      }
      getShapeId() {
        return "aws.protocols#awsJson1_1";
      }
      getJsonRpcVersion() {
        return "1.1";
      }
      getDefaultContentType() {
        return "application/x-amz-json-1.1";
      }
    };
  });
var O$,
  k5i = j(() => {
    g9();
    Wc();
    Bme();
    F0t();
    iwe();
    O$ = class extends mK {
      serializer;
      deserializer;
      codec;
      mixin = new Cv();
      constructor({ defaultNamespace: e }) {
        super({ defaultNamespace: e });
        let r = { timestampFormat: { useTrait: !0, default: 7 }, httpBindings: !0, jsonName: !0 };
        ((this.codec = new R$(r)),
          (this.serializer = new pK(this.codec.createSerializer(), r)),
          (this.deserializer = new fK(this.codec.createDeserializer(), r)));
      }
      getShapeId() {
        return "aws.protocols#restJson1";
      }
      getPayloadCodec() {
        return this.codec;
      }
      setSerdeContext(e) {
        (this.codec.setSerdeContext(e), super.setSerdeContext(e));
      }
      async serializeRequest(e, r, n) {
        let o = await super.serializeRequest(e, r, n),
          s = ji.of(e.input);
        if (!o.headers["content-type"]) {
          let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), s);
          a && (o.headers["content-type"] = a);
        }
        return (o.body == null && o.headers["content-type"] === this.getDefaultContentType() && (o.body = "{}"), o);
      }
      async deserializeResponse(e, r, n) {
        let o = await super.deserializeResponse(e, r, n),
          s = ji.of(e.output);
        for (let [a, u] of s.structIterator()) u.getMemberTraits().httpPayload && !(a in o) && (o[a] = null);
        return o;
      }
      async handleError(e, r, n, o, s) {
        let a = Fme(n, o) ?? "Unknown",
          { errorSchema: u, errorMetadata: c } = await this.mixin.getErrorSchemaOrThrowBaseException(
            a,
            this.options.defaultNamespace,
            n,
            o,
            s,
          ),
          m = ji.of(u),
          d = o.message ?? o.Message ?? "Unknown",
          f = es.for(u[1]).getErrorCtor(u) ?? Error,
          p = new f(d);
        await this.deserializeHttpMessage(u, r, n, o);
        let h = {};
        for (let [g, b] of m.structIterator()) {
          let A = b.getMergedTraits().jsonName ?? g;
          h[g] = this.codec.createDeserializer().readObject(b, o[A]);
        }
        throw this.mixin.decorateServiceException(
          Object.assign(p, c, { $fault: m.getMergedTraits().error, message: d }, h),
          o,
        );
      }
      getDefaultContentType() {
        return "application/json";
      }
    };
  });
var O5i,
  N5i,
  P5i = j(() => {
    ((O5i = Se(Ga())),
      (N5i = (t) => {
        if (t != null) return (typeof t == "object" && "__type" in t && delete t.__type, (0, O5i.expectUnion)(t));
      }));
  });