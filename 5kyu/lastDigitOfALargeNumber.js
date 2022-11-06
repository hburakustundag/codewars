/*
Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
b
 . Note that aaa and bbb may be very large!

For example, the last decimal digit of 9^7 is 9, since 9^7=47829699 The last decimal digit of (2^200)^(2^300) which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10","10000000000")  // returns 0

*/

//SOLUTION:

var lastDigit = function (a, b) {
  /*patterns
    0 --> always 0 except power to 1
    base 1 --> always 1
    base 2 --> 2 4 8 6
    base 3 --> 3 9 7 1 
    base 4 --> 4 6 
    base 5 --> always 5
    base 6 --> always 6
    base 7 --> 7 9 3 1 
    base 8 --> 8 4 2 6 
    base 9 --> 9 1 
    */
  let positionsArray = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 4, 8, 6],
    [3, 9, 7, 1],
    [4, 6, 4, 6],
    [5, 5, 5, 5],
    [6, 6, 6, 6],
    [7, 9, 3, 1],
    [8, 4, 2, 6],
    [9, 1, 9, 1],
  ];
  let lastDigitOfNumber = a.slice(-1);
  let lastTwoDigitsOfPower = b.slice(-2);
  let positionIndex = lastTwoDigitsOfPower % 4;
  if (positionIndex === 0) {
    positionIndex = 3;
  } else {
    positionIndex -= 1;
  }
  if (a === "0" && b === "0") return 1;
  if (b === "0") return 1;
  if (
    lastDigitOfNumber === "0" ||
    lastDigitOfNumber === "1" ||
    lastDigitOfNumber === "5" ||
    lastDigitOfNumber === " 6"
  ) {
    return +lastDigitOfNumber;
  } else {
    return positionsArray[+lastDigitOfNumber][positionIndex];
  }
};
