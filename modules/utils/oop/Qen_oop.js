/**
 * @module Qen
 * @category utils/oop
 * @label oop
 * @position 500 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qen) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qen = T((Rbe) => {
  "use strict";
  Object.defineProperty(Rbe, "__esModule", { value: !0 });
  Rbe.SubchannelPool = void 0;
  Rbe.getSubchannelPool = qjo;
  var Mjo = hXr(),
    Fjo = ken(),
    Ujo = a8(),
    $jo = d2(),
    jjo = jen(),
    Qjo = 1e4,
    Ibe = class {
      constructor() {
        ((this.pool = Object.create(null)), (this.cleanupTimer = null));
      }
      unrefUnusedSubchannels() {
        let e = !0;
        for (let r in this.pool) {
          let o = this.pool[r].filter((s) => !s.subchannel.unrefIfOneRef());
          (o.length > 0 && (e = !1), (this.pool[r] = o));
        }
        e && this.cleanupTimer !== null && (clearInterval(this.cleanupTimer), (this.cleanupTimer = null));
      }
      ensureCleanupTask() {
        var e, r;
        this.cleanupTimer === null &&
          ((this.cleanupTimer = setInterval(() => {
            this.unrefUnusedSubchannels();
          }, Qjo)),
          (r = (e = this.cleanupTimer).unref) === null || r === void 0 || r.call(e));
      }
      getOrCreateSubchannel(e, r, n, o) {
        this.ensureCleanupTask();
        let s = (0, $jo.uriToString)(e);
        if (s in this.pool) {
          let u = this.pool[s];
          for (let c of u)
            if (
              (0, Ujo.subchannelAddressEqual)(r, c.subchannelAddress) &&
              (0, Mjo.channelOptionsEqual)(n, c.channelArguments) &&
              o._equals(c.channelCredentials)
            )
              return c.subchannel;
        }
        let a = new Fjo.Subchannel(e, r, n, o, new jjo.Http2SubchannelConnector(e));
        return (
          s in this.pool || (this.pool[s] = []),
          this.pool[s].push({ subchannelAddress: r, channelArguments: n, channelCredentials: o, subchannel: a }),
          a.ref(),
          a
        );
      }
    };
  Rbe.SubchannelPool = Ibe;
  var Gjo = new Ibe();
  function qjo(t) {
    return t ? Gjo : new Ibe();
  }
});