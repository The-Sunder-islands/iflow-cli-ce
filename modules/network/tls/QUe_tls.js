/**
 * @module QUe
 * @category network/tls
 * @label tls
 * @position 508 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QUe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QUe = T((Jre) => {
  "use strict";
  Object.defineProperty(Jre, "__esModule", { value: !0 });
  Jre.ServerCredentials = void 0;
  Jre.createCertificateProviderServerCredentials = SQo;
  Jre.createServerCredentialsWithInterceptors = wQo;
  var jDt = rxt(),
    Dq = class {
      constructor(e, r) {
        ((this.serverConstructorOptions = e),
          (this.watchers = new Set()),
          (this.latestContextOptions = null),
          (this.latestContextOptions = r ?? null));
      }
      _addWatcher(e) {
        this.watchers.add(e);
      }
      _removeWatcher(e) {
        this.watchers.delete(e);
      }
      getWatcherCount() {
        return this.watchers.size;
      }
      updateSecureContextOptions(e) {
        this.latestContextOptions = e;
        for (let r of this.watchers) r(this.latestContextOptions);
      }
      _isSecure() {
        return this.serverConstructorOptions !== null;
      }
      _getSecureContextOptions() {
        return this.latestContextOptions;
      }
      _getConstructorOptions() {
        return this.serverConstructorOptions;
      }
      _getInterceptors() {
        return [];
      }
      static createInsecure() {
        return new QDt();
      }
      static createSsl(e, r, n = !1) {
        var o;
        if (e !== null && !Buffer.isBuffer(e)) throw new TypeError("rootCerts must be null or a Buffer");
        if (!Array.isArray(r)) throw new TypeError("keyCertPairs must be an array");
        if (typeof n != "boolean") throw new TypeError("checkClientCertificate must be a boolean");
        let s = [],
          a = [];
        for (let u = 0; u < r.length; u++) {
          let c = r[u];
          if (c === null || typeof c != "object") throw new TypeError(`keyCertPair[${u}] must be an object`);
          if (!Buffer.isBuffer(c.private_key)) throw new TypeError(`keyCertPair[${u}].private_key must be a Buffer`);
          if (!Buffer.isBuffer(c.cert_chain)) throw new TypeError(`keyCertPair[${u}].cert_chain must be a Buffer`);
          (s.push(c.cert_chain), a.push(c.private_key));
        }
        return new GDt(
          { requestCert: n, ciphers: jDt.CIPHER_SUITES },
          { ca: (o = e ?? (0, jDt.getDefaultRootsData)()) !== null && o !== void 0 ? o : void 0, cert: s, key: a },
        );
      }
    };
  Jre.ServerCredentials = Dq;
  var QDt = class t extends Dq {
      constructor() {
        super(null);
      }
      _getSettings() {
        return null;
      }
      _equals(e) {
        return e instanceof t;
      }
    },
    GDt = class t extends Dq {
      constructor(e, r) {
        (super(e, r), (this.options = Object.assign(Object.assign({}, e), r)));
      }
      _equals(e) {
        if (this === e) return !0;
        if (!(e instanceof t)) return !1;
        if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(e.options.ca)) {
          if (!this.options.ca.equals(e.options.ca)) return !1;
        } else if (this.options.ca !== e.options.ca) return !1;
        if (Array.isArray(this.options.cert) && Array.isArray(e.options.cert)) {
          if (this.options.cert.length !== e.options.cert.length) return !1;
          for (let r = 0; r < this.options.cert.length; r++) {
            let n = this.options.cert[r],
              o = e.options.cert[r];
            if (Buffer.isBuffer(n) && Buffer.isBuffer(o)) {
              if (!n.equals(o)) return !1;
            } else if (n !== o) return !1;
          }
        } else if (this.options.cert !== e.options.cert) return !1;
        if (Array.isArray(this.options.key) && Array.isArray(e.options.key)) {
          if (this.options.key.length !== e.options.key.length) return !1;
          for (let r = 0; r < this.options.key.length; r++) {
            let n = this.options.key[r],
              o = e.options.key[r];
            if (Buffer.isBuffer(n) && Buffer.isBuffer(o)) {
              if (!n.equals(o)) return !1;
            } else if (n !== o) return !1;
          }
        } else if (this.options.key !== e.options.key) return !1;
        return this.options.requestCert === e.options.requestCert;
      }
    },
    qDt = class t extends Dq {
      constructor(e, r, n) {
        (super({ requestCert: r !== null, rejectUnauthorized: n, ciphers: jDt.CIPHER_SUITES }),
          (this.identityCertificateProvider = e),
          (this.caCertificateProvider = r),
          (this.requireClientCertificate = n),
          (this.latestCaUpdate = null),
          (this.latestIdentityUpdate = null),
          (this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this)),
          (this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this)));
      }
      _addWatcher(e) {
        var r;
        (this.getWatcherCount() === 0 &&
          ((r = this.caCertificateProvider) === null ||
            r === void 0 ||
            r.addCaCertificateListener(this.caCertificateUpdateListener),
          this.identityCertificateProvider.addIdentityCertificateListener(this.identityCertificateUpdateListener)),
          super._addWatcher(e));
      }
      _removeWatcher(e) {
        var r;
        (super._removeWatcher(e),
          this.getWatcherCount() === 0 &&
            ((r = this.caCertificateProvider) === null ||
              r === void 0 ||
              r.removeCaCertificateListener(this.caCertificateUpdateListener),
            this.identityCertificateProvider.removeIdentityCertificateListener(
              this.identityCertificateUpdateListener,
            )));
      }
      _equals(e) {
        return this === e
          ? !0
          : e instanceof t
            ? this.caCertificateProvider === e.caCertificateProvider &&
              this.identityCertificateProvider === e.identityCertificateProvider &&
              this.requireClientCertificate === e.requireClientCertificate
            : !1;
      }
      calculateSecureContextOptions() {
        var e;
        return this.latestIdentityUpdate === null ||
          (this.caCertificateProvider !== null && this.latestCaUpdate === null)
          ? null
          : {
              ca: (e = this.latestCaUpdate) === null || e === void 0 ? void 0 : e.caCertificate,
              cert: [this.latestIdentityUpdate.certificate],
              key: [this.latestIdentityUpdate.privateKey],
            };
      }
      finalizeUpdate() {
        let e = this.calculateSecureContextOptions();
        this.updateSecureContextOptions(e);
      }
      handleCaCertificateUpdate(e) {
        ((this.latestCaUpdate = e), this.finalizeUpdate());
      }
      handleIdentityCertitificateUpdate(e) {
        ((this.latestIdentityUpdate = e), this.finalizeUpdate());
      }
    };
  function SQo(t, e, r) {
    return new qDt(t, e, r);
  }
  var HDt = class t extends Dq {
    constructor(e, r) {
      (super({}), (this.childCredentials = e), (this.interceptors = r));
    }
    _isSecure() {
      return this.childCredentials._isSecure();
    }
    _equals(e) {
      if (
        !(e instanceof t) ||
        !this.childCredentials._equals(e.childCredentials) ||
        this.interceptors.length !== e.interceptors.length
      )
        return !1;
      for (let r = 0; r < this.interceptors.length; r++) if (this.interceptors[r] !== e.interceptors[r]) return !1;
      return !0;
    }
    _getInterceptors() {
      return this.interceptors;
    }
    _addWatcher(e) {
      this.childCredentials._addWatcher(e);
    }
    _removeWatcher(e) {
      this.childCredentials._removeWatcher(e);
    }
    _getConstructorOptions() {
      return this.childCredentials._getConstructorOptions();
    }
    _getSecureContextOptions() {
      return this.childCredentials._getSecureContextOptions();
    }
  };
  function wQo(t, e) {
    return new HDt(t, e);
  }
});