const squareCode = function (message) {
  const squared = Math.ceil(Math.sqrt(message.length));
  let messageWithoutSpaces = message.replace(/ /g, "");
  let codedMessage = [];

  for (let i = 0; i < squared; i++) {
    codedMessage.push(messageWithoutSpaces[i])
  }


  return codedMessage
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));