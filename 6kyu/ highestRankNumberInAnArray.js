function highestRank(arr) {
  const frequency = {};
  for (const num of arr) {
    frequency[num] = frequency[num] + 1 || 1;
  }

  let maxFrequency = 0;
  let mostFrequentNumbers = [];
  for (const number in frequency) {
    if (frequency[number] > maxFrequency) {
      maxFrequency = frequency[number];
      mostFrequentNumbers = [number];
    } else if (frequency[number] === maxFrequency) {
      mostFrequentNumbers.push(number);
    }
  }
  return Math.max(...mostFrequentNumbers);
}
