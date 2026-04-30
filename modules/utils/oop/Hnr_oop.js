/**
 * @module Hnr
 * @category utils/oop
 * @label oop
 * @position 1457 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hnr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hnr = T((nyc, Mqn) => {
  Mqn.exports = UEe;
  var Pqn = rf(),
    Bqn = Tce(),
    nea = qo(),
    iea = Ae("path"),
    oea = jnr();
  nea(UEe, Bqn);
  function UEe(t) {
    var e = this;
    if (!(e instanceof UEe)) throw new Error("LinkWriter must be called as constructor.");
    if (!((t.type === "Link" && t.Link) || (t.type === "SymbolicLink" && t.SymbolicLink)))
      throw new Error("Non-link type " + t.type);
    (t.linkpath === "" && (t.linkpath = "."),
      t.linkpath || e.error("Need linkpath property to create " + t.type),
      Bqn.call(this, t));
  }
  UEe.prototype._create = function () {
    var t = this,
      e = t.type === "Link" || process.platform === "win32",
      r = e ? "link" : "symlink",
      n = e ? iea.resolve(t.dirname, t.linkpath) : t.linkpath;
    if (e) return Nqn(t, n, r);
    Pqn.readlink(t._path, function (o, s) {
      if (s && s === n) return Lqn(t);
      Nqn(t, n, r);
    });
  };
  function Nqn(t, e, r) {
    oea(t._path, function (n) {
      if (n) return t.error(n);
      sea(t, e, r);
    });
  }
  function sea(t, e, r) {
    Pqn[r](e, t._path, function (n) {
      if (n)
        if ((n.code === "ENOENT" || n.code === "EACCES" || n.code === "EPERM") && process.platform === "win32")
          ((t.ready = !0), t.emit("ready"), t.emit("end"), t.emit("close"), (t.end = t._finish = function () {}));
        else return t.error(n);
      Lqn(t);
    });
  }
  function Lqn(t) {
    ((t.ready = !0), t.emit("ready"), t._ended && !t._finished && t._finish());
  }
  UEe.prototype.end = function () {
    ((this._ended = !0), this.ready && ((this._finished = !0), this._finish()));
  };
});