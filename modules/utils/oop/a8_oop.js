/**
 * @module a8
 * @category utils/oop
 * @label oop
 * @position 442 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (a8) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var a8 = T((WC) => {
  "use strict";
  Object.defineProperty(WC, "__esModule", { value: !0 });
  WC.EndpointMap = void 0;
  WC.isTcpSubchannelAddress = rbe;
  WC.subchannelAddressEqual = RFe;
  WC.subchannelAddressToString = bXr;
  WC.stringToSubchannelAddress = iMo;
  WC.endpointEqual = oMo;
  WC.endpointToString = sMo;
  WC.endpointHasAddress = AXr;
  var gXr = Ae("net");
  function rbe(t) {
    return "port" in t;
  }
  function RFe(t, e) {
    return !t && !e
      ? !0
      : !t || !e
        ? !1
        : rbe(t)
          ? rbe(e) && t.host === e.host && t.port === e.port
          : !rbe(e) && t.path === e.path;
  }
  function bXr(t) {
    return rbe(t) ? ((0, gXr.isIPv6)(t.host) ? "[" + t.host + "]:" + t.port : t.host + ":" + t.port) : t.path;
  }
  var nMo = 443;
  function iMo(t, e) {
    return (0, gXr.isIP)(t) ? { host: t, port: e ?? nMo } : { path: t };
  }
  function oMo(t, e) {
    if (t.addresses.length !== e.addresses.length) return !1;
    for (let r = 0; r < t.addresses.length; r++) if (!RFe(t.addresses[r], e.addresses[r])) return !1;
    return !0;
  }
  function sMo(t) {
    return "[" + t.addresses.map(bXr).join(", ") + "]";
  }
  function AXr(t, e) {
    for (let r of t.addresses) if (RFe(r, e)) return !0;
    return !1;
  }
  function tbe(t, e) {
    if (t.addresses.length !== e.addresses.length) return !1;
    for (let r of t.addresses) {
      let n = !1;
      for (let o of e.addresses)
        if (RFe(r, o)) {
          n = !0;
          break;
        }
      if (!n) return !1;
    }
    return !0;
  }
  var gxt = class {
    constructor() {
      this.map = new Set();
    }
    get size() {
      return this.map.size;
    }
    getForSubchannelAddress(e) {
      for (let r of this.map) if (AXr(r.key, e)) return r.value;
    }
    deleteMissing(e) {
      let r = [];
      for (let n of this.map) {
        let o = !1;
        for (let s of e) tbe(s, n.key) && (o = !0);
        o || (r.push(n.value), this.map.delete(n));
      }
      return r;
    }
    get(e) {
      for (let r of this.map) if (tbe(e, r.key)) return r.value;
    }
    set(e, r) {
      for (let n of this.map)
        if (tbe(e, n.key)) {
          n.value = r;
          return;
        }
      this.map.add({ key: e, value: r });
    }
    delete(e) {
      for (let r of this.map)
        if (tbe(e, r.key)) {
          this.map.delete(r);
          return;
        }
    }
    has(e) {
      for (let r of this.map) if (tbe(e, r.key)) return !0;
      return !1;
    }
    clear() {
      this.map.clear();
    }
    *keys() {
      for (let e of this.map) yield e.key;
    }
    *values() {
      for (let e of this.map) yield e.value;
    }
    *entries() {
      for (let e of this.map) yield [e.key, e.value];
    }
  };
  WC.EndpointMap = gxt;
});