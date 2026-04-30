/**
 * @module qkr
 * @category model/google
 * @label google-auth
 * @position 103 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qkr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qkr = T((Yke) => {
  "use strict";
  Object.defineProperty(Yke, "__esModule", { value: !0 });
  Yke.UrlSubjectTokenSupplier = void 0;
  var t_t = class {
    constructor(e) {
      ((this.url = e.url),
        (this.formatType = e.formatType),
        (this.subjectTokenFieldName = e.subjectTokenFieldName),
        (this.headers = e.headers),
        (this.additionalGaxiosOptions = e.additionalGaxiosOptions));
    }
    async getSubjectToken(e) {
      let r = {
          ...this.additionalGaxiosOptions,
          url: this.url,
          method: "GET",
          headers: this.headers,
          responseType: this.formatType,
        },
        n;
      if (
        (this.formatType === "text"
          ? (n = (await e.transporter.request(r)).data)
          : this.formatType === "json" &&
            this.subjectTokenFieldName &&
            (n = (await e.transporter.request(r)).data[this.subjectTokenFieldName]),
        !n)
      )
        throw new Error("Unable to parse the subject_token from the credential_source URL");
      return n;
    }
  };
  Yke.UrlSubjectTokenSupplier = t_t;
});