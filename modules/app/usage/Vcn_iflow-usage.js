/**
 * @module Vcn
 * @category app/usage
 * @label iflow-usage
 * @position 720 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vcn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Functions: Nrs, _Ot, r, Trs, Srs, krs, Hcn, EOt, Ors, xrs, Rrs, Drs, wrs, Irs
 * Features: esbuild module exports: Vcn
 * === End semantic info ===
 */


var Vcn = T((ML) => {
  "use strict";
  var hm = Ff(),
    LL = qcn(),
    vrs = process.platform,
    Crs = vrs === "win32",
    Aie = {},
    gm,
    yOt = 0;
  function Srs(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        gm || (gm = new LL());
        let r = {};
        gm.getInfo((n) => {
          ((r.id = n.ID),
            (r.containers = n.Containers),
            (r.containersRunning = n.ContainersRunning),
            (r.containersPaused = n.ContainersPaused),
            (r.containersStopped = n.ContainersStopped),
            (r.images = n.Images),
            (r.driver = n.Driver),
            (r.memoryLimit = n.MemoryLimit),
            (r.swapLimit = n.SwapLimit),
            (r.kernelMemory = n.KernelMemory),
            (r.cpuCfsPeriod = n.CpuCfsPeriod),
            (r.cpuCfsQuota = n.CpuCfsQuota),
            (r.cpuShares = n.CPUShares),
            (r.cpuSet = n.CPUSet),
            (r.ipv4Forwarding = n.IPv4Forwarding),
            (r.bridgeNfIptables = n.BridgeNfIptables),
            (r.bridgeNfIp6tables = n.BridgeNfIp6tables),
            (r.debug = n.Debug),
            (r.nfd = n.NFd),
            (r.oomKillDisable = n.OomKillDisable),
            (r.ngoroutines = n.NGoroutines),
            (r.systemTime = n.SystemTime),
            (r.loggingDriver = n.LoggingDriver),
            (r.cgroupDriver = n.CgroupDriver),
            (r.nEventsListener = n.NEventsListener),
            (r.kernelVersion = n.KernelVersion),
            (r.operatingSystem = n.OperatingSystem),
            (r.osType = n.OSType),
            (r.architecture = n.Architecture),
            (r.ncpu = n.NCPU),
            (r.memTotal = n.MemTotal),
            (r.dockerRootDir = n.DockerRootDir),
            (r.httpProxy = n.HttpProxy),
            (r.httpsProxy = n.HttpsProxy),
            (r.noProxy = n.NoProxy),
            (r.name = n.Name),
            (r.labels = n.Labels),
            (r.experimentalBuild = n.ExperimentalBuild),
            (r.serverVersion = n.ServerVersion),
            (r.clusterStore = n.ClusterStore),
            (r.clusterAdvertise = n.ClusterAdvertise),
            (r.defaultRuntime = n.DefaultRuntime),
            (r.liveRestoreEnabled = n.LiveRestoreEnabled),
            (r.isolation = n.Isolation),
            (r.initBinary = n.InitBinary),
            (r.productLicense = n.ProductLicense),
            t && t(r),
            e(r));
        });
      });
    });
  }
  ML.dockerInfo = Srs;
  function wrs(t, e) {
    (hm.isFunction(t) && !e && ((e = t), (t = !1)),
      typeof t == "string" && t === "true" && (t = !0),
      typeof t != "boolean" && t !== void 0 && (t = !1),
      (t = t || !1));
    let r = [];
    return new Promise((n) => {
      process.nextTick(() => {
        gm || (gm = new LL());
        let o = [];
        gm.listImages(t, (s) => {
          let a = {};
          try {
            ((a = s),
              a && Object.prototype.toString.call(a) === "[object Array]" && a.length > 0
                ? (a.forEach((u) => {
                    (u.Names &&
                      Object.prototype.toString.call(u.Names) === "[object Array]" &&
                      u.Names.length > 0 &&
                      (u.Name = u.Names[0].replace(/^\/|\/$/g, "")),
                      o.push(xrs(u.Id.trim(), u)));
                  }),
                  o.length
                    ? Promise.all(o).then((u) => {
                        (e && e(u), n(u));
                      })
                    : (e && e(r), n(r)))
                : (e && e(r), n(r)));
          } catch {
            (e && e(r), n(r));
          }
        });
      });
    });
  }
  function xrs(t, e) {
    return new Promise((r) => {
      process.nextTick(() => {
        if (((t = t || ""), typeof t != "string")) return r();
        let n = (hm.isPrototypePolluted() ? "" : hm.sanitizeShellString(t, !0)).trim();
        n
          ? (gm || (gm = new LL()),
            gm.inspectImage(n.trim(), (o) => {
              try {
                r({
                  id: e.Id,
                  container: o.Container,
                  comment: o.Comment,
                  os: o.Os,
                  architecture: o.Architecture,
                  parent: o.Parent,
                  dockerVersion: o.DockerVersion,
                  size: o.Size,
                  sharedSize: e.SharedSize,
                  virtualSize: o.VirtualSize,
                  author: o.Author,
                  created: o.Created ? Math.round(new Date(o.Created).getTime() / 1e3) : 0,
                  containerConfig: o.ContainerConfig ? o.ContainerConfig : {},
                  graphDriver: o.GraphDriver ? o.GraphDriver : {},
                  repoDigests: o.RepoDigests ? o.RepoDigests : {},
                  repoTags: o.RepoTags ? o.RepoTags : {},
                  config: o.Config ? o.Config : {},
                  rootFS: o.RootFS ? o.RootFS : {},
                });
              } catch {
                r();
              }
            }))
          : r();
      });
    });
  }
  ML.dockerImages = wrs;
  function _Ot(t, e) {
    function r(o, s) {
      return o.filter((u) => u.Id && u.Id === s).length > 0;
    }
    (hm.isFunction(t) && !e && ((e = t), (t = !1)),
      typeof t == "string" && t === "true" && (t = !0),
      typeof t != "boolean" && t !== void 0 && (t = !1),
      (t = t || !1));
    let n = [];
    return new Promise((o) => {
      process.nextTick(() => {
        gm || (gm = new LL());
        let s = [];
        gm.listContainers(t, (a) => {
          let u = {};
          try {
            if (((u = a), u && Object.prototype.toString.call(u) === "[object Array]" && u.length > 0)) {
              for (let c in Aie) ({}).hasOwnProperty.call(Aie, c) && (r(u, c) || delete Aie[c]);
              (u.forEach((c) => {
                (c.Names &&
                  Object.prototype.toString.call(c.Names) === "[object Array]" &&
                  c.Names.length > 0 &&
                  (c.Name = c.Names[0].replace(/^\/|\/$/g, "")),
                  s.push(Trs(c.Id.trim(), c)));
              }),
                s.length
                  ? Promise.all(s).then((c) => {
                      (e && e(c), o(c));
                    })
                  : (e && e(n), o(n)));
            } else (e && e(n), o(n));
          } catch {
            for (let m in Aie) ({}).hasOwnProperty.call(Aie, m) && (r(u, m) || delete Aie[m]);
            (e && e(n), o(n));
          }
        });
      });
    });
  }
  function Trs(t, e) {
    return new Promise((r) => {
      process.nextTick(() => {
        if (((t = t || ""), typeof t != "string")) return r();
        let n = (hm.isPrototypePolluted() ? "" : hm.sanitizeShellString(t, !0)).trim();
        n
          ? (gm || (gm = new LL()),
            gm.getInspect(n.trim(), (o) => {
              try {
                r({
                  id: e.Id,
                  name: e.Name,
                  image: e.Image,
                  imageID: e.ImageID,
                  command: e.Command,
                  created: e.Created,
                  started: o.State && o.State.StartedAt ? Math.round(new Date(o.State.StartedAt).getTime() / 1e3) : 0,
                  finished:
                    o.State && o.State.FinishedAt && !o.State.FinishedAt.startsWith("0001-01-01")
                      ? Math.round(new Date(o.State.FinishedAt).getTime() / 1e3)
                      : 0,
                  createdAt: o.Created ? o.Created : "",
                  startedAt: o.State && o.State.StartedAt ? o.State.StartedAt : "",
                  finishedAt:
                    o.State && o.State.FinishedAt && !o.State.FinishedAt.startsWith("0001-01-01")
                      ? o.State.FinishedAt
                      : "",
                  state: e.State,
                  restartCount: o.RestartCount || 0,
                  platform: o.Platform || "",
                  driver: o.Driver || "",
                  ports: e.Ports,
                  mounts: e.Mounts,
                });
              } catch {
                r();
              }
            }))
          : r();
      });
    });
  }
  ML.dockerContainers = _Ot;
  function Drs(t, e) {
    if (Crs) {
      let r = hm.nanoSeconds(),
        n = 0;
      if (yOt > 0) {
        let o = r - yOt,
          s = t.cpu_usage.total_usage - e.cpu_usage.total_usage;
        o > 0 && (n = (100 * s) / o);
      }
      return ((yOt = r), n);
    } else {
      let r = 0,
        n = t.cpu_usage.total_usage - e.cpu_usage.total_usage,
        o = t.system_cpu_usage - e.system_cpu_usage;
      return (
        o > 0 &&
          n > 0 &&
          (e.online_cpus ? (r = (n / o) * e.online_cpus * 100) : (r = (n / o) * t.cpu_usage.percpu_usage.length * 100)),
        r
      );
    }
  }
  function Irs(t) {
    let e, r;
    for (let n in t) {
      if (!{}.hasOwnProperty.call(t, n)) continue;
      let o = t[n];
      ((e = +o.rx_bytes), (r = +o.tx_bytes));
    }
    return { rx: e, wx: r };
  }
  function Rrs(t) {
    let e = { r: 0, w: 0 };
    return (
      t &&
        t.io_service_bytes_recursive &&
        Object.prototype.toString.call(t.io_service_bytes_recursive) === "[object Array]" &&
        t.io_service_bytes_recursive.length > 0 &&
        t.io_service_bytes_recursive.forEach((r) => {
          (r.op && r.op.toLowerCase() === "read" && r.value && (e.r += r.value),
            r.op && r.op.toLowerCase() === "write" && r.value && (e.w += r.value));
        }),
      e
    );
  }
  function EOt(t, e) {
    let r = [];
    return new Promise((n) => {
      process.nextTick(() => {
        if (hm.isFunction(t) && !e) ((e = t), (r = ["*"]));
        else {
          if (((t = t || "*"), typeof t != "string")) return (e && e([]), n([]));
          let a = "";
          try {
            ((a.__proto__.toLowerCase = hm.stringToLower),
              (a.__proto__.replace = hm.stringReplace),
              (a.__proto__.toString = hm.stringToString),
              (a.__proto__.substr = hm.stringSubstr),
              (a.__proto__.substring = hm.stringSubstring),
              (a.__proto__.trim = hm.stringTrim),
              (a.__proto__.startsWith = hm.stringStartWith));
          } catch {
            Object.setPrototypeOf(a, hm.stringObj);
          }
          if (((a = t), (a = a.trim()), a !== "*")) {
            a = "";
            let u = (hm.isPrototypePolluted() ? "" : hm.sanitizeShellString(t, !0)).trim(),
              c = hm.mathMin(u.length, 2e3);
            for (let m = 0; m <= c; m++)
              if (u[m] !== void 0) {
                u[m].__proto__.toLowerCase = hm.stringToLower;
                let d = u[m].toLowerCase();
                d && d[0] && !d[1] && (a = a + d[0]);
              }
          }
          ((a = a.trim().toLowerCase().replace(/,+/g, "|")), (r = a.split("|")));
        }
        let o = [],
          s = [];
        if (r.length && r[0].trim() === "*")
          ((r = []),
            _Ot().then((a) => {
              for (let u of a) r.push(u.id.substring(0, 12));
              r.length
                ? EOt(r.join(",")).then((u) => {
                    (e && e(u), n(u));
                  })
                : (e && e(o), n(o));
            }));
        else {
          for (let a of r) s.push(krs(a.trim()));
          s.length
            ? Promise.all(s).then((a) => {
                (e && e(a), n(a));
              })
            : (e && e(o), n(o));
        }
      });
    });
  }
  function krs(t) {
    t = t || "";
    let e = {
      id: t,
      memUsage: 0,
      memLimit: 0,
      memPercent: 0,
      cpuPercent: 0,
      pids: 0,
      netIO: { rx: 0, wx: 0 },
      blockIO: { r: 0, w: 0 },
      restartCount: 0,
      cpuStats: {},
      precpuStats: {},
      memoryStats: {},
      networks: {},
    };
    return new Promise((r) => {
      process.nextTick(() => {
        t
          ? (gm || (gm = new LL()),
            gm.getInspect(t, (n) => {
              try {
                gm.getStats(t, (o) => {
                  try {
                    let s = o;
                    s.message ||
                      (o.id && (e.id = o.id),
                      (e.memUsage = s.memory_stats && s.memory_stats.usage ? s.memory_stats.usage : 0),
                      (e.memLimit = s.memory_stats && s.memory_stats.limit ? s.memory_stats.limit : 0),
                      (e.memPercent =
                        s.memory_stats && s.memory_stats.usage && s.memory_stats.limit
                          ? (s.memory_stats.usage / s.memory_stats.limit) * 100
                          : 0),
                      (e.cpuPercent = s.cpu_stats && s.precpu_stats ? Drs(s.cpu_stats, s.precpu_stats) : 0),
                      (e.pids = s.pids_stats && s.pids_stats.current ? s.pids_stats.current : 0),
                      (e.restartCount = n.RestartCount ? n.RestartCount : 0),
                      s.networks && (e.netIO = Irs(s.networks)),
                      s.blkio_stats && (e.blockIO = Rrs(s.blkio_stats)),
                      (e.cpuStats = s.cpu_stats ? s.cpu_stats : {}),
                      (e.precpuStats = s.precpu_stats ? s.precpu_stats : {}),
                      (e.memoryStats = s.memory_stats ? s.memory_stats : {}),
                      (e.networks = s.networks ? s.networks : {}));
                  } catch {
                    hm.noop();
                  }
                  r(e);
                });
              } catch {
                hm.noop();
              }
            }))
          : r(e);
      });
    });
  }
  ML.dockerContainerStats = EOt;
  function Hcn(t, e) {
    let r = [];
    return new Promise((n) => {
      process.nextTick(() => {
        if (((t = t || ""), typeof t != "string")) return n(r);
        let o = (hm.isPrototypePolluted() ? "" : hm.sanitizeShellString(t, !0)).trim();
        o
          ? (gm || (gm = new LL()),
            gm.getProcesses(o, (s) => {
              try {
                if (s && s.Titles && s.Processes) {
                  let a = s.Titles.map(function (x) {
                      return x.toUpperCase();
                    }),
                    u = a.indexOf("PID"),
                    c = a.indexOf("PPID"),
                    m = a.indexOf("PGID"),
                    d = a.indexOf("VSZ"),
                    f = a.indexOf("TIME"),
                    p = a.indexOf("ELAPSED"),
                    h = a.indexOf("NI"),
                    g = a.indexOf("RUSER"),
                    b = a.indexOf("USER"),
                    A = a.indexOf("RGROUP"),
                    y = a.indexOf("GROUP"),
                    E = a.indexOf("STAT"),
                    v = a.indexOf("RSS"),
                    C = a.indexOf("COMMAND");
                  s.Processes.forEach((x) => {
                    r.push({
                      pidHost: u >= 0 ? x[u] : "",
                      ppid: c >= 0 ? x[c] : "",
                      pgid: m >= 0 ? x[m] : "",
                      user: b >= 0 ? x[b] : "",
                      ruser: g >= 0 ? x[g] : "",
                      group: y >= 0 ? x[y] : "",
                      rgroup: A >= 0 ? x[A] : "",
                      stat: E >= 0 ? x[E] : "",
                      time: f >= 0 ? x[f] : "",
                      elapsed: p >= 0 ? x[p] : "",
                      nice: h >= 0 ? x[h] : "",
                      rss: v >= 0 ? x[v] : "",
                      vsz: d >= 0 ? x[d] : "",
                      command: C >= 0 ? x[C] : "",
                    });
                  });
                }
              } catch {
                hm.noop();
              }
              (e && e(r), n(r));
            }))
          : (e && e(r), n(r));
      });
    });
  }
  ML.dockerContainerProcesses = Hcn;
  function Ors(t) {
    let e = [];
    return new Promise((r) => {
      process.nextTick(() => {
        (gm || (gm = new LL()),
          gm.listVolumes((n) => {
            let o = {};
            try {
              ((o = n),
                o && o.Volumes && Object.prototype.toString.call(o.Volumes) === "[object Array]" && o.Volumes.length > 0
                  ? (o.Volumes.forEach((s) => {
                      e.push({
                        name: s.Name,
                        driver: s.Driver,
                        labels: s.Labels,
                        mountpoint: s.Mountpoint,
                        options: s.Options,
                        scope: s.Scope,
                        created: s.CreatedAt ? Math.round(new Date(s.CreatedAt).getTime() / 1e3) : 0,
                      });
                    }),
                    t && t(e),
                    r(e))
                  : (t && t(e), r(e)));
            } catch {
              (t && t(e), r(e));
            }
          }));
      });
    });
  }
  ML.dockerVolumes = Ors;
  function Nrs(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        _Ot(!0).then((r) => {
          if (r && Object.prototype.toString.call(r) === "[object Array]" && r.length > 0) {
            let n = r.length;
            r.forEach((o) => {
              EOt(o.id).then((s) => {
                ((o.memUsage = s[0].memUsage),
                  (o.memLimit = s[0].memLimit),
                  (o.memPercent = s[0].memPercent),
                  (o.cpuPercent = s[0].cpuPercent),
                  (o.pids = s[0].pids),
                  (o.netIO = s[0].netIO),
                  (o.blockIO = s[0].blockIO),
                  (o.cpuStats = s[0].cpuStats),
                  (o.precpuStats = s[0].precpuStats),
                  (o.memoryStats = s[0].memoryStats),
                  (o.networks = s[0].networks),
                  Hcn(o.id).then((a) => {
                    ((o.processes = a), (n -= 1), n === 0 && (t && t(r), e(r)));
                  }));
              });
            });
          } else (t && t(r), e(r));
        });
      });
    });
  }
  ML.dockerAll = Nrs;
});