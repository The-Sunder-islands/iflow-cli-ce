/**
 * @module Obe
 * @category utils/oop
 * @label oop
 * @position 504 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Obe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Obe = T((MUe) => {
  "use strict";
  Object.defineProperty(MUe, "__esModule", { value: !0 });
  MUe.BaseSubchannelWrapper = void 0;
  var SDt = class {
    constructor(e) {
      ((this.child = e),
        (this.healthy = !0),
        (this.healthListeners = new Set()),
        (this.refcount = 0),
        (this.dataWatchers = new Set()),
        e.addHealthStateWatcher((r) => {
          this.healthy && this.updateHealthListeners();
        }));
    }
    updateHealthListeners() {
      for (let e of this.healthListeners) e(this.isHealthy());
    }
    getConnectivityState() {
      return this.child.getConnectivityState();
    }
    addConnectivityStateListener(e) {
      this.child.addConnectivityStateListener(e);
    }
    removeConnectivityStateListener(e) {
      this.child.removeConnectivityStateListener(e);
    }
    startConnecting() {
      this.child.startConnecting();
    }
    getAddress() {
      return this.child.getAddress();
    }
    throttleKeepalive(e) {
      this.child.throttleKeepalive(e);
    }
    ref() {
      (this.child.ref(), (this.refcount += 1));
    }
    unref() {
      (this.child.unref(), (this.refcount -= 1), this.refcount === 0 && this.destroy());
    }
    destroy() {
      for (let e of this.dataWatchers) e.destroy();
    }
    getChannelzRef() {
      return this.child.getChannelzRef();
    }
    isHealthy() {
      return this.healthy && this.child.isHealthy();
    }
    addHealthStateWatcher(e) {
      this.healthListeners.add(e);
    }
    removeHealthStateWatcher(e) {
      this.healthListeners.delete(e);
    }
    addDataWatcher(e) {
      (e.setSubchannel(this.getRealSubchannel()), this.dataWatchers.add(e));
    }
    setHealthy(e) {
      e !== this.healthy && ((this.healthy = e), this.child.isHealthy() && this.updateHealthListeners());
    }
    getRealSubchannel() {
      return this.child.getRealSubchannel();
    }
    realSubchannelEquals(e) {
      return this.getRealSubchannel() === e.getRealSubchannel();
    }
    getCallCredentials() {
      return this.child.getCallCredentials();
    }
    getChannel() {
      return this.child.getChannel();
    }
  };
  MUe.BaseSubchannelWrapper = SDt;
});