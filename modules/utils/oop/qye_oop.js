/**
 * @module qye
 * @category utils/oop
 * @label oop
 * @position 1099 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qye) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qye = T((Jae) => {
  var qWt = (d1(), bt(m1)),
    kws = Hye();
  Jae.topLevelElement = Ows;
  Jae.elements = HWt;
  Jae.element = VWt;
  function Ows(t, e) {
    return HWt([VWt(t, e, { fresh: !0 })]);
  }
  function HWt(t) {
    return new Uxn(
      t.map(function (e) {
        return qWt.isString(e) ? VWt(e) : e;
      }),
    );
  }
  function Uxn(t) {
    this._elements = t;
  }
  Uxn.prototype.wrap = function (e) {
    for (var r = e(), n = this._elements.length - 1; n >= 0; n--) r = this._elements[n].wrapNodes(r);
    return r;
  };
  function VWt(t, e, r) {
    return ((r = r || {}), new fZe(t, e, r));
  }
  function fZe(t, e, r) {
    var n = {};
    (qWt.isArray(t)
      ? (t.forEach(function (o) {
          n[o] = !0;
        }),
        (t = t[0]))
      : (n[t] = !0),
      (this.tagName = t),
      (this.tagNames = n),
      (this.attributes = e || {}),
      (this.fresh = r.fresh),
      (this.separator = r.separator));
  }
  fZe.prototype.matchesElement = function (t) {
    return this.tagNames[t.tagName] && qWt.isEqual(this.attributes || {}, t.attributes || {});
  };
  fZe.prototype.wrap = function (e) {
    return this.wrapNodes(e());
  };
  fZe.prototype.wrapNodes = function (e) {
    return [kws.elementWithTag(this, e)];
  };
  Jae.empty = HWt([]);
  Jae.ignore = {
    wrap: function () {
      return [];
    },
  };
});