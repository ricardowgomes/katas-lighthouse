const sumLargestNumbers = function (data) {
  const largestNum = Math.max(...data);
  const indexOfLargestNum = data.indexOf(largestNum);
  data.splice(indexOfLargestNum, 1);
  const secondLargestNum = Math.max(...data);

  return largestNum + secondLargestNum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([220, 4000, 34, 6, 92, 2, 50]));