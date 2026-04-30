/**
 * @module QJr
 * @category utils/oop
 * @label oop
 * @position 417 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QJr = T((aFe) => {
  "use strict";
  Object.defineProperty(aFe, "__esModule", { value: !0 });
  aFe.InstrumentationBase = void 0;
  var Vge = Ae("path"),
    $Jr = Ae("util"),
    cBo = vJr(),
    Fwt = vwt(),
    lBo = CJr(),
    mBo = TJr(),
    dBo = UJr(),
    Wge = (Zt(), bt(cr)),
    fBo = Rwt(),
    pBo = Ae("fs"),
    hBo = Mwt(),
    Uwt = class extends lBo.InstrumentationAbstract {
      _modules;
      _hooks = [];
      _requireInTheMiddleSingleton = mBo.RequireInTheMiddleSingleton.getInstance();
      _enabled = !1;
      constructor(e, r, n) {
        super(e, r, n);
        let o = this.init();
        (o && !Array.isArray(o) && (o = [o]), (this._modules = o || []), this._config.enabled && this.enable());
      }
      _wrap = (e, r, n) => {
        if (((0, hBo.isWrapped)(e[r]) && this._unwrap(e, r), $Jr.types.isProxy(e))) {
          let o = (0, Fwt.wrap)(Object.assign({}, e), r, n);
          return (Object.defineProperty(e, r, { value: o }), o);
        } else return (0, Fwt.wrap)(e, r, n);
      };
      _unwrap = (e, r) => ($Jr.types.isProxy(e) ? Object.defineProperty(e, r, { value: e[r] }) : (0, Fwt.unwrap)(e, r));
      _massWrap = (e, r, n) => {
        if (e) Array.isArray(e) || (e = [e]);
        else {
          Wge.diag.error("must provide one or more modules to patch");
          return;
        }
        if (!(r && Array.isArray(r))) {
          Wge.diag.error("must provide one or more functions to wrap on modules");
          return;
        }
        e.forEach((o) => {
          r.forEach((s) => {
            this._wrap(o, s, n);
          });
        });
      };
      _massUnwrap = (e, r) => {
        if (e) Array.isArray(e) || (e = [e]);
        else {
          Wge.diag.error("must provide one or more modules to patch");
          return;
        }
        if (!(r && Array.isArray(r))) {
          Wge.diag.error("must provide one or more functions to wrap on modules");
          return;
        }
        e.forEach((n) => {
          r.forEach((o) => {
            this._unwrap(n, o);
          });
        });
      };
      _warnOnPreloadedModules() {
        this._modules.forEach((e) => {
          let { name: r } = e;
          try {
            let n = Ae.resolve(r);
            Ae.cache[n] &&
              this._diag.warn(
                `Module ${r} has been loaded before ${this.instrumentationName} so it might not work, please initialize it before requiring ${r}`,
              );
          } catch {}
        });
      }
      _extractPackageVersion(e) {
        try {
          let r = (0, pBo.readFileSync)(Vge.join(e, "package.json"), { encoding: "utf8" }),
            n = JSON.parse(r).version;
          return typeof n == "string" ? n : void 0;
        } catch {
          Wge.diag.warn("Failed extracting version", e);
        }
      }
      _onRequire(e, r, n, o) {
        if (!o)
          return typeof e.patch == "function" && ((e.moduleExports = r), this._enabled)
            ? (this._diag.debug("Applying instrumentation patch for nodejs core module on require hook", {
                module: e.name,
              }),
              e.patch(r))
            : r;
        let s = this._extractPackageVersion(o);
        if (((e.moduleVersion = s), e.name === n))
          return jJr(e.supportedVersions, s, e.includePrerelease) &&
            typeof e.patch == "function" &&
            ((e.moduleExports = r), this._enabled)
            ? (this._diag.debug("Applying instrumentation patch for module on require hook", {
                module: e.name,
                version: e.moduleVersion,
                baseDir: o,
              }),
              e.patch(r, e.moduleVersion))
            : r;
        let a = e.files ?? [],
          u = Vge.normalize(n);
        return a
          .filter((m) => m.name === u)
          .filter((m) => jJr(m.supportedVersions, s, e.includePrerelease))
          .reduce(
            (m, d) => (
              (d.moduleExports = m),
              this._enabled
                ? (this._diag.debug("Applying instrumentation patch for nodejs module file on require hook", {
                    module: e.name,
                    version: e.moduleVersion,
                    fileName: d.name,
                    baseDir: o,
                  }),
                  d.patch(m, e.moduleVersion))
                : m
            ),
            r,
          );
      }
      enable() {
        if (!this._enabled) {
          if (((this._enabled = !0), this._hooks.length > 0)) {
            for (let e of this._modules) {
              typeof e.patch == "function" &&
                e.moduleExports &&
                (this._diag.debug("Applying instrumentation patch for nodejs module on instrumentation enabled", {
                  module: e.name,
                  version: e.moduleVersion,
                }),
                e.patch(e.moduleExports, e.moduleVersion));
              for (let r of e.files)
                r.moduleExports &&
                  (this._diag.debug(
                    "Applying instrumentation patch for nodejs module file on instrumentation enabled",
                    { module: e.name, version: e.moduleVersion, fileName: r.name },
                  ),
                  r.patch(r.moduleExports, e.moduleVersion));
            }
            return;
          }
          this._warnOnPreloadedModules();
          for (let e of this._modules) {
            let r = (a, u, c) => {
                if (!c && Vge.isAbsolute(u)) {
                  let m = Vge.parse(u);
                  ((u = m.name), (c = m.dir));
                }
                return this._onRequire(e, a, u, c);
              },
              n = (a, u, c) => this._onRequire(e, a, u, c),
              o = Vge.isAbsolute(e.name)
                ? new fBo.Hook([e.name], { internals: !0 }, n)
                : this._requireInTheMiddleSingleton.register(e.name, n);
            this._hooks.push(o);
            let s = new dBo.Hook([e.name], { internals: !1 }, r);
            this._hooks.push(s);
          }
        }
      }
      disable() {
        if (this._enabled) {
          this._enabled = !1;
          for (let e of this._modules) {
            typeof e.unpatch == "function" &&
              e.moduleExports &&
              (this._diag.debug("Removing instrumentation patch for nodejs module on instrumentation disabled", {
                module: e.name,
                version: e.moduleVersion,
              }),
              e.unpatch(e.moduleExports, e.moduleVersion));
            for (let r of e.files)
              r.moduleExports &&
                (this._diag.debug("Removing instrumentation patch for nodejs module file on instrumentation disabled", {
                  module: e.name,
                  version: e.moduleVersion,
                  fileName: r.name,
                }),
                r.unpatch(r.moduleExports, e.moduleVersion));
          }
        }
      }
      isEnabled() {
        return this._enabled;
      }
    };
  aFe.InstrumentationBase = Uwt;
  function jJr(t, e, r) {
    return typeof e > "u" ? t.includes("*") : t.some((n) => (0, cBo.satisfies)(e, n, { includePrerelease: r }));
  }
});