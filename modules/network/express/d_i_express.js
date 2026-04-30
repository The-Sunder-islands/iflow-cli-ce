/**
 * @module d_i
 * @category network/express
 * @label express
 * @position 1786 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (d_i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var d_i = T((Qmt) => {
  "use strict";
  Object.defineProperty(Qmt, "__esModule", { value: !0 });
  Qmt.ruleSet = void 0;
  var tAr = "required",
    lt = "type",
    _r = "rules",
    vt = "conditions",
    Jt = "fn",
    Xt = "argv",
    Ri = "ref",
    ta = "assign",
    kn = "url",
    On = "properties",
    LN = "backend",
    y3 = "authSchemes",
    rp = "disableDoubleEncoding",
    np = "signingName",
    Wg = "signingRegion",
    Nn = "headers",
    rAr = "signingRegionSet",
    IPa = 6,
    RPa = !1,
    cI = !0,
    ly = "isSet",
    mf = "booleanEquals",
    si = "error",
    Fmt = "aws.partition",
    zu = "stringEquals",
    jd = "getAttr",
    Qd = "name",
    R0 = "substring",
    j6i = "bucketSuffix",
    nAr = "parseURL",
    Tr = "endpoint",
    vr = "tree",
    Umt = "aws.isVirtualHostableS3Bucket",
    $mt = "{url#scheme}://{Bucket}.{url#authority}{url#path}",
    dI = "not",
    Q6i = "accessPointSuffix",
    Mmt = "{url#scheme}://{url#authority}{url#path}",
    Kyi = "hardwareType",
    Jyi = "regionPrefix",
    G6i = "bucketAliasSuffix",
    Zbr = "outpostId",
    wK = "isValidHostLabel",
    iAr = "sigv4a",
    vwe = "s3-outposts",
    ode = "s3",
    Xyi = "{url#scheme}://{url#authority}{url#normalizedPath}{Bucket}",
    Zyi = "https://{Bucket}.s3-accelerate.{partitionResult#dnsSuffix}",
    q6i = "https://{Bucket}.s3.{partitionResult#dnsSuffix}",
    e_i = "aws.parseArn",
    t_i = "bucketArn",
    r_i = "arnType",
    jmt = "",
    oAr = "s3-object-lambda",
    n_i = "accesspoint",
    sAr = "accessPointName",
    H6i = "{url#scheme}://{accessPointName}-{bucketArn#accountId}.{url#authority}{url#path}",
    V6i = "mrapPartition",
    W6i = "outpostType",
    z6i = "arnPrefix",
    i_i = "{url#scheme}://{url#authority}{url#normalizedPath}{uri_encoded_bucket}",
    Y6i = "https://s3.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
    K6i = "https://s3.{partitionResult#dnsSuffix}",
    rde = { [tAr]: !1, [lt]: "string" },
    nde = { [tAr]: !0, default: !1, [lt]: "boolean" },
    gwe = { [tAr]: !1, [lt]: "boolean" },
    wv = { [Jt]: mf, [Xt]: [{ [Ri]: "Accelerate" }, !0] },
    tm = { [Jt]: mf, [Xt]: [{ [Ri]: "UseFIPS" }, !0] },
    s0 = { [Jt]: mf, [Xt]: [{ [Ri]: "UseDualStack" }, !0] },
    lf = { [Jt]: ly, [Xt]: [{ [Ri]: "Endpoint" }] },
    o_i = { [Jt]: Fmt, [Xt]: [{ [Ri]: "Region" }], [ta]: "partitionResult" },
    J6i = { [Jt]: zu, [Xt]: [{ [Jt]: jd, [Xt]: [{ [Ri]: "partitionResult" }, Qd] }, "aws-cn"] },
    Awe = { [Jt]: ly, [Xt]: [{ [Ri]: "Bucket" }] },
    Ru = { [Ri]: "Bucket" },
    X6i = { [vt]: [wv], [si]: "S3Express does not support S3 Accelerate.", [lt]: si },
    Z6i = {
      [vt]: [lf, { [Jt]: nAr, [Xt]: [{ [Ri]: "Endpoint" }], [ta]: "url" }],
      [_r]: [
        {
          [vt]: [
            { [Jt]: ly, [Xt]: [{ [Ri]: "DisableS3ExpressSessionAuth" }] },
            { [Jt]: mf, [Xt]: [{ [Ri]: "DisableS3ExpressSessionAuth" }, !0] },
          ],
          [_r]: [
            {
              [vt]: [{ [Jt]: mf, [Xt]: [{ [Jt]: jd, [Xt]: [{ [Ri]: "url" }, "isIp"] }, !0] }],
              [_r]: [
                {
                  [vt]: [{ [Jt]: "uriEncode", [Xt]: [Ru], [ta]: "uri_encoded_bucket" }],
                  [_r]: [
                    {
                      [Tr]: {
                        [kn]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}",
                        [On]: {
                          [LN]: "S3Express",
                          [y3]: [{ [rp]: !0, [Qd]: "sigv4", [np]: "s3express", [Wg]: "{Region}" }],
                        },
                        [Nn]: {},
                      },
                      [lt]: Tr,
                    },
                  ],
                  [lt]: vr,
                },
              ],
              [lt]: vr,
            },
            {
              [vt]: [{ [Jt]: Umt, [Xt]: [Ru, !1] }],
              [_r]: [
                {
                  [Tr]: {
                    [kn]: $mt,
                    [On]: {
                      [LN]: "S3Express",
                      [y3]: [{ [rp]: !0, [Qd]: "sigv4", [np]: "s3express", [Wg]: "{Region}" }],
                    },
                    [Nn]: {},
                  },
                  [lt]: Tr,
                },
              ],
              [lt]: vr,
            },
            { [si]: "S3Express bucket name is not a valid virtual hostable name.", [lt]: si },
          ],
          [lt]: vr,
        },
        {
          [vt]: [{ [Jt]: mf, [Xt]: [{ [Jt]: jd, [Xt]: [{ [Ri]: "url" }, "isIp"] }, !0] }],
          [_r]: [
            {
              [vt]: [{ [Jt]: "uriEncode", [Xt]: [Ru], [ta]: "uri_encoded_bucket" }],
              [_r]: [
                {
                  [Tr]: {
                    [kn]: "{url#scheme}://{url#authority}/{uri_encoded_bucket}{url#path}",
                    [On]: {
                      [LN]: "S3Express",
                      [y3]: [{ [rp]: !0, [Qd]: "sigv4-s3express", [np]: "s3express", [Wg]: "{Region}" }],
                    },
                    [Nn]: {},
                  },
                  [lt]: Tr,
                },
              ],
              [lt]: vr,
            },
          ],
          [lt]: vr,
        },
        {
          [vt]: [{ [Jt]: Umt, [Xt]: [Ru, !1] }],
          [_r]: [
            {
              [Tr]: {
                [kn]: $mt,
                [On]: {
                  [LN]: "S3Express",
                  [y3]: [{ [rp]: !0, [Qd]: "sigv4-s3express", [np]: "s3express", [Wg]: "{Region}" }],
                },
                [Nn]: {},
              },
              [lt]: Tr,
            },
          ],
          [lt]: vr,
        },
        { [si]: "S3Express bucket name is not a valid virtual hostable name.", [lt]: si },
      ],
      [lt]: vr,
    },
    c5 = { [Jt]: nAr, [Xt]: [{ [Ri]: "Endpoint" }], [ta]: "url" },
    Rbr = { [Jt]: mf, [Xt]: [{ [Jt]: jd, [Xt]: [{ [Ri]: "url" }, "isIp"] }, !0] },
    s_i = { [Ri]: "url" },
    a_i = { [Jt]: "uriEncode", [Xt]: [Ru], [ta]: "uri_encoded_bucket" },
    cy = { [LN]: "S3Express", [y3]: [{ [rp]: !0, [Qd]: "sigv4", [np]: "s3express", [Wg]: "{Region}" }] },
    Wo = {},
    u_i = { [Jt]: Umt, [Xt]: [Ru, !1] },
    eyi = { [si]: "S3Express bucket name is not a valid virtual hostable name.", [lt]: si },
    tyi = { [Jt]: ly, [Xt]: [{ [Ri]: "UseS3ExpressControlEndpoint" }] },
    ryi = { [Jt]: mf, [Xt]: [{ [Ri]: "UseS3ExpressControlEndpoint" }, !0] },
    Ns = { [Jt]: dI, [Xt]: [lf] },
    uu = { [Jt]: mf, [Xt]: [{ [Ri]: "UseDualStack" }, !1] },
    Sa = { [Jt]: mf, [Xt]: [{ [Ri]: "UseFIPS" }, !1] },
    Nmt = { [si]: "Unrecognized S3Express bucket name format.", [lt]: si },
    nyi = { [Jt]: dI, [Xt]: [Awe] },
    iyi = { [Ri]: Kyi },
    oyi = { [vt]: [Ns], [si]: "Expected a endpoint to be specified but no endpoint was found", [lt]: si },
    Pmt = {
      [y3]: [
        { [rp]: !0, [Qd]: iAr, [np]: vwe, [rAr]: ["*"] },
        { [rp]: !0, [Qd]: "sigv4", [np]: vwe, [Wg]: "{Region}" },
      ],
    },
    kbr = { [Jt]: mf, [Xt]: [{ [Ri]: "ForcePathStyle" }, !1] },
    kPa = { [Ri]: "ForcePathStyle" },
    tp = { [Jt]: mf, [Xt]: [{ [Ri]: "Accelerate" }, !1] },
    Yp = { [Jt]: zu, [Xt]: [{ [Ri]: "Region" }, "aws-global"] },
    g3 = { [y3]: [{ [rp]: !0, [Qd]: "sigv4", [np]: ode, [Wg]: "us-east-1" }] },
    pu = { [Jt]: dI, [Xt]: [Yp] },
    b3 = { [Jt]: mf, [Xt]: [{ [Ri]: "UseGlobalEndpoint" }, !0] },
    syi = {
      [kn]: "https://{Bucket}.s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
      [On]: { [y3]: [{ [rp]: !0, [Qd]: "sigv4", [np]: ode, [Wg]: "{Region}" }] },
      [Nn]: {},
    },
    ip = { [y3]: [{ [rp]: !0, [Qd]: "sigv4", [np]: ode, [Wg]: "{Region}" }] },
    A3 = { [Jt]: mf, [Xt]: [{ [Ri]: "UseGlobalEndpoint" }, !1] },
    ayi = { [kn]: "https://{Bucket}.s3-fips.{Region}.{partitionResult#dnsSuffix}", [On]: ip, [Nn]: {} },
    uyi = { [kn]: "https://{Bucket}.s3-accelerate.dualstack.{partitionResult#dnsSuffix}", [On]: ip, [Nn]: {} },
    cyi = { [kn]: "https://{Bucket}.s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [On]: ip, [Nn]: {} },
    Obr = { [Jt]: mf, [Xt]: [{ [Jt]: jd, [Xt]: [s_i, "isIp"] }, !1] },
    Nbr = { [kn]: Xyi, [On]: ip, [Nn]: {} },
    eAr = { [kn]: $mt, [On]: ip, [Nn]: {} },
    lyi = { [Tr]: eAr, [lt]: Tr },
    Pbr = { [kn]: Zyi, [On]: ip, [Nn]: {} },
    myi = { [kn]: "https://{Bucket}.s3.{Region}.{partitionResult#dnsSuffix}", [On]: ip, [Nn]: {} },
    Bmt = { [si]: "Invalid region: region was not a valid DNS name.", [lt]: si },
    A9 = { [Ri]: t_i },
    c_i = { [Ri]: r_i },
    Bbr = { [Jt]: jd, [Xt]: [A9, "service"] },
    aAr = { [Ri]: sAr },
    dyi = { [vt]: [s0], [si]: "S3 Object Lambda does not support Dual-stack", [lt]: si },
    fyi = { [vt]: [wv], [si]: "S3 Object Lambda does not support S3 Accelerate", [lt]: si },
    pyi = {
      [vt]: [
        { [Jt]: ly, [Xt]: [{ [Ri]: "DisableAccessPoints" }] },
        { [Jt]: mf, [Xt]: [{ [Ri]: "DisableAccessPoints" }, !0] },
      ],
      [si]: "Access points are not supported for this operation",
      [lt]: si,
    },
    Lbr = {
      [vt]: [
        { [Jt]: ly, [Xt]: [{ [Ri]: "UseArnRegion" }] },
        { [Jt]: mf, [Xt]: [{ [Ri]: "UseArnRegion" }, !1] },
        { [Jt]: dI, [Xt]: [{ [Jt]: zu, [Xt]: [{ [Jt]: jd, [Xt]: [A9, "region"] }, "{Region}"] }] },
      ],
      [si]: "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",
      [lt]: si,
    },
    l_i = { [Jt]: jd, [Xt]: [{ [Ri]: "bucketPartition" }, Qd] },
    m_i = { [Jt]: jd, [Xt]: [A9, "accountId"] },
    Mbr = { [y3]: [{ [rp]: !0, [Qd]: "sigv4", [np]: oAr, [Wg]: "{bucketArn#region}" }] },
    hyi = {
      [si]: "Invalid ARN: The access point name may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointName}`",
      [lt]: si,
    },
    Fbr = {
      [si]: "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`",
      [lt]: si,
    },
    Ubr = { [si]: "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)", [lt]: si },
    $br = {
      [si]: "Client was configured for partition `{partitionResult#name}` but ARN (`{Bucket}`) has `{bucketPartition#name}`",
      [lt]: si,
    },
    gyi = { [si]: "Invalid ARN: The ARN may only contain a single resource component after `accesspoint`.", [lt]: si },
    byi = {
      [si]: "Invalid ARN: Expected a resource of the format `accesspoint:<accesspoint name>` but no name was provided",
      [lt]: si,
    },
    bwe = { [y3]: [{ [rp]: !0, [Qd]: "sigv4", [np]: ode, [Wg]: "{bucketArn#region}" }] },
    Ayi = {
      [y3]: [
        { [rp]: !0, [Qd]: iAr, [np]: vwe, [rAr]: ["*"] },
        { [rp]: !0, [Qd]: "sigv4", [np]: vwe, [Wg]: "{bucketArn#region}" },
      ],
    },
    yyi = { [Jt]: e_i, [Xt]: [Ru] },
    _yi = {
      [kn]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
      [On]: ip,
      [Nn]: {},
    },
    Eyi = { [kn]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [On]: ip, [Nn]: {} },
    vyi = {
      [kn]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
      [On]: ip,
      [Nn]: {},
    },
    jbr = { [kn]: i_i, [On]: ip, [Nn]: {} },
    Cyi = { [kn]: "https://s3.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}", [On]: ip, [Nn]: {} },
    Syi = { [Ri]: "UseObjectLambdaEndpoint" },
    Qbr = { [y3]: [{ [rp]: !0, [Qd]: "sigv4", [np]: oAr, [Wg]: "{Region}" }] },
    wyi = { [kn]: "https://s3-fips.dualstack.{Region}.{partitionResult#dnsSuffix}", [On]: ip, [Nn]: {} },
    xyi = { [kn]: "https://s3-fips.{Region}.{partitionResult#dnsSuffix}", [On]: ip, [Nn]: {} },
    Tyi = { [kn]: "https://s3.dualstack.{Region}.{partitionResult#dnsSuffix}", [On]: ip, [Nn]: {} },
    Gbr = { [kn]: Mmt, [On]: ip, [Nn]: {} },
    Dyi = { [kn]: "https://s3.{Region}.{partitionResult#dnsSuffix}", [On]: ip, [Nn]: {} },
    qbr = [{ [Ri]: "Region" }],
    OPa = [{ [Ri]: "Endpoint" }],
    NPa = [Ru],
    Hbr = [wv],
    ide = [lf, c5],
    Iyi = [
      { [Jt]: ly, [Xt]: [{ [Ri]: "DisableS3ExpressSessionAuth" }] },
      { [Jt]: mf, [Xt]: [{ [Ri]: "DisableS3ExpressSessionAuth" }, !0] },
    ],
    PPa = [a_i],
    Vbr = [u_i],
    Sv = [o_i],
    Wbr = [tm, s0],
    ywe = [tm, uu],
    _we = [Sa, s0],
    Ewe = [Sa, uu],
    Ryi = [
      { [Jt]: R0, [Xt]: [Ru, 6, 14, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 14, 16, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    lI = [
      {
        [vt]: [tm, s0],
        [Tr]: {
          [kn]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}",
          [On]: cy,
          [Nn]: {},
        },
        [lt]: Tr,
      },
      {
        [vt]: ywe,
        [Tr]: {
          [kn]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}",
          [On]: cy,
          [Nn]: {},
        },
        [lt]: Tr,
      },
      {
        [vt]: _we,
        [Tr]: {
          [kn]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}",
          [On]: cy,
          [Nn]: {},
        },
        [lt]: Tr,
      },
      {
        [vt]: Ewe,
        [Tr]: {
          [kn]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}",
          [On]: cy,
          [Nn]: {},
        },
        [lt]: Tr,
      },
    ],
    kyi = [
      { [Jt]: R0, [Xt]: [Ru, 6, 15, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 15, 17, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    Oyi = [
      { [Jt]: R0, [Xt]: [Ru, 6, 19, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 19, 21, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    Nyi = [
      { [Jt]: R0, [Xt]: [Ru, 6, 20, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 20, 22, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    Pyi = [
      { [Jt]: R0, [Xt]: [Ru, 6, 26, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 26, 28, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    mI = [
      {
        [vt]: [tm, s0],
        [Tr]: {
          [kn]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}",
          [On]: {
            [LN]: "S3Express",
            [y3]: [{ [rp]: !0, [Qd]: "sigv4-s3express", [np]: "s3express", [Wg]: "{Region}" }],
          },
          [Nn]: {},
        },
        [lt]: Tr,
      },
      {
        [vt]: ywe,
        [Tr]: {
          [kn]: "https://{Bucket}.s3express-fips-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}",
          [On]: {
            [LN]: "S3Express",
            [y3]: [{ [rp]: !0, [Qd]: "sigv4-s3express", [np]: "s3express", [Wg]: "{Region}" }],
          },
          [Nn]: {},
        },
        [lt]: Tr,
      },
      {
        [vt]: _we,
        [Tr]: {
          [kn]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.dualstack.{Region}.{partitionResult#dnsSuffix}",
          [On]: {
            [LN]: "S3Express",
            [y3]: [{ [rp]: !0, [Qd]: "sigv4-s3express", [np]: "s3express", [Wg]: "{Region}" }],
          },
          [Nn]: {},
        },
        [lt]: Tr,
      },
      {
        [vt]: Ewe,
        [Tr]: {
          [kn]: "https://{Bucket}.s3express-{s3expressAvailabilityZoneId}.{Region}.{partitionResult#dnsSuffix}",
          [On]: {
            [LN]: "S3Express",
            [y3]: [{ [rp]: !0, [Qd]: "sigv4-s3express", [np]: "s3express", [Wg]: "{Region}" }],
          },
          [Nn]: {},
        },
        [lt]: Tr,
      },
    ],
    Byi = [Ru, 0, 7, !0],
    Lyi = [
      { [Jt]: R0, [Xt]: [Ru, 7, 15, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 15, 17, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    Myi = [
      { [Jt]: R0, [Xt]: [Ru, 7, 16, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 16, 18, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    Fyi = [
      { [Jt]: R0, [Xt]: [Ru, 7, 20, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 20, 22, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    Uyi = [
      { [Jt]: R0, [Xt]: [Ru, 7, 21, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 21, 23, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    $yi = [
      { [Jt]: R0, [Xt]: [Ru, 7, 27, !0], [ta]: "s3expressAvailabilityZoneId" },
      { [Jt]: R0, [Xt]: [Ru, 27, 29, !0], [ta]: "s3expressAvailabilityZoneDelim" },
      { [Jt]: zu, [Xt]: [{ [Ri]: "s3expressAvailabilityZoneDelim" }, "--"] },
    ],
    BPa = [Awe],
    jyi = [{ [Jt]: wK, [Xt]: [{ [Ri]: Zbr }, !1] }],
    Qyi = [{ [Jt]: zu, [Xt]: [{ [Ri]: Jyi }, "beta"] }],
    LPa = ["*"],
    Gyi = [{ [Jt]: wK, [Xt]: [{ [Ri]: "Region" }, !1] }],
    G$ = [{ [Jt]: zu, [Xt]: [{ [Ri]: "Region" }, "us-east-1"] }],
    zbr = [{ [Jt]: zu, [Xt]: [c_i, n_i] }],
    qyi = [
      { [Jt]: jd, [Xt]: [A9, "resourceId[1]"], [ta]: sAr },
      { [Jt]: dI, [Xt]: [{ [Jt]: zu, [Xt]: [aAr, jmt] }] },
    ],
    MPa = [A9, "resourceId[1]"],
    Hyi = [s0],
    Ybr = [{ [Jt]: dI, [Xt]: [{ [Jt]: zu, [Xt]: [{ [Jt]: jd, [Xt]: [A9, "region"] }, jmt] }] }],
    Vyi = [{ [Jt]: dI, [Xt]: [{ [Jt]: ly, [Xt]: [{ [Jt]: jd, [Xt]: [A9, "resourceId[2]"] }] }] }],
    FPa = [A9, "resourceId[2]"],
    Kbr = [{ [Jt]: Fmt, [Xt]: [{ [Jt]: jd, [Xt]: [A9, "region"] }], [ta]: "bucketPartition" }],
    Wyi = [{ [Jt]: zu, [Xt]: [l_i, { [Jt]: jd, [Xt]: [{ [Ri]: "partitionResult" }, Qd] }] }],
    Jbr = [{ [Jt]: wK, [Xt]: [{ [Jt]: jd, [Xt]: [A9, "region"] }, !0] }],
    Xbr = [{ [Jt]: wK, [Xt]: [m_i, !1] }],
    zyi = [{ [Jt]: wK, [Xt]: [aAr, !1] }],
    Lmt = [tm],
    Yyi = [{ [Jt]: wK, [Xt]: [{ [Ri]: "Region" }, !0] }],
    UPa = {
      version: "1.0",
      parameters: {
        Bucket: rde,
        Region: rde,
        UseFIPS: nde,
        UseDualStack: nde,
        Endpoint: rde,
        ForcePathStyle: nde,
        Accelerate: nde,
        UseGlobalEndpoint: nde,
        UseObjectLambdaEndpoint: gwe,
        Key: rde,
        Prefix: rde,
        CopySource: rde,
        DisableAccessPoints: gwe,
        DisableMultiRegionAccessPoints: nde,
        UseArnRegion: gwe,
        UseS3ExpressControlEndpoint: gwe,
        DisableS3ExpressSessionAuth: gwe,
      },
      [_r]: [
        {
          [vt]: [{ [Jt]: ly, [Xt]: qbr }],
          [_r]: [
            { [vt]: [wv, tm], error: "Accelerate cannot be used with FIPS", [lt]: si },
            { [vt]: [s0, lf], error: "Cannot set dual-stack in combination with a custom endpoint.", [lt]: si },
            { [vt]: [lf, tm], error: "A custom endpoint cannot be combined with FIPS", [lt]: si },
            { [vt]: [lf, wv], error: "A custom endpoint cannot be combined with S3 Accelerate", [lt]: si },
            { [vt]: [tm, o_i, J6i], error: "Partition does not support FIPS", [lt]: si },
            {
              [vt]: [
                Awe,
                { [Jt]: R0, [Xt]: [Ru, 0, IPa, cI], [ta]: j6i },
                { [Jt]: zu, [Xt]: [{ [Ri]: j6i }, "--x-s3"] },
              ],
              [_r]: [
                X6i,
                Z6i,
                {
                  [vt]: [tyi, ryi],
                  [_r]: [
                    {
                      [vt]: Sv,
                      [_r]: [
                        {
                          [vt]: [a_i, Ns],
                          [_r]: [
                            {
                              [vt]: Wbr,
                              endpoint: {
                                [kn]: "https://s3express-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                [On]: cy,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            {
                              [vt]: ywe,
                              endpoint: {
                                [kn]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                [On]: cy,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            {
                              [vt]: _we,
                              endpoint: {
                                [kn]: "https://s3express-control.dualstack.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                [On]: cy,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            {
                              [vt]: Ewe,
                              endpoint: {
                                [kn]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                [On]: cy,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                          ],
                          [lt]: vr,
                        },
                      ],
                      [lt]: vr,
                    },
                  ],
                  [lt]: vr,
                },
                {
                  [vt]: Vbr,
                  [_r]: [
                    {
                      [vt]: Sv,
                      [_r]: [
                        {
                          [vt]: Iyi,
                          [_r]: [
                            { [vt]: Ryi, [_r]: lI, [lt]: vr },
                            { [vt]: kyi, [_r]: lI, [lt]: vr },
                            { [vt]: Oyi, [_r]: lI, [lt]: vr },
                            { [vt]: Nyi, [_r]: lI, [lt]: vr },
                            { [vt]: Pyi, [_r]: lI, [lt]: vr },
                            Nmt,
                          ],
                          [lt]: vr,
                        },
                        { [vt]: Ryi, [_r]: mI, [lt]: vr },
                        { [vt]: kyi, [_r]: mI, [lt]: vr },
                        { [vt]: Oyi, [_r]: mI, [lt]: vr },
                        { [vt]: Nyi, [_r]: mI, [lt]: vr },
                        { [vt]: Pyi, [_r]: mI, [lt]: vr },
                        Nmt,
                      ],
                      [lt]: vr,
                    },
                  ],
                  [lt]: vr,
                },
                eyi,
              ],
              [lt]: vr,
            },
            {
              [vt]: [Awe, { [Jt]: R0, [Xt]: Byi, [ta]: Q6i }, { [Jt]: zu, [Xt]: [{ [Ri]: Q6i }, "--xa-s3"] }],
              [_r]: [
                X6i,
                Z6i,
                {
                  [vt]: Vbr,
                  [_r]: [
                    {
                      [vt]: Sv,
                      [_r]: [
                        {
                          [vt]: Iyi,
                          [_r]: [
                            { [vt]: Lyi, [_r]: lI, [lt]: vr },
                            { [vt]: Myi, [_r]: lI, [lt]: vr },
                            { [vt]: Fyi, [_r]: lI, [lt]: vr },
                            { [vt]: Uyi, [_r]: lI, [lt]: vr },
                            { [vt]: $yi, [_r]: lI, [lt]: vr },
                            Nmt,
                          ],
                          [lt]: vr,
                        },
                        { [vt]: Lyi, [_r]: mI, [lt]: vr },
                        { [vt]: Myi, [_r]: mI, [lt]: vr },
                        { [vt]: Fyi, [_r]: mI, [lt]: vr },
                        { [vt]: Uyi, [_r]: mI, [lt]: vr },
                        { [vt]: $yi, [_r]: mI, [lt]: vr },
                        Nmt,
                      ],
                      [lt]: vr,
                    },
                  ],
                  [lt]: vr,
                },
                eyi,
              ],
              [lt]: vr,
            },
            {
              [vt]: [nyi, tyi, ryi],
              [_r]: [
                {
                  [vt]: Sv,
                  [_r]: [
                    { [vt]: ide, endpoint: { [kn]: Mmt, [On]: cy, [Nn]: Wo }, [lt]: Tr },
                    {
                      [vt]: Wbr,
                      endpoint: {
                        [kn]: "https://s3express-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
                        [On]: cy,
                        [Nn]: Wo,
                      },
                      [lt]: Tr,
                    },
                    {
                      [vt]: ywe,
                      endpoint: {
                        [kn]: "https://s3express-control-fips.{Region}.{partitionResult#dnsSuffix}",
                        [On]: cy,
                        [Nn]: Wo,
                      },
                      [lt]: Tr,
                    },
                    {
                      [vt]: _we,
                      endpoint: {
                        [kn]: "https://s3express-control.dualstack.{Region}.{partitionResult#dnsSuffix}",
                        [On]: cy,
                        [Nn]: Wo,
                      },
                      [lt]: Tr,
                    },
                    {
                      [vt]: Ewe,
                      endpoint: {
                        [kn]: "https://s3express-control.{Region}.{partitionResult#dnsSuffix}",
                        [On]: cy,
                        [Nn]: Wo,
                      },
                      [lt]: Tr,
                    },
                  ],
                  [lt]: vr,
                },
              ],
              [lt]: vr,
            },
            {
              [vt]: [
                Awe,
                { [Jt]: R0, [Xt]: [Ru, 49, 50, cI], [ta]: Kyi },
                { [Jt]: R0, [Xt]: [Ru, 8, 12, cI], [ta]: Jyi },
                { [Jt]: R0, [Xt]: Byi, [ta]: G6i },
                { [Jt]: R0, [Xt]: [Ru, 32, 49, cI], [ta]: Zbr },
                { [Jt]: Fmt, [Xt]: qbr, [ta]: "regionPartition" },
                { [Jt]: zu, [Xt]: [{ [Ri]: G6i }, "--op-s3"] },
              ],
              [_r]: [
                {
                  [vt]: jyi,
                  [_r]: [
                    {
                      [vt]: Vbr,
                      [_r]: [
                        {
                          [vt]: [{ [Jt]: zu, [Xt]: [iyi, "e"] }],
                          [_r]: [
                            {
                              [vt]: Qyi,
                              [_r]: [
                                oyi,
                                {
                                  [vt]: ide,
                                  endpoint: { [kn]: "https://{Bucket}.ec2.{url#authority}", [On]: Pmt, [Nn]: Wo },
                                  [lt]: Tr,
                                },
                              ],
                              [lt]: vr,
                            },
                            {
                              endpoint: {
                                [kn]: "https://{Bucket}.ec2.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
                                [On]: Pmt,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                          ],
                          [lt]: vr,
                        },
                        {
                          [vt]: [{ [Jt]: zu, [Xt]: [iyi, "o"] }],
                          [_r]: [
                            {
                              [vt]: Qyi,
                              [_r]: [
                                oyi,
                                {
                                  [vt]: ide,
                                  endpoint: {
                                    [kn]: "https://{Bucket}.op-{outpostId}.{url#authority}",
                                    [On]: Pmt,
                                    [Nn]: Wo,
                                  },
                                  [lt]: Tr,
                                },
                              ],
                              [lt]: vr,
                            },
                            {
                              endpoint: {
                                [kn]: "https://{Bucket}.op-{outpostId}.s3-outposts.{Region}.{regionPartition#dnsSuffix}",
                                [On]: Pmt,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                          ],
                          [lt]: vr,
                        },
                        {
                          error: 'Unrecognized hardware type: "Expected hardware type o or e but got {hardwareType}"',
                          [lt]: si,
                        },
                      ],
                      [lt]: vr,
                    },
                    { error: "Invalid Outposts Bucket alias - it must be a valid bucket name.", [lt]: si },
                  ],
                  [lt]: vr,
                },
                { error: "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`.", [lt]: si },
              ],
              [lt]: vr,
            },
            {
              [vt]: BPa,
              [_r]: [
                {
                  [vt]: [lf, { [Jt]: dI, [Xt]: [{ [Jt]: ly, [Xt]: [{ [Jt]: nAr, [Xt]: OPa }] }] }],
                  error: "Custom endpoint `{Endpoint}` was not a valid URI",
                  [lt]: si,
                },
                {
                  [vt]: [kbr, u_i],
                  [_r]: [
                    {
                      [vt]: Sv,
                      [_r]: [
                        {
                          [vt]: Gyi,
                          [_r]: [
                            { [vt]: [wv, J6i], error: "S3 Accelerate cannot be used in this region", [lt]: si },
                            {
                              [vt]: [s0, tm, tp, Ns, Yp],
                              endpoint: {
                                [kn]: "https://{Bucket}.s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                                [On]: g3,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            { [vt]: [s0, tm, tp, Ns, pu, b3], [_r]: [{ endpoint: syi, [lt]: Tr }], [lt]: vr },
                            { [vt]: [s0, tm, tp, Ns, pu, A3], endpoint: syi, [lt]: Tr },
                            {
                              [vt]: [uu, tm, tp, Ns, Yp],
                              endpoint: {
                                [kn]: "https://{Bucket}.s3-fips.us-east-1.{partitionResult#dnsSuffix}",
                                [On]: g3,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            { [vt]: [uu, tm, tp, Ns, pu, b3], [_r]: [{ endpoint: ayi, [lt]: Tr }], [lt]: vr },
                            { [vt]: [uu, tm, tp, Ns, pu, A3], endpoint: ayi, [lt]: Tr },
                            {
                              [vt]: [s0, Sa, wv, Ns, Yp],
                              endpoint: {
                                [kn]: "https://{Bucket}.s3-accelerate.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                                [On]: g3,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            { [vt]: [s0, Sa, wv, Ns, pu, b3], [_r]: [{ endpoint: uyi, [lt]: Tr }], [lt]: vr },
                            { [vt]: [s0, Sa, wv, Ns, pu, A3], endpoint: uyi, [lt]: Tr },
                            {
                              [vt]: [s0, Sa, tp, Ns, Yp],
                              endpoint: {
                                [kn]: "https://{Bucket}.s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                                [On]: g3,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            { [vt]: [s0, Sa, tp, Ns, pu, b3], [_r]: [{ endpoint: cyi, [lt]: Tr }], [lt]: vr },
                            { [vt]: [s0, Sa, tp, Ns, pu, A3], endpoint: cyi, [lt]: Tr },
                            {
                              [vt]: [uu, Sa, tp, lf, c5, Rbr, Yp],
                              endpoint: { [kn]: Xyi, [On]: g3, [Nn]: Wo },
                              [lt]: Tr,
                            },
                            {
                              [vt]: [uu, Sa, tp, lf, c5, Obr, Yp],
                              endpoint: { [kn]: $mt, [On]: g3, [Nn]: Wo },
                              [lt]: Tr,
                            },
                            {
                              [vt]: [uu, Sa, tp, lf, c5, Rbr, pu, b3],
                              [_r]: [
                                { [vt]: G$, endpoint: Nbr, [lt]: Tr },
                                { endpoint: Nbr, [lt]: Tr },
                              ],
                              [lt]: vr,
                            },
                            {
                              [vt]: [uu, Sa, tp, lf, c5, Obr, pu, b3],
                              [_r]: [{ [vt]: G$, endpoint: eAr, [lt]: Tr }, lyi],
                              [lt]: vr,
                            },
                            { [vt]: [uu, Sa, tp, lf, c5, Rbr, pu, A3], endpoint: Nbr, [lt]: Tr },
                            { [vt]: [uu, Sa, tp, lf, c5, Obr, pu, A3], endpoint: eAr, [lt]: Tr },
                            { [vt]: [uu, Sa, wv, Ns, Yp], endpoint: { [kn]: Zyi, [On]: g3, [Nn]: Wo }, [lt]: Tr },
                            {
                              [vt]: [uu, Sa, wv, Ns, pu, b3],
                              [_r]: [
                                { [vt]: G$, endpoint: Pbr, [lt]: Tr },
                                { endpoint: Pbr, [lt]: Tr },
                              ],
                              [lt]: vr,
                            },
                            { [vt]: [uu, Sa, wv, Ns, pu, A3], endpoint: Pbr, [lt]: Tr },
                            { [vt]: [uu, Sa, tp, Ns, Yp], endpoint: { [kn]: q6i, [On]: g3, [Nn]: Wo }, [lt]: Tr },
                            {
                              [vt]: [uu, Sa, tp, Ns, pu, b3],
                              [_r]: [
                                { [vt]: G$, endpoint: { [kn]: q6i, [On]: ip, [Nn]: Wo }, [lt]: Tr },
                                { endpoint: myi, [lt]: Tr },
                              ],
                              [lt]: vr,
                            },
                            { [vt]: [uu, Sa, tp, Ns, pu, A3], endpoint: myi, [lt]: Tr },
                          ],
                          [lt]: vr,
                        },
                        Bmt,
                      ],
                      [lt]: vr,
                    },
                  ],
                  [lt]: vr,
                },
                {
                  [vt]: [
                    lf,
                    c5,
                    { [Jt]: zu, [Xt]: [{ [Jt]: jd, [Xt]: [s_i, "scheme"] }, "http"] },
                    { [Jt]: Umt, [Xt]: [Ru, cI] },
                    kbr,
                    Sa,
                    uu,
                    tp,
                  ],
                  [_r]: [{ [vt]: Sv, [_r]: [{ [vt]: Gyi, [_r]: [lyi], [lt]: vr }, Bmt], [lt]: vr }],
                  [lt]: vr,
                },
                {
                  [vt]: [kbr, { [Jt]: e_i, [Xt]: NPa, [ta]: t_i }],
                  [_r]: [
                    {
                      [vt]: [
                        { [Jt]: jd, [Xt]: [A9, "resourceId[0]"], [ta]: r_i },
                        { [Jt]: dI, [Xt]: [{ [Jt]: zu, [Xt]: [c_i, jmt] }] },
                      ],
                      [_r]: [
                        {
                          [vt]: [{ [Jt]: zu, [Xt]: [Bbr, oAr] }],
                          [_r]: [
                            {
                              [vt]: zbr,
                              [_r]: [
                                {
                                  [vt]: qyi,
                                  [_r]: [
                                    dyi,
                                    fyi,
                                    {
                                      [vt]: Ybr,
                                      [_r]: [
                                        pyi,
                                        {
                                          [vt]: Vyi,
                                          [_r]: [
                                            Lbr,
                                            {
                                              [vt]: Kbr,
                                              [_r]: [
                                                {
                                                  [vt]: Sv,
                                                  [_r]: [
                                                    {
                                                      [vt]: Wyi,
                                                      [_r]: [
                                                        {
                                                          [vt]: Jbr,
                                                          [_r]: [
                                                            {
                                                              [vt]: [{ [Jt]: zu, [Xt]: [m_i, jmt] }],
                                                              error: "Invalid ARN: Missing account id",
                                                              [lt]: si,
                                                            },
                                                            {
                                                              [vt]: Xbr,
                                                              [_r]: [
                                                                {
                                                                  [vt]: zyi,
                                                                  [_r]: [
                                                                    {
                                                                      [vt]: ide,
                                                                      endpoint: { [kn]: H6i, [On]: Mbr, [Nn]: Wo },
                                                                      [lt]: Tr,
                                                                    },
                                                                    {
                                                                      [vt]: Lmt,
                                                                      endpoint: {
                                                                        [kn]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                        [On]: Mbr,
                                                                        [Nn]: Wo,
                                                                      },
                                                                      [lt]: Tr,
                                                                    },
                                                                    {
                                                                      endpoint: {
                                                                        [kn]: "https://{accessPointName}-{bucketArn#accountId}.s3-object-lambda.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                        [On]: Mbr,
                                                                        [Nn]: Wo,
                                                                      },
                                                                      [lt]: Tr,
                                                                    },
                                                                  ],
                                                                  [lt]: vr,
                                                                },
                                                                hyi,
                                                              ],
                                                              [lt]: vr,
                                                            },
                                                            Fbr,
                                                          ],
                                                          [lt]: vr,
                                                        },
                                                        Ubr,
                                                      ],
                                                      [lt]: vr,
                                                    },
                                                    $br,
                                                  ],
                                                  [lt]: vr,
                                                },
                                              ],
                                              [lt]: vr,
                                            },
                                          ],
                                          [lt]: vr,
                                        },
                                        gyi,
                                      ],
                                      [lt]: vr,
                                    },
                                    { error: "Invalid ARN: bucket ARN is missing a region", [lt]: si },
                                  ],
                                  [lt]: vr,
                                },
                                byi,
                              ],
                              [lt]: vr,
                            },
                            {
                              error:
                                "Invalid ARN: Object Lambda ARNs only support `accesspoint` arn types, but found: `{arnType}`",
                              [lt]: si,
                            },
                          ],
                          [lt]: vr,
                        },
                        {
                          [vt]: zbr,
                          [_r]: [
                            {
                              [vt]: qyi,
                              [_r]: [
                                {
                                  [vt]: Ybr,
                                  [_r]: [
                                    {
                                      [vt]: zbr,
                                      [_r]: [
                                        {
                                          [vt]: Ybr,
                                          [_r]: [
                                            pyi,
                                            {
                                              [vt]: Vyi,
                                              [_r]: [
                                                Lbr,
                                                {
                                                  [vt]: Kbr,
                                                  [_r]: [
                                                    {
                                                      [vt]: Sv,
                                                      [_r]: [
                                                        {
                                                          [vt]: [{ [Jt]: zu, [Xt]: [l_i, "{partitionResult#name}"] }],
                                                          [_r]: [
                                                            {
                                                              [vt]: Jbr,
                                                              [_r]: [
                                                                {
                                                                  [vt]: [{ [Jt]: zu, [Xt]: [Bbr, ode] }],
                                                                  [_r]: [
                                                                    {
                                                                      [vt]: Xbr,
                                                                      [_r]: [
                                                                        {
                                                                          [vt]: zyi,
                                                                          [_r]: [
                                                                            {
                                                                              [vt]: Hbr,
                                                                              error:
                                                                                "Access Points do not support S3 Accelerate",
                                                                              [lt]: si,
                                                                            },
                                                                            {
                                                                              [vt]: Wbr,
                                                                              endpoint: {
                                                                                [kn]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                [On]: bwe,
                                                                                [Nn]: Wo,
                                                                              },
                                                                              [lt]: Tr,
                                                                            },
                                                                            {
                                                                              [vt]: ywe,
                                                                              endpoint: {
                                                                                [kn]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint-fips.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                [On]: bwe,
                                                                                [Nn]: Wo,
                                                                              },
                                                                              [lt]: Tr,
                                                                            },
                                                                            {
                                                                              [vt]: _we,
                                                                              endpoint: {
                                                                                [kn]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.dualstack.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                [On]: bwe,
                                                                                [Nn]: Wo,
                                                                              },
                                                                              [lt]: Tr,
                                                                            },
                                                                            {
                                                                              [vt]: [Sa, uu, lf, c5],
                                                                              endpoint: {
                                                                                [kn]: H6i,
                                                                                [On]: bwe,
                                                                                [Nn]: Wo,
                                                                              },
                                                                              [lt]: Tr,
                                                                            },
                                                                            {
                                                                              [vt]: Ewe,
                                                                              endpoint: {
                                                                                [kn]: "https://{accessPointName}-{bucketArn#accountId}.s3-accesspoint.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                                [On]: bwe,
                                                                                [Nn]: Wo,
                                                                              },
                                                                              [lt]: Tr,
                                                                            },
                                                                          ],
                                                                          [lt]: vr,
                                                                        },
                                                                        hyi,
                                                                      ],
                                                                      [lt]: vr,
                                                                    },
                                                                    Fbr,
                                                                  ],
                                                                  [lt]: vr,
                                                                },
                                                                {
                                                                  error:
                                                                    "Invalid ARN: The ARN was not for the S3 service, found: {bucketArn#service}",
                                                                  [lt]: si,
                                                                },
                                                              ],
                                                              [lt]: vr,
                                                            },
                                                            Ubr,
                                                          ],
                                                          [lt]: vr,
                                                        },
                                                        $br,
                                                      ],
                                                      [lt]: vr,
                                                    },
                                                  ],
                                                  [lt]: vr,
                                                },
                                              ],
                                              [lt]: vr,
                                            },
                                            gyi,
                                          ],
                                          [lt]: vr,
                                        },
                                      ],
                                      [lt]: vr,
                                    },
                                  ],
                                  [lt]: vr,
                                },
                                {
                                  [vt]: [{ [Jt]: wK, [Xt]: [aAr, cI] }],
                                  [_r]: [
                                    { [vt]: Hyi, error: "S3 MRAP does not support dual-stack", [lt]: si },
                                    { [vt]: Lmt, error: "S3 MRAP does not support FIPS", [lt]: si },
                                    { [vt]: Hbr, error: "S3 MRAP does not support S3 Accelerate", [lt]: si },
                                    {
                                      [vt]: [{ [Jt]: mf, [Xt]: [{ [Ri]: "DisableMultiRegionAccessPoints" }, cI] }],
                                      error: "Invalid configuration: Multi-Region Access Point ARNs are disabled.",
                                      [lt]: si,
                                    },
                                    {
                                      [vt]: [{ [Jt]: Fmt, [Xt]: qbr, [ta]: V6i }],
                                      [_r]: [
                                        {
                                          [vt]: [
                                            {
                                              [Jt]: zu,
                                              [Xt]: [
                                                { [Jt]: jd, [Xt]: [{ [Ri]: V6i }, Qd] },
                                                { [Jt]: jd, [Xt]: [A9, "partition"] },
                                              ],
                                            },
                                          ],
                                          [_r]: [
                                            {
                                              endpoint: {
                                                [kn]: "https://{accessPointName}.accesspoint.s3-global.{mrapPartition#dnsSuffix}",
                                                [On]: { [y3]: [{ [rp]: cI, name: iAr, [np]: ode, [rAr]: LPa }] },
                                                [Nn]: Wo,
                                              },
                                              [lt]: Tr,
                                            },
                                          ],
                                          [lt]: vr,
                                        },
                                        {
                                          error:
                                            "Client was configured for partition `{mrapPartition#name}` but bucket referred to partition `{bucketArn#partition}`",
                                          [lt]: si,
                                        },
                                      ],
                                      [lt]: vr,
                                    },
                                  ],
                                  [lt]: vr,
                                },
                                { error: "Invalid Access Point Name", [lt]: si },
                              ],
                              [lt]: vr,
                            },
                            byi,
                          ],
                          [lt]: vr,
                        },
                        {
                          [vt]: [{ [Jt]: zu, [Xt]: [Bbr, vwe] }],
                          [_r]: [
                            { [vt]: Hyi, error: "S3 Outposts does not support Dual-stack", [lt]: si },
                            { [vt]: Lmt, error: "S3 Outposts does not support FIPS", [lt]: si },
                            { [vt]: Hbr, error: "S3 Outposts does not support S3 Accelerate", [lt]: si },
                            {
                              [vt]: [{ [Jt]: ly, [Xt]: [{ [Jt]: jd, [Xt]: [A9, "resourceId[4]"] }] }],
                              error: "Invalid Arn: Outpost Access Point ARN contains sub resources",
                              [lt]: si,
                            },
                            {
                              [vt]: [{ [Jt]: jd, [Xt]: MPa, [ta]: Zbr }],
                              [_r]: [
                                {
                                  [vt]: jyi,
                                  [_r]: [
                                    Lbr,
                                    {
                                      [vt]: Kbr,
                                      [_r]: [
                                        {
                                          [vt]: Sv,
                                          [_r]: [
                                            {
                                              [vt]: Wyi,
                                              [_r]: [
                                                {
                                                  [vt]: Jbr,
                                                  [_r]: [
                                                    {
                                                      [vt]: Xbr,
                                                      [_r]: [
                                                        {
                                                          [vt]: [{ [Jt]: jd, [Xt]: FPa, [ta]: W6i }],
                                                          [_r]: [
                                                            {
                                                              [vt]: [
                                                                { [Jt]: jd, [Xt]: [A9, "resourceId[3]"], [ta]: sAr },
                                                              ],
                                                              [_r]: [
                                                                {
                                                                  [vt]: [{ [Jt]: zu, [Xt]: [{ [Ri]: W6i }, n_i] }],
                                                                  [_r]: [
                                                                    {
                                                                      [vt]: ide,
                                                                      endpoint: {
                                                                        [kn]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.{url#authority}",
                                                                        [On]: Ayi,
                                                                        [Nn]: Wo,
                                                                      },
                                                                      [lt]: Tr,
                                                                    },
                                                                    {
                                                                      endpoint: {
                                                                        [kn]: "https://{accessPointName}-{bucketArn#accountId}.{outpostId}.s3-outposts.{bucketArn#region}.{bucketPartition#dnsSuffix}",
                                                                        [On]: Ayi,
                                                                        [Nn]: Wo,
                                                                      },
                                                                      [lt]: Tr,
                                                                    },
                                                                  ],
                                                                  [lt]: vr,
                                                                },
                                                                {
                                                                  error:
                                                                    "Expected an outpost type `accesspoint`, found {outpostType}",
                                                                  [lt]: si,
                                                                },
                                                              ],
                                                              [lt]: vr,
                                                            },
                                                            {
                                                              error: "Invalid ARN: expected an access point name",
                                                              [lt]: si,
                                                            },
                                                          ],
                                                          [lt]: vr,
                                                        },
                                                        {
                                                          error: "Invalid ARN: Expected a 4-component resource",
                                                          [lt]: si,
                                                        },
                                                      ],
                                                      [lt]: vr,
                                                    },
                                                    Fbr,
                                                  ],
                                                  [lt]: vr,
                                                },
                                                Ubr,
                                              ],
                                              [lt]: vr,
                                            },
                                            $br,
                                          ],
                                          [lt]: vr,
                                        },
                                      ],
                                      [lt]: vr,
                                    },
                                  ],
                                  [lt]: vr,
                                },
                                {
                                  error:
                                    "Invalid ARN: The outpost Id may only contain a-z, A-Z, 0-9 and `-`. Found: `{outpostId}`",
                                  [lt]: si,
                                },
                              ],
                              [lt]: vr,
                            },
                            { error: "Invalid ARN: The Outpost Id was not set", [lt]: si },
                          ],
                          [lt]: vr,
                        },
                        { error: "Invalid ARN: Unrecognized format: {Bucket} (type: {arnType})", [lt]: si },
                      ],
                      [lt]: vr,
                    },
                    { error: "Invalid ARN: No ARN type specified", [lt]: si },
                  ],
                  [lt]: vr,
                },
                {
                  [vt]: [
                    { [Jt]: R0, [Xt]: [Ru, 0, 4, RPa], [ta]: z6i },
                    { [Jt]: zu, [Xt]: [{ [Ri]: z6i }, "arn:"] },
                    { [Jt]: dI, [Xt]: [{ [Jt]: ly, [Xt]: [yyi] }] },
                  ],
                  error: "Invalid ARN: `{Bucket}` was not a valid ARN",
                  [lt]: si,
                },
                {
                  [vt]: [{ [Jt]: mf, [Xt]: [kPa, cI] }, yyi],
                  error: "Path-style addressing cannot be used with ARN buckets",
                  [lt]: si,
                },
                {
                  [vt]: PPa,
                  [_r]: [
                    {
                      [vt]: Sv,
                      [_r]: [
                        {
                          [vt]: [tp],
                          [_r]: [
                            {
                              [vt]: [s0, Ns, tm, Yp],
                              endpoint: {
                                [kn]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                [On]: g3,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            { [vt]: [s0, Ns, tm, pu, b3], [_r]: [{ endpoint: _yi, [lt]: Tr }], [lt]: vr },
                            { [vt]: [s0, Ns, tm, pu, A3], endpoint: _yi, [lt]: Tr },
                            {
                              [vt]: [uu, Ns, tm, Yp],
                              endpoint: {
                                [kn]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                [On]: g3,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            { [vt]: [uu, Ns, tm, pu, b3], [_r]: [{ endpoint: Eyi, [lt]: Tr }], [lt]: vr },
                            { [vt]: [uu, Ns, tm, pu, A3], endpoint: Eyi, [lt]: Tr },
                            {
                              [vt]: [s0, Ns, Sa, Yp],
                              endpoint: {
                                [kn]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}/{uri_encoded_bucket}",
                                [On]: g3,
                                [Nn]: Wo,
                              },
                              [lt]: Tr,
                            },
                            { [vt]: [s0, Ns, Sa, pu, b3], [_r]: [{ endpoint: vyi, [lt]: Tr }], [lt]: vr },
                            { [vt]: [s0, Ns, Sa, pu, A3], endpoint: vyi, [lt]: Tr },
                            { [vt]: [uu, lf, c5, Sa, Yp], endpoint: { [kn]: i_i, [On]: g3, [Nn]: Wo }, [lt]: Tr },
                            {
                              [vt]: [uu, lf, c5, Sa, pu, b3],
                              [_r]: [
                                { [vt]: G$, endpoint: jbr, [lt]: Tr },
                                { endpoint: jbr, [lt]: Tr },
                              ],
                              [lt]: vr,
                            },
                            { [vt]: [uu, lf, c5, Sa, pu, A3], endpoint: jbr, [lt]: Tr },
                            { [vt]: [uu, Ns, Sa, Yp], endpoint: { [kn]: Y6i, [On]: g3, [Nn]: Wo }, [lt]: Tr },
                            {
                              [vt]: [uu, Ns, Sa, pu, b3],
                              [_r]: [
                                { [vt]: G$, endpoint: { [kn]: Y6i, [On]: ip, [Nn]: Wo }, [lt]: Tr },
                                { endpoint: Cyi, [lt]: Tr },
                              ],
                              [lt]: vr,
                            },
                            { [vt]: [uu, Ns, Sa, pu, A3], endpoint: Cyi, [lt]: Tr },
                          ],
                          [lt]: vr,
                        },
                        { error: "Path-style addressing cannot be used with S3 Accelerate", [lt]: si },
                      ],
                      [lt]: vr,
                    },
                  ],
                  [lt]: vr,
                },
              ],
              [lt]: vr,
            },
            {
              [vt]: [
                { [Jt]: ly, [Xt]: [Syi] },
                { [Jt]: mf, [Xt]: [Syi, cI] },
              ],
              [_r]: [
                {
                  [vt]: Sv,
                  [_r]: [
                    {
                      [vt]: Yyi,
                      [_r]: [
                        dyi,
                        fyi,
                        { [vt]: ide, endpoint: { [kn]: Mmt, [On]: Qbr, [Nn]: Wo }, [lt]: Tr },
                        {
                          [vt]: Lmt,
                          endpoint: {
                            [kn]: "https://s3-object-lambda-fips.{Region}.{partitionResult#dnsSuffix}",
                            [On]: Qbr,
                            [Nn]: Wo,
                          },
                          [lt]: Tr,
                        },
                        {
                          endpoint: {
                            [kn]: "https://s3-object-lambda.{Region}.{partitionResult#dnsSuffix}",
                            [On]: Qbr,
                            [Nn]: Wo,
                          },
                          [lt]: Tr,
                        },
                      ],
                      [lt]: vr,
                    },
                    Bmt,
                  ],
                  [lt]: vr,
                },
              ],
              [lt]: vr,
            },
            {
              [vt]: [nyi],
              [_r]: [
                {
                  [vt]: Sv,
                  [_r]: [
                    {
                      [vt]: Yyi,
                      [_r]: [
                        {
                          [vt]: [tm, s0, Ns, Yp],
                          endpoint: {
                            [kn]: "https://s3-fips.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                            [On]: g3,
                            [Nn]: Wo,
                          },
                          [lt]: Tr,
                        },
                        { [vt]: [tm, s0, Ns, pu, b3], [_r]: [{ endpoint: wyi, [lt]: Tr }], [lt]: vr },
                        { [vt]: [tm, s0, Ns, pu, A3], endpoint: wyi, [lt]: Tr },
                        {
                          [vt]: [tm, uu, Ns, Yp],
                          endpoint: {
                            [kn]: "https://s3-fips.us-east-1.{partitionResult#dnsSuffix}",
                            [On]: g3,
                            [Nn]: Wo,
                          },
                          [lt]: Tr,
                        },
                        { [vt]: [tm, uu, Ns, pu, b3], [_r]: [{ endpoint: xyi, [lt]: Tr }], [lt]: vr },
                        { [vt]: [tm, uu, Ns, pu, A3], endpoint: xyi, [lt]: Tr },
                        {
                          [vt]: [Sa, s0, Ns, Yp],
                          endpoint: {
                            [kn]: "https://s3.dualstack.us-east-1.{partitionResult#dnsSuffix}",
                            [On]: g3,
                            [Nn]: Wo,
                          },
                          [lt]: Tr,
                        },
                        { [vt]: [Sa, s0, Ns, pu, b3], [_r]: [{ endpoint: Tyi, [lt]: Tr }], [lt]: vr },
                        { [vt]: [Sa, s0, Ns, pu, A3], endpoint: Tyi, [lt]: Tr },
                        { [vt]: [Sa, uu, lf, c5, Yp], endpoint: { [kn]: Mmt, [On]: g3, [Nn]: Wo }, [lt]: Tr },
                        {
                          [vt]: [Sa, uu, lf, c5, pu, b3],
                          [_r]: [
                            { [vt]: G$, endpoint: Gbr, [lt]: Tr },
                            { endpoint: Gbr, [lt]: Tr },
                          ],
                          [lt]: vr,
                        },
                        { [vt]: [Sa, uu, lf, c5, pu, A3], endpoint: Gbr, [lt]: Tr },
                        { [vt]: [Sa, uu, Ns, Yp], endpoint: { [kn]: K6i, [On]: g3, [Nn]: Wo }, [lt]: Tr },
                        {
                          [vt]: [Sa, uu, Ns, pu, b3],
                          [_r]: [
                            { [vt]: G$, endpoint: { [kn]: K6i, [On]: ip, [Nn]: Wo }, [lt]: Tr },
                            { endpoint: Dyi, [lt]: Tr },
                          ],
                          [lt]: vr,
                        },
                        { [vt]: [Sa, uu, Ns, pu, A3], endpoint: Dyi, [lt]: Tr },
                      ],
                      [lt]: vr,
                    },
                    Bmt,
                  ],
                  [lt]: vr,
                },
              ],
              [lt]: vr,
            },
          ],
          [lt]: vr,
        },
        { error: "A region must be set when sending requests to S3.", [lt]: si },
      ],
    };
  Qmt.ruleSet = UPa;
});