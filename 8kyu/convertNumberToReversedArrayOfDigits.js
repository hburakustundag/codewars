/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] 

*/

//SOLUTION:

function digitize(n) {
  let newArray = Array.from(String(n), Number);
  let arr = [];
  for (let i = newArray.length - 1; i >= 0; i--) {
    arr.push(newArray[i]);
  }
  return arr;
}
