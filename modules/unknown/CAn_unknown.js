/**
 * @module CAn
 * @category unknown
 * @label unknown
 * @position 862 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CAn = T((xrc, vAn) => {
  "use strict";
  var _An = Ae("path"),
    obs = bAn(),
    sbs = yAn();
  function EAn(t, e) {
    let r = t.options.env || process.env,
      n = process.cwd(),
      o = t.options.cwd != null,
      s = o && process.chdir !== void 0 && !process.chdir.disabled;
    if (s)
      try {
        process.chdir(t.options.cwd);
      } catch {}
    let a;
    try {
      a = obs.sync(t.command, { path: r[sbs({ env: r })], pathExt: e ? _An.delimiter : void 0 });
    } catch {
    } finally {
      s && process.chdir(n);
    }
    return (a && (a = _An.resolve(o ? t.options.cwd : "", a)), a);
  }
  function abs(t) {
    return EAn(t) || EAn(t, !0);
  }
  vAn.exports = abs;
});