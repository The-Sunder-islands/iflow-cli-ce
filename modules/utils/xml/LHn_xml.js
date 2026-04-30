/**
 * @module LHn
 * @category utils/xml
 * @label xml
 * @position 1472 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (LHn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var LHn = T((Ayc, BHn) => {
  var { EventEmitter: Ata } = Ae("events"),
    yta = d_e(),
    _ta = tS(),
    Eta = wF(),
    iir = class extends Ata {
      constructor({ workbook: e, id: r, iterator: n, options: o }) {
        (super(), (this.workbook = e), (this.id = r), (this.iterator = n), (this.options = o));
      }
      get count() {
        return (this.hyperlinks && this.hyperlinks.length) || 0;
      }
      each(e) {
        return this.hyperlinks.forEach(e);
      }
      async read() {
        let { iterator: e, options: r } = this,
          n = !1,
          o = null;
        switch (r.hyperlinks) {
          case "emit":
            n = !0;
            break;
          case "cache":
            this.hyperlinks = o = {};
            break;
          default:
            break;
        }
        if (!n && !o) {
          this.emit("finished");
          return;
        }
        try {
          for await (let s of yta(e))
            for (let { eventType: a, value: u } of s)
              if (a === "opentag") {
                let c = u;
                if (c.name === "Relationship") {
                  let m = c.attributes.Id;
                  switch (c.attributes.Type) {
                    case Eta.Hyperlink:
                      {
                        let d = {
                          type: _ta.RelationshipType.Styles,
                          rId: m,
                          target: c.attributes.Target,
                          targetMode: c.attributes.TargetMode,
                        };
                        n ? this.emit("hyperlink", d) : (o[d.rId] = d);
                      }
                      break;
                    default:
                      break;
                  }
                }
              }
          this.emit("finished");
        } catch (s) {
          this.emit("error", s);
        }
      }
    };
  BHn.exports = iir;
});
var $Hn = T((yyc, UHn) => {
  var oir = Ae("fs"),
    { EventEmitter: vta } = Ae("events"),
    { PassThrough: Cta, Readable: Sta } = Dg(),
    wta = Ae("stream"),
    xta = lHn(),
    FHn = DHn(),
    cz = RHn(),
    Tta = d_e(),
    MHn = yet(),
    Dta = xet(),
    Ita = Cet(),
    Rta = PHn(),
    kta = LHn();
  FHn.setGracefulCleanup();
  var Dnt = class extends vta {
    constructor(e, r = {}) {
      (super(),
        (this.input = e),
        (this.options = {
          worksheets: "emit",
          sharedStrings: "cache",
          hyperlinks: "ignore",
          styles: "ignore",
          entries: "ignore",
          ...r,
        }),
        (this.styles = new MHn()),
        this.styles.init());
    }
    _getStream(e) {
      if (e instanceof wta.Readable || e instanceof Sta) return e;
      if (typeof e == "string") return oir.createReadStream(e);
      throw new Error(`Could not recognise input: ${e}`);
    }
    async read(e, r) {
      try {
        for await (let { eventType: n, value: o } of this.parse(e, r))
          switch (n) {
            case "shared-strings":
              this.emit(n, o);
              break;
            case "worksheet":
              (this.emit(n, o), await o.read());
              break;
            case "hyperlinks":
              this.emit(n, o);
              break;
          }
        (this.emit("end"), this.emit("finished"));
      } catch (n) {
        this.emit("error", n);
      }
    }
    async *[Symbol.asyncIterator]() {
      for await (let { eventType: e, value: r } of this.parse()) e === "worksheet" && (yield r);
    }
    async *parse(e, r) {
      r && (this.options = r);
      let n = (this.stream = this._getStream(e || this.input)),
        o = xta.Parse({ forceStream: !0 });
      n.pipe(o);
      let s = [];
      for await (let a of cz(o)) {
        let u, c;
        switch (a.path) {
          case "_rels/.rels":
            break;
          case "xl/_rels/workbook.xml.rels":
            await this._parseRels(a);
            break;
          case "xl/workbook.xml":
            await this._parseWorkbook(a);
            break;
          case "xl/sharedStrings.xml":
            yield* this._parseSharedStrings(a);
            break;
          case "xl/styles.xml":
            await this._parseStyles(a);
            break;
          default:
            a.path.match(/xl\/worksheets\/sheet\d+[.]xml/)
              ? ((u = a.path.match(/xl\/worksheets\/sheet(\d+)[.]xml/)),
                (c = u[1]),
                this.sharedStrings && this.workbookRels
                  ? yield* this._parseWorksheet(cz(a), c)
                  : await new Promise((m, d) => {
                      FHn.file((f, p, h, g) => {
                        if (f) return d(f);
                        s.push({ sheetNo: c, path: p, tempFileCleanupCallback: g });
                        let b = oir.createWriteStream(p);
                        return (b.on("error", d), a.pipe(b), b.on("finish", () => m()));
                      });
                    }))
              : a.path.match(/xl\/worksheets\/_rels\/sheet\d+[.]xml.rels/) &&
                ((u = a.path.match(/xl\/worksheets\/_rels\/sheet(\d+)[.]xml.rels/)),
                (c = u[1]),
                yield* this._parseHyperlinks(cz(a), c));
            break;
        }
        a.autodrain();
      }
      for (let { sheetNo: a, path: u, tempFileCleanupCallback: c } of s) {
        let m = oir.createReadStream(u);
        (m[Symbol.asyncIterator] || (m = m.pipe(new Cta())), yield* this._parseWorksheet(m, a), c());
      }
    }
    _emitEntry(e) {
      this.options.entries === "emit" && this.emit("entry", e);
    }
    async _parseRels(e) {
      let r = new Ita();
      this.workbookRels = await r.parseStream(cz(e));
    }
    async _parseWorkbook(e) {
      this._emitEntry({ type: "workbook" });
      let r = new Dta();
      (await r.parseStream(cz(e)), (this.properties = r.map.workbookPr), (this.model = r.model));
    }
    async *_parseSharedStrings(e) {
      switch ((this._emitEntry({ type: "shared-strings" }), this.options.sharedStrings)) {
        case "cache":
          this.sharedStrings = [];
          break;
        case "emit":
          break;
        default:
          return;
      }
      let r = null,
        n = [],
        o = 0,
        s = null;
      for await (let a of Tta(cz(e)))
        for (let { eventType: u, value: c } of a)
          if (u === "opentag") {
            let m = c;
            switch (m.name) {
              case "b":
                ((s = s || {}), (s.bold = !0));
                break;
              case "charset":
                ((s = s || {}), (s.charset = parseInt(m.attributes.charset, 10)));
                break;
              case "color":
                ((s = s || {}),
                  (s.color = {}),
                  m.attributes.rgb && (s.color.argb = m.attributes.argb),
                  m.attributes.val && (s.color.argb = m.attributes.val),
                  m.attributes.theme && (s.color.theme = m.attributes.theme));
                break;
              case "family":
                ((s = s || {}), (s.family = parseInt(m.attributes.val, 10)));
                break;
              case "i":
                ((s = s || {}), (s.italic = !0));
                break;
              case "outline":
                ((s = s || {}), (s.outline = !0));
                break;
              case "rFont":
                ((s = s || {}), (s.name = m.value));
                break;
              case "si":
                ((s = null), (n = []), (r = null));
                break;
              case "sz":
                ((s = s || {}), (s.size = parseInt(m.attributes.val, 10)));
                break;
              case "strike":
                break;
              case "t":
                r = null;
                break;
              case "u":
                ((s = s || {}), (s.underline = !0));
                break;
              case "vertAlign":
                ((s = s || {}), (s.vertAlign = m.attributes.val));
                break;
            }
          } else if (u === "text") r = r ? r + c : c;
          else if (u === "closetag")
            switch (c.name) {
              case "r":
                (n.push({ font: s, text: r }), (s = null), (r = null));
                break;
              case "si":
                (this.options.sharedStrings === "cache"
                  ? this.sharedStrings.push(n.length ? { richText: n } : r)
                  : this.options.sharedStrings === "emit" &&
                    (yield { index: o++, text: n.length ? { richText: n } : r }),
                  (n = []),
                  (s = null),
                  (r = null));
                break;
            }
    }
    async _parseStyles(e) {
      (this._emitEntry({ type: "styles" }),
        this.options.styles === "cache" && ((this.styles = new MHn()), await this.styles.parseStream(cz(e))));
    }
    *_parseWorksheet(e, r) {
      this._emitEntry({ type: "worksheet", id: r });
      let n = new Rta({ workbook: this, id: r, iterator: e, options: this.options }),
        o = (this.workbookRels || []).find((a) => a.Target === `worksheets/sheet${r}.xml`),
        s = o && (this.model.sheets || []).find((a) => a.rId === o.Id);
      (s && ((n.id = s.id), (n.name = s.name), (n.state = s.state)),
        this.options.worksheets === "emit" && (yield { eventType: "worksheet", value: n }));
    }
    *_parseHyperlinks(e, r) {
      this._emitEntry({ type: "hyperlinks", id: r });
      let n = new kta({ workbook: this, id: r, iterator: e, options: this.options });
      this.options.hyperlinks === "emit" && (yield { eventType: "hyperlinks", value: n });
    }
  };
  Dnt.Options = {
    worksheets: ["emit", "ignore"],
    sharedStrings: ["cache", "emit", "ignore"],
    hyperlinks: ["cache", "emit", "ignore"],
    styles: ["cache", "ignore"],
    entries: ["emit", "ignore"],
  };
  UHn.exports = Dnt;
});