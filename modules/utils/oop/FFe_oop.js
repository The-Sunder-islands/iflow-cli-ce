/**
 * @module FFe
 * @category utils/oop
 * @label oop
 * @position 448 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FFe = T((MFe) => {
  "use strict";
  Object.defineProperty(MFe, "__esModule", { value: !0 });
  MFe.makeClientConstructor = wXr;
  MFe.loadPackageDefinition = SMo;
  var sbe = $xt(),
    EMo = {
      unary: sbe.Client.prototype.makeUnaryRequest,
      server_stream: sbe.Client.prototype.makeServerStreamRequest,
      client_stream: sbe.Client.prototype.makeClientStreamRequest,
      bidi: sbe.Client.prototype.makeBidiStreamRequest,
    };
  function Qxt(t) {
    return ["__proto__", "prototype", "constructor"].includes(t);
  }
  function wXr(t, e, r) {
    r || (r = {});
    class n extends sbe.Client {}
    return (
      Object.keys(t).forEach((o) => {
        if (Qxt(o)) return;
        let s = t[o],
          a;
        if (typeof o == "string" && o.charAt(0) === "$") throw new Error("Method names cannot start with $");
        s.requestStream
          ? s.responseStream
            ? (a = "bidi")
            : (a = "client_stream")
          : s.responseStream
            ? (a = "server_stream")
            : (a = "unary");
        let u = s.requestSerialize,
          c = s.responseDeserialize,
          m = vMo(EMo[a], s.path, u, c);
        ((n.prototype[o] = m),
          Object.assign(n.prototype[o], s),
          s.originalName && !Qxt(s.originalName) && (n.prototype[s.originalName] = n.prototype[o]));
      }),
      (n.service = t),
      (n.serviceName = e),
      n
    );
  }
  function vMo(t, e, r, n) {
    return function (...o) {
      return t.call(this, e, r, n, ...o);
    };
  }
  function CMo(t) {
    return "format" in t;
  }
  function SMo(t) {
    let e = {};
    for (let r in t)
      if (Object.prototype.hasOwnProperty.call(t, r)) {
        let n = t[r],
          o = r.split(".");
        if (o.some((u) => Qxt(u))) continue;
        let s = o[o.length - 1],
          a = e;
        for (let u of o.slice(0, -1)) (a[u] || (a[u] = {}), (a = a[u]));
        CMo(n) ? (a[s] = n) : (a[s] = wXr(n, s, {}));
      }
    return e;
  }
});