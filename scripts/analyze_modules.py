#!/usr/bin/env python3
"""Analyze esbuild bundle modules, identify library/framework, categorize by function."""

import re
import json
import os
import sys

BUNDLE_PATH = '/run/media/starlight/1/iflow/iflow_formatted.js'
OUTPUT_PATH = '/run/media/starlight/1/iflow/scripts/module_analysis.json'

# Known library signatures - string/pattern → library name
LIB_SIGNATURES = [
    # (regex pattern, library_name, category)
    (r'Symbol\.for\("react\.', 'react', 'ui/react'),
    (r'react-reconciler', 'react-reconciler', 'ui/react'),
    (r'react-dom', 'react-dom', 'ui/react'),
    (r'scheduler/cjs/', 'scheduler', 'ui/react'),
    (r'Copyright.*Meta Platforms', 'react', 'ui/react'),
    (r'@grpc/', 'grpc', 'network/grpc'),
    (r'google-protobuf', 'protobuf', 'network/grpc'),
    (r'Copyright.*gRPC', 'grpc', 'network/grpc'),
    (r'@opentelemetry/', 'opentelemetry', 'telemetry/otel'),
    (r'OpenTelemetry', 'opentelemetry', 'telemetry/otel'),
    (r'@google/genai', 'google-genai', 'model/google'),
    (r'google\.ai\.generativelanguage', 'google-genai', 'model/google'),
    (r'Copyright.*Google LLC', 'google-common', 'model/google'),
    (r'commander', 'commander', 'cli/args'),
    (r'yargs', 'yargs', 'cli/args'),
    (r'ajv', 'ajv', 'utils/validation'),
    (r'ink', 'ink', 'ui/ink'),
    (r'ansi-escapes', 'ansi-escapes', 'ui/terminal'),
    (r'chalk', 'chalk', 'ui/terminal'),
    (r'boxen', 'boxen', 'ui/terminal'),
    (r'cli-cursor', 'cli-cursor', 'ui/terminal'),
    (r'marked', 'marked', 'utils/markdown'),
    (r'highlight\.js', 'highlight-js', 'utils/markdown'),
    (r'mime-types', 'mime-types', 'utils/net'),
    (r'mime-db', 'mime-db', 'utils/net'),
    (r'debug/', 'debug', 'utils/logging'),
    (r'Copyright.*Feross', 'safe-buffer', 'utils/buffer'),
    (r'shell-quote', 'shell-quote', 'utils/shell'),
    (r'Copyright.*Jonathan Ong', 'mime', 'utils/net'),
    (r'cross-spawn', 'cross-spawn', 'utils/process'),
    (r'strip-ansi', 'strip-ansi', 'ui/terminal'),
    (r'wrap-ansi', 'wrap-ansi', 'ui/terminal'),
    (r'string-width', 'string-width', 'ui/terminal'),
    (r'is-fullwidth-code-point', 'is-fullwidth', 'ui/terminal'),
    (r'emoji-regex', 'emoji-regex', 'ui/terminal'),
    (r'node-notifier', 'node-notifier', 'system/notify'),
    (r'require-in-the-middle', 'require-in-the-middle', 'system/instrument'),
    (r'import-in-the-middle', 'import-in-the-middle', 'system/instrument'),
    (r'@grpc/proto-loader', 'proto-loader', 'network/grpc'),
    (r'long/umd/', 'long', 'utils/data'),
    (r'uuid', 'uuid', 'utils/id'),
    (r'node-fetch', 'node-fetch', 'network/http'),
    (r'undici', 'undici', 'network/http'),
    (r'xmlchars', 'xmlchars', 'utils/xml'),
    (r'html-entities', 'html-entities', 'utils/html'),
    (r'he/', 'he', 'utils/html'),
    (r'micromatch', 'micromatch', 'utils/fs'),
    (r'minimatch', 'minimatch', 'utils/fs'),
    (r'glob', 'glob', 'utils/fs'),
    (r'readdirp', 'readdirp', 'utils/fs'),
    (r'picomatch', 'picomatch', 'utils/fs'),
    (r'braces', 'braces', 'utils/fs'),
    (r'fast-glob', 'fast-glob', 'utils/fs'),
    (r'ignore/', 'ignore', 'utils/fs'),
    (r'rimraf', 'rimraf', 'utils/fs'),
    (r'chokidar', 'chokidar', 'utils/fs'),
    (r'anymatch', 'anymatch', 'utils/fs'),
    (r'is-binary-path', 'is-binary-path', 'utils/fs'),
    (r'readdir-scoped-modules', 'readdir-scoped', 'utils/fs'),
    (r'graceful-fs', 'graceful-fs', 'utils/fs'),
    (r'js-yaml', 'js-yaml', 'utils/config'),
    (r'toml', 'toml', 'utils/config'),
    (r'json-schema', 'json-schema', 'utils/validation'),
    (r'WebSocket', 'websocket', 'network/ws'),
    (r'ws/', 'ws', 'network/ws'),
    (r'eventsource', 'eventsource', 'network/sse'),
    (r'event-target-shim', 'event-target-shim', 'utils/events'),
    (r'buffer/', 'buffer', 'utils/buffer'),
    (r'stream/', 'stream', 'utils/stream'),
    (r'readable-stream', 'readable-stream', 'utils/stream'),
    (r'p-limit', 'p-limit', 'utils/async'),
    (r'p-queue', 'p-queue', 'utils/async'),
    (r'p-map', 'p-map', 'utils/async'),
    (r'p-retry', 'p-retry', 'utils/async'),
    (r'make-fetch-happen', 'make-fetch-happen', 'network/http'),
    (r'retry/', 'retry', 'utils/async'),
    (r'agentkeepalive', 'agentkeepalive', 'network/http'),
    (r'http-proxy-agent', 'http-proxy-agent', 'network/http'),
    (r'https-proxy-agent', 'https-proxy-agent', 'network/http'),
    (r'socks-proxy-agent', 'socks-proxy-agent', 'network/http'),
    (r'lru-cache', 'lru-cache', 'utils/cache'),
    (r'memoize', 'memoize', 'utils/cache'),
    (r'semver', 'semver', 'utils/versioning'),
    (r'compare-versions', 'compare-versions', 'utils/versioning'),
    (r'ini/', 'ini', 'utils/config'),
    (r'configstore', 'configstore', 'utils/config'),
    (r'dot-prop', 'dot-prop', 'utils/config'),
    (r'make-dir', 'make-dir', 'utils/fs'),
    (r'write-file-atomic', 'write-file-atomic', 'utils/fs'),
    (r'env-paths', 'env-paths', 'utils/config'),
    (r'os-tmpdir', 'os-tmpdir', 'system/platform'),
    (r'tmp/', 'tmp', 'system/tmp'),
    (r'which/', 'which', 'system/process'),
    (r'isexe/', 'isexe', 'system/process'),
    (r'path-key', 'path-key', 'system/process'),
    (r'merge-stream', 'merge-stream', 'utils/stream'),
    (r'JSONStream', 'JSONStream', 'utils/stream'),
    (r'jsonparse', 'jsonparse', 'utils/parsing'),
    (r'through/', 'through', 'utils/stream'),
    (r'process-nextick-args', 'process-nextick', 'utils/process'),
    (r'string_decoder', 'string-decoder', 'utils/encoding'),
    (r'iconv-lite', 'iconv-lite', 'utils/encoding'),
    (r'safer-buffer', 'safer-buffer', 'utils/buffer'),
    (r'ieee754', 'ieee754', 'utils/data'),
    (r'base64-js', 'base64-js', 'utils/encoding'),
    (r'abort-controller', 'abort-controller', 'utils/signal'),
    (r'node-abort-controller', 'node-abort-controller', 'utils/signal'),
    (r'eventemitter3', 'eventemitter3', 'utils/events'),
    (r'@protobufjs/', 'protobufjs', 'network/grpc'),
    (r'protobufjs', 'protobufjs', 'network/grpc'),
    (r'@modelcontextprotocol', 'mcp', 'protocol/mcp'),
    (r'ModelContextProtocol', 'mcp', 'protocol/mcp'),
    (r'ACP', 'acp', 'protocol/acp'),
    (r'Agent Client Protocol', 'acp', 'protocol/acp'),
    (r'WebDriver BiDi', 'bidi', 'protocol/bidi'),
    (r'playwright', 'playwright', 'browser/playwright'),
    (r'ripgrep', 'ripgrep', 'system/tools'),
    (r'gaxios', 'gaxios', 'network/http'),
    (r'google-auth-library', 'google-auth', 'model/google'),
    (r'gtoken', 'gtoken', 'model/google'),
    (r'gcp-metadata', 'gcp-metadata', 'model/google'),
    (r'gcs-resumable-upload', 'gcs-upload', 'model/google'),
    (r'google-cloud', 'google-cloud', 'model/google'),
    (r'hash-stream-validation', 'hash-validation', 'utils/crypto'),
    (r'crypto-js', 'crypto-js', 'utils/crypto'),
    (r'create-hash', 'create-hash', 'utils/crypto'),
    (r'create-hmac', 'create-hmac', 'utils/crypto'),
    (r'md5', 'md5', 'utils/crypto'),
    (r'sha\.js', 'sha-js', 'utils/crypto'),
    (r'randombytes', 'randombytes', 'utils/crypto'),
    (r'ripemd160', 'ripemd160', 'utils/crypto'),
    (r'cipher-base', 'cipher-base', 'utils/crypto'),
    (r'hash-base', 'hash-base', 'utils/crypto'),
    (r'evp_bytestokey', 'evp-bytesto', 'utils/crypto'),
    (r'pbkdf2', 'pbkdf2', 'utils/crypto'),
    (r'browserify-aes', 'browserify-aes', 'utils/crypto'),
    (r'browserify-sign', 'browserify-sign', 'utils/crypto'),
    (r'create-ecdh', 'create-ecdh', 'utils/crypto'),
    (r'diffie-hellman', 'diffie-hellman', 'utils/crypto'),
    (r'public-encrypt', 'public-encrypt', 'utils/crypto'),
    (r'randomfill', 'randomfill', 'utils/crypto'),
    (r'parse-asn1', 'parse-asn1', 'utils/crypto'),
    (r'asn1\.js', 'asn1-js', 'utils/crypto'),
    (r'bn\.js', 'bn-js', 'utils/crypto'),
    (r'brorand', 'brorand', 'utils/crypto'),
    (r'elliptic', 'elliptic', 'utils/crypto'),
    (r'hmac-drbg', 'hmac-drbg', 'utils/crypto'),
    (r'minimalistic-assert', 'minimalistic-assert', 'utils/assert'),
    (r'minimalistic-crypto-utils', 'minicrypto-utils', 'utils/crypto'),
    (r'inherits/', 'inherits', 'utils/oop'),
    (r'once/', 'once', 'utils/async'),
    (r'wrappy/', 'wrappy', 'utils/oop'),
    (r'end-of-stream', 'end-of-stream', 'utils/stream'),
    (r'pump/', 'pump', 'utils/stream'),
    (r'duplexify', 'duplexify', 'utils/stream'),
    (r'pumpify', 'pumpify', 'utils/stream'),
    (r'cyclist', 'cyclist', 'utils/stream'),
    (r'parallel-transform', 'parallel-transform', 'utils/stream'),
    (r'flush-write-stream', 'flush-write-stream', 'utils/stream'),
    (r'from2', 'from2', 'utils/stream'),
    (r'into-stream', 'into-stream', 'utils/stream'),
    (r'is-stream', 'is-stream', 'utils/stream'),
    (r'got/', 'got', 'network/http'),
    (r'@szmarczak/http-timer', 'http-timer', 'network/http'),
    (r'cacheable-request', 'cacheable-request', 'network/http'),
    (r'cacheable-lookup', 'cacheable-lookup', 'network/dns'),
    (r'resolve-alpn', 'resolve-alpn', 'network/tls'),
    (r'http2-wrapper', 'http2-wrapper', 'network/http'),
    (r'quick-lru', 'quick-lru', 'utils/cache'),
    (r'p-cancelable', 'p-cancelable', 'utils/async'),
    (r'normalize-url', 'normalize-url', 'network/url'),
    (r'responselike', 'responselike', 'network/http'),
    (r'keyv', 'keyv', 'utils/cache'),
    (r'json-buffer', 'json-buffer', 'utils/json'),
    (r'clone-response', 'clone-response', 'network/http'),
    (r'defer-to-connect', 'defer-to-connect', 'network/http'),
    (r'decompress-response', 'decompress-response', 'network/http'),
    (r'mimic-response', 'mimic-response', 'network/http'),
    (r'lowercase-keys', 'lowercase-keys', 'utils/string'),
    (r'to-readable-stream', 'to-readable-stream', 'utils/stream'),
    (r'url-parse', 'url-parse', 'network/url'),
    (r'requires-port', 'requires-port', 'network/url'),
    (r'querystringify', 'querystringify', 'network/url'),
    (r'strict-uri-encode', 'strict-uri-encode', 'network/url'),
    (r'query-string', 'query-string', 'network/url'),
    (r'split-on-first', 'split-on-first', 'utils/string'),
    (r'filter-obj', 'filter-obj', 'utils/object'),
    (r'decode-uri-component', 'decode-uri-component', 'network/url'),
    (r'whatwg-url', 'whatwg-url', 'network/url'),
    (r'whatwg-encoding', 'whatwg-encoding', 'utils/encoding'),
    (r'tr46', 'tr46', 'network/url'),
    (r'webidl-conversions', 'webidl-conversions', 'utils/encoding'),
    (r'punycode', 'punycode', 'network/url'),
    (r'data-urls', 'data-urls', 'network/url'),
    (r'jsdom', 'jsdom', 'browser/jsdom'),
    (r'cssstyle', 'cssstyle', 'browser/jsdom'),
    (r'cssom', 'cssom', 'browser/jsdom'),
    (r'nwsapi', 'nwsapi', 'browser/jsdom'),
    (r'parse5', 'parse5', 'browser/parse5'),
    (r'saxes', 'saxes', 'utils/xml'),
    (r'symbol-tree', 'symbol-tree', 'browser/jsdom'),
    (r'acorn', 'acorn', 'utils/parsing'),
    (r'tough-cookie', 'tough-cookie', 'network/cookie'),
    (r'psl', 'psl', 'network/url'),
    (r'http-parser-js', 'http-parser-js', 'network/http'),
    (r'extend/', 'extend', 'utils/object'),
    (r'websocket-driver', 'websocket-driver', 'network/ws'),
    (r'websocket-extensions', 'websocket-extensions', 'network/ws'),
    (r'is-typedarray', 'is-typedarray', 'utils/typing'),
    (r'typedarray-to-buffer', 'typedarray-to-buffer', 'utils/buffer'),
    (r'yaeti', 'yaeti', 'utils/events'),
    (r'is-arguments', 'is-arguments', 'utils/typing'),
    (r'is-generator-function', 'is-generator-function', 'utils/typing'),
    (r'foreach', 'foreach', 'utils/iter'),
    (r'available-typed-arrays', 'available-typed-arrays', 'utils/typing'),
    (r'which-typed-array', 'which-typed-array', 'utils/typing'),
    (r'call-bind', 'call-bind', 'utils/oop'),
    (r'get-intrinsic', 'get-intrinsic', 'utils/oop'),
    (r'has-symbols', 'has-symbols', 'utils/typing'),
    (r'has-proto', 'has-proto', 'utils/typing'),
    (r'object-inspect', 'object-inspect', 'utils/debug'),
    (r'side-channel', 'side-channel', 'utils/oop'),
    (r'gopd', 'gopd', 'utils/oop'),
    (r'define-data-property', 'define-data-property', 'utils/oop'),
    (r'has-property-descriptors', 'has-property-descriptors', 'utils/oop'),
    (r'set-function-length', 'set-function-length', 'utils/oop'),
    (r'function-bind', 'function-bind', 'utils/oop'),
    (r'es-define-property', 'es-define-property', 'utils/oop'),
    (r'es-errors', 'es-errors', 'utils/errors'),
    (r'dunder-proto', 'dunder-proto', 'utils/oop'),
    (r'^for-each', 'for-each', 'utils/iter'),
    (r'is-regex', 'is-regex', 'utils/typing'),
    (r'is-callable', 'is-callable', 'utils/typing'),
    (r'is-date-object', 'is-date-object', 'utils/typing'),
    (r'is-symbol', 'is-symbol', 'utils/typing'),
    (r'is-string', 'is-string', 'utils/typing'),
    (r'is-number-object', 'is-number-object', 'utils/typing'),
    (r'is-boolean-object', 'is-boolean-object', 'utils/typing'),
    (r'is-bigint', 'is-bigint', 'utils/typing'),
    (r'object-is', 'object-is', 'utils/typing'),
    (r'object-keys', 'object-keys', 'utils/object'),
    (r'object-assign', 'object-assign', 'utils/object'),
    (r'object\.assign', 'object-assign', 'utils/object'),
    (r'deep-equal', 'deep-equal', 'utils/compare'),
    (r'deepmerge', 'deepmerge', 'utils/object'),
    (r'merge2', 'merge2', 'utils/stream'),
    (r'locate-path', 'locate-path', 'utils/fs'),
    (r'find-up', 'find-up', 'utils/fs'),
    (r'path-exists', 'path-exists', 'utils/fs'),
    (r'pkg-dir', 'pkg-dir', 'utils/fs'),
    (r'pkg-up', 'pkg-up', 'utils/fs'),
    (r'read-pkg', 'read-pkg', 'utils/fs'),
    (r'read-package-json', 'read-package-json', 'utils/fs'),
    (r'normalize-package-data', 'normalize-package-data', 'utils/fs'),
    (r'hosted-git-info', 'hosted-git-info', 'utils/config'),
    (r'validate-npm-package-license', 'validate-npm-license', 'utils/config'),
    (r'spdx-correct', 'spdx-correct', 'utils/config'),
    (r'spdx-expression-parse', 'spdx-expression-parse', 'utils/config'),
    (r'spdx-license-ids', 'spdx-license-ids', 'utils/config'),
    (r'builtins', 'builtins', 'system/platform'),
    (r'is-core-module', 'is-core-module', 'system/platform'),
    (r'resolve/', 'resolve', 'utils/fs'),
    (r'fast-json-stable-stringify', 'fast-json-stringify', 'utils/json'),
    (r'json-stringify-safe', 'json-stringify-safe', 'utils/json'),
    (r'jsonfile', 'jsonfile', 'utils/json'),
    (r'universalify', 'universalify', 'utils/async'),
    (r'graceful-fs', 'graceful-fs', 'utils/fs'),
    (r'http-errors', 'http-errors', 'network/http'),
    (r'statuses', 'statuses', 'network/http'),
    (r'depd', 'depd', 'utils/deprecation'),
    (r'setprototypeof', 'setprototypeof', 'utils/oop'),
    (r'toidentifier', 'toidentifier', 'utils/string'),
    (r'content-disposition', 'content-disposition', 'network/http'),
    (r'cookie/', 'cookie', 'network/cookie'),
    (r'fresh/', 'fresh', 'network/http'),
    (r'range-parser', 'range-parser', 'network/http'),
    (r'send/', 'send', 'network/http'),
    (r'escape-html', 'escape-html', 'utils/html'),
    (r'parseurl', 'parseurl', 'network/http'),
    (r'bytes/', 'bytes', 'utils/encoding'),
    (r'destroy/', 'destroy', 'utils/stream'),
    (r'ee-first', 'ee-first', 'utils/events'),
    (r'on-finished', 'on-finished', 'network/http'),
    (r'ms/', 'ms', 'utils/time'),
    (r'etag/', 'etag', 'network/http'),
    (r'vary/', 'vary', 'network/http'),
    (r'proxy-addr', 'proxy-addr', 'network/http'),
    (r'ipaddr\.js', 'ipaddr-js', 'network/ip'),
    (r'content-type', 'content-type', 'network/http'),
    (r'type-is', 'type-is', 'network/http'),
    (r'media-typer', 'media-typer', 'network/http'),
    (r'accepts', 'accepts', 'network/http'),
    (r'negotiator', 'negotiator', 'network/http'),
    (r'array-flatten', 'array-flatten', 'utils/array'),
    (r'methods', 'methods', 'network/http'),
    (r'finalhandler', 'finalhandler', 'network/http'),
    (r'encodeurl', 'encodeurl', 'network/url'),
    (r'escape-html', 'escape-html', 'utils/html'),
    (r'utils-merge', 'utils-merge', 'utils/object'),
    (r'camel-case', 'camel-case', 'utils/string'),
    (r'capital-case', 'capital-case', 'utils/string'),
    (r'constant-case', 'constant-case', 'utils/string'),
    (r'dot-case', 'dot-case', 'utils/string'),
    (r'header-case', 'header-case', 'utils/string'),
    (r'no-case', 'no-case', 'utils/string'),
    (r'param-case', 'param-case', 'utils/string'),
    (r'pascal-case', 'pascal-case', 'utils/string'),
    (r'path-case', 'path-case', 'utils/string'),
    (r'sentence-case', 'sentence-case', 'utils/string'),
    (r'snake-case', 'snake-case', 'utils/string'),
    (r'upper-case', 'upper-case', 'utils/string'),
    (r'lower-case', 'lower-case', 'utils/string'),
    (r'tslib', 'tslib', 'utils/tslib'),
    (r'change-case', 'change-case', 'utils/string'),
    (r'fast-safe-stringify', 'fast-safe-stringify', 'utils/json'),
    (r'express', 'express', 'network/express'),
    (r'body-parser', 'body-parser', 'network/express'),
    (r'raw-body', 'raw-body', 'network/http'),
    (r'iconv-lite', 'iconv-lite', 'utils/encoding'),
    (r'unpipe', 'unpipe', 'utils/stream'),
    (r'is-wsl', 'is-wsl', 'system/platform'),
    (r'is-docker', 'is-docker', 'system/platform'),
    (r'open/', 'open', 'system/util'),
    (r'define-lazy-prop', 'define-lazy-prop', 'utils/oop'),
    (r'run-applescript', 'run-applescript', 'system/macos'),
    (r'bundle-name', 'bundle-name', 'system/macos'),
    (r'default-browser', 'default-browser', 'system/util'),
    (r'default-browser-id', 'default-browser-id', 'system/macos'),
    (r'untildify', 'untildify', 'utils/fs'),
    (r'os-name', 'os-name', 'system/platform'),
    (r'windows-release', 'windows-release', 'system/platform'),
    (r'macos-release', 'macos-release', 'system/platform'),
    (r'terminal-link', 'terminal-link', 'ui/terminal'),
    (r'supports-hyperlinks', 'supports-hyperlinks', 'ui/terminal'),
    (r'ansi-styles', 'ansi-styles', 'ui/terminal'),
    (r'color-convert', 'color-convert', 'ui/terminal'),
    (r'color-name', 'color-name', 'ui/terminal'),
    (r'has-flag', 'has-flag', 'ui/terminal'),
    (r'supports-color', 'supports-color', 'ui/terminal'),
    (r'escape-string-regexp', 'escape-string-regexp', 'utils/string'),
    (r'indent-string', 'indent-string', 'utils/string'),
    (r'clean-stack', 'clean-stack', 'utils/string'),
    (r'aggregate-error', 'aggregate-error', 'utils/errors'),
    (r'^del$|^del/', 'del', 'utils/fs'),
    (r'^globby', 'globby', 'utils/fs'),
    (r'^dir-glob', 'dir-glob', 'utils/fs'),
    (r'^slash$|^slash/', 'slash', 'utils/fs'),
    (r'^is-path-cwd', 'is-path-cwd', 'utils/fs'),
    (r'^is-path-inside', 'is-path-inside', 'utils/fs'),
    (r'^is-path-in-cwd', 'is-path-in-cwd', 'utils/fs'),
    (r'^p-map', 'p-map', 'utils/async'),
    (r'^arrify', 'arrify', 'utils/array'),
    (r'^clone/', 'clone', 'utils/object'),
    (r'^deep-extend', 'deep-extend', 'utils/object'),
    (r'^flat/', 'flat', 'utils/object'),
    (r'^lodash', 'lodash', 'utils/lodash'),
    (r'^underscore', 'underscore', 'utils/underscore'),
    (r'^bignumber\.js', 'bignumber-js', 'utils/data'),
    (r'^decimal\.js', 'decimal-js', 'utils/data'),
    (r'is_js', 'is_js', 'utils/typing'),
    (r'node-domexception', 'node-domexception', 'utils/errors'),
    (r'^web-streams-polyfill', 'web-streams-polyfill', 'utils/stream'),
    (r'^human-signals', 'human-signals', 'system/process'),
    (r'^signal-exit', 'signal-exit', 'system/process'),
    (r'^restore-cursor', 'restore-cursor', 'ui/terminal'),
    (r'^onetime', 'onetime', 'utils/async'),
    (r'^mimic-fn', 'mimic-fn', 'utils/async'),
    (r'^wcwidth', 'wcwidth', 'ui/terminal'),
    (r'^auto-bind', 'auto-bind', 'utils/oop'),
    (r'^ansi-regex', 'ansi-regex', 'ui/terminal'),
    (r'^is-unicode-supported', 'is-unicode-supported', 'ui/terminal'),
    (r'^lodash\.throttle', 'lodash.throttle', 'utils/lodash'),
    (r'^lodash\.debounce', 'lodash.debounce', 'utils/lodash'),
    (r'^lodash\.merge', 'lodash.merge', 'utils/lodash'),
    (r'^lodash\.clonedeep', 'lodash.clonedeep', 'utils/lodash'),
    (r'^is-plain-object', 'is-plain-object', 'utils/typing'),
    (r'^is-plain-obj', 'is-plain-obj', 'utils/typing'),
    (r'^is-object', 'is-object', 'utils/typing'),
    (r'^is-what', 'is-what', 'utils/typing'),
    (r'^copy-anything', 'copy-anything', 'utils/object'),
    (r'^err-code', 'err-code', 'utils/errors'),
    (r'^promise-retry', 'promise-retry', 'utils/async'),
    (r'^retry$|^retry/', 'retry', 'utils/async'),
    (r'^ip-address', 'ip-address', 'network/ip'),
    (r'^ip-regex', 'ip-regex', 'network/ip'),
    (r'^is-ip', 'is-ip', 'network/ip'),
    (r'^cidr-regex', 'cidr-regex', 'network/ip'),
    (r'^is-cidr', 'is-cidr', 'network/ip'),
    (r'^smart-buffer', 'smart-buffer', 'network/proxy'),
    (r'^socks/', 'socks', 'network/proxy'),
    (r'^unique-filename', 'unique-filename', 'utils/fs'),
    (r'^unique-slug', 'unique-slug', 'utils/string'),
    (r'^imurmurhash', 'imurmurhash', 'utils/crypto'),
    (r'^ssri', 'ssri', 'utils/crypto'),
    (r'^minipass', 'minipass', 'utils/stream'),
    (r'^minizlib', 'minizlib', 'utils/compression'),
    (r'^minipass-collect', 'minipass-collect', 'utils/stream'),
    (r'^minipass-flush', 'minipass-flush', 'utils/stream'),
    (r'^minipass-pipeline', 'minipass-pipeline', 'utils/stream'),
    (r'^minipass-sized', 'minipass-sized', 'utils/stream'),
    (r'^minipass-fetch', 'minipass-fetch', 'network/http'),
    (r'^tar/', 'tar', 'utils/compression'),
    (r'^chownr', 'chownr', 'utils/fs'),
    (r'^fs-minipass', 'fs-minipass', 'utils/fs'),
    (r'^yallist', 'yallist', 'utils/data'),
    (r'^minipass-json-stream', 'minipass-json-stream', 'utils/stream'),
    (r'^mkdirp', 'mkdirp', 'utils/fs'),
    (r'^infer-owner', 'infer-owner', 'utils/fs'),
    (r'^promise-inflight', 'promise-inflight', 'utils/async'),
    (r'^^npm-', 'npm-util', 'system/npm'),
    (r'^@npmcli/', 'npmcli', 'system/npm'),
    (r'^pacote', 'pacote', 'system/npm'),
    (r'^npm-package-arg', 'npm-package-arg', 'system/npm'),
    (r'^npm-pick-manifest', 'npm-pick-manifest', 'system/npm'),
    (r'^npm-install-checks', 'npm-install-checks', 'system/npm'),
    (r'^libnpmpack', 'libnpmpack', 'system/npm'),
    (r'^libnpmexec', 'libnpmexec', 'system/npm'),
    (r'^@sigstore/', 'sigstore', 'security/sigstore'),
    (r'^tuf-js', 'tuf-js', 'security/tuf'),
    (r'^sigstore', 'sigstore', 'security/sigstore'),
    (r'^jose', 'jose', 'security/jwt'),
    (r'^jsonwebtoken', 'jsonwebtoken', 'security/jwt'),
    (r'^jws', 'jws', 'security/jwt'),
    (r'^jwa', 'jwa', 'security/jwt'),
    (r'^ecdsa-sig-formatter', 'ecdsa-sig-formatter', 'security/jwt'),
    (r'^buffer-equal-constant-time', 'buffer-equal', 'utils/buffer'),
    (r'^^text-', 'text-util', 'utils/text'),
    (r'^diff$|^diff/', 'diff', 'utils/diff'),
    (r'^nopt', 'nopt', 'cli/args'),
    (r'^abbrev', 'abbrev', 'utils/string'),
    (r'^proc-log', 'proc-log', 'utils/logging'),
    (r'^validate-npm-package-name', 'validate-npm-name', 'system/npm'),
    (r'^cmd-shim', 'cmd-shim', 'system/npm'),
    (r'^^bin-links', 'bin-links', 'system/npm'),
    (r'^read-cmd-shim', 'read-cmd-shim', 'system/npm'),
    (r'^read/', 'read', 'utils/input'),
    (r'^mute-stream', 'mute-stream', 'utils/stream'),
    (r'^tapable', 'tapable', 'utils/events'),
    (r'^detect-newline', 'detect-newline', 'string/string'),
    (r'^eastasianwidth', 'eastasianwidth', 'ui/terminal'),
    (r'^wrap-ansi', 'wrap-ansi', 'ui/terminal'),
    (r'^cliui', 'cliui', 'ui/terminal'),
    (r'^y18n', 'y18n', 'utils/i18n'),
    (r'^escalade', 'escalade', 'utils/fs'),
    (r'^get-caller-file', 'get-caller-file', 'utils/fs'),
    (r'^require-directory', 'require-directory', 'utils/fs'),
    (r'^cli-table3', 'cli-table3', 'ui/terminal'),
    (r'^@colors/colors', 'colors', 'ui/terminal'),
    (r'^node-emoji', 'node-emoji', 'ui/terminal'),
    (r'^update-notifier', 'update-notifier', 'system/update'),
    (r'^latest-version', 'latest-version', 'system/update'),
    (r'^package-json', 'package-json', 'system/update'),
    (r'^registry-url', 'registry-url', 'system/npm'),
    (r'^registry-auth-token', 'registry-auth-token', 'system/npm'),
    (r'^rc/', 'rc', 'utils/config'),
    (r'^xdg-basedir', 'xdg-basedir', 'utils/config'),
    (r'^has-yarn', 'has-yarn', 'system/update'),
    (r'^is-installed-globally', 'is-installed-globally', 'system/update'),
    (r'^is-npm', 'is-npm', 'system/update'),
    (r'^import-lazy', 'import-lazy', 'utils/module'),
    (r'^global-dirs', 'global-dirs', 'system/update'),
    (r'^is-path-inside', 'is-path-inside', 'utils/fs'),
    (r'WASM|wasm|WebAssembly', 'wasm', 'wasm'),
]


