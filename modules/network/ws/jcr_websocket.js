/**
 * @module jcr
 * @category network/ws
 * @label websocket
 * @position 1576 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jcr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jcr = T((p4c, Nni) => {
  "use strict";
  var { webidl: pst } = jg(),
    { validateCloseCodeAndReason: lga } = aY(),
    { kConstruct: kni } = n0(),
    { kEnumerableProperty: Oni } = ks();
  function mga() {
    class t extends DOMException {
      get reason() {
        return "";
      }
    }
    return new t().reason !== void 0
      ? DOMException
      : new Proxy(DOMException, {
          construct(e, r, n) {
            let o = Reflect.construct(e, r, e);
            return (Object.setPrototypeOf(o, n.prototype), o);
          },
        });
  }
  var cY = class t extends mga() {
      #e;
      #t;
      constructor(e = "", r = void 0) {
        if (((e = pst.converters.DOMString(e, "WebSocketError", "message")), super(e, "WebSocketError"), r === kni))
          return;
        r !== null && (r = pst.converters.WebSocketCloseInfo(r));
        let n = r.closeCode ?? null,
          o = r.reason ?? "";
        (lga(n, o), o.length !== 0 && n === null && (n = 1e3), (this.#e = n), (this.#t = o));
      }
      get closeCode() {
        return this.#e;
      }
      get reason() {
        return this.#t;
      }
      static createUnvalidatedWebSocketError(e, r, n) {
        let o = new t(e, kni);
        return ((o.#e = r), (o.#t = n), o);
      }
    },
    { createUnvalidatedWebSocketError: dga } = cY;
  delete cY.createUnvalidatedWebSocketError;
  Object.defineProperties(cY.prototype, {
    closeCode: Oni,
    reason: Oni,
    [Symbol.toStringTag]: { value: "WebSocketError", writable: !1, enumerable: !1, configurable: !0 },
  });
  pst.is.WebSocketError = pst.util.MakeTypeAssertion(cY);
  Nni.exports = { WebSocketError: cY, createUnvalidatedWebSocketError: dga };
});