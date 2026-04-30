/**
 * @module T6t
 * @category model/google
 * @label google-auth
 * @position 46 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (T6t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var T6t = T((h_) => {
  "use strict";
  var x1o =
      (h_ && h_.__importDefault) ||
      function (t) {
        return t && t.__esModule ? t : { default: t };
      },
    zIr;
  Object.defineProperty(h_, "__esModule", { value: !0 });
  h_.GaxiosError = h_.GAXIOS_ERROR_SYMBOL = void 0;
  h_.defaultErrorRedactor = KIr;
  var T1o = Ae("url"),
    w6t = WIr(),
    YIr = x1o(m6t());
  h_.GAXIOS_ERROR_SYMBOL = Symbol.for(`${w6t.pkg.name}-gaxios-error`);
  var x6t = class t extends Error {
    static [((zIr = h_.GAXIOS_ERROR_SYMBOL), Symbol.hasInstance)](e) {
      return e && typeof e == "object" && h_.GAXIOS_ERROR_SYMBOL in e && e[h_.GAXIOS_ERROR_SYMBOL] === w6t.pkg.version
        ? !0
        : Function.prototype[Symbol.hasInstance].call(t, e);
    }
    constructor(e, r, n, o) {
      var s;
      if (
        (super(e),
        (this.config = r),
        (this.response = n),
        (this.error = o),
        (this[zIr] = w6t.pkg.version),
        (this.config = (0, YIr.default)(!0, {}, r)),
        this.response && (this.response.config = (0, YIr.default)(!0, {}, this.response.config)),
        this.response)
      ) {
        try {
          this.response.data = D1o(
            this.config.responseType,
            (s = this.response) === null || s === void 0 ? void 0 : s.data,
          );
        } catch {}
        this.status = this.response.status;
      }
      (o && "code" in o && o.code && (this.code = o.code),
        r.errorRedactor && r.errorRedactor({ config: this.config, response: this.response }));
    }
  };
  h_.GaxiosError = x6t;
  function D1o(t, e) {
    switch (t) {
      case "stream":
        return e;
      case "json":
        return JSON.parse(JSON.stringify(e));
      case "arraybuffer":
        return JSON.parse(Buffer.from(e).toString("utf8"));
      case "blob":
        return JSON.parse(e.text());
      default:
        return e;
    }
  }
  function KIr(t) {
    let e = "<<REDACTED> - See `errorRedactor` option in `gaxios` for configuration>.";
    function r(s) {
      if (s)
        for (let a of Object.keys(s))
          (/^authentication$/i.test(a) && (s[a] = e),
            /^authorization$/i.test(a) && (s[a] = e),
            /secret/i.test(a) && (s[a] = e));
    }
    function n(s, a) {
      if (typeof s == "object" && s !== null && typeof s[a] == "string") {
        let u = s[a];
        (/grant_type=/i.test(u) || /assertion=/i.test(u) || /secret/i.test(u)) && (s[a] = e);
      }
    }
    function o(s) {
      typeof s == "object" &&
        s !== null &&
        ("grant_type" in s && (s.grant_type = e),
        "assertion" in s && (s.assertion = e),
        "client_secret" in s && (s.client_secret = e));
    }
    if (t.config) {
      (r(t.config.headers), n(t.config, "data"), o(t.config.data), n(t.config, "body"), o(t.config.body));
      try {
        let s = new T1o.URL("", t.config.url);
        (s.searchParams.has("token") && s.searchParams.set("token", e),
          s.searchParams.has("client_secret") && s.searchParams.set("client_secret", e),
          (t.config.url = s.toString()));
      } catch {}
    }
    return (
      t.response &&
        (KIr({ config: t.response.config }), r(t.response.headers), n(t.response, "data"), o(t.response.data)),
      t
    );
  }
});