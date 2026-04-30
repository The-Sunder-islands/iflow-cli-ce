/**
 * @module TIr
 * @category unknown
 * @label unknown
 * @position 39 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (TIr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var TIr = T((xIr) => {
  "use strict";
  var r1 = ex();
  xIr.implementation = class {
    constructor(e) {
      let r = e[0],
        n = e[1],
        o = null;
      if (n !== void 0 && ((o = r1.basicURLParse(n)), o === "failure")) throw new TypeError("Invalid base URL");
      let s = r1.basicURLParse(r, { baseURL: o });
      if (s === "failure") throw new TypeError("Invalid URL");
      this._url = s;
    }
    get href() {
      return r1.serializeURL(this._url);
    }
    set href(e) {
      let r = r1.basicURLParse(e);
      if (r === "failure") throw new TypeError("Invalid URL");
      this._url = r;
    }
    get origin() {
      return r1.serializeURLOrigin(this._url);
    }
    get protocol() {
      return this._url.scheme + ":";
    }
    set protocol(e) {
      r1.basicURLParse(e + ":", { url: this._url, stateOverride: "scheme start" });
    }
    get username() {
      return this._url.username;
    }
    set username(e) {
      r1.cannotHaveAUsernamePasswordPort(this._url) || r1.setTheUsername(this._url, e);
    }
    get password() {
      return this._url.password;
    }
    set password(e) {
      r1.cannotHaveAUsernamePasswordPort(this._url) || r1.setThePassword(this._url, e);
    }
    get host() {
      let e = this._url;
      return e.host === null
        ? ""
        : e.port === null
          ? r1.serializeHost(e.host)
          : r1.serializeHost(e.host) + ":" + r1.serializeInteger(e.port);
    }
    set host(e) {
      this._url.cannotBeABaseURL || r1.basicURLParse(e, { url: this._url, stateOverride: "host" });
    }
    get hostname() {
      return this._url.host === null ? "" : r1.serializeHost(this._url.host);
    }
    set hostname(e) {
      this._url.cannotBeABaseURL || r1.basicURLParse(e, { url: this._url, stateOverride: "hostname" });
    }
    get port() {
      return this._url.port === null ? "" : r1.serializeInteger(this._url.port);
    }
    set port(e) {
      r1.cannotHaveAUsernamePasswordPort(this._url) ||
        (e === "" ? (this._url.port = null) : r1.basicURLParse(e, { url: this._url, stateOverride: "port" }));
    }
    get pathname() {
      return this._url.cannotBeABaseURL
        ? this._url.path[0]
        : this._url.path.length === 0
          ? ""
          : "/" + this._url.path.join("/");
    }
    set pathname(e) {
      this._url.cannotBeABaseURL ||
        ((this._url.path = []), r1.basicURLParse(e, { url: this._url, stateOverride: "path start" }));
    }
    get search() {
      return this._url.query === null || this._url.query === "" ? "" : "?" + this._url.query;
    }
    set search(e) {
      let r = this._url;
      if (e === "") {
        r.query = null;
        return;
      }
      let n = e[0] === "?" ? e.substring(1) : e;
      ((r.query = ""), r1.basicURLParse(n, { url: r, stateOverride: "query" }));
    }
    get hash() {
      return this._url.fragment === null || this._url.fragment === "" ? "" : "#" + this._url.fragment;
    }
    set hash(e) {
      if (e === "") {
        this._url.fragment = null;
        return;
      }
      let r = e[0] === "#" ? e.substring(1) : e;
      ((this._url.fragment = ""), r1.basicURLParse(r, { url: this._url, stateOverride: "fragment" }));
    }
    toJSON() {
      return this.href;
    }
  };
});