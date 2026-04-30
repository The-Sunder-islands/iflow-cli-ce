/**
 * @module kTn
 * @category unknown
 * @label unknown
 * @position 1119 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kTn = T((RTn) => {
  var _xs = nzt(),
    Exs = _xs.RegexTokeniser;
  RTn.tokenise = vxs;
  var ITn = "'((?:\\\\.|[^'])*)";
  function vxs(t) {
    var e = "(?:[a-zA-Z\\-_]|\\\\.)",
      r = new Exs([
        { name: "identifier", regex: new RegExp("(" + e + "(?:" + e + "|[0-9])*)") },
        { name: "dot", regex: /\./ },
        { name: "colon", regex: /:/ },
        { name: "gt", regex: />/ },
        { name: "whitespace", regex: /\s+/ },
        { name: "arrow", regex: /=>/ },
        { name: "equals", regex: /=/ },
        { name: "startsWith", regex: /\^=/ },
        { name: "open-paren", regex: /\(/ },
        { name: "close-paren", regex: /\)/ },
        { name: "open-square-bracket", regex: /\[/ },
        { name: "close-square-bracket", regex: /\]/ },
        { name: "string", regex: new RegExp(ITn + "'") },
        { name: "unterminated-string", regex: new RegExp(ITn) },
        { name: "integer", regex: /([0-9]+)/ },
        { name: "choice", regex: /\|/ },
        { name: "bang", regex: /(!)/ },
      ]);
    return r.tokenise(t);
  }
});