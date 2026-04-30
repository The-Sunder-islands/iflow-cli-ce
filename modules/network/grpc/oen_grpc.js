/**
 * @module oen
 * @category network/grpc
 * @label grpc
 * @position 478 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oen) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oen = T((Aa, ien) => {
  "use strict";
  var d6 = oUe();
  ien.exports = Aa = d6.descriptor = d6.Root.fromJSON(wTt()).lookup(".google.protobuf");
  var ZZr = d6.Namespace,
    bbe = d6.Root,
    BR = d6.Enum,
    Xx = d6.Type,
    VB = d6.Field,
    TUo = d6.MapField,
    sUe = d6.OneOf,
    Abe = d6.Service,
    aUe = d6.Method;
  bbe.fromDescriptor = function (e) {
    typeof e.length == "number" && (e = Aa.FileDescriptorSet.decode(e));
    var r = new bbe();
    if (e.file)
      for (var n, o, s = 0, a; s < e.file.length; ++s) {
        ((o = r), (n = e.file[s]).package && n.package.length && (o = r.define(n.package)));
        var u = MUo(n);
        if ((n.name && n.name.length && r.files.push((o.filename = n.name)), n.messageType))
          for (a = 0; a < n.messageType.length; ++a) o.add(Xx.fromDescriptor(n.messageType[a], u));
        if (n.enumType) for (a = 0; a < n.enumType.length; ++a) o.add(BR.fromDescriptor(n.enumType[a], u));
        if (n.extension) for (a = 0; a < n.extension.length; ++a) o.add(VB.fromDescriptor(n.extension[a], u));
        if (n.service) for (a = 0; a < n.service.length; ++a) o.add(Abe.fromDescriptor(n.service[a], u));
        var c = Ure(n.options, Aa.FileOptions);
        if (c) {
          var m = Object.keys(c);
          for (a = 0; a < m.length; ++a) o.setOption(m[a], c[m[a]]);
        }
      }
    return r.resolveAll();
  };
  bbe.prototype.toDescriptor = function (e) {
    var r = Aa.FileDescriptorSet.create();
    return (een(this, r.file, e), r);
  };
  function een(t, e, r) {
    var n = Aa.FileDescriptorProto.create({
      name: t.filename || (t.fullName.substring(1).replace(/\./g, "_") || "root") + ".proto",
    });
    (FUo(r, n), t instanceof bbe || (n.package = t.fullName.substring(1)));
    for (var o = 0, s; o < t.nestedArray.length; ++o)
      (s = t._nestedArray[o]) instanceof Xx
        ? n.messageType.push(s.toDescriptor(r))
        : s instanceof BR
          ? n.enumType.push(s.toDescriptor())
          : s instanceof VB
            ? n.extension.push(s.toDescriptor(r))
            : s instanceof Abe
              ? n.service.push(s.toDescriptor())
              : s instanceof ZZr && een(s, e, r);
    ((n.options = $re(t.options, Aa.FileOptions)),
      n.messageType.length + n.enumType.length + n.extension.length + n.service.length && e.push(n));
  }
  var DUo = 0;
  Xx.fromDescriptor = function (e, r, n) {
    typeof e.length == "number" && (e = Aa.DescriptorProto.decode(e));
    var o = new Xx(e.name.length ? e.name : "Type" + DUo++, Ure(e.options, Aa.MessageOptions)),
      s;
    if ((n || (o._edition = r), e.oneofDecl))
      for (s = 0; s < e.oneofDecl.length; ++s) o.add(sUe.fromDescriptor(e.oneofDecl[s]));
    if (e.field)
      for (s = 0; s < e.field.length; ++s) {
        var a = VB.fromDescriptor(e.field[s], r, !0);
        (o.add(a), e.field[s].hasOwnProperty("oneofIndex") && o.oneofsArray[e.field[s].oneofIndex].add(a));
      }
    if (e.extension) for (s = 0; s < e.extension.length; ++s) o.add(VB.fromDescriptor(e.extension[s], r, !0));
    if (e.nestedType)
      for (s = 0; s < e.nestedType.length; ++s)
        (o.add(Xx.fromDescriptor(e.nestedType[s], r, !0)),
          e.nestedType[s].options && e.nestedType[s].options.mapEntry && o.setOption("map_entry", !0));
    if (e.enumType) for (s = 0; s < e.enumType.length; ++s) o.add(BR.fromDescriptor(e.enumType[s], r, !0));
    if (e.extensionRange && e.extensionRange.length)
      for (o.extensions = [], s = 0; s < e.extensionRange.length; ++s)
        o.extensions.push([e.extensionRange[s].start, e.extensionRange[s].end]);
    if ((e.reservedRange && e.reservedRange.length) || (e.reservedName && e.reservedName.length)) {
      if (((o.reserved = []), e.reservedRange))
        for (s = 0; s < e.reservedRange.length; ++s)
          o.reserved.push([e.reservedRange[s].start, e.reservedRange[s].end]);
      if (e.reservedName) for (s = 0; s < e.reservedName.length; ++s) o.reserved.push(e.reservedName[s]);
    }
    return o;
  };
  Xx.prototype.toDescriptor = function (e) {
    var r = Aa.DescriptorProto.create({ name: this.name }),
      n;
    for (n = 0; n < this.fieldsArray.length; ++n) {
      var o;
      if ((r.field.push((o = this._fieldsArray[n].toDescriptor(e))), this._fieldsArray[n] instanceof TUo)) {
        var s = xTt(this._fieldsArray[n].keyType, this._fieldsArray[n].resolvedKeyType, !1),
          a = xTt(this._fieldsArray[n].type, this._fieldsArray[n].resolvedType, !1),
          u =
            a === 11 || a === 14
              ? (this._fieldsArray[n].resolvedType && nen(this.parent, this._fieldsArray[n].resolvedType)) ||
                this._fieldsArray[n].type
              : void 0;
        r.nestedType.push(
          Aa.DescriptorProto.create({
            name: o.typeName,
            field: [
              Aa.FieldDescriptorProto.create({ name: "key", number: 1, label: 1, type: s }),
              Aa.FieldDescriptorProto.create({ name: "value", number: 2, label: 1, type: a, typeName: u }),
            ],
            options: Aa.MessageOptions.create({ mapEntry: !0 }),
          }),
        );
      }
    }
    for (n = 0; n < this.oneofsArray.length; ++n) r.oneofDecl.push(this._oneofsArray[n].toDescriptor());
    for (n = 0; n < this.nestedArray.length; ++n)
      this._nestedArray[n] instanceof VB
        ? r.field.push(this._nestedArray[n].toDescriptor(e))
        : this._nestedArray[n] instanceof Xx
          ? r.nestedType.push(this._nestedArray[n].toDescriptor(e))
          : this._nestedArray[n] instanceof BR && r.enumType.push(this._nestedArray[n].toDescriptor());
    if (this.extensions)
      for (n = 0; n < this.extensions.length; ++n)
        r.extensionRange.push(
          Aa.DescriptorProto.ExtensionRange.create({ start: this.extensions[n][0], end: this.extensions[n][1] }),
        );
    if (this.reserved)
      for (n = 0; n < this.reserved.length; ++n)
        typeof this.reserved[n] == "string"
          ? r.reservedName.push(this.reserved[n])
          : r.reservedRange.push(
              Aa.DescriptorProto.ReservedRange.create({ start: this.reserved[n][0], end: this.reserved[n][1] }),
            );
    return ((r.options = $re(this.options, Aa.MessageOptions)), r);
  };
  var IUo = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
  VB.fromDescriptor = function (e, r, n) {
    if ((typeof e.length == "number" && (e = Aa.DescriptorProto.decode(e)), typeof e.number != "number"))
      throw Error("missing field id");
    var o;
    e.typeName && e.typeName.length ? (o = e.typeName) : (o = PUo(e.type));
    var s;
    switch (e.label) {
      case 1:
        s = void 0;
        break;
      case 2:
        s = "required";
        break;
      case 3:
        s = "repeated";
        break;
      default:
        throw Error("illegal label: " + e.label);
    }
    var a = e.extendee;
    e.extendee !== void 0 && (a = a.length ? a : void 0);
    var u = new VB(e.name.length ? e.name : "field" + e.number, e.number, o, s, a);
    if (
      (n || (u._edition = r),
      (u.options = Ure(e.options, Aa.FieldOptions)),
      e.proto3_optional && (u.options.proto3_optional = !0),
      e.defaultValue && e.defaultValue.length)
    ) {
      var c = e.defaultValue;
      switch (c) {
        case "true":
        case "TRUE":
          c = !0;
          break;
        case "false":
        case "FALSE":
          c = !1;
          break;
        default:
          var m = IUo.exec(c);
          m && (c = parseInt(c));
          break;
      }
      u.setOption("default", c);
    }
    return (
      BUo(e.type) &&
        (r === "proto3"
          ? e.options && !e.options.packed && u.setOption("packed", !1)
          : (!r || r === "proto2") && e.options && e.options.packed && u.setOption("packed", !0)),
      u
    );
  };
  VB.prototype.toDescriptor = function (e) {
    var r = Aa.FieldDescriptorProto.create({ name: this.name, number: this.id });
    if (this.map) ((r.type = 11), (r.typeName = d6.util.ucFirst(this.name)), (r.label = 3));
    else {
      switch ((r.type = xTt(this.type, this.resolve().resolvedType, this.delimited))) {
        case 10:
        case 11:
        case 14:
          r.typeName = this.resolvedType ? nen(this.parent, this.resolvedType) : this.type;
          break;
      }
      this.rule === "repeated" ? (r.label = 3) : this.required && e === "proto2" ? (r.label = 2) : (r.label = 1);
    }
    if (
      ((r.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend),
      this.partOf && (r.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0)
    )
      throw Error("missing oneof");
    return (
      this.options &&
        ((r.options = $re(this.options, Aa.FieldOptions)),
        this.options.default != null && (r.defaultValue = String(this.options.default)),
        this.options.proto3_optional && (r.proto3_optional = !0)),
      e === "proto3"
        ? this.packed || ((r.options || (r.options = Aa.FieldOptions.create())).packed = !1)
        : (!e || e === "proto2") && this.packed && ((r.options || (r.options = Aa.FieldOptions.create())).packed = !0),
      r
    );
  };
  var RUo = 0;
  BR.fromDescriptor = function (e, r, n) {
    typeof e.length == "number" && (e = Aa.EnumDescriptorProto.decode(e));
    var o = {};
    if (e.value)
      for (var s = 0; s < e.value.length; ++s) {
        var a = e.value[s].name,
          u = e.value[s].number || 0;
        o[a && a.length ? a : "NAME" + u] = u;
      }
    var c = new BR(e.name && e.name.length ? e.name : "Enum" + RUo++, o, Ure(e.options, Aa.EnumOptions));
    return (n || (c._edition = r), c);
  };
  BR.prototype.toDescriptor = function () {
    for (var e = [], r = 0, n = Object.keys(this.values); r < n.length; ++r)
      e.push(Aa.EnumValueDescriptorProto.create({ name: n[r], number: this.values[n[r]] }));
    return Aa.EnumDescriptorProto.create({ name: this.name, value: e, options: $re(this.options, Aa.EnumOptions) });
  };
  var kUo = 0;
  sUe.fromDescriptor = function (e) {
    return (
      typeof e.length == "number" && (e = Aa.OneofDescriptorProto.decode(e)),
      new sUe(e.name && e.name.length ? e.name : "oneof" + kUo++)
    );
  };
  sUe.prototype.toDescriptor = function () {
    return Aa.OneofDescriptorProto.create({ name: this.name });
  };
  var OUo = 0;
  Abe.fromDescriptor = function (e, r, n) {
    typeof e.length == "number" && (e = Aa.ServiceDescriptorProto.decode(e));
    var o = new Abe(e.name && e.name.length ? e.name : "Service" + OUo++, Ure(e.options, Aa.ServiceOptions));
    if ((n || (o._edition = r), e.method))
      for (var s = 0; s < e.method.length; ++s) o.add(aUe.fromDescriptor(e.method[s]));
    return o;
  };
  Abe.prototype.toDescriptor = function () {
    for (var e = [], r = 0; r < this.methodsArray.length; ++r) e.push(this._methodsArray[r].toDescriptor());
    return Aa.ServiceDescriptorProto.create({
      name: this.name,
      method: e,
      options: $re(this.options, Aa.ServiceOptions),
    });
  };
  var NUo = 0;
  aUe.fromDescriptor = function (e) {
    return (
      typeof e.length == "number" && (e = Aa.MethodDescriptorProto.decode(e)),
      new aUe(
        e.name && e.name.length ? e.name : "Method" + NUo++,
        "rpc",
        e.inputType,
        e.outputType,
        !!e.clientStreaming,
        !!e.serverStreaming,
        Ure(e.options, Aa.MethodOptions),
      )
    );
  };
  aUe.prototype.toDescriptor = function () {
    return Aa.MethodDescriptorProto.create({
      name: this.name,
      inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
      outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
      clientStreaming: this.requestStream,
      serverStreaming: this.responseStream,
      options: $re(this.options, Aa.MethodOptions),
    });
  };
  function PUo(t) {
    switch (t) {
      case 1:
        return "double";
      case 2:
        return "float";
      case 3:
        return "int64";
      case 4:
        return "uint64";
      case 5:
        return "int32";
      case 6:
        return "fixed64";
      case 7:
        return "fixed32";
      case 8:
        return "bool";
      case 9:
        return "string";
      case 12:
        return "bytes";
      case 13:
        return "uint32";
      case 15:
        return "sfixed32";
      case 16:
        return "sfixed64";
      case 17:
        return "sint32";
      case 18:
        return "sint64";
    }
    throw Error("illegal type: " + t);
  }
  function BUo(t) {
    switch (t) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        return !0;
    }
    return !1;
  }
  function xTt(t, e, r) {
    switch (t) {
      case "double":
        return 1;
      case "float":
        return 2;
      case "int64":
        return 3;
      case "uint64":
        return 4;
      case "int32":
        return 5;
      case "fixed64":
        return 6;
      case "fixed32":
        return 7;
      case "bool":
        return 8;
      case "string":
        return 9;
      case "bytes":
        return 12;
      case "uint32":
        return 13;
      case "sfixed32":
        return 15;
      case "sfixed64":
        return 16;
      case "sint32":
        return 17;
      case "sint64":
        return 18;
    }
    if (e instanceof BR) return 14;
    if (e instanceof Xx) return r ? 10 : 11;
    throw Error("illegal type: " + t);
  }
  function ten(t, e) {
    for (var r = {}, n = 0, o, s; n < e.fieldsArray.length; ++n)
      if ((s = (o = e._fieldsArray[n]).name) !== "uninterpretedOption" && Object.prototype.hasOwnProperty.call(t, s)) {
        var a = LUo(s);
        o.resolvedType instanceof Xx
          ? (r[a] = ten(t[s], o.resolvedType))
          : o.resolvedType instanceof BR
            ? (r[a] = o.resolvedType.valuesById[t[s]])
            : (r[a] = t[s]);
      }
    return r;
  }
  function Ure(t, e) {
    if (t) return ten(e.toObject(t), e);
  }
  function ren(t, e) {
    for (var r = {}, n = Object.keys(t), o = 0; o < n.length; ++o) {
      var s = n[o],
        a = d6.util.camelCase(s);
      if (Object.prototype.hasOwnProperty.call(e.fields, a)) {
        var u = e.fields[a];
        (u.resolvedType instanceof Xx ? (r[a] = ren(t[s], u.resolvedType)) : (r[a] = t[s]),
          u.repeated && !Array.isArray(r[a]) && (r[a] = [r[a]]));
      }
    }
    return r;
  }
  function $re(t, e) {
    if (t) return e.fromObject(ren(t, e));
  }
  function nen(t, e) {
    var r = t.fullName.split("."),
      n = e.fullName.split("."),
      o = 0,
      s = 0,
      a = n.length - 1;
    if (!(t instanceof bbe) && e instanceof ZZr)
      for (; o < r.length && s < a && r[o] === n[s]; ) {
        var u = e.lookup(r[o++], !0);
        if (u !== null && u !== e) break;
        ++s;
      }
    else for (; o < r.length && s < a && r[o] === n[s]; ++o, ++s);
    return n.slice(s).join(".");
  }
  function LUo(t) {
    return (
      t.substring(0, 1) +
      t.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, function (e, r) {
        return "_" + r.toLowerCase();
      })
    );
  }
  function MUo(t) {
    if (t.syntax === "editions")
      switch (t.edition) {
        case Aa.Edition.EDITION_2023:
          return "2023";
        default:
          throw new Error("Unsupported edition " + t.edition);
      }
    return t.syntax === "proto3" ? "proto3" : "proto2";
  }
  function FUo(t, e) {
    if (t)
      if (t === "proto2" || t === "proto3") e.syntax = t;
      else
        switch (((e.syntax = "editions"), t)) {
          case "2023":
            e.edition = Aa.Edition.EDITION_2023;
            break;
          default:
            throw new Error("Unsupported edition " + t);
        }
  }
});