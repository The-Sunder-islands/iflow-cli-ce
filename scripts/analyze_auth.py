#!/usr/bin/env python3
"""Analyze auth flow in entry_code.js"""
import re

with open('/run/media/starlight/1/iflow/entry_code.js') as f:
    content = f.read()

# Find key auth patterns
patterns = {
    'selectedAuthType': r'selectedAuthType',
    'IFLOW_API_KEY': r'IFLOW_API_KEY',
    'refreshAuth': r'refreshAuth',
    '.IFLOW': r'\bIFLOW\b',
    'apiKey': r'\bapiKey\b',
    'baseUrl.*iflow': r'baseUrl.*iflow',
    'ContentGeneratorConfig': r'ContentGeneratorConfig',
    'getModel()': r'getModel\(\)',
}

print("=== Auth patterns in entry_code.js ===\n")
for label, pat in patterns.items():
    matches = list(re.finditer(pat, content))
    print(f"{label}: {len(matches)} occurrences")

print()

# Find the auth type constants
print("=== Auth type constants ===")
m = re.search(r'var\s+(\w+)\s*=\s*\{[^}]*IFLOW[^}]*\}', content)
if m:
    print(f"  Found: {m.group(0)[:200]}")

# Find auth selection near the main function
cao_start = content.find('async function Cao')
if cao_start > 0:
    cao_code = content[cao_start:cao_start+2000]
    lines = cao_code.split('\n')
    for i, line in enumerate(lines):
        if any(kw in line for kw in ['auth', 'apiKey', 'IFLOW', 'baseUrl', 'selectedAuth', 'refreshAuth', 'ContentGen']):
            print(f"  Cao L{i}: {line.strip()[:120]}")

# Find the auth type selection flow (usually near the start of main entry)
print("\n=== Auth selection logic (before Cao) ===")
# Search for patterns like: t === Kt.IFLOW or similar
auth_select = re.finditer(r'(Kt\.\w+|selectedAuthType[^;]+|refreshAuth[^;]+)', content, re.MULTILINE)
for m in auth_select:
    print(f"  offset {m.start():,}: {m.group(0).strip()[:120]}")
