/**
 * @module Jen
 * @category utils/events
 * @label events
 * @position 507 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jen) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jen = T((t4) => {
  "use strict";
  Object.defineProperty(t4, "__esModule", { value: !0 });
  t4.ServerDuplexStreamImpl =
    t4.ServerWritableStreamImpl =
    t4.ServerReadableStreamImpl =
    t4.ServerUnaryCallImpl =
      void 0;
  t4.serverErrorToStatus = $Dt;
  var CQo = Ae("events"),
    FDt = Ae("stream"),
    UDt = La(),
    Ken = Ph();
  function $Dt(t, e) {
    var r;
    let n = {
      code: UDt.Status.UNKNOWN,
      details: "message" in t ? t.message : "Unknown Error",
      metadata: (r = e ?? t.metadata) !== null && r !== void 0 ? r : null,
    };
    return (
      "code" in t &&
        typeof t.code == "number" &&
        Number.isInteger(t.code) &&
        ((n.code = t.code), "details" in t && typeof t.details == "string" && (n.details = t.details)),
      n
    );
  }
  var PDt = class extends CQo.EventEmitter {
    constructor(e, r, n, o) {
      (super(), (this.path = e), (this.call = r), (this.metadata = n), (this.request = o), (this.cancelled = !1));
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  };
  t4.ServerUnaryCallImpl = PDt;
  var BDt = class extends FDt.Readable {
    constructor(e, r, n) {
      (super({ objectMode: !0 }), (this.path = e), (this.call = r), (this.metadata = n), (this.cancelled = !1));
    }
    _read(e) {
      this.call.startRead();
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
  };
  t4.ServerReadableStreamImpl = BDt;
  var LDt = class extends FDt.Writable {
    constructor(e, r, n, o) {
      (super({ objectMode: !0 }),
        (this.path = e),
        (this.call = r),
        (this.metadata = n),
        (this.request = o),
        (this.pendingStatus = { code: UDt.Status.OK, details: "OK" }),
        (this.cancelled = !1),
        (this.trailingMetadata = new Ken.Metadata()),
        this.on("error", (s) => {
          ((this.pendingStatus = $Dt(s)), this.end());
        }));
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _write(e, r, n) {
      this.call.sendMessage(e, n);
    }
    _final(e) {
      var r;
      (e(null),
        this.call.sendStatus(
          Object.assign(Object.assign({}, this.pendingStatus), {
            metadata: (r = this.pendingStatus.metadata) !== null && r !== void 0 ? r : this.trailingMetadata,
          }),
        ));
    }
    end(e) {
      return (e && (this.trailingMetadata = e), super.end());
    }
  };
  t4.ServerWritableStreamImpl = LDt;
  var MDt = class extends FDt.Duplex {
    constructor(e, r, n) {
      (super({ objectMode: !0 }),
        (this.path = e),
        (this.call = r),
        (this.metadata = n),
        (this.pendingStatus = { code: UDt.Status.OK, details: "OK" }),
        (this.cancelled = !1),
        (this.trailingMetadata = new Ken.Metadata()),
        this.on("error", (o) => {
          ((this.pendingStatus = $Dt(o)), this.end());
        }));
    }
    getPeer() {
      return this.call.getPeer();
    }
    sendMetadata(e) {
      this.call.sendMetadata(e);
    }
    getDeadline() {
      return this.call.getDeadline();
    }
    getPath() {
      return this.path;
    }
    getHost() {
      return this.call.getHost();
    }
    getAuthContext() {
      return this.call.getAuthContext();
    }
    getMetricsRecorder() {
      return this.call.getMetricsRecorder();
    }
    _read(e) {
      this.call.startRead();
    }
    _write(e, r, n) {
      this.call.sendMessage(e, n);
    }
    _final(e) {
      var r;
      (e(null),
        this.call.sendStatus(
          Object.assign(Object.assign({}, this.pendingStatus), {
            metadata: (r = this.pendingStatus.metadata) !== null && r !== void 0 ? r : this.trailingMetadata,
          }),
        ));
    }
    end(e) {
      return (e && (this.trailingMetadata = e), super.end());
    }
  };
  t4.ServerDuplexStreamImpl = MDt;
});