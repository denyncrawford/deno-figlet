export default async (ctx, customDict, cb) => {

  // Loading data configuration

  ctx = ctx.split("\n")
  let dictionary = customDict || ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', 'Ä', 'Ö', 'Ü', 'ä', 'ö', 'ü', 'ß'];
  const config = ctx[0].split(" "),
        blank = config[0].charAt(config[0].length - 1),
        entry = Number(config[5]),
        height = Number(config[1])

  // Working data

  let data = ctx.slice(entry + 1);

  // Important declarations

  const verify = {
    at: new RegExp(/@/, "g"),
    blank: new RegExp(`\\${blank}`, "g"),
    empty: new RegExp(/\s/, "g")
  }

  let serialized = [];

  // Main activity

  data = data
    .map(x => x.replace("@", "")
    .replace(verify.blank, " "))
    .join('\n').split("@").filter(x => {
      return !x.replace(verify.empty, "") == "";
    })

  dictionary.forEach((letter, i) => {
    serialized.push({
      letter: letter,
      ascii: data[i]
    })
  });

  serialized = serialized.reduce(
    (obj, item) => Object.assign(obj, {
      [item.letter]: item.ascii
    }), {});


    serialized["©"] = createSpace(height)
    

  // Function return

  if (cb && typeof cb === "function") return cb(serialized)
  
  return serialized;
}

const createSpace = (height) => {
  let result = "";
  for (let i = 0; i < height; i++) {
    result += " \n";
  }
  return result;
}