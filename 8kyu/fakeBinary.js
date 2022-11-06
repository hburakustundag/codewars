//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//SOLUTION:

function fakeBin(x) {
  let digitArray = x.split("");
  for (let i = 0; i < x.length; i++) {
    if (+digitArray[i] < 5) {
      digitArray[i] = "0";
    } else {
      digitArray[i] = "1";
    }
  }
  return digitArray.join("");
}
