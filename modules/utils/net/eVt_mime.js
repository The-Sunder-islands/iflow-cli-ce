/**
 * @module eVt
 * @category utils/net
 * @label mime
 * @position 1005 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eVt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eVt = T((f3c, QEn) => {
  "use strict";
  var WV = Nd(),
    mEs = LEn(),
    dEs = I6(),
    fEs = jHt(),
    pEs = Fk(),
    hEs = bae(),
    $En = null;
  if (pEs.nodestream)
    try {
      $En = UEn();
    } catch {}
  function gEs(t, e, r) {
    switch (t) {
      case "blob":
        return WV.newBlob(WV.transformTo("arraybuffer", e), r);
      case "base64":
        return fEs.encode(e);
      default:
        return WV.transformTo(t, e);
    }
  }
  function bEs(t, e) {
    var r,
      n = 0,
      o = null,
      s = 0;
    for (r = 0; r < e.length; r++) s += e[r].length;
    switch (t) {
      case "string":
        return e.join("");
      case "array":
        return Array.prototype.concat.apply([], e);
      case "uint8array":
        for (o = new Uint8Array(s), r = 0; r < e.length; r++) (o.set(e[r], n), (n += e[r].length));
        return o;
      case "nodebuffer":
        return Buffer.concat(e);
      default:
        throw new Error("concat : unsupported type '" + t + "'");
    }
  }
  function AEs(t, e) {
    return new hEs.Promise(function (r, n) {
      var o = [],
        s = t._internalType,
        a = t._outputType,
        u = t._mimeType;
      t.on("data", function (c, m) {
        (o.push(c), e && e(m));
      })
        .on("error", function (c) {
          ((o = []), n(c));
        })
        .on("end", function () {
          try {
            var c = gEs(a, bEs(s, o), u);
            r(c);
          } catch (m) {
            n(m);
          }
          o = [];
        })
        .resume();
    });
  }
  function jEn(t, e, r) {
    var n = e;
    switch (e) {
      case "blob":
      case "arraybuffer":
        n = "uint8array";
        break;
      case "base64":
        n = "string";
        break;
    }
    try {
      ((this._internalType = n),
        (this._outputType = e),
        (this._mimeType = r),
        WV.checkSupport(n),
        (this._worker = t.pipe(new mEs(n))),
        t.lock());
    } catch (o) {
      ((this._worker = new dEs("error")), this._worker.error(o));
    }
  }
  jEn.prototype = {
    accumulate: function (t) {
      return AEs(this, t);
    },
    on: function (t, e) {
      var r = this;
      return (
        t === "data"
          ? this._worker.on(t, function (n) {
              e.call(r, n.data, n.meta);
            })
          : this._worker.on(t, function () {
              WV.delay(e, arguments, r);
            }),
        this
      );
    },
    resume: function () {
      return (WV.delay(this._worker.resume, [], this._worker), this);
    },
    pause: function () {
      return (this._worker.pause(), this);
    },
    toNodejsStream: function (t) {
      if ((WV.checkSupport("nodestream"), this._outputType !== "nodebuffer"))
        throw new Error(this._outputType + " is not supported by this method");
      return new $En(this, { objectMode: this._outputType !== "nodebuffer" }, t);
    },
  };
  QEn.exports = jEn;
});