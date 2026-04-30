/**
 * @module Wgi
 * @category unknown
 * @label unknown
 * @position 1724 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wgi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wgi = T(($lt) => {
  "use strict";
  Object.defineProperty($lt, "__esModule", { value: !0 });
  $lt.headStream = void 0;
  var iDa = Ae("stream"),
    oDa = Vgi(),
    sDa = _$(),
    aDa = (t, e) =>
      (0, sDa.isReadableStream)(t)
        ? (0, oDa.headStream)(t, e)
        : new Promise((r, n) => {
            let o = new phr();
            ((o.limit = e),
              t.pipe(o),
              t.on("error", (s) => {
                (o.end(), n(s));
              }),
              o.on("error", n),
              o.on("finish", function () {
                let s = new Uint8Array(Buffer.concat(this.buffers));
                r(s);
              }));
          });
  $lt.headStream = aDa;
  var phr = class extends iDa.Writable {
    buffers = [];
    limit = 1 / 0;
    bytesBuffered = 0;
    _write(e, r, n) {
      if ((this.buffers.push(e), (this.bytesBuffered += e.byteLength ?? 0), this.bytesBuffered >= this.limit)) {
        let o = this.bytesBuffered - this.limit,
          s = this.buffers[this.buffers.length - 1];
        ((this.buffers[this.buffers.length - 1] = s.subarray(0, s.byteLength - o)), this.emit("finish"));
      }
      n();
    }
  };
});