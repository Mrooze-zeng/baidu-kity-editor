define(function () {
  return function (operands) {
    var result = ["\\vec"];

    result.push(" " + operands[0]);

    return result.join("");
  };
});
