/**
 * @module zkt
 * @category app/i18n
 * @label iflow-i18n
 * @position 707 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zkt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zkt = T((nie) => {
  "use strict";
  var z_ = Ae("os"),
    H_ = Ae("fs"),
    zi = Ff(),
    uo = Ae("child_process").exec,
    PAe = Ae("child_process").execSync,
    h4 = process.platform,
    rie = h4 === "linux" || h4 === "android",
    V_ = h4 === "darwin",
    W_ = h4 === "win32",
    Hkt = h4 === "freebsd",
    Vkt = h4 === "openbsd",
    Wkt = h4 === "netbsd",
    pes = h4 === "sunos";
  function hes() {
    let t = new Date().toString().split(" "),
      e = "";
    try {
      e = Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch {
      e = t.length >= 7 ? t.slice(6).join(" ").replace(/\(/g, "").replace(/\)/g, "") : "";
    }
    let r = { current: Date.now(), uptime: z_.uptime(), timezone: t.length >= 7 ? t[5] : "", timezoneName: e };
    if (V_ || rie)
      try {
        let o = PAe("date +%Z && date +%z && ls -l /etc/localtime 2>/dev/null", zi.execOptsLinux)
          .toString()
          .split(z_.EOL);
        o.length > 3 && !o[0] && o.shift();
        let s = o[0] || "";
        return (
          (s.startsWith("+") || s.startsWith("-")) && (s = "GMT"),
          {
            current: Date.now(),
            uptime: z_.uptime(),
            timezone: o[1] ? s + o[1] : s,
            timezoneName: (o[2] && o[2].indexOf("/zoneinfo/") > 0 && o[2].split("/zoneinfo/")[1]) || "",
          }
        );
      } catch {
        zi.noop();
      }
    return r;
  }
  nie.time = hes;
  function NAe(t) {
    ((t = t || ""), (t = t.toLowerCase()));
    let e = h4;
    return (
      W_
        ? (e = "windows")
        : t.indexOf("mac os") !== -1 || t.indexOf("macos") !== -1
          ? (e = "apple")
          : t.indexOf("arch") !== -1
            ? (e = "arch")
            : t.indexOf("cachy") !== -1
              ? (e = "cachy")
              : t.indexOf("centos") !== -1
                ? (e = "centos")
                : t.indexOf("coreos") !== -1
                  ? (e = "coreos")
                  : t.indexOf("debian") !== -1
                    ? (e = "debian")
                    : t.indexOf("deepin") !== -1
                      ? (e = "deepin")
                      : t.indexOf("elementary") !== -1
                        ? (e = "elementary")
                        : t.indexOf("endeavour") !== -1
                          ? (e = "endeavour")
                          : t.indexOf("fedora") !== -1
                            ? (e = "fedora")
                            : t.indexOf("gentoo") !== -1
                              ? (e = "gentoo")
                              : t.indexOf("mageia") !== -1
                                ? (e = "mageia")
                                : t.indexOf("mandriva") !== -1
                                  ? (e = "mandriva")
                                  : t.indexOf("manjaro") !== -1
                                    ? (e = "manjaro")
                                    : t.indexOf("mint") !== -1
                                      ? (e = "mint")
                                      : t.indexOf("mx") !== -1
                                        ? (e = "mx")
                                        : t.indexOf("openbsd") !== -1
                                          ? (e = "openbsd")
                                          : t.indexOf("freebsd") !== -1
                                            ? (e = "freebsd")
                                            : t.indexOf("opensuse") !== -1
                                              ? (e = "opensuse")
                                              : t.indexOf("pclinuxos") !== -1
                                                ? (e = "pclinuxos")
                                                : t.indexOf("puppy") !== -1
                                                  ? (e = "puppy")
                                                  : t.indexOf("popos") !== -1
                                                    ? (e = "popos")
                                                    : t.indexOf("raspbian") !== -1
                                                      ? (e = "raspbian")
                                                      : t.indexOf("reactos") !== -1
                                                        ? (e = "reactos")
                                                        : t.indexOf("redhat") !== -1
                                                          ? (e = "redhat")
                                                          : t.indexOf("slackware") !== -1
                                                            ? (e = "slackware")
                                                            : t.indexOf("sugar") !== -1
                                                              ? (e = "sugar")
                                                              : t.indexOf("steam") !== -1
                                                                ? (e = "steam")
                                                                : t.indexOf("suse") !== -1
                                                                  ? (e = "suse")
                                                                  : t.indexOf("mate") !== -1
                                                                    ? (e = "ubuntu-mate")
                                                                    : t.indexOf("lubuntu") !== -1
                                                                      ? (e = "lubuntu")
                                                                      : t.indexOf("xubuntu") !== -1
                                                                        ? (e = "xubuntu")
                                                                        : t.indexOf("ubuntu") !== -1
                                                                          ? (e = "ubuntu")
                                                                          : t.indexOf("solaris") !== -1
                                                                            ? (e = "solaris")
                                                                            : t.indexOf("tails") !== -1
                                                                              ? (e = "tails")
                                                                              : t.indexOf("feren") !== -1
                                                                                ? (e = "ferenos")
                                                                                : t.indexOf("robolinux") !== -1
                                                                                  ? (e = "robolinux")
                                                                                  : rie &&
                                                                                    t &&
                                                                                    (e = t
                                                                                      .toLowerCase()
                                                                                      .trim()
                                                                                      .replace(/\s+/g, "-")),
      e
    );
  }
  var ges = [
    [26200, "25H2"],
    [26100, "24H2"],
    [22631, "23H2"],
    [22621, "22H2"],
    [19045, "22H2"],
    [22e3, "21H2"],
    [19044, "21H2"],
    [19043, "21H1"],
    [19042, "20H2"],
    [19041, "2004"],
    [18363, "1909"],
    [18362, "1903"],
    [17763, "1809"],
    [17134, "1803"],
  ];
  function bes(t) {
    for (let [e, r] of ges) if (t >= e) return r;
    return "";
  }
  function Aes() {
    let t = z_.hostname;
    if (rie || V_)
      try {
        t = PAe("hostname -f 2>/dev/null", zi.execOptsLinux).toString().split(z_.EOL)[0];
      } catch {
        zi.noop();
      }
    if (Hkt || Vkt || Wkt)
      try {
        t = PAe("hostname 2>/dev/null").toString().split(z_.EOL)[0];
      } catch {
        zi.noop();
      }
    if (W_)
      try {
        t = PAe("echo %COMPUTERNAME%.%USERDNSDOMAIN%", zi.execOptsWin)
          .toString()
          .replace(".%USERDNSDOMAIN%", "")
          .split(z_.EOL)[0];
      } catch {
        zi.noop();
      }
    return t;
  }
  function yes(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = {
          platform: h4 === "win32" ? "Windows" : h4,
          distro: "unknown",
          release: "unknown",
          codename: "",
          kernel: z_.release(),
          arch: z_.arch(),
          hostname: z_.hostname(),
          fqdn: Aes(),
          codepage: "",
          logofile: "",
          serial: "",
          build: "",
          servicepack: "",
          uefi: !1,
        };
        if (
          (rie &&
            uo("cat /etc/*-release; cat /usr/lib/os-release; cat /etc/openwrt_release", (n, o) => {
              let s = {};
              (o
                .toString()
                .split(
                  `
`,
                )
                .forEach((d) => {
                  d.indexOf("=") !== -1 && (s[d.split("=")[0].trim().toUpperCase()] = d.split("=")[1].trim());
                }),
                (r.distro = (s.DISTRIB_ID || s.NAME || "unknown").replace(/"/g, "")),
                (r.logofile = NAe(r.distro)));
              let u = (s.VERSION || "").replace(/"/g, ""),
                c = (s.DISTRIB_CODENAME || s.VERSION_CODENAME || "").replace(/"/g, ""),
                m = (s.PRETTY_NAME || "").replace(/"/g, "");
              (m.indexOf(r.distro + " ") === 0 && (u = m.replace(r.distro + " ", "").trim()),
                u.indexOf("(") >= 0 &&
                  ((c = u.split("(")[1].replace(/[()]/g, "").trim()), (u = u.split("(")[0].trim())),
                (r.release = (u || s.DISTRIB_RELEASE || s.VERSION_ID || "unknown").replace(/"/g, "")),
                (r.codename = c),
                (r.codepage = zi.getCodepage()),
                (r.build = (s.BUILD_ID || "").replace(/"/g, "").trim()),
                _es().then((d) => {
                  ((r.uefi = d),
                    jun().then((f) => {
                      ((r.serial = f.os), t && t(r), e(r));
                    }));
                }));
            }),
          (Hkt || Vkt || Wkt) &&
            uo(
              "sysctl kern.ostype kern.osrelease kern.osrevision kern.hostuuid machdep.bootmethod kern.geom.confxml",
              (n, o) => {
                let s = o.toString().split(`
`),
                  a = zi.getValue(s, "kern.ostype"),
                  u = NAe(a),
                  c = zi.getValue(s, "kern.osrelease").split("-")[0],
                  m = zi.getValue(s, "kern.uuid"),
                  d = zi.getValue(s, "machdep.bootmethod"),
                  f = o.toString().indexOf("<type>efi</type>") >= 0,
                  p = d ? d.toLowerCase().indexOf("uefi") >= 0 : f || null;
                ((r.distro = a || r.distro),
                  (r.logofile = u || r.logofile),
                  (r.release = c || r.release),
                  (r.serial = m || r.serial),
                  (r.codename = ""),
                  (r.codepage = zi.getCodepage()),
                  (r.uefi = p || null),
                  t && t(r),
                  e(r));
              },
            ),
          V_ &&
            uo("sw_vers; sysctl kern.ostype kern.osrelease kern.osrevision kern.uuid", (n, o) => {
              let s = o.toString().split(`
`);
              ((r.serial = zi.getValue(s, "kern.uuid")),
                (r.distro = zi.getValue(s, "ProductName")),
                (r.release = (
                  zi.getValue(s, "ProductVersion", ":", !0, !0) +
                  " " +
                  zi.getValue(s, "ProductVersionExtra", ":", !0, !0)
                ).trim()),
                (r.build = zi.getValue(s, "BuildVersion")),
                (r.logofile = NAe(r.distro)),
                (r.codename = "macOS"),
                (r.codename = r.release.indexOf("10.4") > -1 ? "OS X Tiger" : r.codename),
                (r.codename = r.release.indexOf("10.5") > -1 ? "OS X Leopard" : r.codename),
                (r.codename = r.release.indexOf("10.6") > -1 ? "OS X Snow Leopard" : r.codename),
                (r.codename = r.release.indexOf("10.7") > -1 ? "OS X Lion" : r.codename),
                (r.codename = r.release.indexOf("10.8") > -1 ? "OS X Mountain Lion" : r.codename),
                (r.codename = r.release.indexOf("10.9") > -1 ? "OS X Mavericks" : r.codename),
                (r.codename = r.release.indexOf("10.10") > -1 ? "OS X Yosemite" : r.codename),
                (r.codename = r.release.indexOf("10.11") > -1 ? "OS X El Capitan" : r.codename),
                (r.codename = r.release.indexOf("10.12") > -1 ? "Sierra" : r.codename),
                (r.codename = r.release.indexOf("10.13") > -1 ? "High Sierra" : r.codename),
                (r.codename = r.release.indexOf("10.14") > -1 ? "Mojave" : r.codename),
                (r.codename = r.release.indexOf("10.15") > -1 ? "Catalina" : r.codename),
                (r.codename = r.release.startsWith("11.") ? "Big Sur" : r.codename),
                (r.codename = r.release.startsWith("12.") ? "Monterey" : r.codename),
                (r.codename = r.release.startsWith("13.") ? "Ventura" : r.codename),
                (r.codename = r.release.startsWith("14.") ? "Sonoma" : r.codename),
                (r.codename = r.release.startsWith("15.") ? "Sequoia" : r.codename),
                (r.codename = r.release.startsWith("26.") ? "Tahoe" : r.codename),
                (r.uefi = !0),
                (r.codepage = zi.getCodepage()),
                t && t(r),
                e(r));
            }),
          pes &&
            ((r.release = r.kernel),
            uo("uname -o", (n, o) => {
              let s = o.toString().split(`
`);
              ((r.distro = s[0]), (r.logofile = NAe(r.distro)), t && t(r), e(r));
            })),
          W_)
        ) {
          ((r.logofile = NAe()), (r.release = r.kernel));
          try {
            let n = [];
            (n.push(
              zi.powerShell(
                "Get-CimInstance Win32_OperatingSystem | select Caption,SerialNumber,BuildNumber,ServicePackMajorVersion,ServicePackMinorVersion | fl",
              ),
            ),
              n.push(zi.powerShell("(Get-CimInstance Win32_ComputerSystem).HypervisorPresent")),
              n.push(
                zi.powerShell(
                  "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.SystemInformation]::TerminalServerSession",
                ),
              ),
              n.push(
                zi.powerShell('reg query "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion" /v DisplayVersion'),
              ),
              zi.promiseAll(n).then((o) => {
                let s = o.results[0]
                  ? o.results[0].toString().split(`\r
`)
                  : [""];
                ((r.distro = zi.getValue(s, "Caption", ":").trim()),
                  (r.serial = zi.getValue(s, "SerialNumber", ":").trim()),
                  (r.build = zi.getValue(s, "BuildNumber", ":").trim()),
                  (r.servicepack =
                    zi.getValue(s, "ServicePackMajorVersion", ":").trim() +
                    "." +
                    zi.getValue(s, "ServicePackMinorVersion", ":").trim()),
                  (r.codepage = zi.getCodepage()));
                let a = o.results[1] ? o.results[1].toString().toLowerCase() : "";
                r.hypervisor = a.indexOf("true") !== -1;
                let u = o.results[2] ? o.results[2].toString() : "";
                if (o.results[3]) {
                  let c = o.results[3].split("REG_SZ");
                  r.codename = c.length > 1 ? c[1].trim() : "";
                }
                if (!r.codename) {
                  let c = parseInt(r.build, 10);
                  r.codename = bes(c);
                }
                ((r.remoteSession = u.toString().toLowerCase().indexOf("true") >= 0),
                  Ees().then((c) => {
                    ((r.uefi = c), t && t(r), e(r));
                  }));
              }));
          } catch {
            (t && t(r), e(r));
          }
        }
      });
    });
  }
  nie.osInfo = yes;
  function _es() {
    return new Promise((t) => {
      process.nextTick(() => {
        H_.stat("/sys/firmware/efi", (e) => {
          if (e)
            uo('dmesg | grep -E "EFI v"', (r, n) => {
              if (!r) {
                let o = n.toString().split(`
`);
                return t(o.length > 0);
              }
              return t(!1);
            });
          else return t(!0);
        });
      });
    });
  }
  function Ees() {
    return new Promise((t) => {
      process.nextTick(() => {
        try {
          uo('findstr /C:"Detected boot environment" "%windir%\\Panther\\setupact.log"', zi.execOptsWin, (e, r) => {
            if (e)
              uo("echo %firmware_type%", zi.execOptsWin, (n, o) => {
                if (n) return t(!1);
                {
                  let s = o.toString() || "";
                  return t(s.toLowerCase().indexOf("efi") >= 0);
                }
              });
            else {
              let n = r.toString().split(`
\r`)[0];
              return t(n.toLowerCase().indexOf("efi") >= 0);
            }
          });
        } catch {
          return t(!1);
        }
      });
    });
  }
  function ves(t, e) {
    let r = {
      kernel: z_.release(),
      apache: "",
      bash: "",
      bun: "",
      deno: "",
      docker: "",
      dotnet: "",
      fish: "",
      gcc: "",
      git: "",
      grunt: "",
      gulp: "",
      homebrew: "",
      java: "",
      mongodb: "",
      mysql: "",
      nginx: "",
      node: "",
      npm: "",
      openssl: "",
      perl: "",
      php: "",
      pip3: "",
      pip: "",
      pm2: "",
      postfix: "",
      postgresql: "",
      powershell: "",
      python3: "",
      python: "",
      redis: "",
      systemOpenssl: "",
      systemOpensslLib: "",
      tsc: "",
      v8: process.versions.v8,
      virtualbox: "",
      yarn: "",
      zsh: "",
    };
    function n(o) {
      if (o === "*") return { versions: r, counter: 34 };
      if (!Array.isArray(o)) {
        ((o = o.trim().toLowerCase().replace(/,+/g, "|").replace(/ /g, "|")), (o = o.split("|")));
        let s = { versions: {}, counter: 0 };
        return (
          o.forEach((a) => {
            if (a)
              for (let u in r)
                ({}).hasOwnProperty.call(r, u) &&
                  u.toLowerCase() === a.toLowerCase() &&
                  !{}.hasOwnProperty.call(s.versions, u) &&
                  ((s.versions[u] = r[u]),
                  u === "openssl" && ((s.versions.systemOpenssl = ""), (s.versions.systemOpensslLib = "")),
                  s.versions[u] || s.counter++);
          }),
          s
        );
      }
    }
    return new Promise((o) => {
      process.nextTick(() => {
        if (zi.isFunction(t) && !e) ((e = t), (t = "*"));
        else if (((t = t || "*"), typeof t != "string")) return (e && e({}), o({}));
        let s = n(t),
          a = s.counter,
          u = () => {
            --a === 0 && (e && e(s.versions), o(s.versions));
          },
          c = "";
        try {
          if (
            ({}.hasOwnProperty.call(s.versions, "openssl") &&
              ((s.versions.openssl = process.versions.openssl),
              uo("openssl version", (m, d) => {
                if (!m) {
                  let p = d
                    .toString()
                    .split(
                      `
`,
                    )[0]
                    .trim()
                    .split(" ");
                  ((s.versions.systemOpenssl = p.length > 0 ? p[1] : p[0]),
                    (s.versions.systemOpensslLib = p.length > 0 ? p[0] : "openssl"));
                }
                u();
              })),
            {}.hasOwnProperty.call(s.versions, "npm") &&
              uo("npm -v", (m, d) => {
                (m ||
                  (s.versions.npm = d.toString().split(`
`)[0]),
                  u());
              }),
            {}.hasOwnProperty.call(s.versions, "pm2") &&
              ((c = "pm2"),
              W_ && (c += ".cmd"),
              uo(`${c} -v`, (m, d) => {
                if (!m) {
                  let f = d
                    .toString()
                    .split(
                      `
`,
                    )[0]
                    .trim();
                  f.startsWith("[PM2]") || (s.versions.pm2 = f);
                }
                u();
              })),
            {}.hasOwnProperty.call(s.versions, "yarn") &&
              uo("yarn --version", (m, d) => {
                (m ||
                  (s.versions.yarn = d.toString().split(`
`)[0]),
                  u());
              }),
            {}.hasOwnProperty.call(s.versions, "gulp") &&
              ((c = "gulp"),
              W_ && (c += ".cmd"),
              uo(`${c} --version`, (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  s.versions.gulp = (f.toLowerCase().split("version")[1] || "").trim();
                }
                u();
              })),
            {}.hasOwnProperty.call(s.versions, "homebrew") &&
              ((c = "brew"),
              uo(`${c} --version`, (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  s.versions.homebrew = (f.toLowerCase().split(" ")[1] || "").trim();
                }
                u();
              })),
            {}.hasOwnProperty.call(s.versions, "tsc") &&
              ((c = "tsc"),
              W_ && (c += ".cmd"),
              uo(`${c} --version`, (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  s.versions.tsc = (f.toLowerCase().split("version")[1] || "").trim();
                }
                u();
              })),
            {}.hasOwnProperty.call(s.versions, "grunt") &&
              ((c = "grunt"),
              W_ && (c += ".cmd"),
              uo(`${c} --version`, (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  s.versions.grunt = (f.toLowerCase().split("cli v")[1] || "").trim();
                }
                u();
              })),
            {}.hasOwnProperty.call(s.versions, "git"))
          )
            if (V_) {
              let m = H_.existsSync("/usr/local/Cellar/git") || H_.existsSync("/opt/homebrew/bin/git");
              zi.darwinXcodeExists() || m
                ? uo("git --version", (d, f) => {
                    if (!d) {
                      let p =
                        f.toString().split(`
`)[0] || "";
                      ((p = (p.toLowerCase().split("version")[1] || "").trim()),
                        (s.versions.git = (p.split(" ")[0] || "").trim()));
                    }
                    u();
                  })
                : u();
            } else
              uo("git --version", (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  ((f = (f.toLowerCase().split("version")[1] || "").trim()),
                    (s.versions.git = (f.split(" ")[0] || "").trim()));
                }
                u();
              });
          if (
            ({}.hasOwnProperty.call(s.versions, "apache") &&
              uo("apachectl -v 2>&1", (m, d) => {
                if (!m) {
                  let f = (
                    d.toString().split(`
`)[0] || ""
                  ).split(":");
                  s.versions.apache =
                    f.length > 1 ? f[1].replace("Apache", "").replace("/", "").split("(")[0].trim() : "";
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "nginx") &&
              uo("nginx -v 2>&1", (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  s.versions.nginx = (f.toLowerCase().split("/")[1] || "").trim();
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "mysql") &&
              uo("mysql -V", (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  if (((f = f.toLowerCase()), f.indexOf(",") > -1)) {
                    f = (f.split(",")[0] || "").trim();
                    let p = f.split(" ");
                    s.versions.mysql = (p[p.length - 1] || "").trim();
                  } else f.indexOf(" ver ") > -1 && ((f = f.split(" ver ")[1]), (s.versions.mysql = f.split(" ")[0]));
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "php") &&
              uo("php -v", (m, d) => {
                if (!m) {
                  let p = (
                    d.toString().split(`
`)[0] || ""
                  ).split("(");
                  (p[0].indexOf("-") && (p = p[0].split("-")), (s.versions.php = p[0].replace(/[^0-9.]/g, "")));
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "redis") &&
              uo("redis-server --version", (m, d) => {
                if (!m) {
                  let p = (
                    d.toString().split(`
`)[0] || ""
                  ).split(" ");
                  s.versions.redis = zi.getValue(p, "v", "=", !0);
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "docker") &&
              uo("docker --version", (m, d) => {
                if (!m) {
                  let p = (
                    d.toString().split(`
`)[0] || ""
                  ).split(" ");
                  s.versions.docker = p.length > 2 && p[2].endsWith(",") ? p[2].slice(0, -1) : "";
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "postfix") &&
              uo("postconf -d | grep mail_version", (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`) || [];
                  s.versions.postfix = zi.getValue(f, "mail_version", "=", !0);
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "mongodb") &&
              uo("mongod --version", (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  s.versions.mongodb = (f.toLowerCase().split(",")[0] || "").replace(/[^0-9.]/g, "");
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "postgresql") &&
              (rie
                ? uo("locate bin/postgres", (m, d) => {
                    if (m)
                      uo("psql -V", (f, p) => {
                        if (!f) {
                          let h =
                            p
                              .toString()
                              .split(
                                `
`,
                              )[0]
                              .split(" ") || [];
                          ((s.versions.postgresql = h.length ? h[h.length - 1] : ""),
                            (s.versions.postgresql = s.versions.postgresql.split("-")[0]));
                        }
                        u();
                      });
                    else {
                      let f = d
                        .toString()
                        .split(
                          `
`,
                        )
                        .sort();
                      f.length
                        ? uo(f[f.length - 1] + " -V", (p, h) => {
                            if (!p) {
                              let g =
                                h
                                  .toString()
                                  .split(
                                    `
`,
                                  )[0]
                                  .split(" ") || [];
                              s.versions.postgresql = g.length ? g[g.length - 1] : "";
                            }
                            u();
                          })
                        : u();
                    }
                  })
                : W_
                  ? zi.powerShell("Get-CimInstance Win32_Service | select caption | fl").then((m) => {
                      (m.split(/\n\s*\n/).forEach((f) => {
                        if (f.trim() !== "") {
                          let p = f.trim().split(`\r
`),
                            h = zi.getValue(p, "caption", ":", !0).toLowerCase();
                          if (h.indexOf("postgresql") > -1) {
                            let g = h.split(" server ");
                            g.length > 1 && (s.versions.postgresql = g[1]);
                          }
                        }
                      }),
                        u());
                    })
                  : uo("postgres -V", (m, d) => {
                      if (m)
                        uo("pg_config --version", (f, p) => {
                          if (!f) {
                            let h =
                              p
                                .toString()
                                .split(
                                  `
`,
                                )[0]
                                .split(" ") || [];
                            s.versions.postgresql = h.length ? h[h.length - 1] : "";
                          }
                        });
                      else {
                        let f =
                          d
                            .toString()
                            .split(
                              `
`,
                            )[0]
                            .split(" ") || [];
                        s.versions.postgresql = f.length ? f[f.length - 1] : "";
                      }
                      u();
                    })),
            {}.hasOwnProperty.call(s.versions, "perl") &&
              uo("perl -v", (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`) || "";
                  for (; f.length > 0 && f[0].trim() === ""; ) f.shift();
                  f.length > 0 && (s.versions.perl = f[0].split("(").pop().split(")")[0].replace("v", ""));
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "python"))
          )
            if (V_)
              try {
                let d = PAe("sw_vers").toString().split(`
`),
                  f = zi.getValue(d, "ProductVersion", ":"),
                  p = H_.existsSync("/usr/local/Cellar/python"),
                  h = H_.existsSync("/opt/homebrew/bin/python");
                (zi.darwinXcodeExists() && zi.semverCompare("12.0.1", f) < 0) || p || h
                  ? uo(
                      p
                        ? "/usr/local/Cellar/python -V 2>&1"
                        : h
                          ? "/opt/homebrew/bin/python -V 2>&1"
                          : "python -V 2>&1",
                      (b, A) => {
                        if (!b) {
                          let y =
                            A.toString().split(`
`)[0] || "";
                          s.versions.python = y.toLowerCase().replace("python", "").trim();
                        }
                        u();
                      },
                    )
                  : u();
              } catch {
                u();
              }
            else
              uo("python -V 2>&1", (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  s.versions.python = f.toLowerCase().replace("python", "").trim();
                }
                u();
              });
          if ({}.hasOwnProperty.call(s.versions, "python3"))
            if (V_) {
              let m = H_.existsSync("/usr/local/Cellar/python3") || H_.existsSync("/opt/homebrew/bin/python3");
              zi.darwinXcodeExists() || m
                ? uo("python3 -V 2>&1", (d, f) => {
                    if (!d) {
                      let p =
                        f.toString().split(`
`)[0] || "";
                      s.versions.python3 = p.toLowerCase().replace("python", "").trim();
                    }
                    u();
                  })
                : u();
            } else
              uo("python3 -V 2>&1", (m, d) => {
                if (!m) {
                  let f =
                    d.toString().split(`
`)[0] || "";
                  s.versions.python3 = f.toLowerCase().replace("python", "").trim();
                }
                u();
              });
          if ({}.hasOwnProperty.call(s.versions, "pip"))
            if (V_) {
              let m = H_.existsSync("/usr/local/Cellar/pip") || H_.existsSync("/opt/homebrew/bin/pip");
              zi.darwinXcodeExists() || m
                ? uo("pip -V 2>&1", (d, f) => {
                    if (!d) {
                      let h = (
                        f.toString().split(`
`)[0] || ""
                      ).split(" ");
                      s.versions.pip = h.length >= 2 ? h[1] : "";
                    }
                    u();
                  })
                : u();
            } else
              uo("pip -V 2>&1", (m, d) => {
                if (!m) {
                  let p = (
                    d.toString().split(`
`)[0] || ""
                  ).split(" ");
                  s.versions.pip = p.length >= 2 ? p[1] : "";
                }
                u();
              });
          if ({}.hasOwnProperty.call(s.versions, "pip3"))
            if (V_) {
              let m = H_.existsSync("/usr/local/Cellar/pip3") || H_.existsSync("/opt/homebrew/bin/pip3");
              zi.darwinXcodeExists() || m
                ? uo("pip3 -V 2>&1", (d, f) => {
                    if (!d) {
                      let h = (
                        f.toString().split(`
`)[0] || ""
                      ).split(" ");
                      s.versions.pip3 = h.length >= 2 ? h[1] : "";
                    }
                    u();
                  })
                : u();
            } else
              uo("pip3 -V 2>&1", (m, d) => {
                if (!m) {
                  let p = (
                    d.toString().split(`
`)[0] || ""
                  ).split(" ");
                  s.versions.pip3 = p.length >= 2 ? p[1] : "";
                }
                u();
              });
          (({}).hasOwnProperty.call(s.versions, "java") &&
            (V_
              ? uo("/usr/libexec/java_home -V 2>&1", (m, d) => {
                  !m && d.toString().toLowerCase().indexOf("no java runtime") === -1
                    ? uo("java -version 2>&1", (f, p) => {
                        if (!f) {
                          let g = (
                            p.toString().split(`
`)[0] || ""
                          ).split('"');
                          s.versions.java = g.length === 3 ? g[1].trim() : "";
                        }
                        u();
                      })
                    : u();
                })
              : uo("java -version 2>&1", (m, d) => {
                  if (!m) {
                    let p = (
                      d.toString().split(`
`)[0] || ""
                    ).split('"');
                    s.versions.java = p.length === 3 ? p[1].trim() : "";
                  }
                  u();
                })),
            {}.hasOwnProperty.call(s.versions, "gcc") &&
              ((V_ && zi.darwinXcodeExists()) || !V_
                ? uo("gcc -dumpversion", (m, d) => {
                    (m ||
                      (s.versions.gcc =
                        d
                          .toString()
                          .split(
                            `
`,
                          )[0]
                          .trim() || ""),
                      s.versions.gcc.indexOf(".") > -1
                        ? u()
                        : uo("gcc --version", (f, p) => {
                            if (!f) {
                              let h = p
                                .toString()
                                .split(
                                  `
`,
                                )[0]
                                .trim();
                              if (h.indexOf("gcc") > -1 && h.indexOf(")") > -1) {
                                let g = h.split(")");
                                s.versions.gcc = g[1].trim() || s.versions.gcc;
                              }
                            }
                            u();
                          }));
                  })
                : u()),
            {}.hasOwnProperty.call(s.versions, "virtualbox") &&
              uo(zi.getVboxmanage() + " -v 2>&1", (m, d) => {
                if (!m) {
                  let p = (
                    d.toString().split(`
`)[0] || ""
                  ).split("r");
                  s.versions.virtualbox = p[0];
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "bash") &&
              uo("bash --version", (m, d) => {
                if (!m) {
                  let p = d
                    .toString()
                    .split(
                      `
`,
                    )[0]
                    .split(" version ");
                  p.length > 1 && (s.versions.bash = p[1].split(" ")[0].split("(")[0]);
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "zsh") &&
              uo("zsh --version", (m, d) => {
                if (!m) {
                  let p = d
                    .toString()
                    .split(
                      `
`,
                    )[0]
                    .split("zsh ");
                  p.length > 1 && (s.versions.zsh = p[1].split(" ")[0]);
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "fish") &&
              uo("fish --version", (m, d) => {
                if (!m) {
                  let p = d
                    .toString()
                    .split(
                      `
`,
                    )[0]
                    .split(" version ");
                  p.length > 1 && (s.versions.fish = p[1].split(" ")[0]);
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "bun") &&
              uo("bun -v", (m, d) => {
                if (!m) {
                  let f = d
                    .toString()
                    .split(
                      `
`,
                    )[0]
                    .trim();
                  s.versions.bun = f;
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "deno") &&
              uo("deno -v", (m, d) => {
                if (!m) {
                  let p = d
                    .toString()
                    .split(
                      `
`,
                    )[0]
                    .trim()
                    .split(" ");
                  p.length > 1 && (s.versions.deno = p[1]);
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "node") &&
              uo("node -v", (m, d) => {
                if (!m) {
                  let f = d
                    .toString()
                    .split(
                      `
`,
                    )[0]
                    .trim();
                  (f.startsWith("v") && (f = f.slice(1)), (s.versions.node = f));
                }
                u();
              }),
            {}.hasOwnProperty.call(s.versions, "powershell") &&
              (W_
                ? zi.powerShell("$PSVersionTable").then((m) => {
                    let d = m
                      .toString()
                      .toLowerCase()
                      .split(
                        `
`,
                      )
                      .map((f) => f.replace(/ +/g, " ").replace(/ +/g, ":"));
                    ((s.versions.powershell = zi.getValue(d, "psversion")), u());
                  })
                : u()),
            {}.hasOwnProperty.call(s.versions, "dotnet") &&
              (W_
                ? zi
                    .powerShell(
                      'gci "HKLM:\\SOFTWARE\\Microsoft\\NET Framework Setup\\NDP" -recurse | gp -name Version,Release -EA 0 | where { $_.PSChildName -match "^(?!S)\\p{L}"} | select PSChildName, Version, Release',
                    )
                    .then((m) => {
                      let d = m.toString().split(`\r
`),
                        f = "";
                      (d.forEach((p) => {
                        p = p.replace(/ +/g, " ");
                        let h = p.split(" ");
                        f =
                          f ||
                          ((h[0].toLowerCase().startsWith("client") && h.length > 2) ||
                          (h[0].toLowerCase().startsWith("full") && h.length > 2)
                            ? h[1].trim()
                            : "");
                      }),
                        (s.versions.dotnet = f.trim()),
                        u());
                    })
                : u()));
        } catch {
          (e && e(s.versions), o(s.versions));
        }
      });
    });
  }
  nie.versions = ves;
  function Ces(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        if (W_)
          try {
            zi.powerShell(
              `Get-CimInstance -className win32_process | where-object {$_.ProcessId -eq ${process.ppid} } | select Name`,
            ).then((n) => {
              let o = "CMD";
              (n && n.toString().toLowerCase().indexOf("powershell") >= 0 && (o = "PowerShell"), t && t(o), e(o));
            });
          } catch {
            (t && t(result), e(result));
          }
        else {
          let r = "";
          uo("echo $SHELL", (n, o) => {
            (n ||
              (r = o.toString().split(`
`)[0]),
              t && t(r),
              e(r));
          });
        }
      });
    });
  }
  nie.shell = Ces;
  function Ses() {
    let t = [];
    try {
      let e = z_.networkInterfaces();
      for (let r in e)
        ({}).hasOwnProperty.call(e, r) &&
          e[r].forEach((n) => {
            if (n && n.mac && n.mac !== "00:00:00:00:00:00") {
              let o = n.mac.toLowerCase();
              t.indexOf(o) === -1 && t.push(o);
            }
          });
      t = t.sort((r, n) => (r < n ? -1 : r > n ? 1 : 0));
    } catch {
      t.push("00:00:00:00:00:00");
    }
    return t;
  }
  function jun(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = { os: "", hardware: "", macs: Ses() },
          n;
        if (
          (V_ &&
            uo("system_profiler SPHardwareDataType -json", (o, s) => {
              if (!o)
                try {
                  let a = JSON.parse(s.toString());
                  if (a.SPHardwareDataType && a.SPHardwareDataType.length > 0) {
                    let u = a.SPHardwareDataType[0];
                    ((r.os = u.platform_UUID.toLowerCase()), (r.hardware = u.serial_number));
                  }
                } catch {
                  zi.noop();
                }
              (t && t(r), e(r));
            }),
          rie &&
            uo(
              `echo -n "os: "; cat /var/lib/dbus/machine-id 2> /dev/null ||
cat /etc/machine-id 2> /dev/null; echo;
echo -n "hardware: "; cat /sys/class/dmi/id/product_uuid 2> /dev/null; echo;`,
              (s, a) => {
                let u = a.toString().split(`
`);
                if (
                  ((r.os = zi.getValue(u, "os").toLowerCase()),
                  (r.hardware = zi.getValue(u, "hardware").toLowerCase()),
                  !r.hardware)
                ) {
                  let c = H_.readFileSync("/proc/cpuinfo", { encoding: "utf8" }).toString().split(`
`),
                    m = zi.getValue(c, "serial");
                  r.hardware = m || "";
                }
                (t && t(r), e(r));
              },
            ),
          (Hkt || Vkt || Wkt) &&
            uo("sysctl -i kern.hostid kern.hostuuid", (o, s) => {
              let a = s.toString().split(`
`);
              ((r.hardware = zi.getValue(a, "kern.hostid", ":").toLowerCase()),
                (r.os = zi.getValue(a, "kern.hostuuid", ":").toLowerCase()),
                r.os.indexOf("unknown") >= 0 && (r.os = ""),
                r.hardware.indexOf("unknown") >= 0 && (r.hardware = ""),
                t && t(r),
                e(r));
            }),
          W_)
        ) {
          let o = "%windir%\\System32";
          (process.arch === "ia32" &&
            Object.prototype.hasOwnProperty.call(process.env, "PROCESSOR_ARCHITEW6432") &&
            (o = "%windir%\\sysnative\\cmd.exe /c %windir%\\System32"),
            zi.powerShell("Get-CimInstance Win32_ComputerSystemProduct | select UUID | fl").then((s) => {
              let a = s.split(`\r
`);
              ((r.hardware = zi.getValue(a, "uuid", ":").toLowerCase()),
                uo(
                  `${o}\\reg query "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography" /v MachineGuid`,
                  zi.execOptsWin,
                  (u, c) => {
                    ((n = c
                      .toString()
                      .split(
                        `
\r`,
                      )[0]
                      .split("REG_SZ")),
                      (r.os = n.length > 1 ? n[1].replace(/\r+|\n+|\s+/gi, "").toLowerCase() : ""),
                      t && t(r),
                      e(r));
                  },
                ));
            }));
        }
      });
    });
  }
  nie.uuid = jun;
});