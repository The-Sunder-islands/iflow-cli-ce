/**
 * @module TK
 * @category network/http
 * @label ky
 * @position 1802 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TK) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TK = T((pI) => {
  "use strict";
  var OEi = kEi(),
    Twe = b9(),
    TLa = (t) => ({
      setRegion(e) {
        t.region = e;
      },
      region() {
        return t.region;
      },
    }),
    DLa = (t) => ({ region: t.region() });
  Object.defineProperty(pI, "NODE_REGION_CONFIG_FILE_OPTIONS", {
    enumerable: !0,
    get: function () {
      return Twe.NODE_REGION_CONFIG_FILE_OPTIONS;
    },
  });
  Object.defineProperty(pI, "NODE_REGION_CONFIG_OPTIONS", {
    enumerable: !0,
    get: function () {
      return Twe.NODE_REGION_CONFIG_OPTIONS;
    },
  });
  Object.defineProperty(pI, "REGION_ENV_NAME", {
    enumerable: !0,
    get: function () {
      return Twe.REGION_ENV_NAME;
    },
  });
  Object.defineProperty(pI, "REGION_INI_NAME", {
    enumerable: !0,
    get: function () {
      return Twe.REGION_INI_NAME;
    },
  });
  Object.defineProperty(pI, "resolveRegionConfig", {
    enumerable: !0,
    get: function () {
      return Twe.resolveRegionConfig;
    },
  });
  pI.getAwsRegionExtensionConfiguration = TLa;
  pI.resolveAwsRegionExtensionConfiguration = DLa;
  Object.keys(OEi).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(pI, t) &&
      Object.defineProperty(pI, t, {
        enumerable: !0,
        get: function () {
          return OEi[t];
        },
      });
  });
});
var NEi,
  PEi,
  BEi = j(() => {
    ((NEi = (t) => {
      let e = t.httpAuthSchemes,
        r = t.httpAuthSchemeProvider,
        n = t.credentials;
      return {
        setHttpAuthScheme(o) {
          let s = e.findIndex((a) => a.schemeId === o.schemeId);
          s === -1 ? e.push(o) : e.splice(s, 1, o);
        },
        httpAuthSchemes() {
          return e;
        },
        setHttpAuthSchemeProvider(o) {
          r = o;
        },
        httpAuthSchemeProvider() {
          return r;
        },
        setCredentials(o) {
          n = o;
        },
        credentials() {
          return n;
        },
      };
    }),
      (PEi = (t) => ({
        httpAuthSchemes: t.httpAuthSchemes(),
        httpAuthSchemeProvider: t.httpAuthSchemeProvider(),
        credentials: t.credentials(),
      })));
  });
var odt,
  sdt,
  adt,
  LEi,
  MEi = j(() => {
    ((odt = Se(TK())), (sdt = Se(Tc())), (adt = Se(Ga())));
    BEi();
    LEi = (t, e) => {
      let r = Object.assign(
        (0, odt.getAwsRegionExtensionConfiguration)(t),
        (0, adt.getDefaultExtensionConfiguration)(t),
        (0, sdt.getHttpHandlerExtensionConfiguration)(t),
        NEi(t),
      );
      return (
        e.forEach((n) => n.configure(r)),
        Object.assign(
          t,
          (0, odt.resolveAwsRegionExtensionConfiguration)(r),
          (0, adt.resolveDefaultRuntimeConfig)(r),
          (0, sdt.resolveHttpHandlerRuntimeConfig)(r),
          PEi(r),
        )
      );
    };
  });
var udt,
  FEi,
  UEi,
  cdt,
  $Ei,
  jEi,
  QEi,
  ldt,
  DAr,
  Dwe,
  IAr = j(() => {
    ((udt = Se(Vme())), (FEi = Se(Wme())), (UEi = Se(zme())), (cdt = Se(vK())), ($Ei = Se(b9())));
    EA();
    Wc();
    ((jEi = Se(Zme())), (QEi = Se(QS())), (ldt = Se(GS())), (DAr = Se(Ga())));
    _Ar();
    EAr();
    IEi();
    MEi();
    Dwe = class extends DAr.Client {
      config;
      constructor(...[e]) {
        let r = DEi(e || {});
        (super(r), (this.initConfig = r));
        let n = j_i(r),
          o = (0, cdt.resolveUserAgentConfig)(n),
          s = (0, ldt.resolveRetryConfig)(o),
          a = (0, $Ei.resolveRegionConfig)(s),
          u = (0, udt.resolveHostHeaderConfig)(a),
          c = (0, QEi.resolveEndpointConfig)(u),
          m = $_i(c),
          d = LEi(m, e?.extensions || []);
        ((this.config = d),
          this.middlewareStack.use(uK(this.config)),
          this.middlewareStack.use((0, cdt.getUserAgentPlugin)(this.config)),
          this.middlewareStack.use((0, ldt.getRetryPlugin)(this.config)),
          this.middlewareStack.use((0, jEi.getContentLengthPlugin)(this.config)),
          this.middlewareStack.use((0, udt.getHostHeaderPlugin)(this.config)),
          this.middlewareStack.use((0, FEi.getLoggerPlugin)(this.config)),
          this.middlewareStack.use((0, UEi.getRecursionDetectionPlugin)(this.config)),
          this.middlewareStack.use(
            oK(this.config, {
              httpAuthSchemeParametersProvider: F_i,
              identityProviderConfigProvider: async (f) => new wN({ "aws.auth#sigv4": f.credentials }),
            }),
          ),
          this.middlewareStack.use(sK(this.config)));
      }
      destroy() {
        super.destroy();
      }
    };
  });
var GEi,
  _3,
  mdt = j(() => {
    ((GEi = Se(Ga())),
      (_3 = class t extends GEi.ServiceException {
        constructor(e) {
          (super(e), Object.setPrototypeOf(this, t.prototype));
        }
      }));
  });
var Iwe,
  Rwe,
  kwe,
  Owe,
  Nwe,
  Pwe,
  Bwe,
  Lwe,
  Mwe,
  Fwe,
  Uwe,
  RAr = j(() => {
    mdt();
    ((Iwe = class t extends _3 {
      name = "AccessDeniedException";
      $fault = "client";
      error;
      reason;
      error_description;
      constructor(e) {
        (super({ name: "AccessDeniedException", $fault: "client", ...e }),
          Object.setPrototypeOf(this, t.prototype),
          (this.error = e.error),
          (this.reason = e.reason),
          (this.error_description = e.error_description));
      }
    }),
      (Rwe = class t extends _3 {
        name = "AuthorizationPendingException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "AuthorizationPendingException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }),
      (kwe = class t extends _3 {
        name = "ExpiredTokenException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "ExpiredTokenException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }),
      (Owe = class t extends _3 {
        name = "InternalServerException";
        $fault = "server";
        error;
        error_description;
        constructor(e) {
          (super({ name: "InternalServerException", $fault: "server", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }),
      (Nwe = class t extends _3 {
        name = "InvalidClientException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "InvalidClientException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }),
      (Pwe = class t extends _3 {
        name = "InvalidGrantException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "InvalidGrantException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }),
      (Bwe = class t extends _3 {
        name = "InvalidRequestException";
        $fault = "client";
        error;
        reason;
        error_description;
        constructor(e) {
          (super({ name: "InvalidRequestException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.reason = e.reason),
            (this.error_description = e.error_description));
        }
      }),
      (Lwe = class t extends _3 {
        name = "InvalidScopeException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "InvalidScopeException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }),
      (Mwe = class t extends _3 {
        name = "SlowDownException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "SlowDownException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }),
      (Fwe = class t extends _3 {
        name = "UnauthorizedClientException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "UnauthorizedClientException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }),
      (Uwe = class t extends _3 {
        name = "UnsupportedGrantTypeException";
        $fault = "client";
        error;
        error_description;
        constructor(e) {
          (super({ name: "UnsupportedGrantTypeException", $fault: "client", ...e }),
            Object.setPrototypeOf(this, t.prototype),
            (this.error = e.error),
            (this.error_description = e.error_description));
        }
      }));
  });
var ILa,
  RLa,
  kLa,
  OLa,
  NLa,
  PLa,
  BLa,
  LLa,
  MLa,
  FLa,
  ULa,
  $La,
  jLa,
  QLa,
  GLa,
  qLa,
  HLa,
  VLa,
  WLa,
  zLa,
  hI,
  YLa,
  KLa,
  JLa,
  XLa,
  ZLa,
  S1,
  eMa,
  qS,
  tMa,
  rMa,
  HS,
  nMa,
  qEi,
  HEi,
  iMa,
  oMa,
  sMa,
  VEi,
  aMa,
  pl,
  uMa,
  cMa,
  lMa,
  mMa,
  WEi,
  zEi,
  YEi,
  KEi,
  JEi,
  XEi,
  ZEi,
  evi,
  tvi,
  rvi,
  nvi,
  ivi,
  ovi,
  svi,
  avi,
  kAr,
  OAr = j(() => {
    Wc();
    RAr();
    mdt();
    ((ILa = "AccessDeniedException"),
      (RLa = "AuthorizationPendingException"),
      (kLa = "AccessToken"),
      (OLa = "ClientSecret"),
      (NLa = "CreateToken"),
      (PLa = "CreateTokenRequest"),
      (BLa = "CreateTokenResponse"),
      (LLa = "CodeVerifier"),
      (MLa = "ExpiredTokenException"),
      (FLa = "InvalidClientException"),
      (ULa = "InvalidGrantException"),
      ($La = "InvalidRequestException"),
      (jLa = "InternalServerException"),
      (QLa = "InvalidScopeException"),
      (GLa = "IdToken"),
      (qLa = "RefreshToken"),
      (HLa = "SlowDownException"),
      (VLa = "UnauthorizedClientException"),
      (WLa = "UnsupportedGrantTypeException"),
      (zLa = "accessToken"),
      (hI = "client"),
      (YLa = "clientId"),
      (KLa = "clientSecret"),
      (JLa = "codeVerifier"),
      (XLa = "code"),
      (ZLa = "deviceCode"),
      (S1 = "error"),
      (eMa = "expiresIn"),
      (qS = "error_description"),
      (tMa = "grantType"),
      (rMa = "http"),
      (HS = "httpError"),
      (nMa = "idToken"),
      (qEi = "reason"),
      (HEi = "refreshToken"),
      (iMa = "redirectUri"),
      (oMa = "scope"),
      (sMa = "server"),
      (VEi = "smithy.ts.sdk.synthetic.com.amazonaws.ssooidc"),
      (aMa = "tokenType"),
      (pl = "com.amazonaws.ssooidc"),
      (uMa = [0, pl, kLa, 8, 0]),
      (cMa = [0, pl, OLa, 8, 0]),
      (lMa = [0, pl, LLa, 8, 0]),
      (mMa = [0, pl, GLa, 8, 0]),
      (WEi = [0, pl, qLa, 8, 0]),
      (zEi = [-3, pl, ILa, { [S1]: hI, [HS]: 400 }, [S1, qEi, qS], [0, 0, 0]]));
    es.for(pl).registerError(zEi, Iwe);
    YEi = [-3, pl, RLa, { [S1]: hI, [HS]: 400 }, [S1, qS], [0, 0]];
    es.for(pl).registerError(YEi, Rwe);
    ((KEi = [
      3,
      pl,
      PLa,
      0,
      [YLa, KLa, tMa, ZLa, XLa, HEi, oMa, iMa, JLa],
      [0, [() => cMa, 0], 0, 0, 0, [() => WEi, 0], 64, 0, [() => lMa, 0]],
    ]),
      (JEi = [3, pl, BLa, 0, [zLa, aMa, eMa, HEi, nMa], [[() => uMa, 0], 0, 1, [() => WEi, 0], [() => mMa, 0]]]),
      (XEi = [-3, pl, MLa, { [S1]: hI, [HS]: 400 }, [S1, qS], [0, 0]]));
    es.for(pl).registerError(XEi, kwe);
    ZEi = [-3, pl, jLa, { [S1]: sMa, [HS]: 500 }, [S1, qS], [0, 0]];
    es.for(pl).registerError(ZEi, Owe);
    evi = [-3, pl, FLa, { [S1]: hI, [HS]: 401 }, [S1, qS], [0, 0]];
    es.for(pl).registerError(evi, Nwe);
    tvi = [-3, pl, ULa, { [S1]: hI, [HS]: 400 }, [S1, qS], [0, 0]];
    es.for(pl).registerError(tvi, Pwe);
    rvi = [-3, pl, $La, { [S1]: hI, [HS]: 400 }, [S1, qEi, qS], [0, 0, 0]];
    es.for(pl).registerError(rvi, Bwe);
    nvi = [-3, pl, QLa, { [S1]: hI, [HS]: 400 }, [S1, qS], [0, 0]];
    es.for(pl).registerError(nvi, Lwe);
    ivi = [-3, pl, HLa, { [S1]: hI, [HS]: 400 }, [S1, qS], [0, 0]];
    es.for(pl).registerError(ivi, Mwe);
    ovi = [-3, pl, VLa, { [S1]: hI, [HS]: 400 }, [S1, qS], [0, 0]];
    es.for(pl).registerError(ovi, Fwe);
    svi = [-3, pl, WLa, { [S1]: hI, [HS]: 400 }, [S1, qS], [0, 0]];
    es.for(pl).registerError(svi, Uwe);
    avi = [-3, VEi, "SSOOIDCServiceException", 0, [], []];
    es.for(VEi).registerError(avi, _3);
    kAr = [9, pl, NLa, { [rMa]: ["POST", "/token", 200] }, () => KEi, () => JEi];
  });
var uvi,
  NAr,
  $we,
  PAr = j(() => {
    ((uvi = Se(QS())), (NAr = Se(Ga())));
    EAr();
    OAr();
    $we = class extends (
      NAr.Command.classBuilder()
        .ep(Q_i)
        .m(function (e, r, n, o) {
          return [(0, uvi.getEndpointPlugin)(n, e.getEndpointParameterInstructions())];
        })
        .s("AWSSSOOIDCService", "CreateToken", {})
        .n("SSOOIDCClient", "CreateTokenCommand")
        .sc(kAr)
        .build()
    ) {};
  });
var cvi,
  dMa,
  ddt,
  lvi = j(() => {
    cvi = Se(Ga());
    PAr();
    IAr();
    ((dMa = { CreateTokenCommand: $we }), (ddt = class extends Dwe {}));
    (0, cvi.createAggregatedClient)(dMa, ddt);
  });
var mvi = j(() => {
  PAr();
});
var fMa,
  pMa,
  dvi = j(() => {
    ((fMa = { KMS_ACCESS_DENIED: "KMS_AccessDeniedException" }),
      (pMa = {
        KMS_DISABLED_KEY: "KMS_DisabledException",
        KMS_INVALID_KEY_USAGE: "KMS_InvalidKeyUsageException",
        KMS_INVALID_STATE: "KMS_InvalidStateException",
        KMS_KEY_NOT_FOUND: "KMS_NotFoundException",
      }));
  });
var fvi = j(() => {});
var BAr = {};
Wi(BAr, {
  $Command: () => NAr.Command,
  AccessDeniedException: () => Iwe,
  AccessDeniedException$: () => zEi,
  AccessDeniedExceptionReason: () => fMa,
  AuthorizationPendingException: () => Rwe,
  AuthorizationPendingException$: () => YEi,
  CreateToken$: () => kAr,
  CreateTokenCommand: () => $we,
  CreateTokenRequest$: () => KEi,
  CreateTokenResponse$: () => JEi,
  ExpiredTokenException: () => kwe,
  ExpiredTokenException$: () => XEi,
  InternalServerException: () => Owe,
  InternalServerException$: () => ZEi,
  InvalidClientException: () => Nwe,
  InvalidClientException$: () => evi,
  InvalidGrantException: () => Pwe,
  InvalidGrantException$: () => tvi,
  InvalidRequestException: () => Bwe,
  InvalidRequestException$: () => rvi,
  InvalidRequestExceptionReason: () => pMa,
  InvalidScopeException: () => Lwe,
  InvalidScopeException$: () => nvi,
  SSOOIDC: () => ddt,
  SSOOIDCClient: () => Dwe,
  SSOOIDCServiceException: () => _3,
  SSOOIDCServiceException$: () => avi,
  SlowDownException: () => Mwe,
  SlowDownException$: () => ivi,
  UnauthorizedClientException: () => Fwe,
  UnauthorizedClientException$: () => ovi,
  UnsupportedGrantTypeException: () => Uwe,
  UnsupportedGrantTypeException$: () => svi,
  __Client: () => DAr.Client,
});
var LAr = j(() => {
  IAr();
  lvi();
  mvi();
  OAr();
  dvi();
  RAr();
  fvi();
  mdt();
});