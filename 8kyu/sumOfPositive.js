/*
Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

//SOLUTION:

function positiveSum(arr) {
  if (arr[0] === undefined) {
    return 0;
  } else {
    const positive = arr.filter((x) => x > 0);
    return positive.reduce((acc, cur) => acc + cur, 0);
  }
}
