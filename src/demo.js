const jQuery = require("jquery");
const Factory = require("./index");

jQuery(function ($) {
  var tinymceEditor = top.tinymce?.activeEditor;
  var img = tinymceEditor?.selection.getNode();
  var imgLatex = img && $(img).attr("data-latex");
  var lang = (top.store && top.store.get("__i18n_language__")) || "en_us";
  var factory = Factory.create($("#kfEditorContainer")[0], {
    render: {
      fontsize: 40,
    },
    resource: {
      path: "resource/",
      paths: {
        "KF_AMS_BB.woff": require("Resource/KF_AMS_BB.woff"),
        "KF_AMS_CAL.woff": require("Resource/KF_AMS_CAL.woff"),
        "KF_AMS_FRAK.woff": require("Resource/KF_AMS_FRAK.woff"),
        "KF_AMS_MAIN.woff": require("Resource/KF_AMS_MAIN.woff"),
        "KF_AMS_ROMAN.woff": require("Resource/KF_AMS_ROMAN.woff"),
      },
    },
    lang: lang.toLowerCase(),
  });

  factory.ready(function (KFEditor) {
    // this指向KFEditor

    this.execCommand("render", imgLatex || "\\placeholder");
    this.execCommand("focus");

    window.kfe = this;
  });
});
