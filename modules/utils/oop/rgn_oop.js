/**
 * @module rgn
 * @category utils/oop
 * @label oop
 * @position 809 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rgn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rgn = T((vM) => {
  "use strict";
  Object.defineProperty(vM, "__esModule", { value: !0 });
  vM.extendSubschemaMode = vM.extendSubschemaData = vM.getSubschema = void 0;
  var PT = _a(),
    tgn = nc();
  function Aps(t, { keyword: e, schemaProp: r, schema: n, schemaPath: o, errSchemaPath: s, topSchemaRef: a }) {
    if (e !== void 0 && n !== void 0) throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (e !== void 0) {
      let u = t.schema[e];
      return r === void 0
        ? {
            schema: u,
            schemaPath: (0, PT._)`${t.schemaPath}${(0, PT.getProperty)(e)}`,
            errSchemaPath: `${t.errSchemaPath}/${e}`,
          }
        : {
            schema: u[r],
            schemaPath: (0, PT._)`${t.schemaPath}${(0, PT.getProperty)(e)}${(0, PT.getProperty)(r)}`,
            errSchemaPath: `${t.errSchemaPath}/${e}/${(0, tgn.escapeFragment)(r)}`,
          };
    }
    if (n !== void 0) {
      if (o === void 0 || s === void 0 || a === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return { schema: n, schemaPath: o, topSchemaRef: a, errSchemaPath: s };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  vM.getSubschema = Aps;
  function yps(t, e, { dataProp: r, dataPropType: n, data: o, dataTypes: s, propertyName: a }) {
    if (o !== void 0 && r !== void 0) throw new Error('both "data" and "dataProp" passed, only one allowed');
    let { gen: u } = e;
    if (r !== void 0) {
      let { errorPath: m, dataPathArr: d, opts: f } = e,
        p = u.let("data", (0, PT._)`${e.data}${(0, PT.getProperty)(r)}`, !0);
      (c(p),
        (t.errorPath = (0, PT.str)`${m}${(0, tgn.getErrorPath)(r, n, f.jsPropertySyntax)}`),
        (t.parentDataProperty = (0, PT._)`${r}`),
        (t.dataPathArr = [...d, t.parentDataProperty]));
    }
    if (o !== void 0) {
      let m = o instanceof PT.Name ? o : u.let("data", o, !0);
      (c(m), a !== void 0 && (t.propertyName = a));
    }
    s && (t.dataTypes = s);
    function c(m) {
      ((t.data = m),
        (t.dataLevel = e.dataLevel + 1),
        (t.dataTypes = []),
        (e.definedProperties = new Set()),
        (t.parentData = e.data),
        (t.dataNames = [...e.dataNames, m]));
    }
  }
  vM.extendSubschemaData = yps;
  function _ps(t, { jtdDiscriminator: e, jtdMetadata: r, compositeRule: n, createErrors: o, allErrors: s }) {
    (n !== void 0 && (t.compositeRule = n),
      o !== void 0 && (t.createErrors = o),
      s !== void 0 && (t.allErrors = s),
      (t.jtdDiscriminator = e),
      (t.jtdMetadata = r));
  }
  vM.extendSubschemaMode = _ps;
});