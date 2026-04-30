/**
 * @module ehn
 * @category utils/id
 * @label id
 * @position 750 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ehn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ehn = T((uec, Zpn) => {
  "use strict";
  var { isUUID: N0s } = oFt(),
    P0s = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,
    B0s = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
  function L0s(t) {
    return B0s.indexOf(t) !== -1;
  }
  function sFt(t) {
    return t.secure === !0
      ? !0
      : t.secure === !1
        ? !1
        : t.scheme
          ? t.scheme.length === 3 &&
            (t.scheme[0] === "w" || t.scheme[0] === "W") &&
            (t.scheme[1] === "s" || t.scheme[1] === "S") &&
            (t.scheme[2] === "s" || t.scheme[2] === "S")
          : !1;
  }
  function Kpn(t) {
    return (t.host || (t.error = t.error || "HTTP URIs must have a host."), t);
  }
  function Jpn(t) {
    let e = String(t.scheme).toLowerCase() === "https";
    return ((t.port === (e ? 443 : 80) || t.port === "") && (t.port = void 0), t.path || (t.path = "/"), t);
  }
  function M0s(t) {
    return (
      (t.secure = sFt(t)),
      (t.resourceName = (t.path || "/") + (t.query ? "?" + t.query : "")),
      (t.path = void 0),
      (t.query = void 0),
      t
    );
  }
  function F0s(t) {
    if (
      ((t.port === (sFt(t) ? 443 : 80) || t.port === "") && (t.port = void 0),
      typeof t.secure == "boolean" && ((t.scheme = t.secure ? "wss" : "ws"), (t.secure = void 0)),
      t.resourceName)
    ) {
      let [e, r] = t.resourceName.split("?");
      ((t.path = e && e !== "/" ? e : void 0), (t.query = r), (t.resourceName = void 0));
    }
    return ((t.fragment = void 0), t);
  }
  function U0s(t, e) {
    if (!t.path) return ((t.error = "URN can not be parsed"), t);
    let r = t.path.match(P0s);
    if (r) {
      let n = e.scheme || t.scheme || "urn";
      ((t.nid = r[1].toLowerCase()), (t.nss = r[2]));
      let o = `${n}:${e.nid || t.nid}`,
        s = aFt(o);
      ((t.path = void 0), s && (t = s.parse(t, e)));
    } else t.error = t.error || "URN can not be parsed.";
    return t;
  }
  function $0s(t, e) {
    if (t.nid === void 0) throw new Error("URN without nid cannot be serialized");
    let r = e.scheme || t.scheme || "urn",
      n = t.nid.toLowerCase(),
      o = `${r}:${e.nid || n}`,
      s = aFt(o);
    s && (t = s.serialize(t, e));
    let a = t,
      u = t.nss;
    return ((a.path = `${n || e.nid}:${u}`), (e.skipEscape = !0), a);
  }
  function j0s(t, e) {
    let r = t;
    return (
      (r.uuid = r.nss),
      (r.nss = void 0),
      !e.tolerant && (!r.uuid || !N0s(r.uuid)) && (r.error = r.error || "UUID is not valid."),
      r
    );
  }
  function Q0s(t) {
    let e = t;
    return ((e.nss = (t.uuid || "").toLowerCase()), e);
  }
  var Xpn = { scheme: "http", domainHost: !0, parse: Kpn, serialize: Jpn },
    G0s = { scheme: "https", domainHost: Xpn.domainHost, parse: Kpn, serialize: Jpn },
    Fze = { scheme: "ws", domainHost: !0, parse: M0s, serialize: F0s },
    q0s = { scheme: "wss", domainHost: Fze.domainHost, parse: Fze.parse, serialize: Fze.serialize },
    H0s = { scheme: "urn", parse: U0s, serialize: $0s, skipNormalize: !0 },
    V0s = { scheme: "urn:uuid", parse: j0s, serialize: Q0s, skipNormalize: !0 },
    Uze = { http: Xpn, https: G0s, ws: Fze, wss: q0s, urn: H0s, "urn:uuid": V0s };
  Object.setPrototypeOf(Uze, null);
  function aFt(t) {
    return (t && (Uze[t] || Uze[t.toLowerCase()])) || void 0;
  }
  Zpn.exports = { wsIsSecure: sFt, SCHEMES: Uze, isValidSchemeName: L0s, getSchemeHandler: aFt };
});