/**
 * @module jg
 * @category network/ws
 * @label websocket
 * @position 1499 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jg) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jg = T((Uvc, eJn) => {
  "use strict";
  var { types: Gp, inspect: gaa } = Ae("node:util"),
    { runtimeFeatures: baa } = PO(),
    Lsr = 1,
    Msr = 2,
    Fit = 3,
    Uit = 4,
    Fsr = 5,
    $it = 6,
    Usr = 7,
    W6 = 8,
    ZKn = Function.call.bind(Function.prototype[Symbol.hasInstance]),
    jt = { converters: {}, util: {}, errors: {}, is: {} };
  jt.errors.exception = function (t) {
    return new TypeError(`${t.header}: ${t.message}`);
  };
  jt.errors.conversionFailed = function (t) {
    let e = t.types.length === 1 ? "" : " one of",
      r = `${t.argument} could not be converted to${e}: ${t.types.join(", ")}.`;
    return jt.errors.exception({ header: t.prefix, message: r });
  };
  jt.errors.invalidArgument = function (t) {
    return jt.errors.exception({ header: t.prefix, message: `"${t.value}" is an invalid ${t.type}.` });
  };
  jt.brandCheck = function (t, e) {
    if (!ZKn(e, t)) {
      let r = new TypeError("Illegal invocation");
      throw ((r.code = "ERR_INVALID_THIS"), r);
    }
  };
  jt.brandCheckMultiple = function (t) {
    let e = t.map((r) => jt.util.MakeTypeAssertion(r));
    return (r) => {
      if (e.every((n) => !n(r))) {
        let n = new TypeError("Illegal invocation");
        throw ((n.code = "ERR_INVALID_THIS"), n);
      }
    };
  };
  jt.argumentLengthCheck = function ({ length: t }, e, r) {
    if (t < e)
      throw jt.errors.exception({
        message: `${e} argument${e !== 1 ? "s" : ""} required, but${t ? " only" : ""} ${t} found.`,
        header: r,
      });
  };
  jt.illegalConstructor = function () {
    throw jt.errors.exception({ header: "TypeError", message: "Illegal constructor" });
  };
  jt.util.MakeTypeAssertion = function (t) {
    return (e) => ZKn(t, e);
  };
  jt.util.Type = function (t) {
    switch (typeof t) {
      case "undefined":
        return Lsr;
      case "boolean":
        return Msr;
      case "string":
        return Fit;
      case "symbol":
        return Uit;
      case "number":
        return Fsr;
      case "bigint":
        return $it;
      case "function":
      case "object":
        return t === null ? Usr : W6;
    }
  };
  jt.util.Types = {
    UNDEFINED: Lsr,
    BOOLEAN: Msr,
    STRING: Fit,
    SYMBOL: Uit,
    NUMBER: Fsr,
    BIGINT: $it,
    NULL: Usr,
    OBJECT: W6,
  };
  jt.util.TypeValueToString = function (t) {
    switch (jt.util.Type(t)) {
      case Lsr:
        return "Undefined";
      case Msr:
        return "Boolean";
      case Fit:
        return "String";
      case Uit:
        return "Symbol";
      case Fsr:
        return "Number";
      case $it:
        return "BigInt";
      case Usr:
        return "Null";
      case W6:
        return "Object";
    }
  };
  jt.util.markAsUncloneable = baa.has("markAsUncloneable") ? Ae("node:worker_threads").markAsUncloneable : () => {};
  jt.util.ConvertToInt = function (t, e, r, n) {
    let o, s;
    e === 64
      ? ((o = Math.pow(2, 53) - 1), r === "unsigned" ? (s = 0) : (s = Math.pow(-2, 53) + 1))
      : r === "unsigned"
        ? ((s = 0), (o = Math.pow(2, e) - 1))
        : ((s = Math.pow(-2, e) - 1), (o = Math.pow(2, e - 1) - 1));
    let a = Number(t);
    if ((a === 0 && (a = 0), jt.util.HasFlag(n, jt.attributes.EnforceRange))) {
      if (Number.isNaN(a) || a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY)
        throw jt.errors.exception({
          header: "Integer conversion",
          message: `Could not convert ${jt.util.Stringify(t)} to an integer.`,
        });
      if (((a = jt.util.IntegerPart(a)), a < s || a > o))
        throw jt.errors.exception({
          header: "Integer conversion",
          message: `Value must be between ${s}-${o}, got ${a}.`,
        });
      return a;
    }
    return !Number.isNaN(a) && jt.util.HasFlag(n, jt.attributes.Clamp)
      ? ((a = Math.min(Math.max(a, s), o)), Math.floor(a) % 2 === 0 ? (a = Math.floor(a)) : (a = Math.ceil(a)), a)
      : Number.isNaN(a) ||
          (a === 0 && Object.is(0, a)) ||
          a === Number.POSITIVE_INFINITY ||
          a === Number.NEGATIVE_INFINITY
        ? 0
        : ((a = jt.util.IntegerPart(a)),
          (a = a % Math.pow(2, e)),
          r === "signed" && a >= Math.pow(2, e) - 1 ? a - Math.pow(2, e) : a);
  };
  jt.util.IntegerPart = function (t) {
    let e = Math.floor(Math.abs(t));
    return t < 0 ? -1 * e : e;
  };
  jt.util.Stringify = function (t) {
    switch (jt.util.Type(t)) {
      case Uit:
        return `Symbol(${t.description})`;
      case W6:
        return gaa(t);
      case Fit:
        return `"${t}"`;
      case $it:
        return `${t}n`;
      default:
        return `${t}`;
    }
  };
  jt.util.IsResizableArrayBuffer = function (t) {
    if (Gp.isArrayBuffer(t)) return t.resizable;
    if (Gp.isSharedArrayBuffer(t)) return t.growable;
    throw jt.errors.exception({
      header: "IsResizableArrayBuffer",
      message: `"${jt.util.Stringify(t)}" is not an array buffer.`,
    });
  };
  jt.util.HasFlag = function (t, e) {
    return typeof t == "number" && (t & e) === e;
  };
  jt.sequenceConverter = function (t) {
    return (e, r, n, o) => {
      if (jt.util.Type(e) !== W6)
        throw jt.errors.exception({ header: r, message: `${n} (${jt.util.Stringify(e)}) is not iterable.` });
      let s = typeof o == "function" ? o() : e?.[Symbol.iterator]?.(),
        a = [],
        u = 0;
      if (s === void 0 || typeof s.next != "function")
        throw jt.errors.exception({ header: r, message: `${n} is not iterable.` });
      for (;;) {
        let { done: c, value: m } = s.next();
        if (c) break;
        a.push(t(m, r, `${n}[${u++}]`));
      }
      return a;
    };
  };
  jt.recordConverter = function (t, e) {
    return (r, n, o) => {
      if (jt.util.Type(r) !== W6)
        throw jt.errors.exception({ header: n, message: `${o} ("${jt.util.TypeValueToString(r)}") is not an Object.` });
      let s = {};
      if (!Gp.isProxy(r)) {
        let u = [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)];
        for (let c of u) {
          let m = jt.util.Stringify(c),
            d = t(c, n, `Key ${m} in ${o}`),
            f = e(r[c], n, `${o}[${m}]`);
          s[d] = f;
        }
        return s;
      }
      let a = Reflect.ownKeys(r);
      for (let u of a)
        if (Reflect.getOwnPropertyDescriptor(r, u)?.enumerable) {
          let m = t(u, n, o),
            d = e(r[u], n, o);
          s[m] = d;
        }
      return s;
    };
  };
  jt.interfaceConverter = function (t, e) {
    return (r, n, o) => {
      if (!t(r))
        throw jt.errors.exception({
          header: n,
          message: `Expected ${o} ("${jt.util.Stringify(r)}") to be an instance of ${e}.`,
        });
      return r;
    };
  };
  jt.dictionaryConverter = function (t) {
    return (e, r, n) => {
      let o = {};
      if (e != null && jt.util.Type(e) !== W6)
        throw jt.errors.exception({ header: r, message: `Expected ${e} to be one of: Null, Undefined, Object.` });
      for (let s of t) {
        let { key: a, defaultValue: u, required: c, converter: m } = s;
        if (c === !0 && (e == null || !Object.hasOwn(e, a)))
          throw jt.errors.exception({ header: r, message: `Missing required key "${a}".` });
        let d = e?.[a],
          f = u !== void 0;
        if ((f && d === void 0 && (d = u()), c || f || d !== void 0)) {
          if (((d = m(d, r, `${n}.${a}`)), s.allowedValues && !s.allowedValues.includes(d)))
            throw jt.errors.exception({
              header: r,
              message: `${d} is not an accepted type. Expected one of ${s.allowedValues.join(", ")}.`,
            });
          o[a] = d;
        }
      }
      return o;
    };
  };
  jt.nullableConverter = function (t) {
    return (e, r, n) => (e === null ? e : t(e, r, n));
  };
  jt.is.USVString = function (t) {
    return typeof t == "string" && t.isWellFormed();
  };
  jt.is.ReadableStream = jt.util.MakeTypeAssertion(ReadableStream);
  jt.is.Blob = jt.util.MakeTypeAssertion(Blob);
  jt.is.URLSearchParams = jt.util.MakeTypeAssertion(URLSearchParams);
  jt.is.File = jt.util.MakeTypeAssertion(File);
  jt.is.URL = jt.util.MakeTypeAssertion(URL);
  jt.is.AbortSignal = jt.util.MakeTypeAssertion(AbortSignal);
  jt.is.MessagePort = jt.util.MakeTypeAssertion(MessagePort);
  jt.is.BufferSource = function (t) {
    return Gp.isArrayBuffer(t) || (ArrayBuffer.isView(t) && Gp.isArrayBuffer(t.buffer));
  };
  jt.converters.DOMString = function (t, e, r, n) {
    if (t === null && jt.util.HasFlag(n, jt.attributes.LegacyNullToEmptyString)) return "";
    if (typeof t == "symbol")
      throw jt.errors.exception({ header: e, message: `${r} is a symbol, which cannot be converted to a DOMString.` });
    return String(t);
  };
  jt.converters.ByteString = function (t, e, r) {
    if (typeof t == "symbol")
      throw jt.errors.exception({ header: e, message: `${r} is a symbol, which cannot be converted to a ByteString.` });
    let n = String(t);
    for (let o = 0; o < n.length; o++)
      if (n.charCodeAt(o) > 255)
        throw new TypeError(
          `Cannot convert argument to a ByteString because the character at index ${o} has a value of ${n.charCodeAt(o)} which is greater than 255.`,
        );
    return n;
  };
  jt.converters.USVString = function (t) {
    return typeof t == "string" ? t.toWellFormed() : `${t}`.toWellFormed();
  };
  jt.converters.boolean = function (t) {
    return !!t;
  };
  jt.converters.any = function (t) {
    return t;
  };
  jt.converters["long long"] = function (t, e, r) {
    return jt.util.ConvertToInt(t, 64, "signed", 0, e, r);
  };
  jt.converters["unsigned long long"] = function (t, e, r) {
    return jt.util.ConvertToInt(t, 64, "unsigned", 0, e, r);
  };
  jt.converters["unsigned long"] = function (t, e, r) {
    return jt.util.ConvertToInt(t, 32, "unsigned", 0, e, r);
  };
  jt.converters["unsigned short"] = function (t, e, r, n) {
    return jt.util.ConvertToInt(t, 16, "unsigned", n, e, r);
  };
  jt.converters.ArrayBuffer = function (t, e, r, n) {
    if (jt.util.Type(t) !== W6 || !Gp.isArrayBuffer(t))
      throw jt.errors.conversionFailed({
        prefix: e,
        argument: `${r} ("${jt.util.Stringify(t)}")`,
        types: ["ArrayBuffer"],
      });
    if (!jt.util.HasFlag(n, jt.attributes.AllowResizable) && jt.util.IsResizableArrayBuffer(t))
      throw jt.errors.exception({ header: e, message: `${r} cannot be a resizable ArrayBuffer.` });
    return t;
  };
  jt.converters.SharedArrayBuffer = function (t, e, r, n) {
    if (jt.util.Type(t) !== W6 || !Gp.isSharedArrayBuffer(t))
      throw jt.errors.conversionFailed({
        prefix: e,
        argument: `${r} ("${jt.util.Stringify(t)}")`,
        types: ["SharedArrayBuffer"],
      });
    if (!jt.util.HasFlag(n, jt.attributes.AllowResizable) && jt.util.IsResizableArrayBuffer(t))
      throw jt.errors.exception({ header: e, message: `${r} cannot be a resizable SharedArrayBuffer.` });
    return t;
  };
  jt.converters.TypedArray = function (t, e, r, n, o) {
    if (jt.util.Type(t) !== W6 || !Gp.isTypedArray(t) || t.constructor.name !== e.name)
      throw jt.errors.conversionFailed({ prefix: r, argument: `${n} ("${jt.util.Stringify(t)}")`, types: [e.name] });
    if (!jt.util.HasFlag(o, jt.attributes.AllowShared) && Gp.isSharedArrayBuffer(t.buffer))
      throw jt.errors.exception({ header: r, message: `${n} cannot be a view on a shared array buffer.` });
    if (!jt.util.HasFlag(o, jt.attributes.AllowResizable) && jt.util.IsResizableArrayBuffer(t.buffer))
      throw jt.errors.exception({ header: r, message: `${n} cannot be a view on a resizable array buffer.` });
    return t;
  };
  jt.converters.DataView = function (t, e, r, n) {
    if (jt.util.Type(t) !== W6 || !Gp.isDataView(t))
      throw jt.errors.conversionFailed({
        prefix: e,
        argument: `${r} ("${jt.util.Stringify(t)}")`,
        types: ["DataView"],
      });
    if (!jt.util.HasFlag(n, jt.attributes.AllowShared) && Gp.isSharedArrayBuffer(t.buffer))
      throw jt.errors.exception({ header: e, message: `${r} cannot be a view on a shared array buffer.` });
    if (!jt.util.HasFlag(n, jt.attributes.AllowResizable) && jt.util.IsResizableArrayBuffer(t.buffer))
      throw jt.errors.exception({ header: e, message: `${r} cannot be a view on a resizable array buffer.` });
    return t;
  };
  jt.converters.ArrayBufferView = function (t, e, r, n) {
    if (jt.util.Type(t) !== W6 || !Gp.isArrayBufferView(t))
      throw jt.errors.conversionFailed({
        prefix: e,
        argument: `${r} ("${jt.util.Stringify(t)}")`,
        types: ["ArrayBufferView"],
      });
    if (!jt.util.HasFlag(n, jt.attributes.AllowShared) && Gp.isSharedArrayBuffer(t.buffer))
      throw jt.errors.exception({ header: e, message: `${r} cannot be a view on a shared array buffer.` });
    if (!jt.util.HasFlag(n, jt.attributes.AllowResizable) && jt.util.IsResizableArrayBuffer(t.buffer))
      throw jt.errors.exception({ header: e, message: `${r} cannot be a view on a resizable array buffer.` });
    return t;
  };
  jt.converters.BufferSource = function (t, e, r, n) {
    if (Gp.isArrayBuffer(t)) return jt.converters.ArrayBuffer(t, e, r, n);
    if (Gp.isArrayBufferView(t)) return ((n &= ~jt.attributes.AllowShared), jt.converters.ArrayBufferView(t, e, r, n));
    throw Gp.isSharedArrayBuffer(t)
      ? jt.errors.exception({ header: e, message: `${r} cannot be a SharedArrayBuffer.` })
      : jt.errors.conversionFailed({
          prefix: e,
          argument: `${r} ("${jt.util.Stringify(t)}")`,
          types: ["ArrayBuffer", "ArrayBufferView"],
        });
  };
  jt.converters.AllowSharedBufferSource = function (t, e, r, n) {
    if (Gp.isArrayBuffer(t)) return jt.converters.ArrayBuffer(t, e, r, n);
    if (Gp.isSharedArrayBuffer(t)) return jt.converters.SharedArrayBuffer(t, e, r, n);
    if (Gp.isArrayBufferView(t)) return ((n |= jt.attributes.AllowShared), jt.converters.ArrayBufferView(t, e, r, n));
    throw jt.errors.conversionFailed({
      prefix: e,
      argument: `${r} ("${jt.util.Stringify(t)}")`,
      types: ["ArrayBuffer", "SharedArrayBuffer", "ArrayBufferView"],
    });
  };
  jt.converters["sequence<ByteString>"] = jt.sequenceConverter(jt.converters.ByteString);
  jt.converters["sequence<sequence<ByteString>>"] = jt.sequenceConverter(jt.converters["sequence<ByteString>"]);
  jt.converters["record<ByteString, ByteString>"] = jt.recordConverter(
    jt.converters.ByteString,
    jt.converters.ByteString,
  );
  jt.converters.Blob = jt.interfaceConverter(jt.is.Blob, "Blob");
  jt.converters.AbortSignal = jt.interfaceConverter(jt.is.AbortSignal, "AbortSignal");
  jt.converters.EventHandlerNonNull = function (t) {
    return jt.util.Type(t) !== W6 ? null : typeof t == "function" ? t : () => {};
  };
  jt.attributes = { Clamp: 1, EnforceRange: 2, AllowShared: 4, AllowResizable: 8, LegacyNullToEmptyString: 16 };
  eJn.exports = { webidl: jt };
});