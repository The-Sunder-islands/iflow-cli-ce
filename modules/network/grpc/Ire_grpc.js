/**
 * @module Ire
 * @category network/grpc
 * @label grpc
 * @position 433 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ire) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ire = T((Kge) => {
  "use strict";
  Object.defineProperty(Kge, "__esModule", { value: !0 });
  Kge.ChannelCredentials = void 0;
  Kge.createCertificateProviderChannelCredentials = lLo;
  var Yge = Ae("tls"),
    _Fe = bFe(),
    sxt = rxt(),
    sXr = d2(),
    aLo = VC(),
    uLo = g0(),
    cLo = La();
  function oxt(t, e) {
    if (t && !(t instanceof Buffer)) throw new TypeError(`${e}, if provided, must be a Buffer.`);
  }
  var mq = class {
    compose(e) {
      return new cxt(this, e);
    }
    static createSsl(e, r, n, o) {
      var s;
      if ((oxt(e, "Root certificate"), oxt(r, "Private key"), oxt(n, "Certificate chain"), r && !n))
        throw new Error("Private key must be given with accompanying certificate chain");
      if (!r && n) throw new Error("Certificate chain must be given with accompanying private key");
      let a = (0, Yge.createSecureContext)({
        ca: (s = e ?? (0, sxt.getDefaultRootsData)()) !== null && s !== void 0 ? s : void 0,
        key: r ?? void 0,
        cert: n ?? void 0,
        ciphers: sxt.CIPHER_SUITES,
      });
      return new AFe(a, o ?? {});
    }
    static createFromSecureContext(e, r) {
      return new AFe(e, r ?? {});
    }
    static createInsecure() {
      return new axt();
    }
  };
  Kge.ChannelCredentials = mq;
  var axt = class t extends mq {
    constructor() {
      super();
    }
    compose(e) {
      throw new Error("Cannot compose insecure credentials");
    }
    _isSecure() {
      return !1;
    }
    _equals(e) {
      return e instanceof t;
    }
    _createSecureConnector(e, r, n) {
      return {
        connect(o) {
          return Promise.resolve({ socket: o, secure: !1 });
        },
        waitForReady: () => Promise.resolve(),
        getCallCredentials: () => n ?? _Fe.CallCredentials.createEmpty(),
        destroy() {},
      };
    }
  };
  function aXr(t, e, r, n) {
    var o, s;
    let a = { secureContext: t },
      u = r;
    if ("grpc.http_connect_target" in n) {
      let f = (0, sXr.parseUri)(n["grpc.http_connect_target"]);
      f && (u = f);
    }
    let c = (0, aLo.getDefaultAuthority)(u),
      m = (0, sXr.splitHostPort)(c),
      d = (o = m?.host) !== null && o !== void 0 ? o : c;
    if (
      ((a.host = d),
      e.checkServerIdentity && (a.checkServerIdentity = e.checkServerIdentity),
      e.rejectUnauthorized !== void 0 && (a.rejectUnauthorized = e.rejectUnauthorized),
      (a.ALPNProtocols = ["h2"]),
      n["grpc.ssl_target_name_override"])
    ) {
      let f = n["grpc.ssl_target_name_override"],
        p = (s = a.checkServerIdentity) !== null && s !== void 0 ? s : Yge.checkServerIdentity;
      ((a.checkServerIdentity = (h, g) => p(f, g)), (a.servername = f));
    } else a.servername = d;
    return (n["grpc-node.tls_enable_trace"] && (a.enableTrace = !0), a);
  }
  var uxt = class {
      constructor(e, r) {
        ((this.connectionOptions = e), (this.callCredentials = r));
      }
      connect(e) {
        let r = Object.assign({ socket: e }, this.connectionOptions);
        return new Promise((n, o) => {
          let s = (0, Yge.connect)(r, () => {
            var a;
            if ((!((a = this.connectionOptions.rejectUnauthorized) !== null && a !== void 0) || a) && !s.authorized) {
              o(s.authorizationError);
              return;
            }
            n({ socket: s, secure: !0 });
          });
          s.on("error", (a) => {
            o(a);
          });
        });
      }
      waitForReady() {
        return Promise.resolve();
      }
      getCallCredentials() {
        return this.callCredentials;
      }
      destroy() {}
    },
    AFe = class t extends mq {
      constructor(e, r) {
        (super(), (this.secureContext = e), (this.verifyOptions = r));
      }
      _isSecure() {
        return !0;
      }
      _equals(e) {
        return this === e
          ? !0
          : e instanceof t
            ? this.secureContext === e.secureContext &&
              this.verifyOptions.checkServerIdentity === e.verifyOptions.checkServerIdentity
            : !1;
      }
      _createSecureConnector(e, r, n) {
        let o = aXr(this.secureContext, this.verifyOptions, e, r);
        return new uxt(o, n ?? _Fe.CallCredentials.createEmpty());
      }
    },
    yFe = class t extends mq {
      constructor(e, r, n) {
        (super(),
          (this.caCertificateProvider = e),
          (this.identityCertificateProvider = r),
          (this.verifyOptions = n),
          (this.refcount = 0),
          (this.latestCaUpdate = void 0),
          (this.latestIdentityUpdate = void 0),
          (this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this)),
          (this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this)),
          (this.secureContextWatchers = []));
      }
      _isSecure() {
        return !0;
      }
      _equals(e) {
        var r, n;
        return this === e
          ? !0
          : e instanceof t
            ? this.caCertificateProvider === e.caCertificateProvider &&
              this.identityCertificateProvider === e.identityCertificateProvider &&
              ((r = this.verifyOptions) === null || r === void 0 ? void 0 : r.checkServerIdentity) ===
                ((n = e.verifyOptions) === null || n === void 0 ? void 0 : n.checkServerIdentity)
            : !1;
      }
      ref() {
        var e;
        (this.refcount === 0 &&
          (this.caCertificateProvider.addCaCertificateListener(this.caCertificateUpdateListener),
          (e = this.identityCertificateProvider) === null ||
            e === void 0 ||
            e.addIdentityCertificateListener(this.identityCertificateUpdateListener)),
          (this.refcount += 1));
      }
      unref() {
        var e;
        ((this.refcount -= 1),
          this.refcount === 0 &&
            (this.caCertificateProvider.removeCaCertificateListener(this.caCertificateUpdateListener),
            (e = this.identityCertificateProvider) === null ||
              e === void 0 ||
              e.removeIdentityCertificateListener(this.identityCertificateUpdateListener)));
      }
      _createSecureConnector(e, r, n) {
        return (this.ref(), new t.SecureConnectorImpl(this, e, r, n ?? _Fe.CallCredentials.createEmpty()));
      }
      maybeUpdateWatchers() {
        if (this.hasReceivedUpdates()) {
          for (let e of this.secureContextWatchers) e(this.getLatestSecureContext());
          this.secureContextWatchers = [];
        }
      }
      handleCaCertificateUpdate(e) {
        ((this.latestCaUpdate = e), this.maybeUpdateWatchers());
      }
      handleIdentityCertitificateUpdate(e) {
        ((this.latestIdentityUpdate = e), this.maybeUpdateWatchers());
      }
      hasReceivedUpdates() {
        return !(
          this.latestCaUpdate === void 0 ||
          (this.identityCertificateProvider && this.latestIdentityUpdate === void 0)
        );
      }
      getSecureContext() {
        return this.hasReceivedUpdates()
          ? Promise.resolve(this.getLatestSecureContext())
          : new Promise((e) => {
              this.secureContextWatchers.push(e);
            });
      }
      getLatestSecureContext() {
        var e, r;
        if (!this.latestCaUpdate || (this.identityCertificateProvider !== null && !this.latestIdentityUpdate))
          return null;
        try {
          return (0, Yge.createSecureContext)({
            ca: this.latestCaUpdate.caCertificate,
            key: (e = this.latestIdentityUpdate) === null || e === void 0 ? void 0 : e.privateKey,
            cert: (r = this.latestIdentityUpdate) === null || r === void 0 ? void 0 : r.certificate,
            ciphers: sxt.CIPHER_SUITES,
          });
        } catch (n) {
          return ((0, uLo.log)(cLo.LogVerbosity.ERROR, "Failed to createSecureContext with error " + n.message), null);
        }
      }
    };
  yFe.SecureConnectorImpl = class {
    constructor(t, e, r, n) {
      ((this.parent = t), (this.channelTarget = e), (this.options = r), (this.callCredentials = n));
    }
    connect(t) {
      return new Promise((e, r) => {
        let n = this.parent.getLatestSecureContext();
        if (!n) {
          r(new Error("Failed to load credentials"));
          return;
        }
        t.closed && r(new Error("Socket closed while loading credentials"));
        let o = aXr(n, this.parent.verifyOptions, this.channelTarget, this.options),
          s = Object.assign({ socket: t }, o),
          a = () => {
            r(new Error("Socket closed"));
          },
          u = (m) => {
            r(m);
          },
          c = (0, Yge.connect)(s, () => {
            var m;
            if (
              (c.removeListener("close", a),
              c.removeListener("error", u),
              (!((m = this.parent.verifyOptions.rejectUnauthorized) !== null && m !== void 0) || m) && !c.authorized)
            ) {
              r(c.authorizationError);
              return;
            }
            e({ socket: c, secure: !0 });
          });
        (c.once("close", a), c.once("error", u));
      });
    }
    async waitForReady() {
      await this.parent.getSecureContext();
    }
    getCallCredentials() {
      return this.callCredentials;
    }
    destroy() {
      this.parent.unref();
    }
  };
  function lLo(t, e, r) {
    return new yFe(t, e, r ?? {});
  }
  var cxt = class t extends mq {
    constructor(e, r) {
      if ((super(), (this.channelCredentials = e), (this.callCredentials = r), !e._isSecure()))
        throw new Error("Cannot compose insecure credentials");
    }
    compose(e) {
      let r = this.callCredentials.compose(e);
      return new t(this.channelCredentials, r);
    }
    _isSecure() {
      return !0;
    }
    _equals(e) {
      return this === e
        ? !0
        : e instanceof t
          ? this.channelCredentials._equals(e.channelCredentials) && this.callCredentials._equals(e.callCredentials)
          : !1;
    }
    _createSecureConnector(e, r, n) {
      let o = this.callCredentials.compose(n ?? _Fe.CallCredentials.createEmpty());
      return this.channelCredentials._createSecureConnector(e, r, o);
    }
  };
});