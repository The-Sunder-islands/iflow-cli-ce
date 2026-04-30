/**
 * @module hni
 * @category unknown
 * @label unknown
 * @position 1572 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hni) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hni = T((l4c, pni) => {
  "use strict";
  var { createInflateRaw: O3a, Z_DEFAULT_WINDOWBITS: N3a } = Ae("node:zlib"),
    { isValidClientWindowBits: P3a } = aY(),
    B3a = Buffer.from([0, 0, 255, 255]),
    lst = Symbol("kBuffer"),
    mst = Symbol("kLength"),
    Ncr = class {
      #e;
      #t = {};
      constructor(e) {
        ((this.#t.serverNoContextTakeover = e.has("server_no_context_takeover")),
          (this.#t.serverMaxWindowBits = e.get("server_max_window_bits")));
      }
      decompress(e, r, n) {
        if (!this.#e) {
          let o = N3a;
          if (this.#t.serverMaxWindowBits) {
            if (!P3a(this.#t.serverMaxWindowBits)) {
              n(new Error("Invalid server_max_window_bits"));
              return;
            }
            o = Number.parseInt(this.#t.serverMaxWindowBits);
          }
          ((this.#e = O3a({ windowBits: o })),
            (this.#e[lst] = []),
            (this.#e[mst] = 0),
            this.#e.on("data", (s) => {
              (this.#e[lst].push(s), (this.#e[mst] += s.length));
            }),
            this.#e.on("error", (s) => {
              ((this.#e = null), n(s));
            }));
        }
        (this.#e.write(e),
          r && this.#e.write(B3a),
          this.#e.flush(() => {
            let o = Buffer.concat(this.#e[lst], this.#e[mst]);
            ((this.#e[lst].length = 0), (this.#e[mst] = 0), n(null, o));
          }));
      }
    };
  pni.exports = { PerMessageDeflate: Ncr };
});