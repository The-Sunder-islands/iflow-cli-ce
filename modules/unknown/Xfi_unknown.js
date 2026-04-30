/**
 * @module Xfi
 * @category unknown
 * @label unknown
 * @position 1648 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xfi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Xfi = T((bQc, Jfi) => {
  "use strict";
  var gwa = d3().fromPromise,
    Yfi = Ae("path"),
    bN = e5(),
    Kfi = FS();
  async function bwa(t) {
    let e;
    try {
      e = await bN.stat(t);
    } catch {}
    if (e && e.isFile()) return;
    let r = Yfi.dirname(t),
      n = null;
    try {
      n = await bN.stat(r);
    } catch (o) {
      if (o.code === "ENOENT") {
        (await Kfi.mkdirs(r), await bN.writeFile(t, ""));
        return;
      } else throw o;
    }
    n.isDirectory() ? await bN.writeFile(t, "") : await bN.readdir(r);
  }
  function Awa(t) {
    let e;
    try {
      e = bN.statSync(t);
    } catch {}
    if (e && e.isFile()) return;
    let r = Yfi.dirname(t);
    try {
      bN.statSync(r).isDirectory() || bN.readdirSync(r);
    } catch (n) {
      if (n && n.code === "ENOENT") Kfi.mkdirsSync(r);
      else throw n;
    }
    bN.writeFileSync(t, "");
  }
  Jfi.exports = { createFile: gwa(bwa), createFileSync: Awa };
});