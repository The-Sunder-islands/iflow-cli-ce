/**
 * @module iqn
 * @category utils/oop
 * @label oop
 * @position 1447 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iqn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iqn = T((Q6c, nqn) => {
  nqn.exports = dnt;
  var _Zs = qo(),
    rqn = rz();
  _Zs(dnt, rqn);
  function dnt(t) {
    var e = this;
    if (!(e instanceof dnt)) throw new Error("SocketReader must be called as constructor.");
    if (!(t.type === "Socket" && t.Socket)) throw new Error("Non-socket type " + t.type);
    rqn.call(e, t);
  }
  dnt.prototype._read = function () {
    var t = this;
    t._paused || t._ended || (t.emit("end"), t.emit("close"), (t._ended = !0));
  };
});