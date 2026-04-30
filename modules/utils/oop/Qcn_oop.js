/**
 * @module Qcn
 * @category utils/oop
 * @label oop
 * @position 718 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Qcn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Qcn = T((bOt) => {
  "use strict";
  var Uf = Ff(),
    NL = process.platform,
    Mcn = NL === "linux" || NL === "android",
    Fcn = NL === "darwin",
    brs = NL === "win32",
    Ucn = NL === "freebsd",
    $cn = NL === "openbsd",
    jcn = NL === "netbsd",
    Ars = NL === "sunos";
  function yrs(t, e) {
    return new Promise((r) => {
      process.nextTick(() => {
        let n = { url: t, ok: !1, status: 404, ms: null };
        if (typeof t != "string") return (e && e(n), r(n));
        let o = "",
          s = Uf.sanitizeShellString(t, !0),
          a = Uf.mathMin(s.length, 2e3);
        for (let u = 0; u <= a; u++)
          if (s[u] !== void 0) {
            try {
              s[u].__proto__.toLowerCase = Uf.stringToLower;
            } catch {
              Object.setPrototypeOf(s[u], Uf.stringObj);
            }
            let c = s[u].toLowerCase();
            c && c[0] && !c[1] && c[0].length === 1 && (o = o + c[0]);
          }
        n.url = o;
        try {
          if (o && !Uf.isPrototypePolluted()) {
            try {
              o.__proto__.startsWith = Uf.stringStartWith;
            } catch {
              Object.setPrototypeOf(o, Uf.stringObj);
            }
            if (
              o.startsWith("file:") ||
              o.startsWith("gopher:") ||
              o.startsWith("telnet:") ||
              o.startsWith("mailto:") ||
              o.startsWith("news:") ||
              o.startsWith("nntp:")
            )
              return (e && e(n), r(n));
            Uf.checkWebsite(o).then((u) => {
              ((n.status = u.statusCode),
                (n.ok = u.statusCode >= 200 && u.statusCode <= 399),
                (n.ms = n.ok ? u.time : null),
                e && e(n),
                r(n));
            });
          } else (e && e(n), r(n));
        } catch {
          (e && e(n), r(n));
        }
      });
    });
  }
  bOt.inetChecksite = yrs;
  function _rs(t, e) {
    return (
      Uf.isFunction(t) && !e && ((e = t), (t = "")),
      (t = t || "8.8.8.8"),
      new Promise((r) => {
        process.nextTick(() => {
          if (typeof t != "string") return (e && e(null), r(null));
          let n = "",
            o = (Uf.isPrototypePolluted() ? "8.8.8.8" : Uf.sanitizeShellString(t, !0)).trim(),
            s = Uf.mathMin(o.length, 2e3);
          for (let u = 0; u <= s; u++)
            if (o[u] !== void 0) {
              try {
                o[u].__proto__.toLowerCase = Uf.stringToLower;
              } catch {
                Object.setPrototypeOf(o[u], Uf.stringObj);
              }
              let c = o[u].toLowerCase();
              c && c[0] && !c[1] && (n = n + c[0]);
            }
          try {
            n.__proto__.startsWith = Uf.stringStartWith;
          } catch {
            Object.setPrototypeOf(n, Uf.stringObj);
          }
          if (
            n.startsWith("file:") ||
            n.startsWith("gopher:") ||
            n.startsWith("telnet:") ||
            n.startsWith("mailto:") ||
            n.startsWith("news:") ||
            n.startsWith("nntp:")
          )
            return (e && e(null), r(null));
          let a;
          if (
            ((Mcn || Ucn || $cn || jcn || Fcn) &&
              (Mcn && (a = ["-c", "2", "-w", "3", n]),
              (Ucn || $cn || jcn) && (a = ["-c", "2", "-t", "3", n]),
              Fcn && (a = ["-c2", "-t3", n]),
              Uf.execSafe("ping", a).then((u) => {
                let c = null;
                if (u) {
                  let d = u
                    .split(
                      `
`,
                    )
                    .filter((f) => f.indexOf("rtt") >= 0 || f.indexOf("round-trip") >= 0 || f.indexOf("avg") >= 0)
                    .join(
                      `
`,
                    )
                    .split("=");
                  if (d.length > 1) {
                    let f = d[1].split("/");
                    f.length > 1 && (c = parseFloat(f[1]));
                  }
                }
                (e && e(c), r(c));
              })),
            Ars)
          ) {
            let u = ["-s", "-a", n, "56", "2"],
              c = "avg";
            Uf.execSafe("ping", u, { timeout: 3e3 }).then((m) => {
              let d = null;
              if (m) {
                let p = m
                  .split(
                    `
`,
                  )
                  .filter((h) => h.indexOf(c) >= 0)
                  .join(
                    `
`,
                  )
                  .split("=");
                if (p.length > 1) {
                  let h = p[1].split("/");
                  h.length > 1 && (d = parseFloat(h[1].replace(",", ".")));
                }
              }
              (e && e(d), r(d));
            });
          }
          if (brs) {
            let u = null;
            try {
              let c = [n, "-n", "1"];
              Uf.execSafe("ping", c, Uf.execOptsWin).then((m) => {
                if (m) {
                  let d = m.split(`\r
`);
                  (d.shift(),
                    d.forEach((f) => {
                      if ((f.toLowerCase().match(/ms/g) || []).length === 3) {
                        let p = f.replace(/ +/g, " ").split(" ");
                        p.length > 6 && (u = parseFloat(p[p.length - 1]));
                      }
                    }));
                }
                (e && e(u), r(u));
              });
            } catch {
              (e && e(u), r(u));
            }
          }
        });
      })
    );
  }
  bOt.inetLatency = _rs;
});