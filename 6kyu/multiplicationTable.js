multiplicationTable = function (size) {
  let firstRow = Array.from({ length: size }, (_, i) => i + 1);
  let multiplicationTable = [firstRow];
  for (let i = 1; i < size; i++) {
    let rows = [];
    for (let j = 0; j < size; j++) {
      rows.push(firstRow[i] * firstRow[j]);
    }
    multiplicationTable.push(rows);
  }
  return multiplicationTable;
};
