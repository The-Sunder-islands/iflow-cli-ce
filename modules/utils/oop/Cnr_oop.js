/**
 * @module Cnr
 * @category utils/oop
 * @label oop
 * @position 1446 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Cnr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Cnr = T((j6c, tqn) => {
  tqn.exports = nz;
  var AZs = rf(),
    yZs = qo(),
    XGn = rz(),
    ZGn = { EOF: !0 },
    eqn = { CLOSE: !0 };
  yZs(nz, XGn);
  function nz(t) {
    var e = this;
    if (!(e instanceof nz)) throw new Error("FileReader must be called as constructor.");
    if (!((t.type === "Link" && t.Link) || (t.type === "File" && t.File))) throw new Error("Non-file type " + t.type);
    ((e._buffer = []), (e._bytesEmitted = 0), XGn.call(e, t));
  }
  nz.prototype._getStream = function () {
    var t = this,
      e = (t._stream = AZs.createReadStream(t._path, t.props));
    (t.props.blksize && (e.bufferSize = t.props.blksize),
      e.on("open", t.emit.bind(t, "open")),
      e.on("data", function (r) {
        if (((t._bytesEmitted += r.length), r.length))
          t._paused || t._buffer.length ? (t._buffer.push(r), t._read()) : t.emit("data", r);
        else return;
      }),
      e.on("end", function () {
        (t._paused || t._buffer.length ? (t._buffer.push(ZGn), t._read()) : t.emit("end"),
          t._bytesEmitted !== t.props.size &&
            t.error(
              `Didn't get expected byte count
expect: ` +
                t.props.size +
                `
actual: ` +
                t._bytesEmitted,
            ));
      }),
      e.on("close", function () {
        t._paused || t._buffer.length ? (t._buffer.push(eqn), t._read()) : t.emit("close");
      }),
      e.on("error", function (r) {
        t.emit("error", r);
      }),
      t._read());
  };
  nz.prototype._read = function () {
    var t = this;
    if (!t._paused) {
      if (!t._stream) return t._getStream();
      if (t._buffer.length) {
        for (var e = t._buffer, r = 0, n = e.length; r < n; r++) {
          var o = e[r];
          if ((o === ZGn ? t.emit("end") : o === eqn ? t.emit("close") : t.emit("data", o), t._paused)) {
            t._buffer = e.slice(r);
            return;
          }
        }
        t._buffer.length = 0;
      }
    }
  };
  nz.prototype.pause = function (t) {
    var e = this;
    e._paused || ((t = t || e), (e._paused = !0), e._stream && e._stream.pause(), e.emit("pause", t));
  };
  nz.prototype.resume = function (t) {
    var e = this;
    e._paused && ((t = t || e), e.emit("resume", t), (e._paused = !1), e._stream && e._stream.resume(), e._read());
  };
});