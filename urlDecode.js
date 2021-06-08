const urlDecode = function (text) {
  let newText = {};
  let splittedText = text.split('&');
  let newArray = [];


  for (let i = 0; i < splittedText.length; i++) {
    newArray.push(splittedText[i].replace(/%20/g, " ").split('='));
  }

  for (let j = 0; j < newArray.length; j++) {
    for (let k = 0; k < newArray[j].length; k++) {
      newText[newArray[j][0]] = newArray[j][1]
    }
  }

  return newText
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);