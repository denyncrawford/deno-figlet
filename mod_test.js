
// Importing from the lib, you must import from the CDN / Moodule provider.

import denoFiglet, { text, textCB } from './mod.js';

textCB("Hi,", "standard", null, (data) => {
  console.log(data);
});

console.log(await text("Deno Figlet", "standard"))

console.log(await denoFiglet("Is awesome"));


