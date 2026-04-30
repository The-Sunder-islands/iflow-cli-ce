/**
 * @module GNe
 * @category network/grpc
 * @label grpc
 * @position 169 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GNe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GNe = T((DHr, IHr) => {
  "use strict";
  Object.defineProperty(DHr, "__esModule", { value: !0 });
  var Ao = THr(),
    Ut = Ao.Reader,
    Ms = Ao.Writer,
    Qe = Ao.util,
    Be = Ao.roots.default || (Ao.roots.default = {});
  Be.opentelemetry = (function () {
    var t = {};
    return (
      (t.proto = (function () {
        var e = {};
        return (
          (e.common = (function () {
            var r = {};
            return (
              (r.v1 = (function () {
                var n = {};
                return (
                  (n.AnyValue = (function () {
                    function o(a) {
                      if (a)
                        for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                          a[u[c]] != null && (this[u[c]] = a[u[c]]);
                    }
                    ((o.prototype.stringValue = null),
                      (o.prototype.boolValue = null),
                      (o.prototype.intValue = null),
                      (o.prototype.doubleValue = null),
                      (o.prototype.arrayValue = null),
                      (o.prototype.kvlistValue = null),
                      (o.prototype.bytesValue = null));
                    var s;
                    return (
                      Object.defineProperty(o.prototype, "value", {
                        get: Qe.oneOfGetter(
                          (s = [
                            "stringValue",
                            "boolValue",
                            "intValue",
                            "doubleValue",
                            "arrayValue",
                            "kvlistValue",
                            "bytesValue",
                          ]),
                        ),
                        set: Qe.oneOfSetter(s),
                      }),
                      (o.create = function (u) {
                        return new o(u);
                      }),
                      (o.encode = function (u, c) {
                        return (
                          c || (c = Ms.create()),
                          u.stringValue != null &&
                            Object.hasOwnProperty.call(u, "stringValue") &&
                            c.uint32(10).string(u.stringValue),
                          u.boolValue != null &&
                            Object.hasOwnProperty.call(u, "boolValue") &&
                            c.uint32(16).bool(u.boolValue),
                          u.intValue != null &&
                            Object.hasOwnProperty.call(u, "intValue") &&
                            c.uint32(24).int64(u.intValue),
                          u.doubleValue != null &&
                            Object.hasOwnProperty.call(u, "doubleValue") &&
                            c.uint32(33).double(u.doubleValue),
                          u.arrayValue != null &&
                            Object.hasOwnProperty.call(u, "arrayValue") &&
                            Be.opentelemetry.proto.common.v1.ArrayValue.encode(
                              u.arrayValue,
                              c.uint32(42).fork(),
                            ).ldelim(),
                          u.kvlistValue != null &&
                            Object.hasOwnProperty.call(u, "kvlistValue") &&
                            Be.opentelemetry.proto.common.v1.KeyValueList.encode(
                              u.kvlistValue,
                              c.uint32(50).fork(),
                            ).ldelim(),
                          u.bytesValue != null &&
                            Object.hasOwnProperty.call(u, "bytesValue") &&
                            c.uint32(58).bytes(u.bytesValue),
                          c
                        );
                      }),
                      (o.encodeDelimited = function (u, c) {
                        return this.encode(u, c).ldelim();
                      }),
                      (o.decode = function (u, c, m) {
                        u instanceof Ut || (u = Ut.create(u));
                        for (
                          var d = c === void 0 ? u.len : u.pos + c, f = new Be.opentelemetry.proto.common.v1.AnyValue();
                          u.pos < d;
                        ) {
                          var p = u.uint32();
                          if (p === m) break;
                          switch (p >>> 3) {
                            case 1: {
                              f.stringValue = u.string();
                              break;
                            }
                            case 2: {
                              f.boolValue = u.bool();
                              break;
                            }
                            case 3: {
                              f.intValue = u.int64();
                              break;
                            }
                            case 4: {
                              f.doubleValue = u.double();
                              break;
                            }
                            case 5: {
                              f.arrayValue = Be.opentelemetry.proto.common.v1.ArrayValue.decode(u, u.uint32());
                              break;
                            }
                            case 6: {
                              f.kvlistValue = Be.opentelemetry.proto.common.v1.KeyValueList.decode(u, u.uint32());
                              break;
                            }
                            case 7: {
                              f.bytesValue = u.bytes();
                              break;
                            }
                            default:
                              u.skipType(p & 7);
                              break;
                          }
                        }
                        return f;
                      }),
                      (o.decodeDelimited = function (u) {
                        return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                      }),
                      (o.verify = function (u) {
                        if (typeof u != "object" || u === null) return "object expected";
                        var c = {};
                        if (
                          u.stringValue != null &&
                          u.hasOwnProperty("stringValue") &&
                          ((c.value = 1), !Qe.isString(u.stringValue))
                        )
                          return "stringValue: string expected";
                        if (u.boolValue != null && u.hasOwnProperty("boolValue")) {
                          if (c.value === 1) return "value: multiple values";
                          if (((c.value = 1), typeof u.boolValue != "boolean")) return "boolValue: boolean expected";
                        }
                        if (u.intValue != null && u.hasOwnProperty("intValue")) {
                          if (c.value === 1) return "value: multiple values";
                          if (
                            ((c.value = 1),
                            !Qe.isInteger(u.intValue) &&
                              !(u.intValue && Qe.isInteger(u.intValue.low) && Qe.isInteger(u.intValue.high)))
                          )
                            return "intValue: integer|Long expected";
                        }
                        if (u.doubleValue != null && u.hasOwnProperty("doubleValue")) {
                          if (c.value === 1) return "value: multiple values";
                          if (((c.value = 1), typeof u.doubleValue != "number")) return "doubleValue: number expected";
                        }
                        if (u.arrayValue != null && u.hasOwnProperty("arrayValue")) {
                          if (c.value === 1) return "value: multiple values";
                          c.value = 1;
                          {
                            var m = Be.opentelemetry.proto.common.v1.ArrayValue.verify(u.arrayValue);
                            if (m) return "arrayValue." + m;
                          }
                        }
                        if (u.kvlistValue != null && u.hasOwnProperty("kvlistValue")) {
                          if (c.value === 1) return "value: multiple values";
                          c.value = 1;
                          {
                            var m = Be.opentelemetry.proto.common.v1.KeyValueList.verify(u.kvlistValue);
                            if (m) return "kvlistValue." + m;
                          }
                        }
                        if (u.bytesValue != null && u.hasOwnProperty("bytesValue")) {
                          if (c.value === 1) return "value: multiple values";
                          if (
                            ((c.value = 1),
                            !((u.bytesValue && typeof u.bytesValue.length == "number") || Qe.isString(u.bytesValue)))
                          )
                            return "bytesValue: buffer expected";
                        }
                        return null;
                      }),
                      (o.fromObject = function (u) {
                        if (u instanceof Be.opentelemetry.proto.common.v1.AnyValue) return u;
                        var c = new Be.opentelemetry.proto.common.v1.AnyValue();
                        if (
                          (u.stringValue != null && (c.stringValue = String(u.stringValue)),
                          u.boolValue != null && (c.boolValue = !!u.boolValue),
                          u.intValue != null &&
                            (Qe.Long
                              ? ((c.intValue = Qe.Long.fromValue(u.intValue)).unsigned = !1)
                              : typeof u.intValue == "string"
                                ? (c.intValue = parseInt(u.intValue, 10))
                                : typeof u.intValue == "number"
                                  ? (c.intValue = u.intValue)
                                  : typeof u.intValue == "object" &&
                                    (c.intValue = new Qe.LongBits(
                                      u.intValue.low >>> 0,
                                      u.intValue.high >>> 0,
                                    ).toNumber())),
                          u.doubleValue != null && (c.doubleValue = Number(u.doubleValue)),
                          u.arrayValue != null)
                        ) {
                          if (typeof u.arrayValue != "object")
                            throw TypeError(".opentelemetry.proto.common.v1.AnyValue.arrayValue: object expected");
                          c.arrayValue = Be.opentelemetry.proto.common.v1.ArrayValue.fromObject(u.arrayValue);
                        }
                        if (u.kvlistValue != null) {
                          if (typeof u.kvlistValue != "object")
                            throw TypeError(".opentelemetry.proto.common.v1.AnyValue.kvlistValue: object expected");
                          c.kvlistValue = Be.opentelemetry.proto.common.v1.KeyValueList.fromObject(u.kvlistValue);
                        }
                        return (
                          u.bytesValue != null &&
                            (typeof u.bytesValue == "string"
                              ? Qe.base64.decode(
                                  u.bytesValue,
                                  (c.bytesValue = Qe.newBuffer(Qe.base64.length(u.bytesValue))),
                                  0,
                                )
                              : u.bytesValue.length >= 0 && (c.bytesValue = u.bytesValue)),
                          c
                        );
                      }),
                      (o.toObject = function (u, c) {
                        c || (c = {});
                        var m = {};
                        return (
                          u.stringValue != null &&
                            u.hasOwnProperty("stringValue") &&
                            ((m.stringValue = u.stringValue), c.oneofs && (m.value = "stringValue")),
                          u.boolValue != null &&
                            u.hasOwnProperty("boolValue") &&
                            ((m.boolValue = u.boolValue), c.oneofs && (m.value = "boolValue")),
                          u.intValue != null &&
                            u.hasOwnProperty("intValue") &&
                            (typeof u.intValue == "number"
                              ? (m.intValue = c.longs === String ? String(u.intValue) : u.intValue)
                              : (m.intValue =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.intValue)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.intValue.low >>> 0, u.intValue.high >>> 0).toNumber()
                                      : u.intValue),
                            c.oneofs && (m.value = "intValue")),
                          u.doubleValue != null &&
                            u.hasOwnProperty("doubleValue") &&
                            ((m.doubleValue =
                              c.json && !isFinite(u.doubleValue) ? String(u.doubleValue) : u.doubleValue),
                            c.oneofs && (m.value = "doubleValue")),
                          u.arrayValue != null &&
                            u.hasOwnProperty("arrayValue") &&
                            ((m.arrayValue = Be.opentelemetry.proto.common.v1.ArrayValue.toObject(u.arrayValue, c)),
                            c.oneofs && (m.value = "arrayValue")),
                          u.kvlistValue != null &&
                            u.hasOwnProperty("kvlistValue") &&
                            ((m.kvlistValue = Be.opentelemetry.proto.common.v1.KeyValueList.toObject(u.kvlistValue, c)),
                            c.oneofs && (m.value = "kvlistValue")),
                          u.bytesValue != null &&
                            u.hasOwnProperty("bytesValue") &&
                            ((m.bytesValue =
                              c.bytes === String
                                ? Qe.base64.encode(u.bytesValue, 0, u.bytesValue.length)
                                : c.bytes === Array
                                  ? Array.prototype.slice.call(u.bytesValue)
                                  : u.bytesValue),
                            c.oneofs && (m.value = "bytesValue")),
                          m
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (u) {
                        return (
                          u === void 0 && (u = "type.googleapis.com"),
                          u + "/opentelemetry.proto.common.v1.AnyValue"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.ArrayValue = (function () {
                    function o(s) {
                      if (((this.values = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.values = Qe.emptyArray),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.values != null && a.values.length))
                          for (var c = 0; c < a.values.length; ++c)
                            Be.opentelemetry.proto.common.v1.AnyValue.encode(a.values[c], u.uint32(10).fork()).ldelim();
                        return u;
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.common.v1.ArrayValue();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.values && d.values.length) || (d.values = []),
                                d.values.push(Be.opentelemetry.proto.common.v1.AnyValue.decode(a, a.uint32())));
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.values != null && a.hasOwnProperty("values")) {
                          if (!Array.isArray(a.values)) return "values: array expected";
                          for (var u = 0; u < a.values.length; ++u) {
                            var c = Be.opentelemetry.proto.common.v1.AnyValue.verify(a.values[u]);
                            if (c) return "values." + c;
                          }
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.common.v1.ArrayValue) return a;
                        var u = new Be.opentelemetry.proto.common.v1.ArrayValue();
                        if (a.values) {
                          if (!Array.isArray(a.values))
                            throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: array expected");
                          u.values = [];
                          for (var c = 0; c < a.values.length; ++c) {
                            if (typeof a.values[c] != "object")
                              throw TypeError(".opentelemetry.proto.common.v1.ArrayValue.values: object expected");
                            u.values[c] = Be.opentelemetry.proto.common.v1.AnyValue.fromObject(a.values[c]);
                          }
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (((u.arrays || u.defaults) && (c.values = []), a.values && a.values.length)) {
                          c.values = [];
                          for (var m = 0; m < a.values.length; ++m)
                            c.values[m] = Be.opentelemetry.proto.common.v1.AnyValue.toObject(a.values[m], u);
                        }
                        return c;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.common.v1.ArrayValue"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.KeyValueList = (function () {
                    function o(s) {
                      if (((this.values = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.values = Qe.emptyArray),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.values != null && a.values.length))
                          for (var c = 0; c < a.values.length; ++c)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(a.values[c], u.uint32(10).fork()).ldelim();
                        return u;
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.common.v1.KeyValueList();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.values && d.values.length) || (d.values = []),
                                d.values.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(a, a.uint32())));
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.values != null && a.hasOwnProperty("values")) {
                          if (!Array.isArray(a.values)) return "values: array expected";
                          for (var u = 0; u < a.values.length; ++u) {
                            var c = Be.opentelemetry.proto.common.v1.KeyValue.verify(a.values[u]);
                            if (c) return "values." + c;
                          }
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.common.v1.KeyValueList) return a;
                        var u = new Be.opentelemetry.proto.common.v1.KeyValueList();
                        if (a.values) {
                          if (!Array.isArray(a.values))
                            throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: array expected");
                          u.values = [];
                          for (var c = 0; c < a.values.length; ++c) {
                            if (typeof a.values[c] != "object")
                              throw TypeError(".opentelemetry.proto.common.v1.KeyValueList.values: object expected");
                            u.values[c] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(a.values[c]);
                          }
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (((u.arrays || u.defaults) && (c.values = []), a.values && a.values.length)) {
                          c.values = [];
                          for (var m = 0; m < a.values.length; ++m)
                            c.values[m] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(a.values[m], u);
                        }
                        return c;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.common.v1.KeyValueList"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.KeyValue = (function () {
                    function o(s) {
                      if (s)
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.key = null),
                      (o.prototype.value = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        return (
                          u || (u = Ms.create()),
                          a.key != null && Object.hasOwnProperty.call(a, "key") && u.uint32(10).string(a.key),
                          a.value != null &&
                            Object.hasOwnProperty.call(a, "value") &&
                            Be.opentelemetry.proto.common.v1.AnyValue.encode(a.value, u.uint32(18).fork()).ldelim(),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u, d = new Be.opentelemetry.proto.common.v1.KeyValue();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.key = a.string();
                              break;
                            }
                            case 2: {
                              d.value = Be.opentelemetry.proto.common.v1.AnyValue.decode(a, a.uint32());
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.key != null && a.hasOwnProperty("key") && !Qe.isString(a.key))
                          return "key: string expected";
                        if (a.value != null && a.hasOwnProperty("value")) {
                          var u = Be.opentelemetry.proto.common.v1.AnyValue.verify(a.value);
                          if (u) return "value." + u;
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.common.v1.KeyValue) return a;
                        var u = new Be.opentelemetry.proto.common.v1.KeyValue();
                        if ((a.key != null && (u.key = String(a.key)), a.value != null)) {
                          if (typeof a.value != "object")
                            throw TypeError(".opentelemetry.proto.common.v1.KeyValue.value: object expected");
                          u.value = Be.opentelemetry.proto.common.v1.AnyValue.fromObject(a.value);
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        return (
                          u.defaults && ((c.key = ""), (c.value = null)),
                          a.key != null && a.hasOwnProperty("key") && (c.key = a.key),
                          a.value != null &&
                            a.hasOwnProperty("value") &&
                            (c.value = Be.opentelemetry.proto.common.v1.AnyValue.toObject(a.value, u)),
                          c
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.common.v1.KeyValue"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.InstrumentationScope = (function () {
                    function o(s) {
                      if (((this.attributes = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.name = null),
                      (o.prototype.version = null),
                      (o.prototype.attributes = Qe.emptyArray),
                      (o.prototype.droppedAttributesCount = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.name != null && Object.hasOwnProperty.call(a, "name") && u.uint32(10).string(a.name),
                          a.version != null &&
                            Object.hasOwnProperty.call(a, "version") &&
                            u.uint32(18).string(a.version),
                          a.attributes != null && a.attributes.length)
                        )
                          for (var c = 0; c < a.attributes.length; ++c)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              a.attributes[c],
                              u.uint32(26).fork(),
                            ).ldelim();
                        return (
                          a.droppedAttributesCount != null &&
                            Object.hasOwnProperty.call(a, "droppedAttributesCount") &&
                            u.uint32(32).uint32(a.droppedAttributesCount),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.common.v1.InstrumentationScope();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.name = a.string();
                              break;
                            }
                            case 2: {
                              d.version = a.string();
                              break;
                            }
                            case 3: {
                              ((d.attributes && d.attributes.length) || (d.attributes = []),
                                d.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(a, a.uint32())));
                              break;
                            }
                            case 4: {
                              d.droppedAttributesCount = a.uint32();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.name != null && a.hasOwnProperty("name") && !Qe.isString(a.name))
                          return "name: string expected";
                        if (a.version != null && a.hasOwnProperty("version") && !Qe.isString(a.version))
                          return "version: string expected";
                        if (a.attributes != null && a.hasOwnProperty("attributes")) {
                          if (!Array.isArray(a.attributes)) return "attributes: array expected";
                          for (var u = 0; u < a.attributes.length; ++u) {
                            var c = Be.opentelemetry.proto.common.v1.KeyValue.verify(a.attributes[u]);
                            if (c) return "attributes." + c;
                          }
                        }
                        return a.droppedAttributesCount != null &&
                          a.hasOwnProperty("droppedAttributesCount") &&
                          !Qe.isInteger(a.droppedAttributesCount)
                          ? "droppedAttributesCount: integer expected"
                          : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.common.v1.InstrumentationScope) return a;
                        var u = new Be.opentelemetry.proto.common.v1.InstrumentationScope();
                        if (
                          (a.name != null && (u.name = String(a.name)),
                          a.version != null && (u.version = String(a.version)),
                          a.attributes)
                        ) {
                          if (!Array.isArray(a.attributes))
                            throw TypeError(
                              ".opentelemetry.proto.common.v1.InstrumentationScope.attributes: array expected",
                            );
                          u.attributes = [];
                          for (var c = 0; c < a.attributes.length; ++c) {
                            if (typeof a.attributes[c] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.common.v1.InstrumentationScope.attributes: object expected",
                              );
                            u.attributes[c] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(a.attributes[c]);
                          }
                        }
                        return (
                          a.droppedAttributesCount != null &&
                            (u.droppedAttributesCount = a.droppedAttributesCount >>> 0),
                          u
                        );
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.attributes = []),
                          u.defaults && ((c.name = ""), (c.version = ""), (c.droppedAttributesCount = 0)),
                          a.name != null && a.hasOwnProperty("name") && (c.name = a.name),
                          a.version != null && a.hasOwnProperty("version") && (c.version = a.version),
                          a.attributes && a.attributes.length)
                        ) {
                          c.attributes = [];
                          for (var m = 0; m < a.attributes.length; ++m)
                            c.attributes[m] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(a.attributes[m], u);
                        }
                        return (
                          a.droppedAttributesCount != null &&
                            a.hasOwnProperty("droppedAttributesCount") &&
                            (c.droppedAttributesCount = a.droppedAttributesCount),
                          c
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.common.v1.InstrumentationScope"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.EntityRef = (function () {
                    function o(s) {
                      if (((this.idKeys = []), (this.descriptionKeys = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.schemaUrl = null),
                      (o.prototype.type = null),
                      (o.prototype.idKeys = Qe.emptyArray),
                      (o.prototype.descriptionKeys = Qe.emptyArray),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.schemaUrl != null &&
                            Object.hasOwnProperty.call(a, "schemaUrl") &&
                            u.uint32(10).string(a.schemaUrl),
                          a.type != null && Object.hasOwnProperty.call(a, "type") && u.uint32(18).string(a.type),
                          a.idKeys != null && a.idKeys.length)
                        )
                          for (var c = 0; c < a.idKeys.length; ++c) u.uint32(26).string(a.idKeys[c]);
                        if (a.descriptionKeys != null && a.descriptionKeys.length)
                          for (var c = 0; c < a.descriptionKeys.length; ++c) u.uint32(34).string(a.descriptionKeys[c]);
                        return u;
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.common.v1.EntityRef();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.schemaUrl = a.string();
                              break;
                            }
                            case 2: {
                              d.type = a.string();
                              break;
                            }
                            case 3: {
                              ((d.idKeys && d.idKeys.length) || (d.idKeys = []), d.idKeys.push(a.string()));
                              break;
                            }
                            case 4: {
                              ((d.descriptionKeys && d.descriptionKeys.length) || (d.descriptionKeys = []),
                                d.descriptionKeys.push(a.string()));
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && !Qe.isString(a.schemaUrl))
                          return "schemaUrl: string expected";
                        if (a.type != null && a.hasOwnProperty("type") && !Qe.isString(a.type))
                          return "type: string expected";
                        if (a.idKeys != null && a.hasOwnProperty("idKeys")) {
                          if (!Array.isArray(a.idKeys)) return "idKeys: array expected";
                          for (var u = 0; u < a.idKeys.length; ++u)
                            if (!Qe.isString(a.idKeys[u])) return "idKeys: string[] expected";
                        }
                        if (a.descriptionKeys != null && a.hasOwnProperty("descriptionKeys")) {
                          if (!Array.isArray(a.descriptionKeys)) return "descriptionKeys: array expected";
                          for (var u = 0; u < a.descriptionKeys.length; ++u)
                            if (!Qe.isString(a.descriptionKeys[u])) return "descriptionKeys: string[] expected";
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.common.v1.EntityRef) return a;
                        var u = new Be.opentelemetry.proto.common.v1.EntityRef();
                        if (
                          (a.schemaUrl != null && (u.schemaUrl = String(a.schemaUrl)),
                          a.type != null && (u.type = String(a.type)),
                          a.idKeys)
                        ) {
                          if (!Array.isArray(a.idKeys))
                            throw TypeError(".opentelemetry.proto.common.v1.EntityRef.idKeys: array expected");
                          u.idKeys = [];
                          for (var c = 0; c < a.idKeys.length; ++c) u.idKeys[c] = String(a.idKeys[c]);
                        }
                        if (a.descriptionKeys) {
                          if (!Array.isArray(a.descriptionKeys))
                            throw TypeError(".opentelemetry.proto.common.v1.EntityRef.descriptionKeys: array expected");
                          u.descriptionKeys = [];
                          for (var c = 0; c < a.descriptionKeys.length; ++c)
                            u.descriptionKeys[c] = String(a.descriptionKeys[c]);
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && ((c.idKeys = []), (c.descriptionKeys = [])),
                          u.defaults && ((c.schemaUrl = ""), (c.type = "")),
                          a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && (c.schemaUrl = a.schemaUrl),
                          a.type != null && a.hasOwnProperty("type") && (c.type = a.type),
                          a.idKeys && a.idKeys.length)
                        ) {
                          c.idKeys = [];
                          for (var m = 0; m < a.idKeys.length; ++m) c.idKeys[m] = a.idKeys[m];
                        }
                        if (a.descriptionKeys && a.descriptionKeys.length) {
                          c.descriptionKeys = [];
                          for (var m = 0; m < a.descriptionKeys.length; ++m)
                            c.descriptionKeys[m] = a.descriptionKeys[m];
                        }
                        return c;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.common.v1.EntityRef"
                        );
                      }),
                      o
                    );
                  })()),
                  n
                );
              })()),
              r
            );
          })()),
          (e.resource = (function () {
            var r = {};
            return (
              (r.v1 = (function () {
                var n = {};
                return (
                  (n.Resource = (function () {
                    function o(s) {
                      if (((this.attributes = []), (this.entityRefs = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.attributes = Qe.emptyArray),
                      (o.prototype.droppedAttributesCount = null),
                      (o.prototype.entityRefs = Qe.emptyArray),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.attributes != null && a.attributes.length))
                          for (var c = 0; c < a.attributes.length; ++c)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              a.attributes[c],
                              u.uint32(10).fork(),
                            ).ldelim();
                        if (
                          (a.droppedAttributesCount != null &&
                            Object.hasOwnProperty.call(a, "droppedAttributesCount") &&
                            u.uint32(16).uint32(a.droppedAttributesCount),
                          a.entityRefs != null && a.entityRefs.length)
                        )
                          for (var c = 0; c < a.entityRefs.length; ++c)
                            Be.opentelemetry.proto.common.v1.EntityRef.encode(
                              a.entityRefs[c],
                              u.uint32(26).fork(),
                            ).ldelim();
                        return u;
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.resource.v1.Resource();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.attributes && d.attributes.length) || (d.attributes = []),
                                d.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(a, a.uint32())));
                              break;
                            }
                            case 2: {
                              d.droppedAttributesCount = a.uint32();
                              break;
                            }
                            case 3: {
                              ((d.entityRefs && d.entityRefs.length) || (d.entityRefs = []),
                                d.entityRefs.push(Be.opentelemetry.proto.common.v1.EntityRef.decode(a, a.uint32())));
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.attributes != null && a.hasOwnProperty("attributes")) {
                          if (!Array.isArray(a.attributes)) return "attributes: array expected";
                          for (var u = 0; u < a.attributes.length; ++u) {
                            var c = Be.opentelemetry.proto.common.v1.KeyValue.verify(a.attributes[u]);
                            if (c) return "attributes." + c;
                          }
                        }
                        if (
                          a.droppedAttributesCount != null &&
                          a.hasOwnProperty("droppedAttributesCount") &&
                          !Qe.isInteger(a.droppedAttributesCount)
                        )
                          return "droppedAttributesCount: integer expected";
                        if (a.entityRefs != null && a.hasOwnProperty("entityRefs")) {
                          if (!Array.isArray(a.entityRefs)) return "entityRefs: array expected";
                          for (var u = 0; u < a.entityRefs.length; ++u) {
                            var c = Be.opentelemetry.proto.common.v1.EntityRef.verify(a.entityRefs[u]);
                            if (c) return "entityRefs." + c;
                          }
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.resource.v1.Resource) return a;
                        var u = new Be.opentelemetry.proto.resource.v1.Resource();
                        if (a.attributes) {
                          if (!Array.isArray(a.attributes))
                            throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: array expected");
                          u.attributes = [];
                          for (var c = 0; c < a.attributes.length; ++c) {
                            if (typeof a.attributes[c] != "object")
                              throw TypeError(".opentelemetry.proto.resource.v1.Resource.attributes: object expected");
                            u.attributes[c] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(a.attributes[c]);
                          }
                        }
                        if (
                          (a.droppedAttributesCount != null &&
                            (u.droppedAttributesCount = a.droppedAttributesCount >>> 0),
                          a.entityRefs)
                        ) {
                          if (!Array.isArray(a.entityRefs))
                            throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: array expected");
                          u.entityRefs = [];
                          for (var c = 0; c < a.entityRefs.length; ++c) {
                            if (typeof a.entityRefs[c] != "object")
                              throw TypeError(".opentelemetry.proto.resource.v1.Resource.entityRefs: object expected");
                            u.entityRefs[c] = Be.opentelemetry.proto.common.v1.EntityRef.fromObject(a.entityRefs[c]);
                          }
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && ((c.attributes = []), (c.entityRefs = [])),
                          u.defaults && (c.droppedAttributesCount = 0),
                          a.attributes && a.attributes.length)
                        ) {
                          c.attributes = [];
                          for (var m = 0; m < a.attributes.length; ++m)
                            c.attributes[m] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(a.attributes[m], u);
                        }
                        if (
                          (a.droppedAttributesCount != null &&
                            a.hasOwnProperty("droppedAttributesCount") &&
                            (c.droppedAttributesCount = a.droppedAttributesCount),
                          a.entityRefs && a.entityRefs.length)
                        ) {
                          c.entityRefs = [];
                          for (var m = 0; m < a.entityRefs.length; ++m)
                            c.entityRefs[m] = Be.opentelemetry.proto.common.v1.EntityRef.toObject(a.entityRefs[m], u);
                        }
                        return c;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.resource.v1.Resource"
                        );
                      }),
                      o
                    );
                  })()),
                  n
                );
              })()),
              r
            );
          })()),
          (e.trace = (function () {
            var r = {};
            return (
              (r.v1 = (function () {
                var n = {};
                return (
                  (n.TracesData = (function () {
                    function o(s) {
                      if (((this.resourceSpans = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.resourceSpans = Qe.emptyArray),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.resourceSpans != null && a.resourceSpans.length))
                          for (var c = 0; c < a.resourceSpans.length; ++c)
                            Be.opentelemetry.proto.trace.v1.ResourceSpans.encode(
                              a.resourceSpans[c],
                              u.uint32(10).fork(),
                            ).ldelim();
                        return u;
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.trace.v1.TracesData();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.resourceSpans && d.resourceSpans.length) || (d.resourceSpans = []),
                                d.resourceSpans.push(
                                  Be.opentelemetry.proto.trace.v1.ResourceSpans.decode(a, a.uint32()),
                                ));
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.resourceSpans != null && a.hasOwnProperty("resourceSpans")) {
                          if (!Array.isArray(a.resourceSpans)) return "resourceSpans: array expected";
                          for (var u = 0; u < a.resourceSpans.length; ++u) {
                            var c = Be.opentelemetry.proto.trace.v1.ResourceSpans.verify(a.resourceSpans[u]);
                            if (c) return "resourceSpans." + c;
                          }
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.trace.v1.TracesData) return a;
                        var u = new Be.opentelemetry.proto.trace.v1.TracesData();
                        if (a.resourceSpans) {
                          if (!Array.isArray(a.resourceSpans))
                            throw TypeError(".opentelemetry.proto.trace.v1.TracesData.resourceSpans: array expected");
                          u.resourceSpans = [];
                          for (var c = 0; c < a.resourceSpans.length; ++c) {
                            if (typeof a.resourceSpans[c] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.trace.v1.TracesData.resourceSpans: object expected",
                              );
                            u.resourceSpans[c] = Be.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(
                              a.resourceSpans[c],
                            );
                          }
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.resourceSpans = []),
                          a.resourceSpans && a.resourceSpans.length)
                        ) {
                          c.resourceSpans = [];
                          for (var m = 0; m < a.resourceSpans.length; ++m)
                            c.resourceSpans[m] = Be.opentelemetry.proto.trace.v1.ResourceSpans.toObject(
                              a.resourceSpans[m],
                              u,
                            );
                        }
                        return c;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.trace.v1.TracesData"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.ResourceSpans = (function () {
                    function o(s) {
                      if (((this.scopeSpans = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.resource = null),
                      (o.prototype.scopeSpans = Qe.emptyArray),
                      (o.prototype.schemaUrl = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.resource != null &&
                            Object.hasOwnProperty.call(a, "resource") &&
                            Be.opentelemetry.proto.resource.v1.Resource.encode(
                              a.resource,
                              u.uint32(10).fork(),
                            ).ldelim(),
                          a.scopeSpans != null && a.scopeSpans.length)
                        )
                          for (var c = 0; c < a.scopeSpans.length; ++c)
                            Be.opentelemetry.proto.trace.v1.ScopeSpans.encode(
                              a.scopeSpans[c],
                              u.uint32(18).fork(),
                            ).ldelim();
                        return (
                          a.schemaUrl != null &&
                            Object.hasOwnProperty.call(a, "schemaUrl") &&
                            u.uint32(26).string(a.schemaUrl),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.trace.v1.ResourceSpans();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.resource = Be.opentelemetry.proto.resource.v1.Resource.decode(a, a.uint32());
                              break;
                            }
                            case 2: {
                              ((d.scopeSpans && d.scopeSpans.length) || (d.scopeSpans = []),
                                d.scopeSpans.push(Be.opentelemetry.proto.trace.v1.ScopeSpans.decode(a, a.uint32())));
                              break;
                            }
                            case 3: {
                              d.schemaUrl = a.string();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.resource != null && a.hasOwnProperty("resource")) {
                          var u = Be.opentelemetry.proto.resource.v1.Resource.verify(a.resource);
                          if (u) return "resource." + u;
                        }
                        if (a.scopeSpans != null && a.hasOwnProperty("scopeSpans")) {
                          if (!Array.isArray(a.scopeSpans)) return "scopeSpans: array expected";
                          for (var c = 0; c < a.scopeSpans.length; ++c) {
                            var u = Be.opentelemetry.proto.trace.v1.ScopeSpans.verify(a.scopeSpans[c]);
                            if (u) return "scopeSpans." + u;
                          }
                        }
                        return a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && !Qe.isString(a.schemaUrl)
                          ? "schemaUrl: string expected"
                          : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.trace.v1.ResourceSpans) return a;
                        var u = new Be.opentelemetry.proto.trace.v1.ResourceSpans();
                        if (a.resource != null) {
                          if (typeof a.resource != "object")
                            throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.resource: object expected");
                          u.resource = Be.opentelemetry.proto.resource.v1.Resource.fromObject(a.resource);
                        }
                        if (a.scopeSpans) {
                          if (!Array.isArray(a.scopeSpans))
                            throw TypeError(".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: array expected");
                          u.scopeSpans = [];
                          for (var c = 0; c < a.scopeSpans.length; ++c) {
                            if (typeof a.scopeSpans[c] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.trace.v1.ResourceSpans.scopeSpans: object expected",
                              );
                            u.scopeSpans[c] = Be.opentelemetry.proto.trace.v1.ScopeSpans.fromObject(a.scopeSpans[c]);
                          }
                        }
                        return (a.schemaUrl != null && (u.schemaUrl = String(a.schemaUrl)), u);
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.scopeSpans = []),
                          u.defaults && ((c.resource = null), (c.schemaUrl = "")),
                          a.resource != null &&
                            a.hasOwnProperty("resource") &&
                            (c.resource = Be.opentelemetry.proto.resource.v1.Resource.toObject(a.resource, u)),
                          a.scopeSpans && a.scopeSpans.length)
                        ) {
                          c.scopeSpans = [];
                          for (var m = 0; m < a.scopeSpans.length; ++m)
                            c.scopeSpans[m] = Be.opentelemetry.proto.trace.v1.ScopeSpans.toObject(a.scopeSpans[m], u);
                        }
                        return (a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && (c.schemaUrl = a.schemaUrl), c);
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.trace.v1.ResourceSpans"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.ScopeSpans = (function () {
                    function o(s) {
                      if (((this.spans = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.scope = null),
                      (o.prototype.spans = Qe.emptyArray),
                      (o.prototype.schemaUrl = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.scope != null &&
                            Object.hasOwnProperty.call(a, "scope") &&
                            Be.opentelemetry.proto.common.v1.InstrumentationScope.encode(
                              a.scope,
                              u.uint32(10).fork(),
                            ).ldelim(),
                          a.spans != null && a.spans.length)
                        )
                          for (var c = 0; c < a.spans.length; ++c)
                            Be.opentelemetry.proto.trace.v1.Span.encode(a.spans[c], u.uint32(18).fork()).ldelim();
                        return (
                          a.schemaUrl != null &&
                            Object.hasOwnProperty.call(a, "schemaUrl") &&
                            u.uint32(26).string(a.schemaUrl),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.trace.v1.ScopeSpans();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.scope = Be.opentelemetry.proto.common.v1.InstrumentationScope.decode(a, a.uint32());
                              break;
                            }
                            case 2: {
                              ((d.spans && d.spans.length) || (d.spans = []),
                                d.spans.push(Be.opentelemetry.proto.trace.v1.Span.decode(a, a.uint32())));
                              break;
                            }
                            case 3: {
                              d.schemaUrl = a.string();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.scope != null && a.hasOwnProperty("scope")) {
                          var u = Be.opentelemetry.proto.common.v1.InstrumentationScope.verify(a.scope);
                          if (u) return "scope." + u;
                        }
                        if (a.spans != null && a.hasOwnProperty("spans")) {
                          if (!Array.isArray(a.spans)) return "spans: array expected";
                          for (var c = 0; c < a.spans.length; ++c) {
                            var u = Be.opentelemetry.proto.trace.v1.Span.verify(a.spans[c]);
                            if (u) return "spans." + u;
                          }
                        }
                        return a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && !Qe.isString(a.schemaUrl)
                          ? "schemaUrl: string expected"
                          : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.trace.v1.ScopeSpans) return a;
                        var u = new Be.opentelemetry.proto.trace.v1.ScopeSpans();
                        if (a.scope != null) {
                          if (typeof a.scope != "object")
                            throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.scope: object expected");
                          u.scope = Be.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(a.scope);
                        }
                        if (a.spans) {
                          if (!Array.isArray(a.spans))
                            throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: array expected");
                          u.spans = [];
                          for (var c = 0; c < a.spans.length; ++c) {
                            if (typeof a.spans[c] != "object")
                              throw TypeError(".opentelemetry.proto.trace.v1.ScopeSpans.spans: object expected");
                            u.spans[c] = Be.opentelemetry.proto.trace.v1.Span.fromObject(a.spans[c]);
                          }
                        }
                        return (a.schemaUrl != null && (u.schemaUrl = String(a.schemaUrl)), u);
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.spans = []),
                          u.defaults && ((c.scope = null), (c.schemaUrl = "")),
                          a.scope != null &&
                            a.hasOwnProperty("scope") &&
                            (c.scope = Be.opentelemetry.proto.common.v1.InstrumentationScope.toObject(a.scope, u)),
                          a.spans && a.spans.length)
                        ) {
                          c.spans = [];
                          for (var m = 0; m < a.spans.length; ++m)
                            c.spans[m] = Be.opentelemetry.proto.trace.v1.Span.toObject(a.spans[m], u);
                        }
                        return (a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && (c.schemaUrl = a.schemaUrl), c);
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.trace.v1.ScopeSpans"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.Span = (function () {
                    function o(s) {
                      if (((this.attributes = []), (this.events = []), (this.links = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.traceId = null),
                      (o.prototype.spanId = null),
                      (o.prototype.traceState = null),
                      (o.prototype.parentSpanId = null),
                      (o.prototype.flags = null),
                      (o.prototype.name = null),
                      (o.prototype.kind = null),
                      (o.prototype.startTimeUnixNano = null),
                      (o.prototype.endTimeUnixNano = null),
                      (o.prototype.attributes = Qe.emptyArray),
                      (o.prototype.droppedAttributesCount = null),
                      (o.prototype.events = Qe.emptyArray),
                      (o.prototype.droppedEventsCount = null),
                      (o.prototype.links = Qe.emptyArray),
                      (o.prototype.droppedLinksCount = null),
                      (o.prototype.status = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.traceId != null &&
                            Object.hasOwnProperty.call(a, "traceId") &&
                            u.uint32(10).bytes(a.traceId),
                          a.spanId != null && Object.hasOwnProperty.call(a, "spanId") && u.uint32(18).bytes(a.spanId),
                          a.traceState != null &&
                            Object.hasOwnProperty.call(a, "traceState") &&
                            u.uint32(26).string(a.traceState),
                          a.parentSpanId != null &&
                            Object.hasOwnProperty.call(a, "parentSpanId") &&
                            u.uint32(34).bytes(a.parentSpanId),
                          a.name != null && Object.hasOwnProperty.call(a, "name") && u.uint32(42).string(a.name),
                          a.kind != null && Object.hasOwnProperty.call(a, "kind") && u.uint32(48).int32(a.kind),
                          a.startTimeUnixNano != null &&
                            Object.hasOwnProperty.call(a, "startTimeUnixNano") &&
                            u.uint32(57).fixed64(a.startTimeUnixNano),
                          a.endTimeUnixNano != null &&
                            Object.hasOwnProperty.call(a, "endTimeUnixNano") &&
                            u.uint32(65).fixed64(a.endTimeUnixNano),
                          a.attributes != null && a.attributes.length)
                        )
                          for (var c = 0; c < a.attributes.length; ++c)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              a.attributes[c],
                              u.uint32(74).fork(),
                            ).ldelim();
                        if (
                          (a.droppedAttributesCount != null &&
                            Object.hasOwnProperty.call(a, "droppedAttributesCount") &&
                            u.uint32(80).uint32(a.droppedAttributesCount),
                          a.events != null && a.events.length)
                        )
                          for (var c = 0; c < a.events.length; ++c)
                            Be.opentelemetry.proto.trace.v1.Span.Event.encode(
                              a.events[c],
                              u.uint32(90).fork(),
                            ).ldelim();
                        if (
                          (a.droppedEventsCount != null &&
                            Object.hasOwnProperty.call(a, "droppedEventsCount") &&
                            u.uint32(96).uint32(a.droppedEventsCount),
                          a.links != null && a.links.length)
                        )
                          for (var c = 0; c < a.links.length; ++c)
                            Be.opentelemetry.proto.trace.v1.Span.Link.encode(a.links[c], u.uint32(106).fork()).ldelim();
                        return (
                          a.droppedLinksCount != null &&
                            Object.hasOwnProperty.call(a, "droppedLinksCount") &&
                            u.uint32(112).uint32(a.droppedLinksCount),
                          a.status != null &&
                            Object.hasOwnProperty.call(a, "status") &&
                            Be.opentelemetry.proto.trace.v1.Status.encode(a.status, u.uint32(122).fork()).ldelim(),
                          a.flags != null && Object.hasOwnProperty.call(a, "flags") && u.uint32(133).fixed32(a.flags),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u, d = new Be.opentelemetry.proto.trace.v1.Span();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.traceId = a.bytes();
                              break;
                            }
                            case 2: {
                              d.spanId = a.bytes();
                              break;
                            }
                            case 3: {
                              d.traceState = a.string();
                              break;
                            }
                            case 4: {
                              d.parentSpanId = a.bytes();
                              break;
                            }
                            case 16: {
                              d.flags = a.fixed32();
                              break;
                            }
                            case 5: {
                              d.name = a.string();
                              break;
                            }
                            case 6: {
                              d.kind = a.int32();
                              break;
                            }
                            case 7: {
                              d.startTimeUnixNano = a.fixed64();
                              break;
                            }
                            case 8: {
                              d.endTimeUnixNano = a.fixed64();
                              break;
                            }
                            case 9: {
                              ((d.attributes && d.attributes.length) || (d.attributes = []),
                                d.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(a, a.uint32())));
                              break;
                            }
                            case 10: {
                              d.droppedAttributesCount = a.uint32();
                              break;
                            }
                            case 11: {
                              ((d.events && d.events.length) || (d.events = []),
                                d.events.push(Be.opentelemetry.proto.trace.v1.Span.Event.decode(a, a.uint32())));
                              break;
                            }
                            case 12: {
                              d.droppedEventsCount = a.uint32();
                              break;
                            }
                            case 13: {
                              ((d.links && d.links.length) || (d.links = []),
                                d.links.push(Be.opentelemetry.proto.trace.v1.Span.Link.decode(a, a.uint32())));
                              break;
                            }
                            case 14: {
                              d.droppedLinksCount = a.uint32();
                              break;
                            }
                            case 15: {
                              d.status = Be.opentelemetry.proto.trace.v1.Status.decode(a, a.uint32());
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (
                          a.traceId != null &&
                          a.hasOwnProperty("traceId") &&
                          !((a.traceId && typeof a.traceId.length == "number") || Qe.isString(a.traceId))
                        )
                          return "traceId: buffer expected";
                        if (
                          a.spanId != null &&
                          a.hasOwnProperty("spanId") &&
                          !((a.spanId && typeof a.spanId.length == "number") || Qe.isString(a.spanId))
                        )
                          return "spanId: buffer expected";
                        if (a.traceState != null && a.hasOwnProperty("traceState") && !Qe.isString(a.traceState))
                          return "traceState: string expected";
                        if (
                          a.parentSpanId != null &&
                          a.hasOwnProperty("parentSpanId") &&
                          !((a.parentSpanId && typeof a.parentSpanId.length == "number") || Qe.isString(a.parentSpanId))
                        )
                          return "parentSpanId: buffer expected";
                        if (a.flags != null && a.hasOwnProperty("flags") && !Qe.isInteger(a.flags))
                          return "flags: integer expected";
                        if (a.name != null && a.hasOwnProperty("name") && !Qe.isString(a.name))
                          return "name: string expected";
                        if (a.kind != null && a.hasOwnProperty("kind"))
                          switch (a.kind) {
                            default:
                              return "kind: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                              break;
                          }
                        if (
                          a.startTimeUnixNano != null &&
                          a.hasOwnProperty("startTimeUnixNano") &&
                          !Qe.isInteger(a.startTimeUnixNano) &&
                          !(
                            a.startTimeUnixNano &&
                            Qe.isInteger(a.startTimeUnixNano.low) &&
                            Qe.isInteger(a.startTimeUnixNano.high)
                          )
                        )
                          return "startTimeUnixNano: integer|Long expected";
                        if (
                          a.endTimeUnixNano != null &&
                          a.hasOwnProperty("endTimeUnixNano") &&
                          !Qe.isInteger(a.endTimeUnixNano) &&
                          !(
                            a.endTimeUnixNano &&
                            Qe.isInteger(a.endTimeUnixNano.low) &&
                            Qe.isInteger(a.endTimeUnixNano.high)
                          )
                        )
                          return "endTimeUnixNano: integer|Long expected";
                        if (a.attributes != null && a.hasOwnProperty("attributes")) {
                          if (!Array.isArray(a.attributes)) return "attributes: array expected";
                          for (var u = 0; u < a.attributes.length; ++u) {
                            var c = Be.opentelemetry.proto.common.v1.KeyValue.verify(a.attributes[u]);
                            if (c) return "attributes." + c;
                          }
                        }
                        if (
                          a.droppedAttributesCount != null &&
                          a.hasOwnProperty("droppedAttributesCount") &&
                          !Qe.isInteger(a.droppedAttributesCount)
                        )
                          return "droppedAttributesCount: integer expected";
                        if (a.events != null && a.hasOwnProperty("events")) {
                          if (!Array.isArray(a.events)) return "events: array expected";
                          for (var u = 0; u < a.events.length; ++u) {
                            var c = Be.opentelemetry.proto.trace.v1.Span.Event.verify(a.events[u]);
                            if (c) return "events." + c;
                          }
                        }
                        if (
                          a.droppedEventsCount != null &&
                          a.hasOwnProperty("droppedEventsCount") &&
                          !Qe.isInteger(a.droppedEventsCount)
                        )
                          return "droppedEventsCount: integer expected";
                        if (a.links != null && a.hasOwnProperty("links")) {
                          if (!Array.isArray(a.links)) return "links: array expected";
                          for (var u = 0; u < a.links.length; ++u) {
                            var c = Be.opentelemetry.proto.trace.v1.Span.Link.verify(a.links[u]);
                            if (c) return "links." + c;
                          }
                        }
                        if (
                          a.droppedLinksCount != null &&
                          a.hasOwnProperty("droppedLinksCount") &&
                          !Qe.isInteger(a.droppedLinksCount)
                        )
                          return "droppedLinksCount: integer expected";
                        if (a.status != null && a.hasOwnProperty("status")) {
                          var c = Be.opentelemetry.proto.trace.v1.Status.verify(a.status);
                          if (c) return "status." + c;
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.trace.v1.Span) return a;
                        var u = new Be.opentelemetry.proto.trace.v1.Span();
                        switch (
                          (a.traceId != null &&
                            (typeof a.traceId == "string"
                              ? Qe.base64.decode(a.traceId, (u.traceId = Qe.newBuffer(Qe.base64.length(a.traceId))), 0)
                              : a.traceId.length >= 0 && (u.traceId = a.traceId)),
                          a.spanId != null &&
                            (typeof a.spanId == "string"
                              ? Qe.base64.decode(a.spanId, (u.spanId = Qe.newBuffer(Qe.base64.length(a.spanId))), 0)
                              : a.spanId.length >= 0 && (u.spanId = a.spanId)),
                          a.traceState != null && (u.traceState = String(a.traceState)),
                          a.parentSpanId != null &&
                            (typeof a.parentSpanId == "string"
                              ? Qe.base64.decode(
                                  a.parentSpanId,
                                  (u.parentSpanId = Qe.newBuffer(Qe.base64.length(a.parentSpanId))),
                                  0,
                                )
                              : a.parentSpanId.length >= 0 && (u.parentSpanId = a.parentSpanId)),
                          a.flags != null && (u.flags = a.flags >>> 0),
                          a.name != null && (u.name = String(a.name)),
                          a.kind)
                        ) {
                          default:
                            if (typeof a.kind == "number") {
                              u.kind = a.kind;
                              break;
                            }
                            break;
                          case "SPAN_KIND_UNSPECIFIED":
                          case 0:
                            u.kind = 0;
                            break;
                          case "SPAN_KIND_INTERNAL":
                          case 1:
                            u.kind = 1;
                            break;
                          case "SPAN_KIND_SERVER":
                          case 2:
                            u.kind = 2;
                            break;
                          case "SPAN_KIND_CLIENT":
                          case 3:
                            u.kind = 3;
                            break;
                          case "SPAN_KIND_PRODUCER":
                          case 4:
                            u.kind = 4;
                            break;
                          case "SPAN_KIND_CONSUMER":
                          case 5:
                            u.kind = 5;
                            break;
                        }
                        if (
                          (a.startTimeUnixNano != null &&
                            (Qe.Long
                              ? ((u.startTimeUnixNano = Qe.Long.fromValue(a.startTimeUnixNano)).unsigned = !1)
                              : typeof a.startTimeUnixNano == "string"
                                ? (u.startTimeUnixNano = parseInt(a.startTimeUnixNano, 10))
                                : typeof a.startTimeUnixNano == "number"
                                  ? (u.startTimeUnixNano = a.startTimeUnixNano)
                                  : typeof a.startTimeUnixNano == "object" &&
                                    (u.startTimeUnixNano = new Qe.LongBits(
                                      a.startTimeUnixNano.low >>> 0,
                                      a.startTimeUnixNano.high >>> 0,
                                    ).toNumber())),
                          a.endTimeUnixNano != null &&
                            (Qe.Long
                              ? ((u.endTimeUnixNano = Qe.Long.fromValue(a.endTimeUnixNano)).unsigned = !1)
                              : typeof a.endTimeUnixNano == "string"
                                ? (u.endTimeUnixNano = parseInt(a.endTimeUnixNano, 10))
                                : typeof a.endTimeUnixNano == "number"
                                  ? (u.endTimeUnixNano = a.endTimeUnixNano)
                                  : typeof a.endTimeUnixNano == "object" &&
                                    (u.endTimeUnixNano = new Qe.LongBits(
                                      a.endTimeUnixNano.low >>> 0,
                                      a.endTimeUnixNano.high >>> 0,
                                    ).toNumber())),
                          a.attributes)
                        ) {
                          if (!Array.isArray(a.attributes))
                            throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: array expected");
                          u.attributes = [];
                          for (var c = 0; c < a.attributes.length; ++c) {
                            if (typeof a.attributes[c] != "object")
                              throw TypeError(".opentelemetry.proto.trace.v1.Span.attributes: object expected");
                            u.attributes[c] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(a.attributes[c]);
                          }
                        }
                        if (
                          (a.droppedAttributesCount != null &&
                            (u.droppedAttributesCount = a.droppedAttributesCount >>> 0),
                          a.events)
                        ) {
                          if (!Array.isArray(a.events))
                            throw TypeError(".opentelemetry.proto.trace.v1.Span.events: array expected");
                          u.events = [];
                          for (var c = 0; c < a.events.length; ++c) {
                            if (typeof a.events[c] != "object")
                              throw TypeError(".opentelemetry.proto.trace.v1.Span.events: object expected");
                            u.events[c] = Be.opentelemetry.proto.trace.v1.Span.Event.fromObject(a.events[c]);
                          }
                        }
                        if (
                          (a.droppedEventsCount != null && (u.droppedEventsCount = a.droppedEventsCount >>> 0), a.links)
                        ) {
                          if (!Array.isArray(a.links))
                            throw TypeError(".opentelemetry.proto.trace.v1.Span.links: array expected");
                          u.links = [];
                          for (var c = 0; c < a.links.length; ++c) {
                            if (typeof a.links[c] != "object")
                              throw TypeError(".opentelemetry.proto.trace.v1.Span.links: object expected");
                            u.links[c] = Be.opentelemetry.proto.trace.v1.Span.Link.fromObject(a.links[c]);
                          }
                        }
                        if (
                          (a.droppedLinksCount != null && (u.droppedLinksCount = a.droppedLinksCount >>> 0),
                          a.status != null)
                        ) {
                          if (typeof a.status != "object")
                            throw TypeError(".opentelemetry.proto.trace.v1.Span.status: object expected");
                          u.status = Be.opentelemetry.proto.trace.v1.Status.fromObject(a.status);
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && ((c.attributes = []), (c.events = []), (c.links = [])),
                          u.defaults)
                        ) {
                          if (
                            (u.bytes === String
                              ? (c.traceId = "")
                              : ((c.traceId = []), u.bytes !== Array && (c.traceId = Qe.newBuffer(c.traceId))),
                            u.bytes === String
                              ? (c.spanId = "")
                              : ((c.spanId = []), u.bytes !== Array && (c.spanId = Qe.newBuffer(c.spanId))),
                            (c.traceState = ""),
                            u.bytes === String
                              ? (c.parentSpanId = "")
                              : ((c.parentSpanId = []),
                                u.bytes !== Array && (c.parentSpanId = Qe.newBuffer(c.parentSpanId))),
                            (c.name = ""),
                            (c.kind = u.enums === String ? "SPAN_KIND_UNSPECIFIED" : 0),
                            Qe.Long)
                          ) {
                            var m = new Qe.Long(0, 0, !1);
                            c.startTimeUnixNano =
                              u.longs === String ? m.toString() : u.longs === Number ? m.toNumber() : m;
                          } else c.startTimeUnixNano = u.longs === String ? "0" : 0;
                          if (Qe.Long) {
                            var m = new Qe.Long(0, 0, !1);
                            c.endTimeUnixNano =
                              u.longs === String ? m.toString() : u.longs === Number ? m.toNumber() : m;
                          } else c.endTimeUnixNano = u.longs === String ? "0" : 0;
                          ((c.droppedAttributesCount = 0),
                            (c.droppedEventsCount = 0),
                            (c.droppedLinksCount = 0),
                            (c.status = null),
                            (c.flags = 0));
                        }
                        if (
                          (a.traceId != null &&
                            a.hasOwnProperty("traceId") &&
                            (c.traceId =
                              u.bytes === String
                                ? Qe.base64.encode(a.traceId, 0, a.traceId.length)
                                : u.bytes === Array
                                  ? Array.prototype.slice.call(a.traceId)
                                  : a.traceId),
                          a.spanId != null &&
                            a.hasOwnProperty("spanId") &&
                            (c.spanId =
                              u.bytes === String
                                ? Qe.base64.encode(a.spanId, 0, a.spanId.length)
                                : u.bytes === Array
                                  ? Array.prototype.slice.call(a.spanId)
                                  : a.spanId),
                          a.traceState != null && a.hasOwnProperty("traceState") && (c.traceState = a.traceState),
                          a.parentSpanId != null &&
                            a.hasOwnProperty("parentSpanId") &&
                            (c.parentSpanId =
                              u.bytes === String
                                ? Qe.base64.encode(a.parentSpanId, 0, a.parentSpanId.length)
                                : u.bytes === Array
                                  ? Array.prototype.slice.call(a.parentSpanId)
                                  : a.parentSpanId),
                          a.name != null && a.hasOwnProperty("name") && (c.name = a.name),
                          a.kind != null &&
                            a.hasOwnProperty("kind") &&
                            (c.kind =
                              u.enums === String
                                ? Be.opentelemetry.proto.trace.v1.Span.SpanKind[a.kind] === void 0
                                  ? a.kind
                                  : Be.opentelemetry.proto.trace.v1.Span.SpanKind[a.kind]
                                : a.kind),
                          a.startTimeUnixNano != null &&
                            a.hasOwnProperty("startTimeUnixNano") &&
                            (typeof a.startTimeUnixNano == "number"
                              ? (c.startTimeUnixNano =
                                  u.longs === String ? String(a.startTimeUnixNano) : a.startTimeUnixNano)
                              : (c.startTimeUnixNano =
                                  u.longs === String
                                    ? Qe.Long.prototype.toString.call(a.startTimeUnixNano)
                                    : u.longs === Number
                                      ? new Qe.LongBits(
                                          a.startTimeUnixNano.low >>> 0,
                                          a.startTimeUnixNano.high >>> 0,
                                        ).toNumber()
                                      : a.startTimeUnixNano)),
                          a.endTimeUnixNano != null &&
                            a.hasOwnProperty("endTimeUnixNano") &&
                            (typeof a.endTimeUnixNano == "number"
                              ? (c.endTimeUnixNano = u.longs === String ? String(a.endTimeUnixNano) : a.endTimeUnixNano)
                              : (c.endTimeUnixNano =
                                  u.longs === String
                                    ? Qe.Long.prototype.toString.call(a.endTimeUnixNano)
                                    : u.longs === Number
                                      ? new Qe.LongBits(
                                          a.endTimeUnixNano.low >>> 0,
                                          a.endTimeUnixNano.high >>> 0,
                                        ).toNumber()
                                      : a.endTimeUnixNano)),
                          a.attributes && a.attributes.length)
                        ) {
                          c.attributes = [];
                          for (var d = 0; d < a.attributes.length; ++d)
                            c.attributes[d] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(a.attributes[d], u);
                        }
                        if (
                          (a.droppedAttributesCount != null &&
                            a.hasOwnProperty("droppedAttributesCount") &&
                            (c.droppedAttributesCount = a.droppedAttributesCount),
                          a.events && a.events.length)
                        ) {
                          c.events = [];
                          for (var d = 0; d < a.events.length; ++d)
                            c.events[d] = Be.opentelemetry.proto.trace.v1.Span.Event.toObject(a.events[d], u);
                        }
                        if (
                          (a.droppedEventsCount != null &&
                            a.hasOwnProperty("droppedEventsCount") &&
                            (c.droppedEventsCount = a.droppedEventsCount),
                          a.links && a.links.length)
                        ) {
                          c.links = [];
                          for (var d = 0; d < a.links.length; ++d)
                            c.links[d] = Be.opentelemetry.proto.trace.v1.Span.Link.toObject(a.links[d], u);
                        }
                        return (
                          a.droppedLinksCount != null &&
                            a.hasOwnProperty("droppedLinksCount") &&
                            (c.droppedLinksCount = a.droppedLinksCount),
                          a.status != null &&
                            a.hasOwnProperty("status") &&
                            (c.status = Be.opentelemetry.proto.trace.v1.Status.toObject(a.status, u)),
                          a.flags != null && a.hasOwnProperty("flags") && (c.flags = a.flags),
                          c
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (a === void 0 && (a = "type.googleapis.com"), a + "/opentelemetry.proto.trace.v1.Span");
                      }),
                      (o.SpanKind = (function () {
                        var s = {},
                          a = Object.create(s);
                        return (
                          (a[(s[0] = "SPAN_KIND_UNSPECIFIED")] = 0),
                          (a[(s[1] = "SPAN_KIND_INTERNAL")] = 1),
                          (a[(s[2] = "SPAN_KIND_SERVER")] = 2),
                          (a[(s[3] = "SPAN_KIND_CLIENT")] = 3),
                          (a[(s[4] = "SPAN_KIND_PRODUCER")] = 4),
                          (a[(s[5] = "SPAN_KIND_CONSUMER")] = 5),
                          a
                        );
                      })()),
                      (o.Event = (function () {
                        function s(a) {
                          if (((this.attributes = []), a))
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.timeUnixNano = null),
                          (s.prototype.name = null),
                          (s.prototype.attributes = Qe.emptyArray),
                          (s.prototype.droppedAttributesCount = null),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            if (
                              (c || (c = Ms.create()),
                              u.timeUnixNano != null &&
                                Object.hasOwnProperty.call(u, "timeUnixNano") &&
                                c.uint32(9).fixed64(u.timeUnixNano),
                              u.name != null && Object.hasOwnProperty.call(u, "name") && c.uint32(18).string(u.name),
                              u.attributes != null && u.attributes.length)
                            )
                              for (var m = 0; m < u.attributes.length; ++m)
                                Be.opentelemetry.proto.common.v1.KeyValue.encode(
                                  u.attributes[m],
                                  c.uint32(26).fork(),
                                ).ldelim();
                            return (
                              u.droppedAttributesCount != null &&
                                Object.hasOwnProperty.call(u, "droppedAttributesCount") &&
                                c.uint32(32).uint32(u.droppedAttributesCount),
                              c
                            );
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.trace.v1.Span.Event();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  f.timeUnixNano = u.fixed64();
                                  break;
                                }
                                case 2: {
                                  f.name = u.string();
                                  break;
                                }
                                case 3: {
                                  ((f.attributes && f.attributes.length) || (f.attributes = []),
                                    f.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(u, u.uint32())));
                                  break;
                                }
                                case 4: {
                                  f.droppedAttributesCount = u.uint32();
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            if (typeof u != "object" || u === null) return "object expected";
                            if (
                              u.timeUnixNano != null &&
                              u.hasOwnProperty("timeUnixNano") &&
                              !Qe.isInteger(u.timeUnixNano) &&
                              !(u.timeUnixNano && Qe.isInteger(u.timeUnixNano.low) && Qe.isInteger(u.timeUnixNano.high))
                            )
                              return "timeUnixNano: integer|Long expected";
                            if (u.name != null && u.hasOwnProperty("name") && !Qe.isString(u.name))
                              return "name: string expected";
                            if (u.attributes != null && u.hasOwnProperty("attributes")) {
                              if (!Array.isArray(u.attributes)) return "attributes: array expected";
                              for (var c = 0; c < u.attributes.length; ++c) {
                                var m = Be.opentelemetry.proto.common.v1.KeyValue.verify(u.attributes[c]);
                                if (m) return "attributes." + m;
                              }
                            }
                            return u.droppedAttributesCount != null &&
                              u.hasOwnProperty("droppedAttributesCount") &&
                              !Qe.isInteger(u.droppedAttributesCount)
                              ? "droppedAttributesCount: integer expected"
                              : null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.trace.v1.Span.Event) return u;
                            var c = new Be.opentelemetry.proto.trace.v1.Span.Event();
                            if (
                              (u.timeUnixNano != null &&
                                (Qe.Long
                                  ? ((c.timeUnixNano = Qe.Long.fromValue(u.timeUnixNano)).unsigned = !1)
                                  : typeof u.timeUnixNano == "string"
                                    ? (c.timeUnixNano = parseInt(u.timeUnixNano, 10))
                                    : typeof u.timeUnixNano == "number"
                                      ? (c.timeUnixNano = u.timeUnixNano)
                                      : typeof u.timeUnixNano == "object" &&
                                        (c.timeUnixNano = new Qe.LongBits(
                                          u.timeUnixNano.low >>> 0,
                                          u.timeUnixNano.high >>> 0,
                                        ).toNumber())),
                              u.name != null && (c.name = String(u.name)),
                              u.attributes)
                            ) {
                              if (!Array.isArray(u.attributes))
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.Event.attributes: array expected");
                              c.attributes = [];
                              for (var m = 0; m < u.attributes.length; ++m) {
                                if (typeof u.attributes[m] != "object")
                                  throw TypeError(
                                    ".opentelemetry.proto.trace.v1.Span.Event.attributes: object expected",
                                  );
                                c.attributes[m] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(u.attributes[m]);
                              }
                            }
                            return (
                              u.droppedAttributesCount != null &&
                                (c.droppedAttributesCount = u.droppedAttributesCount >>> 0),
                              c
                            );
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            if (((c.arrays || c.defaults) && (m.attributes = []), c.defaults)) {
                              if (Qe.Long) {
                                var d = new Qe.Long(0, 0, !1);
                                m.timeUnixNano =
                                  c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                              } else m.timeUnixNano = c.longs === String ? "0" : 0;
                              ((m.name = ""), (m.droppedAttributesCount = 0));
                            }
                            if (
                              (u.timeUnixNano != null &&
                                u.hasOwnProperty("timeUnixNano") &&
                                (typeof u.timeUnixNano == "number"
                                  ? (m.timeUnixNano = c.longs === String ? String(u.timeUnixNano) : u.timeUnixNano)
                                  : (m.timeUnixNano =
                                      c.longs === String
                                        ? Qe.Long.prototype.toString.call(u.timeUnixNano)
                                        : c.longs === Number
                                          ? new Qe.LongBits(
                                              u.timeUnixNano.low >>> 0,
                                              u.timeUnixNano.high >>> 0,
                                            ).toNumber()
                                          : u.timeUnixNano)),
                              u.name != null && u.hasOwnProperty("name") && (m.name = u.name),
                              u.attributes && u.attributes.length)
                            ) {
                              m.attributes = [];
                              for (var f = 0; f < u.attributes.length; ++f)
                                m.attributes[f] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(
                                  u.attributes[f],
                                  c,
                                );
                            }
                            return (
                              u.droppedAttributesCount != null &&
                                u.hasOwnProperty("droppedAttributesCount") &&
                                (m.droppedAttributesCount = u.droppedAttributesCount),
                              m
                            );
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.trace.v1.Span.Event"
                            );
                          }),
                          s
                        );
                      })()),
                      (o.Link = (function () {
                        function s(a) {
                          if (((this.attributes = []), a))
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.traceId = null),
                          (s.prototype.spanId = null),
                          (s.prototype.traceState = null),
                          (s.prototype.attributes = Qe.emptyArray),
                          (s.prototype.droppedAttributesCount = null),
                          (s.prototype.flags = null),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            if (
                              (c || (c = Ms.create()),
                              u.traceId != null &&
                                Object.hasOwnProperty.call(u, "traceId") &&
                                c.uint32(10).bytes(u.traceId),
                              u.spanId != null &&
                                Object.hasOwnProperty.call(u, "spanId") &&
                                c.uint32(18).bytes(u.spanId),
                              u.traceState != null &&
                                Object.hasOwnProperty.call(u, "traceState") &&
                                c.uint32(26).string(u.traceState),
                              u.attributes != null && u.attributes.length)
                            )
                              for (var m = 0; m < u.attributes.length; ++m)
                                Be.opentelemetry.proto.common.v1.KeyValue.encode(
                                  u.attributes[m],
                                  c.uint32(34).fork(),
                                ).ldelim();
                            return (
                              u.droppedAttributesCount != null &&
                                Object.hasOwnProperty.call(u, "droppedAttributesCount") &&
                                c.uint32(40).uint32(u.droppedAttributesCount),
                              u.flags != null &&
                                Object.hasOwnProperty.call(u, "flags") &&
                                c.uint32(53).fixed32(u.flags),
                              c
                            );
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.trace.v1.Span.Link();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  f.traceId = u.bytes();
                                  break;
                                }
                                case 2: {
                                  f.spanId = u.bytes();
                                  break;
                                }
                                case 3: {
                                  f.traceState = u.string();
                                  break;
                                }
                                case 4: {
                                  ((f.attributes && f.attributes.length) || (f.attributes = []),
                                    f.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(u, u.uint32())));
                                  break;
                                }
                                case 5: {
                                  f.droppedAttributesCount = u.uint32();
                                  break;
                                }
                                case 6: {
                                  f.flags = u.fixed32();
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            if (typeof u != "object" || u === null) return "object expected";
                            if (
                              u.traceId != null &&
                              u.hasOwnProperty("traceId") &&
                              !((u.traceId && typeof u.traceId.length == "number") || Qe.isString(u.traceId))
                            )
                              return "traceId: buffer expected";
                            if (
                              u.spanId != null &&
                              u.hasOwnProperty("spanId") &&
                              !((u.spanId && typeof u.spanId.length == "number") || Qe.isString(u.spanId))
                            )
                              return "spanId: buffer expected";
                            if (u.traceState != null && u.hasOwnProperty("traceState") && !Qe.isString(u.traceState))
                              return "traceState: string expected";
                            if (u.attributes != null && u.hasOwnProperty("attributes")) {
                              if (!Array.isArray(u.attributes)) return "attributes: array expected";
                              for (var c = 0; c < u.attributes.length; ++c) {
                                var m = Be.opentelemetry.proto.common.v1.KeyValue.verify(u.attributes[c]);
                                if (m) return "attributes." + m;
                              }
                            }
                            return u.droppedAttributesCount != null &&
                              u.hasOwnProperty("droppedAttributesCount") &&
                              !Qe.isInteger(u.droppedAttributesCount)
                              ? "droppedAttributesCount: integer expected"
                              : u.flags != null && u.hasOwnProperty("flags") && !Qe.isInteger(u.flags)
                                ? "flags: integer expected"
                                : null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.trace.v1.Span.Link) return u;
                            var c = new Be.opentelemetry.proto.trace.v1.Span.Link();
                            if (
                              (u.traceId != null &&
                                (typeof u.traceId == "string"
                                  ? Qe.base64.decode(
                                      u.traceId,
                                      (c.traceId = Qe.newBuffer(Qe.base64.length(u.traceId))),
                                      0,
                                    )
                                  : u.traceId.length >= 0 && (c.traceId = u.traceId)),
                              u.spanId != null &&
                                (typeof u.spanId == "string"
                                  ? Qe.base64.decode(u.spanId, (c.spanId = Qe.newBuffer(Qe.base64.length(u.spanId))), 0)
                                  : u.spanId.length >= 0 && (c.spanId = u.spanId)),
                              u.traceState != null && (c.traceState = String(u.traceState)),
                              u.attributes)
                            ) {
                              if (!Array.isArray(u.attributes))
                                throw TypeError(".opentelemetry.proto.trace.v1.Span.Link.attributes: array expected");
                              c.attributes = [];
                              for (var m = 0; m < u.attributes.length; ++m) {
                                if (typeof u.attributes[m] != "object")
                                  throw TypeError(
                                    ".opentelemetry.proto.trace.v1.Span.Link.attributes: object expected",
                                  );
                                c.attributes[m] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(u.attributes[m]);
                              }
                            }
                            return (
                              u.droppedAttributesCount != null &&
                                (c.droppedAttributesCount = u.droppedAttributesCount >>> 0),
                              u.flags != null && (c.flags = u.flags >>> 0),
                              c
                            );
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            if (
                              ((c.arrays || c.defaults) && (m.attributes = []),
                              c.defaults &&
                                (c.bytes === String
                                  ? (m.traceId = "")
                                  : ((m.traceId = []), c.bytes !== Array && (m.traceId = Qe.newBuffer(m.traceId))),
                                c.bytes === String
                                  ? (m.spanId = "")
                                  : ((m.spanId = []), c.bytes !== Array && (m.spanId = Qe.newBuffer(m.spanId))),
                                (m.traceState = ""),
                                (m.droppedAttributesCount = 0),
                                (m.flags = 0)),
                              u.traceId != null &&
                                u.hasOwnProperty("traceId") &&
                                (m.traceId =
                                  c.bytes === String
                                    ? Qe.base64.encode(u.traceId, 0, u.traceId.length)
                                    : c.bytes === Array
                                      ? Array.prototype.slice.call(u.traceId)
                                      : u.traceId),
                              u.spanId != null &&
                                u.hasOwnProperty("spanId") &&
                                (m.spanId =
                                  c.bytes === String
                                    ? Qe.base64.encode(u.spanId, 0, u.spanId.length)
                                    : c.bytes === Array
                                      ? Array.prototype.slice.call(u.spanId)
                                      : u.spanId),
                              u.traceState != null && u.hasOwnProperty("traceState") && (m.traceState = u.traceState),
                              u.attributes && u.attributes.length)
                            ) {
                              m.attributes = [];
                              for (var d = 0; d < u.attributes.length; ++d)
                                m.attributes[d] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(
                                  u.attributes[d],
                                  c,
                                );
                            }
                            return (
                              u.droppedAttributesCount != null &&
                                u.hasOwnProperty("droppedAttributesCount") &&
                                (m.droppedAttributesCount = u.droppedAttributesCount),
                              u.flags != null && u.hasOwnProperty("flags") && (m.flags = u.flags),
                              m
                            );
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.trace.v1.Span.Link"
                            );
                          }),
                          s
                        );
                      })()),
                      o
                    );
                  })()),
                  (n.Status = (function () {
                    function o(s) {
                      if (s)
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.message = null),
                      (o.prototype.code = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        return (
                          u || (u = Ms.create()),
                          a.message != null &&
                            Object.hasOwnProperty.call(a, "message") &&
                            u.uint32(18).string(a.message),
                          a.code != null && Object.hasOwnProperty.call(a, "code") && u.uint32(24).int32(a.code),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u, d = new Be.opentelemetry.proto.trace.v1.Status();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 2: {
                              d.message = a.string();
                              break;
                            }
                            case 3: {
                              d.code = a.int32();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.message != null && a.hasOwnProperty("message") && !Qe.isString(a.message))
                          return "message: string expected";
                        if (a.code != null && a.hasOwnProperty("code"))
                          switch (a.code) {
                            default:
                              return "code: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                              break;
                          }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.trace.v1.Status) return a;
                        var u = new Be.opentelemetry.proto.trace.v1.Status();
                        switch ((a.message != null && (u.message = String(a.message)), a.code)) {
                          default:
                            if (typeof a.code == "number") {
                              u.code = a.code;
                              break;
                            }
                            break;
                          case "STATUS_CODE_UNSET":
                          case 0:
                            u.code = 0;
                            break;
                          case "STATUS_CODE_OK":
                          case 1:
                            u.code = 1;
                            break;
                          case "STATUS_CODE_ERROR":
                          case 2:
                            u.code = 2;
                            break;
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        return (
                          u.defaults && ((c.message = ""), (c.code = u.enums === String ? "STATUS_CODE_UNSET" : 0)),
                          a.message != null && a.hasOwnProperty("message") && (c.message = a.message),
                          a.code != null &&
                            a.hasOwnProperty("code") &&
                            (c.code =
                              u.enums === String
                                ? Be.opentelemetry.proto.trace.v1.Status.StatusCode[a.code] === void 0
                                  ? a.code
                                  : Be.opentelemetry.proto.trace.v1.Status.StatusCode[a.code]
                                : a.code),
                          c
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.trace.v1.Status"
                        );
                      }),
                      (o.StatusCode = (function () {
                        var s = {},
                          a = Object.create(s);
                        return (
                          (a[(s[0] = "STATUS_CODE_UNSET")] = 0),
                          (a[(s[1] = "STATUS_CODE_OK")] = 1),
                          (a[(s[2] = "STATUS_CODE_ERROR")] = 2),
                          a
                        );
                      })()),
                      o
                    );
                  })()),
                  (n.SpanFlags = (function () {
                    var o = {},
                      s = Object.create(o);
                    return (
                      (s[(o[0] = "SPAN_FLAGS_DO_NOT_USE")] = 0),
                      (s[(o[255] = "SPAN_FLAGS_TRACE_FLAGS_MASK")] = 255),
                      (s[(o[256] = "SPAN_FLAGS_CONTEXT_HAS_IS_REMOTE_MASK")] = 256),
                      (s[(o[512] = "SPAN_FLAGS_CONTEXT_IS_REMOTE_MASK")] = 512),
                      s
                    );
                  })()),
                  n
                );
              })()),
              r
            );
          })()),
          (e.collector = (function () {
            var r = {};
            return (
              (r.trace = (function () {
                var n = {};
                return (
                  (n.v1 = (function () {
                    var o = {};
                    return (
                      (o.TraceService = (function () {
                        function s(a, u, c) {
                          Ao.rpc.Service.call(this, a, u, c);
                        }
                        return (
                          ((s.prototype = Object.create(Ao.rpc.Service.prototype)).constructor = s),
                          (s.create = function (u, c, m) {
                            return new this(u, c, m);
                          }),
                          Object.defineProperty(
                            (s.prototype.export = function a(u, c) {
                              return this.rpcCall(
                                a,
                                Be.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest,
                                Be.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse,
                                u,
                                c,
                              );
                            }),
                            "name",
                            { value: "Export" },
                          ),
                          s
                        );
                      })()),
                      (o.ExportTraceServiceRequest = (function () {
                        function s(a) {
                          if (((this.resourceSpans = []), a))
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.resourceSpans = Qe.emptyArray),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            if ((c || (c = Ms.create()), u.resourceSpans != null && u.resourceSpans.length))
                              for (var m = 0; m < u.resourceSpans.length; ++m)
                                Be.opentelemetry.proto.trace.v1.ResourceSpans.encode(
                                  u.resourceSpans[m],
                                  c.uint32(10).fork(),
                                ).ldelim();
                            return c;
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  ((f.resourceSpans && f.resourceSpans.length) || (f.resourceSpans = []),
                                    f.resourceSpans.push(
                                      Be.opentelemetry.proto.trace.v1.ResourceSpans.decode(u, u.uint32()),
                                    ));
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            if (typeof u != "object" || u === null) return "object expected";
                            if (u.resourceSpans != null && u.hasOwnProperty("resourceSpans")) {
                              if (!Array.isArray(u.resourceSpans)) return "resourceSpans: array expected";
                              for (var c = 0; c < u.resourceSpans.length; ++c) {
                                var m = Be.opentelemetry.proto.trace.v1.ResourceSpans.verify(u.resourceSpans[c]);
                                if (m) return "resourceSpans." + m;
                              }
                            }
                            return null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest)
                              return u;
                            var c = new Be.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest();
                            if (u.resourceSpans) {
                              if (!Array.isArray(u.resourceSpans))
                                throw TypeError(
                                  ".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: array expected",
                                );
                              c.resourceSpans = [];
                              for (var m = 0; m < u.resourceSpans.length; ++m) {
                                if (typeof u.resourceSpans[m] != "object")
                                  throw TypeError(
                                    ".opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest.resourceSpans: object expected",
                                  );
                                c.resourceSpans[m] = Be.opentelemetry.proto.trace.v1.ResourceSpans.fromObject(
                                  u.resourceSpans[m],
                                );
                              }
                            }
                            return c;
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            if (
                              ((c.arrays || c.defaults) && (m.resourceSpans = []),
                              u.resourceSpans && u.resourceSpans.length)
                            ) {
                              m.resourceSpans = [];
                              for (var d = 0; d < u.resourceSpans.length; ++d)
                                m.resourceSpans[d] = Be.opentelemetry.proto.trace.v1.ResourceSpans.toObject(
                                  u.resourceSpans[d],
                                  c,
                                );
                            }
                            return m;
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest"
                            );
                          }),
                          s
                        );
                      })()),
                      (o.ExportTraceServiceResponse = (function () {
                        function s(a) {
                          if (a)
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.partialSuccess = null),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            return (
                              c || (c = Ms.create()),
                              u.partialSuccess != null &&
                                Object.hasOwnProperty.call(u, "partialSuccess") &&
                                Be.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.encode(
                                  u.partialSuccess,
                                  c.uint32(10).fork(),
                                ).ldelim(),
                              c
                            );
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  f.partialSuccess =
                                    Be.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.decode(
                                      u,
                                      u.uint32(),
                                    );
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            if (typeof u != "object" || u === null) return "object expected";
                            if (u.partialSuccess != null && u.hasOwnProperty("partialSuccess")) {
                              var c = Be.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.verify(
                                u.partialSuccess,
                              );
                              if (c) return "partialSuccess." + c;
                            }
                            return null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse)
                              return u;
                            var c = new Be.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse();
                            if (u.partialSuccess != null) {
                              if (typeof u.partialSuccess != "object")
                                throw TypeError(
                                  ".opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse.partialSuccess: object expected",
                                );
                              c.partialSuccess =
                                Be.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.fromObject(
                                  u.partialSuccess,
                                );
                            }
                            return c;
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            return (
                              c.defaults && (m.partialSuccess = null),
                              u.partialSuccess != null &&
                                u.hasOwnProperty("partialSuccess") &&
                                (m.partialSuccess =
                                  Be.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess.toObject(
                                    u.partialSuccess,
                                    c,
                                  )),
                              m
                            );
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse"
                            );
                          }),
                          s
                        );
                      })()),
                      (o.ExportTracePartialSuccess = (function () {
                        function s(a) {
                          if (a)
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.rejectedSpans = null),
                          (s.prototype.errorMessage = null),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            return (
                              c || (c = Ms.create()),
                              u.rejectedSpans != null &&
                                Object.hasOwnProperty.call(u, "rejectedSpans") &&
                                c.uint32(8).int64(u.rejectedSpans),
                              u.errorMessage != null &&
                                Object.hasOwnProperty.call(u, "errorMessage") &&
                                c.uint32(18).string(u.errorMessage),
                              c
                            );
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  f.rejectedSpans = u.int64();
                                  break;
                                }
                                case 2: {
                                  f.errorMessage = u.string();
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            return typeof u != "object" || u === null
                              ? "object expected"
                              : u.rejectedSpans != null &&
                                  u.hasOwnProperty("rejectedSpans") &&
                                  !Qe.isInteger(u.rejectedSpans) &&
                                  !(
                                    u.rejectedSpans &&
                                    Qe.isInteger(u.rejectedSpans.low) &&
                                    Qe.isInteger(u.rejectedSpans.high)
                                  )
                                ? "rejectedSpans: integer|Long expected"
                                : u.errorMessage != null &&
                                    u.hasOwnProperty("errorMessage") &&
                                    !Qe.isString(u.errorMessage)
                                  ? "errorMessage: string expected"
                                  : null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess)
                              return u;
                            var c = new Be.opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess();
                            return (
                              u.rejectedSpans != null &&
                                (Qe.Long
                                  ? ((c.rejectedSpans = Qe.Long.fromValue(u.rejectedSpans)).unsigned = !1)
                                  : typeof u.rejectedSpans == "string"
                                    ? (c.rejectedSpans = parseInt(u.rejectedSpans, 10))
                                    : typeof u.rejectedSpans == "number"
                                      ? (c.rejectedSpans = u.rejectedSpans)
                                      : typeof u.rejectedSpans == "object" &&
                                        (c.rejectedSpans = new Qe.LongBits(
                                          u.rejectedSpans.low >>> 0,
                                          u.rejectedSpans.high >>> 0,
                                        ).toNumber())),
                              u.errorMessage != null && (c.errorMessage = String(u.errorMessage)),
                              c
                            );
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            if (c.defaults) {
                              if (Qe.Long) {
                                var d = new Qe.Long(0, 0, !1);
                                m.rejectedSpans =
                                  c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                              } else m.rejectedSpans = c.longs === String ? "0" : 0;
                              m.errorMessage = "";
                            }
                            return (
                              u.rejectedSpans != null &&
                                u.hasOwnProperty("rejectedSpans") &&
                                (typeof u.rejectedSpans == "number"
                                  ? (m.rejectedSpans = c.longs === String ? String(u.rejectedSpans) : u.rejectedSpans)
                                  : (m.rejectedSpans =
                                      c.longs === String
                                        ? Qe.Long.prototype.toString.call(u.rejectedSpans)
                                        : c.longs === Number
                                          ? new Qe.LongBits(
                                              u.rejectedSpans.low >>> 0,
                                              u.rejectedSpans.high >>> 0,
                                            ).toNumber()
                                          : u.rejectedSpans)),
                              u.errorMessage != null &&
                                u.hasOwnProperty("errorMessage") &&
                                (m.errorMessage = u.errorMessage),
                              m
                            );
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.collector.trace.v1.ExportTracePartialSuccess"
                            );
                          }),
                          s
                        );
                      })()),
                      o
                    );
                  })()),
                  n
                );
              })()),
              (r.metrics = (function () {
                var n = {};
                return (
                  (n.v1 = (function () {
                    var o = {};
                    return (
                      (o.MetricsService = (function () {
                        function s(a, u, c) {
                          Ao.rpc.Service.call(this, a, u, c);
                        }
                        return (
                          ((s.prototype = Object.create(Ao.rpc.Service.prototype)).constructor = s),
                          (s.create = function (u, c, m) {
                            return new this(u, c, m);
                          }),
                          Object.defineProperty(
                            (s.prototype.export = function a(u, c) {
                              return this.rpcCall(
                                a,
                                Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest,
                                Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse,
                                u,
                                c,
                              );
                            }),
                            "name",
                            { value: "Export" },
                          ),
                          s
                        );
                      })()),
                      (o.ExportMetricsServiceRequest = (function () {
                        function s(a) {
                          if (((this.resourceMetrics = []), a))
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.resourceMetrics = Qe.emptyArray),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            if ((c || (c = Ms.create()), u.resourceMetrics != null && u.resourceMetrics.length))
                              for (var m = 0; m < u.resourceMetrics.length; ++m)
                                Be.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(
                                  u.resourceMetrics[m],
                                  c.uint32(10).fork(),
                                ).ldelim();
                            return c;
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  ((f.resourceMetrics && f.resourceMetrics.length) || (f.resourceMetrics = []),
                                    f.resourceMetrics.push(
                                      Be.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(u, u.uint32()),
                                    ));
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            if (typeof u != "object" || u === null) return "object expected";
                            if (u.resourceMetrics != null && u.hasOwnProperty("resourceMetrics")) {
                              if (!Array.isArray(u.resourceMetrics)) return "resourceMetrics: array expected";
                              for (var c = 0; c < u.resourceMetrics.length; ++c) {
                                var m = Be.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(u.resourceMetrics[c]);
                                if (m) return "resourceMetrics." + m;
                              }
                            }
                            return null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest)
                              return u;
                            var c = new Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest();
                            if (u.resourceMetrics) {
                              if (!Array.isArray(u.resourceMetrics))
                                throw TypeError(
                                  ".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: array expected",
                                );
                              c.resourceMetrics = [];
                              for (var m = 0; m < u.resourceMetrics.length; ++m) {
                                if (typeof u.resourceMetrics[m] != "object")
                                  throw TypeError(
                                    ".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest.resourceMetrics: object expected",
                                  );
                                c.resourceMetrics[m] = Be.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(
                                  u.resourceMetrics[m],
                                );
                              }
                            }
                            return c;
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            if (
                              ((c.arrays || c.defaults) && (m.resourceMetrics = []),
                              u.resourceMetrics && u.resourceMetrics.length)
                            ) {
                              m.resourceMetrics = [];
                              for (var d = 0; d < u.resourceMetrics.length; ++d)
                                m.resourceMetrics[d] = Be.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(
                                  u.resourceMetrics[d],
                                  c,
                                );
                            }
                            return m;
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest"
                            );
                          }),
                          s
                        );
                      })()),
                      (o.ExportMetricsServiceResponse = (function () {
                        function s(a) {
                          if (a)
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.partialSuccess = null),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            return (
                              c || (c = Ms.create()),
                              u.partialSuccess != null &&
                                Object.hasOwnProperty.call(u, "partialSuccess") &&
                                Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.encode(
                                  u.partialSuccess,
                                  c.uint32(10).fork(),
                                ).ldelim(),
                              c
                            );
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  f.partialSuccess =
                                    Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.decode(
                                      u,
                                      u.uint32(),
                                    );
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            if (typeof u != "object" || u === null) return "object expected";
                            if (u.partialSuccess != null && u.hasOwnProperty("partialSuccess")) {
                              var c = Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.verify(
                                u.partialSuccess,
                              );
                              if (c) return "partialSuccess." + c;
                            }
                            return null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse)
                              return u;
                            var c = new Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse();
                            if (u.partialSuccess != null) {
                              if (typeof u.partialSuccess != "object")
                                throw TypeError(
                                  ".opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse.partialSuccess: object expected",
                                );
                              c.partialSuccess =
                                Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.fromObject(
                                  u.partialSuccess,
                                );
                            }
                            return c;
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            return (
                              c.defaults && (m.partialSuccess = null),
                              u.partialSuccess != null &&
                                u.hasOwnProperty("partialSuccess") &&
                                (m.partialSuccess =
                                  Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess.toObject(
                                    u.partialSuccess,
                                    c,
                                  )),
                              m
                            );
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse"
                            );
                          }),
                          s
                        );
                      })()),
                      (o.ExportMetricsPartialSuccess = (function () {
                        function s(a) {
                          if (a)
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.rejectedDataPoints = null),
                          (s.prototype.errorMessage = null),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            return (
                              c || (c = Ms.create()),
                              u.rejectedDataPoints != null &&
                                Object.hasOwnProperty.call(u, "rejectedDataPoints") &&
                                c.uint32(8).int64(u.rejectedDataPoints),
                              u.errorMessage != null &&
                                Object.hasOwnProperty.call(u, "errorMessage") &&
                                c.uint32(18).string(u.errorMessage),
                              c
                            );
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  f.rejectedDataPoints = u.int64();
                                  break;
                                }
                                case 2: {
                                  f.errorMessage = u.string();
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            return typeof u != "object" || u === null
                              ? "object expected"
                              : u.rejectedDataPoints != null &&
                                  u.hasOwnProperty("rejectedDataPoints") &&
                                  !Qe.isInteger(u.rejectedDataPoints) &&
                                  !(
                                    u.rejectedDataPoints &&
                                    Qe.isInteger(u.rejectedDataPoints.low) &&
                                    Qe.isInteger(u.rejectedDataPoints.high)
                                  )
                                ? "rejectedDataPoints: integer|Long expected"
                                : u.errorMessage != null &&
                                    u.hasOwnProperty("errorMessage") &&
                                    !Qe.isString(u.errorMessage)
                                  ? "errorMessage: string expected"
                                  : null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess)
                              return u;
                            var c = new Be.opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess();
                            return (
                              u.rejectedDataPoints != null &&
                                (Qe.Long
                                  ? ((c.rejectedDataPoints = Qe.Long.fromValue(u.rejectedDataPoints)).unsigned = !1)
                                  : typeof u.rejectedDataPoints == "string"
                                    ? (c.rejectedDataPoints = parseInt(u.rejectedDataPoints, 10))
                                    : typeof u.rejectedDataPoints == "number"
                                      ? (c.rejectedDataPoints = u.rejectedDataPoints)
                                      : typeof u.rejectedDataPoints == "object" &&
                                        (c.rejectedDataPoints = new Qe.LongBits(
                                          u.rejectedDataPoints.low >>> 0,
                                          u.rejectedDataPoints.high >>> 0,
                                        ).toNumber())),
                              u.errorMessage != null && (c.errorMessage = String(u.errorMessage)),
                              c
                            );
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            if (c.defaults) {
                              if (Qe.Long) {
                                var d = new Qe.Long(0, 0, !1);
                                m.rejectedDataPoints =
                                  c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                              } else m.rejectedDataPoints = c.longs === String ? "0" : 0;
                              m.errorMessage = "";
                            }
                            return (
                              u.rejectedDataPoints != null &&
                                u.hasOwnProperty("rejectedDataPoints") &&
                                (typeof u.rejectedDataPoints == "number"
                                  ? (m.rejectedDataPoints =
                                      c.longs === String ? String(u.rejectedDataPoints) : u.rejectedDataPoints)
                                  : (m.rejectedDataPoints =
                                      c.longs === String
                                        ? Qe.Long.prototype.toString.call(u.rejectedDataPoints)
                                        : c.longs === Number
                                          ? new Qe.LongBits(
                                              u.rejectedDataPoints.low >>> 0,
                                              u.rejectedDataPoints.high >>> 0,
                                            ).toNumber()
                                          : u.rejectedDataPoints)),
                              u.errorMessage != null &&
                                u.hasOwnProperty("errorMessage") &&
                                (m.errorMessage = u.errorMessage),
                              m
                            );
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.collector.metrics.v1.ExportMetricsPartialSuccess"
                            );
                          }),
                          s
                        );
                      })()),
                      o
                    );
                  })()),
                  n
                );
              })()),
              (r.logs = (function () {
                var n = {};
                return (
                  (n.v1 = (function () {
                    var o = {};
                    return (
                      (o.LogsService = (function () {
                        function s(a, u, c) {
                          Ao.rpc.Service.call(this, a, u, c);
                        }
                        return (
                          ((s.prototype = Object.create(Ao.rpc.Service.prototype)).constructor = s),
                          (s.create = function (u, c, m) {
                            return new this(u, c, m);
                          }),
                          Object.defineProperty(
                            (s.prototype.export = function a(u, c) {
                              return this.rpcCall(
                                a,
                                Be.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest,
                                Be.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse,
                                u,
                                c,
                              );
                            }),
                            "name",
                            { value: "Export" },
                          ),
                          s
                        );
                      })()),
                      (o.ExportLogsServiceRequest = (function () {
                        function s(a) {
                          if (((this.resourceLogs = []), a))
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.resourceLogs = Qe.emptyArray),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            if ((c || (c = Ms.create()), u.resourceLogs != null && u.resourceLogs.length))
                              for (var m = 0; m < u.resourceLogs.length; ++m)
                                Be.opentelemetry.proto.logs.v1.ResourceLogs.encode(
                                  u.resourceLogs[m],
                                  c.uint32(10).fork(),
                                ).ldelim();
                            return c;
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  ((f.resourceLogs && f.resourceLogs.length) || (f.resourceLogs = []),
                                    f.resourceLogs.push(
                                      Be.opentelemetry.proto.logs.v1.ResourceLogs.decode(u, u.uint32()),
                                    ));
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            if (typeof u != "object" || u === null) return "object expected";
                            if (u.resourceLogs != null && u.hasOwnProperty("resourceLogs")) {
                              if (!Array.isArray(u.resourceLogs)) return "resourceLogs: array expected";
                              for (var c = 0; c < u.resourceLogs.length; ++c) {
                                var m = Be.opentelemetry.proto.logs.v1.ResourceLogs.verify(u.resourceLogs[c]);
                                if (m) return "resourceLogs." + m;
                              }
                            }
                            return null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest)
                              return u;
                            var c = new Be.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest();
                            if (u.resourceLogs) {
                              if (!Array.isArray(u.resourceLogs))
                                throw TypeError(
                                  ".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: array expected",
                                );
                              c.resourceLogs = [];
                              for (var m = 0; m < u.resourceLogs.length; ++m) {
                                if (typeof u.resourceLogs[m] != "object")
                                  throw TypeError(
                                    ".opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest.resourceLogs: object expected",
                                  );
                                c.resourceLogs[m] = Be.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(
                                  u.resourceLogs[m],
                                );
                              }
                            }
                            return c;
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            if (
                              ((c.arrays || c.defaults) && (m.resourceLogs = []),
                              u.resourceLogs && u.resourceLogs.length)
                            ) {
                              m.resourceLogs = [];
                              for (var d = 0; d < u.resourceLogs.length; ++d)
                                m.resourceLogs[d] = Be.opentelemetry.proto.logs.v1.ResourceLogs.toObject(
                                  u.resourceLogs[d],
                                  c,
                                );
                            }
                            return m;
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest"
                            );
                          }),
                          s
                        );
                      })()),
                      (o.ExportLogsServiceResponse = (function () {
                        function s(a) {
                          if (a)
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.partialSuccess = null),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            return (
                              c || (c = Ms.create()),
                              u.partialSuccess != null &&
                                Object.hasOwnProperty.call(u, "partialSuccess") &&
                                Be.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.encode(
                                  u.partialSuccess,
                                  c.uint32(10).fork(),
                                ).ldelim(),
                              c
                            );
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  f.partialSuccess =
                                    Be.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.decode(
                                      u,
                                      u.uint32(),
                                    );
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            if (typeof u != "object" || u === null) return "object expected";
                            if (u.partialSuccess != null && u.hasOwnProperty("partialSuccess")) {
                              var c = Be.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.verify(
                                u.partialSuccess,
                              );
                              if (c) return "partialSuccess." + c;
                            }
                            return null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse)
                              return u;
                            var c = new Be.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse();
                            if (u.partialSuccess != null) {
                              if (typeof u.partialSuccess != "object")
                                throw TypeError(
                                  ".opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse.partialSuccess: object expected",
                                );
                              c.partialSuccess =
                                Be.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.fromObject(
                                  u.partialSuccess,
                                );
                            }
                            return c;
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            return (
                              c.defaults && (m.partialSuccess = null),
                              u.partialSuccess != null &&
                                u.hasOwnProperty("partialSuccess") &&
                                (m.partialSuccess =
                                  Be.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess.toObject(
                                    u.partialSuccess,
                                    c,
                                  )),
                              m
                            );
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse"
                            );
                          }),
                          s
                        );
                      })()),
                      (o.ExportLogsPartialSuccess = (function () {
                        function s(a) {
                          if (a)
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.rejectedLogRecords = null),
                          (s.prototype.errorMessage = null),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            return (
                              c || (c = Ms.create()),
                              u.rejectedLogRecords != null &&
                                Object.hasOwnProperty.call(u, "rejectedLogRecords") &&
                                c.uint32(8).int64(u.rejectedLogRecords),
                              u.errorMessage != null &&
                                Object.hasOwnProperty.call(u, "errorMessage") &&
                                c.uint32(18).string(u.errorMessage),
                              c
                            );
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  f.rejectedLogRecords = u.int64();
                                  break;
                                }
                                case 2: {
                                  f.errorMessage = u.string();
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            return typeof u != "object" || u === null
                              ? "object expected"
                              : u.rejectedLogRecords != null &&
                                  u.hasOwnProperty("rejectedLogRecords") &&
                                  !Qe.isInteger(u.rejectedLogRecords) &&
                                  !(
                                    u.rejectedLogRecords &&
                                    Qe.isInteger(u.rejectedLogRecords.low) &&
                                    Qe.isInteger(u.rejectedLogRecords.high)
                                  )
                                ? "rejectedLogRecords: integer|Long expected"
                                : u.errorMessage != null &&
                                    u.hasOwnProperty("errorMessage") &&
                                    !Qe.isString(u.errorMessage)
                                  ? "errorMessage: string expected"
                                  : null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess)
                              return u;
                            var c = new Be.opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess();
                            return (
                              u.rejectedLogRecords != null &&
                                (Qe.Long
                                  ? ((c.rejectedLogRecords = Qe.Long.fromValue(u.rejectedLogRecords)).unsigned = !1)
                                  : typeof u.rejectedLogRecords == "string"
                                    ? (c.rejectedLogRecords = parseInt(u.rejectedLogRecords, 10))
                                    : typeof u.rejectedLogRecords == "number"
                                      ? (c.rejectedLogRecords = u.rejectedLogRecords)
                                      : typeof u.rejectedLogRecords == "object" &&
                                        (c.rejectedLogRecords = new Qe.LongBits(
                                          u.rejectedLogRecords.low >>> 0,
                                          u.rejectedLogRecords.high >>> 0,
                                        ).toNumber())),
                              u.errorMessage != null && (c.errorMessage = String(u.errorMessage)),
                              c
                            );
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            if (c.defaults) {
                              if (Qe.Long) {
                                var d = new Qe.Long(0, 0, !1);
                                m.rejectedLogRecords =
                                  c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                              } else m.rejectedLogRecords = c.longs === String ? "0" : 0;
                              m.errorMessage = "";
                            }
                            return (
                              u.rejectedLogRecords != null &&
                                u.hasOwnProperty("rejectedLogRecords") &&
                                (typeof u.rejectedLogRecords == "number"
                                  ? (m.rejectedLogRecords =
                                      c.longs === String ? String(u.rejectedLogRecords) : u.rejectedLogRecords)
                                  : (m.rejectedLogRecords =
                                      c.longs === String
                                        ? Qe.Long.prototype.toString.call(u.rejectedLogRecords)
                                        : c.longs === Number
                                          ? new Qe.LongBits(
                                              u.rejectedLogRecords.low >>> 0,
                                              u.rejectedLogRecords.high >>> 0,
                                            ).toNumber()
                                          : u.rejectedLogRecords)),
                              u.errorMessage != null &&
                                u.hasOwnProperty("errorMessage") &&
                                (m.errorMessage = u.errorMessage),
                              m
                            );
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.collector.logs.v1.ExportLogsPartialSuccess"
                            );
                          }),
                          s
                        );
                      })()),
                      o
                    );
                  })()),
                  n
                );
              })()),
              r
            );
          })()),
          (e.metrics = (function () {
            var r = {};
            return (
              (r.v1 = (function () {
                var n = {};
                return (
                  (n.MetricsData = (function () {
                    function o(s) {
                      if (((this.resourceMetrics = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.resourceMetrics = Qe.emptyArray),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.resourceMetrics != null && a.resourceMetrics.length))
                          for (var c = 0; c < a.resourceMetrics.length; ++c)
                            Be.opentelemetry.proto.metrics.v1.ResourceMetrics.encode(
                              a.resourceMetrics[c],
                              u.uint32(10).fork(),
                            ).ldelim();
                        return u;
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.metrics.v1.MetricsData();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.resourceMetrics && d.resourceMetrics.length) || (d.resourceMetrics = []),
                                d.resourceMetrics.push(
                                  Be.opentelemetry.proto.metrics.v1.ResourceMetrics.decode(a, a.uint32()),
                                ));
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.resourceMetrics != null && a.hasOwnProperty("resourceMetrics")) {
                          if (!Array.isArray(a.resourceMetrics)) return "resourceMetrics: array expected";
                          for (var u = 0; u < a.resourceMetrics.length; ++u) {
                            var c = Be.opentelemetry.proto.metrics.v1.ResourceMetrics.verify(a.resourceMetrics[u]);
                            if (c) return "resourceMetrics." + c;
                          }
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.metrics.v1.MetricsData) return a;
                        var u = new Be.opentelemetry.proto.metrics.v1.MetricsData();
                        if (a.resourceMetrics) {
                          if (!Array.isArray(a.resourceMetrics))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: array expected",
                            );
                          u.resourceMetrics = [];
                          for (var c = 0; c < a.resourceMetrics.length; ++c) {
                            if (typeof a.resourceMetrics[c] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.MetricsData.resourceMetrics: object expected",
                              );
                            u.resourceMetrics[c] = Be.opentelemetry.proto.metrics.v1.ResourceMetrics.fromObject(
                              a.resourceMetrics[c],
                            );
                          }
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.resourceMetrics = []),
                          a.resourceMetrics && a.resourceMetrics.length)
                        ) {
                          c.resourceMetrics = [];
                          for (var m = 0; m < a.resourceMetrics.length; ++m)
                            c.resourceMetrics[m] = Be.opentelemetry.proto.metrics.v1.ResourceMetrics.toObject(
                              a.resourceMetrics[m],
                              u,
                            );
                        }
                        return c;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.metrics.v1.MetricsData"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.ResourceMetrics = (function () {
                    function o(s) {
                      if (((this.scopeMetrics = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.resource = null),
                      (o.prototype.scopeMetrics = Qe.emptyArray),
                      (o.prototype.schemaUrl = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.resource != null &&
                            Object.hasOwnProperty.call(a, "resource") &&
                            Be.opentelemetry.proto.resource.v1.Resource.encode(
                              a.resource,
                              u.uint32(10).fork(),
                            ).ldelim(),
                          a.scopeMetrics != null && a.scopeMetrics.length)
                        )
                          for (var c = 0; c < a.scopeMetrics.length; ++c)
                            Be.opentelemetry.proto.metrics.v1.ScopeMetrics.encode(
                              a.scopeMetrics[c],
                              u.uint32(18).fork(),
                            ).ldelim();
                        return (
                          a.schemaUrl != null &&
                            Object.hasOwnProperty.call(a, "schemaUrl") &&
                            u.uint32(26).string(a.schemaUrl),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.metrics.v1.ResourceMetrics();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.resource = Be.opentelemetry.proto.resource.v1.Resource.decode(a, a.uint32());
                              break;
                            }
                            case 2: {
                              ((d.scopeMetrics && d.scopeMetrics.length) || (d.scopeMetrics = []),
                                d.scopeMetrics.push(
                                  Be.opentelemetry.proto.metrics.v1.ScopeMetrics.decode(a, a.uint32()),
                                ));
                              break;
                            }
                            case 3: {
                              d.schemaUrl = a.string();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.resource != null && a.hasOwnProperty("resource")) {
                          var u = Be.opentelemetry.proto.resource.v1.Resource.verify(a.resource);
                          if (u) return "resource." + u;
                        }
                        if (a.scopeMetrics != null && a.hasOwnProperty("scopeMetrics")) {
                          if (!Array.isArray(a.scopeMetrics)) return "scopeMetrics: array expected";
                          for (var c = 0; c < a.scopeMetrics.length; ++c) {
                            var u = Be.opentelemetry.proto.metrics.v1.ScopeMetrics.verify(a.scopeMetrics[c]);
                            if (u) return "scopeMetrics." + u;
                          }
                        }
                        return a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && !Qe.isString(a.schemaUrl)
                          ? "schemaUrl: string expected"
                          : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.metrics.v1.ResourceMetrics) return a;
                        var u = new Be.opentelemetry.proto.metrics.v1.ResourceMetrics();
                        if (a.resource != null) {
                          if (typeof a.resource != "object")
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.ResourceMetrics.resource: object expected",
                            );
                          u.resource = Be.opentelemetry.proto.resource.v1.Resource.fromObject(a.resource);
                        }
                        if (a.scopeMetrics) {
                          if (!Array.isArray(a.scopeMetrics))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: array expected",
                            );
                          u.scopeMetrics = [];
                          for (var c = 0; c < a.scopeMetrics.length; ++c) {
                            if (typeof a.scopeMetrics[c] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.ResourceMetrics.scopeMetrics: object expected",
                              );
                            u.scopeMetrics[c] = Be.opentelemetry.proto.metrics.v1.ScopeMetrics.fromObject(
                              a.scopeMetrics[c],
                            );
                          }
                        }
                        return (a.schemaUrl != null && (u.schemaUrl = String(a.schemaUrl)), u);
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.scopeMetrics = []),
                          u.defaults && ((c.resource = null), (c.schemaUrl = "")),
                          a.resource != null &&
                            a.hasOwnProperty("resource") &&
                            (c.resource = Be.opentelemetry.proto.resource.v1.Resource.toObject(a.resource, u)),
                          a.scopeMetrics && a.scopeMetrics.length)
                        ) {
                          c.scopeMetrics = [];
                          for (var m = 0; m < a.scopeMetrics.length; ++m)
                            c.scopeMetrics[m] = Be.opentelemetry.proto.metrics.v1.ScopeMetrics.toObject(
                              a.scopeMetrics[m],
                              u,
                            );
                        }
                        return (a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && (c.schemaUrl = a.schemaUrl), c);
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.metrics.v1.ResourceMetrics"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.ScopeMetrics = (function () {
                    function o(s) {
                      if (((this.metrics = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.scope = null),
                      (o.prototype.metrics = Qe.emptyArray),
                      (o.prototype.schemaUrl = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.scope != null &&
                            Object.hasOwnProperty.call(a, "scope") &&
                            Be.opentelemetry.proto.common.v1.InstrumentationScope.encode(
                              a.scope,
                              u.uint32(10).fork(),
                            ).ldelim(),
                          a.metrics != null && a.metrics.length)
                        )
                          for (var c = 0; c < a.metrics.length; ++c)
                            Be.opentelemetry.proto.metrics.v1.Metric.encode(a.metrics[c], u.uint32(18).fork()).ldelim();
                        return (
                          a.schemaUrl != null &&
                            Object.hasOwnProperty.call(a, "schemaUrl") &&
                            u.uint32(26).string(a.schemaUrl),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.metrics.v1.ScopeMetrics();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.scope = Be.opentelemetry.proto.common.v1.InstrumentationScope.decode(a, a.uint32());
                              break;
                            }
                            case 2: {
                              ((d.metrics && d.metrics.length) || (d.metrics = []),
                                d.metrics.push(Be.opentelemetry.proto.metrics.v1.Metric.decode(a, a.uint32())));
                              break;
                            }
                            case 3: {
                              d.schemaUrl = a.string();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.scope != null && a.hasOwnProperty("scope")) {
                          var u = Be.opentelemetry.proto.common.v1.InstrumentationScope.verify(a.scope);
                          if (u) return "scope." + u;
                        }
                        if (a.metrics != null && a.hasOwnProperty("metrics")) {
                          if (!Array.isArray(a.metrics)) return "metrics: array expected";
                          for (var c = 0; c < a.metrics.length; ++c) {
                            var u = Be.opentelemetry.proto.metrics.v1.Metric.verify(a.metrics[c]);
                            if (u) return "metrics." + u;
                          }
                        }
                        return a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && !Qe.isString(a.schemaUrl)
                          ? "schemaUrl: string expected"
                          : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.metrics.v1.ScopeMetrics) return a;
                        var u = new Be.opentelemetry.proto.metrics.v1.ScopeMetrics();
                        if (a.scope != null) {
                          if (typeof a.scope != "object")
                            throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.scope: object expected");
                          u.scope = Be.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(a.scope);
                        }
                        if (a.metrics) {
                          if (!Array.isArray(a.metrics))
                            throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: array expected");
                          u.metrics = [];
                          for (var c = 0; c < a.metrics.length; ++c) {
                            if (typeof a.metrics[c] != "object")
                              throw TypeError(".opentelemetry.proto.metrics.v1.ScopeMetrics.metrics: object expected");
                            u.metrics[c] = Be.opentelemetry.proto.metrics.v1.Metric.fromObject(a.metrics[c]);
                          }
                        }
                        return (a.schemaUrl != null && (u.schemaUrl = String(a.schemaUrl)), u);
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.metrics = []),
                          u.defaults && ((c.scope = null), (c.schemaUrl = "")),
                          a.scope != null &&
                            a.hasOwnProperty("scope") &&
                            (c.scope = Be.opentelemetry.proto.common.v1.InstrumentationScope.toObject(a.scope, u)),
                          a.metrics && a.metrics.length)
                        ) {
                          c.metrics = [];
                          for (var m = 0; m < a.metrics.length; ++m)
                            c.metrics[m] = Be.opentelemetry.proto.metrics.v1.Metric.toObject(a.metrics[m], u);
                        }
                        return (a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && (c.schemaUrl = a.schemaUrl), c);
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.metrics.v1.ScopeMetrics"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.Metric = (function () {
                    function o(a) {
                      if (((this.metadata = []), a))
                        for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                          a[u[c]] != null && (this[u[c]] = a[u[c]]);
                    }
                    ((o.prototype.name = null),
                      (o.prototype.description = null),
                      (o.prototype.unit = null),
                      (o.prototype.gauge = null),
                      (o.prototype.sum = null),
                      (o.prototype.histogram = null),
                      (o.prototype.exponentialHistogram = null),
                      (o.prototype.summary = null),
                      (o.prototype.metadata = Qe.emptyArray));
                    var s;
                    return (
                      Object.defineProperty(o.prototype, "data", {
                        get: Qe.oneOfGetter((s = ["gauge", "sum", "histogram", "exponentialHistogram", "summary"])),
                        set: Qe.oneOfSetter(s),
                      }),
                      (o.create = function (u) {
                        return new o(u);
                      }),
                      (o.encode = function (u, c) {
                        if (
                          (c || (c = Ms.create()),
                          u.name != null && Object.hasOwnProperty.call(u, "name") && c.uint32(10).string(u.name),
                          u.description != null &&
                            Object.hasOwnProperty.call(u, "description") &&
                            c.uint32(18).string(u.description),
                          u.unit != null && Object.hasOwnProperty.call(u, "unit") && c.uint32(26).string(u.unit),
                          u.gauge != null &&
                            Object.hasOwnProperty.call(u, "gauge") &&
                            Be.opentelemetry.proto.metrics.v1.Gauge.encode(u.gauge, c.uint32(42).fork()).ldelim(),
                          u.sum != null &&
                            Object.hasOwnProperty.call(u, "sum") &&
                            Be.opentelemetry.proto.metrics.v1.Sum.encode(u.sum, c.uint32(58).fork()).ldelim(),
                          u.histogram != null &&
                            Object.hasOwnProperty.call(u, "histogram") &&
                            Be.opentelemetry.proto.metrics.v1.Histogram.encode(
                              u.histogram,
                              c.uint32(74).fork(),
                            ).ldelim(),
                          u.exponentialHistogram != null &&
                            Object.hasOwnProperty.call(u, "exponentialHistogram") &&
                            Be.opentelemetry.proto.metrics.v1.ExponentialHistogram.encode(
                              u.exponentialHistogram,
                              c.uint32(82).fork(),
                            ).ldelim(),
                          u.summary != null &&
                            Object.hasOwnProperty.call(u, "summary") &&
                            Be.opentelemetry.proto.metrics.v1.Summary.encode(u.summary, c.uint32(90).fork()).ldelim(),
                          u.metadata != null && u.metadata.length)
                        )
                          for (var m = 0; m < u.metadata.length; ++m)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              u.metadata[m],
                              c.uint32(98).fork(),
                            ).ldelim();
                        return c;
                      }),
                      (o.encodeDelimited = function (u, c) {
                        return this.encode(u, c).ldelim();
                      }),
                      (o.decode = function (u, c, m) {
                        u instanceof Ut || (u = Ut.create(u));
                        for (
                          var d = c === void 0 ? u.len : u.pos + c, f = new Be.opentelemetry.proto.metrics.v1.Metric();
                          u.pos < d;
                        ) {
                          var p = u.uint32();
                          if (p === m) break;
                          switch (p >>> 3) {
                            case 1: {
                              f.name = u.string();
                              break;
                            }
                            case 2: {
                              f.description = u.string();
                              break;
                            }
                            case 3: {
                              f.unit = u.string();
                              break;
                            }
                            case 5: {
                              f.gauge = Be.opentelemetry.proto.metrics.v1.Gauge.decode(u, u.uint32());
                              break;
                            }
                            case 7: {
                              f.sum = Be.opentelemetry.proto.metrics.v1.Sum.decode(u, u.uint32());
                              break;
                            }
                            case 9: {
                              f.histogram = Be.opentelemetry.proto.metrics.v1.Histogram.decode(u, u.uint32());
                              break;
                            }
                            case 10: {
                              f.exponentialHistogram = Be.opentelemetry.proto.metrics.v1.ExponentialHistogram.decode(
                                u,
                                u.uint32(),
                              );
                              break;
                            }
                            case 11: {
                              f.summary = Be.opentelemetry.proto.metrics.v1.Summary.decode(u, u.uint32());
                              break;
                            }
                            case 12: {
                              ((f.metadata && f.metadata.length) || (f.metadata = []),
                                f.metadata.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(u, u.uint32())));
                              break;
                            }
                            default:
                              u.skipType(p & 7);
                              break;
                          }
                        }
                        return f;
                      }),
                      (o.decodeDelimited = function (u) {
                        return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                      }),
                      (o.verify = function (u) {
                        if (typeof u != "object" || u === null) return "object expected";
                        var c = {};
                        if (u.name != null && u.hasOwnProperty("name") && !Qe.isString(u.name))
                          return "name: string expected";
                        if (u.description != null && u.hasOwnProperty("description") && !Qe.isString(u.description))
                          return "description: string expected";
                        if (u.unit != null && u.hasOwnProperty("unit") && !Qe.isString(u.unit))
                          return "unit: string expected";
                        if (u.gauge != null && u.hasOwnProperty("gauge")) {
                          c.data = 1;
                          {
                            var m = Be.opentelemetry.proto.metrics.v1.Gauge.verify(u.gauge);
                            if (m) return "gauge." + m;
                          }
                        }
                        if (u.sum != null && u.hasOwnProperty("sum")) {
                          if (c.data === 1) return "data: multiple values";
                          c.data = 1;
                          {
                            var m = Be.opentelemetry.proto.metrics.v1.Sum.verify(u.sum);
                            if (m) return "sum." + m;
                          }
                        }
                        if (u.histogram != null && u.hasOwnProperty("histogram")) {
                          if (c.data === 1) return "data: multiple values";
                          c.data = 1;
                          {
                            var m = Be.opentelemetry.proto.metrics.v1.Histogram.verify(u.histogram);
                            if (m) return "histogram." + m;
                          }
                        }
                        if (u.exponentialHistogram != null && u.hasOwnProperty("exponentialHistogram")) {
                          if (c.data === 1) return "data: multiple values";
                          c.data = 1;
                          {
                            var m = Be.opentelemetry.proto.metrics.v1.ExponentialHistogram.verify(
                              u.exponentialHistogram,
                            );
                            if (m) return "exponentialHistogram." + m;
                          }
                        }
                        if (u.summary != null && u.hasOwnProperty("summary")) {
                          if (c.data === 1) return "data: multiple values";
                          c.data = 1;
                          {
                            var m = Be.opentelemetry.proto.metrics.v1.Summary.verify(u.summary);
                            if (m) return "summary." + m;
                          }
                        }
                        if (u.metadata != null && u.hasOwnProperty("metadata")) {
                          if (!Array.isArray(u.metadata)) return "metadata: array expected";
                          for (var d = 0; d < u.metadata.length; ++d) {
                            var m = Be.opentelemetry.proto.common.v1.KeyValue.verify(u.metadata[d]);
                            if (m) return "metadata." + m;
                          }
                        }
                        return null;
                      }),
                      (o.fromObject = function (u) {
                        if (u instanceof Be.opentelemetry.proto.metrics.v1.Metric) return u;
                        var c = new Be.opentelemetry.proto.metrics.v1.Metric();
                        if (
                          (u.name != null && (c.name = String(u.name)),
                          u.description != null && (c.description = String(u.description)),
                          u.unit != null && (c.unit = String(u.unit)),
                          u.gauge != null)
                        ) {
                          if (typeof u.gauge != "object")
                            throw TypeError(".opentelemetry.proto.metrics.v1.Metric.gauge: object expected");
                          c.gauge = Be.opentelemetry.proto.metrics.v1.Gauge.fromObject(u.gauge);
                        }
                        if (u.sum != null) {
                          if (typeof u.sum != "object")
                            throw TypeError(".opentelemetry.proto.metrics.v1.Metric.sum: object expected");
                          c.sum = Be.opentelemetry.proto.metrics.v1.Sum.fromObject(u.sum);
                        }
                        if (u.histogram != null) {
                          if (typeof u.histogram != "object")
                            throw TypeError(".opentelemetry.proto.metrics.v1.Metric.histogram: object expected");
                          c.histogram = Be.opentelemetry.proto.metrics.v1.Histogram.fromObject(u.histogram);
                        }
                        if (u.exponentialHistogram != null) {
                          if (typeof u.exponentialHistogram != "object")
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.Metric.exponentialHistogram: object expected",
                            );
                          c.exponentialHistogram = Be.opentelemetry.proto.metrics.v1.ExponentialHistogram.fromObject(
                            u.exponentialHistogram,
                          );
                        }
                        if (u.summary != null) {
                          if (typeof u.summary != "object")
                            throw TypeError(".opentelemetry.proto.metrics.v1.Metric.summary: object expected");
                          c.summary = Be.opentelemetry.proto.metrics.v1.Summary.fromObject(u.summary);
                        }
                        if (u.metadata) {
                          if (!Array.isArray(u.metadata))
                            throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: array expected");
                          c.metadata = [];
                          for (var m = 0; m < u.metadata.length; ++m) {
                            if (typeof u.metadata[m] != "object")
                              throw TypeError(".opentelemetry.proto.metrics.v1.Metric.metadata: object expected");
                            c.metadata[m] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(u.metadata[m]);
                          }
                        }
                        return c;
                      }),
                      (o.toObject = function (u, c) {
                        c || (c = {});
                        var m = {};
                        if (
                          ((c.arrays || c.defaults) && (m.metadata = []),
                          c.defaults && ((m.name = ""), (m.description = ""), (m.unit = "")),
                          u.name != null && u.hasOwnProperty("name") && (m.name = u.name),
                          u.description != null && u.hasOwnProperty("description") && (m.description = u.description),
                          u.unit != null && u.hasOwnProperty("unit") && (m.unit = u.unit),
                          u.gauge != null &&
                            u.hasOwnProperty("gauge") &&
                            ((m.gauge = Be.opentelemetry.proto.metrics.v1.Gauge.toObject(u.gauge, c)),
                            c.oneofs && (m.data = "gauge")),
                          u.sum != null &&
                            u.hasOwnProperty("sum") &&
                            ((m.sum = Be.opentelemetry.proto.metrics.v1.Sum.toObject(u.sum, c)),
                            c.oneofs && (m.data = "sum")),
                          u.histogram != null &&
                            u.hasOwnProperty("histogram") &&
                            ((m.histogram = Be.opentelemetry.proto.metrics.v1.Histogram.toObject(u.histogram, c)),
                            c.oneofs && (m.data = "histogram")),
                          u.exponentialHistogram != null &&
                            u.hasOwnProperty("exponentialHistogram") &&
                            ((m.exponentialHistogram = Be.opentelemetry.proto.metrics.v1.ExponentialHistogram.toObject(
                              u.exponentialHistogram,
                              c,
                            )),
                            c.oneofs && (m.data = "exponentialHistogram")),
                          u.summary != null &&
                            u.hasOwnProperty("summary") &&
                            ((m.summary = Be.opentelemetry.proto.metrics.v1.Summary.toObject(u.summary, c)),
                            c.oneofs && (m.data = "summary")),
                          u.metadata && u.metadata.length)
                        ) {
                          m.metadata = [];
                          for (var d = 0; d < u.metadata.length; ++d)
                            m.metadata[d] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(u.metadata[d], c);
                        }
                        return m;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (u) {
                        return (
                          u === void 0 && (u = "type.googleapis.com"),
                          u + "/opentelemetry.proto.metrics.v1.Metric"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.Gauge = (function () {
                    function o(s) {
                      if (((this.dataPoints = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.dataPoints = Qe.emptyArray),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.dataPoints != null && a.dataPoints.length))
                          for (var c = 0; c < a.dataPoints.length; ++c)
                            Be.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(
                              a.dataPoints[c],
                              u.uint32(10).fork(),
                            ).ldelim();
                        return u;
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u, d = new Be.opentelemetry.proto.metrics.v1.Gauge();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.dataPoints && d.dataPoints.length) || (d.dataPoints = []),
                                d.dataPoints.push(
                                  Be.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(a, a.uint32()),
                                ));
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.dataPoints != null && a.hasOwnProperty("dataPoints")) {
                          if (!Array.isArray(a.dataPoints)) return "dataPoints: array expected";
                          for (var u = 0; u < a.dataPoints.length; ++u) {
                            var c = Be.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(a.dataPoints[u]);
                            if (c) return "dataPoints." + c;
                          }
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.metrics.v1.Gauge) return a;
                        var u = new Be.opentelemetry.proto.metrics.v1.Gauge();
                        if (a.dataPoints) {
                          if (!Array.isArray(a.dataPoints))
                            throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: array expected");
                          u.dataPoints = [];
                          for (var c = 0; c < a.dataPoints.length; ++c) {
                            if (typeof a.dataPoints[c] != "object")
                              throw TypeError(".opentelemetry.proto.metrics.v1.Gauge.dataPoints: object expected");
                            u.dataPoints[c] = Be.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(
                              a.dataPoints[c],
                            );
                          }
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (((u.arrays || u.defaults) && (c.dataPoints = []), a.dataPoints && a.dataPoints.length)) {
                          c.dataPoints = [];
                          for (var m = 0; m < a.dataPoints.length; ++m)
                            c.dataPoints[m] = Be.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(
                              a.dataPoints[m],
                              u,
                            );
                        }
                        return c;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.metrics.v1.Gauge"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.Sum = (function () {
                    function o(s) {
                      if (((this.dataPoints = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.dataPoints = Qe.emptyArray),
                      (o.prototype.aggregationTemporality = null),
                      (o.prototype.isMonotonic = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.dataPoints != null && a.dataPoints.length))
                          for (var c = 0; c < a.dataPoints.length; ++c)
                            Be.opentelemetry.proto.metrics.v1.NumberDataPoint.encode(
                              a.dataPoints[c],
                              u.uint32(10).fork(),
                            ).ldelim();
                        return (
                          a.aggregationTemporality != null &&
                            Object.hasOwnProperty.call(a, "aggregationTemporality") &&
                            u.uint32(16).int32(a.aggregationTemporality),
                          a.isMonotonic != null &&
                            Object.hasOwnProperty.call(a, "isMonotonic") &&
                            u.uint32(24).bool(a.isMonotonic),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u, d = new Be.opentelemetry.proto.metrics.v1.Sum();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.dataPoints && d.dataPoints.length) || (d.dataPoints = []),
                                d.dataPoints.push(
                                  Be.opentelemetry.proto.metrics.v1.NumberDataPoint.decode(a, a.uint32()),
                                ));
                              break;
                            }
                            case 2: {
                              d.aggregationTemporality = a.int32();
                              break;
                            }
                            case 3: {
                              d.isMonotonic = a.bool();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.dataPoints != null && a.hasOwnProperty("dataPoints")) {
                          if (!Array.isArray(a.dataPoints)) return "dataPoints: array expected";
                          for (var u = 0; u < a.dataPoints.length; ++u) {
                            var c = Be.opentelemetry.proto.metrics.v1.NumberDataPoint.verify(a.dataPoints[u]);
                            if (c) return "dataPoints." + c;
                          }
                        }
                        if (a.aggregationTemporality != null && a.hasOwnProperty("aggregationTemporality"))
                          switch (a.aggregationTemporality) {
                            default:
                              return "aggregationTemporality: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                              break;
                          }
                        return a.isMonotonic != null &&
                          a.hasOwnProperty("isMonotonic") &&
                          typeof a.isMonotonic != "boolean"
                          ? "isMonotonic: boolean expected"
                          : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.metrics.v1.Sum) return a;
                        var u = new Be.opentelemetry.proto.metrics.v1.Sum();
                        if (a.dataPoints) {
                          if (!Array.isArray(a.dataPoints))
                            throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: array expected");
                          u.dataPoints = [];
                          for (var c = 0; c < a.dataPoints.length; ++c) {
                            if (typeof a.dataPoints[c] != "object")
                              throw TypeError(".opentelemetry.proto.metrics.v1.Sum.dataPoints: object expected");
                            u.dataPoints[c] = Be.opentelemetry.proto.metrics.v1.NumberDataPoint.fromObject(
                              a.dataPoints[c],
                            );
                          }
                        }
                        switch (a.aggregationTemporality) {
                          default:
                            if (typeof a.aggregationTemporality == "number") {
                              u.aggregationTemporality = a.aggregationTemporality;
                              break;
                            }
                            break;
                          case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                          case 0:
                            u.aggregationTemporality = 0;
                            break;
                          case "AGGREGATION_TEMPORALITY_DELTA":
                          case 1:
                            u.aggregationTemporality = 1;
                            break;
                          case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                          case 2:
                            u.aggregationTemporality = 2;
                            break;
                        }
                        return (a.isMonotonic != null && (u.isMonotonic = !!a.isMonotonic), u);
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.dataPoints = []),
                          u.defaults &&
                            ((c.aggregationTemporality =
                              u.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0),
                            (c.isMonotonic = !1)),
                          a.dataPoints && a.dataPoints.length)
                        ) {
                          c.dataPoints = [];
                          for (var m = 0; m < a.dataPoints.length; ++m)
                            c.dataPoints[m] = Be.opentelemetry.proto.metrics.v1.NumberDataPoint.toObject(
                              a.dataPoints[m],
                              u,
                            );
                        }
                        return (
                          a.aggregationTemporality != null &&
                            a.hasOwnProperty("aggregationTemporality") &&
                            (c.aggregationTemporality =
                              u.enums === String
                                ? Be.opentelemetry.proto.metrics.v1.AggregationTemporality[a.aggregationTemporality] ===
                                  void 0
                                  ? a.aggregationTemporality
                                  : Be.opentelemetry.proto.metrics.v1.AggregationTemporality[a.aggregationTemporality]
                                : a.aggregationTemporality),
                          a.isMonotonic != null && a.hasOwnProperty("isMonotonic") && (c.isMonotonic = a.isMonotonic),
                          c
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (a === void 0 && (a = "type.googleapis.com"), a + "/opentelemetry.proto.metrics.v1.Sum");
                      }),
                      o
                    );
                  })()),
                  (n.Histogram = (function () {
                    function o(s) {
                      if (((this.dataPoints = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.dataPoints = Qe.emptyArray),
                      (o.prototype.aggregationTemporality = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.dataPoints != null && a.dataPoints.length))
                          for (var c = 0; c < a.dataPoints.length; ++c)
                            Be.opentelemetry.proto.metrics.v1.HistogramDataPoint.encode(
                              a.dataPoints[c],
                              u.uint32(10).fork(),
                            ).ldelim();
                        return (
                          a.aggregationTemporality != null &&
                            Object.hasOwnProperty.call(a, "aggregationTemporality") &&
                            u.uint32(16).int32(a.aggregationTemporality),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.metrics.v1.Histogram();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.dataPoints && d.dataPoints.length) || (d.dataPoints = []),
                                d.dataPoints.push(
                                  Be.opentelemetry.proto.metrics.v1.HistogramDataPoint.decode(a, a.uint32()),
                                ));
                              break;
                            }
                            case 2: {
                              d.aggregationTemporality = a.int32();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.dataPoints != null && a.hasOwnProperty("dataPoints")) {
                          if (!Array.isArray(a.dataPoints)) return "dataPoints: array expected";
                          for (var u = 0; u < a.dataPoints.length; ++u) {
                            var c = Be.opentelemetry.proto.metrics.v1.HistogramDataPoint.verify(a.dataPoints[u]);
                            if (c) return "dataPoints." + c;
                          }
                        }
                        if (a.aggregationTemporality != null && a.hasOwnProperty("aggregationTemporality"))
                          switch (a.aggregationTemporality) {
                            default:
                              return "aggregationTemporality: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                              break;
                          }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.metrics.v1.Histogram) return a;
                        var u = new Be.opentelemetry.proto.metrics.v1.Histogram();
                        if (a.dataPoints) {
                          if (!Array.isArray(a.dataPoints))
                            throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: array expected");
                          u.dataPoints = [];
                          for (var c = 0; c < a.dataPoints.length; ++c) {
                            if (typeof a.dataPoints[c] != "object")
                              throw TypeError(".opentelemetry.proto.metrics.v1.Histogram.dataPoints: object expected");
                            u.dataPoints[c] = Be.opentelemetry.proto.metrics.v1.HistogramDataPoint.fromObject(
                              a.dataPoints[c],
                            );
                          }
                        }
                        switch (a.aggregationTemporality) {
                          default:
                            if (typeof a.aggregationTemporality == "number") {
                              u.aggregationTemporality = a.aggregationTemporality;
                              break;
                            }
                            break;
                          case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                          case 0:
                            u.aggregationTemporality = 0;
                            break;
                          case "AGGREGATION_TEMPORALITY_DELTA":
                          case 1:
                            u.aggregationTemporality = 1;
                            break;
                          case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                          case 2:
                            u.aggregationTemporality = 2;
                            break;
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.dataPoints = []),
                          u.defaults &&
                            (c.aggregationTemporality = u.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0),
                          a.dataPoints && a.dataPoints.length)
                        ) {
                          c.dataPoints = [];
                          for (var m = 0; m < a.dataPoints.length; ++m)
                            c.dataPoints[m] = Be.opentelemetry.proto.metrics.v1.HistogramDataPoint.toObject(
                              a.dataPoints[m],
                              u,
                            );
                        }
                        return (
                          a.aggregationTemporality != null &&
                            a.hasOwnProperty("aggregationTemporality") &&
                            (c.aggregationTemporality =
                              u.enums === String
                                ? Be.opentelemetry.proto.metrics.v1.AggregationTemporality[a.aggregationTemporality] ===
                                  void 0
                                  ? a.aggregationTemporality
                                  : Be.opentelemetry.proto.metrics.v1.AggregationTemporality[a.aggregationTemporality]
                                : a.aggregationTemporality),
                          c
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.metrics.v1.Histogram"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.ExponentialHistogram = (function () {
                    function o(s) {
                      if (((this.dataPoints = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.dataPoints = Qe.emptyArray),
                      (o.prototype.aggregationTemporality = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.dataPoints != null && a.dataPoints.length))
                          for (var c = 0; c < a.dataPoints.length; ++c)
                            Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.encode(
                              a.dataPoints[c],
                              u.uint32(10).fork(),
                            ).ldelim();
                        return (
                          a.aggregationTemporality != null &&
                            Object.hasOwnProperty.call(a, "aggregationTemporality") &&
                            u.uint32(16).int32(a.aggregationTemporality),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.metrics.v1.ExponentialHistogram();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.dataPoints && d.dataPoints.length) || (d.dataPoints = []),
                                d.dataPoints.push(
                                  Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.decode(a, a.uint32()),
                                ));
                              break;
                            }
                            case 2: {
                              d.aggregationTemporality = a.int32();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.dataPoints != null && a.hasOwnProperty("dataPoints")) {
                          if (!Array.isArray(a.dataPoints)) return "dataPoints: array expected";
                          for (var u = 0; u < a.dataPoints.length; ++u) {
                            var c = Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.verify(
                              a.dataPoints[u],
                            );
                            if (c) return "dataPoints." + c;
                          }
                        }
                        if (a.aggregationTemporality != null && a.hasOwnProperty("aggregationTemporality"))
                          switch (a.aggregationTemporality) {
                            default:
                              return "aggregationTemporality: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                              break;
                          }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.metrics.v1.ExponentialHistogram) return a;
                        var u = new Be.opentelemetry.proto.metrics.v1.ExponentialHistogram();
                        if (a.dataPoints) {
                          if (!Array.isArray(a.dataPoints))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: array expected",
                            );
                          u.dataPoints = [];
                          for (var c = 0; c < a.dataPoints.length; ++c) {
                            if (typeof a.dataPoints[c] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.ExponentialHistogram.dataPoints: object expected",
                              );
                            u.dataPoints[c] =
                              Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.fromObject(
                                a.dataPoints[c],
                              );
                          }
                        }
                        switch (a.aggregationTemporality) {
                          default:
                            if (typeof a.aggregationTemporality == "number") {
                              u.aggregationTemporality = a.aggregationTemporality;
                              break;
                            }
                            break;
                          case "AGGREGATION_TEMPORALITY_UNSPECIFIED":
                          case 0:
                            u.aggregationTemporality = 0;
                            break;
                          case "AGGREGATION_TEMPORALITY_DELTA":
                          case 1:
                            u.aggregationTemporality = 1;
                            break;
                          case "AGGREGATION_TEMPORALITY_CUMULATIVE":
                          case 2:
                            u.aggregationTemporality = 2;
                            break;
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.dataPoints = []),
                          u.defaults &&
                            (c.aggregationTemporality = u.enums === String ? "AGGREGATION_TEMPORALITY_UNSPECIFIED" : 0),
                          a.dataPoints && a.dataPoints.length)
                        ) {
                          c.dataPoints = [];
                          for (var m = 0; m < a.dataPoints.length; ++m)
                            c.dataPoints[m] = Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.toObject(
                              a.dataPoints[m],
                              u,
                            );
                        }
                        return (
                          a.aggregationTemporality != null &&
                            a.hasOwnProperty("aggregationTemporality") &&
                            (c.aggregationTemporality =
                              u.enums === String
                                ? Be.opentelemetry.proto.metrics.v1.AggregationTemporality[a.aggregationTemporality] ===
                                  void 0
                                  ? a.aggregationTemporality
                                  : Be.opentelemetry.proto.metrics.v1.AggregationTemporality[a.aggregationTemporality]
                                : a.aggregationTemporality),
                          c
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.metrics.v1.ExponentialHistogram"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.Summary = (function () {
                    function o(s) {
                      if (((this.dataPoints = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.dataPoints = Qe.emptyArray),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.dataPoints != null && a.dataPoints.length))
                          for (var c = 0; c < a.dataPoints.length; ++c)
                            Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.encode(
                              a.dataPoints[c],
                              u.uint32(10).fork(),
                            ).ldelim();
                        return u;
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u, d = new Be.opentelemetry.proto.metrics.v1.Summary();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.dataPoints && d.dataPoints.length) || (d.dataPoints = []),
                                d.dataPoints.push(
                                  Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.decode(a, a.uint32()),
                                ));
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.dataPoints != null && a.hasOwnProperty("dataPoints")) {
                          if (!Array.isArray(a.dataPoints)) return "dataPoints: array expected";
                          for (var u = 0; u < a.dataPoints.length; ++u) {
                            var c = Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.verify(a.dataPoints[u]);
                            if (c) return "dataPoints." + c;
                          }
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.metrics.v1.Summary) return a;
                        var u = new Be.opentelemetry.proto.metrics.v1.Summary();
                        if (a.dataPoints) {
                          if (!Array.isArray(a.dataPoints))
                            throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: array expected");
                          u.dataPoints = [];
                          for (var c = 0; c < a.dataPoints.length; ++c) {
                            if (typeof a.dataPoints[c] != "object")
                              throw TypeError(".opentelemetry.proto.metrics.v1.Summary.dataPoints: object expected");
                            u.dataPoints[c] = Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.fromObject(
                              a.dataPoints[c],
                            );
                          }
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (((u.arrays || u.defaults) && (c.dataPoints = []), a.dataPoints && a.dataPoints.length)) {
                          c.dataPoints = [];
                          for (var m = 0; m < a.dataPoints.length; ++m)
                            c.dataPoints[m] = Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.toObject(
                              a.dataPoints[m],
                              u,
                            );
                        }
                        return c;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.metrics.v1.Summary"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.AggregationTemporality = (function () {
                    var o = {},
                      s = Object.create(o);
                    return (
                      (s[(o[0] = "AGGREGATION_TEMPORALITY_UNSPECIFIED")] = 0),
                      (s[(o[1] = "AGGREGATION_TEMPORALITY_DELTA")] = 1),
                      (s[(o[2] = "AGGREGATION_TEMPORALITY_CUMULATIVE")] = 2),
                      s
                    );
                  })()),
                  (n.DataPointFlags = (function () {
                    var o = {},
                      s = Object.create(o);
                    return (
                      (s[(o[0] = "DATA_POINT_FLAGS_DO_NOT_USE")] = 0),
                      (s[(o[1] = "DATA_POINT_FLAGS_NO_RECORDED_VALUE_MASK")] = 1),
                      s
                    );
                  })()),
                  (n.NumberDataPoint = (function () {
                    function o(a) {
                      if (((this.attributes = []), (this.exemplars = []), a))
                        for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                          a[u[c]] != null && (this[u[c]] = a[u[c]]);
                    }
                    ((o.prototype.attributes = Qe.emptyArray),
                      (o.prototype.startTimeUnixNano = null),
                      (o.prototype.timeUnixNano = null),
                      (o.prototype.asDouble = null),
                      (o.prototype.asInt = null),
                      (o.prototype.exemplars = Qe.emptyArray),
                      (o.prototype.flags = null));
                    var s;
                    return (
                      Object.defineProperty(o.prototype, "value", {
                        get: Qe.oneOfGetter((s = ["asDouble", "asInt"])),
                        set: Qe.oneOfSetter(s),
                      }),
                      (o.create = function (u) {
                        return new o(u);
                      }),
                      (o.encode = function (u, c) {
                        if (
                          (c || (c = Ms.create()),
                          u.startTimeUnixNano != null &&
                            Object.hasOwnProperty.call(u, "startTimeUnixNano") &&
                            c.uint32(17).fixed64(u.startTimeUnixNano),
                          u.timeUnixNano != null &&
                            Object.hasOwnProperty.call(u, "timeUnixNano") &&
                            c.uint32(25).fixed64(u.timeUnixNano),
                          u.asDouble != null &&
                            Object.hasOwnProperty.call(u, "asDouble") &&
                            c.uint32(33).double(u.asDouble),
                          u.exemplars != null && u.exemplars.length)
                        )
                          for (var m = 0; m < u.exemplars.length; ++m)
                            Be.opentelemetry.proto.metrics.v1.Exemplar.encode(
                              u.exemplars[m],
                              c.uint32(42).fork(),
                            ).ldelim();
                        if (
                          (u.asInt != null && Object.hasOwnProperty.call(u, "asInt") && c.uint32(49).sfixed64(u.asInt),
                          u.attributes != null && u.attributes.length)
                        )
                          for (var m = 0; m < u.attributes.length; ++m)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              u.attributes[m],
                              c.uint32(58).fork(),
                            ).ldelim();
                        return (
                          u.flags != null && Object.hasOwnProperty.call(u, "flags") && c.uint32(64).uint32(u.flags),
                          c
                        );
                      }),
                      (o.encodeDelimited = function (u, c) {
                        return this.encode(u, c).ldelim();
                      }),
                      (o.decode = function (u, c, m) {
                        u instanceof Ut || (u = Ut.create(u));
                        for (
                          var d = c === void 0 ? u.len : u.pos + c,
                            f = new Be.opentelemetry.proto.metrics.v1.NumberDataPoint();
                          u.pos < d;
                        ) {
                          var p = u.uint32();
                          if (p === m) break;
                          switch (p >>> 3) {
                            case 7: {
                              ((f.attributes && f.attributes.length) || (f.attributes = []),
                                f.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(u, u.uint32())));
                              break;
                            }
                            case 2: {
                              f.startTimeUnixNano = u.fixed64();
                              break;
                            }
                            case 3: {
                              f.timeUnixNano = u.fixed64();
                              break;
                            }
                            case 4: {
                              f.asDouble = u.double();
                              break;
                            }
                            case 6: {
                              f.asInt = u.sfixed64();
                              break;
                            }
                            case 5: {
                              ((f.exemplars && f.exemplars.length) || (f.exemplars = []),
                                f.exemplars.push(Be.opentelemetry.proto.metrics.v1.Exemplar.decode(u, u.uint32())));
                              break;
                            }
                            case 8: {
                              f.flags = u.uint32();
                              break;
                            }
                            default:
                              u.skipType(p & 7);
                              break;
                          }
                        }
                        return f;
                      }),
                      (o.decodeDelimited = function (u) {
                        return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                      }),
                      (o.verify = function (u) {
                        if (typeof u != "object" || u === null) return "object expected";
                        var c = {};
                        if (u.attributes != null && u.hasOwnProperty("attributes")) {
                          if (!Array.isArray(u.attributes)) return "attributes: array expected";
                          for (var m = 0; m < u.attributes.length; ++m) {
                            var d = Be.opentelemetry.proto.common.v1.KeyValue.verify(u.attributes[m]);
                            if (d) return "attributes." + d;
                          }
                        }
                        if (
                          u.startTimeUnixNano != null &&
                          u.hasOwnProperty("startTimeUnixNano") &&
                          !Qe.isInteger(u.startTimeUnixNano) &&
                          !(
                            u.startTimeUnixNano &&
                            Qe.isInteger(u.startTimeUnixNano.low) &&
                            Qe.isInteger(u.startTimeUnixNano.high)
                          )
                        )
                          return "startTimeUnixNano: integer|Long expected";
                        if (
                          u.timeUnixNano != null &&
                          u.hasOwnProperty("timeUnixNano") &&
                          !Qe.isInteger(u.timeUnixNano) &&
                          !(u.timeUnixNano && Qe.isInteger(u.timeUnixNano.low) && Qe.isInteger(u.timeUnixNano.high))
                        )
                          return "timeUnixNano: integer|Long expected";
                        if (
                          u.asDouble != null &&
                          u.hasOwnProperty("asDouble") &&
                          ((c.value = 1), typeof u.asDouble != "number")
                        )
                          return "asDouble: number expected";
                        if (u.asInt != null && u.hasOwnProperty("asInt")) {
                          if (c.value === 1) return "value: multiple values";
                          if (
                            ((c.value = 1),
                            !Qe.isInteger(u.asInt) &&
                              !(u.asInt && Qe.isInteger(u.asInt.low) && Qe.isInteger(u.asInt.high)))
                          )
                            return "asInt: integer|Long expected";
                        }
                        if (u.exemplars != null && u.hasOwnProperty("exemplars")) {
                          if (!Array.isArray(u.exemplars)) return "exemplars: array expected";
                          for (var m = 0; m < u.exemplars.length; ++m) {
                            var d = Be.opentelemetry.proto.metrics.v1.Exemplar.verify(u.exemplars[m]);
                            if (d) return "exemplars." + d;
                          }
                        }
                        return u.flags != null && u.hasOwnProperty("flags") && !Qe.isInteger(u.flags)
                          ? "flags: integer expected"
                          : null;
                      }),
                      (o.fromObject = function (u) {
                        if (u instanceof Be.opentelemetry.proto.metrics.v1.NumberDataPoint) return u;
                        var c = new Be.opentelemetry.proto.metrics.v1.NumberDataPoint();
                        if (u.attributes) {
                          if (!Array.isArray(u.attributes))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: array expected",
                            );
                          c.attributes = [];
                          for (var m = 0; m < u.attributes.length; ++m) {
                            if (typeof u.attributes[m] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.NumberDataPoint.attributes: object expected",
                              );
                            c.attributes[m] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(u.attributes[m]);
                          }
                        }
                        if (
                          (u.startTimeUnixNano != null &&
                            (Qe.Long
                              ? ((c.startTimeUnixNano = Qe.Long.fromValue(u.startTimeUnixNano)).unsigned = !1)
                              : typeof u.startTimeUnixNano == "string"
                                ? (c.startTimeUnixNano = parseInt(u.startTimeUnixNano, 10))
                                : typeof u.startTimeUnixNano == "number"
                                  ? (c.startTimeUnixNano = u.startTimeUnixNano)
                                  : typeof u.startTimeUnixNano == "object" &&
                                    (c.startTimeUnixNano = new Qe.LongBits(
                                      u.startTimeUnixNano.low >>> 0,
                                      u.startTimeUnixNano.high >>> 0,
                                    ).toNumber())),
                          u.timeUnixNano != null &&
                            (Qe.Long
                              ? ((c.timeUnixNano = Qe.Long.fromValue(u.timeUnixNano)).unsigned = !1)
                              : typeof u.timeUnixNano == "string"
                                ? (c.timeUnixNano = parseInt(u.timeUnixNano, 10))
                                : typeof u.timeUnixNano == "number"
                                  ? (c.timeUnixNano = u.timeUnixNano)
                                  : typeof u.timeUnixNano == "object" &&
                                    (c.timeUnixNano = new Qe.LongBits(
                                      u.timeUnixNano.low >>> 0,
                                      u.timeUnixNano.high >>> 0,
                                    ).toNumber())),
                          u.asDouble != null && (c.asDouble = Number(u.asDouble)),
                          u.asInt != null &&
                            (Qe.Long
                              ? ((c.asInt = Qe.Long.fromValue(u.asInt)).unsigned = !1)
                              : typeof u.asInt == "string"
                                ? (c.asInt = parseInt(u.asInt, 10))
                                : typeof u.asInt == "number"
                                  ? (c.asInt = u.asInt)
                                  : typeof u.asInt == "object" &&
                                    (c.asInt = new Qe.LongBits(u.asInt.low >>> 0, u.asInt.high >>> 0).toNumber())),
                          u.exemplars)
                        ) {
                          if (!Array.isArray(u.exemplars))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: array expected",
                            );
                          c.exemplars = [];
                          for (var m = 0; m < u.exemplars.length; ++m) {
                            if (typeof u.exemplars[m] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.NumberDataPoint.exemplars: object expected",
                              );
                            c.exemplars[m] = Be.opentelemetry.proto.metrics.v1.Exemplar.fromObject(u.exemplars[m]);
                          }
                        }
                        return (u.flags != null && (c.flags = u.flags >>> 0), c);
                      }),
                      (o.toObject = function (u, c) {
                        c || (c = {});
                        var m = {};
                        if (((c.arrays || c.defaults) && ((m.exemplars = []), (m.attributes = [])), c.defaults)) {
                          if (Qe.Long) {
                            var d = new Qe.Long(0, 0, !1);
                            m.startTimeUnixNano =
                              c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.startTimeUnixNano = c.longs === String ? "0" : 0;
                          if (Qe.Long) {
                            var d = new Qe.Long(0, 0, !1);
                            m.timeUnixNano = c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.timeUnixNano = c.longs === String ? "0" : 0;
                          m.flags = 0;
                        }
                        if (
                          (u.startTimeUnixNano != null &&
                            u.hasOwnProperty("startTimeUnixNano") &&
                            (typeof u.startTimeUnixNano == "number"
                              ? (m.startTimeUnixNano =
                                  c.longs === String ? String(u.startTimeUnixNano) : u.startTimeUnixNano)
                              : (m.startTimeUnixNano =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.startTimeUnixNano)
                                    : c.longs === Number
                                      ? new Qe.LongBits(
                                          u.startTimeUnixNano.low >>> 0,
                                          u.startTimeUnixNano.high >>> 0,
                                        ).toNumber()
                                      : u.startTimeUnixNano)),
                          u.timeUnixNano != null &&
                            u.hasOwnProperty("timeUnixNano") &&
                            (typeof u.timeUnixNano == "number"
                              ? (m.timeUnixNano = c.longs === String ? String(u.timeUnixNano) : u.timeUnixNano)
                              : (m.timeUnixNano =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.timeUnixNano)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.timeUnixNano.low >>> 0, u.timeUnixNano.high >>> 0).toNumber()
                                      : u.timeUnixNano)),
                          u.asDouble != null &&
                            u.hasOwnProperty("asDouble") &&
                            ((m.asDouble = c.json && !isFinite(u.asDouble) ? String(u.asDouble) : u.asDouble),
                            c.oneofs && (m.value = "asDouble")),
                          u.exemplars && u.exemplars.length)
                        ) {
                          m.exemplars = [];
                          for (var f = 0; f < u.exemplars.length; ++f)
                            m.exemplars[f] = Be.opentelemetry.proto.metrics.v1.Exemplar.toObject(u.exemplars[f], c);
                        }
                        if (
                          (u.asInt != null &&
                            u.hasOwnProperty("asInt") &&
                            (typeof u.asInt == "number"
                              ? (m.asInt = c.longs === String ? String(u.asInt) : u.asInt)
                              : (m.asInt =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.asInt)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.asInt.low >>> 0, u.asInt.high >>> 0).toNumber()
                                      : u.asInt),
                            c.oneofs && (m.value = "asInt")),
                          u.attributes && u.attributes.length)
                        ) {
                          m.attributes = [];
                          for (var f = 0; f < u.attributes.length; ++f)
                            m.attributes[f] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(u.attributes[f], c);
                        }
                        return (u.flags != null && u.hasOwnProperty("flags") && (m.flags = u.flags), m);
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (u) {
                        return (
                          u === void 0 && (u = "type.googleapis.com"),
                          u + "/opentelemetry.proto.metrics.v1.NumberDataPoint"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.HistogramDataPoint = (function () {
                    function o(a) {
                      if (
                        ((this.attributes = []),
                        (this.bucketCounts = []),
                        (this.explicitBounds = []),
                        (this.exemplars = []),
                        a)
                      )
                        for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                          a[u[c]] != null && (this[u[c]] = a[u[c]]);
                    }
                    ((o.prototype.attributes = Qe.emptyArray),
                      (o.prototype.startTimeUnixNano = null),
                      (o.prototype.timeUnixNano = null),
                      (o.prototype.count = null),
                      (o.prototype.sum = null),
                      (o.prototype.bucketCounts = Qe.emptyArray),
                      (o.prototype.explicitBounds = Qe.emptyArray),
                      (o.prototype.exemplars = Qe.emptyArray),
                      (o.prototype.flags = null),
                      (o.prototype.min = null),
                      (o.prototype.max = null));
                    var s;
                    return (
                      Object.defineProperty(o.prototype, "_sum", {
                        get: Qe.oneOfGetter((s = ["sum"])),
                        set: Qe.oneOfSetter(s),
                      }),
                      Object.defineProperty(o.prototype, "_min", {
                        get: Qe.oneOfGetter((s = ["min"])),
                        set: Qe.oneOfSetter(s),
                      }),
                      Object.defineProperty(o.prototype, "_max", {
                        get: Qe.oneOfGetter((s = ["max"])),
                        set: Qe.oneOfSetter(s),
                      }),
                      (o.create = function (u) {
                        return new o(u);
                      }),
                      (o.encode = function (u, c) {
                        if (
                          (c || (c = Ms.create()),
                          u.startTimeUnixNano != null &&
                            Object.hasOwnProperty.call(u, "startTimeUnixNano") &&
                            c.uint32(17).fixed64(u.startTimeUnixNano),
                          u.timeUnixNano != null &&
                            Object.hasOwnProperty.call(u, "timeUnixNano") &&
                            c.uint32(25).fixed64(u.timeUnixNano),
                          u.count != null && Object.hasOwnProperty.call(u, "count") && c.uint32(33).fixed64(u.count),
                          u.sum != null && Object.hasOwnProperty.call(u, "sum") && c.uint32(41).double(u.sum),
                          u.bucketCounts != null && u.bucketCounts.length)
                        ) {
                          c.uint32(50).fork();
                          for (var m = 0; m < u.bucketCounts.length; ++m) c.fixed64(u.bucketCounts[m]);
                          c.ldelim();
                        }
                        if (u.explicitBounds != null && u.explicitBounds.length) {
                          c.uint32(58).fork();
                          for (var m = 0; m < u.explicitBounds.length; ++m) c.double(u.explicitBounds[m]);
                          c.ldelim();
                        }
                        if (u.exemplars != null && u.exemplars.length)
                          for (var m = 0; m < u.exemplars.length; ++m)
                            Be.opentelemetry.proto.metrics.v1.Exemplar.encode(
                              u.exemplars[m],
                              c.uint32(66).fork(),
                            ).ldelim();
                        if (u.attributes != null && u.attributes.length)
                          for (var m = 0; m < u.attributes.length; ++m)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              u.attributes[m],
                              c.uint32(74).fork(),
                            ).ldelim();
                        return (
                          u.flags != null && Object.hasOwnProperty.call(u, "flags") && c.uint32(80).uint32(u.flags),
                          u.min != null && Object.hasOwnProperty.call(u, "min") && c.uint32(89).double(u.min),
                          u.max != null && Object.hasOwnProperty.call(u, "max") && c.uint32(97).double(u.max),
                          c
                        );
                      }),
                      (o.encodeDelimited = function (u, c) {
                        return this.encode(u, c).ldelim();
                      }),
                      (o.decode = function (u, c, m) {
                        u instanceof Ut || (u = Ut.create(u));
                        for (
                          var d = c === void 0 ? u.len : u.pos + c,
                            f = new Be.opentelemetry.proto.metrics.v1.HistogramDataPoint();
                          u.pos < d;
                        ) {
                          var p = u.uint32();
                          if (p === m) break;
                          switch (p >>> 3) {
                            case 9: {
                              ((f.attributes && f.attributes.length) || (f.attributes = []),
                                f.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(u, u.uint32())));
                              break;
                            }
                            case 2: {
                              f.startTimeUnixNano = u.fixed64();
                              break;
                            }
                            case 3: {
                              f.timeUnixNano = u.fixed64();
                              break;
                            }
                            case 4: {
                              f.count = u.fixed64();
                              break;
                            }
                            case 5: {
                              f.sum = u.double();
                              break;
                            }
                            case 6: {
                              if (((f.bucketCounts && f.bucketCounts.length) || (f.bucketCounts = []), (p & 7) === 2))
                                for (var h = u.uint32() + u.pos; u.pos < h; ) f.bucketCounts.push(u.fixed64());
                              else f.bucketCounts.push(u.fixed64());
                              break;
                            }
                            case 7: {
                              if (
                                ((f.explicitBounds && f.explicitBounds.length) || (f.explicitBounds = []),
                                (p & 7) === 2)
                              )
                                for (var h = u.uint32() + u.pos; u.pos < h; ) f.explicitBounds.push(u.double());
                              else f.explicitBounds.push(u.double());
                              break;
                            }
                            case 8: {
                              ((f.exemplars && f.exemplars.length) || (f.exemplars = []),
                                f.exemplars.push(Be.opentelemetry.proto.metrics.v1.Exemplar.decode(u, u.uint32())));
                              break;
                            }
                            case 10: {
                              f.flags = u.uint32();
                              break;
                            }
                            case 11: {
                              f.min = u.double();
                              break;
                            }
                            case 12: {
                              f.max = u.double();
                              break;
                            }
                            default:
                              u.skipType(p & 7);
                              break;
                          }
                        }
                        return f;
                      }),
                      (o.decodeDelimited = function (u) {
                        return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                      }),
                      (o.verify = function (u) {
                        if (typeof u != "object" || u === null) return "object expected";
                        var c = {};
                        if (u.attributes != null && u.hasOwnProperty("attributes")) {
                          if (!Array.isArray(u.attributes)) return "attributes: array expected";
                          for (var m = 0; m < u.attributes.length; ++m) {
                            var d = Be.opentelemetry.proto.common.v1.KeyValue.verify(u.attributes[m]);
                            if (d) return "attributes." + d;
                          }
                        }
                        if (
                          u.startTimeUnixNano != null &&
                          u.hasOwnProperty("startTimeUnixNano") &&
                          !Qe.isInteger(u.startTimeUnixNano) &&
                          !(
                            u.startTimeUnixNano &&
                            Qe.isInteger(u.startTimeUnixNano.low) &&
                            Qe.isInteger(u.startTimeUnixNano.high)
                          )
                        )
                          return "startTimeUnixNano: integer|Long expected";
                        if (
                          u.timeUnixNano != null &&
                          u.hasOwnProperty("timeUnixNano") &&
                          !Qe.isInteger(u.timeUnixNano) &&
                          !(u.timeUnixNano && Qe.isInteger(u.timeUnixNano.low) && Qe.isInteger(u.timeUnixNano.high))
                        )
                          return "timeUnixNano: integer|Long expected";
                        if (
                          u.count != null &&
                          u.hasOwnProperty("count") &&
                          !Qe.isInteger(u.count) &&
                          !(u.count && Qe.isInteger(u.count.low) && Qe.isInteger(u.count.high))
                        )
                          return "count: integer|Long expected";
                        if (u.sum != null && u.hasOwnProperty("sum") && ((c._sum = 1), typeof u.sum != "number"))
                          return "sum: number expected";
                        if (u.bucketCounts != null && u.hasOwnProperty("bucketCounts")) {
                          if (!Array.isArray(u.bucketCounts)) return "bucketCounts: array expected";
                          for (var m = 0; m < u.bucketCounts.length; ++m)
                            if (
                              !Qe.isInteger(u.bucketCounts[m]) &&
                              !(
                                u.bucketCounts[m] &&
                                Qe.isInteger(u.bucketCounts[m].low) &&
                                Qe.isInteger(u.bucketCounts[m].high)
                              )
                            )
                              return "bucketCounts: integer|Long[] expected";
                        }
                        if (u.explicitBounds != null && u.hasOwnProperty("explicitBounds")) {
                          if (!Array.isArray(u.explicitBounds)) return "explicitBounds: array expected";
                          for (var m = 0; m < u.explicitBounds.length; ++m)
                            if (typeof u.explicitBounds[m] != "number") return "explicitBounds: number[] expected";
                        }
                        if (u.exemplars != null && u.hasOwnProperty("exemplars")) {
                          if (!Array.isArray(u.exemplars)) return "exemplars: array expected";
                          for (var m = 0; m < u.exemplars.length; ++m) {
                            var d = Be.opentelemetry.proto.metrics.v1.Exemplar.verify(u.exemplars[m]);
                            if (d) return "exemplars." + d;
                          }
                        }
                        return u.flags != null && u.hasOwnProperty("flags") && !Qe.isInteger(u.flags)
                          ? "flags: integer expected"
                          : u.min != null && u.hasOwnProperty("min") && ((c._min = 1), typeof u.min != "number")
                            ? "min: number expected"
                            : u.max != null && u.hasOwnProperty("max") && ((c._max = 1), typeof u.max != "number")
                              ? "max: number expected"
                              : null;
                      }),
                      (o.fromObject = function (u) {
                        if (u instanceof Be.opentelemetry.proto.metrics.v1.HistogramDataPoint) return u;
                        var c = new Be.opentelemetry.proto.metrics.v1.HistogramDataPoint();
                        if (u.attributes) {
                          if (!Array.isArray(u.attributes))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: array expected",
                            );
                          c.attributes = [];
                          for (var m = 0; m < u.attributes.length; ++m) {
                            if (typeof u.attributes[m] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.HistogramDataPoint.attributes: object expected",
                              );
                            c.attributes[m] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(u.attributes[m]);
                          }
                        }
                        if (
                          (u.startTimeUnixNano != null &&
                            (Qe.Long
                              ? ((c.startTimeUnixNano = Qe.Long.fromValue(u.startTimeUnixNano)).unsigned = !1)
                              : typeof u.startTimeUnixNano == "string"
                                ? (c.startTimeUnixNano = parseInt(u.startTimeUnixNano, 10))
                                : typeof u.startTimeUnixNano == "number"
                                  ? (c.startTimeUnixNano = u.startTimeUnixNano)
                                  : typeof u.startTimeUnixNano == "object" &&
                                    (c.startTimeUnixNano = new Qe.LongBits(
                                      u.startTimeUnixNano.low >>> 0,
                                      u.startTimeUnixNano.high >>> 0,
                                    ).toNumber())),
                          u.timeUnixNano != null &&
                            (Qe.Long
                              ? ((c.timeUnixNano = Qe.Long.fromValue(u.timeUnixNano)).unsigned = !1)
                              : typeof u.timeUnixNano == "string"
                                ? (c.timeUnixNano = parseInt(u.timeUnixNano, 10))
                                : typeof u.timeUnixNano == "number"
                                  ? (c.timeUnixNano = u.timeUnixNano)
                                  : typeof u.timeUnixNano == "object" &&
                                    (c.timeUnixNano = new Qe.LongBits(
                                      u.timeUnixNano.low >>> 0,
                                      u.timeUnixNano.high >>> 0,
                                    ).toNumber())),
                          u.count != null &&
                            (Qe.Long
                              ? ((c.count = Qe.Long.fromValue(u.count)).unsigned = !1)
                              : typeof u.count == "string"
                                ? (c.count = parseInt(u.count, 10))
                                : typeof u.count == "number"
                                  ? (c.count = u.count)
                                  : typeof u.count == "object" &&
                                    (c.count = new Qe.LongBits(u.count.low >>> 0, u.count.high >>> 0).toNumber())),
                          u.sum != null && (c.sum = Number(u.sum)),
                          u.bucketCounts)
                        ) {
                          if (!Array.isArray(u.bucketCounts))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.HistogramDataPoint.bucketCounts: array expected",
                            );
                          c.bucketCounts = [];
                          for (var m = 0; m < u.bucketCounts.length; ++m)
                            Qe.Long
                              ? ((c.bucketCounts[m] = Qe.Long.fromValue(u.bucketCounts[m])).unsigned = !1)
                              : typeof u.bucketCounts[m] == "string"
                                ? (c.bucketCounts[m] = parseInt(u.bucketCounts[m], 10))
                                : typeof u.bucketCounts[m] == "number"
                                  ? (c.bucketCounts[m] = u.bucketCounts[m])
                                  : typeof u.bucketCounts[m] == "object" &&
                                    (c.bucketCounts[m] = new Qe.LongBits(
                                      u.bucketCounts[m].low >>> 0,
                                      u.bucketCounts[m].high >>> 0,
                                    ).toNumber());
                        }
                        if (u.explicitBounds) {
                          if (!Array.isArray(u.explicitBounds))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.HistogramDataPoint.explicitBounds: array expected",
                            );
                          c.explicitBounds = [];
                          for (var m = 0; m < u.explicitBounds.length; ++m)
                            c.explicitBounds[m] = Number(u.explicitBounds[m]);
                        }
                        if (u.exemplars) {
                          if (!Array.isArray(u.exemplars))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: array expected",
                            );
                          c.exemplars = [];
                          for (var m = 0; m < u.exemplars.length; ++m) {
                            if (typeof u.exemplars[m] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.HistogramDataPoint.exemplars: object expected",
                              );
                            c.exemplars[m] = Be.opentelemetry.proto.metrics.v1.Exemplar.fromObject(u.exemplars[m]);
                          }
                        }
                        return (
                          u.flags != null && (c.flags = u.flags >>> 0),
                          u.min != null && (c.min = Number(u.min)),
                          u.max != null && (c.max = Number(u.max)),
                          c
                        );
                      }),
                      (o.toObject = function (u, c) {
                        c || (c = {});
                        var m = {};
                        if (
                          ((c.arrays || c.defaults) &&
                            ((m.bucketCounts = []), (m.explicitBounds = []), (m.exemplars = []), (m.attributes = [])),
                          c.defaults)
                        ) {
                          if (Qe.Long) {
                            var d = new Qe.Long(0, 0, !1);
                            m.startTimeUnixNano =
                              c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.startTimeUnixNano = c.longs === String ? "0" : 0;
                          if (Qe.Long) {
                            var d = new Qe.Long(0, 0, !1);
                            m.timeUnixNano = c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.timeUnixNano = c.longs === String ? "0" : 0;
                          if (Qe.Long) {
                            var d = new Qe.Long(0, 0, !1);
                            m.count = c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.count = c.longs === String ? "0" : 0;
                          m.flags = 0;
                        }
                        if (
                          (u.startTimeUnixNano != null &&
                            u.hasOwnProperty("startTimeUnixNano") &&
                            (typeof u.startTimeUnixNano == "number"
                              ? (m.startTimeUnixNano =
                                  c.longs === String ? String(u.startTimeUnixNano) : u.startTimeUnixNano)
                              : (m.startTimeUnixNano =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.startTimeUnixNano)
                                    : c.longs === Number
                                      ? new Qe.LongBits(
                                          u.startTimeUnixNano.low >>> 0,
                                          u.startTimeUnixNano.high >>> 0,
                                        ).toNumber()
                                      : u.startTimeUnixNano)),
                          u.timeUnixNano != null &&
                            u.hasOwnProperty("timeUnixNano") &&
                            (typeof u.timeUnixNano == "number"
                              ? (m.timeUnixNano = c.longs === String ? String(u.timeUnixNano) : u.timeUnixNano)
                              : (m.timeUnixNano =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.timeUnixNano)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.timeUnixNano.low >>> 0, u.timeUnixNano.high >>> 0).toNumber()
                                      : u.timeUnixNano)),
                          u.count != null &&
                            u.hasOwnProperty("count") &&
                            (typeof u.count == "number"
                              ? (m.count = c.longs === String ? String(u.count) : u.count)
                              : (m.count =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.count)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.count.low >>> 0, u.count.high >>> 0).toNumber()
                                      : u.count)),
                          u.sum != null &&
                            u.hasOwnProperty("sum") &&
                            ((m.sum = c.json && !isFinite(u.sum) ? String(u.sum) : u.sum),
                            c.oneofs && (m._sum = "sum")),
                          u.bucketCounts && u.bucketCounts.length)
                        ) {
                          m.bucketCounts = [];
                          for (var f = 0; f < u.bucketCounts.length; ++f)
                            typeof u.bucketCounts[f] == "number"
                              ? (m.bucketCounts[f] = c.longs === String ? String(u.bucketCounts[f]) : u.bucketCounts[f])
                              : (m.bucketCounts[f] =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.bucketCounts[f])
                                    : c.longs === Number
                                      ? new Qe.LongBits(
                                          u.bucketCounts[f].low >>> 0,
                                          u.bucketCounts[f].high >>> 0,
                                        ).toNumber()
                                      : u.bucketCounts[f]);
                        }
                        if (u.explicitBounds && u.explicitBounds.length) {
                          m.explicitBounds = [];
                          for (var f = 0; f < u.explicitBounds.length; ++f)
                            m.explicitBounds[f] =
                              c.json && !isFinite(u.explicitBounds[f])
                                ? String(u.explicitBounds[f])
                                : u.explicitBounds[f];
                        }
                        if (u.exemplars && u.exemplars.length) {
                          m.exemplars = [];
                          for (var f = 0; f < u.exemplars.length; ++f)
                            m.exemplars[f] = Be.opentelemetry.proto.metrics.v1.Exemplar.toObject(u.exemplars[f], c);
                        }
                        if (u.attributes && u.attributes.length) {
                          m.attributes = [];
                          for (var f = 0; f < u.attributes.length; ++f)
                            m.attributes[f] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(u.attributes[f], c);
                        }
                        return (
                          u.flags != null && u.hasOwnProperty("flags") && (m.flags = u.flags),
                          u.min != null &&
                            u.hasOwnProperty("min") &&
                            ((m.min = c.json && !isFinite(u.min) ? String(u.min) : u.min),
                            c.oneofs && (m._min = "min")),
                          u.max != null &&
                            u.hasOwnProperty("max") &&
                            ((m.max = c.json && !isFinite(u.max) ? String(u.max) : u.max),
                            c.oneofs && (m._max = "max")),
                          m
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (u) {
                        return (
                          u === void 0 && (u = "type.googleapis.com"),
                          u + "/opentelemetry.proto.metrics.v1.HistogramDataPoint"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.ExponentialHistogramDataPoint = (function () {
                    function o(a) {
                      if (((this.attributes = []), (this.exemplars = []), a))
                        for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                          a[u[c]] != null && (this[u[c]] = a[u[c]]);
                    }
                    ((o.prototype.attributes = Qe.emptyArray),
                      (o.prototype.startTimeUnixNano = null),
                      (o.prototype.timeUnixNano = null),
                      (o.prototype.count = null),
                      (o.prototype.sum = null),
                      (o.prototype.scale = null),
                      (o.prototype.zeroCount = null),
                      (o.prototype.positive = null),
                      (o.prototype.negative = null),
                      (o.prototype.flags = null),
                      (o.prototype.exemplars = Qe.emptyArray),
                      (o.prototype.min = null),
                      (o.prototype.max = null),
                      (o.prototype.zeroThreshold = null));
                    var s;
                    return (
                      Object.defineProperty(o.prototype, "_sum", {
                        get: Qe.oneOfGetter((s = ["sum"])),
                        set: Qe.oneOfSetter(s),
                      }),
                      Object.defineProperty(o.prototype, "_min", {
                        get: Qe.oneOfGetter((s = ["min"])),
                        set: Qe.oneOfSetter(s),
                      }),
                      Object.defineProperty(o.prototype, "_max", {
                        get: Qe.oneOfGetter((s = ["max"])),
                        set: Qe.oneOfSetter(s),
                      }),
                      (o.create = function (u) {
                        return new o(u);
                      }),
                      (o.encode = function (u, c) {
                        if ((c || (c = Ms.create()), u.attributes != null && u.attributes.length))
                          for (var m = 0; m < u.attributes.length; ++m)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              u.attributes[m],
                              c.uint32(10).fork(),
                            ).ldelim();
                        if (
                          (u.startTimeUnixNano != null &&
                            Object.hasOwnProperty.call(u, "startTimeUnixNano") &&
                            c.uint32(17).fixed64(u.startTimeUnixNano),
                          u.timeUnixNano != null &&
                            Object.hasOwnProperty.call(u, "timeUnixNano") &&
                            c.uint32(25).fixed64(u.timeUnixNano),
                          u.count != null && Object.hasOwnProperty.call(u, "count") && c.uint32(33).fixed64(u.count),
                          u.sum != null && Object.hasOwnProperty.call(u, "sum") && c.uint32(41).double(u.sum),
                          u.scale != null && Object.hasOwnProperty.call(u, "scale") && c.uint32(48).sint32(u.scale),
                          u.zeroCount != null &&
                            Object.hasOwnProperty.call(u, "zeroCount") &&
                            c.uint32(57).fixed64(u.zeroCount),
                          u.positive != null &&
                            Object.hasOwnProperty.call(u, "positive") &&
                            Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(
                              u.positive,
                              c.uint32(66).fork(),
                            ).ldelim(),
                          u.negative != null &&
                            Object.hasOwnProperty.call(u, "negative") &&
                            Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.encode(
                              u.negative,
                              c.uint32(74).fork(),
                            ).ldelim(),
                          u.flags != null && Object.hasOwnProperty.call(u, "flags") && c.uint32(80).uint32(u.flags),
                          u.exemplars != null && u.exemplars.length)
                        )
                          for (var m = 0; m < u.exemplars.length; ++m)
                            Be.opentelemetry.proto.metrics.v1.Exemplar.encode(
                              u.exemplars[m],
                              c.uint32(90).fork(),
                            ).ldelim();
                        return (
                          u.min != null && Object.hasOwnProperty.call(u, "min") && c.uint32(97).double(u.min),
                          u.max != null && Object.hasOwnProperty.call(u, "max") && c.uint32(105).double(u.max),
                          u.zeroThreshold != null &&
                            Object.hasOwnProperty.call(u, "zeroThreshold") &&
                            c.uint32(113).double(u.zeroThreshold),
                          c
                        );
                      }),
                      (o.encodeDelimited = function (u, c) {
                        return this.encode(u, c).ldelim();
                      }),
                      (o.decode = function (u, c, m) {
                        u instanceof Ut || (u = Ut.create(u));
                        for (
                          var d = c === void 0 ? u.len : u.pos + c,
                            f = new Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint();
                          u.pos < d;
                        ) {
                          var p = u.uint32();
                          if (p === m) break;
                          switch (p >>> 3) {
                            case 1: {
                              ((f.attributes && f.attributes.length) || (f.attributes = []),
                                f.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(u, u.uint32())));
                              break;
                            }
                            case 2: {
                              f.startTimeUnixNano = u.fixed64();
                              break;
                            }
                            case 3: {
                              f.timeUnixNano = u.fixed64();
                              break;
                            }
                            case 4: {
                              f.count = u.fixed64();
                              break;
                            }
                            case 5: {
                              f.sum = u.double();
                              break;
                            }
                            case 6: {
                              f.scale = u.sint32();
                              break;
                            }
                            case 7: {
                              f.zeroCount = u.fixed64();
                              break;
                            }
                            case 8: {
                              f.positive =
                                Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(
                                  u,
                                  u.uint32(),
                                );
                              break;
                            }
                            case 9: {
                              f.negative =
                                Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.decode(
                                  u,
                                  u.uint32(),
                                );
                              break;
                            }
                            case 10: {
                              f.flags = u.uint32();
                              break;
                            }
                            case 11: {
                              ((f.exemplars && f.exemplars.length) || (f.exemplars = []),
                                f.exemplars.push(Be.opentelemetry.proto.metrics.v1.Exemplar.decode(u, u.uint32())));
                              break;
                            }
                            case 12: {
                              f.min = u.double();
                              break;
                            }
                            case 13: {
                              f.max = u.double();
                              break;
                            }
                            case 14: {
                              f.zeroThreshold = u.double();
                              break;
                            }
                            default:
                              u.skipType(p & 7);
                              break;
                          }
                        }
                        return f;
                      }),
                      (o.decodeDelimited = function (u) {
                        return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                      }),
                      (o.verify = function (u) {
                        if (typeof u != "object" || u === null) return "object expected";
                        var c = {};
                        if (u.attributes != null && u.hasOwnProperty("attributes")) {
                          if (!Array.isArray(u.attributes)) return "attributes: array expected";
                          for (var m = 0; m < u.attributes.length; ++m) {
                            var d = Be.opentelemetry.proto.common.v1.KeyValue.verify(u.attributes[m]);
                            if (d) return "attributes." + d;
                          }
                        }
                        if (
                          u.startTimeUnixNano != null &&
                          u.hasOwnProperty("startTimeUnixNano") &&
                          !Qe.isInteger(u.startTimeUnixNano) &&
                          !(
                            u.startTimeUnixNano &&
                            Qe.isInteger(u.startTimeUnixNano.low) &&
                            Qe.isInteger(u.startTimeUnixNano.high)
                          )
                        )
                          return "startTimeUnixNano: integer|Long expected";
                        if (
                          u.timeUnixNano != null &&
                          u.hasOwnProperty("timeUnixNano") &&
                          !Qe.isInteger(u.timeUnixNano) &&
                          !(u.timeUnixNano && Qe.isInteger(u.timeUnixNano.low) && Qe.isInteger(u.timeUnixNano.high))
                        )
                          return "timeUnixNano: integer|Long expected";
                        if (
                          u.count != null &&
                          u.hasOwnProperty("count") &&
                          !Qe.isInteger(u.count) &&
                          !(u.count && Qe.isInteger(u.count.low) && Qe.isInteger(u.count.high))
                        )
                          return "count: integer|Long expected";
                        if (u.sum != null && u.hasOwnProperty("sum") && ((c._sum = 1), typeof u.sum != "number"))
                          return "sum: number expected";
                        if (u.scale != null && u.hasOwnProperty("scale") && !Qe.isInteger(u.scale))
                          return "scale: integer expected";
                        if (
                          u.zeroCount != null &&
                          u.hasOwnProperty("zeroCount") &&
                          !Qe.isInteger(u.zeroCount) &&
                          !(u.zeroCount && Qe.isInteger(u.zeroCount.low) && Qe.isInteger(u.zeroCount.high))
                        )
                          return "zeroCount: integer|Long expected";
                        if (u.positive != null && u.hasOwnProperty("positive")) {
                          var d = Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(
                            u.positive,
                          );
                          if (d) return "positive." + d;
                        }
                        if (u.negative != null && u.hasOwnProperty("negative")) {
                          var d = Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.verify(
                            u.negative,
                          );
                          if (d) return "negative." + d;
                        }
                        if (u.flags != null && u.hasOwnProperty("flags") && !Qe.isInteger(u.flags))
                          return "flags: integer expected";
                        if (u.exemplars != null && u.hasOwnProperty("exemplars")) {
                          if (!Array.isArray(u.exemplars)) return "exemplars: array expected";
                          for (var m = 0; m < u.exemplars.length; ++m) {
                            var d = Be.opentelemetry.proto.metrics.v1.Exemplar.verify(u.exemplars[m]);
                            if (d) return "exemplars." + d;
                          }
                        }
                        return u.min != null && u.hasOwnProperty("min") && ((c._min = 1), typeof u.min != "number")
                          ? "min: number expected"
                          : u.max != null && u.hasOwnProperty("max") && ((c._max = 1), typeof u.max != "number")
                            ? "max: number expected"
                            : u.zeroThreshold != null &&
                                u.hasOwnProperty("zeroThreshold") &&
                                typeof u.zeroThreshold != "number"
                              ? "zeroThreshold: number expected"
                              : null;
                      }),
                      (o.fromObject = function (u) {
                        if (u instanceof Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint) return u;
                        var c = new Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint();
                        if (u.attributes) {
                          if (!Array.isArray(u.attributes))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: array expected",
                            );
                          c.attributes = [];
                          for (var m = 0; m < u.attributes.length; ++m) {
                            if (typeof u.attributes[m] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.attributes: object expected",
                              );
                            c.attributes[m] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(u.attributes[m]);
                          }
                        }
                        if (
                          (u.startTimeUnixNano != null &&
                            (Qe.Long
                              ? ((c.startTimeUnixNano = Qe.Long.fromValue(u.startTimeUnixNano)).unsigned = !1)
                              : typeof u.startTimeUnixNano == "string"
                                ? (c.startTimeUnixNano = parseInt(u.startTimeUnixNano, 10))
                                : typeof u.startTimeUnixNano == "number"
                                  ? (c.startTimeUnixNano = u.startTimeUnixNano)
                                  : typeof u.startTimeUnixNano == "object" &&
                                    (c.startTimeUnixNano = new Qe.LongBits(
                                      u.startTimeUnixNano.low >>> 0,
                                      u.startTimeUnixNano.high >>> 0,
                                    ).toNumber())),
                          u.timeUnixNano != null &&
                            (Qe.Long
                              ? ((c.timeUnixNano = Qe.Long.fromValue(u.timeUnixNano)).unsigned = !1)
                              : typeof u.timeUnixNano == "string"
                                ? (c.timeUnixNano = parseInt(u.timeUnixNano, 10))
                                : typeof u.timeUnixNano == "number"
                                  ? (c.timeUnixNano = u.timeUnixNano)
                                  : typeof u.timeUnixNano == "object" &&
                                    (c.timeUnixNano = new Qe.LongBits(
                                      u.timeUnixNano.low >>> 0,
                                      u.timeUnixNano.high >>> 0,
                                    ).toNumber())),
                          u.count != null &&
                            (Qe.Long
                              ? ((c.count = Qe.Long.fromValue(u.count)).unsigned = !1)
                              : typeof u.count == "string"
                                ? (c.count = parseInt(u.count, 10))
                                : typeof u.count == "number"
                                  ? (c.count = u.count)
                                  : typeof u.count == "object" &&
                                    (c.count = new Qe.LongBits(u.count.low >>> 0, u.count.high >>> 0).toNumber())),
                          u.sum != null && (c.sum = Number(u.sum)),
                          u.scale != null && (c.scale = u.scale | 0),
                          u.zeroCount != null &&
                            (Qe.Long
                              ? ((c.zeroCount = Qe.Long.fromValue(u.zeroCount)).unsigned = !1)
                              : typeof u.zeroCount == "string"
                                ? (c.zeroCount = parseInt(u.zeroCount, 10))
                                : typeof u.zeroCount == "number"
                                  ? (c.zeroCount = u.zeroCount)
                                  : typeof u.zeroCount == "object" &&
                                    (c.zeroCount = new Qe.LongBits(
                                      u.zeroCount.low >>> 0,
                                      u.zeroCount.high >>> 0,
                                    ).toNumber())),
                          u.positive != null)
                        ) {
                          if (typeof u.positive != "object")
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.positive: object expected",
                            );
                          c.positive =
                            Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(
                              u.positive,
                            );
                        }
                        if (u.negative != null) {
                          if (typeof u.negative != "object")
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.negative: object expected",
                            );
                          c.negative =
                            Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.fromObject(
                              u.negative,
                            );
                        }
                        if ((u.flags != null && (c.flags = u.flags >>> 0), u.exemplars)) {
                          if (!Array.isArray(u.exemplars))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: array expected",
                            );
                          c.exemplars = [];
                          for (var m = 0; m < u.exemplars.length; ++m) {
                            if (typeof u.exemplars[m] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.exemplars: object expected",
                              );
                            c.exemplars[m] = Be.opentelemetry.proto.metrics.v1.Exemplar.fromObject(u.exemplars[m]);
                          }
                        }
                        return (
                          u.min != null && (c.min = Number(u.min)),
                          u.max != null && (c.max = Number(u.max)),
                          u.zeroThreshold != null && (c.zeroThreshold = Number(u.zeroThreshold)),
                          c
                        );
                      }),
                      (o.toObject = function (u, c) {
                        c || (c = {});
                        var m = {};
                        if (((c.arrays || c.defaults) && ((m.attributes = []), (m.exemplars = [])), c.defaults)) {
                          if (Qe.Long) {
                            var d = new Qe.Long(0, 0, !1);
                            m.startTimeUnixNano =
                              c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.startTimeUnixNano = c.longs === String ? "0" : 0;
                          if (Qe.Long) {
                            var d = new Qe.Long(0, 0, !1);
                            m.timeUnixNano = c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.timeUnixNano = c.longs === String ? "0" : 0;
                          if (Qe.Long) {
                            var d = new Qe.Long(0, 0, !1);
                            m.count = c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.count = c.longs === String ? "0" : 0;
                          if (((m.scale = 0), Qe.Long)) {
                            var d = new Qe.Long(0, 0, !1);
                            m.zeroCount = c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.zeroCount = c.longs === String ? "0" : 0;
                          ((m.positive = null), (m.negative = null), (m.flags = 0), (m.zeroThreshold = 0));
                        }
                        if (u.attributes && u.attributes.length) {
                          m.attributes = [];
                          for (var f = 0; f < u.attributes.length; ++f)
                            m.attributes[f] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(u.attributes[f], c);
                        }
                        if (
                          (u.startTimeUnixNano != null &&
                            u.hasOwnProperty("startTimeUnixNano") &&
                            (typeof u.startTimeUnixNano == "number"
                              ? (m.startTimeUnixNano =
                                  c.longs === String ? String(u.startTimeUnixNano) : u.startTimeUnixNano)
                              : (m.startTimeUnixNano =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.startTimeUnixNano)
                                    : c.longs === Number
                                      ? new Qe.LongBits(
                                          u.startTimeUnixNano.low >>> 0,
                                          u.startTimeUnixNano.high >>> 0,
                                        ).toNumber()
                                      : u.startTimeUnixNano)),
                          u.timeUnixNano != null &&
                            u.hasOwnProperty("timeUnixNano") &&
                            (typeof u.timeUnixNano == "number"
                              ? (m.timeUnixNano = c.longs === String ? String(u.timeUnixNano) : u.timeUnixNano)
                              : (m.timeUnixNano =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.timeUnixNano)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.timeUnixNano.low >>> 0, u.timeUnixNano.high >>> 0).toNumber()
                                      : u.timeUnixNano)),
                          u.count != null &&
                            u.hasOwnProperty("count") &&
                            (typeof u.count == "number"
                              ? (m.count = c.longs === String ? String(u.count) : u.count)
                              : (m.count =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.count)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.count.low >>> 0, u.count.high >>> 0).toNumber()
                                      : u.count)),
                          u.sum != null &&
                            u.hasOwnProperty("sum") &&
                            ((m.sum = c.json && !isFinite(u.sum) ? String(u.sum) : u.sum),
                            c.oneofs && (m._sum = "sum")),
                          u.scale != null && u.hasOwnProperty("scale") && (m.scale = u.scale),
                          u.zeroCount != null &&
                            u.hasOwnProperty("zeroCount") &&
                            (typeof u.zeroCount == "number"
                              ? (m.zeroCount = c.longs === String ? String(u.zeroCount) : u.zeroCount)
                              : (m.zeroCount =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.zeroCount)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.zeroCount.low >>> 0, u.zeroCount.high >>> 0).toNumber()
                                      : u.zeroCount)),
                          u.positive != null &&
                            u.hasOwnProperty("positive") &&
                            (m.positive =
                              Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(
                                u.positive,
                                c,
                              )),
                          u.negative != null &&
                            u.hasOwnProperty("negative") &&
                            (m.negative =
                              Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.toObject(
                                u.negative,
                                c,
                              )),
                          u.flags != null && u.hasOwnProperty("flags") && (m.flags = u.flags),
                          u.exemplars && u.exemplars.length)
                        ) {
                          m.exemplars = [];
                          for (var f = 0; f < u.exemplars.length; ++f)
                            m.exemplars[f] = Be.opentelemetry.proto.metrics.v1.Exemplar.toObject(u.exemplars[f], c);
                        }
                        return (
                          u.min != null &&
                            u.hasOwnProperty("min") &&
                            ((m.min = c.json && !isFinite(u.min) ? String(u.min) : u.min),
                            c.oneofs && (m._min = "min")),
                          u.max != null &&
                            u.hasOwnProperty("max") &&
                            ((m.max = c.json && !isFinite(u.max) ? String(u.max) : u.max),
                            c.oneofs && (m._max = "max")),
                          u.zeroThreshold != null &&
                            u.hasOwnProperty("zeroThreshold") &&
                            (m.zeroThreshold =
                              c.json && !isFinite(u.zeroThreshold) ? String(u.zeroThreshold) : u.zeroThreshold),
                          m
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (u) {
                        return (
                          u === void 0 && (u = "type.googleapis.com"),
                          u + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint"
                        );
                      }),
                      (o.Buckets = (function () {
                        function a(u) {
                          if (((this.bucketCounts = []), u))
                            for (var c = Object.keys(u), m = 0; m < c.length; ++m)
                              u[c[m]] != null && (this[c[m]] = u[c[m]]);
                        }
                        return (
                          (a.prototype.offset = null),
                          (a.prototype.bucketCounts = Qe.emptyArray),
                          (a.create = function (c) {
                            return new a(c);
                          }),
                          (a.encode = function (c, m) {
                            if (
                              (m || (m = Ms.create()),
                              c.offset != null &&
                                Object.hasOwnProperty.call(c, "offset") &&
                                m.uint32(8).sint32(c.offset),
                              c.bucketCounts != null && c.bucketCounts.length)
                            ) {
                              m.uint32(18).fork();
                              for (var d = 0; d < c.bucketCounts.length; ++d) m.uint64(c.bucketCounts[d]);
                              m.ldelim();
                            }
                            return m;
                          }),
                          (a.encodeDelimited = function (c, m) {
                            return this.encode(c, m).ldelim();
                          }),
                          (a.decode = function (c, m, d) {
                            c instanceof Ut || (c = Ut.create(c));
                            for (
                              var f = m === void 0 ? c.len : c.pos + m,
                                p = new Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets();
                              c.pos < f;
                            ) {
                              var h = c.uint32();
                              if (h === d) break;
                              switch (h >>> 3) {
                                case 1: {
                                  p.offset = c.sint32();
                                  break;
                                }
                                case 2: {
                                  if (
                                    ((p.bucketCounts && p.bucketCounts.length) || (p.bucketCounts = []), (h & 7) === 2)
                                  )
                                    for (var g = c.uint32() + c.pos; c.pos < g; ) p.bucketCounts.push(c.uint64());
                                  else p.bucketCounts.push(c.uint64());
                                  break;
                                }
                                default:
                                  c.skipType(h & 7);
                                  break;
                              }
                            }
                            return p;
                          }),
                          (a.decodeDelimited = function (c) {
                            return (c instanceof Ut || (c = new Ut(c)), this.decode(c, c.uint32()));
                          }),
                          (a.verify = function (c) {
                            if (typeof c != "object" || c === null) return "object expected";
                            if (c.offset != null && c.hasOwnProperty("offset") && !Qe.isInteger(c.offset))
                              return "offset: integer expected";
                            if (c.bucketCounts != null && c.hasOwnProperty("bucketCounts")) {
                              if (!Array.isArray(c.bucketCounts)) return "bucketCounts: array expected";
                              for (var m = 0; m < c.bucketCounts.length; ++m)
                                if (
                                  !Qe.isInteger(c.bucketCounts[m]) &&
                                  !(
                                    c.bucketCounts[m] &&
                                    Qe.isInteger(c.bucketCounts[m].low) &&
                                    Qe.isInteger(c.bucketCounts[m].high)
                                  )
                                )
                                  return "bucketCounts: integer|Long[] expected";
                            }
                            return null;
                          }),
                          (a.fromObject = function (c) {
                            if (c instanceof Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets)
                              return c;
                            var m = new Be.opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets();
                            if ((c.offset != null && (m.offset = c.offset | 0), c.bucketCounts)) {
                              if (!Array.isArray(c.bucketCounts))
                                throw TypeError(
                                  ".opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets.bucketCounts: array expected",
                                );
                              m.bucketCounts = [];
                              for (var d = 0; d < c.bucketCounts.length; ++d)
                                Qe.Long
                                  ? ((m.bucketCounts[d] = Qe.Long.fromValue(c.bucketCounts[d])).unsigned = !0)
                                  : typeof c.bucketCounts[d] == "string"
                                    ? (m.bucketCounts[d] = parseInt(c.bucketCounts[d], 10))
                                    : typeof c.bucketCounts[d] == "number"
                                      ? (m.bucketCounts[d] = c.bucketCounts[d])
                                      : typeof c.bucketCounts[d] == "object" &&
                                        (m.bucketCounts[d] = new Qe.LongBits(
                                          c.bucketCounts[d].low >>> 0,
                                          c.bucketCounts[d].high >>> 0,
                                        ).toNumber(!0));
                            }
                            return m;
                          }),
                          (a.toObject = function (c, m) {
                            m || (m = {});
                            var d = {};
                            if (
                              ((m.arrays || m.defaults) && (d.bucketCounts = []),
                              m.defaults && (d.offset = 0),
                              c.offset != null && c.hasOwnProperty("offset") && (d.offset = c.offset),
                              c.bucketCounts && c.bucketCounts.length)
                            ) {
                              d.bucketCounts = [];
                              for (var f = 0; f < c.bucketCounts.length; ++f)
                                typeof c.bucketCounts[f] == "number"
                                  ? (d.bucketCounts[f] =
                                      m.longs === String ? String(c.bucketCounts[f]) : c.bucketCounts[f])
                                  : (d.bucketCounts[f] =
                                      m.longs === String
                                        ? Qe.Long.prototype.toString.call(c.bucketCounts[f])
                                        : m.longs === Number
                                          ? new Qe.LongBits(
                                              c.bucketCounts[f].low >>> 0,
                                              c.bucketCounts[f].high >>> 0,
                                            ).toNumber(!0)
                                          : c.bucketCounts[f]);
                            }
                            return d;
                          }),
                          (a.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (a.getTypeUrl = function (c) {
                            return (
                              c === void 0 && (c = "type.googleapis.com"),
                              c + "/opentelemetry.proto.metrics.v1.ExponentialHistogramDataPoint.Buckets"
                            );
                          }),
                          a
                        );
                      })()),
                      o
                    );
                  })()),
                  (n.SummaryDataPoint = (function () {
                    function o(s) {
                      if (((this.attributes = []), (this.quantileValues = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.attributes = Qe.emptyArray),
                      (o.prototype.startTimeUnixNano = null),
                      (o.prototype.timeUnixNano = null),
                      (o.prototype.count = null),
                      (o.prototype.sum = null),
                      (o.prototype.quantileValues = Qe.emptyArray),
                      (o.prototype.flags = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.startTimeUnixNano != null &&
                            Object.hasOwnProperty.call(a, "startTimeUnixNano") &&
                            u.uint32(17).fixed64(a.startTimeUnixNano),
                          a.timeUnixNano != null &&
                            Object.hasOwnProperty.call(a, "timeUnixNano") &&
                            u.uint32(25).fixed64(a.timeUnixNano),
                          a.count != null && Object.hasOwnProperty.call(a, "count") && u.uint32(33).fixed64(a.count),
                          a.sum != null && Object.hasOwnProperty.call(a, "sum") && u.uint32(41).double(a.sum),
                          a.quantileValues != null && a.quantileValues.length)
                        )
                          for (var c = 0; c < a.quantileValues.length; ++c)
                            Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.encode(
                              a.quantileValues[c],
                              u.uint32(50).fork(),
                            ).ldelim();
                        if (a.attributes != null && a.attributes.length)
                          for (var c = 0; c < a.attributes.length; ++c)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              a.attributes[c],
                              u.uint32(58).fork(),
                            ).ldelim();
                        return (
                          a.flags != null && Object.hasOwnProperty.call(a, "flags") && u.uint32(64).uint32(a.flags),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.metrics.v1.SummaryDataPoint();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 7: {
                              ((d.attributes && d.attributes.length) || (d.attributes = []),
                                d.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(a, a.uint32())));
                              break;
                            }
                            case 2: {
                              d.startTimeUnixNano = a.fixed64();
                              break;
                            }
                            case 3: {
                              d.timeUnixNano = a.fixed64();
                              break;
                            }
                            case 4: {
                              d.count = a.fixed64();
                              break;
                            }
                            case 5: {
                              d.sum = a.double();
                              break;
                            }
                            case 6: {
                              ((d.quantileValues && d.quantileValues.length) || (d.quantileValues = []),
                                d.quantileValues.push(
                                  Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.decode(
                                    a,
                                    a.uint32(),
                                  ),
                                ));
                              break;
                            }
                            case 8: {
                              d.flags = a.uint32();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.attributes != null && a.hasOwnProperty("attributes")) {
                          if (!Array.isArray(a.attributes)) return "attributes: array expected";
                          for (var u = 0; u < a.attributes.length; ++u) {
                            var c = Be.opentelemetry.proto.common.v1.KeyValue.verify(a.attributes[u]);
                            if (c) return "attributes." + c;
                          }
                        }
                        if (
                          a.startTimeUnixNano != null &&
                          a.hasOwnProperty("startTimeUnixNano") &&
                          !Qe.isInteger(a.startTimeUnixNano) &&
                          !(
                            a.startTimeUnixNano &&
                            Qe.isInteger(a.startTimeUnixNano.low) &&
                            Qe.isInteger(a.startTimeUnixNano.high)
                          )
                        )
                          return "startTimeUnixNano: integer|Long expected";
                        if (
                          a.timeUnixNano != null &&
                          a.hasOwnProperty("timeUnixNano") &&
                          !Qe.isInteger(a.timeUnixNano) &&
                          !(a.timeUnixNano && Qe.isInteger(a.timeUnixNano.low) && Qe.isInteger(a.timeUnixNano.high))
                        )
                          return "timeUnixNano: integer|Long expected";
                        if (
                          a.count != null &&
                          a.hasOwnProperty("count") &&
                          !Qe.isInteger(a.count) &&
                          !(a.count && Qe.isInteger(a.count.low) && Qe.isInteger(a.count.high))
                        )
                          return "count: integer|Long expected";
                        if (a.sum != null && a.hasOwnProperty("sum") && typeof a.sum != "number")
                          return "sum: number expected";
                        if (a.quantileValues != null && a.hasOwnProperty("quantileValues")) {
                          if (!Array.isArray(a.quantileValues)) return "quantileValues: array expected";
                          for (var u = 0; u < a.quantileValues.length; ++u) {
                            var c = Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.verify(
                              a.quantileValues[u],
                            );
                            if (c) return "quantileValues." + c;
                          }
                        }
                        return a.flags != null && a.hasOwnProperty("flags") && !Qe.isInteger(a.flags)
                          ? "flags: integer expected"
                          : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.metrics.v1.SummaryDataPoint) return a;
                        var u = new Be.opentelemetry.proto.metrics.v1.SummaryDataPoint();
                        if (a.attributes) {
                          if (!Array.isArray(a.attributes))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: array expected",
                            );
                          u.attributes = [];
                          for (var c = 0; c < a.attributes.length; ++c) {
                            if (typeof a.attributes[c] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.SummaryDataPoint.attributes: object expected",
                              );
                            u.attributes[c] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(a.attributes[c]);
                          }
                        }
                        if (
                          (a.startTimeUnixNano != null &&
                            (Qe.Long
                              ? ((u.startTimeUnixNano = Qe.Long.fromValue(a.startTimeUnixNano)).unsigned = !1)
                              : typeof a.startTimeUnixNano == "string"
                                ? (u.startTimeUnixNano = parseInt(a.startTimeUnixNano, 10))
                                : typeof a.startTimeUnixNano == "number"
                                  ? (u.startTimeUnixNano = a.startTimeUnixNano)
                                  : typeof a.startTimeUnixNano == "object" &&
                                    (u.startTimeUnixNano = new Qe.LongBits(
                                      a.startTimeUnixNano.low >>> 0,
                                      a.startTimeUnixNano.high >>> 0,
                                    ).toNumber())),
                          a.timeUnixNano != null &&
                            (Qe.Long
                              ? ((u.timeUnixNano = Qe.Long.fromValue(a.timeUnixNano)).unsigned = !1)
                              : typeof a.timeUnixNano == "string"
                                ? (u.timeUnixNano = parseInt(a.timeUnixNano, 10))
                                : typeof a.timeUnixNano == "number"
                                  ? (u.timeUnixNano = a.timeUnixNano)
                                  : typeof a.timeUnixNano == "object" &&
                                    (u.timeUnixNano = new Qe.LongBits(
                                      a.timeUnixNano.low >>> 0,
                                      a.timeUnixNano.high >>> 0,
                                    ).toNumber())),
                          a.count != null &&
                            (Qe.Long
                              ? ((u.count = Qe.Long.fromValue(a.count)).unsigned = !1)
                              : typeof a.count == "string"
                                ? (u.count = parseInt(a.count, 10))
                                : typeof a.count == "number"
                                  ? (u.count = a.count)
                                  : typeof a.count == "object" &&
                                    (u.count = new Qe.LongBits(a.count.low >>> 0, a.count.high >>> 0).toNumber())),
                          a.sum != null && (u.sum = Number(a.sum)),
                          a.quantileValues)
                        ) {
                          if (!Array.isArray(a.quantileValues))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: array expected",
                            );
                          u.quantileValues = [];
                          for (var c = 0; c < a.quantileValues.length; ++c) {
                            if (typeof a.quantileValues[c] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.SummaryDataPoint.quantileValues: object expected",
                              );
                            u.quantileValues[c] =
                              Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.fromObject(
                                a.quantileValues[c],
                              );
                          }
                        }
                        return (a.flags != null && (u.flags = a.flags >>> 0), u);
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (((u.arrays || u.defaults) && ((c.quantileValues = []), (c.attributes = [])), u.defaults)) {
                          if (Qe.Long) {
                            var m = new Qe.Long(0, 0, !1);
                            c.startTimeUnixNano =
                              u.longs === String ? m.toString() : u.longs === Number ? m.toNumber() : m;
                          } else c.startTimeUnixNano = u.longs === String ? "0" : 0;
                          if (Qe.Long) {
                            var m = new Qe.Long(0, 0, !1);
                            c.timeUnixNano = u.longs === String ? m.toString() : u.longs === Number ? m.toNumber() : m;
                          } else c.timeUnixNano = u.longs === String ? "0" : 0;
                          if (Qe.Long) {
                            var m = new Qe.Long(0, 0, !1);
                            c.count = u.longs === String ? m.toString() : u.longs === Number ? m.toNumber() : m;
                          } else c.count = u.longs === String ? "0" : 0;
                          ((c.sum = 0), (c.flags = 0));
                        }
                        if (
                          (a.startTimeUnixNano != null &&
                            a.hasOwnProperty("startTimeUnixNano") &&
                            (typeof a.startTimeUnixNano == "number"
                              ? (c.startTimeUnixNano =
                                  u.longs === String ? String(a.startTimeUnixNano) : a.startTimeUnixNano)
                              : (c.startTimeUnixNano =
                                  u.longs === String
                                    ? Qe.Long.prototype.toString.call(a.startTimeUnixNano)
                                    : u.longs === Number
                                      ? new Qe.LongBits(
                                          a.startTimeUnixNano.low >>> 0,
                                          a.startTimeUnixNano.high >>> 0,
                                        ).toNumber()
                                      : a.startTimeUnixNano)),
                          a.timeUnixNano != null &&
                            a.hasOwnProperty("timeUnixNano") &&
                            (typeof a.timeUnixNano == "number"
                              ? (c.timeUnixNano = u.longs === String ? String(a.timeUnixNano) : a.timeUnixNano)
                              : (c.timeUnixNano =
                                  u.longs === String
                                    ? Qe.Long.prototype.toString.call(a.timeUnixNano)
                                    : u.longs === Number
                                      ? new Qe.LongBits(a.timeUnixNano.low >>> 0, a.timeUnixNano.high >>> 0).toNumber()
                                      : a.timeUnixNano)),
                          a.count != null &&
                            a.hasOwnProperty("count") &&
                            (typeof a.count == "number"
                              ? (c.count = u.longs === String ? String(a.count) : a.count)
                              : (c.count =
                                  u.longs === String
                                    ? Qe.Long.prototype.toString.call(a.count)
                                    : u.longs === Number
                                      ? new Qe.LongBits(a.count.low >>> 0, a.count.high >>> 0).toNumber()
                                      : a.count)),
                          a.sum != null &&
                            a.hasOwnProperty("sum") &&
                            (c.sum = u.json && !isFinite(a.sum) ? String(a.sum) : a.sum),
                          a.quantileValues && a.quantileValues.length)
                        ) {
                          c.quantileValues = [];
                          for (var d = 0; d < a.quantileValues.length; ++d)
                            c.quantileValues[d] =
                              Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile.toObject(
                                a.quantileValues[d],
                                u,
                              );
                        }
                        if (a.attributes && a.attributes.length) {
                          c.attributes = [];
                          for (var d = 0; d < a.attributes.length; ++d)
                            c.attributes[d] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(a.attributes[d], u);
                        }
                        return (a.flags != null && a.hasOwnProperty("flags") && (c.flags = a.flags), c);
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.metrics.v1.SummaryDataPoint"
                        );
                      }),
                      (o.ValueAtQuantile = (function () {
                        function s(a) {
                          if (a)
                            for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                              a[u[c]] != null && (this[u[c]] = a[u[c]]);
                        }
                        return (
                          (s.prototype.quantile = null),
                          (s.prototype.value = null),
                          (s.create = function (u) {
                            return new s(u);
                          }),
                          (s.encode = function (u, c) {
                            return (
                              c || (c = Ms.create()),
                              u.quantile != null &&
                                Object.hasOwnProperty.call(u, "quantile") &&
                                c.uint32(9).double(u.quantile),
                              u.value != null && Object.hasOwnProperty.call(u, "value") && c.uint32(17).double(u.value),
                              c
                            );
                          }),
                          (s.encodeDelimited = function (u, c) {
                            return this.encode(u, c).ldelim();
                          }),
                          (s.decode = function (u, c, m) {
                            u instanceof Ut || (u = Ut.create(u));
                            for (
                              var d = c === void 0 ? u.len : u.pos + c,
                                f = new Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile();
                              u.pos < d;
                            ) {
                              var p = u.uint32();
                              if (p === m) break;
                              switch (p >>> 3) {
                                case 1: {
                                  f.quantile = u.double();
                                  break;
                                }
                                case 2: {
                                  f.value = u.double();
                                  break;
                                }
                                default:
                                  u.skipType(p & 7);
                                  break;
                              }
                            }
                            return f;
                          }),
                          (s.decodeDelimited = function (u) {
                            return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                          }),
                          (s.verify = function (u) {
                            return typeof u != "object" || u === null
                              ? "object expected"
                              : u.quantile != null && u.hasOwnProperty("quantile") && typeof u.quantile != "number"
                                ? "quantile: number expected"
                                : u.value != null && u.hasOwnProperty("value") && typeof u.value != "number"
                                  ? "value: number expected"
                                  : null;
                          }),
                          (s.fromObject = function (u) {
                            if (u instanceof Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile)
                              return u;
                            var c = new Be.opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile();
                            return (
                              u.quantile != null && (c.quantile = Number(u.quantile)),
                              u.value != null && (c.value = Number(u.value)),
                              c
                            );
                          }),
                          (s.toObject = function (u, c) {
                            c || (c = {});
                            var m = {};
                            return (
                              c.defaults && ((m.quantile = 0), (m.value = 0)),
                              u.quantile != null &&
                                u.hasOwnProperty("quantile") &&
                                (m.quantile = c.json && !isFinite(u.quantile) ? String(u.quantile) : u.quantile),
                              u.value != null &&
                                u.hasOwnProperty("value") &&
                                (m.value = c.json && !isFinite(u.value) ? String(u.value) : u.value),
                              m
                            );
                          }),
                          (s.prototype.toJSON = function () {
                            return this.constructor.toObject(this, Ao.util.toJSONOptions);
                          }),
                          (s.getTypeUrl = function (u) {
                            return (
                              u === void 0 && (u = "type.googleapis.com"),
                              u + "/opentelemetry.proto.metrics.v1.SummaryDataPoint.ValueAtQuantile"
                            );
                          }),
                          s
                        );
                      })()),
                      o
                    );
                  })()),
                  (n.Exemplar = (function () {
                    function o(a) {
                      if (((this.filteredAttributes = []), a))
                        for (var u = Object.keys(a), c = 0; c < u.length; ++c)
                          a[u[c]] != null && (this[u[c]] = a[u[c]]);
                    }
                    ((o.prototype.filteredAttributes = Qe.emptyArray),
                      (o.prototype.timeUnixNano = null),
                      (o.prototype.asDouble = null),
                      (o.prototype.asInt = null),
                      (o.prototype.spanId = null),
                      (o.prototype.traceId = null));
                    var s;
                    return (
                      Object.defineProperty(o.prototype, "value", {
                        get: Qe.oneOfGetter((s = ["asDouble", "asInt"])),
                        set: Qe.oneOfSetter(s),
                      }),
                      (o.create = function (u) {
                        return new o(u);
                      }),
                      (o.encode = function (u, c) {
                        if (
                          (c || (c = Ms.create()),
                          u.timeUnixNano != null &&
                            Object.hasOwnProperty.call(u, "timeUnixNano") &&
                            c.uint32(17).fixed64(u.timeUnixNano),
                          u.asDouble != null &&
                            Object.hasOwnProperty.call(u, "asDouble") &&
                            c.uint32(25).double(u.asDouble),
                          u.spanId != null && Object.hasOwnProperty.call(u, "spanId") && c.uint32(34).bytes(u.spanId),
                          u.traceId != null &&
                            Object.hasOwnProperty.call(u, "traceId") &&
                            c.uint32(42).bytes(u.traceId),
                          u.asInt != null && Object.hasOwnProperty.call(u, "asInt") && c.uint32(49).sfixed64(u.asInt),
                          u.filteredAttributes != null && u.filteredAttributes.length)
                        )
                          for (var m = 0; m < u.filteredAttributes.length; ++m)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              u.filteredAttributes[m],
                              c.uint32(58).fork(),
                            ).ldelim();
                        return c;
                      }),
                      (o.encodeDelimited = function (u, c) {
                        return this.encode(u, c).ldelim();
                      }),
                      (o.decode = function (u, c, m) {
                        u instanceof Ut || (u = Ut.create(u));
                        for (
                          var d = c === void 0 ? u.len : u.pos + c,
                            f = new Be.opentelemetry.proto.metrics.v1.Exemplar();
                          u.pos < d;
                        ) {
                          var p = u.uint32();
                          if (p === m) break;
                          switch (p >>> 3) {
                            case 7: {
                              ((f.filteredAttributes && f.filteredAttributes.length) || (f.filteredAttributes = []),
                                f.filteredAttributes.push(
                                  Be.opentelemetry.proto.common.v1.KeyValue.decode(u, u.uint32()),
                                ));
                              break;
                            }
                            case 2: {
                              f.timeUnixNano = u.fixed64();
                              break;
                            }
                            case 3: {
                              f.asDouble = u.double();
                              break;
                            }
                            case 6: {
                              f.asInt = u.sfixed64();
                              break;
                            }
                            case 4: {
                              f.spanId = u.bytes();
                              break;
                            }
                            case 5: {
                              f.traceId = u.bytes();
                              break;
                            }
                            default:
                              u.skipType(p & 7);
                              break;
                          }
                        }
                        return f;
                      }),
                      (o.decodeDelimited = function (u) {
                        return (u instanceof Ut || (u = new Ut(u)), this.decode(u, u.uint32()));
                      }),
                      (o.verify = function (u) {
                        if (typeof u != "object" || u === null) return "object expected";
                        var c = {};
                        if (u.filteredAttributes != null && u.hasOwnProperty("filteredAttributes")) {
                          if (!Array.isArray(u.filteredAttributes)) return "filteredAttributes: array expected";
                          for (var m = 0; m < u.filteredAttributes.length; ++m) {
                            var d = Be.opentelemetry.proto.common.v1.KeyValue.verify(u.filteredAttributes[m]);
                            if (d) return "filteredAttributes." + d;
                          }
                        }
                        if (
                          u.timeUnixNano != null &&
                          u.hasOwnProperty("timeUnixNano") &&
                          !Qe.isInteger(u.timeUnixNano) &&
                          !(u.timeUnixNano && Qe.isInteger(u.timeUnixNano.low) && Qe.isInteger(u.timeUnixNano.high))
                        )
                          return "timeUnixNano: integer|Long expected";
                        if (
                          u.asDouble != null &&
                          u.hasOwnProperty("asDouble") &&
                          ((c.value = 1), typeof u.asDouble != "number")
                        )
                          return "asDouble: number expected";
                        if (u.asInt != null && u.hasOwnProperty("asInt")) {
                          if (c.value === 1) return "value: multiple values";
                          if (
                            ((c.value = 1),
                            !Qe.isInteger(u.asInt) &&
                              !(u.asInt && Qe.isInteger(u.asInt.low) && Qe.isInteger(u.asInt.high)))
                          )
                            return "asInt: integer|Long expected";
                        }
                        return u.spanId != null &&
                          u.hasOwnProperty("spanId") &&
                          !((u.spanId && typeof u.spanId.length == "number") || Qe.isString(u.spanId))
                          ? "spanId: buffer expected"
                          : u.traceId != null &&
                              u.hasOwnProperty("traceId") &&
                              !((u.traceId && typeof u.traceId.length == "number") || Qe.isString(u.traceId))
                            ? "traceId: buffer expected"
                            : null;
                      }),
                      (o.fromObject = function (u) {
                        if (u instanceof Be.opentelemetry.proto.metrics.v1.Exemplar) return u;
                        var c = new Be.opentelemetry.proto.metrics.v1.Exemplar();
                        if (u.filteredAttributes) {
                          if (!Array.isArray(u.filteredAttributes))
                            throw TypeError(
                              ".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: array expected",
                            );
                          c.filteredAttributes = [];
                          for (var m = 0; m < u.filteredAttributes.length; ++m) {
                            if (typeof u.filteredAttributes[m] != "object")
                              throw TypeError(
                                ".opentelemetry.proto.metrics.v1.Exemplar.filteredAttributes: object expected",
                              );
                            c.filteredAttributes[m] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(
                              u.filteredAttributes[m],
                            );
                          }
                        }
                        return (
                          u.timeUnixNano != null &&
                            (Qe.Long
                              ? ((c.timeUnixNano = Qe.Long.fromValue(u.timeUnixNano)).unsigned = !1)
                              : typeof u.timeUnixNano == "string"
                                ? (c.timeUnixNano = parseInt(u.timeUnixNano, 10))
                                : typeof u.timeUnixNano == "number"
                                  ? (c.timeUnixNano = u.timeUnixNano)
                                  : typeof u.timeUnixNano == "object" &&
                                    (c.timeUnixNano = new Qe.LongBits(
                                      u.timeUnixNano.low >>> 0,
                                      u.timeUnixNano.high >>> 0,
                                    ).toNumber())),
                          u.asDouble != null && (c.asDouble = Number(u.asDouble)),
                          u.asInt != null &&
                            (Qe.Long
                              ? ((c.asInt = Qe.Long.fromValue(u.asInt)).unsigned = !1)
                              : typeof u.asInt == "string"
                                ? (c.asInt = parseInt(u.asInt, 10))
                                : typeof u.asInt == "number"
                                  ? (c.asInt = u.asInt)
                                  : typeof u.asInt == "object" &&
                                    (c.asInt = new Qe.LongBits(u.asInt.low >>> 0, u.asInt.high >>> 0).toNumber())),
                          u.spanId != null &&
                            (typeof u.spanId == "string"
                              ? Qe.base64.decode(u.spanId, (c.spanId = Qe.newBuffer(Qe.base64.length(u.spanId))), 0)
                              : u.spanId.length >= 0 && (c.spanId = u.spanId)),
                          u.traceId != null &&
                            (typeof u.traceId == "string"
                              ? Qe.base64.decode(u.traceId, (c.traceId = Qe.newBuffer(Qe.base64.length(u.traceId))), 0)
                              : u.traceId.length >= 0 && (c.traceId = u.traceId)),
                          c
                        );
                      }),
                      (o.toObject = function (u, c) {
                        c || (c = {});
                        var m = {};
                        if (((c.arrays || c.defaults) && (m.filteredAttributes = []), c.defaults)) {
                          if (Qe.Long) {
                            var d = new Qe.Long(0, 0, !1);
                            m.timeUnixNano = c.longs === String ? d.toString() : c.longs === Number ? d.toNumber() : d;
                          } else m.timeUnixNano = c.longs === String ? "0" : 0;
                          (c.bytes === String
                            ? (m.spanId = "")
                            : ((m.spanId = []), c.bytes !== Array && (m.spanId = Qe.newBuffer(m.spanId))),
                            c.bytes === String
                              ? (m.traceId = "")
                              : ((m.traceId = []), c.bytes !== Array && (m.traceId = Qe.newBuffer(m.traceId))));
                        }
                        if (
                          (u.timeUnixNano != null &&
                            u.hasOwnProperty("timeUnixNano") &&
                            (typeof u.timeUnixNano == "number"
                              ? (m.timeUnixNano = c.longs === String ? String(u.timeUnixNano) : u.timeUnixNano)
                              : (m.timeUnixNano =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.timeUnixNano)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.timeUnixNano.low >>> 0, u.timeUnixNano.high >>> 0).toNumber()
                                      : u.timeUnixNano)),
                          u.asDouble != null &&
                            u.hasOwnProperty("asDouble") &&
                            ((m.asDouble = c.json && !isFinite(u.asDouble) ? String(u.asDouble) : u.asDouble),
                            c.oneofs && (m.value = "asDouble")),
                          u.spanId != null &&
                            u.hasOwnProperty("spanId") &&
                            (m.spanId =
                              c.bytes === String
                                ? Qe.base64.encode(u.spanId, 0, u.spanId.length)
                                : c.bytes === Array
                                  ? Array.prototype.slice.call(u.spanId)
                                  : u.spanId),
                          u.traceId != null &&
                            u.hasOwnProperty("traceId") &&
                            (m.traceId =
                              c.bytes === String
                                ? Qe.base64.encode(u.traceId, 0, u.traceId.length)
                                : c.bytes === Array
                                  ? Array.prototype.slice.call(u.traceId)
                                  : u.traceId),
                          u.asInt != null &&
                            u.hasOwnProperty("asInt") &&
                            (typeof u.asInt == "number"
                              ? (m.asInt = c.longs === String ? String(u.asInt) : u.asInt)
                              : (m.asInt =
                                  c.longs === String
                                    ? Qe.Long.prototype.toString.call(u.asInt)
                                    : c.longs === Number
                                      ? new Qe.LongBits(u.asInt.low >>> 0, u.asInt.high >>> 0).toNumber()
                                      : u.asInt),
                            c.oneofs && (m.value = "asInt")),
                          u.filteredAttributes && u.filteredAttributes.length)
                        ) {
                          m.filteredAttributes = [];
                          for (var f = 0; f < u.filteredAttributes.length; ++f)
                            m.filteredAttributes[f] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(
                              u.filteredAttributes[f],
                              c,
                            );
                        }
                        return m;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (u) {
                        return (
                          u === void 0 && (u = "type.googleapis.com"),
                          u + "/opentelemetry.proto.metrics.v1.Exemplar"
                        );
                      }),
                      o
                    );
                  })()),
                  n
                );
              })()),
              r
            );
          })()),
          (e.logs = (function () {
            var r = {};
            return (
              (r.v1 = (function () {
                var n = {};
                return (
                  (n.LogsData = (function () {
                    function o(s) {
                      if (((this.resourceLogs = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.resourceLogs = Qe.emptyArray),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if ((u || (u = Ms.create()), a.resourceLogs != null && a.resourceLogs.length))
                          for (var c = 0; c < a.resourceLogs.length; ++c)
                            Be.opentelemetry.proto.logs.v1.ResourceLogs.encode(
                              a.resourceLogs[c],
                              u.uint32(10).fork(),
                            ).ldelim();
                        return u;
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u, d = new Be.opentelemetry.proto.logs.v1.LogsData();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              ((d.resourceLogs && d.resourceLogs.length) || (d.resourceLogs = []),
                                d.resourceLogs.push(Be.opentelemetry.proto.logs.v1.ResourceLogs.decode(a, a.uint32())));
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.resourceLogs != null && a.hasOwnProperty("resourceLogs")) {
                          if (!Array.isArray(a.resourceLogs)) return "resourceLogs: array expected";
                          for (var u = 0; u < a.resourceLogs.length; ++u) {
                            var c = Be.opentelemetry.proto.logs.v1.ResourceLogs.verify(a.resourceLogs[u]);
                            if (c) return "resourceLogs." + c;
                          }
                        }
                        return null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.logs.v1.LogsData) return a;
                        var u = new Be.opentelemetry.proto.logs.v1.LogsData();
                        if (a.resourceLogs) {
                          if (!Array.isArray(a.resourceLogs))
                            throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: array expected");
                          u.resourceLogs = [];
                          for (var c = 0; c < a.resourceLogs.length; ++c) {
                            if (typeof a.resourceLogs[c] != "object")
                              throw TypeError(".opentelemetry.proto.logs.v1.LogsData.resourceLogs: object expected");
                            u.resourceLogs[c] = Be.opentelemetry.proto.logs.v1.ResourceLogs.fromObject(
                              a.resourceLogs[c],
                            );
                          }
                        }
                        return u;
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.resourceLogs = []), a.resourceLogs && a.resourceLogs.length)
                        ) {
                          c.resourceLogs = [];
                          for (var m = 0; m < a.resourceLogs.length; ++m)
                            c.resourceLogs[m] = Be.opentelemetry.proto.logs.v1.ResourceLogs.toObject(
                              a.resourceLogs[m],
                              u,
                            );
                        }
                        return c;
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.logs.v1.LogsData"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.ResourceLogs = (function () {
                    function o(s) {
                      if (((this.scopeLogs = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.resource = null),
                      (o.prototype.scopeLogs = Qe.emptyArray),
                      (o.prototype.schemaUrl = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.resource != null &&
                            Object.hasOwnProperty.call(a, "resource") &&
                            Be.opentelemetry.proto.resource.v1.Resource.encode(
                              a.resource,
                              u.uint32(10).fork(),
                            ).ldelim(),
                          a.scopeLogs != null && a.scopeLogs.length)
                        )
                          for (var c = 0; c < a.scopeLogs.length; ++c)
                            Be.opentelemetry.proto.logs.v1.ScopeLogs.encode(
                              a.scopeLogs[c],
                              u.uint32(18).fork(),
                            ).ldelim();
                        return (
                          a.schemaUrl != null &&
                            Object.hasOwnProperty.call(a, "schemaUrl") &&
                            u.uint32(26).string(a.schemaUrl),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u,
                            d = new Be.opentelemetry.proto.logs.v1.ResourceLogs();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.resource = Be.opentelemetry.proto.resource.v1.Resource.decode(a, a.uint32());
                              break;
                            }
                            case 2: {
                              ((d.scopeLogs && d.scopeLogs.length) || (d.scopeLogs = []),
                                d.scopeLogs.push(Be.opentelemetry.proto.logs.v1.ScopeLogs.decode(a, a.uint32())));
                              break;
                            }
                            case 3: {
                              d.schemaUrl = a.string();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.resource != null && a.hasOwnProperty("resource")) {
                          var u = Be.opentelemetry.proto.resource.v1.Resource.verify(a.resource);
                          if (u) return "resource." + u;
                        }
                        if (a.scopeLogs != null && a.hasOwnProperty("scopeLogs")) {
                          if (!Array.isArray(a.scopeLogs)) return "scopeLogs: array expected";
                          for (var c = 0; c < a.scopeLogs.length; ++c) {
                            var u = Be.opentelemetry.proto.logs.v1.ScopeLogs.verify(a.scopeLogs[c]);
                            if (u) return "scopeLogs." + u;
                          }
                        }
                        return a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && !Qe.isString(a.schemaUrl)
                          ? "schemaUrl: string expected"
                          : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.logs.v1.ResourceLogs) return a;
                        var u = new Be.opentelemetry.proto.logs.v1.ResourceLogs();
                        if (a.resource != null) {
                          if (typeof a.resource != "object")
                            throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.resource: object expected");
                          u.resource = Be.opentelemetry.proto.resource.v1.Resource.fromObject(a.resource);
                        }
                        if (a.scopeLogs) {
                          if (!Array.isArray(a.scopeLogs))
                            throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: array expected");
                          u.scopeLogs = [];
                          for (var c = 0; c < a.scopeLogs.length; ++c) {
                            if (typeof a.scopeLogs[c] != "object")
                              throw TypeError(".opentelemetry.proto.logs.v1.ResourceLogs.scopeLogs: object expected");
                            u.scopeLogs[c] = Be.opentelemetry.proto.logs.v1.ScopeLogs.fromObject(a.scopeLogs[c]);
                          }
                        }
                        return (a.schemaUrl != null && (u.schemaUrl = String(a.schemaUrl)), u);
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.scopeLogs = []),
                          u.defaults && ((c.resource = null), (c.schemaUrl = "")),
                          a.resource != null &&
                            a.hasOwnProperty("resource") &&
                            (c.resource = Be.opentelemetry.proto.resource.v1.Resource.toObject(a.resource, u)),
                          a.scopeLogs && a.scopeLogs.length)
                        ) {
                          c.scopeLogs = [];
                          for (var m = 0; m < a.scopeLogs.length; ++m)
                            c.scopeLogs[m] = Be.opentelemetry.proto.logs.v1.ScopeLogs.toObject(a.scopeLogs[m], u);
                        }
                        return (a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && (c.schemaUrl = a.schemaUrl), c);
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.logs.v1.ResourceLogs"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.ScopeLogs = (function () {
                    function o(s) {
                      if (((this.logRecords = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.scope = null),
                      (o.prototype.logRecords = Qe.emptyArray),
                      (o.prototype.schemaUrl = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.scope != null &&
                            Object.hasOwnProperty.call(a, "scope") &&
                            Be.opentelemetry.proto.common.v1.InstrumentationScope.encode(
                              a.scope,
                              u.uint32(10).fork(),
                            ).ldelim(),
                          a.logRecords != null && a.logRecords.length)
                        )
                          for (var c = 0; c < a.logRecords.length; ++c)
                            Be.opentelemetry.proto.logs.v1.LogRecord.encode(
                              a.logRecords[c],
                              u.uint32(18).fork(),
                            ).ldelim();
                        return (
                          a.schemaUrl != null &&
                            Object.hasOwnProperty.call(a, "schemaUrl") &&
                            u.uint32(26).string(a.schemaUrl),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u, d = new Be.opentelemetry.proto.logs.v1.ScopeLogs();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.scope = Be.opentelemetry.proto.common.v1.InstrumentationScope.decode(a, a.uint32());
                              break;
                            }
                            case 2: {
                              ((d.logRecords && d.logRecords.length) || (d.logRecords = []),
                                d.logRecords.push(Be.opentelemetry.proto.logs.v1.LogRecord.decode(a, a.uint32())));
                              break;
                            }
                            case 3: {
                              d.schemaUrl = a.string();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (a.scope != null && a.hasOwnProperty("scope")) {
                          var u = Be.opentelemetry.proto.common.v1.InstrumentationScope.verify(a.scope);
                          if (u) return "scope." + u;
                        }
                        if (a.logRecords != null && a.hasOwnProperty("logRecords")) {
                          if (!Array.isArray(a.logRecords)) return "logRecords: array expected";
                          for (var c = 0; c < a.logRecords.length; ++c) {
                            var u = Be.opentelemetry.proto.logs.v1.LogRecord.verify(a.logRecords[c]);
                            if (u) return "logRecords." + u;
                          }
                        }
                        return a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && !Qe.isString(a.schemaUrl)
                          ? "schemaUrl: string expected"
                          : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.logs.v1.ScopeLogs) return a;
                        var u = new Be.opentelemetry.proto.logs.v1.ScopeLogs();
                        if (a.scope != null) {
                          if (typeof a.scope != "object")
                            throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.scope: object expected");
                          u.scope = Be.opentelemetry.proto.common.v1.InstrumentationScope.fromObject(a.scope);
                        }
                        if (a.logRecords) {
                          if (!Array.isArray(a.logRecords))
                            throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: array expected");
                          u.logRecords = [];
                          for (var c = 0; c < a.logRecords.length; ++c) {
                            if (typeof a.logRecords[c] != "object")
                              throw TypeError(".opentelemetry.proto.logs.v1.ScopeLogs.logRecords: object expected");
                            u.logRecords[c] = Be.opentelemetry.proto.logs.v1.LogRecord.fromObject(a.logRecords[c]);
                          }
                        }
                        return (a.schemaUrl != null && (u.schemaUrl = String(a.schemaUrl)), u);
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (
                          ((u.arrays || u.defaults) && (c.logRecords = []),
                          u.defaults && ((c.scope = null), (c.schemaUrl = "")),
                          a.scope != null &&
                            a.hasOwnProperty("scope") &&
                            (c.scope = Be.opentelemetry.proto.common.v1.InstrumentationScope.toObject(a.scope, u)),
                          a.logRecords && a.logRecords.length)
                        ) {
                          c.logRecords = [];
                          for (var m = 0; m < a.logRecords.length; ++m)
                            c.logRecords[m] = Be.opentelemetry.proto.logs.v1.LogRecord.toObject(a.logRecords[m], u);
                        }
                        return (a.schemaUrl != null && a.hasOwnProperty("schemaUrl") && (c.schemaUrl = a.schemaUrl), c);
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.logs.v1.ScopeLogs"
                        );
                      }),
                      o
                    );
                  })()),
                  (n.SeverityNumber = (function () {
                    var o = {},
                      s = Object.create(o);
                    return (
                      (s[(o[0] = "SEVERITY_NUMBER_UNSPECIFIED")] = 0),
                      (s[(o[1] = "SEVERITY_NUMBER_TRACE")] = 1),
                      (s[(o[2] = "SEVERITY_NUMBER_TRACE2")] = 2),
                      (s[(o[3] = "SEVERITY_NUMBER_TRACE3")] = 3),
                      (s[(o[4] = "SEVERITY_NUMBER_TRACE4")] = 4),
                      (s[(o[5] = "SEVERITY_NUMBER_DEBUG")] = 5),
                      (s[(o[6] = "SEVERITY_NUMBER_DEBUG2")] = 6),
                      (s[(o[7] = "SEVERITY_NUMBER_DEBUG3")] = 7),
                      (s[(o[8] = "SEVERITY_NUMBER_DEBUG4")] = 8),
                      (s[(o[9] = "SEVERITY_NUMBER_INFO")] = 9),
                      (s[(o[10] = "SEVERITY_NUMBER_INFO2")] = 10),
                      (s[(o[11] = "SEVERITY_NUMBER_INFO3")] = 11),
                      (s[(o[12] = "SEVERITY_NUMBER_INFO4")] = 12),
                      (s[(o[13] = "SEVERITY_NUMBER_WARN")] = 13),
                      (s[(o[14] = "SEVERITY_NUMBER_WARN2")] = 14),
                      (s[(o[15] = "SEVERITY_NUMBER_WARN3")] = 15),
                      (s[(o[16] = "SEVERITY_NUMBER_WARN4")] = 16),
                      (s[(o[17] = "SEVERITY_NUMBER_ERROR")] = 17),
                      (s[(o[18] = "SEVERITY_NUMBER_ERROR2")] = 18),
                      (s[(o[19] = "SEVERITY_NUMBER_ERROR3")] = 19),
                      (s[(o[20] = "SEVERITY_NUMBER_ERROR4")] = 20),
                      (s[(o[21] = "SEVERITY_NUMBER_FATAL")] = 21),
                      (s[(o[22] = "SEVERITY_NUMBER_FATAL2")] = 22),
                      (s[(o[23] = "SEVERITY_NUMBER_FATAL3")] = 23),
                      (s[(o[24] = "SEVERITY_NUMBER_FATAL4")] = 24),
                      s
                    );
                  })()),
                  (n.LogRecordFlags = (function () {
                    var o = {},
                      s = Object.create(o);
                    return (
                      (s[(o[0] = "LOG_RECORD_FLAGS_DO_NOT_USE")] = 0),
                      (s[(o[255] = "LOG_RECORD_FLAGS_TRACE_FLAGS_MASK")] = 255),
                      s
                    );
                  })()),
                  (n.LogRecord = (function () {
                    function o(s) {
                      if (((this.attributes = []), s))
                        for (var a = Object.keys(s), u = 0; u < a.length; ++u)
                          s[a[u]] != null && (this[a[u]] = s[a[u]]);
                    }
                    return (
                      (o.prototype.timeUnixNano = null),
                      (o.prototype.observedTimeUnixNano = null),
                      (o.prototype.severityNumber = null),
                      (o.prototype.severityText = null),
                      (o.prototype.body = null),
                      (o.prototype.attributes = Qe.emptyArray),
                      (o.prototype.droppedAttributesCount = null),
                      (o.prototype.flags = null),
                      (o.prototype.traceId = null),
                      (o.prototype.spanId = null),
                      (o.prototype.eventName = null),
                      (o.create = function (a) {
                        return new o(a);
                      }),
                      (o.encode = function (a, u) {
                        if (
                          (u || (u = Ms.create()),
                          a.timeUnixNano != null &&
                            Object.hasOwnProperty.call(a, "timeUnixNano") &&
                            u.uint32(9).fixed64(a.timeUnixNano),
                          a.severityNumber != null &&
                            Object.hasOwnProperty.call(a, "severityNumber") &&
                            u.uint32(16).int32(a.severityNumber),
                          a.severityText != null &&
                            Object.hasOwnProperty.call(a, "severityText") &&
                            u.uint32(26).string(a.severityText),
                          a.body != null &&
                            Object.hasOwnProperty.call(a, "body") &&
                            Be.opentelemetry.proto.common.v1.AnyValue.encode(a.body, u.uint32(42).fork()).ldelim(),
                          a.attributes != null && a.attributes.length)
                        )
                          for (var c = 0; c < a.attributes.length; ++c)
                            Be.opentelemetry.proto.common.v1.KeyValue.encode(
                              a.attributes[c],
                              u.uint32(50).fork(),
                            ).ldelim();
                        return (
                          a.droppedAttributesCount != null &&
                            Object.hasOwnProperty.call(a, "droppedAttributesCount") &&
                            u.uint32(56).uint32(a.droppedAttributesCount),
                          a.flags != null && Object.hasOwnProperty.call(a, "flags") && u.uint32(69).fixed32(a.flags),
                          a.traceId != null &&
                            Object.hasOwnProperty.call(a, "traceId") &&
                            u.uint32(74).bytes(a.traceId),
                          a.spanId != null && Object.hasOwnProperty.call(a, "spanId") && u.uint32(82).bytes(a.spanId),
                          a.observedTimeUnixNano != null &&
                            Object.hasOwnProperty.call(a, "observedTimeUnixNano") &&
                            u.uint32(89).fixed64(a.observedTimeUnixNano),
                          a.eventName != null &&
                            Object.hasOwnProperty.call(a, "eventName") &&
                            u.uint32(98).string(a.eventName),
                          u
                        );
                      }),
                      (o.encodeDelimited = function (a, u) {
                        return this.encode(a, u).ldelim();
                      }),
                      (o.decode = function (a, u, c) {
                        a instanceof Ut || (a = Ut.create(a));
                        for (
                          var m = u === void 0 ? a.len : a.pos + u, d = new Be.opentelemetry.proto.logs.v1.LogRecord();
                          a.pos < m;
                        ) {
                          var f = a.uint32();
                          if (f === c) break;
                          switch (f >>> 3) {
                            case 1: {
                              d.timeUnixNano = a.fixed64();
                              break;
                            }
                            case 11: {
                              d.observedTimeUnixNano = a.fixed64();
                              break;
                            }
                            case 2: {
                              d.severityNumber = a.int32();
                              break;
                            }
                            case 3: {
                              d.severityText = a.string();
                              break;
                            }
                            case 5: {
                              d.body = Be.opentelemetry.proto.common.v1.AnyValue.decode(a, a.uint32());
                              break;
                            }
                            case 6: {
                              ((d.attributes && d.attributes.length) || (d.attributes = []),
                                d.attributes.push(Be.opentelemetry.proto.common.v1.KeyValue.decode(a, a.uint32())));
                              break;
                            }
                            case 7: {
                              d.droppedAttributesCount = a.uint32();
                              break;
                            }
                            case 8: {
                              d.flags = a.fixed32();
                              break;
                            }
                            case 9: {
                              d.traceId = a.bytes();
                              break;
                            }
                            case 10: {
                              d.spanId = a.bytes();
                              break;
                            }
                            case 12: {
                              d.eventName = a.string();
                              break;
                            }
                            default:
                              a.skipType(f & 7);
                              break;
                          }
                        }
                        return d;
                      }),
                      (o.decodeDelimited = function (a) {
                        return (a instanceof Ut || (a = new Ut(a)), this.decode(a, a.uint32()));
                      }),
                      (o.verify = function (a) {
                        if (typeof a != "object" || a === null) return "object expected";
                        if (
                          a.timeUnixNano != null &&
                          a.hasOwnProperty("timeUnixNano") &&
                          !Qe.isInteger(a.timeUnixNano) &&
                          !(a.timeUnixNano && Qe.isInteger(a.timeUnixNano.low) && Qe.isInteger(a.timeUnixNano.high))
                        )
                          return "timeUnixNano: integer|Long expected";
                        if (
                          a.observedTimeUnixNano != null &&
                          a.hasOwnProperty("observedTimeUnixNano") &&
                          !Qe.isInteger(a.observedTimeUnixNano) &&
                          !(
                            a.observedTimeUnixNano &&
                            Qe.isInteger(a.observedTimeUnixNano.low) &&
                            Qe.isInteger(a.observedTimeUnixNano.high)
                          )
                        )
                          return "observedTimeUnixNano: integer|Long expected";
                        if (a.severityNumber != null && a.hasOwnProperty("severityNumber"))
                          switch (a.severityNumber) {
                            default:
                              return "severityNumber: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                            case 9:
                            case 10:
                            case 11:
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                            case 16:
                            case 17:
                            case 18:
                            case 19:
                            case 20:
                            case 21:
                            case 22:
                            case 23:
                            case 24:
                              break;
                          }
                        if (a.severityText != null && a.hasOwnProperty("severityText") && !Qe.isString(a.severityText))
                          return "severityText: string expected";
                        if (a.body != null && a.hasOwnProperty("body")) {
                          var u = Be.opentelemetry.proto.common.v1.AnyValue.verify(a.body);
                          if (u) return "body." + u;
                        }
                        if (a.attributes != null && a.hasOwnProperty("attributes")) {
                          if (!Array.isArray(a.attributes)) return "attributes: array expected";
                          for (var c = 0; c < a.attributes.length; ++c) {
                            var u = Be.opentelemetry.proto.common.v1.KeyValue.verify(a.attributes[c]);
                            if (u) return "attributes." + u;
                          }
                        }
                        return a.droppedAttributesCount != null &&
                          a.hasOwnProperty("droppedAttributesCount") &&
                          !Qe.isInteger(a.droppedAttributesCount)
                          ? "droppedAttributesCount: integer expected"
                          : a.flags != null && a.hasOwnProperty("flags") && !Qe.isInteger(a.flags)
                            ? "flags: integer expected"
                            : a.traceId != null &&
                                a.hasOwnProperty("traceId") &&
                                !((a.traceId && typeof a.traceId.length == "number") || Qe.isString(a.traceId))
                              ? "traceId: buffer expected"
                              : a.spanId != null &&
                                  a.hasOwnProperty("spanId") &&
                                  !((a.spanId && typeof a.spanId.length == "number") || Qe.isString(a.spanId))
                                ? "spanId: buffer expected"
                                : a.eventName != null && a.hasOwnProperty("eventName") && !Qe.isString(a.eventName)
                                  ? "eventName: string expected"
                                  : null;
                      }),
                      (o.fromObject = function (a) {
                        if (a instanceof Be.opentelemetry.proto.logs.v1.LogRecord) return a;
                        var u = new Be.opentelemetry.proto.logs.v1.LogRecord();
                        switch (
                          (a.timeUnixNano != null &&
                            (Qe.Long
                              ? ((u.timeUnixNano = Qe.Long.fromValue(a.timeUnixNano)).unsigned = !1)
                              : typeof a.timeUnixNano == "string"
                                ? (u.timeUnixNano = parseInt(a.timeUnixNano, 10))
                                : typeof a.timeUnixNano == "number"
                                  ? (u.timeUnixNano = a.timeUnixNano)
                                  : typeof a.timeUnixNano == "object" &&
                                    (u.timeUnixNano = new Qe.LongBits(
                                      a.timeUnixNano.low >>> 0,
                                      a.timeUnixNano.high >>> 0,
                                    ).toNumber())),
                          a.observedTimeUnixNano != null &&
                            (Qe.Long
                              ? ((u.observedTimeUnixNano = Qe.Long.fromValue(a.observedTimeUnixNano)).unsigned = !1)
                              : typeof a.observedTimeUnixNano == "string"
                                ? (u.observedTimeUnixNano = parseInt(a.observedTimeUnixNano, 10))
                                : typeof a.observedTimeUnixNano == "number"
                                  ? (u.observedTimeUnixNano = a.observedTimeUnixNano)
                                  : typeof a.observedTimeUnixNano == "object" &&
                                    (u.observedTimeUnixNano = new Qe.LongBits(
                                      a.observedTimeUnixNano.low >>> 0,
                                      a.observedTimeUnixNano.high >>> 0,
                                    ).toNumber())),
                          a.severityNumber)
                        ) {
                          default:
                            if (typeof a.severityNumber == "number") {
                              u.severityNumber = a.severityNumber;
                              break;
                            }
                            break;
                          case "SEVERITY_NUMBER_UNSPECIFIED":
                          case 0:
                            u.severityNumber = 0;
                            break;
                          case "SEVERITY_NUMBER_TRACE":
                          case 1:
                            u.severityNumber = 1;
                            break;
                          case "SEVERITY_NUMBER_TRACE2":
                          case 2:
                            u.severityNumber = 2;
                            break;
                          case "SEVERITY_NUMBER_TRACE3":
                          case 3:
                            u.severityNumber = 3;
                            break;
                          case "SEVERITY_NUMBER_TRACE4":
                          case 4:
                            u.severityNumber = 4;
                            break;
                          case "SEVERITY_NUMBER_DEBUG":
                          case 5:
                            u.severityNumber = 5;
                            break;
                          case "SEVERITY_NUMBER_DEBUG2":
                          case 6:
                            u.severityNumber = 6;
                            break;
                          case "SEVERITY_NUMBER_DEBUG3":
                          case 7:
                            u.severityNumber = 7;
                            break;
                          case "SEVERITY_NUMBER_DEBUG4":
                          case 8:
                            u.severityNumber = 8;
                            break;
                          case "SEVERITY_NUMBER_INFO":
                          case 9:
                            u.severityNumber = 9;
                            break;
                          case "SEVERITY_NUMBER_INFO2":
                          case 10:
                            u.severityNumber = 10;
                            break;
                          case "SEVERITY_NUMBER_INFO3":
                          case 11:
                            u.severityNumber = 11;
                            break;
                          case "SEVERITY_NUMBER_INFO4":
                          case 12:
                            u.severityNumber = 12;
                            break;
                          case "SEVERITY_NUMBER_WARN":
                          case 13:
                            u.severityNumber = 13;
                            break;
                          case "SEVERITY_NUMBER_WARN2":
                          case 14:
                            u.severityNumber = 14;
                            break;
                          case "SEVERITY_NUMBER_WARN3":
                          case 15:
                            u.severityNumber = 15;
                            break;
                          case "SEVERITY_NUMBER_WARN4":
                          case 16:
                            u.severityNumber = 16;
                            break;
                          case "SEVERITY_NUMBER_ERROR":
                          case 17:
                            u.severityNumber = 17;
                            break;
                          case "SEVERITY_NUMBER_ERROR2":
                          case 18:
                            u.severityNumber = 18;
                            break;
                          case "SEVERITY_NUMBER_ERROR3":
                          case 19:
                            u.severityNumber = 19;
                            break;
                          case "SEVERITY_NUMBER_ERROR4":
                          case 20:
                            u.severityNumber = 20;
                            break;
                          case "SEVERITY_NUMBER_FATAL":
                          case 21:
                            u.severityNumber = 21;
                            break;
                          case "SEVERITY_NUMBER_FATAL2":
                          case 22:
                            u.severityNumber = 22;
                            break;
                          case "SEVERITY_NUMBER_FATAL3":
                          case 23:
                            u.severityNumber = 23;
                            break;
                          case "SEVERITY_NUMBER_FATAL4":
                          case 24:
                            u.severityNumber = 24;
                            break;
                        }
                        if ((a.severityText != null && (u.severityText = String(a.severityText)), a.body != null)) {
                          if (typeof a.body != "object")
                            throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.body: object expected");
                          u.body = Be.opentelemetry.proto.common.v1.AnyValue.fromObject(a.body);
                        }
                        if (a.attributes) {
                          if (!Array.isArray(a.attributes))
                            throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: array expected");
                          u.attributes = [];
                          for (var c = 0; c < a.attributes.length; ++c) {
                            if (typeof a.attributes[c] != "object")
                              throw TypeError(".opentelemetry.proto.logs.v1.LogRecord.attributes: object expected");
                            u.attributes[c] = Be.opentelemetry.proto.common.v1.KeyValue.fromObject(a.attributes[c]);
                          }
                        }
                        return (
                          a.droppedAttributesCount != null &&
                            (u.droppedAttributesCount = a.droppedAttributesCount >>> 0),
                          a.flags != null && (u.flags = a.flags >>> 0),
                          a.traceId != null &&
                            (typeof a.traceId == "string"
                              ? Qe.base64.decode(a.traceId, (u.traceId = Qe.newBuffer(Qe.base64.length(a.traceId))), 0)
                              : a.traceId.length >= 0 && (u.traceId = a.traceId)),
                          a.spanId != null &&
                            (typeof a.spanId == "string"
                              ? Qe.base64.decode(a.spanId, (u.spanId = Qe.newBuffer(Qe.base64.length(a.spanId))), 0)
                              : a.spanId.length >= 0 && (u.spanId = a.spanId)),
                          a.eventName != null && (u.eventName = String(a.eventName)),
                          u
                        );
                      }),
                      (o.toObject = function (a, u) {
                        u || (u = {});
                        var c = {};
                        if (((u.arrays || u.defaults) && (c.attributes = []), u.defaults)) {
                          if (Qe.Long) {
                            var m = new Qe.Long(0, 0, !1);
                            c.timeUnixNano = u.longs === String ? m.toString() : u.longs === Number ? m.toNumber() : m;
                          } else c.timeUnixNano = u.longs === String ? "0" : 0;
                          if (
                            ((c.severityNumber = u.enums === String ? "SEVERITY_NUMBER_UNSPECIFIED" : 0),
                            (c.severityText = ""),
                            (c.body = null),
                            (c.droppedAttributesCount = 0),
                            (c.flags = 0),
                            u.bytes === String
                              ? (c.traceId = "")
                              : ((c.traceId = []), u.bytes !== Array && (c.traceId = Qe.newBuffer(c.traceId))),
                            u.bytes === String
                              ? (c.spanId = "")
                              : ((c.spanId = []), u.bytes !== Array && (c.spanId = Qe.newBuffer(c.spanId))),
                            Qe.Long)
                          ) {
                            var m = new Qe.Long(0, 0, !1);
                            c.observedTimeUnixNano =
                              u.longs === String ? m.toString() : u.longs === Number ? m.toNumber() : m;
                          } else c.observedTimeUnixNano = u.longs === String ? "0" : 0;
                          c.eventName = "";
                        }
                        if (
                          (a.timeUnixNano != null &&
                            a.hasOwnProperty("timeUnixNano") &&
                            (typeof a.timeUnixNano == "number"
                              ? (c.timeUnixNano = u.longs === String ? String(a.timeUnixNano) : a.timeUnixNano)
                              : (c.timeUnixNano =
                                  u.longs === String
                                    ? Qe.Long.prototype.toString.call(a.timeUnixNano)
                                    : u.longs === Number
                                      ? new Qe.LongBits(a.timeUnixNano.low >>> 0, a.timeUnixNano.high >>> 0).toNumber()
                                      : a.timeUnixNano)),
                          a.severityNumber != null &&
                            a.hasOwnProperty("severityNumber") &&
                            (c.severityNumber =
                              u.enums === String
                                ? Be.opentelemetry.proto.logs.v1.SeverityNumber[a.severityNumber] === void 0
                                  ? a.severityNumber
                                  : Be.opentelemetry.proto.logs.v1.SeverityNumber[a.severityNumber]
                                : a.severityNumber),
                          a.severityText != null &&
                            a.hasOwnProperty("severityText") &&
                            (c.severityText = a.severityText),
                          a.body != null &&
                            a.hasOwnProperty("body") &&
                            (c.body = Be.opentelemetry.proto.common.v1.AnyValue.toObject(a.body, u)),
                          a.attributes && a.attributes.length)
                        ) {
                          c.attributes = [];
                          for (var d = 0; d < a.attributes.length; ++d)
                            c.attributes[d] = Be.opentelemetry.proto.common.v1.KeyValue.toObject(a.attributes[d], u);
                        }
                        return (
                          a.droppedAttributesCount != null &&
                            a.hasOwnProperty("droppedAttributesCount") &&
                            (c.droppedAttributesCount = a.droppedAttributesCount),
                          a.flags != null && a.hasOwnProperty("flags") && (c.flags = a.flags),
                          a.traceId != null &&
                            a.hasOwnProperty("traceId") &&
                            (c.traceId =
                              u.bytes === String
                                ? Qe.base64.encode(a.traceId, 0, a.traceId.length)
                                : u.bytes === Array
                                  ? Array.prototype.slice.call(a.traceId)
                                  : a.traceId),
                          a.spanId != null &&
                            a.hasOwnProperty("spanId") &&
                            (c.spanId =
                              u.bytes === String
                                ? Qe.base64.encode(a.spanId, 0, a.spanId.length)
                                : u.bytes === Array
                                  ? Array.prototype.slice.call(a.spanId)
                                  : a.spanId),
                          a.observedTimeUnixNano != null &&
                            a.hasOwnProperty("observedTimeUnixNano") &&
                            (typeof a.observedTimeUnixNano == "number"
                              ? (c.observedTimeUnixNano =
                                  u.longs === String ? String(a.observedTimeUnixNano) : a.observedTimeUnixNano)
                              : (c.observedTimeUnixNano =
                                  u.longs === String
                                    ? Qe.Long.prototype.toString.call(a.observedTimeUnixNano)
                                    : u.longs === Number
                                      ? new Qe.LongBits(
                                          a.observedTimeUnixNano.low >>> 0,
                                          a.observedTimeUnixNano.high >>> 0,
                                        ).toNumber()
                                      : a.observedTimeUnixNano)),
                          a.eventName != null && a.hasOwnProperty("eventName") && (c.eventName = a.eventName),
                          c
                        );
                      }),
                      (o.prototype.toJSON = function () {
                        return this.constructor.toObject(this, Ao.util.toJSONOptions);
                      }),
                      (o.getTypeUrl = function (a) {
                        return (
                          a === void 0 && (a = "type.googleapis.com"),
                          a + "/opentelemetry.proto.logs.v1.LogRecord"
                        );
                      }),
                      o
                    );
                  })()),
                  n
                );
              })()),
              r
            );
          })()),
          e
        );
      })()),
      t
    );
  })();
  IHr.exports = Be;
});