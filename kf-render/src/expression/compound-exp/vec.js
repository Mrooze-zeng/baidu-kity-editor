define(function (require) {
  var kity = require("kity"),
    VecOperator = require("operator/vec");

  return kity.createClass("VecExpression", {
    base: require("expression/compound-exp/binary"),

    constructor: function (exponent) {
      this.callBase(exponent);

      this.setFlag("Vec");

      this.setOperator(new VecOperator());
    },

    setVec: function (operand) {
      return this.setFirstOperand(operand);
    },

    getVec: function () {
      return this.getFirstOperand();
    },

    setExponent: function (operand) {
      return this.setLastOperand(operand);
    },

    getExponent: function () {
      return this.getLastOperand();
    },
  });
});
