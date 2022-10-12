(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{285:function(n,t,a){"use strict";a.r(t);var i=a(14),e=Object(i.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[n._v("#")]),n._v(" 命名")]),n._v(" "),t("ul",[t("li",[n._v("类名使用小写字母，以中划线分隔")]),n._v(" "),t("li",[n._v("id采用驼峰式命名")]),n._v(" "),t("li",[n._v("scss中的变量、函数、混合、placeholder采用驼峰式命名")])]),n._v(" "),t("h2",{attrs:{id:"注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[n._v("#")]),n._v(" 注释")]),n._v(" "),t("ul",[t("li",[n._v("注释统一用'/* */'（scss中也不要用'//'）")]),n._v(" "),t("li",[n._v("缩进与下一行代码保持一致；")])]),n._v(" "),t("h2",{attrs:{id:"属性分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#属性分组"}},[n._v("#")]),n._v(" 属性分组")]),n._v(" "),t("p",[n._v("属性应该按照关联性进行分组以保证易读性")]),n._v(" "),t("p",[n._v("推荐：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('[\n    [\n        "display",\n        "visibility",\n        "float",\n        "clear",\n        "overflow",\n        "clip",\n        "zoom"\n    ],\n    [\n        "table-layout",\n        "empty-cells",\n        "caption-side",\n        "border-spacing",\n        "border-collapse",\n        "list-style",\n    ],\n    [\n        "position",\n        "top",\n        "right",\n        "bottom",\n        "left",\n        "z-index"\n    ],\n    [\n        "margin",\n        "margin-top",\n        "margin-right",\n        "margin-bottom",\n        "margin-left",\n        "box-sizing",\n        "border",\n        "border-width",\n        "border-style",\n        "border-color",\n        "border-radius",\n        "border-image",\n        "padding",\n        "width",\n        "min-width",\n        "max-width",\n        "height",\n        "min-height",\n        "max-height"\n    ],\n    [\n        "font",\n        "font-family",\n        "font-size",\n        "font-weight",\n        "font-style",\n        "font-variant",\n        "line-height",\n        "text-align",\n        "vertical-align",\n        "white-space",\n        "text-decoration",\n        "text-indent",\n        "text-justify",\n        "letter-spacing",\n        "word-spacing",\n        "text-outline",\n        "text-transform",\n        "text-wrap",\n        "text-overflow",\n        "text-overflow-ellipsis",\n        "text-overflow-mode",\n        "word-wrap",\n        "word-break"\n    ],\n    [\n        "color",\n        "background",\n        "background-color",\n        "background-image",\n        "background-repeat",\n        "background-attachment",\n        "background-position",\n        "background-clip",\n        "background-origin",\n        "background-size"\n    ],\n    [\n        "outline",\n        "outline-width",\n        "outline-style",\n        "outline-color",\n        "outline-offset",\n        "opacity",\n        "box-shadow",\n        "text-shadow"\n    ],\n    [\n        "transition",\n        "transition-delay",\n        "transition-timing-function",\n        "transition-duration",\n        "transition-property",\n        "transform",\n        "transform-origin",\n        "animation",\n        "animation-name",\n        "animation-duration",\n        "animation-play-state",\n        "animation-timing-function",\n        "animation-delay",\n        "animation-iteration-count",\n        "animation-direction"\n    ],\n    [\n        "content",\n        "quotes",\n        "counter-reset",\n        "counter-increment",\n        "resize",\n        "cursor",\n        "tab-size",\n        "hyphens",\n        "pointer-events"\n    ]\n]\n')])])]),t("h2",{attrs:{id:"简写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简写"}},[n._v("#")]),n._v(" 简写")]),n._v(" "),t("p",[n._v("并不对属性简写做约束，但分开书写样式，通过 scss 的继承、混入等功能特性来加快工作效率，而非一味简写。")]),n._v(" "),t("p",[n._v("常见的属性简写：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("margin\npadding\nbackground\nfont （不常见）\ntranstion\nanimation\n")])])]),t("h2",{attrs:{id:"媒体查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询"}},[n._v("#")]),n._v(" 媒体查询")]),n._v(" "),t("ul",[t("li",[n._v("复杂度低\n尽量将媒体查询的样式规则写在原规则附近，避免过度拆分和放到文档底部。")]),n._v(" "),t("li",[n._v("复杂度高\n独立文件维护，同时将将原样式完全拷贝，在不需要更改的位置以 {} 代替，这样保留样式的结构关联性，方便理解。")])]),n._v(" "),t("h2",{attrs:{id:"scss-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scss-相关"}},[n._v("#")]),n._v(" SCSS 相关")]),n._v(" "),t("p",[n._v("计划在未来中设计一套全局变量环境，但在这之前应遵循基本的使用规范：")]),n._v(" "),t("ul",[t("li",[n._v("变量：重复性数值，尽量用变量代替")]),n._v(" "),t("li",[n._v("嵌套：嵌套规则不宜过长，可按照功能模块进行结构划分")]),n._v(" "),t("li",[n._v("计算：在复杂的计算逻辑中，应做出详细的注释说明")])])])}),[],!1,null,null,null);t.default=e.exports}}]);