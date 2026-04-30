/**
 * @module P7r
 * @category utils/events
 * @label events
 * @position 56 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (P7r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var P7r = T((W5) => {
  "use strict";
  var gfo =
      (W5 && W5.__createBinding) ||
      (Object.create
        ? function (t, e, r, n) {
            n === void 0 && (n = r);
            var o = Object.getOwnPropertyDescriptor(e, r);
            ((!o || ("get" in o ? !e.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }),
              Object.defineProperty(t, n, o));
          }
        : function (t, e, r, n) {
            (n === void 0 && (n = r), (t[n] = e[r]));
          }),
    bfo =
      (W5 && W5.__setModuleDefault) ||
      (Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          }),
    O7r =
      (W5 && W5.__importStar) ||
      function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && gfo(e, t, r);
        return (bfo(e, t), e);
      };
  Object.defineProperty(W5, "__esModule", { value: !0 });
  W5.req = W5.json = W5.toBuffer = void 0;
  var Afo = O7r(Ae("http")),
    yfo = O7r(Ae("https"));
  async function N7r(t) {
    let e = 0,
      r = [];
    for await (let n of t) ((e += n.length), r.push(n));
    return Buffer.concat(r, e);
  }
  W5.toBuffer = N7r;
  async function _fo(t) {
    let r = (await N7r(t)).toString("utf8");
    try {
      return JSON.parse(r);
    } catch (n) {
      let o = n;
      throw ((o.message += ` (input: ${r})`), o);
    }
  }
  W5.json = _fo;
  function Efo(t, e = {}) {
    let n = ((typeof t == "string" ? t : t.href).startsWith("https:") ? yfo : Afo).request(t, e),
      o = new Promise((s, a) => {
        n.once("response", s).once("error", a).end();
      });
    return ((n.then = o.then.bind(o)), n);
  }
  W5.req = Efo;
});