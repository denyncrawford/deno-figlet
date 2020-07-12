import { styles } from "https://deno.land/x/ansi_styles/mod.ts";
import { text } from './mod.js';

console.log(`${styles.green.open}${await text("Crawford.","standard")}${styles.green.close}`);
