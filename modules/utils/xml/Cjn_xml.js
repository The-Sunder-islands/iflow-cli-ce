/**
 * @module Cjn
 * @category utils/xml
 * @label xml
 * @position 1397 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Cjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Cjn = T((z9c, vjn) => {
  var _jn = Ig(),
    Ejn = wF(),
    YYs = Pd(),
    KYs = cXt(),
    JYs = gXt(),
    Crr = class {
      constructor(e, r, n) {
        ((this.id = n.id),
          (this.count = 0),
          (this._worksheet = e),
          (this._workbook = n.workbook),
          (this._sheetRelsWriter = r));
      }
      get commentsStream() {
        return (
          this._commentsStream || (this._commentsStream = this._workbook._openStream(`/xl/comments${this.id}.xml`)),
          this._commentsStream
        );
      }
      get vmlStream() {
        return (
          this._vmlStream || (this._vmlStream = this._workbook._openStream(`xl/drawings/vmlDrawing${this.id}.vml`)),
          this._vmlStream
        );
      }
      _addRelationships() {
        let e = { Type: Ejn.Comments, Target: `../comments${this.id}.xml` };
        this._sheetRelsWriter.addRelationship(e);
        let r = { Type: Ejn.VmlDrawing, Target: `../drawings/vmlDrawing${this.id}.vml` };
        this.vmlRelId = this._sheetRelsWriter.addRelationship(r);
      }
      _addCommentRefs() {
        this._workbook.commentRefs.push({ commentName: `comments${this.id}`, vmlDrawing: `vmlDrawing${this.id}` });
      }
      _writeOpen() {
        (this.commentsStream.write(
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><comments xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><authors><author>Author</author></authors><commentList>',
        ),
          this.vmlStream.write(
            '<?xml version="1.0" encoding="UTF-8"?><xml xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:x="urn:schemas-microsoft-com:office:excel"><o:shapelayout v:ext="edit"><o:idmap v:ext="edit" data="1" /></o:shapelayout><v:shapetype id="_x0000_t202" coordsize="21600,21600" o:spt="202" path="m,l,21600r21600,l21600,xe"><v:stroke joinstyle="miter" /><v:path gradientshapeok="t" o:connecttype="rect" /></v:shapetype>',
          ));
      }
      _writeComment(e, r) {
        let n = new KYs(),
          o = new _jn();
        (n.render(o, e), this.commentsStream.write(o.xml));
        let s = new JYs(),
          a = new _jn();
        (s.render(a, e, r), this.vmlStream.write(a.xml));
      }
      _writeClose() {
        (this.commentsStream.write("</commentList></comments>"), this.vmlStream.write("</xml>"));
      }
      addComments(e) {
        e &&
          e.length &&
          (this.startedData ||
            ((this._worksheet.comments = []),
            this._writeOpen(),
            this._addRelationships(),
            this._addCommentRefs(),
            (this.startedData = !0)),
          e.forEach((r) => {
            r.refAddress = YYs.decodeAddress(r.ref);
          }),
          e.forEach((r) => {
            (this._writeComment(r, this.count), (this.count += 1));
          }));
      }
      commit() {
        this.count && (this._writeClose(), this.commentsStream.end(), this.vmlStream.end());
      }
    };
  vjn.exports = Crr;
});