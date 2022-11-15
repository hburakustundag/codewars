String.prototype.camelCase = function () {
  return this.split(" ")
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    })
    .join("");
};
