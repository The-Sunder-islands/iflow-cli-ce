#!/usr/bin/env python3
"""Classify esbuild modules by category using sequential pattern matching."""
import re, json, os, sys

BUNDLE = '/run/media/starlight/1/iflow/iflow_formatted.js'
OUT = '/run/media/starlight/1/iflow/scripts/classification_v2.json'

# Rules ordered from most specific to least specific
# (pattern, category, label)
RULES = [
    # --- App-specific (highest priority) ---
    (r'iflow\.cn|apis\.iflow|platform\.iflow|cloud\.iflow|vibex\.iflow|docs\.iflow', 'app/api', 'iflow-api'),
    (r'IFLOW_API_KEY|IFLOW_CLI|iFlowApiKey|IFlowAccount|iflowApiKey|iFlow Account', 'app/auth', 'iflow-auth'),
    (r'generateSessionId|SESSION_ID|sessionId|chatId', 'app/session', 'iflow-session'),
    (r'ContentGenerator|ContentGen|ThinkingMode|setThink|thinkingConfig|ContentGeneratorConfig|generateContent', 'app/model', 'iflow-model'),
    (r'subagent|subAgent|SubAgent|agentTeam|AgentRegistry', 'app/agent', 'iflow-agent'),
    (r'IFLOW\.md|iflow\.md|projectConfig|workspaceConfig|workspace.*init', 'app/workspace', 'iflow-workspace'),
    (r'ExtensionRegistry|listExtensions|installExtension|uninstallExtension|extensionMarket', 'app/extensions', 'iflow-extensions'),
    (r'TodoWrite|todoWrite|TodoPlanning|planMode|PlanQueue', 'app/planner', 'iflow-planner'),
    (r'messageStore|conversationStore|chatHistory|chatStore', 'app/chat', 'iflow-chat'),
    (r'toolRegistry|registerTool|ToolRegistry|tool_use|toolUse', 'app/tools', 'iflow-tools'),
    (r'systemPrompt|promptBuilder|promptTemplate|system.*instruction', 'app/prompt', 'iflow-prompt'),
    (r'outputStyle|renderOutput|displayOutput|outputFormat', 'app/output', 'iflow-output'),
    (r'memoryStore|memoryCompress|contextCompress|memory_manager', 'app/memory', 'iflow-memory'),
    (r'SlashCommand|slashCommand|slash.*command.*handler', 'app/commands', 'iflow-commands'),
    (r'mcpServer|mcpTool|mcp.*list|MCPServer|MCPClient', 'app/mcp', 'iflow-mcp'),
    (r'workflowEngine|workflowRun|workflow.*step|WorkflowEngine', 'app/workflow', 'iflow-workflow'),
    (r'searchApi|webSearch|searchQuery|searchResult|WebSearch', 'app/search', 'iflow-search'),
    (r'checkpointer|saveCheckpoint|restoreCheckpoint|undo.*edit', 'app/checkpoint', 'iflow-checkpoint'),
    (r'ideCompanion|vscode.*plugin|jetbrains.*plugin|idePlugin', 'app/ide', 'iflow-ide'),
    (r'telemetryConfig|telemetryEnable|telemetryTarget|otlpExport|telemetryPrompt', 'app/telemetry', 'iflow-telemetry'),
    (r'codebaseIndex|codebaseSearch|repoIndex|repo.*embed', 'app/codebase', 'iflow-codebase'),
    (r'editorPlugin|textEditor|codeEditor|editor.*integration', 'app/editor', 'iflow-editor'),
    (r'install.*setup|autoupdate|autoUpdate|versionCheck|postinstall', 'app/install', 'iflow-install'),
    (r'usageLimit|rateLimit|quota|usageReport|billing|planLimit', 'app/usage', 'iflow-usage'),
    (r'analytics|eventTrack|userAction|tracking.*event', 'app/analytics', 'iflow-analytics'),
    (r'i18n|translation|locale.*detect|zh_CN|en_US|intl', 'app/i18n', 'iflow-i18n'),
    (r'notificationService|pushNotification|toastNotification', 'app/notifications', 'iflow-notifications'),
    (r'terminal.*keybind|keyboard.*handler|rawMode|keyboardShortcut', 'app/terminal', 'iflow-terminal'),
    (r'multimodal|imageAnalysis|vision.*model|ocr.*text', 'app/multimodal', 'iflow-multimodal'),
    (r'hookRegistry|hookSystem|preHook|postHook|hook.*manager', 'app/hooks', 'iflow-hooks'),

    # --- UI ---
    (r'Meta Platforms|react\.production|react\.development|Symbol\.for\("react\.|react-reconciler|react-dom|react.*jsx-runtime', 'ui/react', 'react'),
    (r'ink\.render|useInput|useApp|ink.*component|Focus.*ink|StdoutContext', 'ui/ink', 'ink'),
    (r'stripAnsi|strip-ansi|ansiRegex|ansiStyles|ansi-escapes', 'ui/terminal', 'terminal'),
    (r'chalk\.|chalk.*level|supportsColor|colorConvert|colorName', 'ui/terminal', 'terminal'),
    (r'boxen|terminalLink|cliCursor|restoreCursor', 'ui/terminal', 'terminal'),
    (r'wrapAnsi|stringWidth|eastasianwidth|wcwidth', 'ui/terminal', 'terminal'),

    # --- Network ---
    (r'undici|fetch.*body.*\b|\bundici\b', 'network/http', 'undici'),
    (r'ky\.|ky-ext|HTTPError|TimeoutError.*request', 'network/http', 'ky'),
    (r'express|body-parser|raw-body|finalhandler', 'network/express', 'express'),
    (r'WebSocket|websocket-driver|websocket-extensions', 'network/ws', 'websocket'),
    (r'EventSource|eventsource|text/event-stream', 'network/sse', 'eventsource'),
    (r'url-parse|whatwg-url|punycode|querystringify|query-string', 'network/url', 'url'),

    # --- gRPC ---
    (r'@grpc|gRPC|proto\.loader|GrpcObject|protobuf|Protobuf|proto.*message', 'network/grpc', 'grpc'),

    # --- Telemetry ---
    (r'OpenTelemetry|opentelemetry|OTLP|otel|MetricReader|PeriodicExporting|NodeSDK\.|AggregationTemporality', 'telemetry/otel', 'opentelemetry'),
    (r'getMachineId|machine.id|net\.dns|host\.arch', 'telemetry/resource', 'resource'),

    # --- Model (Google AI) ---
    (r'@google/genai|generativelanguage|GoogleAi|Gemini|Google.*Generative', 'model/google', 'google-genai'),
    (r'google-auth-library|gaxios|gtoken|gcp-metadata|GoogleAuth', 'model/google', 'google-auth'),

    # --- Protocol ---
    (r'ModelContextProtocol|@modelcontextprotocol', 'protocol/mcp', 'mcp'),
    (r'Agent Client Protocol|ACP|AgentClient', 'protocol/acp', 'acp'),
    (r'WebDriver BiDi|webdriver|BidiSession|WebDriverSession', 'protocol/bidi', 'bidi'),

    # --- CLI ---
    (r'yargs|yargs-parser|\bargv\b|positional.*require', 'cli/args', 'yargs'),
    (r'commander|\.command\(|\.option\(|\.action\(', 'cli/args', 'commander'),

    # --- Validation ---
    (r'ajv|Ajv\.|ajv.*validate|ajv.*compile|JSONSchema', 'utils/validation', 'ajv'),
    (r'zod|ZodError|safeParse|z\.object|z\.string|zod\.', 'utils/validation', 'zod'),

    # --- Browser ---
    (r'playwright|chromium|firefox|webkit|BrowserType|browser\.newPage', 'browser/playwright', 'playwright'),
    (r'jsdom|cssstyle|cssom|nwsapi|symbol-tree|parse5|saxes', 'browser/jsdom', 'jsdom'),

    # --- Crypto ---
    (r'brorand|elliptic|createCipher|createHash|createHmac|pbkdf2|ripemd160|randomBytes|randomfill|parse-asn1|asn1\.|cipher-base|hash-base|evp_bytestokey|diffie-hellman|create-ecdh|ecdsa', 'utils/crypto', 'crypto'),
    (r'jose|jsonwebtoken|jwt|jws|jwa|ecdsa|JWK|JWS|keylike', 'security/jwt', 'jwt'),
    (r'sigstore|tuf-js|tuf\.|@tufjs', 'security/sigstore', 'sigstore'),

    # --- Stream ---
    (r'readable-stream|through2|duplexify|pumpify|merge-stream|flush-write-stream|minipass', 'utils/stream', 'stream'),
    (r'end-of-stream|pump\(|from2|into-stream|is-stream', 'utils/stream', 'stream'),

    # --- FS ---
    (r'chokidar|anymatch|picomatch|fast-glob|minimatch|micromatch|normalize-path|\bglob\b.*pattern', 'utils/fs', 'fs'),
    (r'globby|dir-glob|rimraf|mkdirp|readdirp|lstat|fstat|graceful-fs', 'utils/fs', 'fs'),
    (r'archiver|zip-stream|tar-stream|compress-commons|crc32', 'utils/compression', 'compression'),

    # --- Data/Encoding ---
    (r'mime-db|mimeDb|mime-types|mimeType|contentType|mediaType|media-typer', 'utils/net', 'mime'),
    (r'safe-buffer|safer-buffer|SaferBuffer|kStringMaxLength', 'utils/buffer', 'buffer'),
    (r'iconv-lite|iconv\.|whatwg-encoding|webidl-conversions', 'utils/encoding', 'encoding'),
    (r'xmlchars|xmldom|xml2js|xmlbuilder|xml', 'utils/xml', 'xml'),
    (r'long.*umd|Long\.fromInt|LongBits|bignumber|decimal\.js', 'utils/data', 'data'),

    # --- Misc utils ---
    (r'deepmerge|deep-equal|object-assign|is-plain-object|is-plain-obj|is-what|copy-anything', 'utils/object', 'object'),
    (r'lodash|_\.throttle|_\.debounce|_\.merge|_\.cloneDeep|_\.get|_\.set|_\.isEqual', 'utils/lodash', 'lodash'),
    (r'semver|semver\.compare|semver\.parse|compare-versions|spdx', 'utils/versioning', 'versioning'),
    (r'js-yaml|yaml\.safeLoad|yaml\.load|yaml\.dump|toml\.parse|TOML\.', 'utils/config', 'config'),
    (r'deep-extend|deepExtend|configstore|dot-prop|rc\.|rc_config', 'utils/config', 'config'),
    (r'marked|Marked|highlight\.js|hljs|marked\.parse|Renderer.*markdown', 'utils/markdown', 'markdown'),
    (r'fzf|Fzf|fuzzy.*match', 'utils/search', 'search'),
    (r'p-limit|p-queue|p-retry|p-cancelable|promise-retry|p-map|aggregate-error', 'utils/async', 'async'),
    (r'eventemitter3|EventEmitter|event-target-shim|once\(|wrappy|ee-first', 'utils/events', 'events'),
    (r'lru-cache|LRUCache|quick-lru|keyv|memoize', 'utils/cache', 'cache'),
    (r'diff.*lines|diffChars|diffWords|diffLines|createPatch', 'utils/diff', 'diff'),
    (r'uuid|uuidv4|uuid\.v4|\bUuid\b|uniqueId', 'utils/id', 'id'),
    (r'escape-string-regexp|indent-string|clean-stack|camel-case|snake-case|change-case', 'utils/string', 'string'),

    # --- System ---
    (r'cross-spawn|spawn.*async|exec.*command|which\(|isexe|signal-exit|human-signals', 'system/process', 'process'),
    (r'node-notifier|notifier\.notify|NotificationCenter', 'system/notify', 'notify'),
    (r'is-wsl|is-docker|os-name|macos-release|windows-release|is-installed-globally', 'system/platform', 'platform'),
    (r'update-notifier|latest-version|package-json.*registry|registry-url|registry-auth', 'system/update', 'update'),
    (r'@npmcli|npm-package-arg|pacote|sigstore|npm-registry-fetch|libnpmpack|npm-pick-manifest|validate-npm-package-name|cacache|npm-packlist|npm-bundled', 'system/npm', 'npm'),
    (r'sandbox|SandboxConfig|container.*isolat|docker|podman', 'system/sandbox', 'sandbox'),
    (r'ripgrep|rg\.bin|rgBinary|rgPath|rg_exec|rgSearch', 'system/tools', 'tools'),
    (r'tmp.*file|tmp.*dir|tmp.*create|\btmp\b|tempfile|tempdir', 'system/tmp', 'tmp'),

    # --- Network (misc) ---
    (r'ipaddr\.|ip-address|ip-regex|is-ip|is-cidr|cidr-regex', 'network/ip', 'ip'),
    (r'socks|smart-buffer|socks-proxy|proxy-agent|proxy-from-env', 'network/proxy', 'proxy'),
    (r'tls|ssl|certificate|resolve-alpn|https-proxy-agent|http-proxy-agent', 'network/tls', 'tls'),

    # --- Security ---
    (r'sigstore|tuf-js|@tufjs', 'security/sigstore', 'sigstore'),

    # --- Utils - general ---
    (r'inherits|prototype|__proto__|setPrototypeOf|getPrototypeOf|defineProperty|\bgetOwnProperty', 'utils/oop', 'oop'),
    (r'is-regex|is-callable|is-date-object|is-symbol|is-string|is-typedarray|is-arguments|is-generator-function|is-bigint|is-boolean-object|is-number-object|is-array-buffer|is-shared-array-buffer', 'utils/typing', 'typing'),
    (r'object-inspect|object-is|object-keys|object-entries|object-values|object\.assign', 'utils/object', 'object'),
    (r'require-in-the-middle|import-in-the-middle', 'system/instrument', 'instrument'),
    (r'JSONStream|jsonparse|json-stream|json.*stringify|json.*parse', 'utils/json', 'json'),
    (r'has-symbols|has-proto|has-property-descriptors|available-typed-arrays|which-typed-array|get-intrinsic|call-bind|define-data-property|set-function-length|function-bind|es-define-property|es-errors|dunder-proto|side-channel|gopd', 'utils/polyfill', 'polyfill'),
]

