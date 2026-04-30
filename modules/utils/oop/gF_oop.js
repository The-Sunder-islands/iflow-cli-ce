/**
 * @module gF
 * @category utils/oop
 * @label oop
 * @position 1145 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gF) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gF = T((Ubc, jDn) => {
  "use strict";
  var $Dn = {};
  function kE(t, e, r) {
    r || (r = Error);
    function n(s, a, u) {
      return typeof e == "string" ? e : e(s, a, u);
    }
    class o extends r {
      constructor(a, u, c) {
        super(n(a, u, c));
      }
    }
    ((o.prototype.name = r.name), (o.prototype.code = t), ($Dn[t] = o));
  }
  function UDn(t, e) {
    if (Array.isArray(t)) {
      let r = t.length;
      return (
        (t = t.map((n) => String(n))),
        r > 2
          ? `one of ${e} ${t.slice(0, r - 1).join(", ")}, or ` + t[r - 1]
          : r === 2
            ? `one of ${e} ${t[0]} or ${t[1]}`
            : `of ${e} ${t[0]}`
      );
    } else return `of ${e} ${String(t)}`;
  }
  function FTs(t, e, r) {
    return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
  }
  function UTs(t, e, r) {
    return ((r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e);
  }
  function $Ts(t, e, r) {
    return (typeof r != "number" && (r = 0), r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1);
  }
  kE(
    "ERR_INVALID_OPT_VALUE",
    function (t, e) {
      return 'The value "' + e + '" is invalid for option "' + t + '"';
    },
    TypeError,
  );
  kE(
    "ERR_INVALID_ARG_TYPE",
    function (t, e, r) {
      let n;
      typeof e == "string" && FTs(e, "not ") ? ((n = "must not be"), (e = e.replace(/^not /, ""))) : (n = "must be");
      let o;
      if (UTs(t, " argument")) o = `The ${t} ${n} ${UDn(e, "type")}`;
      else {
        let s = $Ts(t, ".") ? "property" : "argument";
        o = `The "${t}" ${s} ${n} ${UDn(e, "type")}`;
      }
      return ((o += `. Received type ${typeof r}`), o);
    },
    TypeError,
  );
  kE("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  kE("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
    return "The " + t + " method is not implemented";
  });
  kE("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  kE("ERR_STREAM_DESTROYED", function (t) {
    return "Cannot call " + t + " after a stream was destroyed";
  });
  kE("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  kE("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  kE("ERR_STREAM_WRITE_AFTER_END", "write after end");
  kE("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  kE(
    "ERR_UNKNOWN_ENCODING",
    function (t) {
      return "Unknown encoding: " + t;
    },
    TypeError,
  );
  kE("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  jDn.exports.codes = $Dn;
});