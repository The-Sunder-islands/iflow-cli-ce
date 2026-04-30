/**
 * @module f8n
 * @category utils/oop
 * @label oop
 * @position 908 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (f8n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var f8n = T((MQt) => {
  "use strict";
  Object.defineProperty(MQt, "__esModule", { value: !0 });
  var LQt = za(),
    L8s = sc(),
    M8s = DKe(),
    F8s = { message: "must be equal to constant", params: ({ schemaCode: t }) => (0, LQt._)`{allowedValue: ${t}}` },
    U8s = {
      keyword: "const",
      $data: !0,
      error: F8s,
      code(t) {
        let { gen: e, data: r, $data: n, schemaCode: o, schema: s } = t;
        n || (s && typeof s == "object")
          ? t.fail$data((0, LQt._)`!${(0, L8s.useFunc)(e, M8s.default)}(${r}, ${o})`)
          : t.fail((0, LQt._)`${s} !== ${r}`);
      },
    };
  MQt.default = U8s;
});