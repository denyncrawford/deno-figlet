import { join } from "https://deno.land/std@0.138.0/path/mod.ts";
import __ from "https://deno.land/x/dirname@1.1.2/mod.ts";
const { __dirname: dirname } = __(import.meta);
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

// Remove repeated C:\ from the path

const __dirname = Deno.build.os === "windows" ? dirname.slice(1) :dirname;

// Generate types for the fonts

const files = Deno.readDir(join(__dirname, "../fonts/"));

let fonts = [];

for await (const file of files) {
  fonts.push(file);
}

fonts = fonts.map((f) => {
  return { name: f.name, isFile: f.isFile };
}).filter((f) => {
  return f.name.split(".").includes("flf") && f.isFile;
}).map((f) => {
  return f.name;
});

let exporter = ``;

for (const f of fonts) {
  const data = await Deno.readFile(join(__dirname, `../fonts/${f}`));
  const font = decoder.decode(data);
  const model = { name: f.replace(".flf", ""), font };
  const modelToString = JSON.stringify(model, null, 2);
  const content = `
  export default ${modelToString}

  `;
  const insertion = encoder.encode(content);
  const filename = f.replace(".flf", "").replace(/[^a-zA-Z0-9]/g, "_");

  exporter += `
  export * as _${filename} from './_${filename}.ts'
  `;

  await Deno.writeFile(
    `${join(__dirname, "../../dist/fonts/", `_${filename}.ts`)}`,
    insertion,
  );
}

await Deno.writeFile(
  `${join(__dirname, "../../dist/fonts/mod.ts")}`,
  encoder.encode(exporter),
);

const fontTypes = fonts.map((f) => {
  return f.replace(".flf", "");
});

const typesFile = `
export type AvailableFont = ${fontTypes.map((f) => `"${f}"`).join("\n| ")}
`;

await Deno.writeFile(
  `${join(__dirname, "../../dist/types.ts")}`,
  encoder.encode(typesFile),
);

console.log("Done");
