        ____                                 ______    _              __         __ 
       / __ \  ___    ____   ____           / ____/   (_)   ____ _   / /  ___   / /_
      / / / / / _ \  / __ \ / __ \ ______  / /_      / /   / __ `/  / /  / _ \ / __/
     / /_/ / /  __/ / / / // /_/ //_____/ / __/     / /   / /_/ /  / /  /  __// /_  
    /_____/  \___/ /_/ /_/ \____/        /_/       /_/    \__, /  /_/   \___/ \__/  
                                                         /____/                     

[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/deno-figlet) [![HitCount](http://hits.dwyl.com/denyncrawford/deno-figlet.svg)](http://hits.dwyl.com/denyncrawford/deno-figlet)

**Deno-Figlet** is a JavaScript/Typescript implementation of a FIGfont driver built and available for Deno 🦕 (Soon browser availability).

[Figlet](http://www.figlet.org/) is a program for making large letters out of ordinary text.

If you want to know more about how a Figlet font is built, please check out [the FIGfont documentation](http://www.jave.de/figlet/figfont.html).

> **Notice:** All the fonts in this package are not my property, all credits to their creators (if you want to know who created a font, you can look inside each font).

# :computer: Installation

## :inbox_tray: Importing 

```javascript
import figlet from 'https://x.nest.land/deno-figlet@0.0.5/mod.js'
```

## :wrench: Basic Usage:

**Deno-Figlet** exports by default the quick method wich runs without specifiying any font or ditctionary preset.

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


You can also import the methods `text` and `textCB` if you want to select the font and/or set a custom dictionary.

```javascript
import filget, { text, textCB } from 'https://x.nest.land/deno-figlet@0.0.5/mod.js'

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

## 🧪 Testing

- **Basic usage**:

```bash
deno run -A https://x.nest.land/deno-figlet@0.0.5/mod_test.js
```

- **Colors (working with another library)**:

```bash
deno run -A https://x.nest.land/deno-figlet@0.0.5/colors_test.js
```

> **Notice**: Colors are provided by the Deno [ansi_styles](https://deno.land/x/ansi_styles) module.

## :crown: Contributing

This project is 100% OpenSource, so you can help me with:

- **Bug Report**.

- **Ideas and contributing in general** 

- **If you are brave enough to write/port/add your own font, go ahead and make a PR.**

    > To make your own fonts quickly and easily, check this [awesome FIGlet font editor](http://patorjk.com/figlet-editor/#/edit) and say goodbye to the handmade stuff.

  - **Once you have your font ready to go**:

    - Put the `font-file-name.flf` into the `./src/fonts/`
    - Perform the bundle with `deno run -A ./lib/fontBundler.js`
    - Check if the bundle is ok at `./dist/fonts/_font_file_name.js`

  - **Then commit and make the PR**.

   >**NOTICE**: You should not play with the bundler file, it can damage your data. 

## :pencil: TO DO

- Chainable text on methods.
- More than one spacebar. not:(trim).
- SyncText method.
- Available font list.
- Dictionary Documentation.
- How to: Make your own dictionary preset.
- How to: Font usage markup.

## :clipboard: Changes

- Now the deno-figlet mod comes with a font bundler to parse all fonts into ESM modules. It makes importing and manipulating them a lot easier, but the fonts must still be written in FIGfont format.

- You can now import the fonts separately to play with them however you want.

    ```javascript
    import { _font_name } from 'https://x.nest.land/deno-figlet@0.0.5/dist/fonts/mod.js'
    ```

    **OR**

    ```javascript
    import font from 'https://x.nest.land/deno-figlet@0.0.5/dist/fonts/_font_name.js'
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

[Full license](https://github.com/denyncrawford/deno-figlet/blob/master/LICENSE.md)
