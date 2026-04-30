/**
 * @module Gkr
 * @category utils/fs
 * @label fs
 * @position 102 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gkr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gkr = T((zke) => {
  "use strict";
  var Yyt, Kyt, Jyt;
  Object.defineProperty(zke, "__esModule", { value: !0 });
  zke.FileSubjectTokenSupplier = void 0;
  var Zyt = Ae("util"),
    e_t = Ae("fs"),
    x3o = (0, Zyt.promisify)((Yyt = e_t.readFile) !== null && Yyt !== void 0 ? Yyt : () => {}),
    T3o = (0, Zyt.promisify)((Kyt = e_t.realpath) !== null && Kyt !== void 0 ? Kyt : () => {}),
    D3o = (0, Zyt.promisify)((Jyt = e_t.lstat) !== null && Jyt !== void 0 ? Jyt : () => {}),
    Xyt = class {
      constructor(e) {
        ((this.filePath = e.filePath),
          (this.formatType = e.formatType),
          (this.subjectTokenFieldName = e.subjectTokenFieldName));
      }
      async getSubjectToken(e) {
        let r = this.filePath;
        try {
          if (((r = await T3o(r)), !(await D3o(r)).isFile())) throw new Error();
        } catch (s) {
          throw (
            s instanceof Error && (s.message = `The file at ${r} does not exist, or it is not a file. ${s.message}`),
            s
          );
        }
        let n,
          o = await x3o(r, { encoding: "utf8" });
        if (
          (this.formatType === "text"
            ? (n = o)
            : this.formatType === "json" &&
              this.subjectTokenFieldName &&
              (n = JSON.parse(o)[this.subjectTokenFieldName]),
          !n)
        )
          throw new Error("Unable to parse the subject_token from the credential_source file");
        return n;
      }
    };
  zke.FileSubjectTokenSupplier = Xyt;
});