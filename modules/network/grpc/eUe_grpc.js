/**
 * @module eUe
 * @category network/grpc
 * @label grpc
 * @position 463 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eUe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eUe = T((ZLu, vZr) => {
  "use strict";
  vZr.exports = l6;
  var ZFe = Mre();
  ((l6.prototype = Object.create(ZFe.prototype)).constructor = l6).className = "Root";
  var JFe = QB(),
    fTt = XC(),
    jFo = bq(),
    qB = Bh(),
    pTt,
    hTt,
    mbe;
  function l6(t) {
    (ZFe.call(this, "", t),
      (this.deferred = []),
      (this.files = []),
      (this._edition = "proto2"),
      (this._fullyQualifiedObjects = {}));
  }
  l6.fromJSON = function (e, r) {
    return (r || (r = new l6()), e.options && r.setOptions(e.options), r.addJSON(e.nested).resolveAll());
  };
  l6.prototype.resolvePath = qB.path.resolve;
  l6.prototype.fetch = qB.fetch;
  function EZr() {}
  l6.prototype.load = function t(e, r, n) {
    typeof r == "function" && ((n = r), (r = void 0));
    var o = this;
    if (!n) return qB.asPromise(t, o, e, r);
    var s = n === EZr;
    function a(h, g) {
      if (n) {
        if (s) throw h;
        g && g.resolveAll();
        var b = n;
        ((n = null), b(h, g));
      }
    }
    function u(h) {
      var g = h.lastIndexOf("google/protobuf/");
      if (g > -1) {
        var b = h.substring(g);
        if (b in mbe) return b;
      }
      return null;
    }
    function c(h, g) {
      try {
        if ((qB.isString(g) && g.charAt(0) === "{" && (g = JSON.parse(g)), !qB.isString(g)))
          o.setOptions(g.options).addJSON(g.nested);
        else {
          hTt.filename = h;
          var b = hTt(g, o, r),
            A,
            y = 0;
          if (b.imports)
            for (; y < b.imports.length; ++y) (A = u(b.imports[y]) || o.resolvePath(h, b.imports[y])) && m(A);
          if (b.weakImports)
            for (y = 0; y < b.weakImports.length; ++y)
              (A = u(b.weakImports[y]) || o.resolvePath(h, b.weakImports[y])) && m(A, !0);
        }
      } catch (E) {
        a(E);
      }
      !s && !d && a(null, o);
    }
    function m(h, g) {
      if (((h = u(h) || h), !(o.files.indexOf(h) > -1))) {
        if ((o.files.push(h), h in mbe)) {
          s
            ? c(h, mbe[h])
            : (++d,
              setTimeout(function () {
                (--d, c(h, mbe[h]));
              }));
          return;
        }
        if (s) {
          var b;
          try {
            b = qB.fs.readFileSync(h).toString("utf8");
          } catch (A) {
            g || a(A);
            return;
          }
          c(h, b);
        } else
          (++d,
            o.fetch(h, function (A, y) {
              if ((--d, !!n)) {
                if (A) {
                  g ? d || a(null, o) : a(A);
                  return;
                }
                c(h, y);
              }
            }));
      }
    }
    var d = 0;
    qB.isString(e) && (e = [e]);
    for (var f = 0, p; f < e.length; ++f) (p = o.resolvePath("", e[f])) && m(p);
    return s ? (o.resolveAll(), o) : (d || a(null, o), o);
  };
  l6.prototype.loadSync = function (e, r) {
    if (!qB.isNode) throw Error("not supported");
    return this.load(e, r, EZr);
  };
  l6.prototype.resolveAll = function () {
    if (!this._needsRecursiveResolve) return this;
    if (this.deferred.length)
      throw Error(
        "unresolvable extensions: " +
          this.deferred
            .map(function (e) {
              return "'extend " + e.extend + "' in " + e.parent.fullName;
            })
            .join(", "),
      );
    return ZFe.prototype.resolveAll.call(this);
  };
  var XFe = /^[A-Z]/;
  function _Zr(t, e) {
    var r = e.parent.lookup(e.extend);
    if (r) {
      var n = new JFe(e.fullName, e.id, e.type, e.rule, void 0, e.options);
      return (r.get(n.name) || ((n.declaringField = e), (e.extensionField = n), r.add(n)), !0);
    }
    return !1;
  }
  l6.prototype._handleAdd = function (e) {
    if (e instanceof JFe) e.extend !== void 0 && !e.extensionField && (_Zr(this, e) || this.deferred.push(e));
    else if (e instanceof fTt) XFe.test(e.name) && (e.parent[e.name] = e.values);
    else if (!(e instanceof jFo)) {
      if (e instanceof pTt)
        for (var r = 0; r < this.deferred.length; ) _Zr(this, this.deferred[r]) ? this.deferred.splice(r, 1) : ++r;
      for (var n = 0; n < e.nestedArray.length; ++n) this._handleAdd(e._nestedArray[n]);
      XFe.test(e.name) && (e.parent[e.name] = e);
    }
    (e instanceof pTt || e instanceof fTt || e instanceof JFe) && (this._fullyQualifiedObjects[e.fullName] = e);
  };
  l6.prototype._handleRemove = function (e) {
    if (e instanceof JFe) {
      if (e.extend !== void 0)
        if (e.extensionField) (e.extensionField.parent.remove(e.extensionField), (e.extensionField = null));
        else {
          var r = this.deferred.indexOf(e);
          r > -1 && this.deferred.splice(r, 1);
        }
    } else if (e instanceof fTt) XFe.test(e.name) && delete e.parent[e.name];
    else if (e instanceof ZFe) {
      for (var n = 0; n < e.nestedArray.length; ++n) this._handleRemove(e._nestedArray[n]);
      XFe.test(e.name) && delete e.parent[e.name];
    }
    delete this._fullyQualifiedObjects[e.fullName];
  };
  l6._configure = function (t, e, r) {
    ((pTt = t), (hTt = e), (mbe = r));
  };
});