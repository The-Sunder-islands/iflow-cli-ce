/**
 * @module evt
 * @category utils/oop
 * @label oop
 * @position 122 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (evt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var evt = T((yb) => {
  "use strict";
  Object.defineProperty(yb, "__esModule", { value: !0 });
  yb.BAGGAGE_MAX_TOTAL_LENGTH =
    yb.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS =
    yb.BAGGAGE_MAX_NAME_VALUE_PAIRS =
    yb.BAGGAGE_HEADER =
    yb.BAGGAGE_ITEMS_SEPARATOR =
    yb.BAGGAGE_PROPERTIES_SEPARATOR =
    yb.BAGGAGE_KEY_PAIR_SEPARATOR =
      void 0;
  yb.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
  yb.BAGGAGE_PROPERTIES_SEPARATOR = ";";
  yb.BAGGAGE_ITEMS_SEPARATOR = ",";
  yb.BAGGAGE_HEADER = "baggage";
  yb.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
  yb.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
  yb.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
});