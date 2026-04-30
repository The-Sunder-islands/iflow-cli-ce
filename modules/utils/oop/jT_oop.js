/**
 * @module jT
 * @category utils/oop
 * @label oop
 * @position 975 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jT) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jT = T((O6e) => {
  var k6e = (d1(), bt(m1));
  O6e.Result = $T;
  O6e.success = Sys;
  O6e.warning = wys;
  O6e.error = xys;
  function $T(t, e) {
    ((this.value = t), (this.messages = e || []));
  }
  $T.prototype.map = function (t) {
    return new $T(t(this.value), this.messages);
  };
  $T.prototype.flatMap = function (t) {
    var e = t(this.value);
    return new $T(e.value, fHt([this, e]));
  };
  $T.prototype.flatMapThen = function (t) {
    var e = this;
    return t(this.value).then(function (r) {
      return new $T(r.value, fHt([e, r]));
    });
  };
  $T.combine = function (t) {
    var e = k6e.flatten(k6e.pluck(t, "value")),
      r = fHt(t);
    return new $T(e, r);
  };
  function Sys(t) {
    return new $T(t, []);
  }
  function wys(t) {
    return { type: "warning", message: t };
  }
  function xys(t) {
    return { type: "error", message: t.message, error: t };
  }
  function fHt(t) {
    var e = [];
    return (
      k6e.flatten(k6e.pluck(t, "messages"), !0).forEach(function (r) {
        Tys(e, r) || e.push(r);
      }),
      e
    );
  }
  function Tys(t, e) {
    return k6e.find(t, Dys.bind(null, e)) !== void 0;
  }
  function Dys(t, e) {
    return t.type === e.type && t.message === e.message;
  }
});