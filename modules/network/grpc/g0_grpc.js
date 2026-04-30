/**
 * @module g0
 * @category network/grpc
 * @label grpc
 * @position 426 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (g0) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var g0 = T((u6) => {
  "use strict";
  var Hwt, Vwt, Wwt, zwt;
  Object.defineProperty(u6, "__esModule", { value: !0 });
  u6.log = u6.setLoggerVerbosity = u6.setLogger = u6.getLogger = void 0;
  u6.trace = LBo;
  u6.isTracerEnabled = tXr;
  var MB = La(),
    xBo = Ae("process"),
    TBo = qwt().version,
    DBo = {
      error: (t, ...e) => {
        console.error("E " + t, ...e);
      },
      info: (t, ...e) => {
        console.error("I " + t, ...e);
      },
      debug: (t, ...e) => {
        console.error("D " + t, ...e);
      },
    },
    lq = DBo,
    wre = MB.LogVerbosity.ERROR,
    IBo =
      (Vwt = (Hwt = process.env.GRPC_NODE_VERBOSITY) !== null && Hwt !== void 0 ? Hwt : process.env.GRPC_VERBOSITY) !==
        null && Vwt !== void 0
        ? Vwt
        : "";
  switch (IBo.toUpperCase()) {
    case "DEBUG":
      wre = MB.LogVerbosity.DEBUG;
      break;
    case "INFO":
      wre = MB.LogVerbosity.INFO;
      break;
    case "ERROR":
      wre = MB.LogVerbosity.ERROR;
      break;
    case "NONE":
      wre = MB.LogVerbosity.NONE;
      break;
    default:
  }
  var RBo = () => lq;
  u6.getLogger = RBo;
  var kBo = (t) => {
    lq = t;
  };
  u6.setLogger = kBo;
  var OBo = (t) => {
    wre = t;
  };
  u6.setLoggerVerbosity = OBo;
  var NBo = (t, ...e) => {
    let r;
    if (t >= wre) {
      switch (t) {
        case MB.LogVerbosity.DEBUG:
          r = lq.debug;
          break;
        case MB.LogVerbosity.INFO:
          r = lq.info;
          break;
        case MB.LogVerbosity.ERROR:
          r = lq.error;
          break;
      }
      (r || (r = lq.error), r && r.bind(lq)(...e));
    }
  };
  u6.log = NBo;
  var PBo =
      (zwt = (Wwt = process.env.GRPC_NODE_TRACE) !== null && Wwt !== void 0 ? Wwt : process.env.GRPC_TRACE) !== null &&
      zwt !== void 0
        ? zwt
        : "",
    Ywt = new Set(),
    eXr = new Set();
  for (let t of PBo.split(",")) t.startsWith("-") ? eXr.add(t.substring(1)) : Ywt.add(t);
  var BBo = Ywt.has("all");
  function LBo(t, e, r) {
    tXr(e) && (0, u6.log)(t, new Date().toISOString() + " | v" + TBo + " " + xBo.pid + " | " + e + " | " + r);
  }
  function tXr(t) {
    return !eXr.has(t) && (BBo || Ywt.has(t));
  }
});