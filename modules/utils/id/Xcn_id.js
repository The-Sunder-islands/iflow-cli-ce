/**
 * @module Xcn
 * @category utils/id
 * @label id
 * @position 722 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xcn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xcn = T((Jcn) => {
  "use strict";
  var COt = Ae("child_process").exec,
    Qh = Ff(),
    FL = process.platform,
    Ycn = FL === "linux" || FL === "android",
    Lrs = FL === "darwin",
    Mrs = FL === "win32",
    Frs = FL === "freebsd",
    Urs = FL === "openbsd",
    $rs = FL === "netbsd",
    jrs = FL === "sunos",
    Kcn = { 1: "Other", 2: "Unknown", 3: "Idle", 4: "Printing", 5: "Warmup", 6: "Stopped Printing", 7: "Offline" };
  function Qrs(t) {
    let e = {};
    if (t && t.length && t[0].indexOf(" CUPS v") > 0) {
      let r = t[0].split(" CUPS v");
      e.cupsVersion = r[1];
    }
    return e;
  }
  function Grs(t) {
    let e = {},
      r = Qh.getValue(t, "PrinterId", " ");
    return (
      (e.id = r ? parseInt(r, 10) : null),
      (e.name = Qh.getValue(t, "Info", " ")),
      (e.model = t.length > 0 && t[0] ? t[0].split(" ")[0] : ""),
      (e.uri = Qh.getValue(t, "DeviceURI", " ")),
      (e.uuid = Qh.getValue(t, "UUID", " ")),
      (e.status = Qh.getValue(t, "State", " ")),
      (e.local = Qh.getValue(t, "Location", " ").toLowerCase().startsWith("local")),
      (e.default = null),
      (e.shared = Qh.getValue(t, "Shared", " ").toLowerCase().startsWith("yes")),
      e
    );
  }
  function qrs(t, e) {
    let r = {};
    return (
      (r.id = e),
      (r.name = Qh.getValue(t, "Description", ":", !0)),
      (r.model = t.length > 0 && t[0] ? t[0].split(" ")[0] : ""),
      (r.uri = null),
      (r.uuid = null),
      (r.status =
        t.length > 0 && t[0]
          ? t[0].indexOf(" idle") > 0
            ? "idle"
            : t[0].indexOf(" printing") > 0
              ? "printing"
              : "unknown"
          : null),
      (r.local = Qh.getValue(t, "Location", ":", !0).toLowerCase().startsWith("local")),
      (r.default = null),
      (r.shared = Qh.getValue(t, "Shared", " ").toLowerCase().startsWith("yes")),
      r
    );
  }
  function Hrs(t, e) {
    let r = {},
      n = t.uri.split("/");
    return (
      (r.id = e),
      (r.name = t._name),
      (r.model = n.length ? n[n.length - 1] : ""),
      (r.uri = t.uri),
      (r.uuid = null),
      (r.status = t.status),
      (r.local = t.printserver === "local"),
      (r.default = t.default === "yes"),
      (r.shared = t.shared === "yes"),
      r
    );
  }
  function Vrs(t, e) {
    let r = {},
      n = parseInt(Qh.getValue(t, "PrinterStatus", ":"), 10);
    return (
      (r.id = e),
      (r.name = Qh.getValue(t, "name", ":")),
      (r.model = Qh.getValue(t, "DriverName", ":")),
      (r.uri = null),
      (r.uuid = null),
      (r.status = Kcn[n] ? Kcn[n] : null),
      (r.local = Qh.getValue(t, "Local", ":").toUpperCase() === "TRUE"),
      (r.default = Qh.getValue(t, "Default", ":").toUpperCase() === "TRUE"),
      (r.shared = Qh.getValue(t, "Shared", ":").toUpperCase() === "TRUE"),
      r
    );
  }
  function Wrs(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        if (Ycn || Frs || Urs || $rs) {
          let n = "cat /etc/cups/printers.conf 2>/dev/null";
          COt(n, function (o, s) {
            if (!o) {
              let a = s.toString().split("<Printer "),
                u = Qrs(a[0]);
              for (let c = 1; c < a.length; c++) {
                let m = Grs(
                  a[c].split(`
`),
                );
                m.name && ((m.engine = "CUPS"), (m.engineVersion = u.cupsVersion), r.push(m));
              }
            }
            r.length === 0 && Ycn
              ? ((n = "export LC_ALL=C; lpstat -lp 2>/dev/null; unset LC_ALL"),
                COt(n, function (a, u) {
                  let c = (
                    `
` + u.toString()
                  ).split(`
printer `);
                  for (let m = 1; m < c.length; m++) {
                    let d = qrs(
                      c[m].split(`
`),
                      m,
                    );
                    r.push(d);
                  }
                }),
                t && t(r),
                e(r))
              : (t && t(r), e(r));
          });
        }
        (Lrs &&
          COt("system_profiler SPPrintersDataType -json", function (o, s) {
            if (!o)
              try {
                let a = JSON.parse(s.toString());
                if (a.SPPrintersDataType && a.SPPrintersDataType.length)
                  for (let u = 0; u < a.SPPrintersDataType.length; u++) {
                    let c = Hrs(a.SPPrintersDataType[u], u);
                    r.push(c);
                  }
              } catch {
                Qh.noop();
              }
            (t && t(r), e(r));
          }),
          Mrs &&
            Qh.powerShell(
              "Get-CimInstance Win32_Printer | select PrinterStatus,Name,DriverName,Local,Default,Shared | fl",
            ).then((n, o) => {
              if (!o) {
                let s = n.toString().split(/\n\s*\n/);
                for (let a = 0; a < s.length; a++) {
                  let u = Vrs(
                    s[a].split(`
`),
                    a,
                  );
                  (u.name || u.model) && r.push(u);
                }
              }
              (t && t(r), e(r));
            }),
          jrs && e(null));
      });
    });
  }
  Jcn.printer = Wrs;
});