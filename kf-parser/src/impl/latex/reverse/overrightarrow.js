/*!
 * 逆解析处理函数: sqrt
 */

define(function () {
  /**
   * operands中元素对照表
   * 0: 表达式
   * 1: 指数
   */
  return function (operands) {
    var result = ["\\overrightarrow"];

    result.push(" " + operands[0]);

    return result.join("");
  };
});
