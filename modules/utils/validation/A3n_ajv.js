/**
 * @module A3n
 * @category utils/validation
 * @label ajv
 * @position 794 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (A3n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var A3n = T((Am, eUt) => {
  "use strict";
  Object.defineProperty(Am, "__esModule", { value: !0 });
  Am.MissingRefError =
    Am.ValidationError =
    Am.CodeGen =
    Am.Name =
    Am.nil =
    Am.stringify =
    Am.str =
    Am._ =
    Am.KeywordCxt =
    Am.Ajv =
      void 0;
  var k1s = dhn(),
    O1s = m3n(),
    N1s = h3n(),
    b3n = g3n(),
    P1s = ["/properties"],
    iYe = "http://json-schema.org/draft-07/schema",
    Goe = class extends k1s.default {
      _addVocabularies() {
        (super._addVocabularies(),
          O1s.default.forEach((e) => this.addVocabulary(e)),
          this.opts.discriminator && this.addKeyword(N1s.default));
      }
      _addDefaultMetaSchema() {
        if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
        let e = this.opts.$data ? this.$dataMetaSchema(b3n, P1s) : b3n;
        (this.addMetaSchema(e, iYe, !1), (this.refs["http://json-schema.org/schema"] = iYe));
      }
      defaultMeta() {
        return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(iYe) ? iYe : void 0));
      }
    };
  Am.Ajv = Goe;
  eUt.exports = Am = Goe;
  eUt.exports.Ajv = Goe;
  Object.defineProperty(Am, "__esModule", { value: !0 });
  Am.default = Goe;
  var B1s = s8e();
  Object.defineProperty(Am, "KeywordCxt", {
    enumerable: !0,
    get: function () {
      return B1s.KeywordCxt;
    },
  });
  var qoe = Ha();
  Object.defineProperty(Am, "_", {
    enumerable: !0,
    get: function () {
      return qoe._;
    },
  });
  Object.defineProperty(Am, "str", {
    enumerable: !0,
    get: function () {
      return qoe.str;
    },
  });
  Object.defineProperty(Am, "stringify", {
    enumerable: !0,
    get: function () {
      return qoe.stringify;
    },
  });
  Object.defineProperty(Am, "nil", {
    enumerable: !0,
    get: function () {
      return qoe.nil;
    },
  });
  Object.defineProperty(Am, "Name", {
    enumerable: !0,
    get: function () {
      return qoe.Name;
    },
  });
  Object.defineProperty(Am, "CodeGen", {
    enumerable: !0,
    get: function () {
      return qoe.CodeGen;
    },
  });
  var L1s = Bze();
  Object.defineProperty(Am, "ValidationError", {
    enumerable: !0,
    get: function () {
      return L1s.default;
    },
  });
  var M1s = a8e();
  Object.defineProperty(Am, "MissingRefError", {
    enumerable: !0,
    get: function () {
      return M1s.default;
    },
  });
});