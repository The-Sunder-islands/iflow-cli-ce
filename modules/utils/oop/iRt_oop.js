/**
 * @module iRt
 * @category utils/oop
 * @label oop
 * @position 634 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iRt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iRt = T((Db) => {
  "use strict";
  Object.defineProperty(Db, "__esModule", { value: !0 });
  Db.BAGGAGE_MAX_TOTAL_LENGTH =
    Db.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS =
    Db.BAGGAGE_MAX_NAME_VALUE_PAIRS =
    Db.BAGGAGE_HEADER =
    Db.BAGGAGE_ITEMS_SEPARATOR =
    Db.BAGGAGE_PROPERTIES_SEPARATOR =
    Db.BAGGAGE_KEY_PAIR_SEPARATOR =
      void 0;
  Db.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
  Db.BAGGAGE_PROPERTIES_SEPARATOR = ";";
  Db.BAGGAGE_ITEMS_SEPARATOR = ",";
  Db.BAGGAGE_HEADER = "baggage";
  Db.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
  Db.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
  Db.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
});