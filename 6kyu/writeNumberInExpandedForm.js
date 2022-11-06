/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

//SOLUTION:

function expandedForm(num) {
  let digitArray = num.toString().split("");
  let emptyArray = [];
  digitArray.reverse().forEach((digit, index) => {
    if (digit !== "0") {
      let adjustedDigit = digit * 10 ** index;
      emptyArray.push(adjustedDigit);
    }
  });
  return emptyArray.reverse().join(" + ");
}
