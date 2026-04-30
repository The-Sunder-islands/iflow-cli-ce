/**
 * @module GOn
 * @category utils/xml
 * @label xml
 * @position 1267 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GOn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GOn = T((n5c, QOn) => {
  var pPs = Kr(),
    hPs = jOn(),
    sXt = class extends pPs {
      constructor() {
        (super(), (this.map = { filterColumn: new hPs() }));
      }
      get tag() {
        return "autoFilter";
      }
      prepare(e) {
        e.columns.forEach((r, n) => {
          this.map.filterColumn.prepare(r, { index: n });
        });
      }
      render(e, r) {
        return (
          e.openNode(this.tag, { ref: r.autoFilterRef }),
          r.columns.forEach((n) => {
            this.map.filterColumn.render(e, n);
          }),
          e.closeNode(),
          !0
        );
      }
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case this.tag:
            return ((this.model = { autoFilterRef: e.attributes.ref, columns: [] }), !0);
          default:
            if (((this.parser = this.map[e.name]), this.parser)) return (this.parseOpen(e), !0);
            throw new Error(`Unexpected xml node in parseOpen: ${JSON.stringify(e)}`);
        }
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      parseClose(e) {
        if (this.parser)
          return (
            this.parser.parseClose(e) || (this.model.columns.push(this.parser.model), (this.parser = void 0)),
            !0
          );
        switch (e) {
          case this.tag:
            return !1;
          default:
            throw new Error(`Unexpected xml node in parseClose: ${e}`);
        }
      }
    };
  QOn.exports = sXt;
});