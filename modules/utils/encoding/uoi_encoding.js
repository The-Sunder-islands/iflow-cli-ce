/**
 * @module uoi
 * @category utils/encoding
 * @label encoding
 * @position 1601 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uoi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uoi = T((Awc, aoi) => {
  "use strict";
  var ooi = GO().Buffer,
    soi = xii(),
    Fs = aoi.exports;
  Fs.encodings = null;
  Fs.defaultCharUnicode = "\uFFFD";
  Fs.defaultCharSingleByte = "?";
  Fs.encode = function (e, r, n) {
    e = "" + (e || "");
    var o = Fs.getEncoder(r, n),
      s = o.write(e),
      a = o.end();
    return a && a.length > 0 ? ooi.concat([s, a]) : s;
  };
  Fs.decode = function (e, r, n) {
    typeof e == "string" &&
      (Fs.skipDecodeWarning ||
        (console.error(
          "Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding",
        ),
        (Fs.skipDecodeWarning = !0)),
      (e = ooi.from("" + (e || ""), "binary")));
    var o = Fs.getDecoder(r, n),
      s = o.write(e),
      a = o.end();
    return a ? s + a : s;
  };
  Fs.encodingExists = function (e) {
    try {
      return (Fs.getCodec(e), !0);
    } catch {
      return !1;
    }
  };
  Fs.toEncoding = Fs.encode;
  Fs.fromEncoding = Fs.decode;
  Fs._codecDataCache = {};
  Fs.getCodec = function (e) {
    Fs.encodings || (Fs.encodings = toi());
    for (var r = Fs._canonicalizeEncoding(e), n = {}; ; ) {
      var o = Fs._codecDataCache[r];
      if (o) return o;
      var s = Fs.encodings[r];
      switch (typeof s) {
        case "string":
          r = s;
          break;
        case "object":
          for (var a in s) n[a] = s[a];
          (n.encodingName || (n.encodingName = r), (r = s.type));
          break;
        case "function":
          return (
            n.encodingName || (n.encodingName = r),
            (o = new s(n, Fs)),
            (Fs._codecDataCache[n.encodingName] = o),
            o
          );
        default:
          throw new Error("Encoding not recognized: '" + e + "' (searched as: '" + r + "')");
      }
    }
  };
  Fs._canonicalizeEncoding = function (t) {
    return ("" + t).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
  };
  Fs.getEncoder = function (e, r) {
    var n = Fs.getCodec(e),
      o = new n.encoder(r, n);
    return (n.bomAware && r && r.addBOM && (o = new soi.PrependBOM(o, r)), o);
  };
  Fs.getDecoder = function (e, r) {
    var n = Fs.getCodec(e),
      o = new n.decoder(r, n);
    return (n.bomAware && !(r && r.stripBOM === !1) && (o = new soi.StripBOM(o, r)), o);
  };
  Fs.enableStreamingAPI = function (e) {
    if (!Fs.supportsStreams) {
      var r = ioi()(e);
      ((Fs.IconvLiteEncoderStream = r.IconvLiteEncoderStream),
        (Fs.IconvLiteDecoderStream = r.IconvLiteDecoderStream),
        (Fs.encodeStream = function (o, s) {
          return new Fs.IconvLiteEncoderStream(Fs.getEncoder(o, s), s);
        }),
        (Fs.decodeStream = function (o, s) {
          return new Fs.IconvLiteDecoderStream(Fs.getDecoder(o, s), s);
        }),
        (Fs.supportsStreams = !0));
    }
  };
  var Qst;
  try {
    Qst = Ae("stream");
  } catch {}
  Qst && Qst.Transform
    ? Fs.enableStreamingAPI(Qst)
    : (Fs.encodeStream = Fs.decodeStream =
        function () {
          throw new Error(
            "iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.",
          );
        });
});