/**
 * @module acn
 * @category protocol/acp
 * @label acp
 * @position 711 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (acn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var acn = T((QQu, scn) => {
  "use strict";
  var ocn = Ae("child_process").exec,
    lie = Ae("fs"),
    Cs = Ff(),
    EL = process.platform,
    jes = EL === "linux" || EL === "android",
    Qes = EL === "darwin",
    Ges = EL === "win32",
    qes = EL === "freebsd",
    Hes = EL === "openbsd",
    Ves = EL === "netbsd",
    Wes = EL === "sunos";
  function zes(t, e, r) {
    let n = {},
      o = parseInt(Cs.getValue(t, "BatteryStatus", ":").trim(), 10) || 0;
    if (o >= 0) {
      let s = o;
      ((n.status = s),
        (n.hasBattery = !0),
        (n.maxCapacity = r || parseInt(Cs.getValue(t, "DesignCapacity", ":") || 0)),
        (n.designedCapacity = parseInt(Cs.getValue(t, "DesignCapacity", ":") || e)),
        (n.voltage = (parseInt(Cs.getValue(t, "DesignVoltage", ":"), 10) || 0) / 1e3),
        (n.capacityUnit = "mWh"),
        (n.percent = parseInt(Cs.getValue(t, "EstimatedChargeRemaining", ":"), 10) || 0),
        (n.currentCapacity = parseInt((n.maxCapacity * n.percent) / 100)),
        (n.isCharging = (s >= 6 && s <= 9) || s === 11 || (s !== 3 && s !== 1 && n.percent < 100)),
        (n.acConnected = n.isCharging || s === 2),
        (n.model = Cs.getValue(t, "DeviceID", ":")));
    } else n.status = -1;
    return n;
  }
  scn.exports = (t) =>
    new Promise((e) => {
      process.nextTick(() => {
        let r = {
          hasBattery: !1,
          cycleCount: 0,
          isCharging: !1,
          designedCapacity: 0,
          maxCapacity: 0,
          currentCapacity: 0,
          voltage: 0,
          capacityUnit: "",
          percent: 0,
          timeRemaining: null,
          acConnected: !0,
          type: "",
          model: "",
          manufacturer: "",
          serial: "",
        };
        if (jes) {
          let n = "";
          lie.existsSync("/sys/class/power_supply/BAT1/uevent")
            ? (n = "/sys/class/power_supply/BAT1/")
            : lie.existsSync("/sys/class/power_supply/BAT0/uevent") && (n = "/sys/class/power_supply/BAT0/");
          let o = !1,
            s = "";
          (lie.existsSync("/sys/class/power_supply/AC/online")
            ? (s = "/sys/class/power_supply/AC/online")
            : lie.existsSync("/sys/class/power_supply/AC0/online") && (s = "/sys/class/power_supply/AC0/online"),
            s && (o = lie.readFileSync(s).toString().trim() === "1"),
            n
              ? lie.readFile(n + "uevent", (a, u) => {
                  if (a) (t && t(r), e(r));
                  else {
                    let c = u.toString().split(`
`);
                    ((r.isCharging = Cs.getValue(c, "POWER_SUPPLY_STATUS", "=").toLowerCase() === "charging"),
                      (r.acConnected = o || r.isCharging),
                      (r.voltage = parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_VOLTAGE_NOW", "="), 10) / 1e6),
                      (r.capacityUnit = r.voltage ? "mWh" : "mAh"),
                      (r.cycleCount = parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_CYCLE_COUNT", "="), 10)),
                      (r.maxCapacity = Math.round(
                        (parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_CHARGE_FULL", "=", !0, !0), 10) / 1e3) *
                          (r.voltage || 1),
                      )));
                    let m = parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_VOLTAGE_MIN_DESIGN", "="), 10) / 1e6;
                    ((r.designedCapacity = Math.round(
                      (parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_CHARGE_FULL_DESIGN", "=", !0, !0), 10) / 1e3) *
                        (m || r.voltage || 1),
                    )),
                      (r.currentCapacity = Math.round(
                        (parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_CHARGE_NOW", "="), 10) / 1e3) * (r.voltage || 1),
                      )),
                      r.maxCapacity ||
                        ((r.maxCapacity =
                          parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_ENERGY_FULL", "=", !0, !0), 10) / 1e3),
                        (r.designedCapacity =
                          (parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_ENERGY_FULL_DESIGN", "=", !0, !0), 10) / 1e3) |
                          r.maxCapacity),
                        (r.currentCapacity =
                          parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_ENERGY_NOW", "="), 10) / 1e3)));
                    let d = Cs.getValue(c, "POWER_SUPPLY_CAPACITY", "="),
                      f = parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_ENERGY_NOW", "="), 10),
                      p = parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_POWER_NOW", "="), 10),
                      h = parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_CURRENT_NOW", "="), 10),
                      g = parseInt("0" + Cs.getValue(c, "POWER_SUPPLY_CHARGE_NOW", "="), 10);
                    ((r.percent = parseInt("0" + d, 10)),
                      r.maxCapacity &&
                        r.currentCapacity &&
                        ((r.hasBattery = !0), d || (r.percent = (100 * r.currentCapacity) / r.maxCapacity)),
                      r.isCharging && (r.hasBattery = !0),
                      f && p
                        ? (r.timeRemaining = Math.floor((f / p) * 60))
                        : h && g
                          ? (r.timeRemaining = Math.floor((g / h) * 60))
                          : h && r.currentCapacity && (r.timeRemaining = Math.floor((r.currentCapacity / h) * 60)),
                      (r.type = Cs.getValue(c, "POWER_SUPPLY_TECHNOLOGY", "=")),
                      (r.model = Cs.getValue(c, "POWER_SUPPLY_MODEL_NAME", "=")),
                      (r.manufacturer = Cs.getValue(c, "POWER_SUPPLY_MANUFACTURER", "=")),
                      (r.serial = Cs.getValue(c, "POWER_SUPPLY_SERIAL_NUMBER", "=")),
                      t && t(r),
                      e(r));
                  }
                })
              : (t && t(r), e(r)));
        }
        if (
          ((qes || Hes || Ves) &&
            ocn("sysctl -i hw.acpi.battery hw.acpi.acline", (n, o) => {
              let s = o.toString().split(`
`),
                a = parseInt("0" + Cs.getValue(s, "hw.acpi.battery.units"), 10),
                u = parseInt("0" + Cs.getValue(s, "hw.acpi.battery.life"), 10);
              ((r.hasBattery = a > 0),
                (r.cycleCount = null),
                (r.isCharging = Cs.getValue(s, "hw.acpi.acline") !== "1"),
                (r.acConnected = r.isCharging),
                (r.maxCapacity = null),
                (r.currentCapacity = null),
                (r.capacityUnit = "unknown"),
                (r.percent = a ? u : null),
                t && t(r),
                e(r));
            }),
          Qes &&
            ocn(
              'ioreg -n AppleSmartBattery -r | egrep "CycleCount|IsCharging|DesignCapacity|MaxCapacity|CurrentCapacity|DeviceName|BatterySerialNumber|Serial|TimeRemaining|Voltage"; pmset -g batt | grep %',
              (n, o) => {
                if (o) {
                  let s = o.toString().replace(/ +/g, "").replace(/"+/g, "").replace(/-/g, "").split(`
`);
                  ((r.cycleCount = parseInt("0" + Cs.getValue(s, "cyclecount", "="), 10)),
                    (r.voltage = parseInt("0" + Cs.getValue(s, "voltage", "="), 10) / 1e3),
                    (r.capacityUnit = r.voltage ? "mWh" : "mAh"),
                    (r.maxCapacity = Math.round(
                      parseInt("0" + Cs.getValue(s, "applerawmaxcapacity", "="), 10) * (r.voltage || 1),
                    )),
                    (r.currentCapacity = Math.round(
                      parseInt("0" + Cs.getValue(s, "applerawcurrentcapacity", "="), 10) * (r.voltage || 1),
                    )),
                    (r.designedCapacity = Math.round(
                      parseInt("0" + Cs.getValue(s, "DesignCapacity", "="), 10) * (r.voltage || 1),
                    )),
                    (r.manufacturer = "Apple"),
                    (r.serial = Cs.getValue(s, "BatterySerialNumber", "=") || Cs.getValue(s, "Serial", "=")),
                    (r.model = Cs.getValue(s, "DeviceName", "=")));
                  let a = null,
                    c = Cs.getValue(s, "internal", "Battery").split(";");
                  if (c && c[0]) {
                    let m = c[0].split("	");
                    m && m[1] && (a = parseFloat(m[1].trim().replace(/%/g, "")));
                  }
                  (c && c[1]
                    ? ((r.isCharging = c[1].trim() === "charging"), (r.acConnected = c[1].trim() !== "discharging"))
                    : ((r.isCharging = Cs.getValue(s, "ischarging", "=").toLowerCase() === "yes"),
                      (r.acConnected = r.isCharging)),
                    r.maxCapacity &&
                      r.currentCapacity &&
                      ((r.hasBattery = !0),
                      (r.type = "Li-ion"),
                      (r.percent = a !== null ? a : Math.round((100 * r.currentCapacity) / r.maxCapacity)),
                      r.isCharging || (r.timeRemaining = parseInt("0" + Cs.getValue(s, "TimeRemaining", "="), 10))));
                }
                (t && t(r), e(r));
              },
            ),
          Wes && (t && t(r), e(r)),
          Ges)
        )
          try {
            let n = [];
            (n.push(
              Cs.powerShell(
                "Get-CimInstance Win32_Battery | select BatteryStatus, DesignCapacity, DesignVoltage, EstimatedChargeRemaining, DeviceID | fl",
              ),
            ),
              n.push(Cs.powerShell("(Get-WmiObject -Class BatteryStaticData -Namespace ROOT/WMI).DesignedCapacity")),
              n.push(
                Cs.powerShell(
                  "(Get-CimInstance -Class BatteryFullChargedCapacity -Namespace ROOT/WMI).FullChargedCapacity",
                ),
              ),
              Cs.promiseAll(n).then((o) => {
                if (o) {
                  let s = o.results[0].split(/\n\s*\n/),
                    a = [],
                    u = (d) => /\S/.test(d);
                  for (let d = 0; d < s.length; d++) u(s[d]) && a.push(s[d]);
                  let c = o.results[1]
                      .split(
                        `\r
`,
                      )
                      .filter((d) => d),
                    m = o.results[2]
                      .split(
                        `\r
`,
                      )
                      .filter((d) => d);
                  if (a.length) {
                    let d = !1,
                      f = [];
                    for (let p = 0; p < a.length; p++) {
                      let h = a[p].split(`\r
`),
                        g = c && c.length >= p + 1 && c[p] ? Cs.toInt(c[p]) : 0,
                        b = m && m.length >= p + 1 && m[p] ? Cs.toInt(m[p]) : 0,
                        A = zes(h, g, b);
                      !d && A.status > 0 && A.status !== 10
                        ? ((r.hasBattery = A.hasBattery),
                          (r.maxCapacity = A.maxCapacity),
                          (r.designedCapacity = A.designedCapacity),
                          (r.voltage = A.voltage),
                          (r.capacityUnit = A.capacityUnit),
                          (r.percent = A.percent),
                          (r.currentCapacity = A.currentCapacity),
                          (r.isCharging = A.isCharging),
                          (r.acConnected = A.acConnected),
                          (r.model = A.model),
                          (d = !0))
                        : A.status !== -1 &&
                          f.push({
                            hasBattery: A.hasBattery,
                            maxCapacity: A.maxCapacity,
                            designedCapacity: A.designedCapacity,
                            voltage: A.voltage,
                            capacityUnit: A.capacityUnit,
                            percent: A.percent,
                            currentCapacity: A.currentCapacity,
                            isCharging: A.isCharging,
                            timeRemaining: null,
                            acConnected: A.acConnected,
                            model: A.model,
                            type: "",
                            manufacturer: "",
                            serial: "",
                          });
                    }
                    (!d && f.length && ((r = f[0]), f.shift()), f.length && (r.additionalBatteries = f));
                  }
                }
                (t && t(r), e(r));
              }));
          } catch {
            (t && t(r), e(r));
          }
      });
    });
});