/**
 * @module wtn
 * @category network/tls
 * @label tls
 * @position 515 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wtn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wtn = T((JUe) => {
  "use strict";
  Object.defineProperty(JUe, "__esModule", { value: !0 });
  JUe.FileWatcherCertificateProvider = void 0;
  var bGo = Ae("fs"),
    AGo = g0(),
    yGo = La(),
    _Go = Ae("util"),
    EGo = "certificate_provider";
  function KUe(t) {
    AGo.trace(yGo.LogVerbosity.DEBUG, EGo, t);
  }
  var dIt = (0, _Go.promisify)(bGo.readFile),
    fIt = class {
      constructor(e) {
        if (
          ((this.config = e),
          (this.refreshTimer = null),
          (this.fileResultPromise = null),
          (this.latestCaUpdate = void 0),
          (this.caListeners = new Set()),
          (this.latestIdentityUpdate = void 0),
          (this.identityListeners = new Set()),
          (this.lastUpdateTime = null),
          (e.certificateFile === void 0) != (e.privateKeyFile === void 0))
        )
          throw new Error("certificateFile and privateKeyFile must be set or unset together");
        if (e.certificateFile === void 0 && e.caCertificateFile === void 0)
          throw new Error("At least one of certificateFile and caCertificateFile must be set");
        KUe("File watcher constructed with config " + JSON.stringify(e));
      }
      updateCertificates() {
        this.fileResultPromise ||
          ((this.fileResultPromise = Promise.allSettled([
            this.config.certificateFile ? dIt(this.config.certificateFile) : Promise.reject(),
            this.config.privateKeyFile ? dIt(this.config.privateKeyFile) : Promise.reject(),
            this.config.caCertificateFile ? dIt(this.config.caCertificateFile) : Promise.reject(),
          ])),
          this.fileResultPromise.then(([e, r, n]) => {
            if (this.refreshTimer) {
              (KUe(
                "File watcher read certificates certificate " +
                  e.status +
                  ", privateKey " +
                  r.status +
                  ", CA certificate " +
                  n.status,
              ),
                (this.lastUpdateTime = new Date()),
                (this.fileResultPromise = null),
                e.status === "fulfilled" && r.status === "fulfilled"
                  ? (this.latestIdentityUpdate = { certificate: e.value, privateKey: r.value })
                  : (this.latestIdentityUpdate = null),
                n.status === "fulfilled"
                  ? (this.latestCaUpdate = { caCertificate: n.value })
                  : (this.latestCaUpdate = null));
              for (let o of this.identityListeners) o(this.latestIdentityUpdate);
              for (let o of this.caListeners) o(this.latestCaUpdate);
            }
          }),
          KUe("File watcher initiated certificate update"));
      }
      maybeStartWatchingFiles() {
        if (!this.refreshTimer) {
          let e = this.lastUpdateTime ? new Date().getTime() - this.lastUpdateTime.getTime() : 1 / 0;
          (e > this.config.refreshIntervalMs && this.updateCertificates(),
            e > this.config.refreshIntervalMs * 2 &&
              ((this.latestCaUpdate = void 0), (this.latestIdentityUpdate = void 0)),
            (this.refreshTimer = setInterval(() => this.updateCertificates(), this.config.refreshIntervalMs)),
            KUe("File watcher started watching"));
        }
      }
      maybeStopWatchingFiles() {
        this.caListeners.size === 0 &&
          this.identityListeners.size === 0 &&
          ((this.fileResultPromise = null),
          this.refreshTimer && (clearInterval(this.refreshTimer), (this.refreshTimer = null)));
      }
      addCaCertificateListener(e) {
        (this.caListeners.add(e),
          this.maybeStartWatchingFiles(),
          this.latestCaUpdate !== void 0 && process.nextTick(e, this.latestCaUpdate));
      }
      removeCaCertificateListener(e) {
        (this.caListeners.delete(e), this.maybeStopWatchingFiles());
      }
      addIdentityCertificateListener(e) {
        (this.identityListeners.add(e),
          this.maybeStartWatchingFiles(),
          this.latestIdentityUpdate !== void 0 && process.nextTick(e, this.latestIdentityUpdate));
      }
      removeIdentityCertificateListener(e) {
        (this.identityListeners.delete(e), this.maybeStopWatchingFiles());
      }
    };
  JUe.FileWatcherCertificateProvider = fIt;
});