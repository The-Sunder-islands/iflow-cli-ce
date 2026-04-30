/**
 * @module w1e
 * @category unknown
 * @label unknown
 * @position 1860 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (w1e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var w1e = T((kI, F$i) => {
  "use strict";
  var { MAX_SAFE_COMPONENT_LENGTH: J9r, MAX_SAFE_BUILD_LENGTH: Qou, MAX_LENGTH: Gou } = xTe(),
    qou = wTe();
  kI = F$i.exports = {};
  var Hou = (kI.re = []),
    Vou = (kI.safeRe = []),
    mi = (kI.src = []),
    Wou = (kI.safeSrc = []),
    di = (kI.t = {}),
    zou = 0,
    X9r = "[a-zA-Z0-9-]",
    You = [
      ["\\s", 1],
      ["\\d", Gou],
      [X9r, Qou],
    ],
    Kou = (t) => {
      for (let [e, r] of You) t = t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);
      return t;
    },
    $s = (t, e, r) => {
      let n = Kou(e),
        o = zou++;
      (qou(t, o, e),
        (di[t] = o),
        (mi[o] = e),
        (Wou[o] = n),
        (Hou[o] = new RegExp(e, r ? "g" : void 0)),
        (Vou[o] = new RegExp(n, r ? "g" : void 0)));
    };
  $s("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  $s("NUMERICIDENTIFIERLOOSE", "\\d+");
  $s("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${X9r}*`);
  $s("MAINVERSION", `(${mi[di.NUMERICIDENTIFIER]})\\.(${mi[di.NUMERICIDENTIFIER]})\\.(${mi[di.NUMERICIDENTIFIER]})`);
  $s(
    "MAINVERSIONLOOSE",
    `(${mi[di.NUMERICIDENTIFIERLOOSE]})\\.(${mi[di.NUMERICIDENTIFIERLOOSE]})\\.(${mi[di.NUMERICIDENTIFIERLOOSE]})`,
  );
  $s("PRERELEASEIDENTIFIER", `(?:${mi[di.NONNUMERICIDENTIFIER]}|${mi[di.NUMERICIDENTIFIER]})`);
  $s("PRERELEASEIDENTIFIERLOOSE", `(?:${mi[di.NONNUMERICIDENTIFIER]}|${mi[di.NUMERICIDENTIFIERLOOSE]})`);
  $s("PRERELEASE", `(?:-(${mi[di.PRERELEASEIDENTIFIER]}(?:\\.${mi[di.PRERELEASEIDENTIFIER]})*))`);
  $s("PRERELEASELOOSE", `(?:-?(${mi[di.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${mi[di.PRERELEASEIDENTIFIERLOOSE]})*))`);
  $s("BUILDIDENTIFIER", `${X9r}+`);
  $s("BUILD", `(?:\\+(${mi[di.BUILDIDENTIFIER]}(?:\\.${mi[di.BUILDIDENTIFIER]})*))`);
  $s("FULLPLAIN", `v?${mi[di.MAINVERSION]}${mi[di.PRERELEASE]}?${mi[di.BUILD]}?`);
  $s("FULL", `^${mi[di.FULLPLAIN]}$`);
  $s("LOOSEPLAIN", `[v=\\s]*${mi[di.MAINVERSIONLOOSE]}${mi[di.PRERELEASELOOSE]}?${mi[di.BUILD]}?`);
  $s("LOOSE", `^${mi[di.LOOSEPLAIN]}$`);
  $s("GTLT", "((?:<|>)?=?)");
  $s("XRANGEIDENTIFIERLOOSE", `${mi[di.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  $s("XRANGEIDENTIFIER", `${mi[di.NUMERICIDENTIFIER]}|x|X|\\*`);
  $s(
    "XRANGEPLAIN",
    `[v=\\s]*(${mi[di.XRANGEIDENTIFIER]})(?:\\.(${mi[di.XRANGEIDENTIFIER]})(?:\\.(${mi[di.XRANGEIDENTIFIER]})(?:${mi[di.PRERELEASE]})?${mi[di.BUILD]}?)?)?`,
  );
  $s(
    "XRANGEPLAINLOOSE",
    `[v=\\s]*(${mi[di.XRANGEIDENTIFIERLOOSE]})(?:\\.(${mi[di.XRANGEIDENTIFIERLOOSE]})(?:\\.(${mi[di.XRANGEIDENTIFIERLOOSE]})(?:${mi[di.PRERELEASELOOSE]})?${mi[di.BUILD]}?)?)?`,
  );
  $s("XRANGE", `^${mi[di.GTLT]}\\s*${mi[di.XRANGEPLAIN]}$`);
  $s("XRANGELOOSE", `^${mi[di.GTLT]}\\s*${mi[di.XRANGEPLAINLOOSE]}$`);
  $s("COERCEPLAIN", `(^|[^\\d])(\\d{1,${J9r}})(?:\\.(\\d{1,${J9r}}))?(?:\\.(\\d{1,${J9r}}))?`);
  $s("COERCE", `${mi[di.COERCEPLAIN]}(?:$|[^\\d])`);
  $s("COERCEFULL", mi[di.COERCEPLAIN] + `(?:${mi[di.PRERELEASE]})?(?:${mi[di.BUILD]})?(?:$|[^\\d])`);
  $s("COERCERTL", mi[di.COERCE], !0);
  $s("COERCERTLFULL", mi[di.COERCEFULL], !0);
  $s("LONETILDE", "(?:~>?)");
  $s("TILDETRIM", `(\\s*)${mi[di.LONETILDE]}\\s+`, !0);
  kI.tildeTrimReplace = "$1~";
  $s("TILDE", `^${mi[di.LONETILDE]}${mi[di.XRANGEPLAIN]}$`);
  $s("TILDELOOSE", `^${mi[di.LONETILDE]}${mi[di.XRANGEPLAINLOOSE]}$`);
  $s("LONECARET", "(?:\\^)");
  $s("CARETTRIM", `(\\s*)${mi[di.LONECARET]}\\s+`, !0);
  kI.caretTrimReplace = "$1^";
  $s("CARET", `^${mi[di.LONECARET]}${mi[di.XRANGEPLAIN]}$`);
  $s("CARETLOOSE", `^${mi[di.LONECARET]}${mi[di.XRANGEPLAINLOOSE]}$`);
  $s("COMPARATORLOOSE", `^${mi[di.GTLT]}\\s*(${mi[di.LOOSEPLAIN]})$|^$`);
  $s("COMPARATOR", `^${mi[di.GTLT]}\\s*(${mi[di.FULLPLAIN]})$|^$`);
  $s("COMPARATORTRIM", `(\\s*)${mi[di.GTLT]}\\s*(${mi[di.LOOSEPLAIN]}|${mi[di.XRANGEPLAIN]})`, !0);
  kI.comparatorTrimReplace = "$1$2$3";
  $s("HYPHENRANGE", `^\\s*(${mi[di.XRANGEPLAIN]})\\s+-\\s+(${mi[di.XRANGEPLAIN]})\\s*$`);
  $s("HYPHENRANGELOOSE", `^\\s*(${mi[di.XRANGEPLAINLOOSE]})\\s+-\\s+(${mi[di.XRANGEPLAINLOOSE]})\\s*$`);
  $s("STAR", "(<|>)?=?\\s*\\*");
  $s("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  $s("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});