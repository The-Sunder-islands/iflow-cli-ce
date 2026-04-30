/**
 * @module Nk
 * @category utils/oop
 * @label oop
 * @position 944 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nk) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nk = T((shc, Eyn) => {
  "use strict";
  var oHt = $V(),
    z6s = oHt.freeze,
    yyn = C0(),
    _yn = yyn.inherits,
    cae = yyn.notEnumerableProp;
  function lae(t, e) {
    function r(n) {
      if (!(this instanceof r)) return new r(n);
      (cae(this, "message", typeof n == "string" ? n : e),
        cae(this, "name", t),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this));
    }
    return (_yn(r, Error), r);
  }
  var nHt,
    iHt,
    Y6s = lae("Warning", "warning"),
    K6s = lae("CancellationError", "cancellation error"),
    J6s = lae("TimeoutError", "timeout error"),
    R6e = lae("AggregateError", "aggregate error");
  try {
    ((nHt = TypeError), (iHt = RangeError));
  } catch {
    ((nHt = lae("TypeError", "type error")), (iHt = lae("RangeError", "range error")));
  }
  var QJe =
    "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(
      " ",
    );
  for (uae = 0; uae < QJe.length; ++uae)
    typeof Array.prototype[QJe[uae]] == "function" && (R6e.prototype[QJe[uae]] = Array.prototype[QJe[uae]]);
  var uae;
  oHt.defineProperty(R6e.prototype, "length", { value: 0, configurable: !1, writable: !0, enumerable: !0 });
  R6e.prototype.isOperational = !0;
  var GJe = 0;
  R6e.prototype.toString = function () {
    var t = Array(GJe * 4 + 1).join(" "),
      e =
        `
` +
        t +
        `AggregateError of:
`;
    (GJe++, (t = Array(GJe * 4 + 1).join(" ")));
    for (var r = 0; r < this.length; ++r) {
      for (
        var n = this[r] === this ? "[Circular AggregateError]" : this[r] + "",
          o = n.split(`
`),
          s = 0;
        s < o.length;
        ++s
      )
        o[s] = t + o[s];
      ((n = o.join(`
`)),
        (e +=
          n +
          `
`));
    }
    return (GJe--, e);
  };
  function I6e(t) {
    if (!(this instanceof I6e)) return new I6e(t);
    (cae(this, "name", "OperationalError"),
      cae(this, "message", t),
      (this.cause = t),
      (this.isOperational = !0),
      t instanceof Error
        ? (cae(this, "message", t.message), cae(this, "stack", t.stack))
        : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor));
  }
  _yn(I6e, Error);
  var QV = Error.__BluebirdErrorTypes__;
  QV ||
    ((QV = z6s({
      CancellationError: K6s,
      TimeoutError: J6s,
      OperationalError: I6e,
      RejectionError: I6e,
      AggregateError: R6e,
    })),
    oHt.defineProperty(Error, "__BluebirdErrorTypes__", { value: QV, writable: !1, enumerable: !1, configurable: !1 }));
  Eyn.exports = {
    Error,
    TypeError: nHt,
    RangeError: iHt,
    CancellationError: QV.CancellationError,
    OperationalError: QV.OperationalError,
    TimeoutError: QV.TimeoutError,
    AggregateError: QV.AggregateError,
    Warning: Y6s,
  };
});