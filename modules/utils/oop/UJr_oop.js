/**
 * @module UJr
 * @category utils/oop
 * @label oop
 * @position 415 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UJr = T((eLu, vre) => {
  var PJr = Ae("path"),
    eBo = xwt(),
    { fileURLToPath: BJr } = Ae("url"),
    { MessageChannel: tBo } = Ae("worker_threads"),
    { importHooks: Bwt, specifiers: rBo, toHook: nBo, getExperimentalPatchInternals: iBo } = NJr();
  function MJr(t) {
    (Bwt.push(t), nBo.forEach(([e, r]) => t(e, r)));
  }
  function FJr(t) {
    let e = Bwt.indexOf(t);
    e > -1 && Bwt.splice(e, 1);
  }
  function LJr(t, e, r, n) {
    let o = t(e, r, n);
    o && o !== e && (e.default = o);
  }
  var Lwt;
  function oBo() {
    let { port1: t, port2: e } = new tBo(),
      r = 0,
      n;
    ((Lwt = (u) => {
      (r++, t.postMessage(u));
    }),
      t
        .on("message", () => {
          (r--, n && r <= 0 && n());
        })
        .unref());
    function o() {
      let u = setInterval(() => {}, 1e3),
        c = new Promise((m) => {
          n = m;
        }).then(() => {
          clearInterval(u);
        });
      return (r === 0 && n(), c);
    }
    let s = e;
    return {
      registerOptions: { data: { addHookMessagePort: s, include: [] }, transferList: [s] },
      addHookMessagePort: s,
      waitForAllMessagesAcknowledged: o,
    };
  }
  function Hge(t, e, r) {
    if (!(this instanceof Hge)) return new Hge(t, e, r);
    typeof t == "function" ? ((r = t), (t = null), (e = null)) : typeof e == "function" && ((r = e), (e = null));
    let n = e ? e.internals === !0 : !1;
    (Lwt && Array.isArray(t) && Lwt(t),
      (this._iitmHook = (o, s) => {
        let a = o,
          u = o.startsWith("node:"),
          c;
        if (u) o = o.replace(/^node:/, "");
        else {
          if (o.startsWith("file://"))
            try {
              o = BJr(o);
            } catch {}
          let m = eBo(o);
          m && ((o = m.name), (c = m.basedir));
        }
        if (t) {
          for (let m of t)
            if (m === o) {
              if (c) {
                if (n) o = o + PJr.sep + PJr.relative(c, BJr(a));
                else if (!iBo() && !c.endsWith(rBo.get(a))) continue;
              }
              LJr(r, s, o, c);
            }
        } else LJr(r, s, o, c);
      }),
      MJr(this._iitmHook));
  }
  Hge.prototype.unhook = function () {
    FJr(this._iitmHook);
  };
  vre.exports = Hge;
  vre.exports.Hook = Hge;
  vre.exports.addHook = MJr;
  vre.exports.removeHook = FJr;
  vre.exports.createAddHookMessageChannel = oBo;
});