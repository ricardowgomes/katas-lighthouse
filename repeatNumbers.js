const repeatNumbers = function (data) {
  let repeat = ""
  for (let i = 0; i < data.length; i++) {
    let multiplier = data[i][1]
    let numString = data[i][0].toString()

    if (i !== 0) {
      repeat += ", ";
      for (let k = 0; k < multiplier; k++) {
        repeat += numString;
      }
    } else {
      for (let k = 0; k < multiplier; k++) {
        repeat += numString;
      }
    }
  } return repeat
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));