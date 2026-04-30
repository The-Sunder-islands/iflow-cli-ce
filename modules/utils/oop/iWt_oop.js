/**
 * @module iWt
 * @category utils/oop
 * @label oop
 * @position 1044 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iWt = T((MXe) => {
  var u4s = Z6t(),
    c4s = LXe();
  MXe.openArrayBuffer = l4s;
  MXe.splitPath = m4s;
  MXe.joinPath = d4s;
  function l4s(t) {
    return c4s.loadAsync(t).then(function (e) {
      function r(a) {
        return e.file(a) !== null;
      }
      function n(a, u) {
        return e
          .file(a)
          .async("uint8array")
          .then(function (c) {
            if (u === "base64") return u4s.fromByteArray(c);
            if (u) {
              var m = new TextDecoder(u);
              return m.decode(c);
            } else return c;
          });
      }
      function o(a, u) {
        e.file(a, u);
      }
      function s() {
        return e.generateAsync({ type: "arraybuffer" });
      }
      return { exists: r, read: n, write: o, toArrayBuffer: s };
    });
  }
  function m4s(t) {
    var e = t.lastIndexOf("/");
    return e === -1 ? { dirname: "", basename: t } : { dirname: t.substring(0, e), basename: t.substring(e + 1) };
  }
  function d4s() {
    var t = Array.prototype.filter.call(arguments, function (r) {
        return r;
      }),
      e = [];
    return (
      t.forEach(function (r) {
        /^\//.test(r) ? (e = [r]) : e.push(r);
      }),
      e.join("/")
    );
  }
});