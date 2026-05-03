/**
 * @module Ff
 * @category app/i18n
 * @label iflow-i18n
 * @position 706 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ff) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Functions: mes, BZo, GZo, les, oes, ces, Dun, MZo, ZZo, LZo, xZo, ees, ies, ues, DZo
 * Features: esbuild module exports: Ff, dotenv related
 * === End semantic info ===
 */


var Ff = T((fo) => {
  "use strict";
  var hL = Ae("os"),
    bT = Ae("fs"),
    vZo = Ae("path"),
    Qkt = Ae("child_process").spawn,
    CZo = Ae("child_process").exec,
    OAe = Ae("child_process").execSync,
    SZo = Ae("util"),
    nH = process.platform,
    Gkt = nH === "linux" || nH === "android",
    Iun = nH === "darwin",
    FGe = nH === "win32",
    Run = nH === "freebsd",
    kun = nH === "openbsd",
    Oun = nH === "netbsd",
    Lkt = 0,
    f4 = "",
    pL = null,
    p4 = null,
    Nun = process.env.WINDIR || "C:\\Windows",
    Rp,
    tie = "",
    kAe = [],
    qkt = !1,
    LGe = "",
    xun =
      "$OutputEncoding = [System.Console]::OutputEncoding = [System.Console]::InputEncoding = [System.Text.Encoding]::UTF8 ; ",
    Fkt = "--###START###--",
    Tun = "--ERROR--",
    MGe = "--###ENDCMD###--",
    Ukt = "--##ID##--",
    UGe = {
      windowsHide: !0,
      maxBuffer: 1024 * 102400,
      encoding: "UTF-8",
      env: Object.assign({}, process.env, { LANG: "en_US.UTF-8" }),
    },
    $Ge = { maxBuffer: 1024 * 102400, encoding: "UTF-8", stdio: ["pipe", "pipe", "ignore"] };
  function wZo(t) {
    let e = parseInt(t, 10);
    return (isNaN(e) && (e = 0), e);
  }
  function xZo(t) {
    let e = !1,
      r = "",
      n = "";
    for (let o of t) (o >= "0" && o <= "9") || e ? ((e = !0), (r += o)) : (n += o);
    return [n, r];
  }
  var BGe = new String(),
    $kt = new String().replace,
    jkt = new String().toLowerCase,
    Pun = new String().toString,
    Bun = new String().substr,
    Lun = new String().substring,
    Mun = new String().trim,
    Fun = new String().startsWith,
    Uun = Math.min;
  function TZo(t) {
    return t && {}.toString.call(t) === "[object Function]";
  }
  function DZo(t) {
    let e = [],
      r = {};
    for (let n = 0; n < t.length; n++) {
      let o = Object.keys(t[n]);
      o.sort((a, u) => a - u);
      let s = "";
      for (let a = 0; a < o.length; a++) ((s += JSON.stringify(o[a])), (s += JSON.stringify(t[n][o[a]])));
      ({}).hasOwnProperty.call(r, s) || (e.push(t[n]), (r[s] = !0));
    }
    return e;
  }
  function IZo(t, e) {
    return t.sort((r, n) => {
      let o = "",
        s = "";
      return (
        e.forEach((a) => {
          ((o = o + r[a]), (s = s + n[a]));
        }),
        o < s ? -1 : o > s ? 1 : 0
      );
    });
  }
  function RZo() {
    return (Lkt === 0 && (Lkt = hL.cpus().length), Lkt);
  }
  function gL(t, e, r, n, o) {
    ((r = r || ":"), (e = e.toLowerCase()), (n = n || !1), (o = o || !1));
    let s = "";
    return (
      t.some((a) => {
        let u = a.toLowerCase().replace(/\t/g, "");
        if ((n && (u = u.trim()), u.startsWith(e) && (!o || u.match(e + r) || u.match(e + " " + r)))) {
          let c = n ? a.trim().split(r) : a.split(r);
          if (c.length >= 2) return (c.shift(), (s = c.join(r).trim()), !0);
        }
        return !1;
      }),
      s
    );
  }
  function kZo(t, e) {
    return (
      (e = e || 16),
      t.replace(/\\x([0-9A-Fa-f]{2})/g, function () {
        return String.fromCharCode(parseInt(arguments[1], e));
      })
    );
  }
  function OZo(t) {
    let e = "",
      r = 0;
    return (
      t.split("").forEach((n) => {
        n >= "0" && n <= "9" ? r === 1 && r++ : (r === 0 && r++, r === 1 && (e += n));
      }),
      e
    );
  }
  function NZo(t, e) {
    ((e = e || ""), (t = t.toUpperCase()));
    let r = 0,
      n = 0,
      o = OZo(t),
      s = t.split(o);
    if (s.length >= 2) {
      s[2] && (s[1] += s[2]);
      let a =
        (s[1] && s[1].toLowerCase().indexOf("pm") > -1) ||
        s[1].toLowerCase().indexOf("p.m.") > -1 ||
        s[1].toLowerCase().indexOf("p. m.") > -1 ||
        s[1].toLowerCase().indexOf("n") > -1 ||
        s[1].toLowerCase().indexOf("ch") > -1 ||
        s[1].toLowerCase().indexOf("\xF6s") > -1 ||
        (e && s[1].toLowerCase().indexOf(e) > -1);
      return (
        (r = parseInt(s[0], 10)),
        (n = parseInt(s[1], 10)),
        (r = a && r < 12 ? r + 12 : r),
        ("0" + r).substr(-2) + ":" + ("0" + n).substr(-2)
      );
    }
  }
  function PZo(t, e) {
    let r = { date: "", time: "" };
    e = e || {};
    let n = (e.dateFormat || "").toLowerCase(),
      o = e.pmDesignator || "",
      s = t.split(" ");
    if (s[0]) {
      if (s[0].indexOf("/") >= 0) {
        let a = s[0].split("/");
        a.length === 3 &&
          (a[0].length === 4
            ? (r.date = a[0] + "-" + ("0" + a[1]).substr(-2) + "-" + ("0" + a[2]).substr(-2))
            : a[2].length === 2
              ? (n.indexOf("/d/") > -1 || n.indexOf("/dd/") > -1,
                (r.date = "20" + a[2] + "-" + ("0" + a[1]).substr(-2) + "-" + ("0" + a[0]).substr(-2)))
              : (t.toLowerCase().indexOf("pm") > -1 ||
                    t.toLowerCase().indexOf("p.m.") > -1 ||
                    t.toLowerCase().indexOf("p. m.") > -1 ||
                    t.toLowerCase().indexOf("am") > -1 ||
                    t.toLowerCase().indexOf("a.m.") > -1 ||
                    t.toLowerCase().indexOf("a. m.") > -1 ||
                    n.indexOf("/d/") > -1 ||
                    n.indexOf("/dd/") > -1) &&
                  n.indexOf("dd/") !== 0
                ? (r.date = a[2] + "-" + ("0" + a[0]).substr(-2) + "-" + ("0" + a[1]).substr(-2))
                : (r.date = a[2] + "-" + ("0" + a[1]).substr(-2) + "-" + ("0" + a[0]).substr(-2)));
      }
      if (s[0].indexOf(".") >= 0) {
        let a = s[0].split(".");
        a.length === 3 &&
          (n.indexOf(".d.") > -1 || n.indexOf(".dd.") > -1
            ? (r.date = a[2] + "-" + ("0" + a[0]).substr(-2) + "-" + ("0" + a[1]).substr(-2))
            : (r.date = a[2] + "-" + ("0" + a[1]).substr(-2) + "-" + ("0" + a[0]).substr(-2)));
      }
      if (s[0].indexOf("-") >= 0) {
        let a = s[0].split("-");
        a.length === 3 && (r.date = a[0] + "-" + ("0" + a[1]).substr(-2) + "-" + ("0" + a[2]).substr(-2));
      }
    }
    if (s[1]) {
      s.shift();
      let a = s.join(" ");
      r.time = NZo(a, o);
    }
    return r;
  }
  function BZo(t, e) {
    let r = e > 0,
      n = 1,
      o = 0,
      s = 0,
      a = [];
    for (let c = 0; c < t.length; c++)
      n <= e
        ? (/\s/.test(t[c]) &&
            !r &&
            ((s = c - 1), a.push({ from: o, to: s + 1, cap: t.substring(o, s + 1) }), (o = s + 2), n++),
          (r = t[c] === " "))
        : (!/\s/.test(t[c]) &&
            r &&
            ((s = c - 1), o < s && a.push({ from: o, to: s, cap: t.substring(o, s) }), (o = s + 1), n++),
          (r = t[c] === " "));
    ((s = 5e3), a.push({ from: o, to: s, cap: t.substring(o, s) }));
    let u = a.length;
    for (let c = 0; c < u; c++)
      a[c].cap.replace(/\s/g, "").length === 0 &&
        c + 1 < u &&
        ((a[c].to = a[c + 1].to), (a[c].cap = a[c].cap + a[c + 1].cap), a.splice(c + 1, 1), (u = u - 1));
    return a;
  }
  function LZo(t, e, r) {
    for (let n = 0; n < t.length; n++) if (t[n][e] === r) return n;
    return -1;
  }
  function MZo() {
    if (((LGe = "powershell.exe"), FGe)) {
      let t = `${Nun}\\system32\\WindowsPowerShell\\v1.0\\powershell.exe`;
      bT.existsSync(t) && (LGe = t);
    }
  }
  function FZo() {
    return FGe
      ? `"${process.env.VBOX_INSTALL_PATH || process.env.VBOX_MSI_INSTALL_PATH}\\VBoxManage.exe"`
      : "vboxmanage";
  }
  function Mkt(t) {
    let e = "",
      r,
      n = "";
    if (t.indexOf(Fkt) >= 0) {
      r = t.split(Fkt);
      let s = r[1].split(Ukt);
      ((e = s[0]), s.length > 1 && (t = s.slice(1).join(Ukt)));
    }
    t.indexOf(MGe) >= 0 && ((r = t.split(MGe)), (n = r[0]));
    let o = -1;
    for (let s = 0; s < kAe.length; s++) kAe[s].id === e && ((o = s), kAe[s].callback(n));
    o >= 0 && kAe.splice(o, 1);
  }
  function UZo() {
    Rp ||
      ((Rp = Qkt(LGe, ["-NoProfile", "-NoLogo", "-InputFormat", "Text", "-NoExit", "-Command", "-"], {
        stdio: "pipe",
        windowsHide: !0,
        maxBuffer: 1024 * 102400,
        encoding: "UTF-8",
        env: Object.assign({}, process.env, { LANG: "en_US.UTF-8" }),
      })),
      Rp &&
        Rp.pid &&
        ((qkt = !0),
        Rp.stdout.on("data", (t) => {
          ((tie = tie + t.toString("utf8")), t.indexOf(MGe) >= 0 && (Mkt(tie), (tie = "")));
        }),
        Rp.stderr.on("data", () => {
          Mkt(tie + Tun);
        }),
        Rp.on("error", () => {
          Mkt(tie + Tun);
        }),
        Rp.on("close", () => {
          Rp && Rp.kill();
        })));
  }
  function $Zo() {
    try {
      Rp && (Rp.stdin.write("exit" + hL.EOL), Rp.stdin.end());
    } catch {
      Rp && Rp.kill();
    }
    ((qkt = !1), (Rp = null));
  }
  function jZo(t) {
    if (qkt) {
      let e = Math.random().toString(36).substring(2, 12);
      return new Promise((r) => {
        process.nextTick(() => {
          function n(o) {
            r(o);
          }
          kAe.push({ id: e, cmd: t, callback: n, start: new Date() });
          try {
            Rp &&
              Rp.pid &&
              Rp.stdin.write(xun + "echo " + Fkt + e + Ukt + "; " + hL.EOL + t + hL.EOL + "echo " + MGe + hL.EOL);
          } catch {
            r("");
          }
        });
      });
    } else {
      let e = "";
      return new Promise((r) => {
        process.nextTick(() => {
          try {
            let n = hL.release().split(".").map(Number),
              o =
                n[0] < 10
                  ? [
                      "-NoProfile",
                      "-NoLogo",
                      "-InputFormat",
                      "Text",
                      "-NoExit",
                      "-ExecutionPolicy",
                      "Unrestricted",
                      "-Command",
                      "-",
                    ]
                  : [
                      "-NoProfile",
                      "-NoLogo",
                      "-InputFormat",
                      "Text",
                      "-ExecutionPolicy",
                      "Unrestricted",
                      "-Command",
                      t,
                    ],
              s = Qkt(LGe, o, {
                stdio: "pipe",
                windowsHide: !0,
                maxBuffer: 1024 * 102400,
                encoding: "UTF-8",
                env: Object.assign({}, process.env, { LANG: "en_US.UTF-8" }),
              });
            if (
              (s &&
                !s.pid &&
                s.on("error", () => {
                  r(e);
                }),
              s && s.pid)
            ) {
              if (
                (s.stdout.on("data", (a) => {
                  e = e + a.toString("utf8");
                }),
                s.stderr.on("data", () => {
                  (s.kill(), r(e));
                }),
                s.on("close", () => {
                  (s.kill(), r(e));
                }),
                s.on("error", () => {
                  (s.kill(), r(e));
                }),
                n[0] < 10)
              )
                try {
                  (s.stdin.write(xun + t + hL.EOL), s.stdin.write("exit" + hL.EOL), s.stdin.end());
                } catch {
                  (s.kill(), r(e));
                }
            } else r(e);
          } catch {
            r(e);
          }
        });
      });
    }
  }
  function QZo(t, e, r) {
    let n = "";
    return (
      (r = r || {}),
      new Promise((o) => {
        process.nextTick(() => {
          try {
            let s = Qkt(t, e, r);
            (s &&
              !s.pid &&
              s.on("error", () => {
                o(n);
              }),
              s && s.pid
                ? (s.stdout.on("data", (a) => {
                    n += a.toString();
                  }),
                  s.on("close", () => {
                    (s.kill(), o(n));
                  }),
                  s.on("error", () => {
                    (s.kill(), o(n));
                  }))
                : o(n));
          } catch {
            o(n);
          }
        });
      })
    );
  }
  function GZo() {
    if (FGe) {
      if (!f4)
        try {
          let r = OAe("chcp", UGe)
            .toString()
            .split(
              `\r
`,
            )[0]
            .split(":");
          f4 = r.length > 1 ? r[1].replace(".", "").trim() : "";
        } catch {
          f4 = "437";
        }
      return f4;
    }
    if (Gkt || Iun || Run || kun || Oun) {
      if (!f4)
        try {
          let r = OAe("echo $LANG", $Ge)
            .toString()
            .split(
              `\r
`,
            )[0]
            .split(".");
          ((f4 = r.length > 1 ? r[1].trim() : ""), f4 || (f4 = "UTF-8"));
        } catch {
          f4 = "UTF-8";
        }
      return f4;
    }
  }
  function qZo() {
    if (pL !== null) return pL;
    if (((pL = !1), FGe))
      try {
        let t = OAe("WHERE smartctl 2>nul", UGe).toString().split(`\r
`);
        t && t.length ? (pL = t[0].indexOf(":\\") >= 0) : (pL = !1);
      } catch {
        pL = !1;
      }
    if (Gkt || Iun || Run || kun || Oun)
      try {
        pL =
          OAe("which smartctl 2>/dev/null", $Ge).toString().split(`\r
`).length > 0;
      } catch {
        SZo.noop();
      }
    return pL;
  }
  function HZo(t) {
    let e = ["BCM2708", "BCM2709", "BCM2710", "BCM2711", "BCM2712", "BCM2835", "BCM2836", "BCM2837", "BCM2837B0"];
    if (p4 !== null) t = p4;
    else if (t === void 0)
      try {
        ((t = bT.readFileSync("/proc/cpuinfo", { encoding: "utf8" }).toString().split(`
`)),
          (p4 = t));
      } catch {
        return !1;
      }
    let r = gL(t, "hardware"),
      n = gL(t, "model");
    return (r && e.indexOf(r) > -1) || (n && n.indexOf("Raspberry Pi") > -1);
  }
  function VZo() {
    let t = [];
    try {
      t = bT.readFileSync("/etc/os-release", { encoding: "utf8" }).toString().split(`
`);
    } catch {
      return !1;
    }
    let e = gL(t, "id", "=");
    return e && e.indexOf("raspbian") > -1;
  }
  function WZo(t, e, r) {
    r || ((r = e), (e = UGe));
    let n = "chcp 65001 > nul && cmd /C " + t + " && chcp " + f4 + " > nul";
    CZo(n, e, (o, s) => {
      r(o, s);
    });
  }
  function zZo() {
    let t = bT.existsSync("/Library/Developer/CommandLineTools/usr/bin/"),
      e = bT.existsSync("/Applications/Xcode.app/Contents/Developer/Tools"),
      r = bT.existsSync("/Library/Developer/Xcode/");
    return t || r || e;
  }
  function YZo() {
    let t = process.hrtime();
    return !Array.isArray(t) || t.length !== 2 ? 0 : +t[0] * 1e9 + +t[1];
  }
  function KZo(t, e) {
    e = e || "";
    let r = [];
    return (
      t.forEach((n) => {
        n.startsWith(e) && r.indexOf(n) === -1 && r.push(n);
      }),
      r.length
    );
  }
  function JZo(t, e) {
    e = e || "";
    let r = [];
    return (
      t.forEach((n) => {
        n.startsWith(e) && r.push(n);
      }),
      r.length
    );
  }
  function XZo(t, e) {
    typeof e > "u" && (e = !1);
    let r = t || "",
      n = "",
      o = Uun(r.length, 2e3);
    for (let s = 0; s <= o; s++)
      r[s] === void 0 ||
        r[s] === ">" ||
        r[s] === "<" ||
        r[s] === "*" ||
        r[s] === "?" ||
        r[s] === "[" ||
        r[s] === "]" ||
        r[s] === "|" ||
        r[s] === "\u02DA" ||
        r[s] === "$" ||
        r[s] === ";" ||
        r[s] === "&" ||
        r[s] === "]" ||
        r[s] === "#" ||
        r[s] === "\\" ||
        r[s] === "	" ||
        r[s] ===
          `
` ||
        r[s] === "\r" ||
        r[s] === "'" ||
        r[s] === "`" ||
        r[s] === '"' ||
        r[s].length > 1 ||
        (e && r[s] === "(") ||
        (e && r[s] === ")") ||
        (e && r[s] === "@") ||
        (e && r[s] === " ") ||
        (e && r[s] === "{") ||
        (e && r[s] === ";") ||
        (e && r[s] === "}") ||
        (n = n + r[s]);
    return n;
  }
  function ZZo() {
    let t = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      e = !0,
      r = "";
    try {
      ((r.__proto__.replace = $kt),
        (r.__proto__.toLowerCase = jkt),
        (r.__proto__.toString = Pun),
        (r.__proto__.substr = Bun),
        (r.__proto__.substring = Lun),
        (r.__proto__.trim = Mun),
        (r.__proto__.startsWith = Fun));
    } catch {
      Object.setPrototypeOf(r, BGe);
    }
    e = e || t.length !== 62;
    let n = Date.now();
    if (typeof n == "number" && n > 16e11) {
      let o = (n % 100) + 15;
      for (let m = 0; m < o; m++) {
        let d = Math.random() * 61.99999999 + 1,
          f = parseInt(Math.floor(d).toString(), 10),
          p = parseInt(d.toString().split(".")[0], 10),
          h = Math.random() * 61.99999999 + 1,
          g = parseInt(Math.floor(h).toString(), 10),
          b = parseInt(h.toString().split(".")[0], 10);
        ((e = e && d !== h), (e = e && f === p && g === b), (r += t[f - 1]));
      }
      e = e && r.length === o;
      let s = Math.random() * o * 0.9999999999,
        a = r.substr(0, s) + " " + r.substr(s, 2e3);
      try {
        a.__proto__.replace = $kt;
      } catch {
        Object.setPrototypeOf(a, BGe);
      }
      let u = a.replace(/ /g, "");
      ((e = e && r === u),
        (s = Math.random() * o * 0.9999999999),
        (a = r.substr(0, s) + "{" + r.substr(s, 2e3)),
        (u = a.replace(/{/g, "")),
        (e = e && r === u),
        (s = Math.random() * o * 0.9999999999),
        (a = r.substr(0, s) + "*" + r.substr(s, 2e3)),
        (u = a.replace(/\*/g, "")),
        (e = e && r === u),
        (s = Math.random() * o * 0.9999999999),
        (a = r.substr(0, s) + "$" + r.substr(s, 2e3)),
        (u = a.replace(/\$/g, "")),
        (e = e && r === u));
      let c = r.toLowerCase();
      e = e && c.length === o && c[o - 1] && !c[o];
      for (let m = 0; m < o; m++) {
        let d = r[m];
        try {
          d.__proto__.toLowerCase = jkt;
        } catch {
          Object.setPrototypeOf(r, BGe);
        }
        let f = c ? c[m] : "",
          p = d.toLowerCase();
        e = e && p[0] === f && p[0] && !p[1];
      }
    }
    return !e;
  }
  function ees(t) {
    return ("00000000" + parseInt(t, 16).toString(2)).substr(-8);
  }
  function tes(t) {
    let e = bT.lstatSync,
      r = bT.readdirSync,
      n = vZo.join;
    function o(m) {
      return e(m).isDirectory();
    }
    function s(m) {
      return e(m).isFile();
    }
    function a(m) {
      return r(m)
        .map((d) => n(m, d))
        .filter(o);
    }
    function u(m) {
      return r(m)
        .map((d) => n(m, d))
        .filter(s);
    }
    function c(m) {
      try {
        return a(m)
          .map((p) => c(p))
          .reduce((p, h) => p.concat(h), [])
          .concat(u(m));
      } catch {
        return [];
      }
    }
    return bT.existsSync(t) ? c(t) : [];
  }
  function $un(t) {
    p4 === null ? (p4 = t) : t === void 0 && (t = p4);
    let e = {
        "0002": { type: "B", revision: "1.0", memory: 256, manufacturer: "Egoman", processor: "BCM2835" },
        "0003": { type: "B", revision: "1.0", memory: 256, manufacturer: "Egoman", processor: "BCM2835" },
        "0004": { type: "B", revision: "2.0", memory: 256, manufacturer: "Sony UK", processor: "BCM2835" },
        "0005": { type: "B", revision: "2.0", memory: 256, manufacturer: "Qisda", processor: "BCM2835" },
        "0006": { type: "B", revision: "2.0", memory: 256, manufacturer: "Egoman", processor: "BCM2835" },
        "0007": { type: "A", revision: "2.0", memory: 256, manufacturer: "Egoman", processor: "BCM2835" },
        "0008": { type: "A", revision: "2.0", memory: 256, manufacturer: "Sony UK", processor: "BCM2835" },
        "0009": { type: "A", revision: "2.0", memory: 256, manufacturer: "Qisda", processor: "BCM2835" },
        "000d": { type: "B", revision: "2.0", memory: 512, manufacturer: "Egoman", processor: "BCM2835" },
        "000e": { type: "B", revision: "2.0", memory: 512, manufacturer: "Sony UK", processor: "BCM2835" },
        "000f": { type: "B", revision: "2.0", memory: 512, manufacturer: "Egoman", processor: "BCM2835" },
        "0010": { type: "B+", revision: "1.2", memory: 512, manufacturer: "Sony UK", processor: "BCM2835" },
        "0011": { type: "CM1", revision: "1.0", memory: 512, manufacturer: "Sony UK", processor: "BCM2835" },
        "0012": { type: "A+", revision: "1.1", memory: 256, manufacturer: "Sony UK", processor: "BCM2835" },
        "0013": { type: "B+", revision: "1.2", memory: 512, manufacturer: "Embest", processor: "BCM2835" },
        "0014": { type: "CM1", revision: "1.0", memory: 512, manufacturer: "Embest", processor: "BCM2835" },
        "0015": { type: "A+", revision: "1.1", memory: 256, manufacturer: "512MB	Embest", processor: "BCM2835" },
      },
      r = ["BCM2835", "BCM2836", "BCM2837", "BCM2711", "BCM2712"],
      n = ["Sony UK", "Egoman", "Embest", "Sony Japan", "Embest", "Stadium"],
      o = {
        "00": "A",
        "01": "B",
        "02": "A+",
        "03": "B+",
        "04": "2B",
        "05": "Alpha (early prototype)",
        "06": "CM1",
        "08": "3B",
        "09": "Zero",
        "0a": "CM3",
        "0c": "Zero W",
        "0d": "3B+",
        "0e": "3A+",
        "0f": "Internal use only",
        10: "CM3+",
        11: "4B",
        12: "Zero 2 W",
        13: "400",
        14: "CM4",
        15: "CM4S",
        16: "Internal use only",
        17: "5",
        18: "CM5",
        19: "500/500+",
        "1a": "CM5 Lite",
      },
      s = gL(t, "revision", ":", !0),
      a = gL(t, "model:", ":", !0),
      u = gL(t, "serial", ":", !0),
      c = {};
    if ({}.hasOwnProperty.call(e, s))
      c = {
        model: a,
        serial: u,
        revisionCode: s,
        memory: e[s].memory,
        manufacturer: e[s].manufacturer,
        processor: e[s].processor,
        type: e[s].type,
        revision: e[s].revision,
      };
    else {
      let m = ("00000000" + gL(t, "revision", ":", !0).toLowerCase()).substr(-8),
        d = parseInt(ees(m.substr(2, 1)).substr(5, 3), 2) || 0,
        f = n[parseInt(m.substr(3, 1), 10)],
        p = r[parseInt(m.substr(4, 1), 10)],
        h = m.substr(5, 2);
      c = {
        model: a,
        serial: u,
        revisionCode: s,
        memory: 256 * Math.pow(2, d),
        manufacturer: f,
        processor: p,
        type: {}.hasOwnProperty.call(o, h) ? o[h] : "",
        revision: "1." + m.substr(7, 1),
      };
    }
    return c;
  }
  function res(t) {
    if (p4 === null && t !== void 0) p4 = t;
    else if (t === void 0 && p4 !== null) t = p4;
    else
      try {
        ((t = bT.readFileSync("/proc/cpuinfo", { encoding: "utf8" }).toString().split(`
`)),
          (p4 = t));
      } catch {
        return !1;
      }
    let e = $un(t);
    return e.type === "4B" || e.type === "CM4" || e.type === "CM4S" || e.type === "400"
      ? "VideoCore VI"
      : e.type === "5" || e.type === "500"
        ? "VideoCore VII"
        : "VideoCore IV";
  }
  function nes(t) {
    let e = t.map(
        (o) =>
          new Promise((s) => {
            let a = new Array(2);
            o.then((u) => {
              a[0] = u;
            })
              .catch((u) => {
                a[1] = u;
              })
              .then(() => {
                s(a);
              });
          }),
      ),
      r = [],
      n = [];
    return Promise.all(e).then(
      (o) => (
        o.forEach((s) => {
          s[1] ? (r.push(s[1]), n.push(null)) : (r.push(null), n.push(s[0]));
        }),
        { errors: r, results: n }
      ),
    );
  }
  function ies(t) {
    return () => {
      let e = Array.prototype.slice.call(arguments);
      return new Promise((r, n) => {
        (e.push((o, s) => {
          o ? n(o) : r(s);
        }),
          t.apply(null, e));
      });
    };
  }
  function oes(t) {
    return () => {
      let e = Array.prototype.slice.call(arguments);
      return new Promise((r) => {
        (e.push((n, o) => {
          r(o);
        }),
          t.apply(null, e));
      });
    };
  }
  function ses() {
    let t = "";
    if (Gkt)
      try {
        t = OAe("uname -v", $Ge).toString();
      } catch {
        t = "";
      }
    return t;
  }
  function aes(t) {
    let e = ["array", "dict", "key", "string", "integer", "date", "real", "data", "boolean", "arrayEmpty"],
      n = t.indexOf("<plist version"),
      o = t.length;
    for (; t[n] !== ">" && n < o; ) n++;
    let s = 0,
      a = !1,
      u = !1,
      c = !1,
      m = [{ tagStart: "", tagEnd: "", tagContent: "", key: "", data: null }],
      d = "",
      f = t[n];
    for (; n < o; )
      ((d = f),
        n + 1 < o && (f = t[n + 1]),
        d === "<"
          ? ((u = !1),
            f === "/"
              ? (c = !0)
              : m[s].tagStart
                ? ((m[s].tagContent = ""),
                  m[s].data || (m[s].data = m[s].tagStart === "array" ? [] : {}),
                  s++,
                  m.push({ tagStart: "", tagEnd: "", tagContent: "", key: null, data: null }),
                  (a = !0),
                  (u = !1))
                : a || (a = !0))
          : d === ">"
            ? (m[s].tagStart === "true/" &&
                ((a = !1), (c = !0), (m[s].tagStart = ""), (m[s].tagEnd = "/boolean"), (m[s].data = !0)),
              m[s].tagStart === "false/" &&
                ((a = !1), (c = !0), (m[s].tagStart = ""), (m[s].tagEnd = "/boolean"), (m[s].data = !1)),
              m[s].tagStart === "array/" &&
                ((a = !1), (c = !0), (m[s].tagStart = ""), (m[s].tagEnd = "/arrayEmpty"), (m[s].data = [])),
              u && (u = !1),
              a &&
                ((a = !1),
                (u = !0),
                m[s].tagStart === "array" && (m[s].data = []),
                m[s].tagStart === "dict" && (m[s].data = {})),
              c &&
                ((c = !1),
                m[s].tagEnd &&
                  e.indexOf(m[s].tagEnd.substr(1)) >= 0 &&
                  (m[s].tagEnd === "/dict" || m[s].tagEnd === "/array"
                    ? (s > 1 && m[s - 2].tagStart === "array" && m[s - 2].data.push(m[s - 1].data),
                      s > 1 && m[s - 2].tagStart === "dict" && (m[s - 2].data[m[s - 1].key] = m[s - 1].data),
                      s--,
                      m.pop(),
                      (m[s].tagContent = ""),
                      (m[s].tagStart = ""),
                      (m[s].tagEnd = ""))
                    : (m[s].tagEnd === "/key" && m[s].tagContent
                        ? (m[s].key = m[s].tagContent)
                        : (m[s].tagEnd === "/real" && m[s].tagContent && (m[s].data = parseFloat(m[s].tagContent) || 0),
                          m[s].tagEnd === "/integer" && m[s].tagContent && (m[s].data = parseInt(m[s].tagContent) || 0),
                          m[s].tagEnd === "/string" && m[s].tagContent && (m[s].data = m[s].tagContent || ""),
                          m[s].tagEnd === "/boolean" && (m[s].data = m[s].tagContent || !1),
                          m[s].tagEnd === "/arrayEmpty" && (m[s].data = m[s].tagContent || []),
                          s > 0 && m[s - 1].tagStart === "array" && m[s - 1].data.push(m[s].data),
                          s > 0 && m[s - 1].tagStart === "dict" && (m[s - 1].data[m[s].key] = m[s].data)),
                      (m[s].tagContent = ""),
                      (m[s].tagStart = ""),
                      (m[s].tagEnd = ""))),
                (m[s].tagEnd = ""),
                (a = !1),
                (u = !1)))
            : (a && (m[s].tagStart += d), c && (m[s].tagEnd += d), u && (m[s].tagContent += d)),
        n++);
    return m[0].data;
  }
  function Dun(t) {
    return typeof t == "string" && !isNaN(t) && !isNaN(parseFloat(t));
  }
  function ues(t) {
    let e = t.split(`
`);
    for (let n = 0; n < e.length; n++) {
      if (e[n].indexOf(" = ") >= 0) {
        let o = e[n].split(" = ");
        if (
          ((o[0] = o[0].trim()),
          o[0].startsWith('"') || (o[0] = '"' + o[0] + '"'),
          (o[1] = o[1].trim()),
          o[1].indexOf('"') === -1 && o[1].endsWith(";"))
        ) {
          let s = o[1].substring(0, o[1].length - 1);
          Dun(s) || (o[1] = `"${s}";`);
        }
        if (o[1].indexOf('"') >= 0 && o[1].endsWith(";")) {
          let s = o[1].substring(0, o[1].length - 1).replace(/"/g, "");
          Dun(s) && (o[1] = `${s};`);
        }
        e[n] = o.join(" : ");
      }
      ((e[n] = e[n].replace(/\(/g, "[").replace(/\)/g, "]").replace(/;/g, ",").trim()),
        e[n].startsWith("}") &&
          e[n - 1] &&
          e[n - 1].endsWith(",") &&
          (e[n - 1] = e[n - 1].substring(0, e[n - 1].length - 1)));
    }
    t = e.join("");
    let r = {};
    try {
      r = JSON.parse(t);
    } catch {}
    return r;
  }
  function ces(t, e) {
    let r = 0,
      n = t.split("."),
      o = e.split(".");
    return (
      n[0] < o[0]
        ? (r = 1)
        : n[0] > o[0]
          ? (r = -1)
          : n[0] === o[0] &&
            n.length >= 2 &&
            o.length >= 2 &&
            (n[1] < o[1]
              ? (r = 1)
              : n[1] > o[1]
                ? (r = -1)
                : n[1] === o[1] &&
                  (n.length >= 3 && o.length >= 3
                    ? n[2] < o[2]
                      ? (r = 1)
                      : n[2] > o[2] && (r = -1)
                    : o.length >= 3 && (r = 1))),
      r
    );
  }
  function les(t) {
    let r = [
      { key: "Mac15,12", name: "MacBook Air", size: "13-inch", processor: "M3", year: "2024", additional: "" },
      { key: "Mac14,15", name: "MacBook Air", size: "15-inch", processor: "M2", year: "2024", additional: "" },
      { key: "Mac14,2", name: "MacBook Air", size: "13-inch", processor: "M2", year: "2022", additional: "" },
      { key: "MacBookAir10,1", name: "MacBook Air", size: "13-inch", processor: "M1", year: "2020", additional: "" },
      { key: "MacBookAir9,1", name: "MacBook Air", size: "13-inch", processor: "", year: "2020", additional: "" },
      { key: "MacBookAir8,2", name: "MacBook Air", size: "13-inch", processor: "", year: "2019", additional: "" },
      { key: "MacBookAir8,1", name: "MacBook Air", size: "13-inch", processor: "", year: "2018", additional: "" },
      { key: "MacBookAir7,2", name: "MacBook Air", size: "13-inch", processor: "", year: "2017", additional: "" },
      { key: "MacBookAir7,2", name: "MacBook Air", size: "13-inch", processor: "", year: "Early 2015", additional: "" },
      { key: "MacBookAir7,1", name: "MacBook Air", size: "11-inch", processor: "", year: "Early 2015", additional: "" },
      { key: "MacBookAir6,2", name: "MacBook Air", size: "13-inch", processor: "", year: "Early 2014", additional: "" },
      { key: "MacBookAir6,1", name: "MacBook Air", size: "11-inch", processor: "", year: "Early 2014", additional: "" },
      { key: "MacBookAir6,2", name: "MacBook Air", size: "13-inch", processor: "", year: "Mid 2013", additional: "" },
      { key: "MacBookAir6,1", name: "MacBook Air", size: "11-inch", processor: "", year: "Mid 2013", additional: "" },
      { key: "MacBookAir5,2", name: "MacBook Air", size: "13-inch", processor: "", year: "Mid 2012", additional: "" },
      { key: "MacBookAir5,1", name: "MacBook Air", size: "11-inch", processor: "", year: "Mid 2012", additional: "" },
      { key: "MacBookAir4,2", name: "MacBook Air", size: "13-inch", processor: "", year: "Mid 2011", additional: "" },
      { key: "MacBookAir4,1", name: "MacBook Air", size: "11-inch", processor: "", year: "Mid 2011", additional: "" },
      { key: "MacBookAir3,2", name: "MacBook Air", size: "13-inch", processor: "", year: "Late 2010", additional: "" },
      { key: "MacBookAir3,1", name: "MacBook Air", size: "11-inch", processor: "", year: "Late 2010", additional: "" },
      { key: "MacBookAir2,1", name: "MacBook Air", size: "13-inch", processor: "", year: "Mid 2009", additional: "" },
      { key: "Mac16,1", name: "MacBook Pro", size: "14-inch", processor: "M4", year: "2024", additional: "" },
      { key: "Mac16,6", name: "MacBook Pro", size: "14-inch", processor: "M4 Pro", year: "2024", additional: "" },
      { key: "Mac16,8", name: "MacBook Pro", size: "14-inch", processor: "M4 Max", year: "2024", additional: "" },
      { key: "Mac16,5", name: "MacBook Pro", size: "16-inch", processor: "M4 Pro", year: "2024", additional: "" },
      { key: "Mac16,6", name: "MacBook Pro", size: "16-inch", processor: "M4 Max", year: "2024", additional: "" },
      { key: "Mac15,3", name: "MacBook Pro", size: "14-inch", processor: "M3", year: "Nov 2023", additional: "" },
      { key: "Mac15,6", name: "MacBook Pro", size: "14-inch", processor: "M3 Pro", year: "Nov 2023", additional: "" },
      { key: "Mac15,8", name: "MacBook Pro", size: "14-inch", processor: "M3 Pro", year: "Nov 2023", additional: "" },
      { key: "Mac15,10", name: "MacBook Pro", size: "14-inch", processor: "M3 Max", year: "Nov 2023", additional: "" },
      { key: "Mac15,7", name: "MacBook Pro", size: "16-inch", processor: "M3 Pro", year: "Nov 2023", additional: "" },
      { key: "Mac15,9", name: "MacBook Pro", size: "16-inch", processor: "M3 Pro", year: "Nov 2023", additional: "" },
      { key: "Mac15,11", name: "MacBook Pro", size: "16-inch", processor: "M3 Max", year: "Nov 2023", additional: "" },
      { key: "Mac14,5", name: "MacBook Pro", size: "14-inch", processor: "M2 Max", year: "2023", additional: "" },
      { key: "Mac14,9", name: "MacBook Pro", size: "14-inch", processor: "M2 Max", year: "2023", additional: "" },
      { key: "Mac14,6", name: "MacBook Pro", size: "16-inch", processor: "M2 Max", year: "2023", additional: "" },
      { key: "Mac14,10", name: "MacBook Pro", size: "16-inch", processor: "M2 Max", year: "2023", additional: "" },
      { key: "Mac14,7", name: "MacBook Pro", size: "13-inch", processor: "M2", year: "2022", additional: "" },
      {
        key: "MacBookPro18,3",
        name: "MacBook Pro",
        size: "14-inch",
        processor: "M1 Pro",
        year: "2021",
        additional: "",
      },
      {
        key: "MacBookPro18,4",
        name: "MacBook Pro",
        size: "14-inch",
        processor: "M1 Max",
        year: "2021",
        additional: "",
      },
      {
        key: "MacBookPro18,1",
        name: "MacBook Pro",
        size: "16-inch",
        processor: "M1 Pro",
        year: "2021",
        additional: "",
      },
      {
        key: "MacBookPro18,2",
        name: "MacBook Pro",
        size: "16-inch",
        processor: "M1 Max",
        year: "2021",
        additional: "",
      },
      { key: "MacBookPro17,1", name: "MacBook Pro", size: "13-inch", processor: "M1", year: "2020", additional: "" },
      {
        key: "MacBookPro16,3",
        name: "MacBook Pro",
        size: "13-inch",
        processor: "",
        year: "2020",
        additional: "Two Thunderbolt 3 ports",
      },
      {
        key: "MacBookPro16,2",
        name: "MacBook Pro",
        size: "13-inch",
        processor: "",
        year: "2020",
        additional: "Four Thunderbolt 3 ports",
      },
      { key: "MacBookPro16,1", name: "MacBook Pro", size: "16-inch", processor: "", year: "2019", additional: "" },
      { key: "MacBookPro16,4", name: "MacBook Pro", size: "16-inch", processor: "", year: "2019", additional: "" },
      { key: "MacBookPro15,3", name: "MacBook Pro", size: "15-inch", processor: "", year: "2019", additional: "" },
      { key: "MacBookPro15,2", name: "MacBook Pro", size: "13-inch", processor: "", year: "2019", additional: "" },
      { key: "MacBookPro15,1", name: "MacBook Pro", size: "15-inch", processor: "", year: "2019", additional: "" },
      {
        key: "MacBookPro15,4",
        name: "MacBook Pro",
        size: "13-inch",
        processor: "",
        year: "2019",
        additional: "Two Thunderbolt 3 ports",
      },
      { key: "MacBookPro15,1", name: "MacBook Pro", size: "15-inch", processor: "", year: "2018", additional: "" },
      {
        key: "MacBookPro15,2",
        name: "MacBook Pro",
        size: "13-inch",
        processor: "",
        year: "2018",
        additional: "Four Thunderbolt 3 ports",
      },
      {
        key: "MacBookPro14,1",
        name: "MacBook Pro",
        size: "13-inch",
        processor: "",
        year: "2017",
        additional: "Two Thunderbolt 3 ports",
      },
      {
        key: "MacBookPro14,2",
        name: "MacBook Pro",
        size: "13-inch",
        processor: "",
        year: "2017",
        additional: "Four Thunderbolt 3 ports",
      },
      { key: "MacBookPro14,3", name: "MacBook Pro", size: "15-inch", processor: "", year: "2017", additional: "" },
      {
        key: "MacBookPro13,1",
        name: "MacBook Pro",
        size: "13-inch",
        processor: "",
        year: "2016",
        additional: "Two Thunderbolt 3 ports",
      },
      {
        key: "MacBookPro13,2",
        name: "MacBook Pro",
        size: "13-inch",
        processor: "",
        year: "2016",
        additional: "Four Thunderbolt 3 ports",
      },
      { key: "MacBookPro13,3", name: "MacBook Pro", size: "15-inch", processor: "", year: "2016", additional: "" },
      { key: "MacBookPro11,4", name: "MacBook Pro", size: "15-inch", processor: "", year: "Mid 2015", additional: "" },
      { key: "MacBookPro11,5", name: "MacBook Pro", size: "15-inch", processor: "", year: "Mid 2015", additional: "" },
      {
        key: "MacBookPro12,1",
        name: "MacBook Pro",
        size: "13-inch",
        processor: "",
        year: "Early 2015",
        additional: "",
      },
      { key: "MacBookPro11,2", name: "MacBook Pro", size: "15-inch", processor: "", year: "Late 2013", additional: "" },
      { key: "MacBookPro11,3", name: "MacBook Pro", size: "15-inch", processor: "", year: "Late 2013", additional: "" },
      { key: "MacBookPro11,1", name: "MacBook Pro", size: "13-inch", processor: "", year: "Late 2013", additional: "" },
      { key: "MacBookPro10,1", name: "MacBook Pro", size: "15-inch", processor: "", year: "Mid 2012", additional: "" },
      { key: "MacBookPro10,2", name: "MacBook Pro", size: "13-inch", processor: "", year: "Late 2012", additional: "" },
      { key: "MacBookPro9,1", name: "MacBook Pro", size: "15-inch", processor: "", year: "Mid 2012", additional: "" },
      { key: "MacBookPro9,2", name: "MacBook Pro", size: "13-inch", processor: "", year: "Mid 2012", additional: "" },
      { key: "MacBookPro8,3", name: "MacBook Pro", size: "17-inch", processor: "", year: "Early 2011", additional: "" },
      { key: "MacBookPro8,2", name: "MacBook Pro", size: "15-inch", processor: "", year: "Early 2011", additional: "" },
      { key: "MacBookPro8,1", name: "MacBook Pro", size: "13-inch", processor: "", year: "Early 2011", additional: "" },
      { key: "MacBookPro6,1", name: "MacBook Pro", size: "17-inch", processor: "", year: "Mid 2010", additional: "" },
      { key: "MacBookPro6,2", name: "MacBook Pro", size: "15-inch", processor: "", year: "Mid 2010", additional: "" },
      { key: "MacBookPro7,1", name: "MacBook Pro", size: "13-inch", processor: "", year: "Mid 2010", additional: "" },
      { key: "MacBookPro5,2", name: "MacBook Pro", size: "17-inch", processor: "", year: "Early 2009", additional: "" },
      { key: "MacBookPro5,3", name: "MacBook Pro", size: "15-inch", processor: "", year: "Mid 2009", additional: "" },
      { key: "MacBookPro5,5", name: "MacBook Pro", size: "13-inch", processor: "", year: "Mid 2009", additional: "" },
      { key: "MacBookPro5,1", name: "MacBook Pro", size: "15-inch", processor: "", year: "Late 2008", additional: "" },
      { key: "MacBookPro4,1", name: "MacBook Pro", size: "15-inch", processor: "", year: "Early 2008", additional: "" },
      { key: "MacBook10,1", name: "MacBook", size: "12-inch", processor: "", year: "2017", additional: "" },
      { key: "MacBook9,1", name: "MacBook", size: "12-inch", processor: "", year: "Early 2016", additional: "" },
      { key: "MacBook8,1", name: "MacBook", size: "12-inch", processor: "", year: "Early 2015", additional: "" },
      { key: "MacBook7,1", name: "MacBook", size: "13-inch", processor: "", year: "Mid 2010", additional: "" },
      { key: "MacBook6,1", name: "MacBook", size: "13-inch", processor: "", year: "Late 2009", additional: "" },
      { key: "MacBook5,2", name: "MacBook", size: "13-inch", processor: "", year: "Early 2009", additional: "" },
      { key: "Mac14,13", name: "Mac Studio", size: "", processor: "M2 Max", year: "2023", additional: "" },
      { key: "Mac14,14", name: "Mac Studio", size: "", processor: "M2 Ultra", year: "2023", additional: "" },
      { key: "Mac15,14", name: "Mac Studio", size: "", processor: "M3 Ultra", year: "2025", additional: "" },
      { key: "Mac16,9", name: "Mac Studio", size: "", processor: "M4 Max", year: "2025", additional: "" },
      { key: "Mac13,1", name: "Mac Studio", size: "", processor: "M1 Max", year: "2022", additional: "" },
      { key: "Mac13,2", name: "Mac Studio", size: "", processor: "M1 Ultra", year: "2022", additional: "" },
      { key: "Mac16,11", name: "Mac mini", size: "", processor: "M4 Pro", year: "2024", additional: "" },
      { key: "Mac16,10", name: "Mac mini", size: "", processor: "M4", year: "2024", additional: "" },
      { key: "Mac14,3", name: "Mac mini", size: "", processor: "M2", year: "2023", additional: "" },
      { key: "Mac14,12", name: "Mac mini", size: "", processor: "M2 Pro", year: "2023", additional: "" },
      { key: "Macmini9,1", name: "Mac mini", size: "", processor: "M1", year: "2020", additional: "" },
      { key: "Macmini8,1", name: "Mac mini", size: "", processor: "", year: "Late 2018", additional: "" },
      { key: "Macmini7,1", name: "Mac mini", size: "", processor: "", year: "Late 2014", additional: "" },
      { key: "Macmini6,1", name: "Mac mini", size: "", processor: "", year: "Late 2012", additional: "" },
      { key: "Macmini6,2", name: "Mac mini", size: "", processor: "", year: "Late 2012", additional: "" },
      { key: "Macmini5,1", name: "Mac mini", size: "", processor: "", year: "Mid 2011", additional: "" },
      { key: "Macmini5,2", name: "Mac mini", size: "", processor: "", year: "Mid 2011", additional: "" },
      { key: "Macmini4,1", name: "Mac mini", size: "", processor: "", year: "Mid 2010", additional: "" },
      { key: "Macmini3,1", name: "Mac mini", size: "", processor: "", year: "Early 2009", additional: "" },
      { key: "Mac16,3", name: "iMac", size: "24-inch", processor: "M4", year: "2024", additional: "Four ports" },
      { key: "Mac16,2", name: "iMac", size: "24-inch", processor: "M4", year: "2024", additional: "Two ports" },
      { key: "Mac15,5", name: "iMac", size: "24-inch", processor: "M3", year: "2023", additional: "Four ports" },
      { key: "Mac15,4", name: "iMac", size: "24-inch", processor: "M3", year: "2023", additional: "Two ports" },
      { key: "iMac21,1", name: "iMac", size: "24-inch", processor: "M1", year: "2021", additional: "" },
      { key: "iMac21,2", name: "iMac", size: "24-inch", processor: "M1", year: "2021", additional: "" },
      { key: "iMac20,1", name: "iMac", size: "27-inch", processor: "", year: "2020", additional: "Retina 5K" },
      { key: "iMac20,2", name: "iMac", size: "27-inch", processor: "", year: "2020", additional: "Retina 5K" },
      { key: "iMac19,1", name: "iMac", size: "27-inch", processor: "", year: "2019", additional: "Retina 5K" },
      { key: "iMac19,2", name: "iMac", size: "21.5-inch", processor: "", year: "2019", additional: "Retina 4K" },
      { key: "iMacPro1,1", name: "iMac Pro", size: "", processor: "", year: "2017", additional: "" },
      { key: "iMac18,3", name: "iMac", size: "27-inch", processor: "", year: "2017", additional: "Retina 5K" },
      { key: "iMac18,2", name: "iMac", size: "21.5-inch", processor: "", year: "2017", additional: "Retina 4K" },
      { key: "iMac18,1", name: "iMac", size: "21.5-inch", processor: "", year: "2017", additional: "" },
      { key: "iMac17,1", name: "iMac", size: "27-inch", processor: "", year: "Late 2015", additional: "Retina 5K" },
      { key: "iMac16,2", name: "iMac", size: "21.5-inch", processor: "", year: "Late 2015", additional: "Retina 4K" },
      { key: "iMac16,1", name: "iMac", size: "21.5-inch", processor: "", year: "Late 2015", additional: "" },
      { key: "iMac15,1", name: "iMac", size: "27-inch", processor: "", year: "Late 2014", additional: "Retina 5K" },
      { key: "iMac14,4", name: "iMac", size: "21.5-inch", processor: "", year: "Mid 2014", additional: "" },
      { key: "iMac14,2", name: "iMac", size: "27-inch", processor: "", year: "Late 2013", additional: "" },
      { key: "iMac14,1", name: "iMac", size: "21.5-inch", processor: "", year: "Late 2013", additional: "" },
      { key: "iMac13,2", name: "iMac", size: "27-inch", processor: "", year: "Late 2012", additional: "" },
      { key: "iMac13,1", name: "iMac", size: "21.5-inch", processor: "", year: "Late 2012", additional: "" },
      { key: "iMac12,2", name: "iMac", size: "27-inch", processor: "", year: "Mid 2011", additional: "" },
      { key: "iMac12,1", name: "iMac", size: "21.5-inch", processor: "", year: "Mid 2011", additional: "" },
      { key: "iMac11,3", name: "iMac", size: "27-inch", processor: "", year: "Mid 2010", additional: "" },
      { key: "iMac11,2", name: "iMac", size: "21.5-inch", processor: "", year: "Mid 2010", additional: "" },
      { key: "iMac10,1", name: "iMac", size: "21.5-inch", processor: "", year: "Late 2009", additional: "" },
      { key: "iMac9,1", name: "iMac", size: "20-inch", processor: "", year: "Early 2009", additional: "" },
      { key: "Mac14,8", name: "Mac Pro", size: "", processor: "", year: "2023", additional: "" },
      { key: "Mac14,8", name: "Mac Pro", size: "", processor: "", year: "2023", additional: "Rack" },
      { key: "MacPro7,1", name: "Mac Pro", size: "", processor: "", year: "2019", additional: "" },
      { key: "MacPro7,1", name: "Mac Pro", size: "", processor: "", year: "2019", additional: "Rack" },
      { key: "MacPro6,1", name: "Mac Pro", size: "", processor: "", year: "Late 2013", additional: "" },
      { key: "MacPro5,1", name: "Mac Pro", size: "", processor: "", year: "Mid 2012", additional: "" },
      { key: "MacPro5,1", name: "Mac Pro Server", size: "", processor: "", year: "Mid 2012", additional: "Server" },
      { key: "MacPro5,1", name: "Mac Pro", size: "", processor: "", year: "Mid 2010", additional: "" },
      { key: "MacPro5,1", name: "Mac Pro Server", size: "", processor: "", year: "Mid 2010", additional: "Server" },
      { key: "MacPro4,1", name: "Mac Pro", size: "", processor: "", year: "Early 2009", additional: "" },
    ].filter((o) => o.key === t);
    if (r.length === 0) return { key: t, model: "Apple", version: "Unknown" };
    let n = [];
    return (
      r[0].size && n.push(r[0].size),
      r[0].processor && n.push(r[0].processor),
      r[0].year && n.push(r[0].year),
      r[0].additional && n.push(r[0].additional),
      { key: t, model: r[0].name, version: r[0].name + " (" + n.join(", ") + ")" }
    );
  }
  function mes(t, e = 5e3) {
    let r = t.startsWith("https:") || t.indexOf(":443/") > 0 || t.indexOf(":8443/") > 0 ? Ae("https") : Ae("http"),
      n = Date.now();
    return new Promise((o) => {
      let s = r
        .get(t, (a) => {
          (a.on("data", () => {}),
            a.on("end", () => {
              o({ url: t, statusCode: a.statusCode, message: a.statusMessage, time: Date.now() - n });
            }));
        })
        .on("error", (a) => {
          o({ url: t, statusCode: 404, message: a.message, time: Date.now() - n });
        })
        .setTimeout(e, () => {
          (s.destroy(), o({ url: t, statusCode: 408, message: "Request Timeout", time: Date.now() - n }));
        });
    });
  }
  function des(t) {
    return t.replace(/To Be Filled By O.E.M./g, "");
  }
  function fes() {}
  fo.toInt = wZo;
  fo.splitByNumber = xZo;
  fo.execOptsWin = UGe;
  fo.execOptsLinux = $Ge;
  fo.getCodepage = GZo;
  fo.execWin = WZo;
  fo.isFunction = TZo;
  fo.unique = DZo;
  fo.sortByKey = IZo;
  fo.cores = RZo;
  fo.getValue = gL;
  fo.decodeEscapeSequence = kZo;
  fo.parseDateTime = PZo;
  fo.parseHead = BZo;
  fo.findObjectByKey = LZo;
  fo.darwinXcodeExists = zZo;
  fo.getVboxmanage = FZo;
  fo.powerShell = jZo;
  fo.powerShellStart = UZo;
  fo.powerShellRelease = $Zo;
  fo.execSafe = QZo;
  fo.nanoSeconds = YZo;
  fo.countUniqueLines = KZo;
  fo.countLines = JZo;
  fo.noop = fes;
  fo.isRaspberry = HZo;
  fo.isRaspbian = VZo;
  fo.sanitizeShellString = XZo;
  fo.isPrototypePolluted = ZZo;
  fo.decodePiCpuinfo = $un;
  fo.getRpiGpu = res;
  fo.promiseAll = nes;
  fo.promisify = ies;
  fo.promisifySave = oes;
  fo.smartMonToolsInstalled = qZo;
  fo.linuxVersion = ses;
  fo.plistParser = aes;
  fo.plistReader = ues;
  fo.stringObj = BGe;
  fo.stringReplace = $kt;
  fo.stringToLower = jkt;
  fo.stringToString = Pun;
  fo.stringSubstr = Bun;
  fo.stringSubstring = Lun;
  fo.stringTrim = Mun;
  fo.stringStartWith = Fun;
  fo.mathMin = Uun;
  fo.WINDIR = Nun;
  fo.getFilesInPath = tes;
  fo.semverCompare = ces;
  fo.getAppleModel = les;
  fo.checkWebsite = mes;
  fo.cleanString = des;
  fo.getPowershell = MZo;
});