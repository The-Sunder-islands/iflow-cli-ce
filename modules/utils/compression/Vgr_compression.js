/**
 * @module Vgr
 * @category utils/compression
 * @label compression
 * @position 1757 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vgr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Vgr = T((ts) => {
  "use strict";
  var ON = (Wp(), bt(iI)),
    C8i = Tc(),
    S8i = aK(),
    qRa = Rlt(),
    HRa = Dgr(),
    jgr = h8i(),
    VRa = E8i(),
    WRa = ep(),
    v8i = Hg(),
    NN = { WHEN_SUPPORTED: "WHEN_SUPPORTED", WHEN_REQUIRED: "WHEN_REQUIRED" },
    Ggr = NN.WHEN_SUPPORTED,
    qme = { WHEN_SUPPORTED: "WHEN_SUPPORTED", WHEN_REQUIRED: "WHEN_REQUIRED" },
    qgr = NN.WHEN_SUPPORTED;
  ts.ChecksumAlgorithm = void 0;
  (function (t) {
    ((t.MD5 = "MD5"),
      (t.CRC32 = "CRC32"),
      (t.CRC32C = "CRC32C"),
      (t.CRC64NVME = "CRC64NVME"),
      (t.SHA1 = "SHA1"),
      (t.SHA256 = "SHA256"));
  })(ts.ChecksumAlgorithm || (ts.ChecksumAlgorithm = {}));
  ts.ChecksumLocation = void 0;
  (function (t) {
    ((t.HEADER = "header"), (t.TRAILER = "trailer"));
  })(ts.ChecksumLocation || (ts.ChecksumLocation = {}));
  var umt = ts.ChecksumAlgorithm.CRC32,
    Hme;
  (function (t) {
    ((t.ENV = "env"), (t.CONFIG = "shared config entry"));
  })(Hme || (Hme = {}));
  var cmt = (t, e, r, n) => {
      if (!(e in t)) return;
      let o = t[e].toUpperCase();
      if (!Object.values(r).includes(o))
        throw new TypeError(`Cannot load ${n} '${e}'. Expected one of ${Object.values(r)}, got '${t[e]}'.`);
      return o;
    },
    w8i = "AWS_REQUEST_CHECKSUM_CALCULATION",
    x8i = "request_checksum_calculation",
    zRa = {
      environmentVariableSelector: (t) => cmt(t, w8i, NN, Hme.ENV),
      configFileSelector: (t) => cmt(t, x8i, NN, Hme.CONFIG),
      default: Ggr,
    },
    T8i = "AWS_RESPONSE_CHECKSUM_VALIDATION",
    D8i = "response_checksum_validation",
    YRa = {
      environmentVariableSelector: (t) => cmt(t, T8i, qme, Hme.ENV),
      configFileSelector: (t) => cmt(t, D8i, qme, Hme.CONFIG),
      default: qgr,
    },
    Qgr = [
      ts.ChecksumAlgorithm.CRC32,
      ts.ChecksumAlgorithm.CRC32C,
      ts.ChecksumAlgorithm.CRC64NVME,
      ts.ChecksumAlgorithm.SHA1,
      ts.ChecksumAlgorithm.SHA256,
    ],
    KRa = [
      ts.ChecksumAlgorithm.SHA256,
      ts.ChecksumAlgorithm.SHA1,
      ts.ChecksumAlgorithm.CRC32,
      ts.ChecksumAlgorithm.CRC32C,
      ts.ChecksumAlgorithm.CRC64NVME,
    ],
    JRa = (t, { requestChecksumRequired: e, requestAlgorithmMember: r, requestChecksumCalculation: n }) => {
      if (!r) return n === NN.WHEN_SUPPORTED || e ? umt : void 0;
      if (!t[r]) return;
      let o = t[r];
      if (!Qgr.includes(o))
        throw new Error(`The checksum algorithm "${o}" is not supported by the client. Select one of ${Qgr}.`);
      return o;
    },
    Hgr = (t) => (t === ts.ChecksumAlgorithm.MD5 ? "content-md5" : `x-amz-checksum-${t.toLowerCase()}`),
    XRa = (t, e) => {
      let r = t.toLowerCase();
      for (let n of Object.keys(e)) if (r === n.toLowerCase()) return !0;
      return !1;
    },
    ZRa = (t, e) => {
      let r = t.toLowerCase();
      for (let n of Object.keys(e)) if (n.toLowerCase().startsWith(r)) return !0;
      return !1;
    },
    I8i = (t) => t !== void 0 && typeof t != "string" && !ArrayBuffer.isView(t) && !qRa.isArrayBuffer(t),
    R8i = (t, e) => {
      switch (t) {
        case ts.ChecksumAlgorithm.MD5:
          return e.md5;
        case ts.ChecksumAlgorithm.CRC32:
          return VRa.getCrc32ChecksumAlgorithmFunction();
        case ts.ChecksumAlgorithm.CRC32C:
          return HRa.AwsCrc32c;
        case ts.ChecksumAlgorithm.CRC64NVME:
          return typeof jgr.crc64NvmeCrtContainer.CrtCrc64Nvme != "function"
            ? jgr.Crc64Nvme
            : jgr.crc64NvmeCrtContainer.CrtCrc64Nvme;
        case ts.ChecksumAlgorithm.SHA1:
          return e.sha1;
        case ts.ChecksumAlgorithm.SHA256:
          return e.sha256;
        default:
          throw new Error(`Unsupported checksum algorithm: ${t}`);
      }
    },
    k8i = (t, e) => {
      let r = new t();
      return (r.update(WRa.toUint8Array(e || "")), r.digest());
    },
    O8i = { name: "flexibleChecksumsMiddleware", step: "build", tags: ["BODY_CHECKSUM"], override: !0 },
    N8i = (t, e) => (r, n) => async (o) => {
      if (!C8i.HttpRequest.isInstance(o.request) || ZRa("x-amz-checksum-", o.request.headers)) return r(o);
      let { request: s, input: a } = o,
        { body: u, headers: c } = s,
        { base64Encoder: m, streamHasher: d } = t,
        { requestChecksumRequired: f, requestAlgorithmMember: p } = e,
        h = await t.requestChecksumCalculation(),
        g = p?.name,
        b = p?.httpHeader;
      g && !a[g] && (h === NN.WHEN_SUPPORTED || f) && ((a[g] = umt), b && (c[b] = umt));
      let A = JRa(a, { requestChecksumRequired: f, requestAlgorithmMember: p?.name, requestChecksumCalculation: h }),
        y = u,
        E = c;
      if (A) {
        switch (A) {
          case ts.ChecksumAlgorithm.CRC32:
            ON.setFeature(n, "FLEXIBLE_CHECKSUMS_REQ_CRC32", "U");
            break;
          case ts.ChecksumAlgorithm.CRC32C:
            ON.setFeature(n, "FLEXIBLE_CHECKSUMS_REQ_CRC32C", "V");
            break;
          case ts.ChecksumAlgorithm.CRC64NVME:
            ON.setFeature(n, "FLEXIBLE_CHECKSUMS_REQ_CRC64", "W");
            break;
          case ts.ChecksumAlgorithm.SHA1:
            ON.setFeature(n, "FLEXIBLE_CHECKSUMS_REQ_SHA1", "X");
            break;
          case ts.ChecksumAlgorithm.SHA256:
            ON.setFeature(n, "FLEXIBLE_CHECKSUMS_REQ_SHA256", "Y");
            break;
        }
        let v = Hgr(A),
          C = R8i(A, t);
        if (I8i(u)) {
          let { getAwsChunkedEncodingStream: x, bodyLengthChecker: k } = t;
          ((y = x(
            typeof t.requestStreamBufferSize == "number" && t.requestStreamBufferSize >= 8 * 1024
              ? S8i.createBufferedReadable(u, t.requestStreamBufferSize, n.logger)
              : u,
            {
              base64Encoder: m,
              bodyLengthChecker: k,
              checksumLocationName: v,
              checksumAlgorithmFn: C,
              streamHasher: d,
            },
          )),
            (E = {
              ...c,
              "content-encoding": c["content-encoding"] ? `${c["content-encoding"]},aws-chunked` : "aws-chunked",
              "transfer-encoding": "chunked",
              "x-amz-decoded-content-length": c["content-length"],
              "x-amz-content-sha256": "STREAMING-UNSIGNED-PAYLOAD-TRAILER",
              "x-amz-trailer": v,
            }),
            delete E["content-length"]);
        } else if (!XRa(v, c)) {
          let x = await k8i(C, u);
          E = { ...c, [v]: m(x) };
        }
      }
      try {
        return await r({ ...o, request: { ...s, headers: E, body: y } });
      } catch (v) {
        if (v instanceof Error && v.name === "InvalidChunkSizeError")
          try {
            (v.message.endsWith(".") || (v.message += "."),
              (v.message +=
                " Set [requestStreamBufferSize=number e.g. 65_536] in client constructor to instruct AWS SDK to buffer your input stream."));
          } catch {}
        throw v;
      }
    },
    eka = {
      name: "flexibleChecksumsInputMiddleware",
      toMiddleware: "serializerMiddleware",
      relation: "before",
      tags: ["BODY_CHECKSUM"],
      override: !0,
    },
    tka = (t, e) => (r, n) => async (o) => {
      let s = o.input,
        { requestValidationModeMember: a } = e,
        u = await t.requestChecksumCalculation(),
        c = await t.responseChecksumValidation();
      switch (u) {
        case NN.WHEN_REQUIRED:
          ON.setFeature(n, "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED", "a");
          break;
        case NN.WHEN_SUPPORTED:
          ON.setFeature(n, "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED", "Z");
          break;
      }
      switch (c) {
        case qme.WHEN_REQUIRED:
          ON.setFeature(n, "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED", "c");
          break;
        case qme.WHEN_SUPPORTED:
          ON.setFeature(n, "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED", "b");
          break;
      }
      return (a && !s[a] && c === qme.WHEN_SUPPORTED && (s[a] = "ENABLED"), r(o));
    },
    P8i = (t = []) => {
      let e = [];
      for (let r of KRa) !t.includes(r) || !Qgr.includes(r) || e.push(r);
      return e;
    },
    rka = (t) => {
      let e = t.lastIndexOf("-");
      if (e !== -1) {
        let r = t.slice(e + 1);
        if (!r.startsWith("0")) {
          let n = parseInt(r, 10);
          if (!isNaN(n) && n >= 1 && n <= 1e4) return !0;
        }
      }
      return !1;
    },
    nka = async (t, { checksumAlgorithmFn: e, base64Encoder: r }) => r(await k8i(e, t)),
    ika = async (t, { config: e, responseAlgorithms: r, logger: n }) => {
      let o = P8i(r),
        { body: s, headers: a } = t;
      for (let u of o) {
        let c = Hgr(u),
          m = a[c];
        if (m) {
          let d;
          try {
            d = R8i(u, e);
          } catch (h) {
            if (u === ts.ChecksumAlgorithm.CRC64NVME) {
              n?.warn(`Skipping ${ts.ChecksumAlgorithm.CRC64NVME} checksum validation: ${h.message}`);
              continue;
            }
            throw h;
          }
          let { base64Encoder: f } = e;
          if (I8i(s)) {
            t.body = S8i.createChecksumStream({
              expectedChecksum: m,
              checksumSourceLocation: c,
              checksum: new d(),
              source: s,
              base64Encoder: f,
            });
            return;
          }
          let p = await nka(s, { checksumAlgorithmFn: d, base64Encoder: f });
          if (p === m) break;
          throw new Error(`Checksum mismatch: expected "${p}" but received "${m}" in response header "${c}".`);
        }
      }
    },
    oka = {
      name: "flexibleChecksumsResponseMiddleware",
      toMiddleware: "deserializerMiddleware",
      relation: "after",
      tags: ["BODY_CHECKSUM"],
      override: !0,
    },
    ska = (t, e) => (r, n) => async (o) => {
      if (!C8i.HttpRequest.isInstance(o.request)) return r(o);
      let s = o.input,
        a = await r(o),
        u = a.response,
        { requestValidationModeMember: c, responseAlgorithms: m } = e;
      if (c && s[c] === "ENABLED") {
        let { clientName: d, commandName: f } = n;
        if (
          d === "S3Client" &&
          f === "GetObjectCommand" &&
          P8i(m).every((h) => {
            let g = Hgr(h),
              b = u.headers[g];
            return !b || rka(b);
          })
        )
          return a;
        await ika(u, { config: t, responseAlgorithms: m, logger: n.logger });
      }
      return a;
    },
    aka = (t, e) => ({
      applyToStack: (r) => {
        (r.add(N8i(t, e), O8i), r.addRelativeTo(tka(t, e), eka), r.addRelativeTo(ska(t, e), oka));
      },
    }),
    uka = (t) => {
      let { requestChecksumCalculation: e, responseChecksumValidation: r, requestStreamBufferSize: n } = t;
      return Object.assign(t, {
        requestChecksumCalculation: v8i.normalizeProvider(e ?? Ggr),
        responseChecksumValidation: v8i.normalizeProvider(r ?? qgr),
        requestStreamBufferSize: Number(n ?? 0),
      });
    };
  ts.CONFIG_REQUEST_CHECKSUM_CALCULATION = x8i;
  ts.CONFIG_RESPONSE_CHECKSUM_VALIDATION = D8i;
  ts.DEFAULT_CHECKSUM_ALGORITHM = umt;
  ts.DEFAULT_REQUEST_CHECKSUM_CALCULATION = Ggr;
  ts.DEFAULT_RESPONSE_CHECKSUM_VALIDATION = qgr;
  ts.ENV_REQUEST_CHECKSUM_CALCULATION = w8i;
  ts.ENV_RESPONSE_CHECKSUM_VALIDATION = T8i;
  ts.NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS = zRa;
  ts.NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS = YRa;
  ts.RequestChecksumCalculation = NN;
  ts.ResponseChecksumValidation = qme;
  ts.flexibleChecksumsMiddleware = N8i;
  ts.flexibleChecksumsMiddlewareOptions = O8i;
  ts.getFlexibleChecksumsPlugin = aka;
  ts.resolveFlexibleChecksumsConfig = uka;
});