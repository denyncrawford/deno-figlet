
import { resolve } from 'https://deno.land/std/path/mod.ts';
import { __ } from 'https://deno.land/x/dirname/mod.ts';
const { __dirname } = __(import.meta)
const decoder = new TextDecoder("utf-8")

// Font loader

export default async (name, cb) => {
  let data = await Deno.readFile(resolve(__dirname, `../fonts/${name}.flf`))
  if (cb && typeof cb == "function") {
    data = Deno.readFileSync(resolve(__dirname, `../fonts/${name}.flf`));    
    return cb(decoder.decode(data));
  }
  return decoder.decode(data);
}