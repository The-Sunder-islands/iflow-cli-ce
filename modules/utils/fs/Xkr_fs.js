/**
 * @module Xkr
 * @category utils/fs
 * @label fs
 * @position 109 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xkr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xkr = T((sOe) => {
  "use strict";
  Object.defineProperty(sOe, "__esModule", { value: !0 });
  sOe.PluggableAuthHandler = void 0;
  var U3o = aOe(),
    SG = h_t(),
    $3o = Ae("child_process"),
    g_t = Ae("fs"),
    b_t = class t {
      constructor(e) {
        if (!e.command) throw new Error("No command provided.");
        if (
          ((this.commandComponents = t.parseCommand(e.command)),
          (this.timeoutMillis = e.timeoutMillis),
          !this.timeoutMillis)
        )
          throw new Error("No timeoutMillis provided.");
        this.outputFile = e.outputFile;
      }
      retrieveResponseFromExecutable(e) {
        return new Promise((r, n) => {
          let o = $3o.spawn(this.commandComponents[0], this.commandComponents.slice(1), {
              env: { ...process.env, ...Object.fromEntries(e) },
            }),
            s = "";
          (o.stdout.on("data", (u) => {
            s += u;
          }),
            o.stderr.on("data", (u) => {
              s += u;
            }));
          let a = setTimeout(
            () => (
              o.removeAllListeners(),
              o.kill(),
              n(new Error("The executable failed to finish within the timeout specified."))
            ),
            this.timeoutMillis,
          );
          o.on("close", (u) => {
            if ((clearTimeout(a), u === 0))
              try {
                let c = JSON.parse(s),
                  m = new SG.ExecutableResponse(c);
                return r(m);
              } catch (c) {
                return c instanceof SG.ExecutableResponseError
                  ? n(c)
                  : n(new SG.ExecutableResponseError(`The executable returned an invalid response: ${s}`));
              }
            else return n(new U3o.ExecutableError(s, u.toString()));
          });
        });
      }
      async retrieveCachedResponse() {
        if (!this.outputFile || this.outputFile.length === 0) return;
        let e;
        try {
          e = await g_t.promises.realpath(this.outputFile);
        } catch {
          return;
        }
        if (!(await g_t.promises.lstat(e)).isFile()) return;
        let r = await g_t.promises.readFile(e, { encoding: "utf8" });
        if (r !== "")
          try {
            let n = JSON.parse(r);
            return new SG.ExecutableResponse(n).isValid() ? new SG.ExecutableResponse(n) : void 0;
          } catch (n) {
            throw n instanceof SG.ExecutableResponseError
              ? n
              : new SG.ExecutableResponseError(`The output file contained an invalid response: ${r}`);
          }
      }
      static parseCommand(e) {
        let r = e.match(/(?:[^\s"]+|"[^"]*")+/g);
        if (!r) throw new Error(`Provided command: "${e}" could not be parsed.`);
        for (let n = 0; n < r.length; n++) r[n][0] === '"' && r[n].slice(-1) === '"' && (r[n] = r[n].slice(1, -1));
        return r;
      }
    };
  sOe.PluggableAuthHandler = b_t;
});