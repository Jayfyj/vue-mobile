(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.3@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/views/demo/welfareLotteryPage/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.3@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./src/views/demo/welfareLotteryPage/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ \"./node_modules/_@vue_composition-api@1.4.9@@vue/composition-api/dist/vue-composition-api.mjs\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router */ \"./src/router/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'welfareLotteryPage',\n  setup: function setup() {\n    //获取路由\n    var Route = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__[\"reactive\"])({\n      value: _router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }); //彩票球类型\n\n    var colorBoxTytpeList = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__[\"reactive\"])({\n      value: [{\n        icon: 'https://img1.baidu.com/it/u=4121475027,4171260549&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=445',\n        title: '快乐8',\n        index: 0,\n        text: '',\n        bgcolor: '#FEF5F6',\n        URLName: 'welfareLotteryPageHappyBox'\n      }, {\n        icon: 'https://img0.baidu.com/it/u=3451598159,1942473715&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',\n        title: '双色球',\n        index: 1,\n        text: '',\n        bgcolor: '#FEF8EF',\n        URLName: 'welfareLotteryPageDoubleBox'\n      }, {\n        icon: 'https://img0.baidu.com/it/u=3635527327,244980412&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',\n        title: '3D',\n        index: 2,\n        text: '',\n        bgcolor: '#FEFCEF',\n        URLName: 'welfareLotteryPageThreeDBox'\n      }]\n    }); //跳转页面\n\n    function goPage(index, name) {\n      // if (index == 0) {\n      //   Route.value.push({ name: 'welfareLotteryPageHappyBox' })\n      // } else if (index == 1) {\n      //   Route.value.push({ name: 'welfareLotteryPageDoubleBox' })\n      // }\n      // else if (index == 2) {\n      //   Route.value.push({ name: 'welfareLotteryPage3DBox' })\n      // }\n      Route.value.push({\n        name: name\n      });\n    }\n\n    return {\n      colorBoxTytpeList: colorBoxTytpeList,\n      goPage: goPage\n    };\n  }\n});\n\n//# sourceURL=webpack:///./src/views/demo/welfareLotteryPage/index.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.3@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"70d98aec-vue-loader-template\"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/views/demo/welfareLotteryPage/index.vue?vue&type=template&id=83fc685e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"70d98aec-vue-loader-template"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./src/views/demo/welfareLotteryPage/index.vue?vue&type=template&id=83fc685e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"LayOutIndex\", { attrs: { titleShow: \"\", back: \"\" } }, [\n    _c(\n      \"div\",\n      { staticClass: \"index\" },\n      _vm._l(_vm.colorBoxTytpeList.value, function (item, index) {\n        return _c(\n          \"div\",\n          {\n            key: index,\n            style: { background: item.bgcolor },\n            on: {\n              click: function ($event) {\n                return _vm.goPage(item.index, item.URLName)\n              },\n            },\n          },\n          [\n            _c(\"img\", { attrs: { src: item.icon } }),\n            _c(\"div\", { staticClass: \"content\" }, [\n              _c(\"span\", { staticClass: \"title\" }, [\n                _vm._v(_vm._s(item.title)),\n              ]),\n            ]),\n          ]\n        )\n      }),\n      0\n    ),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/demo/welfareLotteryPage/index.vue?./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2270d98aec-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.9.0@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/views/demo/welfareLotteryPage/index.vue?vue&type=style&index=0&id=83fc685e&scoped=scoped&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.9.0@mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--9-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./src/views/demo/welfareLotteryPage/index.vue?vue&type=style&index=0&id=83fc685e&scoped=scoped&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/views/demo/welfareLotteryPage/index.vue?./node_modules/_mini-css-extract-plugin@0.9.0@mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--9-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/demo/welfareLotteryPage/index.vue":
/*!*****************************************************!*\
  !*** ./src/views/demo/welfareLotteryPage/index.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_83fc685e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=83fc685e&scoped=true& */ \"./src/views/demo/welfareLotteryPage/index.vue?vue&type=template&id=83fc685e&scoped=true&\");\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ \"./src/views/demo/welfareLotteryPage/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_83fc685e_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=83fc685e&scoped=scoped&lang=scss& */ \"./src/views/demo/welfareLotteryPage/index.vue?vue&type=style&index=0&id=83fc685e&scoped=scoped&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_15_9_8_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.8@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_8_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_83fc685e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_83fc685e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"83fc685e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/demo/welfareLotteryPage/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/demo/welfareLotteryPage/index.vue?");

/***/ }),

/***/ "./src/views/demo/welfareLotteryPage/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/views/demo/welfareLotteryPage/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/_babel-loader@8.2.3@babel-loader/lib!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.3@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/views/demo/welfareLotteryPage/index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_3_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/demo/welfareLotteryPage/index.vue?");

/***/ }),

/***/ "./src/views/demo/welfareLotteryPage/index.vue?vue&type=style&index=0&id=83fc685e&scoped=scoped&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/demo/welfareLotteryPage/index.vue?vue&type=style&index=0&id=83fc685e&scoped=scoped&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83fc685e_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_mini-css-extract-plugin@0.9.0@mini-css-extract-plugin/dist/loader.js??ref--9-oneOf-1-0!../../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=83fc685e&scoped=scoped&lang=scss& */ \"./node_modules/_mini-css-extract-plugin@0.9.0@mini-css-extract-plugin/dist/loader.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/views/demo/welfareLotteryPage/index.vue?vue&type=style&index=0&id=83fc685e&scoped=scoped&lang=scss&\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83fc685e_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83fc685e_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83fc685e_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_83fc685e_scoped_scoped_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/demo/welfareLotteryPage/index.vue?");

/***/ }),

/***/ "./src/views/demo/welfareLotteryPage/index.vue?vue&type=template&id=83fc685e&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/views/demo/welfareLotteryPage/index.vue?vue&type=template&id=83fc685e&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_70d98aec_vue_loader_template_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_83fc685e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"70d98aec-vue-loader-template\"}!../../../../node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/_vue-loader@15.9.8@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=83fc685e&scoped=true& */ \"./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"70d98aec-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.8@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.8@vue-loader/lib/index.js?!./src/views/demo/welfareLotteryPage/index.vue?vue&type=template&id=83fc685e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_70d98aec_vue_loader_template_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_83fc685e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_70d98aec_vue_loader_template_node_modules_vue_loader_15_9_8_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_9_8_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_83fc685e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/demo/welfareLotteryPage/index.vue?");

/***/ })

}]);