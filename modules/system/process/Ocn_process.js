/**
 * @module Ocn
 * @category system/process
 * @label process
 * @position 716 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ocn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ocn = T((fqe) => {
  "use strict";
  var dqe = Ae("os"),
    Jts = Ae("fs"),
    Xts = Ae("path"),
    HAe = Ae("child_process").exec,
    dOt = Ae("child_process").execSync,
    Js = Ff(),
    kL = process.platform,
    yT = kL === "linux" || kL === "android",
    lH = kL === "darwin",
    fOt = kL === "win32",
    VAe = kL === "freebsd",
    WAe = kL === "openbsd",
    zAe = kL === "netbsd",
    mqe = kL === "sunos",
    Op = { all: 0, all_utime: 0, all_stime: 0, list: {}, ms: 0, result: {} },
    bie = { all: 0, all_utime: 0, all_stime: 0, list: {}, ms: 0, result: {} },
    p8 = { all: 0, all_utime: 0, all_stime: 0, list: {}, ms: 0, result: {} },
    Rcn = {
      0: "unknown",
      1: "other",
      2: "ready",
      3: "running",
      4: "blocked",
      5: "suspended blocked",
      6: "suspended ready",
      7: "terminated",
      8: "stopped",
      9: "growing",
    };
  function Zts(t) {
    let e = t,
      r = t.replace(/ +/g, " ").split(" ");
    return (
      r.length === 5 &&
        (e =
          r[4] +
          "-" +
          ("0" + ("JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC".indexOf(r[1].toUpperCase()) / 3 + 1)).slice(-2) +
          "-" +
          ("0" + r[2]).slice(-2) +
          " " +
          r[3]),
      e
    );
  }
  function ers(t) {
    let e = new Date();
    e = new Date(e.getTime() - e.getTimezoneOffset() * 6e4);
    let r = t.split("-"),
      n = r.length - 1,
      o = n > 0 ? parseInt(r[n - 1]) : 0,
      s = r[n].split(":"),
      a = s.length === 3 ? parseInt(s[0] || 0) : 0,
      u = parseInt(s[s.length === 3 ? 1 : 0] || 0),
      c = parseInt(s[s.length === 3 ? 2 : 1] || 0),
      m = (((o * 24 + a) * 60 + u) * 60 + c) * 1e3,
      d = new Date(e.getTime()),
      f = d.toISOString().substring(0, 10) + " " + d.toISOString().substring(11, 19);
    try {
      ((d = new Date(e.getTime() - m)),
        (f = d.toISOString().substring(0, 10) + " " + d.toISOString().substring(11, 19)));
    } catch {
      Js.noop();
    }
    return f;
  }
  function trs(t, e) {
    return (
      Js.isFunction(t) && !e && ((e = t), (t = "")),
      new Promise((r) => {
        process.nextTick(() => {
          if (typeof t != "string") return (e && e([]), r([]));
          if (t) {
            let n = "";
            try {
              ((n.__proto__.toLowerCase = Js.stringToLower),
                (n.__proto__.replace = Js.stringReplace),
                (n.__proto__.toString = Js.stringToString),
                (n.__proto__.substr = Js.stringSubstr),
                (n.__proto__.substring = Js.stringSubstring),
                (n.__proto__.trim = Js.stringTrim),
                (n.__proto__.startsWith = Js.stringStartWith));
            } catch {
              Object.setPrototypeOf(n, Js.stringObj);
            }
            let o = Js.sanitizeShellString(t),
              s = Js.mathMin(o.length, 2e3);
            for (let m = 0; m <= s; m++) o[m] !== void 0 && (n = n + o[m]);
            ((n = n.trim().toLowerCase().replace(/, /g, "|").replace(/,+/g, "|")),
              n === "" && (n = "*"),
              Js.isPrototypePolluted() && n !== "*" && (n = "------"));
            let a = n.split("|"),
              u = [],
              c = [];
            if (yT || VAe || WAe || zAe || lH) {
              if ((yT || VAe || WAe || zAe) && n === "*")
                try {
                  let d = dOt("systemctl --all --type=service --no-legend 2> /dev/null", Js.execOptsLinux).toString()
                    .split(`
`);
                  a = [];
                  for (let f of d) {
                    let p = f.split(".service")[0];
                    p && f.indexOf(" not-found ") === -1 && a.push(p.trim());
                  }
                  n = a.join("|");
                } catch {
                  try {
                    n = "";
                    let f = dOt("service --status-all 2> /dev/null", Js.execOptsLinux).toString().split(`
`);
                    for (let p of f) {
                      let h = p.split("]");
                      h.length === 2 && (n += (n !== "" ? "|" : "") + h[1].trim());
                    }
                    a = n.split("|");
                  } catch {
                    try {
                      let p = dOt("ls /etc/init.d/ -m 2> /dev/null", Js.execOptsLinux)
                        .toString()
                        .split(
                          `
`,
                        )
                        .join("");
                      if (((n = ""), p)) {
                        let h = p.split(",");
                        for (let g of h) {
                          let b = g.trim();
                          b && (n += (n !== "" ? "|" : "") + b);
                        }
                        a = n.split("|");
                      }
                    } catch {
                      ((n = ""), (a = []));
                    }
                  }
                }
              lH && n === "*" && (e && e(u), r(u));
              let m = lH ? ["-caxo", "pcpu,pmem,pid,command"] : ["-axo", "pcpu,pmem,pid,command"];
              n !== "" && a.length > 0
                ? Js.execSafe("ps", m).then((d) => {
                    if (d) {
                      let f = d.replace(/ +/g, " ").replace(/,+/g, ".").split(`
`);
                      if (
                        (a.forEach(function (p) {
                          let h;
                          lH
                            ? (h = f.filter(function (b) {
                                return b.toLowerCase().indexOf(p) !== -1;
                              }))
                            : (h = f.filter(function (b) {
                                return (
                                  b.toLowerCase().indexOf(" " + p.toLowerCase() + ":") !== -1 ||
                                  b.toLowerCase().indexOf("(" + p.toLowerCase() + " ") !== -1 ||
                                  b.toLowerCase().indexOf("(" + p.toLowerCase() + ")") !== -1 ||
                                  b.toLowerCase().indexOf(" " + p.toLowerCase().replace(/[0-9.]/g, "") + ":") !== -1 ||
                                  b.toLowerCase().indexOf("/" + p.toLowerCase()) !== -1
                                );
                              }));
                          let g = [];
                          for (let b of h) {
                            let A = b.trim().split(" ")[2];
                            A && g.push(parseInt(A, 10));
                          }
                          u.push({
                            name: p,
                            running: h.length > 0,
                            startmode: "",
                            pids: g,
                            cpu: parseFloat(
                              h
                                .reduce(function (b, A) {
                                  return b + parseFloat(A.trim().split(" ")[0]);
                                }, 0)
                                .toFixed(2),
                            ),
                            mem: parseFloat(
                              h
                                .reduce(function (b, A) {
                                  return b + parseFloat(A.trim().split(" ")[1]);
                                }, 0)
                                .toFixed(2),
                            ),
                          });
                        }),
                        yT)
                      ) {
                        let p = 'cat /proc/stat | grep "cpu "';
                        for (let h in u) for (let g in u[h].pids) p += ";cat /proc/" + u[h].pids[g] + "/stat";
                        HAe(p, { maxBuffer: 1024 * 102400 }, function (h, g) {
                          let b = g.toString().split(`
`),
                            A = pOt(b.shift()),
                            y = {},
                            E = {};
                          (b.forEach((v) => {
                            if (((E = hOt(v, A, bie)), E.pid)) {
                              let C = -1;
                              for (let x in u)
                                for (let k in u[x].pids) parseInt(u[x].pids[k]) === parseInt(E.pid) && (C = x);
                              (C >= 0 && (u[C].cpu += E.cpuu + E.cpus),
                                (y[E.pid] = {
                                  cpuu: E.cpuu,
                                  cpus: E.cpus,
                                  utime: E.utime,
                                  stime: E.stime,
                                  cutime: E.cutime,
                                  cstime: E.cstime,
                                }));
                            }
                          }),
                            (bie.all = A),
                            (bie.list = Object.assign({}, y)),
                            (bie.ms = Date.now() - bie.ms),
                            (bie.result = Object.assign({}, u)),
                            e && e(u),
                            r(u));
                        });
                      } else (e && e(u), r(u));
                    } else
                      ((m = ["-o", "comm"]),
                        Js.execSafe("ps", m).then((f) => {
                          if (f) {
                            let p = f.replace(/ +/g, " ").replace(/,+/g, ".").split(`
`);
                            (a.forEach(function (h) {
                              let g = p.filter(function (b) {
                                return b.indexOf(h) !== -1;
                              });
                              u.push({ name: h, running: g.length > 0, startmode: "", cpu: 0, mem: 0 });
                            }),
                              e && e(u),
                              r(u));
                          } else
                            (a.forEach(function (p) {
                              u.push({ name: p, running: !1, startmode: "", cpu: 0, mem: 0 });
                            }),
                              e && e(u),
                              r(u));
                        }));
                  })
                : (e && e(u), r(u));
            }
            if (fOt)
              try {
                let m = "Get-CimInstance Win32_Service";
                (a[0] !== "*" &&
                  ((m += ' -Filter "'),
                  a.forEach((d) => {
                    m += `Name='${d}' or `;
                  }),
                  (m = `${m.slice(0, -4)}"`)),
                  (m += " | select Name,Caption,Started,StartMode,ProcessId | fl"),
                  Js.powerShell(m).then((d, f) => {
                    f
                      ? (a.forEach((p) => {
                          u.push({ name: p, running: !1, startmode: "", cpu: 0, mem: 0 });
                        }),
                        e && e(u),
                        r(u))
                      : (d.split(/\n\s*\n/).forEach((h) => {
                          if (h.trim() !== "") {
                            let g = h.trim().split(`\r
`),
                              b = Js.getValue(g, "Name", ":", !0).toLowerCase(),
                              A = Js.getValue(g, "Caption", ":", !0).toLowerCase(),
                              y = Js.getValue(g, "Started", ":", !0),
                              E = Js.getValue(g, "StartMode", ":", !0),
                              v = Js.getValue(g, "ProcessId", ":", !0);
                            (n === "*" || a.indexOf(b) >= 0 || a.indexOf(A) >= 0) &&
                              (u.push({
                                name: b,
                                running: y.toLowerCase() === "true",
                                startmode: E,
                                pids: [v],
                                cpu: 0,
                                mem: 0,
                              }),
                              c.push(b),
                              c.push(A));
                          }
                        }),
                        n !== "*" &&
                          a
                            .filter((g) => c.indexOf(g) === -1)
                            .forEach((g) => {
                              u.push({ name: g, running: !1, startmode: "", pids: [], cpu: 0, mem: 0 });
                            }),
                        e && e(u),
                        r(u));
                  }));
              } catch {
                (e && e(u), r(u));
              }
          } else (e && e([]), r([]));
        });
      })
    );
  }
  fqe.services = trs;
  function pOt(t) {
    let e = t.replace(/ +/g, " ").split(" "),
      r = e.length >= 2 ? parseInt(e[1]) : 0,
      n = e.length >= 3 ? parseInt(e[2]) : 0,
      o = e.length >= 4 ? parseInt(e[3]) : 0,
      s = e.length >= 5 ? parseInt(e[4]) : 0,
      a = e.length >= 6 ? parseInt(e[5]) : 0,
      u = e.length >= 7 ? parseInt(e[6]) : 0,
      c = e.length >= 8 ? parseInt(e[7]) : 0,
      m = e.length >= 9 ? parseInt(e[8]) : 0,
      d = e.length >= 10 ? parseInt(e[9]) : 0,
      f = e.length >= 11 ? parseInt(e[10]) : 0;
    return r + n + o + s + a + u + c + m + d + f;
  }
  function hOt(t, e, r) {
    let n = t.replace(/ +/g, " ").split(")");
    if (n.length >= 2) {
      let o = n[1].split(" ");
      if (o.length >= 16) {
        let s = parseInt(n[0].split(" ")[0]),
          a = parseInt(o[12]),
          u = parseInt(o[13]),
          c = parseInt(o[14]),
          m = parseInt(o[15]),
          d = 0,
          f = 0;
        return (
          r.all > 0 && r.list[s]
            ? ((d = ((a + c - r.list[s].utime - r.list[s].cutime) / (e - r.all)) * 100),
              (f = ((u + m - r.list[s].stime - r.list[s].cstime) / (e - r.all)) * 100))
            : ((d = ((a + c) / e) * 100), (f = ((u + m) / e) * 100)),
          { pid: s, utime: a, stime: u, cutime: c, cstime: m, cpuu: d, cpus: f }
        );
      } else return { pid: 0, utime: 0, stime: 0, cutime: 0, cstime: 0, cpuu: 0, cpus: 0 };
    } else return { pid: 0, utime: 0, stime: 0, cutime: 0, cstime: 0, cpuu: 0, cpus: 0 };
  }
  function kcn(t, e, r) {
    let n = 0,
      o = 0;
    return (
      r.all > 0 && r.list[t.pid]
        ? ((n = ((t.utime - r.list[t.pid].utime) / (e - r.all)) * 100),
          (o = ((t.stime - r.list[t.pid].stime) / (e - r.all)) * 100))
        : ((n = (t.utime / e) * 100), (o = (t.stime / e) * 100)),
      { pid: t.pid, utime: t.utime, stime: t.stime, cpuu: n > 0 ? n : 0, cpus: o > 0 ? o : 0 }
    );
  }
  function rrs(t) {
    let e = [];
    function r(a) {
      a = a || "";
      let u = a.split(" ")[0];
      if ((u.substr(-1) === ":" && (u = u.substr(0, u.length - 1)), u.substr(0, 1) !== "[")) {
        let c = u.split("/");
        isNaN(parseInt(c[c.length - 1])) ? (u = c[c.length - 1]) : (u = c[0]);
      }
      return u;
    }
    function n(a) {
      let u = 0,
        c = 0;
      function m(O) {
        ((u = c), e[O] ? (c = a.substring(e[O].to + u, 1e4).indexOf(" ")) : (c = 1e4));
      }
      m(0);
      let d = parseInt(a.substring(e[0].from + u, e[0].to + c));
      m(1);
      let f = parseInt(a.substring(e[1].from + u, e[1].to + c));
      m(2);
      let p = parseFloat(a.substring(e[2].from + u, e[2].to + c).replace(/,/g, "."));
      m(3);
      let h = parseFloat(a.substring(e[3].from + u, e[3].to + c).replace(/,/g, "."));
      m(4);
      let g = parseInt(a.substring(e[4].from + u, e[4].to + c));
      m(5);
      let b = parseInt(a.substring(e[5].from + u, e[5].to + c));
      m(6);
      let A = parseInt(a.substring(e[6].from + u, e[6].to + c));
      m(7);
      let y = parseInt(a.substring(e[7].from + u, e[7].to + c)) || 0;
      m(8);
      let E = mqe
        ? Zts(a.substring(e[8].from + u, e[8].to + c).trim())
        : ers(a.substring(e[8].from + u, e[8].to + c).trim());
      m(9);
      let v = a.substring(e[9].from + u, e[9].to + c).trim();
      ((v =
        v[0] === "R"
          ? "running"
          : v[0] === "S"
            ? "sleeping"
            : v[0] === "T"
              ? "stopped"
              : v[0] === "W"
                ? "paging"
                : v[0] === "X"
                  ? "dead"
                  : v[0] === "Z"
                    ? "zombie"
                    : v[0] === "D" || v[0] === "U"
                      ? "blocked"
                      : "unknown"),
        m(10));
      let C = a.substring(e[10].from + u, e[10].to + c).trim();
      ((C === "?" || C === "??") && (C = ""), m(11));
      let x = a.substring(e[11].from + u, e[11].to + c).trim();
      m(12);
      let k = "",
        R = "",
        P = "",
        D = a.substring(e[12].from + u, e[12].to + c).trim();
      if ((D.substr(D.length - 1) === "]" && (D = D.slice(0, -1)), D.substr(0, 1) === "[")) R = D.substring(1);
      else {
        let O = D.indexOf("("),
          N = D.indexOf(")"),
          F = D.indexOf("/"),
          B = D.indexOf(":");
        if (O < N && O < F && F < N) ((R = D.split(" ")[0]), (R = R.replace(/:/g, "")));
        else if (B > 0 && (F === -1 || F > 3)) ((R = D.split(" ")[0]), (R = R.replace(/:/g, "")));
        else {
          let L = D.indexOf(" -"),
            G = D.indexOf(" /");
          ((L = L >= 0 ? L : 1e4), (G = G >= 0 ? G : 1e4));
          let Q = Math.min(L, G),
            K = D.substr(0, Q),
            H = D.substr(Q),
            U = K.lastIndexOf("/");
          if ((U >= 0 && ((k = K.substr(0, U)), (K = K.substr(U + 1))), Q === 1e4 && K.indexOf(" ") > -1)) {
            let Y = K.split(" ");
            Jts.existsSync(Xts.join(k, Y[0]))
              ? ((R = Y.shift()), (P = (Y.join(" ") + " " + H).trim()))
              : ((R = K.trim()), (P = H.trim()));
          } else ((R = K.trim()), (P = H.trim()));
        }
      }
      return {
        pid: d,
        parentPid: f,
        name: yT ? r(R) : R,
        cpu: p,
        cpuu: 0,
        cpus: 0,
        mem: h,
        priority: g,
        memVsz: b,
        memRss: A,
        nice: y,
        started: E,
        state: v,
        tty: C,
        user: x,
        command: R,
        params: P,
        path: k,
      };
    }
    function o(a) {
      let u = [];
      if (a.length > 1) {
        let c = a[0];
        ((e = Js.parseHead(c, 8)),
          a.shift(),
          a.forEach((m) => {
            m.trim() !== "" && u.push(n(m));
          }));
      }
      return u;
    }
    function s(a) {
      function u(d) {
        let f = ("0" + (d.getMonth() + 1).toString()).slice(-2),
          p = d.getFullYear().toString(),
          h = ("0" + d.getDate().toString()).slice(-2),
          g = ("0" + d.getHours().toString()).slice(-2),
          b = ("0" + d.getMinutes().toString()).slice(-2),
          A = ("0" + d.getSeconds().toString()).slice(-2);
        return p + "-" + f + "-" + h + " " + g + ":" + b + ":" + A;
      }
      function c(d) {
        let f = "";
        if (d.indexOf("d") >= 0) {
          let p = d.split("d");
          f = u(new Date(Date.now() - (p[0] * 24 + p[1] * 1) * 60 * 60 * 1e3));
        } else if (d.indexOf("h") >= 0) {
          let p = d.split("h");
          f = u(new Date(Date.now() - (p[0] * 60 + p[1] * 1) * 60 * 1e3));
        } else if (d.indexOf(":") >= 0) {
          let p = d.split(":");
          f = u(new Date(Date.now() - (p.length > 1 ? (p[0] * 60 + p[1]) * 1e3 : p[0] * 1e3)));
        }
        return f;
      }
      let m = [];
      return (
        a.forEach((d) => {
          if (d.trim() !== "") {
            d = d.trim().replace(/ +/g, " ").replace(/,+/g, ".");
            let f = d.split(" "),
              p = f.slice(9).join(" "),
              h = parseFloat(((1 * parseInt(f[3]) * 1024) / dqe.totalmem()).toFixed(1)),
              g = c(f[5]);
            m.push({
              pid: parseInt(f[0]),
              parentPid: parseInt(f[1]),
              name: r(p),
              cpu: 0,
              cpuu: 0,
              cpus: 0,
              mem: h,
              priority: 0,
              memVsz: parseInt(f[2]),
              memRss: parseInt(f[3]),
              nice: parseInt(f[4]),
              started: g,
              state:
                f[6] === "R"
                  ? "running"
                  : f[6] === "S"
                    ? "sleeping"
                    : f[6] === "T"
                      ? "stopped"
                      : f[6] === "W"
                        ? "paging"
                        : f[6] === "X"
                          ? "dead"
                          : f[6] === "Z"
                            ? "zombie"
                            : f[6] === "D" || f[6] === "U"
                              ? "blocked"
                              : "unknown",
              tty: f[7],
              user: f[8],
              command: p,
            });
          }
        }),
        m
      );
    }
    return new Promise((a) => {
      process.nextTick(() => {
        let u = { all: 0, running: 0, blocked: 0, sleeping: 0, unknown: 0, list: [] },
          c = "";
        if ((Op.ms && Date.now() - Op.ms >= 500) || Op.ms === 0)
          if (yT || VAe || WAe || zAe || lH || mqe) {
            (yT &&
              (c =
                "export LC_ALL=C; ps -axo pid:11,ppid:11,pcpu:6,pmem:6,pri:5,vsz:11,rss:11,ni:5,etime:30,state:5,tty:15,user:20,command; unset LC_ALL"),
              (VAe || WAe || zAe) &&
                (c =
                  "export LC_ALL=C; ps -axo pid,ppid,pcpu,pmem,pri,vsz,rss,ni,etime,state,tty,user,command; unset LC_ALL"),
              lH &&
                (c =
                  "ps -axo pid,ppid,pcpu,pmem,pri,vsz=temp_title_1,rss=temp_title_2,nice,etime=temp_title_3,state,tty,user,command -r"),
              mqe && (c = "ps -Ao pid,ppid,pcpu,pmem,pri,vsz,rss,nice,stime,s,tty,user,comm"));
            try {
              HAe(c, { maxBuffer: 1024 * 102400 }, (m, d) => {
                !m && d.toString().trim()
                  ? ((u.list = o(
                      d.toString().split(`
`),
                    ).slice()),
                    (u.all = u.list.length),
                    (u.running = u.list.filter((f) => f.state === "running").length),
                    (u.blocked = u.list.filter((f) => f.state === "blocked").length),
                    (u.sleeping = u.list.filter((f) => f.state === "sleeping").length),
                    yT
                      ? ((c = 'cat /proc/stat | grep "cpu "'),
                        u.list.forEach((f) => {
                          c += ";cat /proc/" + f.pid + "/stat";
                        }),
                        HAe(c, { maxBuffer: 1024 * 102400 }, (f, p) => {
                          let h = p.toString().split(`
`),
                            g = pOt(h.shift()),
                            b = {},
                            A = {};
                          (h.forEach((y) => {
                            if (((A = hOt(y, g, Op)), A.pid)) {
                              let E = u.list.map((v) => v.pid).indexOf(A.pid);
                              (E >= 0 &&
                                ((u.list[E].cpu = A.cpuu + A.cpus),
                                (u.list[E].cpuu = A.cpuu),
                                (u.list[E].cpus = A.cpus)),
                                (b[A.pid] = {
                                  cpuu: A.cpuu,
                                  cpus: A.cpus,
                                  utime: A.utime,
                                  stime: A.stime,
                                  cutime: A.cutime,
                                  cstime: A.cstime,
                                }));
                            }
                          }),
                            (Op.all = g),
                            (Op.list = Object.assign({}, b)),
                            (Op.ms = Date.now() - Op.ms),
                            (Op.result = Object.assign({}, u)),
                            t && t(u),
                            a(u));
                        }))
                      : (t && t(u), a(u)))
                  : ((c = "ps -o pid,ppid,vsz,rss,nice,etime,stat,tty,user,comm"),
                    mqe && (c = "ps -o pid,ppid,vsz,rss,nice,etime,s,tty,user,comm"),
                    HAe(c, { maxBuffer: 1024 * 102400 }, (f, p) => {
                      if (f) (t && t(u), a(u));
                      else {
                        let h = p.toString().split(`
`);
                        (h.shift(),
                          (u.list = s(h).slice()),
                          (u.all = u.list.length),
                          (u.running = u.list.filter((g) => g.state === "running").length),
                          (u.blocked = u.list.filter((g) => g.state === "blocked").length),
                          (u.sleeping = u.list.filter((g) => g.state === "sleeping").length),
                          t && t(u),
                          a(u));
                      }
                    }));
              });
            } catch {
              (t && t(u), a(u));
            }
          } else if (fOt)
            try {
              Js.powerShell(
                `Get-CimInstance Win32_Process | select-Object ProcessId,ParentProcessId,ExecutionState,Caption,CommandLine,ExecutablePath,UserModeTime,KernelModeTime,WorkingSetSize,Priority,PageFileUsage,
                @{n="CreationDate";e={$_.CreationDate.ToString("yyyy-MM-dd HH:mm:ss")}} | ConvertTo-Json -compress`,
              ).then((m, d) => {
                if (!d) {
                  let f = [],
                    p = [],
                    h = {},
                    g = 0,
                    b = 0,
                    A = [];
                  try {
                    ((m = m.trim().replace(/^\uFEFF/, "")), (A = JSON.parse(m)));
                  } catch {}
                  (A.forEach((y) => {
                    let E = y.ProcessId,
                      v = y.ParentProcessId,
                      C = y.ExecutionState || null,
                      x = y.Caption,
                      k = y.CommandLine,
                      R = y.ExecutablePath,
                      P = y.UserModeTime,
                      D = y.KernelModeTime,
                      O = y.WorkingSetSize;
                    ((g = g + P),
                      (b = b + D),
                      u.all++,
                      C || u.unknown++,
                      C === "3" && u.running++,
                      (C === "4" || C === "5") && u.blocked++,
                      p.push({ pid: E, utime: P, stime: D, cpu: 0, cpuu: 0, cpus: 0 }),
                      f.push({
                        pid: E,
                        parentPid: v,
                        name: x,
                        cpu: 0,
                        cpuu: 0,
                        cpus: 0,
                        mem: (O / dqe.totalmem()) * 100,
                        priority: y.Priority | null,
                        memVsz: y.PageFileUsage || null,
                        memRss: Math.floor((y.WorkingSetSize || 0) / 1024),
                        nice: 0,
                        started: y.CreationDate,
                        state: C ? Rcn[C] : Rcn[0],
                        tty: "",
                        user: "",
                        command: k || x,
                        path: R,
                        params: "",
                      }));
                  }),
                    (u.sleeping = u.all - u.running - u.blocked - u.unknown),
                    (u.list = f),
                    p.forEach((y) => {
                      let E = kcn(y, g + b, Op),
                        v = u.list.map((C) => C.pid).indexOf(E.pid);
                      (v >= 0 &&
                        ((u.list[v].cpu = E.cpuu + E.cpus), (u.list[v].cpuu = E.cpuu), (u.list[v].cpus = E.cpus)),
                        (h[E.pid] = { cpuu: E.cpuu, cpus: E.cpus, utime: E.utime, stime: E.stime }));
                    }),
                    (Op.all = g + b),
                    (Op.all_utime = g),
                    (Op.all_stime = b),
                    (Op.list = Object.assign({}, h)),
                    (Op.ms = Date.now() - Op.ms),
                    (Op.result = Object.assign({}, u)));
                }
                (t && t(u), a(u));
              });
            } catch {
              (t && t(u), a(u));
            }
          else (t && t(u), a(u));
        else (t && t(Op.result), a(Op.result));
      });
    });
  }
  fqe.processes = rrs;
  function nrs(t, e) {
    return (
      Js.isFunction(t) && !e && ((e = t), (t = "")),
      new Promise((r) => {
        process.nextTick(() => {
          if (((t = t || ""), typeof t != "string")) return (e && e([]), r([]));
          let n = "";
          try {
            ((n.__proto__.toLowerCase = Js.stringToLower),
              (n.__proto__.replace = Js.stringReplace),
              (n.__proto__.toString = Js.stringToString),
              (n.__proto__.substr = Js.stringSubstr),
              (n.__proto__.substring = Js.stringSubstring),
              (n.__proto__.trim = Js.stringTrim),
              (n.__proto__.startsWith = Js.stringStartWith));
          } catch {
            Object.setPrototypeOf(n, Js.stringObj);
          }
          let o = Js.sanitizeShellString(t),
            s = Js.mathMin(o.length, 2e3);
          for (let m = 0; m <= s; m++) o[m] !== void 0 && (n = n + o[m]);
          ((n = n.trim().toLowerCase().replace(/, /g, "|").replace(/,+/g, "|")),
            n === "" && (n = "*"),
            Js.isPrototypePolluted() && n !== "*" && (n = "------"));
          let a = n.split("|"),
            u = [];
          if ((Js.isPrototypePolluted() ? "" : Js.sanitizeShellString(t) || "*") && a.length && a[0] !== "------") {
            if (fOt)
              try {
                Js.powerShell(
                  "Get-CimInstance Win32_Process | select ProcessId,Caption,UserModeTime,KernelModeTime,WorkingSetSize | ConvertTo-Json -compress",
                ).then((m, d) => {
                  if (!d) {
                    let f = [],
                      p = {},
                      h = 0,
                      g = 0,
                      b = [];
                    try {
                      ((m = m.trim().replace(/^\uFEFF/, "")), (b = JSON.parse(m)));
                    } catch {}
                    (b.forEach((A) => {
                      let y = A.ProcessId,
                        E = A.Caption,
                        v = A.UserModeTime,
                        C = A.KernelModeTime,
                        x = A.WorkingSetSize;
                      ((h = h + v),
                        (g = g + C),
                        f.push({ pid: y, name: E, utime: v, stime: C, cpu: 0, cpuu: 0, cpus: 0, mem: x }));
                      let k = "",
                        R = !1;
                      if (
                        (a.forEach((P) => {
                          E.toLowerCase().indexOf(P.toLowerCase()) >= 0 && !R && ((R = !0), (k = P));
                        }),
                        n === "*" || R)
                      ) {
                        let P = !1;
                        (u.forEach((D) => {
                          D.proc.toLowerCase() === k.toLowerCase() &&
                            (D.pids.push(y), (D.mem += (x / dqe.totalmem()) * 100), (P = !0));
                        }),
                          P || u.push({ proc: k, pid: y, pids: [y], cpu: 0, mem: (x / dqe.totalmem()) * 100 }));
                      }
                    }),
                      n !== "*" &&
                        a
                          .filter((y) => f.filter((E) => E.name.toLowerCase().indexOf(y) >= 0).length === 0)
                          .forEach((y) => {
                            u.push({ proc: y, pid: null, pids: [], cpu: 0, mem: 0 });
                          }),
                      f.forEach((A) => {
                        let y = kcn(A, h + g, p8),
                          E = -1;
                        for (let v = 0; v < u.length; v++)
                          (u[v].pid === y.pid || u[v].pids.indexOf(y.pid) >= 0) && (E = v);
                        (E >= 0 && (u[E].cpu += y.cpuu + y.cpus),
                          (p[y.pid] = { cpuu: y.cpuu, cpus: y.cpus, utime: y.utime, stime: y.stime }));
                      }),
                      (p8.all = h + g),
                      (p8.all_utime = h),
                      (p8.all_stime = g),
                      (p8.list = Object.assign({}, p)),
                      (p8.ms = Date.now() - p8.ms),
                      (p8.result = JSON.parse(JSON.stringify(u))),
                      e && e(u),
                      r(u));
                  }
                });
              } catch {
                (e && e(u), r(u));
              }
            if (lH || yT || VAe || WAe || zAe) {
              let m = ["-axo", "pid,ppid,pcpu,pmem,comm"];
              Js.execSafe("ps", m).then((d) => {
                if (d) {
                  let f = [],
                    p = d
                      .toString()
                      .split(
                        `
`,
                      )
                      .filter((h) => {
                        if (n === "*") return !0;
                        if (h.toLowerCase().indexOf("grep") !== -1) return !1;
                        let g = !1;
                        return (
                          a.forEach((b) => {
                            g = g || h.toLowerCase().indexOf(b.toLowerCase()) >= 0;
                          }),
                          g
                        );
                      });
                  if (
                    (p.shift(),
                    p.forEach((h) => {
                      let g = h.trim().replace(/ +/g, " ").split(" ");
                      if (g.length > 4) {
                        let b = g[4].indexOf("/") >= 0 ? g[4].substring(0, g[4].indexOf("/")) : g[4],
                          A = yT ? b : g[4].substring(g[4].lastIndexOf("/") + 1);
                        f.push({
                          name: A,
                          pid: parseInt(g[0]) || 0,
                          ppid: parseInt(g[1]) || 0,
                          cpu: parseFloat(g[2].replace(",", ".")),
                          mem: parseFloat(g[3].replace(",", ".")),
                        });
                      }
                    }),
                    f.forEach((h) => {
                      let g = -1,
                        b = !1,
                        A = h.name;
                      for (let y = 0; y < u.length; y++)
                        h.name.toLowerCase().indexOf(u[y].proc.toLowerCase()) >= 0 && (g = y);
                      (a.forEach((y) => {
                        h.name.toLowerCase().indexOf(y.toLowerCase()) >= 0 && !b && ((b = !0), (A = y));
                      }),
                        (n === "*" || b) &&
                          (g < 0
                            ? A && u.push({ proc: A, pid: h.pid, pids: [h.pid], cpu: h.cpu, mem: h.mem })
                            : (h.ppid < 10 && (u[g].pid = h.pid),
                              u[g].pids.push(h.pid),
                              (u[g].cpu += h.cpu),
                              (u[g].mem += h.mem))));
                    }),
                    n !== "*" &&
                      a
                        .filter((g) => f.filter((b) => b.name.toLowerCase().indexOf(g) >= 0).length === 0)
                        .forEach((g) => {
                          u.push({ proc: g, pid: null, pids: [], cpu: 0, mem: 0 });
                        }),
                    yT)
                  ) {
                    u.forEach((g) => {
                      g.cpu = 0;
                    });
                    let h = 'cat /proc/stat | grep "cpu "';
                    for (let g in u) for (let b in u[g].pids) h += ";cat /proc/" + u[g].pids[b] + "/stat";
                    HAe(h, { maxBuffer: 1024 * 102400 }, (g, b) => {
                      let A = b.toString().split(`
`),
                        y = pOt(A.shift()),
                        E = {},
                        v = {};
                      (A.forEach((C) => {
                        if (((v = hOt(C, y, p8)), v.pid)) {
                          let x = -1;
                          for (let k in u) u[k].pids.indexOf(v.pid) >= 0 && (x = k);
                          (x >= 0 && (u[x].cpu += v.cpuu + v.cpus),
                            (E[v.pid] = {
                              cpuu: v.cpuu,
                              cpus: v.cpus,
                              utime: v.utime,
                              stime: v.stime,
                              cutime: v.cutime,
                              cstime: v.cstime,
                            }));
                        }
                      }),
                        u.forEach((C) => {
                          C.cpu = Math.round(C.cpu * 100) / 100;
                        }),
                        (p8.all = y),
                        (p8.list = Object.assign({}, E)),
                        (p8.ms = Date.now() - p8.ms),
                        (p8.result = Object.assign({}, u)),
                        e && e(u),
                        r(u));
                    });
                  } else (e && e(u), r(u));
                } else (e && e(u), r(u));
              });
            }
          }
        });
      })
    );
  }
  fqe.processLoad = nrs;
});