/**
 * @module Qyt
 * @category utils/oop
 * @label oop
 * @position 99 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qyt = T((y3e) => {
  "use strict";
  Object.defineProperty(y3e, "__esModule", { value: !0 });
  y3e.OAuthClientAuthHandler = void 0;
  y3e.getErrorFromOAuthErrorResponse = d3o;
  var Fkr = Ae("querystring"),
    l3o = Pee(),
    m3o = ["PUT", "POST", "PATCH"],
    jyt = class {
      constructor(e) {
        ((this.clientAuthentication = e), (this.crypto = (0, l3o.createCrypto)()));
      }
      applyClientAuthenticationOptions(e, r) {
        (this.injectAuthenticatedHeaders(e, r), r || this.injectAuthenticatedRequestBody(e));
      }
      injectAuthenticatedHeaders(e, r) {
        var n;
        if (r) ((e.headers = e.headers || {}), Object.assign(e.headers, { Authorization: `Bearer ${r}}` }));
        else if (
          ((n = this.clientAuthentication) === null || n === void 0 ? void 0 : n.confidentialClientType) === "basic"
        ) {
          e.headers = e.headers || {};
          let o = this.clientAuthentication.clientId,
            s = this.clientAuthentication.clientSecret || "",
            a = this.crypto.encodeBase64StringUtf8(`${o}:${s}`);
          Object.assign(e.headers, { Authorization: `Basic ${a}` });
        }
      }
      injectAuthenticatedRequestBody(e) {
        var r;
        if (
          ((r = this.clientAuthentication) === null || r === void 0 ? void 0 : r.confidentialClientType) ===
          "request-body"
        ) {
          let n = (e.method || "GET").toUpperCase();
          if (m3o.indexOf(n) !== -1) {
            let o,
              s = e.headers || {};
            for (let a in s)
              if (a.toLowerCase() === "content-type" && s[a]) {
                o = s[a].toLowerCase();
                break;
              }
            if (o === "application/x-www-form-urlencoded") {
              e.data = e.data || "";
              let a = Fkr.parse(e.data);
              (Object.assign(a, {
                client_id: this.clientAuthentication.clientId,
                client_secret: this.clientAuthentication.clientSecret || "",
              }),
                (e.data = Fkr.stringify(a)));
            } else if (o === "application/json")
              ((e.data = e.data || {}),
                Object.assign(e.data, {
                  client_id: this.clientAuthentication.clientId,
                  client_secret: this.clientAuthentication.clientSecret || "",
                }));
            else
              throw new Error(
                `${o} content-types are not supported with ${this.clientAuthentication.confidentialClientType} client authentication`,
              );
          } else
            throw new Error(
              `${n} HTTP method does not support ${this.clientAuthentication.confidentialClientType} client authentication`,
            );
        }
      }
      static get RETRY_CONFIG() {
        return { retry: !0, retryConfig: { httpMethodsToRetry: ["GET", "PUT", "POST", "HEAD", "OPTIONS", "DELETE"] } };
      }
    };
  y3e.OAuthClientAuthHandler = jyt;
  function d3o(t, e) {
    let r = t.error,
      n = t.error_description,
      o = t.error_uri,
      s = `Error code ${r}`;
    (typeof n < "u" && (s += `: ${n}`), typeof o < "u" && (s += ` - ${o}`));
    let a = new Error(s);
    if (e) {
      let u = Object.keys(e);
      (e.stack && u.push("stack"),
        u.forEach((c) => {
          c !== "message" && Object.defineProperty(a, c, { value: e[c], writable: !1, enumerable: !0 });
        }));
    }
    return a;
  }
});