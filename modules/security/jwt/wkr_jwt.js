/**
 * @module wkr
 * @category security/jwt
 * @label jwt
 * @position 93 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wkr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wkr = T((tSu, Skr) => {
  var bkr = EG().Buffer,
    gkr = _yt(),
    Qho = wyt(),
    Gho = Ae("stream"),
    Akr = xyt(),
    qho = Ae("util"),
    Hho = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function Vho(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
  function Who(t) {
    if (Vho(t)) return t;
    try {
      return JSON.parse(t);
    } catch {
      return;
    }
  }
  function ykr(t) {
    var e = t.split(".", 1)[0];
    return Who(bkr.from(e, "base64").toString("binary"));
  }
  function zho(t) {
    return t.split(".", 2).join(".");
  }
  function _kr(t) {
    return t.split(".")[2];
  }
  function Yho(t, e) {
    e = e || "utf8";
    var r = t.split(".")[1];
    return bkr.from(r, "base64").toString(e);
  }
  function Ekr(t) {
    return Hho.test(t) && !!ykr(t);
  }
  function vkr(t, e, r) {
    if (!e) {
      var n = new Error("Missing algorithm parameter for jws.verify");
      throw ((n.code = "MISSING_ALGORITHM"), n);
    }
    t = Akr(t);
    var o = _kr(t),
      s = zho(t),
      a = Qho(e);
    return a.verify(s, o, r);
  }
  function Ckr(t, e) {
    if (((e = e || {}), (t = Akr(t)), !Ekr(t))) return null;
    var r = ykr(t);
    if (!r) return null;
    var n = Yho(t);
    return (
      (r.typ === "JWT" || e.json) && (n = JSON.parse(n, e.encoding)),
      { header: r, payload: n, signature: _kr(t) }
    );
  }
  function jee(t) {
    t = t || {};
    var e = t.secret;
    if (((e = e ?? t.publicKey), (e = e ?? t.key), /^hs/i.test(t.algorithm) === !0 && e == null))
      throw new TypeError("secret must be a string or buffer or a KeyObject");
    var r = new gkr(e);
    ((this.readable = !0),
      (this.algorithm = t.algorithm),
      (this.encoding = t.encoding),
      (this.secret = this.publicKey = this.key = r),
      (this.signature = new gkr(t.signature)),
      this.secret.once(
        "close",
        function () {
          !this.signature.writable && this.readable && this.verify();
        }.bind(this),
      ),
      this.signature.once(
        "close",
        function () {
          !this.secret.writable && this.readable && this.verify();
        }.bind(this),
      ));
  }
  qho.inherits(jee, Gho);
  jee.prototype.verify = function () {
    try {
      var e = vkr(this.signature.buffer, this.algorithm, this.key.buffer),
        r = Ckr(this.signature.buffer, this.encoding);
      return (this.emit("done", e, r), this.emit("data", e), this.emit("end"), (this.readable = !1), e);
    } catch (n) {
      ((this.readable = !1), this.emit("error", n), this.emit("close"));
    }
  };
  jee.decode = Ckr;
  jee.isValid = Ekr;
  jee.verify = vkr;
  Skr.exports = jee;
});