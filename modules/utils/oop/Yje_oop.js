/**
 * @module Yje
 * @category utils/oop
 * @label oop
 * @position 624 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yje) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yje = T((yne) => {
  "use strict";
  Object.defineProperty(yne, "__esModule", { value: !0 });
  yne.NOOP_LOGGER_PROVIDER = yne.NoopLoggerProvider = void 0;
  var UYo = Wje(),
    zje = class {
      getLogger(e, r, n) {
        return new UYo.NoopLogger();
      }
    };
  yne.NoopLoggerProvider = zje;
  yne.NOOP_LOGGER_PROVIDER = new zje();
});