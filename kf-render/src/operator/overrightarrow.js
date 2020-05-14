/**
 * 开方操作符
 */

define(function (require) {
  var kity = require("kity"),
    // 符号图形属性
    // 线条宽度
    SHAPE_DATA_WIDTH = 1,
    // 计算公式
    radians = (2 * Math.PI) / 360,
    sin15 = Math.sin(15 * radians),
    cos15 = Math.cos(15 * radians),
    tan15 = Math.tan(15 * radians);

  return kity.createClass("OverrightarrowOperator", {
    base: require("operator/operator"),

    constructor: function () {
      this.callBase("Overrightarrow");
    },

    applyOperand: function (exponent) {
      generateOperator.call(this, exponent);
    },
  });

  function generateOperator(exponent) {
    var padding = 5,
      hLine = generateHLine(exponent),
      ULine = generateUDLine(exponent),
      DLine = generateUDLine(exponent, 1);

    hLine.translate(0, -2.5);
    ULine.translate(0, -2.5);
    DLine.translate(0, -2.5);

    this.addOperatorShape(ULine);
    this.addOperatorShape(DLine);
    this.addOperatorShape(hLine);

    // this.parentExpression.expand(0, padding * 2);
    // this.parentExpression.translateElement(0, 0);
  }

  function generateUDLine(operand, isSup = -1) {
    var shape = new kity.Path(),
      h = operand.getHeight() * 0.9,
      w = operand.getWidth(),
      drawer = shape.getDrawer();

    drawer.moveTo(w + 2, 0);
    drawer.lineTo(w - 6, isSup * 4.5);
    drawer.close();
    shape.fill("none");
    return shape.stroke("black");
  }

  function generateHLine(operand) {
    var w = operand.getWidth() + 2 * SHAPE_DATA_WIDTH;

    return new kity.Rect(w, 2 * SHAPE_DATA_WIDTH).fill("black");
  }
});
