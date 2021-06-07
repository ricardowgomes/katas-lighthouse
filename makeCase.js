const makeCase = function (input, ccase) {
  let newPhrase = input;

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

  const pascalCase = function (input) {
    let fraseSplit = input.split(" ")
    let arrayVazio = []
    for (let i = 0; i < fraseSplit.length; i++) {
      arrayVazio.push(fraseSplit[i][0].toUpperCase() + fraseSplit[i].slice(1).toLowerCase())
    }

    let frase = arrayVazio.join("")
    return frase
  };

  const snakeCase = function (input) {
    let fraseSplit = input.split(" ")
    let frase = fraseSplit.join("_")
    return frase
  };

  const kebabCase = function (input) {
    let fraseSplit = input.split(" ")
    let frase = fraseSplit.join("-")
    return frase
  };

  const titleCase = function (input) {
    let fraseSplit = input.split(" ")
    let arrayVazio = []
    for (let i = 0; i < fraseSplit.length; i++) {
      arrayVazio.push(fraseSplit[i][0].toUpperCase() + fraseSplit[i].slice(1).toLowerCase())
    }

    let frase = arrayVazio.join(" ")
    return frase
  };

  const vowelCase = function (input) {
    let fraseSplit = input.split("")
    let someArr = [];

    for (let i = 0; i < fraseSplit.length; i++) {
      if (fraseSplit[i].toLowerCase() === 'a' || fraseSplit[i].toLowerCase() === 'e' || fraseSplit[i].toLowerCase() === 'i' || fraseSplit[i].toLowerCase() === 'o' || fraseSplit[i].toLowerCase() === 'u') {
        someArr.push(fraseSplit[i].toUpperCase());
      } else {
        someArr.push(fraseSplit[i])
      }
    }
    return someArr.join("");
  }

  const consonantCase = function (input) {
    let fraseSplit = input.split("")
    let someArr = [];

    for (let i = 0; i < fraseSplit.length; i++) {
      if (fraseSplit[i].toLowerCase() === 'a' || fraseSplit[i].toLowerCase() === 'e' || fraseSplit[i].toLowerCase() === 'i' || fraseSplit[i].toLowerCase() === 'o' || fraseSplit[i].toLowerCase() === 'u') {
        someArr.push(fraseSplit[i].toLowerCase());
      } else {
        someArr.push(fraseSplit[i].toUpperCase());
      }
    }
    return someArr.join("");
  }

  const upperCase = function (input) {
    return input.toUpperCase()
  }

  const lowerCase = function (input) {
    return input.toLowerCase()
  }

  if (typeof ccase !== "string") {
    for (let i = 0; i < ccase.length; i++) {
      if (ccase[i] === "camel") {
        newPhrase = camelCase(newPhrase)

      } else if (ccase[i] === "pascal") {
        newPhrase = pascalCase(newPhrase)

      } else if (ccase[i] === "snake") {
        newPhrase = snakeCase(newPhrase)

      } else if (ccase[i] === "kebab") {
        newPhrase = kebabCase(newPhrase)

      } else if (ccase[i] === "title") {
        newPhrase = titleCase(newPhrase)

      }

      if (ccase[i] === "vowel") {
        newPhrase = vowelCase(newPhrase)

      } else if (ccase[i] === "consonant") {
        newPhrase = consonantCase(newPhrase)

      }

      if (ccase[i] === "upper") {
        newPhrase = upperCase(newPhrase)

      } else if (ccase[i] === "lower") {
        newPhrase = lowerCase(newPhrase)
      }
    }

  } else {
    if (ccase === "camel") {
      newPhrase = camelCase(newPhrase)

    } else if (ccase === "pascal") {
      newPhrase = pascalCase(newPhrase)

    } else if (ccase === "snake") {
      newPhrase = snakeCase(newPhrase)

    } else if (ccase === "kebab") {
      newPhrase = kebabCase(newPhrase)

    } else if (ccase === "title") {
      newPhrase = titleCase(newPhrase)

    } else if (ccase === "vowel") {
      newPhrase = vowelCase(newPhrase)

    } else if (ccase === "consonant") {
      newPhrase = consonantCase(newPhrase)

    } else if (ccase === "lower") {
      newPhrase = lowerCase(newPhrase)

    } else if (ccase === "upper") {
      newPhrase = upperCase(newPhrase)
    }

  }
  return newPhrase
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));


