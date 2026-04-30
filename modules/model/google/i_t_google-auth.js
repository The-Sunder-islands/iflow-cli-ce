/**
 * @module i_t
 * @category model/google
 * @label google-auth
 * @position 104 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (i_t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var i_t = T((Kke) => {
  "use strict";
  Object.defineProperty(Kke, "__esModule", { value: !0 });
  Kke.IdentityPoolClient = void 0;
  var I3o = pB(),
    r_t = mB(),
    R3o = Gkr(),
    k3o = qkr(),
    n_t = class t extends I3o.BaseExternalAccountClient {
      constructor(e, r) {
        super(e, r);
        let n = (0, r_t.originalOrCamelOptions)(e),
          o = n.get("credential_source"),
          s = n.get("subject_token_supplier");
        if (!o && !s) throw new Error("A credential source or subject token supplier must be specified.");
        if (o && s) throw new Error("Only one of credential source or subject token supplier can be specified.");
        if (s) ((this.subjectTokenSupplier = s), (this.credentialSourceType = "programmatic"));
        else {
          let a = (0, r_t.originalOrCamelOptions)(o),
            u = (0, r_t.originalOrCamelOptions)(a.get("format")),
            c = u.get("type") || "text",
            m = u.get("subject_token_field_name");
          if (c !== "json" && c !== "text") throw new Error(`Invalid credential_source format "${c}"`);
          if (c === "json" && !m) throw new Error("Missing subject_token_field_name for JSON credential_source format");
          let d = a.get("file"),
            f = a.get("url"),
            p = a.get("headers");
          if (d && f)
            throw new Error('No valid Identity Pool "credential_source" provided, must be either file or url.');
          if (d && !f)
            ((this.credentialSourceType = "file"),
              (this.subjectTokenSupplier = new R3o.FileSubjectTokenSupplier({
                filePath: d,
                formatType: c,
                subjectTokenFieldName: m,
              })));
          else if (!d && f)
            ((this.credentialSourceType = "url"),
              (this.subjectTokenSupplier = new k3o.UrlSubjectTokenSupplier({
                url: f,
                formatType: c,
                subjectTokenFieldName: m,
                headers: p,
                additionalGaxiosOptions: t.RETRY_CONFIG,
              })));
          else throw new Error('No valid Identity Pool "credential_source" provided, must be either file or url.');
        }
      }
      async retrieveSubjectToken() {
        return this.subjectTokenSupplier.getSubjectToken(this.supplierContext);
      }
    };
  Kke.IdentityPoolClient = n_t;
});