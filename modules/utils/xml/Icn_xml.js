/**
 * @module Icn
 * @category utils/xml
 * @label xml
 * @position 715 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Icn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Icn = T((lqe) => {
  "use strict";
  var QAe = Ae("os"),
    aOt = Ae("child_process").exec,
    RL = Ae("child_process").execSync,
    bn = Ff(),
    uqe = process.platform,
    uOt = uqe === "linux" || uqe === "android",
    cOt = uqe === "darwin",
    lOt = uqe === "win32";
  function mOt(t) {
    let e = parseFloat(t);
    return e < 0 ? 0 : e >= 100 ? -50 : e / 2 - 100;
  }
  function cqe(t) {
    let e = 2 * (parseFloat(t) + 100);
    return e <= 100 ? e : 100;
  }
  var GAe = {
    1: 2412,
    2: 2417,
    3: 2422,
    4: 2427,
    5: 2432,
    6: 2437,
    7: 2442,
    8: 2447,
    9: 2452,
    10: 2457,
    11: 2462,
    12: 2467,
    13: 2472,
    14: 2484,
    32: 5160,
    34: 5170,
    36: 5180,
    38: 5190,
    40: 5200,
    42: 5210,
    44: 5220,
    46: 5230,
    48: 5240,
    50: 5250,
    52: 5260,
    54: 5270,
    56: 5280,
    58: 5290,
    60: 5300,
    62: 5310,
    64: 5320,
    68: 5340,
    96: 5480,
    100: 5500,
    102: 5510,
    104: 5520,
    106: 5530,
    108: 5540,
    110: 5550,
    112: 5560,
    114: 5570,
    116: 5580,
    118: 5590,
    120: 5600,
    122: 5610,
    124: 5620,
    126: 5630,
    128: 5640,
    132: 5660,
    134: 5670,
    136: 5680,
    138: 5690,
    140: 5700,
    142: 5710,
    144: 5720,
    149: 5745,
    151: 5755,
    153: 5765,
    155: 5775,
    157: 5785,
    159: 5795,
    161: 5805,
    165: 5825,
    169: 5845,
    173: 5865,
    183: 4915,
    184: 4920,
    185: 4925,
    187: 4935,
    188: 4940,
    189: 4945,
    192: 4960,
    196: 4980,
  };
  function qAe(t) {
    return {}.hasOwnProperty.call(GAe, t) ? GAe[t] : null;
  }
  function Gts(t) {
    let e = 0;
    for (let r in GAe) ({}).hasOwnProperty.call(GAe, r) && GAe[r] === t && (e = bn.toInt(r));
    return e;
  }
  function xcn() {
    let t = [],
      e = "iw dev 2>/dev/null";
    try {
      let n = RL(e, bn.execOptsLinux)
        .toString()
        .split(
          `
`,
        )
        .map((o) => o.trim()).join(`
`).split(`
Interface `);
      return (
        n.shift(),
        n.forEach((o) => {
          let s = o.split(`
`),
            a = s[0],
            u = bn.toInt(bn.getValue(s, "ifindex", " ")),
            c = bn.getValue(s, "addr", " "),
            m = bn.toInt(bn.getValue(s, "channel", " "));
          t.push({ id: u, iface: a, mac: c, channel: m });
        }),
        t
      );
    } catch {
      try {
        let o = RL(
            "nmcli -t -f general,wifi-properties,wired-properties,interface-flags,capabilities,nsp device show 2>/dev/null",
            bn.execOptsLinux,
          ).toString().split(`

`),
          s = 1;
        return (
          o.forEach((a) => {
            let u = a.split(`
`),
              c = bn.getValue(u, "GENERAL.DEVICE"),
              m = bn.getValue(u, "GENERAL.TYPE"),
              d = s++,
              f = bn.getValue(u, "GENERAL.HWADDR");
            m.toLowerCase() === "wifi" && t.push({ id: d, iface: c, mac: f, channel: "" });
          }),
          t
        );
      } catch {
        return [];
      }
    }
  }
  function Tcn(t) {
    let e = `nmcli -t -f general,wifi-properties,capabilities,ip4,ip6 device show ${t} 2> /dev/null`;
    try {
      let r = RL(e, bn.execOptsLinux).toString().split(`
`),
        n = bn.getValue(r, "GENERAL.CONNECTION");
      return {
        iface: t,
        type: bn.getValue(r, "GENERAL.TYPE"),
        vendor: bn.getValue(r, "GENERAL.VENDOR"),
        product: bn.getValue(r, "GENERAL.PRODUCT"),
        mac: bn.getValue(r, "GENERAL.HWADDR").toLowerCase(),
        ssid: n !== "--" ? n : null,
      };
    } catch {
      return {};
    }
  }
  function qts(t) {
    let e = `nmcli -t --show-secrets connection show ${t} 2>/dev/null`;
    try {
      let r = RL(e, bn.execOptsLinux).toString().split(`
`),
        n = bn.getValue(r, "802-11-wireless.seen-bssids").toLowerCase();
      return {
        ssid: t !== "--" ? t : null,
        uuid: bn.getValue(r, "connection.uuid"),
        type: bn.getValue(r, "connection.type"),
        autoconnect: bn.getValue(r, "connection.autoconnect") === "yes",
        security: bn.getValue(r, "802-11-wireless-security.key-mgmt"),
        bssid: n !== "--" ? n : null,
      };
    } catch {
      return {};
    }
  }
  function Hts(t) {
    if (!t) return {};
    let e = `wpa_cli -i ${t} status 2>&1`;
    try {
      let r = RL(e, bn.execOptsLinux).toString().split(`
`),
        n = bn.toInt(bn.getValue(r, "freq", "="));
      return {
        ssid: bn.getValue(r, "ssid", "="),
        uuid: bn.getValue(r, "uuid", "="),
        security: bn.getValue(r, "key_mgmt", "="),
        freq: n,
        channel: Gts(n),
        bssid: bn.getValue(r, "bssid", "=").toLowerCase(),
      };
    } catch {
      return {};
    }
  }
  function Dcn() {
    let t = [],
      e =
        "nmcli -t -m multiline --fields active,ssid,bssid,mode,chan,freq,signal,security,wpa-flags,rsn-flags device wifi list 2>/dev/null";
    try {
      let n = RL(e, bn.execOptsLinux).toString().split("ACTIVE:");
      return (
        n.shift(),
        n.forEach((o) => {
          o = "ACTIVE:" + o;
          let s = o.split(QAe.EOL),
            a = bn.getValue(s, "CHAN"),
            u = bn.getValue(s, "FREQ").toLowerCase().replace("mhz", "").trim(),
            c = bn.getValue(s, "SECURITY").replace("(", "").replace(")", ""),
            m = bn.getValue(s, "WPA-FLAGS").replace("(", "").replace(")", ""),
            d = bn.getValue(s, "RSN-FLAGS").replace("(", "").replace(")", ""),
            f = bn.getValue(s, "SIGNAL");
          t.push({
            ssid: bn.getValue(s, "SSID"),
            bssid: bn.getValue(s, "BSSID").toLowerCase(),
            mode: bn.getValue(s, "MODE"),
            channel: a ? parseInt(a, 10) : null,
            frequency: u ? parseInt(u, 10) : null,
            signalLevel: mOt(f),
            quality: f ? parseInt(f, 10) : null,
            security: c && c !== "none" ? c.split(" ") : [],
            wpaFlags: m && m !== "none" ? m.split(" ") : [],
            rsnFlags: d && d !== "none" ? d.split(" ") : [],
          });
        }),
        t
      );
    } catch {
      return [];
    }
  }
  function wcn(t) {
    let e = [];
    try {
      let r = RL(`export LC_ALL=C; iwlist ${t} scan 2>&1; unset LC_ALL`, bn.execOptsLinux)
        .toString()
        .split("        Cell ");
      return r[0].indexOf("resource busy") >= 0
        ? -1
        : (r.length > 1 &&
            (r.shift(),
            r.forEach((n) => {
              let o = n.split(`
`),
                s = bn.getValue(o, "channel", ":", !0),
                a =
                  o && o.length && o[0].indexOf("Address:") >= 0 ? o[0].split("Address:")[1].trim().toLowerCase() : "",
                u = bn.getValue(o, "mode", ":", !0),
                c = bn.getValue(o, "frequency", ":", !0),
                d = bn.getValue(o, "Quality", "=", !0).toLowerCase().split("signal level="),
                f = d.length > 1 ? bn.toInt(d[1]) : 0,
                p = f ? cqe(f) : 0,
                h = bn.getValue(o, "essid", ":", !0),
                g = n.indexOf(" WPA ") >= 0,
                b = n.indexOf("WPA2 ") >= 0,
                A = [];
              (g && A.push("WPA"), b && A.push("WPA2"));
              let y = [],
                E = "";
              (o.forEach((v) => {
                let C = v.trim().toLowerCase();
                if (C.indexOf("group cipher") >= 0) {
                  E && y.push(E);
                  let x = C.split(":");
                  x.length > 1 && (E = x[1].trim().toUpperCase());
                }
                if (C.indexOf("pairwise cipher") >= 0) {
                  let x = C.split(":");
                  x.length > 1 &&
                    (x[1].indexOf("tkip")
                      ? (E = E ? "TKIP/" + E : "TKIP")
                      : x[1].indexOf("ccmp")
                        ? (E = E ? "CCMP/" + E : "CCMP")
                        : x[1].indexOf("proprietary") && (E = E ? "PROP/" + E : "PROP"));
                }
                if (C.indexOf("authentication suites") >= 0) {
                  let x = C.split(":");
                  x.length > 1 &&
                    (x[1].indexOf("802.1x")
                      ? (E = E ? "802.1x/" + E : "802.1x")
                      : x[1].indexOf("psk") && (E = E ? "PSK/" + E : "PSK"));
                }
              }),
                E && y.push(E),
                e.push({
                  ssid: h,
                  bssid: a,
                  mode: u,
                  channel: s ? bn.toInt(s) : null,
                  frequency: c ? bn.toInt(c.replace(".", "")) : null,
                  signalLevel: f,
                  quality: p,
                  security: A,
                  wpaFlags: y,
                  rsnFlags: [],
                }));
            })),
          e);
    } catch {
      return -1;
    }
  }
  function Vts(t) {
    let e = [];
    try {
      let r = JSON.parse(t);
      return (
        (r = r.SPAirPortDataType[0].spairport_airport_interfaces[0].spairport_airport_other_local_wireless_networks),
        r.forEach((n) => {
          let o = [],
            s = n.spairport_security_mode || "";
          s === "spairport_security_mode_wep"
            ? o.push("WEP")
            : s === "spairport_security_mode_wpa2_personal"
              ? o.push("WPA2")
              : s.startsWith("spairport_security_mode_wpa2_enterprise")
                ? o.push("WPA2 EAP")
                : s.startsWith("pairport_security_mode_wpa3_transition")
                  ? o.push("WPA2/WPA3")
                  : s.startsWith("pairport_security_mode_wpa3") && o.push("WPA3");
          let a = parseInt(("" + n.spairport_network_channel).split(" ")[0]) || 0,
            u = n.spairport_signal_noise || null;
          e.push({
            ssid: n._name || "",
            bssid: n.spairport_network_bssid || null,
            mode: n.spairport_network_phymode,
            channel: a,
            frequency: qAe(a),
            signalLevel: u ? parseInt(u, 10) : null,
            quality: cqe(u),
            security: o,
            wpaFlags: [],
            rsnFlags: [],
          });
        }),
        e
      );
    } catch {
      return e;
    }
  }
  function Wts(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        if (uOt)
          if (((r = Dcn()), r.length === 0))
            try {
              let n = RL("export LC_ALL=C; iwconfig 2>/dev/null; unset LC_ALL", bn.execOptsLinux).toString().split(`

`),
                o = "";
              if (
                (n.forEach((s) => {
                  s.indexOf("no wireless") === -1 && s.trim() !== "" && (o = s.split(" ")[0]);
                }),
                o)
              ) {
                let s = "",
                  a = bn.isPrototypePolluted() ? "---" : bn.sanitizeShellString(o, !0),
                  u = bn.mathMin(a.length, 2e3);
                for (let m = 0; m <= u; m++) a[m] !== void 0 && (s = s + a[m]);
                let c = wcn(s);
                c === -1
                  ? setTimeout((m) => {
                      let d = wcn(m);
                      (d !== -1 && (r = d), t && t(r), e(r));
                    }, 4e3)
                  : ((r = c), t && t(r), e(r));
              } else (t && t(r), e(r));
            } catch {
              (t && t(r), e(r));
            }
          else (t && t(r), e(r));
        else
          cOt
            ? aOt("system_profiler SPAirPortDataType -json 2>/dev/null", { maxBuffer: 1024 * 4e4 }, (o, s) => {
                ((r = Vts(s.toString())), t && t(r), e(r));
              })
            : lOt
              ? bn.powerShell("netsh wlan show networks mode=Bssid").then((o) => {
                  let s = o.toString("utf8").split(QAe.EOL + QAe.EOL + "SSID ");
                  (s.shift(),
                    s.forEach((a) => {
                      let u = a.split(QAe.EOL);
                      if (u && u.length >= 8 && u[0].indexOf(":") >= 0) {
                        let c = a.split(" BSSID");
                        (c.shift(),
                          c.forEach((m) => {
                            let d = m.split(QAe.EOL),
                              f = d[0].split(":");
                            f.shift();
                            let p = f.join(":").trim().toLowerCase(),
                              h = d[3].split(":").pop().trim(),
                              g = d[1].split(":").pop().trim();
                            r.push({
                              ssid: u[0].split(":").pop().trim(),
                              bssid: p,
                              mode: "",
                              channel: h ? parseInt(h, 10) : null,
                              frequency: qAe(h),
                              signalLevel: mOt(g),
                              quality: g ? parseInt(g, 10) : null,
                              security: [u[2].split(":").pop().trim()],
                              wpaFlags: [u[3].split(":").pop().trim()],
                              rsnFlags: [],
                            });
                          }));
                      }
                    }),
                    t && t(r),
                    e(r));
                })
              : (t && t(r), e(r));
      });
    });
  }
  lqe.wifiNetworks = Wts;
  function zts(t) {
    t = t.toLowerCase();
    let e = "";
    return (
      t.indexOf("intel") >= 0
        ? (e = "Intel")
        : t.indexOf("realtek") >= 0
          ? (e = "Realtek")
          : t.indexOf("qualcom") >= 0
            ? (e = "Qualcom")
            : t.indexOf("broadcom") >= 0
              ? (e = "Broadcom")
              : t.indexOf("cavium") >= 0
                ? (e = "Cavium")
                : t.indexOf("cisco") >= 0
                  ? (e = "Cisco")
                  : t.indexOf("marvel") >= 0
                    ? (e = "Marvel")
                    : t.indexOf("zyxel") >= 0
                      ? (e = "Zyxel")
                      : t.indexOf("melanox") >= 0
                        ? (e = "Melanox")
                        : t.indexOf("d-link") >= 0
                          ? (e = "D-Link")
                          : t.indexOf("tp-link") >= 0
                            ? (e = "TP-Link")
                            : t.indexOf("asus") >= 0
                              ? (e = "Asus")
                              : t.indexOf("linksys") >= 0 && (e = "Linksys"),
      e
    );
  }
  function Yts(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        if (uOt) {
          let n = xcn(),
            o = Dcn();
          (n.forEach((s) => {
            let a = "",
              u = bn.isPrototypePolluted() ? "---" : bn.sanitizeShellString(s.iface, !0),
              c = bn.mathMin(u.length, 2e3);
            for (let C = 0; C <= c; C++) u[C] !== void 0 && (a = a + u[C]);
            let m = Tcn(a),
              d = Hts(a),
              f = m.ssid || d.ssid,
              p = o.filter((C) => C.ssid === f),
              h = "",
              g = bn.isPrototypePolluted() ? "---" : bn.sanitizeShellString(f, !0),
              b = bn.mathMin(g.length, 32);
            for (let C = 0; C <= b; C++) g[C] !== void 0 && (h = h + g[C]);
            let A = qts(h),
              y = p && p.length && p[0].channel ? p[0].channel : d.channel ? d.channel : null,
              E = p && p.length && p[0].bssid ? p[0].bssid : d.bssid ? d.bssid : null,
              v = p && p.length && p[0].signalLevel ? p[0].signalLevel : null;
            f &&
              E &&
              r.push({
                id: s.id,
                iface: s.iface,
                model: m.product,
                ssid: f,
                bssid: p && p.length && p[0].bssid ? p[0].bssid : d.bssid ? d.bssid : null,
                channel: y,
                frequency: y ? qAe(y) : null,
                type: A.type ? A.type : "802.11",
                security: A.security ? A.security : d.security ? d.security : null,
                signalLevel: v,
                quality: cqe(v),
                txRate: null,
              });
          }),
            t && t(r),
            e(r));
        } else
          cOt
            ? aOt(
                'system_profiler SPNetworkDataType SPAirPortDataType -xml 2>/dev/null; echo "######" ; ioreg -n AppleBCMWLANSkywalkInterface -r 2>/dev/null',
                (o, s) => {
                  try {
                    let a = s.toString().split("######"),
                      u = bn.plistParser(a[0]),
                      c = u[0]._SPCommandLineArguments.indexOf("SPNetworkDataType") >= 0 ? u[0]._items : u[1]._items,
                      m =
                        u[0]._SPCommandLineArguments.indexOf("SPAirPortDataType") >= 0
                          ? u[0]._items[0].spairport_airport_interfaces
                          : u[1]._items[0].spairport_airport_interfaces,
                      d = [];
                    a[1].indexOf("  | {") > 0 &&
                      a[1].indexOf("  | }") > a[1].indexOf("  | {") &&
                      (d = a[1].split("  | {")[1].split("  | }")[0].replace(/ \| /g, "").replace(/"/g, "").split(`
`));
                    let f = c.find((y) => y._name === "Wi-Fi"),
                      p = m[0].spairport_current_network_information,
                      h = parseInt(("" + p.spairport_network_channel).split(" ")[0], 10) || 0,
                      g = p.spairport_signal_noise || null,
                      b = [],
                      A = p.spairport_security_mode || "";
                    (A === "spairport_security_mode_wep"
                      ? b.push("WEP")
                      : A === "spairport_security_mode_wpa2_personal"
                        ? b.push("WPA2")
                        : A.startsWith("spairport_security_mode_wpa2_enterprise")
                          ? b.push("WPA2 EAP")
                          : A.startsWith("pairport_security_mode_wpa3_transition")
                            ? b.push("WPA2/WPA3")
                            : A.startsWith("pairport_security_mode_wpa3") && b.push("WPA3"),
                      r.push({
                        id: f._name || "Wi-Fi",
                        iface: f.interface || "",
                        model: f.hardware || "",
                        ssid: (p._name || "").replace("&lt;", "<").replace("&gt;", ">"),
                        bssid: p.spairport_network_bssid || "",
                        channel: h,
                        frequency: h ? qAe(h) : null,
                        type: p.spairport_network_phymode || "802.11",
                        security: b,
                        signalLevel: g ? parseInt(g, 10) : null,
                        quality: cqe(g),
                        txRate: p.spairport_network_rate || null,
                      }));
                  } catch {
                    bn.noop();
                  }
                  (t && t(r), e(r));
                },
              )
            : lOt
              ? bn.powerShell("netsh wlan show interfaces").then((o) => {
                  let s = o.toString().split(`\r
`);
                  for (let u = 0; u < s.length; u++) s[u] = s[u].trim();
                  let a = s.join(`\r
`).split(`:\r
\r
`);
                  (a.shift(),
                    a.forEach((u) => {
                      let c = u.split(`\r
`);
                      if (c.length >= 5) {
                        let m = c[0].indexOf(":") >= 0 ? c[0].split(":")[1].trim() : "",
                          d = c[1].indexOf(":") >= 0 ? c[1].split(":")[1].trim() : "",
                          f = c[2].indexOf(":") >= 0 ? c[2].split(":")[1].trim() : "",
                          p = bn.getValue(c, "SSID", ":", !0),
                          h = bn.getValue(c, "BSSID", ":", !0) || bn.getValue(c, "AP BSSID", ":", !0),
                          g = bn.getValue(c, "Signal", ":", !0),
                          b = mOt(g),
                          A =
                            bn.getValue(c, "Radio type", ":", !0) ||
                            bn.getValue(c, "Type de radio", ":", !0) ||
                            bn.getValue(c, "Funktyp", ":", !0) ||
                            null,
                          y =
                            bn.getValue(c, "authentication", ":", !0) ||
                            bn.getValue(c, "Authentification", ":", !0) ||
                            bn.getValue(c, "Authentifizierung", ":", !0) ||
                            null,
                          E =
                            bn.getValue(c, "Channel", ":", !0) ||
                            bn.getValue(c, "Canal", ":", !0) ||
                            bn.getValue(c, "Kanal", ":", !0) ||
                            null,
                          v =
                            bn.getValue(c, "Transmit rate (mbps)", ":", !0) ||
                            bn.getValue(c, "Transmission (mbit/s)", ":", !0) ||
                            bn.getValue(c, "Empfangsrate (MBit/s)", ":", !0) ||
                            null;
                        d &&
                          f &&
                          p &&
                          h &&
                          r.push({
                            id: f,
                            iface: m,
                            model: d,
                            ssid: p,
                            bssid: h,
                            channel: bn.toInt(E),
                            frequency: E ? qAe(E) : null,
                            type: A,
                            security: y,
                            signalLevel: b,
                            quality: g ? parseInt(g, 10) : null,
                            txRate: bn.toInt(v) || null,
                          });
                      }
                    }),
                    t && t(r),
                    e(r));
                })
              : (t && t(r), e(r));
      });
    });
  }
  lqe.wifiConnections = Yts;
  function Kts(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        uOt
          ? (xcn().forEach((o) => {
              let s = Tcn(o.iface);
              r.push({
                id: o.id,
                iface: o.iface,
                model: s.product ? s.product : null,
                vendor: s.vendor ? s.vendor : null,
                mac: o.mac,
              });
            }),
            t && t(r),
            e(r))
          : cOt
            ? aOt("system_profiler SPNetworkDataType", (o, s) => {
                let a = s.toString().split(`

    Wi-Fi:

`);
                if (a.length > 1) {
                  let u = a[1].split(`

`)[0].split(`
`),
                    c = bn.getValue(u, "BSD Device Name", ":", !0),
                    m = bn.getValue(u, "MAC Address", ":", !0),
                    d = bn.getValue(u, "hardware", ":", !0);
                  r.push({ id: "Wi-Fi", iface: c, model: d, vendor: "", mac: m });
                }
                (t && t(r), e(r));
              })
            : lOt
              ? bn.powerShell("netsh wlan show interfaces").then((o) => {
                  let s = o.toString().split(`\r
`);
                  for (let u = 0; u < s.length; u++) s[u] = s[u].trim();
                  let a = s.join(`\r
`).split(`:\r
\r
`);
                  (a.shift(),
                    a.forEach((u) => {
                      let c = u.split(`\r
`);
                      if (c.length >= 5) {
                        let m = c[0].indexOf(":") >= 0 ? c[0].split(":")[1].trim() : "",
                          d = c[1].indexOf(":") >= 0 ? c[1].split(":")[1].trim() : "",
                          f = c[2].indexOf(":") >= 0 ? c[2].split(":")[1].trim() : "",
                          p = c[3].indexOf(":") >= 0 ? c[3].split(":") : [];
                        p.shift();
                        let h = p.join(":").trim(),
                          g = zts(d);
                        m && d && f && h && r.push({ id: f, iface: m, model: d, vendor: g, mac: h });
                      }
                    }),
                    t && t(r),
                    e(r));
                })
              : (t && t(r), e(r));
      });
    });
  }
  lqe.wifiInterfaces = Kts;
});