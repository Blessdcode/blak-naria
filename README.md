The workflow for new images is simple:

  1. Drop the image into public/images/                                                                                                                                         2. Run node compress-images.mjs — it skips already-processed files and only compresses the new ones
  3. Add it to placeholder.ts using the path /images/optimized/<your-filename>.jpg    