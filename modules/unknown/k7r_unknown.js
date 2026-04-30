/**
 * @module k7r
 * @category unknown
 * @label unknown
 * @position 54 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (k7r) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var k7r = T((Th, fke) => {
  var ufo = Ae("tty"),
    dke = Ae("util");
  Th.init = hfo;
  Th.log = dfo;
  Th.formatArgs = lfo;
  Th.save = ffo;
  Th.load = pfo;
  Th.useColors = cfo;
  Th.destroy = dke.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  );
  Th.colors = [6, 2, 3, 4, 5, 1];
  try {
    let t = I7r();
    t &&
      (t.stderr || t).level >= 2 &&
      (Th.colors = [
        20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81,
        92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
        171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214,
        215, 220, 221,
      ]);
  } catch {}
  Th.inspectOpts = Object.keys(process.env)
    .filter((t) => /^debug_/i.test(t))
    .reduce((t, e) => {
      let r = e
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (o, s) => s.toUpperCase()),
        n = process.env[e];
      return (
        /^(yes|on|true|enabled)$/i.test(n)
          ? (n = !0)
          : /^(no|off|false|disabled)$/i.test(n)
            ? (n = !1)
            : n === "null"
              ? (n = null)
              : (n = Number(n)),
        (t[r] = n),
        t
      );
    }, {});
  function cfo() {
    return "colors" in Th.inspectOpts ? !!Th.inspectOpts.colors : ufo.isatty(process.stderr.fd);
  }
  function lfo(t) {
    let { namespace: e, useColors: r } = this;
    if (r) {
      let n = this.color,
        o = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
        s = `  ${o};1m${e} \x1B[0m`;
      ((t[0] =
        s +
        t[0]
          .split(
            `
`,
          )
          .join(
            `
` + s,
          )),
        t.push(o + "m+" + fke.exports.humanize(this.diff) + "\x1B[0m"));
    } else t[0] = mfo() + e + " " + t[0];
  }
  function mfo() {
    return Th.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
  }
  function dfo(...t) {
    return process.stderr.write(
      dke.formatWithOptions(Th.inspectOpts, ...t) +
        `
`,
    );
  }
  function ffo(t) {
    t ? (process.env.DEBUG = t) : delete process.env.DEBUG;
  }
  function pfo() {
    return process.env.DEBUG;
  }
  function hfo(t) {
    t.inspectOpts = {};
    let e = Object.keys(Th.inspectOpts);
    for (let r = 0; r < e.length; r++) t.inspectOpts[e[r]] = Th.inspectOpts[e[r]];
  }
  fke.exports = F6t()(Th);
  var { formatters: R7r } = fke.exports;
  R7r.o = function (t) {
    return (
      (this.inspectOpts.colors = this.useColors),
      dke
        .inspect(t, this.inspectOpts)
        .split(
          `
`,
        )
        .map((e) => e.trim())
        .join(" ")
    );
  };
  R7r.O = function (t) {
    return ((this.inspectOpts.colors = this.useColors), dke.inspect(t, this.inspectOpts));
  };
});