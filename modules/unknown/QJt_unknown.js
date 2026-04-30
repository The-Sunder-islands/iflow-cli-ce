/**
 * @module QJt
 * @category unknown
 * @label unknown
 * @position 1249 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QJt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QJt = T((U2c, aOn) => {
  var INs = Kr(),
    jJt = class extends INs {
      parseOpen(e) {
        if (this.parser) return (this.parser.parseOpen(e), !0);
        switch (e.name) {
          case this.tag:
            (this.reset(), (this.model = { range: { editAs: e.attributes.editAs || "oneCell" } }));
            break;
          default:
            ((this.parser = this.map[e.name]), this.parser && this.parser.parseOpen(e));
            break;
        }
        return !0;
      }
      parseText(e) {
        this.parser && this.parser.parseText(e);
      }
      reconcilePicture(e, r) {
        if (e && e.rId) {
          let o = r.rels[e.rId].Target.match(/.*\/media\/(.+[.][a-zA-Z]{3,4})/);
          if (o) {
            let s = o[1],
              a = r.mediaIndex[s];
            return r.media[a];
          }
        }
      }
    };
  aOn.exports = jJt;
});