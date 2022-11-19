function isIsogram(str) {
  let arr = str.toLowerCase().split("");
  return arr.every((letter) => arr.indexOf(letter) === arr.lastIndexOf(letter));
}
