/**
 * @module Gun
 * @category protocol/acp
 * @label acp
 * @position 708 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gun) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gun = T((BAe) => {
  "use strict";
  var Ykt = Ae("fs"),
    oH = Ae("os"),
    br = Ff(),
    { uuid: FQu } = zkt(),
    aie = Ae("child_process").exec,
    iH = Ae("child_process").execSync,
    jGe = br.promisify(Ae("child_process").exec),
    bL = process.platform,
    QGe = bL === "linux" || bL === "android",
    GGe = bL === "darwin",
    qGe = bL === "win32",
    iie = bL === "freebsd",
    oie = bL === "openbsd",
    sie = bL === "netbsd",
    HGe = bL === "sunos";
  function wes(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = { manufacturer: "", model: "Computer", version: "", serial: "-", uuid: "-", sku: "-", virtual: !1 };
        if (
          ((QGe || iie || oie || sie) &&
            aie("export LC_ALL=C; dmidecode -t system 2>/dev/null; unset LC_ALL", (n, o) => {
              let s = o.toString().split(`
`);
              ((r.manufacturer = oa(br.getValue(s, "manufacturer"))),
                (r.model = oa(br.getValue(s, "product name"))),
                (r.version = oa(br.getValue(s, "version"))),
                (r.serial = oa(br.getValue(s, "serial number"))),
                (r.uuid = oa(br.getValue(s, "uuid")).toLowerCase()),
                (r.sku = oa(br.getValue(s, "sku number"))));
              let a = `echo -n "product_name: "; cat /sys/devices/virtual/dmi/id/product_name 2>/dev/null; echo;
            echo -n "product_serial: "; cat /sys/devices/virtual/dmi/id/product_serial 2>/dev/null; echo;
            echo -n "product_uuid: "; cat /sys/devices/virtual/dmi/id/product_uuid 2>/dev/null; echo;
            echo -n "product_version: "; cat /sys/devices/virtual/dmi/id/product_version 2>/dev/null; echo;
            echo -n "sys_vendor: "; cat /sys/devices/virtual/dmi/id/sys_vendor 2>/dev/null; echo;`;
              try {
                ((s = iH(a, br.execOptsLinux).toString().split(`
`)),
                  (r.manufacturer = oa(r.manufacturer === "" ? br.getValue(s, "sys_vendor") : r.manufacturer)),
                  (r.model = oa(r.model === "" ? br.getValue(s, "product_name") : r.model)),
                  (r.version = oa(r.version === "" ? br.getValue(s, "product_version") : r.version)),
                  (r.serial = oa(r.serial === "" ? br.getValue(s, "product_serial") : r.serial)),
                  (r.uuid = oa(r.uuid === "" ? br.getValue(s, "product_uuid").toLowerCase() : r.uuid)));
              } catch {
                br.noop();
              }
              if (
                (r.serial || (r.serial = "-"),
                r.manufacturer || (r.manufacturer = ""),
                r.model || (r.model = "Computer"),
                r.version || (r.version = ""),
                r.sku || (r.sku = "-"),
                r.model.toLowerCase() === "virtualbox" ||
                  r.model.toLowerCase() === "kvm" ||
                  r.model.toLowerCase() === "virtual machine" ||
                  r.model.toLowerCase() === "bochs" ||
                  r.model.toLowerCase().startsWith("vmware") ||
                  r.model.toLowerCase().startsWith("droplet"))
              )
                switch (((r.virtual = !0), r.model.toLowerCase())) {
                  case "virtualbox":
                    r.virtualHost = "VirtualBox";
                    break;
                  case "vmware":
                    r.virtualHost = "VMware";
                    break;
                  case "kvm":
                    r.virtualHost = "KVM";
                    break;
                  case "bochs":
                    r.virtualHost = "bochs";
                    break;
                }
              if (r.manufacturer.toLowerCase().startsWith("vmware") || r.manufacturer.toLowerCase() === "xen")
                switch (((r.virtual = !0), r.manufacturer.toLowerCase())) {
                  case "vmware":
                    r.virtualHost = "VMware";
                    break;
                  case "xen":
                    r.virtualHost = "Xen";
                    break;
                }
              if (!r.virtual)
                try {
                  let u = iH(
                    "ls -1 /dev/disk/by-id/ 2>/dev/null; pciconf -lv  2>/dev/null",
                    br.execOptsLinux,
                  ).toString();
                  ((u.indexOf("_QEMU_") >= 0 || u.indexOf("QEMU ") >= 0) &&
                    ((r.virtual = !0), (r.virtualHost = "QEMU")),
                    u.indexOf("_VBOX_") >= 0 && ((r.virtual = !0), (r.virtualHost = "VirtualBox")));
                } catch {
                  br.noop();
                }
              if (iie || oie || sie)
                try {
                  let u = iH("sysctl -i kern.hostuuid kern.hostid hw.model", br.execOptsLinux).toString().split(`
`);
                  (r.uuid || (r.uuid = br.getValue(u, "kern.hostuuid", ":").toLowerCase()),
                    (!r.serial || r.serial === "-") && (r.serial = br.getValue(u, "kern.hostid", ":").toLowerCase()),
                    (!r.model || r.model === "Computer") && (r.model = br.getValue(u, "hw.model", ":").trim()));
                } catch {
                  br.noop();
                }
              if (
                !r.virtual &&
                (oH.release().toLowerCase().indexOf("microsoft") >= 0 || oH.release().toLowerCase().endsWith("wsl2"))
              ) {
                let u = parseFloat(oH.release().toLowerCase());
                ((r.virtual = !0),
                  (r.manufacturer = "Microsoft"),
                  (r.model = "WSL"),
                  (r.version = u < 4.19 ? "1" : "2"));
              }
              if ((iie || oie || sie) && !r.virtualHost)
                try {
                  let c = iH("dmidecode -t 4", br.execOptsLinux).toString().split(`
`);
                  switch (br.getValue(c, "manufacturer", ":", !0).toLowerCase()) {
                    case "virtualbox":
                      r.virtualHost = "VirtualBox";
                      break;
                    case "vmware":
                      r.virtualHost = "VMware";
                      break;
                    case "kvm":
                      r.virtualHost = "KVM";
                      break;
                    case "bochs":
                      r.virtualHost = "bochs";
                      break;
                  }
                } catch {
                  br.noop();
                }
              (Ykt.existsSync("/.dockerenv") || Ykt.existsSync("/.dockerinit")) && (r.model = "Docker Container");
              try {
                let u = iH(
                  'dmesg 2>/dev/null | grep -iE "virtual|hypervisor" | grep -iE "vmware|qemu|kvm|xen" | grep -viE "Nested Virtualization|/virtual/"',
                );
                u.toString().split(`
`).length > 0 &&
                  (r.model === "Computer" && (r.model = "Virtual machine"),
                  (r.virtual = !0),
                  u.toString().toLowerCase().indexOf("vmware") >= 0 && !r.virtualHost && (r.virtualHost = "VMware"),
                  u.toString().toLowerCase().indexOf("qemu") >= 0 && !r.virtualHost && (r.virtualHost = "QEMU"),
                  u.toString().toLowerCase().indexOf("xen") >= 0 && !r.virtualHost && (r.virtualHost = "Xen"),
                  u.toString().toLowerCase().indexOf("kvm") >= 0 && !r.virtualHost && (r.virtualHost = "KVM"));
              } catch {
                br.noop();
              }
              r.manufacturer === "" && r.model === "Computer" && r.version === ""
                ? Ykt.readFile("/proc/cpuinfo", (u, c) => {
                    if (!u) {
                      let m = c.toString().split(`
`);
                      ((r.model = br.getValue(m, "hardware", ":", !0).toUpperCase()),
                        (r.version = br.getValue(m, "revision", ":", !0).toLowerCase()),
                        (r.serial = br.getValue(m, "serial", ":", !0)));
                      let d = br.getValue(m, "model:", ":", !0);
                      if (br.isRaspberry(m)) {
                        let f = br.decodePiCpuinfo(m);
                        ((r.model = f.model),
                          (r.version = f.revisionCode),
                          (r.manufacturer = "Raspberry Pi Foundation"),
                          (r.raspberry = {
                            manufacturer: f.manufacturer,
                            processor: f.processor,
                            type: f.type,
                            revision: f.revision,
                          }));
                      }
                    }
                    (t && t(r), e(r));
                  })
                : (t && t(r), e(r));
            }),
          GGe &&
            aie("ioreg -c IOPlatformExpertDevice -d 2", (n, o) => {
              if (!n) {
                let s = o.toString().replace(/[<>"]/g, "").split(`
`),
                  a = br.getAppleModel(br.getValue(s, "model", "=", !0));
                ((r.manufacturer = br.getValue(s, "manufacturer", "=", !0)),
                  (r.model = a.key),
                  (r.type = Qun(a.version)),
                  (r.version = a.version),
                  (r.serial = br.getValue(s, "ioplatformserialnumber", "=", !0)),
                  (r.uuid = br.getValue(s, "ioplatformuuid", "=", !0).toLowerCase()),
                  (r.sku = br.getValue(s, "board-id", "=", !0) || br.getValue(s, "target-sub-type", "=", !0)));
              }
              (t && t(r), e(r));
            }),
          HGe && (t && t(r), e(r)),
          qGe)
        )
          try {
            br.powerShell(
              "Get-CimInstance Win32_ComputerSystemProduct | select Name,Vendor,Version,IdentifyingNumber,UUID | fl",
            ).then((n, o) => {
              if (o) (t && t(r), e(r));
              else {
                let s = n.split(`\r
`);
                ((r.manufacturer = br.getValue(s, "vendor", ":")),
                  (r.model = br.getValue(s, "name", ":")),
                  (r.version = br.getValue(s, "version", ":")),
                  (r.serial = br.getValue(s, "identifyingnumber", ":")),
                  (r.uuid = br.getValue(s, "uuid", ":").toLowerCase()));
                let a = r.model.toLowerCase();
                (a === "virtualbox" ||
                  a === "kvm" ||
                  a === "virtual machine" ||
                  a === "bochs" ||
                  a.startsWith("vmware") ||
                  a.startsWith("qemu") ||
                  a.startsWith("parallels")) &&
                  ((r.virtual = !0),
                  a.startsWith("virtualbox") && (r.virtualHost = "VirtualBox"),
                  a.startsWith("vmware") && (r.virtualHost = "VMware"),
                  a.startsWith("kvm") && (r.virtualHost = "KVM"),
                  a.startsWith("bochs") && (r.virtualHost = "bochs"),
                  a.startsWith("qemu") && (r.virtualHost = "KVM"),
                  a.startsWith("parallels") && (r.virtualHost = "Parallels"));
                let u = r.manufacturer.toLowerCase();
                ((u.startsWith("vmware") || u.startsWith("qemu") || u === "xen" || u.startsWith("parallels")) &&
                  ((r.virtual = !0),
                  u.startsWith("vmware") && (r.virtualHost = "VMware"),
                  u.startsWith("xen") && (r.virtualHost = "Xen"),
                  u.startsWith("qemu") && (r.virtualHost = "KVM"),
                  u.startsWith("parallels") && (r.virtualHost = "Parallels")),
                  br
                    .powerShell('Get-CimInstance MS_Systeminformation -Namespace "root/wmi" | select systemsku | fl ')
                    .then((c, m) => {
                      if (!m) {
                        let d = c.split(`\r
`);
                        r.sku = br.getValue(d, "systemsku", ":");
                      }
                      r.virtual
                        ? (t && t(r), e(r))
                        : br
                            .powerShell("Get-CimInstance Win32_bios | select Version, SerialNumber, SMBIOSBIOSVersion")
                            .then((d, f) => {
                              if (f) (t && t(r), e(r));
                              else {
                                let p = d.toString();
                                ((p.indexOf("VRTUAL") >= 0 ||
                                  p.indexOf("A M I ") >= 0 ||
                                  p.indexOf("VirtualBox") >= 0 ||
                                  p.indexOf("VMWare") >= 0 ||
                                  p.indexOf("Xen") >= 0 ||
                                  p.indexOf("Parallels") >= 0) &&
                                  ((r.virtual = !0),
                                  p.indexOf("VirtualBox") >= 0 && !r.virtualHost && (r.virtualHost = "VirtualBox"),
                                  p.indexOf("VMware") >= 0 && !r.virtualHost && (r.virtualHost = "VMware"),
                                  p.indexOf("Xen") >= 0 && !r.virtualHost && (r.virtualHost = "Xen"),
                                  p.indexOf("VRTUAL") >= 0 && !r.virtualHost && (r.virtualHost = "Hyper-V"),
                                  p.indexOf("A M I") >= 0 && !r.virtualHost && (r.virtualHost = "Virtual PC"),
                                  p.indexOf("Parallels") >= 0 && !r.virtualHost && (r.virtualHost = "Parallels")),
                                  t && t(r),
                                  e(r));
                              }
                            });
                    }));
              }
            });
          } catch {
            (t && t(r), e(r));
          }
      });
    });
  }
  BAe.system = wes;
  function oa(t) {
    let e = t.toLowerCase();
    return (e.indexOf("o.e.m.") === -1 && e.indexOf("default string") === -1 && e !== "default" && t) || "";
  }
  function xes(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = { vendor: "", version: "", releaseDate: "", revision: "" },
          n = "";
        if (
          ((QGe || iie || oie || sie) &&
            (process.arch === "arm"
              ? (n = "cat /proc/cpuinfo | grep Serial")
              : (n = "export LC_ALL=C; dmidecode -t bios 2>/dev/null; unset LC_ALL"),
            aie(n, (o, s) => {
              let a = s.toString().split(`
`);
              ((r.vendor = br.getValue(a, "Vendor")), (r.version = br.getValue(a, "Version")));
              let u = br.getValue(a, "Release Date");
              ((r.releaseDate = br.parseDateTime(u).date),
                (r.revision = br.getValue(a, "BIOS Revision")),
                (r.serial = br.getValue(a, "SerialNumber")));
              let c = br.getValue(a, "Currently Installed Language").split("|")[0];
              if ((c && (r.language = c), a.length && s.toString().indexOf("Characteristics:") >= 0)) {
                let d = [];
                (a.forEach((f) => {
                  if (f.indexOf(" is supported") >= 0) {
                    let p = f.split(" is supported")[0].trim();
                    d.push(p);
                  }
                }),
                  (r.features = d));
              }
              let m = `echo -n "bios_date: "; cat /sys/devices/virtual/dmi/id/bios_date 2>/dev/null; echo;
            echo -n "bios_vendor: "; cat /sys/devices/virtual/dmi/id/bios_vendor 2>/dev/null; echo;
            echo -n "bios_version: "; cat /sys/devices/virtual/dmi/id/bios_version 2>/dev/null; echo;`;
              try {
                ((a = iH(m, br.execOptsLinux).toString().split(`
`)),
                  (r.vendor = r.vendor ? r.vendor : br.getValue(a, "bios_vendor")),
                  (r.version = r.version ? r.version : br.getValue(a, "bios_version")),
                  (u = br.getValue(a, "bios_date")),
                  (r.releaseDate = r.releaseDate ? r.releaseDate : br.parseDateTime(u).date));
              } catch {
                br.noop();
              }
              (t && t(r), e(r));
            })),
          GGe &&
            ((r.vendor = "Apple Inc."),
            aie("system_profiler SPHardwareDataType -json", (o, s) => {
              try {
                let a = JSON.parse(s.toString());
                if (a && a.SPHardwareDataType && a.SPHardwareDataType.length) {
                  let u = a.SPHardwareDataType[0].boot_rom_version;
                  ((u = u ? u.split("(")[0].trim() : null), (r.version = u));
                }
              } catch {
                br.noop();
              }
              (t && t(r), e(r));
            })),
          HGe && ((r.vendor = "Sun Microsystems"), t && t(r), e(r)),
          qGe)
        )
          try {
            br.powerShell(
              'Get-CimInstance Win32_bios | select Description,Version,Manufacturer,@{n="ReleaseDate";e={$_.ReleaseDate.ToString("yyyy-MM-dd")}},BuildNumber,SerialNumber,SMBIOSBIOSVersion | fl',
            ).then((o, s) => {
              if (!s) {
                let a = o.toString().split(`\r
`),
                  u = br.getValue(a, "description", ":"),
                  c = br.getValue(a, "SMBIOSBIOSVersion", ":");
                (u.indexOf(" Version ") !== -1
                  ? ((r.vendor = u.split(" Version ")[0].trim()), (r.version = u.split(" Version ")[1].trim()))
                  : u.indexOf(" Ver: ") !== -1
                    ? ((r.vendor = br.getValue(a, "manufacturer", ":")), (r.version = u.split(" Ver: ")[1].trim()))
                    : ((r.vendor = br.getValue(a, "manufacturer", ":")),
                      (r.version = c || br.getValue(a, "version", ":"))),
                  (r.releaseDate = br.getValue(a, "releasedate", ":")),
                  (r.revision = br.getValue(a, "buildnumber", ":")),
                  (r.serial = oa(br.getValue(a, "serialnumber", ":"))));
              }
              (t && t(r), e(r));
            });
          } catch {
            (t && t(r), e(r));
          }
      });
    });
  }
  BAe.bios = xes;
  function Tes(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = { manufacturer: "", model: "", version: "", serial: "-", assetTag: "-", memMax: null, memSlots: null },
          n = "";
        if (QGe || iie || oie || sie) {
          process.arch === "arm"
            ? (n = "cat /proc/cpuinfo | grep Serial")
            : (n = "export LC_ALL=C; dmidecode -t 2 2>/dev/null; unset LC_ALL");
          let o = [];
          (o.push(jGe(n)),
            o.push(jGe("export LC_ALL=C; dmidecode -t memory 2>/dev/null")),
            br.promiseAll(o).then((s) => {
              let a = s.results[0]
                ? s.results[0].toString().split(`
`)
                : [""];
              ((r.manufacturer = oa(br.getValue(a, "Manufacturer"))),
                (r.model = oa(br.getValue(a, "Product Name"))),
                (r.version = oa(br.getValue(a, "Version"))),
                (r.serial = oa(br.getValue(a, "Serial Number"))),
                (r.assetTag = oa(br.getValue(a, "Asset Tag"))));
              let u = `echo -n "board_asset_tag: "; cat /sys/devices/virtual/dmi/id/board_asset_tag 2>/dev/null; echo;
            echo -n "board_name: "; cat /sys/devices/virtual/dmi/id/board_name 2>/dev/null; echo;
            echo -n "board_serial: "; cat /sys/devices/virtual/dmi/id/board_serial 2>/dev/null; echo;
            echo -n "board_vendor: "; cat /sys/devices/virtual/dmi/id/board_vendor 2>/dev/null; echo;
            echo -n "board_version: "; cat /sys/devices/virtual/dmi/id/board_version 2>/dev/null; echo;`;
              try {
                ((a = iH(u, br.execOptsLinux).toString().split(`
`)),
                  (r.manufacturer = oa(r.manufacturer ? r.manufacturer : br.getValue(a, "board_vendor"))),
                  (r.model = oa(r.model ? r.model : br.getValue(a, "board_name"))),
                  (r.version = oa(r.version ? r.version : br.getValue(a, "board_version"))),
                  (r.serial = oa(r.serial ? r.serial : br.getValue(a, "board_serial"))),
                  (r.assetTag = oa(r.assetTag ? r.assetTag : br.getValue(a, "board_asset_tag"))));
              } catch {
                br.noop();
              }
              if (
                ((a = s.results[1]
                  ? s.results[1].toString().split(`
`)
                  : [""]),
                (r.memMax = br.toInt(br.getValue(a, "Maximum Capacity")) * 1024 * 1024 * 1024 || null),
                (r.memSlots = br.toInt(br.getValue(a, "Number Of Devices")) || null),
                br.isRaspberry())
              ) {
                let c = br.decodePiCpuinfo();
                ((r.manufacturer = c.manufacturer),
                  (r.model = "Raspberry Pi"),
                  (r.serial = c.serial),
                  (r.version = c.type + " - " + c.revision),
                  (r.memMax = oH.totalmem()),
                  (r.memSlots = 0));
              }
              (t && t(r), e(r));
            }));
        }
        if (GGe) {
          let o = [];
          (o.push(jGe("ioreg -c IOPlatformExpertDevice -d 2")),
            o.push(jGe("system_profiler SPMemoryDataType")),
            br.promiseAll(o).then((s) => {
              let a = s.results[0]
                ? s.results[0].toString().replace(/[<>"]/g, "").split(`
`)
                : [""];
              ((r.manufacturer = br.getValue(a, "manufacturer", "=", !0)),
                (r.model = br.getValue(a, "model", "=", !0)),
                (r.version = br.getValue(a, "version", "=", !0)),
                (r.serial = br.getValue(a, "ioplatformserialnumber", "=", !0)),
                (r.assetTag = br.getValue(a, "board-id", "=", !0)));
              let u = s.results[1] ? s.results[1].toString().split("        BANK ") : [""];
              (u.length === 1 && (u = s.results[1] ? s.results[1].toString().split("        DIMM") : [""]),
                u.shift(),
                (r.memSlots = u.length),
                oH.arch() === "arm64" && ((r.memSlots = 0), (r.memMax = oH.totalmem())),
                t && t(r),
                e(r));
            }));
        }
        if ((HGe && (t && t(r), e(r)), qGe))
          try {
            let o = [],
              s = parseInt(oH.release()) >= 10,
              a = s ? "MaxCapacityEx" : "MaxCapacity";
            (o.push(
              br.powerShell(
                "Get-CimInstance Win32_baseboard | select Model,Manufacturer,Product,Version,SerialNumber,PartNumber,SKU | fl",
              ),
            ),
              o.push(br.powerShell(`Get-CimInstance Win32_physicalmemoryarray | select ${a}, MemoryDevices | fl`)),
              br.promiseAll(o).then((u) => {
                let c = u.results[0]
                  ? u.results[0].toString().split(`\r
`)
                  : [""];
                ((r.manufacturer = oa(br.getValue(c, "manufacturer", ":"))),
                  (r.model = oa(br.getValue(c, "model", ":"))),
                  r.model || (r.model = oa(br.getValue(c, "product", ":"))),
                  (r.version = oa(br.getValue(c, "version", ":"))),
                  (r.serial = oa(br.getValue(c, "serialnumber", ":"))),
                  (r.assetTag = oa(br.getValue(c, "partnumber", ":"))),
                  r.assetTag || (r.assetTag = oa(br.getValue(c, "sku", ":"))),
                  (c = u.results[1]
                    ? u.results[1].toString().split(`\r
`)
                    : [""]),
                  (r.memMax = br.toInt(br.getValue(c, a, ":")) * (s ? 1024 : 1) || null),
                  (r.memSlots = br.toInt(br.getValue(c, "MemoryDevices", ":")) || null),
                  t && t(r),
                  e(r));
              }));
          } catch {
            (t && t(r), e(r));
          }
      });
    });
  }
  BAe.baseboard = Tes;
  function Qun(t) {
    return (
      (t = t.toLowerCase()),
      t.indexOf("macbookair") >= 0 ||
      t.indexOf("macbook air") >= 0 ||
      t.indexOf("macbookpro") >= 0 ||
      t.indexOf("macbook pro") >= 0 ||
      t.indexOf("macbook") >= 0
        ? "Notebook"
        : t.indexOf("macmini") >= 0 ||
            t.indexOf("mac mini") >= 0 ||
            t.indexOf("imac") >= 0 ||
            t.indexOf("macstudio") >= 0 ||
            t.indexOf("mac studio") >= 0
          ? "Desktop"
          : t.indexOf("macpro") >= 0 || t.indexOf("mac pro") >= 0
            ? "Tower"
            : "Other"
    );
  }
  function Des(t) {
    let e = [
      "Other",
      "Unknown",
      "Desktop",
      "Low Profile Desktop",
      "Pizza Box",
      "Mini Tower",
      "Tower",
      "Portable",
      "Laptop",
      "Notebook",
      "Hand Held",
      "Docking Station",
      "All in One",
      "Sub Notebook",
      "Space-Saving",
      "Lunch Box",
      "Main System Chassis",
      "Expansion Chassis",
      "SubChassis",
      "Bus Expansion Chassis",
      "Peripheral Chassis",
      "Storage Chassis",
      "Rack Mount Chassis",
      "Sealed-Case PC",
      "Multi-System Chassis",
      "Compact PCI",
      "Advanced TCA",
      "Blade",
      "Blade Enclosure",
      "Tablet",
      "Convertible",
      "Detachable",
      "IoT Gateway ",
      "Embedded PC",
      "Mini PC",
      "Stick PC",
    ];
    return new Promise((r) => {
      process.nextTick(() => {
        let n = { manufacturer: "", model: "", type: "", version: "", serial: "-", assetTag: "-", sku: "" };
        if (
          ((QGe || iie || oie || sie) &&
            aie(
              `echo -n "chassis_asset_tag: "; cat /sys/devices/virtual/dmi/id/chassis_asset_tag 2>/dev/null; echo;
            echo -n "chassis_serial: "; cat /sys/devices/virtual/dmi/id/chassis_serial 2>/dev/null; echo;
            echo -n "chassis_type: "; cat /sys/devices/virtual/dmi/id/chassis_type 2>/dev/null; echo;
            echo -n "chassis_vendor: "; cat /sys/devices/virtual/dmi/id/chassis_vendor 2>/dev/null; echo;
            echo -n "chassis_version: "; cat /sys/devices/virtual/dmi/id/chassis_version 2>/dev/null; echo;`,
              (s, a) => {
                let u = a.toString().split(`
`);
                n.manufacturer = oa(br.getValue(u, "chassis_vendor"));
                let c = parseInt(br.getValue(u, "chassis_type").replace(/\D/g, ""));
                ((n.type = oa(c && !isNaN(c) && c < e.length ? e[c - 1] : "")),
                  (n.version = oa(br.getValue(u, "chassis_version"))),
                  (n.serial = oa(br.getValue(u, "chassis_serial"))),
                  (n.assetTag = oa(br.getValue(u, "chassis_asset_tag"))),
                  t && t(n),
                  r(n));
              },
            ),
          GGe &&
            aie("ioreg -c IOPlatformExpertDevice -d 2", (o, s) => {
              if (!o) {
                let a = s.toString().replace(/[<>"]/g, "").split(`
`),
                  u = br.getAppleModel(br.getValue(a, "model", "=", !0));
                ((n.manufacturer = br.getValue(a, "manufacturer", "=", !0)),
                  (n.model = u.key),
                  (n.type = Qun(u.model)),
                  (n.version = u.version),
                  (n.serial = br.getValue(a, "ioplatformserialnumber", "=", !0)),
                  (n.assetTag = br.getValue(a, "board-id", "=", !0) || br.getValue(a, "target-type", "=", !0)),
                  (n.sku = br.getValue(a, "target-sub-type", "=", !0)));
              }
              (t && t(n), r(n));
            }),
          HGe && (t && t(n), r(n)),
          qGe)
        )
          try {
            br.powerShell(
              "Get-CimInstance Win32_SystemEnclosure | select Model,Manufacturer,ChassisTypes,Version,SerialNumber,PartNumber,SKU,SMBIOSAssetTag | fl",
            ).then((o, s) => {
              if (!s) {
                let a = o.toString().split(`\r
`);
                ((n.manufacturer = oa(br.getValue(a, "manufacturer", ":"))),
                  (n.model = oa(br.getValue(a, "model", ":"))));
                let u = parseInt(br.getValue(a, "ChassisTypes", ":").replace(/\D/g, ""));
                ((n.type = u && !isNaN(u) && u < e.length ? e[u - 1] : ""),
                  (n.version = oa(br.getValue(a, "version", ":"))),
                  (n.serial = oa(br.getValue(a, "serialnumber", ":"))),
                  (n.assetTag = oa(br.getValue(a, "partnumber", ":"))),
                  n.assetTag || (n.assetTag = oa(br.getValue(a, "SMBIOSAssetTag", ":"))),
                  (n.sku = oa(br.getValue(a, "sku", ":"))));
              }
              (t && t(n), r(n));
            });
          } catch {
            (t && t(n), r(n));
          }
      });
    });
  }
  BAe.chassis = Des;
});