import chartTest from "./chart";

// 为组件提供 install 安装方法，供按需引入
chartTest.install = function (Vue) {
    Vue.component(chartTest.name, chartTest)
};
// 默认导出组件
export default chartTest
