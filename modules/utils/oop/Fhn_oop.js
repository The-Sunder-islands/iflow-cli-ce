/**
 * @module Fhn
 * @category utils/oop
 * @label oop
 * @position 773 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fhn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fhn = T((NFt) => {
  "use strict";
  Object.defineProperty(NFt, "__esModule", { value: !0 });
  var Mhn = Ha(),
    vds = tc(),
    Cds = lE(),
    Sds = RFt(),
    wds = {
      message: ({ params: { len: t } }) => (0, Mhn.str)`must NOT have more than ${t} items`,
      params: ({ params: { len: t } }) => (0, Mhn._)`{limit: ${t}}`,
    },
    xds = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: wds,
      code(t) {
        let { schema: e, parentSchema: r, it: n } = t,
          { prefixItems: o } = r;
        ((n.items = !0),
          !(0, vds.alwaysValidSchema)(n, e) &&
            (o ? (0, Sds.validateAdditionalItems)(t, o) : t.ok((0, Cds.validateArray)(t))));
      },
    };
  NFt.default = xds;
});