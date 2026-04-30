/**
 * @module hkr
 * @category utils/events
 * @label events
 * @position 92 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hkr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hkr = T((eSu, pkr) => {
  var Fho = EG().Buffer,
    lkr = _yt(),
    Uho = wyt(),
    $ho = Ae("stream"),
    mkr = xyt(),
    Tyt = Ae("util");
  function dkr(t, e) {
    return Fho.from(t, e).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function jho(t, e, r) {
    r = r || "utf8";
    var n = dkr(mkr(t), "binary"),
      o = dkr(mkr(e), r);
    return Tyt.format("%s.%s", n, o);
  }
  function fkr(t) {
    var e = t.header,
      r = t.payload,
      n = t.secret || t.privateKey,
      o = t.encoding,
      s = Uho(e.alg),
      a = jho(e, r, o),
      u = s.sign(a, n);
    return Tyt.format("%s.%s", a, u);
  }
  function Qke(t) {
    var e = t.secret;
    if (((e = e ?? t.privateKey), (e = e ?? t.key), /^hs/i.test(t.header.alg) === !0 && e == null))
      throw new TypeError("secret must be a string or buffer or a KeyObject");
    var r = new lkr(e);
    ((this.readable = !0),
      (this.header = t.header),
      (this.encoding = t.encoding),
      (this.secret = this.privateKey = this.key = r),
      (this.payload = new lkr(t.payload)),
      this.secret.once(
        "close",
        function () {
          !this.payload.writable && this.readable && this.sign();
        }.bind(this),
      ),
      this.payload.once(
        "close",
        function () {
          !this.secret.writable && this.readable && this.sign();
        }.bind(this),
      ));
  }
  Tyt.inherits(Qke, $ho);
  Qke.prototype.sign = function () {
    try {
      var e = fkr({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding,
      });
      return (this.emit("done", e), this.emit("data", e), this.emit("end"), (this.readable = !1), e);
    } catch (r) {
      ((this.readable = !1), this.emit("error", r), this.emit("close"));
    }
  };
  Qke.sign = fkr;
  pkr.exports = Qke;
});