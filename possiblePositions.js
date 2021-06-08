const possiblePositions = function (x, y) {
  let arrayOfPossiblePositions = [];

  for (let i = 0; i < x; i++) {
    arrayOfPossiblePositions.push(i)
  }

  for (let i = x + 1; i < 8; i++) {
    arrayOfPossiblePositions.push(i)
  }

  return arrayOfPossiblePositions
}

console.log(possiblePositions(4, 4))