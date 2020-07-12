
export default async (string, dictionary, cb) => {
  string = string.replace(/\s+/g, '©').split("");
  let initial = [];
  string.forEach(letter => {
    let lines = dictionary[letter].split("\n");
    initial.push(lines)
  });

  let maxLength = 0;
  initial.forEach(letterArr => {
    maxLength = letterArr.length > maxLength ? letterArr.length : maxLength;
  }); 

  let output = [];
  for (let i = 0; i < maxLength; i++) {
    output[i] = [];
    for (let j = 0; j < initial.length; j++) {
      output[i][j] = typeof initial[j][i] != "undefined" ? initial[j][i] : "";
    }
  }

   let construction = "";
   
   output.forEach(chain => {
     chain.forEach(string => {
       construction += string;
     })
     construction += "\n"
   })

  if (cb && typeof cb === "function") return cb(construction)

  return construction
}