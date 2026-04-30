/**
 * @module Zhr
 * @category utils/net
 * @label mime
 * @position 1735 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zhr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zhr = T((DAi) => {
  "use strict";
  var TAi = xAi(),
    _A = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0")),
    OIa = () => {
      if (TAi.randomUUID) return TAi.randomUUID();
      let t = new Uint8Array(16);
      return (
        crypto.getRandomValues(t),
        (t[6] = (t[6] & 15) | 64),
        (t[8] = (t[8] & 63) | 128),
        _A[t[0]] +
          _A[t[1]] +
          _A[t[2]] +
          _A[t[3]] +
          "-" +
          _A[t[4]] +
          _A[t[5]] +
          "-" +
          _A[t[6]] +
          _A[t[7]] +
          "-" +
          _A[t[8]] +
          _A[t[9]] +
          "-" +
          _A[t[10]] +
          _A[t[11]] +
          _A[t[12]] +
          _A[t[13]] +
          _A[t[14]] +
          _A[t[15]]
      );
    };
  DAi.v4 = OIa;
});
var vv,
  IAi = j(() => {
    vv = Se(Zhr());
  });
var i5,
  RAi = j(() => {
    i5 = function (e) {
      return Object.assign(new String(e), {
        deserializeJSON() {
          return JSON.parse(String(e));
        },
        toString() {
          return String(e);
        },
        toJSON() {
          return String(e);
        },
      });
    };
    i5.from = (t) =>
      t && typeof t == "object" && (t instanceof i5 || "deserializeJSON" in t)
        ? t
        : typeof t == "string" || Object.getPrototypeOf(t) === String.prototype
          ? i5(String(t))
          : i5(JSON.stringify(t));
    i5.fromObject = i5.from;
  });
function e3r(t) {
  return ((t.includes(",") || t.includes('"')) && (t = `"${t.replace(/"/g, '\\"')}"`), t);
}
var kAi = j(() => {});
function CN(t, e, r) {
  let n = Number(t);
  if (n < e || n > r) throw new Error(`Value ${n} out of range [${e}, ${r}]`);
}
var t3r,
  r3r,
  n3r,
  OAi,
  NAi,
  NIa,
  PIa,
  BIa,
  LIa,
  MIa,
  Rme,
  i3r,
  o3r,
  PAi = j(() => {
    ((t3r = "(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)(?:[ne|u?r]?s?day)?"),
      (r3r = "(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"),
      (n3r = "(\\d?\\d):(\\d{2}):(\\d{2})(?:\\.(\\d+))?"),
      (OAi = "(\\d?\\d)"),
      (NAi = "(\\d{4})"),
      (NIa = new RegExp(/^(\d{4})-(\d\d)-(\d\d)[tT](\d\d):(\d\d):(\d\d)(\.(\d+))?(([-+]\d\d:\d\d)|[zZ])$/)),
      (PIa = new RegExp(`^${t3r}, ${OAi} ${r3r} ${NAi} ${n3r} GMT$`)),
      (BIa = new RegExp(`^${t3r}, ${OAi}-${r3r}-(\\d\\d) ${n3r} GMT$`)),
      (LIa = new RegExp(`^${t3r} ${r3r} ( [1-9]|\\d\\d) ${n3r} ${NAi}$`)),
      (MIa = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]),
      (Rme = (t) => {
        if (t == null) return;
        let e = NaN;
        if (typeof t == "number") e = t;
        else if (typeof t == "string") {
          if (!/^-?\d*\.?\d+$/.test(t)) throw new TypeError("parseEpochTimestamp - numeric string invalid.");
          e = Number.parseFloat(t);
        } else typeof t == "object" && t.tag === 1 && (e = t.value);
        if (isNaN(e) || Math.abs(e) === 1 / 0) throw new TypeError("Epoch timestamps must be valid finite numbers.");
        return new Date(Math.round(e * 1e3));
      }),
      (i3r = (t) => {
        if (t == null) return;
        if (typeof t != "string") throw new TypeError("RFC3339 timestamps must be strings");
        let e = NIa.exec(t);
        if (!e) throw new TypeError(`Invalid RFC3339 timestamp format ${t}`);
        let [, r, n, o, s, a, u, , c, m] = e;
        (CN(n, 1, 12), CN(o, 1, 31), CN(s, 0, 23), CN(a, 0, 59), CN(u, 0, 60));
        let d = new Date(
          Date.UTC(
            Number(r),
            Number(n) - 1,
            Number(o),
            Number(s),
            Number(a),
            Number(u),
            Number(c) ? Math.round(parseFloat(`0.${c}`) * 1e3) : 0,
          ),
        );
        if ((d.setUTCFullYear(Number(r)), m.toUpperCase() != "Z")) {
          let [, f, p, h] = /([+-])(\d\d):(\d\d)/.exec(m) || [void 0, "+", 0, 0],
            g = f === "-" ? 1 : -1;
          d.setTime(d.getTime() + g * (Number(p) * 60 * 60 * 1e3 + Number(h) * 60 * 1e3));
        }
        return d;
      }),
      (o3r = (t) => {
        if (t == null) return;
        if (typeof t != "string") throw new TypeError("RFC7231 timestamps must be strings.");
        let e, r, n, o, s, a, u, c;
        if (
          ((c = PIa.exec(t))
            ? ([, e, r, n, o, s, a, u] = c)
            : (c = BIa.exec(t))
              ? (([, e, r, n, o, s, a, u] = c), (n = (Number(n) + 1900).toString()))
              : (c = LIa.exec(t)) && ([, r, e, o, s, a, u, n] = c),
          n && a)
        ) {
          let m = Date.UTC(
            Number(n),
            MIa.indexOf(r),
            Number(e),
            Number(o),
            Number(s),
            Number(a),
            u ? Math.round(parseFloat(`0.${u}`) * 1e3) : 0,
          );
          (CN(e, 1, 31), CN(o, 0, 23), CN(s, 0, 59), CN(a, 0, 60));
          let d = new Date(m);
          return (d.setUTCFullYear(Number(n)), d);
        }
        throw new TypeError(`Invalid RFC7231 date-time value ${t}.`);
      }));
  });
function s3r(t, e, r) {
  if (r <= 0 || !Number.isInteger(r)) throw new Error("Invalid number of delimiters (" + r + ") for splitEvery.");
  let n = t.split(e);
  if (r === 1) return n;
  let o = [],
    s = "";
  for (let a = 0; a < n.length; a++)
    (s === "" ? (s = n[a]) : (s += e + n[a]), (a + 1) % r === 0 && (o.push(s), (s = "")));
  return (s !== "" && o.push(s), o);
}
var BAi = j(() => {});
var KSe,
  LAi = j(() => {
    KSe = (t) => {
      let e = t.length,
        r = [],
        n = !1,
        o,
        s = 0;
      for (let a = 0; a < e; ++a) {
        let u = t[a];
        switch (u) {
          case '"':
            o !== "\\" && (n = !n);
            break;
          case ",":
            n || (r.push(t.slice(s, a)), (s = a + 1));
            break;
          default:
        }
        o = u;
      }
      return (
        r.push(t.slice(s)),
        r.map((a) => {
          a = a.trim();
          let u = a.length;
          return u < 2 ? a : (a[0] === '"' && a[u - 1] === '"' && (a = a.slice(1, u - 1)), a.replace(/\\"/g, '"'));
        })
      );
    };
  });
function a3r(t) {
  return new em(String(t), "bigDecimal");
}
var MAi,
  em,
  FAi = j(() => {
    ((MAi = /^-?\d*(\.\d+)?$/),
      (em = class t {
        string;
        type;
        constructor(e, r) {
          if (((this.string = e), (this.type = r), !MAi.test(e)))
            throw new Error(
              '@smithy/core/serde - NumericValue must only contain [0-9], at most one decimal point ".", and an optional negation prefix "-".',
            );
        }
        toString() {
          return this.string;
        }
        static [Symbol.hasInstance](e) {
          if (!e || typeof e != "object") return !1;
          let r = e;
          return t.prototype.isPrototypeOf(e) || (r.type === "bigDecimal" && MAi.test(r.string));
        }
      }));
  });
var UAi = {};
Wi(UAi, {
  LazyJsonString: () => i5,
  NumericValue: () => em,
  _parseEpochTimestamp: () => Rme,
  _parseRfc3339DateTimeWithOffset: () => i3r,
  _parseRfc7231DateTime: () => o3r,
  copyDocumentWithTransform: () => JDa,
  dateToUtcString: () => YSe,
  expectBoolean: () => ZDa,
  expectByte: () => Uhr,
  expectFloat32: () => n0t,
  expectInt: () => tIa,
  expectInt32: () => Mhr,
  expectLong: () => VSe,
  expectNonNull: () => nIa,
  expectNumber: () => HSe,
  expectObject: () => zbi,
  expectShort: () => Fhr,
  expectString: () => iIa,
  expectUnion: () => oIa,
  generateIdempotencyToken: () => vv.v4,
  handleFloat: () => uIa,
  limitedParseDouble: () => Qhr,
  limitedParseFloat: () => cIa,
  limitedParseFloat32: () => lIa,
  logger: () => WSe,
  nv: () => a3r,
  parseBoolean: () => XDa,
  parseEpochTimestamp: () => Yhr,
  parseRfc3339DateTime: () => hIa,
  parseRfc3339DateTimeWithOffset: () => Whr,
  parseRfc7231DateTime: () => zhr,
  quoteHeader: () => e3r,
  splitEvery: () => s3r,
  splitHeader: () => KSe,
  strictParseByte: () => Ghr,
  strictParseDouble: () => o0t,
  strictParseFloat: () => sIa,
  strictParseFloat32: () => jhr,
  strictParseInt: () => mIa,
  strictParseInt32: () => dIa,
  strictParseLong: () => Kbi,
  strictParseShort: () => cK,
});
var o5 = j(() => {
  Wbi();
  Jbi();
  IAi();
  RAi();
  qhr();
  kAi();
  PAi();
  BAi();
  LAi();
  FAi();
});
var s5,
  kme = j(() => {
    s5 = class {
      serdeContext;
      setSerdeContext(e) {
        this.serdeContext = e;
      }
    };
  });
var l0t,
  u3r,
  $Ai = j(() => {
    ((l0t = Se(ep())),
      (u3r = class {
        marshaller;
        serializer;
        deserializer;
        serdeContext;
        defaultContentType;
        constructor({ marshaller: e, serializer: r, deserializer: n, serdeContext: o, defaultContentType: s }) {
          ((this.marshaller = e),
            (this.serializer = r),
            (this.deserializer = n),
            (this.serdeContext = o),
            (this.defaultContentType = s));
        }
        async serializeEventStream({ eventStream: e, requestSchema: r, initialRequest: n }) {
          let o = this.marshaller,
            s = r.getEventStreamMember(),
            a = r.getMemberSchema(s),
            u = this.serializer,
            c = this.defaultContentType,
            m = Symbol("initialRequestMarker"),
            d = {
              async *[Symbol.asyncIterator]() {
                if (n) {
                  let f = {
                    ":event-type": { type: "string", value: "initial-request" },
                    ":message-type": { type: "string", value: "event" },
                    ":content-type": { type: "string", value: c },
                  };
                  u.write(r, n);
                  let p = u.flush();
                  yield { [m]: !0, headers: f, body: p };
                }
                for await (let f of e) yield f;
              },
            };
          return o.serialize(d, (f) => {
            if (f[m]) return { headers: f.headers, body: f.body };
            let p = Object.keys(f).find((E) => E !== "__type") ?? "",
              {
                additionalHeaders: h,
                body: g,
                eventType: b,
                explicitPayloadContentType: A,
              } = this.writeEventBody(p, a, f);
            return {
              headers: {
                ":event-type": { type: "string", value: b },
                ":message-type": { type: "string", value: "event" },
                ":content-type": { type: "string", value: A ?? c },
                ...h,
              },
              body: g,
            };
          });
        }
        async deserializeEventStream({ response: e, responseSchema: r, initialResponseContainer: n }) {
          let o = this.marshaller,
            s = r.getEventStreamMember(),
            u = r.getMemberSchema(s).getMemberSchemas(),
            c = Symbol("initialResponseMarker"),
            m = o.deserialize(e.body, async (p) => {
              let h = Object.keys(p).find((b) => b !== "__type") ?? "",
                g = p[h].body;
              if (h === "initial-response") {
                let b = await this.deserializer.read(r, g);
                return (delete b[s], { [c]: !0, ...b });
              } else if (h in u) {
                let b = u[h];
                if (b.isStructSchema()) {
                  let A = {},
                    y = !1;
                  for (let [E, v] of b.structIterator()) {
                    let { eventHeader: C, eventPayload: x } = v.getMergedTraits();
                    if (((y = y || !!(C || x)), x))
                      v.isBlobSchema()
                        ? (A[E] = g)
                        : v.isStringSchema()
                          ? (A[E] = (this.serdeContext?.utf8Encoder ?? l0t.toUtf8)(g))
                          : v.isStructSchema() && (A[E] = await this.deserializer.read(v, g));
                    else if (C) {
                      let k = p[h].headers[E]?.value;
                      k != null &&
                        (v.isNumericSchema()
                          ? k && typeof k == "object" && "bytes" in k
                            ? (A[E] = BigInt(k.toString()))
                            : (A[E] = Number(k))
                          : (A[E] = k));
                    }
                  }
                  if (y) return { [h]: A };
                }
                return { [h]: await this.deserializer.read(b, g) };
              } else return { $unknown: p };
            }),
            d = m[Symbol.asyncIterator](),
            f = await d.next();
          if (f.done) return m;
          if (f.value?.[c]) {
            if (!r)
              throw new Error(
                "@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.",
              );
            for (let [p, h] of Object.entries(f.value)) n[p] = h;
          }
          return {
            async *[Symbol.asyncIterator]() {
              for (f?.value?.[c] || (yield f.value); ; ) {
                let { done: p, value: h } = await d.next();
                if (p) break;
                yield h;
              }
            },
          };
        }
        writeEventBody(e, r, n) {
          let o = this.serializer,
            s = e,
            a = null,
            u,
            c = r.getSchema()[4].includes(e),
            m = {};
          if (c) {
            let p = r.getMemberSchema(e);
            if (p.isStructSchema()) {
              for (let [h, g] of p.structIterator()) {
                let { eventHeader: b, eventPayload: A } = g.getMergedTraits();
                if (A) a = h;
                else if (b) {
                  let y = n[e][h],
                    E = "binary";
                  (g.isNumericSchema()
                    ? (-2) ** 31 <= y && y <= 2 ** 31 - 1
                      ? (E = "integer")
                      : (E = "long")
                    : g.isTimestampSchema()
                      ? (E = "timestamp")
                      : g.isStringSchema()
                        ? (E = "string")
                        : g.isBooleanSchema() && (E = "boolean"),
                    y != null && ((m[h] = { type: E, value: y }), delete n[e][h]));
                }
              }
              if (a !== null) {
                let h = p.getMemberSchema(a);
                (h.isBlobSchema() ? (u = "application/octet-stream") : h.isStringSchema() && (u = "text/plain"),
                  o.write(h, n[e][a]));
              } else o.write(p, n[e]);
            } else
              throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
          } else {
            let [p, h] = n[e];
            ((s = p), o.write(15, h));
          }
          let d = o.flush();
          return {
            body: typeof d == "string" ? (this.serdeContext?.utf8Decoder ?? l0t.fromUtf8)(d) : d,
            eventType: s,
            explicitPayloadContentType: u,
            additionalHeaders: m,
          };
        }
      }));
  });
var jAi = {};
Wi(jAi, { EventStreamSerde: () => u3r });
var QAi = j(() => {
  $Ai();
});
var m0t,
  lK,
  d0t = j(() => {
    Wc();
    m0t = Se(Tc());
    kme();
    lK = class extends s5 {
      options;
      constructor(e) {
        (super(), (this.options = e));
      }
      getRequestType() {
        return m0t.HttpRequest;
      }
      getResponseType() {
        return m0t.HttpResponse;
      }
      setSerdeContext(e) {
        ((this.serdeContext = e),
          this.serializer.setSerdeContext(e),
          this.deserializer.setSerdeContext(e),
          this.getPayloadCodec() && this.getPayloadCodec().setSerdeContext(e));
      }
      updateServiceEndpoint(e, r) {
        if ("url" in r) {
          ((e.protocol = r.url.protocol),
            (e.hostname = r.url.hostname),
            (e.port = r.url.port ? Number(r.url.port) : void 0),
            (e.path = r.url.pathname),
            (e.fragment = r.url.hash || void 0),
            (e.username = r.url.username || void 0),
            (e.password = r.url.password || void 0),
            e.query || (e.query = {}));
          for (let [n, o] of r.url.searchParams.entries()) e.query[n] = o;
          return e;
        } else
          return (
            (e.protocol = r.protocol),
            (e.hostname = r.hostname),
            (e.port = r.port ? Number(r.port) : void 0),
            (e.path = r.path),
            (e.query = { ...r.query }),
            e
          );
      }
      setHostPrefix(e, r, n) {
        if (this.serdeContext?.disableHostPrefix) return;
        let o = ji.of(r.input),
          s = ZD(r.traits ?? {});
        if (s.endpoint) {
          let a = s.endpoint?.[0];
          if (typeof a == "string") {
            let u = [...o.structIterator()].filter(([, c]) => c.getMergedTraits().hostLabel);
            for (let [c] of u) {
              let m = n[c];
              if (typeof m != "string")
                throw new Error(`@smithy/core/schema - ${c} in input must be a string as hostLabel.`);
              a = a.replace(`{${c}}`, m);
            }
            e.hostname = a + e.hostname;
          }
        }
      }
      deserializeMetadata(e) {
        return {
          httpStatusCode: e.statusCode,
          requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"],
          extendedRequestId: e.headers["x-amz-id-2"],
          cfId: e.headers["x-amz-cf-id"],
        };
      }
      async serializeEventStream({ eventStream: e, requestSchema: r, initialRequest: n }) {
        return (await this.loadEventStreamCapability()).serializeEventStream({
          eventStream: e,
          requestSchema: r,
          initialRequest: n,
        });
      }
      async deserializeEventStream({ response: e, responseSchema: r, initialResponseContainer: n }) {
        return (await this.loadEventStreamCapability()).deserializeEventStream({
          response: e,
          responseSchema: r,
          initialResponseContainer: n,
        });
      }
      async loadEventStreamCapability() {
        let { EventStreamSerde: e } = await Promise.resolve().then(() => (QAi(), jAi));
        return new e({
          marshaller: this.getEventStreamMarshaller(),
          serializer: this.serializer,
          deserializer: this.deserializer,
          serdeContext: this.serdeContext,
          defaultContentType: this.getDefaultContentType(),
        });
      }
      getDefaultContentType() {
        throw new Error(
          `@smithy/core/protocols - ${this.constructor.name} getDefaultContentType() implementation missing.`,
        );
      }
      async deserializeHttpMessage(e, r, n, o, s) {
        return [];
      }
      getEventStreamMarshaller() {
        let e = this.serdeContext;
        if (!e.eventStreamMarshaller)
          throw new Error("@smithy/core - HttpProtocol: eventStreamMarshaller missing in serdeContext.");
        return e.eventStreamMarshaller;
      }
    };
  });
var GAi,
  qAi,
  mK,
  HAi = j(() => {
    Wc();
    o5();
    ((GAi = Se(Tc())), (qAi = Se(aK())));
    Ylt();
    Klt();
    d0t();
    mK = class extends lK {
      async serializeRequest(e, r, n) {
        let o = { ...(r ?? {}) },
          s = this.serializer,
          a = {},
          u = {},
          c = await n.endpoint(),
          m = ji.of(e?.input),
          d = m.getSchema(),
          f = !1,
          p,
          h = new GAi.HttpRequest({
            protocol: "",
            hostname: "",
            port: void 0,
            path: "",
            fragment: void 0,
            query: a,
            headers: u,
            body: void 0,
          });
        if (c) {
          (this.updateServiceEndpoint(h, c), this.setHostPrefix(h, e, o));
          let g = ZD(e.traits);
          if (g.http) {
            h.method = g.http[0];
            let [b, A] = g.http[1].split("?");
            h.path == "/" ? (h.path = b) : (h.path += b);
            let y = new URLSearchParams(A ?? "");
            Object.assign(a, Object.fromEntries(y));
          }
        }
        for (let [g, b] of m.structIterator()) {
          let A = b.getMergedTraits() ?? {},
            y = o[g];
          if (!(y == null && !b.isIdempotencyToken()))
            if (A.httpPayload)
              (b.isStreaming()
                ? b.isStructSchema()
                  ? o[g] && (p = await this.serializeEventStream({ eventStream: o[g], requestSchema: m }))
                  : (p = y)
                : (s.write(b, y), (p = s.flush())),
                delete o[g]);
            else if (A.httpLabel) {
              s.write(b, y);
              let E = s.flush();
              (h.path.includes(`{${g}+}`)
                ? (h.path = h.path.replace(`{${g}+}`, E.split("/").map(XD).join("/")))
                : h.path.includes(`{${g}}`) && (h.path = h.path.replace(`{${g}}`, XD(E))),
                delete o[g]);
            } else if (A.httpHeader) (s.write(b, y), (u[A.httpHeader.toLowerCase()] = String(s.flush())), delete o[g]);
            else if (typeof A.httpPrefixHeaders == "string") {
              for (let [E, v] of Object.entries(y)) {
                let C = A.httpPrefixHeaders + E;
                (s.write([b.getValueSchema(), { httpHeader: C }], v), (u[C.toLowerCase()] = s.flush()));
              }
              delete o[g];
            } else A.httpQuery || A.httpQueryParams ? (this.serializeQuery(b, y, a), delete o[g]) : (f = !0);
        }
        return (f && o && (s.write(d, o), (p = s.flush())), (h.headers = u), (h.query = a), (h.body = p), h);
      }
      serializeQuery(e, r, n) {
        let o = this.serializer,
          s = e.getMergedTraits();
        if (s.httpQueryParams) {
          for (let [a, u] of Object.entries(r))
            if (!(a in n)) {
              let c = e.getValueSchema();
              (Object.assign(c.getMergedTraits(), { ...s, httpQuery: a, httpQueryParams: void 0 }),
                this.serializeQuery(c, u, n));
            }
          return;
        }
        if (e.isListSchema()) {
          let a = !!e.getMergedTraits().sparse,
            u = [];
          for (let c of r) {
            o.write([e.getValueSchema(), s], c);
            let m = o.flush();
            (a || m !== void 0) && u.push(m);
          }
          n[s.httpQuery] = u;
        } else (o.write([e, s], r), (n[s.httpQuery] = o.flush()));
      }
      async deserializeResponse(e, r, n) {
        let o = this.deserializer,
          s = ji.of(e.output),
          a = {};
        if (n.statusCode >= 300) {
          let c = await Ev(n.body, r);
          throw (
            c.byteLength > 0 && Object.assign(a, await o.read(15, c)),
            await this.handleError(e, r, n, a, this.deserializeMetadata(n)),
            new Error("@smithy/core/protocols - HTTP Protocol error handler failed to throw.")
          );
        }
        for (let c in n.headers) {
          let m = n.headers[c];
          (delete n.headers[c], (n.headers[c.toLowerCase()] = m));
        }
        let u = await this.deserializeHttpMessage(s, r, n, a);
        if (u.length) {
          let c = await Ev(n.body, r);
          if (c.byteLength > 0) {
            let m = await o.read(s, c);
            for (let d of u) a[d] = m[d];
          }
        } else u.discardResponseBody && (await Ev(n.body, r));
        return ((a.$metadata = this.deserializeMetadata(n)), a);
      }
      async deserializeHttpMessage(e, r, n, o, s) {
        let a;
        o instanceof Set ? (a = s) : (a = o);
        let u = !0,
          c = this.deserializer,
          m = ji.of(e),
          d = [];
        for (let [f, p] of m.structIterator()) {
          let h = p.getMemberTraits();
          if (h.httpPayload) {
            if (((u = !1), p.isStreaming()))
              p.isStructSchema()
                ? (a[f] = await this.deserializeEventStream({ response: n, responseSchema: m }))
                : (a[f] = (0, qAi.sdkStreamMixin)(n.body));
            else if (n.body) {
              let b = await Ev(n.body, r);
              b.byteLength > 0 && (a[f] = await c.read(p, b));
            }
          } else if (h.httpHeader) {
            let g = String(h.httpHeader).toLowerCase(),
              b = n.headers[g];
            if (b != null)
              if (p.isListSchema()) {
                let A = p.getValueSchema();
                A.getMergedTraits().httpHeader = g;
                let y;
                A.isTimestampSchema() && A.getSchema() === 4 ? (y = s3r(b, ",", 2)) : (y = KSe(b));
                let E = [];
                for (let v of y) E.push(await c.read(A, v.trim()));
                a[f] = E;
              } else a[f] = await c.read(p, b);
          } else if (h.httpPrefixHeaders !== void 0) {
            a[f] = {};
            for (let [g, b] of Object.entries(n.headers))
              if (g.startsWith(h.httpPrefixHeaders)) {
                let A = p.getValueSchema();
                ((A.getMergedTraits().httpHeader = g),
                  (a[f][g.slice(h.httpPrefixHeaders.length)] = await c.read(A, b)));
              }
          } else h.httpResponseCode ? (a[f] = n.statusCode) : d.push(f);
        }
        return ((d.discardResponseBody = u), d);
      }
    };
  });
var VAi,
  SN,
  WAi = j(() => {
    Wc();
    VAi = Se(Tc());
    Ylt();
    d0t();
    SN = class extends lK {
      async serializeRequest(e, r, n) {
        let o = this.serializer,
          s = {},
          a = {},
          u = await n.endpoint(),
          c = ji.of(e?.input),
          m = c.getSchema(),
          d,
          f = new VAi.HttpRequest({
            protocol: "",
            hostname: "",
            port: void 0,
            path: "/",
            fragment: void 0,
            query: s,
            headers: a,
            body: void 0,
          });
        u && (this.updateServiceEndpoint(f, u), this.setHostPrefix(f, e, r));
        let p = { ...r };
        if (r) {
          let h = c.getEventStreamMember();
          if (h) {
            if (p[h]) {
              let g = {};
              for (let [b, A] of c.structIterator()) b !== h && p[b] && (o.write(A, p[b]), (g[b] = o.flush()));
              d = await this.serializeEventStream({ eventStream: p[h], requestSchema: c, initialRequest: g });
            }
          } else (o.write(m, p), (d = o.flush()));
        }
        return ((f.headers = a), (f.query = s), (f.body = d), (f.method = "POST"), f);
      }
      async deserializeResponse(e, r, n) {
        let o = this.deserializer,
          s = ji.of(e.output),
          a = {};
        if (n.statusCode >= 300) {
          let c = await Ev(n.body, r);
          throw (
            c.byteLength > 0 && Object.assign(a, await o.read(15, c)),
            await this.handleError(e, r, n, a, this.deserializeMetadata(n)),
            new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.")
          );
        }
        for (let c in n.headers) {
          let m = n.headers[c];
          (delete n.headers[c], (n.headers[c.toLowerCase()] = m));
        }
        let u = s.getEventStreamMember();
        if (u)
          a[u] = await this.deserializeEventStream({ response: n, responseSchema: s, initialResponseContainer: a });
        else {
          let c = await Ev(n.body, r);
          c.byteLength > 0 && Object.assign(a, await o.read(s, c));
        }
        return ((a.$metadata = this.deserializeMetadata(n)), a);
      }
    };
  });
var c3r,
  l3r = j(() => {
    Klt();
    c3r = (t, e, r, n, o, s) => {
      if (e != null && e[r] !== void 0) {
        let a = n();
        if (a.length <= 0) throw new Error("Empty value provided for input HTTP label: " + r + ".");
        t = t.replace(
          o,
          s
            ? a
                .split("/")
                .map((u) => XD(u))
                .join("/")
            : XD(a),
        );
      } else throw new Error("No value provided for input HTTP label: " + r + ".");
      return t;
    };
  });
function m3r(t, e) {
  return new f0t(t, e);
}
var zAi,
  f0t,
  YAi = j(() => {
    zAi = Se(Tc());
    l3r();
    f0t = class {
      input;
      context;
      query = {};
      method = "";
      headers = {};
      path = "";
      body = null;
      hostname = "";
      resolvePathStack = [];
      constructor(e, r) {
        ((this.input = e), (this.context = r));
      }
      async build() {
        let { hostname: e, protocol: r = "https", port: n, path: o } = await this.context.endpoint();
        this.path = o;
        for (let s of this.resolvePathStack) s(this.path);
        return new zAi.HttpRequest({
          protocol: r,
          hostname: this.hostname || e,
          port: n,
          method: this.method,
          path: this.path,
          query: this.query,
          body: this.body,
          headers: this.headers,
        });
      }
      hn(e) {
        return ((this.hostname = e), this);
      }
      bp(e) {
        return (
          this.resolvePathStack.push((r) => {
            this.path = `${r?.endsWith("/") ? r.slice(0, -1) : r || ""}` + e;
          }),
          this
        );
      }
      p(e, r, n, o) {
        return (
          this.resolvePathStack.push((s) => {
            this.path = c3r(s, this.input, e, r, n, o);
          }),
          this
        );
      }
      h(e) {
        return ((this.headers = e), this);
      }
      q(e) {
        return ((this.query = e), this);
      }
      b(e) {
        return ((this.body = e), this);
      }
      m(e) {
        return ((this.method = e), this);
      }
    };
  });
function ay(t, e) {
  if (
    e.timestampFormat.useTrait &&
    t.isTimestampSchema() &&
    (t.getSchema() === 5 || t.getSchema() === 6 || t.getSchema() === 7)
  )
    return t.getSchema();
  let { httpLabel: r, httpPrefixHeaders: n, httpHeader: o, httpQuery: s } = t.getMergedTraits();
  return (e.httpBindings ? (typeof n == "string" || o ? 6 : s || r ? 5 : void 0) : void 0) ?? e.timestampFormat.default;
}
var p0t = j(() => {});
var d3r,
  KAi,
  dK,
  f3r = j(() => {
    Wc();
    o5();
    ((d3r = Se(p3())), (KAi = Se(ep())));
    kme();
    p0t();
    dK = class extends s5 {
      settings;
      constructor(e) {
        (super(), (this.settings = e));
      }
      read(e, r) {
        let n = ji.of(e);
        if (n.isListSchema()) return KSe(r).map((o) => this.read(n.getValueSchema(), o));
        if (n.isBlobSchema()) return (this.serdeContext?.base64Decoder ?? d3r.fromBase64)(r);
        if (n.isTimestampSchema())
          switch (ay(n, this.settings)) {
            case 5:
              return i3r(r);
            case 6:
              return o3r(r);
            case 7:
              return Rme(r);
            default:
              return (console.warn("Missing timestamp format, parsing value with Date constructor:", r), new Date(r));
          }
        if (n.isStringSchema()) {
          let o = n.getMergedTraits().mediaType,
            s = r;
          if (o)
            return (
              n.getMergedTraits().httpHeader && (s = this.base64ToUtf8(s)),
              (o === "application/json" || o.endsWith("+json")) && (s = i5.from(s)),
              s
            );
        }
        return n.isNumericSchema()
          ? Number(r)
          : n.isBigIntegerSchema()
            ? BigInt(r)
            : n.isBigDecimalSchema()
              ? new em(r, "bigDecimal")
              : n.isBooleanSchema()
                ? String(r).toLowerCase() === "true"
                : r;
      }
      base64ToUtf8(e) {
        return (this.serdeContext?.utf8Encoder ?? KAi.toUtf8)((this.serdeContext?.base64Decoder ?? d3r.fromBase64)(e));
      }
    };
  });
var h0t,
  fK,
  JAi = j(() => {
    Wc();
    h0t = Se(ep());
    kme();
    f3r();
    fK = class extends s5 {
      codecDeserializer;
      stringDeserializer;
      constructor(e, r) {
        (super(), (this.codecDeserializer = e), (this.stringDeserializer = new dK(r)));
      }
      setSerdeContext(e) {
        (this.stringDeserializer.setSerdeContext(e),
          this.codecDeserializer.setSerdeContext(e),
          (this.serdeContext = e));
      }
      read(e, r) {
        let n = ji.of(e),
          o = n.getMergedTraits(),
          s = this.serdeContext?.utf8Encoder ?? h0t.toUtf8;
        if (o.httpHeader || o.httpResponseCode) return this.stringDeserializer.read(n, s(r));
        if (o.httpPayload) {
          if (n.isBlobSchema()) {
            let a = this.serdeContext?.utf8Decoder ?? h0t.fromUtf8;
            return typeof r == "string" ? a(r) : r;
          } else if (n.isStringSchema()) return "byteLength" in r ? s(r) : r;
        }
        return this.codecDeserializer.read(n, r);
      }
    };
  });
var p3r,
  JSe,
  h3r = j(() => {
    Wc();
    o5();
    p3r = Se(p3());
    kme();
    p0t();
    JSe = class extends s5 {
      settings;
      stringBuffer = "";
      constructor(e) {
        (super(), (this.settings = e));
      }
      write(e, r) {
        let n = ji.of(e);
        switch (typeof r) {
          case "object":
            if (r === null) {
              this.stringBuffer = "null";
              return;
            }
            if (n.isTimestampSchema()) {
              if (!(r instanceof Date))
                throw new Error(
                  `@smithy/core/protocols - received non-Date value ${r} when schema expected Date in ${n.getName(!0)}`,
                );
              switch (ay(n, this.settings)) {
                case 5:
                  this.stringBuffer = r.toISOString().replace(".000Z", "Z");
                  break;
                case 6:
                  this.stringBuffer = YSe(r);
                  break;
                case 7:
                  this.stringBuffer = String(r.getTime() / 1e3);
                  break;
                default:
                  (console.warn("Missing timestamp format, using epoch seconds", r),
                    (this.stringBuffer = String(r.getTime() / 1e3)));
              }
              return;
            }
            if (n.isBlobSchema() && "byteLength" in r) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? p3r.toBase64)(r);
              return;
            }
            if (n.isListSchema() && Array.isArray(r)) {
              let a = "";
              for (let u of r) {
                this.write([n.getValueSchema(), n.getMergedTraits()], u);
                let c = this.flush(),
                  m = n.getValueSchema().isTimestampSchema() ? c : e3r(c);
                (a !== "" && (a += ", "), (a += m));
              }
              this.stringBuffer = a;
              return;
            }
            this.stringBuffer = JSON.stringify(r, null, 2);
            break;
          case "string":
            let o = n.getMergedTraits().mediaType,
              s = r;
            if (
              o &&
              ((o === "application/json" || o.endsWith("+json")) && (s = i5.from(s)), n.getMergedTraits().httpHeader)
            ) {
              this.stringBuffer = (this.serdeContext?.base64Encoder ?? p3r.toBase64)(s.toString());
              return;
            }
            this.stringBuffer = r;
            break;
          default:
            n.isIdempotencyToken() ? (this.stringBuffer = (0, vv.v4)()) : (this.stringBuffer = String(r));
        }
      }
      flush() {
        let e = this.stringBuffer;
        return ((this.stringBuffer = ""), e);
      }
    };
  });
var pK,
  XAi = j(() => {
    Wc();
    h3r();
    pK = class {
      codecSerializer;
      stringSerializer;
      buffer;
      constructor(e, r, n = new JSe(r)) {
        ((this.codecSerializer = e), (this.stringSerializer = n));
      }
      setSerdeContext(e) {
        (this.codecSerializer.setSerdeContext(e), this.stringSerializer.setSerdeContext(e));
      }
      write(e, r) {
        let n = ji.of(e),
          o = n.getMergedTraits();
        if (o.httpHeader || o.httpLabel || o.httpQuery) {
          (this.stringSerializer.write(n, r), (this.buffer = this.stringSerializer.flush()));
          return;
        }
        return this.codecSerializer.write(n, r);
      }
      flush() {
        if (this.buffer !== void 0) {
          let e = this.buffer;
          return ((this.buffer = void 0), e);
        }
        return this.codecSerializer.flush();
      }
    };
  });
var ZAi = {};
Wi(ZAi, {
  FromStringShapeDeserializer: () => dK,
  HttpBindingProtocol: () => mK,
  HttpInterceptingShapeDeserializer: () => fK,
  HttpInterceptingShapeSerializer: () => pK,
  HttpProtocol: () => lK,
  RequestBuilder: () => f0t,
  RpcProtocol: () => SN,
  SerdeContext: () => s5,
  ToStringShapeSerializer: () => JSe,
  collectBody: () => Ev,
  determineTimestampFormat: () => ay,
  extendedEncodeURIComponent: () => XD,
  requestBuilder: () => m3r,
  resolvedPath: () => c3r,
});
var g9 = j(() => {
  Ylt();
  Klt();
  HAi();
  d0t();
  WAi();
  YAi();
  l3r();
  f3r();
  JAi();
  XAi();
  h3r();
  p0t();
  kme();
});
var e2i = j(() => {
  g9();
});
function FIa(t, e, r) {
  (t.__smithy_context
    ? t.__smithy_context.features || (t.__smithy_context.features = {})
    : (t.__smithy_context = { features: {} }),
    (t.__smithy_context.features[e] = r));
}
var t2i = j(() => {});
var wN,
  r2i = j(() => {
    wN = class {
      authSchemes = new Map();
      constructor(e) {
        for (let [r, n] of Object.entries(e)) n !== void 0 && this.authSchemes.set(r, n);
      }
      getIdentityProvider(e) {
        return this.authSchemes.get(e);
      }
    };
  });
var n2i,
  g3r,
  b3r,
  i2i = j(() => {
    ((n2i = Se(Tc())),
      (g3r = Se(yN())),
      (b3r = class {
        async sign(e, r, n) {
          if (!n)
            throw new Error(
              "request could not be signed with `apiKey` since the `name` and `in` signer properties are missing",
            );
          if (!n.name)
            throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
          if (!n.in)
            throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
          if (!r.apiKey) throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
          let o = n2i.HttpRequest.clone(e);
          if (n.in === g3r.HttpApiKeyAuthLocation.QUERY) o.query[n.name] = r.apiKey;
          else if (n.in === g3r.HttpApiKeyAuthLocation.HEADER)
            o.headers[n.name] = n.scheme ? `${n.scheme} ${r.apiKey}` : r.apiKey;
          else
            throw new Error(
              "request can only be signed with `apiKey` locations `query` or `header`, but found: `" + n.in + "`",
            );
          return o;
        }
      }));
  });
var o2i,
  A3r,
  s2i = j(() => {
    ((o2i = Se(Tc())),
      (A3r = class {
        async sign(e, r, n) {
          let o = o2i.HttpRequest.clone(e);
          if (!r.token) throw new Error("request could not be signed with `token` since the `token` is not defined");
          return ((o.headers.Authorization = `Bearer ${r.token}`), o);
        }
      }));
  });
var $S,
  a2i = j(() => {
    $S = class {
      async sign(e, r, n) {
        return e;
      }
    };
  });
var u2i = j(() => {
  i2i();
  s2i();
  a2i();
});
var c2i,
  UIa,
  y3r,
  g0t,
  _3r,
  l2i = j(() => {
    ((c2i = (t) =>
      function (r) {
        return g0t(r) && r.expiration.getTime() - Date.now() < t;
      }),
      (UIa = 3e5),
      (y3r = c2i(3e5)),
      (g0t = (t) => t.expiration !== void 0),
      (_3r = (t, e, r) => {
        if (t === void 0) return;
        let n = typeof t != "function" ? async () => Promise.resolve(t) : t,
          o,
          s,
          a,
          u = !1,
          c = async (m) => {
            s || (s = n(m));
            try {
              ((o = await s), (a = !0), (u = !1));
            } finally {
              s = void 0;
            }
            return o;
          };
        return e === void 0
          ? async (m) => ((!a || m?.forceRefresh) && (o = await c(m)), o)
          : async (m) => (
              (!a || m?.forceRefresh) && (o = await c(m)),
              u ? o : r(o) ? (e(o) && (await c(m)), o) : ((u = !0), o)
            );
      }));
  });
var m2i = j(() => {
  r2i();
  u2i();
  l2i();
});
var hK = {};
Wi(hK, {
  DefaultIdentityProviderConfig: () => wN,
  EXPIRATION_MS: () => UIa,
  HttpApiKeyAuthSigner: () => b3r,
  HttpBearerAuthSigner: () => A3r,
  NoAuthSigner: () => $S,
  createIsIdentityExpiredFunction: () => c2i,
  createPaginator: () => Tgi,
  doesIdentityRequireRefresh: () => g0t,
  getHttpAuthSchemeEndpointRuleSetPlugin: () => oK,
  getHttpAuthSchemePlugin: () => ETa,
  getHttpSigningPlugin: () => sK,
  getSmithyContext: () => hTa,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => mgi,
  httpAuthSchemeMiddleware: () => USe,
  httpAuthSchemeMiddlewareOptions: () => Agi,
  httpSigningMiddleware: () => rhr,
  httpSigningMiddlewareOptions: () => Cgi,
  isIdentityExpired: () => y3r,
  memoizeIdentityProvider: () => _3r,
  normalizeProvider: () => y$,
  requestBuilder: () => m3r,
  setFeature: () => FIa,
});
var EA = j(() => {
  sgi();
  _gi();
  wgi();
  xgi();
  Dgi();
  e2i();
  t2i();
  m2i();
});