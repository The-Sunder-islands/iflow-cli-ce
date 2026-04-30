/**
 * @module ZLi
 * @category unknown
 * @label unknown
 * @position 1831 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZLi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZLi = T((mtl, XLi) => {
  var KLi = rf(),
    o1e = F3i(),
    JLi = Ae("stream");
  XLi.exports = {
    buffer: function (t, e) {
      return o1e(
        {
          stream: function (n, o) {
            let s = JLi.PassThrough(),
              a = o ? n + o : void 0;
            return (s.end(t.slice(n, a)), s);
          },
          size: function () {
            return Promise.resolve(t.length);
          },
        },
        e,
      );
    },
    file: function (t, e) {
      return o1e(
        {
          stream: function (n, o) {
            let s = o ? n + o : void 0;
            return KLi.createReadStream(t, { start: n, end: s });
          },
          size: function () {
            return new Promise(function (n, o) {
              KLi.stat(t, function (s, a) {
                s ? o(s) : n(a.size);
              });
            });
          },
        },
        e,
      );
    },
    url: function (t, e, r) {
      if ((typeof e == "string" && (e = { url: e }), !e.url)) throw "URL missing";
      return (
        (e.headers = e.headers || {}),
        o1e(
          {
            stream: function (o, s) {
              let a = Object.create(e),
                u = s ? o + s : "";
              return ((a.headers = Object.create(e.headers)), (a.headers.range = "bytes=" + o + "-" + u), t(a));
            },
            size: function () {
              return new Promise(function (o, s) {
                let a = t(e);
                a.on("response", function (u) {
                  (a.abort(),
                    u.headers["content-length"]
                      ? o(u.headers["content-length"])
                      : s(new Error("Missing content length header")));
                }).on("error", s);
              });
            },
          },
          r,
        )
      );
    },
    s3: function (t, e, r) {
      return o1e(
        {
          size: function () {
            return new Promise(function (o, s) {
              t.headObject(e, function (a, u) {
                a ? s(a) : o(u.ContentLength);
              });
            });
          },
          stream: function (o, s) {
            let a = {};
            for (let c in e) a[c] = e[c];
            let u = s ? o + s : "";
            return ((a.Range = "bytes=" + o + "-" + u), t.getObject(a).createReadStream());
          },
        },
        r,
      );
    },
    s3_v3: function (t, e, r) {
      let { GetObjectCommand: n, HeadObjectCommand: o } = YLi();
      return o1e(
        {
          size: async () => {
            let a = await t.send(new o({ Bucket: e.Bucket, Key: e.Key }));
            return a.ContentLength ? a.ContentLength : 0;
          },
          stream: (a, u) => {
            let c = JLi.PassThrough(),
              m = u ? a + u : "";
            return (
              t
                .send(new n({ Bucket: e.Bucket, Key: e.Key, Range: `bytes=${a}-${m}` }))
                .then((d) => {
                  d.Body.pipe(c);
                })
                .catch((d) => {
                  c.emit("error", d);
                }),
              c
            );
          },
        },
        r,
      );
    },
    custom: function (t, e) {
      return o1e(t, e);
    },
  };
});