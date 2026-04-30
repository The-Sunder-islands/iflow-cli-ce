/**
 * @module E8n
 * @category utils/oop
 * @label oop
 * @position 914 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (E8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var E8n = T((qQt) => {
  "use strict";
  Object.defineProperty(qQt, "__esModule", { value: !0 });
  var _8n = za(),
    a9s = sc(),
    u9s = yE(),
    c9s = jQt(),
    l9s = {
      message: ({ params: { len: t } }) => (0, _8n.str)`must NOT have more than ${t} items`,
      params: ({ params: { len: t } }) => (0, _8n._)`{limit: ${t}}`,
    },
    m9s = {
      keyword: "items",
      type: "array",
      schemaType: ["object", "boolean"],
      before: "uniqueItems",
      error: l9s,
      code(t) {
        let { schema: e, parentSchema: r, it: n } = t,
          { prefixItems: o } = r;
        ((n.items = !0),
          !(0, a9s.alwaysValidSchema)(n, e) &&
            (o ? (0, c9s.validateAdditionalItems)(t, o) : t.ok((0, u9s.validateArray)(t))));
      },
    };
  qQt.default = m9s;
});