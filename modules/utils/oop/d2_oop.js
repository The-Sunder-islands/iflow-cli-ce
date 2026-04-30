/**
 * @module d2
 * @category utils/oop
 * @label oop
 * @position 431 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (d2) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var d2 = T((Tre) => {
  "use strict";
  Object.defineProperty(Tre, "__esModule", { value: !0 });
  Tre.parseUri = XBo;
  Tre.splitHostPort = ZBo;
  Tre.combineHostPort = eLo;
  Tre.uriToString = tLo;
  var JBo = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
  function XBo(t) {
    let e = JBo.exec(t);
    return e === null ? null : { scheme: e[1], authority: e[2], path: e[3] };
  }
  var oXr = /^\d+$/;
  function ZBo(t) {
    if (t.startsWith("[")) {
      let e = t.indexOf("]");
      if (e === -1) return null;
      let r = t.substring(1, e);
      if (r.indexOf(":") === -1) return null;
      if (t.length > e + 1)
        if (t[e + 1] === ":") {
          let n = t.substring(e + 2);
          return oXr.test(n) ? { host: r, port: +n } : null;
        } else return null;
      else return { host: r };
    } else {
      let e = t.split(":");
      return e.length === 2 ? (oXr.test(e[1]) ? { host: e[0], port: +e[1] } : null) : { host: t };
    }
  }
  function eLo(t) {
    return t.port === void 0 ? t.host : t.host.includes(":") ? `[${t.host}]:${t.port}` : `${t.host}:${t.port}`;
  }
  function tLo(t) {
    let e = "";
    return (
      t.scheme !== void 0 && (e += t.scheme + ":"),
      t.authority !== void 0 && (e += "//" + t.authority + "/"),
      (e += t.path),
      e
    );
  }
});