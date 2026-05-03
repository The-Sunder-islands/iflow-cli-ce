/**
 * @module Lcn
 * @category app/session
 * @label iflow-session
 * @position 717 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lcn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Functions: hrs, drs, Ncn, prs, grs, mrs, gOt, Pcn, frs
 * Features: esbuild module exports: Lcn
 * === End semantic info ===
 */


var Lcn = T((Bcn) => {
  "use strict";
  var YAe = Ae("child_process").exec,
    zR = Ff(),
    OL = process.platform,
    irs = OL === "linux" || OL === "android",
    ors = OL === "darwin",
    srs = OL === "win32",
    ars = OL === "freebsd",
    urs = OL === "openbsd",
    crs = OL === "netbsd",
    lrs = OL === "sunos";
  function Pcn(t, e) {
    let r = new Date().toISOString().slice(0, 10);
    try {
      ((r =
        "" +
        new Date().getFullYear() +
        "-" +
        ("0" + ("JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC".indexOf(t.toUpperCase()) / 3 + 1)).slice(-2) +
        "-" +
        ("0" + e).slice(-2)),
        new Date(r) > new Date() &&
          (r =
            "" +
            (new Date().getFullYear() - 1) +
            "-" +
            ("0" + ("JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC".indexOf(t.toUpperCase()) / 3 + 1)).slice(-2) +
            "-" +
            ("0" + e).slice(-2)));
    } catch {
      zR.noop();
    }
    return r;
  }
  function Ncn(t, e) {
    let r = [],
      n = [],
      o = {},
      s = !0,
      a = [],
      u = [],
      c = {},
      m = !0,
      d = !1;
    return (
      t.forEach((f) => {
        if (f === "---") m = !1;
        else {
          let p = f.replace(/ +/g, " ").split(" ");
          if (m) {
            if (
              ((f.toLowerCase().indexOf("unexpected") >= 0 || f.toLowerCase().indexOf("unrecognized") >= 0) &&
                ((d = !0), (n = [])),
              !d)
            ) {
              let h = p && p.length > 4 && p[4].indexOf(":") > 0 ? 4 : 3;
              n.push({
                user: p[0],
                tty: p[1],
                date: h === 4 ? Pcn(p[2], p[3]) : p[2],
                time: p[h],
                ip: p && p.length > h + 1 ? p[h + 1].replace(/\(/g, "").replace(/\)/g, "") : "",
                command: "",
              });
            }
          } else
            s
              ? f[0] !== " " &&
                ((a = p),
                a.forEach((h) => {
                  u.push(f.indexOf(h));
                }),
                (s = !1))
              : ((o.user = f.substring(u[0], u[1] - 1).trim()),
                (o.tty = f.substring(u[1], u[2] - 1).trim()),
                (o.ip = f
                  .substring(u[2], u[3] - 1)
                  .replace(/\(/g, "")
                  .replace(/\)/g, "")
                  .trim()),
                (o.command = f.substring(u[7], 1e3).trim()),
                n.length || e === 1
                  ? (c = n.filter((h) => h.user.substring(0, 8).trim() === o.user && h.tty === o.tty))
                  : (c = [{ user: o.user, tty: o.tty, date: "", time: "", ip: "" }]),
                c.length === 1 &&
                  c[0].user !== "" &&
                  r.push({
                    user: c[0].user,
                    tty: c[0].tty,
                    date: c[0].date,
                    time: c[0].time,
                    ip: c[0].ip,
                    command: o.command,
                  }));
        }
      }),
      r.length === 0 && e === 2 ? n : r
    );
  }
  function gOt(t) {
    let e = [],
      r = [],
      n = {},
      o = {},
      s = !0;
    return (
      t.forEach((a) => {
        if (a === "---") s = !1;
        else {
          let u = a.replace(/ +/g, " ").split(" ");
          s
            ? r.push({ user: u[0], tty: u[1], date: Pcn(u[2], u[3]), time: u[4] })
            : ((n.user = u[0]),
              (n.tty = u[1]),
              (n.ip = u[2] !== "-" ? u[2] : ""),
              (n.command = u.slice(5, 1e3).join(" ")),
              (o = r.filter(
                (c) =>
                  c.user.substring(0, 10) === n.user.substring(0, 10) &&
                  (c.tty.substring(3, 1e3) === n.tty || c.tty === n.tty),
              )),
              o.length === 1 &&
                e.push({
                  user: o[0].user,
                  tty: o[0].tty,
                  date: o[0].date,
                  time: o[0].time,
                  ip: n.ip,
                  command: n.command,
                }));
        }
      }),
      e
    );
  }
  function mrs(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        if (
          (irs &&
            YAe('export LC_ALL=C; who --ips; echo "---"; w; unset LC_ALL | tail -n +2', (n, o) => {
              if (n) (t && t(r), e(r));
              else {
                let s = o.toString().split(`
`);
                ((r = Ncn(s, 1)),
                  r.length === 0
                    ? YAe('who; echo "---"; w | tail -n +2', (a, u) => {
                        (a ||
                          ((s = u.toString().split(`
`)),
                          (r = Ncn(s, 2))),
                          t && t(r),
                          e(r));
                      })
                    : (t && t(r), e(r)));
              }
            }),
          (ars || urs || crs) &&
            YAe('who; echo "---"; w -ih', (n, o) => {
              if (!n) {
                let s = o.toString().split(`
`);
                r = gOt(s);
              }
              (t && t(r), e(r));
            }),
          lrs &&
            YAe('who; echo "---"; w -h', (n, o) => {
              if (!n) {
                let s = o.toString().split(`
`);
                r = gOt(s);
              }
              (t && t(r), e(r));
            }),
          ors &&
            YAe('export LC_ALL=C; who; echo "---"; w -ih; unset LC_ALL', (n, o) => {
              if (!n) {
                let s = o.toString().split(`
`);
                r = gOt(s);
              }
              (t && t(r), e(r));
            }),
          srs)
        )
          try {
            let n = `Get-CimInstance Win32_LogonSession | select LogonId,@{n="StartTime";e={$_.StartTime.ToString("yyyy-MM-dd HH:mm:ss")}} | fl; echo '#-#-#-#';`;
            ((n += "Get-CimInstance Win32_LoggedOnUser | select antecedent,dependent | fl ; echo '#-#-#-#';"),
              (n += `$process = (Get-CimInstance Win32_Process -Filter "name = 'explorer.exe'"); Invoke-CimMethod -InputObject $process[0] -MethodName GetOwner | select user, domain | fl; get-process -name explorer | select-object sessionid | fl; echo '#-#-#-#';`),
              (n += "query user"),
              zR.powerShell(n).then((o) => {
                if (o) {
                  o = o.split("#-#-#-#");
                  let s = drs((o[0] || "").split(/\n\s*\n/)),
                    a = hrs((o[1] || "").split(/\n\s*\n/)),
                    u = grs(
                      (o[3] || "").split(`\r
`),
                    ),
                    c = prs((o[2] || "").split(/\n\s*\n/), u);
                  for (let m in a)
                    ({}).hasOwnProperty.call(a, m) && (a[m].dateTime = {}.hasOwnProperty.call(s, m) ? s[m] : "");
                  c.forEach((m) => {
                    let d = "";
                    for (let f in a)
                      ({}).hasOwnProperty.call(a, f) &&
                        a[f].user === m.user &&
                        (!d || d < a[f].dateTime) &&
                        (d = a[f].dateTime);
                    r.push({
                      user: m.user,
                      tty: m.tty,
                      date: `${d.substring(0, 10)}`,
                      time: `${d.substring(11, 19)}`,
                      ip: "",
                      command: "",
                    });
                  });
                }
                (t && t(r), e(r));
              }));
          } catch {
            (t && t(r), e(r));
          }
      });
    });
  }
  function drs(t) {
    let e = {};
    return (
      t.forEach((r) => {
        let n = r.split(`\r
`),
          o = zR.getValue(n, "LogonId"),
          s = zR.getValue(n, "starttime");
        o && (e[o] = s);
      }),
      e
    );
  }
  function frs(t, e) {
    ((t = t.toLowerCase()), (e = e.toLowerCase()));
    let r = 0,
      n = t.length;
    e.length > n && (n = e.length);
    for (let o = 0; o < n; o++) {
      let s = t[o] || "",
        a = e[o] || "";
      s === a && r++;
    }
    return n > 10 ? r / n > 0.9 : n > 0 ? r / n > 0.8 : !1;
  }
  function prs(t, e) {
    let r = [];
    return (
      t.forEach((n) => {
        let o = n.split(`\r
`),
          s = zR.getValue(o, "domain", ":", !0),
          a = zR.getValue(o, "user", ":", !0),
          u = zR.getValue(o, "sessionid", ":", !0);
        if (a) {
          let c = e.filter((m) => frs(m.user, a));
          r.push({ domain: s, user: a, tty: c && c[0] && c[0].tty ? c[0].tty : u });
        }
      }),
      r
    );
  }
  function hrs(t) {
    let e = {};
    return (
      t.forEach((r) => {
        let n = r.split(`\r
`),
          s = zR.getValue(n, "antecedent", ":", !0).split("="),
          a = s.length > 2 ? s[1].split(",")[0].replace(/"/g, "").trim() : "",
          u = s.length > 2 ? s[2].replace(/"/g, "").replace(/\)/g, "").trim() : "";
        s = zR.getValue(n, "dependent", ":", !0).split("=");
        let m = s.length > 1 ? s[1].replace(/"/g, "").replace(/\)/g, "").trim() : "";
        m && (e[m] = { domain: u, user: a });
      }),
      e
    );
  }
  function grs(t) {
    t = t.filter((o) => o);
    let e = [],
      r = t[0],
      n = [];
    if (r) {
      let o = r[0] === " " ? 1 : 0;
      n.push(o - 1);
      let s = 0;
      for (let a = o + 1; a < r.length; a++)
        r[a] === " " && (r[a - 1] === " " || r[a - 1] === ".") ? (s = a) : s && (n.push(s), (s = 0));
      for (let a = 1; a < t.length; a++)
        if (t[a].trim()) {
          let u = t[a].substring(n[0] + 1, n[1]).trim() || "",
            c = t[a].substring(n[1] + 1, n[2] - 2).trim() || "";
          e.push({ user: u, tty: c });
        }
    }
    return e;
  }
  Bcn.users = mrs;
});