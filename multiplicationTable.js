const multiplicationTable = function (maxValue) {
  const max = maxValue;
  let arr = [];
  let table = [];
  let multiTable = [];
  let anotherArray = [];

  for (let i = 1; i <= maxValue; i++) {
    arr.push(i)
    multiTable.push(arr)
  }

  for (let j = 0; j < multiTable.length; j++) {
    let lastArrayIPromise = [];

    for (let k = 0; k < multiTable[j].length; k++) {
      lastArrayIPromise.push(multiTable[j][k] * multiTable[k][j])
    }
    table.push(lastArrayIPromise)
  }

  for (let c = 0; c < table.length; c++) {
    anotherArray.push(table[c].join(" "))
  }

  return anotherArray.join("\n") + "\n"
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));