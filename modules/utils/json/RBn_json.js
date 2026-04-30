/**
 * @module RBn
 * @category utils/json
 * @label json
 * @position 1317 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RBn = T((Y5c, IBn) => {
  var TBn = Ae("fs"),
    DBn = CBn(),
    J$s = SBn(),
    X$s = wBn(),
    D_e = xBn().extend(J$s).extend(X$s),
    Z$s = u_e(),
    {
      fs: { exists: ejs },
    } = eA(),
    tjs = {
      true: !0,
      false: !1,
      "#N/A": { error: "#N/A" },
      "#REF!": { error: "#REF!" },
      "#NAME?": { error: "#NAME?" },
      "#DIV/0!": { error: "#DIV/0!" },
      "#NULL!": { error: "#NULL!" },
      "#VALUE!": { error: "#VALUE!" },
      "#NUM!": { error: "#NUM!" },
    },
    GZt = class {
      constructor(e) {
        ((this.workbook = e), (this.worksheet = null));
      }
      async readFile(e, r) {
        if (((r = r || {}), !(await ejs(e)))) throw new Error(`File not found: ${e}`);
        let n = TBn.createReadStream(e),
          o = await this.read(n, r);
        return (n.close(), o);
      }
      read(e, r) {
        return (
          (r = r || {}),
          new Promise((n, o) => {
            let s = this.workbook.addWorksheet(r.sheetName),
              a = r.dateFormats || ["YYYY-MM-DD[T]HH:mm:ssZ", "YYYY-MM-DD[T]HH:mm:ss", "MM-DD-YYYY", "YYYY-MM-DD"],
              u =
                r.map ||
                function (m) {
                  if (m === "") return null;
                  let d = Number(m);
                  if (!Number.isNaN(d) && d !== 1 / 0) return d;
                  let f = a.reduce((h, g) => {
                    if (h) return h;
                    let b = D_e(m, g, !0);
                    return b.isValid() ? b : null;
                  }, null);
                  if (f) return new Date(f.valueOf());
                  let p = tjs[m];
                  return p !== void 0 ? p : m;
                },
              c = DBn.parse(r.parserOptions)
                .on("data", (m) => {
                  s.addRow(m.map(u));
                })
                .on("end", () => {
                  c.emit("worksheet", s);
                });
            (c.on("worksheet", n).on("error", o), e.pipe(c));
          })
        );
      }
      createInputStream() {
        throw new Error(
          "`CSV#createInputStream` is deprecated. You should use `CSV#read` instead. This method will be removed in version 5.0. Please follow upgrade instruction: https://github.com/exceljs/exceljs/blob/master/UPGRADE-4.0.md",
        );
      }
      write(e, r) {
        return new Promise((n, o) => {
          r = r || {};
          let s = this.workbook.getWorksheet(r.sheetName || r.sheetId),
            a = DBn.format(r.formatterOptions);
          (e.on("finish", () => {
            n();
          }),
            a.on("error", o),
            a.pipe(e));
          let { dateFormat: u, dateUTC: c } = r,
            m =
              r.map ||
              ((p) => {
                if (p) {
                  if (p.text || p.hyperlink) return p.hyperlink || p.text || "";
                  if (p.formula || p.result) return p.result || "";
                  if (p instanceof Date)
                    return u
                      ? c
                        ? D_e.utc(p).format(u)
                        : D_e(p).format(u)
                      : c
                        ? D_e.utc(p).format()
                        : D_e(p).format();
                  if (p.error) return p.error;
                  if (typeof p == "object") return JSON.stringify(p);
                }
                return p;
              }),
            d = r.includeEmptyRows === void 0 || r.includeEmptyRows,
            f = 1;
          (s &&
            s.eachRow((p, h) => {
              if (d) for (; f++ < h - 1; ) a.write([]);
              let { values: g } = p;
              (g.shift(), a.write(g.map(m)), (f = h));
            }),
            a.end());
        });
      }
      writeFile(e, r) {
        r = r || {};
        let n = { encoding: r.encoding || "utf8" },
          o = TBn.createWriteStream(e, n);
        return this.write(o, r);
      }
      async writeBuffer(e) {
        let r = new Z$s();
        return (await this.write(r, e), r.read());
      }
    };
  IBn.exports = GZt;
});