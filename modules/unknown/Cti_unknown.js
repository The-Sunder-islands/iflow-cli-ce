/**
 * @module Cti
 * @category unknown
 * @label unknown
 * @position 1553 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Cti) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Cti = T((GCc, vti) => {
  "use strict";
  var scr = class {
    #e;
    #t = [];
    #r = [];
    #n = 0;
    #i = {};
    #o = "";
    #u = !1;
    #a = null;
    #s = null;
    constructor(e, r) {
      ((this.#e = e), (this.#s = r));
    }
    addWaitingHandler(e) {
      this.#t.push(e);
    }
    onRequestStart(e, r) {
      ((this.#a = e), this.#e.onRequestStart?.(e, r));
    }
    onRequestUpgrade(e, r, n, o) {
      this.#e.onRequestUpgrade?.(e, r, n, o);
    }
    onResponseStart(e, r, n, o) {
      ((this.#n = r), (this.#i = n), (this.#o = o), this.#e.onResponseStart?.(e, r, n, o));
    }
    onResponseData(e, r) {
      (this.#r.push(Buffer.from(r)), this.#e.onResponseData?.(e, r));
    }
    onResponseEnd(e, r) {
      (this.#e.onResponseEnd?.(e, r), this.#l(), this.#s?.());
    }
    onResponseError(e, r) {
      ((this.#u = !0), this.#e.onResponseError?.(e, r), this.#c(r), this.#s?.());
    }
    #l() {
      let e = Buffer.concat(this.#r);
      for (let r of this.#t) {
        let n = {
          resume() {},
          pause() {},
          get paused() {
            return !1;
          },
          get aborted() {
            return !1;
          },
          get reason() {
            return null;
          },
          abort() {},
        };
        try {
          if (
            (r.onRequestStart?.(n, null), n.aborted || (r.onResponseStart?.(n, this.#n, this.#i, this.#o), n.aborted))
          )
            continue;
          (e.length > 0 && r.onResponseData?.(n, e), r.onResponseEnd?.(n, {}));
        } catch {}
      }
      ((this.#t = []), (this.#r = []));
    }
    #c(e) {
      for (let r of this.#t) {
        let n = {
          resume() {},
          pause() {},
          get paused() {
            return !1;
          },
          get aborted() {
            return !0;
          },
          get reason() {
            return e;
          },
          abort() {},
        };
        try {
          (r.onRequestStart?.(n, null), r.onResponseError?.(n, e));
        } catch {}
      }
      ((this.#t = []), (this.#r = []));
    }
  };
  vti.exports = scr;
});