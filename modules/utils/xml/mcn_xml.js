/**
 * @module mcn
 * @category utils/xml
 * @label xml
 * @position 712 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mcn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mcn = T((lcn) => {
  "use strict";
  var MAe = Ae("fs"),
    mie = Ae("child_process").exec,
    tOt = Ae("child_process").execSync,
    ii = Ff(),
    vL = process.platform,
    FAe = "",
    nqe = vL === "linux" || vL === "android",
    Yes = vL === "darwin",
    rOt = vL === "win32",
    Kes = vL === "freebsd",
    Jes = vL === "openbsd",
    Xes = vL === "netbsd",
    Zes = vL === "sunos",
    UAe = 0,
    $Ae = 0,
    iqe = 0,
    oqe = 0,
    ucn = {
      "-2": "UNINITIALIZED",
      "-1": "OTHER",
      0: "HD15",
      1: "SVIDEO",
      2: "Composite video",
      3: "Component video",
      4: "DVI",
      5: "HDMI",
      6: "LVDS",
      8: "D_JPN",
      9: "SDI",
      10: "DP",
      11: "DP embedded",
      12: "UDI",
      13: "UDI embedded",
      14: "SDTVDONGLE",
      15: "MIRACAST",
      2147483648: "INTERNAL",
    };
  function ccn(t) {
    let e = [
        { pattern: "^LG.+", manufacturer: "LG" },
        { pattern: "^BENQ.+", manufacturer: "BenQ" },
        { pattern: "^ASUS.+", manufacturer: "Asus" },
        { pattern: "^DELL.+", manufacturer: "Dell" },
        { pattern: "^SAMSUNG.+", manufacturer: "Samsung" },
        { pattern: "^VIEWSON.+", manufacturer: "ViewSonic" },
        { pattern: "^SONY.+", manufacturer: "Sony" },
        { pattern: "^ACER.+", manufacturer: "Acer" },
        { pattern: "^AOC.+", manufacturer: "AOC Monitors" },
        { pattern: "^HP.+", manufacturer: "HP" },
        { pattern: "^EIZO.?", manufacturer: "Eizo" },
        { pattern: "^PHILIPS.?", manufacturer: "Philips" },
        { pattern: "^IIYAMA.?", manufacturer: "Iiyama" },
        { pattern: "^SHARP.?", manufacturer: "Sharp" },
        { pattern: "^NEC.?", manufacturer: "NEC" },
        { pattern: "^LENOVO.?", manufacturer: "Lenovo" },
        { pattern: "COMPAQ.?", manufacturer: "Compaq" },
        { pattern: "APPLE.?", manufacturer: "Apple" },
        { pattern: "INTEL.?", manufacturer: "Intel" },
        { pattern: "AMD.?", manufacturer: "AMD" },
        { pattern: "NVIDIA.?", manufacturer: "NVDIA" },
      ],
      r = "";
    return (
      t &&
        ((t = t.toUpperCase()),
        e.forEach((n) => {
          RegExp(n.pattern).test(t) && (r = n.manufacturer);
        })),
      r
    );
  }
  function ets(t) {
    return { 610: "Apple", "1e6d": "LG", "10ac": "DELL", "4dd9": "Sony", "38a3": "NEC" }[t] || "";
  }
  function tts(t) {
    let e = "";
    return (
      (t = (t || "").toLowerCase()),
      t.indexOf("apple") >= 0
        ? (e = "0x05ac")
        : t.indexOf("nvidia") >= 0
          ? (e = "0x10de")
          : t.indexOf("intel") >= 0
            ? (e = "0x8086")
            : (t.indexOf("ati") >= 0 || t.indexOf("amd") >= 0) && (e = "0x1002"),
      e
    );
  }
  function rts(t) {
    return (
      {
        spdisplays_mtlgpufamilymac1: "mac1",
        spdisplays_mtlgpufamilymac2: "mac2",
        spdisplays_mtlgpufamilyapple1: "apple1",
        spdisplays_mtlgpufamilyapple2: "apple2",
        spdisplays_mtlgpufamilyapple3: "apple3",
        spdisplays_mtlgpufamilyapple4: "apple4",
        spdisplays_mtlgpufamilyapple5: "apple5",
        spdisplays_mtlgpufamilyapple6: "apple6",
        spdisplays_mtlgpufamilyapple7: "apple7",
        spdisplays_metalfeaturesetfamily11: "family1_v1",
        spdisplays_metalfeaturesetfamily12: "family1_v2",
        spdisplays_metalfeaturesetfamily13: "family1_v3",
        spdisplays_metalfeaturesetfamily14: "family1_v4",
        spdisplays_metalfeaturesetfamily21: "family2_v1",
      }[t] || ""
    );
  }
  function nts(t) {
    function e(p) {
      let h = { controllers: [], displays: [] };
      try {
        return (
          p.forEach((g) => {
            let b =
                (g.sppci_bus || "").indexOf("builtin") > -1
                  ? "Built-In"
                  : (g.sppci_bus || "").indexOf("pcie") > -1
                    ? "PCIe"
                    : "",
              A =
                (parseInt(g.spdisplays_vram || "", 10) || 0) *
                ((g.spdisplays_vram || "").indexOf("GB") > -1 ? 1024 : 1),
              y =
                (parseInt(g.spdisplays_vram_shared || "", 10) || 0) *
                ((g.spdisplays_vram_shared || "").indexOf("GB") > -1 ? 1024 : 1),
              E = rts(g.spdisplays_metal || g.spdisplays_metalfamily || "");
            (h.controllers.push({
              vendor: ccn(g.spdisplays_vendor || "") || g.spdisplays_vendor || "",
              model: g.sppci_model || "",
              bus: b,
              vramDynamic: b === "Built-In",
              vram: A || y || null,
              deviceId: g["spdisplays_device-id"] || "",
              vendorId: g["spdisplays_vendor-id"] || tts((g.spdisplays_vendor || "") + (g.sppci_model || "")),
              external: g.sppci_device_type === "spdisplays_egpu",
              cores: g.sppci_cores || null,
              metalVersion: E,
            }),
              g.spdisplays_ndrvs &&
                g.spdisplays_ndrvs.length &&
                g.spdisplays_ndrvs.forEach((v) => {
                  let C = v.spdisplays_connection_type || "",
                    x = (v._spdisplays_resolution || "").split("@"),
                    k = x[0].split("x"),
                    R = (v._spdisplays_pixels || "").split("x"),
                    P = v.spdisplays_depth || "",
                    D = v["_spdisplays_display-serial-number"] || v["_spdisplays_display-serial-number2"] || null;
                  h.displays.push({
                    vendor: ets(v["_spdisplays_display-vendor-id"] || "") || ccn(v._name || ""),
                    vendorId: v["_spdisplays_display-vendor-id"] || "",
                    model: v._name || "",
                    productionYear: v["_spdisplays_display-year"] || null,
                    serial: D !== "0" ? D : null,
                    displayId: v._spdisplays_displayID || null,
                    main: v.spdisplays_main ? v.spdisplays_main === "spdisplays_yes" : !1,
                    builtin: (v.spdisplays_display_type || "").indexOf("built-in") > -1,
                    connection:
                      C.indexOf("_internal") > -1
                        ? "Internal"
                        : C.indexOf("_displayport") > -1
                          ? "Display Port"
                          : C.indexOf("_hdmi") > -1
                            ? "HDMI"
                            : null,
                    sizeX: null,
                    sizeY: null,
                    pixelDepth:
                      P === "CGSThirtyBitColor"
                        ? 30
                        : P === "CGSThirtytwoBitColor"
                          ? 32
                          : P === "CGSTwentyfourBitColor"
                            ? 24
                            : null,
                    resolutionX: R.length > 1 ? parseInt(R[0], 10) : null,
                    resolutionY: R.length > 1 ? parseInt(R[1], 10) : null,
                    currentResX: k.length > 1 ? parseInt(k[0], 10) : null,
                    currentResY: k.length > 1 ? parseInt(k[1], 10) : null,
                    positionX: 0,
                    positionY: 0,
                    currentRefreshRate: x.length > 1 ? parseInt(x[1], 10) : null,
                  });
                }));
          }),
          h
        );
      } catch {
        return h;
      }
    }
    function r(p) {
      let h = [],
        g = { vendor: "", subVendor: "", model: "", bus: "", busAddress: "", vram: null, vramDynamic: !1, pciID: "" },
        b = !1,
        A = [];
      try {
        A = tOt(
          'export LC_ALL=C; dmidecode -t 9 2>/dev/null; unset LC_ALL | grep "Bus Address: "',
          ii.execOptsLinux,
        ).toString().split(`
`);
        for (let E = 0; E < A.length; E++) A[E] = A[E].replace("Bus Address:", "").replace("0000:", "").trim();
        A = A.filter(function (E) {
          return E != null && E;
        });
      } catch {
        ii.noop();
      }
      let y = 1;
      return (
        p.forEach((E) => {
          let v = "";
          if ((y < p.length && p[y] && ((v = p[y]), v.indexOf(":") > 0 && (v = v.split(":")[1])), E.trim() !== "")) {
            if (E[0] !== " " && E[0] !== "	") {
              let C = A.indexOf(E.split(" ")[0]) >= 0,
                x = E.toLowerCase().indexOf(" vga "),
                k = E.toLowerCase().indexOf("3d controller");
              if (x !== -1 || k !== -1) {
                (k !== -1 && x === -1 && (x = k),
                  (g.vendor || g.model || g.bus || g.vram !== null || g.vramDynamic) &&
                    (h.push(g), (g = { vendor: "", model: "", bus: "", busAddress: "", vram: null, vramDynamic: !1 })));
                let R = E.split(" ")[0];
                (/[\da-fA-F]{2}:[\da-fA-F]{2}\.[\da-fA-F]/.test(R) && (g.busAddress = R), (b = !0));
                let P = E.search(/\[[0-9a-f]{4}:[0-9a-f]{4}]|$/),
                  D = E.substr(x, P - x).split(":");
                if (
                  ((g.busAddress = E.substr(0, x).trim()),
                  D.length > 1 &&
                    ((D[1] = D[1].trim()),
                    D[1].toLowerCase().indexOf("corporation") >= 0
                      ? ((g.vendor = D[1].substr(0, D[1].toLowerCase().indexOf("corporation") + 11).trim()),
                        (g.model = D[1]
                          .substr(D[1].toLowerCase().indexOf("corporation") + 11, 200)
                          .split("(")[0]
                          .trim()),
                        (g.bus = A.length > 0 && C ? "PCIe" : "Onboard"),
                        (g.vram = null),
                        (g.vramDynamic = !1))
                      : D[1].toLowerCase().indexOf(" inc.") >= 0
                        ? ((D[1].match(/]/g) || []).length > 1
                            ? ((g.vendor = D[1].substr(0, D[1].toLowerCase().indexOf("]") + 1).trim()),
                              (g.model = D[1]
                                .substr(D[1].toLowerCase().indexOf("]") + 1, 200)
                                .trim()
                                .split("(")[0]
                                .trim()))
                            : ((g.vendor = D[1].substr(0, D[1].toLowerCase().indexOf(" inc.") + 5).trim()),
                              (g.model = D[1]
                                .substr(D[1].toLowerCase().indexOf(" inc.") + 5, 200)
                                .trim()
                                .split("(")[0]
                                .trim())),
                          (g.bus = A.length > 0 && C ? "PCIe" : "Onboard"),
                          (g.vram = null),
                          (g.vramDynamic = !1))
                        : D[1].toLowerCase().indexOf(" ltd.") >= 0 &&
                          ((D[1].match(/]/g) || []).length > 1
                            ? ((g.vendor = D[1].substr(0, D[1].toLowerCase().indexOf("]") + 1).trim()),
                              (g.model = D[1]
                                .substr(D[1].toLowerCase().indexOf("]") + 1, 200)
                                .trim()
                                .split("(")[0]
                                .trim()))
                            : ((g.vendor = D[1].substr(0, D[1].toLowerCase().indexOf(" ltd.") + 5).trim()),
                              (g.model = D[1]
                                .substr(D[1].toLowerCase().indexOf(" ltd.") + 5, 200)
                                .trim()
                                .split("(")[0]
                                .trim()))),
                    g.model && v.indexOf(g.model) !== -1))
                ) {
                  let O = v.split(g.model)[0].trim();
                  O && (g.subVendor = O);
                }
              } else b = !1;
            }
            if (b) {
              let C = E.split(":");
              if (
                (C.length > 1 &&
                  C[0].replace(/ +/g, "").toLowerCase().indexOf("devicename") !== -1 &&
                  C[1].toLowerCase().indexOf("onboard") !== -1 &&
                  (g.bus = "Onboard"),
                C.length > 1 &&
                  C[0].replace(/ +/g, "").toLowerCase().indexOf("region") !== -1 &&
                  C[1].toLowerCase().indexOf("memory") !== -1)
              ) {
                let x = C[1].split("=");
                x.length > 1 && (g.vram = parseInt(x[1]));
              }
            }
          }
          y++;
        }),
        (g.vendor || g.model || g.bus || g.busAddress || g.vram !== null || g.vramDynamic) && h.push(g),
        h
      );
    }
    function n(p, h) {
      let g = /\[([^\]]+)\]\s+(\w+)\s+(.*)/,
        b = h.reduce((A, y) => {
          let E = g.exec(y.trim());
          return (E && (A[E[1]] || (A[E[1]] = {}), (A[E[1]][E[2]] = E[3])), A);
        }, {});
      for (let A in b) {
        let y = b[A];
        if (y.CL_DEVICE_TYPE === "CL_DEVICE_TYPE_GPU") {
          let E;
          if (y.CL_DEVICE_TOPOLOGY_AMD) {
            let v = y.CL_DEVICE_TOPOLOGY_AMD.match(/[a-zA-Z0-9]+:\d+\.\d+/);
            v && (E = v[0]);
          } else if (y.CL_DEVICE_PCI_BUS_ID_NV && y.CL_DEVICE_PCI_SLOT_ID_NV) {
            let v = parseInt(y.CL_DEVICE_PCI_BUS_ID_NV),
              C = parseInt(y.CL_DEVICE_PCI_SLOT_ID_NV);
            if (!isNaN(v) && !isNaN(C)) {
              let x = v & 255,
                k = (C >> 3) & 255,
                R = C & 7;
              E = `${x.toString().padStart(2, "0")}:${k.toString().padStart(2, "0")}.${R}`;
            }
          }
          if (E) {
            let v = p.find((x) => x.busAddress === E);
            (v || ((v = { vendor: "", model: "", bus: "", busAddress: E, vram: null, vramDynamic: !1 }), p.push(v)),
              (v.vendor = y.CL_DEVICE_VENDOR),
              y.CL_DEVICE_BOARD_NAME_AMD ? (v.model = y.CL_DEVICE_BOARD_NAME_AMD) : (v.model = y.CL_DEVICE_NAME));
            let C = parseInt(y.CL_DEVICE_GLOBAL_MEM_SIZE);
            isNaN(C) || (v.vram = Math.round(C / 1024 / 1024));
          }
        }
      }
      return p;
    }
    function o() {
      if (FAe) return FAe;
      if (rOt)
        try {
          let p = ii.WINDIR + String.raw`\System32\DriverStore\FileRepository`,
            g = MAe.readdirSync(p)
              .filter((b) =>
                MAe.statSync([p, b].join("/")).isDirectory()
                  ? MAe.readdirSync([p, b].join("/")).includes("nvidia-smi.exe")
                  : !1,
              )
              .reduce((b, A) => {
                let y = MAe.statSync([p, b, "nvidia-smi.exe"].join("/")),
                  E = MAe.statSync([p, A, "nvidia-smi.exe"].join("/"));
                return y.ctimeMs > E.ctimeMs ? b : A;
              });
          g && (FAe = [p, g, "nvidia-smi.exe"].join("/"));
        } catch {
          ii.noop();
        }
      else nqe && (FAe = "nvidia-smi");
      return FAe;
    }
    function s(p) {
      let h = o();
      if (((p = p || ii.execOptsWin), h)) {
        let b =
          h +
          " " +
          "--query-gpu=driver_version,pci.sub_device_id,name,pci.bus_id,fan.speed,memory.total,memory.used,memory.free,utilization.gpu,utilization.memory,temperature.gpu,temperature.memory,power.draw,power.limit,clocks.gr,clocks.mem --format=csv,noheader,nounits";
        nqe && (p.stdio = ["pipe", "pipe", "ignore"]);
        try {
          let A = ii.sanitizeShellString(b) + (nqe ? "  2>/dev/null" : "") + (rOt ? "  2> nul" : "");
          return tOt(A, p).toString();
        } catch {
          ii.noop();
        }
      }
      return "";
    }
    function a() {
      function p(A) {
        return [null, void 0].includes(A) ? A : parseFloat(A);
      }
      let h = s();
      if (!h) return [];
      let b = h
        .split(
          `
`,
        )
        .filter(Boolean)
        .map((A) => {
          let y = A.split(", ").map((E) => (E.includes("N/A") ? void 0 : E));
          return y.length === 16
            ? {
                driverVersion: y[0],
                subDeviceId: y[1],
                name: y[2],
                pciBus: y[3],
                fanSpeed: p(y[4]),
                memoryTotal: p(y[5]),
                memoryUsed: p(y[6]),
                memoryFree: p(y[7]),
                utilizationGpu: p(y[8]),
                utilizationMemory: p(y[9]),
                temperatureGpu: p(y[10]),
                temperatureMemory: p(y[11]),
                powerDraw: p(y[12]),
                powerLimit: p(y[13]),
                clockCore: p(y[14]),
                clockMemory: p(y[15]),
              }
            : {};
        });
      return ((b = b.filter((A) => "pciBus" in A)), b);
    }
    function u(p, h) {
      return (
        h.driverVersion && (p.driverVersion = h.driverVersion),
        h.subDeviceId && (p.subDeviceId = h.subDeviceId),
        h.name && (p.name = h.name),
        h.pciBus && (p.pciBus = h.pciBus),
        h.fanSpeed && (p.fanSpeed = h.fanSpeed),
        h.memoryTotal && ((p.memoryTotal = h.memoryTotal), (p.vram = h.memoryTotal), (p.vramDynamic = !1)),
        h.memoryUsed && (p.memoryUsed = h.memoryUsed),
        h.memoryFree && (p.memoryFree = h.memoryFree),
        h.utilizationGpu && (p.utilizationGpu = h.utilizationGpu),
        h.utilizationMemory && (p.utilizationMemory = h.utilizationMemory),
        h.temperatureGpu && (p.temperatureGpu = h.temperatureGpu),
        h.temperatureMemory && (p.temperatureMemory = h.temperatureMemory),
        h.powerDraw && (p.powerDraw = h.powerDraw),
        h.powerLimit && (p.powerLimit = h.powerLimit),
        h.clockCore && (p.clockCore = h.clockCore),
        h.clockMemory && (p.clockMemory = h.clockMemory),
        p
      );
    }
    function c(p) {
      let h = {
          vendor: "",
          model: "",
          deviceName: "",
          main: !1,
          builtin: !1,
          connection: "",
          sizeX: null,
          sizeY: null,
          pixelDepth: null,
          resolutionX: null,
          resolutionY: null,
          currentResX: null,
          currentResY: null,
          positionX: 0,
          positionY: 0,
          currentRefreshRate: null,
        },
        g = 108;
      if (
        (p.substr(g, 6) === "000000" && (g += 36),
        p.substr(g, 6) === "000000" && (g += 36),
        p.substr(g, 6) === "000000" && (g += 36),
        p.substr(g, 6) === "000000" && (g += 36),
        (h.resolutionX = parseInt("0x0" + p.substr(g + 8, 1) + p.substr(g + 4, 2))),
        (h.resolutionY = parseInt("0x0" + p.substr(g + 14, 1) + p.substr(g + 10, 2))),
        (h.sizeX = parseInt("0x0" + p.substr(g + 28, 1) + p.substr(g + 24, 2))),
        (h.sizeY = parseInt("0x0" + p.substr(g + 29, 1) + p.substr(g + 26, 2))),
        (g = p.indexOf("000000fc00")),
        g >= 0)
      ) {
        let b = p.substr(g + 10, 26);
        b.indexOf("0a") !== -1 && (b = b.substr(0, b.indexOf("0a")));
        try {
          b.length > 2 &&
            (h.model = b
              .match(/.{1,2}/g)
              .map((A) => String.fromCharCode(parseInt(A, 16)))
              .join(""));
        } catch {
          ii.noop();
        }
      } else h.model = "";
      return h;
    }
    function m(p, h) {
      let g = [],
        b = {
          vendor: "",
          model: "",
          deviceName: "",
          main: !1,
          builtin: !1,
          connection: "",
          sizeX: null,
          sizeY: null,
          pixelDepth: null,
          resolutionX: null,
          resolutionY: null,
          currentResX: null,
          currentResY: null,
          positionX: 0,
          positionY: 0,
          currentRefreshRate: null,
        },
        A = !1,
        y = !1,
        E = "",
        v = 0;
      for (let C = 1; C < p.length; C++)
        if (p[C].trim() !== "") {
          if (p[C][0] !== " " && p[C][0] !== "	" && p[C].toLowerCase().indexOf(" connected ") !== -1) {
            (b.model ||
              b.main ||
              b.builtin ||
              b.connection ||
              b.sizeX !== null ||
              b.pixelDepth !== null ||
              b.resolutionX !== null) &&
              (g.push(b),
              (b = {
                vendor: "",
                model: "",
                main: !1,
                builtin: !1,
                connection: "",
                sizeX: null,
                sizeY: null,
                pixelDepth: null,
                resolutionX: null,
                resolutionY: null,
                currentResX: null,
                currentResY: null,
                positionX: 0,
                positionY: 0,
                currentRefreshRate: null,
              }));
            let x = p[C].split(" ");
            ((b.connection = x[0]),
              (b.main = p[C].toLowerCase().indexOf(" primary ") >= 0),
              (b.builtin = x[0].toLowerCase().indexOf("edp") >= 0));
          }
          if (A)
            if (p[C].search(/\S|$/) > v) E += p[C].toLowerCase().trim();
            else {
              let x = c(E);
              ((b.vendor = x.vendor),
                (b.model = x.model),
                (b.resolutionX = x.resolutionX),
                (b.resolutionY = x.resolutionY),
                (b.sizeX = x.sizeX),
                (b.sizeY = x.sizeY),
                (b.pixelDepth = h),
                (A = !1));
            }
          if (
            (p[C].toLowerCase().indexOf("edid:") >= 0 && ((A = !0), (v = p[C].search(/\S|$/))),
            p[C].toLowerCase().indexOf("*current") >= 0)
          ) {
            let x = p[C].split("(");
            if (x && x.length > 1 && x[0].indexOf("x") >= 0) {
              let k = x[0].trim().split("x");
              ((b.currentResX = ii.toInt(k[0])), (b.currentResY = ii.toInt(k[1])));
            }
            y = !0;
          }
          if (
            y &&
            p[C].toLowerCase().indexOf("clock") >= 0 &&
            p[C].toLowerCase().indexOf("hz") >= 0 &&
            p[C].toLowerCase().indexOf("v: height") >= 0
          ) {
            let x = p[C].split("clock");
            (x && x.length > 1 && x[1].toLowerCase().indexOf("hz") >= 0 && (b.currentRefreshRate = ii.toInt(x[1])),
              (y = !1));
          }
        }
      return (
        (b.model ||
          b.main ||
          b.builtin ||
          b.connection ||
          b.sizeX !== null ||
          b.pixelDepth !== null ||
          b.resolutionX !== null) &&
          g.push(b),
        g
      );
    }
    return new Promise((p) => {
      process.nextTick(() => {
        let h = { controllers: [], displays: [] };
        if (
          (Yes &&
            mie("system_profiler -xml -detailLevel full SPDisplaysDataType", (b, A) => {
              if (!b) {
                try {
                  let y = A.toString();
                  h = e(ii.plistParser(y)[0]._items);
                } catch {
                  ii.noop();
                }
                try {
                  A = tOt(
                    'defaults read /Library/Preferences/com.apple.windowserver.plist 2>/dev/null;defaults read /Library/Preferences/com.apple.windowserver.displays.plist 2>/dev/null; echo ""',
                    { maxBuffer: 1024 * 102400 },
                  );
                  let y = (A || "").toString(),
                    E = ii.plistReader(y);
                  if (
                    E.DisplayAnyUserSets &&
                    E.DisplayAnyUserSets.Configs &&
                    E.DisplayAnyUserSets.Configs[0] &&
                    E.DisplayAnyUserSets.Configs[0].DisplayConfig
                  ) {
                    let v = E.DisplayAnyUserSets.Configs[0].DisplayConfig,
                      C = 0;
                    v.forEach((x) => {
                      (x.CurrentInfo &&
                        x.CurrentInfo.OriginX !== void 0 &&
                        h.displays &&
                        h.displays[C] &&
                        (h.displays[C].positionX = x.CurrentInfo.OriginX),
                        x.CurrentInfo &&
                          x.CurrentInfo.OriginY !== void 0 &&
                          h.displays &&
                          h.displays[C] &&
                          (h.displays[C].positionY = x.CurrentInfo.OriginY),
                        C++);
                    });
                  }
                  if (
                    E.DisplayAnyUserSets &&
                    E.DisplayAnyUserSets.length > 0 &&
                    E.DisplayAnyUserSets[0].length > 0 &&
                    E.DisplayAnyUserSets[0][0].DisplayID
                  ) {
                    let v = E.DisplayAnyUserSets[0],
                      C = 0;
                    v.forEach((x) => {
                      ("OriginX" in x && h.displays && h.displays[C] && (h.displays[C].positionX = x.OriginX),
                        "OriginY" in x && h.displays && h.displays[C] && (h.displays[C].positionY = x.OriginY),
                        x.Mode &&
                          x.Mode.BitsPerPixel !== void 0 &&
                          h.displays &&
                          h.displays[C] &&
                          (h.displays[C].pixelDepth = x.Mode.BitsPerPixel),
                        C++);
                    });
                  }
                } catch {
                  ii.noop();
                }
              }
              (t && t(h), p(h));
            }),
          nqe &&
            (ii.isRaspberry() &&
              mie(
                `fbset -s 2> /dev/null | grep 'mode "' ; vcgencmd get_mem gpu 2> /dev/null; tvservice -s 2> /dev/null; tvservice -n 2> /dev/null;`,
                (A, y) => {
                  let E = y.toString().split(`
`);
                  if (E.length > 3 && E[0].indexOf('mode "') >= -1 && E[2].indexOf("0x12000a") > -1) {
                    let v = E[0].replace("mode", "").replace(/"/g, "").trim().split("x");
                    v.length === 2 &&
                      h.displays.push({
                        vendor: "",
                        model: ii.getValue(E, "device_name", "="),
                        main: !0,
                        builtin: !1,
                        connection: "HDMI",
                        sizeX: null,
                        sizeY: null,
                        pixelDepth: null,
                        resolutionX: parseInt(v[0], 10),
                        resolutionY: parseInt(v[1], 10),
                        currentResX: null,
                        currentResY: null,
                        positionX: 0,
                        positionY: 0,
                        currentRefreshRate: null,
                      });
                  }
                  E.length >= 1 &&
                    y.toString().indexOf("gpu=") >= -1 &&
                    h.controllers.push({
                      vendor: "Broadcom",
                      model: ii.getRpiGpu(),
                      bus: "",
                      vram: ii.getValue(E, "gpu", "=").replace("M", ""),
                      vramDynamic: !0,
                    });
                },
              ),
            mie("lspci -vvv  2>/dev/null", (b, A) => {
              if (!b) {
                let E = A.toString().split(`
`);
                if (h.controllers.length === 0) {
                  h.controllers = r(E);
                  let v = a();
                  h.controllers = h.controllers.map((C) =>
                    u(C, v.find((x) => x.pciBus.toLowerCase().endsWith(C.busAddress.toLowerCase())) || {}),
                  );
                }
              }
              mie("clinfo --raw", (E, v) => {
                if (!E) {
                  let x = v.toString().split(`
`);
                  h.controllers = n(h.controllers, x);
                }
                mie("xdpyinfo 2>/dev/null | grep 'depth of root window' | awk '{ print $5 }'", (x, k) => {
                  let R = 0;
                  if (!x) {
                    let D = k.toString().split(`
`);
                    R = parseInt(D[0]) || 0;
                  }
                  mie("xrandr --verbose 2>/dev/null", (D, O) => {
                    if (!D) {
                      let N = O.toString().split(`
`);
                      h.displays = m(N, R);
                    }
                    (t && t(h), p(h));
                  });
                });
              });
            })),
          (Kes || Jes || Xes) && (t && t(null), p(null)),
          Zes && (t && t(null), p(null)),
          rOt)
        )
          try {
            let g = [];
            (g.push(ii.powerShell("Get-CimInstance win32_VideoController | fl *")),
              g.push(
                ii.powerShell(
                  'gp "HKLM:\\SYSTEM\\ControlSet001\\Control\\Class\\{4d36e968-e325-11ce-bfc1-08002be10318}\\*" -ErrorAction SilentlyContinue | where MatchingDeviceId $null -NE | select MatchingDeviceId,HardwareInformation.qwMemorySize | fl',
                ),
              ),
              g.push(ii.powerShell("Get-CimInstance win32_desktopmonitor | fl *")),
              g.push(
                ii.powerShell("Get-CimInstance -Namespace root\\wmi -ClassName WmiMonitorBasicDisplayParams | fl"),
              ),
              g.push(
                ii.powerShell("Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.Screen]::AllScreens"),
              ),
              g.push(ii.powerShell("Get-CimInstance -Namespace root\\wmi -ClassName WmiMonitorConnectionParams | fl")),
              g.push(
                ii.powerShell(
                  'gwmi WmiMonitorID -Namespace root\\wmi | ForEach-Object {(($_.ManufacturerName -notmatch 0 | foreach {[char]$_}) -join "") + "|" + (($_.ProductCodeID -notmatch 0 | foreach {[char]$_}) -join "") + "|" + (($_.UserFriendlyName -notmatch 0 | foreach {[char]$_}) -join "") + "|" + (($_.SerialNumberID -notmatch 0 | foreach {[char]$_}) -join "") + "|" + $_.InstanceName}',
                ),
              ));
            let b = a();
            Promise.all(g)
              .then((A) => {
                let y = A[0].replace(/\r/g, "").split(/\n\s*\n/),
                  E = A[1].replace(/\r/g, "").split(/\n\s*\n/);
                ((h.controllers = d(y, E)),
                  (h.controllers = h.controllers.map((D) =>
                    D.vendor.toLowerCase() === "nvidia"
                      ? u(
                          D,
                          b.find((O) => {
                            let N = (D.subDeviceId || "").toLowerCase(),
                              F = O.subDeviceId.split("x"),
                              B = F.length > 1 ? F[1].toLowerCase() : F[0].toLowerCase(),
                              L = Math.abs(N.length - B.length);
                            if (N.length > B.length) for (let G = 0; G < L; G++) B = "0" + B;
                            else if (N.length < B.length) for (let G = 0; G < L; G++) N = "0" + N;
                            return N === B;
                          }) || {},
                        )
                      : D,
                  )));
                let v = A[2].replace(/\r/g, "").split(/\n\s*\n/);
                (v[0].trim() === "" && v.shift(), v.length && v[v.length - 1].trim() === "" && v.pop());
                let C = A[3].replace(/\r/g, "").split("Active ");
                C.shift();
                let x = A[4].replace(/\r/g, "").split("BitsPerPixel ");
                x.shift();
                let k = A[5].replace(/\r/g, "").split(/\n\s*\n/);
                k.shift();
                let R = A[6].replace(/\r/g, "").split(/\n/),
                  P = [];
                (R.forEach((D) => {
                  let O = D.split("|");
                  O.length === 5 && P.push({ vendor: O[0], code: O[1], model: O[2], serial: O[3], instanceId: O[4] });
                }),
                  (h.displays = f(x, C, v, k, P)),
                  h.displays.length === 1 &&
                    (UAe &&
                      ((h.displays[0].resolutionX = UAe),
                      h.displays[0].currentResX || (h.displays[0].currentResX = UAe)),
                    $Ae &&
                      ((h.displays[0].resolutionY = $Ae),
                      h.displays[0].currentResY === 0 && (h.displays[0].currentResY = $Ae)),
                    iqe && (h.displays[0].pixelDepth = iqe)),
                  (h.displays = h.displays.map(
                    (D) => (oqe && !D.currentRefreshRate && (D.currentRefreshRate = oqe), D),
                  )),
                  t && t(h),
                  p(h));
              })
              .catch(() => {
                (t && t(h), p(h));
              });
          } catch {
            (t && t(h), p(h));
          }
      });
    });
    function d(p, h) {
      let g = {};
      for (let A in h)
        if ({}.hasOwnProperty.call(h, A) && h[A].trim() !== "") {
          let y = h[A].trim().split(`
`),
            E = ii
              .getValue(y, "MatchingDeviceId")
              .match(/PCI\\(VEN_[0-9A-F]{4})&(DEV_[0-9A-F]{4})(?:&(SUBSYS_[0-9A-F]{8}))?(?:&(REV_[0-9A-F]{2}))?/i);
          if (E) {
            let v = parseInt(ii.getValue(y, "HardwareInformation.qwMemorySize"));
            if (!isNaN(v)) {
              let C = E[1].toUpperCase() + "&" + E[2].toUpperCase();
              (E[3] && (C += "&" + E[3].toUpperCase()), E[4] && (C += "&" + E[4].toUpperCase()), (g[C] = v));
            }
          }
        }
      let b = [];
      for (let A in p)
        if ({}.hasOwnProperty.call(p, A) && p[A].trim() !== "") {
          let y = p[A].trim().split(`
`),
            E = ii
              .getValue(y, "PNPDeviceID", ":")
              .match(/PCI\\(VEN_[0-9A-F]{4})&(DEV_[0-9A-F]{4})(?:&(SUBSYS_[0-9A-F]{8}))?(?:&(REV_[0-9A-F]{2}))?/i),
            v = null,
            C = null;
          if (E) {
            if (((v = E[3] || ""), v && (v = v.split("_")[1]), C == null && E[3] && E[4])) {
              let x =
                E[1].toUpperCase() + "&" + E[2].toUpperCase() + "&" + E[3].toUpperCase() + "&" + E[4].toUpperCase();
              ({}).hasOwnProperty.call(g, x) && (C = g[x]);
            }
            if (C == null && E[3]) {
              let x = E[1].toUpperCase() + "&" + E[2].toUpperCase() + "&" + E[3].toUpperCase();
              ({}).hasOwnProperty.call(g, x) && (C = g[x]);
            }
            if (C == null && E[4]) {
              let x = E[1].toUpperCase() + "&" + E[2].toUpperCase() + "&" + E[4].toUpperCase();
              ({}).hasOwnProperty.call(g, x) && (C = g[x]);
            }
            if (C == null) {
              let x = E[1].toUpperCase() + "&" + E[2].toUpperCase();
              ({}).hasOwnProperty.call(g, x) && (C = g[x]);
            }
          }
          (b.push({
            vendor: ii.getValue(y, "AdapterCompatibility", ":"),
            model: ii.getValue(y, "name", ":"),
            bus: ii.getValue(y, "PNPDeviceID", ":").startsWith("PCI") ? "PCI" : "",
            vram: (C ?? ii.toInt(ii.getValue(y, "AdapterRAM", ":"))) / 1024 / 1024,
            vramDynamic: ii.getValue(y, "VideoMemoryType", ":") === "2",
            subDeviceId: v,
          }),
            (UAe = ii.toInt(ii.getValue(y, "CurrentHorizontalResolution", ":")) || UAe),
            ($Ae = ii.toInt(ii.getValue(y, "CurrentVerticalResolution", ":")) || $Ae),
            (oqe = ii.toInt(ii.getValue(y, "CurrentRefreshRate", ":")) || oqe),
            (iqe = ii.toInt(ii.getValue(y, "CurrentBitsPerPixel", ":")) || iqe));
        }
      return b;
    }
    function f(p, h, g, b, A) {
      let y = [],
        E = "",
        v = "",
        C = "",
        x = 0,
        k = 0;
      if (g && g.length) {
        let R = g[0].split(`
`);
        ((E = ii.getValue(R, "MonitorManufacturer", ":")),
          (v = ii.getValue(R, "Name", ":")),
          (C = ii.getValue(R, "PNPDeviceID", ":").replace(/&amp;/g, "&").toLowerCase()),
          (x = ii.toInt(ii.getValue(R, "ScreenWidth", ":"))),
          (k = ii.toInt(ii.getValue(R, "ScreenHeight", ":"))));
      }
      for (let R = 0; R < p.length; R++)
        if (p[R].trim() !== "") {
          ((p[R] = "BitsPerPixel " + p[R]),
            (h[R] = "Active " + h[R]),
            (b.length === 0 || b[R] === void 0) && (b[R] = "Unknown"));
          let P = p[R].split(`
`),
            D = h[R].split(`
`),
            O = b[R].split(`
`),
            N = ii.getValue(P, "BitsPerPixel"),
            F = ii.getValue(P, "Bounds").replace("{", "").replace("}", "").replace(/=/g, ":").split(","),
            B = ii.getValue(P, "Primary"),
            L = ii.getValue(D, "MaxHorizontalImageSize"),
            G = ii.getValue(D, "MaxVerticalImageSize"),
            Q = ii.getValue(D, "InstanceName").toLowerCase(),
            K = ii.getValue(O, "VideoOutputTechnology"),
            H = ii.getValue(P, "DeviceName"),
            U = "",
            Y = "";
          (A.forEach((X) => {
            X.instanceId.toLowerCase().startsWith(Q) &&
              E.startsWith("(") &&
              v.startsWith("PnP") &&
              ((U = X.vendor), (Y = X.model));
          }),
            y.push({
              vendor: Q.startsWith(C) && U === "" ? E : U,
              model: Q.startsWith(C) && Y === "" ? v : Y,
              deviceName: H,
              main: B.toLowerCase() === "true",
              builtin: K === "2147483648",
              connection: K && ucn[K] ? ucn[K] : "",
              resolutionX: ii.toInt(ii.getValue(F, "Width", ":")),
              resolutionY: ii.toInt(ii.getValue(F, "Height", ":")),
              sizeX: L ? parseInt(L, 10) : null,
              sizeY: G ? parseInt(G, 10) : null,
              pixelDepth: N,
              currentResX: ii.toInt(ii.getValue(F, "Width", ":")),
              currentResY: ii.toInt(ii.getValue(F, "Height", ":")),
              positionX: ii.toInt(ii.getValue(F, "X", ":")),
              positionY: ii.toInt(ii.getValue(F, "Y", ":")),
            }));
        }
      return (
        p.length === 0 &&
          y.push({
            vendor: E,
            model: v,
            main: !0,
            sizeX: null,
            sizeY: null,
            resolutionX: x,
            resolutionY: k,
            pixelDepth: null,
            currentResX: x,
            currentResY: k,
            positionX: 0,
            positionY: 0,
          }),
        y
      );
    }
  }
  lcn.graphics = nts;
});