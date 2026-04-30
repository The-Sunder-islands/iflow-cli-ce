/**
 * @module e5
 * @category utils/fs
 * @label fs
 * @position 1636 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (e5) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var e5 = T((gN) => {
  "use strict";
  var mfi = d3().fromCallback,
    Z2 = rf(),
    TSa = [
      "access",
      "appendFile",
      "chmod",
      "chown",
      "close",
      "copyFile",
      "cp",
      "fchmod",
      "fchown",
      "fdatasync",
      "fstat",
      "fsync",
      "ftruncate",
      "futimes",
      "glob",
      "lchmod",
      "lchown",
      "lutimes",
      "link",
      "lstat",
      "mkdir",
      "mkdtemp",
      "open",
      "opendir",
      "readdir",
      "readFile",
      "readlink",
      "realpath",
      "rename",
      "rm",
      "rmdir",
      "stat",
      "statfs",
      "symlink",
      "truncate",
      "unlink",
      "utimes",
      "writeFile",
    ].filter((t) => typeof Z2[t] == "function");
  Object.assign(gN, Z2);
  TSa.forEach((t) => {
    gN[t] = mfi(Z2[t]);
  });
  gN.exists = function (t, e) {
    return typeof e == "function" ? Z2.exists(t, e) : new Promise((r) => Z2.exists(t, r));
  };
  gN.read = function (t, e, r, n, o, s) {
    return typeof s == "function"
      ? Z2.read(t, e, r, n, o, s)
      : new Promise((a, u) => {
          Z2.read(t, e, r, n, o, (c, m, d) => {
            if (c) return u(c);
            a({ bytesRead: m, buffer: d });
          });
        });
  };
  gN.write = function (t, e, ...r) {
    return typeof r[r.length - 1] == "function"
      ? Z2.write(t, e, ...r)
      : new Promise((n, o) => {
          Z2.write(t, e, ...r, (s, a, u) => {
            if (s) return o(s);
            n({ bytesWritten: a, buffer: u });
          });
        });
  };
  gN.readv = function (t, e, ...r) {
    return typeof r[r.length - 1] == "function"
      ? Z2.readv(t, e, ...r)
      : new Promise((n, o) => {
          Z2.readv(t, e, ...r, (s, a, u) => {
            if (s) return o(s);
            n({ bytesRead: a, buffers: u });
          });
        });
  };
  gN.writev = function (t, e, ...r) {
    return typeof r[r.length - 1] == "function"
      ? Z2.writev(t, e, ...r)
      : new Promise((n, o) => {
          Z2.writev(t, e, ...r, (s, a, u) => {
            if (s) return o(s);
            n({ bytesWritten: a, buffers: u });
          });
        });
  };
  typeof Z2.realpath.native == "function"
    ? (gN.realpath.native = mfi(Z2.realpath.native))
    : process.emitWarning(
        "fs.realpath.native is not a function. Is fs being monkey-patched?",
        "Warning",
        "fs-extra-WARN0003",
      );
});