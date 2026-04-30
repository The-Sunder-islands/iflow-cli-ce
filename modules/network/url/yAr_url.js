/**
 * @module yAr
 * @category network/url
 * @label url
 * @position 1796 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yAr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yAr = T((Jmt) => {
  "use strict";
  Object.defineProperty(Jmt, "__esModule", { value: !0 });
  Jmt.fromHttp = void 0;
  var ZBa = M_i();
  Object.defineProperty(Jmt, "fromHttp", {
    enumerable: !0,
    get: function () {
      return ZBa.fromHttp;
    },
  });
});
function eLa(t) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: { name: "sso-oauth", region: t.region },
    propertiesExtractor: (e, r) => ({ signingProperties: { config: e, context: r } }),
  };
}
function tLa(t) {
  return { schemeId: "smithy.api#noAuth" };
}
var wwe,
  F_i,
  U_i,
  $_i,
  _Ar = j(() => {
    Wp();
    ((wwe = Se(Hg())),
      (F_i = async (t, e, r) => ({
        operation: (0, wwe.getSmithyContext)(e).operation,
        region:
          (await (0, wwe.normalizeProvider)(t.region)()) ||
          (() => {
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
          })(),
      })));
    ((U_i = (t) => {
      let e = [];
      switch (t.operation) {
        case "CreateToken": {
          e.push(tLa(t));
          break;
        }
        default:
          e.push(eLa(t));
      }
      return e;
    }),
      ($_i = (t) => {
        let e = xN(t);
        return Object.assign(e, { authSchemePreference: (0, wwe.normalizeProvider)(t.authSchemePreference ?? []) });
      }));
  });
var j_i,
  Q_i,
  EAr = j(() => {
    ((j_i = (t) =>
      Object.assign(t, {
        useDualstackEndpoint: t.useDualstackEndpoint ?? !1,
        useFipsEndpoint: t.useFipsEndpoint ?? !1,
        defaultSigningName: "sso-oauth",
      })),
      (Q_i = {
        UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
        Endpoint: { type: "builtInParams", name: "endpoint" },
        Region: { type: "builtInParams", name: "region" },
        UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
      }));
  });
var ade,
  Xmt = j(() => {
    ade = {
      name: "@aws-sdk/nested-clients",
      version: "3.966.0",
      description: "Nested clients for AWS SDK packages.",
      main: "./dist-cjs/index.js",
      module: "./dist-es/index.js",
      types: "./dist-types/index.d.ts",
      scripts: {
        build: "yarn lint && concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
        "build:cjs": "node ../../scripts/compilation/inline nested-clients",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": 'yarn g:turbo run build -F="$npm_package_name"',
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
        lint: "node ../../scripts/validation/submodules-linter.js --pkg nested-clients",
        test: "yarn g:vitest run",
        "test:watch": "yarn g:vitest watch",
      },
      engines: { node: ">=18.0.0" },
      sideEffects: !1,
      author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" },
      license: "Apache-2.0",
      dependencies: {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "3.966.0",
        "@aws-sdk/middleware-host-header": "3.965.0",
        "@aws-sdk/middleware-logger": "3.965.0",
        "@aws-sdk/middleware-recursion-detection": "3.965.0",
        "@aws-sdk/middleware-user-agent": "3.966.0",
        "@aws-sdk/region-config-resolver": "3.965.0",
        "@aws-sdk/types": "3.965.0",
        "@aws-sdk/util-endpoints": "3.965.0",
        "@aws-sdk/util-user-agent-browser": "3.965.0",
        "@aws-sdk/util-user-agent-node": "3.966.0",
        "@smithy/config-resolver": "^4.4.5",
        "@smithy/core": "^3.20.1",
        "@smithy/fetch-http-handler": "^5.3.8",
        "@smithy/hash-node": "^4.2.7",
        "@smithy/invalid-dependency": "^4.2.7",
        "@smithy/middleware-content-length": "^4.2.7",
        "@smithy/middleware-endpoint": "^4.4.2",
        "@smithy/middleware-retry": "^4.4.18",
        "@smithy/middleware-serde": "^4.2.8",
        "@smithy/middleware-stack": "^4.2.7",
        "@smithy/node-config-provider": "^4.3.7",
        "@smithy/node-http-handler": "^4.4.7",
        "@smithy/protocol-http": "^5.3.7",
        "@smithy/smithy-client": "^4.10.3",
        "@smithy/types": "^4.11.0",
        "@smithy/url-parser": "^4.2.7",
        "@smithy/util-base64": "^4.3.0",
        "@smithy/util-body-length-browser": "^4.2.0",
        "@smithy/util-body-length-node": "^4.2.1",
        "@smithy/util-defaults-mode-browser": "^4.3.17",
        "@smithy/util-defaults-mode-node": "^4.2.20",
        "@smithy/util-endpoints": "^3.2.7",
        "@smithy/util-middleware": "^4.2.7",
        "@smithy/util-retry": "^4.2.7",
        "@smithy/util-utf8": "^4.2.0",
        tslib: "^2.6.2",
      },
      devDependencies: { concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "5.0.10", typescript: "~5.8.3" },
      typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } },
      files: [
        "./signin.d.ts",
        "./signin.js",
        "./sso-oidc.d.ts",
        "./sso-oidc.js",
        "./sts.d.ts",
        "./sts.js",
        "dist-*/**",
      ],
      browser: {
        "./dist-es/submodules/signin/runtimeConfig": "./dist-es/submodules/signin/runtimeConfig.browser",
        "./dist-es/submodules/sso-oidc/runtimeConfig": "./dist-es/submodules/sso-oidc/runtimeConfig.browser",
        "./dist-es/submodules/sts/runtimeConfig": "./dist-es/submodules/sts/runtimeConfig.browser",
      },
      "react-native": {},
      homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients",
      repository: {
        type: "git",
        url: "https://github.com/aws/aws-sdk-js-v3.git",
        directory: "packages/nested-clients",
      },
      exports: {
        "./package.json": "./package.json",
        "./sso-oidc": {
          types: "./dist-types/submodules/sso-oidc/index.d.ts",
          module: "./dist-es/submodules/sso-oidc/index.js",
          node: "./dist-cjs/submodules/sso-oidc/index.js",
          import: "./dist-es/submodules/sso-oidc/index.js",
          require: "./dist-cjs/submodules/sso-oidc/index.js",
        },
        "./sts": {
          types: "./dist-types/submodules/sts/index.d.ts",
          module: "./dist-es/submodules/sts/index.js",
          node: "./dist-cjs/submodules/sts/index.js",
          import: "./dist-es/submodules/sts/index.js",
          require: "./dist-cjs/submodules/sts/index.js",
        },
        "./signin": {
          types: "./dist-types/submodules/signin/index.d.ts",
          module: "./dist-es/submodules/signin/index.js",
          node: "./dist-cjs/submodules/signin/index.js",
          import: "./dist-es/submodules/signin/index.js",
          require: "./dist-cjs/submodules/signin/index.js",
        },
      },
    };
  });