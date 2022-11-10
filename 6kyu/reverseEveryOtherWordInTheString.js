function reverse(str) {
  return str
    .split(" ")
    .map((word, index) => {
      if (index % 2 == 1) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ")
    .trim();
}
