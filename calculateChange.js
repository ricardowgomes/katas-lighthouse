const calculateChange = function (total, cash) {
  let output = {};
  let newChange = cash - total;

  if (newChange > 2000) {
    output.twentyDollar = (Math.floor(newChange / 2000))
    newChange = (newChange - (2000 * output.twentyDollar))
  }

  if (newChange > 1000) {
    output.tenDollar = (Math.floor(newChange / 1000))
    newChange = (newChange - (1000 * output.tenDollar))
  }

  if (newChange > 500) {
    output.fiveDollar = (Math.floor(newChange / 500))
    newChange = (newChange - (500 * output.fiveDollar))
  }

  if (newChange > 200) {
    output.twoDollar = (Math.floor(newChange / 200))
    newChange = (newChange - (200 * output.twoDollar))
  }

  if (newChange > 100) {
    output.oneDollar = (Math.floor(newChange / 100))
    newChange = (newChange - (100 * output.oneDollar))
  }

  if (newChange > 25) {
    output.quarter = (Math.floor(newChange / 25))
    newChange = (newChange - (25 * output.quarter))
  }

  if (newChange > 10) {
    output.dime = (Math.floor(newChange / 10))
    newChange = (newChange - (10 * output.dime))
  }

  if (newChange > 5) {
    output.nickel = (Math.floor(newChange / 5))
    newChange = (newChange - (5 * output.nickel))
  }

  if (newChange > 1) {
    output.penny = (Math.floor(newChange / 1))
    newChange = (newChange - (1 * output.penny))
  }

  return output;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));