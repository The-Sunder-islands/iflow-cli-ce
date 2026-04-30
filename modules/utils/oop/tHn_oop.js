/**
 * @module tHn
 * @category utils/oop
 * @label oop
 * @position 1464 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tHn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tHn = T((lyc, eHn) => {
  var eU = Xqn(),
    Ent = Ae("stream");
  (!Ent.Writable || !Ent.Writable.prototype.destroy) && (Ent = bO());
  var vnt;
  function Dea() {
    var t = 3988292384,
      e,
      r,
      n;
    for (vnt = [], r = 0; r < 256; r++) {
      for (e = r, n = 0; n < 8; n++) e = e & 1 ? t ^ (e >>> 1) : (e = e >>> 1);
      vnt[r] = e >>> 0;
    }
  }
  function Zqn(t, e) {
    return (
      vnt || Dea(),
      t.charCodeAt && (t = t.charCodeAt(0)),
      eU(e).shiftRight(8).and(16777215).xor(vnt[eU(e).xor(t).and(255)]).value
    );
  }
  function Dce() {
    if (!(this instanceof Dce)) return new Dce();
    ((this.key0 = 305419896), (this.key1 = 591751049), (this.key2 = 878082192));
  }
  Dce.prototype.update = function (t) {
    ((this.key0 = Zqn(t, this.key0)),
      (this.key1 = eU(this.key0).and(255).and(4294967295).add(this.key1)),
      (this.key1 = eU(this.key1).multiply(134775813).add(1).and(4294967295).value),
      (this.key2 = Zqn(eU(this.key1).shiftRight(24).and(255), this.key2)));
  };
  Dce.prototype.decryptByte = function (t) {
    var e = eU(this.key2).or(2);
    return (
      (t =
        t ^
        eU(e)
          .multiply(eU(e ^ 1))
          .shiftRight(8)
          .and(255)),
      this.update(t),
      t
    );
  };
  Dce.prototype.stream = function () {
    var t = Ent.Transform(),
      e = this;
    return (
      (t._transform = function (r, n, o) {
        for (var s = 0; s < r.length; s++) r[s] = e.decryptByte(r[s]);
        (this.push(r), o());
      }),
      t
    );
  };
  eHn.exports = Dce;
});