/**
 * @module Sni
 * @category network/ws
 * @label websocket
 * @position 1574 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Sni) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Sni = T((d4c, Cni) => {
  "use strict";
  var { WebsocketFrameSend: vni } = Lle(),
    { opcodes: Eni, sendHints: uY } = TU(),
    q3a = Aar(),
    Fcr = class {
      #e = new q3a();
      #t = !1;
      #r;
      constructor(e) {
        this.#r = e;
      }
      add(e, r, n) {
        if (n !== uY.blob) {
          if (this.#t) {
            let s = { promise: null, callback: r, frame: Mcr(e, n) };
            this.#e.push(s);
          } else if (n === uY.text) {
            let { 0: s, 1: a } = vni.createFastTextFrame(e);
            (this.#r.cork(), this.#r.write(s), this.#r.write(a, r), this.#r.uncork());
          } else this.#r.write(Mcr(e, n), r);
          return;
        }
        let o = {
          promise: e.arrayBuffer().then((s) => {
            ((o.promise = null), (o.frame = Mcr(s, n)));
          }),
          callback: r,
          frame: null,
        };
        (this.#e.push(o), this.#t || this.#n());
      }
      async #n() {
        this.#t = !0;
        let e = this.#e;
        for (; !e.isEmpty(); ) {
          let r = e.shift();
          (r.promise !== null && (await r.promise), this.#r.write(r.frame, r.callback), (r.callback = r.frame = null));
        }
        this.#t = !1;
      }
    };
  function Mcr(t, e) {
    return new vni(H3a(t, e)).createFrame(e === uY.text ? Eni.TEXT : Eni.BINARY);
  }
  function H3a(t, e) {
    switch (e) {
      case uY.text:
      case uY.typedArray:
        return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
      case uY.arrayBuffer:
      case uY.blob:
        return new Uint8Array(t);
    }
  }
  Cni.exports = { SendQueue: Fcr };
});