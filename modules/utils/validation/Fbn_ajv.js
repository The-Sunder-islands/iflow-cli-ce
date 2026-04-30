/**
 * @module Fbn
 * @category utils/validation
 * @label ajv
 * @position 854 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fbn = T((arc, Mgs) => {
  Mgs.exports = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://json-schema.org/draft-07/schema#",
    title: "Core schema meta-schema",
    definitions: {
      schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
      nonNegativeInteger: { type: "integer", minimum: 0 },
      nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] },
      simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] },
      stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] },
    },
    type: ["object", "boolean"],
    properties: {
      $id: { type: "string", format: "uri-reference" },
      $schema: { type: "string", format: "uri" },
      $ref: { type: "string", format: "uri-reference" },
      $comment: { type: "string" },
      title: { type: "string" },
      description: { type: "string" },
      default: !0,
      readOnly: { type: "boolean", default: !1 },
      examples: { type: "array", items: !0 },
      multipleOf: { type: "number", exclusiveMinimum: 0 },
      maximum: { type: "number" },
      exclusiveMaximum: { type: "number" },
      minimum: { type: "number" },
      exclusiveMinimum: { type: "number" },
      maxLength: { $ref: "#/definitions/nonNegativeInteger" },
      minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      pattern: { type: "string", format: "regex" },
      additionalItems: { $ref: "#" },
      items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 },
      maxItems: { $ref: "#/definitions/nonNegativeInteger" },
      minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      uniqueItems: { type: "boolean", default: !1 },
      contains: { $ref: "#" },
      maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
      minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
      required: { $ref: "#/definitions/stringArray" },
      additionalProperties: { $ref: "#" },
      definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} },
      properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} },
      patternProperties: {
        type: "object",
        additionalProperties: { $ref: "#" },
        propertyNames: { format: "regex" },
        default: {},
      },
      dependencies: {
        type: "object",
        additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] },
      },
      propertyNames: { $ref: "#" },
      const: !0,
      enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 },
      type: {
        anyOf: [
          { $ref: "#/definitions/simpleTypes" },
          { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 },
        ],
      },
      format: { type: "string" },
      contentMediaType: { type: "string" },
      contentEncoding: { type: "string" },
      if: { $ref: "#" },
      then: { $ref: "#" },
      else: { $ref: "#" },
      allOf: { $ref: "#/definitions/schemaArray" },
      anyOf: { $ref: "#/definitions/schemaArray" },
      oneOf: { $ref: "#/definitions/schemaArray" },
      not: { $ref: "#" },
    },
    default: !0,
  };
});
var $bn = T((_m, M$t) => {
  "use strict";
  Object.defineProperty(_m, "__esModule", { value: !0 });
  _m.MissingRefError =
    _m.ValidationError =
    _m.CodeGen =
    _m.Name =
    _m.nil =
    _m.stringify =
    _m.str =
    _m._ =
    _m.KeywordCxt =
    _m.Ajv =
      void 0;
  var Fgs = Pgn(),
    Ugs = Nbn(),
    $gs = Mbn(),
    Ubn = Fbn(),
    jgs = ["/properties"],
    BYe = "http://json-schema.org/draft-07/schema",
    nse = class extends Fgs.default {
      _addVocabularies() {
        (super._addVocabularies(),
          Ugs.default.forEach((e) => this.addVocabulary(e)),
          this.opts.discriminator && this.addKeyword($gs.default));
      }
      _addDefaultMetaSchema() {
        if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
        let e = this.opts.$data ? this.$dataMetaSchema(Ubn, jgs) : Ubn;
        (this.addMetaSchema(e, BYe, !1), (this.refs["http://json-schema.org/schema"] = BYe));
      }
      defaultMeta() {
        return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(BYe) ? BYe : void 0));
      }
    };
  _m.Ajv = nse;
  M$t.exports = _m = nse;
  M$t.exports.Ajv = nse;
  Object.defineProperty(_m, "__esModule", { value: !0 });
  _m.default = nse;
  var Qgs = P8e();
  Object.defineProperty(_m, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return Qgs.KeywordCxt;
    },
  });
  var ise = _a();
  Object.defineProperty(_m, "_", {
    enumerable: !0,
    get: function () {
      return ise._;
    },
  });
  Object.defineProperty(_m, "str", {
    enumerable: !0,
    get: function () {
      return ise.str;
    },
  });
  Object.defineProperty(_m, "stringify", {
    enumerable: !0,
    get: function () {
      return ise.stringify;
    },
  });
  Object.defineProperty(_m, "nil", {
    enumerable: !0,
    get: function () {
      return ise.nil;
    },
  });
  Object.defineProperty(_m, "Name", {
    enumerable: !0,
    get: function () {
      return ise.Name;
    },
  });
  Object.defineProperty(_m, "CodeGen", {
    enumerable: !0,
    get: function () {
      return ise.CodeGen;
    },
  });
  var Ggs = bYe();
  Object.defineProperty(_m, "ValidationError", {
    enumerable: !0,
    get: function () {
      return Ggs.default;
    },
  });
  var qgs = B8e();
  Object.defineProperty(_m, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return qgs.default;
    },
  });
});