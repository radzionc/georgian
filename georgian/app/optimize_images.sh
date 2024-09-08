for file in $(find ./public/images/tickets/language -name '*.jpeg' -or -name '*.jpg' -or -name '*.png'); 
do
  cwebp -q 80 "$file" -o "${file%.*}.webp"
  # cwebp -resize 400 0 "$file" -o "$file"
  rm "$file"
done

# for file in $(find ./public/images -name '*.webp'); 
# do
#   cwebp -resize 400 0 "$file" -o "$file"
# done