/**
 * @module Wei
 * @category utils/json
 * @label json
 * @position 1542 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wei) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wei = T((OCc, Vei) => {
  "use strict";
  var Wda = wle(),
    { ResponseError: zda } = da(),
    Vur = class extends Wda {
      #e;
      #t;
      #r;
      #n;
      #i;
      constructor(e, { handler: r }) {
        super(r);
      }
      #o(e) {
        return (this.#t ?? "").indexOf(e) === 0;
      }
      onRequestStart(e, r) {
        return (
          (this.#e = 0),
          (this.#t = null),
          (this.#r = null),
          (this.#n = null),
          (this.#i = ""),
          super.onRequestStart(e, r)
        );
      }
      onResponseStart(e, r, n, o) {
        if (((this.#e = r), (this.#n = n), (this.#t = n["content-type"]), this.#e < 400))
          return super.onResponseStart(e, r, n, o);
        (this.#o("application/json") || this.#o("text/plain")) && (this.#r = new TextDecoder("utf-8"));
      }
      onResponseData(e, r) {
        if (this.#e < 400) return super.onResponseData(e, r);
        this.#i += this.#r?.decode(r, { stream: !0 }) ?? "";
      }
      onResponseEnd(e, r) {
        if (this.#e >= 400) {
          if (((this.#i += this.#r?.decode(void 0, { stream: !1 }) ?? ""), this.#o("application/json")))
            try {
              this.#i = JSON.parse(this.#i);
            } catch {}
          let n,
            o = Error.stackTraceLimit;
          Error.stackTraceLimit = 0;
          try {
            n = new zda("Response Error", this.#e, { body: this.#i, headers: this.#n });
          } finally {
            Error.stackTraceLimit = o;
          }
          super.onResponseError(e, n);
        } else super.onResponseEnd(e, r);
      }
      onResponseError(e, r) {
        super.onResponseError(e, r);
      }
    };
  Vei.exports = () => (t) =>
    function (r, n) {
      return t(r, new Vur(r, { handler: n }));
    };
});