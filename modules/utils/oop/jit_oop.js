/**
 * @module jit
 * @category utils/oop
 * @label oop
 * @position 1501 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jit) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jit = T((jvc, gJn) => {
  "use strict";
  var { iteratorMixin: lua } = z6(),
    { kEnumerableProperty: sle } = ks(),
    { webidl: Vc } = jg(),
    hJn = Ae("node:util"),
    BO = class t {
      #e = [];
      constructor(e = void 0) {
        if ((Vc.util.markAsUncloneable(this), e !== void 0))
          throw Vc.errors.conversionFailed({
            prefix: "FormData constructor",
            argument: "Argument 1",
            types: ["undefined"],
          });
      }
      append(e, r, n = void 0) {
        Vc.brandCheck(this, t);
        let o = "FormData.append";
        (Vc.argumentLengthCheck(arguments, 2, o),
          (e = Vc.converters.USVString(e)),
          arguments.length === 3 || Vc.is.Blob(r)
            ? ((r = Vc.converters.Blob(r, o, "value")), n !== void 0 && (n = Vc.converters.USVString(n)))
            : (r = Vc.converters.USVString(r)));
        let s = Vsr(e, r, n);
        this.#e.push(s);
      }
      delete(e) {
        (Vc.brandCheck(this, t),
          Vc.argumentLengthCheck(arguments, 1, "FormData.delete"),
          (e = Vc.converters.USVString(e)),
          (this.#e = this.#e.filter((n) => n.name !== e)));
      }
      get(e) {
        (Vc.brandCheck(this, t),
          Vc.argumentLengthCheck(arguments, 1, "FormData.get"),
          (e = Vc.converters.USVString(e)));
        let n = this.#e.findIndex((o) => o.name === e);
        return n === -1 ? null : this.#e[n].value;
      }
      getAll(e) {
        return (
          Vc.brandCheck(this, t),
          Vc.argumentLengthCheck(arguments, 1, "FormData.getAll"),
          (e = Vc.converters.USVString(e)),
          this.#e.filter((n) => n.name === e).map((n) => n.value)
        );
      }
      has(e) {
        return (
          Vc.brandCheck(this, t),
          Vc.argumentLengthCheck(arguments, 1, "FormData.has"),
          (e = Vc.converters.USVString(e)),
          this.#e.findIndex((n) => n.name === e) !== -1
        );
      }
      set(e, r, n = void 0) {
        Vc.brandCheck(this, t);
        let o = "FormData.set";
        (Vc.argumentLengthCheck(arguments, 2, o),
          (e = Vc.converters.USVString(e)),
          arguments.length === 3 || Vc.is.Blob(r)
            ? ((r = Vc.converters.Blob(r, o, "value")), n !== void 0 && (n = Vc.converters.USVString(n)))
            : (r = Vc.converters.USVString(r)));
        let s = Vsr(e, r, n),
          a = this.#e.findIndex((u) => u.name === e);
        a !== -1
          ? (this.#e = [...this.#e.slice(0, a), s, ...this.#e.slice(a + 1).filter((u) => u.name !== e)])
          : this.#e.push(s);
      }
      [hJn.inspect.custom](e, r) {
        let n = this.#e.reduce(
          (s, a) => (
            s[a.name]
              ? Array.isArray(s[a.name])
                ? s[a.name].push(a.value)
                : (s[a.name] = [s[a.name], a.value])
              : (s[a.name] = a.value),
            s
          ),
          { __proto__: null },
        );
        ((r.depth ??= e), (r.colors ??= !0));
        let o = hJn.formatWithOptions(r, n);
        return `FormData ${o.slice(o.indexOf("]") + 2)}`;
      }
      static getFormDataState(e) {
        return e.#e;
      }
      static setFormDataState(e, r) {
        e.#e = r;
      }
    },
    { getFormDataState: mua, setFormDataState: dua } = BO;
  Reflect.deleteProperty(BO, "getFormDataState");
  Reflect.deleteProperty(BO, "setFormDataState");
  lua("FormData", BO, mua, "name", "value");
  Object.defineProperties(BO.prototype, {
    append: sle,
    delete: sle,
    get: sle,
    getAll: sle,
    has: sle,
    set: sle,
    [Symbol.toStringTag]: { value: "FormData", configurable: !0 },
  });
  function Vsr(t, e, r) {
    if (typeof e != "string") {
      if ((Vc.is.File(e) || (e = new File([e], "blob", { type: e.type })), r !== void 0)) {
        let n = { type: e.type, lastModified: e.lastModified };
        e = new File([e], r, n);
      }
    }
    return { name: t, value: e };
  }
  Vc.is.FormData = Vc.util.MakeTypeAssertion(BO);
  gJn.exports = { FormData: BO, makeEntry: Vsr, setFormDataState: dua };
});