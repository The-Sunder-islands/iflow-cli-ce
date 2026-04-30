/**
 * @module zcn
 * @category protocol/acp
 * @label acp
 * @position 721 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zcn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zcn = T((Wcn) => {
  "use strict";
  var vOt = Ae("os"),
    Prs = Ae("child_process").exec,
    vu = Ff();
  function Brs(t) {
    let e = [];
    return new Promise((r) => {
      process.nextTick(() => {
        try {
          Prs(vu.getVboxmanage() + " list vms --long", function (n, o) {
            let s = (vOt.EOL + o.toString()).split(vOt.EOL + "Name:");
            (s.shift(),
              s.forEach((a) => {
                let u = ("Name:" + a).split(vOt.EOL),
                  c = vu.getValue(u, "State"),
                  m = c.startsWith("running"),
                  d = m ? c.replace("running (since ", "").replace(")", "").trim() : "",
                  f = 0;
                try {
                  if (m) {
                    let g = new Date(d),
                      b = g.getTimezoneOffset();
                    f = Math.round((Date.now() - Date.parse(g)) / 1e3) + b * 60;
                  }
                } catch {
                  vu.noop();
                }
                let p = m ? "" : c.replace("powered off (since", "").replace(")", "").trim(),
                  h = 0;
                try {
                  if (!m) {
                    let g = new Date(p),
                      b = g.getTimezoneOffset();
                    h = Math.round((Date.now() - Date.parse(g)) / 1e3) + b * 60;
                  }
                } catch {
                  vu.noop();
                }
                e.push({
                  id: vu.getValue(u, "UUID"),
                  name: vu.getValue(u, "Name"),
                  running: m,
                  started: d,
                  runningSince: f,
                  stopped: p,
                  stoppedSince: h,
                  guestOS: vu.getValue(u, "Guest OS"),
                  hardwareUUID: vu.getValue(u, "Hardware UUID"),
                  memory: parseInt(vu.getValue(u, "Memory size", "     "), 10),
                  vram: parseInt(vu.getValue(u, "VRAM size"), 10),
                  cpus: parseInt(vu.getValue(u, "Number of CPUs"), 10),
                  cpuExepCap: vu.getValue(u, "CPU exec cap"),
                  cpuProfile: vu.getValue(u, "CPUProfile"),
                  chipset: vu.getValue(u, "Chipset"),
                  firmware: vu.getValue(u, "Firmware"),
                  pageFusion: vu.getValue(u, "Page Fusion") === "enabled",
                  configFile: vu.getValue(u, "Config file"),
                  snapshotFolder: vu.getValue(u, "Snapshot folder"),
                  logFolder: vu.getValue(u, "Log folder"),
                  hpet: vu.getValue(u, "HPET") === "enabled",
                  pae: vu.getValue(u, "PAE") === "enabled",
                  longMode: vu.getValue(u, "Long Mode") === "enabled",
                  tripleFaultReset: vu.getValue(u, "Triple Fault Reset") === "enabled",
                  apic: vu.getValue(u, "APIC") === "enabled",
                  x2Apic: vu.getValue(u, "X2APIC") === "enabled",
                  acpi: vu.getValue(u, "ACPI") === "enabled",
                  ioApic: vu.getValue(u, "IOAPIC") === "enabled",
                  biosApicMode: vu.getValue(u, "BIOS APIC mode"),
                  bootMenuMode: vu.getValue(u, "Boot menu mode"),
                  bootDevice1: vu.getValue(u, "Boot Device 1"),
                  bootDevice2: vu.getValue(u, "Boot Device 2"),
                  bootDevice3: vu.getValue(u, "Boot Device 3"),
                  bootDevice4: vu.getValue(u, "Boot Device 4"),
                  timeOffset: vu.getValue(u, "Time offset"),
                  rtc: vu.getValue(u, "RTC"),
                });
              }),
              t && t(e),
              r(e));
          });
        } catch {
          (t && t(e), r(e));
        }
      });
    });
  }
  Wcn.vboxInfo = Brs;
});