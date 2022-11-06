/* 
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

//SOLUTION(S):

function repeatStr(n, s) {
  let str = s;
  for (let i = 1; i < n; i++) {
    str += s;
  }
  return str;
}

//OR

function repeatStr(n, s) {
  s.repeat(n);
}
