#!/usr/bin/env python3
"""Phase 4c: Semantic de-minify for iflow.cn-related app modules.
Focuses on: app/api (11 files), app/auth (3 files), app/session (5 files), app/workspace (1 file).
Strategy: rename internal variables based on context, add inline comments for key patterns."""

import re, os, json

APP_DIR = '/run/media/starlight/1/iflow/modules/app'

# Target directories & their known patterns for de-minify
TARGETS = {
    'api': {
        'iflow_cn_urls': True,
        'patterns': [
            ('apis\\.iflow\\.cn/v1/(\\w+)/(\\w+)', 'iflow_{1}_{2}'),
            ('apis\\.iflow\\.cn/v1/(\\w+)', 'iflow_{1}'),
        ],
    },
    'auth': {
        'auth_flow': True,
        'patterns': [
            ('IFLOW_API_KEY', 'IFLOW_API_KEY'),
            ('apiKey', 'apiKey'),
            ('selectedAuthType', 'selectedAuthType'),
            ('IFLOW', 'IFLOW_AUTH'),
        ],
    },
    'session': {
        'session_mgmt': True,
    },
    'workspace': {
        'config_init': True,
    },
}

def add_targeted_comments(filepath, category):
    """Add inline comments for key patterns in a module."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find the body (after annotation header)
    header_end = content.find('*/\n\n')
    if header_end < 0:
        return False
    hdr = content[:header_end + 4]
    body = content[header_end + 4:]
    
    # Add inline comments for iflow.cn URLs
    if category in ('api',):
        body = re.sub(
            r'(https://apis\.iflow\.cn/[^"\')\s]+)',
            r'\1 /* @iflow-api-endpoint */',
            body
        )
        body = re.sub(
            r'(https://platform\.iflow\.cn/[^"\')\s]+)',
            r'\1 /* @iflow-platform-endpoint */',
            body
        )
    
    # Add inline comment for IFLOW_API_KEY
    if category in ('auth', 'api'):
        body = re.sub(
            r'(IFLOW_API_KEY)',
            r'\1 /* @iflow-auth-key */',
            body
        )
    
    # Add inline comment for baseUrl references
    body = re.sub(
        r'(baseUrl:\s*"https://apis\.iflow\.cn/v1")',
        r'\1 /* @iflow-base-url */',
        body
    )
    
    # Add comments for key function patterns
    body = re.sub(
        r'(function\s+\w+Auth\w*)',
        r'\1 /* @auth-handler */',
        body
    )
    
    updated = content != (hdr + body)
    if updated:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(hdr + body)
    
    return updated

def main():
    updated = 0
    for category in TARGETS:
        cat_dir = os.path.join(APP_DIR, category)
        if not os.path.exists(cat_dir):
            continue
        
        for fname in sorted(os.listdir(cat_dir)):
            if not fname.endswith('.js'):
                continue
            fpath = os.path.join(cat_dir, fname)
            if add_targeted_comments(fpath, category):
                updated += 1
                print(f'  ✓ {category}/{fname}')
    
    print(f'\nTotal updated: {updated} files')

if __name__ == '__main__':
    main()
