const urlEncode = function (text) {
  text = text.trim()
  const index = [];
  const newString = [];

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      index.push(i);
    } else {
      newString.push(text[i])
    } for (let i = 0; i < index.length; i++) {
      newString.splice(index[i], 1, '%20')

    }
  }
  return newString.join('')
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));