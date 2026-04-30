/**
 * @module q0t
 * @category utils/net
 * @label mime
 * @position 1742 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (q0t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var q0t = T((G0t) => {
  "use strict";
  var U7a = M5i();
  function $7a(t) {
    return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function j7a(t) {
    return t
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\r/g, "&#x0D;")
      .replace(/\n/g, "&#x0A;")
      .replace(/\u0085/g, "&#x85;")
      .replace(/\u2028/, "&#x2028;");
  }
  var Q0t = class {
      value;
      constructor(e) {
        this.value = e;
      }
      toString() {
        return j7a("" + this.value);
      }
    },
    bgr = class t {
      name;
      children;
      attributes = {};
      static of(e, r, n) {
        let o = new t(e);
        return (r !== void 0 && o.addChildNode(new Q0t(r)), n !== void 0 && o.withName(n), o);
      }
      constructor(e, r = []) {
        ((this.name = e), (this.children = r));
      }
      withName(e) {
        return ((this.name = e), this);
      }
      addAttribute(e, r) {
        return ((this.attributes[e] = r), this);
      }
      addChildNode(e) {
        return (this.children.push(e), this);
      }
      removeAttribute(e) {
        return (delete this.attributes[e], this);
      }
      n(e) {
        return ((this.name = e), this);
      }
      c(e) {
        return (this.children.push(e), this);
      }
      a(e, r) {
        return (r != null && (this.attributes[e] = r), this);
      }
      cc(e, r, n = r) {
        if (e[r] != null) {
          let o = t.of(r, e[r]).withName(n);
          this.c(o);
        }
      }
      l(e, r, n, o) {
        e[r] != null &&
          o().map((a) => {
            (a.withName(n), this.c(a));
          });
      }
      lc(e, r, n, o) {
        if (e[r] != null) {
          let s = o(),
            a = new t(n);
          (s.map((u) => {
            a.c(u);
          }),
            this.c(a));
        }
      }
      toString() {
        let e = !!this.children.length,
          r = `<${this.name}`,
          n = this.attributes;
        for (let o of Object.keys(n)) {
          let s = n[o];
          s != null && (r += ` ${o}="${$7a("" + s)}"`);
        }
        return (r += e ? `>${this.children.map((o) => o.toString()).join("")}</${this.name}>` : "/>");
      }
    };
  Object.defineProperty(G0t, "parseXML", {
    enumerable: !0,
    get: function () {
      return U7a.parseXML;
    },
  });
  G0t.XmlNode = bgr;
  G0t.XmlText = Q0t;
});
var F5i,
  U5i,
  $5i,
  N$,
  H0t = j(() => {
    F5i = Se(q0t());
    g9();
    Wc();
    ((U5i = Se(Ga())), ($5i = Se(ep())));
    I$();
    lgr();
    N$ = class extends CA {
      settings;
      stringDeserializer;
      constructor(e) {
        (super(), (this.settings = e), (this.stringDeserializer = new dK(e)));
      }
      setSerdeContext(e) {
        ((this.serdeContext = e), this.stringDeserializer.setSerdeContext(e));
      }
      read(e, r, n) {
        let o = ji.of(e),
          s = o.getMemberSchemas();
        if (
          o.isStructSchema() &&
          o.isMemberSchema() &&
          !!Object.values(s).find((m) => !!m.getMemberTraits().eventPayload)
        ) {
          let m = {},
            d = Object.keys(s)[0];
          return (s[d].isBlobSchema() ? (m[d] = r) : (m[d] = this.read(s[d], r)), m);
        }
        let u = (this.serdeContext?.utf8Encoder ?? $5i.toUtf8)(r),
          c = this.parseXml(u);
        return this.readSchema(e, n ? c[n] : c);
      }
      readSchema(e, r) {
        let n = ji.of(e);
        if (n.isUnitSchema()) return;
        let o = n.getMergedTraits();
        if (n.isListSchema() && !Array.isArray(r)) return this.readSchema(n, [r]);
        if (r == null) return r;
        if (typeof r == "object") {
          let s = !!o.sparse,
            a = !!o.xmlFlattened;
          if (n.isListSchema()) {
            let c = n.getValueSchema(),
              m = [],
              d = c.getMergedTraits().xmlName ?? "member",
              f = a ? r : (r[0] ?? r)[d],
              p = Array.isArray(f) ? f : [f];
            for (let h of p) (h != null || s) && m.push(this.readSchema(c, h));
            return m;
          }
          let u = {};
          if (n.isMapSchema()) {
            let c = n.getKeySchema(),
              m = n.getValueSchema(),
              d;
            a ? (d = Array.isArray(r) ? r : [r]) : (d = Array.isArray(r.entry) ? r.entry : [r.entry]);
            let f = c.getMergedTraits().xmlName ?? "key",
              p = m.getMergedTraits().xmlName ?? "value";
            for (let h of d) {
              let g = h[f],
                b = h[p];
              (b != null || s) && (u[g] = this.readSchema(m, b));
            }
            return u;
          }
          if (n.isStructSchema()) {
            let c = n.isUnionSchema(),
              m;
            c && (m = new Mme(r, u));
            for (let [d, f] of n.structIterator()) {
              let p = f.getMergedTraits(),
                h = p.httpPayload ? (p.xmlName ?? f.getName()) : (f.getMemberTraits().xmlName ?? d);
              (c && m.mark(h), r[h] != null && (u[d] = this.readSchema(f, r[h])));
            }
            return (c && m.writeUnknown(), u);
          }
          if (n.isDocumentSchema()) return r;
          throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${n.getName(!0)}`);
        }
        return n.isListSchema() ? [] : n.isMapSchema() || n.isStructSchema() ? {} : this.stringDeserializer.read(n, r);
      }
      parseXml(e) {
        if (e.length) {
          let r;
          try {
            r = (0, F5i.parseXML)(e);
          } catch (a) {
            throw (a && typeof a == "object" && Object.defineProperty(a, "$responseBodyText", { value: e }), a);
          }
          let n = "#text",
            o = Object.keys(r)[0],
            s = r[o];
          return (s[n] && ((s[o] = s[n]), delete s[n]), (0, U5i.getValueFromTextNode)(s));
        }
        return {};
      }
    };
  });
var j5i,
  Q5i,
  V0t,
  G5i = j(() => {
    g9();
    Wc();
    o5();
    ((j5i = Se(Ga())), (Q5i = Se(p3())));
    I$();
    rwe();
    V0t = class extends CA {
      settings;
      buffer;
      constructor(e) {
        (super(), (this.settings = e));
      }
      write(e, r, n = "") {
        this.buffer === void 0 && (this.buffer = "");
        let o = ji.of(e);
        if ((n && !n.endsWith(".") && (n += "."), o.isBlobSchema()))
          (typeof r == "string" || r instanceof Uint8Array) &&
            (this.writeKey(n), this.writeValue((this.serdeContext?.base64Encoder ?? Q5i.toBase64)(r)));
        else if (o.isBooleanSchema() || o.isNumericSchema() || o.isStringSchema())
          r != null
            ? (this.writeKey(n), this.writeValue(String(r)))
            : o.isIdempotencyToken() && (this.writeKey(n), this.writeValue((0, vv.v4)()));
        else if (o.isBigIntegerSchema()) r != null && (this.writeKey(n), this.writeValue(String(r)));
        else if (o.isBigDecimalSchema())
          r != null && (this.writeKey(n), this.writeValue(r instanceof em ? r.string : String(r)));
        else if (o.isTimestampSchema()) {
          if (r instanceof Date)
            switch ((this.writeKey(n), ay(o, this.settings))) {
              case 5:
                this.writeValue(r.toISOString().replace(".000Z", "Z"));
                break;
              case 6:
                this.writeValue((0, j5i.dateToUtcString)(r));
                break;
              case 7:
                this.writeValue(String(r.getTime() / 1e3));
                break;
            }
        } else if (o.isDocumentSchema())
          Array.isArray(r)
            ? this.write(79, r, n)
            : r instanceof Date
              ? this.write(4, r, n)
              : r instanceof Uint8Array
                ? this.write(21, r, n)
                : r && typeof r == "object"
                  ? this.write(143, r, n)
                  : (this.writeKey(n), this.writeValue(String(r)));
        else if (o.isListSchema()) {
          if (Array.isArray(r))
            if (r.length === 0) this.settings.serializeEmptyLists && (this.writeKey(n), this.writeValue(""));
            else {
              let s = o.getValueSchema(),
                a = this.settings.flattenLists || o.getMergedTraits().xmlFlattened,
                u = 1;
              for (let c of r) {
                if (c == null) continue;
                let m = this.getKey("member", s.getMergedTraits().xmlName),
                  d = a ? `${n}${u}` : `${n}${m}.${u}`;
                (this.write(s, c, d), ++u);
              }
            }
        } else if (o.isMapSchema()) {
          if (r && typeof r == "object") {
            let s = o.getKeySchema(),
              a = o.getValueSchema(),
              u = o.getMergedTraits().xmlFlattened,
              c = 1;
            for (let [m, d] of Object.entries(r)) {
              if (d == null) continue;
              let f = this.getKey("key", s.getMergedTraits().xmlName),
                p = u ? `${n}${c}.${f}` : `${n}entry.${c}.${f}`,
                h = this.getKey("value", a.getMergedTraits().xmlName),
                g = u ? `${n}${c}.${h}` : `${n}entry.${c}.${h}`;
              (this.write(s, m, p), this.write(a, d, g), ++c);
            }
          }
        } else if (o.isStructSchema()) {
          if (r && typeof r == "object") {
            let s = !1;
            for (let [a, u] of Lme(o, r)) {
              if (r[a] == null && !u.isIdempotencyToken()) continue;
              let c = this.getKey(a, u.getMergedTraits().xmlName),
                m = `${n}${c}`;
              (this.write(u, r[a], m), (s = !0));
            }
            if (!s && o.isUnionSchema()) {
              let { $unknown: a } = r;
              if (Array.isArray(a)) {
                let [u, c] = a,
                  m = `${n}${u}`;
                this.write(15, c, m);
              }
            }
          }
        } else if (!o.isUnitSchema())
          throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${o.getName(!0)}`);
      }
      flush() {
        if (this.buffer === void 0)
          throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
        let e = this.buffer;
        return (delete this.buffer, e);
      }
      getKey(e, r) {
        let n = r ?? e;
        return this.settings.capitalizeKeys ? n[0].toUpperCase() + n.slice(1) : n;
      }
      writeKey(e) {
        (e.endsWith(".") && (e = e.slice(0, e.length - 1)), (this.buffer += `&${XD(e)}=`));
      }
      writeValue(e) {
        this.buffer += XD(e);
      }
    };
  });
var P$,
  Agr = j(() => {
    g9();
    Wc();
    Bme();
    H0t();
    G5i();
    P$ = class extends SN {
      options;
      serializer;
      deserializer;
      mixin = new Cv();
      constructor(e) {
        (super({ defaultNamespace: e.defaultNamespace }), (this.options = e));
        let r = {
          timestampFormat: { useTrait: !0, default: 5 },
          httpBindings: !1,
          xmlNamespace: e.xmlNamespace,
          serviceNamespace: e.defaultNamespace,
          serializeEmptyLists: !0,
        };
        ((this.serializer = new V0t(r)), (this.deserializer = new N$(r)));
      }
      getShapeId() {
        return "aws.protocols#awsQuery";
      }
      setSerdeContext(e) {
        (this.serializer.setSerdeContext(e), this.deserializer.setSerdeContext(e));
      }
      getPayloadCodec() {
        throw new Error("AWSQuery protocol has no payload codec.");
      }
      async serializeRequest(e, r, n) {
        let o = await super.serializeRequest(e, r, n);
        (o.path.endsWith("/") || (o.path += "/"),
          Object.assign(o.headers, { "content-type": "application/x-www-form-urlencoded" }),
          (US(e.input) === "unit" || !o.body) && (o.body = ""));
        let s = e.name.split("#")[1] ?? e.name;
        return (
          (o.body = `Action=${s}&Version=${this.options.version}` + o.body),
          o.body.endsWith("&") && (o.body = o.body.slice(-1)),
          o
        );
      }
      async deserializeResponse(e, r, n) {
        let o = this.deserializer,
          s = ji.of(e.output),
          a = {};
        if (n.statusCode >= 300) {
          let f = await Ev(n.body, r);
          (f.byteLength > 0 && Object.assign(a, await o.read(15, f)),
            await this.handleError(e, r, n, a, this.deserializeMetadata(n)));
        }
        for (let f in n.headers) {
          let p = n.headers[f];
          (delete n.headers[f], (n.headers[f.toLowerCase()] = p));
        }
        let u = e.name.split("#")[1] ?? e.name,
          c = s.isStructSchema() && this.useNestedResult() ? u + "Result" : void 0,
          m = await Ev(n.body, r);
        return (
          m.byteLength > 0 && Object.assign(a, await o.read(s, m, c)),
          { $metadata: this.deserializeMetadata(n), ...a }
        );
      }
      useNestedResult() {
        return !0;
      }
      async handleError(e, r, n, o, s) {
        let a = this.loadQueryErrorCode(n, o) ?? "Unknown",
          u = this.loadQueryError(o),
          c = this.loadQueryErrorMessage(o);
        ((u.message = c), (u.Error = { Type: u.Type, Code: u.Code, Message: c }));
        let { errorSchema: m, errorMetadata: d } = await this.mixin.getErrorSchemaOrThrowBaseException(
            a,
            this.options.defaultNamespace,
            n,
            u,
            s,
            this.mixin.findQueryCompatibleError,
          ),
          f = ji.of(m),
          p = es.for(m[1]).getErrorCtor(m) ?? Error,
          h = new p(c),
          g = { Type: u.Error.Type, Code: u.Error.Code, Error: u.Error };
        for (let [b, A] of f.structIterator()) {
          let y = A.getMergedTraits().xmlName ?? b,
            E = u[y] ?? o[y];
          g[b] = this.deserializer.readSchema(A, E);
        }
        throw this.mixin.decorateServiceException(
          Object.assign(h, d, { $fault: f.getMergedTraits().error, message: c }, g),
          o,
        );
      }
      loadQueryErrorCode(e, r) {
        let n = (r.Errors?.[0]?.Error ?? r.Errors?.Error ?? r.Error)?.Code;
        if (n !== void 0) return n;
        if (e.statusCode == 404) return "NotFound";
      }
      loadQueryError(e) {
        return e.Errors?.[0]?.Error ?? e.Errors?.Error ?? e.Error;
      }
      loadQueryErrorMessage(e) {
        let r = this.loadQueryError(e);
        return r?.message ?? r?.Message ?? e.message ?? e.Message ?? "Unknown";
      }
      getDefaultContentType() {
        return "application/x-www-form-urlencoded";
      }
    };
  });
var W0t,
  q5i = j(() => {
    Agr();
    W0t = class extends P$ {
      options;
      constructor(e) {
        (super(e), (this.options = e));
        let r = { capitalizeKeys: !0, flattenLists: !0, serializeEmptyLists: !1 };
        Object.assign(this.serializer.settings, r);
      }
      useNestedResult() {
        return !1;
      }
    };
  });
var H5i,
  V5i,
  ygr,
  W5i,
  z0t,
  _gr = j(() => {
    ((H5i = Se(q0t())), (V5i = Se(Ga())));
    mgr();
    ((ygr = (t, e) =>
      L0t(t, e).then((r) => {
        if (r.length) {
          let n;
          try {
            n = (0, H5i.parseXML)(r);
          } catch (u) {
            throw (u && typeof u == "object" && Object.defineProperty(u, "$responseBodyText", { value: r }), u);
          }
          let o = "#text",
            s = Object.keys(n)[0],
            a = n[s];
          return (a[o] && ((a[s] = a[o]), delete a[o]), (0, V5i.getValueFromTextNode)(a));
        }
        return {};
      })),
      (W5i = async (t, e) => {
        let r = await ygr(t, e);
        return (r.Error && (r.Error.message = r.Error.message ?? r.Error.Message), r);
      }),
      (z0t = (t, e) => {
        if (e?.Error?.Code !== void 0) return e.Error.Code;
        if (e?.Code !== void 0) return e.Code;
        if (t.statusCode == 404) return "NotFound";
      }));
  });
var a5,
  Egr,
  Y0t,
  jme,
  vgr = j(() => {
    a5 = Se(q0t());
    g9();
    Wc();
    o5();
    ((Egr = Se(Ga())), (Y0t = Se(p3())));
    I$();
    rwe();
    jme = class extends CA {
      settings;
      stringBuffer;
      byteBuffer;
      buffer;
      constructor(e) {
        (super(), (this.settings = e));
      }
      write(e, r) {
        let n = ji.of(e);
        if (n.isStringSchema() && typeof r == "string") this.stringBuffer = r;
        else if (n.isBlobSchema())
          this.byteBuffer = "byteLength" in r ? r : (this.serdeContext?.base64Decoder ?? Y0t.fromBase64)(r);
        else {
          this.buffer = this.writeStruct(n, r, void 0);
          let o = n.getMergedTraits();
          o.httpPayload && !o.xmlName && this.buffer.withName(n.getName());
        }
      }
      flush() {
        if (this.byteBuffer !== void 0) {
          let r = this.byteBuffer;
          return (delete this.byteBuffer, r);
        }
        if (this.stringBuffer !== void 0) {
          let r = this.stringBuffer;
          return (delete this.stringBuffer, r);
        }
        let e = this.buffer;
        return (
          this.settings.xmlNamespace && (e?.attributes?.xmlns || e.addAttribute("xmlns", this.settings.xmlNamespace)),
          delete this.buffer,
          e.toString()
        );
      }
      writeStruct(e, r, n) {
        let o = e.getMergedTraits(),
          s =
            e.isMemberSchema() && !o.httpPayload
              ? (e.getMemberTraits().xmlName ?? e.getMemberName())
              : (o.xmlName ?? e.getName());
        if (!s || !e.isStructSchema())
          throw new Error(
            `@aws-sdk/core/protocols - xml serializer, cannot write struct with empty name or non-struct, schema=${e.getName(!0)}.`,
          );
        let a = a5.XmlNode.of(s),
          [u, c] = this.getXmlnsAttribute(e, n);
        for (let [d, f] of Lme(e, r)) {
          let p = r[d];
          if (p != null || f.isIdempotencyToken()) {
            if (f.getMergedTraits().xmlAttribute) {
              a.addAttribute(f.getMergedTraits().xmlName ?? d, this.writeSimple(f, p));
              continue;
            }
            if (f.isListSchema()) this.writeList(f, p, a, c);
            else if (f.isMapSchema()) this.writeMap(f, p, a, c);
            else if (f.isStructSchema()) a.addChildNode(this.writeStruct(f, p, c));
            else {
              let h = a5.XmlNode.of(f.getMergedTraits().xmlName ?? f.getMemberName());
              (this.writeSimpleInto(f, p, h, c), a.addChildNode(h));
            }
          }
        }
        let { $unknown: m } = r;
        if (m && e.isUnionSchema() && Array.isArray(m) && Object.keys(r).length === 1) {
          let [d, f] = m,
            p = a5.XmlNode.of(d);
          if (typeof f != "string")
            if (r instanceof a5.XmlNode || r instanceof a5.XmlText) a.addChildNode(r);
            else
              throw new Error(
                "@aws-sdk - $unknown union member in XML requires value of type string, @aws-sdk/xml-builder::XmlNode or XmlText.",
              );
          (this.writeSimpleInto(0, f, p, c), a.addChildNode(p));
        }
        return (c && a.addAttribute(u, c), a);
      }
      writeList(e, r, n, o) {
        if (!e.isMemberSchema())
          throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member list: ${e.getName(!0)}`);
        let s = e.getMergedTraits(),
          a = e.getValueSchema(),
          u = a.getMergedTraits(),
          c = !!u.sparse,
          m = !!s.xmlFlattened,
          [d, f] = this.getXmlnsAttribute(e, o),
          p = (h, g) => {
            if (a.isListSchema()) this.writeList(a, Array.isArray(g) ? g : [g], h, f);
            else if (a.isMapSchema()) this.writeMap(a, g, h, f);
            else if (a.isStructSchema()) {
              let b = this.writeStruct(a, g, f);
              h.addChildNode(b.withName(m ? (s.xmlName ?? e.getMemberName()) : (u.xmlName ?? "member")));
            } else {
              let b = a5.XmlNode.of(m ? (s.xmlName ?? e.getMemberName()) : (u.xmlName ?? "member"));
              (this.writeSimpleInto(a, g, b, f), h.addChildNode(b));
            }
          };
        if (m) for (let h of r) (c || h != null) && p(n, h);
        else {
          let h = a5.XmlNode.of(s.xmlName ?? e.getMemberName());
          f && h.addAttribute(d, f);
          for (let g of r) (c || g != null) && p(h, g);
          n.addChildNode(h);
        }
      }
      writeMap(e, r, n, o, s = !1) {
        if (!e.isMemberSchema())
          throw new Error(`@aws-sdk/core/protocols - xml serializer, cannot write non-member map: ${e.getName(!0)}`);
        let a = e.getMergedTraits(),
          u = e.getKeySchema(),
          m = u.getMergedTraits().xmlName ?? "key",
          d = e.getValueSchema(),
          f = d.getMergedTraits(),
          p = f.xmlName ?? "value",
          h = !!f.sparse,
          g = !!a.xmlFlattened,
          [b, A] = this.getXmlnsAttribute(e, o),
          y = (E, v, C) => {
            let x = a5.XmlNode.of(m, v),
              [k, R] = this.getXmlnsAttribute(u, A);
            (R && x.addAttribute(k, R), E.addChildNode(x));
            let P = a5.XmlNode.of(p);
            (d.isListSchema()
              ? this.writeList(d, C, P, A)
              : d.isMapSchema()
                ? this.writeMap(d, C, P, A, !0)
                : d.isStructSchema()
                  ? (P = this.writeStruct(d, C, A))
                  : this.writeSimpleInto(d, C, P, A),
              E.addChildNode(P));
          };
        if (g) {
          for (let [E, v] of Object.entries(r))
            if (h || v != null) {
              let C = a5.XmlNode.of(a.xmlName ?? e.getMemberName());
              (y(C, E, v), n.addChildNode(C));
            }
        } else {
          let E;
          s || ((E = a5.XmlNode.of(a.xmlName ?? e.getMemberName())), A && E.addAttribute(b, A), n.addChildNode(E));
          for (let [v, C] of Object.entries(r))
            if (h || C != null) {
              let x = a5.XmlNode.of("entry");
              (y(x, v, C), (s ? n : E).addChildNode(x));
            }
        }
      }
      writeSimple(e, r) {
        if (r === null) throw new Error("@aws-sdk/core/protocols - (XML serializer) cannot write null value.");
        let n = ji.of(e),
          o = null;
        if (r && typeof r == "object")
          if (n.isBlobSchema()) o = (this.serdeContext?.base64Encoder ?? Y0t.toBase64)(r);
          else if (n.isTimestampSchema() && r instanceof Date)
            switch (ay(n, this.settings)) {
              case 5:
                o = r.toISOString().replace(".000Z", "Z");
                break;
              case 6:
                o = (0, Egr.dateToUtcString)(r);
                break;
              case 7:
                o = String(r.getTime() / 1e3);
                break;
              default:
                (console.warn("Missing timestamp format, using http date", r), (o = (0, Egr.dateToUtcString)(r)));
                break;
            }
          else {
            if (n.isBigDecimalSchema() && r) return r instanceof em ? r.string : String(r);
            throw n.isMapSchema() || n.isListSchema()
              ? new Error(
                  "@aws-sdk/core/protocols - xml serializer, cannot call _write() on List/Map schema, call writeList or writeMap() instead.",
                )
              : new Error(
                  `@aws-sdk/core/protocols - xml serializer, unhandled schema type for object value and schema: ${n.getName(!0)}`,
                );
          }
        if (
          ((n.isBooleanSchema() || n.isNumericSchema() || n.isBigIntegerSchema() || n.isBigDecimalSchema()) &&
            (o = String(r)),
          n.isStringSchema() && (r === void 0 && n.isIdempotencyToken() ? (o = (0, vv.v4)()) : (o = String(r))),
          o === null)
        )
          throw new Error(`Unhandled schema-value pair ${n.getName(!0)}=${r}`);
        return o;
      }
      writeSimpleInto(e, r, n, o) {
        let s = this.writeSimple(e, r),
          a = ji.of(e),
          u = new a5.XmlText(s),
          [c, m] = this.getXmlnsAttribute(a, o);
        (m && n.addAttribute(c, m), n.addChildNode(u));
      }
      getXmlnsAttribute(e, r) {
        let n = e.getMergedTraits(),
          [o, s] = n.xmlNamespace ?? [];
        return s && s !== r ? [o ? `xmlns:${o}` : "xmlns", s] : [void 0, void 0];
      }
    };
  });
var Qme,
  Cgr = j(() => {
    I$();
    H0t();
    vgr();
    Qme = class extends CA {
      settings;
      constructor(e) {
        (super(), (this.settings = e));
      }
      createSerializer() {
        let e = new jme(this.settings);
        return (e.setSerdeContext(this.serdeContext), e);
      }
      createDeserializer() {
        let e = new N$(this.settings);
        return (e.setSerdeContext(this.serdeContext), e);
      }
    };
  });
var K0t,
  z5i = j(() => {
    g9();
    Wc();
    Bme();
    _gr();
    Cgr();
    K0t = class extends mK {
      codec;
      serializer;
      deserializer;
      mixin = new Cv();
      constructor(e) {
        super(e);
        let r = {
          timestampFormat: { useTrait: !0, default: 5 },
          httpBindings: !0,
          xmlNamespace: e.xmlNamespace,
          serviceNamespace: e.defaultNamespace,
        };
        ((this.codec = new Qme(r)),
          (this.serializer = new pK(this.codec.createSerializer(), r)),
          (this.deserializer = new fK(this.codec.createDeserializer(), r)));
      }
      getPayloadCodec() {
        return this.codec;
      }
      getShapeId() {
        return "aws.protocols#restXml";
      }
      async serializeRequest(e, r, n) {
        let o = await super.serializeRequest(e, r, n),
          s = ji.of(e.input);
        if (!o.headers["content-type"]) {
          let a = this.mixin.resolveRestContentType(this.getDefaultContentType(), s);
          a && (o.headers["content-type"] = a);
        }
        return (
          typeof o.body == "string" &&
            o.headers["content-type"] === this.getDefaultContentType() &&
            !o.body.startsWith("<?xml ") &&
            !this.hasUnstructuredPayloadBinding(s) &&
            (o.body = '<?xml version="1.0" encoding="UTF-8"?>' + o.body),
          o
        );
      }
      async deserializeResponse(e, r, n) {
        return super.deserializeResponse(e, r, n);
      }
      async handleError(e, r, n, o, s) {
        let a = z0t(n, o) ?? "Unknown",
          { errorSchema: u, errorMetadata: c } = await this.mixin.getErrorSchemaOrThrowBaseException(
            a,
            this.options.defaultNamespace,
            n,
            o,
            s,
          ),
          m = ji.of(u),
          d = o.Error?.message ?? o.Error?.Message ?? o.message ?? o.Message ?? "Unknown",
          f = es.for(u[1]).getErrorCtor(u) ?? Error,
          p = new f(d);
        await this.deserializeHttpMessage(u, r, n, o);
        let h = {};
        for (let [g, b] of m.structIterator()) {
          let A = b.getMergedTraits().xmlName ?? g,
            y = o.Error?.[A] ?? o[A];
          h[g] = this.codec.createDeserializer().readSchema(b, y);
        }
        throw this.mixin.decorateServiceException(
          Object.assign(p, c, { $fault: m.getMergedTraits().error, message: d }, h),
          o,
        );
      }
      getDefaultContentType() {
        return "application/xml";
      }
      hasUnstructuredPayloadBinding(e) {
        for (let [, r] of e.structIterator())
          if (r.getMergedTraits().httpPayload) return !(r.isStructSchema() || r.isMapSchema() || r.isListSchema());
        return !1;
      }
    };
  });
var Sgr = {};
Wi(Sgr, {
  AwsEc2QueryProtocol: () => W0t,
  AwsJson1_0Protocol: () => $0t,
  AwsJson1_1Protocol: () => j0t,
  AwsJsonRpcProtocol: () => k$,
  AwsQueryProtocol: () => P$,
  AwsRestJsonProtocol: () => O$,
  AwsRestXmlProtocol: () => K0t,
  AwsSmithyRpcV2CborProtocol: () => B0t,
  JsonCodec: () => R$,
  JsonShapeDeserializer: () => Ume,
  JsonShapeSerializer: () => $me,
  XmlCodec: () => Qme,
  XmlShapeDeserializer: () => N$,
  XmlShapeSerializer: () => jme,
  _toBool: () => b5i,
  _toNum: () => A5i,
  _toStr: () => g5i,
  awsExpectUnion: () => N5i,
  loadRestJsonErrorCode: () => Fme,
  loadRestXmlErrorCode: () => z0t,
  parseJsonBody: () => nwe,
  parseJsonErrorBody: () => w5i,
  parseXmlBody: () => ygr,
  parseXmlErrorBody: () => W5i,
});
var yK = j(() => {
  h5i();
  y5i();
  I5i();
  R5i();
  U0t();
  k5i();
  F0t();
  dgr();
  pgr();
  P5i();
  iwe();
  q5i();
  Agr();
  z5i();
  Cgr();
  H0t();
  vgr();
  _gr();
});
var iI = {};
Wi(iI, {
  AWSSDKSigV4Signer: () => zpr,
  AwsEc2QueryProtocol: () => W0t,
  AwsJson1_0Protocol: () => $0t,
  AwsJson1_1Protocol: () => j0t,
  AwsJsonRpcProtocol: () => k$,
  AwsQueryProtocol: () => P$,
  AwsRestJsonProtocol: () => O$,
  AwsRestXmlProtocol: () => K0t,
  AwsSdkSigV4ASigner: () => FSe,
  AwsSdkSigV4Signer: () => yA,
  AwsSmithyRpcV2CborProtocol: () => B0t,
  JsonCodec: () => R$,
  JsonShapeDeserializer: () => Ume,
  JsonShapeSerializer: () => $me,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => A$,
  NODE_SIGV4A_CONFIG_OPTIONS: () => f2i,
  XmlCodec: () => Qme,
  XmlShapeDeserializer: () => N$,
  XmlShapeSerializer: () => jme,
  _toBool: () => b5i,
  _toNum: () => A5i,
  _toStr: () => g5i,
  awsExpectUnion: () => N5i,
  emitWarningIfUnsupportedVersion: () => g$,
  getBearerTokenEnvKey: () => Dlt,
  loadRestJsonErrorCode: () => Fme,
  loadRestXmlErrorCode: () => z0t,
  parseJsonBody: () => nwe,
  parseJsonErrorBody: () => w5i,
  parseXmlBody: () => ygr,
  parseXmlErrorBody: () => W5i,
  resolveAWSSDKSigV4Config: () => F2i,
  resolveAwsSdkSigV4AConfig: () => d2i,
  resolveAwsSdkSigV4Config: () => xN,
  setCredentialFeature: () => b$,
  setFeature: () => q3i,
  setTokenFeature: () => V3i,
  state: () => Tlt,
  validateSigningProperties: () => Eme,
});
var Wp = j(() => {
  _v();
  L3r();
  yK();
});