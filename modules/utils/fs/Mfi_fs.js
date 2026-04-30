/**
 * @module Mfi
 * @category utils/fs
 * @label fs
 * @position 1644 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mfi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mfi = T((fQc, Lfi) => {
  "use strict";
  var t5 = rf(),
    DSe = Ae("path"),
    JSa = FS().mkdirsSync,
    XSa = hpr().utimesMillisSync,
    ISe = rK();
  function ZSa(t, e, r) {
    (typeof r == "function" && (r = { filter: r }),
      (r = r || {}),
      (r.clobber = "clobber" in r ? !!r.clobber : !0),
      (r.overwrite = "overwrite" in r ? !!r.overwrite : r.clobber),
      r.preserveTimestamps &&
        process.arch === "ia32" &&
        process.emitWarning(
          `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
          "Warning",
          "fs-extra-WARN0002",
        ));
    let { srcStat: n, destStat: o } = ISe.checkPathsSync(t, e, "copy", r);
    if ((ISe.checkParentPathsSync(t, n, e, "copy"), r.filter && !r.filter(t, e))) return;
    let s = DSe.dirname(e);
    return (t5.existsSync(s) || JSa(s), Nfi(o, t, e, r));
  }
  function Nfi(t, e, r, n) {
    let s = (n.dereference ? t5.statSync : t5.lstatSync)(e);
    if (s.isDirectory()) return swa(s, t, e, r, n);
    if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return ewa(s, t, e, r, n);
    if (s.isSymbolicLink()) return cwa(t, e, r, n);
    throw s.isSocket()
      ? new Error(`Cannot copy a socket file: ${e}`)
      : s.isFIFO()
        ? new Error(`Cannot copy a FIFO pipe: ${e}`)
        : new Error(`Unknown file: ${e}`);
  }
  function ewa(t, e, r, n, o) {
    return e ? twa(t, r, n, o) : Pfi(t, r, n, o);
  }
  function twa(t, e, r, n) {
    if (n.overwrite) return (t5.unlinkSync(r), Pfi(t, e, r, n));
    if (n.errorOnExist) throw new Error(`'${r}' already exists`);
  }
  function Pfi(t, e, r, n) {
    return (t5.copyFileSync(e, r), n.preserveTimestamps && rwa(t.mode, e, r), bpr(r, t.mode));
  }
  function rwa(t, e, r) {
    return (nwa(t) && iwa(r, t), owa(e, r));
  }
  function nwa(t) {
    return (t & 128) === 0;
  }
  function iwa(t, e) {
    return bpr(t, e | 128);
  }
  function bpr(t, e) {
    return t5.chmodSync(t, e);
  }
  function owa(t, e) {
    let r = t5.statSync(t);
    return XSa(e, r.atime, r.mtime);
  }
  function swa(t, e, r, n, o) {
    return e ? Bfi(r, n, o) : awa(t.mode, r, n, o);
  }
  function awa(t, e, r, n) {
    return (t5.mkdirSync(r), Bfi(e, r, n), bpr(r, t));
  }
  function Bfi(t, e, r) {
    let n = t5.opendirSync(t);
    try {
      let o;
      for (; (o = n.readSync()) !== null; ) uwa(o.name, t, e, r);
    } finally {
      n.closeSync();
    }
  }
  function uwa(t, e, r, n) {
    let o = DSe.join(e, t),
      s = DSe.join(r, t);
    if (n.filter && !n.filter(o, s)) return;
    let { destStat: a } = ISe.checkPathsSync(o, s, "copy", n);
    return Nfi(a, o, s, n);
  }
  function cwa(t, e, r, n) {
    let o = t5.readlinkSync(e);
    if ((n.dereference && (o = DSe.resolve(process.cwd(), o)), t)) {
      let s;
      try {
        s = t5.readlinkSync(r);
      } catch (a) {
        if (a.code === "EINVAL" || a.code === "UNKNOWN") return t5.symlinkSync(o, r);
        throw a;
      }
      if ((n.dereference && (s = DSe.resolve(process.cwd(), s)), o !== s)) {
        if (ISe.isSrcSubdir(o, s)) throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${s}'.`);
        if (ISe.isSrcSubdir(s, o)) throw new Error(`Cannot overwrite '${s}' with '${o}'.`);
      }
      return lwa(o, r);
    } else return t5.symlinkSync(o, r);
  }
  function lwa(t, e) {
    return (t5.unlinkSync(e), t5.symlinkSync(t, e));
  }
  Lfi.exports = ZSa;
});