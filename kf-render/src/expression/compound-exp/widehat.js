define(function (require) {
  var kity = require("kity"),
    WidehatOperator = require("operator/widehat");

  return kity.createClass("HatExpression", {
    base: require("expression/compound-exp/binary"),

    constructor: function (exponent) {
      this.callBase(exponent);

      this.setFlag("widehat");

      this.setOperator(new WidehatOperator());
    },

    setWidehat: function (operand) {
      return this.setFirstOperand(operand);
    },

    getWidehat: function () {
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
