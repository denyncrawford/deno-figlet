import { AvailableFont } from '../dist/types.ts'
export interface IFont {
  font: string;
  name: string;
}

export interface IFontImport {
  default: IFont;
}

export interface IFontSerialized {
  letter: string;
  ascii: string;
}

export interface IFontDictionary {
  [key: string]: string;
}

// Available fonts proxy

export type AvailableFonts = AvailableFont;