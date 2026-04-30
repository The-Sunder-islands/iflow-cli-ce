/**
 * @module xon
 * @category utils/oop
 * @label oop
 * @position 649 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xon = T((q0) => {
  "use strict";
  Object.defineProperty(q0, "__esModule", { value: !0 });
  q0.addHrTimes =
    q0.isTimeInput =
    q0.isTimeInputHrTime =
    q0.hrTimeToMicroseconds =
    q0.hrTimeToMilliseconds =
    q0.hrTimeToNanoseconds =
    q0.hrTimeToTimeStamp =
    q0.hrTimeDuration =
    q0.timeInputToHrTime =
    q0.hrTime =
    q0.getTimeOrigin =
    q0.millisToHrTime =
      void 0;
  var dRt = mRt(),
    Con = 9,
    wKo = 6,
    xKo = Math.pow(10, wKo),
    dQe = Math.pow(10, Con);
  function dAe(t) {
    let e = t / 1e3,
      r = Math.trunc(e),
      n = Math.round((t % 1e3) * xKo);
    return [r, n];
  }
  q0.millisToHrTime = dAe;
  function fRt() {
    let t = dRt.otperformance.timeOrigin;
    if (typeof t != "number") {
      let e = dRt.otperformance;
      t = e.timing && e.timing.fetchStart;
    }
    return t;
  }
  q0.getTimeOrigin = fRt;
  function Son(t) {
    let e = dAe(fRt()),
      r = dAe(typeof t == "number" ? t : dRt.otperformance.now());
    return won(e, r);
  }
  q0.hrTime = Son;
  function TKo(t) {
    if (pRt(t)) return t;
    if (typeof t == "number") return t < fRt() ? Son(t) : dAe(t);
    if (t instanceof Date) return dAe(t.getTime());
    throw TypeError("Invalid input type");
  }
  q0.timeInputToHrTime = TKo;
  function DKo(t, e) {
    let r = e[0] - t[0],
      n = e[1] - t[1];
    return (n < 0 && ((r -= 1), (n += dQe)), [r, n]);
  }
  q0.hrTimeDuration = DKo;
  function IKo(t) {
    let e = Con,
      r = `${"0".repeat(e)}${t[1]}Z`,
      n = r.substring(r.length - e - 1);
    return new Date(t[0] * 1e3).toISOString().replace("000Z", n);
  }
  q0.hrTimeToTimeStamp = IKo;
  function RKo(t) {
    return t[0] * dQe + t[1];
  }
  q0.hrTimeToNanoseconds = RKo;
  function kKo(t) {
    return t[0] * 1e3 + t[1] / 1e6;
  }
  q0.hrTimeToMilliseconds = kKo;
  function OKo(t) {
    return t[0] * 1e6 + t[1] / 1e3;
  }
  q0.hrTimeToMicroseconds = OKo;
  function pRt(t) {
    return Array.isArray(t) && t.length === 2 && typeof t[0] == "number" && typeof t[1] == "number";
  }
  q0.isTimeInputHrTime = pRt;
  function NKo(t) {
    return pRt(t) || typeof t == "number" || t instanceof Date;
  }
  q0.isTimeInput = NKo;
  function won(t, e) {
    let r = [t[0] + e[0], t[1] + e[1]];
    return (r[1] >= dQe && ((r[1] -= dQe), (r[0] += 1)), r);
  }
  q0.addHrTimes = won;
});