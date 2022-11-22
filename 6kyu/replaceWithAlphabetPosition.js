function alphabetPosition(text) {
  let alphabet = "0abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .split("")
    .filter((x) => x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123)
    .map((letter) => alphabet.indexOf(letter))
    .join(" ");
}
