function count(string) {
  let count = {};
  string.split("").forEach((x) => {
    count[x] = (count[x] || 0) + 1;
  });
  return count;
}
