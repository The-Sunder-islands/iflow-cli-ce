#!/usr/bin/env python3
"""Rebuild bundle from split modules for iflow-cli-ce."""
import json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))

with open(f'{HERE}/module_order.json') as f:
    order = json.load(f)

with open(f'{HERE}/bundled_licenses.txt') as f:
    licenses = f.read()

parts = []

# Add preamble
with open(f'{HERE}/preamble.js') as f:
    parts.append(f.read())

# Add modules in order, stripping annotation headers
count = 0
for mod in order['order']:
    name = mod['name']
    cat = mod['category']
    label = mod['label']
    safe_label = re.sub(r'[^a-zA-Z0-9_-]', '_', label)
    filepath = f'{HERE}/modules/{cat}/{name}_{safe_label}.js'
    
    with open(filepath) as f:
        module_code = f.read()
        if module_code.startswith('/**'):
            idx = module_code.index('*/\n\n')
            module_code = module_code[idx + 4:]
        parts.append(module_code)
    count += 1

print(f"  Modules: {count}")

# Add entry code
with open(f'{HERE}/entry_code.js') as f:
    entry = f.read()
    if entry.startswith('/**'):
        idx = entry.index('*/\n')
        entry = entry[idx + 3:]
    parts.append(entry)

# Add licenses
parts.append(licenses)

# Write bundle
os.makedirs(f'{HERE}/bundle', exist_ok=True)
with open(f'{HERE}/bundle/iflow.js', 'w') as f:
    f.write(''.join(parts))

size = os.path.getsize(f'{HERE}/bundle/iflow.js')
print(f"Bundle rebuilt: bundle/iflow.js ({size:,} chars, {size/1024/1024:.1f} MB)")
