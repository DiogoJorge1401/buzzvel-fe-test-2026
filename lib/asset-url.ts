const basePath = process.env["NEXT_PUBLIC_BASE_PATH"] ?? "";

export function assetUrl(path: `/images/${string}`) {
  return `${basePath}${path}`;
}
