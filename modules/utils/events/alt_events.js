/**
 * @module alt
 * @category utils/events
 * @label events
 * @position 1627 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (alt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var alt = T((Yjc, J1i) => {
  var slt = Ae("stream"),
    lSa = Ae("util"),
    mSa = "function";
  function c$() {
    if (!(this instanceof c$)) return new c$();
    (slt.Duplex.call(this, { decodeStrings: !1, objectMode: !0 }), (this.buffer = Buffer.from("")));
    let t = this;
    t.on("finish", function () {
      ((t.finished = !0), t.emit("chunk", !1));
    });
  }
  lSa.inherits(c$, slt.Duplex);
  c$.prototype._write = function (t, e, r) {
    ((this.buffer = Buffer.concat([this.buffer, t])), (this.cb = r), this.emit("chunk"));
  };
  c$.prototype.stream = function (t, e) {
    let r = slt.PassThrough(),
      n,
      o = this;
    function s() {
      if (typeof o.cb === mSa) {
        let u = o.cb;
        return ((o.cb = void 0), u());
      }
    }
    function a() {
      let u;
      if (o.buffer && o.buffer.length) {
        if (typeof t == "number")
          ((u = o.buffer.slice(0, t)), (o.buffer = o.buffer.slice(t)), (t -= u.length), (n = n || !t));
        else {
          let c = o.buffer.indexOf(t);
          if (c !== -1)
            ((o.match = c),
              e && (c = c + t.length),
              (u = o.buffer.slice(0, c)),
              (o.buffer = o.buffer.slice(c)),
              (n = !0));
          else {
            let m = o.buffer.length - t.length;
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
  c$.prototype.pull = function (t, e) {
    if (t === 0) return Promise.resolve("");
    if (!isNaN(t) && this.buffer.length > t) {
      let u = this.buffer.slice(0, t);
      return ((this.buffer = this.buffer.slice(t)), Promise.resolve(u));
    }
    let r = Buffer.from(""),
      n = this,
      o = new slt.Transform();
    o._transform = function (u, c, m) {
      ((r = Buffer.concat([r, u])), m());
    };
    let s, a;
    return new Promise(function (u, c) {
      if (
        ((s = c),
        (a = function (m) {
          ((n.__emittedError = m), c(m));
        }),
        n.finished)
      )
        return c(new Error("FILE_ENDED"));
      (n.once("error", a),
        n
          .stream(t, e)
          .on("error", c)
          .pipe(o)
          .on("finish", function () {
            u(r);
          })
          .on("error", c));
    }).finally(function () {
      (n.removeListener("error", s), n.removeListener("error", a));
    });
  };
  c$.prototype._read = function () {};
  J1i.exports = c$;
});