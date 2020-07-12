import { resolve } from 'https://deno.land/std/path/mod.ts';
import { __ } from 'https://deno.land/x/dirname/mod.ts';
const { __dirname } = __(import.meta)
const decoder = new TextDecoder("utf-8");
const encoder = new TextEncoder();

const files = Deno.readDir(resolve(__dirname, "../src/fonts/"));

let fonts = []

for await (const file of files) {
  fonts.push(file)
}

fonts = fonts.map(f => {
  return { name: f.name, isFile: f.isFile }
}).filter(f => {
  return f.name.split(".").includes("flf") && f.isFile
}).map(f => {
  return f.name;
})

let exporter = ``;

for (const f of fonts) {
  let data = await Deno.readFile(resolve(__dirname, `../src/fonts/${f}`));
  let font = decoder.decode(data);
  let model = { name: f.replace(".flf", ""), font}
  model = JSON.stringify(model, null, 2);
  let content = 
  `
  export default ${model}

  `;
  let insertion = encoder.encode(content);
  let filename = f.replace(".flf", "").replace(/[^a-zA-Z0-9]/g, '_')

  exporter += 
  `
  export * as _${filename} from './_${filename}.js'
  `  
  
  await Deno.writeFile(`${resolve(__dirname, "../dist/fonts/", `_${filename}.js` )}`, insertion);
}

await Deno.writeFile(`${resolve(__dirname, "../dist/fonts/mod.js")}`, encoder.encode(exporter));

console.log("Done");
