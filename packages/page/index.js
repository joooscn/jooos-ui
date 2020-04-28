import JUpage from "./page";

// 为组件提供 install 安装方法，供按需引入
JUpage.install = function (Vue) {
    Vue.component(JUpage.name, JUpage)
};
// 默认导出组件
export default JUpage
