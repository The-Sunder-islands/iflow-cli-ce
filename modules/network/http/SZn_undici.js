/**
 * @module SZn
 * @category network/http
 * @label undici
 * @position 1522 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (SZn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var SZn = T((lCc, CZn) => {
  "use strict";
  var { Readable: vZn, Duplex: sma, PassThrough: ama } = Ae("node:stream"),
    uma = Ae("node:assert"),
    { AsyncResource: cma } = Ae("node:async_hooks"),
    { InvalidArgumentError: fCe, InvalidReturnValueError: lma, RequestAbortedError: eur } = da(),
    DD = ks(),
    { addSignal: mma, removeSignal: dma } = dCe();
  function EZn() {}
  var _le = Symbol("resume"),
    tur = class extends vZn {
      constructor() {
        (super({ autoDestroy: !0 }), (this[_le] = null));
      }
      _read() {
        let { [_le]: e } = this;
        e && ((this[_le] = null), e());
      }
      _destroy(e, r) {
        (this._read(), r(e));
      }
    },
    rur = class extends vZn {
      constructor(e) {
        (super({ autoDestroy: !0 }), (this[_le] = e));
      }
      _read() {
        this[_le]();
      }
      _destroy(e, r) {
        (!e && !this._readableState.endEmitted && (e = new eur()), r(e));
      }
    },
    nur = class extends cma {
      constructor(e, r) {
        if (!e || typeof e != "object") throw new fCe("invalid opts");
        if (typeof r != "function") throw new fCe("invalid handler");
        let { signal: n, method: o, opaque: s, onInfo: a, responseHeaders: u } = e;
        if (n && typeof n.on != "function" && typeof n.addEventListener != "function")
          throw new fCe("signal must be an EventEmitter or EventTarget");
        if (o === "CONNECT") throw new fCe("invalid method");
        if (a && typeof a != "function") throw new fCe("invalid onInfo callback");
        (super("UNDICI_PIPELINE"),
          (this.opaque = s || null),
          (this.responseHeaders = u || null),
          (this.handler = r),
          (this.abort = null),
          (this.context = null),
          (this.onInfo = a || null),
          (this.req = new tur().on("error", EZn)),
          (this.ret = new sma({
            readableObjectMode: e.objectMode,
            autoDestroy: !0,
            read: () => {
              let { body: c } = this;
              c?.resume && c.resume();
            },
            write: (c, m, d) => {
              let { req: f } = this;
              f.push(c, m) || f._readableState.destroyed ? d() : (f[_le] = d);
            },
            destroy: (c, m) => {
              let { body: d, req: f, res: p, ret: h, abort: g } = this;
              (!c && !h._readableState.endEmitted && (c = new eur()),
                g && c && g(),
                DD.destroy(d, c),
                DD.destroy(f, c),
                DD.destroy(p, c),
                dma(this),
                m(c));
            },
          }).on("prefinish", () => {
            let { req: c } = this;
            c.push(null);
          })),
          (this.res = null),
          mma(this, n));
      }
      onConnect(e, r) {
        let { res: n } = this;
        if (this.reason) {
          e(this.reason);
          return;
        }
        (uma(!n, "pipeline cannot be retried"), (this.abort = e), (this.context = r));
      }
      onHeaders(e, r, n) {
        let { opaque: o, handler: s, context: a } = this;
        if (e < 200) {
          if (this.onInfo) {
            let c = this.responseHeaders === "raw" ? DD.parseRawHeaders(r) : DD.parseHeaders(r);
            this.onInfo({ statusCode: e, headers: c });
          }
          return;
        }
        this.res = new rur(n);
        let u;
        try {
          this.handler = null;
          let c = this.responseHeaders === "raw" ? DD.parseRawHeaders(r) : DD.parseHeaders(r);
          u = this.runInAsyncScope(s, null, { statusCode: e, headers: c, opaque: o, body: this.res, context: a });
        } catch (c) {
          throw (this.res.on("error", EZn), c);
        }
        if (!u || typeof u.on != "function") throw new lma("expected Readable");
        (u
          .on("data", (c) => {
            let { ret: m, body: d } = this;
            !m.push(c) && d.pause && d.pause();
          })
          .on("error", (c) => {
            let { ret: m } = this;
            DD.destroy(m, c);
          })
          .on("end", () => {
            let { ret: c } = this;
            c.push(null);
          })
          .on("close", () => {
            let { ret: c } = this;
            c._readableState.ended || DD.destroy(c, new eur());
          }),
          (this.body = u));
      }
      onData(e) {
        let { res: r } = this;
        return r.push(e);
      }
      onComplete(e) {
        let { res: r } = this;
        r.push(null);
      }
      onError(e) {
        let { ret: r } = this;
        ((this.handler = null), DD.destroy(r, e));
      }
    };
  function fma(t, e) {
    try {
      let r = new nur(t, e);
      return (this.dispatch({ ...t, body: r.req }, r), r.ret);
    } catch (r) {
      return new ama().destroy(r);
    }
  }
  CZn.exports = fma;
});