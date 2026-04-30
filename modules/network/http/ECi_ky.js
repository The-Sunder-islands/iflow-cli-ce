/**
 * @module ECi
 * @category network/http
 * @label ky
 * @position 1810 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ECi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ECi = T((ku) => {
  "use strict";
  var qvi = Vme(),
    ZMa = Wme(),
    eFa = zme(),
    Hvi = vK(),
    tFa = b9(),
    qwe = (EA(), bt(hK)),
    _de = (Wc(), bt(r0t)),
    rFa = Zme(),
    Wwe = QS(),
    Vvi = GS(),
    VS = Ga(),
    Wvi = UAr(),
    nFa = Gvi(),
    zvi = TK(),
    Yvi = Tc(),
    iFa = (t) =>
      Object.assign(t, {
        useDualstackEndpoint: t.useDualstackEndpoint ?? !1,
        useFipsEndpoint: t.useFipsEndpoint ?? !1,
        defaultSigningName: "awsssoportal",
      }),
    xdt = {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    },
    oFa = (t) => {
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
    },
    sFa = (t) => ({
      httpAuthSchemes: t.httpAuthSchemes(),
      httpAuthSchemeProvider: t.httpAuthSchemeProvider(),
      credentials: t.credentials(),
    }),
    aFa = (t, e) => {
      let r = Object.assign(
        zvi.getAwsRegionExtensionConfiguration(t),
        VS.getDefaultExtensionConfiguration(t),
        Yvi.getHttpHandlerExtensionConfiguration(t),
        oFa(t),
      );
      return (
        e.forEach((n) => n.configure(r)),
        Object.assign(
          t,
          zvi.resolveAwsRegionExtensionConfiguration(r),
          VS.resolveDefaultRuntimeConfig(r),
          Yvi.resolveHttpHandlerRuntimeConfig(r),
          sFa(r),
        )
      );
    },
    yde = class extends VS.Client {
      config;
      constructor(...[e]) {
        let r = nFa.getRuntimeConfig(e || {});
        (super(r), (this.initConfig = r));
        let n = iFa(r),
          o = Hvi.resolveUserAgentConfig(n),
          s = Vvi.resolveRetryConfig(o),
          a = tFa.resolveRegionConfig(s),
          u = qvi.resolveHostHeaderConfig(a),
          c = Wwe.resolveEndpointConfig(u),
          m = Wvi.resolveHttpAuthSchemeConfig(c),
          d = aFa(m, e?.extensions || []);
        ((this.config = d),
          this.middlewareStack.use(_de.getSchemaSerdePlugin(this.config)),
          this.middlewareStack.use(Hvi.getUserAgentPlugin(this.config)),
          this.middlewareStack.use(Vvi.getRetryPlugin(this.config)),
          this.middlewareStack.use(rFa.getContentLengthPlugin(this.config)),
          this.middlewareStack.use(qvi.getHostHeaderPlugin(this.config)),
          this.middlewareStack.use(ZMa.getLoggerPlugin(this.config)),
          this.middlewareStack.use(eFa.getRecursionDetectionPlugin(this.config)),
          this.middlewareStack.use(
            qwe.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
              httpAuthSchemeParametersProvider: Wvi.defaultSSOHttpAuthSchemeParametersProvider,
              identityProviderConfigProvider: async (f) =>
                new qwe.DefaultIdentityProviderConfig({ "aws.auth#sigv4": f.credentials }),
            }),
          ),
          this.middlewareStack.use(qwe.getHttpSigningPlugin(this.config)));
      }
      destroy() {
        super.destroy();
      }
    },
    Y$ = class t extends VS.ServiceException {
      constructor(e) {
        (super(e), Object.setPrototypeOf(this, t.prototype));
      }
    },
    ydt = class t extends Y$ {
      name = "InvalidRequestException";
      $fault = "client";
      constructor(e) {
        (super({ name: "InvalidRequestException", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    _dt = class t extends Y$ {
      name = "ResourceNotFoundException";
      $fault = "client";
      constructor(e) {
        (super({ name: "ResourceNotFoundException", $fault: "client", ...e }),
          Object.setPrototypeOf(this, t.prototype));
      }
    },
    Edt = class t extends Y$ {
      name = "TooManyRequestsException";
      $fault = "client";
      constructor(e) {
        (super({ name: "TooManyRequestsException", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    vdt = class t extends Y$ {
      name = "UnauthorizedException";
      $fault = "client";
      constructor(e) {
        (super({ name: "UnauthorizedException", $fault: "client", ...e }), Object.setPrototypeOf(this, t.prototype));
      }
    },
    uFa = "AccountInfo",
    cFa = "AccountListType",
    lFa = "AccessTokenType",
    mFa = "GetRoleCredentials",
    dFa = "GetRoleCredentialsRequest",
    fFa = "GetRoleCredentialsResponse",
    pFa = "InvalidRequestException",
    hFa = "Logout",
    gFa = "ListAccounts",
    bFa = "ListAccountsRequest",
    AFa = "ListAccountRolesRequest",
    yFa = "ListAccountRolesResponse",
    _Fa = "ListAccountsResponse",
    EFa = "ListAccountRoles",
    vFa = "LogoutRequest",
    CFa = "RoleCredentials",
    SFa = "RoleInfo",
    wFa = "RoleListType",
    xFa = "ResourceNotFoundException",
    TFa = "SecretAccessKeyType",
    DFa = "SessionTokenType",
    IFa = "TooManyRequestsException",
    RFa = "UnauthorizedException",
    Tdt = "accountId",
    kFa = "accessKeyId",
    OFa = "accountList",
    NFa = "accountName",
    Ddt = "accessToken",
    Kvi = "account_id",
    Idt = "client",
    Rdt = "error",
    PFa = "emailAddress",
    BFa = "expiration",
    kdt = "http",
    Odt = "httpError",
    Ndt = "httpHeader",
    RK = "httpQuery",
    Pdt = "message",
    Jvi = "maxResults",
    Xvi = "max_result",
    Bdt = "nextToken",
    Zvi = "next_token",
    LFa = "roleCredentials",
    MFa = "roleList",
    eCi = "roleName",
    FFa = "role_name",
    tCi = "smithy.ts.sdk.synthetic.com.amazonaws.sso",
    UFa = "secretAccessKey",
    $Fa = "sessionToken",
    Ldt = "x-amz-sso_bearer_token",
    k0 = "com.amazonaws.sso",
    Mdt = [0, k0, lFa, 8, 0],
    jFa = [0, k0, TFa, 8, 0],
    QFa = [0, k0, DFa, 8, 0],
    rCi = [3, k0, uFa, 0, [Tdt, NFa, PFa], [0, 0, 0]],
    nCi = [
      3,
      k0,
      dFa,
      0,
      [eCi, Tdt, Ddt],
      [
        [0, { [RK]: FFa }],
        [0, { [RK]: Kvi }],
        [() => Mdt, { [Ndt]: Ldt }],
      ],
    ],
    iCi = [3, k0, fFa, 0, [LFa], [[() => dCi, 0]]],
    oCi = [-3, k0, pFa, { [Rdt]: Idt, [Odt]: 400 }, [Pdt], [0]];
  _de.TypeRegistry.for(k0).registerError(oCi, ydt);
  var sCi = [
      3,
      k0,
      AFa,
      0,
      [Bdt, Jvi, Ddt, Tdt],
      [
        [0, { [RK]: Zvi }],
        [1, { [RK]: Xvi }],
        [() => Mdt, { [Ndt]: Ldt }],
        [0, { [RK]: Kvi }],
      ],
    ],
    aCi = [3, k0, yFa, 0, [Bdt, MFa], [0, () => HFa]],
    uCi = [
      3,
      k0,
      bFa,
      0,
      [Bdt, Jvi, Ddt],
      [
        [0, { [RK]: Zvi }],
        [1, { [RK]: Xvi }],
        [() => Mdt, { [Ndt]: Ldt }],
      ],
    ],
    cCi = [3, k0, _Fa, 0, [Bdt, OFa], [0, () => qFa]],
    lCi = [3, k0, vFa, 0, [Ddt], [[() => Mdt, { [Ndt]: Ldt }]]],
    mCi = [-3, k0, xFa, { [Rdt]: Idt, [Odt]: 404 }, [Pdt], [0]];
  _de.TypeRegistry.for(k0).registerError(mCi, _dt);
  var dCi = [3, k0, CFa, 0, [kFa, UFa, $Fa, BFa], [0, [() => jFa, 0], [() => QFa, 0], 1]],
    fCi = [3, k0, SFa, 0, [eCi, Tdt], [0, 0]],
    pCi = [-3, k0, IFa, { [Rdt]: Idt, [Odt]: 429 }, [Pdt], [0]];
  _de.TypeRegistry.for(k0).registerError(pCi, Edt);
  var hCi = [-3, k0, RFa, { [Rdt]: Idt, [Odt]: 401 }, [Pdt], [0]];
  _de.TypeRegistry.for(k0).registerError(hCi, vdt);
  var GFa = "unit",
    gCi = [-3, tCi, "SSOServiceException", 0, [], []];
  _de.TypeRegistry.for(tCi).registerError(gCi, Y$);
  var qFa = [1, k0, cFa, 0, () => rCi],
    HFa = [1, k0, wFa, 0, () => fCi],
    bCi = [9, k0, mFa, { [kdt]: ["GET", "/federation/credentials", 200] }, () => nCi, () => iCi],
    ACi = [9, k0, EFa, { [kdt]: ["GET", "/assignment/roles", 200] }, () => sCi, () => aCi],
    yCi = [9, k0, gFa, { [kdt]: ["GET", "/assignment/accounts", 200] }, () => uCi, () => cCi],
    _Ci = [9, k0, hFa, { [kdt]: ["POST", "/logout", 200] }, () => lCi, () => GFa],
    Cdt = class extends VS.Command.classBuilder()
      .ep(xdt)
      .m(function (e, r, n, o) {
        return [Wwe.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("SWBPortalService", "GetRoleCredentials", {})
      .n("SSOClient", "GetRoleCredentialsCommand")
      .sc(bCi)
      .build() {},
    Hwe = class extends VS.Command.classBuilder()
      .ep(xdt)
      .m(function (e, r, n, o) {
        return [Wwe.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("SWBPortalService", "ListAccountRoles", {})
      .n("SSOClient", "ListAccountRolesCommand")
      .sc(ACi)
      .build() {},
    Vwe = class extends VS.Command.classBuilder()
      .ep(xdt)
      .m(function (e, r, n, o) {
        return [Wwe.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("SWBPortalService", "ListAccounts", {})
      .n("SSOClient", "ListAccountsCommand")
      .sc(yCi)
      .build() {},
    Sdt = class extends VS.Command.classBuilder()
      .ep(xdt)
      .m(function (e, r, n, o) {
        return [Wwe.getEndpointPlugin(n, e.getEndpointParameterInstructions())];
      })
      .s("SWBPortalService", "Logout", {})
      .n("SSOClient", "LogoutCommand")
      .sc(_Ci)
      .build() {},
    VFa = {
      GetRoleCredentialsCommand: Cdt,
      ListAccountRolesCommand: Hwe,
      ListAccountsCommand: Vwe,
      LogoutCommand: Sdt,
    },
    wdt = class extends yde {};
  VS.createAggregatedClient(VFa, wdt);
  var WFa = qwe.createPaginator(yde, Hwe, "nextToken", "nextToken", "maxResults"),
    zFa = qwe.createPaginator(yde, Vwe, "nextToken", "nextToken", "maxResults");
  Object.defineProperty(ku, "$Command", {
    enumerable: !0,
    get: function () {
      return VS.Command;
    },
  });
  Object.defineProperty(ku, "__Client", {
    enumerable: !0,
    get: function () {
      return VS.Client;
    },
  });
  ku.AccountInfo$ = rCi;
  ku.GetRoleCredentials$ = bCi;
  ku.GetRoleCredentialsCommand = Cdt;
  ku.GetRoleCredentialsRequest$ = nCi;
  ku.GetRoleCredentialsResponse$ = iCi;
  ku.InvalidRequestException = ydt;
  ku.InvalidRequestException$ = oCi;
  ku.ListAccountRoles$ = ACi;
  ku.ListAccountRolesCommand = Hwe;
  ku.ListAccountRolesRequest$ = sCi;
  ku.ListAccountRolesResponse$ = aCi;
  ku.ListAccounts$ = yCi;
  ku.ListAccountsCommand = Vwe;
  ku.ListAccountsRequest$ = uCi;
  ku.ListAccountsResponse$ = cCi;
  ku.Logout$ = _Ci;
  ku.LogoutCommand = Sdt;
  ku.LogoutRequest$ = lCi;
  ku.ResourceNotFoundException = _dt;
  ku.ResourceNotFoundException$ = mCi;
  ku.RoleCredentials$ = dCi;
  ku.RoleInfo$ = fCi;
  ku.SSO = wdt;
  ku.SSOClient = yde;
  ku.SSOServiceException = Y$;
  ku.SSOServiceException$ = gCi;
  ku.TooManyRequestsException = Edt;
  ku.TooManyRequestsException$ = pCi;
  ku.UnauthorizedException = vdt;
  ku.UnauthorizedException$ = hCi;
  ku.paginateListAccountRoles = WFa;
  ku.paginateListAccounts = zFa;
});