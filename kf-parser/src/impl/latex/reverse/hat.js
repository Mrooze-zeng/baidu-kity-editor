define(function () {
  return function (operands) {
    var result = ["\\hat"];

    result.push(" " + operands[0]);

    return result.join("");
  };
});
