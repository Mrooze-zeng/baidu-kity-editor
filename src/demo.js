const jQuery = require("jquery");
const Factory = require("./index");

jQuery(function ($) {
  var factory = Factory.create($("#kfEditorContainer")[0], {
    render: {
      fontsize: 40,
    },
    resource: {
      path: "resource/",
      packFont: true,
    },
  });

  factory.ready(function (KFEditor) {
    // this指向KFEditor

    this.execCommand("render", "\\placeholder");
    this.execCommand("focus");

    window.kfe = this;
  });
});
