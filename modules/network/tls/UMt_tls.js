/**
 * @module UMt
 * @category network/tls
 * @label tls
 * @position 735 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UMt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UMt = T((Poe) => {
  "use strict";
  Object.defineProperty(Poe, "__esModule", { value: !0 });
  Poe.getRules = Poe.isJSONType = void 0;
  var Xcs = ["string", "number", "integer", "boolean", "null", "object", "array"],
    Zcs = new Set(Xcs);
  function els(t) {
    return typeof t == "string" && Zcs.has(t);
  }
  Poe.isJSONType = els;
  function tls() {
    let t = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] },
    };
    return {
      types: { ...t, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, t.number, t.string, t.array, t.object],
      post: { rules: [] },
      all: {},
      keywords: {},
    };
  }
  Poe.getRules = tls;
});
var $Mt = T((fM) => {
  "use strict";
  Object.defineProperty(fM, "__esModule", { value: !0 });
  fM.shouldUseRule = fM.shouldUseGroup = fM.schemaHasRulesForType = void 0;
  function rls({ schema: t, self: e }, r) {
    let n = e.RULES.types[r];
    return n && n !== !0 && cpn(t, n);
  }
  fM.schemaHasRulesForType = rls;
  function cpn(t, e) {
    return e.rules.some((r) => lpn(t, r));
  }
  fM.shouldUseGroup = cpn;
  function lpn(t, e) {
    var r;
    return (
      t[e.keyword] !== void 0 ||
      ((r = e.definition.implements) === null || r === void 0 ? void 0 : r.some((n) => t[n] !== void 0))
    );
  }
  fM.shouldUseRule = lpn;
});