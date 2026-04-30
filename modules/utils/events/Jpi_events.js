/**
 * @module Jpi
 * @category utils/events
 * @label events
 * @position 1665 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jpi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jpi = T((PQc, Kpi) => {
  Kpi.exports = vxa;
  var yxa = mlt(),
    vpr = Epr(),
    Alt = Ae("path"),
    _xa = Ae("stream"),
    Exa = kEe();
  function vxa(t) {
    t.path = Alt.resolve(Alt.normalize(t.path));
    let e = new yxa(t),
      r = new _xa.Writable({ objectMode: !0 });
    r._write = async function (o, s, a) {
      let u = Alt.join(t.path, o.path.replace(/\\/g, "/"));
      if (u.indexOf(t.path) != 0) return a();
      if (o.type == "Directory") return (await vpr.ensureDir(u), a());
      await vpr.ensureDir(Alt.dirname(u));
      let c = t.getWriter ? t.getWriter({ path: u }) : vpr.createWriteStream(u);
      o.pipe(c).on("error", a).on("close", a);
    };
    let n = Exa(e, r);
    return (
      e.once("crx-header", function (o) {
        n.crxHeader = o;
      }),
      e.pipe(r).on("finish", function () {
        n.emit("close");
      }),
      (n.promise = function () {
        return new Promise(function (o, s) {
          (n.on("close", o), n.on("error", s));
        });
      }),
      n
    );
  }
});