/**
 * @module Jri
 * @category unknown
 * @label unknown
 * @position 1566 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jri) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jri = T((i4c, Kri) => {
  "use strict";
  var { parseSetCookie: zri } = Wri(),
    { stringify: Pha } = Tcr(),
    { webidl: Vu } = jg(),
    { Headers: Bha } = tY(),
    nst = Vu.brandCheckMultiple([Bha, globalThis.Headers].filter(Boolean));
  function Lha(t) {
    (Vu.argumentLengthCheck(arguments, 1, "getCookies"), nst(t));
    let e = t.get("cookie"),
      r = {};
    if (!e) return r;
    for (let n of e.split(";")) {
      let [o, ...s] = n.split("=");
      r[o.trim()] = s.join("=");
    }
    return r;
  }
  function Mha(t, e, r) {
    nst(t);
    let n = "deleteCookie";
    (Vu.argumentLengthCheck(arguments, 2, n),
      (e = Vu.converters.DOMString(e, n, "name")),
      (r = Vu.converters.DeleteCookieAttributes(r)),
      Yri(t, { name: e, value: "", expires: new Date(0), ...r }));
  }
  function Fha(t) {
    (Vu.argumentLengthCheck(arguments, 1, "getSetCookies"), nst(t));
    let e = t.getSetCookie();
    return e ? e.map((r) => zri(r)) : [];
  }
  function Uha(t) {
    return ((t = Vu.converters.DOMString(t)), zri(t));
  }
  function Yri(t, e) {
    (Vu.argumentLengthCheck(arguments, 2, "setCookie"), nst(t), (e = Vu.converters.Cookie(e)));
    let r = Pha(e);
    r && t.append("set-cookie", r, !0);
  }
  Vu.converters.DeleteCookieAttributes = Vu.dictionaryConverter([
    { converter: Vu.nullableConverter(Vu.converters.DOMString), key: "path", defaultValue: () => null },
    { converter: Vu.nullableConverter(Vu.converters.DOMString), key: "domain", defaultValue: () => null },
  ]);
  Vu.converters.Cookie = Vu.dictionaryConverter([
    { converter: Vu.converters.DOMString, key: "name" },
    { converter: Vu.converters.DOMString, key: "value" },
    {
      converter: Vu.nullableConverter((t) =>
        typeof t == "number" ? Vu.converters["unsigned long long"](t) : new Date(t),
      ),
      key: "expires",
      defaultValue: () => null,
    },
    { converter: Vu.nullableConverter(Vu.converters["long long"]), key: "maxAge", defaultValue: () => null },
    { converter: Vu.nullableConverter(Vu.converters.DOMString), key: "domain", defaultValue: () => null },
    { converter: Vu.nullableConverter(Vu.converters.DOMString), key: "path", defaultValue: () => null },
    { converter: Vu.nullableConverter(Vu.converters.boolean), key: "secure", defaultValue: () => null },
    { converter: Vu.nullableConverter(Vu.converters.boolean), key: "httpOnly", defaultValue: () => null },
    { converter: Vu.converters.USVString, key: "sameSite", allowedValues: ["Strict", "Lax", "None"] },
    { converter: Vu.sequenceConverter(Vu.converters.DOMString), key: "unparsed", defaultValue: () => [] },
  ]);
  Kri.exports = { getCookies: Lha, deleteCookie: Mha, getSetCookies: Fha, setCookie: Yri, parseCookie: Uha };
});