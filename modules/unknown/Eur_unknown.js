/**
 * @module Eur
 * @category unknown
 * @label unknown
 * @position 1529 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Eur) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Eur = T((bCc, _ur) => {
  "use strict";
  var { getResponseData: Lma, buildKey: Mma, addMockDispatch: hur } = pCe(),
    {
      kDispatches: _ot,
      kDispatchKey: Eot,
      kDefaultHeaders: gur,
      kDefaultTrailers: bur,
      kContentLength: Aur,
      kMockDispatch: vot,
      kIgnoreTrailingSlash: Cot,
    } = Jz(),
    { InvalidArgumentError: RD } = da(),
    { serializePathWithQuery: Fma } = ks(),
    Cle = class {
      constructor(e) {
        this[vot] = e;
      }
      delay(e) {
        if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
          throw new RD("waitInMs must be a valid integer > 0");
        return ((this[vot].delay = e), this);
      }
      persist() {
        return ((this[vot].persist = !0), this);
      }
      times(e) {
        if (typeof e != "number" || !Number.isInteger(e) || e <= 0)
          throw new RD("repeatTimes must be a valid integer > 0");
        return ((this[vot].times = e), this);
      }
    },
    yur = class {
      constructor(e, r) {
        if (typeof e != "object") throw new RD("opts must be an object");
        if (typeof e.path > "u") throw new RD("opts.path must be defined");
        if ((typeof e.method > "u" && (e.method = "GET"), typeof e.path == "string"))
          if (e.query) e.path = Fma(e.path, e.query);
          else {
            let n = new URL(e.path, "data://");
            e.path = n.pathname + n.search;
          }
        (typeof e.method == "string" && (e.method = e.method.toUpperCase()),
          (this[Eot] = Mma(e)),
          (this[_ot] = r),
          (this[Cot] = e.ignoreTrailingSlash ?? !1),
          (this[gur] = {}),
          (this[bur] = {}),
          (this[Aur] = !1));
      }
      createMockScopeDispatchData({ statusCode: e, data: r, responseOptions: n }) {
        let o = Lma(r),
          s = this[Aur] ? { "content-length": o.length } : {},
          a = { ...this[gur], ...s, ...n.headers },
          u = { ...this[bur], ...n.trailers };
        return { statusCode: e, data: r, headers: a, trailers: u };
      }
      validateReplyParameters(e) {
        if (typeof e.statusCode > "u") throw new RD("statusCode must be defined");
        if (typeof e.responseOptions != "object" || e.responseOptions === null)
          throw new RD("responseOptions must be an object");
      }
      reply(e) {
        if (typeof e == "function") {
          let s = (u) => {
              let c = e(u);
              if (typeof c != "object" || c === null) throw new RD("reply options callback must return an object");
              let m = { data: "", responseOptions: {}, ...c };
              return (this.validateReplyParameters(m), { ...this.createMockScopeDispatchData(m) });
            },
            a = hur(this[_ot], this[Eot], s, { ignoreTrailingSlash: this[Cot] });
          return new Cle(a);
        }
        let r = {
          statusCode: e,
          data: arguments[1] === void 0 ? "" : arguments[1],
          responseOptions: arguments[2] === void 0 ? {} : arguments[2],
        };
        this.validateReplyParameters(r);
        let n = this.createMockScopeDispatchData(r),
          o = hur(this[_ot], this[Eot], n, { ignoreTrailingSlash: this[Cot] });
        return new Cle(o);
      }
      replyWithError(e) {
        if (typeof e > "u") throw new RD("error must be defined");
        let r = hur(this[_ot], this[Eot], { error: e }, { ignoreTrailingSlash: this[Cot] });
        return new Cle(r);
      }
      defaultReplyHeaders(e) {
        if (typeof e > "u") throw new RD("headers must be defined");
        return ((this[gur] = e), this);
      }
      defaultReplyTrailers(e) {
        if (typeof e > "u") throw new RD("trailers must be defined");
        return ((this[bur] = e), this);
      }
      replyContentLength() {
        return ((this[Aur] = !0), this);
      }
    };
  _ur.exports.MockInterceptor = yur;
  _ur.exports.MockScope = Cle;
});