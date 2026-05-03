/**
 * @module Fno
 * @category app/session
 * @label iflow-session
 * @position 1988 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fno) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t extends Error, class t, class t extends Da, class t extends Da, class t extends Da, class extends, class t extends Da, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class t extends Da, class t extends Da, class extends, class t extends Da, class extends, class t extends Da, class t extends Da, class extends, class t extends Da, class t extends Da, class extends, class extends, class t extends Da, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class extends, class t extends Da, class extends, class extends, class t
 * Functions: AAu, Wno, e, Vno, WAt, EAu, rQ, bAu, na, a, Hno, Bvr, o, dP, r
 * Features: esbuild module exports: Fno, MCP server handling
 * === End semantic info ===
 */


var Fno = T((xvr) => {
  "use strict";
  xvr.parse = Ino();
  xvr.stringify = Mno();
});
var mu,
  Tvr,
  ti,
  o7,
  VDe = j(() => {
    (function (t) {
      t.assertEqual = (o) => {};
      function e(o) {}
      t.assertIs = e;
      function r(o) {
        throw new Error();
      }
      ((t.assertNever = r),
        (t.arrayToEnum = (o) => {
          let s = {};
          for (let a of o) s[a] = a;
          return s;
        }),
        (t.getValidEnumValues = (o) => {
          let s = t.objectKeys(o).filter((u) => typeof o[o[u]] != "number"),
            a = {};
          for (let u of s) a[u] = o[u];
          return t.objectValues(a);
        }),
        (t.objectValues = (o) =>
          t.objectKeys(o).map(function (s) {
            return o[s];
          })),
        (t.objectKeys =
          typeof Object.keys == "function"
            ? (o) => Object.keys(o)
            : (o) => {
                let s = [];
                for (let a in o) Object.prototype.hasOwnProperty.call(o, a) && s.push(a);
                return s;
              }),
        (t.find = (o, s) => {
          for (let a of o) if (s(a)) return a;
        }),
        (t.isInteger =
          typeof Number.isInteger == "function"
            ? (o) => Number.isInteger(o)
            : (o) => typeof o == "number" && Number.isFinite(o) && Math.floor(o) === o));
      function n(o, s = " | ") {
        return o.map((a) => (typeof a == "string" ? `'${a}'` : a)).join(s);
      }
      ((t.joinValues = n), (t.jsonStringifyReplacer = (o, s) => (typeof s == "bigint" ? s.toString() : s)));
    })(mu || (mu = {}));
    (function (t) {
      t.mergeShapes = (e, r) => ({ ...e, ...r });
    })(Tvr || (Tvr = {}));
    ((ti = mu.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set",
    ])),
      (o7 = (t) => {
        switch (typeof t) {
          case "undefined":
            return ti.undefined;
          case "string":
            return ti.string;
          case "number":
            return Number.isNaN(t) ? ti.nan : ti.number;
          case "boolean":
            return ti.boolean;
          case "function":
            return ti.function;
          case "bigint":
            return ti.bigint;
          case "symbol":
            return ti.symbol;
          case "object":
            return Array.isArray(t)
              ? ti.array
              : t === null
                ? ti.null
                : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function"
                  ? ti.promise
                  : typeof Map < "u" && t instanceof Map
                    ? ti.map
                    : typeof Set < "u" && t instanceof Set
                      ? ti.set
                      : typeof Date < "u" && t instanceof Date
                        ? ti.date
                        : ti.object;
          default:
            return ti.unknown;
        }
      }));
  });
var tn,
  Jbu,
  O9,
  OAt = j(() => {
    VDe();
    ((tn = mu.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite",
    ])),
      (Jbu = (t) => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:")),
      (O9 = class t extends Error {
        get errors() {
          return this.issues;
        }
        constructor(e) {
          (super(),
            (this.issues = []),
            (this.addIssue = (n) => {
              this.issues = [...this.issues, n];
            }),
            (this.addIssues = (n = []) => {
              this.issues = [...this.issues, ...n];
            }));
          let r = new.target.prototype;
          (Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : (this.__proto__ = r),
            (this.name = "ZodError"),
            (this.issues = e));
        }
        format(e) {
          let r =
              e ||
              function (s) {
                return s.message;
              },
            n = { _errors: [] },
            o = (s) => {
              for (let a of s.issues)
                if (a.code === "invalid_union") a.unionErrors.map(o);
                else if (a.code === "invalid_return_type") o(a.returnTypeError);
                else if (a.code === "invalid_arguments") o(a.argumentsError);
                else if (a.path.length === 0) n._errors.push(r(a));
                else {
                  let u = n,
                    c = 0;
                  for (; c < a.path.length; ) {
                    let m = a.path[c];
                    (c === a.path.length - 1
                      ? ((u[m] = u[m] || { _errors: [] }), u[m]._errors.push(r(a)))
                      : (u[m] = u[m] || { _errors: [] }),
                      (u = u[m]),
                      c++);
                  }
                }
            };
          return (o(this), n);
        }
        static assert(e) {
          if (!(e instanceof t)) throw new Error(`Not a ZodError: ${e}`);
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, mu.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return this.issues.length === 0;
        }
        flatten(e = (r) => r.message) {
          let r = {},
            n = [];
          for (let o of this.issues)
            if (o.path.length > 0) {
              let s = o.path[0];
              ((r[s] = r[s] || []), r[s].push(e(o)));
            } else n.push(e(o));
          return { formErrors: n, fieldErrors: r };
        }
        get formErrors() {
          return this.flatten();
        }
      }));
    O9.create = (t) => new O9(t);
  });
var Xbu,
  uP,
  Dvr = j(() => {
    OAt();
    VDe();
    ((Xbu = (t, e) => {
      let r;
      switch (t.code) {
        case tn.invalid_type:
          t.received === ti.undefined ? (r = "Required") : (r = `Expected ${t.expected}, received ${t.received}`);
          break;
        case tn.invalid_literal:
          r = `Invalid literal value, expected ${JSON.stringify(t.expected, mu.jsonStringifyReplacer)}`;
          break;
        case tn.unrecognized_keys:
          r = `Unrecognized key(s) in object: ${mu.joinValues(t.keys, ", ")}`;
          break;
        case tn.invalid_union:
          r = "Invalid input";
          break;
        case tn.invalid_union_discriminator:
          r = `Invalid discriminator value. Expected ${mu.joinValues(t.options)}`;
          break;
        case tn.invalid_enum_value:
          r = `Invalid enum value. Expected ${mu.joinValues(t.options)}, received '${t.received}'`;
          break;
        case tn.invalid_arguments:
          r = "Invalid function arguments";
          break;
        case tn.invalid_return_type:
          r = "Invalid function return type";
          break;
        case tn.invalid_date:
          r = "Invalid date";
          break;
        case tn.invalid_string:
          typeof t.validation == "object"
            ? "includes" in t.validation
              ? ((r = `Invalid input: must include "${t.validation.includes}"`),
                typeof t.validation.position == "number" &&
                  (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`))
              : "startsWith" in t.validation
                ? (r = `Invalid input: must start with "${t.validation.startsWith}"`)
                : "endsWith" in t.validation
                  ? (r = `Invalid input: must end with "${t.validation.endsWith}"`)
                  : mu.assertNever(t.validation)
            : t.validation !== "regex"
              ? (r = `Invalid ${t.validation}`)
              : (r = "Invalid");
          break;
        case tn.too_small:
          t.type === "array"
            ? (r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)`)
            : t.type === "string"
              ? (r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)`)
              : t.type === "number"
                ? (r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`)
                : t.type === "bigint"
                  ? (r = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}`)
                  : t.type === "date"
                    ? (r = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}`)
                    : (r = "Invalid input");
          break;
        case tn.too_big:
          t.type === "array"
            ? (r = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)`)
            : t.type === "string"
              ? (r = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)`)
              : t.type === "number"
                ? (r = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
                : t.type === "bigint"
                  ? (r = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}`)
                  : t.type === "date"
                    ? (r = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}`)
                    : (r = "Invalid input");
          break;
        case tn.custom:
          r = "Invalid input";
          break;
        case tn.invalid_intersection_types:
          r = "Intersection results could not be merged";
          break;
        case tn.not_multiple_of:
          r = `Number must be a multiple of ${t.multipleOf}`;
          break;
        case tn.not_finite:
          r = "Number must be finite";
          break;
        default:
          ((r = e.defaultError), mu.assertNever(t));
      }
      return { message: r };
    }),
      (uP = Xbu));
  });
function Zbu(t) {
  Uno = t;
}
function Ffe() {
  return Uno;
}
var Uno,
  NAt = j(() => {
    Dvr();
    Uno = uP;
  });
function Fn(t, e) {
  let r = Ffe(),
    n = WDe({
      issueData: e,
      data: t.data,
      path: t.path,
      errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, r, r === uP ? void 0 : uP].filter((o) => !!o),
    });
  t.common.issues.push(n);
}
var WDe,
  eAu,
  ib,
  ko,
  sX,
  WA,
  PAt,
  BAt,
  Yj,
  Ufe,
  Ivr = j(() => {
    NAt();
    Dvr();
    ((WDe = (t) => {
      let { data: e, path: r, errorMaps: n, issueData: o } = t,
        s = [...r, ...(o.path || [])],
        a = { ...o, path: s };
      if (o.message !== void 0) return { ...o, path: s, message: o.message };
      let u = "",
        c = n
          .filter((m) => !!m)
          .slice()
          .reverse();
      for (let m of c) u = m(a, { data: e, defaultError: u }).message;
      return { ...o, path: s, message: u };
    }),
      (eAu = []));
    ((ib = class t {
      constructor() {
        this.value = "valid";
      }
      dirty() {
        this.value === "valid" && (this.value = "dirty");
      }
      abort() {
        this.value !== "aborted" && (this.value = "aborted");
      }
      static mergeArray(e, r) {
        let n = [];
        for (let o of r) {
          if (o.status === "aborted") return ko;
          (o.status === "dirty" && e.dirty(), n.push(o.value));
        }
        return { status: e.value, value: n };
      }
      static async mergeObjectAsync(e, r) {
        let n = [];
        for (let o of r) {
          let s = await o.key,
            a = await o.value;
          n.push({ key: s, value: a });
        }
        return t.mergeObjectSync(e, n);
      }
      static mergeObjectSync(e, r) {
        let n = {};
        for (let o of r) {
          let { key: s, value: a } = o;
          if (s.status === "aborted" || a.status === "aborted") return ko;
          (s.status === "dirty" && e.dirty(),
            a.status === "dirty" && e.dirty(),
            s.value !== "__proto__" && (typeof a.value < "u" || o.alwaysSet) && (n[s.value] = a.value));
        }
        return { status: e.value, value: n };
      }
    }),
      (ko = Object.freeze({ status: "aborted" })),
      (sX = (t) => ({ status: "dirty", value: t })),
      (WA = (t) => ({ status: "valid", value: t })),
      (PAt = (t) => t.status === "aborted"),
      (BAt = (t) => t.status === "dirty"),
      (Yj = (t) => t.status === "valid"),
      (Ufe = (t) => typeof Promise < "u" && t instanceof Promise));
  });
