function high(x) {
  let alphabet = " abcdefghijklmnopqrstuvwxyz";
  let highestScoringWord = "";
  let wordPoints = 0;
  x.split(" ").forEach((word) => {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += alphabet.indexOf(word[i]);
    }
    if (sum > wordPoints) {
      wordPoints = sum;
      highestScoringWord = word;
    }
  });
  return highestScoringWord;
}
