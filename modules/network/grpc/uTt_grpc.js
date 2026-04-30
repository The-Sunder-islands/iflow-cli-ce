/**
 * @module uTt
 * @category network/grpc
 * @label grpc
 * @position 461 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uTt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uTt = T((bZr) => {
  "use strict";
  var kFo = bZr,
    OFo = WFe();
  kFo[".google.protobuf.Any"] = {
    fromObject: function (t) {
      if (t && t["@type"]) {
        var e = t["@type"].substring(t["@type"].lastIndexOf("/") + 1),
          r = this.lookup(e);
        if (r) {
          var n = t["@type"].charAt(0) === "." ? t["@type"].slice(1) : t["@type"];
          return (
            n.indexOf("/") === -1 && (n = "/" + n),
            this.create({ type_url: n, value: r.encode(r.fromObject(t)).finish() })
          );
        }
      }
      return this.fromObject(t);
    },
    toObject: function (t, e) {
      var r = "type.googleapis.com/",
        n = "",
        o = "";
      if (e && e.json && t.type_url && t.value) {
        ((o = t.type_url.substring(t.type_url.lastIndexOf("/") + 1)),
          (n = t.type_url.substring(0, t.type_url.lastIndexOf("/") + 1)));
        var s = this.lookup(o);
        s && (t = s.decode(t.value));
      }
      if (!(t instanceof this.ctor) && t instanceof OFo) {
        var a = t.$type.toObject(t, e),
          u = t.$type.fullName[0] === "." ? t.$type.fullName.slice(1) : t.$type.fullName;
        return (n === "" && (n = r), (o = n + u), (a["@type"] = o), a);
      }
      return this.toObject(t, e);
    },
  };
});