var $no = j(() => {});
var qi,
  jno = j(() => {
    (function (t) {
      ((t.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
        (t.toString = (e) => (typeof e == "string" ? e : e?.message)));
    })(qi || (qi = {}));
  });
function na(t) {
  if (!t) return {};
  let { errorMap: e, invalid_type_error: r, required_error: n, description: o } = t;
  if (e && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e
    ? { errorMap: e, description: o }
    : {
        errorMap: (a, u) => {
          let { message: c } = t;
          return a.code === "invalid_enum_value"
            ? { message: c ?? u.defaultError }
            : typeof u.data > "u"
              ? { message: c ?? n ?? u.defaultError }
              : a.code !== "invalid_type"
                ? { message: u.defaultError }
                : { message: c ?? r ?? u.defaultError };
        },
        description: o,
      };
}
function Hno(t) {
  let e = "[0-5]\\d";
  t.precision ? (e = `${e}\\.\\d{${t.precision}}`) : t.precision == null && (e = `${e}(\\.\\d+)?`);
  let r = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${r}`;
}
function bAu(t) {
  return new RegExp(`^${Hno(t)}$`);
}
function Vno(t) {
  let e = `${qno}T${Hno(t)}`,
    r = [];
  return (
    r.push(t.local ? "Z?" : "Z"),
    t.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (e = `${e}(${r.join("|")})`),
    new RegExp(`^${e}$`)
  );
}
function AAu(t, e) {
  return !!(((e === "v4" || !e) && lAu.test(t)) || ((e === "v6" || !e) && dAu.test(t)));
}
function yAu(t, e) {
  if (!sAu.test(t)) return !1;
  try {
    let [r] = t.split(".");
    if (!r) return !1;
    let n = r
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
      o = JSON.parse(atob(n));
    return !(typeof o != "object" || o === null || ("typ" in o && o?.typ !== "JWT") || !o.alg || (e && o.alg !== e));
  } catch {
    return !1;
  }
}
function _Au(t, e) {
  return !!(((e === "v4" || !e) && mAu.test(t)) || ((e === "v6" || !e) && fAu.test(t)));
}
function EAu(t, e) {
  let r = (t.toString().split(".")[1] || "").length,
    n = (e.toString().split(".")[1] || "").length,
    o = r > n ? r : n,
    s = Number.parseInt(t.toFixed(o).replace(".", "")),
    a = Number.parseInt(e.toFixed(o).replace(".", ""));
  return (s % a) / 10 ** o;
}
function $fe(t) {
  if (t instanceof N9) {
    let e = {};
    for (let r in t.shape) {
      let n = t.shape[r];
      e[r] = Kv.create($fe(n));
    }
    return new N9({ ...t._def, shape: () => e });
  } else
    return t instanceof mP
      ? new mP({ ...t._def, type: $fe(t.element) })
      : t instanceof Kv
        ? Kv.create($fe(t.unwrap()))
        : t instanceof a7
          ? a7.create($fe(t.unwrap()))
          : t instanceof s7
            ? s7.create(t.items.map((e) => $fe(e)))
            : t;
}
function kvr(t, e) {
  let r = o7(t),
    n = o7(e);
  if (t === e) return { valid: !0, data: t };
  if (r === ti.object && n === ti.object) {
    let o = mu.objectKeys(e),
      s = mu.objectKeys(t).filter((u) => o.indexOf(u) !== -1),
      a = { ...t, ...e };
    for (let u of s) {
      let c = kvr(t[u], e[u]);
      if (!c.valid) return { valid: !1 };
      a[u] = c.data;
    }
    return { valid: !0, data: a };
  } else if (r === ti.array && n === ti.array) {
    if (t.length !== e.length) return { valid: !1 };
    let o = [];
    for (let s = 0; s < t.length; s++) {
      let a = t[s],
        u = e[s],
        c = kvr(a, u);
      if (!c.valid) return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else return r === ti.date && n === ti.date && +t == +e ? { valid: !0, data: t } : { valid: !1 };
}
function Wno(t, e) {
  return new bX({ values: t, typeName: jo.ZodEnum, ...na(e) });
}
function Gno(t, e) {
  let r = typeof t == "function" ? t(e) : typeof t == "string" ? { message: t } : t;
  return typeof r == "string" ? { message: r } : r;
}
function zno(t, e = {}, r) {
  return t
    ? Jj.create().superRefine((n, o) => {
        let s = t(n);
        if (s instanceof Promise)
          return s.then((a) => {
            if (!a) {
              let u = Gno(e, n),
                c = u.fatal ?? r ?? !0;
              o.addIssue({ code: "custom", ...u, fatal: c });
            }
          });
        if (!s) {
          let a = Gno(e, n),
            u = a.fatal ?? r ?? !0;
          o.addIssue({ code: "custom", ...a, fatal: u });
        }
      })
    : Jj.create();
}
var Jv,
  Qno,
  Da,
  tAu,
  rAu,
  nAu,
  iAu,
  oAu,
  sAu,
  aAu,
  uAu,
  cAu,
  Rvr,
  lAu,
  mAu,
  dAu,
  fAu,
  pAu,
  hAu,
  qno,
  gAu,
  Kj,
  aX,
  uX,
  cX,
  lX,
  jfe,
  mX,
  dX,
  Jj,
  lP,
  Cw,
  Qfe,
  mP,
  N9,
  fX,
  cP,
  LAt,
  pX,
  s7,
  MAt,
  Gfe,
  qfe,
  FAt,
  hX,
  gX,
  bX,
  AX,
  Xj,
  Xv,
  Kv,
  a7,
  yX,
  _X,
  Hfe,
  vAu,
  zDe,
  YDe,
  EX,
  CAu,
  jo,
  SAu,
  Yno,
  Kno,
  wAu,
  xAu,
  Jno,
  TAu,
  DAu,
  IAu,
  RAu,
  kAu,
  OAu,
  NAu,
  PAu,
  BAu,
  LAu,
  MAu,
  FAu,
  UAu,
  $Au,
  jAu,
  QAu,
  GAu,
  qAu,
  HAu,
  VAu,
  WAu,
  zAu,
  YAu,
  KAu,
  JAu,
  XAu,
  ZAu,
  e2u,
  t2u,
  r2u,
  n2u,
  i2u,
  o2u,
  s2u,
  Xno = j(() => {
    OAt();
    NAt();
    jno();
    Ivr();
    VDe();
    ((Jv = class {
      constructor(e, r, n, o) {
        ((this._cachedPath = []), (this.parent = e), (this.data = r), (this._path = n), (this._key = o));
      }
      get path() {
        return (
          this._cachedPath.length ||
            (Array.isArray(this._key)
              ? this._cachedPath.push(...this._path, ...this._key)
              : this._cachedPath.push(...this._path, this._key)),
          this._cachedPath
        );
      }
    }),
      (Qno = (t, e) => {
        if (Yj(e)) return { success: !0, data: e.value };
        if (!t.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let r = new O9(t.common.issues);
            return ((this._error = r), this._error);
          },
        };
      }));
    ((Da = class {
      get description() {
        return this._def.description;
      }
      _getType(e) {
        return o7(e.data);
      }
      _getOrReturnCtx(e, r) {
        return (
          r || {
            common: e.parent.common,
            data: e.data,
            parsedType: o7(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent,
          }
        );
      }
      _processInputParams(e) {
        return {
          status: new ib(),
          ctx: {
            common: e.parent.common,
            data: e.data,
            parsedType: o7(e.data),
            schemaErrorMap: this._def.errorMap,
            path: e.path,
            parent: e.parent,
          },
        };
      }
      _parseSync(e) {
        let r = this._parse(e);
        if (Ufe(r)) throw new Error("Synchronous parse encountered promise.");
        return r;
      }
      _parseAsync(e) {
        let r = this._parse(e);
        return Promise.resolve(r);
      }
      parse(e, r) {
        let n = this.safeParse(e, r);
        if (n.success) return n.data;
        throw n.error;
      }
      safeParse(e, r) {
        let n = {
            common: { issues: [], async: r?.async ?? !1, contextualErrorMap: r?.errorMap },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: o7(e),
          },
          o = this._parseSync({ data: e, path: n.path, parent: n });
        return Qno(n, o);
      }
      "~validate"(e) {
        let r = {
          common: { issues: [], async: !!this["~standard"].async },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: o7(e),
        };
        if (!this["~standard"].async)
          try {
            let n = this._parseSync({ data: e, path: [], parent: r });
            return Yj(n) ? { value: n.value } : { issues: r.common.issues };
          } catch (n) {
            (n?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0),
              (r.common = { issues: [], async: !0 }));
          }
        return this._parseAsync({ data: e, path: [], parent: r }).then((n) =>
          Yj(n) ? { value: n.value } : { issues: r.common.issues },
        );
      }
      async parseAsync(e, r) {
        let n = await this.safeParseAsync(e, r);
        if (n.success) return n.data;
        throw n.error;
      }
      async safeParseAsync(e, r) {
        let n = {
            common: { issues: [], contextualErrorMap: r?.errorMap, async: !0 },
            path: r?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: e,
            parsedType: o7(e),
          },
          o = this._parse({ data: e, path: n.path, parent: n }),
          s = await (Ufe(o) ? o : Promise.resolve(o));
        return Qno(n, s);
      }
      refine(e, r) {
        let n = (o) => (typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(o) : r);
        return this._refinement((o, s) => {
          let a = e(o),
            u = () => s.addIssue({ code: tn.custom, ...n(o) });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then((c) => (c ? !0 : (u(), !1)))
            : a
              ? !0
              : (u(), !1);
        });
      }
      refinement(e, r) {
        return this._refinement((n, o) => (e(n) ? !0 : (o.addIssue(typeof r == "function" ? r(n, o) : r), !1)));
      }
      _refinement(e) {
        return new Xv({ schema: this, typeName: jo.ZodEffects, effect: { type: "refinement", refinement: e } });
      }
      superRefine(e) {
        return this._refinement(e);
      }
      constructor(e) {
        ((this.spa = this.safeParseAsync),
          (this._def = e),
          (this.parse = this.parse.bind(this)),
          (this.safeParse = this.safeParse.bind(this)),
          (this.parseAsync = this.parseAsync.bind(this)),
          (this.safeParseAsync = this.safeParseAsync.bind(this)),
          (this.spa = this.spa.bind(this)),
          (this.refine = this.refine.bind(this)),
          (this.refinement = this.refinement.bind(this)),
          (this.superRefine = this.superRefine.bind(this)),
          (this.optional = this.optional.bind(this)),
          (this.nullable = this.nullable.bind(this)),
          (this.nullish = this.nullish.bind(this)),
          (this.array = this.array.bind(this)),
          (this.promise = this.promise.bind(this)),
          (this.or = this.or.bind(this)),
          (this.and = this.and.bind(this)),
          (this.transform = this.transform.bind(this)),
          (this.brand = this.brand.bind(this)),
          (this.default = this.default.bind(this)),
          (this.catch = this.catch.bind(this)),
          (this.describe = this.describe.bind(this)),
          (this.pipe = this.pipe.bind(this)),
          (this.readonly = this.readonly.bind(this)),
          (this.isNullable = this.isNullable.bind(this)),
          (this.isOptional = this.isOptional.bind(this)),
          (this["~standard"] = { version: 1, vendor: "zod", validate: (r) => this["~validate"](r) }));
      }
      optional() {
        return Kv.create(this, this._def);
      }
      nullable() {
        return a7.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return mP.create(this);
      }
      promise() {
        return Xj.create(this, this._def);
      }
      or(e) {
        return fX.create([this, e], this._def);
      }
      and(e) {
        return pX.create(this, e, this._def);
      }
      transform(e) {
        return new Xv({
          ...na(this._def),
          schema: this,
          typeName: jo.ZodEffects,
          effect: { type: "transform", transform: e },
        });
      }
      default(e) {
        let r = typeof e == "function" ? e : () => e;
        return new yX({ ...na(this._def), innerType: this, defaultValue: r, typeName: jo.ZodDefault });
      }
      brand() {
        return new zDe({ typeName: jo.ZodBranded, type: this, ...na(this._def) });
      }
      catch(e) {
        let r = typeof e == "function" ? e : () => e;
        return new _X({ ...na(this._def), innerType: this, catchValue: r, typeName: jo.ZodCatch });
      }
      describe(e) {
        let r = this.constructor;
        return new r({ ...this._def, description: e });
      }
      pipe(e) {
        return YDe.create(this, e);
      }
      readonly() {
        return EX.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    }),
      (tAu = /^c[^\s-]{8,}$/i),
      (rAu = /^[0-9a-z]+$/),
      (nAu = /^[0-9A-HJKMNP-TV-Z]{26}$/i),
      (iAu = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i),
      (oAu = /^[a-z0-9_-]{21}$/i),
      (sAu = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/),
      (aAu =
        /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/),
      (uAu = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i),
      (cAu = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$"),
      (lAu =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/),
      (mAu =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/),
      (dAu =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/),
      (fAu =
        /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/),
      (pAu = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/),
      (hAu = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/),
      (qno =
        "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"),
      (gAu = new RegExp(`^${qno}$`)));
    Kj = class t extends Da {
      _parse(e) {
        if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ti.string)) {
          let s = this._getOrReturnCtx(e);
          return (Fn(s, { code: tn.invalid_type, expected: ti.string, received: s.parsedType }), ko);
        }
        let n = new ib(),
          o;
        for (let s of this._def.checks)
          if (s.kind === "min")
            e.data.length < s.value &&
              ((o = this._getOrReturnCtx(e, o)),
              Fn(o, {
                code: tn.too_small,
                minimum: s.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: s.message,
              }),
              n.dirty());
          else if (s.kind === "max")
            e.data.length > s.value &&
              ((o = this._getOrReturnCtx(e, o)),
              Fn(o, {
                code: tn.too_big,
                maximum: s.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: s.message,
              }),
              n.dirty());
          else if (s.kind === "length") {
            let a = e.data.length > s.value,
              u = e.data.length < s.value;
            (a || u) &&
              ((o = this._getOrReturnCtx(e, o)),
              a
                ? Fn(o, {
                    code: tn.too_big,
                    maximum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message,
                  })
                : u &&
                  Fn(o, {
                    code: tn.too_small,
                    minimum: s.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: s.message,
                  }),
              n.dirty());
          } else if (s.kind === "email")
            uAu.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Fn(o, { validation: "email", code: tn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "emoji")
            (Rvr || (Rvr = new RegExp(cAu, "u")),
              Rvr.test(e.data) ||
                ((o = this._getOrReturnCtx(e, o)),
                Fn(o, { validation: "emoji", code: tn.invalid_string, message: s.message }),
                n.dirty()));
          else if (s.kind === "uuid")
            iAu.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Fn(o, { validation: "uuid", code: tn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "nanoid")
            oAu.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Fn(o, { validation: "nanoid", code: tn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "cuid")
            tAu.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Fn(o, { validation: "cuid", code: tn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "cuid2")
            rAu.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Fn(o, { validation: "cuid2", code: tn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "ulid")
            nAu.test(e.data) ||
              ((o = this._getOrReturnCtx(e, o)),
              Fn(o, { validation: "ulid", code: tn.invalid_string, message: s.message }),
              n.dirty());
          else if (s.kind === "url")
            try {
              new URL(e.data);
            } catch {
              ((o = this._getOrReturnCtx(e, o)),
                Fn(o, { validation: "url", code: tn.invalid_string, message: s.message }),
                n.dirty());
            }
          else
            s.kind === "regex"
              ? ((s.regex.lastIndex = 0),
                s.regex.test(e.data) ||
                  ((o = this._getOrReturnCtx(e, o)),
                  Fn(o, { validation: "regex", code: tn.invalid_string, message: s.message }),
                  n.dirty()))
              : s.kind === "trim"
                ? (e.data = e.data.trim())
                : s.kind === "includes"
                  ? e.data.includes(s.value, s.position) ||
                    ((o = this._getOrReturnCtx(e, o)),
                    Fn(o, {
                      code: tn.invalid_string,
                      validation: { includes: s.value, position: s.position },
                      message: s.message,
                    }),
                    n.dirty())
                  : s.kind === "toLowerCase"
                    ? (e.data = e.data.toLowerCase())
                    : s.kind === "toUpperCase"
                      ? (e.data = e.data.toUpperCase())
                      : s.kind === "startsWith"
                        ? e.data.startsWith(s.value) ||
                          ((o = this._getOrReturnCtx(e, o)),
                          Fn(o, { code: tn.invalid_string, validation: { startsWith: s.value }, message: s.message }),
                          n.dirty())
                        : s.kind === "endsWith"
                          ? e.data.endsWith(s.value) ||
                            ((o = this._getOrReturnCtx(e, o)),
                            Fn(o, { code: tn.invalid_string, validation: { endsWith: s.value }, message: s.message }),
                            n.dirty())
                          : s.kind === "datetime"
                            ? Vno(s).test(e.data) ||
                              ((o = this._getOrReturnCtx(e, o)),
                              Fn(o, { code: tn.invalid_string, validation: "datetime", message: s.message }),
                              n.dirty())
                            : s.kind === "date"
                              ? gAu.test(e.data) ||
                                ((o = this._getOrReturnCtx(e, o)),
                                Fn(o, { code: tn.invalid_string, validation: "date", message: s.message }),
                                n.dirty())
                              : s.kind === "time"
                                ? bAu(s).test(e.data) ||
                                  ((o = this._getOrReturnCtx(e, o)),
                                  Fn(o, { code: tn.invalid_string, validation: "time", message: s.message }),
                                  n.dirty())
                                : s.kind === "duration"
                                  ? aAu.test(e.data) ||
                                    ((o = this._getOrReturnCtx(e, o)),
                                    Fn(o, { validation: "duration", code: tn.invalid_string, message: s.message }),
                                    n.dirty())
                                  : s.kind === "ip"
                                    ? AAu(e.data, s.version) ||
                                      ((o = this._getOrReturnCtx(e, o)),
                                      Fn(o, { validation: "ip", code: tn.invalid_string, message: s.message }),
                                      n.dirty())
                                    : s.kind === "jwt"
                                      ? yAu(e.data, s.alg) ||
                                        ((o = this._getOrReturnCtx(e, o)),
                                        Fn(o, { validation: "jwt", code: tn.invalid_string, message: s.message }),
                                        n.dirty())
                                      : s.kind === "cidr"
                                        ? _Au(e.data, s.version) ||
                                          ((o = this._getOrReturnCtx(e, o)),
                                          Fn(o, { validation: "cidr", code: tn.invalid_string, message: s.message }),
                                          n.dirty())
                                        : s.kind === "base64"
                                          ? pAu.test(e.data) ||
                                            ((o = this._getOrReturnCtx(e, o)),
                                            Fn(o, {
                                              validation: "base64",
                                              code: tn.invalid_string,
                                              message: s.message,
                                            }),
                                            n.dirty())
                                          : s.kind === "base64url"
                                            ? hAu.test(e.data) ||
                                              ((o = this._getOrReturnCtx(e, o)),
                                              Fn(o, {
                                                validation: "base64url",
                                                code: tn.invalid_string,
                                                message: s.message,
                                              }),
                                              n.dirty())
                                            : mu.assertNever(s);
        return { status: n.value, value: e.data };
      }
      _regex(e, r, n) {
        return this.refinement((o) => e.test(o), { validation: r, code: tn.invalid_string, ...qi.errToObj(n) });
      }
      _addCheck(e) {
        return new t({ ...this._def, checks: [...this._def.checks, e] });
      }
      email(e) {
        return this._addCheck({ kind: "email", ...qi.errToObj(e) });
      }
      url(e) {
        return this._addCheck({ kind: "url", ...qi.errToObj(e) });
      }
      emoji(e) {
        return this._addCheck({ kind: "emoji", ...qi.errToObj(e) });
      }
      uuid(e) {
        return this._addCheck({ kind: "uuid", ...qi.errToObj(e) });
      }
      nanoid(e) {
        return this._addCheck({ kind: "nanoid", ...qi.errToObj(e) });
      }
      cuid(e) {
        return this._addCheck({ kind: "cuid", ...qi.errToObj(e) });
      }
      cuid2(e) {
        return this._addCheck({ kind: "cuid2", ...qi.errToObj(e) });
      }
      ulid(e) {
        return this._addCheck({ kind: "ulid", ...qi.errToObj(e) });
      }
      base64(e) {
        return this._addCheck({ kind: "base64", ...qi.errToObj(e) });
      }
      base64url(e) {
        return this._addCheck({ kind: "base64url", ...qi.errToObj(e) });
      }
      jwt(e) {
        return this._addCheck({ kind: "jwt", ...qi.errToObj(e) });
      }
      ip(e) {
        return this._addCheck({ kind: "ip", ...qi.errToObj(e) });
      }
      cidr(e) {
        return this._addCheck({ kind: "cidr", ...qi.errToObj(e) });
      }
      datetime(e) {
        return typeof e == "string"
          ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: e })
          : this._addCheck({
              kind: "datetime",
              precision: typeof e?.precision > "u" ? null : e?.precision,
              offset: e?.offset ?? !1,
              local: e?.local ?? !1,
              ...qi.errToObj(e?.message),
            });
      }
      date(e) {
        return this._addCheck({ kind: "date", message: e });
      }
      time(e) {
        return typeof e == "string"
          ? this._addCheck({ kind: "time", precision: null, message: e })
          : this._addCheck({
              kind: "time",
              precision: typeof e?.precision > "u" ? null : e?.precision,
              ...qi.errToObj(e?.message),
            });
      }
      duration(e) {
        return this._addCheck({ kind: "duration", ...qi.errToObj(e) });
      }
      regex(e, r) {
        return this._addCheck({ kind: "regex", regex: e, ...qi.errToObj(r) });
      }
      includes(e, r) {
        return this._addCheck({ kind: "includes", value: e, position: r?.position, ...qi.errToObj(r?.message) });
      }
      startsWith(e, r) {
        return this._addCheck({ kind: "startsWith", value: e, ...qi.errToObj(r) });
      }
      endsWith(e, r) {
        return this._addCheck({ kind: "endsWith", value: e, ...qi.errToObj(r) });
      }
      min(e, r) {
        return this._addCheck({ kind: "min", value: e, ...qi.errToObj(r) });
      }
      max(e, r) {
        return this._addCheck({ kind: "max", value: e, ...qi.errToObj(r) });
      }
      length(e, r) {
        return this._addCheck({ kind: "length", value: e, ...qi.errToObj(r) });
      }
      nonempty(e) {
        return this.min(1, qi.errToObj(e));
      }
      trim() {
        return new t({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new t({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new t({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
      }
      get isDatetime() {
        return !!this._def.checks.find((e) => e.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((e) => e.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((e) => e.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((e) => e.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((e) => e.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((e) => e.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((e) => e.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((e) => e.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((e) => e.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((e) => e.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((e) => e.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((e) => e.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((e) => e.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((e) => e.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((e) => e.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((e) => e.kind === "base64url");
      }
      get minLength() {
        let e = null;
        for (let r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e;
      }
      get maxLength() {
        let e = null;
        for (let r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e;
      }
    };
    Kj.create = (t) => new Kj({ checks: [], typeName: jo.ZodString, coerce: t?.coerce ?? !1, ...na(t) });
    aX = class t extends Da {
      constructor() {
        (super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf));
      }
      _parse(e) {
        if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ti.number)) {
          let s = this._getOrReturnCtx(e);
          return (Fn(s, { code: tn.invalid_type, expected: ti.number, received: s.parsedType }), ko);
        }
        let n,
          o = new ib();
        for (let s of this._def.checks)
          s.kind === "int"
            ? mu.isInteger(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              Fn(n, { code: tn.invalid_type, expected: "integer", received: "float", message: s.message }),
              o.dirty())
            : s.kind === "min"
              ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
                ((n = this._getOrReturnCtx(e, n)),
                Fn(n, {
                  code: tn.too_small,
                  minimum: s.value,
                  type: "number",
                  inclusive: s.inclusive,
                  exact: !1,
                  message: s.message,
                }),
                o.dirty())
              : s.kind === "max"
                ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
                  ((n = this._getOrReturnCtx(e, n)),
                  Fn(n, {
                    code: tn.too_big,
                    maximum: s.value,
                    type: "number",
                    inclusive: s.inclusive,
                    exact: !1,
                    message: s.message,
                  }),
                  o.dirty())
                : s.kind === "multipleOf"
                  ? EAu(e.data, s.value) !== 0 &&
                    ((n = this._getOrReturnCtx(e, n)),
                    Fn(n, { code: tn.not_multiple_of, multipleOf: s.value, message: s.message }),
                    o.dirty())
                  : s.kind === "finite"
                    ? Number.isFinite(e.data) ||
                      ((n = this._getOrReturnCtx(e, n)), Fn(n, { code: tn.not_finite, message: s.message }), o.dirty())
                    : mu.assertNever(s);
        return { status: o.value, value: e.data };
      }
      gte(e, r) {
        return this.setLimit("min", e, !0, qi.toString(r));
      }
      gt(e, r) {
        return this.setLimit("min", e, !1, qi.toString(r));
      }
      lte(e, r) {
        return this.setLimit("max", e, !0, qi.toString(r));
      }
      lt(e, r) {
        return this.setLimit("max", e, !1, qi.toString(r));
      }
      setLimit(e, r, n, o) {
        return new t({
          ...this._def,
          checks: [...this._def.checks, { kind: e, value: r, inclusive: n, message: qi.toString(o) }],
        });
      }
      _addCheck(e) {
        return new t({ ...this._def, checks: [...this._def.checks, e] });
      }
      int(e) {
        return this._addCheck({ kind: "int", message: qi.toString(e) });
      }
      positive(e) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: qi.toString(e) });
      }
      negative(e) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: qi.toString(e) });
      }
      nonpositive(e) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: qi.toString(e) });
      }
      nonnegative(e) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: qi.toString(e) });
      }
      multipleOf(e, r) {
        return this._addCheck({ kind: "multipleOf", value: e, message: qi.toString(r) });
      }
      finite(e) {
        return this._addCheck({ kind: "finite", message: qi.toString(e) });
      }
      safe(e) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: qi.toString(e),
        })._addCheck({ kind: "max", inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: qi.toString(e) });
      }
      get minValue() {
        let e = null;
        for (let r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e;
      }
      get isInt() {
        return !!this._def.checks.find((e) => e.kind === "int" || (e.kind === "multipleOf" && mu.isInteger(e.value)));
      }
      get isFinite() {
        let e = null,
          r = null;
        for (let n of this._def.checks) {
          if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
          n.kind === "min"
            ? (r === null || n.value > r) && (r = n.value)
            : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        }
        return Number.isFinite(r) && Number.isFinite(e);
      }
    };
    aX.create = (t) => new aX({ checks: [], typeName: jo.ZodNumber, coerce: t?.coerce || !1, ...na(t) });
    uX = class t extends Da {
      constructor() {
        (super(...arguments), (this.min = this.gte), (this.max = this.lte));
      }
      _parse(e) {
        if (this._def.coerce)
          try {
            e.data = BigInt(e.data);
          } catch {
            return this._getInvalidInput(e);
          }
        if (this._getType(e) !== ti.bigint) return this._getInvalidInput(e);
        let n,
          o = new ib();
        for (let s of this._def.checks)
          s.kind === "min"
            ? (s.inclusive ? e.data < s.value : e.data <= s.value) &&
              ((n = this._getOrReturnCtx(e, n)),
              Fn(n, {
                code: tn.too_small,
                type: "bigint",
                minimum: s.value,
                inclusive: s.inclusive,
                message: s.message,
              }),
              o.dirty())
            : s.kind === "max"
              ? (s.inclusive ? e.data > s.value : e.data >= s.value) &&
                ((n = this._getOrReturnCtx(e, n)),
                Fn(n, {
                  code: tn.too_big,
                  type: "bigint",
                  maximum: s.value,
                  inclusive: s.inclusive,
                  message: s.message,
                }),
                o.dirty())
              : s.kind === "multipleOf"
                ? e.data % s.value !== BigInt(0) &&
                  ((n = this._getOrReturnCtx(e, n)),
                  Fn(n, { code: tn.not_multiple_of, multipleOf: s.value, message: s.message }),
                  o.dirty())
                : mu.assertNever(s);
        return { status: o.value, value: e.data };
      }
      _getInvalidInput(e) {
        let r = this._getOrReturnCtx(e);
        return (Fn(r, { code: tn.invalid_type, expected: ti.bigint, received: r.parsedType }), ko);
      }
      gte(e, r) {
        return this.setLimit("min", e, !0, qi.toString(r));
      }
      gt(e, r) {
        return this.setLimit("min", e, !1, qi.toString(r));
      }
      lte(e, r) {
        return this.setLimit("max", e, !0, qi.toString(r));
      }
      lt(e, r) {
        return this.setLimit("max", e, !1, qi.toString(r));
      }
      setLimit(e, r, n, o) {
        return new t({
          ...this._def,
          checks: [...this._def.checks, { kind: e, value: r, inclusive: n, message: qi.toString(o) }],
        });
      }
      _addCheck(e) {
        return new t({ ...this._def, checks: [...this._def.checks, e] });
      }
      positive(e) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: qi.toString(e) });
      }
      negative(e) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: qi.toString(e) });
      }
      nonpositive(e) {
        return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: qi.toString(e) });
      }
      nonnegative(e) {
        return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: qi.toString(e) });
      }
      multipleOf(e, r) {
        return this._addCheck({ kind: "multipleOf", value: e, message: qi.toString(r) });
      }
      get minValue() {
        let e = null;
        for (let r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e;
      }
    };
    uX.create = (t) => new uX({ checks: [], typeName: jo.ZodBigInt, coerce: t?.coerce ?? !1, ...na(t) });
    cX = class extends Da {
      _parse(e) {
        if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== ti.boolean)) {
          let n = this._getOrReturnCtx(e);
          return (Fn(n, { code: tn.invalid_type, expected: ti.boolean, received: n.parsedType }), ko);
        }
        return WA(e.data);
      }
    };
    cX.create = (t) => new cX({ typeName: jo.ZodBoolean, coerce: t?.coerce || !1, ...na(t) });
    lX = class t extends Da {
      _parse(e) {
        if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ti.date)) {
          let s = this._getOrReturnCtx(e);
          return (Fn(s, { code: tn.invalid_type, expected: ti.date, received: s.parsedType }), ko);
        }
        if (Number.isNaN(e.data.getTime())) {
          let s = this._getOrReturnCtx(e);
          return (Fn(s, { code: tn.invalid_date }), ko);
        }
        let n = new ib(),
          o;
        for (let s of this._def.checks)
          s.kind === "min"
            ? e.data.getTime() < s.value &&
              ((o = this._getOrReturnCtx(e, o)),
              Fn(o, {
                code: tn.too_small,
                message: s.message,
                inclusive: !0,
                exact: !1,
                minimum: s.value,
                type: "date",
              }),
              n.dirty())
            : s.kind === "max"
              ? e.data.getTime() > s.value &&
                ((o = this._getOrReturnCtx(e, o)),
                Fn(o, {
                  code: tn.too_big,
                  message: s.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: s.value,
                  type: "date",
                }),
                n.dirty())
              : mu.assertNever(s);
        return { status: n.value, value: new Date(e.data.getTime()) };
      }
      _addCheck(e) {
        return new t({ ...this._def, checks: [...this._def.checks, e] });
      }
      min(e, r) {
        return this._addCheck({ kind: "min", value: e.getTime(), message: qi.toString(r) });
      }
      max(e, r) {
        return this._addCheck({ kind: "max", value: e.getTime(), message: qi.toString(r) });
      }
      get minDate() {
        let e = null;
        for (let r of this._def.checks) r.kind === "min" && (e === null || r.value > e) && (e = r.value);
        return e != null ? new Date(e) : null;
      }
      get maxDate() {
        let e = null;
        for (let r of this._def.checks) r.kind === "max" && (e === null || r.value < e) && (e = r.value);
        return e != null ? new Date(e) : null;
      }
    };
    lX.create = (t) => new lX({ checks: [], coerce: t?.coerce || !1, typeName: jo.ZodDate, ...na(t) });
    jfe = class extends Da {
      _parse(e) {
        if (this._getType(e) !== ti.symbol) {
          let n = this._getOrReturnCtx(e);
          return (Fn(n, { code: tn.invalid_type, expected: ti.symbol, received: n.parsedType }), ko);
        }
        return WA(e.data);
      }
    };
    jfe.create = (t) => new jfe({ typeName: jo.ZodSymbol, ...na(t) });
    mX = class extends Da {
      _parse(e) {
        if (this._getType(e) !== ti.undefined) {
          let n = this._getOrReturnCtx(e);
          return (Fn(n, { code: tn.invalid_type, expected: ti.undefined, received: n.parsedType }), ko);
        }
        return WA(e.data);
      }
    };
    mX.create = (t) => new mX({ typeName: jo.ZodUndefined, ...na(t) });
    dX = class extends Da {
      _parse(e) {
        if (this._getType(e) !== ti.null) {
          let n = this._getOrReturnCtx(e);
          return (Fn(n, { code: tn.invalid_type, expected: ti.null, received: n.parsedType }), ko);
        }
        return WA(e.data);
      }
    };
    dX.create = (t) => new dX({ typeName: jo.ZodNull, ...na(t) });
    Jj = class extends Da {
      constructor() {
        (super(...arguments), (this._any = !0));
      }
      _parse(e) {
        return WA(e.data);
      }
    };
    Jj.create = (t) => new Jj({ typeName: jo.ZodAny, ...na(t) });
    lP = class extends Da {
      constructor() {
        (super(...arguments), (this._unknown = !0));
      }
      _parse(e) {
        return WA(e.data);
      }
    };
    lP.create = (t) => new lP({ typeName: jo.ZodUnknown, ...na(t) });
    Cw = class extends Da {
      _parse(e) {
        let r = this._getOrReturnCtx(e);
        return (Fn(r, { code: tn.invalid_type, expected: ti.never, received: r.parsedType }), ko);
      }
    };
    Cw.create = (t) => new Cw({ typeName: jo.ZodNever, ...na(t) });
    Qfe = class extends Da {
      _parse(e) {
        if (this._getType(e) !== ti.undefined) {
          let n = this._getOrReturnCtx(e);
          return (Fn(n, { code: tn.invalid_type, expected: ti.void, received: n.parsedType }), ko);
        }
        return WA(e.data);
      }
    };
    Qfe.create = (t) => new Qfe({ typeName: jo.ZodVoid, ...na(t) });
    mP = class t extends Da {
      _parse(e) {
        let { ctx: r, status: n } = this._processInputParams(e),
          o = this._def;
        if (r.parsedType !== ti.array)
          return (Fn(r, { code: tn.invalid_type, expected: ti.array, received: r.parsedType }), ko);
        if (o.exactLength !== null) {
          let a = r.data.length > o.exactLength.value,
            u = r.data.length < o.exactLength.value;
          (a || u) &&
            (Fn(r, {
              code: a ? tn.too_big : tn.too_small,
              minimum: u ? o.exactLength.value : void 0,
              maximum: a ? o.exactLength.value : void 0,
              type: "array",
              inclusive: !0,
              exact: !0,
              message: o.exactLength.message,
            }),
            n.dirty());
        }
        if (
          (o.minLength !== null &&
            r.data.length < o.minLength.value &&
            (Fn(r, {
              code: tn.too_small,
              minimum: o.minLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: o.minLength.message,
            }),
            n.dirty()),
          o.maxLength !== null &&
            r.data.length > o.maxLength.value &&
            (Fn(r, {
              code: tn.too_big,
              maximum: o.maxLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: o.maxLength.message,
            }),
            n.dirty()),
          r.common.async)
        )
          return Promise.all([...r.data].map((a, u) => o.type._parseAsync(new Jv(r, a, r.path, u)))).then((a) =>
            ib.mergeArray(n, a),
          );
        let s = [...r.data].map((a, u) => o.type._parseSync(new Jv(r, a, r.path, u)));
        return ib.mergeArray(n, s);
      }
      get element() {
        return this._def.type;
      }
      min(e, r) {
        return new t({ ...this._def, minLength: { value: e, message: qi.toString(r) } });
      }
      max(e, r) {
        return new t({ ...this._def, maxLength: { value: e, message: qi.toString(r) } });
      }
      length(e, r) {
        return new t({ ...this._def, exactLength: { value: e, message: qi.toString(r) } });
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    mP.create = (t, e) =>
      new mP({ type: t, minLength: null, maxLength: null, exactLength: null, typeName: jo.ZodArray, ...na(e) });
    N9 = class t extends Da {
      constructor() {
        (super(...arguments), (this._cached = null), (this.nonstrict = this.passthrough), (this.augment = this.extend));
      }
      _getCached() {
        if (this._cached !== null) return this._cached;
        let e = this._def.shape(),
          r = mu.objectKeys(e);
        return ((this._cached = { shape: e, keys: r }), this._cached);
      }
      _parse(e) {
        if (this._getType(e) !== ti.object) {
          let m = this._getOrReturnCtx(e);
          return (Fn(m, { code: tn.invalid_type, expected: ti.object, received: m.parsedType }), ko);
        }
        let { status: n, ctx: o } = this._processInputParams(e),
          { shape: s, keys: a } = this._getCached(),
          u = [];
        if (!(this._def.catchall instanceof Cw && this._def.unknownKeys === "strip"))
          for (let m in o.data) a.includes(m) || u.push(m);
        let c = [];
        for (let m of a) {
          let d = s[m],
            f = o.data[m];
          c.push({
            key: { status: "valid", value: m },
            value: d._parse(new Jv(o, f, o.path, m)),
            alwaysSet: m in o.data,
          });
        }
        if (this._def.catchall instanceof Cw) {
          let m = this._def.unknownKeys;
          if (m === "passthrough")
            for (let d of u)
              c.push({ key: { status: "valid", value: d }, value: { status: "valid", value: o.data[d] } });
          else if (m === "strict") u.length > 0 && (Fn(o, { code: tn.unrecognized_keys, keys: u }), n.dirty());
          else if (m !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          let m = this._def.catchall;
          for (let d of u) {
            let f = o.data[d];
            c.push({
              key: { status: "valid", value: d },
              value: m._parse(new Jv(o, f, o.path, d)),
              alwaysSet: d in o.data,
            });
          }
        }
        return o.common.async
          ? Promise.resolve()
              .then(async () => {
                let m = [];
                for (let d of c) {
                  let f = await d.key,
                    p = await d.value;
                  m.push({ key: f, value: p, alwaysSet: d.alwaysSet });
                }
                return m;
              })
              .then((m) => ib.mergeObjectSync(n, m))
          : ib.mergeObjectSync(n, c);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e) {
        return (
          qi.errToObj,
          new t({
            ...this._def,
            unknownKeys: "strict",
            ...(e !== void 0
              ? {
                  errorMap: (r, n) => {
                    let o = this._def.errorMap?.(r, n).message ?? n.defaultError;
                    return r.code === "unrecognized_keys" ? { message: qi.errToObj(e).message ?? o } : { message: o };
                  },
                }
              : {}),
          })
        );
      }
      strip() {
        return new t({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new t({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e) {
        return new t({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
      }
      merge(e) {
        return new t({
          unknownKeys: e._def.unknownKeys,
          catchall: e._def.catchall,
          shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
          typeName: jo.ZodObject,
        });
      }
      setKey(e, r) {
        return this.augment({ [e]: r });
      }
      catchall(e) {
        return new t({ ...this._def, catchall: e });
      }
      pick(e) {
        let r = {};
        for (let n of mu.objectKeys(e)) e[n] && this.shape[n] && (r[n] = this.shape[n]);
        return new t({ ...this._def, shape: () => r });
      }
      omit(e) {
        let r = {};
        for (let n of mu.objectKeys(this.shape)) e[n] || (r[n] = this.shape[n]);
        return new t({ ...this._def, shape: () => r });
      }
      deepPartial() {
        return $fe(this);
      }
      partial(e) {
        let r = {};
        for (let n of mu.objectKeys(this.shape)) {
          let o = this.shape[n];
          e && !e[n] ? (r[n] = o) : (r[n] = o.optional());
        }
        return new t({ ...this._def, shape: () => r });
      }
      required(e) {
        let r = {};
        for (let n of mu.objectKeys(this.shape))
          if (e && !e[n]) r[n] = this.shape[n];
          else {
            let s = this.shape[n];
            for (; s instanceof Kv; ) s = s._def.innerType;
            r[n] = s;
          }
        return new t({ ...this._def, shape: () => r });
      }
      keyof() {
        return Wno(mu.objectKeys(this.shape));
      }
    };
    N9.create = (t, e) =>
      new N9({ shape: () => t, unknownKeys: "strip", catchall: Cw.create(), typeName: jo.ZodObject, ...na(e) });
    N9.strictCreate = (t, e) =>
      new N9({ shape: () => t, unknownKeys: "strict", catchall: Cw.create(), typeName: jo.ZodObject, ...na(e) });
    N9.lazycreate = (t, e) =>
      new N9({ shape: t, unknownKeys: "strip", catchall: Cw.create(), typeName: jo.ZodObject, ...na(e) });
    fX = class extends Da {
      _parse(e) {
        let { ctx: r } = this._processInputParams(e),
          n = this._def.options;
        function o(s) {
          for (let u of s) if (u.result.status === "valid") return u.result;
          for (let u of s)
            if (u.result.status === "dirty") return (r.common.issues.push(...u.ctx.common.issues), u.result);
          let a = s.map((u) => new O9(u.ctx.common.issues));
          return (Fn(r, { code: tn.invalid_union, unionErrors: a }), ko);
        }
        if (r.common.async)
          return Promise.all(
            n.map(async (s) => {
              let a = { ...r, common: { ...r.common, issues: [] }, parent: null };
              return { result: await s._parseAsync({ data: r.data, path: r.path, parent: a }), ctx: a };
            }),
          ).then(o);
        {
          let s,
            a = [];
          for (let c of n) {
            let m = { ...r, common: { ...r.common, issues: [] }, parent: null },
              d = c._parseSync({ data: r.data, path: r.path, parent: m });
            if (d.status === "valid") return d;
            (d.status === "dirty" && !s && (s = { result: d, ctx: m }),
              m.common.issues.length && a.push(m.common.issues));
          }
          if (s) return (r.common.issues.push(...s.ctx.common.issues), s.result);
          let u = a.map((c) => new O9(c));
          return (Fn(r, { code: tn.invalid_union, unionErrors: u }), ko);
        }
      }
      get options() {
        return this._def.options;
      }
    };
    fX.create = (t, e) => new fX({ options: t, typeName: jo.ZodUnion, ...na(e) });
    ((cP = (t) =>
      t instanceof hX
        ? cP(t.schema)
        : t instanceof Xv
          ? cP(t.innerType())
          : t instanceof gX
            ? [t.value]
            : t instanceof bX
              ? t.options
              : t instanceof AX
                ? mu.objectValues(t.enum)
                : t instanceof yX
                  ? cP(t._def.innerType)
                  : t instanceof mX
                    ? [void 0]
                    : t instanceof dX
                      ? [null]
                      : t instanceof Kv
                        ? [void 0, ...cP(t.unwrap())]
                        : t instanceof a7
                          ? [null, ...cP(t.unwrap())]
                          : t instanceof zDe || t instanceof EX
                            ? cP(t.unwrap())
                            : t instanceof _X
                              ? cP(t._def.innerType)
                              : []),
      (LAt = class t extends Da {
        _parse(e) {
          let { ctx: r } = this._processInputParams(e);
          if (r.parsedType !== ti.object)
            return (Fn(r, { code: tn.invalid_type, expected: ti.object, received: r.parsedType }), ko);
          let n = this.discriminator,
            o = r.data[n],
            s = this.optionsMap.get(o);
          return s
            ? r.common.async
              ? s._parseAsync({ data: r.data, path: r.path, parent: r })
              : s._parseSync({ data: r.data, path: r.path, parent: r })
            : (Fn(r, { code: tn.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [n] }),
              ko);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, r, n) {
          let o = new Map();
          for (let s of r) {
            let a = cP(s.shape[e]);
            if (!a.length)
              throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
            for (let u of a) {
              if (o.has(u)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(u)}`);
              o.set(u, s);
            }
          }
          return new t({ typeName: jo.ZodDiscriminatedUnion, discriminator: e, options: r, optionsMap: o, ...na(n) });
        }
      }));
    pX = class extends Da {
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e),
          o = (s, a) => {
            if (PAt(s) || PAt(a)) return ko;
            let u = kvr(s.value, a.value);
            return u.valid
              ? ((BAt(s) || BAt(a)) && r.dirty(), { status: r.value, value: u.data })
              : (Fn(n, { code: tn.invalid_intersection_types }), ko);
          };
        return n.common.async
          ? Promise.all([
              this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
            ]).then(([s, a]) => o(s, a))
          : o(
              this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
            );
      }
    };
    pX.create = (t, e, r) => new pX({ left: t, right: e, typeName: jo.ZodIntersection, ...na(r) });
    s7 = class t extends Da {
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== ti.array)
          return (Fn(n, { code: tn.invalid_type, expected: ti.array, received: n.parsedType }), ko);
        if (n.data.length < this._def.items.length)
          return (
            Fn(n, { code: tn.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }),
            ko
          );
        !this._def.rest &&
          n.data.length > this._def.items.length &&
          (Fn(n, { code: tn.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: "array" }),
          r.dirty());
        let s = [...n.data]
          .map((a, u) => {
            let c = this._def.items[u] || this._def.rest;
            return c ? c._parse(new Jv(n, a, n.path, u)) : null;
          })
          .filter((a) => !!a);
        return n.common.async ? Promise.all(s).then((a) => ib.mergeArray(r, a)) : ib.mergeArray(r, s);
      }
      get items() {
        return this._def.items;
      }
      rest(e) {
        return new t({ ...this._def, rest: e });
      }
    };
    s7.create = (t, e) => {
      if (!Array.isArray(t)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new s7({ items: t, typeName: jo.ZodTuple, rest: null, ...na(e) });
    };
    ((MAt = class t extends Da {
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== ti.object)
          return (Fn(n, { code: tn.invalid_type, expected: ti.object, received: n.parsedType }), ko);
        let o = [],
          s = this._def.keyType,
          a = this._def.valueType;
        for (let u in n.data)
          o.push({
            key: s._parse(new Jv(n, u, n.path, u)),
            value: a._parse(new Jv(n, n.data[u], n.path, u)),
            alwaysSet: u in n.data,
          });
        return n.common.async ? ib.mergeObjectAsync(r, o) : ib.mergeObjectSync(r, o);
      }
      get element() {
        return this._def.valueType;
      }
      static create(e, r, n) {
        return r instanceof Da
          ? new t({ keyType: e, valueType: r, typeName: jo.ZodRecord, ...na(n) })
          : new t({ keyType: Kj.create(), valueType: e, typeName: jo.ZodRecord, ...na(r) });
      }
    }),
      (Gfe = class extends Da {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: r, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== ti.map)
            return (Fn(n, { code: tn.invalid_type, expected: ti.map, received: n.parsedType }), ko);
          let o = this._def.keyType,
            s = this._def.valueType,
            a = [...n.data.entries()].map(([u, c], m) => ({
              key: o._parse(new Jv(n, u, n.path, [m, "key"])),
              value: s._parse(new Jv(n, c, n.path, [m, "value"])),
            }));
          if (n.common.async) {
            let u = new Map();
            return Promise.resolve().then(async () => {
              for (let c of a) {
                let m = await c.key,
                  d = await c.value;
                if (m.status === "aborted" || d.status === "aborted") return ko;
                ((m.status === "dirty" || d.status === "dirty") && r.dirty(), u.set(m.value, d.value));
              }
              return { status: r.value, value: u };
            });
          } else {
            let u = new Map();
            for (let c of a) {
              let m = c.key,
                d = c.value;
              if (m.status === "aborted" || d.status === "aborted") return ko;
              ((m.status === "dirty" || d.status === "dirty") && r.dirty(), u.set(m.value, d.value));
            }
            return { status: r.value, value: u };
          }
        }
      }));
    Gfe.create = (t, e, r) => new Gfe({ valueType: e, keyType: t, typeName: jo.ZodMap, ...na(r) });
    qfe = class t extends Da {
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== ti.set)
          return (Fn(n, { code: tn.invalid_type, expected: ti.set, received: n.parsedType }), ko);
        let o = this._def;
        (o.minSize !== null &&
          n.data.size < o.minSize.value &&
          (Fn(n, {
            code: tn.too_small,
            minimum: o.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: o.minSize.message,
          }),
          r.dirty()),
          o.maxSize !== null &&
            n.data.size > o.maxSize.value &&
            (Fn(n, {
              code: tn.too_big,
              maximum: o.maxSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: o.maxSize.message,
            }),
            r.dirty()));
        let s = this._def.valueType;
        function a(c) {
          let m = new Set();
          for (let d of c) {
            if (d.status === "aborted") return ko;
            (d.status === "dirty" && r.dirty(), m.add(d.value));
          }
          return { status: r.value, value: m };
        }
        let u = [...n.data.values()].map((c, m) => s._parse(new Jv(n, c, n.path, m)));
        return n.common.async ? Promise.all(u).then((c) => a(c)) : a(u);
      }
      min(e, r) {
        return new t({ ...this._def, minSize: { value: e, message: qi.toString(r) } });
      }
      max(e, r) {
        return new t({ ...this._def, maxSize: { value: e, message: qi.toString(r) } });
      }
      size(e, r) {
        return this.min(e, r).max(e, r);
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    qfe.create = (t, e) => new qfe({ valueType: t, minSize: null, maxSize: null, typeName: jo.ZodSet, ...na(e) });
    ((FAt = class t extends Da {
      constructor() {
        (super(...arguments), (this.validate = this.implement));
      }
      _parse(e) {
        let { ctx: r } = this._processInputParams(e);
        if (r.parsedType !== ti.function)
          return (Fn(r, { code: tn.invalid_type, expected: ti.function, received: r.parsedType }), ko);
        function n(u, c) {
          return WDe({
            data: u,
            path: r.path,
            errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Ffe(), uP].filter((m) => !!m),
            issueData: { code: tn.invalid_arguments, argumentsError: c },
          });
        }
        function o(u, c) {
          return WDe({
            data: u,
            path: r.path,
            errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Ffe(), uP].filter((m) => !!m),
            issueData: { code: tn.invalid_return_type, returnTypeError: c },
          });
        }
        let s = { errorMap: r.common.contextualErrorMap },
          a = r.data;
        if (this._def.returns instanceof Xj) {
          let u = this;
          return WA(async function (...c) {
            let m = new O9([]),
              d = await u._def.args.parseAsync(c, s).catch((h) => {
                throw (m.addIssue(n(c, h)), m);
              }),
              f = await Reflect.apply(a, this, d);
            return await u._def.returns._def.type.parseAsync(f, s).catch((h) => {
              throw (m.addIssue(o(f, h)), m);
            });
          });
        } else {
          let u = this;
          return WA(function (...c) {
            let m = u._def.args.safeParse(c, s);
            if (!m.success) throw new O9([n(c, m.error)]);
            let d = Reflect.apply(a, this, m.data),
              f = u._def.returns.safeParse(d, s);
            if (!f.success) throw new O9([o(d, f.error)]);
            return f.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...e) {
        return new t({ ...this._def, args: s7.create(e).rest(lP.create()) });
      }
      returns(e) {
        return new t({ ...this._def, returns: e });
      }
      implement(e) {
        return this.parse(e);
      }
      strictImplement(e) {
        return this.parse(e);
      }
      static create(e, r, n) {
        return new t({
          args: e || s7.create([]).rest(lP.create()),
          returns: r || lP.create(),
          typeName: jo.ZodFunction,
          ...na(n),
        });
      }
    }),
      (hX = class extends Da {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: r } = this._processInputParams(e);
          return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
        }
      }));
    hX.create = (t, e) => new hX({ getter: t, typeName: jo.ZodLazy, ...na(e) });
    gX = class extends Da {
      _parse(e) {
        if (e.data !== this._def.value) {
          let r = this._getOrReturnCtx(e);
          return (Fn(r, { received: r.data, code: tn.invalid_literal, expected: this._def.value }), ko);
        }
        return { status: "valid", value: e.data };
      }
      get value() {
        return this._def.value;
      }
    };
    gX.create = (t, e) => new gX({ value: t, typeName: jo.ZodLiteral, ...na(e) });
    bX = class t extends Da {
      _parse(e) {
        if (typeof e.data != "string") {
          let r = this._getOrReturnCtx(e),
            n = this._def.values;
          return (Fn(r, { expected: mu.joinValues(n), received: r.parsedType, code: tn.invalid_type }), ko);
        }
        if ((this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data))) {
          let r = this._getOrReturnCtx(e),
            n = this._def.values;
          return (Fn(r, { received: r.data, code: tn.invalid_enum_value, options: n }), ko);
        }
        return WA(e.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        let e = {};
        for (let r of this._def.values) e[r] = r;
        return e;
      }
      get Values() {
        let e = {};
        for (let r of this._def.values) e[r] = r;
        return e;
      }
      get Enum() {
        let e = {};
        for (let r of this._def.values) e[r] = r;
        return e;
      }
      extract(e, r = this._def) {
        return t.create(e, { ...this._def, ...r });
      }
      exclude(e, r = this._def) {
        return t.create(
          this.options.filter((n) => !e.includes(n)),
          { ...this._def, ...r },
        );
      }
    };
    bX.create = Wno;
    AX = class extends Da {
      _parse(e) {
        let r = mu.getValidEnumValues(this._def.values),
          n = this._getOrReturnCtx(e);
        if (n.parsedType !== ti.string && n.parsedType !== ti.number) {
          let o = mu.objectValues(r);
          return (Fn(n, { expected: mu.joinValues(o), received: n.parsedType, code: tn.invalid_type }), ko);
        }
        if (
          (this._cache || (this._cache = new Set(mu.getValidEnumValues(this._def.values))), !this._cache.has(e.data))
        ) {
          let o = mu.objectValues(r);
          return (Fn(n, { received: n.data, code: tn.invalid_enum_value, options: o }), ko);
        }
        return WA(e.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    AX.create = (t, e) => new AX({ values: t, typeName: jo.ZodNativeEnum, ...na(e) });
    Xj = class extends Da {
      unwrap() {
        return this._def.type;
      }
      _parse(e) {
        let { ctx: r } = this._processInputParams(e);
        if (r.parsedType !== ti.promise && r.common.async === !1)
          return (Fn(r, { code: tn.invalid_type, expected: ti.promise, received: r.parsedType }), ko);
        let n = r.parsedType === ti.promise ? r.data : Promise.resolve(r.data);
        return WA(n.then((o) => this._def.type.parseAsync(o, { path: r.path, errorMap: r.common.contextualErrorMap })));
      }
    };
    Xj.create = (t, e) => new Xj({ type: t, typeName: jo.ZodPromise, ...na(e) });
    Xv = class extends Da {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === jo.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(e) {
        let { status: r, ctx: n } = this._processInputParams(e),
          o = this._def.effect || null,
          s = {
            addIssue: (a) => {
              (Fn(n, a), a.fatal ? r.abort() : r.dirty());
            },
            get path() {
              return n.path;
            },
          };
        if (((s.addIssue = s.addIssue.bind(s)), o.type === "preprocess")) {
          let a = o.transform(n.data, s);
          if (n.common.async)
            return Promise.resolve(a).then(async (u) => {
              if (r.value === "aborted") return ko;
              let c = await this._def.schema._parseAsync({ data: u, path: n.path, parent: n });
              return c.status === "aborted"
                ? ko
                : c.status === "dirty"
                  ? sX(c.value)
                  : r.value === "dirty"
                    ? sX(c.value)
                    : c;
            });
          {
            if (r.value === "aborted") return ko;
            let u = this._def.schema._parseSync({ data: a, path: n.path, parent: n });
            return u.status === "aborted"
              ? ko
              : u.status === "dirty"
                ? sX(u.value)
                : r.value === "dirty"
                  ? sX(u.value)
                  : u;
          }
        }
        if (o.type === "refinement") {
          let a = (u) => {
            let c = o.refinement(u, s);
            if (n.common.async) return Promise.resolve(c);
            if (c instanceof Promise)
              throw new Error(
                "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
              );
            return u;
          };
          if (n.common.async === !1) {
            let u = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            return u.status === "aborted"
              ? ko
              : (u.status === "dirty" && r.dirty(), a(u.value), { status: r.value, value: u.value });
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((u) =>
                u.status === "aborted"
                  ? ko
                  : (u.status === "dirty" && r.dirty(), a(u.value).then(() => ({ status: r.value, value: u.value }))),
              );
        }
        if (o.type === "transform")
          if (n.common.async === !1) {
            let a = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            if (!Yj(a)) return ko;
            let u = o.transform(a.value, s);
            if (u instanceof Promise)
              throw new Error(
                "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
              );
            return { status: r.value, value: u };
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((a) =>
                Yj(a) ? Promise.resolve(o.transform(a.value, s)).then((u) => ({ status: r.value, value: u })) : ko,
              );
        mu.assertNever(o);
      }
    };
    Xv.create = (t, e, r) => new Xv({ schema: t, typeName: jo.ZodEffects, effect: e, ...na(r) });
    Xv.createWithPreprocess = (t, e, r) =>
      new Xv({ schema: e, effect: { type: "preprocess", transform: t }, typeName: jo.ZodEffects, ...na(r) });
    Kv = class extends Da {
      _parse(e) {
        return this._getType(e) === ti.undefined ? WA(void 0) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    Kv.create = (t, e) => new Kv({ innerType: t, typeName: jo.ZodOptional, ...na(e) });
    a7 = class extends Da {
      _parse(e) {
        return this._getType(e) === ti.null ? WA(null) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    a7.create = (t, e) => new a7({ innerType: t, typeName: jo.ZodNullable, ...na(e) });
    yX = class extends Da {
      _parse(e) {
        let { ctx: r } = this._processInputParams(e),
          n = r.data;
        return (
          r.parsedType === ti.undefined && (n = this._def.defaultValue()),
          this._def.innerType._parse({ data: n, path: r.path, parent: r })
        );
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    yX.create = (t, e) =>
      new yX({
        innerType: t,
        typeName: jo.ZodDefault,
        defaultValue: typeof e.default == "function" ? e.default : () => e.default,
        ...na(e),
      });
    _X = class extends Da {
      _parse(e) {
        let { ctx: r } = this._processInputParams(e),
          n = { ...r, common: { ...r.common, issues: [] } },
          o = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
        return Ufe(o)
          ? o.then((s) => ({
              status: "valid",
              value:
                s.status === "valid"
                  ? s.value
                  : this._def.catchValue({
                      get error() {
                        return new O9(n.common.issues);
                      },
                      input: n.data,
                    }),
            }))
          : {
              status: "valid",
              value:
                o.status === "valid"
                  ? o.value
                  : this._def.catchValue({
                      get error() {
                        return new O9(n.common.issues);
                      },
                      input: n.data,
                    }),
            };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    _X.create = (t, e) =>
      new _X({
        innerType: t,
        typeName: jo.ZodCatch,
        catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
        ...na(e),
      });
    Hfe = class extends Da {
      _parse(e) {
        if (this._getType(e) !== ti.nan) {
          let n = this._getOrReturnCtx(e);
          return (Fn(n, { code: tn.invalid_type, expected: ti.nan, received: n.parsedType }), ko);
        }
        return { status: "valid", value: e.data };
      }
    };
    Hfe.create = (t) => new Hfe({ typeName: jo.ZodNaN, ...na(t) });
    ((vAu = Symbol("zod_brand")),
      (zDe = class extends Da {
        _parse(e) {
          let { ctx: r } = this._processInputParams(e),
            n = r.data;
          return this._def.type._parse({ data: n, path: r.path, parent: r });
        }
        unwrap() {
          return this._def.type;
        }
      }),
      (YDe = class t extends Da {
        _parse(e) {
          let { status: r, ctx: n } = this._processInputParams(e);
          if (n.common.async)
            return (async () => {
              let s = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
              return s.status === "aborted"
                ? ko
                : s.status === "dirty"
                  ? (r.dirty(), sX(s.value))
                  : this._def.out._parseAsync({ data: s.value, path: n.path, parent: n });
            })();
          {
            let o = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
            return o.status === "aborted"
              ? ko
              : o.status === "dirty"
                ? (r.dirty(), { status: "dirty", value: o.value })
                : this._def.out._parseSync({ data: o.value, path: n.path, parent: n });
          }
        }
        static create(e, r) {
          return new t({ in: e, out: r, typeName: jo.ZodPipeline });
        }
      }),
      (EX = class extends Da {
        _parse(e) {
          let r = this._def.innerType._parse(e),
            n = (o) => (Yj(o) && (o.value = Object.freeze(o.value)), o);
          return Ufe(r) ? r.then((o) => n(o)) : n(r);
        }
        unwrap() {
          return this._def.innerType;
        }
      }));
    EX.create = (t, e) => new EX({ innerType: t, typeName: jo.ZodReadonly, ...na(e) });
    CAu = { object: N9.lazycreate };
    (function (t) {
      ((t.ZodString = "ZodString"),
        (t.ZodNumber = "ZodNumber"),
        (t.ZodNaN = "ZodNaN"),
        (t.ZodBigInt = "ZodBigInt"),
        (t.ZodBoolean = "ZodBoolean"),
        (t.ZodDate = "ZodDate"),
        (t.ZodSymbol = "ZodSymbol"),
        (t.ZodUndefined = "ZodUndefined"),
        (t.ZodNull = "ZodNull"),
        (t.ZodAny = "ZodAny"),
        (t.ZodUnknown = "ZodUnknown"),
        (t.ZodNever = "ZodNever"),
        (t.ZodVoid = "ZodVoid"),
        (t.ZodArray = "ZodArray"),
        (t.ZodObject = "ZodObject"),
        (t.ZodUnion = "ZodUnion"),
        (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
        (t.ZodIntersection = "ZodIntersection"),
        (t.ZodTuple = "ZodTuple"),
        (t.ZodRecord = "ZodRecord"),
        (t.ZodMap = "ZodMap"),
        (t.ZodSet = "ZodSet"),
        (t.ZodFunction = "ZodFunction"),
        (t.ZodLazy = "ZodLazy"),
        (t.ZodLiteral = "ZodLiteral"),
        (t.ZodEnum = "ZodEnum"),
        (t.ZodEffects = "ZodEffects"),
        (t.ZodNativeEnum = "ZodNativeEnum"),
        (t.ZodOptional = "ZodOptional"),
        (t.ZodNullable = "ZodNullable"),
        (t.ZodDefault = "ZodDefault"),
        (t.ZodCatch = "ZodCatch"),
        (t.ZodPromise = "ZodPromise"),
        (t.ZodBranded = "ZodBranded"),
        (t.ZodPipeline = "ZodPipeline"),
        (t.ZodReadonly = "ZodReadonly"));
    })(jo || (jo = {}));
    ((SAu = (t, e = { message: `Input not instance of ${t.name}` }) => zno((r) => r instanceof t, e)),
      (Yno = Kj.create),
      (Kno = aX.create),
      (wAu = Hfe.create),
      (xAu = uX.create),
      (Jno = cX.create),
      (TAu = lX.create),
      (DAu = jfe.create),
      (IAu = mX.create),
      (RAu = dX.create),
      (kAu = Jj.create),
      (OAu = lP.create),
      (NAu = Cw.create),
      (PAu = Qfe.create),
      (BAu = mP.create),
      (LAu = N9.create),
      (MAu = N9.strictCreate),
      (FAu = fX.create),
      (UAu = LAt.create),
      ($Au = pX.create),
      (jAu = s7.create),
      (QAu = MAt.create),
      (GAu = Gfe.create),
      (qAu = qfe.create),
      (HAu = FAt.create),
      (VAu = hX.create),
      (WAu = gX.create),
      (zAu = bX.create),
      (YAu = AX.create),
      (KAu = Xj.create),
      (JAu = Xv.create),
      (XAu = Kv.create),
      (ZAu = a7.create),
      (e2u = Xv.createWithPreprocess),
      (t2u = YDe.create),
      (r2u = () => Yno().optional()),
      (n2u = () => Kno().optional()),
      (i2u = () => Jno().optional()),
      (o2u = {
        string: (t) => Kj.create({ ...t, coerce: !0 }),
        number: (t) => aX.create({ ...t, coerce: !0 }),
        boolean: (t) => cX.create({ ...t, coerce: !0 }),
        bigint: (t) => uX.create({ ...t, coerce: !0 }),
        date: (t) => lX.create({ ...t, coerce: !0 }),
      }),
      (s2u = ko));
  });
var qe = {};
Wi(qe, {
  BRAND: () => vAu,
  DIRTY: () => sX,
  EMPTY_PATH: () => eAu,
  INVALID: () => ko,
  NEVER: () => s2u,
  OK: () => WA,
  ParseStatus: () => ib,
  Schema: () => Da,
  ZodAny: () => Jj,
  ZodArray: () => mP,
  ZodBigInt: () => uX,
  ZodBoolean: () => cX,
  ZodBranded: () => zDe,
  ZodCatch: () => _X,
  ZodDate: () => lX,
  ZodDefault: () => yX,
  ZodDiscriminatedUnion: () => LAt,
  ZodEffects: () => Xv,
  ZodEnum: () => bX,
  ZodError: () => O9,
  ZodFirstPartyTypeKind: () => jo,
  ZodFunction: () => FAt,
  ZodIntersection: () => pX,
  ZodIssueCode: () => tn,
  ZodLazy: () => hX,
  ZodLiteral: () => gX,
  ZodMap: () => Gfe,
  ZodNaN: () => Hfe,
  ZodNativeEnum: () => AX,
  ZodNever: () => Cw,
  ZodNull: () => dX,
  ZodNullable: () => a7,
  ZodNumber: () => aX,
  ZodObject: () => N9,
  ZodOptional: () => Kv,
  ZodParsedType: () => ti,
  ZodPipeline: () => YDe,
  ZodPromise: () => Xj,
  ZodReadonly: () => EX,
  ZodRecord: () => MAt,
  ZodSchema: () => Da,
  ZodSet: () => qfe,
  ZodString: () => Kj,
  ZodSymbol: () => jfe,
  ZodTransformer: () => Xv,
  ZodTuple: () => s7,
  ZodType: () => Da,
  ZodUndefined: () => mX,
  ZodUnion: () => fX,
  ZodUnknown: () => lP,
  ZodVoid: () => Qfe,
  addIssueToContext: () => Fn,
  any: () => kAu,
  array: () => BAu,
  bigint: () => xAu,
  boolean: () => Jno,
  coerce: () => o2u,
  custom: () => zno,
  date: () => TAu,
  datetimeRegex: () => Vno,
  defaultErrorMap: () => uP,
  discriminatedUnion: () => UAu,
  effect: () => JAu,
  enum: () => zAu,
  function: () => HAu,
  getErrorMap: () => Ffe,
  getParsedType: () => o7,
  instanceof: () => SAu,
  intersection: () => $Au,
  isAborted: () => PAt,
  isAsync: () => Ufe,
  isDirty: () => BAt,
  isValid: () => Yj,
  late: () => CAu,
  lazy: () => VAu,
  literal: () => WAu,
  makeIssue: () => WDe,
  map: () => GAu,
  nan: () => wAu,
  nativeEnum: () => YAu,
  never: () => NAu,
  null: () => RAu,
  nullable: () => ZAu,
  number: () => Kno,
  object: () => LAu,
  objectUtil: () => Tvr,
  oboolean: () => i2u,
  onumber: () => n2u,
  optional: () => XAu,
  ostring: () => r2u,
  pipeline: () => t2u,
  preprocess: () => e2u,
  promise: () => KAu,
  quotelessJson: () => Jbu,
  record: () => QAu,
  set: () => qAu,
  setErrorMap: () => Zbu,
  strictObject: () => MAu,
  string: () => Yno,
  symbol: () => DAu,
  transformer: () => JAu,
  tuple: () => jAu,
  undefined: () => IAu,
  union: () => FAu,
  unknown: () => OAu,
  util: () => mu,
  void: () => PAu,
});
var Ovr = j(() => {
  NAt();
  Ivr();
  $no();
  VDe();
  Xno();
  OAt();
});
var KDe = j(() => {
  Ovr();
  Ovr();
});
var UAt,
  Zno,
  Nvr = j(() => {
    "use strict";
    ((UAt = "{{args}}"), (Zno = "!{"));
  });
var $At,
  jAt,
  eio = j(() => {
    "use strict";
    Nvr();
    (($At = class {
      async process(e, r) {
        return e.replaceAll(UAt, r.invocation.args);
      }
    }),
      (jAt = class {
        async process(e, r) {
          return r.invocation.args
            ? `${e}

${r.invocation.raw}`
            : e;
        }
      }));
  });
var JDe,
  QAt,
  tio = j(() => {
    "use strict";
    Ot();
    Sj();
    ((JDe = class extends Error {
      constructor(r, n) {
        super(r);
        this.commandsToConfirm = n;
        this.name = "ConfirmationRequiredError";
      }
    }),
      (QAt = class t {
        constructor(e) {
          this.commandName = e;
        }
        static SHELL_INJECTION_REGEX = /!\{([^}]*)\}/g;
        async process(e, r) {
          let { config: n, sessionShellAllowlist: o } = { ...r.services, ...r.session },
            s = [],
            a = new Set(),
            u = [...e.matchAll(t.SHELL_INJECTION_REGEX)];
          if (u.length === 0) return e;
          for (let m of u) {
            let d = m[1].trim(),
              { allAllowed: f, disallowedCommands: p, blockReason: h, isHardDenial: g } = oat(d, n, o);
            if (!f) {
              if (g)
                throw new Error(
                  `${this.commandName} cannot be run. ${h || "A shell command in this custom command is explicitly blocked in your config settings."}`,
                );
              p.forEach((b) => a.add(b));
            }
            s.push({ fullMatch: m[0], command: d });
          }
          if (a.size > 0) throw new JDe("Shell command confirmation required", Array.from(a));
          let c = e;
          for (let { fullMatch: m, command: d } of s) {
            let f = Ta.getActiveTheme(),
              p = { ...n.getShellExecutionConfig(), defaultFg: f.colors.Foreground, defaultBg: f.colors.Background },
              { result: h } = await HO.execute(
                d,
                n.getTargetDir(),
                () => {},
                new AbortController().signal,
                n.getShellTimeout(),
                n.getShouldUseNodePtyShell(),
                p,
              ),
              g = await h;
            c = c.replace(m, g.output);
          }
          return c;
        }
      }));
  });
import { promises as a2u } from "fs";
import Zj from "path";
var rio,
  u2u,
  c2u,
  l2u,
  eQ,
  GAt = j(() => {
    "use strict";
    rio = Se(Fno(), 1);
    xO();
    KDe();
    Ot();
    Qs();
    eio();
    Nvr();
    tio();
    ((u2u = qe.object({
      prompt: qe.string({
        required_error: "The 'prompt' field is required.",
        invalid_type_error: "The 'prompt' field must be a string.",
      }),
      description: qe.string().optional(),
    })),
      (c2u = qe.object({
        prompt: qe.string({
          required_error: "The 'prompt' field is required.",
          invalid_type_error: "The 'prompt' field must be a string.",
        }),
        description: qe.string().optional(),
      })),
      (l2u = (t) => {
        let { frontmatter: e, content: r } = LY(t);
        if (e.description && typeof e.description == "string") return { prompt: r.trim(), description: e.description };
        let n = r.split(`
`),
          o,
          s = [],
          a = !1;
        for (let c of n) {
          let m = c.trim();
          if (m.startsWith("#") && !a) {
            ((o = m.replace(/^#+\s*/, "").trim()), (a = !0));
            continue;
          }
          (a || !m.startsWith("#")) && s.push(c);
        }
        for (; s.length > 0 && s[0].trim() === ""; ) s.shift();
        for (; s.length > 0 && s[s.length - 1].trim() === ""; ) s.pop();
        return {
          prompt: s.join(`
`),
          description: o || void 0,
        };
      }),
      (eQ = class {
        constructor(e) {
          this.config = e;
          this.projectRoot = e?.getProjectRoot() || process.cwd();
        }
        projectRoot;
        async loadCommands(e) {
          let r = [],
            n = { nodir: !0, dot: !0, signal: e, follow: !0 },
            o = this.getCommandDirectories();
          for (let s of o)
            try {
              let u = (await q6("**/*.{toml,md}", { ...n, cwd: s.path })).map((m) =>
                  this.parseAndAdaptFile(Zj.join(s.path, m), s.path, s.extensionName),
                ),
                c = (await Promise.all(u)).filter((m) => m !== null);
              r.push(...c);
            } catch (a) {
              a.code !== "ENOENT" && console.error(`[FileCommandLoader] Error loading commands from ${s.path}:`, a);
            }
          return r;
        }
        getCommandDirectories() {
          let e = [];
          if ((e.push({ path: rte() }), e.push({ path: nte(this.projectRoot) }), this.config)) {
            let n = this.config
              .getExtensions()
              .filter((s) => s.isActive)
              .sort((s, a) => s.name.localeCompare(a.name))
              .map((s) => ({ path: Zj.join(s.path, "commands"), extensionName: s.name }));
            e.push(...n);
            let o = this.config.getExtensionManager();
            if (o) {
              let s = o.getEnabledPlugins().sort((a, u) => a.config.name.localeCompare(u.config.name));
              for (let a of s) e.push({ path: Zj.join(a.pluginDir, "commands"), extensionName: a.config.name });
            }
          }
          return e;
        }
        async parseAndAdaptFile(e, r, n) {
          let o;
          try {
            o = await a2u.readFile(e, "utf-8");
          } catch (h) {
            return (
              console.error(
                `[FileCommandLoader] Failed to read file ${e}:`,
                h instanceof Error ? h.message : String(h),
              ),
              null
            );
          }
          let s = Zj.extname(e).toLowerCase(),
            a;
          if (s === ".toml") {
            let h;
            try {
              h = rio.default.parse(o);
            } catch (b) {
              return (
                console.error(
                  `[FileCommandLoader] Failed to parse TOML file ${e}:`,
                  b instanceof Error ? b.message : String(b),
                ),
                null
              );
            }
            let g = u2u.safeParse(h);
            if (!g.success)
              return (
                console.error(
                  `[FileCommandLoader] Skipping invalid command file: ${e}. Validation errors:`,
                  g.error.flatten(),
                ),
                null
              );
            a = g.data;
          } else if (s === ".md")
            try {
              let h = l2u(o),
                g = c2u.safeParse(h);
              if (!g.success)
                return (
                  console.error(
                    `[FileCommandLoader] Skipping invalid markdown command file: ${e}. Validation errors:`,
                    g.error.flatten(),
                  ),
                  null
                );
              a = g.data;
            } catch (h) {
              return (
                console.error(
                  `[FileCommandLoader] Failed to parse Markdown file ${e}:`,
                  h instanceof Error ? h.message : String(h),
                ),
                null
              );
            }
          else return (console.error(`[FileCommandLoader] Unsupported file extension: ${e}`), null);
          let u = Zj.relative(r, e),
            m = u
              .substring(0, u.length - Zj.extname(e).length)
              .split(Zj.sep)
              .map((h) => h.replaceAll(":", "_"))
              .join(":"),
            d = `Custom command from ${Zj.basename(e)}`,
            f = a.description || d;
          n && (f = `[${n}] ${f}`);
          let p = [];
          return (
            a.prompt.includes(Zno) && p.push(new QAt(m)),
            a.prompt.includes(UAt) ? p.push(new $At()) : p.push(new jAt()),
            {
              name: m,
              description: f,
              kind: "file",
              extensionName: n,
              action: async (h, g) => {
                if (!h.invocation)
                  return (
                    console.error(
                      `[FileCommandLoader] Critical error: Command '${m}' was executed without invocation context.`,
                    ),
                    { type: "submit_prompt", content: a.prompt }
                  );
                try {
                  let b = a.prompt;
                  for (let A of p) b = await A.process(b, h);
                  return { type: "submit_prompt", content: b };
                } catch (b) {
                  if (b instanceof JDe)
                    return {
                      type: "confirm_shell_commands",
                      commandsToConfirm: b.commandsToConfirm,
                      originalInvocation: { raw: h.invocation.raw },
                    };
                  throw b;
                }
              },
            }
          );
        }
      }));
  });
var tQ,
  qAt = j(() => {
    "use strict";
    Ot();
    Qs();
    tQ = class {
      constructor(e) {
        this.config = e;
      }
      loadCommands(e) {
        let r = [];
        if (!this.config) return Promise.resolve([]);
        let n = this.config.getMcpServers() || {};
        for (let o in n) {
          let s = y8r(this.config, o) || [];
          for (let a of s) {
            let c = {
              name: `${a.name}`,
              description: a.description || `Invoke prompt ${a.name}`,
              kind: "mcp-prompt",
              subCommands: [
                {
                  name: "help",
                  description: "Show help for this prompt",
                  kind: "mcp-prompt",
                  action: async () => {
                    if (!a.arguments || a.arguments.length === 0)
                      return { type: "message", messageType: "info", content: `Prompt "${a.name}" has no arguments.` };
                    let m = `Arguments for "${a.name}":

`;
                    a.arguments &&
                      a.arguments.length > 0 &&
                      ((m += `You can provide arguments by name (e.g., --argName="value") or by position.

`),
                      (m += `e.g., ${a.name} ${a.arguments?.map((d) => '"foo"')} is equivalent to ${a.name} ${a.arguments?.map((d) => `--${d.name}="foo"`)}

`));
                    for (let d of a.arguments)
                      ((m += `  --${d.name}
`),
                        d.description &&
                          (m += `    ${d.description}
`),
                        (m += `    (required: ${d.required ? "yes" : "no"})

`));
                    return { type: "message", messageType: "info", content: m };
                  },
                },
              ],
              action: async (m, d) => {
                if (!this.config) return { type: "message", messageType: "error", content: "Config not loaded." };
                let f = this.parseArgs(d, a.arguments);
                if (f instanceof Error) return { type: "message", messageType: "error", content: f.message };
                try {
                  if (!(this.config.getMcpServers() || {})[o])
                    return {
                      type: "message",
                      messageType: "error",
                      content: `MCP server config not found for '${o}'.`,
                    };
                  let g = await a.invoke(f);
                  if (g.error)
                    return { type: "message", messageType: "error", content: `Error invoking prompt: ${g.error}` };
                  let A = g.messages?.[0]?.content;
                  if (
                    !A ||
                    (typeof A == "object" && "type" in A && A.type !== "text") ||
                    (typeof A == "object" && "type" in A && A.type === "text" && !A.text)
                  )
                    return {
                      type: "message",
                      messageType: "error",
                      content: "Received an empty or invalid prompt response from the server.",
                    };
                  let y = typeof A == "object" && "type" in A && A.type === "text" ? A.text : A;
                  return { type: "submit_prompt", content: JSON.stringify(y) };
                } catch (p) {
                  return { type: "message", messageType: "error", content: `Error: ${mr(p)}` };
                }
              },
              completion: async (m, d) => {
                if (!a || !a.arguments) return [];
                let f = [],
                  p = new Set((d.match(/--([^=]+)/g) || []).map((h) => h.substring(2)));
                for (let h of a.arguments) p.has(h.name) || f.push(`--${h.name}=""`);
                return f;
              },
            };
            r.push(c);
          }
        }
        return Promise.resolve(r);
      }
      parseArgs(e, r) {
        let n = {},
          o = {},
          s = /--([^=]+)=(?:"((?:\\.|[^"\\])*)"|([^ ]*))/g,
          a,
          u = [],
          c = 0;
        for (; (a = s.exec(e)) !== null; ) {
          let p = a[1],
            h = a[2] ?? a[3];
          ((n[p] = h), a.index > c && u.push(e.substring(c, a.index).trim()), (c = s.lastIndex));
        }
        c < e.length && u.push(e.substring(c).trim());
        let m = u.join(" ").split(/ +/);
        if (!r) return o;
        for (let p of r) n[p.name] && (o[p.name] = n[p.name]);
        let d = r.filter((p) => p.required && !o[p.name]),
          f = [];
        for (let p = 0; p < d.length; p++) m.length > p && m[p] ? (o[d[p].name] = m[p]) : f.push(d[p].name);
        if (f.length > 0) {
          let p = f.map((h) => `--${h}`).join(", ");
          return new Error(`Missing required argument(s): ${p}`);
        }
        return o;
      }
    };
  });
import * as zAt from "fs/promises";
async function bio(t) {
  return await _2u(t);
}
async function Bvr(t, e) {
  try {
    await zAt.access(t);
    let n = (await zAt.readFile(t, "utf-8"))
      .split(
        `
`,
      )
      .filter((u) => u.trim());
    if (n.length === 0) return null;
    let o = [];
    for (let u of n)
      try {
        let c = JSON.parse(u);
        o.push(c);
      } catch (c) {
        console.warn(`Failed to parse JSONL line: ${u}, error: ${c}`);
      }
    if (o.length === 0) return null;
    let s = await rQ(o, e);
    return s ? (s.chatHistory.length > 0 && e.setPendingHistoryRestore(s.chatHistory), s.historyItems) : await Zv(o, e);
  } catch (r) {
    return (console.error(`Error loading conversation from JSONL file ${t}:`, r), null);
  }
}
function zfe(t, e) {
  try {
    return (e(t), !0);
  } catch (r) {
    return (console.error(`Error restoring conversation history: ${r}`), !1);
  }
}
async function _2u(t) {
  try {
    let e = new hf();
    await e.initialize();
    let r = await e.resumeLatestConversation(t.getProjectRoot());
    if (!r) return null;
    let n = await e.getConversationHistory(r),
      o = await rQ(n, t);
    return o
      ? (o.chatHistory.length > 0 && t.setPendingHistoryRestore(o.chatHistory),
        { historyItems: o.historyItems, sessionId: r })
      : { historyItems: await Zv(n, t), sessionId: r };
  } catch (e) {
    return (console.error(`Error loading most recent conversation (new system): ${e}`), null);
  }
}
function E2u(t) {
  switch (t) {
    case "read_file":
      return "ReadFile";
    case "TodoWrite":
      return "Update Todos";
    case "write_file":
      return "WriteFile";
    case "replace":
      return "Edit";
    case "run_shell_command":
      return "Shell";
    case "search_file_content":
      return "Grep";
    case "list_directory":
      return "LS";
    case "glob":
      return "Glob";
    case "web_search":
      return "WebSearch";
    case "google_web_search":
      return "WebSearch";
    case "web_fetch":
      return "WebFetch";
    case "read_many_files":
      return "ReadManyFiles";
    case "TodoRead":
      return "Read Todos";
    case "save_memory":
      return "Save Memory";
    default:
      return t;
  }
}
async function Zv(t, e) {
  let r = [],
    n = new Map(),
    o = new Map();
  for (let s of t) {
    if (s.type === "assistant") {
      let a = s;
      if ("message" in a && a.message && "content" in a.message && Array.isArray(a.message.content))
        for (let u of a.message.content)
          u.type === "tool_use" && u.id && u.name && u.input && o.set(u.id, { toolName: u.name, parameters: u.input });
    }
    if (s.type === "user" && "toolUseResult" in s && s.toolUseResult) {
      let a = s;
      if (a.message && a.message.content && Array.isArray(a.message.content)) {
        for (let u of a.message.content)
          if (u.type === "tool_result" && u.tool_use_id && u.content && a.toolUseResult)
            try {
              let c = typeof u.content == "string" ? u.content : JSON.stringify(u.content),
                m = typeof u.content == "string" ? JSON.parse(u.content) : u.content;
              n.set(u.tool_use_id, { content: c, parsedContent: m, toolResult: a.toolUseResult });
            } catch {
              let m = typeof u.content == "string" ? u.content : JSON.stringify(u.content);
              n.set(u.tool_use_id, { content: m, parsedContent: null, toolResult: a.toolUseResult });
            }
      }
    }
  }
  for (let s = 0; s < t.length; s++) {
    let a = t[s];
    if (a.type === "user") {
      if ("isCompactSummary" in a && a.isCompactSummary) {
        let d = a.compressionInfo;
        if (d) {
          r.push({
            id: Date.now() + s,
            type: "compression",
            compression: {
              isPending: !1,
              originalTokenCount: d.originalTokenCount,
              newTokenCount: d.newTokenCount,
              summary: d.summary,
            },
          });
          continue;
        }
      }
      if ("isMeta" in a && a.isMeta) continue;
      if ("toolUseResult" in a && a.toolUseResult) {
        let m = a;
        if (m.message && m.message.content && Array.isArray(m.message.content)) {
          let d = [];
          for (let f of m.message.content)
            if (f.type === "tool_result" && f.tool_use_id && f.content && m.toolUseResult) {
              let p = f.tool_use_id,
                h = m.toolUseResult?.toolName || "Unknown Tool",
                g = E2u(h),
                b = n.get(p),
                A = "",
                y = o.get(p);
              if (y && e)
                try {
                  let R = (await e.getToolRegistry()).getTool(y.toolName);
                  R && (A = R.getDescription(y.parameters));
                } catch (k) {
                  console.warn(`Failed to generate description for tool ${y.toolName}:`, k);
                }
              let E;
              if (b && b.parsedContent && b.parsedContent.resultDisplay) {
                let k = b.parsedContent.resultDisplay;
                if (typeof k == "string") E = k;
                else if (k && typeof k == "object") {
                  let R = k;
                  "fileDiff" in R && "fileName" in R && "originalContent" in R && "newContent" in R
                    ? (E = R)
                    : (E = JSON.stringify(k));
                }
              }
              let v = !["run_shell_command"].includes(h),
                C = o.get(p),
                x = {
                  callId: p,
                  name: g,
                  description: A,
                  resultDisplay: E,
                  status: b ? "Success" : "Pending",
                  confirmationDetails: void 0,
                  renderOutputAsMarkdown: v,
                  args: C ? C.parameters : {},
                };
              d.push(x);
            }
          if (d.length > 0) {
            let f = { id: Date.now() + s + 1e3, type: "tool_group", tools: d };
            r.push(f);
          }
        }
        continue;
      }
      let u = a,
        c = { id: Date.now() + s, type: "user", text: WAt(a) };
      if (Array.isArray(u.message?.content)) {
        let m = u.message.content.map((d) =>
          d.type === "text"
            ? { text: d.text }
            : d.type === "image" && d.source
              ? { inlineData: { mimeType: d.source.media_type, data: d.source.data }, imageId: d.imageId }
              : { text: "" },
        );
        c.content = m;
      }
      r.push(c);
    } else if (a.type === "assistant") {
      let u = a;
      if ("message" in u && u.message && "content" in u.message) {
        let c = u.message.content;
        if (Array.isArray(c)) {
          let m = c
            .filter((d) => d.type === "text")
            .map((d) => d.text)
            .filter(Boolean);
          if (m.length > 0) {
            let d = m.join(`
`);
            try {
              let f = JSON.parse(d);
              if (f.slashCommandOutput && typeof f.slashCommandOutput == "object") {
                let p = f.slashCommandOutput;
                r.push({ id: Date.now() + s, ...p });
              } else r.push({ id: Date.now() + s, type: "iflow", text: d });
            } catch {
              r.push({ id: Date.now() + s, type: "iflow", text: d });
            }
          }
        } else r.push({ id: Date.now() + s, type: "iflow", text: WAt(a) });
      } else r.push({ id: Date.now() + s, type: "iflow", text: WAt(a) });
    } else r.push({ id: Date.now() + s, type: "info", text: WAt(a) });
  }
  return r;
}
function WAt(t) {
  if ("message" in t && t.message && typeof t.message == "object" && "content" in t.message) {
    if (Array.isArray(t.message.content))
      return t.type === "user"
        ? t.message.content
            .map((e) => (e.type === "text" ? e.text : e.imageId ? `[Image #${e.imageId}]` : "[Image]"))
            .filter(Boolean)
            .join("")
        : t.message.content
            .filter((e) => e.type === "text")
            .map((e) => e.text)
            .filter(Boolean).join(`
`);
    if (typeof t.message.content == "string") return t.message.content;
  }
  return JSON.stringify(t);
}
function dP(t, e) {
  let r = [];
  for (let n of t)
    if (n.type === "user")
      n.content && Array.isArray(n.content)
        ? r.push({ role: "user", parts: n.content })
        : r.push({ role: "user", parts: [{ text: n.text }] });
    else if (n.type === "compression") r.push({ role: "user", parts: [{ text: n.compression.summary }] });
    else if (n.type === "iflow" || n.type === "gemini_content") r.push({ role: "model", parts: [{ text: n.text }] });
    else if (n.type === "tool_group") {
      let o = [],
        s = [];
      for (let a of n.tools) {
        let u = a;
        o.push({ functionCall: { id: a.callId, name: Pvr(a.name), args: u.args || {} } });
        let c = "";
        if (e && e.getGeminiClient())
          try {
            let d = e.getGeminiClient().getReminderManager();
            if (d) {
              let f = Pvr(a.name),
                p = a;
              c = d.injectIntoToolResult(c, e.getSessionId(), f, p.args);
            }
          } catch (m) {
            console.debug("Unable to inject system reminders:", m);
          }
        s.push({ functionResponse: { id: a.callId, name: Pvr(a.name), response: { output: c } } });
      }
      (o.length > 0 && r.push({ role: "model", parts: o }), s.length > 0 && r.push({ role: "user", parts: s }));
    }
  return r;
}
function Pvr(t) {
  switch (t) {
    case "ReadFile":
      return "read_file";
    case "Update Todos":
      return "TodoWrite";
    case "WriteFile":
      return "write_file";
    case "Edit":
      return "replace";
    case "Shell":
      return "run_shell_command";
    case "Grep":
      return "search_file_content";
    case "LS":
      return "list_directory";
    case "Glob":
      return "glob";
    case "WebSearch":
      return "web_search";
    case "WebFetch":
      return "web_fetch";
    case "ReadManyFiles":
      return "read_many_files";
    case "Read Todos":
      return "TodoRead";
    case "Save Memory":
      return "save_memory";
    default:
      return t.toLowerCase().replace(/\s+/g, "_");
  }
}
async function rQ(t, e) {
  let r = t.find((c) => "isCompactSummary" in c && c.isCompactSummary);
  if (!r || t.findIndex((c) => "isCompactSummary" in c && c.isCompactSummary) === -1) return null;
  let o = [];
  r.message && r.message.content && o.push({ role: "user", parts: [{ text: r.message.content }] });
  let a = t.slice(1).filter((c) => !("isMeta" in c && c.isMeta));
  for (let c of a)
    if (c.type === "user" && !("toolUseResult" in c)) {
      let m = c;
      m.message &&
        typeof m.message.content == "string" &&
        o.push({ role: "user", parts: [{ text: m.message.content }] });
    } else if (c.type === "assistant") {
      let m = c;
      m.message?.content &&
        o.push({
          role: "model",
          parts: m.message.content.map((d) =>
            d.type === "text"
              ? { text: d.text }
              : d.type === "tool_use"
                ? { functionCall: { name: d.name, args: d.input } }
                : d,
          ),
        });
    }
  return { historyItems: await Zv(t, e), chatHistory: o };
}
var xX = j(() => {
  "use strict";
  ra();
  WN();
});