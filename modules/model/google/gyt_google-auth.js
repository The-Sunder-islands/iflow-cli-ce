/**
 * @module gyt
 * @category model/google
 * @label google-auth
 * @position 85 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gyt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gyt = T((Mke) => {
  "use strict";
  Object.defineProperty(Mke, "__esModule", { value: !0 });
  Mke.Compute = void 0;
  var lho = xC(),
    YRr = m3e(),
    mho = vG(),
    hyt = class extends mho.OAuth2Client {
      constructor(e = {}) {
        (super(e),
          (this.credentials = { expiry_date: 1, refresh_token: "compute-placeholder" }),
          (this.serviceAccountEmail = e.serviceAccountEmail || "default"),
          (this.scopes = Array.isArray(e.scopes) ? e.scopes : e.scopes ? [e.scopes] : []));
      }
      async refreshTokenNoCache(e) {
        let r = `service-accounts/${this.serviceAccountEmail}/token`,
          n;
        try {
          let s = { property: r };
          (this.scopes.length > 0 && (s.params = { scopes: this.scopes.join(",") }), (n = await YRr.instance(s)));
        } catch (s) {
          throw (
            s instanceof lho.GaxiosError &&
              ((s.message = `Could not refresh access token: ${s.message}`), this.wrapError(s)),
            s
          );
        }
        let o = n;
        return (
          n && n.expires_in && ((o.expiry_date = new Date().getTime() + n.expires_in * 1e3), delete o.expires_in),
          this.emit("tokens", o),
          { tokens: o, res: null }
        );
      }
      async fetchIdToken(e) {
        let r = `service-accounts/${this.serviceAccountEmail}/identity?format=full&audience=${e}`,
          n;
        try {
          let o = { property: r };
          n = await YRr.instance(o);
        } catch (o) {
          throw (o instanceof Error && (o.message = `Could not fetch ID token: ${o.message}`), o);
        }
        return n;
      }
      wrapError(e) {
        let r = e.response;
        r &&
          r.status &&
          ((e.status = r.status),
          r.status === 403
            ? (e.message =
                "A Forbidden error was returned while attempting to retrieve an access token for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have the correct permission scopes specified: " +
                e.message)
            : r.status === 404 &&
              (e.message =
                "A Not Found error was returned while attempting to retrieve an accesstoken for the Compute Engine built-in service account. This may be because the Compute Engine instance does not have any permission scopes specified: " +
                e.message));
      }
    };
  Mke.Compute = hyt;
});