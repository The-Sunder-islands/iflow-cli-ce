/**
 * @module oFt
 * @category utils/id
 * @label id
 * @position 749 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oFt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oFt = T((aec, Ypn) => {
  "use strict";
  var w0s = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),
    Wpn = RegExp.prototype.test.bind(
      /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u,
    );
  function iFt(t) {
    let e = "",
      r = 0,
      n = 0;
    for (n = 0; n < t.length; n++)
      if (((r = t[n].charCodeAt(0)), r !== 48)) {
        if (!((r >= 48 && r <= 57) || (r >= 65 && r <= 70) || (r >= 97 && r <= 102))) return "";
        e += t[n];
        break;
      }
    for (n += 1; n < t.length; n++) {
      if (((r = t[n].charCodeAt(0)), !((r >= 48 && r <= 57) || (r >= 65 && r <= 70) || (r >= 97 && r <= 102))))
        return "";
      e += t[n];
    }
    return e;
  }
  var x0s = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function Vpn(t) {
    return ((t.length = 0), !0);
  }
  function T0s(t, e, r) {
    if (t.length) {
      let n = iFt(t);
      if (n !== "") e.push(n);
      else return ((r.error = !0), !1);
      t.length = 0;
    }
    return !0;
  }
  function D0s(t) {
    let e = 0,
      r = { error: !1, address: "", zone: "" },
      n = [],
      o = [],
      s = !1,
      a = !1,
      u = T0s;
    for (let c = 0; c < t.length; c++) {
      let m = t[c];
      if (!(m === "[" || m === "]"))
        if (m === ":") {
          if ((s === !0 && (a = !0), !u(o, n, r))) break;
          if (++e > 7) {
            r.error = !0;
            break;
          }
          (c > 0 && t[c - 1] === ":" && (s = !0), n.push(":"));
          continue;
        } else if (m === "%") {
          if (!u(o, n, r)) break;
          u = Vpn;
        } else {
          o.push(m);
          continue;
        }
    }
    return (
      o.length && (u === Vpn ? (r.zone = o.join("")) : a ? n.push(o.join("")) : n.push(iFt(o))),
      (r.address = n.join("")),
      r
    );
  }
  function zpn(t) {
    if (I0s(t, ":") < 2) return { host: t, isIPV6: !1 };
    let e = D0s(t);
    if (e.error) return { host: t, isIPV6: !1 };
    {
      let r = e.address,
        n = e.address;
      return (e.zone && ((r += "%" + e.zone), (n += "%25" + e.zone)), { host: r, isIPV6: !0, escapedHost: n });
    }
  }
  function I0s(t, e) {
    let r = 0;
    for (let n = 0; n < t.length; n++) t[n] === e && r++;
    return r;
  }
  function R0s(t) {
    let e = t,
      r = [],
      n = -1,
      o = 0;
    for (; (o = e.length); ) {
      if (o === 1) {
        if (e === ".") break;
        if (e === "/") {
          r.push("/");
          break;
        } else {
          r.push(e);
          break;
        }
      } else if (o === 2) {
        if (e[0] === ".") {
          if (e[1] === ".") break;
          if (e[1] === "/") {
            e = e.slice(2);
            continue;
          }
        } else if (e[0] === "/" && (e[1] === "." || e[1] === "/")) {
          r.push("/");
          break;
        }
      } else if (o === 3 && e === "/..") {
        (r.length !== 0 && r.pop(), r.push("/"));
        break;
      }
      if (e[0] === ".") {
        if (e[1] === ".") {
          if (e[2] === "/") {
            e = e.slice(3);
            continue;
          }
        } else if (e[1] === "/") {
          e = e.slice(2);
          continue;
        }
      } else if (e[0] === "/" && e[1] === ".") {
        if (e[2] === "/") {
          e = e.slice(2);
          continue;
        } else if (e[2] === "." && e[3] === "/") {
          ((e = e.slice(3)), r.length !== 0 && r.pop());
          continue;
        }
      }
      if ((n = e.indexOf("/", 1)) === -1) {
        r.push(e);
        break;
      } else (r.push(e.slice(0, n)), (e = e.slice(n)));
    }
    return r.join("");
  }
  function k0s(t, e) {
    let r = e !== !0 ? escape : unescape;
    return (
      t.scheme !== void 0 && (t.scheme = r(t.scheme)),
      t.userinfo !== void 0 && (t.userinfo = r(t.userinfo)),
      t.host !== void 0 && (t.host = r(t.host)),
      t.path !== void 0 && (t.path = r(t.path)),
      t.query !== void 0 && (t.query = r(t.query)),
      t.fragment !== void 0 && (t.fragment = r(t.fragment)),
      t
    );
  }
  function O0s(t) {
    let e = [];
    if ((t.userinfo !== void 0 && (e.push(t.userinfo), e.push("@")), t.host !== void 0)) {
      let r = unescape(t.host);
      if (!Wpn(r)) {
        let n = zpn(r);
        n.isIPV6 === !0 ? (r = `[${n.escapedHost}]`) : (r = t.host);
      }
      e.push(r);
    }
    return (
      (typeof t.port == "number" || typeof t.port == "string") && (e.push(":"), e.push(String(t.port))),
      e.length ? e.join("") : void 0
    );
  }
  Ypn.exports = {
    nonSimpleDomain: x0s,
    recomposeAuthority: O0s,
    normalizeComponentEncoding: k0s,
    removeDotSegments: R0s,
    isIPv4: Wpn,
    isUUID: w0s,
    normalizeIPv6: zpn,
    stringArrayToHexStripped: iFt,
  };
});