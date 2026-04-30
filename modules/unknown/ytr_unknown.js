/**
 * @module ytr
 * @category unknown
 * @label unknown
 * @position 1364 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ytr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ytr = T(($F) => {
  $F.setopts = MWs;
  $F.ownProp = oUn;
  $F.makeAbs = X_e;
  $F.finish = FWs;
  $F.mark = UWs;
  $F.isIgnored = aUn;
  $F.childrenIgnored = $Ws;
  function oUn(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  var OWs = Ae("fs"),
    tce = Ae("path"),
    NWs = uD(),
    sUn = J4(),
    Atr = NWs.Minimatch;
  function PWs(t, e) {
    return t.localeCompare(e, "en");
  }
  function BWs(t, e) {
    ((t.ignore = e.ignore || []),
      Array.isArray(t.ignore) || (t.ignore = [t.ignore]),
      t.ignore.length && (t.ignore = t.ignore.map(LWs)));
  }
  function LWs(t) {
    var e = null;
    if (t.slice(-3) === "/**") {
      var r = t.replace(/(\/\*\*)+$/, "");
      e = new Atr(r, { dot: !0 });
    }
    return { matcher: new Atr(t, { dot: !0 }), gmatcher: e };
  }
  function MWs(t, e, r) {
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
      (t.fs = r.fs || OWs),
      (t.maxLength = r.maxLength || 1 / 0),
      (t.cache = r.cache || Object.create(null)),
      (t.statCache = r.statCache || Object.create(null)),
      (t.symlinks = r.symlinks || Object.create(null)),
      BWs(t, r),
      (t.changedCwd = !1));
    var n = process.cwd();
    (oUn(r, "cwd") ? ((t.cwd = tce.resolve(r.cwd)), (t.changedCwd = t.cwd !== n)) : (t.cwd = n),
      (t.root = r.root || tce.resolve(t.cwd, "/")),
      (t.root = tce.resolve(t.root)),
      process.platform === "win32" && (t.root = t.root.replace(/\\/g, "/")),
      (t.cwdAbs = sUn(t.cwd) ? t.cwd : X_e(t, t.cwd)),
      process.platform === "win32" && (t.cwdAbs = t.cwdAbs.replace(/\\/g, "/")),
      (t.nomount = !!r.nomount),
      (r.nonegate = !0),
      (r.nocomment = !0),
      (r.allowWindowsEscape = !1),
      (t.minimatch = new Atr(e, r)),
      (t.options = t.minimatch.options));
  }
  function FWs(t) {
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
    if ((e || (r = Object.keys(r)), t.nosort || (r = r.sort(PWs)), t.mark)) {
      for (var n = 0; n < r.length; n++) r[n] = t._mark(r[n]);
      t.nodir &&
        (r = r.filter(function (c) {
          var m = !/\/$/.test(c),
            d = t.cache[c] || t.cache[X_e(t, c)];
          return (m && d && (m = d !== "DIR" && !Array.isArray(d)), m);
        }));
    }
    (t.ignore.length &&
      (r = r.filter(function (c) {
        return !aUn(t, c);
      })),
      (t.found = r));
  }
  function UWs(t, e) {
    var r = X_e(t, e),
      n = t.cache[r],
      o = e;
    if (n) {
      var s = n === "DIR" || Array.isArray(n),
        a = e.slice(-1) === "/";
      if ((s && !a ? (o += "/") : !s && a && (o = o.slice(0, -1)), o !== e)) {
        var u = X_e(t, o);
        ((t.statCache[u] = t.statCache[r]), (t.cache[u] = t.cache[r]));
      }
    }
    return o;
  }
  function X_e(t, e) {
    var r = e;
    return (
      e.charAt(0) === "/"
        ? (r = tce.join(t.root, e))
        : sUn(e) || e === ""
          ? (r = e)
          : t.changedCwd
            ? (r = tce.resolve(t.cwd, e))
            : (r = tce.resolve(e)),
      process.platform === "win32" && (r = r.replace(/\\/g, "/")),
      r
    );
  }
  function aUn(t, e) {
    return t.ignore.length
      ? t.ignore.some(function (r) {
          return r.matcher.match(e) || !!(r.gmatcher && r.gmatcher.match(e));
        })
      : !1;
  }
  function $Ws(t, e) {
    return t.ignore.length
      ? t.ignore.some(function (r) {
          return !!(r.gmatcher && r.gmatcher.match(e));
        })
      : !1;
  }
});