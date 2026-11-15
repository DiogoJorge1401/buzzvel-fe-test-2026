import { access, readFile } from "node:fs/promises";

const outputDirectory = new URL("../out/", import.meta.url);
const indexFile = new URL("index.html", outputDirectory);

try {
  await access(indexFile);
} catch {
  throw new Error("GitHub Pages export is missing out/index.html");
}

const html = await readFile(indexFile, "utf8");
const unprefixedImages = [...html.matchAll(/src="(\/images\/[^"]+)"/g)]
  .map((match) => match[1])
  .filter((source): source is string => source !== undefined);

if (unprefixedImages.length > 0) {
  throw new Error(`Unprefixed public images found: ${unprefixedImages.join(", ")}`);
}

const imageSources = [
  ...new Set(
    [...html.matchAll(/src="(\/buzzvel-fe-test-2026\/images\/[^"]+)"/g)]
      .map((match) => match[1])
      .filter((source): source is string => source !== undefined),
  ),
];

if (imageSources.length === 0) {
  throw new Error("GitHub Pages export contains no prefixed public images");
}

for (const source of imageSources) {
  const relativePath = source.replace("/buzzvel-fe-test-2026/", "");
  const exportedFile = new URL(relativePath, outputDirectory);

  try {
    await access(exportedFile);
  } catch {
    throw new Error(`Exported asset is missing: ${source}`);
  }
}

console.log(`Verified ${imageSources.length} prefixed public images in the Pages export.`);
