/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

//SOLUTION:

function solution(string) {
  let newStr = "";
  string = string.split("");
  for (let letter of string) {
    if (letter === letter.toUpperCase()) {
      newStr += " " + letter;
    } else {
      newStr += letter;
    }
  }
  return newStr;
}
