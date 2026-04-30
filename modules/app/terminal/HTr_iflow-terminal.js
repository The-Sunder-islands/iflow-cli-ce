/**
 * @module HTr
 * @category app/terminal
 * @label iflow-terminal
 * @position 30 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HTr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HTr = T((X_u, hee) => {
  var nd = global.process,
    lG = function (t) {
      return (
        t &&
        typeof t == "object" &&
        typeof t.removeListener == "function" &&
        typeof t.emit == "function" &&
        typeof t.reallyExit == "function" &&
        typeof t.listeners == "function" &&
        typeof t.kill == "function" &&
        typeof t.pid == "number" &&
        typeof t.on == "function"
      );
    };
  lG(nd)
    ? ((jTr = Ae("assert")),
      (fee = $Tr()),
      (QTr = /^win/i.test(nd.platform)),
      (qhe = Ae("events")),
      typeof qhe != "function" && (qhe = qhe.EventEmitter),
      nd.__signal_exit_emitter__
        ? (Sh = nd.__signal_exit_emitter__)
        : ((Sh = nd.__signal_exit_emitter__ = new qhe()), (Sh.count = 0), (Sh.emitted = {})),
      Sh.infinite || (Sh.setMaxListeners(1 / 0), (Sh.infinite = !0)),
      (hee.exports = function (t, e) {
        if (!lG(global.process)) return function () {};
        (jTr.equal(typeof t, "function", "a callback must be provided for exit handler"), pee === !1 && H9t());
        var r = "exit";
        e && e.alwaysLast && (r = "afterexit");
        var n = function () {
          (Sh.removeListener(r, t),
            Sh.listeners("exit").length === 0 && Sh.listeners("afterexit").length === 0 && MRe());
        };
        return (Sh.on(r, t), n);
      }),
      (MRe = function () {
        !pee ||
          !lG(global.process) ||
          ((pee = !1),
          fee.forEach(function (e) {
            try {
              nd.removeListener(e, FRe[e]);
            } catch {}
          }),
          (nd.emit = URe),
          (nd.reallyExit = V9t),
          (Sh.count -= 1));
      }),
      (hee.exports.unload = MRe),
      (mG = function (e, r, n) {
        Sh.emitted[e] || ((Sh.emitted[e] = !0), Sh.emit(e, r, n));
      }),
      (FRe = {}),
      fee.forEach(function (t) {
        FRe[t] = function () {
          if (lG(global.process)) {
            var r = nd.listeners(t);
            r.length === Sh.count &&
              (MRe(),
              mG("exit", null, t),
              mG("afterexit", null, t),
              QTr && t === "SIGHUP" && (t = "SIGINT"),
              nd.kill(nd.pid, t));
          }
        };
      }),
      (hee.exports.signals = function () {
        return fee;
      }),
      (pee = !1),
      (H9t = function () {
        pee ||
          !lG(global.process) ||
          ((pee = !0),
          (Sh.count += 1),
          (fee = fee.filter(function (e) {
            try {
              return (nd.on(e, FRe[e]), !0);
            } catch {
              return !1;
            }
          })),
          (nd.emit = qTr),
          (nd.reallyExit = GTr));
      }),
      (hee.exports.load = H9t),
      (V9t = nd.reallyExit),
      (GTr = function (e) {
        lG(global.process) &&
          ((nd.exitCode = e || 0),
          mG("exit", nd.exitCode, null),
          mG("afterexit", nd.exitCode, null),
          V9t.call(nd, nd.exitCode));
      }),
      (URe = nd.emit),
      (qTr = function (e, r) {
        if (e === "exit" && lG(global.process)) {
          r !== void 0 && (nd.exitCode = r);
          var n = URe.apply(this, arguments);
          return (mG("exit", nd.exitCode, null), mG("afterexit", nd.exitCode, null), n);
        } else return URe.apply(this, arguments);
      }))
    : (hee.exports = function () {
        return function () {};
      });
  var jTr, fee, QTr, qhe, Sh, MRe, mG, FRe, pee, H9t, V9t, GTr, URe, qTr;
});
import Qmo from "node:process";
var VTr,
  WTr,
  Gmo,
  zTr,
  YTr = j(() => {
    ((VTr = Se(UTr(), 1)),
      (WTr = Se(HTr(), 1)),
      (Gmo = (0, VTr.default)(() => {
        (0, WTr.default)(
          () => {
            Qmo.stderr.write("\x1B[?25h");
          },
          { alwaysLast: !0 },
        );
      })),
      (zTr = Gmo));
  });
import KTr from "node:process";
var $Re,
  gee,
  rB,
  W9t = j(() => {
    YTr();
    (($Re = !1), (gee = {}));
    gee.show = (t = KTr.stderr) => {
      t.isTTY && (($Re = !1), t.write("\x1B[?25h"));
    };
    gee.hide = (t = KTr.stderr) => {
      t.isTTY && (zTr(), ($Re = !0), t.write("\x1B[?25l"));
    };
    gee.toggle = (t, e) => {
      (t !== void 0 && ($Re = t), $Re ? gee.show(e) : gee.hide(e));
    };
    rB = gee;
  });
var qmo,
  Hmo,
  Vmo,
  Wmo,
  JTr,
  XTr = j(() => {
    bhe();
    W9t();
    ((qmo = (t, { showCursor: e = !1 } = {}) => {
      let r = 0,
        n = "",
        o = !1,
        s = (a) => {
          !e && !o && (rB.hide(), (o = !0));
          let u =
            a +
            `
`;
          u !== n &&
            ((n = u),
            t.write(M1.eraseLines(r) + u),
            (r = u.split(`
`).length));
        };
      return (
        (s.clear = () => {
          (t.write(M1.eraseLines(r)), (n = ""), (r = 0));
        }),
        (s.done = () => {
          ((n = ""), (r = 0), e || (rB.show(), (o = !1)));
        }),
        (s.sync = (a) => {
          let u =
            a +
            `
`;
          ((n = u),
            (r = u.split(`
`).length));
        }),
        s
      );
    }),
      (Hmo = (t, { showCursor: e = !1 } = {}) => {
        let r = [],
          n = "",
          o = !1,
          s = (a) => {
            !e && !o && (rB.hide(), (o = !0));
            let u =
              a +
              `
`;
            if (u === n) return;
            let c = r.length,
              m = u.split(`
`),
              d = m.length,
              f = d - 1;
            if (
              u ===
                `
` ||
              n.length === 0
            ) {
              (t.write(M1.eraseLines(c) + u), (n = u), (r = m));
              return;
            }
            let p = [];
            d < c ? p.push(M1.eraseLines(c - d + 1), M1.cursorUp(f)) : p.push(M1.cursorUp(c - 1));
            for (let h = 0; h < f; h++) {
              if (m[h] === r[h]) {
                p.push(M1.cursorNextLine);
                continue;
              }
              p.push(
                M1.cursorTo(0) +
                  m[h] +
                  M1.eraseEndLine +
                  `
`,
              );
            }
            (t.write(p.join("")), (n = u), (r = m));
          };
        return (
          (s.clear = () => {
            (t.write(M1.eraseLines(r.length)), (n = ""), (r = []));
          }),
          (s.done = () => {
            ((n = ""), (r = []), e || (rB.show(), (o = !1)));
          }),
          (s.sync = (a) => {
            let u =
              a +
              `
`;
            ((n = u),
              (r = u.split(`
`)));
          }),
          s
        );
      }),
      (Vmo = (t, { showCursor: e = !1, incremental: r = !1 } = {}) =>
        r ? Hmo(t, { showCursor: e }) : qmo(t, { showCursor: e })),
      (Wmo = { create: Vmo }),
      (JTr = Wmo));
  });
var zmo,
  bee,
  z9t = j(() => {
    ((zmo = new WeakMap()), (bee = zmo));
  });
var ZTr,
  eDr,
  Y9t,
  K9t = j(() => {
    ((ZTr = Se(Yt(), 1)), (eDr = (0, ZTr.createContext)({ exit() {} })));
    eDr.displayName = "InternalAppContext";
    Y9t = eDr;
  });
import { EventEmitter as Ymo } from "node:events";
import Kmo from "node:process";
var tDr,
  rDr,
  jRe,
  J9t = j(() => {
    ((tDr = Se(Yt(), 1)),
      (rDr = (0, tDr.createContext)({
        stdin: Kmo.stdin,
        internal_eventEmitter: new Ymo(),
        setRawMode() {},
        isRawModeSupported: !1,
        internal_exitOnCtrlC: !0,
      })));
    rDr.displayName = "InternalStdinContext";
    jRe = rDr;
  });
import Jmo from "node:process";
var nDr,
  iDr,
  QRe,
  X9t = j(() => {
    ((nDr = Se(Yt(), 1)), (iDr = (0, nDr.createContext)({ stdout: Jmo.stdout, write() {} })));
    iDr.displayName = "InternalStdoutContext";
    QRe = iDr;
  });
import Xmo from "node:process";
var oDr,
  sDr,
  Z9t,
  e6t = j(() => {
    ((oDr = Se(Yt(), 1)), (sDr = (0, oDr.createContext)({ stderr: Xmo.stderr, write() {} })));
    sDr.displayName = "InternalStderrContext";
    Z9t = sDr;
  });
var aDr,
  uDr,
  GRe,
  qRe = j(() => {
    ((aDr = Se(Yt(), 1)),
      (uDr = (0, aDr.createContext)({
        activeId: void 0,
        add() {},
        remove() {},
        activate() {},
        deactivate() {},
        enableFocus() {},
        disableFocus() {},
        focusNext() {},
        focusPrevious() {},
        focus() {},
      })));
    uDr.displayName = "InternalFocusContext";
    GRe = uDr;
  });