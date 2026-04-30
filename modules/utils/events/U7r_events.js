/**
 * @module U7r
 * @category utils/events
 * @label events
 * @position 58 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (U7r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var U7r = T((Ree) => {
  "use strict";
  var xfo =
    (Ree && Ree.__importDefault) ||
    function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  Object.defineProperty(Ree, "__esModule", { value: !0 });
  Ree.parseProxyResponse = void 0;
  var Tfo = xfo(Iee()),
    pke = (0, Tfo.default)("https-proxy-agent:parse-proxy-response");
  function Dfo(t) {
    return new Promise((e, r) => {
      let n = 0,
        o = [];
      function s() {
        let d = t.read();
        d ? m(d) : t.once("readable", s);
      }
      function a() {
        (t.removeListener("end", u), t.removeListener("error", c), t.removeListener("readable", s));
      }
      function u() {
        (a(), pke("onend"), r(new Error("Proxy connection ended before receiving CONNECT response")));
      }
      function c(d) {
        (a(), pke("onerror %o", d), r(d));
      }
      function m(d) {
        (o.push(d), (n += d.length));
        let f = Buffer.concat(o, n),
          p = f.indexOf(`\r
\r
`);
        if (p === -1) {
          (pke("have not received end of HTTP headers yet..."), s());
          return;
        }
        let h = f.slice(0, p).toString("ascii").split(`\r
`),
          g = h.shift();
        if (!g) return (t.destroy(), r(new Error("No header received from proxy CONNECT response")));
        let b = g.split(" "),
          A = +b[1],
          y = b.slice(2).join(" "),
          E = {};
        for (let v of h) {
          if (!v) continue;
          let C = v.indexOf(":");
          if (C === -1) return (t.destroy(), r(new Error(`Invalid header from proxy CONNECT response: "${v}"`)));
          let x = v.slice(0, C).toLowerCase(),
            k = v.slice(C + 1).trimStart(),
            R = E[x];
          typeof R == "string" ? (E[x] = [R, k]) : Array.isArray(R) ? R.push(k) : (E[x] = k);
        }
        (pke("got proxy server response: %o %o", g, E),
          a(),
          e({ connect: { statusCode: A, statusText: y, headers: E }, buffered: f }));
      }
      (t.on("error", c), t.on("end", u), s());
    });
  }
  Ree.parseProxyResponse = Dfo;
});