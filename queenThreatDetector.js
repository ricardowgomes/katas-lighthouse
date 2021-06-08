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

const queenThreat = function (arrayOfArrays) {
  let threat = [];
  let threatWhite = [];
  let threatBlack = [];
  let isQueenUnderThreat = false;

  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
      if (arrayOfArrays[i][j] === 1) {
        threat.push(i, j)
      }
    }
  }
  threatWhite.push(threat[0], threat[1])
  threatBlack.push(threat[2], threat[3])

  let diagonalThreat = [];

  for (let i = 0; i < 8; i++) {

  }

  if (threatWhite[0] === threatBlack[0]) {
    isQueenUnderThreat = true;

  } else if (threatWhite[1] === threatBlack[1]) {
    isQueenUnderThreat = true;
  }

  return isQueenUnderThreat
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

