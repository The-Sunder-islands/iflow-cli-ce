/**
 * @module l_t
 * @category utils/oop
 * @label oop
 * @position 107 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (l_t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var l_t = T((zee) => {
  "use strict";
  var B3o =
      (zee && zee.__classPrivateFieldGet) ||
      function (t, e, r, n) {
        if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
        if (typeof e == "function" ? t !== e || !n : !e.has(t))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
      },
    Zke,
    Jkr;
  Object.defineProperty(zee, "__esModule", { value: !0 });
  zee.AwsClient = void 0;
  var L3o = s_t(),
    M3o = pB(),
    F3o = Ykr(),
    Kkr = mB(),
    Wee = class extends M3o.BaseExternalAccountClient {
      constructor(e, r) {
        super(e, r);
        let n = (0, Kkr.originalOrCamelOptions)(e),
          o = n.get("credential_source"),
          s = n.get("aws_security_credentials_supplier");
        if (!o && !s) throw new Error("A credential source or AWS security credentials supplier must be specified.");
        if (o && s)
          throw new Error("Only one of credential source or AWS security credentials supplier can be specified.");
        if (s)
          ((this.awsSecurityCredentialsSupplier = s),
            (this.regionalCredVerificationUrl = B3o(Zke, Zke, "f", Jkr)),
            (this.credentialSourceType = "programmatic"));
        else {
          let a = (0, Kkr.originalOrCamelOptions)(o);
          this.environmentId = a.get("environment_id");
          let u = a.get("region_url"),
            c = a.get("url"),
            m = a.get("imdsv2_session_token_url");
          ((this.awsSecurityCredentialsSupplier = new F3o.DefaultAwsSecurityCredentialsSupplier({
            regionUrl: u,
            securityCredentialsUrl: c,
            imdsV2SessionTokenUrl: m,
          })),
            (this.regionalCredVerificationUrl = a.get("regional_cred_verification_url")),
            (this.credentialSourceType = "aws"),
            this.validateEnvironmentId());
        }
        ((this.awsRequestSigner = null), (this.region = ""));
      }
      validateEnvironmentId() {
        var e;
        let r = (e = this.environmentId) === null || e === void 0 ? void 0 : e.match(/^(aws)(\d+)$/);
        if (!r || !this.regionalCredVerificationUrl) throw new Error('No valid AWS "credential_source" provided');
        if (parseInt(r[2], 10) !== 1) throw new Error(`aws version "${r[2]}" is not supported in the current build.`);
      }
      async retrieveSubjectToken() {
        this.awsRequestSigner ||
          ((this.region = await this.awsSecurityCredentialsSupplier.getAwsRegion(this.supplierContext)),
          (this.awsRequestSigner = new L3o.AwsRequestSigner(
            async () => this.awsSecurityCredentialsSupplier.getAwsSecurityCredentials(this.supplierContext),
            this.region,
          )));
        let e = await this.awsRequestSigner.getRequestOptions({
            ...Zke.RETRY_CONFIG,
            url: this.regionalCredVerificationUrl.replace("{region}", this.region),
            method: "POST",
          }),
          r = [],
          n = Object.assign({ "x-goog-cloud-target-resource": this.audience }, e.headers);
        for (let o in n) r.push({ key: o, value: n[o] });
        return encodeURIComponent(JSON.stringify({ url: e.url, method: e.method, headers: r }));
      }
    };
  zee.AwsClient = Wee;
  Zke = Wee;
  Jkr = { value: "https://sts.{region}.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15" };
  Wee.AWS_EC2_METADATA_IPV4_ADDRESS = "169.254.169.254";
  Wee.AWS_EC2_METADATA_IPV6_ADDRESS = "fd00:ec2::254";
});