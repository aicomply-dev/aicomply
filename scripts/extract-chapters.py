#!/usr/bin/env python3
"""
Extract chapter titles and descriptions from modules-data.ts for translation
"""

import re
import json

def extract_chapters(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract chapters using regex
    chapter_pattern = r'\{\s*id:\s*(\d+),\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)"'

    chapters = []
    for match in re.finditer(chapter_pattern, content):
        chapter_id, title, description = match.groups()
        chapters.append({
            'id': int(chapter_id),
            'title': title,
            'description': description
        })

    return chapters

if __name__ == '__main__':
    chapters = extract_chapters('/var/www/aicomply/ai-act-platform/src/lib/data/modules-data.ts')
    print(json.dumps(chapters, indent=2, ensure_ascii=False))
    print(f"\n\nTotal chapters extracted: {len(chapters)}")
