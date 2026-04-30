/**
 * @module yjn
 * @category utils/xml
 * @label xml
 * @position 1396 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yjn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yjn = T((W9c, Ajn) => {
  var WYs = eA(),
    zYs = wF(),
    Err = class {
      constructor(e) {
        this.writer = e;
      }
      push(e) {
        this.writer.addHyperlink(e);
      }
    },
    vrr = class {
      constructor(e) {
        ((this.id = e.id), (this.count = 0), (this._hyperlinks = []), (this._workbook = e.workbook));
      }
      get stream() {
        return (
          this._stream || (this._stream = this._workbook._openStream(`/xl/worksheets/_rels/sheet${this.id}.xml.rels`)),
          this._stream
        );
      }
      get length() {
        return this._hyperlinks.length;
      }
      each(e) {
        return this._hyperlinks.forEach(e);
      }
      get hyperlinksProxy() {
        return this._hyperlinksProxy || (this._hyperlinksProxy = new Err(this));
      }
      addHyperlink(e) {
        let r = { Target: e.target, Type: zYs.Hyperlink, TargetMode: "External" },
          n = this._writeRelationship(r);
        this._hyperlinks.push({ rId: n, address: e.address });
      }
      addMedia(e) {
        return this._writeRelationship(e);
      }
      addRelationship(e) {
        return this._writeRelationship(e);
      }
      commit() {
        this.count && (this._writeClose(), this.stream.end());
      }
      _writeOpen() {
        this.stream.write(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
       <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">`);
      }
      _writeRelationship(e) {
        this.count || this._writeOpen();
        let r = `rId${++this.count}`;
        return (
          e.TargetMode
            ? this.stream.write(
                `<Relationship Id="${r}" Type="${e.Type}" Target="${WYs.xmlEncode(e.Target)}" TargetMode="${e.TargetMode}"/>`,
              )
            : this.stream.write(`<Relationship Id="${r}" Type="${e.Type}" Target="${e.Target}"/>`),
          r
        );
      }
      _writeClose() {
        this.stream.write("</Relationships>");
      }
    };
  Ajn.exports = vrr;
});