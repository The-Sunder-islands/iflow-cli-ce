/**
 * @module KFe
 * @category utils/oop
 * @label oop
 * @position 462 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (KFe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var KFe = T((XLu, yZr) => {
  "use strict";
  yZr.exports = b0;
  var N_ = Mre();
  ((b0.prototype = Object.create(N_.prototype)).constructor = b0).className = "Type";
  var NFo = XC(),
    mTt = bq(),
    zFe = QB(),
    PFo = qFe(),
    BFo = VFe(),
    cTt = WFe(),
    lTt = QNe(),
    LFo = $Ne(),
    Cb = Bh(),
    MFo = dTt(),
    FFo = tTt(),
    UFo = iTt(),
    AZr = aTt(),
    $Fo = uTt();
  function b0(t, e) {
    (N_.call(this, t, e),
      (this.fields = {}),
      (this.oneofs = void 0),
      (this.extensions = void 0),
      (this.reserved = void 0),
      (this.group = void 0),
      (this._fieldsById = null),
      (this._fieldsArray = null),
      (this._oneofsArray = null),
      (this._ctor = null));
  }
  Object.defineProperties(b0.prototype, {
    fieldsById: {
      get: function () {
        if (this._fieldsById) return this._fieldsById;
        this._fieldsById = {};
        for (var t = Object.keys(this.fields), e = 0; e < t.length; ++e) {
          var r = this.fields[t[e]],
            n = r.id;
          if (this._fieldsById[n]) throw Error("duplicate id " + n + " in " + this);
          this._fieldsById[n] = r;
        }
        return this._fieldsById;
      },
    },
    fieldsArray: {
      get: function () {
        return this._fieldsArray || (this._fieldsArray = Cb.toArray(this.fields));
      },
    },
    oneofsArray: {
      get: function () {
        return this._oneofsArray || (this._oneofsArray = Cb.toArray(this.oneofs));
      },
    },
    ctor: {
      get: function () {
        return this._ctor || (this.ctor = b0.generateConstructor(this)());
      },
      set: function (t) {
        var e = t.prototype;
        (e instanceof cTt || (((t.prototype = new cTt()).constructor = t), Cb.merge(t.prototype, e)),
          (t.$type = t.prototype.$type = this),
          Cb.merge(t, cTt, !0),
          (this._ctor = t));
        for (var r = 0; r < this.fieldsArray.length; ++r) this._fieldsArray[r].resolve();
        var n = {};
        for (r = 0; r < this.oneofsArray.length; ++r)
          n[this._oneofsArray[r].resolve().name] = {
            get: Cb.oneOfGetter(this._oneofsArray[r].oneof),
            set: Cb.oneOfSetter(this._oneofsArray[r].oneof),
          };
        r && Object.defineProperties(t.prototype, n);
      },
    },
  });
  b0.generateConstructor = function (e) {
    for (var r = Cb.codegen(["p"], e.name), n = 0, o; n < e.fieldsArray.length; ++n)
      (o = e._fieldsArray[n]).map
        ? r("this%s={}", Cb.safeProp(o.name))
        : o.repeated && r("this%s=[]", Cb.safeProp(o.name));
    return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
  };
  function YFe(t) {
    return (
      (t._fieldsById = t._fieldsArray = t._oneofsArray = null),
      delete t.encode,
      delete t.decode,
      delete t.verify,
      t
    );
  }
  b0.fromJSON = function (e, r) {
    var n = new b0(e, r.options);
    ((n.extensions = r.extensions), (n.reserved = r.reserved));
    for (var o = Object.keys(r.fields), s = 0; s < o.length; ++s)
      n.add((typeof r.fields[o[s]].keyType < "u" ? PFo.fromJSON : zFe.fromJSON)(o[s], r.fields[o[s]]));
    if (r.oneofs) for (o = Object.keys(r.oneofs), s = 0; s < o.length; ++s) n.add(mTt.fromJSON(o[s], r.oneofs[o[s]]));
    if (r.nested)
      for (o = Object.keys(r.nested), s = 0; s < o.length; ++s) {
        var a = r.nested[o[s]];
        n.add(
          (a.id !== void 0
            ? zFe.fromJSON
            : a.fields !== void 0
              ? b0.fromJSON
              : a.values !== void 0
                ? NFo.fromJSON
                : a.methods !== void 0
                  ? BFo.fromJSON
                  : N_.fromJSON)(o[s], a),
        );
      }
    return (
      r.extensions && r.extensions.length && (n.extensions = r.extensions),
      r.reserved && r.reserved.length && (n.reserved = r.reserved),
      r.group && (n.group = !0),
      r.comment && (n.comment = r.comment),
      r.edition && (n._edition = r.edition),
      (n._defaultEdition = "proto3"),
      n
    );
  };
  b0.prototype.toJSON = function (e) {
    var r = N_.prototype.toJSON.call(this, e),
      n = e ? !!e.keepComments : !1;
    return Cb.toObject([
      "edition",
      this._editionToJSON(),
      "options",
      (r && r.options) || void 0,
      "oneofs",
      N_.arrayToJSON(this.oneofsArray, e),
      "fields",
      N_.arrayToJSON(
        this.fieldsArray.filter(function (o) {
          return !o.declaringField;
        }),
        e,
      ) || {},
      "extensions",
      this.extensions && this.extensions.length ? this.extensions : void 0,
      "reserved",
      this.reserved && this.reserved.length ? this.reserved : void 0,
      "group",
      this.group || void 0,
      "nested",
      (r && r.nested) || void 0,
      "comment",
      n ? this.comment : void 0,
    ]);
  };
  b0.prototype.resolveAll = function () {
    if (!this._needsRecursiveResolve) return this;
    N_.prototype.resolveAll.call(this);
    var e = this.oneofsArray;
    for (n = 0; n < e.length; ) e[n++].resolve();
    for (var r = this.fieldsArray, n = 0; n < r.length; ) r[n++].resolve();
    return this;
  };
  b0.prototype._resolveFeaturesRecursive = function (e) {
    return this._needsRecursiveFeatureResolution
      ? ((e = this._edition || e),
        N_.prototype._resolveFeaturesRecursive.call(this, e),
        this.oneofsArray.forEach((r) => {
          r._resolveFeatures(e);
        }),
        this.fieldsArray.forEach((r) => {
          r._resolveFeatures(e);
        }),
        this)
      : this;
  };
  b0.prototype.get = function (e) {
    return this.fields[e] || (this.oneofs && this.oneofs[e]) || (this.nested && this.nested[e]) || null;
  };
  b0.prototype.add = function (e) {
    if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
    if (e instanceof zFe && e.extend === void 0) {
      if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id])
        throw Error("duplicate id " + e.id + " in " + this);
      if (this.isReservedId(e.id)) throw Error("id " + e.id + " is reserved in " + this);
      if (this.isReservedName(e.name)) throw Error("name '" + e.name + "' is reserved in " + this);
      return (e.parent && e.parent.remove(e), (this.fields[e.name] = e), (e.message = this), e.onAdd(this), YFe(this));
    }
    return e instanceof mTt
      ? (this.oneofs || (this.oneofs = {}), (this.oneofs[e.name] = e), e.onAdd(this), YFe(this))
      : N_.prototype.add.call(this, e);
  };
  b0.prototype.remove = function (e) {
    if (e instanceof zFe && e.extend === void 0) {
      if (!this.fields || this.fields[e.name] !== e) throw Error(e + " is not a member of " + this);
      return (delete this.fields[e.name], (e.parent = null), e.onRemove(this), YFe(this));
    }
    if (e instanceof mTt) {
      if (!this.oneofs || this.oneofs[e.name] !== e) throw Error(e + " is not a member of " + this);
      return (delete this.oneofs[e.name], (e.parent = null), e.onRemove(this), YFe(this));
    }
    return N_.prototype.remove.call(this, e);
  };
  b0.prototype.isReservedId = function (e) {
    return N_.isReservedId(this.reserved, e);
  };
  b0.prototype.isReservedName = function (e) {
    return N_.isReservedName(this.reserved, e);
  };
  b0.prototype.create = function (e) {
    return new this.ctor(e);
  };
  b0.prototype.setup = function () {
    for (var e = this.fullName, r = [], n = 0; n < this.fieldsArray.length; ++n)
      r.push(this._fieldsArray[n].resolve().resolvedType);
    ((this.encode = MFo(this)({ Writer: LFo, types: r, util: Cb })),
      (this.decode = FFo(this)({ Reader: lTt, types: r, util: Cb })),
      (this.verify = UFo(this)({ types: r, util: Cb })),
      (this.fromObject = AZr.fromObject(this)({ types: r, util: Cb })),
      (this.toObject = AZr.toObject(this)({ types: r, util: Cb })));
    var o = $Fo[e];
    if (o) {
      var s = Object.create(this);
      ((s.fromObject = this.fromObject),
        (this.fromObject = o.fromObject.bind(s)),
        (s.toObject = this.toObject),
        (this.toObject = o.toObject.bind(s)));
    }
    return this;
  };
  b0.prototype.encode = function (e, r) {
    return this.setup().encode(e, r);
  };
  b0.prototype.encodeDelimited = function (e, r) {
    return this.encode(e, r && r.len ? r.fork() : r).ldelim();
  };
  b0.prototype.decode = function (e, r) {
    return this.setup().decode(e, r);
  };
  b0.prototype.decodeDelimited = function (e) {
    return (e instanceof lTt || (e = lTt.create(e)), this.decode(e, e.uint32()));
  };
  b0.prototype.verify = function (e) {
    return this.setup().verify(e);
  };
  b0.prototype.fromObject = function (e) {
    return this.setup().fromObject(e);
  };
  b0.prototype.toObject = function (e, r) {
    return this.setup().toObject(e, r);
  };
  b0.d = function (e) {
    return function (n) {
      Cb.decorateType(n, e);
    };
  };
});