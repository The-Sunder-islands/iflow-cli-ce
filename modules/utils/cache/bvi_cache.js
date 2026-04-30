/**
 * @module bvi
 * @category utils/cache
 * @label cache
 * @position 1803 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bvi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bvi = T((Qwe) => {
  "use strict";
  var hMa = (_v(), bt(_N)),
    gMa = (L3r(), bt(j2i)),
    my = vA(),
    jwe = aI(),
    bMa = Ae("fs"),
    AMa =
      ({ logger: t, signingName: e } = {}) =>
      async () => {
        if ((t?.debug?.("@aws-sdk/token-providers - fromEnvSigningName"), !e))
          throw new my.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
            logger: t,
          });
        let r = gMa.getBearerTokenEnvKey(e);
        if (!(r in process.env))
          throw new my.TokenProviderError(`Token not present in '${r}' environment variable`, { logger: t });
        let n = { token: process.env[r] };
        return (hMa.setTokenFeature(n, "BEARER_SERVICE_ENV_VARS", "3"), n);
      },
    yMa = 300 * 1e3,
    MAr = "To refresh this SSO session run 'aws sso login' with the corresponding profile.",
    _Ma = async (t, e = {}, r) => {
      let { SSOOIDCClient: n } = await Promise.resolve().then(() => (LAr(), BAr)),
        o = (a) => e.clientConfig?.[a] ?? e.parentClientConfig?.[a] ?? r?.[a];
      return new n(
        Object.assign({}, e.clientConfig ?? {}, {
          region: t ?? e.clientConfig?.region,
          logger: o("logger"),
          userAgentAppId: o("userAgentAppId"),
        }),
      );
    },
    EMa = async (t, e, r = {}, n) => {
      let { CreateTokenCommand: o } = await Promise.resolve().then(() => (LAr(), BAr));
      return (await _Ma(e, r, n)).send(
        new o({
          clientId: t.clientId,
          clientSecret: t.clientSecret,
          refreshToken: t.refreshToken,
          grantType: "refresh_token",
        }),
      );
    },
    pvi = (t) => {
      if (t.expiration && t.expiration.getTime() < Date.now())
        throw new my.TokenProviderError(`Token is expired. ${MAr}`, !1);
    },
    DK = (t, e, r = !1) => {
      if (typeof e > "u")
        throw new my.TokenProviderError(
          `Value not present for '${t}' in SSO Token${r ? ". Cannot refresh" : ""}. ${MAr}`,
          !1,
        );
    },
    { writeFile: vMa } = bMa.promises,
    CMa = (t, e) => {
      let r = jwe.getSSOTokenFilepath(t),
        n = JSON.stringify(e, null, 2);
      return vMa(r, n);
    },
    hvi = new Date(0),
    gvi =
      (t = {}) =>
      async ({ callerClientConfig: e } = {}) => {
        t.logger?.debug("@aws-sdk/token-providers - fromSso");
        let r = await jwe.parseKnownFiles(t),
          n = jwe.getProfileName({ profile: t.profile ?? e?.profile }),
          o = r[n];
        if (o) {
          if (!o.sso_session)
            throw new my.TokenProviderError(`Profile '${n}' is missing required property 'sso_session'.`);
        } else throw new my.TokenProviderError(`Profile '${n}' could not be found in shared credentials file.`, !1);
        let s = o.sso_session,
          u = (await jwe.loadSsoSessionData(t))[s];
        if (!u)
          throw new my.TokenProviderError(`Sso session '${s}' could not be found in shared credentials file.`, !1);
        for (let h of ["sso_start_url", "sso_region"])
          if (!u[h]) throw new my.TokenProviderError(`Sso session '${s}' is missing required property '${h}'.`, !1);
        u.sso_start_url;
        let c = u.sso_region,
          m;
        try {
          m = await jwe.getSSOTokenFromFile(s);
        } catch {
          throw new my.TokenProviderError(
            `The SSO session token associated with profile=${n} was not found or is invalid. ${MAr}`,
            !1,
          );
        }
        (DK("accessToken", m.accessToken), DK("expiresAt", m.expiresAt));
        let { accessToken: d, expiresAt: f } = m,
          p = { token: d, expiration: new Date(f) };
        if (p.expiration.getTime() - Date.now() > yMa) return p;
        if (Date.now() - hvi.getTime() < 30 * 1e3) return (pvi(p), p);
        (DK("clientId", m.clientId, !0),
          DK("clientSecret", m.clientSecret, !0),
          DK("refreshToken", m.refreshToken, !0));
        try {
          hvi.setTime(Date.now());
          let h = await EMa(m, c, t, e);
          (DK("accessToken", h.accessToken), DK("expiresIn", h.expiresIn));
          let g = new Date(Date.now() + h.expiresIn * 1e3);
          try {
            await CMa(s, {
              ...m,
              accessToken: h.accessToken,
              expiresAt: g.toISOString(),
              refreshToken: h.refreshToken,
            });
          } catch {}
          return { token: h.accessToken, expiration: g };
        } catch {
          return (pvi(p), p);
        }
      },
    SMa =
      ({ token: t, logger: e }) =>
      async () => {
        if ((e?.debug("@aws-sdk/token-providers - fromStatic"), !t || !t.token))
          throw new my.TokenProviderError("Please pass a valid token to fromStatic", !1);
        return t;
      },
    wMa = (t = {}) =>
      my.memoize(
        my.chain(gvi(t), async () => {
          throw new my.TokenProviderError("Could not load token from any providers", !1);
        }),
        (e) => e.expiration !== void 0 && e.expiration.getTime() - Date.now() < 3e5,
        (e) => e.expiration !== void 0,
      );
  Qwe.fromEnvSigningName = AMa;
  Qwe.fromSso = gvi;
  Qwe.fromStatic = SMa;
  Qwe.nodeProvider = wMa;
});