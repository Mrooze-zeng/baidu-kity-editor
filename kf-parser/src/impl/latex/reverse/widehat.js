define(function () {
  return function (operands) {
    var result = ["\\widehat"];

    result.push(" " + operands[0]);

    return result.join("");
  };
});
