#!/usr/bin/env python3
"""
PageSpeed image optimization for Contour Marine website.
Strategy:
- Convert all large JPEGs to WebP (quality 78, max 1400px wide)
- Optimize logo PNGs → WebP with transparency
- Keep originals intact, output .webp alongside
- Update HTML files to use <picture> with webp fallback
"""
from PIL import Image
import os, sys, shutil

IMAGES_DIR = "/home/user/webapp/images"
MAX_WIDTH = 1400   # max width for gallery/body images
MAX_LOGO_WIDTH = 480  # logo displayed at max 280px CSS, 2x = 560px → 480 safe
QUALITY = 78       # WebP quality (good balance sharpness/size)
LOGO_QUALITY = 85  # slightly higher for logo

# Images that need special handling
ABOVE_FOLD = {
    'logo-hd.png',     # hero logo — LCP candidate
    'logo-final.png',  # nav logo
    'logo-2x.png',     # nav logo @2x
}

results = []

def optimize_image(filename):
    filepath = os.path.join(IMAGES_DIR, filename)
    if not os.path.exists(filepath):
        return None
    
    base, ext = os.path.splitext(filename)
    ext = ext.lower()
    
    if ext not in ('.jpg', '.jpeg', '.png', '.webp'):
        return None
    
    # Skip already-small files (< 80KB) — not worth converting
    orig_size = os.path.getsize(filepath)
    if orig_size < 80_000:
        return None
    
    try:
        img = Image.open(filepath)
    except Exception as e:
        print(f"  ERROR opening {filename}: {e}")
        return None
    
    has_alpha = img.mode in ('RGBA', 'LA', 'PA')
    
    # Determine max width
    if filename in ABOVE_FOLD or 'logo' in base.lower():
        max_w = MAX_LOGO_WIDTH
        quality = LOGO_QUALITY
    else:
        max_w = MAX_WIDTH
        quality = QUALITY
    
    # Resize if wider than max_w
    orig_w, orig_h = img.size
    if orig_w > max_w:
        ratio = max_w / orig_w
        new_w = max_w
        new_h = int(orig_h * ratio)
        img = img.resize((new_w, new_h), Image.LANCZOS)
    else:
        new_w, new_h = orig_w, orig_h
    
    # Convert to WebP
    out_path = os.path.join(IMAGES_DIR, base + ".webp")
    
    if has_alpha:
        # Keep RGBA for transparency
        img_out = img.convert('RGBA')
    else:
        img_out = img.convert('RGB')
    
    img_out.save(out_path, 'WEBP', quality=quality, method=6)
    
    new_size = os.path.getsize(out_path)
    savings = orig_size - new_size
    pct = (savings / orig_size) * 100
    
    result = {
        'file': filename,
        'orig_size': orig_size,
        'new_size': new_size,
        'orig_dims': f"{orig_w}×{orig_h}",
        'new_dims': f"{new_w}×{new_h}",
        'savings_pct': pct,
        'out': base + ".webp"
    }
    
    print(f"  ✓ {filename} ({orig_w}×{orig_h}, {orig_size//1024}KB) → {base}.webp ({new_w}×{new_h}, {new_size//1024}KB) [{pct:.0f}% smaller]")
    return result

# Process all images
print("=" * 70)
print("OPTIMIZING IMAGES FOR CONTOUR MARINE WEBSITE")
print("=" * 70)

all_files = sorted(os.listdir(IMAGES_DIR))
image_files = [f for f in all_files if f.lower().endswith(('.jpg', '.jpeg', '.png')) 
               and not f.startswith('.')]

# Skip raw_seawall subfolder files and temp/working files
skip_prefixes = ('thumb-', 'check_', 'prev_', 'v1_f', 'dock_frame', 'fixed_', 
                 'credits-', 'og-')
image_files = [f for f in image_files 
               if not any(f.startswith(p) for p in skip_prefixes)]

print(f"\nProcessing {len(image_files)} images...\n")

total_orig = 0
total_new = 0

for filename in image_files:
    result = optimize_image(filename)
    if result:
        results.append(result)
        total_orig += result['orig_size']
        total_new += result['new_size']

print(f"\n{'='*70}")
print(f"SUMMARY: {len(results)} images optimized")
print(f"  Total original: {total_orig/1024/1024:.1f} MB")
print(f"  Total optimized: {total_new/1024/1024:.1f} MB")
print(f"  Total savings: {(total_orig-total_new)/1024/1024:.1f} MB ({(total_orig-total_new)/total_orig*100:.0f}%)")

