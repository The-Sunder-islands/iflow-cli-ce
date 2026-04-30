/**
 * @module b9
 * @category network/tls
 * @label tls
 * @position 1769 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (b9) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var b9 = T((Vg) => {
  "use strict";
  var U$ = pmt(),
    Emt = Hg(),
    jOa = F$(),
    U9i = "AWS_USE_DUALSTACK_ENDPOINT",
    $9i = "use_dualstack_endpoint",
    QOa = !1,
    GOa = {
      environmentVariableSelector: (t) => U$.booleanSelector(t, U9i, U$.SelectorType.ENV),
      configFileSelector: (t) => U$.booleanSelector(t, $9i, U$.SelectorType.CONFIG),
      default: !1,
    },
    j9i = "AWS_USE_FIPS_ENDPOINT",
    Q9i = "use_fips_endpoint",
    qOa = !1,
    HOa = {
      environmentVariableSelector: (t) => U$.booleanSelector(t, j9i, U$.SelectorType.ENV),
      configFileSelector: (t) => U$.booleanSelector(t, Q9i, U$.SelectorType.CONFIG),
      default: !1,
    },
    VOa = (t) => {
      let { tls: e, endpoint: r, urlParser: n, useDualstackEndpoint: o } = t;
      return Object.assign(t, {
        tls: e ?? !0,
        endpoint: Emt.normalizeProvider(typeof r == "string" ? n(r) : r),
        isCustomEndpoint: !0,
        useDualstackEndpoint: Emt.normalizeProvider(o ?? !1),
      });
    },
    WOa = async (t) => {
      let { tls: e = !0 } = t,
        r = await t.region();
      if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(r))
        throw new Error("Invalid region in client config");
      let o = await t.useDualstackEndpoint(),
        s = await t.useFipsEndpoint(),
        { hostname: a } = (await t.regionInfoProvider(r, { useDualstackEndpoint: o, useFipsEndpoint: s })) ?? {};
      if (!a) throw new Error("Cannot resolve hostname from client config");
      return t.urlParser(`${e ? "https:" : "http:"}//${a}`);
    },
    zOa = (t) => {
      let e = Emt.normalizeProvider(t.useDualstackEndpoint ?? !1),
        { endpoint: r, useFipsEndpoint: n, urlParser: o, tls: s } = t;
      return Object.assign(t, {
        tls: s ?? !0,
        endpoint: r
          ? Emt.normalizeProvider(typeof r == "string" ? o(r) : r)
          : () => WOa({ ...t, useDualstackEndpoint: e, useFipsEndpoint: n }),
        isCustomEndpoint: !!r,
        useDualstackEndpoint: e,
      });
    },
    G9i = "AWS_REGION",
    q9i = "region",
    YOa = {
      environmentVariableSelector: (t) => t[G9i],
      configFileSelector: (t) => t[q9i],
      default: () => {
        throw new Error("Region is missing");
      },
    },
    KOa = { preferredFile: "credentials" },
    M9i = new Set(),
    JOa = (t, e = jOa.isValidHostLabel) => {
      if (!M9i.has(t) && !e(t))
        if (t === "*")
          console.warn(
            '@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.',
          );
        else throw new Error(`Region not accepted: region="${t}" is not a valid hostname component.`);
      else M9i.add(t);
    },
    H9i = (t) => typeof t == "string" && (t.startsWith("fips-") || t.endsWith("-fips")),
    XOa = (t) =>
      H9i(t)
        ? ["fips-aws-global", "aws-fips"].includes(t)
          ? "us-east-1"
          : t.replace(/fips-(dkr-|prod-)?|-fips/, "")
        : t,
    ZOa = (t) => {
      let { region: e, useFipsEndpoint: r } = t;
      if (!e) throw new Error("Region is missing");
      return Object.assign(t, {
        region: async () => {
          let n = typeof e == "function" ? await e() : e,
            o = XOa(n);
          return (JOa(o), o);
        },
        useFipsEndpoint: async () => {
          let n = typeof e == "string" ? e : await e();
          return H9i(n) ? !0 : typeof r != "function" ? Promise.resolve(!!r) : r();
        },
      });
    },
    F9i = (t = [], { useFipsEndpoint: e, useDualstackEndpoint: r }) =>
      t.find(({ tags: n }) => e === n.includes("fips") && r === n.includes("dualstack"))?.hostname,
    eNa = (t, { regionHostname: e, partitionHostname: r }) => e || (r ? r.replace("{region}", t) : void 0),
    tNa = (t, { partitionHash: e }) => Object.keys(e || {}).find((r) => e[r].regions.includes(t)) ?? "aws",
    rNa = (t, { signingRegion: e, regionRegex: r, useFipsEndpoint: n }) => {
      if (e) return e;
      if (n) {
        let o = r.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."),
          s = t.match(o);
        if (s) return s[0].slice(1, -1);
      }
    },
    nNa = (
      t,
      { useFipsEndpoint: e = !1, useDualstackEndpoint: r = !1, signingService: n, regionHash: o, partitionHash: s },
    ) => {
      let a = tNa(t, { partitionHash: s }),
        u = t in o ? t : (s[a]?.endpoint ?? t),
        c = { useFipsEndpoint: e, useDualstackEndpoint: r },
        m = F9i(o[u]?.variants, c),
        d = F9i(s[a]?.variants, c),
        f = eNa(u, { regionHostname: m, partitionHostname: d });
      if (f === void 0)
        throw new Error(
          `Endpoint resolution failed for: ${{ resolvedRegion: u, useFipsEndpoint: e, useDualstackEndpoint: r }}`,
        );
      let p = rNa(f, { signingRegion: o[u]?.signingRegion, regionRegex: s[a].regionRegex, useFipsEndpoint: e });
      return {
        partition: a,
        signingService: n,
        hostname: f,
        ...(p && { signingRegion: p }),
        ...(o[u]?.signingService && { signingService: o[u].signingService }),
      };
    };
  Vg.CONFIG_USE_DUALSTACK_ENDPOINT = $9i;
  Vg.CONFIG_USE_FIPS_ENDPOINT = Q9i;
  Vg.DEFAULT_USE_DUALSTACK_ENDPOINT = QOa;
  Vg.DEFAULT_USE_FIPS_ENDPOINT = qOa;
  Vg.ENV_USE_DUALSTACK_ENDPOINT = U9i;
  Vg.ENV_USE_FIPS_ENDPOINT = j9i;
  Vg.NODE_REGION_CONFIG_FILE_OPTIONS = KOa;
  Vg.NODE_REGION_CONFIG_OPTIONS = YOa;
  Vg.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = GOa;
  Vg.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = HOa;
  Vg.REGION_ENV_NAME = G9i;
  Vg.REGION_INI_NAME = q9i;
  Vg.getRegionInfo = nNa;
  Vg.resolveCustomEndpointsConfig = VOa;
  Vg.resolveEndpointsConfig = zOa;
  Vg.resolveRegionConfig = ZOa;
});