/**
 * @module Unn
 * @category utils/oop
 * @label oop
 * @position 584 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Unn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Unn = T((G0) => {
  "use strict";
  Object.defineProperty(G0, "__esModule", { value: !0 });
  G0.addHrTimes =
    G0.isTimeInput =
    G0.isTimeInputHrTime =
    G0.hrTimeToMicroseconds =
    G0.hrTimeToMilliseconds =
    G0.hrTimeToNanoseconds =
    G0.hrTimeToTimeStamp =
    G0.hrTimeDuration =
    G0.timeInputToHrTime =
    G0.hrTime =
    G0.getTimeOrigin =
    G0.millisToHrTime =
      void 0;
  var cje = x7t(),
    Lnn = 9,
    PWo = 6,
    BWo = Math.pow(10, PWo),
    lje = Math.pow(10, Lnn);
  function nAe(t) {
    let e = t / 1e3,
      r = Math.trunc(e),
      n = Math.round((t % 1e3) * BWo);
    return [r, n];
  }
  G0.millisToHrTime = nAe;
  function LWo() {
    return cje.otperformance.timeOrigin;
  }
  G0.getTimeOrigin = LWo;
  function Mnn(t) {
    let e = nAe(cje.otperformance.timeOrigin),
      r = nAe(typeof t == "number" ? t : cje.otperformance.now());
    return Fnn(e, r);
  }
  G0.hrTime = Mnn;
  function MWo(t) {
    if (T7t(t)) return t;
    if (typeof t == "number") return t < cje.otperformance.timeOrigin ? Mnn(t) : nAe(t);
    if (t instanceof Date) return nAe(t.getTime());
    throw TypeError("Invalid input type");
  }
  G0.timeInputToHrTime = MWo;
  function FWo(t, e) {
    let r = e[0] - t[0],
      n = e[1] - t[1];
    return (n < 0 && ((r -= 1), (n += lje)), [r, n]);
  }
  G0.hrTimeDuration = FWo;
  function UWo(t) {
    let e = Lnn,
      r = `${"0".repeat(e)}${t[1]}Z`,
      n = r.substring(r.length - e - 1);
    return new Date(t[0] * 1e3).toISOString().replace("000Z", n);
  }
  G0.hrTimeToTimeStamp = UWo;
  function $Wo(t) {
    return t[0] * lje + t[1];
  }
  G0.hrTimeToNanoseconds = $Wo;
  function jWo(t) {
    return t[0] * 1e3 + t[1] / 1e6;
  }
  G0.hrTimeToMilliseconds = jWo;
  function QWo(t) {
    return t[0] * 1e6 + t[1] / 1e3;
  }
  G0.hrTimeToMicroseconds = QWo;
  function T7t(t) {
    return Array.isArray(t) && t.length === 2 && typeof t[0] == "number" && typeof t[1] == "number";
  }
  G0.isTimeInputHrTime = T7t;
  function GWo(t) {
    return T7t(t) || typeof t == "number" || t instanceof Date;
  }
  G0.isTimeInput = GWo;
  function Fnn(t, e) {
    let r = [t[0] + e[0], t[1] + e[1]];
    return (r[1] >= lje && ((r[1] -= lje), (r[0] += 1)), r);
  }
  G0.addHrTimes = Fnn;
});
var $nn = T((mje) => {
  "use strict";
  Object.defineProperty(mje, "__esModule", { value: !0 });
  mje.unrefTimer = void 0;
  function qWo(t) {
    typeof t != "number" && t.unref();
  }
  mje.unrefTimer = qWo;
});