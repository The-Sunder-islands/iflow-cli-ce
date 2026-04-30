/**
 * @module iln
 * @category utils/json
 * @label json
 * @position 724 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iln) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iln = T((nln) => {
  "use strict";
  var rln = Ae("child_process").exec,
    uns = Ae("child_process").execSync,
    g2 = Ff(),
    $L = process.platform,
    cns = $L === "linux" || $L === "android",
    lns = $L === "darwin",
    mns = $L === "win32",
    dns = $L === "freebsd",
    fns = $L === "openbsd",
    pns = $L === "netbsd",
    hns = $L === "sunos";
  function SOt(t, e, r) {
    t = t.toLowerCase();
    let n = "";
    return (
      t.indexOf("input") >= 0 && (n = "Microphone"),
      t.indexOf("display audio") >= 0 && (n = "Speaker"),
      t.indexOf("speak") >= 0 && (n = "Speaker"),
      t.indexOf("laut") >= 0 && (n = "Speaker"),
      t.indexOf("loud") >= 0 && (n = "Speaker"),
      t.indexOf("head") >= 0 && (n = "Headset"),
      t.indexOf("mic") >= 0 && (n = "Microphone"),
      t.indexOf("mikr") >= 0 && (n = "Microphone"),
      t.indexOf("phone") >= 0 && (n = "Phone"),
      t.indexOf("controll") >= 0 && (n = "Controller"),
      t.indexOf("line o") >= 0 && (n = "Line Out"),
      t.indexOf("digital o") >= 0 && (n = "Digital Out"),
      t.indexOf("smart sound technology") >= 0 && (n = "Digital Signal Processor"),
      t.indexOf("high definition audio") >= 0 && (n = "Sound Driver"),
      !n && r ? (n = "Speaker") : !n && e && (n = "Microphone"),
      n
    );
  }
  function gns() {
    let t = "lspci -v 2>/dev/null",
      e = [];
    try {
      return (
        uns(t, g2.execOptsLinux)
          .toString()
          .split(
            `

`,
          )
          .forEach((n) => {
            let o = n.split(`
`);
            if (o && o.length && o[0].toLowerCase().indexOf("audio") >= 0) {
              let s = {};
              ((s.slotId = o[0].split(" ")[0]),
                (s.driver =
                  g2.getValue(o, "Kernel driver in use", ":", !0) || g2.getValue(o, "Kernel modules", ":", !0)),
                e.push(s));
            }
          }),
        e
      );
    } catch {
      return e;
    }
  }
  function bns(t) {
    let e = t;
    return (
      t === 1
        ? (e = "other")
        : t === 2
          ? (e = "unknown")
          : t === 3
            ? (e = "enabled")
            : t === 4
              ? (e = "disabled")
              : t === 5 && (e = "not applicable"),
      e
    );
  }
  function Ans(t, e) {
    let r = {},
      n = g2.getValue(t, "Slot"),
      o = e.filter((s) => s.slotId === n);
    return (
      (r.id = n),
      (r.name = g2.getValue(t, "SDevice")),
      (r.manufacturer = g2.getValue(t, "SVendor")),
      (r.revision = g2.getValue(t, "Rev")),
      (r.driver = o && o.length === 1 && o[0].driver ? o[0].driver : ""),
      (r.default = null),
      (r.channel = "PCIe"),
      (r.type = SOt(r.name, null, null)),
      (r.in = null),
      (r.out = null),
      (r.status = "online"),
      r
    );
  }
  function yns(t) {
    let e = "";
    return (
      t.indexOf("builtin") >= 0 && (e = "Built-In"),
      t.indexOf("extern") >= 0 && (e = "Audio-Jack"),
      t.indexOf("hdmi") >= 0 && (e = "HDMI"),
      t.indexOf("displayport") >= 0 && (e = "Display-Port"),
      t.indexOf("usb") >= 0 && (e = "USB"),
      t.indexOf("pci") >= 0 && (e = "PCIe"),
      e
    );
  }
  function _ns(t, e) {
    let r = {},
      n = ((t.coreaudio_device_transport || "") + " " + (t._name || "")).toLowerCase();
    return (
      (r.id = e),
      (r.name = t._name),
      (r.manufacturer = t.coreaudio_device_manufacturer),
      (r.revision = null),
      (r.driver = null),
      (r.default = !!t.coreaudio_default_audio_input_device || !!t.coreaudio_default_audio_output_device),
      (r.channel = yns(n)),
      (r.type = SOt(r.name, !!t.coreaudio_device_input, !!t.coreaudio_device_output)),
      (r.in = !!t.coreaudio_device_input),
      (r.out = !!t.coreaudio_device_output),
      (r.status = "online"),
      r
    );
  }
  function Ens(t) {
    let e = {},
      r = bns(g2.getValue(t, "StatusInfo", ":"));
    return (
      (e.id = g2.getValue(t, "DeviceID", ":")),
      (e.name = g2.getValue(t, "name", ":")),
      (e.manufacturer = g2.getValue(t, "manufacturer", ":")),
      (e.revision = null),
      (e.driver = null),
      (e.default = null),
      (e.channel = null),
      (e.type = SOt(e.name, null, null)),
      (e.in = null),
      (e.out = null),
      (e.status = r),
      e
    );
  }
  function vns(t) {
    return new Promise((e) => {
      process.nextTick(() => {
        let r = [];
        ((cns || dns || fns || pns) &&
          rln("lspci -vmm 2>/dev/null", (o, s) => {
            if (!o) {
              let a = gns();
              s.toString()
                .split(
                  `

`,
                )
                .forEach((c) => {
                  let m = c.split(`
`);
                  if (g2.getValue(m, "class", ":", !0).toLowerCase().indexOf("audio") >= 0) {
                    let d = Ans(m, a);
                    r.push(d);
                  }
                });
            }
            (t && t(r), e(r));
          }),
          lns &&
            rln("system_profiler SPAudioDataType -json", (o, s) => {
              if (!o)
                try {
                  let a = JSON.parse(s.toString());
                  if (
                    a.SPAudioDataType &&
                    a.SPAudioDataType.length &&
                    a.SPAudioDataType[0] &&
                    a.SPAudioDataType[0]._items &&
                    a.SPAudioDataType[0]._items.length
                  )
                    for (let u = 0; u < a.SPAudioDataType[0]._items.length; u++) {
                      let c = _ns(a.SPAudioDataType[0]._items[u], u);
                      r.push(c);
                    }
                } catch {
                  g2.noop();
                }
              (t && t(r), e(r));
            }),
          mns &&
            g2
              .powerShell("Get-CimInstance Win32_SoundDevice | select DeviceID,StatusInfo,Name,Manufacturer | fl")
              .then((n, o) => {
                (o ||
                  n
                    .toString()
                    .split(/\n\s*\n/)
                    .forEach((a) => {
                      let u = a.split(`
`);
                      g2.getValue(u, "name", ":") && r.push(Ens(u));
                    }),
                  t && t(r),
                  e(r));
              }),
          hns && e(null));
      });
    });
  }
  nln.audio = vns;
});