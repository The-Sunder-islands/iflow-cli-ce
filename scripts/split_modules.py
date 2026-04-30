#!/usr/bin/env python3
"""Split esbuild bundle into individual modules with annotations, extract WASM, 
create new package structure for iflow-cli-ce."""

import re
import json
import os
import sys
import shutil

BASE = '/run/media/starlight/1/iflow'
BUNDLE = f'{BASE}/iflow_formatted.js'
ENTRY = f'{BASE}/npm_package/package/bundle/entry_formatted.js'
CLASSIFICATION = f'{BASE}/scripts/classification_v2.json'
DEST = f'{BASE}/split_output'

def find_module_closing(content, start_pos):
    """Find the closing }); of an esbuild CJS module starting at start_pos."""
    # Skip past 'var NAME = T((... xxx, yyy) => '
    body_start = content.index('=> {', start_pos) + 4  # position after => {
    # Now find the matching } that closes the =>
    brace_count = 1
    i = body_start
    while i < len(content) and brace_count > 0:
        ch = content[i]
        if ch == '{':
            brace_count += 1
        elif ch == '}':
            brace_count -= 1
        i += 1
    
    # Now at position after the closing }, find );
    while i < len(content) and content[i] in ' \t\n':
        i += 1
    if content[i:i+2] == ');':
        return i + 2  # position after );
    return i

def find_module_boundaries(content):
    """Find all esbuild module boundaries: var NAME = T((...) => { ... });"""
    mod_pat = re.compile(
        r'\nvar (\w+) = T\(\(.*?\) => \{\n',
        re.MULTILINE | re.DOTALL
    )
    matches = list(mod_pat.finditer(content))
    
    modules = []
    for i, m in enumerate(matches):
        mod_name = m.group(1)
        mod_start = m.start()
        
        if i + 1 < len(matches):
            mod_end = matches[i + 1].start()
        else:
            # Last module - find actual closing });
            mod_end = find_module_closing(content, mod_start)
        
        # Get full module content
        raw = content[mod_start:mod_end]
        
        modules.append({
            'name': mod_name,
            'start': mod_start,
            'end': mod_end,
            'raw': raw,
        })
    
    return modules

def extract_preamble(content, first_module_start):
    """Extract the esbuild runtime preamble (before first module)."""
    return content[:first_module_start]

def extract_entry_point(content, last_module_end, lic_start):
    """Extract the entry/execution code between last module and license block."""
    return content[last_module_end:lic_start]

def generate_comment_header(category, label, mod_name, mod_num, total):
    """Generate a detailed multi-line comment header for a module."""
    lines = [
        '/**',
        f' * @module {mod_name}',
        f' * @category {category}',
        f' * @label {label}',
        f' * @position {mod_num} / {total}',
        f' * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19',
        f' * @package iflow-cli-ce (Community Edition)',
        f' * @license Apache-2.0',
        f' *',
        f' * This module was automatically extracted and categorized.',
        f' * The original variable name ({mod_name}) is preserved for compatibility.',
        f' * DO NOT rename this module\'s variable - it\'s referenced by other modules.',
        f' */',
    ]
    return '\n'.join(lines) + '\n\n'

