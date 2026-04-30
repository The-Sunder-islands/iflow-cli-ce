/**
 * @module oWt
 * @category utils/oop
 * @label oop
 * @position 1045 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oWt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oWt = T((fye) => {
  var FXe = (d1(), bt(m1));
  fye.Element = Lae;
  fye.element = function (t, e, r) {
    return new Lae(t, e, r);
  };
  fye.text = function (t) {
    return { type: "text", value: t };
  };
  var L4n = (fye.emptyElement = {
    first: function () {
      return null;
    },
    firstOrEmpty: function () {
      return L4n;
    },
    attributes: {},
    children: [],
  });
  function Lae(t, e, r) {
    ((this.type = "element"), (this.name = t), (this.attributes = e || {}), (this.children = r || []));
  }
  Lae.prototype.first = function (t) {
    return FXe.find(this.children, function (e) {
      return e.name === t;
    });
  };
  Lae.prototype.firstOrEmpty = function (t) {
    return this.first(t) || L4n;
  };
  Lae.prototype.getElementsByTagName = function (t) {
    var e = FXe.filter(this.children, function (r) {
      return r.name === t;
    });
    return M4n(e);
  };
  Lae.prototype.text = function () {
    if (this.children.length === 0) return "";
    if (this.children.length !== 1 || this.children[0].type !== "text") throw new Error("Not implemented");
    return this.children[0].value;
  };
  var f4s = {
    getElementsByTagName: function (t) {
      return M4n(
        FXe.flatten(
          this.map(function (e) {
            return e.getElementsByTagName(t);
          }, !0),
        ),
      );
    },
  };
  function M4n(t) {
    return FXe.extend(t, f4s);
  }
});