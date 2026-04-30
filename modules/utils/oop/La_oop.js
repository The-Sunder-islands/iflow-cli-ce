/**
 * @module La
 * @category utils/oop
 * @label oop
 * @position 424 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (La) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var La = T((k_) => {
  "use strict";
  Object.defineProperty(k_, "__esModule", { value: !0 });
  k_.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH =
    k_.DEFAULT_MAX_SEND_MESSAGE_LENGTH =
    k_.Propagate =
    k_.LogVerbosity =
    k_.Status =
      void 0;
  var JJr;
  (function (t) {
    ((t[(t.OK = 0)] = "OK"),
      (t[(t.CANCELLED = 1)] = "CANCELLED"),
      (t[(t.UNKNOWN = 2)] = "UNKNOWN"),
      (t[(t.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
      (t[(t.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
      (t[(t.NOT_FOUND = 5)] = "NOT_FOUND"),
      (t[(t.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
      (t[(t.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
      (t[(t.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
      (t[(t.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
      (t[(t.ABORTED = 10)] = "ABORTED"),
      (t[(t.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
      (t[(t.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
      (t[(t.INTERNAL = 13)] = "INTERNAL"),
      (t[(t.UNAVAILABLE = 14)] = "UNAVAILABLE"),
      (t[(t.DATA_LOSS = 15)] = "DATA_LOSS"),
      (t[(t.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"));
  })(JJr || (k_.Status = JJr = {}));
  var XJr;
  (function (t) {
    ((t[(t.DEBUG = 0)] = "DEBUG"),
      (t[(t.INFO = 1)] = "INFO"),
      (t[(t.ERROR = 2)] = "ERROR"),
      (t[(t.NONE = 3)] = "NONE"));
  })(XJr || (k_.LogVerbosity = XJr = {}));
  var ZJr;
  (function (t) {
    ((t[(t.DEADLINE = 1)] = "DEADLINE"),
      (t[(t.CENSUS_STATS_CONTEXT = 2)] = "CENSUS_STATS_CONTEXT"),
      (t[(t.CENSUS_TRACING_CONTEXT = 4)] = "CENSUS_TRACING_CONTEXT"),
      (t[(t.CANCELLATION = 8)] = "CANCELLATION"),
      (t[(t.DEFAULTS = 65535)] = "DEFAULTS"));
  })(ZJr || (k_.Propagate = ZJr = {}));
  k_.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
  k_.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4 * 1024 * 1024;
});