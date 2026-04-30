/**
 * @module tln
 * @category utils/lodash
 * @label lodash
 * @position 723 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tln) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tln = T((eln) => {
  "use strict";
  var Zcn = Ae("child_process").exec,
    Z_ = Ff(),
    UL = process.platform,
    zrs = UL === "linux" || UL === "android",
    Yrs = UL === "darwin",
    Krs = UL === "win32",
    Jrs = UL === "freebsd",
    Xrs = UL === "openbsd",
    Zrs = UL === "netbsd",
    ens = UL === "sunos";
  function tns(t, e) {
    let r = t,
      n = (e + " " + t).toLowerCase();
    return (
      n.indexOf("camera") >= 0
        ? (r = "Camera")
        : n.indexOf("hub") >= 0
          ? (r = "Hub")
          : n.indexOf("keybrd") >= 0 || n.indexOf("keyboard") >= 0
            ? (r = "Keyboard")
            : n.indexOf("mouse") >= 0
              ? (r = "Mouse")
              : n.indexOf("stora") >= 0
                ? (r = "Storage")
                : n.indexOf("microp") >= 0
                  ? (r = "Microphone")
                  : (n.indexOf("headset") >= 0 || n.indexOf("audio") >= 0) && (r = "Audio"),
      r
    );
  }
  function rns(t) {
    let e = {},
      r = t.split(`
`);
    if (r && r.length && r[0].indexOf("Device") >= 0) {
      let E = r[0].split(" ");
      ((e.bus = parseInt(E[0], 10)), E[2] ? (e.deviceId = parseInt(E[2], 10)) : (e.deviceId = null));
    } else ((e.bus = null), (e.deviceId = null));
    let n = Z_.getValue(r, "idVendor", " ", !0).trim(),
      o = n.split(" ");
    o.shift();
    let s = o.join(" "),
      a = Z_.getValue(r, "idProduct", " ", !0).trim(),
      u = a.split(" ");
    u.shift();
    let c = u.join(" "),
      d = Z_.getValue(r, "bInterfaceClass", " ", !0).trim().split(" ");
    d.shift();
    let f = d.join(" "),
      h = Z_.getValue(r, "iManufacturer", " ", !0).trim().split(" ");
    h.shift();
    let g = h.join(" "),
      A = Z_.getValue(r, "iSerial", " ", !0).trim().split(" ");
    A.shift();
    let y = A.join(" ");
    return (
      (e.id =
        (n.startsWith("0x") ? n.split(" ")[0].substr(2, 10) : "") +
        ":" +
        (a.startsWith("0x") ? a.split(" ")[0].substr(2, 10) : "")),
      (e.name = c),
      (e.type = tns(f, c)),
      (e.removable = null),
      (e.vendor = s),
      (e.manufacturer = g),
      (e.maxPower = Z_.getValue(r, "MaxPower", " ", !0)),
      (e.serialNumber = y),
      e
    );
  }
  function nns(t) {
    let e = "";
    return (
      t.indexOf("camera") >= 0
        ? (e = "Camera")
        : t.indexOf("touch bar") >= 0
          ? (e = "Touch Bar")
          : t.indexOf("controller") >= 0
            ? (e = "Controller")
            : t.indexOf("headset") >= 0
              ? (e = "Audio")
              : t.indexOf("keyboard") >= 0
                ? (e = "Keyboard")
                : t.indexOf("trackpad") >= 0
                  ? (e = "Trackpad")
                  : t.indexOf("sensor") >= 0
                    ? (e = "Sensor")
                    : t.indexOf("bthusb") >= 0 || t.indexOf("bth") >= 0 || t.indexOf("rfcomm") >= 0
                      ? (e = "Bluetooth")
                      : t.indexOf("usbhub") >= 0 || t.indexOf(" hub") >= 0
                        ? (e = "Hub")
                        : t.indexOf("mouse") >= 0
                          ? (e = "Mouse")
                          : t.indexOf("microp") >= 0
                            ? (e = "Microphone")
                            : t.indexOf("removable") >= 0 && (e = "Storage"),
      e
    );
  }
  function ins(t, e) {
    let r = {};
    ((r.id = e), (t = t.replace(/ \|/g, "")), (t = t.trim()));
    let n = t.split(`
`);
    n.shift();
    try {
      for (let a = 0; a < n.length; a++) {
        ((n[a] = n[a].trim()),
          (n[a] = n[a].replace(/=/g, ":")),
          n[a] !== "{" && n[a] !== "}" && n[a + 1] && n[a + 1].trim() !== "}" && (n[a] = n[a] + ","),
          (n[a] = n[a].replace(":Yes,", ':"Yes",')),
          (n[a] = n[a].replace(": Yes,", ': "Yes",')),
          (n[a] = n[a].replace(": Yes", ': "Yes"')),
          (n[a] = n[a].replace(":No,", ':"No",')),
          (n[a] = n[a].replace(": No,", ': "No",')),
          (n[a] = n[a].replace(": No", ': "No"')),
          (n[a] = n[a].replace("((", "").replace("))", "")));
        let u = /<(\w+)>/.exec(n[a]);
        if (u) {
          let c = u[0];
          n[a] = n[a].replace(c, `"${c}"`);
        }
      }
      let o = JSON.parse(
          n.join(`
`),
        ),
        s =
          (o["Built-In"] ? o["Built-In"].toLowerCase() !== "yes" : !0) &&
          (o["non-removable"] ? o["non-removable"].toLowerCase() === "no" : !0);
      return (
        (r.bus = null),
        (r.deviceId = null),
        (r.id = o["USB Address"] || null),
        (r.name = o.kUSBProductString || o["USB Product Name"] || null),
        (r.type = nns((o.kUSBProductString || o["USB Product Name"] || "").toLowerCase() + (s ? " removable" : ""))),
        (r.removable = o["non-removable"] ? o["non-removable"].toLowerCase() || !1 : !0),
        (r.vendor = o.kUSBVendorString || o["USB Vendor Name"] || null),
        (r.manufacturer = o.kUSBVendorString || o["USB Vendor Name"] || null),
        (r.maxPower = null),
        (r.serialNumber = o.kUSBSerialNumberString || null),
        r.name ? r : null
      );
    } catch {
      return null;
    }
  }
  function ons(t, e) {
    let r = "";
    return (
      e.indexOf("storage") >= 0 || e.indexOf("speicher") >= 0
        ? (r = "Storage")
        : t.indexOf("usbhub") >= 0
          ? (r = "Hub")
          : t.indexOf("storage") >= 0
            ? (r = "Storage")
            : t.indexOf("usbcontroller") >= 0
              ? (r = "Controller")
              : t.indexOf("keyboard") >= 0
                ? (r = "Keyboard")
                : t.indexOf("pointing") >= 0
                  ? (r = "Mouse")
                  : t.indexOf("microp") >= 0
                    ? (r = "Microphone")
                    : t.indexOf("disk") >= 0 && (r = "Storage"),
      r
    );
  }
  function sns(t, e) {
    let r = ons(Z_.getValue(t, "CreationClassName", ":").toLowerCase(), Z_.getValue(t, "name", ":").toLowerCase());
    if (r) {
      let n = {};
      return (
        (n.bus = null),
        (n.deviceId = Z_.getValue(t, "deviceid", ":")),
        (n.id = e),
        (n.name = Z_.getValue(t, "name", ":")),
        (n.type = r),
        (n.removable = null),
        (n.vendor = null),
        (n.manufacturer = Z_.getValue(t, "Manufacturer", ":")),
        (n.maxPower = null),
        (n.serialNumber = null),
        n
      );
    } else return null;
  }
  function ans(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        (zrs &&
          Zcn("export LC_ALL=C; lsusb -v 2>/dev/null; unset LC_ALL", { maxBuffer: 1024 * 1024 * 128 }, function (o, s) {
            if (!o) {
              let a = (
                `

` + s.toString()
              ).split(`

Bus `);
              for (let u = 1; u < a.length; u++) {
                let c = rns(a[u]);
                r.push(c);
              }
            }
            (t && t(r), e(r));
          }),
          Yrs &&
            Zcn("ioreg -p IOUSB -c AppleUSBRootHubDevice -w0 -l", { maxBuffer: 1024 * 1024 * 128 }, function (o, s) {
              if (!o) {
                let a = s.toString().split(" +-o ");
                for (let u = 1; u < a.length; u++) {
                  let c = ins(a[u]);
                  c && r.push(c);
                }
                (t && t(r), e(r));
              }
              (t && t(r), e(r));
            }),
          Krs &&
            Z_.powerShell(
              'Get-CimInstance CIM_LogicalDevice | where { $_.Description -match "USB"} | select Name,CreationClassName,DeviceId,Manufacturer | fl',
            ).then((n, o) => {
              if (!o) {
                let s = n.toString().split(/\n\s*\n/);
                for (let a = 0; a < s.length; a++) {
                  let u = sns(
                    s[a].split(`
`),
                    a,
                  );
                  u && r.filter((c) => c.deviceId === u.deviceId).length === 0 && r.push(u);
                }
              }
              (t && t(r), e(r));
            }),
          (ens || Jrs || Xrs || Zrs) && e(null));
      });
    });
  }
  eln.usb = ans;
});