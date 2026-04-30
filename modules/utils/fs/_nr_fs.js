/**
 * @module _nr
 * @category utils/fs
 * @label fs
 * @position 1444 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_nr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _nr = T((U6c, zGn) => {
  zGn.exports = NEe;
  var hZs = rf(),
    gZs = qo(),
    ynr = rz();
  gZs(NEe, ynr);
  function NEe(t) {
    var e = this;
    if (!(e instanceof NEe)) throw new Error("LinkReader must be called as constructor.");
    if (!((t.type === "Link" && t.Link) || (t.type === "SymbolicLink" && t.SymbolicLink)))
      throw new Error("Non-link type " + t.type);
    ynr.call(e, t);
  }
  NEe.prototype._stat = function (t) {
    var e = this;
    hZs.readlink(e._path, function (r, n) {
      if (r) return e.error(r);
      ((e.linkpath = e.props.linkpath = n), e.emit("linkpath", n), ynr.prototype._stat.call(e, t));
    });
  };
  NEe.prototype._read = function () {
    var t = this;
    t._paused || t._ended || (t.emit("end"), t.emit("close"), (t._ended = !0));
  };
});