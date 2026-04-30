/**
 * @module jxt
 * @category utils/oop
 * @label oop
 * @position 506 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jxt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jxt = T((jUe) => {
  "use strict";
  Object.defineProperty(jUe, "__esModule", { value: !0 });
  jUe.ChannelImplementation = void 0;
  var EQo = Ire(),
    vQo = ODt(),
    NDt = class {
      constructor(e, r, n) {
        if (typeof e != "string") throw new TypeError("Channel target must be a string");
        if (!(r instanceof EQo.ChannelCredentials))
          throw new TypeError("Channel credentials must be a ChannelCredentials object");
        if (n && typeof n != "object") throw new TypeError("Channel options must be an object");
        this.internalChannel = new vQo.InternalChannel(e, r, n);
      }
      close() {
        this.internalChannel.close();
      }
      getTarget() {
        return this.internalChannel.getTarget();
      }
      getConnectivityState(e) {
        return this.internalChannel.getConnectivityState(e);
      }
      watchConnectivityState(e, r, n) {
        this.internalChannel.watchConnectivityState(e, r, n);
      }
      getChannelzRef() {
        return this.internalChannel.getChannelzRef();
      }
      createCall(e, r, n, o, s) {
        if (typeof e != "string") throw new TypeError("Channel#createCall: method must be a string");
        if (!(typeof r == "number" || r instanceof Date))
          throw new TypeError("Channel#createCall: deadline must be a number or Date");
        return this.internalChannel.createCall(e, r, n, o, s);
      }
    };
  jUe.ChannelImplementation = NDt;
});