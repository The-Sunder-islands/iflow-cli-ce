/**
 * @module WRn
 * @category utils/markdown
 * @label markdown
 * @position 1211 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WRn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WRn = T((e2c, VRn) => {
  var Rks = Kr(),
    LKt = class extends Rks {
      get tag() {
        return "mergeCell";
      }
      render(e, r) {
        e.leafNode("mergeCell", { ref: r });
      }
      parseOpen(e) {
        return e.name === "mergeCell" ? ((this.model = e.attributes.ref), !0) : !1;
      }
      parseText() {}
      parseClose() {
        return !1;
      }
    };
  VRn.exports = LKt;
});
var $Kt = T((t2c, zRn) => {
  var A_e = f1(),
    FKt = eA(),
    fue = Pd(),
    kks = Kr(),
    Oks = Jk();
  function pue(t, e, r, n) {
    let o = e[r];
    o !== void 0 ? (t[r] = o) : n !== void 0 && (t[r] = n);
  }
  function MKt(t, e, r, n) {
    let o = e[r];
    o !== void 0 ? (t[r] = FKt.parseBoolean(o)) : n !== void 0 && (t[r] = n);
  }
  function Nks(t) {
    let e = A_e.map(t, (o, s) => ({ address: s, dataValidation: o, marked: !1 })).sort((o, s) =>
        A_e.strcmp(o.address, s.address),
      ),
      r = A_e.keyBy(e, "address"),
      n = (o, s, a) => {
        for (let u = 0; u < s; u++) {
          let c = fue.encodeAddress(o.row + u, a);
          if (!t[c] || !A_e.isEqual(t[o.address], t[c])) return !1;
        }
        return !0;
      };
    return e
      .map((o) => {
        if (!o.marked) {
          let s = fue.decodeEx(o.address);
          if (s.dimensions) return ((r[s.dimensions].marked = !0), { ...o.dataValidation, sqref: o.address });
          let a = 1,
            u = fue.encodeAddress(s.row + a, s.col);
          for (; t[u] && A_e.isEqual(o.dataValidation, t[u]); ) (a++, (u = fue.encodeAddress(s.row + a, s.col)));
          let c = 1;
          for (; n(s, a, s.col + c); ) c++;
          for (let m = 0; m < a; m++)
            for (let d = 0; d < c; d++) ((u = fue.encodeAddress(s.row + m, s.col + d)), (r[u].marked = !0));
          if (a > 1 || c > 1) {
            let m = s.row + (a - 1),
              d = s.col + (c - 1);
            return { ...o.dataValidation, sqref: `${o.address}:${fue.encodeAddress(m, d)}` };
          }
          return { ...o.dataValidation, sqref: o.address };
        }
        return null;
      })
      .filter(Boolean);
  }
  var UKt = class extends kks {
    get tag() {
      return "dataValidations";
    }
    render(e, r) {
      let n = Nks(r);
      n.length &&
        (e.openNode("dataValidations", { count: n.length }),
        n.forEach((o) => {
          (e.openNode("dataValidation"),
            o.type !== "any" &&
              (e.addAttribute("type", o.type),
              o.operator && o.type !== "list" && o.operator !== "between" && e.addAttribute("operator", o.operator),
              o.allowBlank && e.addAttribute("allowBlank", "1")),
            o.showInputMessage && e.addAttribute("showInputMessage", "1"),
            o.promptTitle && e.addAttribute("promptTitle", o.promptTitle),
            o.prompt && e.addAttribute("prompt", o.prompt),
            o.showErrorMessage && e.addAttribute("showErrorMessage", "1"),
            o.errorStyle && e.addAttribute("errorStyle", o.errorStyle),
            o.errorTitle && e.addAttribute("errorTitle", o.errorTitle),
            o.error && e.addAttribute("error", o.error),
            e.addAttribute("sqref", o.sqref),
            (o.formulae || []).forEach((s, a) => {
              (e.openNode(`formula${a + 1}`),
                o.type === "date" ? e.writeText(FKt.dateToExcel(new Date(s))) : e.writeText(s),
                e.closeNode());
            }),
            e.closeNode());
        }),
        e.closeNode());
    }
    parseOpen(e) {
      switch (e.name) {
        case "dataValidations":
          return ((this.model = {}), !0);
        case "dataValidation": {
          this._address = e.attributes.sqref;
          let r = { type: e.attributes.type || "any", formulae: [] };
          switch (
            (e.attributes.type && MKt(r, e.attributes, "allowBlank"),
            MKt(r, e.attributes, "showInputMessage"),
            MKt(r, e.attributes, "showErrorMessage"),
            r.type)
          ) {
            case "any":
            case "list":
            case "custom":
              break;
            default:
              pue(r, e.attributes, "operator", "between");
              break;
          }
          return (
            pue(r, e.attributes, "promptTitle"),
            pue(r, e.attributes, "prompt"),
            pue(r, e.attributes, "errorStyle"),
            pue(r, e.attributes, "errorTitle"),
            pue(r, e.attributes, "error"),
            (this._dataValidation = r),
            !0
          );
        }
        case "formula1":
        case "formula2":
          return ((this._formula = []), !0);
        default:
          return !1;
      }
    }
    parseText(e) {
      this._formula && this._formula.push(e);
    }
    parseClose(e) {
      switch (e) {
        case "dataValidations":
          return !1;
        case "dataValidation":
          return (
            (!this._dataValidation.formulae || !this._dataValidation.formulae.length) &&
              (delete this._dataValidation.formulae, delete this._dataValidation.operator),
            (this._address.split(/\s+/g) || []).forEach((n) => {
              n.includes(":")
                ? new Oks(n).forEachAddress((s) => {
                    this.model[s] = this._dataValidation;
                  })
                : (this.model[n] = this._dataValidation);
            }),
            !0
          );
        case "formula1":
        case "formula2": {
          let r = this._formula.join("");
          switch (this._dataValidation.type) {
            case "whole":
            case "textLength":
              r = parseInt(r, 10);
              break;
            case "decimal":
              r = parseFloat(r);
              break;
            case "date":
              r = FKt.excelToDate(parseFloat(r));
              break;
            default:
              break;
          }
          return (this._dataValidation.formulae.push(r), (this._formula = void 0), !0);
        }
        default:
          return !0;
      }
    }
  };
  zRn.exports = UKt;
});