function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
  let longString = "";
  let newString = "";
  for (let i = 0; i < strarr.length; i++) {
    newString = strarr.slice(i, i + k);
    if (newString.join("").length > longString.length) {
      longString = newString.join("");
    }
  }
  return longString;
}
