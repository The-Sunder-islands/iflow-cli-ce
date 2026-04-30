/**
 * @module __t
 * @category model/google
 * @label google-auth
 * @position 111 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (__t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var __t = T((cOe) => {
  "use strict";
  Object.defineProperty(cOe, "__esModule", { value: !0 });
  cOe.ExternalAccountClient = void 0;
  var V3o = pB(),
    W3o = i_t(),
    z3o = l_t(),
    Y3o = aOe(),
    y_t = class {
      constructor() {
        throw new Error(
          "ExternalAccountClients should be initialized via: ExternalAccountClient.fromJSON(), directly via explicit constructors, eg. new AwsClient(options), new IdentityPoolClient(options), newPluggableAuthClientOptions, or via new GoogleAuth(options).getClient()",
        );
      }
      static fromJSON(e, r) {
        var n, o;
        return e && e.type === V3o.EXTERNAL_ACCOUNT_TYPE
          ? !((n = e.credential_source) === null || n === void 0) && n.environment_id
            ? new z3o.AwsClient(e, r)
            : !((o = e.credential_source) === null || o === void 0) && o.executable
              ? new Y3o.PluggableAuthClient(e, r)
              : new W3o.IdentityPoolClient(e, r)
          : null;
      }
    };
  cOe.ExternalAccountClient = y_t;
});