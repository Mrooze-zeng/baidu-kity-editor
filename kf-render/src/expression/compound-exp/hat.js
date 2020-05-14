define(function (require) {
  var kity = require("kity"),
    HatOperator = require("operator/hat");

  return kity.createClass("HatExpression", {
    base: require("expression/compound-exp/binary"),

    constructor: function (exponent) {
      this.callBase(exponent);

      this.setFlag("Hat");

      this.setOperator(new HatOperator());
    },

    setHat: function (operand) {
      return this.setFirstOperand(operand);
    },

    getHat: function () {
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
