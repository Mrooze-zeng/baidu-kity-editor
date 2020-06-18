/*!
 * toolbar元素列表定义
 */

var UI_ELE_TYPE = require("ui/ui-impl/def/ele-type"),
  BOX_TYPE = require("ui/ui-impl/def/box-type"),
  CHAR_POSITION = require("ui/char-position.data"),
  OTHER_POSITION = require("ui/other-position.data"),
  kity = require("kity");

module.exports = function (kfEditor) {
  var config = [
    {
      type: UI_ELE_TYPE.DRAPDOWN_BOX,
      options: {
        button: {
          label: kfEditor.getLang("labelMap.preset"),
          className: "yushe-btn",
          icon: {
            src: require("assets/images/toolbar/btn.png"),
            x: 0,
            y: 0,
          },
          iconSize: {
            w: 40,
          },
        },
        box: {
          width: 367,
          group: [
            {
              title: kfEditor.getLang("preset.title"),
              items: [
                {
                  title: kfEditor.getLang("preset.title"),
                  content: [
                    {
                      label: kfEditor.getLang("preset.quadraticformula"),
                      item: {
                        val: "x=\\frac {-b\\pm\\sqrt {b^2-4ac}}{2a}",
                      },
                    },
                    {
                      label: kfEditor.getLang("preset.binomialtheorem"),
                      item: {
                        val:
                          "{\\left(x+a\\right)}^2=\\sum^n_{k=0}{\\left(^n_k\\right)x^ka^{n-k}}",
                      },
                    },
                    {
                      label: kfEditor.getLang("preset.pythagoreantheorem"),
                      item: {
                        val: "a^2+b^2=c^2",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: UI_ELE_TYPE.DELIMITER,
    },
    {
      type: UI_ELE_TYPE.AREA,
      options: {
        box: {
          fixOffset: true,
          width: 527,
          type: BOX_TYPE.OVERLAP,
          group: [
            {
              title: kfEditor.getLang("basicmathematics.title"),
              items: [],
            },
            {
              title: kfEditor.getLang("greekletter.title"),
              items: [],
            },
            {
              title: kfEditor.getLang("negatedrelationaloperators.title"),
              items: [],
            },
            {
              title: kfEditor.getLang("letterlikesymbols.title"),
              items: [],
            },
            {
              title: kfEditor.getLang("arrow.title"),
              items: [],
            },
            {
              title: kfEditor.getLang("handwritten.title"),
              items: [],
            },
          ],
        },
      },
    },
    {
      type: UI_ELE_TYPE.DELIMITER,
    },
    {
      type: UI_ELE_TYPE.DRAPDOWN_BOX,
      options: {
        button: {
          label: kfEditor.getLang("labelMap.fraction"),
          icon: {
            src: require("assets/images/toolbar/btn.png"),
            x: 45,
            y: 0,
          },
        },
        box: {
          width: 332,
          group: [
            {
              title: kfEditor.getLang("fraction.fraction"),
              items: [
                {
                  title: kfEditor.getLang("fraction.fraction"),
                  content: [
                    {
                      item: {
                        val: "\\frac \\placeholder\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "{\\placeholder/\\placeholder}",
                      },
                    },
                  ],
                },
                {
                  title: kfEditor.getLang("fraction.commonfraction"),
                  content: [
                    {
                      item: {
                        val: "\\frac {dy}{dx}",
                      },
                    },
                    {
                      item: {
                        val: "\\frac {\\Delta y}{\\Delta x}",
                      },
                    },
                    {
                      item: {
                        val: "\\frac {\\delta y}{\\delta x}",
                      },
                    },
                    {
                      item: {
                        val: "\\frac \\pi 2",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: UI_ELE_TYPE.DRAPDOWN_BOX,
      options: {
        button: {
          label: kfEditor.getLang("labelMap.subsupscript"),
          icon: {
            src: require("assets/images/toolbar/btn.png"),
            x: 82,
            y: 0,
          },
        },
        box: {
          width: 332,
          group: [
            {
              title: kfEditor.getLang("subsupscript.subsupscript"),
              items: [
                {
                  title: kfEditor.getLang("subsupscript.subsupscript"),
                  content: [
                    {
                      item: {
                        val: "\\placeholder^\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\placeholder_\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\placeholder^\\placeholder_\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "{^\\placeholder_\\placeholder\\placeholder}",
                      },
                    },
                  ],
                },
                {
                  title: kfEditor.getLang("subsupscript.commonsubsupscript"),
                  content: [
                    {
                      item: {
                        val: "e^{-i\\omega t}",
                      },
                    },
                    {
                      item: {
                        val: "x^2",
                      },
                    },
                    {
                      item: {
                        val: "{}^n_1Y",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: UI_ELE_TYPE.DRAPDOWN_BOX,
      options: {
        button: {
          label: kfEditor.getLang("labelMap.roots"),
          icon: {
            src: require("assets/images/toolbar/btn.png"),
            x: 119,
            y: 0,
          },
        },
        box: {
          width: 342,
          group: [
            {
              title: kfEditor.getLang("roots.roots"),
              items: [
                {
                  title: kfEditor.getLang("roots.roots"),
                  content: [
                    {
                      item: {
                        val: "\\sqrt \\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\sqrt [\\placeholder] \\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\sqrt [2] \\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\sqrt [3] \\placeholder",
                      },
                    },
                  ],
                },
                {
                  title: kfEditor.getLang("roots.commonroots"),
                  content: [
                    {
                      item: {
                        val: "\\frac {-b\\pm\\sqrt{b^2-4ac}}{2a}",
                      },
                    },
                    {
                      item: {
                        val: "\\sqrt {a^2+b^2}",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: UI_ELE_TYPE.DRAPDOWN_BOX,
      options: {
        button: {
          label: kfEditor.getLang("labelMap.integral"),
          icon: {
            src: require("assets/images/toolbar/btn.png"),
            x: 156,
            y: 0,
          },
        },
        box: {
          width: 332,
          group: [
            {
              title: kfEditor.getLang("integral.integral"),
              items: [
                {
                  title: kfEditor.getLang("integral.integral"),
                  content: [
                    {
                      item: {
                        val: "\\int \\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\int^\\placeholder_\\placeholder\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\iint\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\iint^\\placeholder_\\placeholder\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\iiint\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\iiint^\\placeholder_\\placeholder\\placeholder",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: UI_ELE_TYPE.DRAPDOWN_BOX,
      options: {
        button: {
          label: kfEditor.getLang("labelMap.largeoperator"),
          icon: {
            src: require("assets/images/toolbar/btn.png"),
            x: 193,
            y: 0,
          },
        },
        box: {
          width: 332,
          group: [
            {
              title: kfEditor.getLang("largeoperator.largeoperator"),
              items: [
                {
                  title: kfEditor.getLang("largeoperator.largeoperator"),
                  content: [
                    {
                      item: {
                        val: "\\sum\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\sum^\\placeholder_\\placeholder\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\sum_\\placeholder\\placeholder",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: UI_ELE_TYPE.DRAPDOWN_BOX,
      options: {
        button: {
          label: kfEditor.getLang("labelMap.bracket"),
          icon: {
            src: require("assets/images/toolbar/btn.png"),
            x: 230,
            y: 0,
          },
        },
        box: {
          width: 332,
          group: [
            {
              title: kfEditor.getLang("bracket.bracket"),
              items: [
                {
                  title: kfEditor.getLang("bracket.bracket"),
                  content: [
                    {
                      item: {
                        val: "\\left(\\placeholder\\right)",
                      },
                    },
                    {
                      item: {
                        val: "\\left[\\placeholder\\right]",
                      },
                    },
                    {
                      item: {
                        val: "\\left\\{\\placeholder\\right\\}",
                      },
                    },
                    {
                      item: {
                        val: "\\left|\\placeholder\\right|",
                      },
                    },
                  ],
                },
                {
                  title: kfEditor.getLang("bracket.matrix"),
                  content: [
                    {
                      item: {
                        val:
                          "{\\left({^{\\placeholder }_{\\placeholder }}{^\\placeholder_\\placeholder}\\right)}",
                      },
                    },
                    {
                      item: {
                        val:
                          "{\\left[{^{\\placeholder }_{\\placeholder }}{^\\placeholder_\\placeholder}\\right]}",
                      },
                    },
                    {
                      item: {
                        val:
                          "{\\left\\{{^{\\placeholder }_{\\placeholder }}{^\\placeholder_\\placeholder}\\right\\}}",
                      },
                    },
                    {
                      item: {
                        val:
                          "{\\left|{^{\\placeholder }_{\\placeholder }}{^\\placeholder_\\placeholder}\\right|}",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: UI_ELE_TYPE.DRAPDOWN_BOX,
      options: {
        button: {
          label: kfEditor.getLang("labelMap.function"),
          icon: {
            src: require("assets/images/toolbar/btn.png"),
            x: 267,
            y: 0,
          },
        },
        box: {
          width: 340,
          group: [
            {
              title: kfEditor.getLang("function.title"),
              items: [
                {
                  title: kfEditor.getLang("function.trigonometric"),
                  content: [
                    {
                      item: {
                        val: "\\sin\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\cos\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\tan\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\csc\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\sec\\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\cot\\placeholder",
                      },
                    },
                  ],
                },
                {
                  title: kfEditor.getLang("function.commonfunction"),
                  content: [
                    {
                      item: {
                        val: "\\sin\\theta",
                      },
                    },
                    {
                      item: {
                        val: "\\cos{2x}",
                      },
                    },
                    {
                      item: {
                        val: "\\tan\\theta=\\frac {\\sin\\theta}{\\cos\\theta}",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: UI_ELE_TYPE.DRAPDOWN_BOX,
      options: {
        button: {
          label: kfEditor.getLang("labelMap.others"),
          icon: {
            src: require("assets/images/toolbar/button/vector.png"),
            x: 0,
            y: 0,
          },
        },
        box: {
          width: 340,
          group: [
            {
              items: [
                {
                  content: [
                    {
                      item: {
                        val: "\\vec \\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\overrightarrow \\placeholder",
                      },
                    },

                    {
                      item: {
                        val: "\\hat \\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "\\widehat \\placeholder",
                      },
                    },
                    {
                      item: {
                        val: "{^\\placeholder_\\placeholder}",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  ];

  //--------------------------------------------- 初始化特殊字符区域以外的配置项
  (function () {
    var tmp = [],
      otherImageSrc = require("assets/images/toolbar/other.png"),
      currentConf = [];

    kity.Utils.each(config, function (conf) {
      if (conf.type === UI_ELE_TYPE.DELIMITER) {
        return;
      }

      conf = conf.options.box.group;

      tmp = tmp.concat(conf);
    });

    kity.Utils.each(tmp, function (conf) {
      conf = conf.items;

      for (var i = 0, len = conf.length; i < len; i++) {
        currentConf = currentConf.concat(conf[i].content);
      }
    });

    // 添加定位信息
    kity.Utils.each(currentConf, function (conf) {
      var data = OTHER_POSITION[conf.item.val];

      if (!data) {
        return;
      }

      conf.item.img = otherImageSrc;
      conf.item.pos = data.pos;
      conf.item.size = data.size;
    });
  })();

  //--------------------------------------------- 初始化特殊字符区域
  // 基础数学
  (function () {
    var list = [
        "pm",
        "infty",
        "=",
        "sim",
        "times",
        "div",
        "!",
        "<",
        "ll",
        ">",
        "gg",
        "leq",
        "geq",
        "mp",
        "cong",
        "equiv",
        "propto",
        "approx",
        "forall",
        "partial",
        "surd",
        "cup",
        "cap",
        "varnothing",
        "%",
        "circ",
        "exists",
        "nexists",
        "in",
        "ni",
        "gets",
        "uparrow",
        "to",
        "downarrow",
        "leftrightarrow",
        "therefore",
        "because",
        "+",
        "-",
        "neg",
        "ast",
        "cdot",
        "vdots",
        /* "ddots",*/ "aleph",
        "beth",
        "blacksquare",
      ],
      configList = config[2].options.box.group[0].items;

    configList.push({
      title: kfEditor.getLang("basicmathematics.title"),
      content: getIconContents(list, require("assets/images/toolbar/char.png")),
    });
  })();

  // 希腊字符配置
  (function () {
    var greekList = [
        {
          title: kfEditor.getLang("greekletter.lowercase"),
          values: [
            "alpha",
            "beta",
            "gamma",
            "delta",
            "epsilon",
            "zeta",
            "eta",
            "theta",
            "iota",
            "kappa",
            "lambda",
            "mu",
            "nu",
            "xi",
            "omicron",
            "pi",
            "rho",
            "sigma",
            "tau",
            "upsilon",
            "phi",
            "chi",
            "psi",
            "omega",
          ],
        },
        {
          title: kfEditor.getLang("greekletter.uppercase"),
          values: [
            "Alpha",
            "Beta",
            "Gamma",
            "Delta",
            "Epsilon",
            "Zeta",
            "Eta",
            "Theta",
            "Iota",
            "Kappa",
            "Lambda",
            "Mu",
            "Nu",
            "Xi",
            "Omicron",
            "Pi",
            "Rho",
            "Sigma",
            "Tau",
            "Upsilon",
            "Phi",
            "Chi",
            "Psi",
            "Omega",
          ],
        },
        {
          title: kfEditor.getLang("greekletter.variants"),
          values: [
            "digamma",
            "varepsilon",
            "varkappa",
            "varphi",
            "varpi",
            "varrho",
            "varsigma",
            "vartheta",
          ],
        },
      ],
      greekConfigList = config[2].options.box.group[1].items;

    // 小写处理
    greekConfigList.push({
      title: greekList[0].title,
      content: getIconContents(
        greekList[0].values,
        require("assets/images/toolbar/char.png")
      ),
    });

    // 大写处理
    greekConfigList.push({
      title: greekList[1].title,
      content: getIconContents(
        greekList[1].values,
        require("assets/images/toolbar/char.png")
      ),
    });

    // 变体处理
    greekConfigList.push({
      title: greekList[2].title,
      content: getIconContents(
        greekList[2].values,
        require("assets/images/toolbar/char.png")
      ),
    });
  })();

  // 求反运算符
  (function () {
    var greekList = [
        {
          title: kfEditor.getLang("negatedrelationaloperators.title"),
          values: [
            "neq",
            "nless",
            "ngtr",
            "nleq",
            "ngeq",
            "nsim",
            "lneqq",
            "gneqq",
            "nprec",
            "nsucc",
            "notin",
            "nsubseteq",
            "nsupseteq",
            "subsetneq",
            "supsetneq",
            "lnsim",
            "gnsim",
            "precnsim",
            "succnsim",
            "ntriangleleft",
            "ntriangleright",
            "ntrianglelefteq",
            "ntrianglerighteq",
            "nmid",
            "nparallel",
            "nvdash",
            "nVdash",
            "nvDash",
            "nVDash",
            "nexists",
          ],
        },
      ],
      greekConfigList = config[2].options.box.group[2].items;

    greekConfigList.push({
      title: greekList[0].title,
      content: getIconContents(
        greekList[0].values,
        require("assets/images/toolbar/char.png")
      ),
    });
  })();

  // 字母类符号
  (function () {
    var list = [
        "aleph",
        "beth",
        "daleth",
        "gimel",
        "complement",
        "ell",
        "eth",
        "hbar",
        "hslash",
        "mho",
        "partial",
        "wp",
        "circledS",
        "Bbbk",
        "Finv",
        "Game",
        "Im",
        "Re",
      ],
      configList = config[2].options.box.group[3].items;

    configList.push({
      title: kfEditor.getLang("letterlikesymbols.title"),
      content: getIconContents(list, require("assets/images/toolbar/char.png")),
    });
  })();

  // 化箭头
  (function () {
    var list = [
        "gets",
        "to",
        "uparrow",
        "downarrow",
        "leftrightarrow",
        "updownarrow",
        "Leftarrow",
        "Rightarrow",
        "Uparrow",
        "Downarrow",
        "Leftrightarrow",
        "Updownarrow",
        "longleftarrow",
        "longrightarrow",
        "longleftrightarrow",
        "Longleftarrow",
        "Longrightarrow",
        "Longleftrightarrow",
        "nearrow",
        "nwarrow",
        "searrow",
        "swarrow",
        "nleftarrow",
        "nrightarrow",
        "nLeftarrow",
        "nRightarrow",
        "nLeftrightarrow",
        "leftharpoonup",
        "leftharpoondown",
        "rightharpoonup",
        "rightharpoondown",
        "upharpoonleft",
        "upharpoonright",
        "downharpoonleft",
        "downharpoonright",
        "leftrightharpoons",
        "rightleftharpoons",
        "leftleftarrows",
        "rightrightarrows",
        "upuparrows",
        "downdownarrows",
        "leftrightarrows",
        "rightleftarrows",
        "looparrowleft",
        "looparrowright",
        "leftarrowtail",
        "rightarrowtail",
        "Lsh",
        "Rsh",
        "Lleftarrow",
        "Rrightarrow",
        "curvearrowleft",
        "curvearrowright",
        "circlearrowleft",
        "circlearrowright",
        "multimap",
        "leftrightsquigarrow",
        "twoheadleftarrow",
        "twoheadrightarrow",
        "rightsquigarrow",
      ],
      configList = config[2].options.box.group[4].items;

    configList.push({
      title: kfEditor.getLang("arrow.title"),
      content: getIconContents(list, require("assets/images/toolbar/char.png")),
    });
  })();

  // 手写体
  (function () {
    var list = [
        {
          title: kfEditor.getLang("handwritten.title"),
          values: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ],
        },
        {
          title: kfEditor.getLang("handwritten.curlicue"),
          values: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ],
        },
        {
          title: kfEditor.getLang("handwritten.doble"),
          values: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ],
        },
        {
          title: kfEditor.getLang("handwritten.roman"),
          values: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ],
        },
        {
          title: kfEditor.getLang("handwritten.others"),
          values: [
            "¡",
            "¢",
            "£",
            "¤",
            "¥",
            "¦",
            "§",
            "¨",
            "©",
            "ª",
            "«",
            "¬",
            "®",
            "¯",
            "°",
            "±",
            "²",
            "³",
            "´",
            "µ",
            "¶",
            "·",
            "¸",
            "¹",
            "º",
            "»",
            "¼",
            "½",
            "¾",
            "¿",
            "À",
            "Á",
            "Â",
            "Ã",
            "Ä",
            "Å",
            "Æ",
            "Ç",
            "È",
            "É",
            "Ê",
            "Ë",
            "Ì",
            "Í",
            "Î",
            "Ï",
            "Ð",
            "Ñ",
            "Ò",
            "Ó",
            "Ô",
            "Õ",
            "Ö",
            "×",
            "Ø",
            "Ù",
            "Ú",
            "Û",
            "Ü",
            "Ý",
            "Þ",
            "ß",
            "à",
            "á",
            "â",
            "ã",
            "ä",
            "å",
            "æ",
            "ç",
            "è",
            "é",
            "ê",
            "ë",
            "ì",
            "í",
            "î",
            "ï",
            "ð",
            "ñ",
            "ò",
            "ó",
            "ô",
            "õ",
            "ö",
            "÷",
            "ø",
            "ù",
            "ú",
            "û",
            "ü",
            "ý",
            "þ",
            "ÿ",
            "Ā",
            "ā",
            "Ă",
            "ă",
            "Ą",
            "ą",
            "Ć",
            "ć",
            "Ĉ",
            "ĉ",
            "Ċ",
            "ċ",
            "Č",
            "č",
            "Ď",
            "ď",
            "Đ",
            "đ",
            "Ē",
            "ē",
            "Ĕ",
            "ĕ",
            "Ė",
            "ė",
            "Ę",
            "ę",
            "Ě",
            "ě",
            "Ĝ",
            "ĝ",
            "Ğ",
            "ğ",
            "Ġ",
            "ġ",
            "Ģ",
            "ģ",
            "Ĥ",
            "ĥ",
            "Ħ",
            "ħ",
            "Ĩ",
            "ĩ",
            "Ī",
            "ī",
            "Ĭ",
            "ĭ",
            "Į",
            "į",
            "İ",
            "ı",
            "Ĳ",
            "ĳ",
            "Ĵ",
            "ĵ",
            "Ķ",
            "ķ",
            "ĸ",
            "Ĺ",
            "ĺ",
            "Ļ",
            "ļ",
            "Ľ",
            "ľ",
            "Ŀ",
            "ŀ",
            "Ł",
            "ł",
            "Ń",
            "ń",
            "Ņ",
            "ņ",
            "Ň",
            "ň",
            "ŉ",
            "Ŋ",
            "ŋ",
            "Ō",
            "ō",
            "Ŏ",
            "ŏ",
            "Ő",
            "ő",
            "Œ",
            "œ",
            "Ŕ",
            "ŕ",
            "Ŗ",
            "ŗ",
            "Ř",
            "ř",
            "Ś",
            "ś",
            "Ŝ",
            "ŝ",
            "Ş",
            "ş",
            "Š",
            "š",
            "Ţ",
            "ţ",
            "Ť",
            "ť",
            "Ŧ",
            "ŧ",
            "Ũ",
            "ũ",
            "Ū",
            "ū",
            "Ŭ",
            "ŭ",
            "Ů",
            "ů",
            "Ű",
            "ű",
            "Ų",
            "ų",
            "Ŵ",
            "ŵ",
            "Ŷ",
            "ŷ",
            "Ÿ",
            "Ź",
            "ź",
            "Ż",
            "ż",
            "Ž",
            "ž",
            "ſ",
            "ƀ",
            "Ɓ",
            "Ƃ",
            "ƃ",
            "Ƅ",
            "ƅ",
            "Ɔ",
            "Ƈ",
            "ƈ",
            "Ɖ",
            "Ɗ",
            "Ƌ",
            "ƌ",
            "ƍ",
            "Ǝ",
            "Ə",
            "Ɛ",
            "Ƒ",
            "ƒ",
            "Ɠ",
            "Ɣ",
            "ƕ",
            "Ɩ",
            "Ɨ",
            "Ƙ",
            "ƙ",
            "ƚ",
            "ƛ",
            "Ɯ",
            "Ɲ",
            "ƞ",
            "Ɵ",
            "Ơ",
            "ơ",
            "Ƣ",
            "ƣ",
            "Ƥ",
            "ƥ",
            "Ʀ",
            "Ƨ",
            "ƨ",
            "Ʃ",
            "ƪ",
            "ƫ",
            "Ƭ",
            "ƭ",
            "Ʈ",
            "Ư",
            "ư",
            "Ʊ",
            "Ʋ",
            "Ƴ",
            "ƴ",
            "Ƶ",
            "ƶ",
            "Ʒ",
            "Ƹ",
            "ƹ",
            "ƺ",
            "ƻ",
            "Ƽ",
            "ƽ",
            "ƾ",
            "ƿ",
            "ǀ",
            "ǁ",
            "ǂ",
            "ǃ",
            "Ǆ",
            "ǅ",
            "ǆ",
            "Ǉ",
            "ǈ",
            "ǉ",
            "Ǌ",
            "ǋ",
            "ǌ",
            "Ǎ",
            "ǎ",
            "Ǐ",
            "ǐ",
            "Ǒ",
            "ǒ",
            "Ǔ",
            "ǔ",
            "Ǖ",
            "ǖ",
            "Ǘ",
            "ǘ",
            "Ǚ",
            "ǚ",
            "Ǜ",
            "ǜ",
            "ǝ",
            "Ǟ",
            "ǟ",
            "Ǡ",
            "ǡ",
            "Ǣ",
            "ǣ",
            "Ǥ",
            "ǥ",
            "Ǧ",
            "ǧ",
            "Ǩ",
            "ǩ",
            "Ǫ",
            "ǫ",
            "Ǭ",
            "ǭ",
            "Ǯ",
            "ǯ",
            "ǰ",
            "Ǳ",
            "ǲ",
            "ǳ",
            "Ǵ",
            "ǵ",
            "Ƕ",
            "Ƿ",
            "Ǹ",
            "ǹ",
            "Ǻ",
            "ǻ",
            "Ǽ",
            "ǽ",
            "Ǿ",
            "ǿ",
            "Ȁ",
            "ȁ",
            "Ȃ",
            "ȃ",
            "Ȅ",
            "ȅ",
            "Ȇ",
            "ȇ",
            "Ȉ",
            "ȉ",
            "Ȋ",
            "ȋ",
            "Ȍ",
            "ȍ",
            "Ȏ",
            "ȏ",
            "Ȑ",
            "ȑ",
            "Ȓ",
            "ȓ",
            "Ȕ",
            "ȕ",
            "Ȗ",
            "ȗ",
            "Ș",
            "ș",
            "Ț",
            "ț",
            "Ȝ",
            "ȝ",
            "Ȟ",
            "ȟ",
            "Ƞ",
            "ȡ",
            "Ȣ",
            "ȣ",
            "Ȥ",
            "ȥ",
            "Ȧ",
            "ȧ",
            "Ȩ",
            "ȩ",
            "Ȫ",
            "ȫ",
            "Ȭ",
            "ȭ",
            "Ȯ",
            "ȯ",
            "Ȱ",
            "ȱ",
            "Ȳ",
            "ȳ",
            "ȴ",
            "ȵ",
            "ȶ",
            "ȷ",
            "ȸ",
            "ȹ",
            "Ⱥ",
            "Ȼ",
            "ȼ",
            "Ƚ",
            "Ⱦ",
            "ȿ",
            "ɀ",
            "Ɂ",
            "ɂ",
            "Ƀ",
            "Ʉ",
            "Ʌ",
            "Ɇ",
            "ɇ",
            "Ɉ",
            "ɉ",
            "Ɋ",
            "ɋ",
            "Ɍ",
            "ɍ",
            "Ɏ",
            "ɏ",
            "ɐ",
            "ɑ",
            "ɒ",
            "ɓ",
            "ɔ",
            "ɕ",
            "ɖ",
            "ɗ",
            "ɘ",
            "ə",
            "ɚ",
            "ɛ",
            "ɜ",
            "ɝ",
            "ɞ",
            "ɟ",
            "ɠ",
            "ɡ",
            "ɢ",
            "ɣ",
            "ɤ",
            "ɥ",
            "ɦ",
            "ɧ",
            "ɨ",
            "ɩ",
            "ɪ",
            "ɫ",
            "ɬ",
            "ɭ",
            "ɮ",
            "ɯ",
            "ɰ",
            "ɱ",
            "ɲ",
            "ɳ",
            "ɴ",
            "ɵ",
            "ɶ",
            "ɷ",
            "ɸ",
            "ɹ",
            "ɺ",
            "ɻ",
            "ɼ",
            "ɽ",
            "ɾ",
            "ɿ",
            "ʀ",
            "ʁ",
            "ʂ",
            "ʃ",
            "ʄ",
            "ʅ",
            "ʆ",
            "ʇ",
            "ʈ",
            "ʉ",
            "ʊ",
            "ʋ",
            "ʌ",
            "ʍ",
            "ʎ",
            "ʏ",
            "ʐ",
            "ʑ",
            "ʒ",
            "ʓ",
            "ʔ",
            "ʕ",
            "ʖ",
            "ʗ",
            "ʘ",
            "ʙ",
            "ʚ",
            "ʛ",
            "ʜ",
            "ʝ",
            "ʞ",
            "ʟ",
            "ʠ",
            "ʡ",
            "ʢ",
            "ʣ",
            "ʤ",
            "ʥ",
            "ʦ",
            "ʧ",
            "ʨ",
            "ʩ",
            "ʪ",
            "ʫ",
            "ʬ",
            "ʭ",
            "ʮ",
            "ʯ",
          ],
        },
      ],
      configList = config[2].options.box.group[5].items;

    kity.Utils.each(list[0].values, function (item, index) {
      list[0].values[index] = "mathcal{" + item + "}";
    });

    kity.Utils.each(list[1].values, function (item, index) {
      list[1].values[index] = "mathfrak{" + item + "}";
    });

    kity.Utils.each(list[2].values, function (item, index) {
      list[2].values[index] = "mathbb{" + item + "}";
    });

    kity.Utils.each(list[3].values, function (item, index) {
      list[3].values[index] = "mathrm{" + item + "}";
    });
    kity.Utils.each(list[4].values, function (item, index) {
      list[4].values[index] = "mathrm{" + item + "}";
    });

    // 手写体
    configList.push({
      title: list[0].title,
      content: getIconContents(
        list[0].values,
        require("assets/images/toolbar/char.png")
      ),
    });

    configList.push({
      title: list[1].title,
      content: getIconContents(
        list[1].values,
        require("assets/images/toolbar/char.png")
      ),
    });

    configList.push({
      title: list[2].title,
      content: getIconContents(
        list[2].values,
        require("assets/images/toolbar/char.png")
      ),
    });

    configList.push({
      title: list[3].title,
      content: getIconContents(
        list[3].values,
        require("assets/images/toolbar/char.png")
      ),
    });

    configList.push({
      title: list[4].title,
      content: getIconContents(
        list[4].values,
        require("assets/images/toolbar/latin.png")
      ),
    });
  })();

  function getIconContents(keySet, imgSrc) {
    var result = [];

    kity.Utils.each(keySet, function (key) {
      if (key.length > 1) {
        key = "\\" + key;
      }

      result.push({
        key: key,
        img: imgSrc,
        pos: CHAR_POSITION[key],
      });
    });

    return result;
  }

  return config;
};
