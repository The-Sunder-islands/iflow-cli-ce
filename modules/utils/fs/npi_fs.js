/**
 * @module npi
 * @category utils/fs
 * @label fs
 * @position 1649 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (npi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var npi = T((AQc, rpi) => {
  "use strict";
  var ywa = d3().fromPromise,
    Zfi = Ae("path"),
    m$ = e5(),
    epi = FS(),
    { pathExists: _wa } = l$(),
    { areIdentical: tpi } = rK();
  async function Ewa(t, e) {
    let r;
    try {
      r = await m$.lstat(e);
    } catch {}
    let n;
    try {
      n = await m$.lstat(t);
    } catch (a) {
      throw ((a.message = a.message.replace("lstat", "ensureLink")), a);
    }
    if (r && tpi(n, r)) return;
    let o = Zfi.dirname(e);
    ((await _wa(o)) || (await epi.mkdirs(o)), await m$.link(t, e));
  }
  function vwa(t, e) {
    let r;
    try {
      r = m$.lstatSync(e);
    } catch {}
    try {
      let s = m$.lstatSync(t);
      if (r && tpi(s, r)) return;
    } catch (s) {
      throw ((s.message = s.message.replace("lstat", "ensureLink")), s);
    }
    let n = Zfi.dirname(e);
    return (m$.existsSync(n) || epi.mkdirsSync(n), m$.linkSync(t, e));
  }
  rpi.exports = { createLink: ywa(Ewa), createLinkSync: vwa };
});