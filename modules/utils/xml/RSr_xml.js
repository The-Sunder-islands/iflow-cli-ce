/**
 * @module RSr
 * @category utils/xml
 * @label xml
 * @position 4 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RSr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RSr = T((H9u, YZ) => {
  var Ym = global.process,
    ZQ = function (t) {
      return (
        t &&
        typeof t == "object" &&
        typeof t.removeListener == "function" &&
        typeof t.emit == "function" &&
        typeof t.reallyExit == "function" &&
        typeof t.listeners == "function" &&
        typeof t.kill == "function" &&
        typeof t.pid == "number" &&
        typeof t.on == "function"
      );
    };
  ZQ(Ym)
    ? ((xSr = Ae("assert")),
      (WZ = wSr()),
      (TSr = /^win/i.test(Ym.platform)),
      (Ahe = Ae("events")),
      typeof Ahe != "function" && (Ahe = Ahe.EventEmitter),
      Ym.__signal_exit_emitter__
        ? (vh = Ym.__signal_exit_emitter__)
        : ((vh = Ym.__signal_exit_emitter__ = new Ahe()), (vh.count = 0), (vh.emitted = {})),
      vh.infinite || (vh.setMaxListeners(1 / 0), (vh.infinite = !0)),
      (YZ.exports = function (t, e) {
        if (!ZQ(global.process)) return function () {};
        (xSr.equal(typeof t, "function", "a callback must be provided for exit handler"), zZ === !1 && A8t());
        var r = "exit";
        e && e.alwaysLast && (r = "afterexit");
        var n = function () {
          (vh.removeListener(r, t),
            vh.listeners("exit").length === 0 && vh.listeners("afterexit").length === 0 && G7e());
        };
        return (vh.on(r, t), n);
      }),
      (G7e = function () {
        !zZ ||
          !ZQ(global.process) ||
          ((zZ = !1),
          WZ.forEach(function (e) {
            try {
              Ym.removeListener(e, q7e[e]);
            } catch {}
          }),
          (Ym.emit = H7e),
          (Ym.reallyExit = y8t),
          (vh.count -= 1));
      }),
      (YZ.exports.unload = G7e),
      (eG = function (e, r, n) {
        vh.emitted[e] || ((vh.emitted[e] = !0), vh.emit(e, r, n));
      }),
      (q7e = {}),
      WZ.forEach(function (t) {
        q7e[t] = function () {
          if (ZQ(global.process)) {
            var r = Ym.listeners(t);
            r.length === vh.count &&
              (G7e(),
              eG("exit", null, t),
              eG("afterexit", null, t),
              TSr && t === "SIGHUP" && (t = "SIGINT"),
              Ym.kill(Ym.pid, t));
          }
        };
      }),
      (YZ.exports.signals = function () {
        return WZ;
      }),
      (zZ = !1),
      (A8t = function () {
        zZ ||
          !ZQ(global.process) ||
          ((zZ = !0),
          (vh.count += 1),
          (WZ = WZ.filter(function (e) {
            try {
              return (Ym.on(e, q7e[e]), !0);
            } catch {
              return !1;
            }
          })),
          (Ym.emit = ISr),
          (Ym.reallyExit = DSr));
      }),
      (YZ.exports.load = A8t),
      (y8t = Ym.reallyExit),
      (DSr = function (e) {
        ZQ(global.process) &&
          ((Ym.exitCode = e || 0),
          eG("exit", Ym.exitCode, null),
          eG("afterexit", Ym.exitCode, null),
          y8t.call(Ym, Ym.exitCode));
      }),
      (H7e = Ym.emit),
      (ISr = function (e, r) {
        if (e === "exit" && ZQ(global.process)) {
          r !== void 0 && (Ym.exitCode = r);
          var n = H7e.apply(this, arguments);
          return (eG("exit", Ym.exitCode, null), eG("afterexit", Ym.exitCode, null), n);
        } else return H7e.apply(this, arguments);
      }))
    : (YZ.exports = function () {
        return function () {};
      });
  var xSr, WZ, TSr, Ahe, vh, G7e, eG, q7e, zZ, A8t, y8t, DSr, H7e, ISr;
});
import { PassThrough as kSr } from "node:stream";
var OSr,
  _8t,
  wco,
  NSr,
  PSr = j(() => {
    ((OSr = [
      "assert",
      "count",
      "countReset",
      "debug",
      "dir",
      "dirxml",
      "error",
      "group",
      "groupCollapsed",
      "groupEnd",
      "info",
      "log",
      "table",
      "time",
      "timeEnd",
      "timeLog",
      "trace",
      "warn",
    ]),
      (_8t = {}),
      (wco = (t) => {
        let e = new kSr(),
          r = new kSr();
        ((e.write = (o) => {
          t("stdout", o);
        }),
          (r.write = (o) => {
            t("stderr", o);
          }));
        let n = new console.Console(e, r);
        for (let o of OSr) ((_8t[o] = console[o]), (console[o] = n[o]));
        return () => {
          for (let o of OSr) console[o] = _8t[o];
          _8t = {};
        };
      }),
      (NSr = wco));
  });