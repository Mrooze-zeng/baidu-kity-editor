/**
 * 方根表达式
 */

define(function (require) {
  var kity = require("kity"),
    OverrightarrowOperator = require("operator/overrightarrow");

  return kity.createClass("OverrightarrowExpression", {
    base: require("expression/compound-exp/binary"),

    constructor: function (exponent) {
      this.callBase(exponent);

      this.setFlag("Overrightarrow");

      this.setOperator(new OverrightarrowOperator());
    },

    setOverrightarrow: function (operand) {
      return this.setFirstOperand(operand);
    },

    getOverrightarrow: function () {
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
