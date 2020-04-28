import JUI4page from "./page";

// 为组件提供 install 安装方法，供按需引入
JUI4page.install = function (Vue) {
    Vue.component(JUI4page.name, JUI4page)
};
// 默认导出组件
export default JUI4page
