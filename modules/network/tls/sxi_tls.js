/**
 * @module sxi
 * @category network/tls
 * @label tls
 * @position 1820 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sxi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sxi = T((df) => {
  "use strict";
  var ij = pmt(),
    qwi = Zgr(),
    uja = Tc(),
    Hwi = "AWS_S3_DISABLE_MULTIREGION_ACCESS_POINTS",
    Vwi = "s3_disable_multiregion_access_points",
    cja = {
      environmentVariableSelector: (t) => ij.booleanSelector(t, Hwi, ij.SelectorType.ENV),
      configFileSelector: (t) => ij.booleanSelector(t, Vwi, ij.SelectorType.CONFIG),
      default: !1,
    },
    Wwi = "AWS_S3_USE_ARN_REGION",
    zwi = "s3_use_arn_region",
    lja = {
      environmentVariableSelector: (t) => ij.booleanSelector(t, Wwi, ij.SelectorType.ENV),
      configFileSelector: (t) => ij.booleanSelector(t, zwi, ij.SelectorType.CONFIG),
      default: void 0,
    },
    mja = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
    dja = /(\d+\.){3}\d+/,
    fja = /\.\./,
    Ywi = /\./,
    pja = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./,
    Kwi = /^s3(-external-1)?\.amazonaws\.com$/,
    O2r = "amazonaws.com",
    hja = (t) => typeof t.bucketName == "string",
    gja = (t) => mja.test(t) && !dja.test(t) && !fja.test(t),
    Jwi = (t) => {
      let e = t.match(pja);
      return [e[4], t.replace(new RegExp(`^${e[0]}`), "")];
    },
    bja = (t) => (Kwi.test(t) ? ["us-east-1", O2r] : Jwi(t)),
    Xwi = (t) => (Kwi.test(t) ? [t.replace(`.${O2r}`, ""), O2r] : Jwi(t)),
    Aja = (t) => {
      if (t.pathStyleEndpoint) throw new Error("Path-style S3 endpoint is not supported when bucket is an ARN");
      if (t.accelerateEndpoint) throw new Error("Accelerate endpoint is not supported when bucket is an ARN");
      if (!t.tlsCompatible) throw new Error("HTTPS is required when bucket is an ARN");
    },
    yja = (t) => {
      if (t !== "s3" && t !== "s3-outposts" && t !== "s3-object-lambda")
        throw new Error("Expect 's3' or 's3-outposts' or 's3-object-lambda' in ARN service component");
    },
    _ja = (t) => {
      if (t !== "s3") throw new Error("Expect 's3' in Accesspoint ARN service component");
    },
    Zwi = (t) => {
      if (t !== "s3-outposts") throw new Error("Expect 's3-posts' in Outpost ARN service component");
    },
    exi = (t, e) => {
      if (t !== e.clientPartition)
        throw new Error(`Partition in ARN is incompatible, got "${t}" but expected "${e.clientPartition}"`);
    },
    Eja = (t, e) => {},
    P2r = (t) => {
      if (["s3-external-1", "aws-global"].includes(t)) throw new Error(`Client region ${t} is not regional`);
    },
    txi = (t) => {
      if (!/[0-9]{12}/.exec(t)) throw new Error("Access point ARN accountID does not match regex '[0-9]{12}'");
    },
    wde = (t, e = { tlsCompatible: !0 }) => {
      if (
        t.length >= 64 ||
        !/^[a-z0-9][a-z0-9.-]*[a-z0-9]$/.test(t) ||
        /(\d+\.){3}\d+/.test(t) ||
        /[.-]{2}/.test(t) ||
        (e?.tlsCompatible && Ywi.test(t))
      )
        throw new Error(`Invalid DNS label ${t}`);
    },
    vja = (t) => {
      if (t.isCustomEndpoint) {
        if (t.dualstackEndpoint) throw new Error("Dualstack endpoint is not supported with custom endpoint");
        if (t.accelerateEndpoint) throw new Error("Accelerate endpoint is not supported with custom endpoint");
      }
    },
    rxi = (t) => {
      let e = t.includes(":") ? ":" : "/",
        [r, ...n] = t.split(e);
      if (r === "accesspoint") {
        if (n.length !== 1 || n[0] === "")
          throw new Error(`Access Point ARN should have one resource accesspoint${e}{accesspointname}`);
        return { accesspointName: n[0] };
      } else if (r === "outpost") {
        if (!n[0] || n[1] !== "accesspoint" || !n[2] || n.length !== 3)
          throw new Error(
            `Outpost ARN should have resource outpost${e}{outpostId}${e}accesspoint${e}{accesspointName}`,
          );
        let [o, s, a] = n;
        return { outpostId: o, accesspointName: a };
      } else throw new Error(`ARN resource should begin with 'accesspoint${e}' or 'outpost${e}'`);
    },
    Cja = (t) => {},
    nxi = (t) => {
      if (t) throw new Error("FIPS region is not supported with Outpost.");
    },
    Sja = (t) => {
      try {
        t.split(".").forEach((e) => {
          wde(e);
        });
      } catch {
        throw new Error(`"${t}" is not a DNS compatible name.`);
      }
    },
    N2r = (t) => (vja(t), hja(t) ? wja(t) : xja(t)),
    wja = ({
      accelerateEndpoint: t = !1,
      clientRegion: e,
      baseHostname: r,
      bucketName: n,
      dualstackEndpoint: o = !1,
      fipsEndpoint: s = !1,
      pathStyleEndpoint: a = !1,
      tlsCompatible: u = !0,
      isCustomEndpoint: c = !1,
    }) => {
      let [m, d] = c ? [e, r] : bja(r);
      return a || !gja(n) || (u && Ywi.test(n))
        ? { bucketEndpoint: !1, hostname: o ? `s3.dualstack.${m}.${d}` : r }
        : (t ? (r = `s3-accelerate${o ? ".dualstack" : ""}.${d}`) : o && (r = `s3.dualstack.${m}.${d}`),
          { bucketEndpoint: !0, hostname: `${n}.${r}` });
    },
    xja = (t) => {
      let { isCustomEndpoint: e, baseHostname: r, clientRegion: n } = t,
        o = e ? r : Xwi(r)[1],
        {
          pathStyleEndpoint: s,
          accelerateEndpoint: a = !1,
          fipsEndpoint: u = !1,
          tlsCompatible: c = !0,
          bucketName: m,
          clientPartition: d = "aws",
        } = t;
      Aja({ pathStyleEndpoint: s, accelerateEndpoint: a, tlsCompatible: c });
      let { service: f, partition: p, accountId: h, region: g, resource: b } = m;
      (yja(f), exi(p, { clientPartition: d }), txi(h));
      let { accesspointName: A, outpostId: y } = rxi(b);
      return f === "s3-object-lambda"
        ? Tja({ ...t, tlsCompatible: c, bucketName: m, accesspointName: A, hostnameSuffix: o })
        : g === ""
          ? Dja({ ...t, mrapAlias: A, hostnameSuffix: o })
          : y
            ? Ija({ ...t, clientRegion: n, outpostId: y, accesspointName: A, hostnameSuffix: o })
            : Rja({ ...t, clientRegion: n, accesspointName: A, hostnameSuffix: o });
    },
    Tja = ({
      dualstackEndpoint: t = !1,
      fipsEndpoint: e = !1,
      tlsCompatible: r = !0,
      useArnRegion: n,
      clientRegion: o,
      clientSigningRegion: s = o,
      accesspointName: a,
      bucketName: u,
      hostnameSuffix: c,
    }) => {
      let { accountId: m, region: d, service: f } = u;
      P2r(o);
      let p = `${a}-${m}`;
      wde(p, { tlsCompatible: r });
      let h = n ? d : o,
        g = n ? d : s;
      return {
        bucketEndpoint: !0,
        hostname: `${p}.${f}${e ? "-fips" : ""}.${h}.${c}`,
        signingRegion: g,
        signingService: f,
      };
    },
    Dja = ({
      disableMultiregionAccessPoints: t,
      dualstackEndpoint: e = !1,
      isCustomEndpoint: r,
      mrapAlias: n,
      hostnameSuffix: o,
    }) => {
      if (t === !0) throw new Error("SDK is attempting to use a MRAP ARN. Please enable to feature.");
      return (
        Sja(n),
        { bucketEndpoint: !0, hostname: `${n}${r ? "" : ".accesspoint.s3-global"}.${o}`, signingRegion: "*" }
      );
    },
    Ija = ({
      useArnRegion: t,
      clientRegion: e,
      clientSigningRegion: r = e,
      bucketName: n,
      outpostId: o,
      dualstackEndpoint: s = !1,
      fipsEndpoint: a = !1,
      tlsCompatible: u = !0,
      accesspointName: c,
      isCustomEndpoint: m,
      hostnameSuffix: d,
    }) => {
      P2r(e);
      let f = `${c}-${n.accountId}`;
      wde(f, { tlsCompatible: u });
      let p = t ? n.region : e,
        h = t ? n.region : r;
      return (
        Zwi(n.service),
        wde(o, { tlsCompatible: u }),
        nxi(a),
        {
          bucketEndpoint: !0,
          hostname: `${`${f}.${o}`}${m ? "" : `.s3-outposts.${p}`}.${d}`,
          signingRegion: h,
          signingService: "s3-outposts",
        }
      );
    },
    Rja = ({
      useArnRegion: t,
      clientRegion: e,
      clientSigningRegion: r = e,
      bucketName: n,
      dualstackEndpoint: o = !1,
      fipsEndpoint: s = !1,
      tlsCompatible: a = !0,
      accesspointName: u,
      isCustomEndpoint: c,
      hostnameSuffix: m,
    }) => {
      P2r(e);
      let d = `${u}-${n.accountId}`;
      wde(d, { tlsCompatible: a });
      let f = t ? n.region : e,
        p = t ? n.region : r;
      return (
        _ja(n.service),
        {
          bucketEndpoint: !0,
          hostname: `${d}${c ? "" : `.s3-accesspoint${s ? "-fips" : ""}${o ? ".dualstack" : ""}.${f}`}.${m}`,
          signingRegion: p,
        }
      );
    },
    ixi = (t) => (e, r) => async (n) => {
      let { Bucket: o } = n.input,
        s = t.bucketEndpoint,
        a = n.request;
      if (uja.HttpRequest.isInstance(a)) {
        if (t.bucketEndpoint) a.hostname = o;
        else if (qwi.validate(o)) {
          let u = qwi.parse(o),
            c = await t.region(),
            m = await t.useDualstackEndpoint(),
            d = await t.useFipsEndpoint(),
            { partition: f, signingRegion: p = c } =
              (await t.regionInfoProvider(c, { useDualstackEndpoint: m, useFipsEndpoint: d })) || {},
            h = await t.useArnRegion(),
            {
              hostname: g,
              bucketEndpoint: b,
              signingRegion: A,
              signingService: y,
            } = N2r({
              bucketName: u,
              baseHostname: a.hostname,
              accelerateEndpoint: t.useAccelerateEndpoint,
              dualstackEndpoint: m,
              fipsEndpoint: d,
              pathStyleEndpoint: t.forcePathStyle,
              tlsCompatible: a.protocol === "https:",
              useArnRegion: h,
              clientPartition: f,
              clientSigningRegion: p,
              clientRegion: c,
              isCustomEndpoint: t.isCustomEndpoint,
              disableMultiregionAccessPoints: await t.disableMultiregionAccessPoints(),
            });
          (A && A !== p && (r.signing_region = A),
            y && y !== "s3" && (r.signing_service = y),
            (a.hostname = g),
            (s = b));
        } else {
          let u = await t.region(),
            c = await t.useDualstackEndpoint(),
            m = await t.useFipsEndpoint(),
            { hostname: d, bucketEndpoint: f } = N2r({
              bucketName: o,
              clientRegion: u,
              baseHostname: a.hostname,
              accelerateEndpoint: t.useAccelerateEndpoint,
              dualstackEndpoint: c,
              fipsEndpoint: m,
              pathStyleEndpoint: t.forcePathStyle,
              tlsCompatible: a.protocol === "https:",
              isCustomEndpoint: t.isCustomEndpoint,
            });
          ((a.hostname = d), (s = f));
        }
        s && ((a.path = a.path.replace(/^(\/)?[^\/]+/, "")), a.path === "" && (a.path = "/"));
      }
      return e({ ...n, request: a });
    },
    oxi = {
      tags: ["BUCKET_ENDPOINT"],
      name: "bucketEndpointMiddleware",
      relation: "before",
      toMiddleware: "hostHeaderMiddleware",
      override: !0,
    },
    kja = (t) => ({
      applyToStack: (e) => {
        e.addRelativeTo(ixi(t), oxi);
      },
    });
  function Oja(t) {
    let {
      bucketEndpoint: e = !1,
      forcePathStyle: r = !1,
      useAccelerateEndpoint: n = !1,
      useArnRegion: o,
      disableMultiregionAccessPoints: s = !1,
    } = t;
    return Object.assign(t, {
      bucketEndpoint: e,
      forcePathStyle: r,
      useAccelerateEndpoint: n,
      useArnRegion: typeof o == "function" ? o : () => Promise.resolve(o),
      disableMultiregionAccessPoints: typeof s == "function" ? s : () => Promise.resolve(s),
    });
  }
  df.NODE_DISABLE_MULTIREGION_ACCESS_POINT_CONFIG_OPTIONS = cja;
  df.NODE_DISABLE_MULTIREGION_ACCESS_POINT_ENV_NAME = Hwi;
  df.NODE_DISABLE_MULTIREGION_ACCESS_POINT_INI_NAME = Vwi;
  df.NODE_USE_ARN_REGION_CONFIG_OPTIONS = lja;
  df.NODE_USE_ARN_REGION_ENV_NAME = Wwi;
  df.NODE_USE_ARN_REGION_INI_NAME = zwi;
  df.bucketEndpointMiddleware = ixi;
  df.bucketEndpointMiddlewareOptions = oxi;
  df.bucketHostname = N2r;
  df.getArnResources = rxi;
  df.getBucketEndpointPlugin = kja;
  df.getSuffixForArnEndpoint = Xwi;
  df.resolveBucketEndpointConfig = Oja;
  df.validateAccountId = txi;
  df.validateDNSHostLabel = wde;
  df.validateNoDualstack = Cja;
  df.validateNoFIPS = nxi;
  df.validateOutpostService = Zwi;
  df.validatePartition = exi;
  df.validateRegion = Eja;
});