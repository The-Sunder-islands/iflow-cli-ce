/**
 * @module jvt
 * @category unknown
 * @label unknown
 * @position 167 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jvt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jvt = T((wHr) => {
  "use strict";
  var J5 = wHr;
  J5.build = "minimal";
  J5.Writer = $Ne();
  J5.BufferWriter = lHr();
  J5.Reader = QNe();
  J5.BufferReader = yHr();
  J5.util = _x();
  J5.rpc = Uvt();
  J5.roots = $vt();
  J5.configure = SHr;
  function SHr() {
    (J5.util._configure(), J5.Writer._configure(J5.BufferWriter), J5.Reader._configure(J5.BufferReader));
  }
  SHr();
});