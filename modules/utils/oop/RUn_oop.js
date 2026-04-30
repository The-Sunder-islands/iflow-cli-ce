/**
 * @module RUn
 * @category utils/oop
 * @label oop
 * @position 1372 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RUn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RUn = T((DUn, IUn) => {
  var hzs = Ae("util"),
    gzs = {
      ABORTED: "archive was aborted",
      DIRECTORYDIRPATHREQUIRED: "diretory dirpath argument must be a non-empty string value",
      DIRECTORYFUNCTIONINVALIDDATA: "invalid data returned by directory custom data function",
      ENTRYNAMEREQUIRED: "entry name must be a non-empty string value",
      FILEFILEPATHREQUIRED: "file filepath argument must be a non-empty string value",
      FINALIZING: "archive already finalizing",
      QUEUECLOSED: "queue closed",
      NOENDMETHOD: "no suitable finalize/end method defined by module",
      DIRECTORYNOTSUPPORTED: "support for directory entries not defined by module",
      FORMATSET: "archive format already set",
      INPUTSTEAMBUFFERREQUIRED: "input source must be valid Stream or Buffer instance",
      MODULESET: "module already set",
      SYMLINKNOTSUPPORTED: "support for symlink entries not defined by module",
      SYMLINKFILEPATHREQUIRED: "symlink filepath argument must be a non-empty string value",
      SYMLINKTARGETREQUIRED: "symlink target argument must be a non-empty string value",
      ENTRYNOTSUPPORTED: "entry not supported",
    };
  function TUn(t, e) {
    (Error.captureStackTrace(this, this.constructor), (this.message = gzs[t] || t), (this.code = t), (this.data = e));
  }
  hzs.inherits(TUn, Error);
  DUn = IUn.exports = TUn;
});