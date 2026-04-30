/**
 * @module eA
 * @category utils/xml
 * @label xml
 * @position 1158 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eA) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eA = T((Xbc, RIn) => {
  var DIn = Ae("fs"),
    OIs = function (t, e, r, n) {
      ((t.super_ = e),
        n || ((n = r), (r = null)),
        r &&
          Object.keys(r).forEach((s) => {
            Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(r, s));
          }));
      let o = { constructor: { value: t, enumerable: !1, writable: !1, configurable: !0 } };
      (n &&
        Object.keys(n).forEach((s) => {
          o[s] = Object.getOwnPropertyDescriptor(n, s);
        }),
        (t.prototype = Object.create(e.prototype, o)));
    },
    NIs = /[<>&'"\x7F\x00-\x08\x0B-\x0C\x0E-\x1F]/,
    IIn = {
      nop() {},
      promiseImmediate(t) {
        return new Promise((e) => {
          global.setImmediate
            ? setImmediate(() => {
                e(t);
              })
            : setTimeout(() => {
                e(t);
              }, 1);
        });
      },
      inherits: OIs,
      dateToExcel(t, e) {
        return 25569 + t.getTime() / (24 * 3600 * 1e3) - (e ? 1462 : 0);
      },
      excelToDate(t, e) {
        let r = Math.round((t - 25569 + (e ? 1462 : 0)) * 24 * 3600 * 1e3);
        return new Date(r);
      },
      parsePath(t) {
        let e = t.lastIndexOf("/");
        return { path: t.substring(0, e), name: t.substring(e + 1) };
      },
      getRelsPath(t) {
        let e = IIn.parsePath(t);
        return `${e.path}/_rels/${e.name}.rels`;
      },
      xmlEncode(t) {
        let e = NIs.exec(t);
        if (!e) return t;
        let r = "",
          n = "",
          o = 0,
          s = e.index;
        for (; s < t.length; s++) {
          let a = t.charCodeAt(s);
          switch (a) {
            case 34:
              n = "&quot;";
              break;
            case 38:
              n = "&amp;";
              break;
            case 39:
              n = "&apos;";
              break;
            case 60:
              n = "&lt;";
              break;
            case 62:
              n = "&gt;";
              break;
            case 127:
              n = "";
              break;
            default: {
              if (a <= 31 && (a <= 8 || (a >= 11 && a !== 13))) {
                n = "";
                break;
              }
              continue;
            }
          }
          (o !== s && (r += t.substring(o, s)), (o = s + 1), n && (r += n));
        }
        return o !== s ? r + t.substring(o, s) : r;
      },
      xmlDecode(t) {
        return t.replace(/&([a-z]*);/g, (e) => {
          switch (e) {
            case "&lt;":
              return "<";
            case "&gt;":
              return ">";
            case "&amp;":
              return "&";
            case "&apos;":
              return "'";
            case "&quot;":
              return '"';
            default:
              return e;
          }
        });
      },
      validInt(t) {
        let e = parseInt(t, 10);
        return Number.isNaN(e) ? 0 : e;
      },
      isDateFmt(t) {
        return t
          ? ((t = t.replace(/\[[^\]]*]/g, "")), (t = t.replace(/"[^"]*"/g, "")), t.match(/[ymdhMsb]+/) !== null)
          : !1;
      },
      fs: {
        exists(t) {
          return new Promise((e) => {
            DIn.access(t, DIn.constants.F_OK, (r) => {
              e(!r);
            });
          });
        },
      },
      toIsoDateString(t) {
        return t.toIsoString().subsstr(0, 10);
      },
      parseBoolean(t) {
        return t === !0 || t === "true" || t === 1 || t === "1";
      },
    };
  RIn.exports = IIn;
});