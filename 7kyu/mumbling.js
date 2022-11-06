/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//SOLUTION(S):

function accum(s) {
  return s
    .split("")
    .map((x, i) => x.toUpperCase() + x.toLowerCase().repeat(i))
    .join("-");
}

//OR

function accum(s) {
  let letters = s.split("");
  let words = [];
  for (let i = 0; i < letters.length; i++) {
    words.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }

  return words.join("-");
}
