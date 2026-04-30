/**
 * @module znr
 * @category unknown
 * @label unknown
 * @position 1459 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (znr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var znr = T((oyc, $qn) => {
  $qn.exports = ZF;
  var Wnr = Tce(),
    cea = OEe(),
    lea = qo(),
    mea = bnt(),
    dea = Ae("fs");
  lea(ZF, Wnr);
  function ZF(t) {
    var e = this;
    if (!(e instanceof ZF)) throw new Error("ProxyWriter must be called as constructor.");
    ((e.props = t), (e._needDrain = !1), Wnr.call(e, t));
  }
  ZF.prototype._stat = function () {
    var t = this,
      e = t.props,
      r = e.follow ? "stat" : "lstat";
    dea[r](e.path, function (n, o) {
      var s;
      (n || !o ? (s = "File") : (s = cea(o)), (e[s] = !0), (e.type = t.type = s), (t._old = o), t._addProxy(Wnr(e, o)));
    });
  };
  ZF.prototype._addProxy = function (t) {
    var e = this;
    if (e._proxy) return e.error("proxy already set");
    ((e._proxy = t),
      ["ready", "error", "close", "pipe", "drain", "warn"].forEach(function (n) {
        t.on(n, e.emit.bind(e, n));
      }),
      e.emit("proxy", t));
    var r = e._buffer;
    (r.forEach(function (n) {
      t[n[0]].apply(t, n[1]);
    }),
      (e._buffer.length = 0),
      e._needsDrain && e.emit("drain"));
  };
  ZF.prototype.add = function (t) {
    return (mea(t), this._proxy ? this._proxy.add(t) : (this._buffer.push(["add", [t]]), (this._needDrain = !0), !1));
  };
  ZF.prototype.write = function (t) {
    return this._proxy ? this._proxy.write(t) : (this._buffer.push(["write", [t]]), (this._needDrain = !0), !1);
  };
  ZF.prototype.end = function (t) {
    return this._proxy ? this._proxy.end(t) : (this._buffer.push(["end", [t]]), !1);
  };
});