/**
 * @module kWt
 * @category unknown
 * @label unknown
 * @position 1082 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kWt = T((sW) => {
  var Gwn = (d1(), bt(m1));
  sW.paragraph = cSs;
  sW.run = lSs;
  sW._elements = qwn;
  sW._elementsOfType = RWt;
  sW.getDescendantsOfType = mSs;
  sW.getDescendants = Hwn;
  function cSs(t) {
    return RWt("paragraph", t);
  }
  function lSs(t) {
    return RWt("run", t);
  }
  function RWt(t, e) {
    return qwn(function (r) {
      return r.type === t ? e(r) : r;
    });
  }
  function qwn(t) {
    return function e(r) {
      if (r.children) {
        var n = Gwn.map(r.children, e);
        r = Gwn.extend(r, { children: n });
      }
      return t(r);
    };
  }
  function mSs(t, e) {
    return Hwn(t).filter(function (r) {
      return r.type === e;
    });
  }
  function Hwn(t) {
    var e = [];
    return (
      Vwn(t, function (r) {
        e.push(r);
      }),
      e
    );
  }
  function Vwn(t, e) {
    t.children &&
      t.children.forEach(function (r) {
        (Vwn(r, e), e(r));
      });
  }
});