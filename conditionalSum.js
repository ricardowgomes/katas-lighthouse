const conditionalSum = function (values, condition) {
  let sumOfNums = null;

  if (values.length === 0) {
    sumOfNums = 0;

  } else {
    for (const num of values) {
      if (condition === "even" && num % 2 === 0) {
        sumOfNums += num

      } else if (condition === "odd" && !(num % 2 === 0)) {
        sumOfNums += num

      }
    }
  } return sumOfNums;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));