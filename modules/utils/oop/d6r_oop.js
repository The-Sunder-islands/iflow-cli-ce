/**
 * @module d6r
 * @category utils/oop
 * @label oop
 * @position 1874 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (d6r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var d6r = T((Kal, Sji) => {
  var Tsu = Ae("url"),
    m6r = (t, e, r) => {
      let n = t.indexOf(r);
      return t.lastIndexOf(e, n > -1 ? n : 1 / 0);
    },
    Cji = (t) => {
      try {
        return new Tsu.URL(t);
      } catch {}
    },
    Dsu = (t, e) => {
      let r = t.indexOf(":"),
        n = t.slice(0, r + 1);
      if (Object.prototype.hasOwnProperty.call(e, n)) return t;
      let o = t.indexOf("@");
      return o > -1
        ? o > r
          ? `git+ssh://${t}`
          : t
        : t.indexOf("//") === r + 1
          ? t
          : `${t.slice(0, r + 1)}//${t.slice(r + 1)}`;
    },
    Isu = (t) => {
      let e = m6r(t, "@", "#"),
        r = m6r(t, ":", "#");
      return (
        r > e && (t = t.slice(0, r) + "/" + t.slice(r + 1)),
        m6r(t, ":", "#") === -1 && t.indexOf("//") === -1 && (t = `git+ssh://${t}`),
        t
      );
    };
  Sji.exports = (t, e) => {
    let r = e ? Dsu(t, e) : t;
    return Cji(r) || Cji(Isu(r));
  };
});