def analyze():
    print(f"Loading {BUNDLE_PATH}...")
    with open(BUNDLE_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    print(f"File size: {len(content):,} chars")

    # Find preamble (before first module)
    first_mod = re.search(r'\nvar (\w+) = T\(\(\s*', content)
    preamble = content[:first_mod.start()] if first_mod else ''
    print(f"Preamble: {len(preamble):,} chars starting at offset 0")

    # Find all module boundaries
    mod_pattern = re.compile(
        r'\nvar (\w+) = T\(\(\s*((?:\w+(?:,\s*\w+)*)?)\s*\) => \{\n',
        re.MULTILINE
    )

    modules_data = []
    matches = list(mod_pattern.finditer(content))
    print(f"Found {len(matches)} module definitions")

    # Preamble end to first module
    # Actually the module content starts right after the match, so we need to find
    # the full content for each module
    # Each module ends with:  });\n  followed by the next module or other code

    for i, m in enumerate(matches):
        name = m.group(1)
        imports = [x.strip() for x in m.group(2).split(',')] if m.group(2).strip() else []
        module_start = m.start()

        # Find the end of this module - the closing }); that's not inside a string or nested
        # We need to find the matching }); for the T() call
        # Since this is esbuild output, the pattern is consistent:
        # var xxx = T((yyy) => { ... });\n
        # The closing should be: \n});\n  (maybe with whitespace)

        if i + 1 < len(matches):
            # End is right before the next module's 'var' keyword
            module_end = matches[i + 1].start()
        else:
            # Last module - find the ending }); before license comments
            mod_content = content[module_start:]
            # Find the final }); 
            end_match = re.search(r'\n\}\);\s*\n', mod_content)
            if end_match:
                module_end = module_start + end_match.end()
            else:
                module_end = len(content)

        raw_content = content[module_start:module_end]

        # Extract key features from the module
        # Get first 1500 chars for analysis
        head = raw_content[:2000]

        # Extract all string literals (first batch)
        strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', head[:5000])
        # Also single-quoted
        strings += re.findall(r"'([^'\\]*(?:\\.[^'\\]*)*)'", head[:5000])

        # Check for license comments
        license_info = None
        lic_match = re.search(r'/\*\*?\s*\*\s*@license\s*(.+?)\*/', head[:3000], re.DOTALL)
        if lic_match:
            license_info = lic_match.group(1).strip()[:300]

        # Check for library path hints in strings
        lib_hints = []
        for s in strings:
            s_lower = s.lower()
            for pattern, lib_name, category in LIB_SIGNATURES:
                if re.search(pattern, s_lower):
                    lib_hints.append((lib_name, category, s[:100]))
                    break

        # Check function name patterns in head
        func_pattern = re.findall(r'(?:function|class)\s+(\w+)', head)
        var_pattern = re.findall(r'var (\w+)\s*=', head)

        modules_data.append({
            'name': name,
            'imports': imports,
            'pos': module_start,
            'end': module_end,
            'size': module_end - module_start,
            'head': head[:500],
            'lib_hints': lib_hints[:5],
            'license': license_info,
            'functions': func_pattern[:10],
            'variables': var_pattern[:10],
        })

    # Now categorize
    categories = {}
    unknown_count = 0

    for mod in modules_data:
        cat = 'unknown'
        lib_name = 'unknown'
        confidence = 'low'

        # Strategy 1: License comments
        if mod['license']:
            for pattern, ln, c in LIB_SIGNATURES:
                if re.search(pattern, mod['license'], re.IGNORECASE):
                    cat = c
                    lib_name = ln
                    confidence = 'license'
                    break

        # Strategy 2: String literal hints
        if cat == 'unknown':
            for hint in mod['lib_hints']:
                cat = hint[1]
                lib_name = hint[0]
                confidence = 'string'
                break

        # Strategy 3: Import analysis - if imports from known modules
        if cat == 'unknown' and mod['imports']:
            for imp_name in mod['imports']:
                if imp_name in categories:
                    cat = categories[imp_name]
                    lib_name = f'imports_from_{imp_name}'
                    confidence = 'import_chain'
                    break

        # Strategy 4: Content pattern matching
        if cat == 'unknown':
            head_lower = mod['head'].lower()
            for pattern, ln, c in LIB_SIGNATURES:
                if re.search(pattern, head_lower):
                    cat = c
                    lib_name = ln
                    confidence = 'content'
                    break

        # Strategy 5: Function/variable name analysis for app-specific code
        if cat == 'unknown':
            head = mod['head']
            # iFlow specific patterns
            if re.search(r'iflow|IFLOW|iFlow|心流', head):
                cat = 'app/iflow-core'
                lib_name = 'iflow-core'
                confidence = 'app_pattern'
            elif re.search(r'settings\.json|\.iflow/|config\.iflow', head):
                cat = 'app/config'
                lib_name = 'iflow-config'
                confidence = 'app_pattern'
            elif re.search(r'sessionId|SESSION_ID|generateSessionId', head):
                cat = 'app/session'
                lib_name = 'iflow-session'
                confidence = 'app_pattern'
            elif re.search(r'telemetry|OTLP|otel|metric.*export', head):
                cat = 'telemetry/otel'
                lib_name = 'opentelemetry'
                confidence = 'content'
            elif re.search(r'chokidar|file.*watch|FSWatcher', head):
                cat = 'utils/fs'
                lib_name = 'chokidar'
                confidence = 'content'
            elif re.search(r'tar\.|untar|gzip|compress', head):
                cat = 'utils/compression'
                lib_name = 'tar'
                confidence = 'content'
            elif re.search(r'Marked|marked|markdown|highlight', head):
                cat = 'utils/markdown'
                lib_name = 'marked'
                confidence = 'content'
            elif re.search(r'ContentGenerator|model.*config|thinking.*mode|generateContent', head):
                cat = 'app/model'
                lib_name = 'iflow-model'
                confidence = 'app_pattern'
            elif re.search(r'mcp.*server|MCP|ModelContextProtocol', head):
                cat = 'protocol/mcp'
                lib_name = 'mcp'
                confidence = 'content'
            elif re.search(r'Agent.*Client|ACP|agent.*protocol', head):
                cat = 'protocol/acp'
                lib_name = 'acp'
                confidence = 'content'
            elif re.search(r'auth.*provider|authenticate|OAuth|apiKey|credential', head):
                cat = 'app/auth'
                lib_name = 'iflow-auth'
                confidence = 'app_pattern'
            elif re.search(r'shell.*command|exec.*command|subprocess|spawn', head):
                cat = 'system/process'
                lib_name = 'exec'
                confidence = 'content'
            elif re.search(r'extension|plugin.*install|marketplace', head):
                cat = 'app/extensions'
                lib_name = 'iflow-extensions'
                confidence = 'app_pattern'
            elif re.search(r'subagent|sub_agent|agent.*tool', head):
                cat = 'app/agent'
                lib_name = 'iflow-agent'
                confidence = 'app_pattern'
            elif re.search(r'conversation|chat.*history|message.*store', head):
                cat = 'app/chat'
                lib_name = 'iflow-chat'
                confidence = 'app_pattern'
            elif re.search(r'workspace|project.*config|IFLOW\.md', head):
                cat = 'app/workspace'
                lib_name = 'iflow-workspace'
                confidence = 'app_pattern'
            elif re.search(r'tool.*call|function.*call|tool_use', head):
                cat = 'app/tools'
                lib_name = 'iflow-tools'
                confidence = 'app_pattern'
            elif re.search(r'prompt|template|system.*message', head):
                cat = 'app/prompt'
                lib_name = 'iflow-prompt'
                confidence = 'app_pattern'
            elif re.search(r'sandbox|isolated|container', head):
                cat = 'system/sandbox'
                lib_name = 'iflow-sandbox'
                confidence = 'app_pattern'
            elif re.search(r'output.*style|render|display|format', head):
                cat = 'app/output'
                lib_name = 'iflow-output'
                confidence = 'app_pattern'
            elif re.search(r'hook|lifecycle|event.*handler', head):
                cat = 'app/hooks'
                lib_name = 'iflow-hooks'
                confidence = 'app_pattern'

        if cat == 'unknown':
            unknown_count += 1
            # Still try to guess from content
            head = mod['head']
            if re.search(r'zod|^z\.|safeParse', head):
                cat = 'utils/validation'
                lib_name = 'zod'
                confidence = 'content'
            elif re.search(r'fetch|http|request|response', head):
                cat = 'network/http'
                lib_name = 'http'
            elif re.search(r'readFile|writeFile|mkdir|stat|path', head):

                cat = 'utils/fs'
                lib_name = 'fs-util'
                confidence = 'content'
            elif re.search(r'inherits|prototype|__proto__|setPrototypeOf', head):
                cat = 'utils/oop'
                lib_name = 'inherits'
                confidence = 'content'
            elif re.search(r'JSON\.parse|JSON\.stringify|json', head):
                cat = 'utils/json'
                lib_name = 'json-util'
                confidence = 'content'

        categories[mod['name']] = cat

        if i % 200 == 0 and i > 0:
            print(f"  ... processed {i}/{len(matches)} modules")

    # Collect stats
    cat_stats = {}
    for mod in modules_data:
        cat = categories.get(mod['name'], 'unknown')
        if cat not in cat_stats:
            cat_stats[cat] = {'count': 0, 'size': 0, 'modules': []}
        cat_stats[cat]['count'] += 1
        cat_stats[cat]['size'] += modules_data[i if i < len(modules_data) else 0]['size']
        cat_stats[cat]['modules'].append(mod['name'])

    # Recalculate with proper index
    cat_stats = {}
    for mod in modules_data:
        cat = categories.get(mod['name'], 'unknown')
        if cat not in cat_stats:
            cat_stats[cat] = {'count': 0, 'size': 0, 'modules': []}
        cat_stats[cat]['count'] += 1
        cat_stats[cat]['size'] += mod['size']
        cat_stats[cat]['modules'].append(mod['name'])

    print(f"\n=== 模块分类结果 ===")
    print(f"总模块数: {len(modules_data)}")
    print(f"未识别模块: {unknown_count}")
    print(f"\n按类别统计:")
    for cat in sorted(cat_stats.keys(), key=lambda c: -cat_stats[c]['count']):
        s = cat_stats[cat]
        size_mb = s['size'] / 1024 / 1024
        print(f"  {cat:40s}: {s['count']:4d} modules, {size_mb:7.2f} MB")

    # Build output
    output = {
        'total_modules': len(modules_data),
        'unknown_count': unknown_count,
        'preamble_size': len(preamble),
        'categories': {cat: {
            'count': cat_stats[cat]['count'],
            'size': cat_stats[cat]['size'],
            'modules': cat_stats[cat]['modules'][:50],  # first 50 names
        } for cat in cat_stats},
        'module_details': {m['name']: {
            'category': categories.get(m['name'], 'unknown'),
            'lib_name': 'see-details',  # populated below
            'size': m['size'],
            'imports': m['imports'],
            'confidence': 'see-details',
        } for m in modules_data},
    }

    # Add detailed lib hints
    for m in modules_data:
        output['module_details'][m['name']] = {
            'category': categories.get(m['name'], 'unknown'),
            'size': m['size'],
            'imports': m['imports'],
            'lib_hints': m['lib_hints'],
            'license': m['license'][:200] if m['license'] else None,
            'functions': m['functions'][:5],
            'variables': m['variables'][:5],
        }

    import json
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

    print(f"\n分析结果已保存到: {OUTPUT_PATH}")
    print(f"JSON 文件大小: {os.path.getsize(OUTPUT_PATH) / 1024:.1f} KB")

if __name__ == '__main__':
    analyze()
