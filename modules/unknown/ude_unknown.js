/**
 * @module ude
 * @category unknown
 * @label unknown
 * @position 1797 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ude) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ude = T((xK) => {
  "use strict";
  var G_i = Ae("os"),
    vAr = Ae("process"),
    nLa = vK(),
    q_i = { isCrtAvailable: !1 },
    iLa = () => (q_i.isCrtAvailable ? ["md/crt-avail"] : null),
    H_i =
      ({ serviceId: t, clientVersion: e }) =>
      async (r) => {
        let n = [
            ["aws-sdk-js", e],
            ["ua", "2.1"],
            [`os/${G_i.platform()}`, G_i.release()],
            ["lang/js"],
            ["md/nodejs", `${vAr.versions.node}`],
          ],
          o = iLa();
        (o && n.push(o),
          t && n.push([`api/${t}`, e]),
          vAr.env.AWS_EXECUTION_ENV && n.push([`exec-env/${vAr.env.AWS_EXECUTION_ENV}`]));
        let s = await r?.userAgentAppId?.();
        return s ? [...n, [`app/${s}`]] : [...n];
      },
    oLa = H_i,
    V_i = "AWS_SDK_UA_APP_ID",
    W_i = "sdk_ua_app_id",
    sLa = "sdk-ua-app-id",
    aLa = {
      environmentVariableSelector: (t) => t[V_i],
      configFileSelector: (t) => t[W_i] ?? t[sLa],
      default: nLa.DEFAULT_UA_APP_ID,
    };
  xK.NODE_APP_ID_CONFIG_OPTIONS = aLa;
  xK.UA_APP_ID_ENV_NAME = V_i;
  xK.UA_APP_ID_INI_NAME = W_i;
  xK.createDefaultUserAgentProvider = H_i;
  xK.crtAvailability = q_i;
  xK.defaultUserAgent = oLa;
});