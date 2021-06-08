const squareCode = function (message) {
  let messageWithoutSpaces = message.replace(/ /g, "");
  let numOfWords = Math.ceil(Math.sqrt(messageWithoutSpaces.length));
  let numOfChars = Math.ceil(messageWithoutSpaces.length / numOfWords)
  let inicialValue = 0;
  let finalValue = numOfChars;
  let newArray = [];
  let finalArray = [];

  for (let i = 0; i < numOfWords; i++) {
    newArray.push(messageWithoutSpaces.slice(inicialValue, finalValue))

    inicialValue += numOfChars;
    finalValue += numOfChars;
  }

  // const squareTableChecker = function (arr) {
  //   const lastWord = arr[arr.length - 1];
  //   const secLastWord = arr[arr.length - 2];
  //   let lastArray = [];

  //   if ((lastWord.length + 1) < secLastWord.length) {
  //     let arraySecLastWord = secLastWord.split('');
  //     let shiftChar2 = arraySecLastWord[arraySecLastWord.length - 1]
  //     arraySecLastWord.pop();
  //     let newSecLastWord = arraySecLastWord.join('')

  //     let arrayLastWord = lastWord.split('');
  //     arrayLastWord.unshift(shiftChar2);
  //     let newLastWord = arrayLastWord.join('')

  //     arr[arr.length - 2] = newSecLastWord
  //     arr[arr.length - 1] = newLastWord

  //     return arr

  //   } else {

  //     return newArray
  //   }
  // }

  // let organizedArray = squareTableChecker(newArray)

  for (let i = 0; i < newArray.length; i++) {
    finalArray.push(newArray[i][0])
    for (let j = 0; j < newArray[i].length; j++) {

    }
  }

  return newArray
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/*
const spreadArray = function (str) {
    return [...str];
  }

  const arraySpread = spreadArray(messageWithoutSpaces)
  */