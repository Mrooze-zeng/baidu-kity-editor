require("kf-render");

var Parser = require("./parser").Parser;

// 初始化组件
require("impl/latex/latex");

window.kf.Parser = Parser;
window.kf.Assembly = require("./assembly");
module.exports = { kf: window.kf, kity: window.kity };
