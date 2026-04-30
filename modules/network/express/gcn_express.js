/**
 * @module gcn
 * @category network/express
 * @label express
 * @position 713 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gcn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gcn = T((sH) => {
  "use strict";
  var Br = Ff(),
    dcn = Ae("fs"),
    Nb = Ae("child_process").exec,
    CL = Ae("child_process").execSync,
    its = Br.promisifySave(Ae("child_process").exec),
    wL = process.platform,
    Y_ = wL === "linux" || wL === "android",
    SL = wL === "darwin",
    die = wL === "win32",
    K_ = wL === "freebsd",
    J_ = wL === "openbsd",
    X_ = wL === "netbsd",
    fie = wL === "sunos",
    $u = {},
    Co = {};
  function ots(t, e) {
    Br.isFunction(t) && ((e = t), (t = ""));
    let r = [],
      n = [];
    function o(c) {
      if (!c.startsWith("/")) return "NFS";
      let m = c.split("/"),
        d = m[m.length - 1],
        f = r.filter((p) => p.indexOf(d) >= 0);
      return f.length === 1 && f[0].indexOf("APFS") >= 0 ? "APFS" : "HFS";
    }
    function s(c) {
      let m = [
          "rootfs",
          "unionfs",
          "squashfs",
          "cramfs",
          "initrd",
          "initramfs",
          "devtmpfs",
          "tmpfs",
          "udev",
          "devfs",
          "specfs",
          "type",
          "appimaged",
        ],
        d = !1;
      return (
        m.forEach((f) => {
          c.toLowerCase().indexOf(f) >= 0 && (d = !0);
        }),
        d
      );
    }
    function a(c) {
      let m = c.toString().split(`
`);
      if ((m.shift(), c.toString().toLowerCase().indexOf("filesystem"))) {
        let d = 0;
        for (let f = 0; f < m.length; f++) m[f] && m[f].toLowerCase().startsWith("filesystem") && (d = f);
        for (let f = 0; f < d; f++) m.shift();
      }
      return m;
    }
    function u(c) {
      let m = [];
      return (
        c.forEach((d) => {
          if (
            d !== "" &&
            ((d = d.replace(/ +/g, " ").split(" ")),
            d &&
              (d[0].startsWith("/") ||
                (d[6] && d[6] === "/") ||
                d[0].indexOf("/") > 0 ||
                d[0].indexOf(":") === 1 ||
                (!SL && !s(d[1]))))
          ) {
            let f = d[0],
              p = Y_ || K_ || J_ || X_ ? d[1] : o(d[0]),
              h = parseInt(Y_ || K_ || J_ || X_ ? d[2] : d[1], 10) * 1024,
              g = parseInt(Y_ || K_ || J_ || X_ ? d[3] : d[2], 10) * 1024,
              b = parseInt(Y_ || K_ || J_ || X_ ? d[4] : d[3], 10) * 1024,
              A = parseFloat((100 * (g / (g + b))).toFixed(2)),
              y = n && Object.keys(n).length > 0 ? n[f] || !1 : null;
            d.splice(0, Y_ || K_ || J_ || X_ ? 6 : 5);
            let E = d.join(" ");
            m.find((v) => v.fs === f && v.type === p && v.mount === E) ||
              m.push({ fs: f, type: p, size: h, used: g, available: b, use: A, mount: E, rw: y });
          }
        }),
        m
      );
    }
    return new Promise((c) => {
      process.nextTick(() => {
        let m = [];
        if (Y_ || K_ || J_ || X_ || SL) {
          let d = "";
          if (((r = []), (n = {}), SL)) {
            d = "df -kP";
            try {
              ((r = CL("diskutil list")
                .toString()
                .split(
                  `
`,
                )
                .filter((f) => !f.startsWith("/") && f.indexOf(":") > 0)),
                CL("mount")
                  .toString()
                  .split(
                    `
`,
                  )
                  .filter((f) => f.startsWith("/"))
                  .forEach((f) => {
                    n[f.split(" ")[0]] = f.toLowerCase().indexOf("read-only") === -1;
                  }));
            } catch {
              Br.noop();
            }
          }
          if (Y_)
            try {
              ((d = "export LC_ALL=C; df -kPTx squashfs; unset LC_ALL"),
                CL("cat /proc/mounts 2>/dev/null", Br.execOptsLinux)
                  .toString()
                  .split(
                    `
`,
                  )
                  .filter((f) => f.startsWith("/"))
                  .forEach((f) => {
                    ((n[f.split(" ")[0]] = n[f.split(" ")[0]] || !1),
                      f.toLowerCase().indexOf("/snap/") === -1 &&
                        (n[f.split(" ")[0]] =
                          f.toLowerCase().indexOf("rw,") >= 0 || f.toLowerCase().indexOf(" rw ") >= 0));
                  }));
            } catch {
              Br.noop();
            }
          if (K_ || J_ || X_)
            try {
              ((d = "df -kPT"),
                CL("mount")
                  .toString()
                  .split(
                    `
`,
                  )
                  .forEach((f) => {
                    n[f.split(" ")[0]] = f.toLowerCase().indexOf("read-only") === -1;
                  }));
            } catch {
              Br.noop();
            }
          Nb(d, { maxBuffer: 1024 * 1024 }, (f, p) => {
            let h = a(p);
            ((m = u(h)),
              t &&
                (m = m.filter(
                  (g) =>
                    g.fs.toLowerCase().indexOf(t.toLowerCase()) >= 0 ||
                    g.mount.toLowerCase().indexOf(t.toLowerCase()) >= 0,
                )),
              (!f || m.length) && p.toString().trim() !== ""
                ? (e && e(m), c(m))
                : Nb("df -kPT 2>/dev/null", { maxBuffer: 1024 * 1024 }, (g, b) => {
                    let A = a(b);
                    ((m = u(A)), e && e(m), c(m));
                  }));
          });
        }
        if ((fie && (e && e(m), c(m)), die))
          try {
            let d = t ? Br.sanitizeShellString(t, !0) : "",
              f = `Get-WmiObject Win32_logicaldisk | select Access,Caption,FileSystem,FreeSpace,Size ${d ? "| where -property Caption -eq " + d : ""} | fl`;
            Br.powerShell(f).then((p, h) => {
              (h ||
                p
                  .toString()
                  .split(/\n\s*\n/)
                  .forEach((b) => {
                    let A = b.split(`\r
`),
                      y = Br.toInt(Br.getValue(A, "size", ":")),
                      E = Br.toInt(Br.getValue(A, "freespace", ":")),
                      v = Br.getValue(A, "caption", ":"),
                      C = Br.getValue(A, "access", ":"),
                      x = C ? Br.toInt(C) !== 1 : null;
                    y &&
                      m.push({
                        fs: v,
                        type: Br.getValue(A, "filesystem", ":"),
                        size: y,
                        used: y - E,
                        available: E,
                        use: parseFloat(((100 * (y - E)) / y).toFixed(2)),
                        mount: v,
                        rw: x,
                      });
                  }),
                e && e(m),
                c(m));
            });
          } catch {
            (e && e(m), c(m));
          }
      });
    });
  }
  sH.fsSize = ots;
  function sts(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = { max: null, allocated: null, available: null };
        ((K_ || J_ || X_ || SL) &&
          Nb("sysctl -i kern.maxfiles kern.num_files kern.open_files", { maxBuffer: 1024 * 1024 }, (o, s) => {
            if (!o) {
              let a = s.toString().split(`
`);
              ((r.max = parseInt(Br.getValue(a, "kern.maxfiles", ":"), 10)),
                (r.allocated =
                  parseInt(Br.getValue(a, "kern.num_files", ":"), 10) ||
                  parseInt(Br.getValue(a, "kern.open_files", ":"), 10)),
                (r.available = r.max - r.allocated));
            }
            (t && t(r), e(r));
          }),
          Y_ &&
            dcn.readFile("/proc/sys/fs/file-nr", (n, o) => {
              if (n)
                dcn.readFile("/proc/sys/fs/file-max", (s, a) => {
                  if (!s) {
                    let u = a.toString().split(`
`);
                    u[0] && (r.max = parseInt(u[0], 10));
                  }
                  (t && t(r), e(r));
                });
              else {
                let s = o.toString().split(`
`);
                if (s[0]) {
                  let a = s[0].replace(/\s+/g, " ").split(" ");
                  a.length === 3 &&
                    ((r.allocated = parseInt(a[0], 10)),
                    (r.available = parseInt(a[1], 10)),
                    (r.max = parseInt(a[2], 10)),
                    r.available || (r.available = r.max - r.allocated));
                }
                (t && t(r), e(r));
              }
            }),
          fie && (t && t(null), e(null)),
          die && (t && t(null), e(null)));
      });
    });
  }
  sH.fsOpenFiles = sts;
  function ats(t) {
    return parseInt(t.substr(t.indexOf(" (") + 2, t.indexOf(" Bytes)") - 10), 10);
  }
  function uts(t) {
    let e = [],
      r = 0;
    return (
      t.forEach((n) => {
        if (n.length > 0)
          if (n[0] === "*") r++;
          else {
            let o = n.split(":");
            o.length > 1 &&
              (e[r] ||
                (e[r] = {
                  name: "",
                  identifier: "",
                  type: "disk",
                  fsType: "",
                  mount: "",
                  size: 0,
                  physical: "HDD",
                  uuid: "",
                  label: "",
                  model: "",
                  serial: "",
                  removable: !1,
                  protocol: "",
                  group: "",
                  device: "",
                }),
              (o[0] = o[0].trim().toUpperCase().replace(/ +/g, "")),
              (o[1] = o[1].trim()),
              o[0] === "DEVICEIDENTIFIER" && (e[r].identifier = o[1]),
              o[0] === "DEVICENODE" && (e[r].name = o[1]),
              o[0] === "VOLUMENAME" && o[1].indexOf("Not applicable") === -1 && (e[r].label = o[1]),
              o[0] === "PROTOCOL" && (e[r].protocol = o[1]),
              o[0] === "DISKSIZE" && (e[r].size = ats(o[1])),
              o[0] === "FILESYSTEMPERSONALITY" && (e[r].fsType = o[1]),
              o[0] === "MOUNTPOINT" && (e[r].mount = o[1]),
              o[0] === "VOLUMEUUID" && (e[r].uuid = o[1]),
              o[0] === "READ-ONLYMEDIA" && o[1] === "Yes" && (e[r].physical = "CD/DVD"),
              o[0] === "SOLIDSTATE" && o[1] === "Yes" && (e[r].physical = "SSD"),
              o[0] === "VIRTUAL" && (e[r].type = "virtual"),
              o[0] === "REMOVABLEMEDIA" && (e[r].removable = o[1] === "Removable"),
              o[0] === "PARTITIONTYPE" && (e[r].type = "part"),
              o[0] === "DEVICE/MEDIANAME" && (e[r].model = o[1]));
          }
      }),
      e
    );
  }
  function nOt(t) {
    let e = [];
    return (
      t
        .filter((r) => r !== "")
        .forEach((r) => {
          try {
            ((r = decodeURIComponent(r.replace(/\\x/g, "%"))), (r = r.replace(/\\/g, "\\\\")));
            let n = JSON.parse(r);
            e.push({
              name: Br.sanitizeShellString(n.name),
              type: n.type,
              fsType: n.fsType,
              mount: n.mountpoint,
              size: parseInt(n.size, 10),
              physical: n.type === "disk" ? (n.rota === "0" ? "SSD" : "HDD") : n.type === "rom" ? "CD/DVD" : "",
              uuid: n.uuid,
              label: n.label,
              model: (n.model || "").trim(),
              serial: n.serial,
              removable: n.rm === "1",
              protocol: n.tran,
              group: n.group || "",
            });
          } catch {
            Br.noop();
          }
        }),
      (e = Br.unique(e)),
      (e = Br.sortByKey(e, ["type", "name"])),
      e
    );
  }
  function cts(t) {
    let e = Br.getValue(t, "md_level", "="),
      r = Br.getValue(t, "md_name", "="),
      n = Br.getValue(t, "md_uuid", "="),
      o = [];
    return (
      t.forEach((s) => {
        s.toLowerCase().startsWith("md_device_dev") &&
          s.toLowerCase().indexOf("/dev/") > 0 &&
          o.push(s.split("/dev/")[1]);
      }),
      { raid: e, label: r, uuid: n, members: o }
    );
  }
  function fcn(t) {
    let e = t;
    try {
      t.forEach((r) => {
        if (r.type.startsWith("raid")) {
          let n = CL(`mdadm --export --detail /dev/${r.name}`, Br.execOptsLinux).toString().split(`
`),
            o = cts(n);
          ((r.label = o.label),
            (r.uuid = o.uuid),
            o &&
              o.members &&
              o.members.length &&
              o.raid === r.type &&
              (e = e.map(
                (s) => (s.fsType === "linux_raid_member" && o.members.indexOf(s.name) >= 0 && (s.group = r.name), s),
              )));
        }
      });
    } catch {
      Br.noop();
    }
    return e;
  }
  function lts(t) {
    let e = [];
    return (
      t.forEach((r) => {
        r.type.startsWith("disk") && e.push(r.name);
      }),
      e
    );
  }
  function mts(t) {
    let e = t;
    try {
      let r = lts(t);
      e = e.map(
        (n) => (
          (n.type.startsWith("part") || n.type.startsWith("disk")) &&
            r.forEach((o) => {
              n.name.startsWith(o) && (n.device = "/dev/" + o);
            }),
          n
        ),
      );
    } catch {
      Br.noop();
    }
    return e;
  }
  function dts(t) {
    let e = [];
    return (
      t.forEach((r) => {
        if (
          (r.type.startsWith("disk") && e.push({ name: r.name, model: r.model, device: r.name }),
          r.type.startsWith("virtual"))
        ) {
          let n = "";
          (e.forEach((o) => {
            o.model === r.model && (n = o.device);
          }),
            n && e.push({ name: r.name, model: r.model, device: n }));
        }
      }),
      e
    );
  }
  function fts(t) {
    let e = t;
    try {
      let r = dts(t);
      e = e.map(
        (n) => (
          (n.type.startsWith("part") || n.type.startsWith("disk") || n.type.startsWith("virtual")) &&
            r.forEach((o) => {
              n.name.startsWith(o.name) && (n.device = o.device);
            }),
          n
        ),
      );
    } catch {
      Br.noop();
    }
    return e;
  }
  function pts(t) {
    let e = [];
    return (
      t.forEach((r) => {
        let n = r.split(`\r
`),
          o = Br.getValue(n, "DeviceID", ":"),
          s = r.split("@{DeviceID=");
        s.length > 1 &&
          ((s = s.slice(1)),
          s.forEach((a) => {
            e.push({ name: a.split(";")[0].toUpperCase(), device: o });
          }));
      }),
      e
    );
  }
  function hts(t, e) {
    let r = pts(e);
    return (
      t.map((n) => {
        let o = r.filter((s) => s.name === n.name.toUpperCase());
        return (o.length > 0 && (n.device = o[0].device), n);
      }),
      t
    );
  }
  function iOt(t) {
    return t
      .toString()
      .replace(/NAME=/g, '{"name":')
      .replace(/FSTYPE=/g, ',"fsType":')
      .replace(/TYPE=/g, ',"type":')
      .replace(/SIZE=/g, ',"size":')
      .replace(/MOUNTPOINT=/g, ',"mountpoint":')
      .replace(/UUID=/g, ',"uuid":')
      .replace(/ROTA=/g, ',"rota":')
      .replace(/RO=/g, ',"ro":')
      .replace(/RM=/g, ',"rm":')
      .replace(/TRAN=/g, ',"tran":')
      .replace(/SERIAL=/g, ',"serial":')
      .replace(/LABEL=/g, ',"label":')
      .replace(/MODEL=/g, ',"model":')
      .replace(/OWNER=/g, ',"owner":')
      .replace(/GROUP=/g, ',"group":')
      .replace(
        /\n/g,
        `}
`,
      );
  }
  function gts(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        if (
          (Y_ &&
            Nb(
              "lsblk -bPo NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT,UUID,ROTA,RO,RM,TRAN,SERIAL,LABEL,MODEL,OWNER 2>/dev/null",
              { maxBuffer: 1048576 },
              (o, s) => {
                if (o)
                  Nb(
                    "lsblk -bPo NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT,UUID,ROTA,RO,RM,LABEL,MODEL,OWNER 2>/dev/null",
                    { maxBuffer: 1048576 },
                    (u, c) => {
                      if (!u) {
                        let m = iOt(c).split(`
`);
                        ((r = nOt(m)), (r = fcn(r)));
                      }
                      (t && t(r), e(r));
                    },
                  ).on("error", () => {
                    (t && t(r), e(r));
                  });
                else {
                  let a = iOt(s).split(`
`);
                  ((r = nOt(a)), (r = fcn(r)), (r = mts(r)), t && t(r), e(r));
                }
              },
            ).on("error", () => {
              (t && t(r), e(r));
            }),
          SL &&
            Nb("diskutil info -all", { maxBuffer: 1048576 }, (o, s) => {
              if (!o) {
                let a = s.toString().split(`
`);
                ((r = uts(a)), (r = fts(r)));
              }
              (t && t(r), e(r));
            }).on("error", () => {
              (t && t(r), e(r));
            }),
          fie && (t && t(r), e(r)),
          die)
        ) {
          let n = ["Unknown", "NoRoot", "Removable", "Local", "Network", "CD/DVD", "RAM"];
          try {
            let o = [];
            (o.push(
              Br.powerShell(
                "Get-CimInstance -ClassName Win32_LogicalDisk | select Caption,DriveType,Name,FileSystem,Size,VolumeSerialNumber,VolumeName | fl",
              ),
            ),
              o.push(
                Br.powerShell(
                  "Get-WmiObject -Class Win32_diskdrive | Select-Object -Property PNPDeviceId,DeviceID, Model, Size, @{L='Partitions'; E={$_.GetRelated('Win32_DiskPartition').GetRelated('Win32_LogicalDisk') | Select-Object -Property DeviceID, VolumeName, Size, FreeSpace}} | fl",
                ),
              ),
              Br.promiseAll(o).then((s) => {
                let a = s.results[0].toString().split(/\n\s*\n/),
                  u = s.results[1].toString().split(/\n\s*\n/);
                (a.forEach((c) => {
                  let m = c.split(`\r
`),
                    d = Br.getValue(m, "drivetype", ":");
                  d &&
                    r.push({
                      name: Br.getValue(m, "name", ":"),
                      identifier: Br.getValue(m, "caption", ":"),
                      type: "disk",
                      fsType: Br.getValue(m, "filesystem", ":").toLowerCase(),
                      mount: Br.getValue(m, "caption", ":"),
                      size: Br.getValue(m, "size", ":"),
                      physical: d >= 0 && d <= 6 ? n[d] : n[0],
                      uuid: Br.getValue(m, "volumeserialnumber", ":"),
                      label: Br.getValue(m, "volumename", ":"),
                      model: "",
                      serial: Br.getValue(m, "volumeserialnumber", ":"),
                      removable: d === "2",
                      protocol: "",
                      group: "",
                      device: "",
                    });
                }),
                  (r = hts(r, u)),
                  t && t(r),
                  e(r));
              }));
          } catch {
            (t && t(r), e(r));
          }
        }
        (K_ || J_ || X_) && (t && t(null), e(null));
      });
    });
  }
  sH.blockDevices = gts;
  function pcn(t, e) {
    let r = { rx: 0, wx: 0, tx: 0, rx_sec: null, wx_sec: null, tx_sec: null, ms: 0 };
    return (
      $u && $u.ms
        ? ((r.rx = t),
          (r.wx = e),
          (r.tx = r.rx + r.wx),
          (r.ms = Date.now() - $u.ms),
          (r.rx_sec = (r.rx - $u.bytes_read) / (r.ms / 1e3)),
          (r.wx_sec = (r.wx - $u.bytes_write) / (r.ms / 1e3)),
          (r.tx_sec = r.rx_sec + r.wx_sec),
          ($u.rx_sec = r.rx_sec),
          ($u.wx_sec = r.wx_sec),
          ($u.tx_sec = r.tx_sec),
          ($u.bytes_read = r.rx),
          ($u.bytes_write = r.wx),
          ($u.bytes_overall = r.rx + r.wx),
          ($u.ms = Date.now()),
          ($u.last_ms = r.ms))
        : ((r.rx = t),
          (r.wx = e),
          (r.tx = r.rx + r.wx),
          ($u.rx_sec = null),
          ($u.wx_sec = null),
          ($u.tx_sec = null),
          ($u.bytes_read = r.rx),
          ($u.bytes_write = r.wx),
          ($u.bytes_overall = r.rx + r.wx),
          ($u.ms = Date.now()),
          ($u.last_ms = 0)),
      r
    );
  }
  function bts(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        if (die || K_ || J_ || X_ || fie) return e(null);
        let r = { rx: 0, wx: 0, tx: 0, rx_sec: null, wx_sec: null, tx_sec: null, ms: 0 },
          n = 0,
          o = 0;
        ($u && !$u.ms) || ($u && $u.ms && Date.now() - $u.ms >= 500)
          ? (Y_ &&
              Nb("lsblk -r 2>/dev/null | grep /", { maxBuffer: 1048576 }, (a, u) => {
                if (a) (t && t(r), e(r));
                else {
                  let c = u.toString().split(`
`),
                    m = [];
                  c.forEach((p) => {
                    p !== "" && ((p = p.trim().split(" ")), m.indexOf(p[0]) === -1 && m.push(p[0]));
                  });
                  let d = m.join("|");
                  Nb('cat /proc/diskstats | egrep "' + d + '"', { maxBuffer: 1024 * 1024 }, (p, h) => {
                    (p ||
                      (h
                        .toString()
                        .split(
                          `
`,
                        )
                        .forEach((b) => {
                          ((b = b.trim()),
                            b !== "" &&
                              ((b = b.replace(/ +/g, " ").split(" ")),
                              (n += parseInt(b[5], 10) * 512),
                              (o += parseInt(b[9], 10) * 512)));
                        }),
                      (r = pcn(n, o))),
                      t && t(r),
                      e(r));
                  }).on("error", () => {
                    (t && t(r), e(r));
                  });
                }
              }).on("error", () => {
                (t && t(r), e(r));
              }),
            SL &&
              Nb(
                `ioreg -c IOBlockStorageDriver -k Statistics -r -w0 | sed -n "/IOBlockStorageDriver/,/Statistics/p" | grep "Statistics" | tr -cd "01234567890,
"`,
                { maxBuffer: 1048576 },
                (a, u) => {
                  (a ||
                    (u
                      .toString()
                      .split(
                        `
`,
                      )
                      .forEach((m) => {
                        ((m = m.trim()),
                          m !== "" && ((m = m.split(",")), (n += parseInt(m[2], 10)), (o += parseInt(m[9], 10))));
                      }),
                    (r = pcn(n, o))),
                    t && t(r),
                    e(r));
                },
              ).on("error", () => {
                (t && t(r), e(r));
              }))
          : ((r.ms = $u.last_ms),
            (r.rx = $u.bytes_read),
            (r.wx = $u.bytes_write),
            (r.tx = $u.bytes_read + $u.bytes_write),
            (r.rx_sec = $u.rx_sec),
            (r.wx_sec = $u.wx_sec),
            (r.tx_sec = $u.tx_sec),
            t && t(r),
            e(r));
      });
    });
  }
  sH.fsStats = bts;
  function hcn(t, e, r, n, o) {
    let s = {
      rIO: 0,
      wIO: 0,
      tIO: 0,
      rIO_sec: null,
      wIO_sec: null,
      tIO_sec: null,
      rWaitTime: 0,
      wWaitTime: 0,
      tWaitTime: 0,
      rWaitPercent: null,
      wWaitPercent: null,
      tWaitPercent: null,
      ms: 0,
    };
    return (
      Co && Co.ms
        ? ((s.rIO = t),
          (s.wIO = e),
          (s.tIO = t + e),
          (s.ms = Date.now() - Co.ms),
          (s.rIO_sec = (s.rIO - Co.rIO) / (s.ms / 1e3)),
          (s.wIO_sec = (s.wIO - Co.wIO) / (s.ms / 1e3)),
          (s.tIO_sec = s.rIO_sec + s.wIO_sec),
          (s.rWaitTime = r),
          (s.wWaitTime = n),
          (s.tWaitTime = o),
          (s.rWaitPercent = ((s.rWaitTime - Co.rWaitTime) * 100) / s.ms),
          (s.wWaitPercent = ((s.wWaitTime - Co.wWaitTime) * 100) / s.ms),
          (s.tWaitPercent = ((s.tWaitTime - Co.tWaitTime) * 100) / s.ms),
          (Co.rIO = t),
          (Co.wIO = e),
          (Co.rIO_sec = s.rIO_sec),
          (Co.wIO_sec = s.wIO_sec),
          (Co.tIO_sec = s.tIO_sec),
          (Co.rWaitTime = r),
          (Co.wWaitTime = n),
          (Co.tWaitTime = o),
          (Co.rWaitPercent = s.rWaitPercent),
          (Co.wWaitPercent = s.wWaitPercent),
          (Co.tWaitPercent = s.tWaitPercent),
          (Co.last_ms = s.ms),
          (Co.ms = Date.now()))
        : ((s.rIO = t),
          (s.wIO = e),
          (s.tIO = t + e),
          (s.rWaitTime = r),
          (s.wWaitTime = n),
          (s.tWaitTime = o),
          (Co.rIO = t),
          (Co.wIO = e),
          (Co.rIO_sec = null),
          (Co.wIO_sec = null),
          (Co.tIO_sec = null),
          (Co.rWaitTime = r),
          (Co.wWaitTime = n),
          (Co.tWaitTime = o),
          (Co.rWaitPercent = null),
          (Co.wWaitPercent = null),
          (Co.tWaitPercent = null),
          (Co.last_ms = 0),
          (Co.ms = Date.now())),
      s
    );
  }
  function Ats(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        if (die || fie) return e(null);
        let r = {
            rIO: 0,
            wIO: 0,
            tIO: 0,
            rIO_sec: null,
            wIO_sec: null,
            tIO_sec: null,
            rWaitTime: 0,
            wWaitTime: 0,
            tWaitTime: 0,
            rWaitPercent: null,
            wWaitPercent: null,
            tWaitPercent: null,
            ms: 0,
          },
          n = 0,
          o = 0,
          s = 0,
          a = 0,
          u = 0;
        (Co && !Co.ms) || (Co && Co.ms && Date.now() - Co.ms >= 500)
          ? ((Y_ || K_ || J_ || X_) &&
              Nb(
                'for mount in `lsblk 2>/dev/null | grep " disk " | sed "s/[\u2502\u2514\u2500\u251C]//g" | awk \'{$1=$1};1\' | cut -d " " -f 1 | sort -u`; do cat /sys/block/$mount/stat | sed -r "s/ +/;/g" | sed -r "s/^;//"; done',
                { maxBuffer: 1024 * 1024 },
                (m, d) => {
                  m
                    ? (t && t(r), e(r))
                    : (d
                        .split(
                          `
`,
                        )
                        .forEach((p) => {
                          if (!p) return;
                          let h = p.split(";");
                          ((n += parseInt(h[0], 10)),
                            (o += parseInt(h[4], 10)),
                            (s += parseInt(h[3], 10)),
                            (a += parseInt(h[7], 10)),
                            (u += parseInt(h[10], 10)));
                        }),
                      (r = hcn(n, o, s, a, u)),
                      t && t(r),
                      e(r));
                },
              ),
            SL &&
              Nb(
                `ioreg -c IOBlockStorageDriver -k Statistics -r -w0 | sed -n "/IOBlockStorageDriver/,/Statistics/p" | grep "Statistics" | tr -cd "01234567890,
"`,
                { maxBuffer: 1024 * 1024 },
                (c, m) => {
                  (c ||
                    (m
                      .toString()
                      .split(
                        `
`,
                      )
                      .forEach((f) => {
                        ((f = f.trim()),
                          f !== "" && ((f = f.split(",")), (n += parseInt(f[10], 10)), (o += parseInt(f[0], 10))));
                      }),
                    (r = hcn(n, o, s, a, u))),
                    t && t(r),
                    e(r));
                },
              ))
          : ((r.rIO = Co.rIO),
            (r.wIO = Co.wIO),
            (r.tIO = Co.rIO + Co.wIO),
            (r.ms = Co.last_ms),
            (r.rIO_sec = Co.rIO_sec),
            (r.wIO_sec = Co.wIO_sec),
            (r.tIO_sec = Co.tIO_sec),
            (r.rWaitTime = Co.rWaitTime),
            (r.wWaitTime = Co.wWaitTime),
            (r.tWaitTime = Co.tWaitTime),
            (r.rWaitPercent = Co.rWaitPercent),
            (r.wWaitPercent = Co.wWaitPercent),
            (r.tWaitPercent = Co.tWaitPercent),
            t && t(r),
            e(r));
      });
    });
  }
  sH.disksIO = Ats;
  function yts(t) {
    function e(r) {
      let n = [
          { pattern: "WESTERN.*", manufacturer: "Western Digital" },
          { pattern: "^WDC.*", manufacturer: "Western Digital" },
          { pattern: "WD.*", manufacturer: "Western Digital" },
          { pattern: "TOSHIBA.*", manufacturer: "Toshiba" },
          { pattern: "HITACHI.*", manufacturer: "Hitachi" },
          { pattern: "^IC.*", manufacturer: "Hitachi" },
          { pattern: "^HTS.*", manufacturer: "Hitachi" },
          { pattern: "SANDISK.*", manufacturer: "SanDisk" },
          { pattern: "KINGSTON.*", manufacturer: "Kingston Technology" },
          { pattern: "^SONY.*", manufacturer: "Sony" },
          { pattern: "TRANSCEND.*", manufacturer: "Transcend" },
          { pattern: "SAMSUNG.*", manufacturer: "Samsung" },
          { pattern: "^ST(?!I\\ ).*", manufacturer: "Seagate" },
          { pattern: "^STI\\ .*", manufacturer: "SimpleTech" },
          { pattern: "^D...-.*", manufacturer: "IBM" },
          { pattern: "^IBM.*", manufacturer: "IBM" },
          { pattern: "^FUJITSU.*", manufacturer: "Fujitsu" },
          { pattern: "^MP.*", manufacturer: "Fujitsu" },
          { pattern: "^MK.*", manufacturer: "Toshiba" },
          { pattern: "MAXTO.*", manufacturer: "Maxtor" },
          { pattern: "PIONEER.*", manufacturer: "Pioneer" },
          { pattern: "PHILIPS.*", manufacturer: "Philips" },
          { pattern: "QUANTUM.*", manufacturer: "Quantum Technology" },
          { pattern: "FIREBALL.*", manufacturer: "Quantum Technology" },
          { pattern: "^VBOX.*", manufacturer: "VirtualBox" },
          { pattern: "CORSAIR.*", manufacturer: "Corsair Components" },
          { pattern: "CRUCIAL.*", manufacturer: "Crucial" },
          { pattern: "ECM.*", manufacturer: "ECM" },
          { pattern: "INTEL.*", manufacturer: "INTEL" },
          { pattern: "EVO.*", manufacturer: "Samsung" },
          { pattern: "APPLE.*", manufacturer: "Apple" },
        ],
        o = "";
      return (
        r &&
          ((r = r.toUpperCase()),
          n.forEach((s) => {
            RegExp(s.pattern).test(r) && (o = s.manufacturer);
          })),
        o
      );
    }
    return new Promise((r) => {
      process.nextTick(() => {
        let n = (a) => {
            for (let u = 0; u < a.length; u++) delete a[u].BSDName;
            (t && t(a), r(a));
          },
          o = [],
          s = "";
        if (Y_) {
          let a = "";
          Nb("export LC_ALL=C; lsblk -ablJO 2>/dev/null; unset LC_ALL", { maxBuffer: 1024 * 1024 }, (u, c) => {
            if (!u)
              try {
                let m = c.toString().trim(),
                  d = [];
                try {
                  let f = JSON.parse(m);
                  f &&
                    {}.hasOwnProperty.call(f, "blockdevices") &&
                    (d = f.blockdevices.filter(
                      (p) =>
                        p.type === "disk" &&
                        p.size > 0 &&
                        (p.model !== null ||
                          (p.mountpoint === null &&
                            p.label === null &&
                            p.fstype === null &&
                            p.parttype === null &&
                            p.path &&
                            p.path.indexOf("/ram") !== 0 &&
                            p.path.indexOf("/loop") !== 0 &&
                            p["disc-max"] &&
                            p["disc-max"] !== 0)),
                    ));
                } catch {
                  try {
                    let f = CL(
                        "export LC_ALL=C; lsblk -bPo NAME,TYPE,SIZE,FSTYPE,MOUNTPOINT,UUID,ROTA,RO,RM,LABEL,MODEL,OWNER,GROUP 2>/dev/null; unset LC_ALL",
                        Br.execOptsLinux,
                      ).toString(),
                      p = iOt(f).split(`
`);
                    d = nOt(p).filter(
                      (g) =>
                        g.type === "disk" &&
                        g.size > 0 &&
                        ((g.model !== null && g.model !== "") || (g.mount === "" && g.label === "" && g.fsType === "")),
                    );
                  } catch {
                    Br.noop();
                  }
                }
                d.forEach((f) => {
                  let p = "",
                    h = "/dev/" + f.name,
                    g = f.name;
                  try {
                    p = CL("cat /sys/block/" + g + "/queue/rotational 2>/dev/null", Br.execOptsLinux).toString().split(`
`)[0];
                  } catch {
                    Br.noop();
                  }
                  let b = f.tran ? f.tran.toUpperCase().trim() : "";
                  (b === "NVME" && ((p = "2"), (b = "PCIe")),
                    o.push({
                      device: h,
                      type:
                        p === "0"
                          ? "SSD"
                          : p === "1"
                            ? "HD"
                            : p === "2"
                              ? "NVMe"
                              : f.model && f.model.indexOf("SSD") > -1
                                ? "SSD"
                                : f.model && f.model.indexOf("NVM") > -1
                                  ? "NVMe"
                                  : "HD",
                      name: f.model || "",
                      vendor: e(f.model) || (f.vendor ? f.vendor.trim() : ""),
                      size: f.size || 0,
                      bytesPerSector: null,
                      totalCylinders: null,
                      totalHeads: null,
                      totalSectors: null,
                      totalTracks: null,
                      tracksPerCylinder: null,
                      sectorsPerTrack: null,
                      firmwareRevision: f.rev ? f.rev.trim() : "",
                      serialNum: f.serial ? f.serial.trim() : "",
                      interfaceType: b,
                      smartStatus: "unknown",
                      temperature: null,
                      BSDName: h,
                    }),
                    (s += `printf "
${h}|"; smartctl -H ${h} | grep overall;`),
                    (a += `${a ? 'printf ",";' : ""}smartctl -a -j ${h};`));
                });
              } catch {
                Br.noop();
              }
            a
              ? Nb(a, { maxBuffer: 1024 * 1024 }, (m, d) => {
                  try {
                    (JSON.parse(`[${d}]`).forEach((p) => {
                      let h = p.smartctl.argv[p.smartctl.argv.length - 1];
                      for (let g = 0; g < o.length; g++)
                        o[g].BSDName === h &&
                          ((o[g].smartStatus = p.smart_status.passed
                            ? "Ok"
                            : p.smart_status.passed === !1
                              ? "Predicted Failure"
                              : "unknown"),
                          p.temperature && p.temperature.current && (o[g].temperature = p.temperature.current),
                          (o[g].smartData = p));
                    }),
                      n(o));
                  } catch {
                    s
                      ? ((s =
                          s +
                          `printf "
"`),
                        Nb(s, { maxBuffer: 1024 * 1024 }, (f, p) => {
                          (p
                            .toString()
                            .split(
                              `
`,
                            )
                            .forEach((g) => {
                              if (g) {
                                let b = g.split("|");
                                if (b.length === 2) {
                                  let A = b[0];
                                  b[1] = b[1].trim();
                                  let y = b[1].split(":");
                                  if (y.length === 2) {
                                    y[1] = y[1].trim();
                                    let E = y[1].toLowerCase();
                                    for (let v = 0; v < o.length; v++)
                                      o[v].BSDName === A &&
                                        (o[v].smartStatus =
                                          E === "passed" ? "Ok" : E === "failed!" ? "Predicted Failure" : "unknown");
                                  }
                                }
                              }
                            }),
                            n(o));
                        }))
                      : n(o);
                  }
                })
              : n(o);
          });
        }
        if (
          ((K_ || J_ || X_) && (t && t(o), r(o)),
          fie && (t && t(o), r(o)),
          SL &&
            Nb(
              "system_profiler SPSerialATADataType SPNVMeDataType SPUSBDataType",
              { maxBuffer: 1024 * 1024 },
              (a, u) => {
                if (a) n(o);
                else {
                  let c = u.toString().split(`
`),
                    m = [],
                    d = [],
                    f = [],
                    p = "SATA";
                  c.forEach((h) => {
                    h === "NVMExpress:"
                      ? (p = "NVMe")
                      : h === "USB:"
                        ? (p = "USB")
                        : h === "SATA/SATA Express:"
                          ? (p = "SATA")
                          : p === "SATA"
                            ? m.push(h)
                            : p === "NVMe"
                              ? d.push(h)
                              : p === "USB" && f.push(h);
                  });
                  try {
                    let h = m
                      .join(
                        `
`,
                      )
                      .split(" Physical Interconnect: ");
                    (h.shift(),
                      h.forEach((g) => {
                        g = "InterfaceType: " + g;
                        let b = g.split(`
`),
                          A = Br.getValue(b, "Medium Type", ":", !0).trim(),
                          y = Br.getValue(b, "capacity", ":", !0).trim(),
                          E = Br.getValue(b, "BSD Name", ":", !0).trim();
                        if (y) {
                          let v = 0;
                          if (
                            (y.indexOf("(") >= 0 &&
                              (v = parseInt(
                                y
                                  .match(/\(([^)]+)\)/)[1]
                                  .replace(/\./g, "")
                                  .replace(/,/g, "")
                                  .replace(/\s/g, ""),
                                10,
                              )),
                            v || (v = parseInt(y, 10)),
                            v)
                          ) {
                            let C = Br.getValue(b, "S.M.A.R.T. status", ":", !0).trim().toLowerCase();
                            (o.push({
                              device: E,
                              type: A.startsWith("Solid") ? "SSD" : "HD",
                              name: Br.getValue(b, "Model", ":", !0).trim(),
                              vendor:
                                e(Br.getValue(b, "Model", ":", !0).trim()) || Br.getValue(b, "Manufacturer", ":", !0),
                              size: v,
                              bytesPerSector: null,
                              totalCylinders: null,
                              totalHeads: null,
                              totalSectors: null,
                              totalTracks: null,
                              tracksPerCylinder: null,
                              sectorsPerTrack: null,
                              firmwareRevision: Br.getValue(b, "Revision", ":", !0).trim(),
                              serialNum: Br.getValue(b, "Serial Number", ":", !0).trim(),
                              interfaceType: Br.getValue(b, "InterfaceType", ":", !0).trim(),
                              smartStatus: C === "verified" ? "OK" : C || "unknown",
                              temperature: null,
                              BSDName: E,
                            }),
                              (s =
                                s +
                                `printf "
` +
                                E +
                                '|"; diskutil info /dev/' +
                                E +
                                " | grep SMART;"));
                          }
                        }
                      }));
                  } catch {
                    Br.noop();
                  }
                  try {
                    let h = d.join(`
`).split(`

          Capacity:`);
                    (h.shift(),
                      h.forEach((g) => {
                        g = `!Capacity: ${g}`;
                        let b = g.split(`
`),
                          A = Br.getValue(b, "link width", ":", !0).trim(),
                          y = Br.getValue(b, "!capacity", ":", !0).trim(),
                          E = Br.getValue(b, "BSD Name", ":", !0).trim();
                        if (y) {
                          let v = 0;
                          if (
                            (y.indexOf("(") >= 0 &&
                              (v = parseInt(
                                y
                                  .match(/\(([^)]+)\)/)[1]
                                  .replace(/\./g, "")
                                  .replace(/,/g, "")
                                  .replace(/\s/g, ""),
                                10,
                              )),
                            v || (v = parseInt(y, 10)),
                            v)
                          ) {
                            let C = Br.getValue(b, "S.M.A.R.T. status", ":", !0).trim().toLowerCase();
                            (o.push({
                              device: E,
                              type: "NVMe",
                              name: Br.getValue(b, "Model", ":", !0).trim(),
                              vendor: e(Br.getValue(b, "Model", ":", !0).trim()),
                              size: v,
                              bytesPerSector: null,
                              totalCylinders: null,
                              totalHeads: null,
                              totalSectors: null,
                              totalTracks: null,
                              tracksPerCylinder: null,
                              sectorsPerTrack: null,
                              firmwareRevision: Br.getValue(b, "Revision", ":", !0).trim(),
                              serialNum: Br.getValue(b, "Serial Number", ":", !0).trim(),
                              interfaceType: ("PCIe " + A).trim(),
                              smartStatus: C === "verified" ? "OK" : C || "unknown",
                              temperature: null,
                              BSDName: E,
                            }),
                              (s = `${s}printf "
${E}|"; diskutil info /dev/${E} | grep SMART;`));
                          }
                        }
                      }));
                  } catch {
                    Br.noop();
                  }
                  try {
                    let h = f
                      .join(
                        `
`,
                      )
                      .replaceAll(
                        `Media:
 `,
                        "Model:",
                      ).split(`

          Product ID:`);
                    (h.shift(),
                      h.forEach((g) => {
                        let b = g.split(`
`),
                          A = Br.getValue(b, "Capacity", ":", !0).trim(),
                          y = Br.getValue(b, "BSD Name", ":", !0).trim();
                        if (A) {
                          let E = 0;
                          if (
                            (A.indexOf("(") >= 0 &&
                              (E = parseInt(
                                A.match(/\(([^)]+)\)/)[1]
                                  .replace(/\./g, "")
                                  .replace(/,/g, "")
                                  .replace(/\s/g, ""),
                                10,
                              )),
                            E || (E = parseInt(A, 10)),
                            E)
                          ) {
                            let v = Br.getValue(b, "S.M.A.R.T. status", ":", !0).trim().toLowerCase();
                            (o.push({
                              device: y,
                              type: "USB",
                              name: Br.getValue(b, "Model", ":", !0).trim().replaceAll(":", ""),
                              vendor: e(Br.getValue(b, "Model", ":", !0).trim()),
                              size: E,
                              bytesPerSector: null,
                              totalCylinders: null,
                              totalHeads: null,
                              totalSectors: null,
                              totalTracks: null,
                              tracksPerCylinder: null,
                              sectorsPerTrack: null,
                              firmwareRevision: Br.getValue(b, "Revision", ":", !0).trim(),
                              serialNum: Br.getValue(b, "Serial Number", ":", !0).trim(),
                              interfaceType: "USB",
                              smartStatus: v === "verified" ? "OK" : v || "unknown",
                              temperature: null,
                              BSDName: y,
                            }),
                              (s =
                                s +
                                `printf "
` +
                                y +
                                '|"; diskutil info /dev/' +
                                y +
                                " | grep SMART;"));
                          }
                        }
                      }));
                  } catch {
                    Br.noop();
                  }
                  s
                    ? ((s =
                        s +
                        `printf "
"`),
                      Nb(s, { maxBuffer: 1024 * 1024 }, (h, g) => {
                        (g
                          .toString()
                          .split(
                            `
`,
                          )
                          .forEach((A) => {
                            if (A) {
                              let y = A.split("|");
                              if (y.length === 2) {
                                let E = y[0];
                                y[1] = y[1].trim();
                                let v = y[1].split(":");
                                if (v.length === 2) {
                                  v[1] = v[1].trim();
                                  let C = v[1].toLowerCase();
                                  for (let x = 0; x < o.length; x++)
                                    o[x].BSDName === E &&
                                      (o[x].smartStatus =
                                        C === "not supported"
                                          ? "not supported"
                                          : C === "verified"
                                            ? "Ok"
                                            : C === "failing"
                                              ? "Predicted Failure"
                                              : "unknown");
                                }
                              }
                            }
                          }),
                          n(o));
                      }))
                    : n(o);
                }
              },
            ),
          die)
        )
          try {
            let a = [];
            if (
              (a.push(
                Br.powerShell(
                  "Get-CimInstance Win32_DiskDrive | select Caption,Size,Status,PNPDeviceId,DeviceId,BytesPerSector,TotalCylinders,TotalHeads,TotalSectors,TotalTracks,TracksPerCylinder,SectorsPerTrack,FirmwareRevision,SerialNumber,InterfaceType | fl",
                ),
              ),
              a.push(
                Br.powerShell("Get-PhysicalDisk | select BusType,MediaType,FriendlyName,Model,SerialNumber,Size | fl"),
              ),
              Br.smartMonToolsInstalled())
            )
              try {
                let u = JSON.parse(CL("smartctl --scan -j").toString());
                u &&
                  u.devices &&
                  u.devices.length > 0 &&
                  u.devices.forEach((c) => {
                    a.push(its(`smartctl -j -a ${c.name}`, Br.execOptsWin));
                  });
              } catch {
                Br.noop();
              }
            Br.promiseAll(a).then((u) => {
              let c = u.results[0].toString().split(/\n\s*\n/);
              (c.forEach((m) => {
                let d = m.split(`\r
`),
                  f = Br.getValue(d, "Size", ":").trim(),
                  p = Br.getValue(d, "Status", ":").trim().toLowerCase();
                f &&
                  o.push({
                    device: Br.getValue(d, "DeviceId", ":"),
                    type: m.indexOf("SSD") > -1 ? "SSD" : "HD",
                    name: Br.getValue(d, "Caption", ":"),
                    vendor: e(Br.getValue(d, "Caption", ":", !0).trim()),
                    size: parseInt(f, 10),
                    bytesPerSector: parseInt(Br.getValue(d, "BytesPerSector", ":"), 10),
                    totalCylinders: parseInt(Br.getValue(d, "TotalCylinders", ":"), 10),
                    totalHeads: parseInt(Br.getValue(d, "TotalHeads", ":"), 10),
                    totalSectors: parseInt(Br.getValue(d, "TotalSectors", ":"), 10),
                    totalTracks: parseInt(Br.getValue(d, "TotalTracks", ":"), 10),
                    tracksPerCylinder: parseInt(Br.getValue(d, "TracksPerCylinder", ":"), 10),
                    sectorsPerTrack: parseInt(Br.getValue(d, "SectorsPerTrack", ":"), 10),
                    firmwareRevision: Br.getValue(d, "FirmwareRevision", ":").trim(),
                    serialNum: Br.getValue(d, "SerialNumber", ":").trim(),
                    interfaceType: Br.getValue(d, "InterfaceType", ":").trim(),
                    smartStatus:
                      p === "ok"
                        ? "Ok"
                        : p === "degraded"
                          ? "Degraded"
                          : p === "pred fail"
                            ? "Predicted Failure"
                            : "Unknown",
                    temperature: null,
                  });
              }),
                (c = u.results[1].split(/\n\s*\n/)),
                c.forEach((m) => {
                  let d = m.split(`\r
`),
                    f = Br.getValue(d, "SerialNumber", ":").trim(),
                    p = Br.getValue(d, "FriendlyName", ":").trim().replace("Msft ", "Microsoft"),
                    h = Br.getValue(d, "Size", ":").trim(),
                    g = Br.getValue(d, "Model", ":").trim(),
                    b = Br.getValue(d, "BusType", ":").trim(),
                    A = Br.getValue(d, "MediaType", ":").trim();
                  if (
                    ((A === "3" || A === "HDD") && (A = "HD"),
                    A === "4" && (A = "SSD"),
                    A === "5" && (A = "SCM"),
                    A === "Unspecified" &&
                      (g.toLowerCase().indexOf("virtual") > -1 || g.toLowerCase().indexOf("vbox") > -1) &&
                      (A = "Virtual"),
                    h)
                  ) {
                    let y = Br.findObjectByKey(o, "serialNum", f);
                    ((y === -1 || f === "") && (y = Br.findObjectByKey(o, "name", p)),
                      y !== -1 && ((o[y].type = A), (o[y].interfaceType = b)));
                  }
                }),
                u.results.shift(),
                u.results.shift(),
                u.results.length &&
                  u.results.forEach((m) => {
                    try {
                      let d = JSON.parse(m);
                      if (d.serial_number) {
                        let f = d.serial_number,
                          p = Br.findObjectByKey(o, "serialNum", f);
                        p !== -1 &&
                          ((o[p].smartStatus =
                            d.smart_status && d.smart_status.passed
                              ? "Ok"
                              : d.smart_status && d.smart_status.passed === !1
                                ? "Predicted Failure"
                                : "unknown"),
                          d.temperature && d.temperature.current && (o[p].temperature = d.temperature.current),
                          (o[p].smartData = d));
                      }
                    } catch {
                      Br.noop();
                    }
                  }),
                t && t(o),
                r(o));
            });
          } catch {
            (t && t(o), r(o));
          }
      });
    });
  }
  sH.diskLayout = yts;
});