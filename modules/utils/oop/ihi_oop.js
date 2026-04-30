/**
 * @module ihi
 * @category utils/oop
 * @label oop
 * @position 1667 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ihi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ihi = T((LQc, nhi) => {
  var Cxa = ehi(),
    ylt = Ae("stream");
  (!ylt.Writable || !ylt.Writable.prototype.destroy) && (ylt = Dg());
  var _lt;
  function Sxa() {
    let e, r, n;
    for (_lt = [], r = 0; r < 256; r++) {
      for (e = r, n = 0; n < 8; n++) e = e & 1 ? 3988292384 ^ (e >>> 1) : (e = e >>> 1);
      _lt[r] = e >>> 0;
    }
  }
  function thi(t, e) {
    (_lt || Sxa(), t.charCodeAt && (t = t.charCodeAt(0)));
    let r = (e.readUInt32BE() >> 8) & 16777215,
      n = _lt[(e.readUInt32BE() ^ (t >>> 0)) & 255];
    return (r ^ n) >>> 0;
  }
  function rhi(t, e) {
    let r = (t >> 16) & 65535,
      n = t & 65535,
      o = (e >> 16) & 65535,
      s = e & 65535;
    return ((((r * s + n * o) & 65535) << 16) >>> 0) + n * s;
  }
  function gme() {
    if (!(this instanceof gme)) return new gme();
    ((this.key0 = Buffer.allocUnsafe(4)),
      (this.key1 = Buffer.allocUnsafe(4)),
      (this.key2 = Buffer.allocUnsafe(4)),
      this.key0.writeUInt32BE(305419896, 0),
      this.key1.writeUInt32BE(591751049, 0),
      this.key2.writeUInt32BE(878082192, 0));
  }
  gme.prototype.update = function (t) {
    (this.key0.writeUInt32BE(thi(t, this.key0)),
      this.key1.writeUInt32BE(((this.key0.readUInt32BE() & 255 & 4294967295) + this.key1.readUInt32BE()) >>> 0));
    let e = new Cxa((rhi(this.key1.readUInt32BE(), 134775813) + 1) & 4294967295),
      r = Buffer.alloc(8);
    (e.copy(r, 0),
      r.copy(this.key1, 0, 4, 8),
      this.key2.writeUInt32BE(thi(((this.key1.readUInt32BE() >> 24) & 255) >>> 0, this.key2)));
  };
  gme.prototype.decryptByte = function (t) {
    let e = (this.key2.readUInt32BE() | 2) >>> 0;
    return ((t = t ^ ((rhi(e, e ^ 1) >> 8) & 255)), this.update(t), t);
  };
  gme.prototype.stream = function () {
    let t = ylt.Transform(),
      e = this;
    return (
      (t._transform = function (r, n, o) {
        for (let s = 0; s < r.length; s++) r[s] = e.decryptByte(r[s]);
        (this.push(r), o());
      }),
      t
    );
  };
  nhi.exports = gme;
});