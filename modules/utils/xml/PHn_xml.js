/**
 * @module PHn
 * @category utils/xml
 * @label xml
 * @position 1471 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PHn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PHn = T((byc, NHn) => {
  var { EventEmitter: fta } = Ae("events"),
    pta = d_e(),
    hta = f1(),
    Tnt = eA(),
    kHn = Pd(),
    gta = Jk(),
    bta = kZe(),
    OHn = OZe(),
    nir = class extends fta {
      constructor({ workbook: e, id: r, iterator: n, options: o }) {
        (super(),
          (this.workbook = e),
          (this.id = r),
          (this.iterator = n),
          (this.options = o || {}),
          (this.name = `Sheet${this.id}`),
          (this._columns = null),
          (this._keys = {}),
          (this._dimensions = new gta()));
      }
      destroy() {
        throw new Error("Invalid Operation: destroy");
      }
      get dimensions() {
        return this._dimensions;
      }
      get columns() {
        return this._columns;
      }
      getColumn(e) {
        if (typeof e == "string") {
          let r = this._keys[e];
          if (r) return r;
          e = kHn.l2n(e);
        }
        if ((this._columns || (this._columns = []), e > this._columns.length)) {
          let r = this._columns.length + 1;
          for (; r <= e; ) this._columns.push(new OHn(this, r++));
        }
        return this._columns[e - 1];
      }
      getColumnKey(e) {
        return this._keys[e];
      }
      setColumnKey(e, r) {
        this._keys[e] = r;
      }
      deleteColumnKey(e) {
        delete this._keys[e];
      }
      eachColumnKey(e) {
        hta.each(this._keys, e);
      }
      async read() {
        try {
          for await (let e of this.parse()) for (let { eventType: r, value: n } of e) this.emit(r, n);
          this.emit("finished");
        } catch (e) {
          this.emit("error", e);
        }
      }
      async *[Symbol.asyncIterator]() {
        for await (let e of this.parse()) for (let { eventType: r, value: n } of e) r === "row" && (yield n);
      }
      async *parse() {
        let { iterator: e, options: r } = this,
          n = !1,
          o = !1,
          s = null;
        switch (r.worksheets) {
          case "emit":
            n = !0;
            break;
          case "prep":
            break;
          default:
            break;
        }
        switch (r.hyperlinks) {
          case "emit":
            o = !0;
            break;
          case "cache":
            this.hyperlinks = s = {};
            break;
          default:
            break;
        }
        if (!n && !o && !s) return;
        let { sharedStrings: a, styles: u, properties: c } = this.workbook,
          m = !1,
          d = !1,
          f = !1,
          p = null,
          h = null,
          g = null,
          b = null;
        for await (let A of pta(e)) {
          let y = [];
          for (let { eventType: E, value: v } of A)
            if (E === "opentag") {
              let C = v;
              if (n)
                switch (C.name) {
                  case "cols":
                    ((m = !0), (p = []));
                    break;
                  case "sheetData":
                    d = !0;
                    break;
                  case "col":
                    m &&
                      p.push({
                        min: parseInt(C.attributes.min, 10),
                        max: parseInt(C.attributes.max, 10),
                        width: parseFloat(C.attributes.width),
                        styleId: parseInt(C.attributes.style || "0", 10),
                      });
                    break;
                  case "row":
                    if (d) {
                      let x = parseInt(C.attributes.r, 10);
                      if (
                        ((h = new bta(this, x)),
                        C.attributes.ht && (h.height = parseFloat(C.attributes.ht)),
                        C.attributes.s)
                      ) {
                        let k = parseInt(C.attributes.s, 10),
                          R = u.getStyleModel(k);
                        R && (h.style = R);
                      }
                    }
                    break;
                  case "c":
                    h && (g = { ref: C.attributes.r, s: parseInt(C.attributes.s, 10), t: C.attributes.t });
                    break;
                  case "f":
                    g && (b = g.f = { text: "" });
                    break;
                  case "v":
                    g && (b = g.v = { text: "" });
                    break;
                  case "is":
                  case "t":
                    g && (b = g.v = { text: "" });
                    break;
                  case "mergeCell":
                    break;
                  default:
                    break;
                }
              if (o || s)
                switch (C.name) {
                  case "hyperlinks":
                    f = !0;
                    break;
                  case "hyperlink":
                    if (f) {
                      let x = { ref: C.attributes.ref, rId: C.attributes["r:id"] };
                      o ? y.push({ eventType: "hyperlink", value: x }) : (s[x.ref] = x);
                    }
                    break;
                  default:
                    break;
                }
            } else if (E === "text") n && b && (b.text += v);
            else if (E === "closetag") {
              let C = v;
              if (n)
                switch (C.name) {
                  case "cols":
                    ((m = !1), (this._columns = OHn.fromModel(p)));
                    break;
                  case "sheetData":
                    d = !1;
                    break;
                  case "row":
                    (this._dimensions.expandRow(h), y.push({ eventType: "row", value: h }), (h = null));
                    break;
                  case "c":
                    if (h && g) {
                      let x = kHn.decodeAddress(g.ref),
                        k = h.getCell(x.col);
                      if (g.s) {
                        let R = u.getStyleModel(g.s);
                        R && (k.style = R);
                      }
                      if (g.f) {
                        let R = { formula: g.f.text };
                        (g.v &&
                          (g.t === "str" ? (R.result = Tnt.xmlDecode(g.v.text)) : (R.result = parseFloat(g.v.text))),
                          (k.value = R));
                      } else if (g.v)
                        switch (g.t) {
                          case "s": {
                            let R = parseInt(g.v.text, 10);
                            a ? (k.value = a[R]) : (k.value = { sharedString: R });
                            break;
                          }
                          case "inlineStr":
                          case "str":
                            k.value = Tnt.xmlDecode(g.v.text);
                            break;
                          case "e":
                            k.value = { error: g.v.text };
                            break;
                          case "b":
                            k.value = parseInt(g.v.text, 10) !== 0;
                            break;
                          default:
                            Tnt.isDateFmt(k.numFmt)
                              ? (k.value = Tnt.excelToDate(parseFloat(g.v.text), c.model && c.model.date1904))
                              : (k.value = parseFloat(g.v.text));
                            break;
                        }
                      if (s) {
                        let R = s[g.ref];
                        R && ((k.text = k.value), (k.value = void 0), (k.hyperlink = R));
                      }
                      g = null;
                    }
                    break;
                  default:
                    break;
                }
              if (o || s)
                switch (C.name) {
                  case "hyperlinks":
                    f = !1;
                    break;
                  default:
                    break;
                }
            }
          y.length > 0 && (yield y);
        }
      }
    };
  NHn.exports = nir;
});