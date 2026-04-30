/**
 * @module aOe
 * @category system/process
 * @label process
 * @position 110 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aOe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aOe = T((Yee) => {
  "use strict";
  Object.defineProperty(Yee, "__esModule", { value: !0 });
  Yee.PluggableAuthClient = Yee.ExecutableError = void 0;
  var j3o = pB(),
    Q3o = h_t(),
    G3o = Xkr(),
    uOe = class extends Error {
      constructor(e, r) {
        (super(`The executable failed with exit code: ${r} and error message: ${e}.`),
          (this.code = r),
          Object.setPrototypeOf(this, new.target.prototype));
      }
    };
  Yee.ExecutableError = uOe;
  var q3o = 30 * 1e3,
    Zkr = 5 * 1e3,
    eOr = 120 * 1e3,
    H3o = "GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES",
    tOr = 1,
    A_t = class extends j3o.BaseExternalAccountClient {
      constructor(e, r) {
        if ((super(e, r), !e.credential_source.executable))
          throw new Error('No valid Pluggable Auth "credential_source" provided.');
        if (((this.command = e.credential_source.executable.command), !this.command))
          throw new Error('No valid Pluggable Auth "credential_source" provided.');
        if (e.credential_source.executable.timeout_millis === void 0) this.timeoutMillis = q3o;
        else if (
          ((this.timeoutMillis = e.credential_source.executable.timeout_millis),
          this.timeoutMillis < Zkr || this.timeoutMillis > eOr)
        )
          throw new Error(`Timeout must be between ${Zkr} and ${eOr} milliseconds.`);
        ((this.outputFile = e.credential_source.executable.output_file),
          (this.handler = new G3o.PluggableAuthHandler({
            command: this.command,
            timeoutMillis: this.timeoutMillis,
            outputFile: this.outputFile,
          })),
          (this.credentialSourceType = "executable"));
      }
      async retrieveSubjectToken() {
        if (process.env[H3o] !== "1")
          throw new Error(
            "Pluggable Auth executables need to be explicitly allowed to run by setting the GOOGLE_EXTERNAL_ACCOUNT_ALLOW_EXECUTABLES environment Variable to 1.",
          );
        let e;
        if ((this.outputFile && (e = await this.handler.retrieveCachedResponse()), !e)) {
          let r = new Map();
          (r.set("GOOGLE_EXTERNAL_ACCOUNT_AUDIENCE", this.audience),
            r.set("GOOGLE_EXTERNAL_ACCOUNT_TOKEN_TYPE", this.subjectTokenType),
            r.set("GOOGLE_EXTERNAL_ACCOUNT_INTERACTIVE", "0"),
            this.outputFile && r.set("GOOGLE_EXTERNAL_ACCOUNT_OUTPUT_FILE", this.outputFile));
          let n = this.getServiceAccountEmail();
          (n && r.set("GOOGLE_EXTERNAL_ACCOUNT_IMPERSONATED_EMAIL", n),
            (e = await this.handler.retrieveResponseFromExecutable(r)));
        }
        if (e.version > tOr)
          throw new Error(`Version of executable is not currently supported, maximum supported version is ${tOr}.`);
        if (!e.success) throw new uOe(e.errorMessage, e.errorCode);
        if (this.outputFile && !e.expirationTime)
          throw new Q3o.InvalidExpirationTimeFieldError(
            "The executable response must contain the `expiration_time` field for successful responses when an output_file has been specified in the configuration.",
          );
        if (e.isExpired()) throw new Error("Executable response is expired.");
        return e.subjectToken;
      }
    };
  Yee.PluggableAuthClient = A_t;
});