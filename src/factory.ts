import { IFontDictionary } from "./types.ts";

export const factory = (text: string, dictionary: IFontDictionary) => {
  const string = text.replaceAll(" ", "©").split("");

  const parsed: string[][] = [];

  string.forEach((letter) => {
    const asciiLetter = letter === "©"
      ? dictionary[letter].split("\n").map((line) => line + `  `)
      : dictionary[letter].split("\r\n");
    parsed.push(asciiLetter);
  });

  const inlineSeparation: string[][] = [];

  for (const letter of parsed) {
    for (const [index, line] of letter.entries()) {
      if (inlineSeparation[index] === undefined) {
        inlineSeparation[index] = [];
      }
      inlineSeparation[index].push(line);
    }
  }

  let output = ``;

  for (const line of inlineSeparation) {
    for (const chunk of line) {
      output += chunk;
    }
    output += "\n";
  }

  return output;
};

export default (text: string, dictionary: IFontDictionary) => {
  if (text.includes("\n")) {
    const lines = text.split("\n");
    const output = lines.map((line) => factory(line, dictionary));
    return output.join("\n");
  } 
  return factory(text, dictionary);
}
