/**
 * @module icn
 * @category unknown
 * @label unknown
 * @position 710 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (icn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var icn = T((eOt) => {
  "use strict";
  var AT = Ae("os"),
    LAe = Ae("child_process").exec,
    rqe = Ae("child_process").execSync,
    xn = Ff(),
    Fes = Ae("fs"),
    _L = process.platform,
    Jun = _L === "linux" || _L === "android",
    Xun = _L === "darwin",
    Zun = _L === "win32",
    ecn = _L === "freebsd",
    tcn = _L === "openbsd",
    rcn = _L === "netbsd",
    ncn = _L === "sunos",
    Kun = {
      "00CE": "Samsung Electronics Inc",
      "014F": "Transcend Information Inc.",
      "017A": "Apacer Technology Inc.",
      "0198": "HyperX",
      "029E": "Corsair",
      "02FE": "Elpida",
      "04CB": "A-DATA",
      "04CD": "G.Skill International Enterprise",
      "059B": "Crucial",
      1315: "Crucial",
      "2C00": "Micron Technology Inc.",
      5105: "Qimonda AG i. In.",
      "802C": "Micron Technology Inc.",
      "80AD": "Hynix Semiconductor Inc.",
      "80CE": "Samsung Electronics Inc.",
      8551: "Qimonda AG i. In.",
      "859B": "Crucial",
      AD00: "Hynix Semiconductor Inc.",
      CE00: "Samsung Electronics Inc.",
      SAMSUNG: "Samsung Electronics Inc.",
      HYNIX: "Hynix Semiconductor Inc.",
      "G-SKILL": "G-Skill International Enterprise",
      "G.SKILL": "G-Skill International Enterprise",
      TRANSCEND: "Transcend Information",
      APACER: "Apacer Technology Inc",
      MICRON: "Micron Technology Inc.",
      QIMONDA: "Qimonda AG i. In.",
    };
  function Ues(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = {
          total: AT.totalmem(),
          free: AT.freemem(),
          used: AT.totalmem() - AT.freemem(),
          active: AT.totalmem() - AT.freemem(),
          available: AT.freemem(),
          buffers: 0,
          cached: 0,
          slab: 0,
          buffcache: 0,
          reclaimable: 0,
          swaptotal: 0,
          swapused: 0,
          swapfree: 0,
          writeback: null,
          dirty: null,
        };
        if (Jun)
          try {
            Fes.readFile("/proc/meminfo", function (n, o) {
              if (!n) {
                let s = o.toString().split(`
`);
                ((r.total = parseInt(xn.getValue(s, "memtotal"), 10)),
                  (r.total = r.total ? r.total * 1024 : AT.totalmem()),
                  (r.free = parseInt(xn.getValue(s, "memfree"), 10)),
                  (r.free = r.free ? r.free * 1024 : AT.freemem()),
                  (r.used = r.total - r.free),
                  (r.buffers = parseInt(xn.getValue(s, "buffers"), 10)),
                  (r.buffers = r.buffers ? r.buffers * 1024 : 0),
                  (r.cached = parseInt(xn.getValue(s, "cached"), 10)),
                  (r.cached = r.cached ? r.cached * 1024 : 0),
                  (r.slab = parseInt(xn.getValue(s, "slab"), 10)),
                  (r.slab = r.slab ? r.slab * 1024 : 0),
                  (r.buffcache = r.buffers + r.cached + r.slab));
                let a = parseInt(xn.getValue(s, "memavailable"), 10);
                ((r.available = a ? a * 1024 : r.free + r.buffcache),
                  (r.active = r.total - r.available),
                  (r.swaptotal = parseInt(xn.getValue(s, "swaptotal"), 10)),
                  (r.swaptotal = r.swaptotal ? r.swaptotal * 1024 : 0),
                  (r.swapfree = parseInt(xn.getValue(s, "swapfree"), 10)),
                  (r.swapfree = r.swapfree ? r.swapfree * 1024 : 0),
                  (r.swapused = r.swaptotal - r.swapfree),
                  (r.writeback = parseInt(xn.getValue(s, "writeback"), 10)),
                  (r.writeback = r.writeback ? r.writeback * 1024 : 0),
                  (r.dirty = parseInt(xn.getValue(s, "dirty"), 10)),
                  (r.dirty = r.dirty ? r.dirty * 1024 : 0),
                  (r.reclaimable = parseInt(xn.getValue(s, "sreclaimable"), 10)),
                  (r.reclaimable = r.reclaimable ? r.reclaimable * 1024 : 0));
              }
              (t && t(r), e(r));
            });
          } catch {
            (t && t(r), e(r));
          }
        if (ecn || tcn || rcn)
          try {
            LAe(
              "/sbin/sysctl hw.realmem hw.physmem vm.stats.vm.v_page_count vm.stats.vm.v_wire_count vm.stats.vm.v_active_count vm.stats.vm.v_inactive_count vm.stats.vm.v_cache_count vm.stats.vm.v_free_count vm.stats.vm.v_page_size",
              function (n, o) {
                if (!n) {
                  let s = o.toString().split(`
`),
                    a = parseInt(xn.getValue(s, "vm.stats.vm.v_page_size"), 10),
                    u = parseInt(xn.getValue(s, "vm.stats.vm.v_inactive_count"), 10) * a,
                    c = parseInt(xn.getValue(s, "vm.stats.vm.v_cache_count"), 10) * a;
                  ((r.total = parseInt(xn.getValue(s, "hw.realmem"), 10)),
                    isNaN(r.total) && (r.total = parseInt(xn.getValue(s, "hw.physmem"), 10)),
                    (r.free = parseInt(xn.getValue(s, "vm.stats.vm.v_free_count"), 10) * a),
                    (r.buffcache = u + c),
                    (r.available = r.buffcache + r.free),
                    (r.active = r.total - r.free - r.buffcache),
                    (r.swaptotal = 0),
                    (r.swapfree = 0),
                    (r.swapused = 0));
                }
                (t && t(r), e(r));
              },
            );
          } catch {
            (t && t(r), e(r));
          }
        if ((ncn && (t && t(r), e(r)), Xun)) {
          let n = 4096;
          try {
            n = xn.toInt(rqe("sysctl -n vm.pagesize").toString()) || n;
          } catch {
            xn.noop();
          }
          try {
            LAe('vm_stat 2>/dev/null | egrep "Pages active|Pages inactive"', function (o, s) {
              if (!o) {
                let a = s.toString().split(`
`);
                ((r.active = (parseInt(xn.getValue(a, "Pages active"), 10) || 0) * n),
                  (r.reclaimable = (parseInt(xn.getValue(a, "Pages inactive"), 10) || 0) * n),
                  (r.buffcache = r.used - r.active),
                  (r.available = r.free + r.buffcache));
              }
              LAe("sysctl -n vm.swapusage 2>/dev/null", function (a, u) {
                if (!a) {
                  let c = u.toString().split(`
`);
                  c.length > 0 &&
                    c[0]
                      .replace(/,/g, ".")
                      .replace(/M/g, "")
                      .trim()
                      .split("  ")
                      .forEach((f) => {
                        (f.toLowerCase().indexOf("total") !== -1 &&
                          (r.swaptotal = parseFloat(f.split("=")[1].trim()) * 1024 * 1024),
                          f.toLowerCase().indexOf("used") !== -1 &&
                            (r.swapused = parseFloat(f.split("=")[1].trim()) * 1024 * 1024),
                          f.toLowerCase().indexOf("free") !== -1 &&
                            (r.swapfree = parseFloat(f.split("=")[1].trim()) * 1024 * 1024));
                      });
                }
                (t && t(r), e(r));
              });
            });
          } catch {
            (t && t(r), e(r));
          }
        }
        if (Zun) {
          let n = 0,
            o = 0;
          try {
            xn.powerShell("Get-CimInstance Win32_PageFileUsage | Select AllocatedBaseSize, CurrentUsage").then(
              (s, a) => {
                (a ||
                  s
                    .split(
                      `\r
`,
                    )
                    .filter((c) => c.trim() !== "")
                    .filter((c, m) => m > 0)
                    .forEach(function (c) {
                      c !== "" &&
                        ((c = c.trim().split(/\s\s+/)),
                        (n = n + (parseInt(c[0], 10) || 0)),
                        (o = o + (parseInt(c[1], 10) || 0)));
                    }),
                  (r.swaptotal = n * 1024 * 1024),
                  (r.swapused = o * 1024 * 1024),
                  (r.swapfree = r.swaptotal - r.swapused),
                  t && t(r),
                  e(r));
              },
            );
          } catch {
            (t && t(r), e(r));
          }
        }
      });
    });
  }
  eOt.mem = Ues;
  function $es(t) {
    function e(r) {
      let n = r.replace("0x", "").toUpperCase();
      return n.length >= 4 && {}.hasOwnProperty.call(Kun, n) ? Kun[n] : r;
    }
    return new Promise((r) => {
      process.nextTick(() => {
        let n = [];
        if (
          ((Jun || ecn || tcn || rcn) &&
            LAe(
              'export LC_ALL=C; dmidecode -t memory 2>/dev/null | grep -iE "Size:|Type|Speed|Manufacturer|Form Factor|Locator|Memory Device|Serial Number|Voltage|Part Number"; unset LC_ALL',
              function (o, s) {
                if (!o) {
                  let a = s.toString().split("Memory Device");
                  (a.shift(),
                    a.forEach(function (u) {
                      let c = u.split(`
`),
                        m = xn.getValue(c, "Size"),
                        d = m.indexOf("GB") >= 0 ? parseInt(m, 10) * 1024 * 1024 * 1024 : parseInt(m, 10) * 1024 * 1024,
                        f = xn.getValue(c, "Bank Locator");
                      if ((f.toLowerCase().indexOf("bad") >= 0 && (f = ""), parseInt(xn.getValue(c, "Size"), 10) > 0)) {
                        let p = xn.toInt(xn.getValue(c, "Total Width")),
                          h = xn.toInt(xn.getValue(c, "Data Width"));
                        n.push({
                          size: d,
                          bank: f,
                          type: xn.getValue(c, "Type:"),
                          ecc: h && p ? p > h : !1,
                          clockSpeed: xn.getValue(c, "Configured Clock Speed:")
                            ? parseInt(xn.getValue(c, "Configured Clock Speed:"), 10)
                            : xn.getValue(c, "Speed:")
                              ? parseInt(xn.getValue(c, "Speed:"), 10)
                              : null,
                          formFactor: xn.getValue(c, "Form Factor:"),
                          manufacturer: e(xn.getValue(c, "Manufacturer:")),
                          partNum: xn.getValue(c, "Part Number:"),
                          serialNum: xn.getValue(c, "Serial Number:"),
                          voltageConfigured: parseFloat(xn.getValue(c, "Configured Voltage:")) || null,
                          voltageMin: parseFloat(xn.getValue(c, "Minimum Voltage:")) || null,
                          voltageMax: parseFloat(xn.getValue(c, "Maximum Voltage:")) || null,
                        });
                      } else
                        n.push({
                          size: 0,
                          bank: f,
                          type: "Empty",
                          ecc: null,
                          clockSpeed: 0,
                          formFactor: xn.getValue(c, "Form Factor:"),
                          partNum: "",
                          serialNum: "",
                          voltageConfigured: null,
                          voltageMin: null,
                          voltageMax: null,
                        });
                    }));
                }
                if (!n.length) {
                  n.push({
                    size: AT.totalmem(),
                    bank: "",
                    type: "",
                    ecc: null,
                    clockSpeed: 0,
                    formFactor: "",
                    partNum: "",
                    serialNum: "",
                    voltageConfigured: null,
                    voltageMin: null,
                    voltageMax: null,
                  });
                  try {
                    let a = rqe("cat /proc/cpuinfo 2>/dev/null", xn.execOptsLinux),
                      u = a.toString().split(`
`),
                      c = xn.getValue(u, "revision", ":", !0).toLowerCase();
                    if (xn.isRaspberry(u)) {
                      let m = { 0: 400, 1: 450, 2: 450, 3: 3200, 4: 4267 };
                      ((n[0].type = "LPDDR2"),
                        (n[0].type = c && c[2] && c[2] === "3" ? "LPDDR4" : n[0].type),
                        (n[0].type = c && c[2] && c[2] === "4" ? "LPDDR4X" : n[0].type),
                        (n[0].ecc = !1),
                        (n[0].clockSpeed = (c && c[2] && m[c[2]]) || 400),
                        (n[0].clockSpeed = c && c[4] && c[4] === "d" ? 500 : n[0].clockSpeed),
                        (n[0].formFactor = "SoC"),
                        (a = rqe("vcgencmd get_config sdram_freq 2>/dev/null", xn.execOptsLinux)),
                        (u = a.toString().split(`
`)));
                      let d = parseInt(xn.getValue(u, "sdram_freq", "=", !0), 10) || 0;
                      (d && (n[0].clockSpeed = d),
                        (a = rqe("vcgencmd measure_volts sdram_p 2>/dev/null", xn.execOptsLinux)),
                        (u = a.toString().split(`
`)));
                      let f = parseFloat(xn.getValue(u, "volt", "=", !0)) || 0;
                      f && ((n[0].voltageConfigured = f), (n[0].voltageMin = f), (n[0].voltageMax = f));
                    }
                  } catch {
                    xn.noop();
                  }
                }
                (t && t(n), r(n));
              },
            ),
          Xun &&
            LAe("system_profiler SPMemoryDataType", function (o, s) {
              if (!o) {
                let a = s.toString().split(`
`),
                  u = xn.getValue(a, "ecc", ":", !0).toLowerCase(),
                  c = s.toString().split("        BANK "),
                  m = !0;
                (c.length === 1 && ((c = s.toString().split("        DIMM")), (m = !1)),
                  c.shift(),
                  c.forEach(function (d) {
                    let f = d.split(`
`),
                      p = (m ? "BANK " : "DIMM") + f[0].trim().split("/")[0],
                      h = parseInt(xn.getValue(f, "          Size"));
                    h
                      ? n.push({
                          size: h * 1024 * 1024 * 1024,
                          bank: p,
                          type: xn.getValue(f, "          Type:"),
                          ecc: u ? u === "enabled" : null,
                          clockSpeed: parseInt(xn.getValue(f, "          Speed:"), 10),
                          formFactor: "",
                          manufacturer: e(xn.getValue(f, "          Manufacturer:")),
                          partNum: xn.getValue(f, "          Part Number:"),
                          serialNum: xn.getValue(f, "          Serial Number:"),
                          voltageConfigured: null,
                          voltageMin: null,
                          voltageMax: null,
                        })
                      : n.push({
                          size: 0,
                          bank: p,
                          type: "Empty",
                          ecc: null,
                          clockSpeed: 0,
                          formFactor: "",
                          manufacturer: "",
                          partNum: "",
                          serialNum: "",
                          voltageConfigured: null,
                          voltageMin: null,
                          voltageMax: null,
                        });
                  }));
              }
              if (!n.length) {
                let a = s.toString().split(`
`),
                  u = parseInt(xn.getValue(a, "      Memory:")),
                  c = xn.getValue(a, "      Type:"),
                  m = xn.getValue(a, "      Manufacturer:");
                u &&
                  c &&
                  n.push({
                    size: u * 1024 * 1024 * 1024,
                    bank: "0",
                    type: c,
                    ecc: !1,
                    clockSpeed: null,
                    formFactor: "SOC",
                    manufacturer: e(m),
                    partNum: "",
                    serialNum: "",
                    voltageConfigured: null,
                    voltageMin: null,
                    voltageMax: null,
                  });
              }
              (t && t(n), r(n));
            }),
          ncn && (t && t(n), r(n)),
          Zun)
        ) {
          let o =
              "Unknown|Other|DRAM|Synchronous DRAM|Cache DRAM|EDO|EDRAM|VRAM|SRAM|RAM|ROM|FLASH|EEPROM|FEPROM|EPROM|CDRAM|3DRAM|SDRAM|SGRAM|RDRAM|DDR|DDR2|DDR2 FB-DIMM|Reserved|DDR3|FBD2|DDR4|LPDDR|LPDDR2|LPDDR3|LPDDR4|Logical non-volatile device|HBM|HBM2|DDR5|LPDDR5".split(
                "|",
              ),
            s =
              "Unknown|Other|SIP|DIP|ZIP|SOJ|Proprietary|SIMM|DIMM|TSOP|PGA|RIMM|SODIMM|SRIMM|SMD|SSMP|QFP|TQFP|SOIC|LCC|PLCC|BGA|FPBGA|LGA".split(
                "|",
              );
          try {
            xn.powerShell(
              "Get-CimInstance Win32_PhysicalMemory | select DataWidth,TotalWidth,Capacity,BankLabel,MemoryType,SMBIOSMemoryType,ConfiguredClockSpeed,Speed,FormFactor,Manufacturer,PartNumber,SerialNumber,ConfiguredVoltage,MinVoltage,MaxVoltage,Tag | fl",
            ).then((a, u) => {
              if (!u) {
                let c = a.toString().split(/\n\s*\n/);
                (c.shift(),
                  c.forEach(function (m) {
                    let d = m.split(`\r
`),
                      f = xn.toInt(xn.getValue(d, "DataWidth", ":")),
                      p = xn.toInt(xn.getValue(d, "TotalWidth", ":")),
                      h = parseInt(xn.getValue(d, "Capacity", ":"), 10) || 0,
                      g = xn.getValue(d, "Tag", ":"),
                      b = xn.splitByNumber(g);
                    h &&
                      n.push({
                        size: h,
                        bank: xn.getValue(d, "BankLabel", ":") + (b[1] ? "/" + b[1] : ""),
                        type: o[
                          parseInt(xn.getValue(d, "MemoryType", ":"), 10) ||
                            parseInt(xn.getValue(d, "SMBIOSMemoryType", ":"), 10)
                        ],
                        ecc: f && p ? p > f : !1,
                        clockSpeed:
                          parseInt(xn.getValue(d, "ConfiguredClockSpeed", ":"), 10) ||
                          parseInt(xn.getValue(d, "Speed", ":"), 10) ||
                          0,
                        formFactor: s[parseInt(xn.getValue(d, "FormFactor", ":"), 10) || 0],
                        manufacturer: e(xn.getValue(d, "Manufacturer", ":")),
                        partNum: xn.getValue(d, "PartNumber", ":"),
                        serialNum: xn.getValue(d, "SerialNumber", ":"),
                        voltageConfigured: (parseInt(xn.getValue(d, "ConfiguredVoltage", ":"), 10) || 0) / 1e3,
                        voltageMin: (parseInt(xn.getValue(d, "MinVoltage", ":"), 10) || 0) / 1e3,
                        voltageMax: (parseInt(xn.getValue(d, "MaxVoltage", ":"), 10) || 0) / 1e3,
                      });
                  }));
              }
              (t && t(n), r(n));
            });
          } catch {
            (t && t(n), r(n));
          }
        }
      });
    });
  }
  eOt.memLayout = $es;
});