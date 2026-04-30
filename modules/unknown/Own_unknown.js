/**
 * @module Own
 * @category unknown
 * @label unknown
 * @position 1076 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Own) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Own = T((kwn, Uye) => {
  (function () {
    var t, e, r, n, o, s, a;
    ((a = zk()),
      (o = a.assign),
      (s = a.isFunction),
      (t = Swn()),
      (e = Twn()),
      (n = JXe()),
      (r = Rwn()),
      (Uye.exports.create = function (u, c, m, d) {
        var f, p;
        if (u == null) throw new Error("Root element needs a name.");
        return (
          (d = o({}, c, m, d)),
          (f = new t(d)),
          (p = f.element(u)),
          d.headless || (f.declaration(d), (d.pubID != null || d.sysID != null) && f.doctype(d)),
          p
        );
      }),
      (Uye.exports.begin = function (u, c, m) {
        var d;
        return (s(u) && ((d = [u, c]), (c = d[0]), (m = d[1]), (u = {})), c ? new e(u, c, m) : new t(u));
      }),
      (Uye.exports.stringWriter = function (u) {
        return new n(u);
      }),
      (Uye.exports.streamWriter = function (u, c) {
        return new r(u, c);
      }));
  }).call(kwn);
});