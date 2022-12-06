var isAnagram = function (test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();

  return original.split("").sort().join("") === test.split("").sort().join("");
};
