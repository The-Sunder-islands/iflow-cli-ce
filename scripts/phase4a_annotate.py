#!/usr/bin/env python3
"""Phase 4a: Extract semantic info from app/ modules and enhance comment headers."""

import re
import os
import sys

APP_DIR = '/run/media/starlight/1/iflow/modules/app'

def analyze_module(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Strip existing annotation header
    header_end = content.find('*/\n\n')
    if header_end < 0:
        return None
    body = content[header_end + 4:]

    findings = {
        'classes': [],
        'exports': [],
        'functions': [],
        'notable_strings': [],
        'patterns': [],
    }

    # Find var declarations (esbuild module exports)
    var_patterns = re.findall(r'var (\w+)\s*=\s*T\(\(', body)
    if var_patterns:
        findings['patterns'].append(f'esbuild module exports: {", ".join(var_patterns[:10])}')

    # Find class definitions
    classes = re.findall(r'class\s+(\w+)(?:\s+extends\s+(\w+))?', body)
    for cls_name, parent in classes:
        desc = f'class {cls_name}'
        if parent:
            desc += f' extends {parent}'
        findings['classes'].append(desc)

    # Find module.exports patterns (what's being exported)
    export_patterns = re.findall(r'(?:lSr\.exports\.(\w+)\s*=|GN\.(\w+)\s*=|exports\.(\w+)\s*=)', body)
    export_names = set()
    for m in export_patterns:
        for g in m:
            if g:
                export_names.add(g)
    if export_names:
        findings['exports'] = list(export_names)[:20]

    # Find significant function names (declared at top level or exported)
    functions = re.findall(r'function\s+(\w+)\s*\(', body)
    findings['functions'] = list(set(functions))[:20]

    # Find notable string patterns
    if 'iflow.cn' in body or 'apis.iflow' in body or 'IFLOW_API_KEY' in body:
        findings['patterns'].append('CONTAINS iflow.cn API references')
    if '.googleapis.com' in body or 'aistudio.google' in body:
        findings['patterns'].append('CONTAINS Google API references')
    if 'dotenv' in body.lower() or '.env' in body:
        findings['patterns'].append('dotenv related')
    if 'mcp' in body.lower() and 'server' in body.lower():
        findings['patterns'].append('MCP server handling')
    if 'telemetry' in body.lower() or 'OTLP' in body:
        findings['patterns'].append('telemetry/OTLP')
    if 'subagent' in body.lower() or 'SubAgent' in body:
        findings['patterns'].append('agent/subagent')

    return findings

def generate_enhanced_header(original_header, findings):
    """Generate enhanced comment block with semantic info."""
    # Remove old header
    hdr_end = original_header.find('*/\n\n')
    if hdr_end < 0:
        return original_header
    old_hdr = original_header[:hdr_end + 3]  # up to */
    
    # Build extra info
    extra_lines = []
    extra_lines.append(' *')
    extra_lines.append(' * === Auto-analyzed semantic info ===')
    
    if findings['classes']:
        extra_lines.append(f' * Classes: {", ".join(findings["classes"])}')
    
    if findings['exports']:
        extra_lines.append(f' * Exports: {", ".join(findings["exports"][:15])}')
    
    if findings['functions']:
        extra_lines.append(f' * Functions: {", ".join(findings["functions"][:15])}')
    
    if findings['patterns']:
        extra_lines.append(f' * Features: {", ".join(findings["patterns"])}')
    
    extra_lines.append(' * === End semantic info ===')
    
    new_hdr = old_hdr.replace(' */', '\n'.join(extra_lines) + '\n */')
    
    return new_hdr + original_header[hdr_end + 3:]

def main():
    count = 0
    updated = 0
    for root, dirs, files in os.walk(APP_DIR):
        for fname in sorted(files):
            if not fname.endswith('.js'):
                continue
            fpath = os.path.join(root, fname)
            
            with open(fpath, 'r', encoding='utf-8') as f:
                original = f.read()
            
            findings = analyze_module(fpath)
            if findings is None:
                continue
            
            # Only print modules that have interesting findings
            has_info = findings['classes'] or findings['exports'] or findings['patterns']
            
            relpath = os.path.relpath(fpath, APP_DIR)
            if has_info:
                print(f'\n=== {relpath} ===')
                if findings['classes']:
                    print(f'  Classes: {", ".join(findings["classes"])}')
                if findings['exports']:
                    print(f'  Exports: {", ".join(findings["exports"][:15])}')
                if findings['functions']:
                    print(f'  Functions: {", ".join(findings["functions"][:15])}')
                if findings['patterns']:
                    print(f'  Features: {", ".join(findings["patterns"])}')
                
                # Update file
                enhanced = generate_enhanced_header(original, findings)
                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write(enhanced)
                updated += 1
            
            count += 1
    
    print(f'\n\nTotal: {count} modules, {updated} updated with semantic info')

if __name__ == '__main__':
    main()
