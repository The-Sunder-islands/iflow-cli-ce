/**
 * @module Jqn
 * @category utils/events
 * @label events
 * @position 1462 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jqn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jqn = T((uyc, Kqn) => {
  Kqn.exports = Tea;
  var vea = ent(),
    Cea = Knr().Writer,
    Jnr = Ae("path"),
    Sea = Ae("stream"),
    wea = kEe(),
    xea = zF();
  function Tea(t) {
    t.path = Jnr.resolve(Jnr.normalize(t.path));
    var e = new vea(t),
      r = new Sea.Writable({ objectMode: !0 });
    r._write = function (o, s, a) {
      if (o.type == "Directory") return a();
      var u = Jnr.join(t.path, o.path);
      if (u.indexOf(t.path) != 0) return a();
      let c = t.getWriter ? t.getWriter({ path: u }) : Cea({ path: u });
      o.pipe(c).on("error", a).on("close", a);
    };
    var n = wea(e, r);
    return (
      e.once("crx-header", function (o) {
        n.crxHeader = o;
      }),
      e.pipe(r).on("finish", function () {
        n.emit("close");
      }),
      (n.promise = function () {
        return new xea(function (o, s) {
          (n.on("close", o), n.on("error", s));
        });
      }),
      n
    );
  }
});