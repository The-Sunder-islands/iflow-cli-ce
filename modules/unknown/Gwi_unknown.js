/**
 * @module Gwi
 * @category unknown
 * @label unknown
 * @position 1819 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gwi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gwi = T((x1t) => {
  "use strict";
  var k2r = mAr(),
    fxe = vA(),
    rja = aI(),
    $wi = "AWS_EC2_METADATA_DISABLED",
    nja = async (t) => {
      let {
        ENV_CMDS_FULL_URI: e,
        ENV_CMDS_RELATIVE_URI: r,
        fromContainerMetadata: n,
        fromInstanceMetadata: o,
      } = await Promise.resolve().then(() => Se(Swe()));
      if (process.env[r] || process.env[e]) {
        t.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
        let { fromHttp: s } = await Promise.resolve().then(() => Se(yAr()));
        return fxe.chain(s(t), n(t));
      }
      return process.env[$wi] && process.env[$wi] !== "false"
        ? async () => {
            throw new fxe.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
              logger: t.logger,
            });
          }
        : (t.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata"), o(t));
    };
  function ija(t, e) {
    let r = oja(t),
      n,
      o,
      s,
      a = async (u) => {
        if (u?.forceRefresh) return await r(u);
        if ((s?.expiration && s?.expiration?.getTime() < Date.now() && (s = void 0), n)) await n;
        else if (!s || e?.(s))
          if (s)
            o ||
              (o = r(u).then((c) => {
                ((s = c), (o = void 0));
              }));
          else
            return (
              (n = r(u).then((c) => {
                ((s = c), (n = void 0));
              })),
              a(u)
            );
        return s;
      };
    return a;
  }
  var oja = (t) => async (e) => {
      let r;
      for (let n of t)
        try {
          return await n(e);
        } catch (o) {
          if (((r = o), o?.tryNextLink)) continue;
          throw o;
        }
      throw r;
    },
    jwi = !1,
    sja = (t = {}) =>
      ija(
        [
          async () => {
            if (t.profile ?? process.env[rja.ENV_PROFILE])
              throw (
                process.env[k2r.ENV_KEY] &&
                  process.env[k2r.ENV_SECRET] &&
                  (jwi ||
                    ((t.logger?.warn && t.logger?.constructor?.name !== "NoOpLogger"
                      ? t.logger.warn.bind(t.logger)
                      : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`),
                    (jwi = !0))),
                new fxe.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
                  logger: t.logger,
                  tryNextLink: !0,
                })
              );
            return (t.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv"), k2r.fromEnv(t)());
          },
          async (e) => {
            t.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
            let { ssoStartUrl: r, ssoAccountId: n, ssoRegion: o, ssoRoleName: s, ssoSession: a } = t;
            if (!r && !n && !o && !s && !a)
              throw new fxe.CredentialsProviderError(
                "Skipping SSO provider in default chain (inputs do not include SSO fields).",
                { logger: t.logger },
              );
            let { fromSSO: u } = await Promise.resolve().then(() => Se(qAr()));
            return u(t)(e);
          },
          async (e) => {
            t.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
            let { fromIni: r } = await Promise.resolve().then(() => Se(Uwi()));
            return r(t)(e);
          },
          async (e) => {
            t.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
            let { fromProcess: r } = await Promise.resolve().then(() => Se(x2r()));
            return r(t)(e);
          },
          async (e) => {
            t.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
            let { fromTokenFile: r } = await Promise.resolve().then(() => Se(D2r()));
            return r(t)(e);
          },
          async () => (
            t.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider"),
            (await nja(t))()
          ),
          async () => {
            throw new fxe.CredentialsProviderError("Could not load credentials from any providers", {
              tryNextLink: !1,
              logger: t.logger,
            });
          },
        ],
        Qwi,
      ),
    aja = (t) => t?.expiration !== void 0,
    Qwi = (t) => t?.expiration !== void 0 && t.expiration.getTime() - Date.now() < 3e5;
  x1t.credentialsTreatedAsExpired = Qwi;
  x1t.credentialsWillNeedRefresh = aja;
  x1t.defaultProvider = sja;
});