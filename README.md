        ____                                 ______    _              __         __ 
       / __ \  ___    ____   ____           / ____/   (_)   ____ _   / /  ___   / /_
      / / / / / _ \  / __ \ / __ \ ______  / /_      / /   / __ `/  / /  / _ \ / __/
     / /_/ / /  __/ / / / // /_/ //_____/ / __/     / /   / /_/ /  / /  /  __// /_  
    /_____/  \___/ /_/ /_/ \____/        /_/       /_/    \__, /  /_/   \___/ \__/  
                                                         /____/                     

**Deno-Figlet** is a JavaScript/Typescript implementation of a FIGfont driver built and available for Deno 🦕 (Soon browser availability).

[Figlet](http://www.figlet.org/) is a program for making large letters out of ordinary text.

If you want to know more about how a Figlet font is built, please check out [the FIGfont documentation](http://www.jave.de/figlet/figfont.html).

> **Notice:** All the fonts in this package are not my property, all credits to their creators (if you want to know who created a font, you can look inside each font).

# :computer: Installation

## :inbox_tray: Importing 

```javascript
import filget from 'https:/deno.land/x/node-figlet/mod.js'
```

## :wrench: Basic Usage:

**Deno-Figlet** exports by default the quick method wich runs without specifiying the font or ditctionary preset.

```javascript
let myAwesomeFiglet = await figlet("Deno is Awesome.")
console.log(myAwesomeFiglet)
```

**It should print**:
	
	 ____                            _                                                                     _ 
 	|  _ \    ___   _ __     ___    (_)  ___     __ _  __      __   ___   ___    ___    _ __ ___     ___  | |
 	| | | |  / _ \ | '_ \   / _ \   | | / __|   / _` | \ \ /\ / /  / _ \ / __|  / _ \  | '_ ` _ \   / _ \ | |
 	| |_| | |  __/ | | | | | (_) |  | | \__ \  | (_| |  \ V  V /  |  __/ \__ \ | (_) | | | | | | | |  __/ |_|
 	|____/   \___| |_| |_|  \___/   |_| |___/   \__,_|   \_/\_/    \___| |___/  \___/  |_| |_| |_|  \___| (_)


You can also import the methods text and textCB if you want to select the font and/or set a custom dictionary.

```javascript
import filget, { text, textCB } from 'https:/deno.land/x/deno-figlet/mod.js'

let myAwesomeFiglet = await text("Deno is Awesome.","starwars")
console.log(myAwesomeFiglet)

```

You will get an awesome Star Wars figlet :wink: :rocket:.

For the ones who likes the NodeJS figlet API you can use textCB, wich gets the same results on first param into a callback function:

```javascript

textCB("Deno is Awesome.", "doom", null, (myAwesomeFiglet) => {
	console.log(myAwesomeFiglet)
})

```

You will get an awesome Doom Figlet :heart: :gun:.

## Tests

- **Basic usage**:

```bash
deno run -A https://raw.githack.com/denyncrawford/deno-figlet/master/mod_test.js

```

- **Colors**:

```bash
deno run -A https://raw.githack.com/denyncrawford/deno-figlet/master/colors_test.js

```

> **Notice**: Colors provided by the Deno [ansi_styles](https://deno.land/x/ansi_styles) module.

## :crown: Contributing

This project is 100% OpenSource, so you can help me with:

- **If you are brave enough to write your own font, go ahead and make a PR.**

  - **Once you have your font ready to go**:

    - Put the you-font.flf into the `./src/fonts/`
    - Perform the bundle with `deno run -A ./lib/fontBundler.js`
    - Check if the bundle is ok on `./dist/fonts/_your_font.flf`

  - **Then commit and make a PR**.

   >**NOTICE**: You should not play with the bundler, it can damage your data. 

- **Bug Report**.

- **Ideas and contributing in general** 

## :pencil: TO DO

- Chainable text on methods.
- More than one spacebar. not:(trim).
- SyncText method.

## :clipboard: Changes

- Now the deno-figlet comes with a font bundler to parse all fonts into ESM modules. It makes importing and manipulating them a lot easier, but the fonts must still be written in FIGfont format.

- You can now import the fonts separately to play with them however you want.

    ```javascript
    import { _font_name } from 'https:/deno.land/x/deno-figlet/dist/fonts/mod.js'
    ```

    **OR**

    ```javascript
    import font from 'https:/deno.land/x/deno-figlet/dist/fonts/_font_name.js'
    ```

# :pushpin: Of Interest

This module is built for the Mantra CLI, Mantra is the first Front-End agnostic CMS framework and also the first CMS built on Deno - [Check it out](https://github.com/mantra-cms)

Written By [Crawford.](https://github.com/denyncrawford).

---

# Support this project by donating on:

- [Paypal](https://paypal.me/DENYNCRAWFORD?locale.x=en_US).
- BTC address: 39ik7oyYvmiMeTXTscY3bb9rUFMHdjf5pd

# :scroll: License

MIT License

Copyright (c) Crawford.

[Full license](https://github.com/denyncrawford/deno-figlet/blob/master/LICENSE)