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
  for (let i = 0; i < 7; i++) {
    position["x"].push(xChess)
    position["y"].push(i)
    position["x"].push(i)
    position["y"].push(yChess)

  }

  // Diagonal Movement (To Bottom-Right Corner)
  for (let i = 0; i < 7; i++) {
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
  for (let i = 0; i < 7; i++) {
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
  for (let i = 0; i < 7; i++) {
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
  for (let i = 0; i < 7; i++) {
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

const arr = generateBoard([0, 5], [5, 0])

const moveQueen = function (whiteQueen, blackQueen) {
  let table = [];

  for (let i = 0; i < 8; i++) {
    let row = [];

    for (let j = 0; j < 8; j++) {
      if (whiteQueen[0] === i) {
        row.push("x")

      } else if (whiteQueen[1] === j) {
        row.push("x")

      } else {
        row.push("o")
      }

    }
    table.push(row)
  }
  return table
}

console.log(arr)
console.log(moveQueen([4, 4], [5, 0]))

let whiteQueen = [0, 5];
let blackQueen = [5, 0];

let xW = whiteQueen[0]
let yW = whiteQueen[1]
let xB = blackQueen[0]
let yB = blackQueen[1]
let positionXofWhite = [];
let positionYofWhite = [];
let positionXofBlack = [];
let positionYofBlack = [];

for (let i = 0; (xW + i) < 8; i++) {
  positionXofWhite.push(xW + i)
}

for (let i = 0; (yW + i) < 8; i++) {
  positionYofWhite.push(xW + i)
}

console.log(positionXofWhite)
console.log(positionYofWhite)

