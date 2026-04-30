/**
 * @module uln
 * @category utils/json
 * @label json
 * @position 726 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uln) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uln = T((aln) => {
  "use strict";
  var Cns = Ae("child_process").exec,
    Sns = Ae("child_process").execSync,
    wns = Ae("path"),
    b4 = Ff(),
    xns = sln(),
    Tns = Ae("fs"),
    jL = process.platform,
    Dns = jL === "linux" || jL === "android",
    Ins = jL === "darwin",
    Rns = jL === "win32",
    kns = jL === "freebsd",
    Ons = jL === "openbsd",
    Nns = jL === "netbsd",
    Pns = jL === "sunos";
  function xOt(t) {
    let e = "";
    return (
      t.indexOf("keyboard") >= 0 && (e = "Keyboard"),
      t.indexOf("mouse") >= 0 && (e = "Mouse"),
      t.indexOf("trackpad") >= 0 && (e = "Trackpad"),
      t.indexOf("audio") >= 0 && (e = "Audio"),
      t.indexOf("sound") >= 0 && (e = "Audio"),
      t.indexOf("microph") >= 0 && (e = "Microphone"),
      t.indexOf("speaker") >= 0 && (e = "Speaker"),
      t.indexOf("headset") >= 0 && (e = "Headset"),
      t.indexOf("phone") >= 0 && (e = "Phone"),
      t.indexOf("macbook") >= 0 && (e = "Computer"),
      t.indexOf("imac") >= 0 && (e = "Computer"),
      t.indexOf("ipad") >= 0 && (e = "Tablet"),
      t.indexOf("watch") >= 0 && (e = "Watch"),
      t.indexOf("headphone") >= 0 && (e = "Headset"),
      e
    );
  }
  function Bns(t) {
    let e = t.split(" ")[0];
    return (
      (t = t.toLowerCase()),
      t.indexOf("apple") >= 0 && (e = "Apple"),
      t.indexOf("ipad") >= 0 && (e = "Apple"),
      t.indexOf("imac") >= 0 && (e = "Apple"),
      t.indexOf("iphone") >= 0 && (e = "Apple"),
      t.indexOf("magic mouse") >= 0 && (e = "Apple"),
      t.indexOf("magic track") >= 0 && (e = "Apple"),
      t.indexOf("macbook") >= 0 && (e = "Apple"),
      e
    );
  }
  function Lns(t) {
    let e = parseInt(t);
    if (!isNaN(e)) return xns[e];
  }
  function Mns(t, e, r) {
    let n = {};
    return (
      (n.device = null),
      (n.name = b4.getValue(t, "name", "=")),
      (n.manufacturer = null),
      (n.macDevice = e),
      (n.macHost = r),
      (n.batteryPercent = null),
      (n.type = xOt(n.name.toLowerCase())),
      (n.connected = !1),
      n
    );
  }
  function wOt(t, e) {
    let r = {},
      n = (
        (t.device_minorClassOfDevice_string || t.device_majorClassOfDevice_string || t.device_minorType || "") +
        (t.device_name || "")
      ).toLowerCase();
    return (
      (r.device = t.device_services || ""),
      (r.name = t.device_name || ""),
      (r.manufacturer = t.device_manufacturer || Lns(t.device_vendorID) || Bns(t.device_name || "") || ""),
      (r.macDevice = (t.device_addr || t.device_address || "").toLowerCase().replace(/-/g, ":")),
      (r.macHost = e),
      (r.batteryPercent = t.device_batteryPercent || null),
      (r.type = xOt(n)),
      (r.connected = t.device_isconnected === "attrib_Yes" || !1),
      r
    );
  }
  function Fns(t) {
    let e = {};
    return (
      (e.device = null),
      (e.name = b4.getValue(t, "name", ":")),
      (e.manufacturer = b4.getValue(t, "manufacturer", ":")),
      (e.macDevice = null),
      (e.macHost = null),
      (e.batteryPercent = null),
      (e.type = xOt(e.name.toLowerCase())),
      (e.connected = null),
      e
    );
  }
  function Uns(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        if (Dns) {
          b4.getFilesInPath("/var/lib/bluetooth/").forEach((o) => {
            let s = wns.basename(o),
              a = o.split("/"),
              u = a.length >= 6 ? a[a.length - 2] : null,
              c = a.length >= 7 ? a[a.length - 3] : null;
            if (s === "info") {
              let m = Tns.readFileSync(o, { encoding: "utf8" }).split(`
`);
              r.push(Mns(m, u, c));
            }
          });
          try {
            let o = Sns("hcitool con", b4.execOptsLinux).toString().toLowerCase();
            for (let s = 0; s < r.length; s++)
              r[s].macDevice &&
                r[s].macDevice.length > 10 &&
                o.indexOf(r[s].macDevice.toLowerCase()) >= 0 &&
                (r[s].connected = !0);
          } catch {
            b4.noop();
          }
          (t && t(r), e(r));
        }
        (Ins &&
          Cns("system_profiler SPBluetoothDataType -json", (o, s) => {
            if (!o)
              try {
                let a = JSON.parse(s.toString());
                if (
                  a.SPBluetoothDataType &&
                  a.SPBluetoothDataType.length &&
                  a.SPBluetoothDataType[0] &&
                  a.SPBluetoothDataType[0].device_title &&
                  a.SPBluetoothDataType[0].device_title.length
                ) {
                  let u = null;
                  (a.SPBluetoothDataType[0].local_device_title &&
                    a.SPBluetoothDataType[0].local_device_title.general_address &&
                    (u = a.SPBluetoothDataType[0].local_device_title.general_address.toLowerCase().replace(/-/g, ":")),
                    a.SPBluetoothDataType[0].device_title.forEach((c) => {
                      let m = c,
                        d = Object.keys(m);
                      if (d && d.length === 1) {
                        let f = m[d[0]];
                        f.device_name = d[0];
                        let p = wOt(f, u);
                        r.push(p);
                      }
                    }));
                }
                if (
                  a.SPBluetoothDataType &&
                  a.SPBluetoothDataType.length &&
                  a.SPBluetoothDataType[0] &&
                  a.SPBluetoothDataType[0].device_connected &&
                  a.SPBluetoothDataType[0].device_connected.length
                ) {
                  let u =
                    a.SPBluetoothDataType[0].controller_properties &&
                    a.SPBluetoothDataType[0].controller_properties.controller_address
                      ? a.SPBluetoothDataType[0].controller_properties.controller_address
                          .toLowerCase()
                          .replace(/-/g, ":")
                      : null;
                  a.SPBluetoothDataType[0].device_connected.forEach((c) => {
                    let m = c,
                      d = Object.keys(m);
                    if (d && d.length === 1) {
                      let f = m[d[0]];
                      ((f.device_name = d[0]), (f.device_isconnected = "attrib_Yes"));
                      let p = wOt(f, u);
                      r.push(p);
                    }
                  });
                }
                if (
                  a.SPBluetoothDataType &&
                  a.SPBluetoothDataType.length &&
                  a.SPBluetoothDataType[0] &&
                  a.SPBluetoothDataType[0].device_not_connected &&
                  a.SPBluetoothDataType[0].device_not_connected.length
                ) {
                  let u =
                    a.SPBluetoothDataType[0].controller_properties &&
                    a.SPBluetoothDataType[0].controller_properties.controller_address
                      ? a.SPBluetoothDataType[0].controller_properties.controller_address
                          .toLowerCase()
                          .replace(/-/g, ":")
                      : null;
                  a.SPBluetoothDataType[0].device_not_connected.forEach((c) => {
                    let m = c,
                      d = Object.keys(m);
                    if (d && d.length === 1) {
                      let f = m[d[0]];
                      ((f.device_name = d[0]), (f.device_isconnected = "attrib_No"));
                      let p = wOt(f, u);
                      r.push(p);
                    }
                  });
                }
              } catch {
                b4.noop();
              }
            (t && t(r), e(r));
          }),
          Rns &&
            b4
              .powerShell(
                "Get-CimInstance Win32_PNPEntity | select PNPClass, Name, Manufacturer, Status, Service, ConfigManagerErrorCode, Present | fl",
              )
              .then((n, o) => {
                (o ||
                  n
                    .toString()
                    .split(/\n\s*\n/)
                    .forEach((a) => {
                      let u = a.split(`
`),
                        c = b4.getValue(u, "Service", ":"),
                        m = b4.getValue(u, "ConfigManagerErrorCode", ":");
                      b4.getValue(u, "PNPClass", ":").toLowerCase() === "bluetooth" &&
                        m === "0" &&
                        c === "" &&
                        r.push(Fns(u));
                    }),
                  t && t(r),
                  e(r));
              }),
          (kns || Nns || Ons || Pns) && e(null));
      });
    });
  }
  aln.bluetoothDevices = Uns;
});