/**
 * @module a4
 * @category utils/lodash
 * @label lodash
 * @position 665 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (a4) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var a4 = T((Vr) => {
  "use strict";
  Object.defineProperty(Vr, "__esModule", { value: !0 });
  Vr.internal =
    Vr.diagLogLevelFromString =
    Vr.BindOnceFuture =
    Vr.urlMatches =
    Vr.isUrlIgnored =
    Vr.callWithTimeout =
    Vr.TimeoutError =
    Vr.merge =
    Vr.TraceState =
    Vr.unsuppressTracing =
    Vr.suppressTracing =
    Vr.isTracingSuppressed =
    Vr.setRPCMetadata =
    Vr.getRPCMetadata =
    Vr.deleteRPCMetadata =
    Vr.RPCType =
    Vr.parseTraceParent =
    Vr.W3CTraceContextPropagator =
    Vr.TRACE_STATE_HEADER =
    Vr.TRACE_PARENT_HEADER =
    Vr.CompositePropagator =
    Vr.otperformance =
    Vr.getStringListFromEnv =
    Vr.getNumberFromEnv =
    Vr.getBooleanFromEnv =
    Vr.getStringFromEnv =
    Vr._globalThis =
    Vr.SDK_INFO =
    Vr.parseKeyPairsIntoRecord =
    Vr.ExportResultCode =
    Vr.unrefTimer =
    Vr.timeInputToHrTime =
    Vr.millisToHrTime =
    Vr.isTimeInputHrTime =
    Vr.isTimeInput =
    Vr.hrTimeToTimeStamp =
    Vr.hrTimeToNanoseconds =
    Vr.hrTimeToMilliseconds =
    Vr.hrTimeToMicroseconds =
    Vr.hrTimeDuration =
    Vr.hrTime =
    Vr.getTimeOrigin =
    Vr.addHrTimes =
    Vr.loggingErrorHandler =
    Vr.setGlobalErrorHandler =
    Vr.globalErrorHandler =
    Vr.sanitizeAttributes =
    Vr.isAttributeValue =
    Vr.AnchoredClock =
    Vr.W3CBaggagePropagator =
      void 0;
  var CJo = ion();
  Object.defineProperty(Vr, "W3CBaggagePropagator", {
    enumerable: !0,
    get: function () {
      return CJo.W3CBaggagePropagator;
    },
  });
  var SJo = oon();
  Object.defineProperty(Vr, "AnchoredClock", {
    enumerable: !0,
    get: function () {
      return SJo.AnchoredClock;
    },
  });
  var isn = lon();
  Object.defineProperty(Vr, "isAttributeValue", {
    enumerable: !0,
    get: function () {
      return isn.isAttributeValue;
    },
  });
  Object.defineProperty(Vr, "sanitizeAttributes", {
    enumerable: !0,
    get: function () {
      return isn.sanitizeAttributes;
    },
  });
  var osn = don();
  Object.defineProperty(Vr, "globalErrorHandler", {
    enumerable: !0,
    get: function () {
      return osn.globalErrorHandler;
    },
  });
  Object.defineProperty(Vr, "setGlobalErrorHandler", {
    enumerable: !0,
    get: function () {
      return osn.setGlobalErrorHandler;
    },
  });
  var wJo = lRt();
  Object.defineProperty(Vr, "loggingErrorHandler", {
    enumerable: !0,
    get: function () {
      return wJo.loggingErrorHandler;
    },
  });
  var j_ = xon();
  Object.defineProperty(Vr, "addHrTimes", {
    enumerable: !0,
    get: function () {
      return j_.addHrTimes;
    },
  });
  Object.defineProperty(Vr, "getTimeOrigin", {
    enumerable: !0,
    get: function () {
      return j_.getTimeOrigin;
    },
  });
  Object.defineProperty(Vr, "hrTime", {
    enumerable: !0,
    get: function () {
      return j_.hrTime;
    },
  });
  Object.defineProperty(Vr, "hrTimeDuration", {
    enumerable: !0,
    get: function () {
      return j_.hrTimeDuration;
    },
  });
  Object.defineProperty(Vr, "hrTimeToMicroseconds", {
    enumerable: !0,
    get: function () {
      return j_.hrTimeToMicroseconds;
    },
  });
  Object.defineProperty(Vr, "hrTimeToMilliseconds", {
    enumerable: !0,
    get: function () {
      return j_.hrTimeToMilliseconds;
    },
  });
  Object.defineProperty(Vr, "hrTimeToNanoseconds", {
    enumerable: !0,
    get: function () {
      return j_.hrTimeToNanoseconds;
    },
  });
  Object.defineProperty(Vr, "hrTimeToTimeStamp", {
    enumerable: !0,
    get: function () {
      return j_.hrTimeToTimeStamp;
    },
  });
  Object.defineProperty(Vr, "isTimeInput", {
    enumerable: !0,
    get: function () {
      return j_.isTimeInput;
    },
  });
  Object.defineProperty(Vr, "isTimeInputHrTime", {
    enumerable: !0,
    get: function () {
      return j_.isTimeInputHrTime;
    },
  });
  Object.defineProperty(Vr, "millisToHrTime", {
    enumerable: !0,
    get: function () {
      return j_.millisToHrTime;
    },
  });
  Object.defineProperty(Vr, "timeInputToHrTime", {
    enumerable: !0,
    get: function () {
      return j_.timeInputToHrTime;
    },
  });
  var xJo = Ton();
  Object.defineProperty(Vr, "unrefTimer", {
    enumerable: !0,
    get: function () {
      return xJo.unrefTimer;
    },
  });
  var TJo = Don();
  Object.defineProperty(Vr, "ExportResultCode", {
    enumerable: !0,
    get: function () {
      return TJo.ExportResultCode;
    },
  });
  var DJo = oRt();
  Object.defineProperty(Vr, "parseKeyPairsIntoRecord", {
    enumerable: !0,
    get: function () {
      return DJo.parseKeyPairsIntoRecord;
    },
  });
  var Vq = mRt();
  Object.defineProperty(Vr, "SDK_INFO", {
    enumerable: !0,
    get: function () {
      return Vq.SDK_INFO;
    },
  });
  Object.defineProperty(Vr, "_globalThis", {
    enumerable: !0,
    get: function () {
      return Vq._globalThis;
    },
  });
  Object.defineProperty(Vr, "getStringFromEnv", {
    enumerable: !0,
    get: function () {
      return Vq.getStringFromEnv;
    },
  });
  Object.defineProperty(Vr, "getBooleanFromEnv", {
    enumerable: !0,
    get: function () {
      return Vq.getBooleanFromEnv;
    },
  });
  Object.defineProperty(Vr, "getNumberFromEnv", {
    enumerable: !0,
    get: function () {
      return Vq.getNumberFromEnv;
    },
  });
  Object.defineProperty(Vr, "getStringListFromEnv", {
    enumerable: !0,
    get: function () {
      return Vq.getStringListFromEnv;
    },
  });
  Object.defineProperty(Vr, "otperformance", {
    enumerable: !0,
    get: function () {
      return Vq.otperformance;
    },
  });
  var IJo = Ron();
  Object.defineProperty(Vr, "CompositePropagator", {
    enumerable: !0,
    get: function () {
      return IJo.CompositePropagator;
    },
  });
  var xQe = Mon();
  Object.defineProperty(Vr, "TRACE_PARENT_HEADER", {
    enumerable: !0,
    get: function () {
      return xQe.TRACE_PARENT_HEADER;
    },
  });
  Object.defineProperty(Vr, "TRACE_STATE_HEADER", {
    enumerable: !0,
    get: function () {
      return xQe.TRACE_STATE_HEADER;
    },
  });
  Object.defineProperty(Vr, "W3CTraceContextPropagator", {
    enumerable: !0,
    get: function () {
      return xQe.W3CTraceContextPropagator;
    },
  });
  Object.defineProperty(Vr, "parseTraceParent", {
    enumerable: !0,
    get: function () {
      return xQe.parseTraceParent;
    },
  });
  var TQe = Fon();
  Object.defineProperty(Vr, "RPCType", {
    enumerable: !0,
    get: function () {
      return TQe.RPCType;
    },
  });
  Object.defineProperty(Vr, "deleteRPCMetadata", {
    enumerable: !0,
    get: function () {
      return TQe.deleteRPCMetadata;
    },
  });
  Object.defineProperty(Vr, "getRPCMetadata", {
    enumerable: !0,
    get: function () {
      return TQe.getRPCMetadata;
    },
  });
  Object.defineProperty(Vr, "setRPCMetadata", {
    enumerable: !0,
    get: function () {
      return TQe.setRPCMetadata;
    },
  });
  var SRt = mAe();
  Object.defineProperty(Vr, "isTracingSuppressed", {
    enumerable: !0,
    get: function () {
      return SRt.isTracingSuppressed;
    },
  });
  Object.defineProperty(Vr, "suppressTracing", {
    enumerable: !0,
    get: function () {
      return SRt.suppressTracing;
    },
  });
  Object.defineProperty(Vr, "unsuppressTracing", {
    enumerable: !0,
    get: function () {
      return SRt.unsuppressTracing;
    },
  });
  var RJo = ARt();
  Object.defineProperty(Vr, "TraceState", {
    enumerable: !0,
    get: function () {
      return RJo.TraceState;
    },
  });
  var kJo = zon();
  Object.defineProperty(Vr, "merge", {
    enumerable: !0,
    get: function () {
      return kJo.merge;
    },
  });
  var ssn = Yon();
  Object.defineProperty(Vr, "TimeoutError", {
    enumerable: !0,
    get: function () {
      return ssn.TimeoutError;
    },
  });
  Object.defineProperty(Vr, "callWithTimeout", {
    enumerable: !0,
    get: function () {
      return ssn.callWithTimeout;
    },
  });
  var asn = Jon();
  Object.defineProperty(Vr, "isUrlIgnored", {
    enumerable: !0,
    get: function () {
      return asn.isUrlIgnored;
    },
  });
  Object.defineProperty(Vr, "urlMatches", {
    enumerable: !0,
    get: function () {
      return asn.urlMatches;
    },
  });
  var OJo = Zon();
  Object.defineProperty(Vr, "BindOnceFuture", {
    enumerable: !0,
    get: function () {
      return OJo.BindOnceFuture;
    },
  });
  var NJo = tsn();
  Object.defineProperty(Vr, "diagLogLevelFromString", {
    enumerable: !0,
    get: function () {
      return NJo.diagLogLevelFromString;
    },
  });
  var PJo = nsn();
  Vr.internal = { _export: PJo._export };
});