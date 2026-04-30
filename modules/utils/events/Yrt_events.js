/**
 * @module Yrt
 * @category utils/events
 * @label events
 * @position 1422 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yrt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yrt = T((A6c, HQn) => {
  var ZW = Ae("stream"),
    Yrr = zF(),
    HJs = Ae("util"),
    zrt = fce(),
    VJs = "function";
  (!ZW.Writable || !ZW.Writable.prototype.destroy) && (ZW = bO());
  function YF() {
    if (!(this instanceof YF)) return new YF();
    (ZW.Duplex.call(this, { decodeStrings: !1, objectMode: !0 }), (this.buffer = zrt.from("")));
    var t = this;
    t.on("finish", function () {
      ((t.finished = !0), t.emit("chunk", !1));
    });
  }
  HJs.inherits(YF, ZW.Duplex);
  YF.prototype._write = function (t, e, r) {
    ((this.buffer = zrt.concat([this.buffer, t])), (this.cb = r), this.emit("chunk"));
  };
  YF.prototype.stream = function (t, e) {
    var r = ZW.PassThrough(),
      n,
      o = this;
    function s() {
      if (typeof o.cb === VJs) {
        var u = o.cb;
        return ((o.cb = void 0), u());
      }
    }
    function a() {
      var u;
      if (o.buffer && o.buffer.length) {
        if (typeof t == "number")
          ((u = o.buffer.slice(0, t)), (o.buffer = o.buffer.slice(t)), (t -= u.length), (n = !t));
        else {
          var c = o.buffer.indexOf(t);
          if (c !== -1)
            ((o.match = c),
              e && (c = c + t.length),
              (u = o.buffer.slice(0, c)),
              (o.buffer = o.buffer.slice(c)),
              (n = !0));
          else {
            var m = o.buffer.length - t.length;
            m <= 0 ? s() : ((u = o.buffer.slice(0, m)), (o.buffer = o.buffer.slice(m)));
          }
        }
        u &&
          r.write(u, function () {
            (o.buffer.length === 0 || (t.length && o.buffer.length <= t.length)) && s();
          });
      }
      if (n) (o.removeListener("chunk", a), r.end());
      else if (o.finished) {
        (o.removeListener("chunk", a), o.emit("error", new Error("FILE_ENDED")));
        return;
      }
    }
    return (o.on("chunk", a), a(), r);
  };
  YF.prototype.pull = function (t, e) {
    if (t === 0) return Yrr.resolve("");
    if (!isNaN(t) && this.buffer.length > t) {
      var r = this.buffer.slice(0, t);
      return ((this.buffer = this.buffer.slice(t)), Yrr.resolve(r));
    }
    var n = zrt.from(""),
      o = this,
      s = ZW.Transform();
    s._transform = function (c, m, d) {
      ((n = zrt.concat([n, c])), d());
    };
    var a, u;
    return new Yrr(function (c, m) {
      if (
        ((a = m),
        (u = function (d) {
          ((o.__emittedError = d), m(d));
        }),
        o.finished)
      )
        return m(new Error("FILE_ENDED"));
      (o.once("error", u),
        o
          .stream(t, e)
          .on("error", m)
          .pipe(s)
          .on("finish", function () {
            c(n);
          })
          .on("error", m));
    }).finally(function () {
      (o.removeListener("error", a), o.removeListener("error", u));
    });
  };
  YF.prototype._read = function () {};
  HQn.exports = YF;
});