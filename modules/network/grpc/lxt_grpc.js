/**
 * @module lxt
 * @category network/grpc
 * @label grpc
 * @position 435 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lxt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lxt = T((Xge) => {
  "use strict";
  Object.defineProperty(Xge, "__esModule", { value: !0 });
  Xge.validateRetryThrottling = cXr;
  Xge.validateServiceConfig = lXr;
  Xge.extractAndSelectServiceConfig = ILo;
  var _Lo = Ae("os"),
    EFe = La(),
    vFe = /^\d+(\.\d{1,9})?s$/,
    ELo = "node";
  function vLo(t) {
    if ("service" in t && t.service !== "") {
      if (typeof t.service != "string")
        throw new Error(`Invalid method config name: invalid service: expected type string, got ${typeof t.service}`);
      if ("method" in t && t.method !== "") {
        if (typeof t.method != "string")
          throw new Error(`Invalid method config name: invalid method: expected type string, got ${typeof t.service}`);
        return { service: t.service, method: t.method };
      } else return { service: t.service };
    } else {
      if ("method" in t && t.method !== void 0)
        throw new Error("Invalid method config name: method set with empty or unset service");
      return {};
    }
  }
  function CLo(t) {
    if (!("maxAttempts" in t) || !Number.isInteger(t.maxAttempts) || t.maxAttempts < 2)
      throw new Error("Invalid method config retry policy: maxAttempts must be an integer at least 2");
    if (!("initialBackoff" in t) || typeof t.initialBackoff != "string" || !vFe.test(t.initialBackoff))
      throw new Error(
        "Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer or decimal followed by s",
      );
    if (!("maxBackoff" in t) || typeof t.maxBackoff != "string" || !vFe.test(t.maxBackoff))
      throw new Error(
        "Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer or decimal followed by s",
      );
    if (!("backoffMultiplier" in t) || typeof t.backoffMultiplier != "number" || t.backoffMultiplier <= 0)
      throw new Error("Invalid method config retry policy: backoffMultiplier must be a number greater than 0");
    if (!("retryableStatusCodes" in t && Array.isArray(t.retryableStatusCodes)))
      throw new Error("Invalid method config retry policy: retryableStatusCodes is required");
    if (t.retryableStatusCodes.length === 0)
      throw new Error("Invalid method config retry policy: retryableStatusCodes must be non-empty");
    for (let e of t.retryableStatusCodes)
      if (typeof e == "number") {
        if (!Object.values(EFe.Status).includes(e))
          throw new Error("Invalid method config retry policy: retryableStatusCodes value not in status code range");
      } else if (typeof e == "string") {
        if (!Object.values(EFe.Status).includes(e.toUpperCase()))
          throw new Error("Invalid method config retry policy: retryableStatusCodes value not a status code name");
      } else
        throw new Error("Invalid method config retry policy: retryableStatusCodes value must be a string or number");
    return {
      maxAttempts: t.maxAttempts,
      initialBackoff: t.initialBackoff,
      maxBackoff: t.maxBackoff,
      backoffMultiplier: t.backoffMultiplier,
      retryableStatusCodes: t.retryableStatusCodes,
    };
  }
  function SLo(t) {
    if (!("maxAttempts" in t) || !Number.isInteger(t.maxAttempts) || t.maxAttempts < 2)
      throw new Error("Invalid method config hedging policy: maxAttempts must be an integer at least 2");
    if ("hedgingDelay" in t && (typeof t.hedgingDelay != "string" || !vFe.test(t.hedgingDelay)))
      throw new Error(
        "Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s",
      );
    if ("nonFatalStatusCodes" in t && Array.isArray(t.nonFatalStatusCodes))
      for (let r of t.nonFatalStatusCodes)
        if (typeof r == "number") {
          if (!Object.values(EFe.Status).includes(r))
            throw new Error("Invalid method config hedging policy: nonFatalStatusCodes value not in status code range");
        } else if (typeof r == "string") {
          if (!Object.values(EFe.Status).includes(r.toUpperCase()))
            throw new Error("Invalid method config hedging policy: nonFatalStatusCodes value not a status code name");
        } else
          throw new Error("Invalid method config hedging policy: nonFatalStatusCodes value must be a string or number");
    let e = { maxAttempts: t.maxAttempts };
    return (
      t.hedgingDelay && (e.hedgingDelay = t.hedgingDelay),
      t.nonFatalStatusCodes && (e.nonFatalStatusCodes = t.nonFatalStatusCodes),
      e
    );
  }
  function wLo(t) {
    var e;
    let r = { name: [] };
    if (!("name" in t) || !Array.isArray(t.name)) throw new Error("Invalid method config: invalid name array");
    for (let n of t.name) r.name.push(vLo(n));
    if ("waitForReady" in t) {
      if (typeof t.waitForReady != "boolean") throw new Error("Invalid method config: invalid waitForReady");
      r.waitForReady = t.waitForReady;
    }
    if ("timeout" in t)
      if (typeof t.timeout == "object") {
        if (!("seconds" in t.timeout) || typeof t.timeout.seconds != "number")
          throw new Error("Invalid method config: invalid timeout.seconds");
        if (!("nanos" in t.timeout) || typeof t.timeout.nanos != "number")
          throw new Error("Invalid method config: invalid timeout.nanos");
        r.timeout = t.timeout;
      } else if (typeof t.timeout == "string" && vFe.test(t.timeout)) {
        let n = t.timeout.substring(0, t.timeout.length - 1).split(".");
        r.timeout = { seconds: n[0] | 0, nanos: ((e = n[1]) !== null && e !== void 0 ? e : 0) | 0 };
      } else throw new Error("Invalid method config: invalid timeout");
    if ("maxRequestBytes" in t) {
      if (typeof t.maxRequestBytes != "number") throw new Error("Invalid method config: invalid maxRequestBytes");
      r.maxRequestBytes = t.maxRequestBytes;
    }
    if ("maxResponseBytes" in t) {
      if (typeof t.maxResponseBytes != "number") throw new Error("Invalid method config: invalid maxRequestBytes");
      r.maxResponseBytes = t.maxResponseBytes;
    }
    if ("retryPolicy" in t) {
      if ("hedgingPolicy" in t)
        throw new Error("Invalid method config: retryPolicy and hedgingPolicy cannot both be specified");
      r.retryPolicy = CLo(t.retryPolicy);
    } else "hedgingPolicy" in t && (r.hedgingPolicy = SLo(t.hedgingPolicy));
    return r;
  }
  function cXr(t) {
    if (!("maxTokens" in t) || typeof t.maxTokens != "number" || t.maxTokens <= 0 || t.maxTokens > 1e3)
      throw new Error("Invalid retryThrottling: maxTokens must be a number in (0, 1000]");
    if (!("tokenRatio" in t) || typeof t.tokenRatio != "number" || t.tokenRatio <= 0)
      throw new Error("Invalid retryThrottling: tokenRatio must be a number greater than 0");
    return { maxTokens: +t.maxTokens.toFixed(3), tokenRatio: +t.tokenRatio.toFixed(3) };
  }
  function xLo(t) {
    if (!(typeof t == "object" && t !== null))
      throw new Error(`Invalid loadBalancingConfig: unexpected type ${typeof t}`);
    let e = Object.keys(t);
    if (e.length > 1) throw new Error(`Invalid loadBalancingConfig: unexpected multiple keys ${e}`);
    if (e.length === 0) throw new Error("Invalid loadBalancingConfig: load balancing policy name required");
    return { [e[0]]: t[e[0]] };
  }
  function lXr(t) {
    let e = { loadBalancingConfig: [], methodConfig: [] };
    if ("loadBalancingPolicy" in t)
      if (typeof t.loadBalancingPolicy == "string") e.loadBalancingPolicy = t.loadBalancingPolicy;
      else throw new Error("Invalid service config: invalid loadBalancingPolicy");
    if ("loadBalancingConfig" in t)
      if (Array.isArray(t.loadBalancingConfig)) for (let n of t.loadBalancingConfig) e.loadBalancingConfig.push(xLo(n));
      else throw new Error("Invalid service config: invalid loadBalancingConfig");
    if ("methodConfig" in t && Array.isArray(t.methodConfig)) for (let n of t.methodConfig) e.methodConfig.push(wLo(n));
    "retryThrottling" in t && (e.retryThrottling = cXr(t.retryThrottling));
    let r = [];
    for (let n of e.methodConfig)
      for (let o of n.name) {
        for (let s of r)
          if (o.service === s.service && o.method === s.method)
            throw new Error(`Invalid service config: duplicate name ${o.service}/${o.method}`);
        r.push(o);
      }
    return e;
  }
  function TLo(t) {
    if (!("serviceConfig" in t)) throw new Error("Invalid service config choice: missing service config");
    let e = { serviceConfig: lXr(t.serviceConfig) };
    if ("clientLanguage" in t)
      if (Array.isArray(t.clientLanguage)) {
        e.clientLanguage = [];
        for (let n of t.clientLanguage)
          if (typeof n == "string") e.clientLanguage.push(n);
          else throw new Error("Invalid service config choice: invalid clientLanguage");
      } else throw new Error("Invalid service config choice: invalid clientLanguage");
    if ("clientHostname" in t)
      if (Array.isArray(t.clientHostname)) {
        e.clientHostname = [];
        for (let n of t.clientHostname)
          if (typeof n == "string") e.clientHostname.push(n);
          else throw new Error("Invalid service config choice: invalid clientHostname");
      } else throw new Error("Invalid service config choice: invalid clientHostname");
    if ("percentage" in t)
      if (typeof t.percentage == "number" && 0 <= t.percentage && t.percentage <= 100) e.percentage = t.percentage;
      else throw new Error("Invalid service config choice: invalid percentage");
    let r = ["clientLanguage", "percentage", "clientHostname", "serviceConfig"];
    for (let n in t) if (!r.includes(n)) throw new Error(`Invalid service config choice: unexpected field ${n}`);
    return e;
  }
  function DLo(t, e) {
    if (!Array.isArray(t)) throw new Error("Invalid service config list");
    for (let r of t) {
      let n = TLo(r);
      if (!(typeof n.percentage == "number" && e > n.percentage)) {
        if (Array.isArray(n.clientHostname)) {
          let o = !1;
          for (let s of n.clientHostname) s === _Lo.hostname() && (o = !0);
          if (!o) continue;
        }
        if (Array.isArray(n.clientLanguage)) {
          let o = !1;
          for (let s of n.clientLanguage) s === ELo && (o = !0);
          if (!o) continue;
        }
        return n.serviceConfig;
      }
    }
    throw new Error("No matching service config found");
  }
  function ILo(t, e) {
    for (let r of t)
      if (r.length > 0 && r[0].startsWith("grpc_config=")) {
        let n = r.join("").substring(12),
          o = JSON.parse(n);
        return DLo(o, e);
      }
    return null;
  }
});