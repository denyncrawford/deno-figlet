// Module imports

import loader from "./loader.ts";
import serializer from "./serializer.ts";
import factory from "./factory.ts";
import { AvailableFonts } from "./types.ts";

// Main activity

// This default function is a quick usage of the bellow methods but without configuration.

export default async (string: string) => {
  const font = await loader("standard");
  const dictionary = serializer(font);
  return factory(string, dictionary);
};

/* This method loads the font file specified in the second param from the file loader and
   serializes the font to handle de data parsing on the factory.
*/

export const text = async (string: string, fontName: AvailableFonts, preset?: string[]) => {
  const font = await loader(fontName);
  const dictionary = serializer(font, preset);
  return factory(string, dictionary);
};

// This method is uses the same config from the above method but is callback asynchroned.

export const textCB = (string: string, fontName: AvailableFonts, preset?: string[], cb?: (res: string) => void) => {
  loader(fontName).then((font) => {
    const dictionary = serializer(font, preset);
    const res = factory(string, dictionary);
    if (cb) cb(res);
  });
};


