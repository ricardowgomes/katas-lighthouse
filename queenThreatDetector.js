const generateBoard = function (white, black) {
  let emptyBoard = [];
  for (let i = 0; i < 8; i++) {
    let row = [];

    for (let j = 0; j < 8; j++) {
      if (i === white[0] && j === white[1]) {
        row.push(1)

      } else if (i === black[0] && j === black[1]) {
        row.push(1)

      } else {
        row.push(0)
      }
    }

    emptyBoard.push(row)
  }
  return emptyBoard
}

const possiblePositionsQueen = function (x, y) {
  let xChess = x;
  let yChess = y;
  let position = { x: [], y: [] };

  // Horizontal and Vertical Movement
  for (let i = 0; i < 8; i++) {
    position["x"].push(xChess)
    position["y"].push(i)
    position["x"].push(i)
    position["y"].push(yChess)
  }

  // Diagonal Movement (To Bottom-Right Corner)
  for (let i = 0; i < 8; i++) {
    if (xChess < 7 && yChess < 7) {
      xChess += 1
      position["x"].push(xChess)

      yChess += 1
      position["y"].push(yChess)
    }
  }
  xChess = x
  yChess = y

  // Diagonal Movement (To Top-Left Corner)
  for (let i = 0; i < 8; i++) {
    if (xChess > 0 && yChess > 0) {
      xChess -= 1
      position["x"].push(xChess)
      yChess -= 1
      position["y"].push(yChess)
    }
  }

  xChess = x
  yChess = y

  // Diagonal Movement (To Bottom-Left Corner)
  for (let i = 0; i < 8; i++) {
    if (xChess < 7 && yChess > 0) {
      xChess += 1
      position["x"].push(xChess)
      yChess -= 1
      position["y"].push(yChess)
    }
  }

  xChess = x
  yChess = y

  // Diagonal Movement (To Top-Right Corner)
  for (let i = 0; i < 8; i++) {
    if (xChess > 0 && yChess < 7) {
      xChess -= 1
      position["x"].push(xChess)
      yChess += 1
      position["y"].push(yChess)
    }
  }

  xChess = x
  yChess = y

  return position

}

const queenThreat = function (whiteQueen, blackQueen) {
  let isQueenUnderThreat = false;

  const possiblePositions = possiblePositionsQueen(whiteQueen[0], whiteQueen[1])

  const arrayPositions = Object.values(possiblePositions)

  let positionsArray = [];

  for (let i = 0; i < arrayPositions.length; i++) {
    let pairArray = [];

    for (let j = 0; j < arrayPositions[i].length; j++) {
      pairArray.push(arrayPositions[0][j])
      pairArray.push(arrayPositions[1][j])
      positionsArray.push(pairArray)

      pairArray = [];
    }
  }

  for (array of positionsArray) {
    if (array[0] === blackQueen[0]
      && array[1] === blackQueen[1]) {
      isQueenUnderThreat = true;
    }
  }

  return isQueenUnderThreat
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(whiteQueen, blackQueen));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(whiteQueen, blackQueen));

