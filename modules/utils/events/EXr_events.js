/**
 * @module EXr
 * @category utils/events
 * @label events
 * @position 445 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (EXr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var EXr = T((YC) => {
  "use strict";
  Object.defineProperty(YC, "__esModule", { value: !0 });
  YC.ClientDuplexStreamImpl =
    YC.ClientWritableStreamImpl =
    YC.ClientReadableStreamImpl =
    YC.ClientUnaryCallImpl =
      void 0;
  YC.callErrorFromStatus = lMo;
  var cMo = Ae("events"),
    Ixt = Ae("stream"),
    nbe = La();
  function lMo(t, e) {
    let r = `${t.code} ${nbe.Status[t.code]}: ${t.details}`,
      o = `${new Error(r).stack}
for call at
${e}`;
    return Object.assign(new Error(r), t, { stack: o });
  }
  var wxt = class extends cMo.EventEmitter {
    constructor() {
      super();
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(nbe.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, r;
      return (r = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && r !== void 0
        ? r
        : "unknown";
    }
    getAuthContext() {
      var e, r;
      return (r = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && r !== void 0
        ? r
        : null;
    }
  };
  YC.ClientUnaryCallImpl = wxt;
  var xxt = class extends Ixt.Readable {
    constructor(e) {
      (super({ objectMode: !0 }), (this.deserialize = e));
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(nbe.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, r;
      return (r = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && r !== void 0
        ? r
        : "unknown";
    }
    getAuthContext() {
      var e, r;
      return (r = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && r !== void 0
        ? r
        : null;
    }
    _read(e) {
      var r;
      (r = this.call) === null || r === void 0 || r.startRead();
    }
  };
  YC.ClientReadableStreamImpl = xxt;
  var Txt = class extends Ixt.Writable {
    constructor(e) {
      (super({ objectMode: !0 }), (this.serialize = e));
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(nbe.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, r;
      return (r = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && r !== void 0
        ? r
        : "unknown";
    }
    getAuthContext() {
      var e, r;
      return (r = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && r !== void 0
        ? r
        : null;
    }
    _write(e, r, n) {
      var o;
      let s = { callback: n },
        a = Number(r);
      (Number.isNaN(a) || (s.flags = a), (o = this.call) === null || o === void 0 || o.sendMessageWithContext(s, e));
    }
    _final(e) {
      var r;
      ((r = this.call) === null || r === void 0 || r.halfClose(), e());
    }
  };
  YC.ClientWritableStreamImpl = Txt;
  var Dxt = class extends Ixt.Duplex {
    constructor(e, r) {
      (super({ objectMode: !0 }), (this.serialize = e), (this.deserialize = r));
    }
    cancel() {
      var e;
      (e = this.call) === null || e === void 0 || e.cancelWithStatus(nbe.Status.CANCELLED, "Cancelled on client");
    }
    getPeer() {
      var e, r;
      return (r = (e = this.call) === null || e === void 0 ? void 0 : e.getPeer()) !== null && r !== void 0
        ? r
        : "unknown";
    }
    getAuthContext() {
      var e, r;
      return (r = (e = this.call) === null || e === void 0 ? void 0 : e.getAuthContext()) !== null && r !== void 0
        ? r
        : null;
    }
    _read(e) {
      var r;
      (r = this.call) === null || r === void 0 || r.startRead();
    }
    _write(e, r, n) {
      var o;
      let s = { callback: n },
        a = Number(r);
      (Number.isNaN(a) || (s.flags = a), (o = this.call) === null || o === void 0 || o.sendMessageWithContext(s, e));
    }
    _final(e) {
      var r;
      ((r = this.call) === null || r === void 0 || r.halfClose(), e());
    }
  };
  YC.ClientDuplexStreamImpl = Dxt;
});