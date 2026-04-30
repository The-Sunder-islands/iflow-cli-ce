/**
 * @module ZSt
 * @category utils/oop
 * @label oop
 * @position 388 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZSt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZSt = T((LMe) => {
  "use strict";
  Object.defineProperty(LMe, "__esModule", { value: !0 });
  LMe.ParentBasedSampler = void 0;
  var BMe = (Zt(), bt(cr)),
    RNo = Ii(),
    jKr = OMe(),
    JSt = PMe(),
    XSt = class {
      _root;
      _remoteParentSampled;
      _remoteParentNotSampled;
      _localParentSampled;
      _localParentNotSampled;
      constructor(e) {
        ((this._root = e.root),
          this._root ||
            ((0, RNo.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")),
            (this._root = new JSt.AlwaysOnSampler())),
          (this._remoteParentSampled = e.remoteParentSampled ?? new JSt.AlwaysOnSampler()),
          (this._remoteParentNotSampled = e.remoteParentNotSampled ?? new jKr.AlwaysOffSampler()),
          (this._localParentSampled = e.localParentSampled ?? new JSt.AlwaysOnSampler()),
          (this._localParentNotSampled = e.localParentNotSampled ?? new jKr.AlwaysOffSampler()));
      }
      shouldSample(e, r, n, o, s, a) {
        let u = BMe.trace.getSpanContext(e);
        return !u || !(0, BMe.isSpanContextValid)(u)
          ? this._root.shouldSample(e, r, n, o, s, a)
          : u.isRemote
            ? u.traceFlags & BMe.TraceFlags.SAMPLED
              ? this._remoteParentSampled.shouldSample(e, r, n, o, s, a)
              : this._remoteParentNotSampled.shouldSample(e, r, n, o, s, a)
            : u.traceFlags & BMe.TraceFlags.SAMPLED
              ? this._localParentSampled.shouldSample(e, r, n, o, s, a)
              : this._localParentNotSampled.shouldSample(e, r, n, o, s, a);
      }
      toString() {
        return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
      }
    };
  LMe.ParentBasedSampler = XSt;
});