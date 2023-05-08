import { styles } from "https://deno.land/x/ansi_styles@1.0.1/mod.ts";
import { text } from '../mod.ts';

console.log(`${styles.green.open}${await text(`Crawford  
Rules
Now in multiline.`, "standard")}${styles.green.close}`);
