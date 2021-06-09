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

console.log(possiblePositionsQueen(4, 4))
// console.log(possiblePositionsQueen(2, 3))
// console.log(possiblePositionsQueen(0, 5))
// console.log(possiblePositionsQueen(5, 0))
// console.log(possiblePositionsQueen(7, 5))
// console.log(possiblePositionsQueen(0, 0))