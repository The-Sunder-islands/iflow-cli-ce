/**
 * @module vBn
 * @category utils/oop
 * @label oop
 * @position 1312 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vBn = T((Bd) => {
  "use strict";
  var EBn =
      (Bd && Bd.__createBinding) ||
      (Object.create
        ? function (t, e, r, n) {
            (n === void 0 && (n = r),
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[r];
                },
              }));
          }
        : function (t, e, r, n) {
            (n === void 0 && (n = r), (t[n] = e[r]));
          }),
    q$s =
      (Bd && Bd.__setModuleDefault) ||
      (Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          }),
    H$s =
      (Bd && Bd.__importStar) ||
      function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && EBn(e, t, r);
        return (q$s(e, t), e);
      },
    V$s =
      (Bd && Bd.__exportStar) ||
      function (t, e) {
        for (var r in t) r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && EBn(e, t, r);
      };
  Object.defineProperty(Bd, "__esModule", { value: !0 });
  Bd.parseString = Bd.parseFile = Bd.parseStream = Bd.parse = Bd.ParserOptions = Bd.CsvParserStream = void 0;
  var W$s = H$s(Ae("fs")),
    z$s = Ae("stream"),
    Ott = YXt(),
    Ntt = LZt();
  V$s(KXt(), Bd);
  var Y$s = LZt();
  Object.defineProperty(Bd, "CsvParserStream", {
    enumerable: !0,
    get: function () {
      return Y$s.CsvParserStream;
    },
  });
  var K$s = YXt();
  Object.defineProperty(Bd, "ParserOptions", {
    enumerable: !0,
    get: function () {
      return K$s.ParserOptions;
    },
  });
  Bd.parse = (t) => new Ntt.CsvParserStream(new Ott.ParserOptions(t));
  Bd.parseStream = (t, e) => t.pipe(new Ntt.CsvParserStream(new Ott.ParserOptions(e)));
  Bd.parseFile = (t, e = {}) => W$s.createReadStream(t).pipe(new Ntt.CsvParserStream(new Ott.ParserOptions(e)));
  Bd.parseString = (t, e) => {
    let r = new z$s.Readable();
    return (r.push(t), r.push(null), r.pipe(new Ntt.CsvParserStream(new Ott.ParserOptions(e))));
  };
});