/**
 * @module T2r
 * @category utils/oop
 * @label oop
 * @position 1815 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (T2r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var T2r = T((AI) => {
  "use strict";
  var I$a =
      (AI && AI.__createBinding) ||
      (Object.create
        ? function (t, e, r, n) {
            n === void 0 && (n = r);
            var o = Object.getOwnPropertyDescriptor(e, r);
            ((!o || ("get" in o ? !e.__esModule : o.writable || o.configurable)) &&
              (o = {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }),
              Object.defineProperty(t, n, o));
          }
        : function (t, e, r, n) {
            (n === void 0 && (n = r), (t[n] = e[r]));
          }),
    R$a =
      (AI && AI.__setModuleDefault) ||
      (Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          }),
    k$a =
      (AI && AI.__importStar) ||
      (function () {
        var t = function (e) {
          return (
            (t =
              Object.getOwnPropertyNames ||
              function (r) {
                var n = [];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[n.length] = o);
                return n;
              }),
            t(e)
          );
        };
        return function (e) {
          if (e && e.__esModule) return e;
          var r = {};
          if (e != null) for (var n = t(e), o = 0; o < n.length; o++) n[o] !== "default" && I$a(r, e, n[o]);
          return (R$a(r, e), r);
        };
      })();
  Object.defineProperty(AI, "__esModule", { value: !0 });
  AI.fromWebToken = void 0;
  var O$a = (t) => async (e) => {
    t.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
    let {
        roleArn: r,
        roleSessionName: n,
        webIdentityToken: o,
        providerId: s,
        policyArns: a,
        policy: u,
        durationSeconds: c,
      } = t,
      { roleAssumerWithWebIdentity: m } = t;
    if (!m) {
      let { getDefaultRoleAssumerWithWebIdentity: d } = await Promise.resolve().then(() => k$a((C2r(), bt(v2r))));
      m = d(
        {
          ...t.clientConfig,
          credentialProviderLogger: t.logger,
          parentClientConfig: { ...e?.callerClientConfig, ...t.parentClientConfig },
        },
        t.clientPlugins,
      );
    }
    return m({
      RoleArn: r,
      RoleSessionName: n ?? `aws-sdk-js-session-${Date.now()}`,
      WebIdentityToken: o,
      ProviderId: s,
      PolicyArns: a,
      Policy: u,
      DurationSeconds: c,
    });
  };
  AI.fromWebToken = O$a;
});