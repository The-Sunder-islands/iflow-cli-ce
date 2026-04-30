/**
 * @module Mre
 * @category utils/oop
 * @label oop
 * @position 453 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mre) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mre = T((GLu, sZr) => {
  "use strict";
  sZr.exports = Fu;
  var QFe = GB();
  ((Fu.prototype = Object.create(QFe.prototype)).constructor = Fu).className = "Namespace";
  var Jxt = QB(),
    GFe = Bh(),
    EFo = bq(),
    hq,
    Lre,
    gq;
  Fu.fromJSON = function (e, r) {
    return new Fu(e, r.options).addJSON(r.nested);
  };
  function iZr(t, e) {
    if (t && t.length) {
      for (var r = {}, n = 0; n < t.length; ++n) r[t[n].name] = t[n].toJSON(e);
      return r;
    }
  }
  Fu.arrayToJSON = iZr;
  Fu.isReservedId = function (e, r) {
    if (e) {
      for (var n = 0; n < e.length; ++n) if (typeof e[n] != "string" && e[n][0] <= r && e[n][1] > r) return !0;
    }
    return !1;
  };
  Fu.isReservedName = function (e, r) {
    if (e) {
      for (var n = 0; n < e.length; ++n) if (e[n] === r) return !0;
    }
    return !1;
  };
  function Fu(t, e) {
    (QFe.call(this, t, e),
      (this.nested = void 0),
      (this._nestedArray = null),
      (this._lookupCache = {}),
      (this._needsRecursiveFeatureResolution = !0),
      (this._needsRecursiveResolve = !0));
  }
  function oZr(t) {
    ((t._nestedArray = null), (t._lookupCache = {}));
    for (var e = t; (e = e.parent); ) e._lookupCache = {};
    return t;
  }
  Object.defineProperty(Fu.prototype, "nestedArray", {
    get: function () {
      return this._nestedArray || (this._nestedArray = GFe.toArray(this.nested));
    },
  });
  Fu.prototype.toJSON = function (e) {
    return GFe.toObject(["options", this.options, "nested", iZr(this.nestedArray, e)]);
  };
  Fu.prototype.addJSON = function (e) {
    var r = this;
    if (e)
      for (var n = Object.keys(e), o = 0, s; o < n.length; ++o)
        ((s = e[n[o]]),
          r.add(
            (s.fields !== void 0
              ? hq.fromJSON
              : s.values !== void 0
                ? gq.fromJSON
                : s.methods !== void 0
                  ? Lre.fromJSON
                  : s.id !== void 0
                    ? Jxt.fromJSON
                    : Fu.fromJSON)(n[o], s),
          ));
    return this;
  };
  Fu.prototype.get = function (e) {
    return (this.nested && this.nested[e]) || null;
  };
  Fu.prototype.getEnum = function (e) {
    if (this.nested && this.nested[e] instanceof gq) return this.nested[e].values;
    throw Error("no such enum: " + e);
  };
  Fu.prototype.add = function (e) {
    if (
      !(
        (e instanceof Jxt && e.extend !== void 0) ||
        e instanceof hq ||
        e instanceof EFo ||
        e instanceof gq ||
        e instanceof Lre ||
        e instanceof Fu
      )
    )
      throw TypeError("object must be a valid nested object");
    if (!this.nested) this.nested = {};
    else {
      var r = this.get(e.name);
      if (r)
        if (r instanceof Fu && e instanceof Fu && !(r instanceof hq || r instanceof Lre)) {
          for (var n = r.nestedArray, o = 0; o < n.length; ++o) e.add(n[o]);
          (this.remove(r), this.nested || (this.nested = {}), e.setOptions(r.options, !0));
        } else throw Error("duplicate name '" + e.name + "' in " + this);
    }
    ((this.nested[e.name] = e),
      this instanceof hq ||
        this instanceof Lre ||
        this instanceof gq ||
        this instanceof Jxt ||
        e._edition ||
        (e._edition = e._defaultEdition),
      (this._needsRecursiveFeatureResolution = !0),
      (this._needsRecursiveResolve = !0));
    for (var s = this; (s = s.parent); ) ((s._needsRecursiveFeatureResolution = !0), (s._needsRecursiveResolve = !0));
    return (e.onAdd(this), oZr(this));
  };
  Fu.prototype.remove = function (e) {
    if (!(e instanceof QFe)) throw TypeError("object must be a ReflectionObject");
    if (e.parent !== this) throw Error(e + " is not a member of " + this);
    return (
      delete this.nested[e.name],
      Object.keys(this.nested).length || (this.nested = void 0),
      e.onRemove(this),
      oZr(this)
    );
  };
  Fu.prototype.define = function (e, r) {
    if (GFe.isString(e)) e = e.split(".");
    else if (!Array.isArray(e)) throw TypeError("illegal path");
    if (e && e.length && e[0] === "") throw Error("path must be relative");
    for (var n = this; e.length > 0; ) {
      var o = e.shift();
      if (n.nested && n.nested[o]) {
        if (((n = n.nested[o]), !(n instanceof Fu))) throw Error("path conflicts with non-namespace objects");
      } else n.add((n = new Fu(o)));
    }
    return (r && n.addJSON(r), n);
  };
  Fu.prototype.resolveAll = function () {
    if (!this._needsRecursiveResolve) return this;
    this._resolveFeaturesRecursive(this._edition);
    var e = this.nestedArray,
      r = 0;
    for (this.resolve(); r < e.length; ) e[r] instanceof Fu ? e[r++].resolveAll() : e[r++].resolve();
    return ((this._needsRecursiveResolve = !1), this);
  };
  Fu.prototype._resolveFeaturesRecursive = function (e) {
    return this._needsRecursiveFeatureResolution
      ? ((this._needsRecursiveFeatureResolution = !1),
        (e = this._edition || e),
        QFe.prototype._resolveFeaturesRecursive.call(this, e),
        this.nestedArray.forEach((r) => {
          r._resolveFeaturesRecursive(e);
        }),
        this)
      : this;
  };
  Fu.prototype.lookup = function (e, r, n) {
    if (
      (typeof r == "boolean" ? ((n = r), (r = void 0)) : r && !Array.isArray(r) && (r = [r]),
      GFe.isString(e) && e.length)
    ) {
      if (e === ".") return this.root;
      e = e.split(".");
    } else if (!e.length) return this;
    var o = e.join(".");
    if (e[0] === "") return this.root.lookup(e.slice(1), r);
    var s = this.root._fullyQualifiedObjects && this.root._fullyQualifiedObjects["." + o];
    if (
      (s && (!r || r.indexOf(s.constructor) > -1)) ||
      ((s = this._lookupImpl(e, o)), s && (!r || r.indexOf(s.constructor) > -1))
    )
      return s;
    if (n) return null;
    for (var a = this; a.parent; ) {
      if (((s = a.parent._lookupImpl(e, o)), s && (!r || r.indexOf(s.constructor) > -1))) return s;
      a = a.parent;
    }
    return null;
  };
  Fu.prototype._lookupImpl = function (e, r) {
    if (Object.prototype.hasOwnProperty.call(this._lookupCache, r)) return this._lookupCache[r];
    var n = this.get(e[0]),
      o = null;
    if (n) e.length === 1 ? (o = n) : n instanceof Fu && ((e = e.slice(1)), (o = n._lookupImpl(e, e.join("."))));
    else
      for (var s = 0; s < this.nestedArray.length; ++s)
        this._nestedArray[s] instanceof Fu && (n = this._nestedArray[s]._lookupImpl(e, r)) && (o = n);
    return ((this._lookupCache[r] = o), o);
  };
  Fu.prototype.lookupType = function (e) {
    var r = this.lookup(e, [hq]);
    if (!r) throw Error("no such type: " + e);
    return r;
  };
  Fu.prototype.lookupEnum = function (e) {
    var r = this.lookup(e, [gq]);
    if (!r) throw Error("no such Enum '" + e + "' in " + this);
    return r;
  };
  Fu.prototype.lookupTypeOrEnum = function (e) {
    var r = this.lookup(e, [hq, gq]);
    if (!r) throw Error("no such Type or Enum '" + e + "' in " + this);
    return r;
  };
  Fu.prototype.lookupService = function (e) {
    var r = this.lookup(e, [Lre]);
    if (!r) throw Error("no such Service '" + e + "' in " + this);
    return r;
  };
  Fu._configure = function (t, e, r) {
    ((hq = t), (Lre = e), (gq = r));
  };
});