/**
 * @module Rwt
 * @category utils/oop
 * @label oop
 * @position 411 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rwt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rwt = T((YBu, Iwt) => {
  "use strict";
  var Ere = Ae("path"),
    HC = Ae("module"),
    Q1 = Iee()("require-in-the-middle"),
    qPo = xwt();
  Iwt.exports = qge;
  Iwt.exports.Hook = qge;
  var Twt, iFe;
  if (HC.isBuiltin) iFe = HC.isBuiltin;
  else if (HC.builtinModules)
    iFe = (t) => (t.startsWith("node:") ? !0 : (Twt === void 0 && (Twt = new Set(HC.builtinModules)), Twt.has(t)));
  else throw new Error("'require-in-the-middle' requires Node.js >=v9.3.0 or >=v8.10.0");
  var HPo = /([/\\]index)?(\.js)?$/,
    Dwt = class {
      constructor() {
        ((this._localCache = new Map()), (this._kRitmExports = Symbol("RitmExports")));
      }
      has(e, r) {
        if (this._localCache.has(e)) return !0;
        if (r) return !1;
        {
          let n = Ae.cache[e];
          return !!(n && this._kRitmExports in n);
        }
      }
      get(e, r) {
        let n = this._localCache.get(e);
        if (n !== void 0) return n;
        if (!r) {
          let o = Ae.cache[e];
          return o && o[this._kRitmExports];
        }
      }
      set(e, r, n) {
        n
          ? this._localCache.set(e, r)
          : e in Ae.cache
            ? (Ae.cache[e][this._kRitmExports] = r)
            : (Q1('non-core module is unexpectedly not in require.cache: "%s"', e), this._localCache.set(e, r));
      }
    };
  function qge(t, e, r) {
    if (!(this instanceof qge)) return new qge(t, e, r);
    if (
      (typeof t == "function" ? ((r = t), (t = null), (e = null)) : typeof e == "function" && ((r = e), (e = null)),
      typeof HC._resolveFilename != "function")
    ) {
      (console.error(
        "Error: Expected Module._resolveFilename to be a function (was: %s) - aborting!",
        typeof HC._resolveFilename,
      ),
        console.error(
          "Please report this error as an issue related to Node.js %s at https://github.com/nodejs/require-in-the-middle/issues",
          process.version,
        ));
      return;
    }
    ((this._cache = new Dwt()), (this._unhooked = !1), (this._origRequire = HC.prototype.require));
    let n = this,
      o = new Set(),
      s = e ? e.internals === !0 : !1,
      a = Array.isArray(t);
    (Q1("registering require hook"),
      (this._require = HC.prototype.require =
        function (c) {
          return n._unhooked === !0
            ? (Q1("ignoring require call - module is soft-unhooked"), n._origRequire.apply(this, arguments))
            : u.call(this, arguments, !1);
        }),
      typeof process.getBuiltinModule == "function" &&
        ((this._origGetBuiltinModule = process.getBuiltinModule),
        (this._getBuiltinModule = process.getBuiltinModule =
          function (c) {
            return n._unhooked === !0
              ? (Q1("ignoring process.getBuiltinModule call - module is soft-unhooked"),
                n._origGetBuiltinModule.apply(this, arguments))
              : u.call(this, arguments, !0);
          })));
    function u(c, m) {
      let d = c[0],
        f = iFe(d),
        p;
      if (f) {
        if (((p = d), d.startsWith("node:"))) {
          let E = d.slice(5);
          iFe(E) && (p = E);
        }
      } else {
        if (m)
          return (
            Q1("call to process.getBuiltinModule with unknown built-in id"),
            n._origGetBuiltinModule.apply(this, c)
          );
        try {
          p = HC._resolveFilename(d, this);
        } catch (E) {
          return (
            Q1('Module._resolveFilename("%s") threw %j, calling original Module.require', d, E.message),
            n._origRequire.apply(this, c)
          );
        }
      }
      let h, g;
      if (
        (Q1("processing %s module require('%s'): %s", f === !0 ? "core" : "non-core", d, p), n._cache.has(p, f) === !0)
      )
        return (Q1("returning already patched cached module: %s", p), n._cache.get(p, f));
      let b = o.has(p);
      b === !1 && o.add(p);
      let A = m ? n._origGetBuiltinModule.apply(this, c) : n._origRequire.apply(this, c);
      if (b === !0) return (Q1("module is in the process of being patched already - ignoring: %s", p), A);
      if ((o.delete(p), f === !0)) {
        if (a === !0 && t.includes(p) === !1) return (Q1("ignoring core module not on whitelist: %s", p), A);
        h = p;
      } else if (a === !0 && t.includes(p)) {
        let E = Ere.parse(p);
        ((h = E.name), (g = E.dir));
      } else {
        let E = qPo(p);
        if (E === void 0) return (Q1("could not parse filename: %s", p), A);
        ((h = E.name), (g = E.basedir));
        let v = VPo(E);
        Q1("resolved filename to module: %s (id: %s, resolved: %s, basedir: %s)", h, d, v, g);
        let C = !1;
        if (a) {
          if ((!d.startsWith(".") && t.includes(d) && ((h = d), (C = !0)), !t.includes(h) && !t.includes(v))) return A;
          t.includes(v) && v !== h && ((h = v), (C = !0));
        }
        if (!C) {
          let x;
          try {
            x = Ae.resolve(h, { paths: [g] });
          } catch {
            return (Q1("could not resolve module: %s", h), n._cache.set(p, A, f), A);
          }
          if (x !== p)
            if (s === !0)
              ((h = h + Ere.sep + Ere.relative(g, p)), Q1("preparing to process require of internal file: %s", h));
            else return (Q1("ignoring require of non-main module file: %s", x), n._cache.set(p, A, f), A);
        }
      }
      (n._cache.set(p, A, f), Q1("calling require hook: %s", h));
      let y = r(A, h, g);
      return (n._cache.set(p, y, f), Q1("returning module: %s", h), y);
    }
  }
  qge.prototype.unhook = function () {
    ((this._unhooked = !0),
      this._require === HC.prototype.require
        ? ((HC.prototype.require = this._origRequire), Q1("require unhook successful"))
        : Q1("require unhook unsuccessful"),
      process.getBuiltinModule !== void 0 &&
        (this._getBuiltinModule === process.getBuiltinModule
          ? ((process.getBuiltinModule = this._origGetBuiltinModule), Q1("process.getBuiltinModule unhook successful"))
          : Q1("process.getBuiltinModule unhook unsuccessful")));
  };
  function VPo(t) {
    let e = Ere.sep !== "/" ? t.path.split(Ere.sep).join("/") : t.path;
    return Ere.posix.join(t.name, e).replace(HPo, "");
  }
});