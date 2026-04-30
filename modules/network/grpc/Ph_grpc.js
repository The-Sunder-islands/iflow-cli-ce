/**
 * @module Ph
 * @category network/grpc
 * @label grpc
 * @position 428 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ph) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ph = T((hFe) => {
  "use strict";
  Object.defineProperty(hFe, "__esModule", { value: !0 });
  hFe.Metadata = void 0;
  var UBo = g0(),
    $Bo = La(),
    jBo = fFe(),
    QBo = /^[:0-9a-z_.-]+$/,
    GBo = /^[ -~]*$/;
  function qBo(t) {
    return QBo.test(t);
  }
  function HBo(t) {
    return GBo.test(t);
  }
  function nXr(t) {
    return t.endsWith("-bin");
  }
  function VBo(t) {
    return !t.startsWith("grpc-");
  }
  function pFe(t) {
    return t.toLowerCase();
  }
  function rXr(t, e) {
    if (!qBo(t)) throw new Error('Metadata key "' + t + '" contains illegal characters');
    if (e != null)
      if (nXr(t)) {
        if (!Buffer.isBuffer(e)) throw new Error("keys that end with '-bin' must have Buffer values");
      } else {
        if (Buffer.isBuffer(e)) throw new Error("keys that don't end with '-bin' must have String values");
        if (!HBo(e)) throw new Error('Metadata string value "' + e + '" contains illegal characters');
      }
  }
  var Kwt = class t {
    constructor(e = {}) {
      ((this.internalRepr = new Map()), (this.opaqueData = new Map()), (this.options = e));
    }
    set(e, r) {
      ((e = pFe(e)), rXr(e, r), this.internalRepr.set(e, [r]));
    }
    add(e, r) {
      ((e = pFe(e)), rXr(e, r));
      let n = this.internalRepr.get(e);
      n === void 0 ? this.internalRepr.set(e, [r]) : n.push(r);
    }
    remove(e) {
      ((e = pFe(e)), this.internalRepr.delete(e));
    }
    get(e) {
      return ((e = pFe(e)), this.internalRepr.get(e) || []);
    }
    getMap() {
      let e = {};
      for (let [r, n] of this.internalRepr)
        if (n.length > 0) {
          let o = n[0];
          e[r] = Buffer.isBuffer(o) ? Buffer.from(o) : o;
        }
      return e;
    }
    clone() {
      let e = new t(this.options),
        r = e.internalRepr;
      for (let [n, o] of this.internalRepr) {
        let s = o.map((a) => (Buffer.isBuffer(a) ? Buffer.from(a) : a));
        r.set(n, s);
      }
      return e;
    }
    merge(e) {
      for (let [r, n] of e.internalRepr) {
        let o = (this.internalRepr.get(r) || []).concat(n);
        this.internalRepr.set(r, o);
      }
    }
    setOptions(e) {
      this.options = e;
    }
    getOptions() {
      return this.options;
    }
    toHttp2Headers() {
      let e = {};
      for (let [r, n] of this.internalRepr) r.startsWith(":") || (e[r] = n.map(WBo));
      return e;
    }
    toJSON() {
      let e = {};
      for (let [r, n] of this.internalRepr) e[r] = n;
      return e;
    }
    setOpaque(e, r) {
      this.opaqueData.set(e, r);
    }
    getOpaque(e) {
      return this.opaqueData.get(e);
    }
    static fromHttp2Headers(e) {
      let r = new t();
      for (let n of Object.keys(e)) {
        if (n.charAt(0) === ":") continue;
        let o = e[n];
        try {
          nXr(n)
            ? Array.isArray(o)
              ? o.forEach((s) => {
                  r.add(n, Buffer.from(s, "base64"));
                })
              : o !== void 0 &&
                (VBo(n)
                  ? o.split(",").forEach((s) => {
                      r.add(n, Buffer.from(s.trim(), "base64"));
                    })
                  : r.add(n, Buffer.from(o, "base64")))
            : Array.isArray(o)
              ? o.forEach((s) => {
                  r.add(n, s);
                })
              : o !== void 0 && r.add(n, o);
        } catch (s) {
          let a = `Failed to add metadata entry ${n}: ${o}. ${(0, jBo.getErrorMessage)(s)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
          (0, UBo.log)($Bo.LogVerbosity.ERROR, a);
        }
      }
      return r;
    }
  };
  hFe.Metadata = Kwt;
  var WBo = (t) => (Buffer.isBuffer(t) ? t.toString("base64") : t);
});