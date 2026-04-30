/**
 * @module VFe
 * @category utils/oop
 * @label oop
 * @position 456 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (VFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var VFe = T((VLu, lZr) => {
  "use strict";
  lZr.exports = c6;
  var OR = Mre();
  ((c6.prototype = Object.create(OR.prototype)).constructor = c6).className = "Service";
  var eTt = HFe(),
    cbe = Bh(),
    CFo = Uvt();
  function c6(t, e) {
    (OR.call(this, t, e), (this.methods = {}), (this._methodsArray = null));
  }
  c6.fromJSON = function (e, r) {
    var n = new c6(e, r.options);
    if (r.methods)
      for (var o = Object.keys(r.methods), s = 0; s < o.length; ++s) n.add(eTt.fromJSON(o[s], r.methods[o[s]]));
    return (
      r.nested && n.addJSON(r.nested),
      r.edition && (n._edition = r.edition),
      (n.comment = r.comment),
      (n._defaultEdition = "proto3"),
      n
    );
  };
  c6.prototype.toJSON = function (e) {
    var r = OR.prototype.toJSON.call(this, e),
      n = e ? !!e.keepComments : !1;
    return cbe.toObject([
      "edition",
      this._editionToJSON(),
      "options",
      (r && r.options) || void 0,
      "methods",
      OR.arrayToJSON(this.methodsArray, e) || {},
      "nested",
      (r && r.nested) || void 0,
      "comment",
      n ? this.comment : void 0,
    ]);
  };
  Object.defineProperty(c6.prototype, "methodsArray", {
    get: function () {
      return this._methodsArray || (this._methodsArray = cbe.toArray(this.methods));
    },
  });
  function cZr(t) {
    return ((t._methodsArray = null), t);
  }
  c6.prototype.get = function (e) {
    return this.methods[e] || OR.prototype.get.call(this, e);
  };
  c6.prototype.resolveAll = function () {
    if (!this._needsRecursiveResolve) return this;
    OR.prototype.resolve.call(this);
    for (var e = this.methodsArray, r = 0; r < e.length; ++r) e[r].resolve();
    return this;
  };
  c6.prototype._resolveFeaturesRecursive = function (e) {
    return this._needsRecursiveFeatureResolution
      ? ((e = this._edition || e),
        OR.prototype._resolveFeaturesRecursive.call(this, e),
        this.methodsArray.forEach((r) => {
          r._resolveFeaturesRecursive(e);
        }),
        this)
      : this;
  };
  c6.prototype.add = function (e) {
    if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
    return e instanceof eTt
      ? ((this.methods[e.name] = e), (e.parent = this), cZr(this))
      : OR.prototype.add.call(this, e);
  };
  c6.prototype.remove = function (e) {
    if (e instanceof eTt) {
      if (this.methods[e.name] !== e) throw Error(e + " is not a member of " + this);
      return (delete this.methods[e.name], (e.parent = null), cZr(this));
    }
    return OR.prototype.remove.call(this, e);
  };
  c6.prototype.create = function (e, r, n) {
    for (var o = new CFo.Service(e, r, n), s = 0, a; s < this.methodsArray.length; ++s) {
      var u = cbe.lcFirst((a = this._methodsArray[s]).resolve().name).replace(/[^$\w_]/g, "");
      o[u] = cbe.codegen(["r", "c"], cbe.isReserved(u) ? u + "_" : u)("return this.rpcCall(m,q,s,r,c)")({
        m: a,
        q: a.resolvedRequestType.ctor,
        s: a.resolvedResponseType.ctor,
      });
    }
    return o;
  };
});