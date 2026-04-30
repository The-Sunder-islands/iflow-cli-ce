/**
 * @module wnr
 * @category utils/fs
 * @label fs
 * @position 1448 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wnr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wnr = T((G6c, oqn) => {
  oqn.exports = iz;
  var Snr = rz(),
    EZs = OEe(),
    vZs = qo(),
    CZs = rf();
  vZs(iz, Snr);
  function iz(t) {
    var e = this;
    if (!(e instanceof iz)) throw new Error("ProxyReader must be called as constructor.");
    ((e.props = t), (e._buffer = []), (e.ready = !1), Snr.call(e, t));
  }
  iz.prototype._stat = function () {
    var t = this,
      e = t.props,
      r = e.follow ? "stat" : "lstat";
    CZs[r](e.path, function (n, o) {
      var s;
      (n || !o ? (s = "File") : (s = EZs(o)), (e[s] = !0), (e.type = t.type = s), (t._old = o), t._addProxy(Snr(e, o)));
    });
  };
  iz.prototype._addProxy = function (t) {
    var e = this;
    if (e._proxyTarget) return e.error("proxy already set");
    ((e._proxyTarget = t),
      (t._proxy = e),
      ["error", "data", "end", "close", "linkpath", "entry", "entryEnd", "child", "childEnd", "warn", "stat"].forEach(
        function (n) {
          t.on(n, e.emit.bind(e, n));
        },
      ),
      e.emit("proxy", t),
      t.on("ready", function () {
        ((e.ready = !0), e.emit("ready"));
      }));
    var r = e._buffer;
    ((e._buffer.length = 0),
      r.forEach(function (n) {
        t[n[0]].apply(t, n[1]);
      }));
  };
  iz.prototype.pause = function () {
    return this._proxyTarget ? this._proxyTarget.pause() : !1;
  };
  iz.prototype.resume = function () {
    return this._proxyTarget ? this._proxyTarget.resume() : !1;
  };
});