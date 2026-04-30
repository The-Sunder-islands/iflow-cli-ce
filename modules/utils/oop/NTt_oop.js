/**
 * @module NTt
 * @category utils/oop
 * @label oop
 * @position 484 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (NTt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var NTt = T((xp) => {
  "use strict";
  Object.defineProperty(xp, "__esModule", { value: !0 });
  xp.loadFileDescriptorSetFromObject =
    xp.loadFileDescriptorSetFromBuffer =
    xp.fromJSON =
    xp.loadSync =
    xp.load =
    xp.IdempotencyLevel =
    xp.isAnyExtension =
    xp.Long =
      void 0;
  var HUo = KXr(),
    Zx = oUe(),
    kTt = oen(),
    OTt = den(),
    VUo = fen();
  xp.Long = VUo;
  function WUo(t) {
    return "@type" in t && typeof t["@type"] == "string";
  }
  xp.isAnyExtension = WUo;
  var pen;
  (function (t) {
    ((t.IDEMPOTENCY_UNKNOWN = "IDEMPOTENCY_UNKNOWN"),
      (t.NO_SIDE_EFFECTS = "NO_SIDE_EFFECTS"),
      (t.IDEMPOTENT = "IDEMPOTENT"));
  })((pen = xp.IdempotencyLevel || (xp.IdempotencyLevel = {})));
  var hen = { longs: String, enums: String, bytes: String, defaults: !0, oneofs: !0, json: !0 };
  function zUo(t, e) {
    return t === "" ? e : t + "." + e;
  }
  function YUo(t) {
    return t instanceof Zx.Service || t instanceof Zx.Type || t instanceof Zx.Enum;
  }
  function KUo(t) {
    return t instanceof Zx.Namespace || t instanceof Zx.Root;
  }
  function gen(t, e) {
    let r = zUo(e, t.name);
    return YUo(t)
      ? [[r, t]]
      : KUo(t) && typeof t.nested < "u"
        ? Object.keys(t.nested)
            .map((n) => gen(t.nested[n], r))
            .reduce((n, o) => n.concat(o), [])
        : [];
  }
  function DTt(t, e) {
    return function (n) {
      return t.toObject(t.decode(n), e);
    };
  }
  function ITt(t) {
    return function (r) {
      if (Array.isArray(r))
        throw new Error(`Failed to serialize message: expected object with ${t.name} structure, got array instead`);
      let n = t.fromObject(r);
      return t.encode(n).finish();
    };
  }
  function JUo(t) {
    return (t || []).reduce(
      (e, r) => {
        for (let [n, o] of Object.entries(r))
          switch (n) {
            case "uninterpreted_option":
              e.uninterpreted_option.push(r.uninterpreted_option);
              break;
            default:
              e[n] = o;
          }
        return e;
      },
      { deprecated: !1, idempotency_level: pen.IDEMPOTENCY_UNKNOWN, uninterpreted_option: [] },
    );
  }
  function XUo(t, e, r, n) {
    let o = t.resolvedRequestType,
      s = t.resolvedResponseType;
    return {
      path: "/" + e + "/" + t.name,
      requestStream: !!t.requestStream,
      responseStream: !!t.responseStream,
      requestSerialize: ITt(o),
      requestDeserialize: DTt(o, r),
      responseSerialize: ITt(s),
      responseDeserialize: DTt(s, r),
      originalName: HUo(t.name),
      requestType: RTt(o, r, n),
      responseType: RTt(s, r, n),
      options: JUo(t.parsedOptions),
    };
  }
  function ZUo(t, e, r, n) {
    let o = {};
    for (let s of t.methodsArray) o[s.name] = XUo(s, e, r, n);
    return o;
  }
  function RTt(t, e, r) {
    let n = t.toDescriptor("proto3");
    return {
      format: "Protocol Buffer 3 DescriptorProto",
      type: n.$type.toObject(n, hen),
      fileDescriptorProtos: r,
      serialize: ITt(t),
      deserialize: DTt(t, e),
    };
  }
  function e$o(t, e) {
    let r = t.toDescriptor("proto3");
    return { format: "Protocol Buffer 3 EnumDescriptorProto", type: r.$type.toObject(r, hen), fileDescriptorProtos: e };
  }
  function t$o(t, e, r, n) {
    if (t instanceof Zx.Service) return ZUo(t, e, r, n);
    if (t instanceof Zx.Type) return RTt(t, r, n);
    if (t instanceof Zx.Enum) return e$o(t, n);
    throw new Error("Type mismatch in reflection object handling");
  }
  function uUe(t, e) {
    let r = {};
    t.resolveAll();
    let o = t.toDescriptor("proto3").file.map((s) => Buffer.from(kTt.FileDescriptorProto.encode(s).finish()));
    for (let [s, a] of gen(t, "")) r[s] = t$o(a, s, e, o);
    return r;
  }
  function ben(t, e) {
    e = e || {};
    let r = Zx.Root.fromDescriptor(t);
    return (r.resolveAll(), uUe(r, e));
  }
  function r$o(t, e) {
    return (0, OTt.loadProtosWithOptions)(t, e).then((r) => uUe(r, e));
  }
  xp.load = r$o;
  function n$o(t, e) {
    let r = (0, OTt.loadProtosWithOptionsSync)(t, e);
    return uUe(r, e);
  }
  xp.loadSync = n$o;
  function i$o(t, e) {
    e = e || {};
    let r = Zx.Root.fromJSON(t);
    return (r.resolveAll(), uUe(r, e));
  }
  xp.fromJSON = i$o;
  function o$o(t, e) {
    let r = kTt.FileDescriptorSet.decode(t);
    return ben(r, e);
  }
  xp.loadFileDescriptorSetFromBuffer = o$o;
  function s$o(t, e) {
    let r = kTt.FileDescriptorSet.fromObject(t);
    return ben(r, e);
  }
  xp.loadFileDescriptorSetFromObject = s$o;
  (0, OTt.addCommonProtos)();
});