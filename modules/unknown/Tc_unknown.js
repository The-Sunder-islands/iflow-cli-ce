/**
 * @module Tc
 * @category unknown
 * @label unknown
 * @position 1705 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tc) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tc = T((h$) => {
  "use strict";
  var uTa = yN(),
    cTa = (t) => ({
      setHttpHandler(e) {
        t.httpHandler = e;
      },
      httpHandler() {
        return t.httpHandler;
      },
      updateHttpClientConfig(e, r) {
        t.httpHandler?.updateHttpClientConfig(e, r);
      },
      httpHandlerConfigs() {
        return t.httpHandler.httpHandlerConfigs();
      },
    }),
    lTa = (t) => ({ httpHandler: t.httpHandler() }),
    $pr = class {
      name;
      kind;
      values;
      constructor({ name: e, kind: r = uTa.FieldPosition.HEADER, values: n = [] }) {
        ((this.name = e), (this.kind = r), (this.values = n));
      }
      add(e) {
        this.values.push(e);
      }
      set(e) {
        this.values = e;
      }
      remove(e) {
        this.values = this.values.filter((r) => r !== e);
      }
      toString() {
        return this.values.map((e) => (e.includes(",") || e.includes(" ") ? `"${e}"` : e)).join(", ");
      }
      get() {
        return this.values;
      }
    },
    jpr = class {
      entries = {};
      encoding;
      constructor({ fields: e = [], encoding: r = "utf-8" }) {
        (e.forEach(this.setField.bind(this)), (this.encoding = r));
      }
      setField(e) {
        this.entries[e.name.toLowerCase()] = e;
      }
      getField(e) {
        return this.entries[e.toLowerCase()];
      }
      removeField(e) {
        delete this.entries[e.toLowerCase()];
      }
      getByType(e) {
        return Object.values(this.entries).filter((r) => r.kind === e);
      }
    },
    Qpr = class t {
      method;
      protocol;
      hostname;
      port;
      path;
      query;
      headers;
      username;
      password;
      fragment;
      body;
      constructor(e) {
        ((this.method = e.method || "GET"),
          (this.hostname = e.hostname || "localhost"),
          (this.port = e.port),
          (this.query = e.query || {}),
          (this.headers = e.headers || {}),
          (this.body = e.body),
          (this.protocol = e.protocol ? (e.protocol.slice(-1) !== ":" ? `${e.protocol}:` : e.protocol) : "https:"),
          (this.path = e.path ? (e.path.charAt(0) !== "/" ? `/${e.path}` : e.path) : "/"),
          (this.username = e.username),
          (this.password = e.password),
          (this.fragment = e.fragment));
      }
      static clone(e) {
        let r = new t({ ...e, headers: { ...e.headers } });
        return (r.query && (r.query = mTa(r.query)), r);
      }
      static isInstance(e) {
        if (!e) return !1;
        let r = e;
        return (
          "method" in r &&
          "protocol" in r &&
          "hostname" in r &&
          "path" in r &&
          typeof r.query == "object" &&
          typeof r.headers == "object"
        );
      }
      clone() {
        return t.clone(this);
      }
    };
  function mTa(t) {
    return Object.keys(t).reduce((e, r) => {
      let n = t[r];
      return { ...e, [r]: Array.isArray(n) ? [...n] : n };
    }, {});
  }
  var Gpr = class {
    statusCode;
    reason;
    headers;
    body;
    constructor(e) {
      ((this.statusCode = e.statusCode),
        (this.reason = e.reason),
        (this.headers = e.headers || {}),
        (this.body = e.body));
    }
    static isInstance(e) {
      if (!e) return !1;
      let r = e;
      return typeof r.statusCode == "number" && typeof r.headers == "object";
    }
  };
  function dTa(t) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(t);
  }
  h$.Field = $pr;
  h$.Fields = jpr;
  h$.HttpRequest = Qpr;
  h$.HttpResponse = Gpr;
  h$.getHttpHandlerExtensionConfiguration = cTa;
  h$.isValidHostname = dTa;
  h$.resolveHttpHandlerRuntimeConfig = lTa;
});