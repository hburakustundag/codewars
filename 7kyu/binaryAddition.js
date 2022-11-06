/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

//SOLUTION(S):

function addBinary(a, b) {
  let sum = a + b;
  let counter = 0;
  let arr = [];
  for (let n = 0; 2 ** n < sum; n++) {
    counter++;
  }
  for (let i = counter - 1; 0 <= i; i--) {
    if (sum - 2 ** i >= 0) {
      sum = sum - 2 ** i;
      arr.push(1);
    } else {
      arr.push(0);
    }
  }
  return arr.join("");
}

//OR

function addBinary(a, b) {
  return (a + b).toString(2);
}
