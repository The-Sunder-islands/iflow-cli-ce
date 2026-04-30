/**
 * @module da
 * @category network/http
 * @label undici
 * @position 1477 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (da) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var da = T((gvc, IYn) => {
  "use strict";
  var sYn = Symbol.for("undici.error.UND_ERR"),
    Md = class extends Error {
      constructor(e, r) {
        (super(e, r), (this.name = "UndiciError"), (this.code = "UND_ERR"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[sYn] === !0;
      }
      get [sYn]() {
        return !0;
      }
    },
    aYn = Symbol.for("undici.error.UND_ERR_CONNECT_TIMEOUT"),
    jor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "ConnectTimeoutError"),
          (this.message = e || "Connect Timeout Error"),
          (this.code = "UND_ERR_CONNECT_TIMEOUT"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[aYn] === !0;
      }
      get [aYn]() {
        return !0;
      }
    },
    uYn = Symbol.for("undici.error.UND_ERR_HEADERS_TIMEOUT"),
    Qor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "HeadersTimeoutError"),
          (this.message = e || "Headers Timeout Error"),
          (this.code = "UND_ERR_HEADERS_TIMEOUT"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[uYn] === !0;
      }
      get [uYn]() {
        return !0;
      }
    },
    cYn = Symbol.for("undici.error.UND_ERR_HEADERS_OVERFLOW"),
    Gor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "HeadersOverflowError"),
          (this.message = e || "Headers Overflow Error"),
          (this.code = "UND_ERR_HEADERS_OVERFLOW"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[cYn] === !0;
      }
      get [cYn]() {
        return !0;
      }
    },
    lYn = Symbol.for("undici.error.UND_ERR_BODY_TIMEOUT"),
    qor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "BodyTimeoutError"),
          (this.message = e || "Body Timeout Error"),
          (this.code = "UND_ERR_BODY_TIMEOUT"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[lYn] === !0;
      }
      get [lYn]() {
        return !0;
      }
    },
    mYn = Symbol.for("undici.error.UND_ERR_INVALID_ARG"),
    Hor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "InvalidArgumentError"),
          (this.message = e || "Invalid Argument Error"),
          (this.code = "UND_ERR_INVALID_ARG"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[mYn] === !0;
      }
      get [mYn]() {
        return !0;
      }
    },
    dYn = Symbol.for("undici.error.UND_ERR_INVALID_RETURN_VALUE"),
    Vor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "InvalidReturnValueError"),
          (this.message = e || "Invalid Return Value Error"),
          (this.code = "UND_ERR_INVALID_RETURN_VALUE"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[dYn] === !0;
      }
      get [dYn]() {
        return !0;
      }
    },
    fYn = Symbol.for("undici.error.UND_ERR_ABORT"),
    Sit = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "AbortError"),
          (this.message = e || "The operation was aborted"),
          (this.code = "UND_ERR_ABORT"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[fYn] === !0;
      }
      get [fYn]() {
        return !0;
      }
    },
    pYn = Symbol.for("undici.error.UND_ERR_ABORTED"),
    Wor = class extends Sit {
      constructor(e) {
        (super(e),
          (this.name = "AbortError"),
          (this.message = e || "Request aborted"),
          (this.code = "UND_ERR_ABORTED"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[pYn] === !0;
      }
      get [pYn]() {
        return !0;
      }
    },
    hYn = Symbol.for("undici.error.UND_ERR_INFO"),
    zor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "InformationalError"),
          (this.message = e || "Request information"),
          (this.code = "UND_ERR_INFO"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[hYn] === !0;
      }
      get [hYn]() {
        return !0;
      }
    },
    gYn = Symbol.for("undici.error.UND_ERR_REQ_CONTENT_LENGTH_MISMATCH"),
    Yor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "RequestContentLengthMismatchError"),
          (this.message = e || "Request body length does not match content-length header"),
          (this.code = "UND_ERR_REQ_CONTENT_LENGTH_MISMATCH"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[gYn] === !0;
      }
      get [gYn]() {
        return !0;
      }
    },
    bYn = Symbol.for("undici.error.UND_ERR_RES_CONTENT_LENGTH_MISMATCH"),
    Kor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "ResponseContentLengthMismatchError"),
          (this.message = e || "Response body length does not match content-length header"),
          (this.code = "UND_ERR_RES_CONTENT_LENGTH_MISMATCH"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[bYn] === !0;
      }
      get [bYn]() {
        return !0;
      }
    },
    AYn = Symbol.for("undici.error.UND_ERR_DESTROYED"),
    Jor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "ClientDestroyedError"),
          (this.message = e || "The client is destroyed"),
          (this.code = "UND_ERR_DESTROYED"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[AYn] === !0;
      }
      get [AYn]() {
        return !0;
      }
    },
    yYn = Symbol.for("undici.error.UND_ERR_CLOSED"),
    Xor = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "ClientClosedError"),
          (this.message = e || "The client is closed"),
          (this.code = "UND_ERR_CLOSED"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[yYn] === !0;
      }
      get [yYn]() {
        return !0;
      }
    },
    _Yn = Symbol.for("undici.error.UND_ERR_SOCKET"),
    Zor = class extends Md {
      constructor(e, r) {
        (super(e),
          (this.name = "SocketError"),
          (this.message = e || "Socket error"),
          (this.code = "UND_ERR_SOCKET"),
          (this.socket = r));
      }
      static [Symbol.hasInstance](e) {
        return e && e[_Yn] === !0;
      }
      get [_Yn]() {
        return !0;
      }
    },
    EYn = Symbol.for("undici.error.UND_ERR_NOT_SUPPORTED"),
    esr = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "NotSupportedError"),
          (this.message = e || "Not supported error"),
          (this.code = "UND_ERR_NOT_SUPPORTED"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[EYn] === !0;
      }
      get [EYn]() {
        return !0;
      }
    },
    vYn = Symbol.for("undici.error.UND_ERR_BPL_MISSING_UPSTREAM"),
    tsr = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "MissingUpstreamError"),
          (this.message = e || "No upstream has been added to the BalancedPool"),
          (this.code = "UND_ERR_BPL_MISSING_UPSTREAM"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[vYn] === !0;
      }
      get [vYn]() {
        return !0;
      }
    },
    CYn = Symbol.for("undici.error.UND_ERR_HTTP_PARSER"),
    rsr = class extends Error {
      constructor(e, r, n) {
        (super(e),
          (this.name = "HTTPParserError"),
          (this.code = r ? `HPE_${r}` : void 0),
          (this.data = n ? n.toString() : void 0));
      }
      static [Symbol.hasInstance](e) {
        return e && e[CYn] === !0;
      }
      get [CYn]() {
        return !0;
      }
    },
    SYn = Symbol.for("undici.error.UND_ERR_RES_EXCEEDED_MAX_SIZE"),
    nsr = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "ResponseExceededMaxSizeError"),
          (this.message = e || "Response content exceeded max size"),
          (this.code = "UND_ERR_RES_EXCEEDED_MAX_SIZE"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[SYn] === !0;
      }
      get [SYn]() {
        return !0;
      }
    },
    wYn = Symbol.for("undici.error.UND_ERR_REQ_RETRY"),
    isr = class extends Md {
      constructor(e, r, { headers: n, data: o }) {
        (super(e),
          (this.name = "RequestRetryError"),
          (this.message = e || "Request retry error"),
          (this.code = "UND_ERR_REQ_RETRY"),
          (this.statusCode = r),
          (this.data = o),
          (this.headers = n));
      }
      static [Symbol.hasInstance](e) {
        return e && e[wYn] === !0;
      }
      get [wYn]() {
        return !0;
      }
    },
    xYn = Symbol.for("undici.error.UND_ERR_RESPONSE"),
    osr = class extends Md {
      constructor(e, r, { headers: n, body: o }) {
        (super(e),
          (this.name = "ResponseError"),
          (this.message = e || "Response error"),
          (this.code = "UND_ERR_RESPONSE"),
          (this.statusCode = r),
          (this.body = o),
          (this.headers = n));
      }
      static [Symbol.hasInstance](e) {
        return e && e[xYn] === !0;
      }
      get [xYn]() {
        return !0;
      }
    },
    TYn = Symbol.for("undici.error.UND_ERR_PRX_TLS"),
    ssr = class extends Md {
      constructor(e, r, n = {}) {
        (super(r, { cause: e, ...n }),
          (this.name = "SecureProxyConnectionError"),
          (this.message = r || "Secure Proxy Connection failed"),
          (this.code = "UND_ERR_PRX_TLS"),
          (this.cause = e));
      }
      static [Symbol.hasInstance](e) {
        return e && e[TYn] === !0;
      }
      get [TYn]() {
        return !0;
      }
    },
    DYn = Symbol.for("undici.error.UND_ERR_MAX_ORIGINS_REACHED"),
    asr = class extends Md {
      constructor(e) {
        (super(e),
          (this.name = "MaxOriginsReachedError"),
          (this.message = e || "Maximum allowed origins reached"),
          (this.code = "UND_ERR_MAX_ORIGINS_REACHED"));
      }
      static [Symbol.hasInstance](e) {
        return e && e[DYn] === !0;
      }
      get [DYn]() {
        return !0;
      }
    };
  IYn.exports = {
    AbortError: Sit,
    HTTPParserError: rsr,
    UndiciError: Md,
    HeadersTimeoutError: Qor,
    HeadersOverflowError: Gor,
    BodyTimeoutError: qor,
    RequestContentLengthMismatchError: Yor,
    ConnectTimeoutError: jor,
    InvalidArgumentError: Hor,
    InvalidReturnValueError: Vor,
    RequestAbortedError: Wor,
    ClientDestroyedError: Jor,
    ClientClosedError: Xor,
    InformationalError: zor,
    SocketError: Zor,
    NotSupportedError: esr,
    ResponseContentLengthMismatchError: Kor,
    BalancedPoolMissingUpstreamError: tsr,
    ResponseExceededMaxSizeError: nsr,
    RequestRetryError: isr,
    ResponseError: osr,
    SecureProxyConnectionError: ssr,
    MaxOriginsReachedError: asr,
  };
});