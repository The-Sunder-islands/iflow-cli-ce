/**
 * @module Vnr
 * @category utils/fs
 * @label fs
 * @position 1458 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vnr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Vnr = T((iyc, Uqn) => {
  Uqn.exports = uz;
  var aea = rf(),
    ynt = Tce(),
    uea = qo(),
    Fqn = {};
  uea(uz, ynt);
  function uz(t) {
    var e = this;
    if (!(e instanceof uz)) throw new Error("FileWriter must be called as constructor.");
    if (t.type !== "File" || !t.File) throw new Error("Non-file type " + t.type);
    ((e._buffer = []), (e._bytesWritten = 0), ynt.call(this, t));
  }
  uz.prototype._create = function () {
    var t = this;
    if (!t._stream) {
      var e = {};
      (t.props.flags && (e.flags = t.props.flags),
        (e.mode = ynt.filemode),
        t._old && t._old.blksize && (e.bufferSize = t._old.blksize),
        (t._stream = aea.createWriteStream(t._path, e)),
        t._stream.on("open", function () {
          ((t.ready = !0),
            t._buffer.forEach(function (r) {
              r === Fqn ? t._stream.end() : t._stream.write(r);
            }),
            t.emit("ready"),
            t.emit("drain"));
        }),
        t._stream.on("error", function (r) {
          t.emit("error", r);
        }),
        t._stream.on("drain", function () {
          t.emit("drain");
        }),
        t._stream.on("close", function () {
          t._finish();
        }));
    }
  };
  uz.prototype.write = function (t) {
    var e = this;
    if (((e._bytesWritten += t.length), !e.ready)) {
      if (!Buffer.isBuffer(t) && typeof t != "string") throw new Error("invalid write data");
      return (e._buffer.push(t), !1);
    }
    var r = e._stream.write(t);
    return r === !1 && e._stream._queue ? e._stream._queue.length <= 2 : r;
  };
  uz.prototype.end = function (t) {
    var e = this;
    return (t && e.write(t), e.ready ? e._stream.end() : (e._buffer.push(Fqn), !1));
  };
  uz.prototype._finish = function () {
    var t = this;
    (typeof t.size == "number" &&
      t._bytesWritten !== t.size &&
      t.error(
        `Did not get expected byte count.
expect: ` +
          t.size +
          `
actual: ` +
          t._bytesWritten,
      ),
      ynt.prototype._finish.call(t));
  };
});