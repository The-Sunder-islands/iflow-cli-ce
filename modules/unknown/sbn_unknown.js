/**
 * @module sbn
 * @category unknown
 * @label unknown
 * @position 835 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sbn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sbn = T((g$t) => {
  "use strict";
  Object.defineProperty(g$t, "__esModule", { value: !0 });
  var obn = _a(),
    I3s = nc(),
    R3s = pE(),
    k3s = f$t(),
    O3s = {
      message: ({ params: { len: t } }) => (0, obn.str)`must NOT have more than ${t} items`,
      params: ({ params: { len: t } }) => (0, obn._)`{limit: ${t}}`,
    },
    N3s = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: O3s,
      code(t) {
        let { schema: e, parentSchema: r, it: n } = t,
          { prefixItems: o } = r;
        ((n.items = !0),
          !(0, I3s.alwaysValidSchema)(n, e) &&
            (o ? (0, k3s.validateAdditionalItems)(t, o) : t.ok((0, R3s.validateArray)(t))));
      },
    };
  g$t.default = N3s;
});