/**
 * @module Pyt
 * @category security/jwt
 * @label jwt
 * @position 96 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Pyt = T((qke) => {
  "use strict";
  Object.defineProperty(qke, "__esModule", { value: !0 });
  qke.JWTAccess = void 0;
  var r3o = Dyt(),
    n3o = mB(),
    Bkr = { alg: "RS256", typ: "JWT" },
    Nyt = class t {
      constructor(e, r, n, o) {
        ((this.cache = new n3o.LRUCache({ capacity: 500, maxAge: 3600 * 1e3 })),
          (this.email = e),
          (this.key = r),
          (this.keyId = n),
          (this.eagerRefreshThresholdMillis = o ?? 300 * 1e3));
      }
      getCachedKey(e, r) {
        let n = e;
        if (
          (r && Array.isArray(r) && r.length
            ? (n = e ? `${e}_${r.join("_")}` : `${r.join("_")}`)
            : typeof r == "string" && (n = e ? `${e}_${r}` : r),
          !n)
        )
          throw Error("Scopes or url must be provided");
        return n;
      }
      getRequestHeaders(e, r, n) {
        let o = this.getCachedKey(e, n),
          s = this.cache.get(o),
          a = Date.now();
        if (s && s.expiration - a > this.eagerRefreshThresholdMillis) return s.headers;
        let u = Math.floor(Date.now() / 1e3),
          c = t.getExpirationTime(u),
          m;
        if (
          (Array.isArray(n) && (n = n.join(" ")),
          n
            ? (m = { iss: this.email, sub: this.email, scope: n, exp: c, iat: u })
            : (m = { iss: this.email, sub: this.email, aud: e, exp: c, iat: u }),
          r)
        ) {
          for (let g in m)
            if (r[g])
              throw new Error(
                `The '${g}' property is not allowed when passing additionalClaims. This claim is included in the JWT by default.`,
              );
        }
        let d = this.keyId ? { ...Bkr, kid: this.keyId } : Bkr,
          f = Object.assign(m, r),
          h = { Authorization: `Bearer ${r3o.sign({ header: d, payload: f, secret: this.key })}` };
        return (this.cache.set(o, { expiration: c * 1e3, headers: h }), h);
      }
      static getExpirationTime(e) {
        return e + 3600;
      }
      fromJSON(e) {
        if (!e) throw new Error("Must pass in a JSON object containing the service account auth settings.");
        if (!e.client_email) throw new Error("The incoming JSON object does not contain a client_email field");
        if (!e.private_key) throw new Error("The incoming JSON object does not contain a private_key field");
        ((this.email = e.client_email),
          (this.key = e.private_key),
          (this.keyId = e.private_key_id),
          (this.projectId = e.project_id));
      }
      fromStream(e, r) {
        if (r) this.fromStreamAsync(e).then(() => r(), r);
        else return this.fromStreamAsync(e);
      }
      fromStreamAsync(e) {
        return new Promise((r, n) => {
          e || n(new Error("Must pass in a stream containing the service account auth settings."));
          let o = "";
          e.setEncoding("utf8")
            .on("data", (s) => (o += s))
            .on("error", n)
            .on("end", () => {
              try {
                let s = JSON.parse(o);
                (this.fromJSON(s), r());
              } catch (s) {
                n(s);
              }
            });
        });
      }
    };
  qke.JWTAccess = Nyt;
});