/**
 * @module aKt
 * @category app/multimodal
 * @label iflow-multimodal
 * @position 1187 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aKt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t extends DRs
 * Features: esbuild module exports: aKt
 * === End semantic info ===
 */


var aKt = T((IAc, nRn) => {
  var TRs = Ig(),
    DRs = Kr(),
    sKt = rRn(),
    NE = uet(),
    IRs = aet(),
    mue = class t extends DRs {
      constructor() {
        (super(),
          (this.map = {
            "dc:creator": new NE({ tag: "dc:creator" }),
            "dc:title": new NE({ tag: "dc:title" }),
            "dc:subject": new NE({ tag: "dc:subject" }),
            "dc:description": new NE({ tag: "dc:description" }),
            "dc:identifier": new NE({ tag: "dc:identifier" }),
            "dc:language": new NE({ tag: "dc:language" }),
            "cp:keywords": new NE({ tag: "cp:keywords" }),
            "cp:category": new NE({ tag: "cp:category" }),
            "cp:lastModifiedBy": new NE({ tag: "cp:lastModifiedBy" }),
            "cp:lastPrinted": new sKt({ tag: "cp:lastPrinted", format: t.DateFormat }),
            "cp:revision": new IRs({ tag: "cp:revision" }),
            "cp:version": new NE({ tag: "cp:version" }),
            "cp:contentStatus": new NE({ tag: "cp:contentStatus" }),
            "cp:contentType": new NE({ tag: "cp:contentType" }),
            "dcterms:created": new sKt({ tag: "dcterms:created", attrs: t.DateAttrs, format: t.DateFormat }),
            "dcterms:modified": new sKt({ tag: "dcterms:modified", attrs: t.DateAttrs, format: t.DateFormat }),
          }));
      }
      render(e, r) {
        (e.openXml(TRs.StdDocAttributes),
          e.openNode("cp:coreProperties", t.CORE_PROPERTY_ATTRIBUTES),
          this.map["dc:creator"].render(e, r.creator),
          this.map["dc:title"].render(e, r.title),
          this.map["dc:subject"].render(e, r.subject),
          this.map["dc:description"].render(e, r.description),
          this.map["dc:identifier"].render(e, r.identifier),
          this.map["dc:language"].render(e, r.language),
          this.map["cp:keywords"].render(e, r.keywords),
          this.map["cp:category"].render(e, r.category),
          this.map["cp:lastModifiedBy"].render(e, r.lastModifiedBy),
          this.map["cp:lastPrinted"].render(e, r.lastPrinted),
          this.map["cp:revision"].render(e, r.revision),
          this.map["cp:version"].render(e, r.version),
          this.map["cp:contentStatus"].render(e, r.contentStatus),
          this.map["cp:contentType"].render(e, r.contentType),
          this.map["dcterms:created"].render(e, r.created),
          this.map["dcterms:modified"].render(e, r.modified),
          e.closeNode());
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case "cp:coreProperties":
          case "coreProperties":
            return !0;
          default:
            if (((this.parser = this.map[e.name]), this.parser)) return (this.parser.parseOpen(e), !0);
            throw new Error(`Unexpected xml node in parseOpen: ${JSON.stringify(e)}`);
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser) return (this.parser.parseClose(e) || (this.parser = void 0), !0);
        switch (e) {
          case "cp:coreProperties":
          case "coreProperties":
            return (
              (this.model = {
                creator: this.map["dc:creator"].model,
                title: this.map["dc:title"].model,
                subject: this.map["dc:subject"].model,
                description: this.map["dc:description"].model,
                identifier: this.map["dc:identifier"].model,
                language: this.map["dc:language"].model,
                keywords: this.map["cp:keywords"].model,
                category: this.map["cp:category"].model,
                lastModifiedBy: this.map["cp:lastModifiedBy"].model,
                lastPrinted: this.map["cp:lastPrinted"].model,
                revision: this.map["cp:revision"].model,
                contentStatus: this.map["cp:contentStatus"].model,
                contentType: this.map["cp:contentType"].model,
                created: this.map["dcterms:created"].model,
                modified: this.map["dcterms:modified"].model,
              }),
              !1
            );
          default:
            throw new Error(`Unexpected xml node in parseClose: ${e}`);
        }
      }
    };
  mue.DateFormat = function (t) {
    return t.toISOString().replace(/[.]\d{3}/, "");
  };
  mue.DateAttrs = { "xsi:type": "dcterms:W3CDTF" };
  mue.CORE_PROPERTY_ATTRIBUTES = {
    "xmlns:cp": "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
    "xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "xmlns:dcterms": "http://purl.org/dc/terms/",
    "xmlns:dcmitype": "http://purl.org/dc/dcmitype/",
    "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
  };
  nRn.exports = mue;
});