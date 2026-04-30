/**
 * @module Drt
 * @category unknown
 * @label unknown
 * @position 1375 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Drt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Drt = T((s9c, MUn) => {
  var BE = (MUn.exports = {});
  BE.dateToDos = function (t, e) {
    e = e || !1;
    var r = e ? t.getFullYear() : t.getUTCFullYear();
    if (r < 1980) return 2162688;
    if (r >= 2044) return 2141175677;
    var n = {
      year: r,
      month: e ? t.getMonth() : t.getUTCMonth(),
      date: e ? t.getDate() : t.getUTCDate(),
      hours: e ? t.getHours() : t.getUTCHours(),
      minutes: e ? t.getMinutes() : t.getUTCMinutes(),
      seconds: e ? t.getSeconds() : t.getUTCSeconds(),
    };
    return (
      ((n.year - 1980) << 25) |
      ((n.month + 1) << 21) |
      (n.date << 16) |
      (n.hours << 11) |
      (n.minutes << 5) |
      (n.seconds / 2)
    );
  };
  BE.dosToDate = function (t) {
    return new Date(
      ((t >> 25) & 127) + 1980,
      ((t >> 21) & 15) - 1,
      (t >> 16) & 31,
      (t >> 11) & 31,
      (t >> 5) & 63,
      (t & 31) << 1,
    );
  };
  BE.fromDosTime = function (t) {
    return BE.dosToDate(t.readUInt32LE(0));
  };
  BE.getEightBytes = function (t) {
    var e = Buffer.alloc(8);
    return (e.writeUInt32LE(t % 4294967296, 0), e.writeUInt32LE((t / 4294967296) | 0, 4), e);
  };
  BE.getShortBytes = function (t) {
    var e = Buffer.alloc(2);
    return (e.writeUInt16LE((t & 65535) >>> 0, 0), e);
  };
  BE.getShortBytesValue = function (t, e) {
    return t.readUInt16LE(e);
  };
  BE.getLongBytes = function (t) {
    var e = Buffer.alloc(4);
    return (e.writeUInt32LE((t & 4294967295) >>> 0, 0), e);
  };
  BE.getLongBytesValue = function (t, e) {
    return t.readUInt32LE(e);
  };
  BE.toDosTime = function (t) {
    return BE.getLongBytes(BE.dateToDos(t));
  };
});