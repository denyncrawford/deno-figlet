
// Font loader

export default async (name, cb) => {

  let fileName = `_${name.replace(/[^a-zA-Z0-9]/g,'_')}`; 
  
  let font = await import(`../dist/fonts/${fileName}.js`);

  font = font.default.font

  if (cb && typeof cb == "function") {
    return cb(font);
  }
  return font;
}