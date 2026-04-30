/**
 * @module h_t
 * @category security/jwt
 * @label jwt
 * @position 108 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (h_t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var h_t = T((If) => {
  "use strict";
  Object.defineProperty(If, "__esModule", { value: !0 });
  If.InvalidSubjectTokenError =
    If.InvalidMessageFieldError =
    If.InvalidCodeFieldError =
    If.InvalidTokenTypeFieldError =
    If.InvalidExpirationTimeFieldError =
    If.InvalidSuccessFieldError =
    If.InvalidVersionFieldError =
    If.ExecutableResponseError =
    If.ExecutableResponse =
      void 0;
  var eOe = "urn:ietf:params:oauth:token-type:saml2",
    m_t = "urn:ietf:params:oauth:token-type:id_token",
    d_t = "urn:ietf:params:oauth:token-type:jwt",
    f_t = class {
      constructor(e) {
        if (!e.version) throw new tOe("Executable response must contain a 'version' field.");
        if (e.success === void 0) throw new rOe("Executable response must contain a 'success' field.");
        if (((this.version = e.version), (this.success = e.success), this.success)) {
          if (
            ((this.expirationTime = e.expiration_time),
            (this.tokenType = e.token_type),
            this.tokenType !== eOe && this.tokenType !== m_t && this.tokenType !== d_t)
          )
            throw new nOe(
              `Executable response must contain a 'token_type' field when successful and it must be one of ${m_t}, ${d_t}, or ${eOe}.`,
            );
          if (this.tokenType === eOe) {
            if (!e.saml_response)
              throw new E3e(`Executable response must contain a 'saml_response' field when token_type=${eOe}.`);
            this.subjectToken = e.saml_response;
          } else {
            if (!e.id_token)
              throw new E3e(`Executable response must contain a 'id_token' field when token_type=${m_t} or ${d_t}.`);
            this.subjectToken = e.id_token;
          }
        } else {
          if (!e.code) throw new iOe("Executable response must contain a 'code' field when unsuccessful.");
          if (!e.message) throw new oOe("Executable response must contain a 'message' field when unsuccessful.");
          ((this.errorCode = e.code), (this.errorMessage = e.message));
        }
      }
      isValid() {
        return !this.isExpired() && this.success;
      }
      isExpired() {
        return this.expirationTime !== void 0 && this.expirationTime < Math.round(Date.now() / 1e3);
      }
    };
  If.ExecutableResponse = f_t;
  var ux = class extends Error {
    constructor(e) {
      (super(e), Object.setPrototypeOf(this, new.target.prototype));
    }
  };
  If.ExecutableResponseError = ux;
  var tOe = class extends ux {};
  If.InvalidVersionFieldError = tOe;
  var rOe = class extends ux {};
  If.InvalidSuccessFieldError = rOe;
  var p_t = class extends ux {};
  If.InvalidExpirationTimeFieldError = p_t;
  var nOe = class extends ux {};
  If.InvalidTokenTypeFieldError = nOe;
  var iOe = class extends ux {};
  If.InvalidCodeFieldError = iOe;
  var oOe = class extends ux {};
  If.InvalidMessageFieldError = oOe;
  var E3e = class extends ux {};
  If.InvalidSubjectTokenError = E3e;
});