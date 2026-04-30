/**
 * @module f3e
 * @category model/google
 * @label google-auth
 * @position 77 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (f3e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var f3e = T((kke) => {
  "use strict";
  Object.defineProperty(kke, "__esModule", { value: !0 });
  kke.DefaultTransporter = void 0;
  var Hpo = xC(),
    Vpo = NRr(),
    Wpo = nyt(),
    PRr = "google-api-nodejs-client",
    Rke = class t {
      constructor() {
        this.instance = new Hpo.Gaxios();
      }
      configure(e = {}) {
        if (((e.headers = e.headers || {}), typeof window > "u")) {
          let r = e.headers["User-Agent"];
          if (
            (r
              ? r.includes(`${PRr}/`) || (e.headers["User-Agent"] = `${r} ${t.USER_AGENT}`)
              : (e.headers["User-Agent"] = t.USER_AGENT),
            !e.headers["x-goog-api-client"])
          ) {
            let n = process.version.replace(/^v/, "");
            e.headers["x-goog-api-client"] = `gl-node/${n}`;
          }
        }
        return e;
      }
      request(e) {
        return (
          (e = this.configure(e)),
          (0, Vpo.validate)(e),
          this.instance.request(e).catch((r) => {
            throw this.processError(r);
          })
        );
      }
      get defaults() {
        return this.instance.defaults;
      }
      set defaults(e) {
        this.instance.defaults = e;
      }
      processError(e) {
        let r = e.response,
          n = e,
          o = r ? r.data : null;
        return (
          r && o && o.error && r.status !== 200
            ? typeof o.error == "string"
              ? ((n.message = o.error), (n.status = r.status))
              : Array.isArray(o.error.errors)
                ? ((n.message = o.error.errors.map((s) => s.message).join(`
`)),
                  (n.code = o.error.code),
                  (n.errors = o.error.errors))
                : ((n.message = o.error.message), (n.code = o.error.code))
            : r && r.status >= 400 && ((n.message = o), (n.status = r.status)),
          n
        );
      }
    };
  kke.DefaultTransporter = Rke;
  Rke.USER_AGENT = `${PRr}/${Wpo.version}`;
});