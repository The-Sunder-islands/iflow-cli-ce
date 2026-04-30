/**
 * @module cjn
 * @category utils/oop
 * @label oop
 * @position 1392 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cjn = T((G9c, ujn) => {
  var QYs = Ae("zlib"),
    GYs = sjn(),
    ajn = tEe(),
    fO = function (t) {
      if (!(this instanceof fO)) return new fO(t);
      ((t = this.options = ajn.defaults(t, { gzip: !1 })),
        typeof t.gzipOptions != "object" && (t.gzipOptions = {}),
        (this.supports = { directory: !0, symlink: !0 }),
        (this.engine = GYs.pack(t)),
        (this.compressor = !1),
        t.gzip &&
          ((this.compressor = QYs.createGzip(t.gzipOptions)),
          this.compressor.on("error", this._onCompressorError.bind(this))));
    };
  fO.prototype._onCompressorError = function (t) {
    this.engine.emit("error", t);
  };
  fO.prototype.append = function (t, e, r) {
    var n = this;
    e.mtime = e.date;
    function o(a, u) {
      if (a) {
        r(a);
        return;
      }
      n.engine.entry(e, u, function (c) {
        r(c, e);
      });
    }
    if (e.sourceType === "buffer") o(null, t);
    else if (e.sourceType === "stream" && e.stats) {
      e.size = e.stats.size;
      var s = n.engine.entry(e, function (a) {
        r(a, e);
      });
      t.pipe(s);
    } else e.sourceType === "stream" && ajn.collectStream(t, o);
  };
  fO.prototype.finalize = function () {
    this.engine.finalize();
  };
  fO.prototype.on = function () {
    return this.engine.on.apply(this.engine, arguments);
  };
  fO.prototype.pipe = function (t, e) {
    return this.compressor
      ? this.engine.pipe.apply(this.engine, [this.compressor]).pipe(t, e)
      : this.engine.pipe.apply(this.engine, arguments);
  };
  fO.prototype.unpipe = function () {
    return this.compressor
      ? this.compressor.unpipe.apply(this.compressor, arguments)
      : this.engine.unpipe.apply(this.engine, arguments);
  };
  ujn.exports = fO;
});