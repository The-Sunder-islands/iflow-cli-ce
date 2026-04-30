/**
 * @module Scn
 * @category utils/oop
 * @label oop
 * @position 714 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Scn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Scn = T((cH) => {
  "use strict";
  var aqe = Ae("os"),
    g6 = Ae("child_process").exec,
    kp = Ae("child_process").execSync,
    _ts = Ae("fs"),
    An = Ff(),
    xL = process.platform,
    VR = xL === "linux" || xL === "android",
    WR = xL === "darwin",
    jAe = xL === "win32",
    TL = xL === "freebsd",
    DL = xL === "openbsd",
    IL = xL === "netbsd",
    bcn = xL === "sunos",
    Eu = {},
    Acn = "",
    pie = {},
    ycn = [],
    hie = [],
    gie = {},
    aH;
  function uH() {
    let t = "",
      e = "";
    try {
      let r = aqe.networkInterfaces(),
        n = 9999;
      for (let o in r)
        ({}).hasOwnProperty.call(r, o) &&
          r[o].forEach((s) => {
            s && s.internal === !1 && ((e = e || o), s.scopeid && s.scopeid < n && ((t = o), (n = s.scopeid)));
          });
      if (((t = t || e || ""), jAe)) {
        let o = "";
        if (
          (kp("netstat -r", An.execOptsWin)
            .toString()
            .split(aqe.EOL)
            .forEach((c) => {
              if (((c = c.replace(/\s+/g, " ").trim()), c.indexOf("0.0.0.0 0.0.0.0") > -1 && !/[a-zA-Z]/.test(c))) {
                let m = c.split(" ");
                m.length >= 5 && (o = m[m.length - 2]);
              }
            }),
          o)
        )
          for (let c in r)
            ({}).hasOwnProperty.call(r, c) &&
              r[c].forEach((m) => {
                m && m.address && m.address === o && (t = c);
              });
      }
      if (VR) {
        let a = kp("ip route 2> /dev/null | grep default", An.execOptsLinux)
          .toString()
          .split(
            `
`,
          )[0]
          .split(/\s+/);
        (a[0] === "none" && a[5] ? (t = a[5]) : a[4] && (t = a[4]),
          t.indexOf(":") > -1 && (t = t.split(":")[1].trim()));
      }
      if (WR || TL || DL || IL || bcn) {
        let o = "";
        (VR && (o = "ip route 2> /dev/null | grep default | awk '{print $5}'"),
          WR && (o = "route -n get default 2>/dev/null | grep interface: | awk '{print $2}'"),
          (TL || DL || IL || bcn) && (o = "route get 0.0.0.0 | grep interface:"),
          (t = kp(o).toString().split(`
`)[0]),
          t.indexOf(":") > -1 && (t = t.split(":")[1].trim()));
      }
    } catch {
      An.noop();
    }
    return (t && (Acn = t), Acn);
  }
  cH.getDefaultNetworkInterface = uH;
  function _cn() {
    let t = "",
      e = "",
      r = {};
    if (VR || TL || DL || IL) {
      if (typeof aH > "u")
        try {
          let n = kp("which ip", An.execOptsLinux).toString().split(`
`);
          n.length && n[0].indexOf(":") === -1 && n[0].indexOf("/") === 0 ? (aH = n[0]) : (aH = "");
        } catch {
          aH = "";
        }
      try {
        let n = "export LC_ALL=C; " + (aH ? aH + " link show up" : "/sbin/ifconfig") + "; unset LC_ALL",
          s = kp(n, An.execOptsLinux).toString().split(`
`);
        for (let a = 0; a < s.length; a++)
          if (s[a] && s[a][0] !== " ") {
            if (aH) {
              let u = s[a + 1].trim().split(" ");
              u[0] === "link/ether" && ((t = s[a].split(" ")[1]), (t = t.slice(0, t.length - 1)), (e = u[1]));
            } else ((t = s[a].split(" ")[0]), (e = s[a].split("HWaddr ")[1]));
            t && e && ((r[t] = e.trim()), (t = ""), (e = ""));
          }
      } catch {
        An.noop();
      }
    }
    if (WR)
      try {
        let s = kp("/sbin/ifconfig").toString().split(`
`);
        for (let a = 0; a < s.length; a++)
          s[a] && s[a][0] !== "	" && s[a].indexOf(":") > 0
            ? (t = s[a].split(":")[0])
            : s[a].indexOf("	ether ") === 0 &&
              ((e = s[a].split("	ether ")[1]), t && e && ((r[t] = e.trim()), (t = ""), (e = "")));
      } catch {
        An.noop();
      }
    return r;
  }
  function Ets(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = uH();
        (t && t(r), e(r));
      });
    });
  }
  cH.networkInterfaceDefault = Ets;
  function vts(t, e) {
    let r = [];
    for (let n in t)
      try {
        if ({}.hasOwnProperty.call(t, n) && t[n].trim() !== "") {
          let o = t[n].trim().split(`\r
`),
            s = null;
          try {
            s =
              e && e[n]
                ? e[n].trim().split(`\r
`)
                : [];
          } catch {
            An.noop();
          }
          let a = An.getValue(o, "NetEnabled", ":"),
            u = An.getValue(o, "AdapterTypeID", ":") === "9" ? "wireless" : "wired",
            c = An.getValue(o, "Name", ":").replace(/\]/g, ")").replace(/\[/g, "("),
            m = An.getValue(o, "NetConnectionID", ":").replace(/\]/g, ")").replace(/\[/g, "(");
          if (
            ((c.toLowerCase().indexOf("wi-fi") >= 0 || c.toLowerCase().indexOf("wireless") >= 0) && (u = "wireless"),
            a !== "")
          ) {
            let d = parseInt(An.getValue(o, "speed", ":").trim(), 10) / 1e6;
            r.push({
              mac: An.getValue(o, "MACAddress", ":").toLowerCase(),
              dhcp: An.getValue(s, "dhcpEnabled", ":").toLowerCase() === "true",
              name: c,
              iface: m,
              netEnabled: a === "TRUE",
              speed: isNaN(d) ? null : d,
              operstate: An.getValue(o, "NetConnectionStatus", ":") === "2" ? "up" : "down",
              type: u,
            });
          }
        }
      } catch {
        An.noop();
      }
    return r;
  }
  function Cts() {
    return new Promise((t) => {
      process.nextTick(() => {
        let e = "Get-CimInstance Win32_NetworkAdapter | fl *; echo '#-#-#-#';";
        e += "Get-CimInstance Win32_NetworkAdapterConfiguration | fl DHCPEnabled";
        try {
          An.powerShell(e).then((r) => {
            r = r.split("#-#-#-#");
            let n = (r[0] || "").split(/\n\s*\n/),
              o = (r[1] || "").split(/\n\s*\n/);
            t(vts(n, o));
          });
        } catch {
          t([]);
        }
      });
    });
  }
  function Sts() {
    let t = {},
      e = { primaryDNS: "", exitCode: 0, ifaces: [] };
    try {
      return (
        kp("ipconfig /all", An.execOptsWin)
          .split(
            `\r
\r
`,
          )
          .forEach((o, s) => {
            if (s === 1) {
              let a = o
                  .split(
                    `\r
`,
                  )
                  .filter((c) => c.toUpperCase().includes("DNS")),
                u = a[0].substring(a[0].lastIndexOf(":") + 1);
              ((e.primaryDNS = u.trim()), e.primaryDNS || (e.primaryDNS = "Not defined"));
            }
            if (s > 1)
              if (s % 2 === 0) {
                let a = o.substring(o.lastIndexOf(" ") + 1).replace(":", "");
                t.name = a;
              } else {
                let a = o
                    .split(
                      `\r
`,
                    )
                    .filter((c) => c.toUpperCase().includes("DNS")),
                  u = a[0].substring(a[0].lastIndexOf(":") + 1);
                ((t.dnsSuffix = u.trim()), e.ifaces.push(t), (t = {}));
              }
          }),
        e
      );
    } catch {
      return { primaryDNS: "", exitCode: 0, ifaces: [] };
    }
  }
  function wts(t, e) {
    let r = "",
      n = e + ".";
    try {
      let o = t.filter((s) => n.includes(s.name + ".")).map((s) => s.dnsSuffix);
      return (o[0] && (r = o[0]), r || (r = ""), r);
    } catch {
      return "Unknown";
    }
  }
  function xts() {
    try {
      return kp("netsh lan show profiles", An.execOptsWin).split(`\r
Profile on interface`);
    } catch (t) {
      return t.status === 1 && t.stdout.includes("AutoConfig") ? "Disabled" : [];
    }
  }
  function Tts(t) {
    try {
      return kp(`netsh wlan show  interface name="${t}" | findstr "SSID"`, An.execOptsWin)
        .split(
          `\r
`,
        )
        .shift()
        .split(":")
        .pop()
        .trim();
    } catch {
      return "Unknown";
    }
  }
  function Dts(t, e, r) {
    let n = { state: "Unknown", protocol: "Unknown" };
    if (r === "Disabled") return ((n.state = "Disabled"), (n.protocol = "Not defined"), n);
    if (t === "wired" && r.length > 0)
      try {
        let s = r.find((u) =>
            u.includes(
              e +
                `\r
`,
            ),
          ).split(`\r
`),
          a = s.find((u) => u.includes("802.1x"));
        if (a.includes("Disabled")) ((n.state = "Disabled"), (n.protocol = "Not defined"));
        else if (a.includes("Enabled")) {
          let u = s.find((c) => c.includes("EAP"));
          ((n.protocol = u.split(":").pop()), (n.state = "Enabled"));
        }
      } catch {
        return n;
      }
    else if (t === "wireless") {
      let o = "",
        s = "";
      try {
        let a = Tts(e);
        if (a !== "Unknown") {
          let u = "",
            c = An.isPrototypePolluted() ? "---" : An.sanitizeShellString(a),
            m = An.mathMin(c.length, 32);
          for (let f = 0; f <= m; f++) c[f] !== void 0 && (u = u + c[f]);
          let d = kp(`netsh wlan show profiles "${u}"`, An.execOptsWin).split(`\r
`);
          ((o = (d.find((f) => f.indexOf("802.1X") >= 0) || "").trim()),
            (s = (d.find((f) => f.indexOf("EAP") >= 0) || "").trim()));
        }
        o.includes(":") && s.includes(":") && ((n.state = o.split(":").pop()), (n.protocol = s.split(":").pop()));
      } catch (a) {
        return (
          a.status === 1 && a.stdout.includes("AutoConfig") && ((n.state = "Disabled"), (n.protocol = "Not defined")),
          n
        );
      }
    }
    return n;
  }
  function Ecn(t) {
    let e = [],
      r = [];
    return (
      t.forEach((n) => {
        (!n.startsWith("	") && !n.startsWith(" ") && r.length && (e.push(r), (r = [])), r.push(n));
      }),
      r.length && e.push(r),
      e
    );
  }
  function Its(t) {
    let e = [];
    return (
      t.forEach((r) => {
        let n = {
            iface: "",
            mtu: null,
            mac: "",
            ip6: "",
            ip4: "",
            speed: null,
            type: "",
            operstate: "",
            duplex: "",
            internal: !1,
          },
          o = r[0];
        n.iface = o.split(":")[0].trim();
        let s = o.split("> mtu");
        ((n.mtu = s.length > 1 ? parseInt(s[1], 10) : null),
          isNaN(n.mtu) && (n.mtu = null),
          (n.internal = s[0].toLowerCase().indexOf("loopback") > -1),
          r.forEach((c) => {
            (c.trim().startsWith("ether ") && (n.mac = c.split("ether ")[1].toLowerCase().trim()),
              c.trim().startsWith("inet6 ") &&
                !n.ip6 &&
                (n.ip6 = c.split("inet6 ")[1].toLowerCase().split("%")[0].split(" ")[0]),
              c.trim().startsWith("inet ") && !n.ip4 && (n.ip4 = c.split("inet ")[1].toLowerCase().split(" ")[0]));
          }));
        let a = An.getValue(r, "link rate");
        ((n.speed = a ? parseFloat(a) : null),
          n.speed === null
            ? ((a = An.getValue(r, "uplink rate")),
              (n.speed = a ? parseFloat(a) : null),
              n.speed !== null && a.toLowerCase().indexOf("gbps") >= 0 && (n.speed = n.speed * 1e3))
            : a.toLowerCase().indexOf("gbps") >= 0 && (n.speed = n.speed * 1e3),
          (n.type = An.getValue(r, "type").toLowerCase().indexOf("wi-fi") > -1 ? "wireless" : "wired"));
        let u = An.getValue(r, "status").toLowerCase();
        ((n.operstate = u === "active" ? "up" : u === "inactive" ? "down" : "unknown"),
          (n.duplex = An.getValue(r, "media").toLowerCase().indexOf("half-duplex") > -1 ? "half" : "full"),
          (n.ip6 || n.ip4 || n.mac) && e.push(n));
      }),
      e
    );
  }
  function Rts() {
    let t = "/sbin/ifconfig -v";
    try {
      let e = kp(t, { maxBuffer: 104857600 }).toString().split(`
`),
        r = Ecn(e);
      return Its(r);
    } catch {
      return [];
    }
  }
  function kts(t) {
    let e = `nmcli device status 2>/dev/null | grep ${t}`;
    try {
      let s = kp(e, An.execOptsLinux).toString().replace(/\s+/g, " ").trim().split(" ").slice(3).join(" ");
      return s !== "--" ? s : "";
    } catch {
      return "";
    }
  }
  function vcn(t) {
    let e = [];
    try {
      let r = `cat ${t} 2> /dev/null | grep 'iface\\|source'`;
      kp(r, An.execOptsLinux)
        .toString()
        .split(
          `
`,
        )
        .forEach((o) => {
          let s = o.replace(/\s+/g, " ").trim().split(" ");
          if (
            (s.length >= 4 &&
              o.toLowerCase().indexOf(" inet ") >= 0 &&
              o.toLowerCase().indexOf("dhcp") >= 0 &&
              e.push(s[1]),
            o.toLowerCase().includes("source"))
          ) {
            let a = o.split(" ")[1];
            e = e.concat(vcn(a));
          }
        });
    } catch {
      An.noop();
    }
    return e;
  }
  function Ots() {
    let t = "ip a 2> /dev/null",
      e = [];
    try {
      let r = kp(t, An.execOptsLinux).toString().split(`
`),
        n = Ecn(r);
      e = Nts(n);
    } catch {
      An.noop();
    }
    try {
      e = vcn("/etc/network/interfaces");
    } catch {
      An.noop();
    }
    return e;
  }
  function Nts(t) {
    let e = [];
    return (
      t &&
        t.length &&
        t.forEach((r) => {
          if (r && r.length && r[0].split(":").length > 2) {
            for (let o of r)
              if (o.indexOf(" inet ") >= 0 && o.indexOf(" dynamic ") >= 0) {
                let s = o.split(" "),
                  a = s[s.length - 1].trim();
                e.push(a);
                break;
              }
          }
        }),
      e
    );
  }
  function Pts(t, e, r) {
    let n = !1;
    if (e) {
      let o = `nmcli connection show "${e}" 2>/dev/null | grep ipv4.method;`;
      try {
        switch (kp(o, An.execOptsLinux).toString().replace(/\s+/g, " ").trim().split(" ").slice(1).toString()) {
          case "auto":
            n = !0;
            break;
          default:
            n = !1;
            break;
        }
        return n;
      } catch {
        return r.indexOf(t) >= 0;
      }
    } else return r.indexOf(t) >= 0;
  }
  function Bts(t) {
    let e = !1,
      r = `ipconfig getpacket "${t}" 2>/dev/null | grep lease_time;`;
    try {
      let n = kp(r).toString().split(`
`);
      n.length && n[0].startsWith("lease_time") && (e = !0);
    } catch {
      An.noop();
    }
    return e;
  }
  function Lts(t) {
    if (t) {
      let e = `nmcli connection show "${t}" 2>/dev/null | grep ipv4.dns-search;`;
      try {
        let o = kp(e, An.execOptsLinux).toString().replace(/\s+/g, " ").trim().split(" ").slice(1).toString();
        return o === "--" ? "Not defined" : o;
      } catch {
        return "Unknown";
      }
    } else return "Unknown";
  }
  function Mts(t) {
    if (t) {
      let e = `nmcli connection show "${t}" 2>/dev/null | grep 802-1x.eap;`;
      try {
        let o = kp(e, An.execOptsLinux).toString().replace(/\s+/g, " ").trim().split(" ").slice(1).toString();
        return o === "--" ? "" : o;
      } catch {
        return "Not defined";
      }
    } else return "Not defined";
  }
  function Fts(t) {
    return t ? (t === "Not defined" ? "Disabled" : "Enabled") : "Unknown";
  }
  function oOt(t, e, r) {
    let n = [
      "00:00:00:00:00:00",
      "00:03:FF",
      "00:05:69",
      "00:0C:29",
      "00:0F:4B",
      "00:13:07",
      "00:13:BE",
      "00:15:5d",
      "00:16:3E",
      "00:1C:42",
      "00:21:F6",
      "00:24:0B",
      "00:50:56",
      "00:A0:B1",
      "00:E0:C8",
      "08:00:27",
      "0A:00:27",
      "18:92:2C",
      "16:DF:49",
      "3C:F3:92",
      "54:52:00",
      "FC:15:97",
    ];
    return r
      ? n.filter((o) => r.toUpperCase().toUpperCase().startsWith(o.substring(0, r.length))).length > 0 ||
          t.toLowerCase().indexOf(" virtual ") > -1 ||
          e.toLowerCase().indexOf(" virtual ") > -1 ||
          t.toLowerCase().indexOf("vethernet ") > -1 ||
          e.toLowerCase().indexOf("vethernet ") > -1 ||
          t.toLowerCase().startsWith("veth") ||
          e.toLowerCase().startsWith("veth") ||
          t.toLowerCase().startsWith("vboxnet") ||
          e.toLowerCase().startsWith("vboxnet")
      : !1;
  }
  function sOt(t, e, r) {
    return (
      typeof t == "string" && ((r = t), (e = !0), (t = null)),
      typeof t == "boolean" && ((e = t), (t = null), (r = "")),
      typeof e > "u" && (e = !0),
      (r = r || ""),
      (r = "" + r),
      new Promise((n) => {
        process.nextTick(() => {
          let o = aqe.networkInterfaces(),
            s = [],
            a = [],
            u = [],
            c = [];
          if (WR || TL || DL || IL)
            if (JSON.stringify(o) === JSON.stringify(pie) && !e) ((s = hie), t && t(s), n(s));
            else {
              let m = uH();
              ((pie = JSON.parse(JSON.stringify(o))),
                (a = Rts()),
                a.forEach((d) => {
                  let f = "",
                    p = "",
                    h = "",
                    g = "";
                  ((d.ip4 = ""),
                    (d.ip6 = ""),
                    {}.hasOwnProperty.call(o, d.iface) &&
                      o[d.iface].forEach((E) => {
                        ((E.family === "IPv4" || E.family === 4) &&
                          (!d.ip4 && !d.ip4.match(/^169.254/i) && ((d.ip4 = E.address), (d.ip4subnet = E.netmask)),
                          d.ip4.match(/^169.254/i) && ((f = E.address), (p = E.netmask))),
                          (E.family === "IPv6" || E.family === 6) &&
                            (!d.ip6 && !d.ip6.match(/^fe80::/i) && ((d.ip6 = E.address), (d.ip6subnet = E.netmask)),
                            d.ip6.match(/^fe80::/i) && ((h = E.address), (g = E.netmask))));
                      }),
                    !d.ip4 && f && ((d.ip4 = f), (d.ip4subnet = p)),
                    !d.ip6 && h && ((d.ip6 = h), (d.ip6subnet = g)));
                  let b = "",
                    A = An.isPrototypePolluted() ? "---" : An.sanitizeShellString(d.iface),
                    y = An.mathMin(A.length, 2e3);
                  for (let E = 0; E <= y; E++) A[E] !== void 0 && (b = b + A[E]);
                  s.push({
                    iface: d.iface,
                    ifaceName: d.iface,
                    default: d.iface === m,
                    ip4: d.ip4,
                    ip4subnet: d.ip4subnet || "",
                    ip6: d.ip6,
                    ip6subnet: d.ip6subnet || "",
                    mac: d.mac,
                    internal: d.internal,
                    virtual: d.internal ? !1 : oOt(d.iface, d.iface, d.mac),
                    operstate: d.operstate,
                    type: d.type,
                    duplex: d.duplex,
                    mtu: d.mtu,
                    speed: d.speed,
                    dhcp: Bts(b),
                    dnsSuffix: "",
                    ieee8021xAuth: "",
                    ieee8021xState: "",
                    carrierChanges: 0,
                  });
                }),
                (hie = s),
                r.toLowerCase().indexOf("default") >= 0 &&
                  ((s = s.filter((d) => d.default)), s.length > 0 ? (s = s[0]) : (s = [])),
                t && t(s),
                n(s));
            }
          if (VR)
            if (JSON.stringify(o) === JSON.stringify(pie) && !e) ((s = hie), t && t(s), n(s));
            else {
              ((pie = JSON.parse(JSON.stringify(o))), (ycn = Ots()));
              let m = uH();
              for (let d in o) {
                let f = "",
                  p = "",
                  h = "",
                  g = "",
                  b = "",
                  A = "",
                  y = "",
                  E = null,
                  v = 0,
                  C = !1,
                  x = "",
                  k = "",
                  R = "",
                  P = "",
                  D = "",
                  O = "",
                  N = "",
                  F = "";
                if ({}.hasOwnProperty.call(o, d)) {
                  let B = d;
                  (o[d].forEach((de) => {
                    ((de.family === "IPv4" || de.family === 4) &&
                      (!f && !f.match(/^169.254/i) && ((f = de.address), (p = de.netmask)),
                      f.match(/^169.254/i) && ((D = de.address), (O = de.netmask))),
                      (de.family === "IPv6" || de.family === 6) &&
                        (!h && !h.match(/^fe80::/i) && ((h = de.address), (g = de.netmask)),
                        h.match(/^fe80::/i) && ((N = de.address), (F = de.netmask))),
                      (b = de.mac));
                    let ce = parseInt(process.versions.node.split("."), 10);
                    b.indexOf("00:00:0") > -1 &&
                      (VR || WR) &&
                      !de.internal &&
                      ce >= 8 &&
                      ce <= 11 &&
                      (Object.keys(gie).length === 0 && (gie = _cn()), (b = gie[d] || ""));
                  }),
                    !f && D && ((f = D), (p = O)),
                    !h && N && ((h = N), (g = F)));
                  let L = d.split(":")[0].trim().toLowerCase(),
                    G = "",
                    Q = An.isPrototypePolluted() ? "---" : An.sanitizeShellString(L),
                    K = An.mathMin(Q.length, 2e3);
                  for (let de = 0; de <= K; de++) Q[de] !== void 0 && (G = G + Q[de]);
                  let H = `echo -n "addr_assign_type: "; cat /sys/class/net/${G}/addr_assign_type 2>/dev/null; echo;
            echo -n "address: "; cat /sys/class/net/${G}/address 2>/dev/null; echo;
            echo -n "addr_len: "; cat /sys/class/net/${G}/addr_len 2>/dev/null; echo;
            echo -n "broadcast: "; cat /sys/class/net/${G}/broadcast 2>/dev/null; echo;
            echo -n "carrier: "; cat /sys/class/net/${G}/carrier 2>/dev/null; echo;
            echo -n "carrier_changes: "; cat /sys/class/net/${G}/carrier_changes 2>/dev/null; echo;
            echo -n "dev_id: "; cat /sys/class/net/${G}/dev_id 2>/dev/null; echo;
            echo -n "dev_port: "; cat /sys/class/net/${G}/dev_port 2>/dev/null; echo;
            echo -n "dormant: "; cat /sys/class/net/${G}/dormant 2>/dev/null; echo;
            echo -n "duplex: "; cat /sys/class/net/${G}/duplex 2>/dev/null; echo;
            echo -n "flags: "; cat /sys/class/net/${G}/flags 2>/dev/null; echo;
            echo -n "gro_flush_timeout: "; cat /sys/class/net/${G}/gro_flush_timeout 2>/dev/null; echo;
            echo -n "ifalias: "; cat /sys/class/net/${G}/ifalias 2>/dev/null; echo;
            echo -n "ifindex: "; cat /sys/class/net/${G}/ifindex 2>/dev/null; echo;
            echo -n "iflink: "; cat /sys/class/net/${G}/iflink 2>/dev/null; echo;
            echo -n "link_mode: "; cat /sys/class/net/${G}/link_mode 2>/dev/null; echo;
            echo -n "mtu: "; cat /sys/class/net/${G}/mtu 2>/dev/null; echo;
            echo -n "netdev_group: "; cat /sys/class/net/${G}/netdev_group 2>/dev/null; echo;
            echo -n "operstate: "; cat /sys/class/net/${G}/operstate 2>/dev/null; echo;
            echo -n "proto_down: "; cat /sys/class/net/${G}/proto_down 2>/dev/null; echo;
            echo -n "speed: "; cat /sys/class/net/${G}/speed 2>/dev/null; echo;
            echo -n "tx_queue_len: "; cat /sys/class/net/${G}/tx_queue_len 2>/dev/null; echo;
            echo -n "type: "; cat /sys/class/net/${G}/type 2>/dev/null; echo;
            echo -n "wireless: "; cat /proc/net/wireless 2>/dev/null | grep ${G}; echo;
            echo -n "wirelessspeed: "; iw dev ${G} link 2>&1 | grep bitrate; echo;`,
                    U = [];
                  try {
                    U = kp(H, An.execOptsLinux).toString().split(`
`);
                    let de = kts(G);
                    ((C = Pts(G, de, ycn)), (x = Lts(de)), (k = Mts(de)), (R = Fts(k)));
                  } catch {
                    An.noop();
                  }
                  ((A = An.getValue(U, "duplex")),
                    (A = A.startsWith("cat") ? "" : A),
                    (y = parseInt(An.getValue(U, "mtu"), 10)));
                  let Y = parseInt(An.getValue(U, "speed"), 10);
                  E = isNaN(Y) ? null : Y;
                  let X = An.getValue(U, "tx bitrate");
                  (E === null && X && ((Y = parseFloat(X)), (E = isNaN(Y) ? null : Y)),
                    (v = parseInt(An.getValue(U, "carrier_changes"), 10)));
                  let J = An.getValue(U, "operstate");
                  ((P = J === "up" ? (An.getValue(U, "wireless").trim() ? "wireless" : "wired") : "unknown"),
                    (G === "lo" || G.startsWith("bond")) && (P = "virtual"));
                  let q = o[d] && o[d][0] ? o[d][0].internal : !1;
                  (d.toLowerCase().indexOf("loopback") > -1 || B.toLowerCase().indexOf("loopback") > -1) && (q = !0);
                  let ne = q ? !1 : oOt(d, B, b);
                  s.push({
                    iface: G,
                    ifaceName: B,
                    default: L === m,
                    ip4: f,
                    ip4subnet: p,
                    ip6: h,
                    ip6subnet: g,
                    mac: b,
                    internal: q,
                    virtual: ne,
                    operstate: J,
                    type: P,
                    duplex: A,
                    mtu: y,
                    speed: E,
                    dhcp: C,
                    dnsSuffix: x,
                    ieee8021xAuth: k,
                    ieee8021xState: R,
                    carrierChanges: v,
                  });
                }
              }
              ((hie = s),
                r.toLowerCase().indexOf("default") >= 0 &&
                  ((s = s.filter((d) => d.default)), s.length > 0 ? (s = s[0]) : (s = [])),
                t && t(s),
                n(s));
            }
          if (jAe)
            if (JSON.stringify(o) === JSON.stringify(pie) && !e) ((s = hie), t && t(s), n(s));
            else {
              pie = JSON.parse(JSON.stringify(o));
              let m = uH();
              Cts().then((d) => {
                (d.forEach((f) => {
                  let p = !1;
                  (Object.keys(o).forEach((h) => {
                    p ||
                      o[h].forEach((g) => {
                        Object.keys(g).indexOf("mac") >= 0 && (p = g.mac === f.mac);
                      });
                  }),
                    p || (o[f.name] = [{ mac: f.mac }]));
                }),
                  (c = xts()),
                  (u = Sts()));
                for (let f in o) {
                  let p = "",
                    h = An.isPrototypePolluted() ? "---" : An.sanitizeShellString(f),
                    g = An.mathMin(h.length, 2e3);
                  for (let G = 0; G <= g; G++) h[G] !== void 0 && (p = p + h[G]);
                  let b = f,
                    A = "",
                    y = "",
                    E = "",
                    v = "",
                    C = "",
                    x = "",
                    k = "",
                    R = null,
                    P = 0,
                    D = "down",
                    O = !1,
                    N = "",
                    F = "",
                    B = "",
                    L = "";
                  if ({}.hasOwnProperty.call(o, f)) {
                    let G = f;
                    (o[f].forEach((Y) => {
                      ((Y.family === "IPv4" || Y.family === 4) && ((A = Y.address), (y = Y.netmask)),
                        (Y.family === "IPv6" || Y.family === 6) &&
                          (!E || E.match(/^fe80::/i)) &&
                          ((E = Y.address), (v = Y.netmask)),
                        (C = Y.mac));
                      let X = parseInt(process.versions.node.split("."), 10);
                      C.indexOf("00:00:0") > -1 &&
                        (VR || WR) &&
                        !Y.internal &&
                        X >= 8 &&
                        X <= 11 &&
                        (Object.keys(gie).length === 0 && (gie = _cn()), (C = gie[f] || ""));
                    }),
                      (N = wts(u.ifaces, p)));
                    let Q = !1;
                    (d.forEach((Y) => {
                      Y.mac === C &&
                        !Q &&
                        ((b = Y.iface || b),
                        (G = Y.name),
                        (O = Y.dhcp),
                        (D = Y.operstate),
                        (R = D === "up" ? Y.speed : 0),
                        (L = Y.type),
                        (Q = !0));
                    }),
                      (f.toLowerCase().indexOf("wlan") >= 0 ||
                        G.toLowerCase().indexOf("wlan") >= 0 ||
                        G.toLowerCase().indexOf("802.11n") >= 0 ||
                        G.toLowerCase().indexOf("wireless") >= 0 ||
                        G.toLowerCase().indexOf("wi-fi") >= 0 ||
                        G.toLowerCase().indexOf("wifi") >= 0) &&
                        (L = "wireless"));
                    let K = Dts(L, p, c);
                    ((F = K.protocol), (B = K.state));
                    let H = o[f] && o[f][0] ? o[f][0].internal : !1;
                    (f.toLowerCase().indexOf("loopback") > -1 || G.toLowerCase().indexOf("loopback") > -1) && (H = !0);
                    let U = H ? !1 : oOt(f, G, C);
                    s.push({
                      iface: b,
                      ifaceName: G,
                      default: b === m,
                      ip4: A,
                      ip4subnet: y,
                      ip6: E,
                      ip6subnet: v,
                      mac: C,
                      internal: H,
                      virtual: U,
                      operstate: D,
                      type: L,
                      duplex: x,
                      mtu: k,
                      speed: R,
                      dhcp: O,
                      dnsSuffix: N,
                      ieee8021xAuth: F,
                      ieee8021xState: B,
                      carrierChanges: P,
                    });
                  }
                }
                ((hie = s),
                  r.toLowerCase().indexOf("default") >= 0 &&
                    ((s = s.filter((f) => f.default)), s.length > 0 ? (s = s[0]) : (s = [])),
                  t && t(s),
                  n(s));
              });
            }
        });
      })
    );
  }
  cH.networkInterfaces = sOt;
  function sqe(t, e, r, n, o, s, a, u) {
    let c = {
      iface: t,
      operstate: n,
      rx_bytes: e,
      rx_dropped: o,
      rx_errors: s,
      tx_bytes: r,
      tx_dropped: a,
      tx_errors: u,
      rx_sec: null,
      tx_sec: null,
      ms: 0,
    };
    return (
      Eu[t] && Eu[t].ms
        ? ((c.ms = Date.now() - Eu[t].ms),
          (c.rx_sec = e - Eu[t].rx_bytes >= 0 ? (e - Eu[t].rx_bytes) / (c.ms / 1e3) : 0),
          (c.tx_sec = r - Eu[t].tx_bytes >= 0 ? (r - Eu[t].tx_bytes) / (c.ms / 1e3) : 0),
          (Eu[t].rx_bytes = e),
          (Eu[t].tx_bytes = r),
          (Eu[t].rx_sec = c.rx_sec),
          (Eu[t].tx_sec = c.tx_sec),
          (Eu[t].ms = Date.now()),
          (Eu[t].last_ms = c.ms),
          (Eu[t].operstate = n))
        : (Eu[t] || (Eu[t] = {}),
          (Eu[t].rx_bytes = e),
          (Eu[t].tx_bytes = r),
          (Eu[t].rx_sec = null),
          (Eu[t].tx_sec = null),
          (Eu[t].ms = Date.now()),
          (Eu[t].last_ms = 0),
          (Eu[t].operstate = n)),
      c
    );
  }
  function Ccn(t, e) {
    let r = [];
    return new Promise((n) => {
      process.nextTick(() => {
        if (An.isFunction(t) && !e) ((e = t), (r = [uH()]));
        else {
          if (typeof t != "string" && t !== void 0) return (e && e([]), n([]));
          t = t || uH();
          try {
            ((t.__proto__.toLowerCase = An.stringToLower),
              (t.__proto__.replace = An.stringReplace),
              (t.__proto__.toString = An.stringToString),
              (t.__proto__.substr = An.stringSubstr),
              (t.__proto__.substring = An.stringSubstring),
              (t.__proto__.trim = An.stringTrim),
              (t.__proto__.startsWith = An.stringStartWith));
          } catch {
            Object.setPrototypeOf(t, An.stringObj);
          }
          ((t = t.trim().toLowerCase().replace(/,+/g, "|")), (r = t.split("|")));
        }
        let o = [],
          s = [];
        if (r.length && r[0].trim() === "*")
          ((r = []),
            sOt(!1).then((a) => {
              for (let u of a) r.push(u.iface);
              Ccn(r.join(",")).then((u) => {
                (e && e(u), n(u));
              });
            }));
        else {
          for (let a of r) s.push(Uts(a.trim()));
          s.length
            ? Promise.all(s).then((a) => {
                (e && e(a), n(a));
              })
            : (e && e(o), n(o));
        }
      });
    });
  }
  function Uts(t) {
    function e(r) {
      let n = [];
      for (let o in r)
        if ({}.hasOwnProperty.call(r, o) && r[o].trim() !== "") {
          let s = r[o].trim().split(`\r
`);
          n.push({
            name: An.getValue(s, "Name", ":")
              .replace(/[()[\] ]+/g, "")
              .replace(/#|\//g, "_")
              .toLowerCase(),
            rx_bytes: parseInt(An.getValue(s, "BytesReceivedPersec", ":"), 10),
            rx_errors: parseInt(An.getValue(s, "PacketsReceivedErrors", ":"), 10),
            rx_dropped: parseInt(An.getValue(s, "PacketsReceivedDiscarded", ":"), 10),
            tx_bytes: parseInt(An.getValue(s, "BytesSentPersec", ":"), 10),
            tx_errors: parseInt(An.getValue(s, "PacketsOutboundErrors", ":"), 10),
            tx_dropped: parseInt(An.getValue(s, "PacketsOutboundDiscarded", ":"), 10),
          });
        }
      return n;
    }
    return new Promise((r) => {
      process.nextTick(() => {
        let n = "",
          o = An.isPrototypePolluted() ? "---" : An.sanitizeShellString(t),
          s = An.mathMin(o.length, 2e3);
        for (let y = 0; y <= s; y++) o[y] !== void 0 && (n = n + o[y]);
        let a = {
            iface: n,
            operstate: "unknown",
            rx_bytes: 0,
            rx_dropped: 0,
            rx_errors: 0,
            tx_bytes: 0,
            tx_dropped: 0,
            tx_errors: 0,
            rx_sec: null,
            tx_sec: null,
            ms: 0,
          },
          u = "unknown",
          c = 0,
          m = 0,
          d = 0,
          f = 0,
          p = 0,
          h = 0,
          g,
          b,
          A;
        if (!Eu[n] || (Eu[n] && !Eu[n].ms) || (Eu[n] && Eu[n].ms && Date.now() - Eu[n].ms >= 500)) {
          if (
            (VR &&
              (_ts.existsSync("/sys/class/net/" + n)
                ? ((g =
                    "cat /sys/class/net/" +
                    n +
                    "/operstate; cat /sys/class/net/" +
                    n +
                    "/statistics/rx_bytes; cat /sys/class/net/" +
                    n +
                    "/statistics/tx_bytes; cat /sys/class/net/" +
                    n +
                    "/statistics/rx_dropped; cat /sys/class/net/" +
                    n +
                    "/statistics/rx_errors; cat /sys/class/net/" +
                    n +
                    "/statistics/tx_dropped; cat /sys/class/net/" +
                    n +
                    "/statistics/tx_errors; "),
                  g6(g, (y, E) => {
                    (y ||
                      ((b = E.toString().split(`
`)),
                      (u = b[0].trim()),
                      (c = parseInt(b[1], 10)),
                      (m = parseInt(b[2], 10)),
                      (d = parseInt(b[3], 10)),
                      (f = parseInt(b[4], 10)),
                      (p = parseInt(b[5], 10)),
                      (h = parseInt(b[6], 10)),
                      (a = sqe(n, c, m, u, d, f, p, h))),
                      r(a));
                  }))
                : r(a)),
            (TL || DL || IL) &&
              ((g = "netstat -ibndI " + n),
              g6(g, (y, E) => {
                if (!y) {
                  b = E.toString().split(`
`);
                  for (let v = 1; v < b.length; v++) {
                    let C = b[v].replace(/ +/g, " ").split(" ");
                    C &&
                      C[0] &&
                      C[7] &&
                      C[10] &&
                      ((c = c + parseInt(C[7])),
                      C[6].trim() !== "-" && (d = d + parseInt(C[6])),
                      C[5].trim() !== "-" && (f = f + parseInt(C[5])),
                      (m = m + parseInt(C[10])),
                      C[12].trim() !== "-" && (p = p + parseInt(C[12])),
                      C[9].trim() !== "-" && (h = h + parseInt(C[9])),
                      (u = "up"));
                  }
                  a = sqe(n, c, m, u, d, f, p, h);
                }
                r(a);
              })),
            WR &&
              ((g = "ifconfig " + n + ' | grep "status"'),
              g6(g, (y, E) => {
                ((a.operstate = (E.toString().split(":")[1] || "").trim()),
                  (a.operstate = (a.operstate || "").toLowerCase()),
                  (a.operstate = a.operstate === "active" ? "up" : a.operstate === "inactive" ? "down" : "unknown"),
                  (g = "netstat -bdI " + n),
                  g6(g, function (v, C) {
                    if (
                      !v &&
                      ((b = C.toString().split(`
`)),
                      b.length > 1 && b[1].trim() !== "")
                    ) {
                      A = b[1].replace(/ +/g, " ").split(" ");
                      let x = A.length > 11 ? 1 : 0;
                      ((c = parseInt(A[x + 5])),
                        (d = parseInt(A[x + 10])),
                        (f = parseInt(A[x + 4])),
                        (m = parseInt(A[x + 8])),
                        (p = parseInt(A[x + 10])),
                        (h = parseInt(A[x + 7])),
                        (a = sqe(n, c, m, a.operstate, d, f, p, h)));
                    }
                    r(a);
                  }));
              })),
            jAe)
          ) {
            let y = [],
              E = n;
            An.powerShell(
              "Get-CimInstance Win32_PerfRawData_Tcpip_NetworkInterface | select Name,BytesReceivedPersec,PacketsReceivedErrors,PacketsReceivedDiscarded,BytesSentPersec,PacketsOutboundErrors,PacketsOutboundDiscarded | fl",
            ).then((v, C) => {
              if (!C) {
                let x = v.toString().split(/\n\s*\n/);
                y = e(x);
              }
              sOt(!1).then((x) => {
                ((c = 0),
                  (m = 0),
                  y.forEach((k) => {
                    x.forEach((R) => {
                      (R.iface.toLowerCase() === n.toLowerCase() ||
                        R.mac.toLowerCase() === n.toLowerCase() ||
                        R.ip4.toLowerCase() === n.toLowerCase() ||
                        R.ip6.toLowerCase() === n.toLowerCase() ||
                        R.ifaceName
                          .replace(/[()[\] ]+/g, "")
                          .replace(/#|\//g, "_")
                          .toLowerCase() ===
                          n
                            .replace(/[()[\] ]+/g, "")
                            .replace("#", "_")
                            .toLowerCase()) &&
                        R.ifaceName
                          .replace(/[()[\] ]+/g, "")
                          .replace(/#|\//g, "_")
                          .toLowerCase() === k.name &&
                        ((E = R.iface),
                        (c = k.rx_bytes),
                        (d = k.rx_dropped),
                        (f = k.rx_errors),
                        (m = k.tx_bytes),
                        (p = k.tx_dropped),
                        (h = k.tx_errors),
                        (u = R.operstate));
                    });
                  }),
                  c && m && (a = sqe(E, parseInt(c), parseInt(m), u, d, f, p, h)),
                  r(a));
              });
            });
          }
        } else
          ((a.rx_bytes = Eu[n].rx_bytes),
            (a.tx_bytes = Eu[n].tx_bytes),
            (a.rx_sec = Eu[n].rx_sec),
            (a.tx_sec = Eu[n].tx_sec),
            (a.ms = Eu[n].last_ms),
            (a.operstate = Eu[n].operstate),
            r(a));
      });
    });
  }
  cH.networkStats = Ccn;
  function $ts(t, e) {
    let r = "";
    return (
      t.forEach((n) => {
        let o = n.split(" ");
        (parseInt(o[0], 10) || -1) === e && (o.shift(), (r = o.join(" ").split(":")[0]));
      }),
      (r = r.split(" -")[0]),
      (r = r.split(" /")[0]),
      r
    );
  }
  function jts(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        if (VR || TL || DL || IL) {
          let n =
            'export LC_ALL=C; netstat -tunap | grep "ESTABLISHED\\|SYN_SENT\\|SYN_RECV\\|FIN_WAIT1\\|FIN_WAIT2\\|TIME_WAIT\\|CLOSE\\|CLOSE_WAIT\\|LAST_ACK\\|LISTEN\\|CLOSING\\|UNKNOWN"; unset LC_ALL';
          ((TL || DL || IL) &&
            (n =
              'export LC_ALL=C; netstat -na | grep "ESTABLISHED\\|SYN_SENT\\|SYN_RECV\\|FIN_WAIT1\\|FIN_WAIT2\\|TIME_WAIT\\|CLOSE\\|CLOSE_WAIT\\|LAST_ACK\\|LISTEN\\|CLOSING\\|UNKNOWN"; unset LC_ALL'),
            g6(n, { maxBuffer: 1024 * 102400 }, (o, s) => {
              let a = s.toString().split(`
`);
              !o && (a.length > 1 || a[0] !== "")
                ? (a.forEach((u) => {
                    if (((u = u.replace(/ +/g, " ").split(" ")), u.length >= 7)) {
                      let c = u[3],
                        m = "",
                        d = u[3].split(":");
                      d.length > 1 && ((m = d[d.length - 1]), d.pop(), (c = d.join(":")));
                      let f = u[4],
                        p = "",
                        h = u[4].split(":");
                      h.length > 1 && ((p = h[h.length - 1]), h.pop(), (f = h.join(":")));
                      let g = u[5],
                        b = u[6].split("/");
                      g &&
                        r.push({
                          protocol: u[0],
                          localAddress: c,
                          localPort: m,
                          peerAddress: f,
                          peerPort: p,
                          state: g,
                          pid: b[0] && b[0] !== "-" ? parseInt(b[0], 10) : null,
                          process: b[1] ? b[1].split(" ")[0].split(":")[0] : "",
                        });
                    }
                  }),
                  t && t(r),
                  e(r))
                : ((n =
                    'ss -tunap | grep "ESTAB\\|SYN-SENT\\|SYN-RECV\\|FIN-WAIT1\\|FIN-WAIT2\\|TIME-WAIT\\|CLOSE\\|CLOSE-WAIT\\|LAST-ACK\\|LISTEN\\|CLOSING"'),
                  g6(n, { maxBuffer: 1024 * 102400 }, (u, c) => {
                    (u ||
                      c
                        .toString()
                        .split(
                          `
`,
                        )
                        .forEach((d) => {
                          if (((d = d.replace(/ +/g, " ").split(" ")), d.length >= 6)) {
                            let f = d[4],
                              p = "",
                              h = d[4].split(":");
                            h.length > 1 && ((p = h[h.length - 1]), h.pop(), (f = h.join(":")));
                            let g = d[5],
                              b = "",
                              A = d[5].split(":");
                            A.length > 1 && ((b = A[A.length - 1]), A.pop(), (g = A.join(":")));
                            let y = d[1];
                            (y === "ESTAB" && (y = "ESTABLISHED"), y === "TIME-WAIT" && (y = "TIME_WAIT"));
                            let E = null,
                              v = "";
                            if (d.length >= 7 && d[6].indexOf("users:") > -1) {
                              let C = d[6].replace('users:(("', "").replace(/"/g, "").replace("pid=", "").split(",");
                              if (C.length > 2) {
                                v = C[0];
                                let x = parseInt(C[1], 10);
                                x > 0 && (E = x);
                              }
                            }
                            y &&
                              r.push({
                                protocol: d[0],
                                localAddress: f,
                                localPort: p,
                                peerAddress: g,
                                peerPort: b,
                                state: y,
                                pid: E,
                                process: v,
                              });
                          }
                        }),
                      t && t(r),
                      e(r));
                  }));
            }));
        }
        if (WR) {
          let n = 'netstat -natvln | head -n2; netstat -natvln | grep "tcp4\\|tcp6\\|udp4\\|udp6"',
            o =
              "ESTABLISHED|SYN_SENT|SYN_RECV|FIN_WAIT1|FIN_WAIT_1|FIN_WAIT2|FIN_WAIT_2|TIME_WAIT|CLOSE|CLOSE_WAIT|LAST_ACK|LISTEN|CLOSING|UNKNOWN".split(
                "|",
              );
          g6(n, { maxBuffer: 1024 * 102400 }, (s, a) => {
            s ||
              g6("ps -axo pid,command", { maxBuffer: 1024 * 102400 }, (u, c) => {
                let m = c.toString().split(`
`);
                m = m.map((p) => p.trim().replace(/ +/g, " "));
                let d = a.toString().split(`
`);
                d.shift();
                let f = 8;
                (d.length > 1 &&
                  d[0].indexOf("pid") > 0 &&
                  (f = (d.shift() || "")
                    .replace(/ Address/g, "_Address")
                    .replace(/process:/g, "")
                    .replace(/ +/g, " ")
                    .split(" ")
                    .indexOf("pid")),
                  d.forEach((p) => {
                    if (((p = p.replace(/ +/g, " ").split(" ")), p.length >= 8)) {
                      let h = p[3],
                        g = "",
                        b = p[3].split(".");
                      b.length > 1 && ((g = b[b.length - 1]), b.pop(), (h = b.join(".")));
                      let A = p[4],
                        y = "",
                        E = p[4].split(".");
                      E.length > 1 && ((y = E[E.length - 1]), E.pop(), (A = E.join(".")));
                      let v = o.indexOf(p[5]) >= 0,
                        C = v ? p[5] : "UNKNOWN",
                        x = "";
                      p[p.length - 9].indexOf(":") >= 0
                        ? (x = p[p.length - 9].split(":")[1])
                        : ((x = p[f + (v ? 0 : -1)]), x.indexOf(":") >= 0 && (x = x.split(":")[1]));
                      let k = parseInt(x, 10);
                      C &&
                        r.push({
                          protocol: p[0],
                          localAddress: h,
                          localPort: g,
                          peerAddress: A,
                          peerPort: y,
                          state: C,
                          pid: k,
                          process: $ts(m, k),
                        });
                    }
                  }),
                  t && t(r),
                  e(r));
              });
          });
        }
        if (jAe) {
          let n = "netstat -nao";
          try {
            g6(n, An.execOptsWin, (o, s) => {
              o ||
                (s
                  .toString()
                  .split(
                    `\r
`,
                  )
                  .forEach((u) => {
                    if (((u = u.trim().replace(/ +/g, " ").split(" ")), u.length >= 4)) {
                      let c = u[1],
                        m = "",
                        d = u[1].split(":");
                      (d.length > 1 && ((m = d[d.length - 1]), d.pop(), (c = d.join(":"))),
                        (c = c.replace(/\[/g, "").replace(/\]/g, "")));
                      let f = u[2],
                        p = "",
                        h = u[2].split(":");
                      (h.length > 1 && ((p = h[h.length - 1]), h.pop(), (f = h.join(":"))),
                        (f = f.replace(/\[/g, "").replace(/\]/g, "")));
                      let g = An.toInt(u[4]),
                        b = u[3];
                      (b === "HERGESTELLT" && (b = "ESTABLISHED"),
                        b.startsWith("ABH") && (b = "LISTEN"),
                        b === "SCHLIESSEN_WARTEN" && (b = "CLOSE_WAIT"),
                        b === "WARTEND" && (b = "TIME_WAIT"),
                        b === "SYN_GESENDET" && (b = "SYN_SENT"),
                        b === "LISTENING" && (b = "LISTEN"),
                        b === "SYN_RECEIVED" && (b = "SYN_RECV"),
                        b === "FIN_WAIT_1" && (b = "FIN_WAIT1"),
                        b === "FIN_WAIT_2" && (b = "FIN_WAIT2"),
                        u[0].toLowerCase() !== "udp" && b
                          ? r.push({
                              protocol: u[0].toLowerCase(),
                              localAddress: c,
                              localPort: m,
                              peerAddress: f,
                              peerPort: p,
                              state: b,
                              pid: g,
                              process: "",
                            })
                          : u[0].toLowerCase() === "udp" &&
                            r.push({
                              protocol: u[0].toLowerCase(),
                              localAddress: c,
                              localPort: m,
                              peerAddress: f,
                              peerPort: p,
                              state: "",
                              pid: parseInt(u[3], 10),
                              process: "",
                            }));
                    }
                  }),
                t && t(r),
                e(r));
            });
          } catch {
            (t && t(r), e(r));
          }
        }
      });
    });
  }
  cH.networkConnections = jts;
  function Qts(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = "";
        if (VR || TL || DL || IL) {
          let n = "ip route get 1";
          try {
            g6(n, { maxBuffer: 1024 * 102400 }, (o, s) => {
              if (o) (t && t(r), e(r));
              else {
                let a = s.toString().split(`
`),
                  c = (a && a[0] ? a[0] : "").split(" via ");
                (c && c[1] && ((c = c[1].split(" ")), (r = c[0])), t && t(r), e(r));
              }
            });
          } catch {
            (t && t(r), e(r));
          }
        }
        if (WR) {
          let n = "route -n get default";
          try {
            g6(n, { maxBuffer: 1024 * 102400 }, (o, s) => {
              if (!o) {
                let a = s
                  .toString()
                  .split(
                    `
`,
                  )
                  .map((u) => u.trim());
                r = An.getValue(a, "gateway");
              }
              r
                ? (t && t(r), e(r))
                : ((n = "netstat -rn | awk '/default/ {print $2}'"),
                  g6(n, { maxBuffer: 1024 * 102400 }, (a, u) => {
                    ((r = u
                      .toString()
                      .split(
                        `
`,
                      )
                      .map((m) => m.trim())
                      .find((m) =>
                        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                          m,
                        ),
                      )),
                      t && t(r),
                      e(r));
                  }));
            });
          } catch {
            (t && t(r), e(r));
          }
        }
        if (jAe)
          try {
            g6("netstat -r", An.execOptsWin, (n, o) => {
              (o
                .toString()
                .split(aqe.EOL)
                .forEach((a) => {
                  if (((a = a.replace(/\s+/g, " ").trim()), a.indexOf("0.0.0.0 0.0.0.0") > -1 && !/[a-zA-Z]/.test(a))) {
                    let u = a.split(" ");
                    u.length >= 5 && u[u.length - 3].indexOf(".") > -1 && (r = u[u.length - 3]);
                  }
                }),
                r
                  ? (t && t(r), e(r))
                  : An.powerShell(
                      "Get-CimInstance -ClassName Win32_IP4RouteTable | Where-Object { $_.Destination -eq '0.0.0.0' -and $_.Mask -eq '0.0.0.0' }",
                    ).then((a) => {
                      let u = a.toString().split(`\r
`);
                      u.length > 1 && !r && ((r = An.getValue(u, "NextHop")), t && t(r), e(r));
                    }));
            });
          } catch {
            (t && t(r), e(r));
          }
      });
    });
  }
  cH.networkGatewayDefault = Qts;
});