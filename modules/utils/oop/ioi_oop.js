/**
 * @module ioi
 * @category utils/oop
 * @label oop
 * @position 1600 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ioi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ioi = T((bwc, noi) => {
  "use strict";
  var roi = GO().Buffer;
  noi.exports = function (t) {
    var e = t.Transform;
    function r(o, s) {
      ((this.conv = o), (s = s || {}), (s.decodeStrings = !1), e.call(this, s));
    }
    ((r.prototype = Object.create(e.prototype, { constructor: { value: r } })),
      (r.prototype._transform = function (o, s, a) {
        if (typeof o != "string") return a(new Error("Iconv encoding stream needs strings as its input."));
        try {
          var u = this.conv.write(o);
          (u && u.length && this.push(u), a());
        } catch (c) {
          a(c);
        }
      }),
      (r.prototype._flush = function (o) {
        try {
          var s = this.conv.end();
          (s && s.length && this.push(s), o());
        } catch (a) {
          o(a);
        }
      }),
      (r.prototype.collect = function (o) {
        var s = [];
        return (
          this.on("error", o),
          this.on("data", function (a) {
            s.push(a);
          }),
          this.on("end", function () {
            o(null, roi.concat(s));
          }),
          this
        );
      }));
    function n(o, s) {
      ((this.conv = o), (s = s || {}), (s.encoding = this.encoding = "utf8"), e.call(this, s));
    }
    return (
      (n.prototype = Object.create(e.prototype, { constructor: { value: n } })),
      (n.prototype._transform = function (o, s, a) {
        if (!roi.isBuffer(o) && !(o instanceof Uint8Array))
          return a(new Error("Iconv decoding stream needs buffers as its input."));
        try {
          var u = this.conv.write(o);
          (u && u.length && this.push(u, this.encoding), a());
        } catch (c) {
          a(c);
        }
      }),
      (n.prototype._flush = function (o) {
        try {
          var s = this.conv.end();
          (s && s.length && this.push(s, this.encoding), o());
        } catch (a) {
          o(a);
        }
      }),
      (n.prototype.collect = function (o) {
        var s = "";
        return (
          this.on("error", o),
          this.on("data", function (a) {
            s += a;
          }),
          this.on("end", function () {
            o(null, s);
          }),
          this
        );
      }),
      { IconvLiteEncoderStream: r, IconvLiteDecoderStream: n }
    );
  };
});