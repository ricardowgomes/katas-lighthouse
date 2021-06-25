let prompt = require("prompt-sync")();

const guessingGame = function () {
  let number = Math.floor((Math.random()) * 100)
  let tries = 0;
  let answer = 0;
  let arrayOfGuesses = [];

  while (answer === number || answer !== "q") {
    answer = prompt("Guess a number: ");

    if (answer == number) {
      tries += 1;
      break;

    } else if (answer === "q") {
      break;

    } else if (arrayOfGuesses.includes(answer)) {
      console.log(`${answer}! You already tried that!`);
      console.log(`I'm not going to count that! Numbers of tries: ${tries}`)

    } else if (answer < (number / 2)) {
      tries += 1;
      console.log(`Uau, ${answer}! That's too low, try again!`);
      console.log(`Numbers of tries: ${tries}`)

    } else if (answer > (number * 2)) {
      tries += 1;
      console.log(`Uau, ${answer}! That's too high, try again!`);
      console.log(`Numbers of tries: ${tries}`)

    } else if (answer > number) {
      tries += 1;
      console.log(`${answer}! You're close, try again lower!`);
      console.log(`Numbers of tries: ${tries}`)

    } else if (answer < number) {
      tries += 1;
      console.log(`${answer}! You're close, try again higher!`);
      console.log(`Numbers of tries: ${tries}`)

    }

    if (isNaN(answer) === false && arrayOfGuesses.includes(answer) === false) {
      arrayOfGuesses.push(answer);

    } else if (isNaN(answer) === true) {
      console.log(`${answer} is not a valide number =(`);
      console.log(`I'm not going to count that! Numbers of tries: ${tries}`)
    }
  }

  if (tries > 10 && answer == number) {
    console.log(`Finally!!! You tried ${tries} times!`);

  } else if (tries > 5 && answer == number) {
    console.log(`You got it! Took you ${tries} times!`);

  } else if (tries > 1 && answer == number) {
    console.log(`Impressive! Took you ${tries} times!`);

  } else if (tries >= 0 && answer == number) {
    console.log(`OMG! Did you knew the number already?`);

  } else {
    console.log(`Okay, Bye!`);
  }

  return `All your guesses: ${arrayOfGuesses}`
}

console.log(guessingGame())
