/**
 * @module aK
 * @category network/express
 * @label express
 * @position 1733 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aK) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aK = T((h3) => {
  "use strict";
  var Abi = p3(),
    ybi = ep(),
    _bi = ahr(),
    Ebi = Fgi(),
    vbi = qgi(),
    Cbi = Hgi(),
    Sbi = Wgi(),
    wbi = fbi(),
    xbi = bbi(),
    Tbi = _$(),
    khr = class t extends Uint8Array {
      static fromString(e, r = "utf-8") {
        if (typeof e == "string") return r === "base64" ? t.mutate(Abi.fromBase64(e)) : t.mutate(ybi.fromUtf8(e));
        throw new Error(`Unsupported conversion from ${typeof e} to Uint8ArrayBlobAdapter.`);
      }
      static mutate(e) {
        return (Object.setPrototypeOf(e, t.prototype), e);
      }
      transformToString(e = "utf-8") {
        return e === "base64" ? Abi.toBase64(this) : ybi.toUtf8(this);
      }
    };
  h3.Uint8ArrayBlobAdapter = khr;
  Object.keys(_bi).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(h3, t) &&
      Object.defineProperty(h3, t, {
        enumerable: !0,
        get: function () {
          return _bi[t];
        },
      });
  });
  Object.keys(Ebi).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(h3, t) &&
      Object.defineProperty(h3, t, {
        enumerable: !0,
        get: function () {
          return Ebi[t];
        },
      });
  });
  Object.keys(vbi).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(h3, t) &&
      Object.defineProperty(h3, t, {
        enumerable: !0,
        get: function () {
          return vbi[t];
        },
      });
  });
  Object.keys(Cbi).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(h3, t) &&
      Object.defineProperty(h3, t, {
        enumerable: !0,
        get: function () {
          return Cbi[t];
        },
      });
  });
  Object.keys(Sbi).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(h3, t) &&
      Object.defineProperty(h3, t, {
        enumerable: !0,
        get: function () {
          return Sbi[t];
        },
      });
  });
  Object.keys(wbi).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(h3, t) &&
      Object.defineProperty(h3, t, {
        enumerable: !0,
        get: function () {
          return wbi[t];
        },
      });
  });
  Object.keys(xbi).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(h3, t) &&
      Object.defineProperty(h3, t, {
        enumerable: !0,
        get: function () {
          return xbi[t];
        },
      });
  });
  Object.keys(Tbi).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(h3, t) &&
      Object.defineProperty(h3, t, {
        enumerable: !0,
        get: function () {
          return Tbi[t];
        },
      });
  });
});
var zlt,
  Ev,
  Ylt = j(() => {
    ((zlt = Se(aK())),
      (Ev = async (t = new Uint8Array(), e) => {
        if (t instanceof Uint8Array) return zlt.Uint8ArrayBlobAdapter.mutate(t);
        if (!t) return zlt.Uint8ArrayBlobAdapter.mutate(new Uint8Array());
        let r = e.streamCollector(t);
        return zlt.Uint8ArrayBlobAdapter.mutate(await r);
      }));
  });
function XD(t) {
  return encodeURIComponent(t).replace(/[!'()*]/g, function (e) {
    return "%" + e.charCodeAt(0).toString(16).toUpperCase();
  });
}
var Klt = j(() => {});
var US,
  Ohr = j(() => {
    US = (t) => (typeof t == "function" ? t() : t);
  });
var QSe,
  Jlt = j(() => {
    QSe = (t, e, r, n, o) => ({ name: e, namespace: t, traits: r, input: n, output: o });
  });
var Dbi,
  Ibi,
  Rbi,
  Nhr,
  kbi = j(() => {
    ((Dbi = Se(Tc())), (Ibi = Se(Hg())));
    Jlt();
    ((Rbi = (t) => (e, r) => async (n) => {
      let { response: o } = await e(n),
        { operationSchema: s } = (0, Ibi.getSmithyContext)(r),
        [, a, u, c, m, d] = s ?? [];
      try {
        let f = await t.protocol.deserializeResponse(QSe(a, u, c, m, d), { ...t, ...r }, o);
        return { response: o, output: f };
      } catch (f) {
        if (
          (Object.defineProperty(f, "$response", { value: o, enumerable: !1, writable: !1, configurable: !1 }),
          !("$metadata" in f))
        ) {
          let p =
            "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
          try {
            f.message +=
              `
  ` + p;
          } catch {
            !r.logger || r.logger?.constructor?.name === "NoOpLogger" ? console.warn(p) : r.logger?.warn?.(p);
          }
          typeof f.$responseBodyText < "u" && f.$response && (f.$response.body = f.$responseBodyText);
          try {
            if (Dbi.HttpResponse.isInstance(o)) {
              let { headers: h = {} } = o,
                g = Object.entries(h);
              f.$metadata = {
                httpStatusCode: o.statusCode,
                requestId: Nhr(/^x-[\w-]+-request-?id$/, g),
                extendedRequestId: Nhr(/^x-[\w-]+-id-2$/, g),
                cfId: Nhr(/^x-[\w-]+-cf-id$/, g),
              };
            }
          } catch {}
        }
        throw f;
      }
    }),
      (Nhr = (t, e) => (e.find(([r]) => r.match(t)) || [void 0, void 0])[1]));
  });
var Obi,
  Nbi,
  Pbi = j(() => {
    Obi = Se(Hg());
    Jlt();
    Nbi = (t) => (e, r) => async (n) => {
      let { operationSchema: o } = (0, Obi.getSmithyContext)(r),
        [, s, a, u, c, m] = o ?? [],
        d = r.endpointV2?.url && t.urlParser ? async () => t.urlParser(r.endpointV2.url) : t.endpoint,
        f = await t.protocol.serializeRequest(QSe(s, a, u, c, m), n.input, { ...t, ...r, endpoint: d });
      return e({ ...n, request: f });
    };
  });
function uK(t) {
  return {
    applyToStack: (e) => {
      (e.add(Nbi(t), Lbi), e.add(Rbi(t), Bbi), t.protocol.setSerdeContext(t));
    },
  };
}
var Bbi,
  Lbi,
  Mbi = j(() => {
    kbi();
    Pbi();
    ((Bbi = { name: "deserializerMiddleware", step: "deserialize", tags: ["DESERIALIZER"], override: !0 }),
      (Lbi = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: !0 }));
  });
var cf,
  v$ = j(() => {
    cf = class {
      name;
      namespace;
      traits;
      static assign(e, r) {
        return Object.assign(e, r);
      }
      static [Symbol.hasInstance](e) {
        let r = this.prototype.isPrototypeOf(e);
        return !r && typeof e == "object" && e !== null ? e.symbol === this.symbol : r;
      }
      getName() {
        return this.namespace + "#" + this.name;
      }
    };
  });
var Xlt,
  GDa,
  Fbi = j(() => {
    v$();
    ((Xlt = class t extends cf {
      static symbol = Symbol.for("@smithy/lis");
      name;
      traits;
      valueSchema;
      symbol = t.symbol;
    }),
      (GDa = (t, e, r, n) => cf.assign(new Xlt(), { name: e, namespace: t, traits: r, valueSchema: n })));
  });
var Zlt,
  qDa,
  Ubi = j(() => {
    v$();
    ((Zlt = class t extends cf {
      static symbol = Symbol.for("@smithy/map");
      name;
      traits;
      keySchema;
      valueSchema;
      symbol = t.symbol;
    }),
      (qDa = (t, e, r, n, o) =>
        cf.assign(new Zlt(), { name: e, namespace: t, traits: r, keySchema: n, valueSchema: o })));
  });
var e0t,
  HDa,
  $bi = j(() => {
    v$();
    ((e0t = class t extends cf {
      static symbol = Symbol.for("@smithy/ope");
      name;
      traits;
      input;
      output;
      symbol = t.symbol;
    }),
      (HDa = (t, e, r, n, o) => cf.assign(new e0t(), { name: e, namespace: t, traits: r, input: n, output: o })));
  });
var xme,
  VDa,
  Phr = j(() => {
    v$();
    ((xme = class t extends cf {
      static symbol = Symbol.for("@smithy/str");
      name;
      traits;
      memberNames;
      memberList;
      symbol = t.symbol;
    }),
      (VDa = (t, e, r, n, o) =>
        cf.assign(new xme(), { name: e, namespace: t, traits: r, memberNames: n, memberList: o })));
  });
var t0t,
  WDa,
  jbi = j(() => {
    v$();
    Phr();
    ((t0t = class t extends xme {
      static symbol = Symbol.for("@smithy/err");
      ctor;
      symbol = t.symbol;
    }),
      (WDa = (t, e, r, n, o, s) =>
        cf.assign(new t0t(), { name: e, namespace: t, traits: r, memberNames: n, memberList: o, ctor: null })));
  });
function ZD(t) {
  if (typeof t == "object") return t;
  t = t | 0;
  let e = {},
    r = 0;
  for (let n of [
    "httpLabel",
    "idempotent",
    "idempotencyToken",
    "sensitive",
    "httpPayload",
    "httpResponseCode",
    "httpQueryParams",
  ])
    ((t >> r++) & 1) === 1 && (e[n] = 1);
  return e;
}
var Bhr = j(() => {});
function GSe(t, e) {
  if (t instanceof ji) return Object.assign(t, { memberName: e, _isMemberSchema: !0 });
  let r = ji;
  return new r(t, e);
}
var ji,
  Lhr,
  Qbi,
  Gbi = j(() => {
    Ohr();
    Bhr();
    ji = class t {
      ref;
      memberName;
      static symbol = Symbol.for("@smithy/nor");
      symbol = t.symbol;
      name;
      schema;
      _isMemberSchema;
      traits;
      memberTraits;
      normalizedTraits;
      constructor(e, r) {
        ((this.ref = e), (this.memberName = r));
        let n = [],
          o = e,
          s = e;
        for (this._isMemberSchema = !1; Lhr(o); ) (n.push(o[1]), (o = o[0]), (s = US(o)), (this._isMemberSchema = !0));
        if (n.length > 0) {
          this.memberTraits = {};
          for (let a = n.length - 1; a >= 0; --a) {
            let u = n[a];
            Object.assign(this.memberTraits, ZD(u));
          }
        } else this.memberTraits = 0;
        if (s instanceof t) {
          let a = this.memberTraits;
          (Object.assign(this, s),
            (this.memberTraits = Object.assign({}, a, s.getMemberTraits(), this.getMemberTraits())),
            (this.normalizedTraits = void 0),
            (this.memberName = r ?? s.memberName));
          return;
        }
        if (
          ((this.schema = US(s)),
          Qbi(this.schema)
            ? ((this.name = `${this.schema[1]}#${this.schema[2]}`), (this.traits = this.schema[3]))
            : ((this.name = this.memberName ?? String(s)), (this.traits = 0)),
          this._isMemberSchema && !r)
        )
          throw new Error(
            `@smithy/core/schema - NormalizedSchema member init ${this.getName(!0)} missing member name.`,
          );
      }
      static [Symbol.hasInstance](e) {
        let r = this.prototype.isPrototypeOf(e);
        return !r && typeof e == "object" && e !== null ? e.symbol === this.symbol : r;
      }
      static of(e) {
        let r = US(e);
        if (r instanceof t) return r;
        if (Lhr(r)) {
          let [n, o] = r;
          if (n instanceof t) return (Object.assign(n.getMergedTraits(), ZD(o)), n);
          throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(e, null, 2)}.`);
        }
        return new t(r);
      }
      getSchema() {
        let e = this.schema;
        return e[0] === 0 ? e[4] : e;
      }
      getName(e = !1) {
        let { name: r } = this;
        return !e && r && r.includes("#") ? r.split("#")[1] : r || void 0;
      }
      getMemberName() {
        return this.memberName;
      }
      isMemberSchema() {
        return this._isMemberSchema;
      }
      isListSchema() {
        let e = this.getSchema();
        return typeof e == "number" ? e >= 64 && e < 128 : e[0] === 1;
      }
      isMapSchema() {
        let e = this.getSchema();
        return typeof e == "number" ? e >= 128 && e <= 255 : e[0] === 2;
      }
      isStructSchema() {
        let r = this.getSchema()[0];
        return r === 3 || r === -3 || r === 4;
      }
      isUnionSchema() {
        return this.getSchema()[0] === 4;
      }
      isBlobSchema() {
        let e = this.getSchema();
        return e === 21 || e === 42;
      }
      isTimestampSchema() {
        let e = this.getSchema();
        return typeof e == "number" && e >= 4 && e <= 7;
      }
      isUnitSchema() {
        return this.getSchema() === "unit";
      }
      isDocumentSchema() {
        return this.getSchema() === 15;
      }
      isStringSchema() {
        return this.getSchema() === 0;
      }
      isBooleanSchema() {
        return this.getSchema() === 2;
      }
      isNumericSchema() {
        return this.getSchema() === 1;
      }
      isBigIntegerSchema() {
        return this.getSchema() === 17;
      }
      isBigDecimalSchema() {
        return this.getSchema() === 19;
      }
      isStreaming() {
        let { streaming: e } = this.getMergedTraits();
        return !!e || this.getSchema() === 42;
      }
      isIdempotencyToken() {
        let e = (s) => (s & 4) === 4 || !!s?.idempotencyToken,
          { normalizedTraits: r, traits: n, memberTraits: o } = this;
        return e(r) || e(n) || e(o);
      }
      getMergedTraits() {
        return this.normalizedTraits ?? (this.normalizedTraits = { ...this.getOwnTraits(), ...this.getMemberTraits() });
      }
      getMemberTraits() {
        return ZD(this.memberTraits);
      }
      getOwnTraits() {
        return ZD(this.traits);
      }
      getKeySchema() {
        let [e, r] = [this.isDocumentSchema(), this.isMapSchema()];
        if (!e && !r) throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(!0)}`);
        let n = this.getSchema(),
          o = e ? 15 : (n[4] ?? 0);
        return GSe([o, 0], "key");
      }
      getValueSchema() {
        let e = this.getSchema(),
          [r, n, o] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()],
          s = typeof e == "number" ? 63 & e : e && typeof e == "object" && (n || o) ? e[3 + e[0]] : r ? 15 : void 0;
        if (s != null) return GSe([s, 0], n ? "value" : "member");
        throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no value member.`);
      }
      getMemberSchema(e) {
        let r = this.getSchema();
        if (this.isStructSchema() && r[4].includes(e)) {
          let n = r[4].indexOf(e),
            o = r[5][n];
          return GSe(Lhr(o) ? o : [o, 0], e);
        }
        if (this.isDocumentSchema()) return GSe([15, 0], e);
        throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no no member=${e}.`);
      }
      getMemberSchemas() {
        let e = {};
        try {
          for (let [r, n] of this.structIterator()) e[r] = n;
        } catch {}
        return e;
      }
      getEventStreamMember() {
        if (this.isStructSchema()) {
          for (let [e, r] of this.structIterator()) if (r.isStreaming() && r.isStructSchema()) return e;
        }
        return "";
      }
      *structIterator() {
        if (this.isUnitSchema()) return;
        if (!this.isStructSchema()) throw new Error("@smithy/core/schema - cannot iterate non-struct schema.");
        let e = this.getSchema();
        for (let r = 0; r < e[4].length; ++r) yield [e[4][r], GSe([e[5][r], 0], e[4][r])];
      }
    };
    ((Lhr = (t) => Array.isArray(t) && t.length === 2), (Qbi = (t) => Array.isArray(t) && t.length >= 5));
  });
var qSe,
  zDa,
  YDa,
  qbi = j(() => {
    v$();
    ((qSe = class t extends cf {
      static symbol = Symbol.for("@smithy/sim");
      name;
      schemaRef;
      traits;
      symbol = t.symbol;
    }),
      (zDa = (t, e, r, n) => cf.assign(new qSe(), { name: e, namespace: t, traits: n, schemaRef: r })),
      (YDa = (t, e, r, n) => cf.assign(new qSe(), { name: e, namespace: t, traits: r, schemaRef: n })));
  });
var KDa,
  Hbi = j(() => {
    KDa = {
      BLOB: 21,
      STREAMING_BLOB: 42,
      BOOLEAN: 2,
      STRING: 0,
      NUMERIC: 1,
      BIG_INTEGER: 17,
      BIG_DECIMAL: 19,
      DOCUMENT: 15,
      TIMESTAMP_DEFAULT: 4,
      TIMESTAMP_DATE_TIME: 5,
      TIMESTAMP_HTTP_DATE: 6,
      TIMESTAMP_EPOCH_SECONDS: 7,
      LIST_MODIFIER: 64,
      MAP_MODIFIER: 128,
    };
  });
var es,
  Vbi = j(() => {
    es = class t {
      namespace;
      schemas;
      exceptions;
      static registries = new Map();
      constructor(e, r = new Map(), n = new Map()) {
        ((this.namespace = e), (this.schemas = r), (this.exceptions = n));
      }
      static for(e) {
        return (t.registries.has(e) || t.registries.set(e, new t(e)), t.registries.get(e));
      }
      register(e, r) {
        let n = this.normalizeShapeId(e);
        t.for(n.split("#")[0]).schemas.set(n, r);
      }
      getSchema(e) {
        let r = this.normalizeShapeId(e);
        if (!this.schemas.has(r)) throw new Error(`@smithy/core/schema - schema not found for ${r}`);
        return this.schemas.get(r);
      }
      registerError(e, r) {
        let n = e,
          o = t.for(n[1]);
        (o.schemas.set(n[1] + "#" + n[2], n), o.exceptions.set(n, r));
      }
      getErrorCtor(e) {
        let r = e;
        return t.for(r[1]).exceptions.get(r);
      }
      getBaseException() {
        for (let e of this.exceptions.keys())
          if (Array.isArray(e)) {
            let [, r, n] = e,
              o = r + "#" + n;
            if (o.startsWith("smithy.ts.sdk.synthetic.") && o.endsWith("ServiceException")) return e;
          }
      }
      find(e) {
        return [...this.schemas.values()].find(e);
      }
      clear() {
        (this.schemas.clear(), this.exceptions.clear());
      }
      normalizeShapeId(e) {
        return e.includes("#") ? e : this.namespace + "#" + e;
      }
    };
  });
var r0t = {};
Wi(r0t, {
  ErrorSchema: () => t0t,
  ListSchema: () => Xlt,
  MapSchema: () => Zlt,
  NormalizedSchema: () => ji,
  OperationSchema: () => e0t,
  SCHEMA: () => KDa,
  Schema: () => cf,
  SimpleSchema: () => qSe,
  StructureSchema: () => xme,
  TypeRegistry: () => es,
  deref: () => US,
  deserializerMiddlewareOption: () => Bbi,
  error: () => WDa,
  getSchemaSerdePlugin: () => uK,
  isStaticSchema: () => Qbi,
  list: () => GDa,
  map: () => qDa,
  op: () => HDa,
  operation: () => QSe,
  serializerMiddlewareOption: () => Lbi,
  sim: () => zDa,
  simAdapter: () => YDa,
  struct: () => VDa,
  translateTraits: () => ZD,
});
var Wc = j(() => {
  Ohr();
  Mbi();
  Fbi();
  Ubi();
  $bi();
  Jlt();
  jbi();
  Gbi();
  v$();
  qbi();
  Phr();
  Hbi();
  Bhr();
  Vbi();
});
var JDa,
  Wbi = j(() => {
    JDa = (t, e, r = (n) => n) => t;
  });
var XDa,
  ZDa,
  HSe,
  eIa,
  n0t,
  VSe,
  tIa,
  Mhr,
  Fhr,
  Uhr,
  $hr,
  rIa,
  nIa,
  zbi,
  iIa,
  oIa,
  o0t,
  sIa,
  jhr,
  aIa,
  Tme,
  Qhr,
  uIa,
  cIa,
  lIa,
  Ybi,
  Kbi,
  mIa,
  dIa,
  cK,
  Ghr,
  i0t,
  WSe,
  qhr = j(() => {
    ((XDa = (t) => {
      switch (t) {
        case "true":
          return !0;
        case "false":
          return !1;
        default:
          throw new Error(`Unable to parse boolean value "${t}"`);
      }
    }),
      (ZDa = (t) => {
        if (t != null) {
          if (typeof t == "number") {
            if (((t === 0 || t === 1) && WSe.warn(i0t(`Expected boolean, got ${typeof t}: ${t}`)), t === 0)) return !1;
            if (t === 1) return !0;
          }
          if (typeof t == "string") {
            let e = t.toLowerCase();
            if (
              ((e === "false" || e === "true") && WSe.warn(i0t(`Expected boolean, got ${typeof t}: ${t}`)),
              e === "false")
            )
              return !1;
            if (e === "true") return !0;
          }
          if (typeof t == "boolean") return t;
          throw new TypeError(`Expected boolean, got ${typeof t}: ${t}`);
        }
      }),
      (HSe = (t) => {
        if (t != null) {
          if (typeof t == "string") {
            let e = parseFloat(t);
            if (!Number.isNaN(e))
              return (String(e) !== String(t) && WSe.warn(i0t(`Expected number but observed string: ${t}`)), e);
          }
          if (typeof t == "number") return t;
          throw new TypeError(`Expected number, got ${typeof t}: ${t}`);
        }
      }),
      (eIa = Math.ceil(34028234663852886e22)),
      (n0t = (t) => {
        let e = HSe(t);
        if (e !== void 0 && !Number.isNaN(e) && e !== 1 / 0 && e !== -1 / 0 && Math.abs(e) > eIa)
          throw new TypeError(`Expected 32-bit float, got ${t}`);
        return e;
      }),
      (VSe = (t) => {
        if (t != null) {
          if (Number.isInteger(t) && !Number.isNaN(t)) return t;
          throw new TypeError(`Expected integer, got ${typeof t}: ${t}`);
        }
      }),
      (tIa = VSe),
      (Mhr = (t) => $hr(t, 32)),
      (Fhr = (t) => $hr(t, 16)),
      (Uhr = (t) => $hr(t, 8)),
      ($hr = (t, e) => {
        let r = VSe(t);
        if (r !== void 0 && rIa(r, e) !== r) throw new TypeError(`Expected ${e}-bit integer, got ${t}`);
        return r;
      }),
      (rIa = (t, e) => {
        switch (e) {
          case 32:
            return Int32Array.of(t)[0];
          case 16:
            return Int16Array.of(t)[0];
          case 8:
            return Int8Array.of(t)[0];
        }
      }),
      (nIa = (t, e) => {
        if (t == null)
          throw e ? new TypeError(`Expected a non-null value for ${e}`) : new TypeError("Expected a non-null value");
        return t;
      }),
      (zbi = (t) => {
        if (t == null) return;
        if (typeof t == "object" && !Array.isArray(t)) return t;
        let e = Array.isArray(t) ? "array" : typeof t;
        throw new TypeError(`Expected object, got ${e}: ${t}`);
      }),
      (iIa = (t) => {
        if (t != null) {
          if (typeof t == "string") return t;
          if (["boolean", "number", "bigint"].includes(typeof t))
            return (WSe.warn(i0t(`Expected string, got ${typeof t}: ${t}`)), String(t));
          throw new TypeError(`Expected string, got ${typeof t}: ${t}`);
        }
      }),
      (oIa = (t) => {
        if (t == null) return;
        let e = zbi(t),
          r = Object.entries(e)
            .filter(([, n]) => n != null)
            .map(([n]) => n);
        if (r.length === 0) throw new TypeError("Unions must have exactly one non-null member. None were found.");
        if (r.length > 1) throw new TypeError(`Unions must have exactly one non-null member. Keys ${r} were not null.`);
        return e;
      }),
      (o0t = (t) => HSe(typeof t == "string" ? Tme(t) : t)),
      (sIa = o0t),
      (jhr = (t) => n0t(typeof t == "string" ? Tme(t) : t)),
      (aIa = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g),
      (Tme = (t) => {
        let e = t.match(aIa);
        if (e === null || e[0].length !== t.length) throw new TypeError("Expected real number, got implicit NaN");
        return parseFloat(t);
      }),
      (Qhr = (t) => (typeof t == "string" ? Ybi(t) : HSe(t))),
      (uIa = Qhr),
      (cIa = Qhr),
      (lIa = (t) => (typeof t == "string" ? Ybi(t) : n0t(t))),
      (Ybi = (t) => {
        switch (t) {
          case "NaN":
            return NaN;
          case "Infinity":
            return 1 / 0;
          case "-Infinity":
            return -1 / 0;
          default:
            throw new Error(`Unable to parse float value: ${t}`);
        }
      }),
      (Kbi = (t) => VSe(typeof t == "string" ? Tme(t) : t)),
      (mIa = Kbi),
      (dIa = (t) => Mhr(typeof t == "string" ? Tme(t) : t)),
      (cK = (t) => Fhr(typeof t == "string" ? Tme(t) : t)),
      (Ghr = (t) => Uhr(typeof t == "string" ? Tme(t) : t)),
      (i0t = (t) =>
        String(new TypeError(t).stack || t)
          .split(
            `
`,
          )
          .slice(0, 5)
          .filter((e) => !e.includes("stackTraceWarning")).join(`
`)),
      (WSe = { warn: console.warn }));
  });
function YSe(t) {
  let e = t.getUTCFullYear(),
    r = t.getUTCMonth(),
    n = t.getUTCDay(),
    o = t.getUTCDate(),
    s = t.getUTCHours(),
    a = t.getUTCMinutes(),
    u = t.getUTCSeconds(),
    c = o < 10 ? `0${o}` : `${o}`,
    m = s < 10 ? `0${s}` : `${s}`,
    d = a < 10 ? `0${a}` : `${a}`,
    f = u < 10 ? `0${u}` : `${u}`;
  return `${fIa[n]}, ${c} ${Vhr[r]} ${e} ${m}:${d}:${f} GMT`;
}
var fIa,
  Vhr,
  pIa,
  hIa,
  gIa,
  Whr,
  bIa,
  AIa,
  yIa,
  zhr,
  Yhr,
  zSe,
  _Ia,
  EIa,
  vIa,
  Hhr,
  CIa,
  SIa,
  wIa,
  eI,
  xIa,
  TIa,
  Dme,
  Jbi = j(() => {
    qhr();
    ((fIa = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
      (Vhr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]));
    ((pIa = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/)),
      (hIa = (t) => {
        if (t == null) return;
        if (typeof t != "string") throw new TypeError("RFC-3339 date-times must be expressed as strings");
        let e = pIa.exec(t);
        if (!e) throw new TypeError("Invalid RFC-3339 date-time value");
        let [r, n, o, s, a, u, c, m] = e,
          d = cK(Dme(n)),
          f = eI(o, "month", 1, 12),
          p = eI(s, "day", 1, 31);
        return zSe(d, f, p, { hours: a, minutes: u, seconds: c, fractionalMilliseconds: m });
      }),
      (gIa = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/)),
      (Whr = (t) => {
        if (t == null) return;
        if (typeof t != "string") throw new TypeError("RFC-3339 date-times must be expressed as strings");
        let e = gIa.exec(t);
        if (!e) throw new TypeError("Invalid RFC-3339 date-time value");
        let [r, n, o, s, a, u, c, m, d] = e,
          f = cK(Dme(n)),
          p = eI(o, "month", 1, 12),
          h = eI(s, "day", 1, 31),
          g = zSe(f, p, h, { hours: a, minutes: u, seconds: c, fractionalMilliseconds: m });
        return (d.toUpperCase() != "Z" && g.setTime(g.getTime() - TIa(d)), g);
      }),
      (bIa = new RegExp(
        /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/,
      )),
      (AIa = new RegExp(
        /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/,
      )),
      (yIa = new RegExp(
        /^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/,
      )),
      (zhr = (t) => {
        if (t == null) return;
        if (typeof t != "string") throw new TypeError("RFC-7231 date-times must be expressed as strings");
        let e = bIa.exec(t);
        if (e) {
          let [r, n, o, s, a, u, c, m] = e;
          return zSe(cK(Dme(s)), Hhr(o), eI(n, "day", 1, 31), {
            hours: a,
            minutes: u,
            seconds: c,
            fractionalMilliseconds: m,
          });
        }
        if (((e = AIa.exec(t)), e)) {
          let [r, n, o, s, a, u, c, m] = e;
          return vIa(
            zSe(_Ia(s), Hhr(o), eI(n, "day", 1, 31), { hours: a, minutes: u, seconds: c, fractionalMilliseconds: m }),
          );
        }
        if (((e = yIa.exec(t)), e)) {
          let [r, n, o, s, a, u, c, m] = e;
          return zSe(cK(Dme(m)), Hhr(n), eI(o.trimLeft(), "day", 1, 31), {
            hours: s,
            minutes: a,
            seconds: u,
            fractionalMilliseconds: c,
          });
        }
        throw new TypeError("Invalid RFC-7231 date-time value");
      }),
      (Yhr = (t) => {
        if (t == null) return;
        let e;
        if (typeof t == "number") e = t;
        else if (typeof t == "string") e = o0t(t);
        else if (typeof t == "object" && t.tag === 1) e = t.value;
        else
          throw new TypeError(
            "Epoch timestamps must be expressed as floating point numbers or their string representation",
          );
        if (Number.isNaN(e) || e === 1 / 0 || e === -1 / 0)
          throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
        return new Date(Math.round(e * 1e3));
      }),
      (zSe = (t, e, r, n) => {
        let o = e - 1;
        return (
          SIa(t, o, r),
          new Date(
            Date.UTC(
              t,
              o,
              r,
              eI(n.hours, "hour", 0, 23),
              eI(n.minutes, "minute", 0, 59),
              eI(n.seconds, "seconds", 0, 60),
              xIa(n.fractionalMilliseconds),
            ),
          )
        );
      }),
      (_Ia = (t) => {
        let e = new Date().getUTCFullYear(),
          r = Math.floor(e / 100) * 100 + cK(Dme(t));
        return r < e ? r + 100 : r;
      }),
      (EIa = 50 * 365 * 24 * 60 * 60 * 1e3),
      (vIa = (t) =>
        t.getTime() - new Date().getTime() > EIa
          ? new Date(
              Date.UTC(
                t.getUTCFullYear() - 100,
                t.getUTCMonth(),
                t.getUTCDate(),
                t.getUTCHours(),
                t.getUTCMinutes(),
                t.getUTCSeconds(),
                t.getUTCMilliseconds(),
              ),
            )
          : t),
      (Hhr = (t) => {
        let e = Vhr.indexOf(t);
        if (e < 0) throw new TypeError(`Invalid month: ${t}`);
        return e + 1;
      }),
      (CIa = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]),
      (SIa = (t, e, r) => {
        let n = CIa[e];
        if ((e === 1 && wIa(t) && (n = 29), r > n)) throw new TypeError(`Invalid day for ${Vhr[e]} in ${t}: ${r}`);
      }),
      (wIa = (t) => t % 4 === 0 && (t % 100 !== 0 || t % 400 === 0)),
      (eI = (t, e, r, n) => {
        let o = Ghr(Dme(t));
        if (o < r || o > n) throw new TypeError(`${e} must be between ${r} and ${n}, inclusive`);
        return o;
      }),
      (xIa = (t) => (t == null ? 0 : jhr("0." + t) * 1e3)),
      (TIa = (t) => {
        let e = t[0],
          r = 1;
        if (e == "+") r = 1;
        else if (e == "-") r = -1;
        else throw new TypeError(`Offset direction, ${e}, must be "+" or "-"`);
        let n = Number(t.substring(1, 3)),
          o = Number(t.substring(4, 6));
        return r * (n * 60 + o) * 60 * 1e3;
      }),
      (Dme = (t) => {
        let e = 0;
        for (; e < t.length - 1 && t.charAt(e) === "0"; ) e++;
        return e === 0 ? t : t.slice(e);
      }));
  });
var tI = {};
Wi(tI, {
  __addDisposableResource: () => vAi,
  __assign: () => s0t,
  __asyncDelegator: () => pAi,
  __asyncGenerator: () => fAi,
  __asyncValues: () => hAi,
  __await: () => Ime,
  __awaiter: () => aAi,
  __classPrivateFieldGet: () => yAi,
  __classPrivateFieldIn: () => EAi,
  __classPrivateFieldSet: () => _Ai,
  __createBinding: () => u0t,
  __decorate: () => eAi,
  __disposeResources: () => CAi,
  __esDecorate: () => rAi,
  __exportStar: () => cAi,
  __extends: () => Xbi,
  __generator: () => uAi,
  __importDefault: () => AAi,
  __importStar: () => bAi,
  __makeTemplateObject: () => gAi,
  __metadata: () => sAi,
  __param: () => tAi,
  __propKey: () => iAi,
  __read: () => Xhr,
  __rest: () => Zbi,
  __rewriteRelativeImportExtension: () => SAi,
  __runInitializers: () => nAi,
  __setFunctionName: () => oAi,
  __spread: () => lAi,
  __spreadArray: () => dAi,
  __spreadArrays: () => mAi,
  __values: () => a0t,
  default: () => RIa,
});
function Xbi(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Khr(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : ((r.prototype = e.prototype), new r());
}
function Zbi(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++)
      e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
  return r;
}
function eAi(t, e, r, n) {
  var o = arguments.length,
    s = o < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, r)) : n,
    a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var u = t.length - 1; u >= 0; u--) (a = t[u]) && (s = (o < 3 ? a(s) : o > 3 ? a(e, r, s) : a(e, r)) || s);
  return (o > 3 && s && Object.defineProperty(e, r, s), s);
}
function tAi(t, e) {
  return function (r, n) {
    e(r, n, t);
  };
}
function rAi(t, e, r, n, o, s) {
  function a(y) {
    if (y !== void 0 && typeof y != "function") throw new TypeError("Function expected");
    return y;
  }
  for (
    var u = n.kind,
      c = u === "getter" ? "get" : u === "setter" ? "set" : "value",
      m = !e && t ? (n.static ? t : t.prototype) : null,
      d = e || (m ? Object.getOwnPropertyDescriptor(m, n.name) : {}),
      f,
      p = !1,
      h = r.length - 1;
    h >= 0;
    h--
  ) {
    var g = {};
    for (var b in n) g[b] = b === "access" ? {} : n[b];
    for (var b in n.access) g.access[b] = n.access[b];
    g.addInitializer = function (y) {
      if (p) throw new TypeError("Cannot add initializers after decoration has completed");
      s.push(a(y || null));
    };
    var A = (0, r[h])(u === "accessor" ? { get: d.get, set: d.set } : d[c], g);
    if (u === "accessor") {
      if (A === void 0) continue;
      if (A === null || typeof A != "object") throw new TypeError("Object expected");
      ((f = a(A.get)) && (d.get = f), (f = a(A.set)) && (d.set = f), (f = a(A.init)) && o.unshift(f));
    } else (f = a(A)) && (u === "field" ? o.unshift(f) : (d[c] = f));
  }
  (m && Object.defineProperty(m, n.name, d), (p = !0));
}
function nAi(t, e, r) {
  for (var n = arguments.length > 2, o = 0; o < e.length; o++) r = n ? e[o].call(t, r) : e[o].call(t);
  return n ? r : void 0;
}
function iAi(t) {
  return typeof t == "symbol" ? t : "".concat(t);
}
function oAi(t, e, r) {
  return (
    typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""),
    Object.defineProperty(t, "name", { configurable: !0, value: r ? "".concat(r, " ", e) : e })
  );
}
function sAi(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(t, e);
}
function aAi(t, e, r, n) {
  function o(s) {
    return s instanceof r
      ? s
      : new r(function (a) {
          a(s);
        });
  }
  return new (r || (r = Promise))(function (s, a) {
    function u(d) {
      try {
        m(n.next(d));
      } catch (f) {
        a(f);
      }
    }
    function c(d) {
      try {
        m(n.throw(d));
      } catch (f) {
        a(f);
      }
    }
    function m(d) {
      d.done ? s(d.value) : o(d.value).then(u, c);
    }
    m((n = n.apply(t, e || [])).next());
  });
}
function uAi(t, e) {
  var r = {
      label: 0,
      sent: function () {
        if (s[0] & 1) throw s[1];
        return s[1];
      },
      trys: [],
      ops: [],
    },
    n,
    o,
    s,
    a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return (
    (a.next = u(0)),
    (a.throw = u(1)),
    (a.return = u(2)),
    typeof Symbol == "function" &&
      (a[Symbol.iterator] = function () {
        return this;
      }),
    a
  );
  function u(m) {
    return function (d) {
      return c([m, d]);
    };
  }
  function c(m) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; a && ((a = 0), m[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          o &&
            (s = m[0] & 2 ? o.return : m[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) &&
            !(s = s.call(o, m[1])).done)
        )
          return s;
        switch (((o = 0), s && (m = [m[0] & 2, s.value]), m[0])) {
          case 0:
          case 1:
            s = m;
            break;
          case 4:
            return (r.label++, { value: m[1], done: !1 });
          case 5:
            (r.label++, (o = m[1]), (m = [0]));
            continue;
          case 7:
            ((m = r.ops.pop()), r.trys.pop());
            continue;
          default:
            if (((s = r.trys), !(s = s.length > 0 && s[s.length - 1]) && (m[0] === 6 || m[0] === 2))) {
              r = 0;
              continue;
            }
            if (m[0] === 3 && (!s || (m[1] > s[0] && m[1] < s[3]))) {
              r.label = m[1];
              break;
            }
            if (m[0] === 6 && r.label < s[1]) {
              ((r.label = s[1]), (s = m));
              break;
            }
            if (s && r.label < s[2]) {
              ((r.label = s[2]), r.ops.push(m));
              break;
            }
            (s[2] && r.ops.pop(), r.trys.pop());
            continue;
        }
        m = e.call(t, r);
      } catch (d) {
        ((m = [6, d]), (o = 0));
      } finally {
        n = s = 0;
      }
    if (m[0] & 5) throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}
function cAi(t, e) {
  for (var r in t) r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && u0t(e, t, r);
}
function a0t(t) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    r = e && t[e],
    n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function () {
        return (t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t });
      },
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Xhr(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t),
    o,
    s = [],
    a;
  try {
    for (; (e === void 0 || e-- > 0) && !(o = n.next()).done; ) s.push(o.value);
  } catch (u) {
    a = { error: u };
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n);
    } finally {
      if (a) throw a.error;
    }
  }
  return s;
}
function lAi() {
  for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(Xhr(arguments[e]));
  return t;
}
function mAi() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), o = 0, e = 0; e < r; e++)
    for (var s = arguments[e], a = 0, u = s.length; a < u; a++, o++) n[o] = s[a];
  return n;
}
function dAi(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = e.length, s; n < o; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), (s[n] = e[n]));
  return t.concat(s || Array.prototype.slice.call(e));
}
function Ime(t) {
  return this instanceof Ime ? ((this.v = t), this) : new Ime(t);
}
function fAi(t, e, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []),
    o,
    s = [];
  return (
    (o = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype)),
    u("next"),
    u("throw"),
    u("return", a),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function a(h) {
    return function (g) {
      return Promise.resolve(g).then(h, f);
    };
  }
  function u(h, g) {
    n[h] &&
      ((o[h] = function (b) {
        return new Promise(function (A, y) {
          s.push([h, b, A, y]) > 1 || c(h, b);
        });
      }),
      g && (o[h] = g(o[h])));
  }
  function c(h, g) {
    try {
      m(n[h](g));
    } catch (b) {
      p(s[0][3], b);
    }
  }
  function m(h) {
    h.value instanceof Ime ? Promise.resolve(h.value.v).then(d, f) : p(s[0][2], h);
  }
  function d(h) {
    c("next", h);
  }
  function f(h) {
    c("throw", h);
  }
  function p(h, g) {
    (h(g), s.shift(), s.length && c(s[0][0], s[0][1]));
  }
}
function pAi(t) {
  var e, r;
  return (
    (e = {}),
    n("next"),
    n("throw", function (o) {
      throw o;
    }),
    n("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function n(o, s) {
    e[o] = t[o]
      ? function (a) {
          return (r = !r) ? { value: Ime(t[o](a)), done: !1 } : s ? s(a) : a;
        }
      : s;
  }
}
function hAi(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator],
    r;
  return e
    ? e.call(t)
    : ((t = typeof a0t == "function" ? a0t(t) : t[Symbol.iterator]()),
      (r = {}),
      n("next"),
      n("throw"),
      n("return"),
      (r[Symbol.asyncIterator] = function () {
        return this;
      }),
      r);
  function n(s) {
    r[s] =
      t[s] &&
      function (a) {
        return new Promise(function (u, c) {
          ((a = t[s](a)), o(u, c, a.done, a.value));
        });
      };
  }
  function o(s, a, u, c) {
    Promise.resolve(c).then(function (m) {
      s({ value: m, done: u });
    }, a);
  }
}
function gAi(t, e) {
  return (Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : (t.raw = e), t);
}
function bAi(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null) for (var r = Jhr(t), n = 0; n < r.length; n++) r[n] !== "default" && u0t(e, t, r[n]);
  return (DIa(e, t), e);
}
function AAi(t) {
  return t && t.__esModule ? t : { default: t };
}
function yAi(t, e, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}
function _Ai(t, e, r, n, o) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !o) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !o : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (n === "a" ? o.call(t, r) : o ? (o.value = r) : e.set(t, r), r);
}
function EAi(t, e) {
  if (e === null || (typeof e != "object" && typeof e != "function"))
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == "function" ? e === t : t.has(e);
}
function vAi(t, e, r) {
  if (e != null) {
    if (typeof e != "object" && typeof e != "function") throw new TypeError("Object expected.");
    var n, o;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = e[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      ((n = e[Symbol.dispose]), r && (o = n));
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    (o &&
      (n = function () {
        try {
          o.call(this);
        } catch (s) {
          return Promise.reject(s);
        }
      }),
      t.stack.push({ value: e, dispose: n, async: r }));
  } else r && t.stack.push({ async: !0 });
  return e;
}
function CAi(t) {
  function e(s) {
    ((t.error = t.hasError ? new IIa(s, t.error, "An error was suppressed during disposal.") : s), (t.hasError = !0));
  }
  var r,
    n = 0;
  function o() {
    for (; (r = t.stack.pop()); )
      try {
        if (!r.async && n === 1) return ((n = 0), t.stack.push(r), Promise.resolve().then(o));
        if (r.dispose) {
          var s = r.dispose.call(r.value);
          if (r.async)
            return (
              (n |= 2),
              Promise.resolve(s).then(o, function (a) {
                return (e(a), o());
              })
            );
        } else n |= 1;
      } catch (a) {
        e(a);
      }
    if (n === 1) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
    if (t.hasError) throw t.error;
  }
  return o();
}
function SAi(t, e) {
  return typeof t == "string" && /^\.\.?\//.test(t)
    ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (r, n, o, s, a) {
        return n ? (e ? ".jsx" : ".js") : o && (!s || !a) ? r : o + s + "." + a.toLowerCase() + "js";
      })
    : t;
}
var Khr,
  s0t,
  u0t,
  DIa,
  Jhr,
  IIa,
  RIa,
  rI = j(() => {
    Khr = function (t, e) {
      return (
        (Khr =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, n) {
              r.__proto__ = n;
            }) ||
          function (r, n) {
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
          }),
        Khr(t, e)
      );
    };
    s0t = function () {
      return (
        (s0t =
          Object.assign ||
          function (e) {
            for (var r, n = 1, o = arguments.length; n < o; n++) {
              r = arguments[n];
              for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            }
            return e;
          }),
        s0t.apply(this, arguments)
      );
    };
    u0t = Object.create
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
        };
    ((DIa = Object.create
      ? function (t, e) {
          Object.defineProperty(t, "default", { enumerable: !0, value: e });
        }
      : function (t, e) {
          t.default = e;
        }),
      (Jhr = function (t) {
        return (
          (Jhr =
            Object.getOwnPropertyNames ||
            function (e) {
              var r = [];
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[r.length] = n);
              return r;
            }),
          Jhr(t)
        );
      }));
    IIa =
      typeof SuppressedError == "function"
        ? SuppressedError
        : function (t, e, r) {
            var n = new Error(r);
            return ((n.name = "SuppressedError"), (n.error = t), (n.suppressed = e), n);
          };
    RIa = {
      __extends: Xbi,
      __assign: s0t,
      __rest: Zbi,
      __decorate: eAi,
      __param: tAi,
      __esDecorate: rAi,
      __runInitializers: nAi,
      __propKey: iAi,
      __setFunctionName: oAi,
      __metadata: sAi,
      __awaiter: aAi,
      __generator: uAi,
      __createBinding: u0t,
      __exportStar: cAi,
      __values: a0t,
      __read: Xhr,
      __spread: lAi,
      __spreadArrays: mAi,
      __spreadArray: dAi,
      __await: Ime,
      __asyncGenerator: fAi,
      __asyncDelegator: pAi,
      __asyncValues: hAi,
      __makeTemplateObject: gAi,
      __importStar: bAi,
      __importDefault: AAi,
      __classPrivateFieldGet: yAi,
      __classPrivateFieldSet: _Ai,
      __classPrivateFieldIn: EAi,
      __addDisposableResource: vAi,
      __disposeResources: CAi,
      __rewriteRelativeImportExtension: SAi,
    };
  });