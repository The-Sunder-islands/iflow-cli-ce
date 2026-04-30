/**
 * @module UWr
 * @category utils/data
 * @label data
 * @position 255 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UWr = T((fBe) => {
  "use strict";
  Object.defineProperty(fBe, "__esModule", { value: !0 });
  fBe.JsonLogsSerializer = void 0;
  var KIo = Wvt();
  fBe.JsonLogsSerializer = {
    serializeRequest: (t) => {
      let e = (0, KIo.createExportLogsServiceRequest)(t, { useHex: !0, useLongBits: !1 });
      return new TextEncoder().encode(JSON.stringify(e));
    },
    deserializeResponse: (t) => {
      if (t.length === 0) return {};
      let e = new TextDecoder();
      return JSON.parse(e.decode(t));
    },
  };
});
var $Wr = T((pBe) => {
  "use strict";
  Object.defineProperty(pBe, "__esModule", { value: !0 });
  pBe.JsonLogsSerializer = void 0;
  var JIo = UWr();
  Object.defineProperty(pBe, "JsonLogsSerializer", {
    enumerable: !0,
    get: function () {
      return JIo.JsonLogsSerializer;
    },
  });
});