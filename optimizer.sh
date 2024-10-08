#!/bin/bash

# Directory containing the JPG files
input_directory="public/meeting"
output_directory="public/meeting-images"

# Create output directory if it doesn't exist
mkdir -p "$output_directory"

# Loop through each JPG file in the input directory
for jpg_file in "$input_directory"/*.jpg; do
    # Check if the file exists
    if [[ -f "$jpg_file" ]]; then
        # Optimize the JPG file
        magick "$jpg_file" -quality 75 -strip "$jpg_file"

        # Convert the optimized JPG to WebP
        webp_file="$output_directory/$(basename "${jpg_file%.jpg}.webp")"
        magick "$jpg_file" "$webp_file"
        
        echo "Processed: $jpg_file -> $webp_file"
    else
        echo "No JPG files found in $input_directory."
    fi
done

echo "Optimization and conversion completed."