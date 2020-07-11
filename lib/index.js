
// Module imports

import loader from './loader.js';
import serializer from './serializer.js'
import factory from './factory.js';

// Main activity

// This default function is a quick usage of the bellow methods but without configuration.

export default async (string) => {
  let font = await loader("standard");
  let dictionary = await serializer(font, null);
  return factory(string, dictionary);
}

/* This method loads the font file specified in the second param from the file loader and
   serializes the font to handle de data parsing on the factory.
*/ 

const text= async (string, fontName, preset) => {
  let font = await loader(fontName);
  let dictionary = await serializer(font, preset);
  return factory(string, dictionary);
}

// This method is uses the same config from the above method but is callback asynchroned.

const textCB = (string, fontName, preset, cb) => {
  let result;
  loader(fontName, (font) => {     
    serializer(font, preset, (dictionary) => {      
      factory(string, dictionary, (res) => {
        return cb(res)
      })
    })
  });
}

// Exporting Methods

export {
  text,
  textCB
}