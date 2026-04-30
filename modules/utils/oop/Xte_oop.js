/**
 * @module Xte
 * @category utils/oop
 * @label oop
 * @position 292 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xte) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xte = T((Nh) => {
  "use strict";
  Object.defineProperty(Nh, "__esModule", { value: !0 });
  Nh.logs =
    Nh.ProxyLoggerProvider =
    Nh.ProxyLogger =
    Nh.NoopLoggerProvider =
    Nh.NOOP_LOGGER_PROVIDER =
    Nh.NoopLogger =
    Nh.NOOP_LOGGER =
    Nh.SeverityNumber =
      void 0;
  var gRo = Mzr();
  Object.defineProperty(Nh, "SeverityNumber", {
    enumerable: !0,
    get: function () {
      return gRo.SeverityNumber;
    },
  });
  var qzr = GBe();
  Object.defineProperty(Nh, "NOOP_LOGGER", {
    enumerable: !0,
    get: function () {
      return qzr.NOOP_LOGGER;
    },
  });
  Object.defineProperty(Nh, "NoopLogger", {
    enumerable: !0,
    get: function () {
      return qzr.NoopLogger;
    },
  });
  var Hzr = HBe();
  Object.defineProperty(Nh, "NOOP_LOGGER_PROVIDER", {
    enumerable: !0,
    get: function () {
      return Hzr.NOOP_LOGGER_PROVIDER;
    },
  });
  Object.defineProperty(Nh, "NoopLoggerProvider", {
    enumerable: !0,
    get: function () {
      return Hzr.NoopLoggerProvider;
    },
  });
  var bRo = D4t();
  Object.defineProperty(Nh, "ProxyLogger", {
    enumerable: !0,
    get: function () {
      return bRo.ProxyLogger;
    },
  });
  var ARo = R4t();
  Object.defineProperty(Nh, "ProxyLoggerProvider", {
    enumerable: !0,
    get: function () {
      return ARo.ProxyLoggerProvider;
    },
  });
  var yRo = Gzr();
  Nh.logs = yRo.LogsAPI.getInstance();
});