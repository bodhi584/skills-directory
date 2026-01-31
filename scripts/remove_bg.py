#!/usr/bin/env python3
"""
Remove background from logo and create transparent PNG
"""
from PIL import Image
import sys

def remove_background(input_path, output_path):
    """Remove white/gray background and make it transparent"""
    # Open the image
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    # Get pixel data
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Change all near-white/gray pixels to transparent
        # Checking for checkerboard pattern colors (gray shades)
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            # White-ish pixels -> transparent
            new_data.append((255, 255, 255, 0))
        elif item[0] < 100 and item[1] < 100 and item[2] < 100:
            # Dark gray checkerboard -> transparent
            new_data.append((0, 0, 0, 0))
        elif abs(item[0] - item[1]) < 20 and abs(item[1] - item[2]) < 20:
            # Gray-ish (checkerboard background) -> transparent
            new_data.append((item[0], item[1], item[2], 0))
        else:
            # Keep colored pixels (the actual logo)
            new_data.append(item)
    
    # Update image data
    img.putdata(new_data)
    
    # Save as PNG with transparency
    img.save(output_path, "PNG")
    print(f"✅ Saved transparent logo to: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 remove_bg.py <input.png> <output.png>")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    
    remove_background(input_file, output_file)
