const jQuery = require("jquery");
window.jQuery = jQuery;
require("./kitygraph.all.min");
require("./kity-formula-render.all.min");
require("./kity-formula-parser.all.min");

module.exports.kity = window.kity;
module.exports.kf = window.kf;
module.exports.jQuery = window.jQuery;