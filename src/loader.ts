// Font loader

import { AvailableFonts, IFontImport } from "./types.ts";

export default async (name: AvailableFonts) => {
  const fileName = `_${name.replace(/[^a-zA-Z0-9]/g, "_")}`;
  const fontImport = await import(`../dist/fonts/${fileName}.ts`) as IFontImport
  const { font } = fontImport.default;
  return font;
};
