/**
 * @module AN
 * @category utils/oop
 * @label oop
 * @position 1673 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (AN) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var AN = T((QQc, Ihi) => {
  "use strict";
  var Opr = f$(),
    Fxa = Opr.freeze,
    Thi = Z0(),
    Dhi = Thi.inherits,
    Ame = Thi.notEnumerableProp;
  function yme(t, e) {
    function r(n) {
      if (!(this instanceof r)) return new r(n);
      (Ame(this, "message", typeof n == "string" ? n : e),
        Ame(this, "name", t),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this));
    }
    return (Dhi(r, Error), r);
  }
  var Rpr,
    kpr,
    Uxa = yme("Warning", "warning"),
    $xa = yme("CancellationError", "cancellation error"),
    jxa = yme("TimeoutError", "timeout error"),
    PSe = yme("AggregateError", "aggregate error");
  try {
    ((Rpr = TypeError), (kpr = RangeError));
  } catch {
    ((Rpr = yme("TypeError", "type error")), (kpr = yme("RangeError", "range error")));
  }
  var Elt =
    "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(
      " ",
    );
  for (bme = 0; bme < Elt.length; ++bme)
    typeof Array.prototype[Elt[bme]] == "function" && (PSe.prototype[Elt[bme]] = Array.prototype[Elt[bme]]);
  var bme;
  Opr.defineProperty(PSe.prototype, "length", { value: 0, configurable: !1, writable: !0, enumerable: !0 });
  PSe.prototype.isOperational = !0;
  var vlt = 0;
  PSe.prototype.toString = function () {
    var t = Array(vlt * 4 + 1).join(" "),
      e =
        `
` +
        t +
        `AggregateError of:
`;
    (vlt++, (t = Array(vlt * 4 + 1).join(" ")));
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
    return (vlt--, e);
  };
  function NSe(t) {
    if (!(this instanceof NSe)) return new NSe(t);
    (Ame(this, "name", "OperationalError"),
      Ame(this, "message", t),
      (this.cause = t),
      (this.isOperational = !0),
      t instanceof Error
        ? (Ame(this, "message", t.message), Ame(this, "stack", t.stack))
        : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor));
  }
  Dhi(NSe, Error);
  var iK = Error.__BluebirdErrorTypes__;
  iK ||
    ((iK = Fxa({
      CancellationError: $xa,
      TimeoutError: jxa,
      OperationalError: NSe,
      RejectionError: NSe,
      AggregateError: PSe,
    })),
    Opr.defineProperty(Error, "__BluebirdErrorTypes__", { value: iK, writable: !1, enumerable: !1, configurable: !1 }));
  Ihi.exports = {
    Error,
    TypeError: Rpr,
    RangeError: kpr,
    CancellationError: iK.CancellationError,
    OperationalError: iK.OperationalError,
    TimeoutError: iK.TimeoutError,
    AggregateError: iK.AggregateError,
    Warning: Uxa,
  };
});