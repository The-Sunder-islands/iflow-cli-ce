/**
 * @module JGr
 * @category utils/oop
 * @label oop
 * @position 138 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (JGr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var JGr = T((F0) => {
  "use strict";
  Object.defineProperty(F0, "__esModule", { value: !0 });
  F0.addHrTimes =
    F0.isTimeInput =
    F0.isTimeInputHrTime =
    F0.hrTimeToMicroseconds =
    F0.hrTimeToMilliseconds =
    F0.hrTimeToNanoseconds =
    F0.hrTimeToTimeStamp =
    F0.hrTimeDuration =
    F0.timeInputToHrTime =
    F0.hrTime =
    F0.getTimeOrigin =
    F0.millisToHrTime =
      void 0;
  var mvt = lvt(),
    zGr = 9,
    XSo = 6,
    ZSo = Math.pow(10, XSo),
    ENe = Math.pow(10, zGr);
  function rge(t) {
    let e = t / 1e3,
      r = Math.trunc(e),
      n = Math.round((t % 1e3) * ZSo);
    return [r, n];
  }
  F0.millisToHrTime = rge;
  function dvt() {
    let t = mvt.otperformance.timeOrigin;
    if (typeof t != "number") {
      let e = mvt.otperformance;
      t = e.timing && e.timing.fetchStart;
    }
    return t;
  }
  F0.getTimeOrigin = dvt;
  function YGr(t) {
    let e = rge(dvt()),
      r = rge(typeof t == "number" ? t : mvt.otperformance.now());
    return KGr(e, r);
  }
  F0.hrTime = YGr;
  function ewo(t) {
    if (fvt(t)) return t;
    if (typeof t == "number") return t < dvt() ? YGr(t) : rge(t);
    if (t instanceof Date) return rge(t.getTime());
    throw TypeError("Invalid input type");
  }
  F0.timeInputToHrTime = ewo;
  function two(t, e) {
    let r = e[0] - t[0],
      n = e[1] - t[1];
    return (n < 0 && ((r -= 1), (n += ENe)), [r, n]);
  }
  F0.hrTimeDuration = two;
  function rwo(t) {
    let e = zGr,
      r = `${"0".repeat(e)}${t[1]}Z`,
      n = r.substring(r.length - e - 1);
    return new Date(t[0] * 1e3).toISOString().replace("000Z", n);
  }
  F0.hrTimeToTimeStamp = rwo;
  function nwo(t) {
    return t[0] * ENe + t[1];
  }
  F0.hrTimeToNanoseconds = nwo;
  function iwo(t) {
    return t[0] * 1e3 + t[1] / 1e6;
  }
  F0.hrTimeToMilliseconds = iwo;
  function owo(t) {
    return t[0] * 1e6 + t[1] / 1e3;
  }
  F0.hrTimeToMicroseconds = owo;
  function fvt(t) {
    return Array.isArray(t) && t.length === 2 && typeof t[0] == "number" && typeof t[1] == "number";
  }
  F0.isTimeInputHrTime = fvt;
  function swo(t) {
    return fvt(t) || typeof t == "number" || t instanceof Date;
  }
  F0.isTimeInput = swo;
  function KGr(t, e) {
    let r = [t[0] + e[0], t[1] + e[1]];
    return (r[1] >= ENe && ((r[1] -= ENe), (r[0] += 1)), r);
  }
  F0.addHrTimes = KGr;
});