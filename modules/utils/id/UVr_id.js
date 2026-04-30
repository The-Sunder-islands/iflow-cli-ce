/**
 * @module UVr
 * @category utils/id
 * @label id
 * @position 218 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UVr = T((LPe) => {
  "use strict";
  Object.defineProperty(LPe, "__esModule", { value: !0 });
  LPe.serviceInstanceIdDetector = void 0;
  var mDo = bge(),
    dDo = Ae("crypto"),
    wCt = class {
      detect(e) {
        return { attributes: { [mDo.ATTR_SERVICE_INSTANCE_ID]: (0, dDo.randomUUID)() } };
      }
    };
  LPe.serviceInstanceIdDetector = new wCt();
});
var $Vr = T((Sx) => {
  "use strict";
  Object.defineProperty(Sx, "__esModule", { value: !0 });
  Sx.serviceInstanceIdDetector = Sx.processDetector = Sx.osDetector = Sx.hostDetector = void 0;
  var fDo = PVr();
  Object.defineProperty(Sx, "hostDetector", {
    enumerable: !0,
    get: function () {
      return fDo.hostDetector;
    },
  });
  var pDo = MVr();
  Object.defineProperty(Sx, "osDetector", {
    enumerable: !0,
    get: function () {
      return pDo.osDetector;
    },
  });
  var hDo = FVr();
  Object.defineProperty(Sx, "processDetector", {
    enumerable: !0,
    get: function () {
      return hDo.processDetector;
    },
  });
  var gDo = UVr();
  Object.defineProperty(Sx, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return gDo.serviceInstanceIdDetector;
    },
  });
});