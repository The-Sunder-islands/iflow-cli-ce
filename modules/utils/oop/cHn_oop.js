/**
 * @module cHn
 * @category utils/oop
 * @label oop
 * @position 1467 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cHn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cHn = T((fyc, uHn) => {
  var aHn = rf(),
    Cnt = zF(),
    HEe = sHn(),
    Snt = Ae("stream");
  (!Snt.Writable || !Snt.Writable.prototype.destroy) && (Snt = bO());
  uHn.exports = {
    buffer: function (t, e) {
      var r = {
        stream: function (n, o) {
          var s = Snt.PassThrough();
          return (s.end(t.slice(n, o)), s);
        },
        size: function () {
          return Cnt.resolve(t.length);
        },
      };
      return HEe(r, e);
    },
    file: function (t, e) {
      var r = {
        stream: function (n, o) {
          return aHn.createReadStream(t, { start: n, end: o && n + o });
        },
        size: function () {
          return new Cnt(function (n, o) {
            aHn.stat(t, function (s, a) {
              s ? o(s) : n(a.size);
            });
          });
        },
      };
      return HEe(r, e);
    },
    url: function (t, e, r) {
      if ((typeof e == "string" && (e = { url: e }), !e.url)) throw "URL missing";
      e.headers = e.headers || {};
      var n = {
        stream: function (o, s) {
          var a = Object.create(e);
          return ((a.headers = Object.create(e.headers)), (a.headers.range = "bytes=" + o + "-" + (s || "")), t(a));
        },
        size: function () {
          return new Cnt(function (o, s) {
            var a = t(e);
            a.on("response", function (u) {
              (a.abort(),
                u.headers["content-length"]
                  ? o(u.headers["content-length"])
                  : s(new Error("Missing content length header")));
            }).on("error", s);
          });
        },
      };
      return HEe(n, r);
    },
    s3: function (t, e, r) {
      var n = {
        size: function () {
          return new Cnt(function (o, s) {
            t.headObject(e, function (a, u) {
              a ? s(a) : o(u.ContentLength);
            });
          });
        },
        stream: function (o, s) {
          var a = {};
          for (var u in e) a[u] = e[u];
          return ((a.Range = "bytes=" + o + "-" + (s || "")), t.getObject(a).createReadStream());
        },
      };
      return HEe(n, r);
    },
    custom: function (t, e) {
      return HEe(t, e);
    },
  };
});