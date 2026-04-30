/**
 * @module l4n
 * @category utils/net
 * @label mime
 * @position 1033 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (l4n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var l4n = T((G3c, c4n) => {
  "use strict";
  var PCs = _ae(),
    dye = Nd(),
    i4n = I6(),
    BCs = eVt(),
    o4n = tVt(),
    t4n = lXe(),
    LCs = rvn(),
    MCs = XCn(),
    r4n = j6e(),
    FCs = e4n(),
    s4n = function (t, e, r) {
      var n = dye.getTypeOf(e),
        o,
        s = dye.extend(r || {}, o4n);
      ((s.date = s.date || new Date()),
        s.compression !== null && (s.compression = s.compression.toUpperCase()),
        typeof s.unixPermissions == "string" && (s.unixPermissions = parseInt(s.unixPermissions, 8)),
        s.unixPermissions && s.unixPermissions & 16384 && (s.dir = !0),
        s.dosPermissions && s.dosPermissions & 16 && (s.dir = !0),
        s.dir && (t = a4n(t)),
        s.createFolders && (o = UCs(t)) && u4n.call(this, o, !0));
      var a = n === "string" && s.binary === !1 && s.base64 === !1;
      (!r || typeof r.binary > "u") && (s.binary = !a);
      var u = e instanceof t4n && e.uncompressedSize === 0;
      (u || s.dir || !e || e.length === 0) &&
        ((s.base64 = !1), (s.binary = !0), (e = ""), (s.compression = "STORE"), (n = "string"));
      var c = null;
      e instanceof t4n || e instanceof i4n
        ? (c = e)
        : r4n.isNode && r4n.isStream(e)
          ? (c = new FCs(t, e))
          : (c = dye.prepareContent(t, e, s.binary, s.optimizedBinaryString, s.base64));
      var m = new LCs(t, c, s);
      this.files[t] = m;
    },
    UCs = function (t) {
      t.slice(-1) === "/" && (t = t.substring(0, t.length - 1));
      var e = t.lastIndexOf("/");
      return e > 0 ? t.substring(0, e) : "";
    },
    a4n = function (t) {
      return (t.slice(-1) !== "/" && (t += "/"), t);
    },
    u4n = function (t, e) {
      return (
        (e = typeof e < "u" ? e : o4n.createFolders),
        (t = a4n(t)),
        this.files[t] || s4n.call(this, t, null, { dir: !0, createFolders: e }),
        this.files[t]
      );
    };
  function n4n(t) {
    return Object.prototype.toString.call(t) === "[object RegExp]";
  }
  var $Cs = {
    load: function () {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    forEach: function (t) {
      var e, r, n;
      for (e in this.files)
        ((n = this.files[e]),
          (r = e.slice(this.root.length, e.length)),
          r && e.slice(0, this.root.length) === this.root && t(r, n));
    },
    filter: function (t) {
      var e = [];
      return (
        this.forEach(function (r, n) {
          t(r, n) && e.push(n);
        }),
        e
      );
    },
    file: function (t, e, r) {
      if (arguments.length === 1)
        if (n4n(t)) {
          var n = t;
          return this.filter(function (s, a) {
            return !a.dir && n.test(s);
          });
        } else {
          var o = this.files[this.root + t];
          return o && !o.dir ? o : null;
        }
      else ((t = this.root + t), s4n.call(this, t, e, r));
      return this;
    },
    folder: function (t) {
      if (!t) return this;
      if (n4n(t))
        return this.filter(function (o, s) {
          return s.dir && t.test(o);
        });
      var e = this.root + t,
        r = u4n.call(this, e),
        n = this.clone();
      return ((n.root = r.name), n);
    },
    remove: function (t) {
      t = this.root + t;
      var e = this.files[t];
      if ((e || (t.slice(-1) !== "/" && (t += "/"), (e = this.files[t])), e && !e.dir)) delete this.files[t];
      else
        for (
          var r = this.filter(function (o, s) {
              return s.name.slice(0, t.length) === t;
            }),
            n = 0;
          n < r.length;
          n++
        )
          delete this.files[r[n].name];
      return this;
    },
    generate: function () {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    generateInternalStream: function (t) {
      var e,
        r = {};
      try {
        if (
          ((r = dye.extend(t || {}, {
            streamFiles: !1,
            compression: "STORE",
            compressionOptions: null,
            type: "",
            platform: "DOS",
            comment: null,
            mimeType: "application/zip",
            encodeFileName: PCs.utf8encode,
          })),
          (r.type = r.type.toLowerCase()),
          (r.compression = r.compression.toUpperCase()),
          r.type === "binarystring" && (r.type = "string"),
          !r.type)
        )
          throw new Error("No output type specified.");
        (dye.checkSupport(r.type),
          (r.platform === "darwin" || r.platform === "freebsd" || r.platform === "linux" || r.platform === "sunos") &&
            (r.platform = "UNIX"),
          r.platform === "win32" && (r.platform = "DOS"));
        var n = r.comment || this.comment || "";
        e = MCs.generateWorker(this, r, n);
      } catch (o) {
        ((e = new i4n("error")), e.error(o));
      }
      return new BCs(e, r.type || "string", r.mimeType);
    },
    generateAsync: function (t, e) {
      return this.generateInternalStream(t).accumulate(e);
    },
    generateNodeStream: function (t, e) {
      return ((t = t || {}), t.type || (t.type = "nodebuffer"), this.generateInternalStream(t).toNodejsStream(e));
    },
  };
  c4n.exports = $Cs;
});