/**
 * @module bDn
 * @category unknown
 * @label unknown
 * @position 1139 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bDn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bDn = T((gDn) => {
  var hDn = (t, e) => ({ ...t, ...e.reduce((r, n) => (t[n] && (r[n] = { ...t[n] }), r), {}) }),
    eD = (t, e, r, n = []) => {
      t[r] && (e[r] = hDn(t[r], n));
    },
    vTs = (t) => Object.keys(t).length === 0,
    CTs = (t) => {
      if (!t) return t;
      if (vTs(t)) return {};
      let e = { ...t };
      return (
        eD(t, e, "font", ["color"]),
        eD(t, e, "alignment"),
        eD(t, e, "protection"),
        t.border &&
          (eD(t, e, "border"),
          eD(t.border, e.border, "top", ["color"]),
          eD(t.border, e.border, "left", ["color"]),
          eD(t.border, e.border, "bottom", ["color"]),
          eD(t.border, e.border, "right", ["color"]),
          eD(t.border, e.border, "diagonal", ["color"])),
        t.fill &&
          (eD(t, e, "fill", ["fgColor", "bgColor", "center"]),
          t.fill.stops && (e.fill.stops = t.fill.stops.map((r) => hDn(r, ["color"])))),
        e
      );
    };
  gDn.copyStyle = CTs;
});