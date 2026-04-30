/**
 * @module MZr
 * @category utils/oop
 * @label oop
 * @position 471 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (MZr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var MZr = T((aMu, LZr) => {
  "use strict";
  var Uu = (LZr.exports = jvt());
  Uu.build = "light";
  function tUo(t, e, r) {
    return (typeof e == "function" ? ((r = e), (e = new Uu.Root())) : e || (e = new Uu.Root()), e.load(t, r));
  }
  Uu.load = tUo;
  function rUo(t, e) {
    return (e || (e = new Uu.Root()), e.loadSync(t));
  }
  Uu.loadSync = rUo;
  Uu.encoder = dTt();
  Uu.decoder = tTt();
  Uu.verifier = iTt();
  Uu.converter = aTt();
  Uu.ReflectionObject = GB();
  Uu.Namespace = Mre();
  Uu.Root = eUe();
  Uu.Enum = XC();
  Uu.Type = KFe();
  Uu.Field = QB();
  Uu.OneOf = bq();
  Uu.MapField = qFe();
  Uu.Service = VFe();
  Uu.Method = HFe();
  Uu.Message = WFe();
  Uu.wrappers = uTt();
  Uu.types = Aq();
  Uu.util = Bh();
  Uu.ReflectionObject._configure(Uu.Root);
  Uu.Namespace._configure(Uu.Type, Uu.Service, Uu.Enum);
  Uu.Root._configure(Uu.Type);
  Uu.Field._configure(Uu.Type);
});