/*!
 * 编辑器主体结构
 */

define(function (require) {
  var Lang = {
    en: require("Lang/en/en"),
    en_us: require("Lang/en_us/en_us"),
    zh_cn: require("Lang/zh_cn/zh_cn"),
  };

  var kity = require("kity"),
    Utils = require("base/utils"),
    defaultOpt = {
      formula: {
        fontsize: 50,
        autoresize: false,
      },
      ui: {
        zoom: true,
        maxzoom: 2,
        minzoom: 1,
      },
    };

  // 同步组件列表
  var COMPONENTS = {},
    // 异步组件列表
    ResourceManager = require("kf").ResourceManager;

  var KFEditor = kity.createClass("KFEditor", {
    constructor: function (container, opt) {
      this.options = Utils.extend(true, {}, defaultOpt, opt);

      this.FormulaClass = null;
      // 就绪状态
      this._readyState = false;
      this._callbacks = [];

      this.container = container;
      this.services = {};
      this.commands = {};

      this.I18N = Lang[this.options.lang || "zh_cn"];

      this.initResource();
    },

    isReady: function () {
      return !!this._readyState;
    },

    triggerReady: function () {
      var cb = null,
        _self = this;

      while ((cb = this._callbacks.shift())) {
        cb.call(_self, _self);
      }
    },

    ready: function (cb) {
      if (this._readyState) {
        cb.call(this, this);
      } else {
        this._callbacks.push(cb);
      }
    },

    getLang(text) {
      var options = this.getOptions(),
        lang = this.I18N;
      if (!lang) throw Error("not import language file");
      text = (text || "").split(".");
      for (var i, o = 0; (i = text[o++]) && (lang = lang[i]); );
      return lang;
    },

    getContainer: function () {
      return this.container;
    },

    getDocument: function () {
      return this.container.ownerDocument;
    },

    getFormulaClass: function () {
      return this.FormulaClass;
    },

    getOptions: function () {
      return this.options;
    },

    initResource: function () {
      var _self = this;

      ResourceManager.ready(function (Formula) {
        _self.FormulaClass = Formula;
        _self.initComponents();
        _self._readyState = true;
        _self.triggerReady();
      }, this.options.resource);
    },

    /**
     * 初始化同步组件
     */
    initComponents: function () {
      var _self = this;

      Utils.each(COMPONENTS, function (Component, name) {
        new Component(_self, _self.options[name]);
      });
    },

    requestService: function (serviceName, args) {
      var serviceObject = getService.call(this, serviceName);

      return serviceObject.service[serviceObject.key].apply(
        serviceObject.provider,
        [].slice.call(arguments, 1)
      );
    },

    request: function (serviceName) {
      var serviceObject = getService.call(this, serviceName);

      return serviceObject.service;
    },

    registerService: function (serviceName, provider, serviceObject) {
      var key = null;

      for (key in serviceObject) {
        if (serviceObject[key] && serviceObject.hasOwnProperty(key)) {
          serviceObject[key] = Utils.proxy(serviceObject[key], provider);
        }
      }

      this.services[serviceName] = {
        provider: provider,
        key: key,
        service: serviceObject,
      };
    },

    registerCommand: function (commandName, executor, execFn) {
      this.commands[commandName] = {
        executor: executor,
        execFn: execFn,
      };
    },

    execCommand: function (commandName, args) {
      var commandObject = this.commands[commandName];

      if (!commandObject) {
        throw new Error("KFEditor: not found command, " + commandName);
      }

      return commandObject.execFn.apply(
        commandObject.executor,
        [].slice.call(arguments, 1)
      );
    },
  });

  function getService(serviceName) {
    var serviceObject = this.services[serviceName];

    if (!serviceObject) {
      throw new Error("KFEditor: not found service, " + serviceName);
    }

    return serviceObject;
  }

  Utils.extend(KFEditor, {
    registerComponents: function (name, component) {
      COMPONENTS[name] = component;
    },
  });

  return KFEditor;
});
