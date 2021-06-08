const squareCode = function (message) {
  let messageWithoutSpaces = message.replace(/ /g, "");
  let numOfWords = Math.ceil(Math.sqrt(messageWithoutSpaces.length));
  let inicialValue = 0;
  let finalValue = numOfWords;
  let newArray = [];

  for (let i = 0; i < numOfWords; i++) {
    newArray.push(messageWithoutSpaces.slice(inicialValue, finalValue))

    inicialValue += numOfWords;
    finalValue += numOfWords;
  }

  const codedMessage = function (arr) {
    let tempArray = [];
    let finalArray = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        tempArray.push(arr[j][i])
      }
      let codedText = tempArray.join("")
      finalArray.push(codedText)
      tempArray = [];
    }

    return finalArray
  }

  return codedMessage(newArray).join(" ")
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));