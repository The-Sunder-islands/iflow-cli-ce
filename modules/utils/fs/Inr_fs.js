/**
 * @module Inr
 * @category utils/fs
 * @label fs
 * @position 1450 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Inr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Inr = T((JF) => {
  JF.setopts = NZs;
  JF.ownProp = cqn;
  JF.makeAbs = BEe;
  JF.finish = PZs;
  JF.mark = BZs;
  JF.isIgnored = mqn;
  JF.childrenIgnored = LZs;
  function cqn(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  var DZs = Ae("fs"),
    Sce = Ae("path"),
    IZs = uD(),
    lqn = J4(),
    Dnr = IZs.Minimatch;
  function RZs(t, e) {
    return t.localeCompare(e, "en");
  }
  function kZs(t, e) {
    ((t.ignore = e.ignore || []),
      Array.isArray(t.ignore) || (t.ignore = [t.ignore]),
      t.ignore.length && (t.ignore = t.ignore.map(OZs)));
  }
  function OZs(t) {
    var e = null;
    if (t.slice(-3) === "/**") {
      var r = t.replace(/(\/\*\*)+$/, "");
      e = new Dnr(r, { dot: !0 });
    }
    return { matcher: new Dnr(t, { dot: !0 }), gmatcher: e };
  }
  function NZs(t, e, r) {
    if ((r || (r = {}), r.matchBase && e.indexOf("/") === -1)) {
      if (r.noglobstar) throw new Error("base matching requires globstar");
      e = "**/" + e;
    }
    ((t.silent = !!r.silent),
      (t.pattern = e),
      (t.strict = r.strict !== !1),
      (t.realpath = !!r.realpath),
      (t.realpathCache = r.realpathCache || Object.create(null)),
      (t.follow = !!r.follow),
      (t.dot = !!r.dot),
      (t.mark = !!r.mark),
      (t.nodir = !!r.nodir),
      t.nodir && (t.mark = !0),
      (t.sync = !!r.sync),
      (t.nounique = !!r.nounique),
      (t.nonull = !!r.nonull),
      (t.nosort = !!r.nosort),
      (t.nocase = !!r.nocase),
      (t.stat = !!r.stat),
      (t.noprocess = !!r.noprocess),
      (t.absolute = !!r.absolute),
      (t.fs = r.fs || DZs),
      (t.maxLength = r.maxLength || 1 / 0),
      (t.cache = r.cache || Object.create(null)),
      (t.statCache = r.statCache || Object.create(null)),
      (t.symlinks = r.symlinks || Object.create(null)),
      kZs(t, r),
      (t.changedCwd = !1));
    var n = process.cwd();
    (cqn(r, "cwd") ? ((t.cwd = Sce.resolve(r.cwd)), (t.changedCwd = t.cwd !== n)) : (t.cwd = n),
      (t.root = r.root || Sce.resolve(t.cwd, "/")),
      (t.root = Sce.resolve(t.root)),
      process.platform === "win32" && (t.root = t.root.replace(/\\/g, "/")),
      (t.cwdAbs = lqn(t.cwd) ? t.cwd : BEe(t, t.cwd)),
      process.platform === "win32" && (t.cwdAbs = t.cwdAbs.replace(/\\/g, "/")),
      (t.nomount = !!r.nomount),
      (r.nonegate = !0),
      (r.nocomment = !0),
      (r.allowWindowsEscape = !1),
      (t.minimatch = new Dnr(e, r)),
      (t.options = t.minimatch.options));
  }
  function PZs(t) {
    for (var e = t.nounique, r = e ? [] : Object.create(null), n = 0, o = t.matches.length; n < o; n++) {
      var s = t.matches[n];
      if (!s || Object.keys(s).length === 0) {
        if (t.nonull) {
          var a = t.minimatch.globSet[n];
          e ? r.push(a) : (r[a] = !0);
        }
      } else {
        var u = Object.keys(s);
        e
          ? r.push.apply(r, u)
          : u.forEach(function (c) {
              r[c] = !0;
            });
      }
    }
    if ((e || (r = Object.keys(r)), t.nosort || (r = r.sort(RZs)), t.mark)) {
      for (var n = 0; n < r.length; n++) r[n] = t._mark(r[n]);
      t.nodir &&
        (r = r.filter(function (c) {
          var m = !/\/$/.test(c),
            d = t.cache[c] || t.cache[BEe(t, c)];
          return (m && d && (m = d !== "DIR" && !Array.isArray(d)), m);
        }));
    }
    (t.ignore.length &&
      (r = r.filter(function (c) {
        return !mqn(t, c);
      })),
      (t.found = r));
  }
  function BZs(t, e) {
    var r = BEe(t, e),
      n = t.cache[r],
      o = e;
    if (n) {
      var s = n === "DIR" || Array.isArray(n),
        a = e.slice(-1) === "/";
      if ((s && !a ? (o += "/") : !s && a && (o = o.slice(0, -1)), o !== e)) {
        var u = BEe(t, o);
        ((t.statCache[u] = t.statCache[r]), (t.cache[u] = t.cache[r]));
      }
    }
    return o;
  }
  function BEe(t, e) {
    var r = e;
    return (
      e.charAt(0) === "/"
        ? (r = Sce.join(t.root, e))
        : lqn(e) || e === ""
          ? (r = e)
          : t.changedCwd
            ? (r = Sce.resolve(t.cwd, e))
            : (r = Sce.resolve(e)),
      process.platform === "win32" && (r = r.replace(/\\/g, "/")),
      r
    );
  }
  function mqn(t, e) {
    return t.ignore.length
      ? t.ignore.some(function (r) {
          return r.matcher.match(e) || !!(r.gmatcher && r.gmatcher.match(e));
        })
      : !1;
  }
  function LZs(t, e) {
    return t.ignore.length
      ? t.ignore.some(function (r) {
          return !!(r.gmatcher && r.gmatcher.match(e));
        })
      : !1;
  }
});