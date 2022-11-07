/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

//SOLUTION:

function sumMix(x) {
  let sum = 0;
  x.forEach((num) => {
    sum += parseInt(num);
  });
  return sum;
}

function sumMix(x) {
  return x.reduce((a, b) => +a + +b, 0);
}
