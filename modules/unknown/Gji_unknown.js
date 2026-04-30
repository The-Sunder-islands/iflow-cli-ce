/**
 * @module Gji
 * @category unknown
 * @label unknown
 * @position 1882 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gji = T((iul, Qji) => {
  Qji.exports = $ji;
  var g6r = Bji();
  $ji.fixer = g6r;
  var tau = Uji(),
    rau = [
      "name",
      "version",
      "description",
      "repository",
      "modules",
      "scripts",
      "files",
      "bin",
      "man",
      "bugs",
      "keywords",
      "readme",
      "homepage",
      "license",
    ],
    nau = ["dependencies", "people", "typos"],
    b6r = rau.map(function (t) {
      return jji(t) + "Field";
    });
  b6r = b6r.concat(nau);
  function $ji(t, e, r) {
    (e === !0 && ((e = null), (r = !0)),
      r || (r = !1),
      (!e || t.private) && (e = function () {}),
      t.scripts && t.scripts.install === "node-gyp rebuild" && !t.scripts.preinstall && (t.gypfile = !0),
      (g6r.warn = function () {
        e(tau.apply(null, arguments));
      }),
      b6r.forEach(function (n) {
        g6r["fix" + jji(n)](t, r);
      }),
      (t._id = t.name + "@" + t.version));
  }
  function jji(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
});
var qji = j(() => {});
import { fileURLToPath as iau } from "node:url";
function Hji(t) {
  return t instanceof URL ? iau(t) : t;
}
var Vji = j(() => {
  qji();
});
import oau from "node:fs/promises";
import sau from "node:path";
async function zji({ cwd: t, normalize: e = !0 } = {}) {
  let r = await oau.readFile(aau(t), "utf8");
  return uau(r, e);
}
var Wji,
  aau,
  uau,
  Yji = j(() => {
    B$i();
    Wji = Se(Gji(), 1);
    Vji();
    ((aau = (t) => sau.resolve(Hji(t) ?? ".", "package.json")),
      (uau = (t, e) => {
        let r = typeof t == "string" ? K9r(t) : t;
        return (e && (0, Wji.default)(r), r);
      }));
  });
import cau from "node:path";
async function Kji(t) {
  let e = await a$i("package.json", t);
  if (e) return { packageJson: await zji({ ...t, cwd: cau.dirname(e) }), path: e };
}
var Jji = j(() => {
  u$i();
  Yji();
});
import { fileURLToPath as lau } from "url";
import mau from "path";
async function vj() {
  if (k3t) return k3t;
  let t = await Kji({ cwd: fau });
  if (t) return ((k3t = t.packageJson), k3t);
}
var dau,
  fau,
  k3t,
  TTe = j(() => {
    "use strict";
    Jji();
    ((dau = lau(import.meta.url)), (fau = mau.dirname(dau)));
  });
async function uw() {
  let t = await vj();
  return "0.5.19";
}
var D1e = j(() => {
  "use strict";
  TTe();
});