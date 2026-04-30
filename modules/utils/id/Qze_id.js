/**
 * @module Qze
 * @category utils/id
 * @label id
 * @position 751 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qze) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qze = T((cec, jze) => {
  "use strict";
  var {
      normalizeIPv6: W0s,
      removeDotSegments: u8e,
      recomposeAuthority: z0s,
      normalizeComponentEncoding: $ze,
      isIPv4: Y0s,
      nonSimpleDomain: K0s,
    } = oFt(),
    { SCHEMES: J0s, getSchemeHandler: thn } = ehn();
  function X0s(t, e) {
    return (typeof t == "string" ? (t = IT(pk(t, e), e)) : typeof t == "object" && (t = pk(IT(t, e), e)), t);
  }
  function Z0s(t, e, r) {
    let n = r ? Object.assign({ scheme: "null" }, r) : { scheme: "null" },
      o = rhn(pk(t, n), pk(e, n), n, !0);
    return ((n.skipEscape = !0), IT(o, n));
  }
  function rhn(t, e, r, n) {
    let o = {};
    return (
      n || ((t = pk(IT(t, r), r)), (e = pk(IT(e, r), r))),
      (r = r || {}),
      !r.tolerant && e.scheme
        ? ((o.scheme = e.scheme),
          (o.userinfo = e.userinfo),
          (o.host = e.host),
          (o.port = e.port),
          (o.path = u8e(e.path || "")),
          (o.query = e.query))
        : (e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0
            ? ((o.userinfo = e.userinfo),
              (o.host = e.host),
              (o.port = e.port),
              (o.path = u8e(e.path || "")),
              (o.query = e.query))
            : (e.path
                ? (e.path[0] === "/"
                    ? (o.path = u8e(e.path))
                    : ((t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0) && !t.path
                        ? (o.path = "/" + e.path)
                        : t.path
                          ? (o.path = t.path.slice(0, t.path.lastIndexOf("/") + 1) + e.path)
                          : (o.path = e.path),
                      (o.path = u8e(o.path))),
                  (o.query = e.query))
                : ((o.path = t.path), e.query !== void 0 ? (o.query = e.query) : (o.query = t.query)),
              (o.userinfo = t.userinfo),
              (o.host = t.host),
              (o.port = t.port)),
          (o.scheme = t.scheme)),
      (o.fragment = e.fragment),
      o
    );
  }
  function ems(t, e, r) {
    return (
      typeof t == "string"
        ? ((t = unescape(t)), (t = IT($ze(pk(t, r), !0), { ...r, skipEscape: !0 })))
        : typeof t == "object" && (t = IT($ze(t, !0), { ...r, skipEscape: !0 })),
      typeof e == "string"
        ? ((e = unescape(e)), (e = IT($ze(pk(e, r), !0), { ...r, skipEscape: !0 })))
        : typeof e == "object" && (e = IT($ze(e, !0), { ...r, skipEscape: !0 })),
      t.toLowerCase() === e.toLowerCase()
    );
  }
  function IT(t, e) {
    let r = {
        host: t.host,
        scheme: t.scheme,
        userinfo: t.userinfo,
        port: t.port,
        path: t.path,
        query: t.query,
        nid: t.nid,
        nss: t.nss,
        uuid: t.uuid,
        fragment: t.fragment,
        reference: t.reference,
        resourceName: t.resourceName,
        secure: t.secure,
        error: "",
      },
      n = Object.assign({}, e),
      o = [],
      s = thn(n.scheme || r.scheme);
    (s && s.serialize && s.serialize(r, n),
      r.path !== void 0 &&
        (n.skipEscape
          ? (r.path = unescape(r.path))
          : ((r.path = escape(r.path)), r.scheme !== void 0 && (r.path = r.path.split("%3A").join(":")))),
      n.reference !== "suffix" && r.scheme && o.push(r.scheme, ":"));
    let a = z0s(r);
    if (
      (a !== void 0 &&
        (n.reference !== "suffix" && o.push("//"), o.push(a), r.path && r.path[0] !== "/" && o.push("/")),
      r.path !== void 0)
    ) {
      let u = r.path;
      (!n.absolutePath && (!s || !s.absolutePath) && (u = u8e(u)),
        a === void 0 && u[0] === "/" && u[1] === "/" && (u = "/%2F" + u.slice(2)),
        o.push(u));
    }
    return (r.query !== void 0 && o.push("?", r.query), r.fragment !== void 0 && o.push("#", r.fragment), o.join(""));
  }
  var tms =
    /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function pk(t, e) {
    let r = Object.assign({}, e),
      n = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 },
      o = !1;
    r.reference === "suffix" && (r.scheme ? (t = r.scheme + ":" + t) : (t = "//" + t));
    let s = t.match(tms);
    if (s) {
      if (
        ((n.scheme = s[1]),
        (n.userinfo = s[3]),
        (n.host = s[4]),
        (n.port = parseInt(s[5], 10)),
        (n.path = s[6] || ""),
        (n.query = s[7]),
        (n.fragment = s[8]),
        isNaN(n.port) && (n.port = s[5]),
        n.host)
      )
        if (Y0s(n.host) === !1) {
          let c = W0s(n.host);
          ((n.host = c.host.toLowerCase()), (o = c.isIPV6));
        } else o = !0;
      (n.scheme === void 0 &&
      n.userinfo === void 0 &&
      n.host === void 0 &&
      n.port === void 0 &&
      n.query === void 0 &&
      !n.path
        ? (n.reference = "same-document")
        : n.scheme === void 0
          ? (n.reference = "relative")
          : n.fragment === void 0
            ? (n.reference = "absolute")
            : (n.reference = "uri"),
        r.reference &&
          r.reference !== "suffix" &&
          r.reference !== n.reference &&
          (n.error = n.error || "URI is not a " + r.reference + " reference."));
      let a = thn(r.scheme || n.scheme);
      if (
        !r.unicodeSupport &&
        (!a || !a.unicodeSupport) &&
        n.host &&
        (r.domainHost || (a && a.domainHost)) &&
        o === !1 &&
        K0s(n.host)
      )
        try {
          n.host = URL.domainToASCII(n.host.toLowerCase());
        } catch (u) {
          n.error = n.error || "Host's domain name can not be converted to ASCII: " + u;
        }
      ((!a || (a && !a.skipNormalize)) &&
        (t.indexOf("%") !== -1 &&
          (n.scheme !== void 0 && (n.scheme = unescape(n.scheme)), n.host !== void 0 && (n.host = unescape(n.host))),
        n.path && (n.path = escape(unescape(n.path))),
        n.fragment && (n.fragment = encodeURI(decodeURIComponent(n.fragment)))),
        a && a.parse && a.parse(n, r));
    } else n.error = n.error || "URI can not be parsed.";
    return n;
  }
  var uFt = { SCHEMES: J0s, normalize: X0s, resolve: Z0s, resolveComponent: rhn, equal: ems, serialize: IT, parse: pk };
  jze.exports = uFt;
  jze.exports.default = uFt;
  jze.exports.fastUri = uFt;
});