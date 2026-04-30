/**
 * @module hsn
 * @category telemetry/otel
 * @label opentelemetry
 * @position 672 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hsn = T((NQe) => {
  "use strict";
  Object.defineProperty(NQe, "__esModule", { value: !0 });
  NQe.envDetector = void 0;
  var WJo = (Zt(), bt(cr)),
    zJo = ($1(), bt(Ih)),
    psn = a4(),
    RRt = class {
      _MAX_LENGTH = 255;
      _COMMA_SEPARATOR = ",";
      _LABEL_KEY_VALUE_SPLITTER = "=";
      _ERROR_MESSAGE_INVALID_CHARS =
        "should be a ASCII string with a length greater than 0 and not exceed " + this._MAX_LENGTH + " characters.";
      _ERROR_MESSAGE_INVALID_VALUE =
        "should be a ASCII string with a length not exceed " + this._MAX_LENGTH + " characters.";
      detect(e) {
        let r = {},
          n = (0, psn.getStringFromEnv)("OTEL_RESOURCE_ATTRIBUTES"),
          o = (0, psn.getStringFromEnv)("OTEL_SERVICE_NAME");
        if (n)
          try {
            let s = this._parseResourceAttributes(n);
            Object.assign(r, s);
          } catch (s) {
            WJo.diag.debug(`EnvDetector failed: ${s.message}`);
          }
        return (o && (r[zJo.ATTR_SERVICE_NAME] = o), { attributes: r });
      }
      _parseResourceAttributes(e) {
        if (!e) return {};
        let r = {},
          n = e.split(this._COMMA_SEPARATOR, -1);
        for (let o of n) {
          let s = o.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
          if (s.length !== 2) continue;
          let [a, u] = s;
          if (((a = a.trim()), (u = u.trim().split(/^"|"$/).join("")), !this._isValidAndNotEmpty(a)))
            throw new Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);
          if (!this._isValid(u)) throw new Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);
          r[a] = decodeURIComponent(u);
        }
        return r;
      }
      _isValid(e) {
        return e.length <= this._MAX_LENGTH && this._isBaggageOctetString(e);
      }
      _isBaggageOctetString(e) {
        for (let r = 0; r < e.length; r++) {
          let n = e.charCodeAt(r);
          if (n < 33 || n === 44 || n === 59 || n === 92 || n > 126) return !1;
        }
        return !0;
      }
      _isValidAndNotEmpty(e) {
        return e.length > 0 && this._isValid(e);
      }
    };
  NQe.envDetector = new RRt();
});