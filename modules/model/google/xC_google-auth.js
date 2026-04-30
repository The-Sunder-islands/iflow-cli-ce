/**
 * @module xC
 * @category model/google
 * @label google-auth
 * @position 61 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xC) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xC = T((c2) => {
  "use strict";
  var Xfo =
      (c2 && c2.__createBinding) ||
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
    Zfo =
      (c2 && c2.__exportStar) ||
      function (t, e) {
        for (var r in t) r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && Xfo(e, t, r);
      };
  Object.defineProperty(c2, "__esModule", { value: !0 });
  c2.instance = c2.Gaxios = c2.GaxiosError = void 0;
  c2.request = tpo;
  var rRr = tRr();
  Object.defineProperty(c2, "Gaxios", {
    enumerable: !0,
    get: function () {
      return rRr.Gaxios;
    },
  });
  var epo = T6t();
  Object.defineProperty(c2, "GaxiosError", {
    enumerable: !0,
    get: function () {
      return epo.GaxiosError;
    },
  });
  Zfo(M6t(), c2);
  c2.instance = new rRr.Gaxios();
  async function tpo(t) {
    return c2.instance.request(t);
  }
});