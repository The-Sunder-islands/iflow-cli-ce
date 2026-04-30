/**
 * @module Swe
 * @category utils/oop
 * @label oop
 * @position 1791 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Swe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Swe = T((wA) => {
  "use strict";
  var fI = vA(),
    rBa = Ae("url"),
    nBa = Ae("buffer"),
    iBa = Ae("http"),
    gAr = uI(),
    oBa = PN();
  function Cwe(t) {
    return new Promise((e, r) => {
      let n = iBa.request({ method: "GET", ...t, hostname: t.hostname?.replace(/^\[(.+)\]$/, "$1") });
      (n.on("error", (o) => {
        (r(Object.assign(new fI.ProviderError("Unable to connect to instance metadata service"), o)), n.destroy());
      }),
        n.on("timeout", () => {
          (r(new fI.ProviderError("TimeoutError from instance metadata service")), n.destroy());
        }),
        n.on("response", (o) => {
          let { statusCode: s = 400 } = o;
          (s < 200 || 300 <= s) &&
            (r(
              Object.assign(new fI.ProviderError("Error response received from instance metadata service"), {
                statusCode: s,
              }),
            ),
            n.destroy());
          let a = [];
          (o.on("data", (u) => {
            a.push(u);
          }),
            o.on("end", () => {
              (e(nBa.Buffer.concat(a)), n.destroy());
            }));
        }),
        n.end());
    });
  }
  var x_i = (t) =>
      !!t &&
      typeof t == "object" &&
      typeof t.AccessKeyId == "string" &&
      typeof t.SecretAccessKey == "string" &&
      typeof t.Token == "string" &&
      typeof t.Expiration == "string",
    T_i = (t) => ({
      accessKeyId: t.AccessKeyId,
      secretAccessKey: t.SecretAccessKey,
      sessionToken: t.Token,
      expiration: new Date(t.Expiration),
      ...(t.AccountId && { accountId: t.AccountId }),
    }),
    D_i = 1e3,
    I_i = 0,
    bAr = ({ maxRetries: t = I_i, timeout: e = D_i }) => ({ maxRetries: t, timeout: e }),
    fAr = (t, e) => {
      let r = t();
      for (let n = 0; n < e; n++) r = r.catch(t);
      return r;
    },
    Hmt = "AWS_CONTAINER_CREDENTIALS_FULL_URI",
    Vmt = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
    pAr = "AWS_CONTAINER_AUTHORIZATION_TOKEN",
    sBa = (t = {}) => {
      let { timeout: e, maxRetries: r } = bAr(t);
      return () =>
        fAr(async () => {
          let n = await mBa({ logger: t.logger }),
            o = JSON.parse(await aBa(e, n));
          if (!x_i(o))
            throw new fI.CredentialsProviderError("Invalid response received from instance metadata service.", {
              logger: t.logger,
            });
          return T_i(o);
        }, r);
    },
    aBa = async (t, e) => (
      process.env[pAr] && (e.headers = { ...e.headers, Authorization: process.env[pAr] }),
      (await Cwe({ ...e, timeout: t })).toString()
    ),
    uBa = "169.254.170.2",
    cBa = { localhost: !0, "127.0.0.1": !0 },
    lBa = { "http:": !0, "https:": !0 },
    mBa = async ({ logger: t }) => {
      if (process.env[Vmt]) return { hostname: uBa, path: process.env[Vmt] };
      if (process.env[Hmt]) {
        let e = rBa.parse(process.env[Hmt]);
        if (!e.hostname || !(e.hostname in cBa))
          throw new fI.CredentialsProviderError(`${e.hostname} is not a valid container metadata service hostname`, {
            tryNextLink: !1,
            logger: t,
          });
        if (!e.protocol || !(e.protocol in lBa))
          throw new fI.CredentialsProviderError(`${e.protocol} is not a valid container metadata service protocol`, {
            tryNextLink: !1,
            logger: t,
          });
        return { ...e, port: e.port ? parseInt(e.port, 10) : void 0 };
      }
      throw new fI.CredentialsProviderError(
        `The container metadata credential provider cannot be used unless the ${Vmt} or ${Hmt} environment variable is set`,
        { tryNextLink: !1, logger: t },
      );
    },
    hAr = class t extends fI.CredentialsProviderError {
      tryNextLink;
      name = "InstanceMetadataV1FallbackError";
      constructor(e, r = !0) {
        (super(e, r), (this.tryNextLink = r), Object.setPrototypeOf(this, t.prototype));
      }
    };
  wA.Endpoint = void 0;
  (function (t) {
    ((t.IPv4 = "http://169.254.169.254"), (t.IPv6 = "http://[fd00:ec2::254]"));
  })(wA.Endpoint || (wA.Endpoint = {}));
  var dBa = "AWS_EC2_METADATA_SERVICE_ENDPOINT",
    fBa = "ec2_metadata_service_endpoint",
    pBa = { environmentVariableSelector: (t) => t[dBa], configFileSelector: (t) => t[fBa], default: void 0 },
    sde;
  (function (t) {
    ((t.IPv4 = "IPv4"), (t.IPv6 = "IPv6"));
  })(sde || (sde = {}));
  var hBa = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE",
    gBa = "ec2_metadata_service_endpoint_mode",
    bBa = { environmentVariableSelector: (t) => t[hBa], configFileSelector: (t) => t[gBa], default: sde.IPv4 },
    R_i = async () => oBa.parseUrl((await ABa()) || (await yBa())),
    ABa = async () => gAr.loadConfig(pBa)(),
    yBa = async () => {
      let t = await gAr.loadConfig(bBa)();
      switch (t) {
        case sde.IPv4:
          return wA.Endpoint.IPv4;
        case sde.IPv6:
          return wA.Endpoint.IPv6;
        default:
          throw new Error(`Unsupported endpoint mode: ${t}. Select from ${Object.values(sde)}`);
      }
    },
    _Ba = 300,
    EBa = 300,
    vBa = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html",
    C_i = (t, e) => {
      let r = _Ba + Math.floor(Math.random() * EBa),
        n = new Date(Date.now() + r * 1e3);
      e.warn(
        `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(n)}.
For more information, please visit: ` + vBa,
      );
      let o = t.originalExpiration ?? t.expiration;
      return { ...t, ...(o ? { originalExpiration: o } : {}), expiration: n };
    },
    CBa = (t, e = {}) => {
      let r = e?.logger || console,
        n;
      return async () => {
        let o;
        try {
          ((o = await t()), o.expiration && o.expiration.getTime() < Date.now() && (o = C_i(o, r)));
        } catch (s) {
          if (n) (r.warn("Credential renew failed: ", s), (o = C_i(n, r)));
          else throw s;
        }
        return ((n = o), o);
      };
    },
    k_i = "/latest/meta-data/iam/security-credentials/",
    SBa = "/latest/api/token",
    dAr = "AWS_EC2_METADATA_V1_DISABLED",
    S_i = "ec2_metadata_v1_disabled",
    w_i = "x-aws-ec2-metadata-token",
    wBa = (t = {}) => CBa(xBa(t), { logger: t.logger }),
    xBa = (t = {}) => {
      let e = !1,
        { logger: r, profile: n } = t,
        { timeout: o, maxRetries: s } = bAr(t),
        a = async (u, c) => {
          if (e || c.headers?.[w_i] == null) {
            let f = !1,
              p = !1,
              h = await gAr.loadConfig(
                {
                  environmentVariableSelector: (g) => {
                    let b = g[dAr];
                    if (((p = !!b && b !== "false"), b === void 0))
                      throw new fI.CredentialsProviderError(`${dAr} not set in env, checking config file next.`, {
                        logger: t.logger,
                      });
                    return p;
                  },
                  configFileSelector: (g) => {
                    let b = g[S_i];
                    return ((f = !!b && b !== "false"), f);
                  },
                  default: !1,
                },
                { profile: n },
              )();
            if (t.ec2MetadataV1Disabled || h) {
              let g = [];
              throw (
                t.ec2MetadataV1Disabled &&
                  g.push("credential provider initialization (runtime option ec2MetadataV1Disabled)"),
                f && g.push(`config file profile (${S_i})`),
                p && g.push(`process environment variable (${dAr})`),
                new hAr(
                  `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${g.join(", ")}].`,
                )
              );
            }
          }
          let d = (
            await fAr(async () => {
              let f;
              try {
                f = await DBa(c);
              } catch (p) {
                throw (p.statusCode === 401 && (e = !1), p);
              }
              return f;
            }, u)
          ).trim();
          return fAr(async () => {
            let f;
            try {
              f = await IBa(d, c, t);
            } catch (p) {
              throw (p.statusCode === 401 && (e = !1), p);
            }
            return f;
          }, u);
        };
      return async () => {
        let u = await R_i();
        if (e)
          return (
            r?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"),
            a(s, { ...u, timeout: o })
          );
        {
          let c;
          try {
            c = (await TBa({ ...u, timeout: o })).toString();
          } catch (m) {
            if (m?.statusCode === 400) throw Object.assign(m, { message: "EC2 Metadata token request returned error" });
            return (
              (m.message === "TimeoutError" || [403, 404, 405].includes(m.statusCode)) && (e = !0),
              r?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"),
              a(s, { ...u, timeout: o })
            );
          }
          return a(s, { ...u, headers: { [w_i]: c }, timeout: o });
        }
      };
    },
    TBa = async (t) =>
      Cwe({ ...t, path: SBa, method: "PUT", headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" } }),
    DBa = async (t) => (await Cwe({ ...t, path: k_i })).toString(),
    IBa = async (t, e, r) => {
      let n = JSON.parse((await Cwe({ ...e, path: k_i + t })).toString());
      if (!x_i(n))
        throw new fI.CredentialsProviderError("Invalid response received from instance metadata service.", {
          logger: r.logger,
        });
      return T_i(n);
    };
  wA.DEFAULT_MAX_RETRIES = I_i;
  wA.DEFAULT_TIMEOUT = D_i;
  wA.ENV_CMDS_AUTH_TOKEN = pAr;
  wA.ENV_CMDS_FULL_URI = Hmt;
  wA.ENV_CMDS_RELATIVE_URI = Vmt;
  wA.fromContainerMetadata = sBa;
  wA.fromInstanceMetadata = wBa;
  wA.getInstanceMetadataEndpoint = R_i;
  wA.httpRequest = Cwe;
  wA.providerConfigFromInit = bAr;
});