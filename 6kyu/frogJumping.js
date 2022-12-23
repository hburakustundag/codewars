function solution(a) {
  let jumpCount = -1;
  let frogPosition = 0;
  for (let i = 0; i < a.length; i++) {
    frogPosition += a[frogPosition];
    if (typeof a[frogPosition] === "undefined") {
      jumpCount = i + 1;
      break;
    }
  }
  return jumpCount;
}
