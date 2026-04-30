/**
 * @module q6t
 * @category utils/oop
 * @label oop
 * @position 66 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (q6t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var q6t = T((TC) => {
  "use strict";
  Object.defineProperty(TC, "__esModule", { value: !0 });
  TC.GCE_LINUX_BIOS_PATHS = void 0;
  TC.isGoogleCloudServerless = hRr;
  TC.isGoogleComputeEngineLinux = gRr;
  TC.isGoogleComputeEngineMACAddress = bRr;
  TC.isGoogleComputeEngine = ARr;
  TC.detectGCPResidency = spo;
  var fRr = Ae("fs"),
    pRr = Ae("os");
  TC.GCE_LINUX_BIOS_PATHS = { BIOS_DATE: "/sys/class/dmi/id/bios_date", BIOS_VENDOR: "/sys/class/dmi/id/bios_vendor" };
  var opo = /^42:01/;
  function hRr() {
    return !!(process.env.CLOUD_RUN_JOB || process.env.FUNCTION_NAME || process.env.K_SERVICE);
  }
  function gRr() {
    if ((0, pRr.platform)() !== "linux") return !1;
    try {
      (0, fRr.statSync)(TC.GCE_LINUX_BIOS_PATHS.BIOS_DATE);
      let t = (0, fRr.readFileSync)(TC.GCE_LINUX_BIOS_PATHS.BIOS_VENDOR, "utf8");
      return /Google/.test(t);
    } catch {
      return !1;
    }
  }
  function bRr() {
    let t = (0, pRr.networkInterfaces)();
    for (let e of Object.values(t))
      if (e) {
        for (let { mac: r } of e) if (opo.test(r)) return !0;
      }
    return !1;
  }
  function ARr() {
    return gRr() || bRr();
  }
  function spo() {
    return hRr() || ARr();
  }
});