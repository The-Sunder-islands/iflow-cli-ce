/**
 * @module HBe
 * @category utils/oop
 * @label oop
 * @position 285 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HBe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HBe = T((Jte) => {
  "use strict";
  Object.defineProperty(Jte, "__esModule", { value: !0 });
  Jte.NOOP_LOGGER_PROVIDER = Jte.NoopLoggerProvider = void 0;
  var aRo = GBe(),
    qBe = class {
      getLogger(e, r, n) {
        return new aRo.NoopLogger();
      }
    };
  Jte.NoopLoggerProvider = qBe;
  Jte.NOOP_LOGGER_PROVIDER = new qBe();
});