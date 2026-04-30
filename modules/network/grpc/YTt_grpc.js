/**
 * @module YTt
 * @category network/grpc
 * @label grpc
 * @position 489 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (YTt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var YTt = T((qre) => {
  "use strict";
  Object.defineProperty(qre, "__esModule", { value: !0 });
  qre.CompressionFilterFactory = qre.CompressionFilter = void 0;
  var AUe = Ae("zlib"),
    Ien = QTt(),
    Qre = La(),
    w$o = qTt(),
    x$o = g0(),
    T$o = (t) => typeof t == "number" && typeof Ien.CompressionAlgorithms[t] == "string",
    Gre = class {
      async writeMessage(e, r) {
        let n = e;
        r && (n = await this.compressMessage(n));
        let o = Buffer.allocUnsafe(n.length + 5);
        return (o.writeUInt8(r ? 1 : 0, 0), o.writeUInt32BE(n.length, 1), n.copy(o, 5), o);
      }
      async readMessage(e) {
        let r = e.readUInt8(0) === 1,
          n = e.slice(5);
        return (r && (n = await this.decompressMessage(n)), n);
      }
    },
    Eq = class extends Gre {
      async compressMessage(e) {
        return e;
      }
      async writeMessage(e, r) {
        let n = Buffer.allocUnsafe(e.length + 5);
        return (n.writeUInt8(0, 0), n.writeUInt32BE(e.length, 1), e.copy(n, 5), n);
      }
      decompressMessage(e) {
        return Promise.reject(new Error('Received compressed message but "grpc-encoding" header was identity'));
      }
    },
    HTt = class extends Gre {
      constructor(e) {
        (super(), (this.maxRecvMessageLength = e));
      }
      compressMessage(e) {
        return new Promise((r, n) => {
          AUe.deflate(e, (o, s) => {
            o ? n(o) : r(s);
          });
        });
      }
      decompressMessage(e) {
        return new Promise((r, n) => {
          let o = 0,
            s = [],
            a = AUe.createInflate();
          (a.on("data", (u) => {
            (s.push(u),
              (o += u.byteLength),
              this.maxRecvMessageLength !== -1 &&
                o > this.maxRecvMessageLength &&
                (a.destroy(),
                n({
                  code: Qre.Status.RESOURCE_EXHAUSTED,
                  details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`,
                })));
          }),
            a.on("end", () => {
              r(Buffer.concat(s));
            }),
            a.write(e),
            a.end());
        });
      }
    },
    VTt = class extends Gre {
      constructor(e) {
        (super(), (this.maxRecvMessageLength = e));
      }
      compressMessage(e) {
        return new Promise((r, n) => {
          AUe.gzip(e, (o, s) => {
            o ? n(o) : r(s);
          });
        });
      }
      decompressMessage(e) {
        return new Promise((r, n) => {
          let o = 0,
            s = [],
            a = AUe.createGunzip();
          (a.on("data", (u) => {
            (s.push(u),
              (o += u.byteLength),
              this.maxRecvMessageLength !== -1 &&
                o > this.maxRecvMessageLength &&
                (a.destroy(),
                n({
                  code: Qre.Status.RESOURCE_EXHAUSTED,
                  details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`,
                })));
          }),
            a.on("end", () => {
              r(Buffer.concat(s));
            }),
            a.write(e),
            a.end());
        });
      }
    },
    WTt = class extends Gre {
      constructor(e) {
        (super(), (this.compressionName = e));
      }
      compressMessage(e) {
        return Promise.reject(
          new Error(`Received message compressed with unsupported compression method ${this.compressionName}`),
        );
      }
      decompressMessage(e) {
        return Promise.reject(new Error(`Compression method not supported: ${this.compressionName}`));
      }
    };
  function Den(t, e) {
    switch (t) {
      case "identity":
        return new Eq();
      case "deflate":
        return new HTt(e);
      case "gzip":
        return new VTt(e);
      default:
        return new WTt(t);
    }
  }
  var yUe = class extends w$o.BaseFilter {
    constructor(e, r) {
      var n, o, s;
      (super(),
        (this.sharedFilterConfig = r),
        (this.sendCompression = new Eq()),
        (this.receiveCompression = new Eq()),
        (this.currentCompressionAlgorithm = "identity"));
      let a = e["grpc.default_compression_algorithm"];
      if (
        ((this.maxReceiveMessageLength =
          (n = e["grpc.max_receive_message_length"]) !== null && n !== void 0
            ? n
            : Qre.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH),
        (this.maxSendMessageLength =
          (o = e["grpc.max_send_message_length"]) !== null && o !== void 0 ? o : Qre.DEFAULT_MAX_SEND_MESSAGE_LENGTH),
        a !== void 0)
      )
        if (T$o(a)) {
          let u = Ien.CompressionAlgorithms[a],
            c = (s = r.serverSupportedEncodingHeader) === null || s === void 0 ? void 0 : s.split(",");
          (!c || c.includes(u)) &&
            ((this.currentCompressionAlgorithm = u),
            (this.sendCompression = Den(this.currentCompressionAlgorithm, -1)));
        } else
          x$o.log(Qre.LogVerbosity.ERROR, `Invalid value provided for grpc.default_compression_algorithm option: ${a}`);
    }
    async sendMetadata(e) {
      let r = await e;
      return (
        r.set("grpc-accept-encoding", "identity,deflate,gzip"),
        r.set("accept-encoding", "identity"),
        this.currentCompressionAlgorithm === "identity"
          ? r.remove("grpc-encoding")
          : r.set("grpc-encoding", this.currentCompressionAlgorithm),
        r
      );
    }
    receiveMetadata(e) {
      let r = e.get("grpc-encoding");
      if (r.length > 0) {
        let o = r[0];
        typeof o == "string" && (this.receiveCompression = Den(o, this.maxReceiveMessageLength));
      }
      e.remove("grpc-encoding");
      let n = e.get("grpc-accept-encoding")[0];
      return (
        n &&
          ((this.sharedFilterConfig.serverSupportedEncodingHeader = n),
          n.split(",").includes(this.currentCompressionAlgorithm) ||
            ((this.sendCompression = new Eq()), (this.currentCompressionAlgorithm = "identity"))),
        e.remove("grpc-accept-encoding"),
        e
      );
    }
    async sendMessage(e) {
      var r;
      let n = await e;
      if (this.maxSendMessageLength !== -1 && n.message.length > this.maxSendMessageLength)
        throw {
          code: Qre.Status.RESOURCE_EXHAUSTED,
          details: `Attempted to send message with a size larger than ${this.maxSendMessageLength}`,
        };
      let o;
      return (
        this.sendCompression instanceof Eq
          ? (o = !1)
          : (o = (((r = n.flags) !== null && r !== void 0 ? r : 0) & 2) === 0),
        { message: await this.sendCompression.writeMessage(n.message, o), flags: n.flags }
      );
    }
    async receiveMessage(e) {
      return this.receiveCompression.readMessage(await e);
    }
  };
  qre.CompressionFilter = yUe;
  var zTt = class {
    constructor(e, r) {
      ((this.options = r), (this.sharedFilterConfig = {}));
    }
    createFilter() {
      return new yUe(this.options, this.sharedFilterConfig);
    }
  };
  qre.CompressionFilterFactory = zTt;
});