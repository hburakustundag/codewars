function longest(s1, s2) {
  let longStr = (s1 + s2).split("").sort();
  return [...new Set(longStr)].join("");
}
