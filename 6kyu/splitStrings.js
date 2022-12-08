function solution(str) {
  let arr = [];
  if (str.length % 2) {
    str += "_";
  }
  for (let i = 0; i < str.length; i++) {
    if (!(i % 2)) {
      arr.push(str.slice(i, i + 2));
    }
  }
  return arr;
}
