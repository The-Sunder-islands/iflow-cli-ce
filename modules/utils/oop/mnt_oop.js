/**
 * @module mnt
 * @category utils/oop
 * @label oop
 * @position 1442 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mnt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mnt = T((M6c, VGn) => {
  VGn.exports = KF;
  var Anr = Ae("stream").Stream,
    fZs = qo();
  function KF() {
    Anr.call(this);
  }
  fZs(KF, Anr);
  KF.prototype.on = function (t, e) {
    return (t === "ready" && this.ready ? process.nextTick(e.bind(this)) : Anr.prototype.on.call(this, t, e), this);
  };
  KF.prototype.abort = function () {
    ((this._aborted = !0), this.emit("abort"));
  };
  KF.prototype.destroy = function () {};
  KF.prototype.warn = function (t, e) {
    var r = this,
      n = HGn(t, e, r);
    r.listeners("warn")
      ? r.emit("warn", n)
      : console.error(
          `%s %s
path = %s
syscall = %s
fstream_type = %s
fstream_path = %s
fstream_unc_path = %s
fstream_class = %s
fstream_stack =
%s
`,
          e || "UNKNOWN",
          n.stack,
          n.path,
          n.syscall,
          n.fstream_type,
          n.fstream_path,
          n.fstream_unc_path,
          n.fstream_class,
          n.fstream_stack.join(`
`),
        );
  };
  KF.prototype.info = function (t, e) {
    this.emit("info", t, e);
  };
  KF.prototype.error = function (t, e, r) {
    var n = HGn(t, e, this);
    if (r) throw n;
    this.emit("error", n);
  };
  function HGn(t, e, r) {
    return (
      t instanceof Error || (t = new Error(t)),
      (t.code = t.code || e),
      (t.path = t.path || r.path),
      (t.fstream_type = t.fstream_type || r.type),
      (t.fstream_path = t.fstream_path || r.path),
      r._path !== r.path && (t.fstream_unc_path = t.fstream_unc_path || r._path),
      r.linkpath && (t.fstream_linkpath = t.fstream_linkpath || r.linkpath),
      (t.fstream_class = t.fstream_class || r.constructor.name),
      (t.fstream_stack =
        t.fstream_stack ||
        new Error().stack
          .split(/\n/)
          .slice(3)
          .map(function (n) {
            return n.replace(/^ {4}at /, "");
          })),
      t
    );
  }
});