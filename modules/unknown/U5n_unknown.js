/**
 * @module U5n
 * @category unknown
 * @label unknown
 * @position 892 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (U5n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var U5n = T((Jic, $5s) => {
  $5s.exports = {
    $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
    description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
    type: "object",
    required: ["$data"],
    properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } },
    additionalProperties: !1,
  };
});