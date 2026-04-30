/**
 * @module Dur
 * @category utils/cache
 * @label cache
 * @position 1531 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Dur) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Dur = T((yCc, Tur) => {
  "use strict";
  var { kMockCallHistoryAddLog: Hma } = Jz(),
    { InvalidArgumentError: xU } = da();
  function SU(t, e, r, n) {
    switch (e.operator) {
      case "OR":
        return (n.push(...r(t)), n);
      case "AND":
        return r.call({ logs: n }, t);
      default:
        throw new xU("options.operator must to be a case insensitive string equal to 'OR' or 'AND'");
    }
  }
  function Vma(t = {}) {
    let e = {};
    if ("operator" in t) {
      if (typeof t.operator != "string" || (t.operator.toUpperCase() !== "OR" && t.operator.toUpperCase() !== "AND"))
        throw new xU("options.operator must to be a case insensitive string equal to 'OR' or 'AND'");
      return { ...e, operator: t.operator.toUpperCase() };
    }
    return e;
  }
  function wU(t) {
    return (e) => {
      if (typeof e == "string" || e == null) return this.logs.filter((r) => r[t] === e);
      if (e instanceof RegExp) return this.logs.filter((r) => e.test(r[t]));
      throw new xU(`${t} parameter should be one of string, regexp, undefined or null`);
    };
  }
  function Wma(t) {
    try {
      let e = new URL(t.path, t.origin);
      return (e.search.length !== 0 || (e.search = new URLSearchParams(t.query).toString()), e);
    } catch (e) {
      throw new xU("An error occurred when computing MockCallHistoryLog.url", { cause: e });
    }
  }
  var Sot = class {
      constructor(e = {}) {
        ((this.body = e.body), (this.headers = e.headers), (this.method = e.method));
        let r = Wma(e);
        ((this.fullUrl = r.toString()),
          (this.origin = r.origin),
          (this.path = r.pathname),
          (this.searchParams = Object.fromEntries(r.searchParams)),
          (this.protocol = r.protocol),
          (this.host = r.host),
          (this.port = r.port),
          (this.hash = r.hash));
      }
      toMap() {
        return new Map([
          ["protocol", this.protocol],
          ["host", this.host],
          ["port", this.port],
          ["origin", this.origin],
          ["path", this.path],
          ["hash", this.hash],
          ["searchParams", this.searchParams],
          ["fullUrl", this.fullUrl],
          ["method", this.method],
          ["body", this.body],
          ["headers", this.headers],
        ]);
      }
      toString() {
        let e = { betweenKeyValueSeparator: "->", betweenPairSeparator: "|" },
          r = "";
        return (
          this.toMap().forEach((n, o) => {
            ((typeof n == "string" || n === void 0 || n === null) &&
              (r = `${r}${o}${e.betweenKeyValueSeparator}${n}${e.betweenPairSeparator}`),
              ((typeof n == "object" && n !== null) || Array.isArray(n)) &&
                (r = `${r}${o}${e.betweenKeyValueSeparator}${JSON.stringify(n)}${e.betweenPairSeparator}`));
          }),
          r.slice(0, -1)
        );
      }
    },
    xur = class {
      logs = [];
      calls() {
        return this.logs;
      }
      firstCall() {
        return this.logs.at(0);
      }
      lastCall() {
        return this.logs.at(-1);
      }
      nthCall(e) {
        if (typeof e != "number") throw new xU("nthCall must be called with a number");
        if (!Number.isInteger(e)) throw new xU("nthCall must be called with an integer");
        if (Math.sign(e) !== 1)
          throw new xU("nthCall must be called with a positive value. use firstCall or lastCall instead");
        return this.logs.at(e - 1);
      }
      filterCalls(e, r) {
        if (this.logs.length === 0) return this.logs;
        if (typeof e == "function") return this.logs.filter(e);
        if (e instanceof RegExp) return this.logs.filter((n) => e.test(n.toString()));
        if (typeof e == "object" && e !== null) {
          if (Object.keys(e).length === 0) return this.logs;
          let n = { operator: "OR", ...Vma(r) },
            o = [];
          return (
            "protocol" in e && (o = SU(e.protocol, n, this.filterCallsByProtocol, o)),
            "host" in e && (o = SU(e.host, n, this.filterCallsByHost, o)),
            "port" in e && (o = SU(e.port, n, this.filterCallsByPort, o)),
            "origin" in e && (o = SU(e.origin, n, this.filterCallsByOrigin, o)),
            "path" in e && (o = SU(e.path, n, this.filterCallsByPath, o)),
            "hash" in e && (o = SU(e.hash, n, this.filterCallsByHash, o)),
            "fullUrl" in e && (o = SU(e.fullUrl, n, this.filterCallsByFullUrl, o)),
            "method" in e && (o = SU(e.method, n, this.filterCallsByMethod, o)),
            [...new Set(o)]
          );
        }
        throw new xU("criteria parameter should be one of function, regexp, or object");
      }
      filterCallsByProtocol = wU.call(this, "protocol");
      filterCallsByHost = wU.call(this, "host");
      filterCallsByPort = wU.call(this, "port");
      filterCallsByOrigin = wU.call(this, "origin");
      filterCallsByPath = wU.call(this, "path");
      filterCallsByHash = wU.call(this, "hash");
      filterCallsByFullUrl = wU.call(this, "fullUrl");
      filterCallsByMethod = wU.call(this, "method");
      clear() {
        this.logs = [];
      }
      [Hma](e) {
        let r = new Sot(e);
        return (this.logs.push(r), r);
      }
      *[Symbol.iterator]() {
        for (let e of this.calls()) yield e;
      }
    };
  Tur.exports.MockCallHistory = xur;
  Tur.exports.MockCallHistoryLog = Sot;
});