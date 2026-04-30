/**
 * @module APn
 * @category utils/oop
 * @label oop
 * @position 1292 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (APn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var APn = T((Cc) => {
  "use strict";
  var bPn =
      (Cc && Cc.__createBinding) ||
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
    AMs =
      (Cc && Cc.__setModuleDefault) ||
      (Object.create
        ? function (t, e) {
            Object.defineProperty(t, "default", { enumerable: !0, value: e });
          }
        : function (t, e) {
            t.default = e;
          }),
    yMs =
      (Cc && Cc.__importStar) ||
      function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && bPn(e, t, r);
        return (AMs(e, t), e);
      },
    _Ms =
      (Cc && Cc.__exportStar) ||
      function (t, e) {
        for (var r in t) r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && bPn(e, t, r);
      };
  Object.defineProperty(Cc, "__esModule", { value: !0 });
  Cc.writeToPath =
    Cc.writeToString =
    Cc.writeToBuffer =
    Cc.writeToStream =
    Cc.write =
    Cc.format =
    Cc.FormatterOptions =
    Cc.CsvFormatterStream =
      void 0;
  var EMs = Ae("util"),
    vMs = Ae("stream"),
    CMs = yMs(Ae("fs")),
    SMs = TXt(),
    wMs = WXt();
  _Ms(qXt(), Cc);
  var xMs = WXt();
  Object.defineProperty(Cc, "CsvFormatterStream", {
    enumerable: !0,
    get: function () {
      return xMs.CsvFormatterStream;
    },
  });
  var TMs = TXt();
  Object.defineProperty(Cc, "FormatterOptions", {
    enumerable: !0,
    get: function () {
      return TMs.FormatterOptions;
    },
  });
  Cc.format = (t) => new wMs.CsvFormatterStream(new SMs.FormatterOptions(t));
  Cc.write = (t, e) => {
    let r = Cc.format(e),
      n = EMs.promisify((o, s) => {
        r.write(o, void 0, s);
      });
    return (
      t
        .reduce((o, s) => o.then(() => n(s)), Promise.resolve())
        .then(() => r.end())
        .catch((o) => {
          r.emit("error", o);
        }),
      r
    );
  };
  Cc.writeToStream = (t, e, r) => Cc.write(e, r).pipe(t);
  Cc.writeToBuffer = (t, e = {}) => {
    let r = [],
      n = new vMs.Writable({
        write(o, s, a) {
          (r.push(o), a());
        },
      });
    return new Promise((o, s) => {
      (n.on("error", s).on("finish", () => o(Buffer.concat(r))), Cc.write(t, e).pipe(n));
    });
  };
  Cc.writeToString = (t, e) => Cc.writeToBuffer(t, e).then((r) => r.toString());
  Cc.writeToPath = (t, e, r) => {
    let n = CMs.createWriteStream(t, { encoding: "utf8" });
    return Cc.write(e, r).pipe(n);
  };
});