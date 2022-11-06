/*

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

*/

//SOLUTION:

function isValidWalk(walk) {
  let westCounter = 0;
  let eastCounter = 0;
  let northCounter = 0;
  let southCounter = 0;
  if (walk.length === 10) {
    for (let i = 0; i < walk.length; i++) {
      if (walk[i] === "w") {
        westCounter++;
      } else if (walk[i] === "e") {
        eastCounter++;
      } else if (walk[i] === "n") {
        northCounter++;
      } else {
        southCounter++;
      }
    }
    return westCounter - eastCounter === 0 && northCounter - southCounter === 0;
  } else return false;
}
