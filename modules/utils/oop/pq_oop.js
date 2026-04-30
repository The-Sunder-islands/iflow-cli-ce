/**
 * @module pq
 * @category utils/oop
 * @label oop
 * @position 446 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pq) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pq = T((fq) => {
  "use strict";
  Object.defineProperty(fq, "__esModule", { value: !0 });
  fq.InterceptingListenerImpl = void 0;
  fq.statusOrFromValue = dMo;
  fq.statusOrFromError = fMo;
  fq.isInterceptingListener = pMo;
  var mMo = Ph();
  function dMo(t) {
    return { ok: !0, value: t };
  }
  function fMo(t) {
    var e;
    return {
      ok: !1,
      error: Object.assign(Object.assign({}, t), {
        metadata: (e = t.metadata) !== null && e !== void 0 ? e : new mMo.Metadata(),
      }),
    };
  }
  function pMo(t) {
    return t.onReceiveMetadata !== void 0 && t.onReceiveMetadata.length === 1;
  }
  var Rxt = class {
    constructor(e, r) {
      ((this.listener = e),
        (this.nextListener = r),
        (this.processingMetadata = !1),
        (this.hasPendingMessage = !1),
        (this.processingMessage = !1),
        (this.pendingStatus = null));
    }
    processPendingMessage() {
      this.hasPendingMessage &&
        (this.nextListener.onReceiveMessage(this.pendingMessage),
        (this.pendingMessage = null),
        (this.hasPendingMessage = !1));
    }
    processPendingStatus() {
      this.pendingStatus && this.nextListener.onReceiveStatus(this.pendingStatus);
    }
    onReceiveMetadata(e) {
      ((this.processingMetadata = !0),
        this.listener.onReceiveMetadata(e, (r) => {
          ((this.processingMetadata = !1),
            this.nextListener.onReceiveMetadata(r),
            this.processPendingMessage(),
            this.processPendingStatus());
        }));
    }
    onReceiveMessage(e) {
      ((this.processingMessage = !0),
        this.listener.onReceiveMessage(e, (r) => {
          ((this.processingMessage = !1),
            this.processingMetadata
              ? ((this.pendingMessage = r), (this.hasPendingMessage = !0))
              : (this.nextListener.onReceiveMessage(r), this.processPendingStatus()));
        }));
    }
    onReceiveStatus(e) {
      this.listener.onReceiveStatus(e, (r) => {
        this.processingMetadata || this.processingMessage
          ? (this.pendingStatus = r)
          : this.nextListener.onReceiveStatus(r);
      });
    }
  };
  fq.InterceptingListenerImpl = Rxt;
});