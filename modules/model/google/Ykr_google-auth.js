/**
 * @module Ykr
 * @category model/google
 * @label google-auth
 * @position 106 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ykr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ykr = T((Vee) => {
  "use strict";
  var pR =
      (Vee && Vee.__classPrivateFieldGet) ||
      function (t, e, r, n) {
        if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
        if (typeof e == "function" ? t !== e || !n : !e.has(t))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
      },
    PC,
    a_t,
    Wkr,
    zkr,
    Xke,
    u_t;
  Object.defineProperty(Vee, "__esModule", { value: !0 });
  Vee.DefaultAwsSecurityCredentialsSupplier = void 0;
  var c_t = class {
    constructor(e) {
      (PC.add(this),
        (this.regionUrl = e.regionUrl),
        (this.securityCredentialsUrl = e.securityCredentialsUrl),
        (this.imdsV2SessionTokenUrl = e.imdsV2SessionTokenUrl),
        (this.additionalGaxiosOptions = e.additionalGaxiosOptions));
    }
    async getAwsRegion(e) {
      if (pR(this, PC, "a", Xke)) return pR(this, PC, "a", Xke);
      let r = {};
      if (
        (!pR(this, PC, "a", Xke) &&
          this.imdsV2SessionTokenUrl &&
          (r["x-aws-ec2-metadata-token"] = await pR(this, PC, "m", a_t).call(this, e.transporter)),
        !this.regionUrl)
      )
        throw new Error('Unable to determine AWS region due to missing "options.credential_source.region_url"');
      let n = { ...this.additionalGaxiosOptions, url: this.regionUrl, method: "GET", responseType: "text", headers: r },
        o = await e.transporter.request(n);
      return o.data.substr(0, o.data.length - 1);
    }
    async getAwsSecurityCredentials(e) {
      if (pR(this, PC, "a", u_t)) return pR(this, PC, "a", u_t);
      let r = {};
      this.imdsV2SessionTokenUrl &&
        (r["x-aws-ec2-metadata-token"] = await pR(this, PC, "m", a_t).call(this, e.transporter));
      let n = await pR(this, PC, "m", Wkr).call(this, r, e.transporter),
        o = await pR(this, PC, "m", zkr).call(this, n, r, e.transporter);
      return { accessKeyId: o.AccessKeyId, secretAccessKey: o.SecretAccessKey, token: o.Token };
    }
  };
  Vee.DefaultAwsSecurityCredentialsSupplier = c_t;
  ((PC = new WeakSet()),
    (a_t = async function (e) {
      let r = {
        ...this.additionalGaxiosOptions,
        url: this.imdsV2SessionTokenUrl,
        method: "PUT",
        responseType: "text",
        headers: { "x-aws-ec2-metadata-token-ttl-seconds": "300" },
      };
      return (await e.request(r)).data;
    }),
    (Wkr = async function (e, r) {
      if (!this.securityCredentialsUrl)
        throw new Error('Unable to determine AWS role name due to missing "options.credential_source.url"');
      let n = {
        ...this.additionalGaxiosOptions,
        url: this.securityCredentialsUrl,
        method: "GET",
        responseType: "text",
        headers: e,
      };
      return (await r.request(n)).data;
    }),
    (zkr = async function (e, r, n) {
      return (
        await n.request({
          ...this.additionalGaxiosOptions,
          url: `${this.securityCredentialsUrl}/${e}`,
          responseType: "json",
          headers: r,
        })
      ).data;
    }),
    (Xke = function () {
      return process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || null;
    }),
    (u_t = function () {
      return process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
        ? {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            token: process.env.AWS_SESSION_TOKEN,
          }
        : null;
    }));
});