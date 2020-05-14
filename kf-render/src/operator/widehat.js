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

  return kity.createClass("WidehatOperator", {
    base: require("operator/operator"),

    constructor: function () {
      this.callBase("Widehat");
    },

    applyOperand: function (exponent) {
      generateOperator.call(this, exponent);
    },
  });

  function generateOperator(exponent) {
    var padding = 5,
      ULine = generateUDLine(exponent),
      DLine = generateUDLine(exponent, 1);

    ULine.translate(0, -2.5);
    DLine.translate(0, -2.5);

    this.addOperatorShape(ULine);
    this.addOperatorShape(DLine);
  }

  function generateUDLine(operand, isSup = 0) {
    var shape = new kity.Path(),
      h = operand.getHeight() * 0.9,
      w = operand.getWidth(),
      drawer = shape.getDrawer();

    drawer.moveTo(w / 2, -6);
    drawer.lineTo(w * isSup, 0);
    drawer.close();
    shape.fill("none");
    return shape.stroke("black");
  }
});
