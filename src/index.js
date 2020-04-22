const { kity, kf, jQuery } = require("lib");

var KFEditor = require("editor/editor"),
  Factory = require("editor/factory");

// 注册组件
KFEditor.registerComponents("ui", require("ui/ui"));
KFEditor.registerComponents("parser", require("parse/parser"));
KFEditor.registerComponents("render", require("render/render"));
KFEditor.registerComponents("position", require("position/position"));
KFEditor.registerComponents("syntax", require("syntax/syntax"));
KFEditor.registerComponents("control", require("control/controller"));
KFEditor.registerComponents("print", require("print/printer"));

kf.EditorFactory = Factory;

module.exports = kf;
