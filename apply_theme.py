import os
import re

def update_file(path, replacements):
    if not os.path.exists(path):
        return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    orig = content
    for pattern, repl in replacements:
        if isinstance(pattern, str):
            content = content.replace(pattern, repl)
        else:
            content = pattern.sub(repl, content)
    if content != orig:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {path}")

# Common Alyug theme replacements
general_replacements = [
    # Top navy background
    ('bg-slate-950', 'bg-[#070B1A]'),
    ('border-slate-800/40', 'border-[#0D1228]'),
    ('border-slate-800', 'border-[#0D1228]'),
    ('border-slate-900', 'border-[#070B1A]'),
    ('from-slate-950', 'from-[#070B1A]'),
    ('via-slate-900', 'via-[#0D1228]'),
    ('to-slate-900', 'to-[#070B1A]'),
    ('to-slate-950', 'to-[#070B1A]'),

    # Brand color mapping
    (re.compile(r'\btext-blue-600\b'), 'text-[#008CFF]'),
    (re.compile(r'\btext-blue-500\b'), 'text-[#008CFF]'),
    (re.compile(r'\btext-blue-700\b'), 'text-[#3514D4]'),
    (re.compile(r'\btext-blue-400\b'), 'text-[#00D9E8]'),
    (re.compile(r'\btext-blue-300\b'), 'text-[#00D9E8]'),
    (re.compile(r'\btext-blue-200\b'), 'text-[#00D9E8]'),

    (re.compile(r'\bhover:text-blue-600\b'), 'hover:text-[#008CFF]'),
    (re.compile(r'\bhover:text-blue-700\b'), 'hover:text-[#3514D4]'),
    (re.compile(r'\bgroup-hover:text-blue-600\b'), 'group-hover:text-[#008CFF]'),

    # Backgrounds
    (re.compile(r'\bbg-blue-50\b'), 'bg-[#F7F9FF]'),
    (re.compile(r'\bbg-blue-100\b'), 'bg-[#EBF3FF]'),
    (re.compile(r'\bhover:bg-blue-50\b'), 'hover:bg-[#F7F9FF]'),
    (re.compile(r'\bhover:bg-blue-100\b'), 'hover:bg-[#EBF3FF]'),

    # Borders
    (re.compile(r'\bborder-blue-100\b'), 'border-[#D9DFFF]'),
    (re.compile(r'\bborder-blue-200\b'), 'border-[#D9DFFF]'),
    (re.compile(r'\bborder-blue-300\b'), 'border-[#008CFF]/50'),
    (re.compile(r'\bborder-blue-400\b'), 'border-[#008CFF]'),
    (re.compile(r'\bborder-blue-500\b'), 'border-[#008CFF]'),
    (re.compile(r'\bhover:border-blue-400\b'), 'hover:border-[#008CFF]'),
    (re.compile(r'\bhover:border-blue-200\b'), 'hover:border-[#008CFF]/50'),

    # Rings
    (re.compile(r'\bring-blue-500\b'), 'ring-[#008CFF]'),
    (re.compile(r'\bring-blue-600\b'), 'ring-[#008CFF]'),
    (re.compile(r'\bfocus:border-blue-500\b'), 'focus:border-[#008CFF]'),
    (re.compile(r'\bfocus:ring-blue-500\b'), 'focus:ring-[#008CFF]'),
    (re.compile(r'\bfocus-visible:ring-blue-500\b'), 'focus-visible:ring-[#008CFF]'),
]

# Process all components
import glob
for filepath in glob.glob('/app/applet/src/**/*.tsx', recursive=True):
    update_file(filepath, general_replacements)

print("Batch theme replacement completed")
