function order(words) {
  let wordsArray = words.split(" ");
  let ordered = [];
  for (let i = 1; i <= wordsArray.length; i++) {
    for (let j = 0; j < wordsArray.length; j++) {
      if (wordsArray[j].includes(i)) {
        ordered.push(wordsArray[j]);
      }
    }
  }
  return ordered.join(" ");
}
