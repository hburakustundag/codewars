function rot13(message) {
  let charAltered;
  return message
    .split("")
    .map((char) => {
      if (
        (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 77) ||
        (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 109)
      ) {
        charAltered = char.charCodeAt(0) + 13;
      } else if (
        (char.charCodeAt(0) > 77 && char.charCodeAt(0) <= 90) ||
        (char.charCodeAt(0) > 97 && char.charCodeAt(0) <= 122)
      ) {
        charAltered = char.charCodeAt(0) - 13;
      } else {
        charAltered = char.charCodeAt(0);
      }
      return String.fromCharCode(charAltered);
    })
    .join("");
}
