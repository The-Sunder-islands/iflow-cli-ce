/**
 * @module Wme
 * @category app/core
 * @label iflow-core
 * @position 1759 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wme) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends, class t extends uwe
 * Functions: r
 * Features: esbuild module exports: Wme, dotenv related
 * === End semantic info ===
 */


var Wme = T((lmt) => {
  "use strict";
  var M8i = () => (t, e) => async (r) => {
      try {
        let n = await t(r),
          { clientName: o, commandName: s, logger: a, dynamoDbDocumentClientOptions: u = {} } = e,
          { overrideInputFilterSensitiveLog: c, overrideOutputFilterSensitiveLog: m } = u,
          d = c ?? e.inputFilterSensitiveLog,
          f = m ?? e.outputFilterSensitiveLog,
          { $metadata: p, ...h } = n.output;
        return (a?.info?.({ clientName: o, commandName: s, input: d(r.input), output: f(h), metadata: p }), n);
      } catch (n) {
        let { clientName: o, commandName: s, logger: a, dynamoDbDocumentClientOptions: u = {} } = e,
          { overrideInputFilterSensitiveLog: c } = u,
          m = c ?? e.inputFilterSensitiveLog;
        throw (a?.error?.({ clientName: o, commandName: s, input: m(r.input), error: n, metadata: n.$metadata }), n);
      }
    },
    F8i = { name: "loggerMiddleware", tags: ["LOGGER"], step: "initialize", override: !0 },
    dka = (t) => ({
      applyToStack: (e) => {
        e.add(M8i(), F8i);
      },
    });
  lmt.getLoggerPlugin = dka;
  lmt.loggerMiddleware = M8i;
  lmt.loggerMiddlewareOptions = F8i;
});
var U8i = {};
Wi(U8i, { InvokeStore: () => Kgr, InvokeStoreBase: () => uwe });
var awe,
  Wgr,
  uwe,
  zgr,
  Ygr,
  Kgr,
  $8i = j(() => {
    ((awe = {
      REQUEST_ID: Symbol.for("_AWS_LAMBDA_REQUEST_ID"),
      X_RAY_TRACE_ID: Symbol.for("_AWS_LAMBDA_X_RAY_TRACE_ID"),
      TENANT_ID: Symbol.for("_AWS_LAMBDA_TENANT_ID"),
    }),
      (Wgr = ["true", "1"].includes(process.env?.AWS_LAMBDA_NODEJS_NO_GLOBAL_AWSLAMBDA ?? "")));
    Wgr || (globalThis.awslambda = globalThis.awslambda || {});
    ((uwe = class {
      static PROTECTED_KEYS = awe;
      isProtectedKey(e) {
        return Object.values(awe).includes(e);
      }
      getRequestId() {
        return this.get(awe.REQUEST_ID) ?? "-";
      }
      getXRayTraceId() {
        return this.get(awe.X_RAY_TRACE_ID);
      }
      getTenantId() {
        return this.get(awe.TENANT_ID);
      }
    }),
      (zgr = class extends uwe {
        currentContext;
        getContext() {
          return this.currentContext;
        }
        hasContext() {
          return this.currentContext !== void 0;
        }
        get(e) {
          return this.currentContext?.[e];
        }
        set(e, r) {
          if (this.isProtectedKey(e)) throw new Error(`Cannot modify protected Lambda context field: ${String(e)}`);
          ((this.currentContext = this.currentContext || {}), (this.currentContext[e] = r));
        }
        run(e, r) {
          return ((this.currentContext = e), r());
        }
      }),
      (Ygr = class t extends uwe {
        als;
        static async create() {
          let e = new t(),
            r = await import("node:async_hooks");
          return ((e.als = new r.AsyncLocalStorage()), e);
        }
        getContext() {
          return this.als.getStore();
        }
        hasContext() {
          return this.als.getStore() !== void 0;
        }
        get(e) {
          return this.als.getStore()?.[e];
        }
        set(e, r) {
          if (this.isProtectedKey(e)) throw new Error(`Cannot modify protected Lambda context field: ${String(e)}`);
          let n = this.als.getStore();
          if (!n) throw new Error("No context available");
          n[e] = r;
        }
        run(e, r) {
          return this.als.run(e, r);
        }
      }));
    (function (t) {
      let e = null;
      async function r() {
        return (
          e ||
            (e = (async () => {
              let o = "AWS_LAMBDA_MAX_CONCURRENCY" in process.env ? await Ygr.create() : new zgr();
              return !Wgr && globalThis.awslambda?.InvokeStore
                ? globalThis.awslambda.InvokeStore
                : (!Wgr && globalThis.awslambda && (globalThis.awslambda.InvokeStore = o), o);
            })()),
          e
        );
      }
      ((t.getInstanceAsync = r),
        (t._testing =
          process.env.AWS_LAMBDA_BENCHMARK_MODE === "1"
            ? {
                reset: () => {
                  ((e = null),
                    globalThis.awslambda?.InvokeStore && delete globalThis.awslambda.InvokeStore,
                    (globalThis.awslambda = { InvokeStore: void 0 }));
                },
              }
            : void 0));
    })(Kgr || (Kgr = {}));
  });