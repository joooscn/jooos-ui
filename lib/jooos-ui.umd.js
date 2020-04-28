(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jooos-ui"] = factory();
	else
		root["jooos-ui"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e62109a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chart/chart.vue?vue&type=template&id=e6933500&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(" "+_vm._s(_vm.name)+" ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/chart/chart.vue?vue&type=template&id=e6933500&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/chart/chart.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var chartvue_type_script_lang_js_ = ({
  name: "chartTest",
  data() {
    return {
      name: "我是chartTest组件223"
    };
  }
});

// CONCATENATED MODULE: ./packages/chart/chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var chart_chartvue_type_script_lang_js_ = (chartvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/chart/chart.vue





/* normalize component */

var component = normalizeComponent(
  chart_chartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var chart = (component.exports);
// CONCATENATED MODULE: ./packages/chart/index.js


// 为组件提供 install 安装方法，供按需引入
chart.install = function (Vue) {
    Vue.component(chart.name, chart)
};
// 默认导出组件
/* harmony default export */ var packages_chart = (chart);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e62109a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/user/user.vue?vue&type=template&id=2a08b086&
var uservue_type_template_id_2a08b086_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(" "+_vm._s(_vm.name)+" ")])}
var uservue_type_template_id_2a08b086_staticRenderFns = []


// CONCATENATED MODULE: ./packages/user/user.vue?vue&type=template&id=2a08b086&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/user/user.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var uservue_type_script_lang_js_ = ({
  name: "userTest",
  data() {
    return {
      name: "我是user组件223"
    };
  }
});

// CONCATENATED MODULE: ./packages/user/user.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_uservue_type_script_lang_js_ = (uservue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/user/user.vue





/* normalize component */

var user_component = normalizeComponent(
  user_uservue_type_script_lang_js_,
  uservue_type_template_id_2a08b086_render,
  uservue_type_template_id_2a08b086_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var user = (user_component.exports);
// CONCATENATED MODULE: ./packages/user/index.js


// 为组件提供 install 安装方法，供按需引入
user.install = function (Vue) {
    Vue.component(user.name, user)
};
// 默认导出组件
/* harmony default export */ var packages_user = (user);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e62109a6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/page/page.vue?vue&type=template&id=3846b942&
var pagevue_type_template_id_3846b942_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(" "+_vm._s(_vm.name)+" "),_c('Page',{class:_vm.className,attrs:{"current":_vm.current,"total":_vm.total,"pageSize":_vm.pageSize,"pageSizeOpts":_vm.pageSizeOpts,"placement":_vm.placement,"size":_vm.size,"simple":_vm.simple,"showTotal":_vm.showTotal,"showElevator":_vm.showElevator,"showSizer":_vm.showSizer,"styles":_vm.styles,"transfer":_vm.transfer,"prevText":_vm.prevText,"nextText":_vm.nextText,"disabled":_vm.disabled},on:{"on-change":_vm.onPage,"on-page-size-change":_vm.onPageSize}})],1)}
var pagevue_type_template_id_3846b942_staticRenderFns = []


// CONCATENATED MODULE: ./packages/page/page.vue?vue&type=template&id=3846b942&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/page/page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var pagevue_type_script_lang_js_ = ({
  name: "JUpage",
  props: {
    // 当前页码
    current: {
      type: Number
    },
    // 数据总数
    total: {
      type: Number
    },
    // 每页条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 每页条数切换配置
    pageSizeOpts: {
      type: Array,
      default: () => {
        [10, 20, 30, 50];
      }
    },
    // 条数切换弹窗的展开方向，可选值为 bottom 和 top
    placement: {
      type: String,
      default: "bottom"
    },
    // 可选值为small（迷你版）或不填（默认）
    size: {
      type: String
    },
    // 简洁版
    simple: {
      type: Boolean,
      default: false
    },
    // 显示总数
    showTotal: {
      type: Boolean,
      default: false
    },
    // 显示电梯，可以快速切换到某一页
    showElevator: {
      type: Boolean,
      default: false
    },
    // 显示分页，用来改变page-size
    showSizer: {
      type: Boolean,
      default: false
    },
    // 自定义 class 名称
    className: {
      type: String
    },
    // 自定义 style 样式
    styles: {
      type: Object
    },
    // 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
    transfer: {
      type: Boolean,
      default: false
    },
    // 替代图标显示的上一页文字
    prevText: {
      type: String
    },
    // 替代图标显示的下一页文字
    nextText: {
      type: String
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
  },
  /**
   * Events
   * @on-page 返回值 {Int} ：当前页码
   * @on-page-size 返回值 {Int} ：每页条数
   */
  data() {
    return {
      name: "我是分页组件"
    };
  },
  computed: {},
  methods: {
    localStorage(typeName, pageAsPageSize) {
      // 存储页码 每页条数
      console.log(this)
      let { name } = this.$route;
      let appName = `TSF_${typeName}_`;
      if (name) localStorage.setItem(`${appName + name}`, pageAsPageSize);
    },
    onPage(page) {
      // 页码
      this.localStorage("page", page);
      this.$emit("on-page", { page });
    },
    onPageSize(size) {
      // 每页条数
      this.localStorage("pageSize", size);
      this.$emit("on-page", { size });
    }
  },
  mounted() {
    console.log(this.$route);
  },
  watch: {
    page() {
      this.localStorage("page", this.page);
    },
    size() {
      this.localStorage("page", this.size);
    }
  }
});

// CONCATENATED MODULE: ./packages/page/page.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_pagevue_type_script_lang_js_ = (pagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/page/page.vue





/* normalize component */

var page_component = normalizeComponent(
  page_pagevue_type_script_lang_js_,
  pagevue_type_template_id_3846b942_render,
  pagevue_type_template_id_3846b942_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var page = (page_component.exports);
// CONCATENATED MODULE: ./packages/page/index.js


// 为组件提供 install 安装方法，供按需引入
page.install = function (Vue) {
    Vue.component(page.name, page)
};
// 默认导出组件
/* harmony default export */ var packages_page = (page);

// CONCATENATED MODULE: ./packages/index.js





// 存储组件列表
const components = [packages_chart, packages_user, packages_page];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return;
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
/* harmony default export */ var packages_0 = ({
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    ...components
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});