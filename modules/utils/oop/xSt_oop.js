/**
 * @module xSt
 * @category utils/oop
 * @label oop
 * @position 366 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xSt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xSt = T((lMe) => {
  "use strict";
  Object.defineProperty(lMe, "__esModule", { value: !0 });
  lMe.ParentBasedSampler = void 0;
  var cMe = (Zt(), bt(cr)),
    HOo = Ii(),
    hKr = sMe(),
    SSt = uMe(),
    wSt = class {
      _root;
      _remoteParentSampled;
      _remoteParentNotSampled;
      _localParentSampled;
      _localParentNotSampled;
      constructor(e) {
        ((this._root = e.root),
          this._root ||
            ((0, HOo.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")),
            (this._root = new SSt.AlwaysOnSampler())),
          (this._remoteParentSampled = e.remoteParentSampled ?? new SSt.AlwaysOnSampler()),
          (this._remoteParentNotSampled = e.remoteParentNotSampled ?? new hKr.AlwaysOffSampler()),
          (this._localParentSampled = e.localParentSampled ?? new SSt.AlwaysOnSampler()),
          (this._localParentNotSampled = e.localParentNotSampled ?? new hKr.AlwaysOffSampler()));
      }
      shouldSample(e, r, n, o, s, a) {
        let u = cMe.trace.getSpanContext(e);
        return !u || !(0, cMe.isSpanContextValid)(u)
          ? this._root.shouldSample(e, r, n, o, s, a)
          : u.isRemote
            ? u.traceFlags & cMe.TraceFlags.SAMPLED
              ? this._remoteParentSampled.shouldSample(e, r, n, o, s, a)
              : this._remoteParentNotSampled.shouldSample(e, r, n, o, s, a)
            : u.traceFlags & cMe.TraceFlags.SAMPLED
              ? this._localParentSampled.shouldSample(e, r, n, o, s, a)
              : this._localParentNotSampled.shouldSample(e, r, n, o, s, a);
      }
      toString() {
        return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
      }
    };
  lMe.ParentBasedSampler = wSt;
});