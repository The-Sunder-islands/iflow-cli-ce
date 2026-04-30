/**
 * @module Wbe
 * @category network/grpc
 * @label grpc
 * @position 525 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wbe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wbe = T((L_) => {
  "use strict";
  Object.defineProperty(L_, "__esModule", { value: !0 });
  L_.createOtlpGrpcExporterTransport =
    L_.GrpcExporterTransport =
    L_.createEmptyMetadata =
    L_.createSslCredentials =
    L_.createInsecureCredentials =
      void 0;
  var jqo = 0,
    Qqo = 2;
  function Gqo(t) {
    return t === "gzip" ? Qqo : jqo;
  }
  function qqo() {
    let { credentials: t } = Vbe();
    return t.createInsecure();
  }
  L_.createInsecureCredentials = qqo;
  function Hqo(t, e, r) {
    let { credentials: n } = Vbe();
    return n.createSsl(t, e, r);
  }
  L_.createSslCredentials = Hqo;
  function Vqo() {
    let { Metadata: t } = Vbe();
    return new t();
  }
  L_.createEmptyMetadata = Vqo;
  var f$e = class {
    _parameters;
    _client;
    _metadata;
    constructor(e) {
      this._parameters = e;
    }
    shutdown() {
      this._client?.close();
    }
    send(e, r) {
      let n = Buffer.from(e);
      if (this._client == null) {
        let { createServiceClientConstructor: o } = ern();
        try {
          this._metadata = this._parameters.metadata();
        } catch (a) {
          return Promise.resolve({ status: "failure", error: a });
        }
        let s = o(this._parameters.grpcPath, this._parameters.grpcName);
        try {
          this._client = new s(this._parameters.address, this._parameters.credentials(), {
            "grpc.default_compression_algorithm": Gqo(this._parameters.compression),
          });
        } catch (a) {
          return Promise.resolve({ status: "failure", error: a });
        }
      }
      return new Promise((o) => {
        let s = Date.now() + r;
        if (this._metadata == null) return o({ error: new Error("metadata was null"), status: "failure" });
        this._client.export(n, this._metadata, { deadline: s }, (a, u) => {
          o(a ? { status: "failure", error: a } : { data: u, status: "success" });
        });
      });
    }
  };
  L_.GrpcExporterTransport = f$e;
  function Wqo(t) {
    return new f$e(t);
  }
  L_.createOtlpGrpcExporterTransport = Wqo;
});