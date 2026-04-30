/**
 * @module Ofi
 * @category utils/fs
 * @label fs
 * @position 1643 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ofi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ofi = T((dQc, kfi) => {
  "use strict";
  var AA = e5(),
    xSe = Ae("path"),
    { mkdirs: jSa } = FS(),
    { pathExists: QSa } = l$(),
    { utimesMillis: GSa } = hpr(),
    TSe = rK(),
    { asyncIteratorConcurrentProcess: qSa } = Tfi();
  async function HSa(t, e, r = {}) {
    (typeof r == "function" && (r = { filter: r }),
      (r.clobber = "clobber" in r ? !!r.clobber : !0),
      (r.overwrite = "overwrite" in r ? !!r.overwrite : r.clobber),
      r.preserveTimestamps &&
        process.arch === "ia32" &&
        process.emitWarning(
          `Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`,
          "Warning",
          "fs-extra-WARN0001",
        ));
    let { srcStat: n, destStat: o } = await TSe.checkPaths(t, e, "copy", r);
    if ((await TSe.checkParentPaths(t, n, e, "copy"), !(await Ifi(t, e, r)))) return;
    let a = xSe.dirname(e);
    ((await QSa(a)) || (await jSa(a)), await Rfi(o, t, e, r));
  }
  async function Ifi(t, e, r) {
    return r.filter ? r.filter(t, e) : !0;
  }
  async function Rfi(t, e, r, n) {
    let s = await (n.dereference ? AA.stat : AA.lstat)(e);
    if (s.isDirectory()) return YSa(s, t, e, r, n);
    if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return VSa(s, t, e, r, n);
    if (s.isSymbolicLink()) return KSa(t, e, r, n);
    throw s.isSocket()
      ? new Error(`Cannot copy a socket file: ${e}`)
      : s.isFIFO()
        ? new Error(`Cannot copy a FIFO pipe: ${e}`)
        : new Error(`Unknown file: ${e}`);
  }
  async function VSa(t, e, r, n, o) {
    if (!e) return Dfi(t, r, n, o);
    if (o.overwrite) return (await AA.unlink(n), Dfi(t, r, n, o));
    if (o.errorOnExist) throw new Error(`'${n}' already exists`);
  }
  async function Dfi(t, e, r, n) {
    if ((await AA.copyFile(e, r), n.preserveTimestamps)) {
      WSa(t.mode) && (await zSa(r, t.mode));
      let o = await AA.stat(e);
      await GSa(r, o.atime, o.mtime);
    }
    return AA.chmod(r, t.mode);
  }
  function WSa(t) {
    return (t & 128) === 0;
  }
  function zSa(t, e) {
    return AA.chmod(t, e | 128);
  }
  async function YSa(t, e, r, n, o) {
    (e || (await AA.mkdir(n)),
      await qSa(await AA.opendir(r), async (s) => {
        let a = xSe.join(r, s.name),
          u = xSe.join(n, s.name);
        if (await Ifi(a, u, o)) {
          let { destStat: m } = await TSe.checkPaths(a, u, "copy", o);
          await Rfi(m, a, u, o);
        }
      }),
      e || (await AA.chmod(n, t.mode)));
  }
  async function KSa(t, e, r, n) {
    let o = await AA.readlink(e);
    if ((n.dereference && (o = xSe.resolve(process.cwd(), o)), !t)) return AA.symlink(o, r);
    let s = null;
    try {
      s = await AA.readlink(r);
    } catch (a) {
      if (a.code === "EINVAL" || a.code === "UNKNOWN") return AA.symlink(o, r);
      throw a;
    }
    if ((n.dereference && (s = xSe.resolve(process.cwd(), s)), o !== s)) {
      if (TSe.isSrcSubdir(o, s)) throw new Error(`Cannot copy '${o}' to a subdirectory of itself, '${s}'.`);
      if (TSe.isSrcSubdir(s, o)) throw new Error(`Cannot overwrite '${s}' with '${o}'.`);
    }
    return (await AA.unlink(r), AA.symlink(o, r));
  }
  kfi.exports = HSa;
});