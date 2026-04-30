/**
 * @module ghr
 * @category unknown
 * @label unknown
 * @position 1725 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ghr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ghr = T((hhr) => {
  "use strict";
  var zgi = (t) => encodeURIComponent(t).replace(/[!'()*]/g, uDa),
    uDa = (t) => `%${t.charCodeAt(0).toString(16).toUpperCase()}`,
    cDa = (t) => t.split("/").map(zgi).join("/");
  hhr.escapeUri = zgi;
  hhr.escapeUriPath = cDa;
});