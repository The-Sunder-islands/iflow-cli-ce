/**
 * @module rK
 * @category utils/fs
 * @label fs
 * @position 1641 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rK) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rK = T((lQc, wfi) => {
  "use strict";
  var fme = e5(),
    f3 = Ae("path"),
    vfi = d3().fromPromise;
  function LSa(t, e, r) {
    let n = r.dereference ? (o) => fme.stat(o, { bigint: !0 }) : (o) => fme.lstat(o, { bigint: !0 });
    return Promise.all([
      n(t),
      n(e).catch((o) => {
        if (o.code === "ENOENT") return null;
        throw o;
      }),
    ]).then(([o, s]) => ({ srcStat: o, destStat: s }));
  }
  function MSa(t, e, r) {
    let n,
      o = r.dereference ? (a) => fme.statSync(a, { bigint: !0 }) : (a) => fme.lstatSync(a, { bigint: !0 }),
      s = o(t);
    try {
      n = o(e);
    } catch (a) {
      if (a.code === "ENOENT") return { srcStat: s, destStat: null };
      throw a;
    }
    return { srcStat: s, destStat: n };
  }
  async function FSa(t, e, r, n) {
    let { srcStat: o, destStat: s } = await LSa(t, e, n);
    if (s) {
      if (wSe(o, s)) {
        let a = f3.basename(t),
          u = f3.basename(e);
        if (r === "move" && a !== u && a.toLowerCase() === u.toLowerCase())
          return { srcStat: o, destStat: s, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (o.isDirectory() && !s.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`);
      if (!o.isDirectory() && s.isDirectory())
        throw new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`);
    }
    if (o.isDirectory() && gpr(t, e)) throw new Error(dlt(t, e, r));
    return { srcStat: o, destStat: s };
  }
  function USa(t, e, r, n) {
    let { srcStat: o, destStat: s } = MSa(t, e, n);
    if (s) {
      if (wSe(o, s)) {
        let a = f3.basename(t),
          u = f3.basename(e);
        if (r === "move" && a !== u && a.toLowerCase() === u.toLowerCase())
          return { srcStat: o, destStat: s, isChangingCase: !0 };
        throw new Error("Source and destination must not be the same.");
      }
      if (o.isDirectory() && !s.isDirectory())
        throw new Error(`Cannot overwrite non-directory '${e}' with directory '${t}'.`);
      if (!o.isDirectory() && s.isDirectory())
        throw new Error(`Cannot overwrite directory '${e}' with non-directory '${t}'.`);
    }
    if (o.isDirectory() && gpr(t, e)) throw new Error(dlt(t, e, r));
    return { srcStat: o, destStat: s };
  }
  async function Cfi(t, e, r, n) {
    let o = f3.resolve(f3.dirname(t)),
      s = f3.resolve(f3.dirname(r));
    if (s === o || s === f3.parse(s).root) return;
    let a;
    try {
      a = await fme.stat(s, { bigint: !0 });
    } catch (u) {
      if (u.code === "ENOENT") return;
      throw u;
    }
    if (wSe(e, a)) throw new Error(dlt(t, r, n));
    return Cfi(t, e, s, n);
  }
  function Sfi(t, e, r, n) {
    let o = f3.resolve(f3.dirname(t)),
      s = f3.resolve(f3.dirname(r));
    if (s === o || s === f3.parse(s).root) return;
    let a;
    try {
      a = fme.statSync(s, { bigint: !0 });
    } catch (u) {
      if (u.code === "ENOENT") return;
      throw u;
    }
    if (wSe(e, a)) throw new Error(dlt(t, r, n));
    return Sfi(t, e, s, n);
  }
  function wSe(t, e) {
    return e.ino !== void 0 && e.dev !== void 0 && e.ino === t.ino && e.dev === t.dev;
  }
  function gpr(t, e) {
    let r = f3
        .resolve(t)
        .split(f3.sep)
        .filter((o) => o),
      n = f3
        .resolve(e)
        .split(f3.sep)
        .filter((o) => o);
    return r.every((o, s) => n[s] === o);
  }
  function dlt(t, e, r) {
    return `Cannot ${r} '${t}' to a subdirectory of itself, '${e}'.`;
  }
  wfi.exports = {
    checkPaths: vfi(FSa),
    checkPathsSync: USa,
    checkParentPaths: vfi(Cfi),
    checkParentPathsSync: Sfi,
    isSrcSubdir: gpr,
    areIdentical: wSe,
  };
});