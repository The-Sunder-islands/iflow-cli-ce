/**
 * @module Pbe
 * @category utils/oop
 * @label oop
 * @position 509 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pbe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pbe = T((UR) => {
  "use strict";
  Object.defineProperty(UR, "__esModule", { value: !0 });
  UR.durationMessageToDuration = xQo;
  UR.msToDuration = TQo;
  UR.durationToMs = DQo;
  UR.isDuration = IQo;
  UR.isDurationMessage = RQo;
  UR.parseDuration = OQo;
  UR.durationToString = NQo;
  function xQo(t) {
    return { seconds: Number.parseInt(t.seconds), nanos: t.nanos };
  }
  function TQo(t) {
    return { seconds: (t / 1e3) | 0, nanos: ((t % 1e3) * 1e6) | 0 };
  }
  function DQo(t) {
    return (t.seconds * 1e3 + t.nanos / 1e6) | 0;
  }
  function IQo(t) {
    return typeof t.seconds == "number" && typeof t.nanos == "number";
  }
  function RQo(t) {
    return typeof t.seconds == "string" && typeof t.nanos == "number";
  }
  var kQo = /^(\d+)(?:\.(\d+))?s$/;
  function OQo(t) {
    let e = t.match(kQo);
    return e
      ? { seconds: Number.parseInt(e[1], 10), nanos: e[2] ? Number.parseInt(e[2].padEnd(9, "0"), 10) : 0 }
      : null;
  }
  function NQo(t) {
    if (t.nanos === 0) return `${t.seconds}s`;
    let e;
    return (
      t.nanos % 1e6 === 0 ? (e = 1e6) : t.nanos % 1e3 === 0 ? (e = 1e3) : (e = 1),
      `${t.seconds}.${t.nanos / e}s`
    );
  }
});