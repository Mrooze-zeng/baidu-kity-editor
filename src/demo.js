const jQuery = require("jquery");
const kf = require("./index");

jQuery(function ($) {
  var factory = kf.EditorFactory.create($("#kfEditorContainer")[0], {
    render: {
      fontsize: 40,
    },
    resource: {
      path: "resource/",
    },
  });

  factory.ready(function (KFEditor) {
    // this指向KFEditor

    this.execCommand("render", "\\placeholder");
    this.execCommand("focus");

    window.kfe = this;
  });
});