def classify(content):
    mod_pat = re.compile(r'\nvar (\w+) = T\(\(\s*((?:\w+(?:,\s*\w+)*)?)\s*\) => \{\n')
    matches = list(mod_pat.finditer(content))
    categories = {}
    labels = {}

    for i, m in enumerate(matches):
        name = m.group(1)
        start = m.start()
        end = matches[i+1].start() if i+1 < len(matches) else min(start + 5000, len(content))
        chunk = content[start:end]

        classified = False
        for pattern, cat, label in RULES:
            if re.search(pattern, chunk, re.IGNORECASE):
                categories[name] = cat
                labels[name] = label
                classified = True
                break

        if not classified:
            # Check for WASM/base64 data blobs
            if re.search(r'base64,[A-Za-z0-9+/=]{5000,}', chunk):
                categories[name] = 'wasm'
                labels[name] = 'wasm-data'
            # Check for TLD/class patterns (likely app code)
            elif re.search(r'class \w+.*\{', chunk) and re.search(r'throw.*Error|Error\.|invalid', chunk):
                categories[name] = 'app/core'
                labels[name] = 'iflow-core'
            else:
                categories[name] = 'unknown'
                labels[name] = 'unknown'

        if (i + 1) % 400 == 0:
            print(f"  ... {i+1}/{len(matches)}")

    return categories, labels, matches

print(f"Loading bundle...")
with open(BUNDLE, 'r', encoding='utf-8') as f:
    content = f.read()

print(f"Classifying {len(content):,} chars...")
categories, labels, all_matches = classify(content)

# Stats
from collections import Counter
total = len(all_matches)
cat_counts = Counter(categories.values())

print(f"\nTotal: {total} modules\n")
for cat, count in cat_counts.most_common():
    pct = count / total * 100
    print(f"  {cat:30s}: {count:4d} ({pct:5.1f}%)")

# Output
output = {
    'total': total,
    'category_counts': {k: v for k, v in cat_counts.items()},
    'modules': {name: {'category': categories.get(name, 'unknown'), 'label': labels.get(name, 'unknown')}
                for name in categories}
}
with open(OUT, 'w') as f:
    json.dump(output, f, indent=2)
print(f"\nSaved: {OUT} ({os.path.getsize(OUT)/1024:.1f} KB)")
