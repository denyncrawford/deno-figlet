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
import figlet from 'https://de o.land/x/deno_figlet/mod.ts'
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
import filget, { text, textCB } from 'https://deno.land/x/deno_figlet/mod.ts'

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

## 🧪 Examples

- **Basic usage**:

```bash
deno run -A https://deno.land/x/deno_figlet/examples/starwars.ts
```

- **Colors (working with another library)**:

```bash
deno run -A https://deno.land/x/deno_figlet/examples/colors.ts
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
    - Perform the bundle with `deno run -A ./src/scripts/fontBundler.js`
    - Check if the bundle is ok at `./dist/fonts/_font_file_name.js`
    - Check if type is correctly generated

  - **Then commit and make the PR**.

## Nice To Know

This is a reminder that this library contains fonts dumped from internet, some of them may not be compatible with the default dictionary or it is not well formatted to work with the method that we use to extract the font from the files. So please expect some fonts to be broken with issues like:

- Missing characters or capitalized letters.
- Broken config header.
- Mismatching letters with the default dictionary.

If you want to fix fonts you can edit them as described in the contributing section. By now I'm not fixing them since this is a small project and I have no time too look and fix into each file.

> Maybe, i will add some validations in the bundler to exclude fonts that won't pass the default dictionary.

## Dictionaries

Dictionaries are arrays of characters in specific order that will match the characters placed in a font file. By default this library uses a custom dictionary that matches almost all fonts in this repository, but some custom fonts may not work with the default dictionary, so you have to make sure your font does.

If the font you're using doesn't match the default dictionary you can always pass a custom one to the exported methods of this module.

### How to create a custom dictionary

To create a custom dictionary you need to check the order of the characters in the target font file, then you must pass an array to the desired method for generating the text, this is an example of a dictionary:

```typescript
const dictionary = ['A', 'B', 'C', ...];
const figlet = text('Hello World.', 'starwars', dictionary);
```

## :pencil: TO DO

- Chainable text on methods.
- More than one space. (Done)
- SyncText method. (Done)
- Available font list (autocompletion types). (Done)
- Multiline. (Done)
- Dictionary Documentation (Done)
- How to: Make your own dictionary preset. (Done)
- How to: Font usage markup. (Done)

## :clipboard: Changes

- Now it supports multiline text and multiple spaces for text.

- Now the deno-figlet module comes with a font bundler to parse all fonts into ESM modules it also generates types for IDE autocompletion. It makes importing and manipulating them a lot easier at production time, but the fonts must still be written in FIGfont format inside the src folder.

- You can now import the fonts separately to play with them however you want.

    ```javascript
    import { _font_name } from 'https://deno.land/x/deno_figlet/dist/fonts/mod.ts'
    ```

    **OR**

    ```javascript
    import font from 'https://deno.land/x/deno_figlet/dist/fonts/_font_name.ts'
    ```
  > Note: You don't need to import fonts manually for using this module, this information is only for developers.

Written By [Crawford.](https://github.com/denyncrawford).

# :scroll: License

MIT License

Copyright (c) Crawford.

[Full license](https://github.com/denyncrawford/deno-figlet/blob/master/LICENSE.md)
