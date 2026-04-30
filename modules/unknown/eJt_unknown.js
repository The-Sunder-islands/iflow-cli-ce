/**
 * @module eJt
 * @category unknown
 * @label unknown
 * @position 1219 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eJt = T((c2c, ikn) => {
  var Yks = f1(),
    Kks = Kr();
  function Tet(t) {
    return t ? "1" : void 0;
  }
  function Jks(t) {
    switch (t) {
      case "overThenDown":
        return t;
      default:
        return;
    }
  }
  function Xks(t) {
    switch (t) {
      case "atEnd":
      case "asDisplyed":
        return t;
      default:
        return;
    }
  }
  function Zks(t) {
    switch (t) {
      case "dash":
      case "blank":
      case "NA":
        return t;
      default:
        return;
    }
  }
  function eOs(t) {
    return t !== void 0 ? parseInt(t, 10) : void 0;
  }
  var ZKt = class extends Kks {
    get tag() {
      return "pageSetup";
    }
    render(e, r) {
      if (r) {
        let n = {
          paperSize: r.paperSize,
          orientation: r.orientation,
          horizontalDpi: r.horizontalDpi,
          verticalDpi: r.verticalDpi,
          pageOrder: Jks(r.pageOrder),
          blackAndWhite: Tet(r.blackAndWhite),
          draft: Tet(r.draft),
          cellComments: Xks(r.cellComments),
          errors: Zks(r.errors),
          scale: r.scale,
          fitToWidth: r.fitToWidth,
          fitToHeight: r.fitToHeight,
          firstPageNumber: r.firstPageNumber,
          useFirstPageNumber: Tet(r.firstPageNumber),
          usePrinterDefaults: Tet(r.usePrinterDefaults),
          copies: r.copies,
        };
        Yks.some(n, (o) => o !== void 0) && e.leafNode(this.tag, n);
      }
    }
    parseOpen(e) {
      switch (e.name) {
        case this.tag:
          return (
            (this.model = {
              paperSize: eOs(e.attributes.paperSize),
              orientation: e.attributes.orientation || "portrait",
              horizontalDpi: parseInt(e.attributes.horizontalDpi || "4294967295", 10),
              verticalDpi: parseInt(e.attributes.verticalDpi || "4294967295", 10),
              pageOrder: e.attributes.pageOrder || "downThenOver",
              blackAndWhite: e.attributes.blackAndWhite === "1",
              draft: e.attributes.draft === "1",
              cellComments: e.attributes.cellComments || "None",
              errors: e.attributes.errors || "displayed",
              scale: parseInt(e.attributes.scale || "100", 10),
              fitToWidth: parseInt(e.attributes.fitToWidth || "1", 10),
              fitToHeight: parseInt(e.attributes.fitToHeight || "1", 10),
              firstPageNumber: parseInt(e.attributes.firstPageNumber || "1", 10),
              useFirstPageNumber: e.attributes.useFirstPageNumber === "1",
              usePrinterDefaults: e.attributes.usePrinterDefaults === "1",
              copies: parseInt(e.attributes.copies || "1", 10),
            }),
            !0
          );
        default:
          return !1;
      }
    }
    parseText() {}
    parseClose() {
      return !1;
    }
  };
  ikn.exports = ZKt;
});