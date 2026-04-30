/**
 * @module vqi
 * @category system/sandbox
 * @label sandbox
 * @position 1888 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vqi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vqi = T((_1l, Eqi) => {
  "use strict";
  var ngt = Object.assign({}, yqi()),
    _qi = Object.keys(ngt);
  Object.defineProperty(ngt, "random", {
    get() {
      let t = Math.floor(Math.random() * _qi.length),
        e = _qi[t];
      return ngt[e];
    },
  });
  Eqi.exports = ngt;
});
var qTe,
  nyr = j(() => {
    "use strict";
    qTe = {
      cursor: "Cursor",
      emacs: "Emacs",
      neovim: "Neovim",
      vim: "Vim",
      vscode: "VS Code",
      vscodium: "VSCodium",
      windsurf: "Windsurf",
      zed: "Zed",
    };
  });
var Iqi = {};
Wi(Iqi, { editorSettingsManager: () => Hcu });
var iyr,
  Hcu,
  Rqi = j(() => {
    "use strict";
    Ot();
    nyr();
    ((iyr = class {
      availableEditors;
      constructor() {
        let e = Object.keys(qTe).sort();
        this.availableEditors = [
          { name: "None", type: "not_set", disabled: !1 },
          ...e.map((r) => {
            let n = E0e(r),
              o = v0e(r),
              s = o ? "" : " (Not available in sandbox)";
            return ((s = n ? s : " (Not installed)"), { name: qTe[r] + s, type: r, disabled: !n || !o });
          }),
        ];
      }
      getAvailableEditorDisplays() {
        return this.availableEditors;
      }
    }),
      (Hcu = new iyr()));
  });