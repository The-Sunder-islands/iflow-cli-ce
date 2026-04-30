/**
 * @module UB
 * @category utils/oop
 * @label oop
 * @position 434 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UB) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UB = T((Vx) => {
  "use strict";
  Object.defineProperty(Vx, "__esModule", { value: !0 });
  Vx.createChildChannelControlHelper = fLo;
  Vx.registerLoadBalancerType = pLo;
  Vx.registerDefaultLoadBalancerType = hLo;
  Vx.createLoadBalancer = gLo;
  Vx.isLoadBalancerNameRegistered = bLo;
  Vx.parseLoadBalancingConfig = uXr;
  Vx.getDefaultConfig = ALo;
  Vx.selectLbConfigFromList = yLo;
  var mLo = g0(),
    dLo = La();
  function fLo(t, e) {
    var r, n, o, s, a, u, c, m, d, f;
    return {
      createSubchannel:
        (n = (r = e.createSubchannel) === null || r === void 0 ? void 0 : r.bind(e)) !== null && n !== void 0
          ? n
          : t.createSubchannel.bind(t),
      updateState:
        (s = (o = e.updateState) === null || o === void 0 ? void 0 : o.bind(e)) !== null && s !== void 0
          ? s
          : t.updateState.bind(t),
      requestReresolution:
        (u = (a = e.requestReresolution) === null || a === void 0 ? void 0 : a.bind(e)) !== null && u !== void 0
          ? u
          : t.requestReresolution.bind(t),
      addChannelzChild:
        (m = (c = e.addChannelzChild) === null || c === void 0 ? void 0 : c.bind(e)) !== null && m !== void 0
          ? m
          : t.addChannelzChild.bind(t),
      removeChannelzChild:
        (f = (d = e.removeChannelzChild) === null || d === void 0 ? void 0 : d.bind(e)) !== null && f !== void 0
          ? f
          : t.removeChannelzChild.bind(t),
    };
  }
  var FB = {},
    Jge = null;
  function pLo(t, e, r) {
    FB[t] = { LoadBalancer: e, LoadBalancingConfig: r };
  }
  function hLo(t) {
    Jge = t;
  }
  function gLo(t, e) {
    let r = t.getLoadBalancerName();
    return r in FB ? new FB[r].LoadBalancer(e) : null;
  }
  function bLo(t) {
    return t in FB;
  }
  function uXr(t) {
    let e = Object.keys(t);
    if (e.length !== 1) throw new Error("Provided load balancing config has multiple conflicting entries");
    let r = e[0];
    if (r in FB)
      try {
        return FB[r].LoadBalancingConfig.createFromJson(t[r]);
      } catch (n) {
        throw new Error(`${r}: ${n.message}`);
      }
    else throw new Error(`Unrecognized load balancing config name ${r}`);
  }
  function ALo() {
    if (!Jge) throw new Error("No default load balancer type registered");
    return new FB[Jge].LoadBalancingConfig();
  }
  function yLo(t, e = !1) {
    for (let r of t)
      try {
        return uXr(r);
      } catch (n) {
        (0, mLo.log)(dLo.LogVerbosity.DEBUG, "Config parsing failed with error", n.message);
        continue;
      }
    return e && Jge ? new FB[Jge].LoadBalancingConfig() : null;
  }
});