/**
 * @module GO
 * @category utils/buffer
 * @label buffer
 * @position 1581 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GO) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GO = T((XSc, Sii) => {
  "use strict";
  var Rst = Ae("buffer"),
    Hle = Rst.Buffer,
    iv = {},
    ov;
  for (ov in Rst) Rst.hasOwnProperty(ov) && (ov === "SlowBuffer" || ov === "Buffer" || (iv[ov] = Rst[ov]));
  var Vle = (iv.Buffer = {});
  for (ov in Hle) Hle.hasOwnProperty(ov) && (ov === "allocUnsafe" || ov === "allocUnsafeSlow" || (Vle[ov] = Hle[ov]));
  iv.Buffer.prototype = Hle.prototype;
  (!Vle.from || Vle.from === Uint8Array.from) &&
    (Vle.from = function (t, e, r) {
      if (typeof t == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof t);
      if (t && typeof t.length > "u")
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t,
        );
      return Hle(t, e, r);
    });
  Vle.alloc ||
    (Vle.alloc = function (t, e, r) {
      if (typeof t != "number")
        throw new TypeError('The "size" argument must be of type number. Received type ' + typeof t);
      if (t < 0 || t >= 2 * (1 << 30)) throw new RangeError('The value "' + t + '" is invalid for option "size"');
      var n = Hle(t);
      return (!e || e.length === 0 ? n.fill(0) : typeof r == "string" ? n.fill(e, r) : n.fill(e), n);
    });
  if (!iv.kStringMaxLength)
    try {
      iv.kStringMaxLength = process.binding("buffer").kStringMaxLength;
    } catch {}
  iv.constants ||
    ((iv.constants = { MAX_LENGTH: iv.kMaxLength }),
    iv.kStringMaxLength && (iv.constants.MAX_STRING_LENGTH = iv.kStringMaxLength));
  Sii.exports = iv;
});