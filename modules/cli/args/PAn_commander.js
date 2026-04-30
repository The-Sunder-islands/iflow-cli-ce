/**
 * @module PAn
 * @category cli/args
 * @label commander
 * @position 867 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PAn = T((krc, NAn) => {
  "use strict";
  var fbs = Ae("path"),
    kAn = CAn(),
    OAn = SAn(),
    pbs = RAn(),
    hbs = process.platform === "win32",
    gbs = /\.(?:com|exe)$/i,
    bbs = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function Abs(t) {
    t.file = kAn(t);
    let e = t.file && pbs(t.file);
    return e ? (t.args.unshift(t.file), (t.command = e), kAn(t)) : t.file;
  }
  function ybs(t) {
    if (!hbs) return t;
    let e = Abs(t),
      r = !gbs.test(e);
    if (t.options.forceShell || r) {
      let n = bbs.test(e);
      ((t.command = fbs.normalize(t.command)),
        (t.command = OAn.command(t.command)),
        (t.args = t.args.map((s) => OAn.argument(s, n))));
      let o = [t.command].concat(t.args).join(" ");
      ((t.args = ["/d", "/s", "/c", `"${o}"`]),
        (t.command = process.env.comspec || "cmd.exe"),
        (t.options.windowsVerbatimArguments = !0));
    }
    return t;
  }
  function _bs(t, e, r) {
    (e && !Array.isArray(e) && ((r = e), (e = null)), (e = e ? e.slice(0) : []), (r = Object.assign({}, r)));
    let n = { command: t, args: e, options: r, file: void 0, original: { command: t, args: e } };
    return r.shell ? n : ybs(n);
  }
  NAn.exports = _bs;
});