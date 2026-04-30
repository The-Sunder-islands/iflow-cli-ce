/**
 * @module mAt
 * @category utils/versioning
 * @label versioning
 * @position 1966 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mAt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mAt = T((Jxl, Lto) => {
  "use strict";
  var YEr = w1e(),
    Pto = xTe(),
    x3u = NA(),
    Bto = Z9r(),
    T3u = hJ(),
    D3u = r6r(),
    I3u = n6r(),
    R3u = Aeo(),
    k3u = aEr(),
    O3u = _eo(),
    N3u = veo(),
    P3u = Seo(),
    B3u = xeo(),
    L3u = zv(),
    M3u = Deo(),
    F3u = Reo(),
    U3u = iAt(),
    $3u = Peo(),
    j3u = Leo(),
    Q3u = Tfe(),
    G3u = oAt(),
    q3u = LEr(),
    H3u = MEr(),
    V3u = sAt(),
    W3u = aAt(),
    z3u = FEr(),
    Y3u = qeo(),
    K3u = NDe(),
    J3u = Yv(),
    X3u = BDe(),
    Z3u = oto(),
    egu = ato(),
    tgu = cto(),
    rgu = dto(),
    ngu = pto(),
    igu = lAt(),
    ogu = _to(),
    sgu = vto(),
    agu = wto(),
    ugu = Tto(),
    cgu = Nto();
  Lto.exports = {
    parse: T3u,
    valid: D3u,
    clean: I3u,
    inc: R3u,
    diff: k3u,
    major: O3u,
    minor: N3u,
    patch: P3u,
    prerelease: B3u,
    compare: L3u,
    rcompare: M3u,
    compareLoose: F3u,
    compareBuild: U3u,
    sort: $3u,
    rsort: j3u,
    gt: Q3u,
    lt: G3u,
    eq: q3u,
    neq: H3u,
    gte: V3u,
    lte: W3u,
    cmp: z3u,
    coerce: Y3u,
    Comparator: K3u,
    Range: J3u,
    satisfies: X3u,
    toComparators: Z3u,
    maxSatisfying: egu,
    minSatisfying: tgu,
    minVersion: rgu,
    validRange: ngu,
    outside: igu,
    gtr: ogu,
    ltr: sgu,
    intersects: agu,
    simplifyRange: ugu,
    subset: cgu,
    SemVer: x3u,
    re: YEr.re,
    src: YEr.src,
    tokens: YEr.t,
    SEMVER_SPEC_VERSION: Pto.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: Pto.RELEASE_TYPES,
    compareIdentifiers: Bto.compareIdentifiers,
    rcompareIdentifiers: Bto.rcompareIdentifiers,
  };
});
async function XEr(t, e = {}) {
  let { version: r = "latest" } = e,
    { omitDeprecated: n = !0 } = e,
    o = t.split("/")[0],
    s = e.registryUrl ?? vEr(o),
    a = new URL(encodeURIComponent(t).replace(/^%40/, "@"), s),
    u = (0, Mto.default)(s.toString(), { recursive: !0 }),
    c = { accept: "application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*" };
  (e.fullMetadata && delete c.accept, u && (c.authorization = `${u.type} ${u.token}`));
  let m;
  try {
    m = await VXi(a, { headers: c, keepalive: !0 }).json();
  } catch (f) {
    throw f?.response?.status === 404 ? new KEr(t) : f;
  }
  if (e.allVersions) return m;
  let d = new JEr(t, r);
  if (m["dist-tags"][r]) {
    let { time: f } = m;
    ((m = m.versions[m["dist-tags"][r]]), (m.time = f));
  } else if (r) {
    let f = !!m.versions[r];
    if (n && !f) for (let [h, g] of Object.entries(m.versions)) g.deprecated && delete m.versions[h];
    if (!f) {
      let h = Object.keys(m.versions);
      if (((r = Fto.default.maxSatisfying(h, r)), !r)) throw d;
    }
    let { time: p } = m;
    if (((m = m.versions[r]), (m.time = p), !m)) throw d;
  }
  return m;
}
var Mto,
  Fto,
  KEr,
  JEr,
  Uto = j(() => {
    WXi();
    AZi();
    ((Mto = Se(heo(), 1)),
      (Fto = Se(mAt(), 1)),
      (KEr = class extends Error {
        constructor(e) {
          (super(`Package \`${e}\` could not be found`), (this.name = "PackageNotFoundError"));
        }
      }),
      (JEr = class extends Error {
        constructor(e, r) {
          (super(`Version \`${r}\` for package \`${e}\` could not be found`), (this.name = "VersionNotFoundError"));
        }
      }));
  });
async function ZEr(t, e) {
  let { version: r } = await XEr(t.toLowerCase(), e);
  return r;
}
var $to = j(() => {
  Uto();
});
import jto from "node:process";
var lgu,
  dAt,
  mgu,
  dgu,
  iTl,
  oTl,
  Qto,
  Gto = j(() => {
    ((lgu = jto.env.npm_package_json),
      (dAt = jto.env.npm_config_user_agent),
      (mgu = !!dAt?.startsWith("npm") || !!lgu?.endsWith("package.json")),
      (dgu = !!dAt?.startsWith("yarn")),
      (iTl = !!dAt?.startsWith("pnpm")),
      (oTl = !!dAt?.startsWith("bun")),
      (Qto = mgu || dgu));
  });