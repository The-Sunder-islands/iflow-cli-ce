/**
 * @module Uwi
 * @category unknown
 * @label unknown
 * @position 1818 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Uwi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Uwi = T((Fwi) => {
  "use strict";
  var R2r = aI(),
    dxe = vA(),
    UN = (_v(), bt(_N)),
    j$a = H4i(),
    Q$a = (t, e, r) => {
      let n = {
        EcsContainer: async (o) => {
          let { fromHttp: s } = await Promise.resolve().then(() => Se(yAr())),
            { fromContainerMetadata: a } = await Promise.resolve().then(() => Se(Swe()));
          return (
            r?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer"),
            async () =>
              dxe
                .chain(s(o ?? {}), a(o))()
                .then(I2r)
          );
        },
        Ec2InstanceMetadata: async (o) => {
          r?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
          let { fromInstanceMetadata: s } = await Promise.resolve().then(() => Se(Swe()));
          return async () => s(o)().then(I2r);
        },
        Environment: async (o) => {
          r?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
          let { fromEnv: s } = await Promise.resolve().then(() => Se(mAr()));
          return async () => s(o)().then(I2r);
        },
      };
      if (t in n) return n[t];
      throw new dxe.CredentialsProviderError(
        `Unsupported credential source in profile ${e}. Got ${t}, expected EcsContainer or Ec2InstanceMetadata or Environment.`,
        { logger: r },
      );
    },
    I2r = (t) => UN.setCredentialFeature(t, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p"),
    G$a = (t, { profile: e = "default", logger: r } = {}) =>
      !!t &&
      typeof t == "object" &&
      typeof t.role_arn == "string" &&
      ["undefined", "string"].indexOf(typeof t.role_session_name) > -1 &&
      ["undefined", "string"].indexOf(typeof t.external_id) > -1 &&
      ["undefined", "string"].indexOf(typeof t.mfa_serial) > -1 &&
      (q$a(t, { profile: e, logger: r }) || H$a(t, { profile: e, logger: r })),
    q$a = (t, { profile: e, logger: r }) => {
      let n = typeof t.source_profile == "string" && typeof t.credential_source > "u";
      return (n && r?.debug?.(`    ${e} isAssumeRoleWithSourceProfile source_profile=${t.source_profile}`), n);
    },
    H$a = (t, { profile: e, logger: r }) => {
      let n = typeof t.credential_source == "string" && typeof t.source_profile > "u";
      return (n && r?.debug?.(`    ${e} isCredentialSourceProfile credential_source=${t.credential_source}`), n);
    },
    V$a = async (t, e, r, n, o = {}, s) => {
      r.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
      let a = e[t],
        { source_profile: u, region: c } = a;
      if (!r.roleAssumer) {
        let { getDefaultRoleAssumer: d } = await Promise.resolve().then(() => (C2r(), v2r));
        r.roleAssumer = d(
          {
            ...r.clientConfig,
            credentialProviderLogger: r.logger,
            parentClientConfig: {
              ...n,
              ...r?.parentClientConfig,
              region: c ?? r?.parentClientConfig?.region ?? n?.region,
            },
          },
          r.clientPlugins,
        );
      }
      if (u && u in o)
        throw new dxe.CredentialsProviderError(
          `Detected a cycle attempting to resolve credentials for profile ${R2r.getProfileName(r)}. Profiles visited: ` +
            Object.keys(o).join(", "),
          { logger: r.logger },
        );
      r.logger?.debug(
        `@aws-sdk/credential-provider-ini - finding credential resolver using ${u ? `source_profile=[${u}]` : `profile=[${t}]`}`,
      );
      let m = u
        ? s(u, e, r, n, { ...o, [u]: !0 }, Pwi(e[u] ?? {}))
        : (await Q$a(a.credential_source, t, r.logger)(r))();
      if (Pwi(a)) return m.then((d) => UN.setCredentialFeature(d, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      {
        let d = {
            RoleArn: a.role_arn,
            RoleSessionName: a.role_session_name || `aws-sdk-js-${Date.now()}`,
            ExternalId: a.external_id,
            DurationSeconds: parseInt(a.duration_seconds || "3600", 10),
          },
          { mfa_serial: f } = a;
        if (f) {
          if (!r.mfaCodeProvider)
            throw new dxe.CredentialsProviderError(
              `Profile ${t} requires multi-factor authentication, but no MFA code callback was provided.`,
              { logger: r.logger, tryNextLink: !1 },
            );
          ((d.SerialNumber = f), (d.TokenCode = await r.mfaCodeProvider(f)));
        }
        let p = await m;
        return r.roleAssumer(p, d).then((h) => UN.setCredentialFeature(h, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
      }
    },
    Pwi = (t) => !t.role_arn && !!t.credential_source,
    W$a = (t) => !!(t && t.login_session),
    z$a = async (t, e, r) => {
      let n = await j$a.fromLoginCredentials({ ...e, profile: t })({ callerClientConfig: r });
      return UN.setCredentialFeature(n, "CREDENTIALS_PROFILE_LOGIN", "AC");
    },
    Y$a = (t) => !!t && typeof t == "object" && typeof t.credential_process == "string",
    K$a = async (t, e) =>
      Promise.resolve()
        .then(() => Se(x2r()))
        .then(({ fromProcess: r }) =>
          r({ ...t, profile: e })().then((n) => UN.setCredentialFeature(n, "CREDENTIALS_PROFILE_PROCESS", "v")),
        ),
    J$a = async (t, e, r = {}, n) => {
      let { fromSSO: o } = await Promise.resolve().then(() => Se(qAr()));
      return o({
        profile: t,
        logger: r.logger,
        parentClientConfig: r.parentClientConfig,
        clientConfig: r.clientConfig,
      })({ callerClientConfig: n }).then((s) =>
        e.sso_session
          ? UN.setCredentialFeature(s, "CREDENTIALS_PROFILE_SSO", "r")
          : UN.setCredentialFeature(s, "CREDENTIALS_PROFILE_SSO_LEGACY", "t"),
      );
    },
    X$a = (t) =>
      t &&
      (typeof t.sso_start_url == "string" ||
        typeof t.sso_account_id == "string" ||
        typeof t.sso_session == "string" ||
        typeof t.sso_region == "string" ||
        typeof t.sso_role_name == "string"),
    Bwi = (t) =>
      !!t &&
      typeof t == "object" &&
      typeof t.aws_access_key_id == "string" &&
      typeof t.aws_secret_access_key == "string" &&
      ["undefined", "string"].indexOf(typeof t.aws_session_token) > -1 &&
      ["undefined", "string"].indexOf(typeof t.aws_account_id) > -1,
    Lwi = async (t, e) => {
      e?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
      let r = {
        accessKeyId: t.aws_access_key_id,
        secretAccessKey: t.aws_secret_access_key,
        sessionToken: t.aws_session_token,
        ...(t.aws_credential_scope && { credentialScope: t.aws_credential_scope }),
        ...(t.aws_account_id && { accountId: t.aws_account_id }),
      };
      return UN.setCredentialFeature(r, "CREDENTIALS_PROFILE", "n");
    },
    Z$a = (t) =>
      !!t &&
      typeof t == "object" &&
      typeof t.web_identity_token_file == "string" &&
      typeof t.role_arn == "string" &&
      ["undefined", "string"].indexOf(typeof t.role_session_name) > -1,
    eja = async (t, e, r) =>
      Promise.resolve()
        .then(() => Se(D2r()))
        .then(({ fromTokenFile: n }) =>
          n({
            webIdentityTokenFile: t.web_identity_token_file,
            roleArn: t.role_arn,
            roleSessionName: t.role_session_name,
            roleAssumerWithWebIdentity: e.roleAssumerWithWebIdentity,
            logger: e.logger,
            parentClientConfig: e.parentClientConfig,
          })({ callerClientConfig: r }).then((o) =>
            UN.setCredentialFeature(o, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q"),
          ),
        ),
    Mwi = async (t, e, r, n, o = {}, s = !1) => {
      let a = e[t];
      if (Object.keys(o).length > 0 && Bwi(a)) return Lwi(a, r);
      if (s || G$a(a, { profile: t, logger: r.logger })) return V$a(t, e, r, n, o, Mwi);
      if (Bwi(a)) return Lwi(a, r);
      if (Z$a(a)) return eja(a, r, n);
      if (Y$a(a)) return K$a(r, t);
      if (X$a(a)) return await J$a(t, a, r, n);
      if (W$a(a)) return z$a(t, r, n);
      throw new dxe.CredentialsProviderError(
        `Could not resolve credentials using profile: [${t}] in configuration/credentials file(s).`,
        { logger: r.logger },
      );
    },
    tja =
      (t = {}) =>
      async ({ callerClientConfig: e } = {}) => {
        t.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
        let r = await R2r.parseKnownFiles(t);
        return Mwi(R2r.getProfileName({ profile: t.profile ?? e?.profile }), r, t, e);
      };
  Fwi.fromIni = tja;
});