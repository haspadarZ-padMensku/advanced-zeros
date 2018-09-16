module.exports = function getZerosCount(number, base) {
  // your implementation
  let n = 2;
  let multipliers = [];

  while (n <= base) {
    if (base % n == 0) {
      multipliers.push(n);
      base /= n;
    } else {
      n++;
    }
  }

  n = multipliers[multipliers.length - 1];

  let counter = 0;

  while (number >= n) {
    number = Math.floor(number / n);
    counter += number;
  }

  let repeat = 0;

  while (multipliers[multipliers.length - 1] ==
    multipliers[multipliers.length - 2 - repeat] ) {
    repeat ++;
  }

  return Math.floor(counter / (repeat + 1));
}