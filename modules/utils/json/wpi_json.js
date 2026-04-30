/**
 * @module wpi
 * @category utils/json
 * @label json
 * @position 1655 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wpi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wpi = T((SQc, Spi) => {
  var pme;
  try {
    pme = rf();
  } catch {
    pme = Ae("fs");
  }
  var hlt = d3(),
    { stringify: vpi, stripBom: Cpi } = plt();
  async function Qwa(t, e = {}) {
    typeof e == "string" && (e = { encoding: e });
    let r = e.fs || pme,
      n = "throws" in e ? e.throws : !0,
      o = await hlt.fromCallback(r.readFile)(t, e);
    o = Cpi(o);
    let s;
    try {
      s = JSON.parse(o, e ? e.reviver : null);
    } catch (a) {
      if (n) throw ((a.message = `${t}: ${a.message}`), a);
      return null;
    }
    return s;
  }
  var Gwa = hlt.fromPromise(Qwa);
  function qwa(t, e = {}) {
    typeof e == "string" && (e = { encoding: e });
    let r = e.fs || pme,
      n = "throws" in e ? e.throws : !0;
    try {
      let o = r.readFileSync(t, e);
      return ((o = Cpi(o)), JSON.parse(o, e.reviver));
    } catch (o) {
      if (n) throw ((o.message = `${t}: ${o.message}`), o);
      return null;
    }
  }
  async function Hwa(t, e, r = {}) {
    let n = r.fs || pme,
      o = vpi(e, r);
    await hlt.fromCallback(n.writeFile)(t, o, r);
  }
  var Vwa = hlt.fromPromise(Hwa);
  function Wwa(t, e, r = {}) {
    let n = r.fs || pme,
      o = vpi(e, r);
    return n.writeFileSync(t, o, r);
  }
  Spi.exports = { readFile: Gwa, readFileSync: qwa, writeFile: Vwa, writeFileSync: Wwa };
});