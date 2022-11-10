function toCamelCase(str) {
  str = str.split("");
  return str
    .map((char, index) => {
      if (char === "_" || char === "-") {
        char = str[index + 1].toUpperCase();
        str.splice(index + 1, 1);
      }
      return char;
    })
    .join("");
}
