/**
 * @module Nhe
 * @category unknown
 * @label unknown
 * @position 15 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nhe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nhe = T((uyu, Vwr) => {
  "use strict";
  var Ohe = Ae("zlib"),
    Gwr = khe(),
    Dlo = Qwr(),
    { kStatusCode: qwr } = eR(),
    Ilo = Buffer[Symbol.species],
    Rlo = Buffer.from([0, 0, 255, 255]),
    aRe = Symbol("permessage-deflate"),
    tR = Symbol("total-length"),
    ree = Symbol("callback"),
    eB = Symbol("buffers"),
    nee = Symbol("error"),
    sRe,
    a9t = class {
      constructor(e, r, n) {
        if (
          ((this._maxPayload = n | 0),
          (this._options = e || {}),
          (this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024),
          (this._isServer = !!r),
          (this._deflate = null),
          (this._inflate = null),
          (this.params = null),
          !sRe)
        ) {
          let o = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          sRe = new Dlo(o);
        }
      }
      static get extensionName() {
        return "permessage-deflate";
      }
      offer() {
        let e = {};
        return (
          this._options.serverNoContextTakeover && (e.server_no_context_takeover = !0),
          this._options.clientNoContextTakeover && (e.client_no_context_takeover = !0),
          this._options.serverMaxWindowBits && (e.server_max_window_bits = this._options.serverMaxWindowBits),
          this._options.clientMaxWindowBits
            ? (e.client_max_window_bits = this._options.clientMaxWindowBits)
            : this._options.clientMaxWindowBits == null && (e.client_max_window_bits = !0),
          e
        );
      }
      accept(e) {
        return (
          (e = this.normalizeParams(e)),
          (this.params = this._isServer ? this.acceptAsServer(e) : this.acceptAsClient(e)),
          this.params
        );
      }
      cleanup() {
        if ((this._inflate && (this._inflate.close(), (this._inflate = null)), this._deflate)) {
          let e = this._deflate[ree];
          (this._deflate.close(),
            (this._deflate = null),
            e && e(new Error("The deflate stream was closed while data was being processed")));
        }
      }
      acceptAsServer(e) {
        let r = this._options,
          n = e.find(
            (o) =>
              !(
                (r.serverNoContextTakeover === !1 && o.server_no_context_takeover) ||
                (o.server_max_window_bits &&
                  (r.serverMaxWindowBits === !1 ||
                    (typeof r.serverMaxWindowBits == "number" && r.serverMaxWindowBits > o.server_max_window_bits))) ||
                (typeof r.clientMaxWindowBits == "number" && !o.client_max_window_bits)
              ),
          );
        if (!n) throw new Error("None of the extension offers can be accepted");
        return (
          r.serverNoContextTakeover && (n.server_no_context_takeover = !0),
          r.clientNoContextTakeover && (n.client_no_context_takeover = !0),
          typeof r.serverMaxWindowBits == "number" && (n.server_max_window_bits = r.serverMaxWindowBits),
          typeof r.clientMaxWindowBits == "number"
            ? (n.client_max_window_bits = r.clientMaxWindowBits)
            : (n.client_max_window_bits === !0 || r.clientMaxWindowBits === !1) && delete n.client_max_window_bits,
          n
        );
      }
      acceptAsClient(e) {
        let r = e[0];
        if (this._options.clientNoContextTakeover === !1 && r.client_no_context_takeover)
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        if (!r.client_max_window_bits)
          typeof this._options.clientMaxWindowBits == "number" &&
            (r.client_max_window_bits = this._options.clientMaxWindowBits);
        else if (
          this._options.clientMaxWindowBits === !1 ||
          (typeof this._options.clientMaxWindowBits == "number" &&
            r.client_max_window_bits > this._options.clientMaxWindowBits)
        )
          throw new Error('Unexpected or invalid parameter "client_max_window_bits"');
        return r;
      }
      normalizeParams(e) {
        return (
          e.forEach((r) => {
            Object.keys(r).forEach((n) => {
              let o = r[n];
              if (o.length > 1) throw new Error(`Parameter "${n}" must have only a single value`);
              if (((o = o[0]), n === "client_max_window_bits")) {
                if (o !== !0) {
                  let s = +o;
                  if (!Number.isInteger(s) || s < 8 || s > 15)
                    throw new TypeError(`Invalid value for parameter "${n}": ${o}`);
                  o = s;
                } else if (!this._isServer) throw new TypeError(`Invalid value for parameter "${n}": ${o}`);
              } else if (n === "server_max_window_bits") {
                let s = +o;
                if (!Number.isInteger(s) || s < 8 || s > 15)
                  throw new TypeError(`Invalid value for parameter "${n}": ${o}`);
                o = s;
              } else if (n === "client_no_context_takeover" || n === "server_no_context_takeover") {
                if (o !== !0) throw new TypeError(`Invalid value for parameter "${n}": ${o}`);
              } else throw new Error(`Unknown parameter "${n}"`);
              r[n] = o;
            });
          }),
          e
        );
      }
      decompress(e, r, n) {
        sRe.add((o) => {
          this._decompress(e, r, (s, a) => {
            (o(), n(s, a));
          });
        });
      }
      compress(e, r, n) {
        sRe.add((o) => {
          this._compress(e, r, (s, a) => {
            (o(), n(s, a));
          });
        });
      }
      _decompress(e, r, n) {
        let o = this._isServer ? "client" : "server";
        if (!this._inflate) {
          let s = `${o}_max_window_bits`,
            a = typeof this.params[s] != "number" ? Ohe.Z_DEFAULT_WINDOWBITS : this.params[s];
          ((this._inflate = Ohe.createInflateRaw({ ...this._options.zlibInflateOptions, windowBits: a })),
            (this._inflate[aRe] = this),
            (this._inflate[tR] = 0),
            (this._inflate[eB] = []),
            this._inflate.on("error", Olo),
            this._inflate.on("data", Hwr));
        }
        ((this._inflate[ree] = n),
          this._inflate.write(e),
          r && this._inflate.write(Rlo),
          this._inflate.flush(() => {
            let s = this._inflate[nee];
            if (s) {
              (this._inflate.close(), (this._inflate = null), n(s));
              return;
            }
            let a = Gwr.concat(this._inflate[eB], this._inflate[tR]);
            (this._inflate._readableState.endEmitted
              ? (this._inflate.close(), (this._inflate = null))
              : ((this._inflate[tR] = 0),
                (this._inflate[eB] = []),
                r && this.params[`${o}_no_context_takeover`] && this._inflate.reset()),
              n(null, a));
          }));
      }
      _compress(e, r, n) {
        let o = this._isServer ? "server" : "client";
        if (!this._deflate) {
          let s = `${o}_max_window_bits`,
            a = typeof this.params[s] != "number" ? Ohe.Z_DEFAULT_WINDOWBITS : this.params[s];
          ((this._deflate = Ohe.createDeflateRaw({ ...this._options.zlibDeflateOptions, windowBits: a })),
            (this._deflate[tR] = 0),
            (this._deflate[eB] = []),
            this._deflate.on("data", klo));
        }
        ((this._deflate[ree] = n),
          this._deflate.write(e),
          this._deflate.flush(Ohe.Z_SYNC_FLUSH, () => {
            if (!this._deflate) return;
            let s = Gwr.concat(this._deflate[eB], this._deflate[tR]);
            (r && (s = new Ilo(s.buffer, s.byteOffset, s.length - 4)),
              (this._deflate[ree] = null),
              (this._deflate[tR] = 0),
              (this._deflate[eB] = []),
              r && this.params[`${o}_no_context_takeover`] && this._deflate.reset(),
              n(null, s));
          }));
      }
    };
  Vwr.exports = a9t;
  function klo(t) {
    (this[eB].push(t), (this[tR] += t.length));
  }
  function Hwr(t) {
    if (((this[tR] += t.length), this[aRe]._maxPayload < 1 || this[tR] <= this[aRe]._maxPayload)) {
      this[eB].push(t);
      return;
    }
    ((this[nee] = new RangeError("Max payload size exceeded")),
      (this[nee].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"),
      (this[nee][qwr] = 1009),
      this.removeListener("data", Hwr),
      this.reset());
  }
  function Olo(t) {
    if (((this[aRe]._inflate = null), this[nee])) {
      this[ree](this[nee]);
      return;
    }
    ((t[qwr] = 1007), this[ree](t));
  }
});