/**
 * @module Ixr
 * @category utils/events
 * @label events
 * @position 22 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ixr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ixr = T((yyu, Dxr) => {
  "use strict";
  var Ayu = gRe(),
    { Duplex: R0o } = Ae("stream");
  function xxr(t) {
    t.emit("close");
  }
  function k0o() {
    !this.destroyed && this._writableState.finished && this.destroy();
  }
  function Txr(t) {
    (this.removeListener("error", Txr), this.destroy(), this.listenerCount("error") === 0 && this.emit("error", t));
  }
  function O0o(t, e) {
    let r = !0,
      n = new R0o({ ...e, autoDestroy: !1, emitClose: !1, objectMode: !1, writableObjectMode: !1 });
    return (
      t.on("message", function (s, a) {
        let u = !a && n._readableState.objectMode ? s.toString() : s;
        n.push(u) || t.pause();
      }),
      t.once("error", function (s) {
        n.destroyed || ((r = !1), n.destroy(s));
      }),
      t.once("close", function () {
        n.destroyed || n.push(null);
      }),
      (n._destroy = function (o, s) {
        if (t.readyState === t.CLOSED) {
          (s(o), process.nextTick(xxr, n));
          return;
        }
        let a = !1;
        (t.once("error", function (c) {
          ((a = !0), s(c));
        }),
          t.once("close", function () {
            (a || s(o), process.nextTick(xxr, n));
          }),
          r && t.terminate());
      }),
      (n._final = function (o) {
        if (t.readyState === t.CONNECTING) {
          t.once("open", function () {
            n._final(o);
          });
          return;
        }
        t._socket !== null &&
          (t._socket._writableState.finished
            ? (o(), n._readableState.endEmitted && n.destroy())
            : (t._socket.once("finish", function () {
                o();
              }),
              t.close()));
      }),
      (n._read = function () {
        t.isPaused && t.resume();
      }),
      (n._write = function (o, s, a) {
        if (t.readyState === t.CONNECTING) {
          t.once("open", function () {
            n._write(o, s, a);
          });
          return;
        }
        t.send(o, a);
      }),
      n.on("end", k0o),
      n.on("error", Txr),
      n
    );
  }
  Dxr.exports = O0o;
});