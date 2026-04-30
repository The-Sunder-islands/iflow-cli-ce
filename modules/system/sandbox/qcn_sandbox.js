/**
 * @module qcn
 * @category system/sandbox
 * @label sandbox
 * @position 719 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qcn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qcn = T((KQu, Gcn) => {
  "use strict";
  var PL = Ae("net"),
    Ers = Ae("os").type() === "Windows_NT",
    BL = Ers ? "//./pipe/docker_engine" : "/var/run/docker.sock",
    AOt = class {
      getInfo(e) {
        try {
          let r = PL.createConnection({ path: BL }),
            n = "",
            o;
          (r.on("connect", () => {
            r.write(`GET http:/info HTTP/1.0\r
\r
`);
          }),
            r.on("data", (s) => {
              n = n + s.toString();
            }),
            r.on("error", () => {
              ((r = !1), e({}));
            }),
            r.on("end", () => {
              let s = n.indexOf(`\r
\r
`);
              ((n = n.substring(s + 4)), (r = !1));
              try {
                ((o = JSON.parse(n)), e(o));
              } catch {
                e({});
              }
            }));
        } catch {
          e({});
        }
      }
      listImages(e, r) {
        try {
          let n = PL.createConnection({ path: BL }),
            o = "",
            s;
          (n.on("connect", () => {
            n.write(
              "GET http:/images/json" +
                (e ? "?all=1" : "") +
                ` HTTP/1.0\r
\r
`,
            );
          }),
            n.on("data", (a) => {
              o = o + a.toString();
            }),
            n.on("error", () => {
              ((n = !1), r({}));
            }),
            n.on("end", () => {
              let a = o.indexOf(`\r
\r
`);
              ((o = o.substring(a + 4)), (n = !1));
              try {
                ((s = JSON.parse(o)), r(s));
              } catch {
                r({});
              }
            }));
        } catch {
          r({});
        }
      }
      inspectImage(e, r) {
        if (((e = e || ""), e))
          try {
            let n = PL.createConnection({ path: BL }),
              o = "",
              s;
            (n.on("connect", () => {
              n.write(
                "GET http:/images/" +
                  e +
                  `/json?stream=0 HTTP/1.0\r
\r
`,
              );
            }),
              n.on("data", (a) => {
                o = o + a.toString();
              }),
              n.on("error", () => {
                ((n = !1), r({}));
              }),
              n.on("end", () => {
                let a = o.indexOf(`\r
\r
`);
                ((o = o.substring(a + 4)), (n = !1));
                try {
                  ((s = JSON.parse(o)), r(s));
                } catch {
                  r({});
                }
              }));
          } catch {
            r({});
          }
        else r({});
      }
      listContainers(e, r) {
        try {
          let n = PL.createConnection({ path: BL }),
            o = "",
            s;
          (n.on("connect", () => {
            n.write(
              "GET http:/containers/json" +
                (e ? "?all=1" : "") +
                ` HTTP/1.0\r
\r
`,
            );
          }),
            n.on("data", (a) => {
              o = o + a.toString();
            }),
            n.on("error", () => {
              ((n = !1), r({}));
            }),
            n.on("end", () => {
              let a = o.indexOf(`\r
\r
`);
              ((o = o.substring(a + 4)), (n = !1));
              try {
                ((s = JSON.parse(o)), r(s));
              } catch {
                r({});
              }
            }));
        } catch {
          r({});
        }
      }
      getStats(e, r) {
        if (((e = e || ""), e))
          try {
            let n = PL.createConnection({ path: BL }),
              o = "",
              s;
            (n.on("connect", () => {
              n.write(
                "GET http:/containers/" +
                  e +
                  `/stats?stream=0 HTTP/1.0\r
\r
`,
              );
            }),
              n.on("data", (a) => {
                o = o + a.toString();
              }),
              n.on("error", () => {
                ((n = !1), r({}));
              }),
              n.on("end", () => {
                let a = o.indexOf(`\r
\r
`);
                ((o = o.substring(a + 4)), (n = !1));
                try {
                  ((s = JSON.parse(o)), r(s));
                } catch {
                  r({});
                }
              }));
          } catch {
            r({});
          }
        else r({});
      }
      getInspect(e, r) {
        if (((e = e || ""), e))
          try {
            let n = PL.createConnection({ path: BL }),
              o = "",
              s;
            (n.on("connect", () => {
              n.write(
                "GET http:/containers/" +
                  e +
                  `/json?stream=0 HTTP/1.0\r
\r
`,
              );
            }),
              n.on("data", (a) => {
                o = o + a.toString();
              }),
              n.on("error", () => {
                ((n = !1), r({}));
              }),
              n.on("end", () => {
                let a = o.indexOf(`\r
\r
`);
                ((o = o.substring(a + 4)), (n = !1));
                try {
                  ((s = JSON.parse(o)), r(s));
                } catch {
                  r({});
                }
              }));
          } catch {
            r({});
          }
        else r({});
      }
      getProcesses(e, r) {
        if (((e = e || ""), e))
          try {
            let n = PL.createConnection({ path: BL }),
              o = "",
              s;
            (n.on("connect", () => {
              n.write(
                "GET http:/containers/" +
                  e +
                  `/top?ps_args=-opid,ppid,pgid,vsz,time,etime,nice,ruser,user,rgroup,group,stat,rss,args HTTP/1.0\r
\r
`,
              );
            }),
              n.on("data", (a) => {
                o = o + a.toString();
              }),
              n.on("error", () => {
                ((n = !1), r({}));
              }),
              n.on("end", () => {
                let a = o.indexOf(`\r
\r
`);
                ((o = o.substring(a + 4)), (n = !1));
                try {
                  ((s = JSON.parse(o)), r(s));
                } catch {
                  r({});
                }
              }));
          } catch {
            r({});
          }
        else r({});
      }
      listVolumes(e) {
        try {
          let r = PL.createConnection({ path: BL }),
            n = "",
            o;
          (r.on("connect", () => {
            r.write(`GET http:/volumes HTTP/1.0\r
\r
`);
          }),
            r.on("data", (s) => {
              n = n + s.toString();
            }),
            r.on("error", () => {
              ((r = !1), e({}));
            }),
            r.on("end", () => {
              let s = n.indexOf(`\r
\r
`);
              ((n = n.substring(s + 4)), (r = !1));
              try {
                ((o = JSON.parse(n)), e(o));
              } catch {
                e({});
              }
            }));
        } catch {
          e({});
        }
      }
    };
  Gcn.exports = AOt;
});