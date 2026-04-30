/**
 * @module Hur
 * @category utils/oop
 * @label oop
 * @position 1540 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hur) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hur = T((RCc, Gei) => {
  "use strict";
  var K6 = ks(),
    { kBodyUsed: yCe } = n0(),
    qur = Ae("node:assert"),
    { InvalidArgumentError: Qur } = da(),
    Qda = Ae("node:events"),
    Gda = [300, 301, 302, 303, 307, 308],
    $ei = Symbol("body"),
    jei = () => {},
    kot = class {
      constructor(e) {
        ((this[$ei] = e), (this[yCe] = !1));
      }
      async *[Symbol.asyncIterator]() {
        (qur(!this[yCe], "disturbed"), (this[yCe] = !0), yield* this[$ei]);
      }
    },
    Gur = class t {
      static buildDispatch(e, r) {
        if (r != null && (!Number.isInteger(r) || r < 0)) throw new Qur("maxRedirections must be a positive number");
        let n = e.dispatch.bind(e);
        return (o, s) => n(o, new t(n, r, o, s));
      }
      constructor(e, r, n, o) {
        if (r != null && (!Number.isInteger(r) || r < 0)) throw new Qur("maxRedirections must be a positive number");
        ((this.dispatch = e), (this.location = null));
        let { maxRedirections: s, ...a } = n;
        ((this.opts = a),
          (this.maxRedirections = r),
          (this.handler = o),
          (this.history = []),
          K6.isStream(this.opts.body)
            ? (K6.bodyLength(this.opts.body) === 0 &&
                this.opts.body.on("data", function () {
                  qur(!1);
                }),
              typeof this.opts.body.readableDidRead != "boolean" &&
                ((this.opts.body[yCe] = !1),
                Qda.prototype.on.call(this.opts.body, "data", function () {
                  this[yCe] = !0;
                })))
            : this.opts.body && typeof this.opts.body.pipeTo == "function"
              ? (this.opts.body = new kot(this.opts.body))
              : this.opts.body &&
                typeof this.opts.body != "string" &&
                !ArrayBuffer.isView(this.opts.body) &&
                K6.isIterable(this.opts.body) &&
                !K6.isFormDataLike(this.opts.body) &&
                (this.opts.body = new kot(this.opts.body)));
      }
      onRequestStart(e, r) {
        this.handler.onRequestStart?.(e, { ...r, history: this.history });
      }
      onRequestUpgrade(e, r, n, o) {
        this.handler.onRequestUpgrade?.(e, r, n, o);
      }
      onResponseStart(e, r, n, o) {
        if (this.opts.throwOnMaxRedirect && this.history.length >= this.maxRedirections)
          throw new Error("max redirects");
        if (
          ((r === 301 || r === 302) &&
            this.opts.method === "POST" &&
            ((this.opts.method = "GET"),
            K6.isStream(this.opts.body) && K6.destroy(this.opts.body.on("error", jei)),
            (this.opts.body = null)),
          r === 303 &&
            this.opts.method !== "HEAD" &&
            ((this.opts.method = "GET"),
            K6.isStream(this.opts.body) && K6.destroy(this.opts.body.on("error", jei)),
            (this.opts.body = null)),
          (this.location =
            this.history.length >= this.maxRedirections || K6.isDisturbed(this.opts.body) || Gda.indexOf(r) === -1
              ? null
              : n.location),
          this.opts.origin && this.history.push(new URL(this.opts.path, this.opts.origin)),
          !this.location)
        ) {
          this.handler.onResponseStart?.(e, r, n, o);
          return;
        }
        let {
            origin: s,
            pathname: a,
            search: u,
          } = K6.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))),
          c = u ? `${a}${u}` : a,
          m = `${s}${c}`;
        for (let d of this.history)
          if (d.toString() === m)
            throw new Qur(
              `Redirect loop detected. Cannot redirect to ${s}. This typically happens when using a Client or Pool with cross-origin redirects. Use an Agent for cross-origin redirects.`,
            );
        ((this.opts.headers = qda(this.opts.headers, r === 303, this.opts.origin !== s)),
          (this.opts.path = c),
          (this.opts.origin = s),
          (this.opts.query = null));
      }
      onResponseData(e, r) {
        this.location || this.handler.onResponseData?.(e, r);
      }
      onResponseEnd(e, r) {
        this.location ? this.dispatch(this.opts, this) : this.handler.onResponseEnd(e, r);
      }
      onResponseError(e, r) {
        this.handler.onResponseError?.(e, r);
      }
    };
  function Qei(t, e, r) {
    if (t.length === 4) return K6.headerNameToString(t) === "host";
    if (e && K6.headerNameToString(t).startsWith("content-")) return !0;
    if (r && (t.length === 13 || t.length === 6 || t.length === 19)) {
      let n = K6.headerNameToString(t);
      return n === "authorization" || n === "cookie" || n === "proxy-authorization";
    }
    return !1;
  }
  function qda(t, e, r) {
    let n = [];
    if (Array.isArray(t)) for (let o = 0; o < t.length; o += 2) Qei(t[o], e, r) || n.push(t[o], t[o + 1]);
    else if (t && typeof t == "object") {
      let o = typeof t[Symbol.iterator] == "function" ? t : Object.entries(t);
      for (let [s, a] of o) Qei(s, e, r) || n.push(s, a);
    } else qur(t == null, "headers must be an object or an array");
    return n;
  }
  Gei.exports = Gur;
});