/**
 * @module Hre
 * @category utils/oop
 * @label oop
 * @position 491 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hre) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hre = T((vq) => {
  "use strict";
  Object.defineProperty(vq, "__esModule", { value: !0 });
  vq.minDeadline = R$o;
  vq.getDeadlineTimeoutString = O$o;
  vq.getRelativeTimeout = P$o;
  vq.deadlineToString = B$o;
  vq.formatDateDifference = L$o;
  function R$o(...t) {
    let e = 1 / 0;
    for (let r of t) {
      let n = r instanceof Date ? r.getTime() : r;
      n < e && (e = n);
    }
    return e;
  }
  var k$o = [
    ["m", 1],
    ["S", 1e3],
    ["M", 60 * 1e3],
    ["H", 3600 * 1e3],
  ];
  function O$o(t) {
    let e = new Date().getTime();
    t instanceof Date && (t = t.getTime());
    let r = Math.max(t - e, 0);
    for (let [n, o] of k$o) {
      let s = r / o;
      if (s < 1e8) return String(Math.ceil(s)) + n;
    }
    throw new Error("Deadline is too far in the future");
  }
  var N$o = 2147483647;
  function P$o(t) {
    let e = t instanceof Date ? t.getTime() : t,
      r = new Date().getTime(),
      n = e - r;
    return n < 0 ? 0 : n > N$o ? 1 / 0 : n;
  }
  function B$o(t) {
    if (t instanceof Date) return t.toISOString();
    {
      let e = new Date(t);
      return Number.isNaN(e.getTime()) ? "" + t : e.toISOString();
    }
  }
  function L$o(t, e) {
    return ((e.getTime() - t.getTime()) / 1e3).toFixed(3) + "s";
  }
});