/**
 * @module YZr
 * @category network/grpc
 * @label grpc
 * @position 474 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YZr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var YZr = T((lMu, zZr) => {
  "use strict";
  zZr.exports = e4;
  var wUo = /\/|\./;
  function e4(t, e) {
    (wUo.test(t) ||
      ((t = "google/protobuf/" + t + ".proto"), (e = { nested: { google: { nested: { protobuf: { nested: e } } } } })),
      (e4[t] = e));
  }
  e4("any", { Any: { fields: { type_url: { type: "string", id: 1 }, value: { type: "bytes", id: 2 } } } });
  var WZr;
  e4("duration", {
    Duration: (WZr = { fields: { seconds: { type: "int64", id: 1 }, nanos: { type: "int32", id: 2 } } }),
  });
  e4("timestamp", { Timestamp: WZr });
  e4("empty", { Empty: { fields: {} } });
  e4("struct", {
    Struct: { fields: { fields: { keyType: "string", type: "Value", id: 1 } } },
    Value: {
      oneofs: { kind: { oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"] } },
      fields: {
        nullValue: { type: "NullValue", id: 1 },
        numberValue: { type: "double", id: 2 },
        stringValue: { type: "string", id: 3 },
        boolValue: { type: "bool", id: 4 },
        structValue: { type: "Struct", id: 5 },
        listValue: { type: "ListValue", id: 6 },
      },
    },
    NullValue: { values: { NULL_VALUE: 0 } },
    ListValue: { fields: { values: { rule: "repeated", type: "Value", id: 1 } } },
  });
  e4("wrappers", {
    DoubleValue: { fields: { value: { type: "double", id: 1 } } },
    FloatValue: { fields: { value: { type: "float", id: 1 } } },
    Int64Value: { fields: { value: { type: "int64", id: 1 } } },
    UInt64Value: { fields: { value: { type: "uint64", id: 1 } } },
    Int32Value: { fields: { value: { type: "int32", id: 1 } } },
    UInt32Value: { fields: { value: { type: "uint32", id: 1 } } },
    BoolValue: { fields: { value: { type: "bool", id: 1 } } },
    StringValue: { fields: { value: { type: "string", id: 1 } } },
    BytesValue: { fields: { value: { type: "bytes", id: 1 } } },
  });
  e4("field_mask", { FieldMask: { fields: { paths: { rule: "repeated", type: "string", id: 1 } } } });
  e4.get = function (e) {
    return e4[e] || null;
  };
});