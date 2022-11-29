function queueTime(customers, n) {
  let tillsArray = customers.slice(0, n);
  for (let i = n; i < customers.length; i++) {
    let smallest = Math.min(...tillsArray);
    let index = tillsArray.indexOf(smallest);
    tillsArray[index] += customers[i];
  }
  if (tillsArray.length) {
    return Math.max(...tillsArray);
  } else {
    return 0;
  }
}
