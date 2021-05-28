const camelCase = function (input) {
  let fraseSplit = input.split(" ")
  let arrayVazio = []
  for (let i = 0; i < fraseSplit.length; i++) {
    if (i === 0) {
      arrayVazio.push(fraseSplit[i][0] + fraseSplit[i].slice(1).toLowerCase())
    } else {
      arrayVazio.push(fraseSplit[i][0].toUpperCase() + fraseSplit[i].slice(1).toLowerCase())
    }
  }
  let fraseCamel = arrayVazio.join("")
  return fraseCamel
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));