import { createRequire } from "module";
const require = createRequire(import.meta.url);
globalThis.__filename = require("url").fileURLToPath(import.meta.url);
globalThis.__dirname = require("path").dirname(globalThis.__filename);
var wuo = Object.create;
var M7e = Object.defineProperty;
var xuo = Object.getOwnPropertyDescriptor;
var Tuo = Object.getOwnPropertyNames;
var Duo = Object.getPrototypeOf,
  Iuo = Object.prototype.hasOwnProperty;
var Ae = ((t) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
      ? new Proxy(t, { get: (e, r) => (typeof require < "u" ? require : e)[r] })
      : t)(function (t) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + t + '" is not supported');
});
var j = (t, e) => () => (t && (e = t((t = 0))), e);
var T = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
  Wi = (t, e) => {
    for (var r in e) M7e(t, r, { get: e[r], enumerable: !0 });
  },
  X4r = (t, e, r, n) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let o of Tuo(e))
        !Iuo.call(t, o) && o !== r && M7e(t, o, { get: () => e[o], enumerable: !(n = xuo(e, o)) || n.enumerable });
    return t;
  };
var Se = (t, e, r) => (
    (r = t != null ? wuo(Duo(t)) : {}),
    X4r(e || !t || !t.__esModule ? M7e(r, "default", { value: t, enumerable: !0 }) : r, t)
  ),
  bt = (t) => X4r(M7e({}, "__esModule", { value: !0 }), t);
var F7e = (t) => new Uint8Array(Buffer.from(t, "base64"));