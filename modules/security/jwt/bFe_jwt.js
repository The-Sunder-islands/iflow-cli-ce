/**
 * @module bFe
 * @category security/jwt
 * @label jwt
 * @position 429 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bFe = T((gFe) => {
  "use strict";
  Object.defineProperty(gFe, "__esModule", { value: !0 });
  gFe.CallCredentials = void 0;
  var ext = Ph();
  function zBo(t) {
    return "getRequestHeaders" in t && typeof t.getRequestHeaders == "function";
  }
  var xre = class t {
    static createFromMetadataGenerator(e) {
      return new Xwt(e);
    }
    static createFromGoogleCredential(e) {
      return t.createFromMetadataGenerator((r, n) => {
        let o;
        (zBo(e)
          ? (o = e.getRequestHeaders(r.service_url))
          : (o = new Promise((s, a) => {
              e.getRequestMetadata(r.service_url, (u, c) => {
                if (u) {
                  a(u);
                  return;
                }
                if (!c) {
                  a(new Error("Headers not set by metadata plugin"));
                  return;
                }
                s(c);
              });
            })),
          o.then(
            (s) => {
              let a = new ext.Metadata();
              for (let u of Object.keys(s)) a.add(u, s[u]);
              n(null, a);
            },
            (s) => {
              n(s);
            },
          ));
      });
    }
    static createEmpty() {
      return new Zwt();
    }
  };
  gFe.CallCredentials = xre;
  var Jwt = class t extends xre {
      constructor(e) {
        (super(), (this.creds = e));
      }
      async generateMetadata(e) {
        let r = new ext.Metadata(),
          n = await Promise.all(this.creds.map((o) => o.generateMetadata(e)));
        for (let o of n) r.merge(o);
        return r;
      }
      compose(e) {
        return new t(this.creds.concat([e]));
      }
      _equals(e) {
        return this === e ? !0 : e instanceof t ? this.creds.every((r, n) => r._equals(e.creds[n])) : !1;
      }
    },
    Xwt = class t extends xre {
      constructor(e) {
        (super(), (this.metadataGenerator = e));
      }
      generateMetadata(e) {
        return new Promise((r, n) => {
          this.metadataGenerator(e, (o, s) => {
            s !== void 0 ? r(s) : n(o);
          });
        });
      }
      compose(e) {
        return new Jwt([this, e]);
      }
      _equals(e) {
        return this === e ? !0 : e instanceof t ? this.metadataGenerator === e.metadataGenerator : !1;
      }
    },
    Zwt = class t extends xre {
      generateMetadata(e) {
        return Promise.resolve(new ext.Metadata());
      }
      compose(e) {
        return e;
      }
      _equals(e) {
        return e instanceof t;
      }
    };
});