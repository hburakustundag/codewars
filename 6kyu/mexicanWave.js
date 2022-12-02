function wave(str) {
  let wave = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      wave.push(
        str.slice(-str.length, i) + str[i].toUpperCase() + str.slice(i + 1)
      );
    }
  }
  return wave;
}
