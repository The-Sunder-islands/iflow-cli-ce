/**
 * @module Ibr
 * @category network/express
 * @label express
 * @position 1785 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ibr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ibr = T((Dbr) => {
  "use strict";
  var DPa = Amt(),
    $6i = S0t(),
    hwe = { CrtSignerV4: null },
    Tbr = class {
      sigv4aSigner;
      sigv4Signer;
      signerOptions;
      static sigv4aDependency() {
        return typeof hwe.CrtSignerV4 == "function"
          ? "crt"
          : typeof $6i.signatureV4aContainer.SignatureV4a == "function"
            ? "js"
            : "none";
      }
      constructor(e) {
        ((this.sigv4Signer = new DPa.SignatureV4S3Express(e)), (this.signerOptions = e));
      }
      async sign(e, r = {}) {
        return r.signingRegion === "*" ? this.getSigv4aSigner().sign(e, r) : this.sigv4Signer.sign(e, r);
      }
      async signWithCredentials(e, r, n = {}) {
        if (n.signingRegion === "*") {
          let o = this.getSigv4aSigner(),
            s = hwe.CrtSignerV4;
          if (s && o instanceof s) return o.signWithCredentials(e, r, n);
          throw new Error(
            `signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`,
          );
        }
        return this.sigv4Signer.signWithCredentials(e, r, n);
      }
      async presign(e, r = {}) {
        if (r.signingRegion === "*") {
          let n = this.getSigv4aSigner(),
            o = hwe.CrtSignerV4;
          if (o && n instanceof o) return n.presign(e, r);
          throw new Error(
            `presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`,
          );
        }
        return this.sigv4Signer.presign(e, r);
      }
      async presignWithCredentials(e, r, n = {}) {
        if (n.signingRegion === "*")
          throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
        return this.sigv4Signer.presignWithCredentials(e, r, n);
      }
      getSigv4aSigner() {
        if (!this.sigv4aSigner) {
          let e = hwe.CrtSignerV4,
            r = $6i.signatureV4aContainer.SignatureV4a;
          if (this.signerOptions.runtime === "node") {
            if (!e && !r)
              throw new Error(
                "Neither CRT nor JS SigV4a implementation is available. Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt",
              );
            if (e && typeof e == "function") this.sigv4aSigner = new e({ ...this.signerOptions, signingAlgorithm: 1 });
            else if (r && typeof r == "function") this.sigv4aSigner = new r({ ...this.signerOptions });
            else
              throw new Error(
                "Available SigV4a implementation is not a valid constructor. Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a.For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt",
              );
          } else {
            if (!r || typeof r != "function")
              throw new Error(
                "JS SigV4a implementation is not available or not a valid constructor. Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. You must also register the package by calling [require('@aws-sdk/signature-v4a');] or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. For more information please go to https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a",
              );
            this.sigv4aSigner = new r({ ...this.signerOptions });
          }
        }
        return this.sigv4aSigner;
      }
    };
  Dbr.SignatureV4MultiRegion = Tbr;
  Dbr.signatureV4CrtContainer = hwe;
});