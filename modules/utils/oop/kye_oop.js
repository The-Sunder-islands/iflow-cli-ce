/**
 * @module kye
 * @category utils/oop
 * @label oop
 * @position 1060 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kye = T((KSn, JSn) => {
  (function () {
    var t,
      e,
      r = function (o, s) {
        for (var a in s) n.call(s, a) && (o[a] = s[a]);
        function u() {
          this.constructor = o;
        }
        return ((u.prototype = s.prototype), (o.prototype = new u()), (o.__super__ = s.prototype), o);
      },
      n = {}.hasOwnProperty;
    ((e = B2()),
      (JSn.exports = t =
        (function (o) {
          r(s, o);
          function s(a, u, c, m, d, f) {
            if ((s.__super__.constructor.call(this, a), u == null))
              throw new Error("Missing DTD element name. " + this.debugInfo());
            if (c == null) throw new Error("Missing DTD attribute name. " + this.debugInfo(u));
            if (!m) throw new Error("Missing DTD attribute type. " + this.debugInfo(u));
            if (!d) throw new Error("Missing DTD attribute default. " + this.debugInfo(u));
            if ((d.indexOf("#") !== 0 && (d = "#" + d), !d.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)))
              throw new Error(
                "Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(u),
              );
            if (f && !d.match(/^(#FIXED|#DEFAULT)$/))
              throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(u));
            ((this.elementName = this.stringify.eleName(u)),
              (this.attributeName = this.stringify.attName(c)),
              (this.attributeType = this.stringify.dtdAttType(m)),
              (this.defaultValue = this.stringify.dtdAttDefault(f)),
              (this.defaultValueType = d));
          }
          return (
            (s.prototype.toString = function (a) {
              return this.options.writer.set(a).dtdAttList(this);
            }),
            s
          );
        })(e)));
  }).call(KSn);
});