/**
 * @module F7t
 * @category utils/lodash
 * @label lodash
 * @position 599 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (F7t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var F7t = T((Hr) => {
  "use strict";
  Object.defineProperty(Hr, "__esModule", { value: !0 });
  Hr.internal =
    Hr.diagLogLevelFromString =
    Hr.BindOnceFuture =
    Hr.urlMatches =
    Hr.isUrlIgnored =
    Hr.callWithTimeout =
    Hr.TimeoutError =
    Hr.merge =
    Hr.TraceState =
    Hr.unsuppressTracing =
    Hr.suppressTracing =
    Hr.isTracingSuppressed =
    Hr.setRPCMetadata =
    Hr.getRPCMetadata =
    Hr.deleteRPCMetadata =
    Hr.RPCType =
    Hr.parseTraceParent =
    Hr.W3CTraceContextPropagator =
    Hr.TRACE_STATE_HEADER =
    Hr.TRACE_PARENT_HEADER =
    Hr.CompositePropagator =
    Hr.otperformance =
    Hr.getStringListFromEnv =
    Hr.getNumberFromEnv =
    Hr.getBooleanFromEnv =
    Hr.getStringFromEnv =
    Hr._globalThis =
    Hr.SDK_INFO =
    Hr.parseKeyPairsIntoRecord =
    Hr.ExportResultCode =
    Hr.unrefTimer =
    Hr.timeInputToHrTime =
    Hr.millisToHrTime =
    Hr.isTimeInputHrTime =
    Hr.isTimeInput =
    Hr.hrTimeToTimeStamp =
    Hr.hrTimeToNanoseconds =
    Hr.hrTimeToMilliseconds =
    Hr.hrTimeToMicroseconds =
    Hr.hrTimeDuration =
    Hr.hrTime =
    Hr.getTimeOrigin =
    Hr.addHrTimes =
    Hr.loggingErrorHandler =
    Hr.setGlobalErrorHandler =
    Hr.globalErrorHandler =
    Hr.sanitizeAttributes =
    Hr.isAttributeValue =
    Hr.AnchoredClock =
    Hr.W3CBaggagePropagator =
      void 0;
  var Nzo = Ann();
  Object.defineProperty(Hr, "W3CBaggagePropagator", {
    enumerable: !0,
    get: function () {
      return Nzo.W3CBaggagePropagator;
    },
  });
  var Pzo = ynn();
  Object.defineProperty(Hr, "AnchoredClock", {
    enumerable: !0,
    get: function () {
      return Pzo.AnchoredClock;
    },
  });
  var bin = Snn();
  Object.defineProperty(Hr, "isAttributeValue", {
    enumerable: !0,
    get: function () {
      return bin.isAttributeValue;
    },
  });
  Object.defineProperty(Hr, "sanitizeAttributes", {
    enumerable: !0,
    get: function () {
      return bin.sanitizeAttributes;
    },
  });
  var Ain = xnn();
  Object.defineProperty(Hr, "globalErrorHandler", {
    enumerable: !0,
    get: function () {
      return Ain.globalErrorHandler;
    },
  });
  Object.defineProperty(Hr, "setGlobalErrorHandler", {
    enumerable: !0,
    get: function () {
      return Ain.setGlobalErrorHandler;
    },
  });
  var Bzo = w7t();
  Object.defineProperty(Hr, "loggingErrorHandler", {
    enumerable: !0,
    get: function () {
      return Bzo.loggingErrorHandler;
    },
  });
  var U_ = Unn();
  Object.defineProperty(Hr, "addHrTimes", {
    enumerable: !0,
    get: function () {
      return U_.addHrTimes;
    },
  });
  Object.defineProperty(Hr, "getTimeOrigin", {
    enumerable: !0,
    get: function () {
      return U_.getTimeOrigin;
    },
  });
  Object.defineProperty(Hr, "hrTime", {
    enumerable: !0,
    get: function () {
      return U_.hrTime;
    },
  });
  Object.defineProperty(Hr, "hrTimeDuration", {
    enumerable: !0,
    get: function () {
      return U_.hrTimeDuration;
    },
  });
  Object.defineProperty(Hr, "hrTimeToMicroseconds", {
    enumerable: !0,
    get: function () {
      return U_.hrTimeToMicroseconds;
    },
  });
  Object.defineProperty(Hr, "hrTimeToMilliseconds", {
    enumerable: !0,
    get: function () {
      return U_.hrTimeToMilliseconds;
    },
  });
  Object.defineProperty(Hr, "hrTimeToNanoseconds", {
    enumerable: !0,
    get: function () {
      return U_.hrTimeToNanoseconds;
    },
  });
  Object.defineProperty(Hr, "hrTimeToTimeStamp", {
    enumerable: !0,
    get: function () {
      return U_.hrTimeToTimeStamp;
    },
  });
  Object.defineProperty(Hr, "isTimeInput", {
    enumerable: !0,
    get: function () {
      return U_.isTimeInput;
    },
  });
  Object.defineProperty(Hr, "isTimeInputHrTime", {
    enumerable: !0,
    get: function () {
      return U_.isTimeInputHrTime;
    },
  });
  Object.defineProperty(Hr, "millisToHrTime", {
    enumerable: !0,
    get: function () {
      return U_.millisToHrTime;
    },
  });
  Object.defineProperty(Hr, "timeInputToHrTime", {
    enumerable: !0,
    get: function () {
      return U_.timeInputToHrTime;
    },
  });
  var Lzo = $nn();
  Object.defineProperty(Hr, "unrefTimer", {
    enumerable: !0,
    get: function () {
      return Lzo.unrefTimer;
    },
  });
  var Mzo = jnn();
  Object.defineProperty(Hr, "ExportResultCode", {
    enumerable: !0,
    get: function () {
      return Mzo.ExportResultCode;
    },
  });
  var Fzo = _7t();
  Object.defineProperty(Hr, "parseKeyPairsIntoRecord", {
    enumerable: !0,
    get: function () {
      return Fzo.parseKeyPairsIntoRecord;
    },
  });
  var Uq = x7t();
  Object.defineProperty(Hr, "SDK_INFO", {
    enumerable: !0,
    get: function () {
      return Uq.SDK_INFO;
    },
  });
  Object.defineProperty(Hr, "_globalThis", {
    enumerable: !0,
    get: function () {
      return Uq._globalThis;
    },
  });
  Object.defineProperty(Hr, "getStringFromEnv", {
    enumerable: !0,
    get: function () {
      return Uq.getStringFromEnv;
    },
  });
  Object.defineProperty(Hr, "getBooleanFromEnv", {
    enumerable: !0,
    get: function () {
      return Uq.getBooleanFromEnv;
    },
  });
  Object.defineProperty(Hr, "getNumberFromEnv", {
    enumerable: !0,
    get: function () {
      return Uq.getNumberFromEnv;
    },
  });
  Object.defineProperty(Hr, "getStringListFromEnv", {
    enumerable: !0,
    get: function () {
      return Uq.getStringListFromEnv;
    },
  });
  Object.defineProperty(Hr, "otperformance", {
    enumerable: !0,
    get: function () {
      return Uq.otperformance;
    },
  });
  var Uzo = Gnn();
  Object.defineProperty(Hr, "CompositePropagator", {
    enumerable: !0,
    get: function () {
      return Uzo.CompositePropagator;
    },
  });
  var Sje = Knn();
  Object.defineProperty(Hr, "TRACE_PARENT_HEADER", {
    enumerable: !0,
    get: function () {
      return Sje.TRACE_PARENT_HEADER;
    },
  });
  Object.defineProperty(Hr, "TRACE_STATE_HEADER", {
    enumerable: !0,
    get: function () {
      return Sje.TRACE_STATE_HEADER;
    },
  });
  Object.defineProperty(Hr, "W3CTraceContextPropagator", {
    enumerable: !0,
    get: function () {
      return Sje.W3CTraceContextPropagator;
    },
  });
  Object.defineProperty(Hr, "parseTraceParent", {
    enumerable: !0,
    get: function () {
      return Sje.parseTraceParent;
    },
  });
  var wje = Jnn();
  Object.defineProperty(Hr, "RPCType", {
    enumerable: !0,
    get: function () {
      return wje.RPCType;
    },
  });
  Object.defineProperty(Hr, "deleteRPCMetadata", {
    enumerable: !0,
    get: function () {
      return wje.deleteRPCMetadata;
    },
  });
  Object.defineProperty(Hr, "getRPCMetadata", {
    enumerable: !0,
    get: function () {
      return wje.getRPCMetadata;
    },
  });
  Object.defineProperty(Hr, "setRPCMetadata", {
    enumerable: !0,
    get: function () {
      return wje.setRPCMetadata;
    },
  });
  var M7t = rAe();
  Object.defineProperty(Hr, "isTracingSuppressed", {
    enumerable: !0,
    get: function () {
      return M7t.isTracingSuppressed;
    },
  });
  Object.defineProperty(Hr, "suppressTracing", {
    enumerable: !0,
    get: function () {
      return M7t.suppressTracing;
    },
  });
  Object.defineProperty(Hr, "unsuppressTracing", {
    enumerable: !0,
    get: function () {
      return M7t.unsuppressTracing;
    },
  });
  var $zo = k7t();
  Object.defineProperty(Hr, "TraceState", {
    enumerable: !0,
    get: function () {
      return $zo.TraceState;
    },
  });
  var jzo = ain();
  Object.defineProperty(Hr, "merge", {
    enumerable: !0,
    get: function () {
      return jzo.merge;
    },
  });
  var yin = uin();
  Object.defineProperty(Hr, "TimeoutError", {
    enumerable: !0,
    get: function () {
      return yin.TimeoutError;
    },
  });
  Object.defineProperty(Hr, "callWithTimeout", {
    enumerable: !0,
    get: function () {
      return yin.callWithTimeout;
    },
  });
  var _in = lin();
  Object.defineProperty(Hr, "isUrlIgnored", {
    enumerable: !0,
    get: function () {
      return _in.isUrlIgnored;
    },
  });
  Object.defineProperty(Hr, "urlMatches", {
    enumerable: !0,
    get: function () {
      return _in.urlMatches;
    },
  });
  var Qzo = din();
  Object.defineProperty(Hr, "BindOnceFuture", {
    enumerable: !0,
    get: function () {
      return Qzo.BindOnceFuture;
    },
  });
  var Gzo = pin();
  Object.defineProperty(Hr, "diagLogLevelFromString", {
    enumerable: !0,
    get: function () {
      return Gzo.diagLogLevelFromString;
    },
  });
  var qzo = gin();
  Hr.internal = { _export: qzo._export };
});