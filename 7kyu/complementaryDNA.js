function DNAStrand(dna) {
  let dnaStrings = {
    A: "T",
    C: "G",
    T: "A",
    G: "C",
  };
  return dna
    .split("")
    .map((x) => dnaStrings[x])
    .join("");
}