def main():
    print("=" * 60)
    print("iFlow CLI CE - Module Splitter & Annotator")
    print("=" * 60)
    
    # Load classification
    with open(CLASSIFICATION, 'r') as f:
        classification = json.load(f)
    
    cats = classification['modules']  # {mod_name: {category, label}}
    
    # Load bundle
    print("\n[1/6] Loading bundle...")
    with open(BUNDLE, 'r', encoding='utf-8') as f:
        content = f.read()
    print(f"  Bundle size: {len(content):,} chars")
    
    # Find modules
    print("[2/6] Parsing module boundaries...")
    modules = find_module_boundaries(content)
    print(f"  Found {len(modules)} modules")
    
    # Extract preamble
    first_mod_start = modules[0]['start'] if modules else 0
    preamble = extract_preamble(content, first_mod_start)
    print(f"  Preamble: {len(preamble):,} chars")
    
    # Find license block
    lic_start = content.find('/*! Bundled license information:')
    if lic_start < 0:
        lic_start = content.rfind('/*!') 
        if lic_start < 0:
            lic_start = len(content)
    print(f"  License block at offset: {lic_start:,}")
    
    # Extract entry point
    last_mod_end = modules[-1]['end'] if modules else len(content)
    entry_point = content[last_mod_end:lic_start] if last_mod_end < lic_start else ''
    license_text = content[lic_start:] if lic_start < len(content) else ''
    print(f"  Entry point: {len(entry_point):,} chars")
    print(f"  License text: {len(license_text):,} chars")
    
    # Create output structure
    print("\n[3/6] Creating output directories...")
    if os.path.exists(DEST):
        shutil.rmtree(DEST)
    
    dirs_needed = set()
    for mod_name, info in cats.items():
        cat = info['category']
        dir_path = os.path.join(DEST, 'modules', cat)
        dirs_needed.add(dir_path)
    
    for d in sorted(dirs_needed):
        os.makedirs(d, exist_ok=True)
    
    os.makedirs(f'{DEST}/wasm', exist_ok=True)
    
    # Write preamble
    print("[4/6] Writing preamble and runtime...")
    with open(f'{DEST}/preamble.js', 'w', encoding='utf-8') as f:
        f.write(preamble)
    
    # Write modules with annotations
    print("[5/6] Writing annotated modules...")
    wasm_count = 0
    total = len(modules)
    written = 0
    category_counts = {}
    
    for i, mod in enumerate(modules):
        name = mod['name']
        info = cats.get(name, {'category': 'unknown', 'label': 'unknown'})
        cat = info['category']
        label = info['label']
        
        # WASM extraction
        if cat == 'wasm':
            wasm_match = re.search(r'(?:AGFzbQE|data:application/octet-stream;base64,)([A-Za-z0-9+/=]{5000,})', mod['raw'])
            if wasm_match:
                wasm_data = wasm_match.group(0)
                wasm_file = f'{DEST}/wasm/{name}_{wasm_count}.wasm.b64'
                with open(wasm_file, 'w') as f:
                    f.write(wasm_data)
                wasm_count += 1
                # Replace in module
                mod['raw'] = mod['raw'].replace(wasm_data, 
                    f'require("fs").readFileSync(__dirname + "/wasm/{name}_{wasm_count-1}.wasm.b64", "utf8")')
        
        # Count categories
        category_counts[cat] = category_counts.get(cat, 0) + 1
        
        # Determine filename
        safe_label = re.sub(r'[^a-zA-Z0-9_-]', '_', label)
        filename = f'{name}_{safe_label}.js'
        filepath = os.path.join(DEST, 'modules', cat, filename)
        
        # Generate annotation header
        header = generate_comment_header(cat, label, name, i + 1, total)
        
        # Write module
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(header)
            f.write(mod['raw'])
        
        written += 1
        if written % 300 == 0:
            print(f"  Written {written}/{total} modules...")
    
    print(f"  Total written: {written}")
    print(f"  WASM files: {wasm_count}")
    
    # Write entry point
    with open(f'{DEST}/entry_code.js', 'w', encoding='utf-8') as f:
        f.write('/**\n * @file Entry point execution code\n * @package iflow-cli-ce\n */\n')
        f.write(entry_point)
    
    # Write license
    with open(f'{DEST}/bundled_licenses.txt', 'w', encoding='utf-8') as f:
        f.write(license_text)
    
    # Write module order JSON
    module_order = [{'name': m['name'], 'category': cats.get(m['name'], {}).get('category', 'unknown'),
                     'label': cats.get(m['name'], {}).get('label', 'unknown')} for m in modules]
    with open(f'{DEST}/module_order.json', 'w', encoding='utf-8') as f:
        json.dump({'total': len(modules), 'order': module_order}, f, indent=2)
    
    # Write build script
    build_script = '''#!/usr/bin/env python3
"""Rebuild bundle from split modules."""
import json, os

HERE = os.path.dirname(os.path.abspath(__file__))

with open(f'{HERE}/module_order.json') as f:
    order = json.load(f)

with open(f'{HERE}/bundled_licenses.txt') as f:
    licenses = f.read()

parts = []

# Add preamble
with open(f'{HERE}/preamble.js') as f:
    parts.append(f.read())

# Add modules in order
for mod in order['order']:
    name = mod['name']
    cat = mod['category']
    label = mod['label']
    safe_label = label.replace('/', '_').replace('-', '_')
    filepath = f'{HERE}/modules/{cat}/{name}_{safe_label}.js'
    with open(filepath) as f:
        module_code = f.read()
        # Strip the annotation header
        if '*/\\n\\n' in module_code:
            module_code = module_code.split('*/\\n\\n', 1)[1]
        parts.append(module_code)

# Add entry code
with open(f'{HERE}/entry_code.js') as f:
    entry = f.read()
    if '*/\\n' in entry:
        entry = entry.split('*/\\n', 1)[1]
    parts.append(entry)

# Add licenses
parts.append(licenses)

# Write bundle
with open(f'{HERE}/bundle/iflow.js', 'w') as f:
    f.write(''.join(parts))

print(f"Bundle rebuilt: {HERE}/bundle/iflow.js")
print(f"Size: {os.path.getsize(f'{HERE}/bundle/iflow.js'):,} chars")
'''
    with open(f'{DEST}/build.js', 'w', encoding='utf-8') as f:
        f.write(build_script)
    os.chmod(f'{DEST}/build.js', 0o755)
    
    # Copy entry.js
    os.makedirs(f'{DEST}/bundle', exist_ok=True)
    shutil.copy(ENTRY, f'{DEST}/entry_formatted.js')
    
    # Create package.json
    pkg = {
        "name": "iflow-cli-ce",
        "version": "0.5.19-ce.1",
        "description": "iFlow CLI Community Edition - A powerful AI assistant for your terminal",
        "engines": {"node": ">=20.0.0"},
        "type": "module",
        "repository": {
            "type": "git",
            "url": "git+https://github.com/The-Sunder-islands/iflow-cli-ce.git"
        },
        "bin": {"iflow-ce": "bundle/entry.js"},
        "files": ["bundle/", "vendors/", "scripts/", "README.md", "LICENSE"],
        "keywords": ["ai", "cli", "assistant", "terminal", "community-edition"],
        "license": "Apache-2.0"
    }
    with open(f'{DEST}/package.json', 'w', encoding='utf-8') as f:
        json.dump(pkg, f, indent=2)
    
    # Print summary
    print("\n[6/6] Summary")
    print("=" * 60)
    print(f"\nOutput: {DEST}")
    print(f"\nCategory breakdown:")
    for cat in sorted(category_counts.keys()):
        count = category_counts[cat]
        files = len(os.listdir(f'{DEST}/modules/{cat}'))
        print(f"  {cat:35s}: {count:4d} modules, {files:4d} files")
    
    print(f"\n├── modules/     ({len(modules)} modules in {len(category_counts)} categories)")
    print(f"├── wasm/        ({wasm_count} WASM data files)")
    print(f"├── preamble.js  ({len(preamble):,} bytes)")
    print(f"├── entry_code.js")
    print(f"├── module_order.json")
    print(f"├── build.js")
    print(f"├── package.json")
    print(f"└── bundled_licenses.txt")
    
    # Count total files
    total_files = sum(len(files) for _, _, files in os.walk(DEST))
    total_size = sum(os.path.getsize(os.path.join(dp, fn)) for dp, _, fns in os.walk(DEST) for fn in fns)
    print(f"\nTotal: {total_files} files, {total_size/1024/1024:.1f} MB")

if __name__ == '__main__':
    main()
